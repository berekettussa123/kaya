import React, { useState } from 'react';
import profilecircle from '../../assets/images/profile-circle.png';
import WellbeingList from '../Modals/WellBeingLists/WellbeingList';
import ListofWellbeing from '../Views/ListOfWellbeing/ListofWellbeing';

export default function CardListofIcon(props) {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <div className="cardListsContainer">
      <div className="listCardTitle">Wellbeing Areas Promoted</div>
      <div>
        {props.promoted?.map((item) => {
          return <ListofWellbeing item={item} />;
        })}
      </div>
      <div className="textAreaLink" onClick={showModal}>
        View All
      </div>
      <WellbeingList show={show}  promoted={props.promoted} handleClose={hideModal} />
    </div>
  );
}
