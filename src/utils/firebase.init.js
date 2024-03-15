// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVTqb73HRY7k1SfUv1BzfDxdSbiXpJwEs",
    authDomain: "blog-point-aab49.firebaseapp.com",
    projectId: "blog-point-aab49",
    storageBucket: "blog-point-aab49.appspot.com",
    messagingSenderId: "517519316536",
    appId: "1:517519316536:web:9085d1c0c2b87d87be38cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
