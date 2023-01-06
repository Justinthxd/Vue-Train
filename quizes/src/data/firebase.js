import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBJoynwh6jDSe2eDX3UOTPRivPVOjvcsIY",
    authDomain: "quizes-e78bd.firebaseapp.com",
    projectId: "quizes-e78bd",
    storageBucket: "quizes-e78bd.appspot.com",
    messagingSenderId: "99445914971",
    appId: "1:99445914971:web:579a0359bc5ba98c342e7e",
    measurementId: "G-B3E5F0ZLR9"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;


