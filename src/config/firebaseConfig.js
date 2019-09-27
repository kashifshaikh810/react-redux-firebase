import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCTI9pe1Uzn1LW4v17PTQTAX0_2z0GOoUQ",
    authDomain: "kashif-project-app.firebaseapp.com",
    databaseURL: "https://kashif-project-app.firebaseio.com",
    projectId: "kashif-project-app",
    storageBucket: "",
    messagingSenderId: "590291722552",
    appId: "1:590291722552:web:e0736947f590bd1926a1cd",
    measurementId: "G-CTM8VNLZNH"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;