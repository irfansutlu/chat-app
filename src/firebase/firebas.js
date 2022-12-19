import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiVjAQ-vJYQOwnTwpJUhcwznp1XK7PzDw",
  authDomain: "blog-app-3b2c4.firebaseapp.com",
  projectId: "blog-app-3b2c4",
  storageBucket: "blog-app-3b2c4.appspot.com",
  messagingSenderId: "740308955624",
  appId: "1:740308955624:web:8cb4541b615923e114f45d",
  measurementId: "G-5YJ8K3DVLT",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, app };