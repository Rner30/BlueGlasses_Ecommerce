import firebase from "firebase/app";

import "firebase/firestore";

const config  = {
    apiKey: "AIzaSyCd8FThj96xD5pO46w_7GVU5VoTY8X7I1s",
    authDomain: "ecommercereactcoder.firebaseapp.com",
    projectId: "ecommercereactcoder",
    storageBucket: "ecommercereactcoder.appspot.com",
    messagingSenderId: "620863913689",
    appId: "1:620863913689:web:02d08aa1692254ee7148c8",
    measurementId: "G-5HFZ82W8ZD"
};

//Esta funcion me da una instancia de la App ya inicializada
const app = firebase.initializeApp(config)


// Esta funcion me da una instancia de Firestore
//export const firestore = firebase.firestore(App)

export const getFirestore = () => {
    return firebase.firestore(app)
}

export default firebase