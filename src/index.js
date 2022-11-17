import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6Jli-94R6wGeKTh6ayYZVbes8vpW9LzQ",
  authDomain: "let-it-be-shop.firebaseapp.com",
  projectId: "let-it-be-shop",
  storageBucket: "let-it-be-shop.appspot.com",
  messagingSenderId: "863290076744",
  appId: "1:863290076744:web:52f6e367e947f5ff5c327d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
