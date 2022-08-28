import React, { useContext } from 'react';
import { logOutCall } from '../../ApiCalls';
import kayalogo from '../../assets/images/kayalogo.png';
import profilecircle from '../../assets/images/profile-circle.png';
import { AuthContext } from '../../context/AuthContext';
import './navbar.css';
export default function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    logOutCall(dispatch);
  };
  return (
    <div className="navbarContainer">
      <div className="navLogo">
        <img src={kayalogo} alt="" />
      </div>
      <div className="navButton">
        <div className="signoutButton" onClick={handleClick}>
          Signout
        </div>
        <div className="helpAndContact">
          <div className="helpButton">
            <div className="navHelpButton">
              <img src={profilecircle} alt="" />
            </div>
            <div className="navButtonTitle">
              <p>Help</p>
            </div>
          </div>
          <div className="contactButton">
            <div className="navContactButton">
              <img src={profilecircle} alt="" />
            </div>
            <div className="navButtonTitle">
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
