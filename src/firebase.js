// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcILtiNfHV0EqsoZuHjfZjRp0BoUavxuE",
    authDomain: "fir-chat-app-ada34.firebaseapp.com",
    projectId: "fir-chat-app-ada34",
    storageBucket: "fir-chat-app-ada34.appspot.com",
    messagingSenderId: "117705121372",
    appId: "1:117705121372:web:2392bf93ee9aad56591099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
