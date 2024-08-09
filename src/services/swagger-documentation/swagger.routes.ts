import requestNewApiKey from "./docs/apiKey/clientApiKey.doc";
import authDoc from "./docs/auth/auth.doc";
import { requestPasswordReset, resetPassword } from "./docs/auth/authPasswordReset.doc";
import login from "./docs/auth/clientLogin.doc";
import { avatarDoc } from "./docs/avatar/auth.doc";
import { getUserDetailsByUserName, loginUser, registerNewUser, requestResetPassword, resetUserPassword, sendOTP, updatePassword, verifyOTP } from "./docs/userAuth/userAuth.doc";

export const paths = {
  "/api/client/signup": {
    post: authDoc
  },
  "/api/client/login": {
    post: login
  },
  "/api/client/request-reset-pass": {
    post: requestPasswordReset
  },
  "/api/client/reset-pass": {
    post: resetPassword
  },
  "/api/client-key/request": {
    post: requestNewApiKey
  },
  "/api/user/signup": {
    post: registerNewUser
  },
  "/api/user/login": {
    post: loginUser
  },
  "/api/user/request-reset-pass": {
    post: requestResetPassword
  },
  "/api/user/reset-pass": {
    post: resetUserPassword
  },
  "/api/user/otp": {
    post: sendOTP
  },
  "/api/user/verify-otp": {
    post: verifyOTP
  },
  "/api/user/update-password": {
    post: updatePassword
  },
  "/api/user/get-user/{userName}":{
    get:getUserDetailsByUserName
  },
  
  ...avatarDoc
};
