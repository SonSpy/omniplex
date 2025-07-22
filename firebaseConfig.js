import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCVv8oLt3JiTBhpHUHEtYSUbjVy_OK-Ztc",
  authDomain: "omniplex-d4b44.firebaseapp.com",
  projectId: "omniplex-d4b44",
  storageBucket: "omniplex-d4b44.firebasestorage.app",
  messagingSenderId: "434508679901",
  appId: "1:434508679901:web:35dd844b6c37f865416934"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
