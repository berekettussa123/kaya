import React from 'react';
import ListofWellbeing from '../../Views/ListOfWellbeing/ListofWellbeing';
import './wellbeingList.css';

export default function WellbeingList(props) {
  return (
    <>
      {props.show && (
        <div className="wellbeingListContainerS">
          <div className="mainContainerWell">
            <div className="listCardTitle ">Wellbeing Areas Promoted</div>
            <div className="wellbeingListContainer">
              <div className="listWellbeing">
                {props.promoted.map((item) => {
                 return <ListofWellbeing item={item} />;
                })}
              </div>
            </div>
            <div
              className="textAreaLink wellListClose"
              onClick={props.handleClose}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
