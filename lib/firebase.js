import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCOIjLd0J2_v4VYYQJtmD3L1e-uQ3dkVqg",
  authDomain: "number-guesser-react-1e855.firebaseapp.com",
  databaseURL: "https://number-guesser-react-1e855.firebaseio.com",
  storageBucket: "number-guesser-react-1e855.appspot.com",
  messagingSenderId: "96180085280"
  }

firebase.initializeApp(config)

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export default firebase;
