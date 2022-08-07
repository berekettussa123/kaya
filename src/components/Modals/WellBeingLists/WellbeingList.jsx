import React from 'react';
import ListofWellbeing from '../../Views/ListOfWellbeing/ListofWellbeing';
import './wellbeingList.css';

export default function WellbeingList(props) {
  return (
    <>
   {props.show && <div className="wellbeingListContainerS">
      <div className='mainContainerWell'>
        <div className="listCardTitle ">Wellbeing Areas Promoted</div>
        <div className='wellbeingListContainer' >
          <div className='listWellbeing'>
            <ListofWellbeing />
            <ListofWellbeing />
            <ListofWellbeing />
          </div>
          <div className='listWellbeing'>
            <ListofWellbeing />
            <ListofWellbeing />
            <ListofWellbeing />
          </div>
        </div>
        <div className="textAreaLink wellListClose" onClick={props.handleClose}>Close</div>
      </div>
    </div>}
    </>
  );
}
