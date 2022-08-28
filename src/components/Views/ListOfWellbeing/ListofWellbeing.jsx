import React from 'react';
import phone from '../../../assets/images/phone.png';
import './listofWellbeing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
export default function ListofWellbeing(props) {
  const handleClick =(item)=>{
    console.log(item)
  }
  return (
    <div className="listContainer" onClick={()=>handleClick(props.item)}>
      <div className="ListaddLogo">
        <FontAwesomeIcon
          icon={(props.item==='financial' &&faCoins) ||( props.item==='societal' &&faHandshakeSimple)||( props.item==='professional' &&faSmile)||( props.item==='physical' &&faRunning)||( props.item==='mental' &&faBrain)||( props.item==='social' &&faUsers)}
          color={`${props.selectedArea === props.item ? '#0c7c90' : '#848484'}`}
          // style={{ backgroundColor:`${props.selectedArea === props.item ? '#2691a3' : ''}`}}
          size="1x"
        />
      </div>

      <div className="listCardInput">
        <p>{props.item}</p>
      </div>
    </div>
  );
}
