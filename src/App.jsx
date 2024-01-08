import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import MainHeader from './components/Header';
import WelcomePage from './components/WelcomePage';
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if(token==='ok'){
      setIsLoggedIn(true)
    }
  }, [])
  
  
  const token=localStorage.getItem('token')
  // if(token==='ok'){
  //   setIsLoggedIn(true)
  // }

  const loginHandler = (email, password) => {
    if(email==="ali" && password==="123"){
    localStorage.setItem('token','ok')
    setIsLoggedIn(true);
  }
    else
    alert('نام کاربری یا رمز عبور اشتباه است')
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear()
  };  
  return (
    <div>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <WelcomePage onLogout={logoutHandler} />}
      </main>
    </div>
  );
}

export default App
