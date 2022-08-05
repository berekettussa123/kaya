import React from 'react';
import './listOfQuestionRating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function ListOfQuestionRating() {
  return (
    <div className="ListOfQuestionRatingContainer">
      <div className="qRatingList">
        <div className="qRatingListItem">
          <FontAwesomeIcon icon={faStar} color="#ffb934" fontSize="15px" />
          <div className='qratingNumber'>5.0</div>
        </div>
      </div>
    </div>
  );
}
