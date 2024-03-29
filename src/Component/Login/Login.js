import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import './Login.css'

const Login = () => {
  const {
    handleGoogleLogin,
    handleUserLogin,
    isLoading,
    
  } = useFirebase();
  const location = useLocation()
  const history = useHistory();
  const redirect_url = location.state?.from || '/home'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const handlegoogleSignIn = () => {
    
    handleGoogleLogin()
      .then((result) => {
        history.push(redirect_url);
      setUser(result.user);
      setError("");
    })
   
  }

  const handleUserEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUserPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUserLog = () => {
    // setIsLoading(true)
    handleUserLogin(email, password)
    .then((result) => {
        history.push(redirect_url)
    })
    // .finaly(()=> setIsLoading(false));

  };

  return (
    <div className="div d-flex justify-content-center align-items-center">
      <div className="row my-5">
        <div className="col-md-6 ">
          <div className='login'>
            <h2>Please Login</h2>
            <div className="form-input mt-5">
              <input
                onChange={handleUserEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={handleUserPassword}
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <p>New to Aventura?   <NavLink to='/register'>  Create Account</NavLink></p>
                <button onClick={handleUserLog} className="btn btn-warning px-5 ms-1">
                  Login
                </button>
              </div>
            </div>
            <div className="login-btn mt-4">
              <button
                onClick={handlegoogleSignIn}
                className="btn  m-2 btnClass"
              >
                 <img className='w-25' src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" />
                  <span className='text-danger'>Google Signin</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side-image">
            <img
              className="w-100"
              src="https://image.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
              alt=""
            />
          </div>
          ;
        </div>
      </div>
    </div>
  );
};

export default Login;