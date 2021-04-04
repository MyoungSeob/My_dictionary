import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig ={
    apiKey: "AIzaSyB90UrPmAQamdVMnmp2p955N3s-H2R6PTw",
    authDomain: "my-dictionary-9c765.firebaseapp.com",
    projectId: "my-dictionary-9c765",
    storageBucket: "my-dictionary-9c765.appspot.com",
    messagingSenderId: "654008085198",
    appId: "1:654008085198:web:78a5bb988246da1dabfe9f",
    measurementId: "G-HKV0XS1F7K"
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore()

export { firestore }