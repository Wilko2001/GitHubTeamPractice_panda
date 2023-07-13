import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9yFhlAfROqizR_KjZhatlsmnFIAzT5P0",
    authDomain: "surreal-estate-b7d82.firebaseapp.com",
    projectId: "surreal-estate-b7d82",
    storageBucket: "surreal-estate-b7d82.appspot.com",
    messagingSenderId: "278166250850",
    appId: "1:278166250850:web:6743676108ead1af42383b",
    measurementId: "G-F247WZS5P8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;