import firebase from 'firebase'

require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCwEProVbMVbwa4R-1dbDFfXjUqPx8dbYE",
  authDomain: "barterapp-2c323.firebaseapp.com",
  databaseURL: "https://barterapp-2c323.firebaseio.com",
  projectId: "barterapp-2c323",
  storageBucket: "barterapp-2c323.appspot.com",
  messagingSenderId: "125882338178",
  appId: "1:125882338178:web:a59f8d92246457a8825d9b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()