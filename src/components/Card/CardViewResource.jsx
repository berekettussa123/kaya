import React from 'react';
import ListOfResources from '../Views/ListOfResourceView/ListOfResources';

export default function CardViewResource() {
  return (
    <div className="CardViewResource">
      <div className="viewTitle">View Resources</div>
      <ListOfResources/>
      <ListOfResources/>
      <div className="textAreaLink">View All</div>
    </div>
  );
}
