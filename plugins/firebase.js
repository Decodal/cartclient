import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD1LP_AQxaNITGyFUUCB73aKg5OTrRpP_E",
    authDomain: "bolster-vue.firebaseapp.com",
    projectId: "bolster-vue",
    storageBucket: "bolster-vue.appspot.com",
    messagingSenderId: "152593833719",
    appId: "1:152593833719:web:8e2b8f101d6306f8bcbdf2",
    measurementId: "G-1NS9MYEZSH"
  };
// Initialize Firebase
export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// db = firebase.firestore();

// export const dbOrderRef = db.collection('order');

// export const orderData = db.collection('order').get()