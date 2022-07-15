
import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnFmvo0cvzx0usig6yJo-uvD9X6KIjuOk",
  authDomain: "react-d9d69.firebaseapp.com",
  projectId: "react-d9d69",
  storageBucket: "react-d9d69.appspot.com",
  messagingSenderId: "69965723101",
  appId: "1:69965723101:web:afe96a097fbd7952d03234",
  measurementId: "G-6L3DFT76SW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);