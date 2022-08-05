import React from 'react';
import IconAndWellbeing from '../Views/IconAndWellbeing/IconAndWellbeing';
import ListOfQuestionRating from '../Views/ListOfQuestionRating/ListOfQuestionRating';

export default function CardQuestionRating() {
  return (
    <div className="CardQuestionRatingContainer">
      <div className="qRetingTitle">Question Rating</div>
      <div className="qRatingsContainer">
        <ListOfQuestionRating/>
        <ListOfQuestionRating/>
        <ListOfQuestionRating/>
        <ListOfQuestionRating/>
        <ListOfQuestionRating/>
      </div>
      <IconAndWellbeing/>
    </div>
  );
}
