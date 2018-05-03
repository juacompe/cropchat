import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyBQ1mbKl7g6aylbxezescV1Wgq9Dar8aGo',
  authDomain: 'cropchat-48e55.firebaseapp.com',
  databaseURL: 'https://cropchat-48e55.firebaseio.com',
  projectId: 'cropchat-48e55',
  storageBucket: 'cropchat-48e55.appspot.com',
  messagingSenderId: '3089234757'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
