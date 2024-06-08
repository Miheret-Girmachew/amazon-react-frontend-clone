import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCp4tPVKDBv8aZn_pBaFlmtHihHo_fgvGI",
  authDomain: "clone-64861.firebaseapp.com",
  projectId: "clone-64861",
  storageBucket: "clone-64861.appspot.com",
  messagingSenderId: "418179234152",
  appId: "1:418179234152:web:2c235601e3937f0e6dbedd"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = app.firestore();




