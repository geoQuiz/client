import firebase from 'firebase'

 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyBbkWi3xqnf5KrhQvprmqWB-BHQIskWuoU",
     authDomain: "geoquiz-f6c82.firebaseapp.com",
     databaseURL: "https://geoquiz-f6c82.firebaseio.com",
     projectId: "geoquiz-f6c82",
     storageBucket: "geoquiz-f6c82.appspot.com",
     messagingSenderId: "472430774117"
   };

  export const app = firebase.initializeApp(config);
  export const database = firebase.database();
