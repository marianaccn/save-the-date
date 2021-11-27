import { env } from '../../constants';
import { fetchInit } from './config';
import { IPartyRequest } from '../interfaces/request/party';
import { IPartyResponse } from '../interfaces/response/party';
import PartyDB from '../firebase/party';

export const DeletePartyById = async (id: string): Promise<IPartyResponse> => {
  const init = fetchInit('DELETE');
  const response = await fetch(
    `${env.apiUrl}/${env.version}/party/${id}`,
    init
  );
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const GetPartyById = async (id: string): Promise<IPartyResponse> => {
  const init = fetchInit('GET');
  const response = await fetch(
    `${env.apiUrl}/${env.version}/party/${id}`,
    init
  );
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const GetPartyList = async () => {
  // const init = fetchInit('GET');
  // const response = await fetch(`${env.apiUrl}/${env.version}/party/list`, init);
  // const parsedResponse = await response.json();
  // return parsedResponse;
  return await PartyDB.ListPartys();
};

export const CreateParty = async (party: any) => {
  // const init = fetchInit('PUT', party);
  // const response = await fetch(`${env.apiUrl}/${env.version}/party`, init);
  // const parsedResponse = await response.json();
  // return parsedResponse;
  return await PartyDB.CreateParty(party);
};
