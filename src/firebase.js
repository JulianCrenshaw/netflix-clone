
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhQF5yNTASIxpK1mdn5i3uW-aLAXTCdrU",
  authDomain: "netflix-clone-1188c.firebaseapp.com",
  projectId: "netflix-clone-1188c",
  storageBucket: "netflix-clone-1188c.firebasestorage.app",
  messagingSenderId: "640770789790",
  appId: "1:640770789790:web:6de47456585022c9e0068f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore