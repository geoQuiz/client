import firebase from 'firebase'


// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDExrq3jU0Azk941S5dC5Cfc5IQm9o-AVM',
  authDomain: 'testingproject-210613.firebaseapp.com',
  databaseURL: 'https://testingproject-210613.firebaseio.com',
  projectId: 'testingproject-210613',
  storageBucket: 'testingproject-210613.appspot.com',
  messagingSenderId: '652934602286'
}

export const app = firebase.initializeApp(config)
export const database = firebase.database()
