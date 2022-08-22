import React from 'react';
import './card.css';
import profilecircle from '../../assets/images/profile-circle.png';
import Logo from '../../assets/images/Logo.png';
import phone from '../../assets/images/phone.png';
import global from '../../assets/images/global.png';
import './card.css';
export default function CardInput(props) {
  const widt = 298.22;
  const heig = 135;
  return (
    <>
      <div
        style={{ width: `${widt}px`, height: `${heig}px` }}
        className="cardContainer cardInput"
      >
        <div className="addLogo">
          <img src={props.icon==="phone"&&phone} alt=""/>
          <img src={props.icon==="global"&&global} alt=""/>
        </div>

        <div className="CardInput">
          <input required type="text" name={props?.name} onChange={props.handleChange} defaultValue={props?.name}/>
          <label>{props.title}</label>
        </div>
      </div>
    </>
  );
}
