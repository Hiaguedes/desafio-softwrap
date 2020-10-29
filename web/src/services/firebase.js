import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
    databaseURL: "https://desafio-softwrap.firebaseio.com",
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGE_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_MESSAGE_ID}`
}

firebase.initializeApp(firebaseConfig);

export default firebase.database();