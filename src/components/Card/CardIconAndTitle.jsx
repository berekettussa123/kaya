import React from 'react'
import like from '../../assets/images/like.png';
import global from '../../assets/images/global.png';
import category from '../../assets/images/category.png';
export default function CardIconAndTitle(props) {
    const widt = 298.22;
    const heig = 135;
  return (
    <div
        style={{ width: `${widt}px`, height: `${heig}px` }}
        className="cardContainer cardInput"
      >
        <div className="addLogo">
          <img src={props.icon==="category"&&category} alt=""/>
          <img src={props.icon==="global"&&global} alt=""/>
          <img src={props.icon==="like"&&like} alt=""/>
        </div>

        <div className="CardInput">
          <p>{props.title}</p>
        </div>
      </div>
  )
}
