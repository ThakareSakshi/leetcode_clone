// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANdVQ-_IW0438h9ZhPHcX23Pq-XvqIgjI",
  authDomain: "leetcodeclone-acfec.firebaseapp.com",
  projectId: "leetcodeclone-acfec",
  storageBucket: "leetcodeclone-acfec.appspot.com",
  messagingSenderId: "29449504687",
  appId: "1:29449504687:web:5c9c794acab0f575a0915a",
  databaseURL:"https://leetcodeclone-acfec-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export default app