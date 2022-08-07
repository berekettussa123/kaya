import React from 'react';
import './titleList.css';

export default function TitleList(props) {
  return (
    <>
      {props.show&&<div className="titleContainerModal">
        <div className="TitleListContainer">
          <div className="TitleListTitle">Title Here</div>
          <div className="TitleListBody"></div>
          <div className="TitleListClose" onClick={props.handleClose}>
            Close
          </div>
        </div>
      </div>}
    </>
  );
}
