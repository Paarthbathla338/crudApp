import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCrS6UgYdcvy1hejnLAZrwwT7LOtMPuGF8",
  authDomain: "cavi-1ee3c.firebaseapp.com",
  projectId: "cavi-1ee3c",
  storageBucket: "cavi-1ee3c.appspot.com",
  messagingSenderId: "986398356824",
  appId: "1:986398356824:web:34f351ef4c20983f40212d"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0) {
    app = firebase.initializeApp(firebaseConfig);
}else {
    app=firebase.app()
}

const auth=firebase.auth()

export {auth}