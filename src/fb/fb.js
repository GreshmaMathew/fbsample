import {firebase} from '@react-native-firebase/database';
var firebaseConfig = {
  apiKey: 'AIzaSyAmXyH7QpbwDX3loudM-1e0Hw5OKFhFr8o',
  authDomain: 'blogadd.firebaseapp.com',
  databaseURL: 'https://blogadd.firebaseio.com',
  projectId: 'blogadd',
  storageBucket: 'blogadd.appspot.com',
  messagingSenderId: '601568739751',
  appId: '1:601568739751:web:407663d20aba0ad516f682',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
