// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdHhh-zLFJTpY3Api3DNTjWd5_kQs98L0",
  authDomain: "tomidiet-b699c.firebaseapp.com",
  projectId: "tomidiet-b699c",
  storageBucket: "tomidiet-b699c.appspot.com",
  messagingSenderId: "377075742009",
  appId: "1:377075742009:web:7d5e5907d5535b1d6a24e8",
  measurementId: "G-ZWCVM18PH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getStorage } from "firebase/storage";

const storage = getStorage(app);

export { storage };
