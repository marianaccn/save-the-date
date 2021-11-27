import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  limit,
} from 'firebase/firestore';
import { fireStore } from './index';

const userColection = collection(fireStore, 'user');

class User {
  static CreateUser = async (user: any) => {
    return await addDoc(userColection, user);
  };

  static ReadUser = async (id: string) => {
    const userDoc = doc(fireStore, `user/${id}`);
    const snap = await getDoc(userDoc);
    if (!snap.exists()) throw new Error('Usuario nao encontrado');
    return snap.data();
  };

  static UpdateUser = async (user: any) => {
    const userDoc = doc(fireStore, `user/${user.id}`);
    return await setDoc(userDoc, user);
  };

  static DeleteUser = async (user: any) => {
    const userDoc = doc(fireStore, `user/${user.id}`);
    return await deleteDoc(userDoc);
  };

  static ListUsers = async (params?: any[]) => {
    const data: any[] = [];
    const snaps = await getDocs(query(userColection));
    snaps.forEach((snap) => data.push(snap.data()));
    return data;
  };

  static GetUserByEmail = async (email: string) => {
    let data: any = null;
    const snaps = await getDocs(
      query(userColection, where('email', '==', email), limit(1))
    );
    snaps.forEach((snap) => (data = snap.data()));
    return data;
  };
}

export default User;
