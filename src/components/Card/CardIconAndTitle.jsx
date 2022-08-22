import React from 'react';
import like from '../../assets/images/like.png';
import edit from '../../assets/images/edit-3.png';
import global from '../../assets/images/global.png';
import stickynote from '../../assets/images/stickynote2.png';
import categorys from '../../assets/images/archive-book.png';
export default function CardIconAndTitle(props) {
  const widt = 305;
  const heig = 135;
  return (
    <div
      style={{ width: `${props.width?props.width: widt}px`, height: `${heig}px` }}
      className="cardContainer cardInput"
    >
      <div className="addLogo">
        <img src={props.icon === 'category' && categorys} alt="" />
        <img src={props.icon === 'edit' && edit} alt="" />
        <img src={props.icon === 'global' && global} alt="" />
        <img src={props.icon === 'like' && like} alt="" />
        <img src={props.icon === 'survey' && stickynote} alt="" />
        <img src={props.icon === 'actioned' && stickynote} alt="" />
      </div>

      <div className="CardInput">
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
          <p style={{fontSize:'20px',fontWeight:'bold'}}>{props.servicesProvided}</p>
          {props.count && 
          <p style={{fontSize:'20px',fontWeight:'bold'}}>{props.count}</p>
          
          }
          <p style={{fontSize:'14px',fontWeight:'bold'}}>{props.title}</p>
        </div>
      </div>
    </div>
  );
}
