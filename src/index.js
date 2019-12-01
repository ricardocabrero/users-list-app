import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from 'firebase'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyA6fyS95YXYooA-AC0nAZnKquV-YOwpJFk",
    authDomain: "users-list-app.firebaseapp.com",
    databaseURL: "https://users-list-app.firebaseio.com",
    projectId: "users-list-app",
    storageBucket: "users-list-app.appspot.com",
    messagingSenderId: "687452629151",
    appId: "1:687452629151:web:d6dbe14260bfd370c2daaa"
})

ReactDOM.render(
    <Router>
        <App />
    </Router>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
