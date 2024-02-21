import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLG8pubZfdCtOkWetB1sdwsm23jGoR2Gc",
    authDomain: "waultz-508d9.firebaseapp.com",
    projectId: "waultz-508d9",
    storageBucket: "waultz-508d9.appspot.com",
    messagingSenderId: "72787248619",
    appId: "1:72787248619:web:e11ca3c55a4df1631205ae",
    measurementId: "G-EJYDXZ08W5",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
