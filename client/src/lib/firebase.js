import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: "reactchat-d260b.firebaseapp.com",
  projectId: "reactchat-d260b",
  storageBucket: "reactchat-d260b.appspot.com",
  messagingSenderId: "827773217743",
  appId: "1:827773217743:web:027cda03f3c9eb1a5440ba"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();