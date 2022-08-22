import React, { useState } from 'react';
import TitleList from '../Modals/TitleLists/TitleList';

export default function CardWellBeing(props) {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className={`${props.from === "from" ? 'fromwb':'' } hop cardtextarea`}>
      <div className="textAreaTitle">{props.desc}</div>

      <div className="topWellbeingContainer">
        <ul>
          { (props.wellbeing && props.desc==="Top wellbeing services" )&& Object.keys(props.wellbeing)?.slice(0, 10).map((key,index,) => {
            return <li>
              <div key={index}>
                <p className='keyTitle' >{key}</p>

                {/* <p>{props.wellbeing[key]}</p> */}
              </div>
            </li>;
          })}
          { (props.wellbeing && props.desc==="Service Requested" && props.request==="request" )&& Object.keys(props.wellbeing)?.slice(0, 7).map((key,index,) => {
            return <li>
              <div key={index}>
                <p className='keyTitle' >{key}</p>

                <p className='keyTitleCount'>{props.wellbeing[key]}</p>
              </div>
            </li>;
          })}
          { (props.wellbeing && props.challenge==="challenge" )&& Object.keys(props.wellbeing)?.slice(0, 3).map((key,index,) => {
            return <li>
              <div key={index}>
                <p className='keyTitle' >{key}</p>

                <p className='keyTitleCount'>{props.wellbeing[key]}</p>
              </div>
            </li>;
          })}
        </ul>
      </div>
      <div className="textAreaLink" onClick={showModal}>
        View All
      </div>
      <TitleList title={props.desc} wellbeing={props.wellbeing} show={show} handleClose={hideModal} />
    </div>
  );
}
