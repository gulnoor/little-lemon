import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJ7CB9H22r7OdH-fLp5FB97lmxhuhuCk",
  authDomain: "little-lemmon.firebaseapp.com",
  projectId: "little-lemmon",
  storageBucket: "little-lemmon.appspot.com",
  messagingSenderId: "114356758336",
  appId: "1:114356758336:web:6510c29377520e25fabca5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("wtf");

const littleLemon_db = getFirestore(app);

export const createMenuEntry = async (menu) => {
  for (const item of menu) {
    const ref = await addDoc(collection(littleLemon_db, "Menu"), item);
    console.log(ref);
  }
};

export const loadMenu = async () => {
  const menu = [];
  const data = await getDocs(collection(littleLemon_db, "Menu"));
  data.forEach((item) => {
    menu.push(item.data());
  });
  return menu;
};
