import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfAoqkVxnAoxbnxEu1eAiaOTMNaC8NvSw",
    authDomain: "react-ecommerce-c0076.firebaseapp.com",
    projectId: "react-ecommerce-c0076",
    storageBucket: "react-ecommerce-c0076.appspot.com",
    messagingSenderId: "1022880906501",
    appId: "1:1022880906501:web:6d672bddb9d0ab12b94b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);