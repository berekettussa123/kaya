import React from 'react'
import CardAreaSurvey from '../Card/CardAreaSurvey'
import CardBulkUpload from '../Card/CardBulkUpload'
import CardIconAndTitle from '../Card/CardIconAndTitle'
import CardResourcePromote from '../Card/CardResourcePromote'
import CardResourceTrending from '../Card/CardResourceTrending'
import CardSurveyTrends from '../Card/CardSurveyTrends'
import CardSurveyRequest from '../Card/CardSurveyRequest'
import CardViewResource from '../Card/CardViewResource'
import './cardServeys.css'
import CardSurveyChallenges from '../Card/CardSurveyChallenges'
import CardSurveyPERMA from '../Card/CardSurveyPERMA'
export default function CardServeys() {
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
            <CardAreaSurvey/>
            <CardSurveyTrends />
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
            <CardSurveyPERMA/>
          </div>
        </div>
      </div>
    </div>

  )
}
