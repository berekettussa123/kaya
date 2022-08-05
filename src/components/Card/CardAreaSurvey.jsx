import React from 'react';
import ListOfSurvey from '../Views/ListOfSurvey/ListOfSurvey';

export default function CardAreaSurvey() {
  return (
    <div className="surveyAreaContainer">
      <div className="buttonContainerSurvey">
        <div className="centerButton3 centerbtn centerbtn1">Create Survey</div>
        <div className="centerButton3 centerbtn centerbtn2">View Survey</div>
      </div>
      <div className="surveyTable">
        <div className="surveyTitleContainer">
          <div className="surveyTitle">Company</div>
          <div className="surveyTitle surveyTitleLink">Link</div>
          <div className="surveyTitle surveyTitlecenter">Action</div>
          <div className="surveyTitle surveyTitlecenter">End Date</div>
          <div className="surveyTitle surveyTitlecenter">Expected</div>
          <div className="surveyTitle surveyTitlecenter">Recieved</div>
        </div>
        <ListOfSurvey />
        <ListOfSurvey />
        <ListOfSurvey />
        <ListOfSurvey />
        <ListOfSurvey />
      </div>
      <div className="centerButtonContainer">
      <div className="textAreaLink">View All</div>
        <div className="centerButton3 centerbtn centerbtn2">Update Survey</div>
      </div>
    </div>
  );
}
