import firebase from "firebase/app";
const config = {
  apiKey: "AIzaSyCvb0lfs-_pbRwhRXmfVDR7C_JZ_9HVZtc",
  authDomain: "main-train.firebaseapp.com",
  databaseURL: "https://main-train.firebaseio.com",
  projectId: "main-train",
  storageBucket: "main-train.appspot.com",
  messagingSenderId: "778576234482"
};
export default firebase.initializeApp(config);
