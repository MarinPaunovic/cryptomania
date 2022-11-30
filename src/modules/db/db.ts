import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALa8upUgWa5dmCpSmHsOzuAahvp7DL410',
  authDomain: 'cryptomania-8dcec.firebaseapp.com',
  projectId: 'cryptomania-8dcec',
  storageBucket: 'cryptomania-8dcec.appspot.com',
  messagingSenderId: '701543916447',
  appId: '1:701543916447:web:3ccc1d99aba34673f753aa',
  measurementId: 'G-FCRKXYZKZ9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = async () => {
  await signInWithPopup(auth, provider);
};
