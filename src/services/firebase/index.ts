// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBivQ5mJw6DYvZw2zZ3XNJEuP15b7OsvRw',
  authDomain: 'savethedate-ab358.firebaseapp.com',
  projectId: 'savethedate-ab358',
  storageBucket: 'savethedate-ab358.appspot.com',
  messagingSenderId: '919511099655',
  appId: '1:919511099655:web:f8ce01e114351205be7da2',
});

export const fireStore = getFirestore();
