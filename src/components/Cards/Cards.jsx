import React from 'react';
import Card from '../Card/Card';
import CardContact from '../Card/CardContact';
import CardEditlogin from '../Card/CardEditlogin';
import CardIconAndTitle from '../Card/CardIconAndTitle';
import CardInput from '../Card/CardInput';
import CardOverviewEnding from '../Card/CardOverviewEnding';
import CardSocialmedia from '../Card/CardSocialmedia';
import CardSurveyPERMA from '../Card/CardSurveyPERMA';
import CardOverviewCheck from '../Card/CardOverviewCheck';
import './cards.css';
import CardSurveyChallenges from '../Card/CardSurveyChallenges';
import CardOverviewArea from '../Card/CardOverviewArea';
import SmallCards from './SmallCards';
import SmallCardNoBorder from './SmallCardNoBorder';
export default function Cards() {
  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <CardIconAndTitle title="Wellbeign Scored" icon="category" />
        <CardIconAndTitle title="Number Of Sector" icon="global" />
        <CardOverviewEnding />
      </div>
      <div className="FirstcardsContainer secondCardContainer">
        <CardSurveyPERMA />
        <CardOverviewCheck />
        <CardSurveyChallenges title="Reasons For Low Score" />
      </div>
      <div className="ThirdCardContainer">
        <div className="thirdFirstContainer">
          <CardOverviewArea />
        </div>
        <div className="smallContainer">

        <div className="thirdSecondContainer">
          <SmallCards title="Wellbeing Challenge Area" />
          <SmallCards title="Top Wellbeing Challenges" />
          <SmallCards  title="Trending Initiatives"/>
        </div>
        <div className="thirdSecondContainer">
          <SmallCardNoBorder title="Service Requested" />
          <SmallCardNoBorder title="Performance Challenges" />
          <SmallCardNoBorder title="Top Feelings"/>
        </div>
        </div>
      </div>
    </div>
  );
}
