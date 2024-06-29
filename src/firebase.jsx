
// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase config
  apiKey: "AIzaSyAhOQeGn-xC5pfT2QecCkOno4ZyHTJfNls",
  authDomain: "authentication-100bd.firebaseapp.com",
  projectId: "authentication-100bd",
  storageBucket: "authentication-100bd.appspot.com",
  messagingSenderId: "1038892668206",
  appId: "1:1038892668206:web:957f17aca94574efda96bf"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
