import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { clientAuthService } from './clientAuth.service';
import { IApiClient } from '../../interfaces/IApiClient';
import { JWT_SECRET } from '../../config/config';
import { resetPasswordMail } from '../../services/mail';

export class ClientAuthController {
  private clientService;
  constructor() {
    this.clientService = new clientAuthService();
  }
  public clientSignUp = async (req: Request, res: Response) => {
    try {
      const { client_name, client_email, client_phone, password } = req.body;
      if (!client_name || !client_email || !client_phone) {
        return res.status(403).json({ status: false, message: 'Missing client name, email, or phone' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const apiClientPayload: IApiClient = {
        client_name,
        client_email,
        client_phone,
        password: hashedPassword,
        is_email_confirmed: false,
        is_phone_confirmed: false,
        api_key: crypto.randomBytes(32).toString('hex'),
        api_key_created_at: new Date(),
      };

      await this.clientService.createNewClient(apiClientPayload);

      res.status(200).json({
        status: true,
        message: 'Successfully signed up',
      });
    } catch (err: Error | any) {
      console.log(err);
      res.status(400).json({
        status: false,
        message: err.message,
      });
    }
  };
  public clientLogin = async (req: Request, res: Response) => {
    try {
      const { client_email, password } = req.body;
      if (!client_email || !password) {
        return res.status(403).json({ status: false, message: 'Missing email or password' });
      }

      const client = await this.clientService.findClientByEmail(client_email);
      if (!client) {
        return res.status(400).json({ status: false, message: 'Invalid email or password' });
      }

      const isPasswordValid = await bcrypt.compare(password, client.password);
      if (!isPasswordValid) {
        return res.status(400).json({ status: false, message: 'Invalid email or password' });
      }

      const token = jwt.sign({ client_id: client._id }, JWT_SECRET, {
        expiresIn: '1d',
      });

      res.status(200).json({
        status: true,
        message: 'Login successful',
        token,
      });
    } catch (err: Error | any) {
      console.log(err);
      res.status(400).json({
        status: false,
        message: err.message,
      });
    }
  };
  public requestPasswordReset = async (req: Request, res: Response) => {
    try {
      const { client_email } = req.body;
      if (!client_email) {
        return res.status(403).json({ status: false, message: 'Missing email' });
      }

      const client = await this.clientService.findClientByEmail(client_email.trim().toLowerCase());
      if (!client) {
        return res.status(400).json({ status: false, message: 'Email not found' });
      }

      const resetToken = crypto.randomBytes(32).toString('hex');
      const resetTokenExpiry = Date.now() + 3600000; // 1 hour

      client.reset_password_token = resetToken;
      client.reset_password_expires = new Date(resetTokenExpiry);
      await client.save();
      // Send email with the reset token (use a real email service in production)
      await resetPasswordMail(client_email, resetToken);

      res.status(200).json({
        status: true,
        message: 'Password reset email sent',
      });
    } catch (err: Error | any) {
      console.log(err);
      res.status(400).json({
        status: false,
        message: err.message,
      });
    }
  };
  public resetPassword = async (req: Request, res: Response) => {
    try {
      const { token, newPassword } = req.body;
      if (!token || !newPassword) {
        return res.status(403).json({ status: false, message: 'Missing token or new password' });
      }

      const client = await this.clientService.findClientByResetToken(token);
      if (!client || !client.reset_password_expires || client.reset_password_expires < new Date()) {
        return res.status(400).json({ status: false, message: 'Invalid or expired token' });
      }

      if (!client) {
        return res.status(400).json({ status: false, message: 'Invalid or expired token' });
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      client.password = hashedPassword;
      client.reset_password_token = undefined;
      client.reset_password_expires = undefined;
      await client.save();

      res.status(200).json({
        status: true,
        message: 'Password reset successful',
      });
    } catch (err: Error | any) {
      console.log(err);
      res.status(400).json({
        status: false,
        message: err.message,
      });
    }
  };
  public requestNewAPIKey = async (req: Request, res: Response) => {
    try {
      const { client_id } = req.user!;
      const client = await this.clientService.findClientById(client_id);
      if (!client) {
        return res.status(400).json({ status: false, message: 'Invalid client id' });
      }
      const apiKey = crypto.randomBytes(32).toString('hex');
      await this.clientService.updateClientApiKey(client_id, apiKey);
      res.status(200).json({
        status: true,
        apiKey,
        message: 'API key requested',
      })

    } catch (err: Error | any) {
      console.log(err)
      res.status(400).json({
        status: false,
        message: err.message,
      });
    }
  }
}
