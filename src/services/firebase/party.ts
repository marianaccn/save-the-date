import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
} from 'firebase/firestore';
import { fireStore } from './index';

const partyColection = collection(fireStore, 'party');

class Party {
  static CreateParty = async (party: any) => {
    return await addDoc(partyColection, party);
  };

  static ReadParty = async (id: string) => {
    const partyDoc = doc(fireStore, `party/${id}`);
    const snap = await getDoc(partyDoc);
    if (snap.exists()) {
      return snap.data();
    }
    throw new Error('Usuario nao encontrado');
  };

  static UpdateParty = async (party: any) => {
    const partyDoc = doc(fireStore, `party/${party.id}`);
    return await setDoc(partyDoc, party);
  };

  static DeleteParty = async (party: any) => {
    const partyDoc = doc(fireStore, `Party/${party.id}`);
    return await deleteDoc(partyDoc);
  };

  static ListPartys = async () => {
    const snaps = await getDocs(query(partyColection));
    return snaps.forEach((snap) => snap.data());
  };
}

export default Party;
