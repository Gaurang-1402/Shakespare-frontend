import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqZWXe3TQd_26oBet_U7ol2ZyCSmMKkWQ",
  authDomain: "shakespare-ebd09.firebaseapp.com",
  projectId: "shakespare-ebd09",
  storageBucket: "shakespare-ebd09.appspot.com",
  messagingSenderId: "85126432867",
  appId: "1:85126432867:web:120ba123d7f9e8ee119056",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
