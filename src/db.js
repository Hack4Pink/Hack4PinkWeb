import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwLbZQgSxrPhf0eLKbW28C-Zz-A6UqO54",
  authDomain: "hack4pink.firebaseapp.com",
  databaseURL: "https://hack4pink.firebaseio.com",
  projectId: "hack4pink",
  storageBucket: "hack4pink.appspot.com",
  messagingSenderId: "354591091505",
  appId: "1:354591091505:web:018ff21b4036bcb4605e10",
  measurementId: "G-BJTG2XBK7R"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();