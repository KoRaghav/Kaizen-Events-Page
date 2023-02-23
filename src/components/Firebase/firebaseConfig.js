import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDJ39kQFirTRkVrG6aWLDJYlFNM55QndjE",
  authDomain: "events-350a4.firebaseapp.com",
  projectId: "events-350a4",
  storageBucket: "events-350a4.appspot.com",
  messagingSenderId: "1005620802565",
  appId: "1:1005620802565:web:a066eaa02906e0217a986c",
  measurementId: "G-CC19TTJ4Q0"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default {db}