import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC8V_Bqq4x0u6R5WohKjYwQnL6csjOLqKs",
  authDomain: "cart-a9565.firebaseapp.com",
  projectId: "cart-a9565",
  storageBucket: "cart-a9565.appspot.com",
  messagingSenderId: "1001115362974",
  appId: "1:1001115362974:web:220c0cbef2245119007d8f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

