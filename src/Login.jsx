import React from 'react'
import { auth } from './firebase';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

// Login function here

function Login() {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [profilePic, setProfilePic] = React.useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.photoURL,
            }));
        }).catch(error => {
            console.log(error);
            alert('Login Failed');
        });
    };
    const register = () => {
        if (!name) {
            return alert('Please enter a name');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }));
            });
        }).catch((error) => {
            console.log(error);
            alert('Error creating user, ' + error);
        });
    };

    return (
        <div className="login">
            {/* <h1> You are not logged in </h1> */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="LinkedIn Logo" />

            <form>
                <input 
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full name (required if registering)" />
                
                <input 
                    type="text"
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)} 
                    placeholder="Profile pic URL (Optional)" />
                
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" />
                
                <input 
                    type="password" 
                    placeholder="Password (required if registering)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                
                <button type="submit" onClick={loginToApp}> Sign In </button>
                
                <p> Not a member? <span className="login__register" onClick={register}> Register Now </span>  </p>
            </form>
        </div>
    )
}

export default Login
