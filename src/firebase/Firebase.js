import app from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDWpj2ISCEP5WV1zuXrzzwzJn89DlEfoq8",
    authDomain: "portfolio-nendaka-935e0.firebaseapp.com",
    databaseURL: "https://portfolio-nendaka-935e0.firebaseio.com",
    projectId: "portfolio-nendaka-935e0",
    storageBucket: "portfolio-nendaka-935e0.appspot.com",
    messagingSenderId: "474908085878",
    appId: "1:474908085878:web:255850919743029b609957"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    signupUser = (name, email, message) => 
    this.auth.createUserWithEmailAndPassword(name, email, message);


    user = uid => this.db.doc(`users/${uid}`);




    
}

export default Firebase;