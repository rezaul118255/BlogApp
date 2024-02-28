// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTqEa6f4hn_GBA_ug0hjXlARTsy2vVO3Q",
    authDomain: "blog-app-f978f.firebaseapp.com",
    projectId: "blog-app-f978f",
    storageBucket: "blog-app-f978f.appspot.com",
    messagingSenderId: "174039419192",
    appId: "1:174039419192:web:bb1e7cbced6d9c389619cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);