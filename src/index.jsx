import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";


const root = ReactDOM.createRoot(document.getElementById('root'));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2LCL9IF9QrPBfrbM5tgMp7rBucvZSb04",
  authDomain: "valhalla-beers.firebaseapp.com",
  projectId: "valhalla-beers",
  storageBucket: "valhalla-beers.appspot.com",
  messagingSenderId: "336053367164",
  appId: "1:336053367164:web:528b1b8075e019987434f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
