import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDyYYqYVZnNhLoeW3jT0WQ25PbUlHKH7Rk",
  authDomain: "miniblog-74db3.firebaseapp.com",
  projectId: "miniblog-74db3",
  storageBucket: "miniblog-74db3.appspot.com",
  messagingSenderId: "885494555086",
  appId: "1:885494555086:web:95fabf70d84212099bcb9f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };