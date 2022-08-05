import React from 'react'
import profilecircle from '../../assets/images/profile-circle.png';
import ListofWellbeing from '../Views/ListOfWellbeing/ListofWellbeing';

export default function CardListofIcon() {
  return (
    <div className='cardListsContainer'>
      <div className="listCardTitle">Wellbeing Areas Promoted</div>
      <ListofWellbeing/>
      <ListofWellbeing/>
      <div className="textAreaLink">View All</div>
    </div>
  )
}
