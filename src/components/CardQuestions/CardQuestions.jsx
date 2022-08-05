import React from 'react'
import CardAreaSurvey from '../Card/CardAreaSurvey'
import CardIconAndTitle from '../Card/CardIconAndTitle'
import CardSurveyChallenges from '../Card/CardSurveyChallenges'
import CardSurveyPERMA from '../Card/CardSurveyPERMA'
import CardSurveyRequest from '../Card/CardSurveyRequest'
import CardSurveyArea from '../Card/CardQuestionsArea'
import CardSurveyTrends from '../Card/CardSurveyTrends'
import './cardQuestions.css'
import CardQuestionsArea from '../Card/CardQuestionsArea'
import CardQuestionRating from '../Card/CardQuestionRating'

export default function CardQuestions() {
  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <CardIconAndTitle title="Wellbeign Scored" icon="category" />
        <CardIconAndTitle title="Surveys Running" icon="global" />
        <CardIconAndTitle title="Surveys Actioned" icon="like" />
      </div>
      <div
        // style={{ height: '410px', width: `638px` }}
        className="FirstcardsContainer secondCardContainer ResourceRight"
      >
        <div className="leftContainer">
          <div className="leftAreaUpload">
            <CardQuestionsArea/>
            <CardQuestionRating />
          </div>
        </div>
        <div className="rightContainer">
          <div className="rightUploadContainer">
          <CardSurveyRequest />
          </div>
          <div className="rightTrendingContainer">
            <CardSurveyChallenges />
          </div>
          <div className="rightTrendingContainer">
            <CardSurveyChallenges title="Contact Requests"/>
          </div>
        </div>
      </div>
    </div>
  )
}
