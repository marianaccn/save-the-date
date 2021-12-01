import { env } from '../../constants';
import { fetchInit, setToken } from './config';
import { ILoginRequest } from '../interfaces/request/login';
import { IUserDataRequest } from '../interfaces/request/userData';
import { INewPasswordRequest } from '../interfaces/request/newPassword';
// import { IResetPasswordRequest } from '../interfaces/request/resetPassword';
import { IUserDataResponse } from '../interfaces/response/userData';
import UserDB from '../firebase/user';

export const GetUserByEmail = async (email: string) => {
  // const init = fetchInit('GET');
  // const response = await fetch(
  //   `${env.apiUrl}/${env.version}/user/email/${email}`,
  //   init
  // );
  // const user = await response.json();
  // if (!user) throw new Error('Credenciais invalido');
  // setToken(JSON.stringify(user));
  // return user;
  return await UserDB.GetUserByEmail(email);
};

// export const GetUserList = async (): Promise<IUserDataResponse[]> => {
//   const init = fetchInit('GET');
//   const response = await fetch(`${env.apiUrl}/${env.version}/user/list`, init);
//   const parsedResponse = await response.json();
//   return parsedResponse;
// };

export const Login = async (credentials: ILoginRequest) => {
  // const init = fetchInit('POST', credentials);
  // const response = await fetch(`${env.apiUrl}/${env.version}/user/login`, init);
  // const parsedResponse = await response.json();
  // if (!parsedResponse.token) throw new Error('Credenciais invalido');
  // setToken(parsedResponse.token);
  // await GetUserByEmail(credentials.email);
  const user = await UserDB.GetUserByEmail(credentials.email);
  if (!user || user.password !== credentials.password)
    throw new Error('Credenciais invalidas');
  const token = JSON.stringify(user);
  setToken(token);
};

// export const DeleteUserByEmail = async (email: string) => {
//   const init = fetchInit('GET');
//   await fetch(`${env.apiUrl}/${env.version}/user/email/${email}`, init);
// };

export const CreateUser = async (profile: IUserDataRequest) => {
  // const init = fetchInit('POST', profile);
  // await fetch(`${env.apiUrl}/${env.version}/user/`, init);
  const user = await UserDB.GetUserByEmail(profile.email);
  if (user) throw new Error('Email ja cadastrado');
  await UserDB.CreateUser(profile);
};

export const EditUser = async (profile: any) => {
  // const init = fetchInit('POST', profile);
  // await fetch(`${env.apiUrl}/${env.version}/user/`, init);
  const user = await UserDB.ReadUser(profile.id);
  if (!user) throw new Error('Usuario nao encontrado');
  await UserDB.UpdateUser(profile);
};

export const ResetPassword = async (email: string) => {
  // const init = fetchInit('POST', { email });
  // await fetch(`${env.apiUrl}/${env.version}/user/passwordReset`, init);
};

export const NewPassword = async (credentials: INewPasswordRequest) => {
  // const init = fetchInit('PUT', credentials);
  // await fetch(`${env.apiUrl}/${env.version}/user/newPassword`, init);
};
