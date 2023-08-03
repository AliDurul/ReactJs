import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA-xhniL4PyI-Os73DVGxcoYS6sBnivLeg",
    authDomain: "movie-app-74517.firebaseapp.com",
    projectId: "movie-app-74517",
    storageBucket: "movie-app-74517.appspot.com",
    messagingSenderId: "329572943767",
    appId: "1:329572943767:web:7aab86a5308322b8f7a6d2"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
/* --------------------------------------------------------------- */

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
