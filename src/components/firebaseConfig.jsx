
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3MS3Hk6dS5V0CngT1UyRcljOMA-l72ZU",
  authDomain: "signuploginfirebase-17ddc.firebaseapp.com",
  databaseURL: "https://signuploginfirebase-17ddc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "signuploginfirebase-17ddc",
  storageBucket: "signuploginfirebase-17ddc.appspot.com",
  messagingSenderId: "1012482307289",
  appId: "1:1012482307289:web:6ca11695bd79aa4b59bac8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;