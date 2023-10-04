import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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

export const addMenuItemToDatabase = async (menu) => {
  for (const item of menu) {
    const docRef = doc(littleLemon_db, "Menu", item.name);
    const snap = await getDoc(docRef);
    if (!snap.exists()) {
      setDoc(docRef, item)
        .then((response) => {
          console.log("created successfully with name" + response.data().name);
        })
        .catch(() => console.log("error creating doc"));
    } else {
      console.log("item already exists");
    }
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

const auth = getAuth();
const googleOAuth = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleOAuth);

export const addUserToDatabase = async (userCreds) => {
  const userDoc = doc(littleLemon_db, "User", userCreds.uid);
  const userSnap = await getDoc(userDoc);

  if (!userSnap.exists()) {
    setDoc(userDoc, {
      name: userCreds.displayName,
      email: userCreds.email,
      createdAt: new Date(),
    })
      .then((user) => {
        console.log("created user successfully with name" + user.data().name);
      })
      .catch(() => console.log("error creating user doc"));
  } else {
    console.log("User already exists");
  }
};
