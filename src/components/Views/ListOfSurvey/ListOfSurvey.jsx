import React from 'react';
import './listOfSurvey.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
export default function ListOfSurvey() {
  return (
    <div>
      <div className="surveyListContainer">
        <div className="surveyListItem companyName">RBX</div>
        <div className="surveyListItem surveyListItemLink">
        

          https:partnerdev.kayawellbeingindex.com
          
        </div>
        <div className="surveyListItem surveyIconContainerIcon">
          <div className="surveyIconContainer ">
            <FontAwesomeIcon icon={faThumbsUp} color="#2691a3" size="1x" />
            <FontAwesomeIcon icon={faThumbsUp} color="#2691a3" size="1x" />
            <FontAwesomeIcon icon={faThumbsUp} color="#2691a3" size="1x" />
          </div>
        </div>
        <div className="surveyListItem"></div>
        <div className="surveyListItem surveyListItemRecieved">
          <p>10</p>
        </div>
        <div className="surveyListItem surveyListItemRecieved">
          <p>10</p>
        </div>
      </div>
    </div>
  );
}
