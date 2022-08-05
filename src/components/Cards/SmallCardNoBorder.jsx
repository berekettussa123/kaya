import React from 'react';

export default function SmallCardNoBorder(props) {
  return (
    <div className="SmallCardsContainer SmallCardNoBorder">
      <div className="smallCardTitle">{props.title}</div>
      <div className="smallBody"></div>
      <div className="textAreaLink">View All</div>
    </div>
  );
}
