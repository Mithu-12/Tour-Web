import React from 'react';
import './Register.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';
import { useState } from 'react';
import { updateProfile } from '@firebase/auth';

const Register = () => {
  const location = useLocation()
  const history = useHistory();
  const redirect_url = location.state?.from || '/home'
    const { handleUserRegister, auth} = useFirebase();

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUser] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
    const handleUserName = (e) => {
      setUser(e.target.value);
      console.log(handleUserName);    
  };
  const handleRegistrations = e => {
    e.preventDefault();
    handleUserRegister(email, password)
      .then((result) => {
        const info = { ...result.user, displayName: userName }
        setUser(info)
      history.push(redirect_url)
      console.log(result.user);
        const user = result.user;
        setUserName()
        window.location.reload()
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
    console.log(email, password)
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: userName })
    .then(result => { })
  }

    return (
        <div className='text-center mt-5'>
            <div className='loginForm '>
                <h2>Please Register</h2>
          <form onSubmit={handleRegistrations}>
                    <input className='mt-5'onBlur={handleUserName} type="text" placeholder="Enter your name" /><br/>
                    <input className='mt-2' onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Your Email' required/><br />
                    <input className='mt-2' onBlur={handlePassword} type="password" name="" id="" placeholder='Enter Your Password' required/><br />
                    <input  type="submit" value="Submit" className='btn btn-primary mt-2'/>
                </form>
                <p>Already Sign in Account? <Link to='/login'>Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;