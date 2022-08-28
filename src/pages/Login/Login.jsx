import React, { useContext, useEffect, useRef, useState } from 'react';
import Kaya_indexpage from '../../assets/images/Kaya_indexpage.png';
import KAYA_logo2 from '../../assets/images/KAYA_logo2.png';
import text01 from '../../assets/images/text01.png';
import Kaya_bottom_wave from '../../assets/images/Kaya_bottom_wave.png';
import './login.css';
import { loginCall } from '../../ApiCalls';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch, user } = useContext(AuthContext);
  const [error,setError] = useState()

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/checkPartnerLogin`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: {
        username: username.current.value,
        password: password.current.value,
      },
    })
      .then(function (response) {
        response.data.success?.partnerId &&
          dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
          !response.data.success?.partnerId && setError("Invalid username and or password")
        console.log(response);
      })
      .catch(function (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error });
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(user?.success);
  }, [user]);
  return (
    <div>
      <div className="LoginContainer">
        <div className="loginImageConai">
          <img src={Kaya_indexpage} alt="loginImageConaiImage" />
        </div>
        <div className="loginLogoContainer">
          <img className="loginLogoContainerImage" src={KAYA_logo2} alt="" />
        </div>
        <div className="loginMainContainer">
          <div className="loginLeft">
            <div className="form">
              <form onSubmit={handleClick}>
                <div className="input-container">
                  <label>Username </label>
                  <input type="text" name="username" ref={username} required />
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <input
                    type="password"
                    name="password"
                    ref={password}
                    required
                  />
                </div>
                <div className="button-container">
                  <input type="submit" value="Login" />
                </div>
                <div className="divError">{error}</div>
                <div className="registerLink">
                  <a
                    href={`${process.env.REACT_APP_BASE_URL}/partners/addPartner`}
                    target={'_blank'}
                  >
                    Don't have an account? Register now.
                  </a>
                </div>
                <div className="registerLink registerLinkForgot">
                  <Link to={'/newPassword'}>Forgot Password? Click here.</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="loginRight">
            <img className="loginRightImage" src={text01} alt="" />
          </div>
        </div>
        <div className="loginBottom">
          <img className="loginBottomImage" src={Kaya_bottom_wave} alt="" />
        </div>
      </div>
    </div>
  );
}
