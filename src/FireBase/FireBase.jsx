import firebase from 'firebase/app';
import 'firebase/firestore';
//require('dotenv').config();


const app = firebase.initializeApp(
    {
        
            apiKey: "AIzaSyCwIbq85re0jOVdkTpIjoawebs6qHoj4qY",
            authDomain: "gtfo-ecommerce.firebaseapp.com",
            projectId: "gtfo-ecommerce",
            storageBucket: "gtfo-ecommerce.appspot.com",
            messagingSenderId: "1021897198695",
            appId: "1:1021897198695:web:8aadbdb410214cd89f18c2"
        }
    
)

export const getFirebase = () =>{
    return app;
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}