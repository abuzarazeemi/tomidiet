import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// import { ref, getDownloadURL } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
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
  const storage = getStorage(app);

  nuxtApp.provide("storage",storage);
  nuxtApp.provide("firebaseRef",ref);
  nuxtApp.provide("getDownloadURL",getDownloadURL);
});
