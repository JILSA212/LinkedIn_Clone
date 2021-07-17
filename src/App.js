import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
// import { login, logout } from './actions/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      }
      else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      {/* <h1> LinkedIn-Clone </h1> */}

      {/* Header */}
      <Header />

      {!user ? ( 
        <Login /> 
      ) : (
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />

          {/* Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
