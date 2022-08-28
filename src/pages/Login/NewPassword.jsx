import React, { useContext, useEffect, useRef } from 'react';
import Kaya_indexpage from '../../assets/images/Kaya_indexpage.png';
import KAYA_logo2 from '../../assets/images/KAYA_logo2.png';
import text01 from '../../assets/images/text01.png';
import Kaya_bottom_wave from '../../assets/images/Kaya_bottom_wave.png';
import './login.css';
import { loginCall } from '../../ApiCalls';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
export default function NewPassword() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch, user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/updatePassword`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: { username:username?.current?.value, password:password?.current?.value },
    })
      .then(function (response) {
        console.log(response);
        navigate('/login')
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(()=>{
    console.log(username.current?.value,password.current?.value)
  })

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
                  <label>New Password </label>
                  <input
                    type="password"
                    name="password"
                    ref={password}
                    required
                  />
                </div>
                <div className="button-container">
                  <input type="submit" value="Update Password" />
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
