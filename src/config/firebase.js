import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoft3T_O4UbA-PSg1YbzAMf3MXwYz-0RE",
  authDomain: "student-form-4780d.firebaseapp.com",
  projectId: "student-form-4780d",
  storageBucket: "student-form-4780d.appspot.com",
  messagingSenderId: "314197801451",
  appId: "1:314197801451:web:abdef924bb5170962101ae",
  measurementId: "G-JRH4J3RK18"
};


const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app); 
export const storage=getStorage(app);

