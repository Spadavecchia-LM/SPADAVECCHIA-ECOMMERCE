import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuS4Oq-npb1j6bkhi6ai9evEO-2mpHmM4",
  authDomain: "ls-motorstoredb.firebaseapp.com",
  projectId: "ls-motorstoredb",
  storageBucket: "ls-motorstoredb.appspot.com",
  messagingSenderId: "298934815968",
  appId: "1:298934815968:web:57c4c838fa72ff892e9485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>
    <App />
  </ChakraProvider>

)
