import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB0p1mbpDFD9r_Jfzl5EspME622jP7MN_Q',
  authDomain: 'reventscourse-30301.firebaseapp.com',
  databaseURL: 'https://reventscourse-30301.firebaseio.com',
  projectId: 'reventscourse-30301',
  storageBucket: 'reventscourse-30301.appspot.com',
  messagingSenderId: '890148191498',
  appId: '1:890148191498:web:068f2ef498188c46670ef3',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
