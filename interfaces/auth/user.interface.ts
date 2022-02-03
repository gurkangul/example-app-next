export interface ILoginUser {
  password: string;
  email: string;
}

export interface ILoginUserResponse {
  status?: string;
  email?: string;
  password?: string;
  token?: string;
}
