import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBgnbyxfHLFwvFzdhcbaVMKwtzAY-Zf3VE",
    authDomain: "keechat-a977e.firebaseapp.com",
    projectId: "keechat-a977e",
    storageBucket: "keechat-a977e.appspot.com",
    messagingSenderId: "8788336693",
    appId: "1:8788336693:web:0b14017af716093d3d117c"
  }).auth();