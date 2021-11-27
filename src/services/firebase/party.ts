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
    console.log(id);
    const partyDoc = doc(fireStore, `party/${id}`);
    const snap = await getDoc(partyDoc);
    if (snap.exists()) {
      return snap.data();
    }
    throw new Error('Festa nao encontrada');
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
    const data: any[] = [];
    const snaps = await getDocs(query(partyColection));
    snaps.forEach((snap) => {
      const content = snap.data();
      const id = snap.id;
      data.push({ id, ...content });
    });
    return data;
  };
}

export default Party;
