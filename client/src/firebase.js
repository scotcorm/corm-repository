// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'corm-repository.firebaseapp.com',
  projectId: 'corm-repository',
  storageBucket: 'corm-repository.appspot.com',
  messagingSenderId: '190471277585',
  appId: '1:190471277585:web:a58e6b41bc8610fb62b5b0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
