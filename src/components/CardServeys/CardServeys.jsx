import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import CardWellBeing from '../CardsServices/CardWellBeing'
export default function CardServeys() {
  const [trend, setTrend] = useState();
  const [wellbeing, setWellbeing] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getWellbeingServices/21'
      );

      setWellbeing(res.data);
    };

    fetchPosts();
    // console.log(wellbeing)
  }, [wellbeing]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getSurveySummaryForPartner/21'
      );

      setTrend(res.data);
    };

    fetchPosts();
  }, [trend]);

  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <CardIconAndTitle count={trend?.averageScore} title="Wellbeign Scored" icon="category" />
        <CardIconAndTitle count={trend?.runningSurveysCount} title="Surveys Running" icon="global" />
        <CardIconAndTitle count={trend?.completedSurveysCount} title="Surveys Actioned" icon="like" />
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
          <CardWellBeing
          wellbeing={wellbeing}
          desc="Service Requested"
          request="request"
          width={215}
        />
          </div>
          <div className="rightTrendingContainer">
          <CardWellBeing
          from={"from"}
          wellbeing={wellbeing}
          desc="Top Wellbeing Challenges"
          challenge="challenge"
          width={215}
        />
          </div>
          <div className="rightTrendingContainer">
            <CardSurveyPERMA/>
          </div>
        </div>
      </div>
    </div>

  )
}
