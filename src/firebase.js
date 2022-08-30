import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAv-jBOSNiW24g4a5TYbotonu6r1iHXHVI',
  authDomain: 'clone-e66f4.firebaseapp.com',
  projectId: 'clone-e66f4',
  storageBucket: 'clone-e66f4.appspot.com',
  messagingSenderId: '441721450209',
  appId: '1:441721450209:web:f3a73fcc7fccb1dde1d1a0',
  measurementId: 'G-19002JYEE7',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
