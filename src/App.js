import React, { useState, useEffect } from 'react';
import firebase from 'firebase'
import './App.css';
import 'bulma/css/bulma.css' 
import ViewList from './components/viewList'
import ViewLogin from './components/viewLogin'

const App = () => {
  const [isUser, setIsUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        setIsUser(user)
      }
      else{
        setIsUser(null)
      }
    })
  },[])

  const loginIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log('login is ok'))
      .catch(error => console.log(error.code))
  }

  const LoginOut = () => {
    firebase.auth().signOut()
      .then(() => console.log('desconexión'))
      .catch((error) => console.log(error.code))
  }

  return (
    <div className="App">
      {!isUser && <ViewLogin loginAuth={loginIn}/>}
      {isUser && <ViewList loginAuthOut={LoginOut}/>}
    </div>
    )
}

export default App;
