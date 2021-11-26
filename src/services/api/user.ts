import { env } from '../../constants';
import { fetchInit, setToken, setUser } from './config';
import { ILoginRequest } from '../interfaces/request/login';
import { IUserDataRequest } from '../interfaces/request/userData';
import { INewPasswordRequest } from '../interfaces/request/newPassword';
import { IResetPasswordRequest } from '../interfaces/request/resetPassword';
import { IUserDataResponse } from '../interfaces/response/userData';

export const GetUserByEmail = async (
  email: string
): Promise<IUserDataResponse> => {
  const init = fetchInit('GET');
  const response = await fetch(
    `${env.apiUrl}/${env.version}/user/email/${email}`,
    init
  );
  const user = await response.json();
  if (!user) throw new Error('Credenciais invalido');
  setUser(JSON.stringify(user));
  return user;
};

export const GetUserList = async (): Promise<IUserDataResponse[]> => {
  const init = fetchInit('GET');
  const response = await fetch(`${env.apiUrl}/${env.version}/user/list`, init);
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const Login = async (credentials: ILoginRequest) => {
  const init = fetchInit('POST', credentials);
  const response = await fetch(`${env.apiUrl}/${env.version}/user/login`, init);
  const parsedResponse = await response.json();
  if (!parsedResponse.token) throw new Error('Credenciais invalido');
  setToken(parsedResponse.token);
  await GetUserByEmail(credentials.email);
  // const users = JSON.parse(sessionStorage.getItem('users') || '[]');
  // const profile = users.filter(
  //   (user: any) =>
  //     user.email === credentials.email && user.password === credentials.password
  // )[0];
  // if (!profile) throw new Error('Credenciais invalidas');
  // const token = JSON.stringify(profile);
  // setToken(token);
};

export const DeleteUserByEmail = async (email: string) => {
  const init = fetchInit('GET');
  await fetch(`${env.apiUrl}/${env.version}/user/email/${email}`, init);
};

export const CreateUser = async (profile: IUserDataRequest) => {
  const init = fetchInit('POST', profile);
  await fetch(`${env.apiUrl}/${env.version}/user/`, init);
  // const users = JSON.parse(sessionStorage.getItem('users') || '[]');
  // const user = users.filter((user: any) => user.email === profile.email)[0];
  // if (user) throw new Error('Email ja cadastrado');
  // sessionStorage.setItem('users', JSON.stringify([...users, profile]));
};

export const ResetPassword = async (email: string) => {
  const init = fetchInit('POST', { email });
  await fetch(`${env.apiUrl}/${env.version}/user/passwordReset`, init);
};

export const NewPassword = async (credentials: INewPasswordRequest) => {
  const init = fetchInit('PUT', credentials);
  await fetch(`${env.apiUrl}/${env.version}/user/newPassword`, init);
};
