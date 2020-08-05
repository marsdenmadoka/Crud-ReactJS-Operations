 // Your web app's Firebase configuration
 import firebase from "firebase/app"
 import 'firebase/firestore'
 import 'firebase/auth'

 var firebaseConfig = {
    apiKey: "AIzaSyAp8sKIQJfA5mHoQUoNtV7_vpvPrsTOwgE",
    authDomain: "reactfirebaseapp-ae65a.firebaseapp.com",
    databaseURL: "https://reactfirebaseapp-ae65a.firebaseio.com",
    projectId: "reactfirebaseapp-ae65a",
    storageBucket: "reactfirebaseapp-ae65a.appspot.com",
    messagingSenderId: "391484763443",
    appId: "1:391484763443:web:d1c4dc8b49c92568942246",
    measurementId: "G-359D0S2TN9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})
  
  export default firebase