import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdqdpKPRIgHDA4m1qqX8We8rvCxTQz_z8",
  authDomain: "blog-951cd.firebaseapp.com",
  projectId: "blog-951cd",
  storageBucket: "blog-951cd.appspot.com",
  messagingSenderId: "969026208402",
  appId: "1:969026208402:web:17fb9849a6bfcc9dc85c4b",
  measurementId: "G-SVR1MWYTEG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };