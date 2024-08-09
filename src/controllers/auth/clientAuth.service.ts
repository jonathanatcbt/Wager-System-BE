import { ApiClient } from '../../models/apiClient';
import { IApiClient, IApiClientDocument } from '../../interfaces/IApiClient';

export class clientAuthService {
  public async createNewClient(apiClientPayload: Partial<IApiClient>): Promise<void> {
    const apiClient = new ApiClient(apiClientPayload);
    await apiClient.save();
  }

  public async findClientByEmail(client_email: string): Promise<IApiClientDocument | null> {
    return ApiClient.findOne({ client_email });
  }
  public async findClientById(client_id: string): Promise<IApiClientDocument | null> {
    return ApiClient.findById(client_id);
  }

  public async findClientByResetToken(reset_password_token: string): Promise<IApiClientDocument | null> {
    return ApiClient.findOne({ reset_password_token });
  }
  public async updateClientApiKey(client_id: string, api_key: string): Promise<IApiClientDocument | null> {
    return ApiClient.findByIdAndUpdate(client_id, { api_key, api_key_created_at: new Date() }, { new: true });
  }
}
