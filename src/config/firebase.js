import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD2p0GTxSHe4_rT1n64k4STmUITomEzMvs",
  authDomain: "tiktok---jornada-ba7c0.firebaseapp.com",
  projectId: "tiktok---jornada-ba7c0",
  storageBucket: "tiktok---jornada-ba7c0.appspot.com",
  messagingSenderId: "761951934691",
  appId: "1:761951934691:web:12e165aff5cb2314cf4dd6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;