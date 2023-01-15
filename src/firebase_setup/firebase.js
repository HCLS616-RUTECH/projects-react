// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkntI9j7PMW5Qsx_eWo7iMaPp2P5Tpbv8",
    authDomain: "projects-react-3f9e3.firebaseapp.com",
    projectId: "projects-react-3f9e3",
    storageBucket: "projects-react-3f9e3.appspot.com",
    messagingSenderId: "125493466951",
    appId: "1:125493466951:web:9a47621dd44751b169de62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
