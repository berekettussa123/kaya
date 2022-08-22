import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardAreaResourceSplit from './CardAreaResourceSplit';
export default function CardAreaMain(props) {
  const [isActive, setIsActive] = useState(false);
  const selectSub = (item) => {
    setIsActive((item)=>!item);
  };
  return (
    <div className="mainAndSub">
    {props.selectedArea === props.item && (
      <div className="categoryContainer">
        {props.finalString?.map((item, id) => {
          return <CardAreaResourceSplit item={item} />;
        })}
      </div>
    )}
  </div>
  );
}
