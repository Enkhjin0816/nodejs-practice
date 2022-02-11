import { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtiAKfdxK-58upevIMNaM0x8DdxQRxcgA",
  authDomain: "boginoo-304d0.firebaseapp.com",
  projectId: "boginoo-304d0",
  storageBucket: "boginoo-304d0.appspot.com",
  messagingSenderId: "484470680070",
  appId: "1:484470680070:web:224f4874dfac42eaeef187",
  measurementId: "G-NNBLYE80KV"
};

export const useFirebase = () => {
  const [state, setState] = useState({ firebase });

  useEffect(() => {
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth(app);
    setState({ app, auth });
  }, []);

  return state;
};