import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyMz9BcLUaIZZilD_czBsUs7414tdTPOs",
  authDomain: "fir-react-vite-auth.firebaseapp.com",
  projectId: "fir-react-vite-auth",
  storageBucket: "fir-react-vite-auth.appspot.com",
  messagingSenderId: "558272937635",
  appId: "1:558272937635:web:69db1b124583e25ea68916",
};

export const app = initializeApp(firebaseConfig);
