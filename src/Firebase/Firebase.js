import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage"; // Import getStorage
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA-XnkCKXSDpjD1ur6Msnx-nybwqWONVoA",
  authDomain: "imagegallery-5f58a.firebaseapp.com",
  projectId: "imagegallery-5f58a",
  storageBucket: "imagegallery-5f58a.appspot.com",
  messagingSenderId: "188778821174",
  appId: "1:188778821174:web:b9067492e5447815f64a97",
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();
const storageRef = ref(storage);
const timeStamp = serverTimestamp();
export { app, auth, projectFirestore, storageRef, timeStamp };
