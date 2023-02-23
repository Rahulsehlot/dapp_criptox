import { initializeApp } from "firebase/app";
import { setAlert } from "./store";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO-J8eAEUpC0KX3UpEU3B7EKj3pVZL7l0",
  authDomain: "daap-34efd.firebaseapp.com",
  projectId: "daap-34efd",
  storageBucket: "daap-34efd.appspot.com",
  messagingSenderId: "1015488366070",
  appId: "1:1015488366070:web:74d3b22a58d17477e9b3d7",
  measurementId: "G-WQEZXLDSS8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password).then(
      (res) => res.user
    );
  } catch (error) {
    alert(JSON.stringify(error.code));
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const userDocRef = doc(db, "users", user.email);

    if (user) {
      logout().then(() => {
        alert("Registeration in successfully,Please go ahead and signIn");
      });
    }

    await setDoc(userDocRef, {
      uid: user.uid,
      name,
      email,
      password,
    });
    return res;
  } catch (error) {
    alert(error.code);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    setAlert(JSON.stringify(error), "red");
  }
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  onAuthStateChanged,
};
