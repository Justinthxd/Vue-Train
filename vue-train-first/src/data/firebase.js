import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCjcs-9l_R5tKzLUopIOnXN8gdKsWNNMgE",
    authDomain: "apo-project-7388e.firebaseapp.com",
    databaseURL: "https://apo-project-7388e-default-rtdb.firebaseio.com",
    projectId: "apo-project-7388e",
    storageBucket: "apo-project-7388e.appspot.com",
    messagingSenderId: "695943159687",
    appId: "1:695943159687:web:421444fd8e1d5b93fafd22",
    measurementId: "G-2B9SH04WR3"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase();