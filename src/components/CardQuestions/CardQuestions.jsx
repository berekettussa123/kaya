import React, { useContext, useEffect, useState } from 'react'
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
import axios from 'axios'
import SmallCardNoBorder from '../Cards/SmallCardNoBorder'
import CardWellBeing from '../CardsServices/CardWellBeing'
import { AuthContext } from '../../context/AuthContext'


export default function CardQuestions() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  const [wellbeing, setWellbeing] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getWellbeingServices/${user.success.partnerId}`
      );

      setWellbeing(res.data);
    };

    fetchPosts();
    // console.log(wellbeing)
  }, [wellbeing]);
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getOverallSummary/${user.success.partnerId}`
      );

      setData(res.data);
    };

    fetchDatas();
  }, [data]);
  
  const [questions, setQuestions] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getQuestionStats/${user.success.partnerId}`
      );
      setQuestions(res.data);
    };

    fetchPosts();
    // console.log(questions)
  }, [questions]);

  return (
    <div className="cardsContainer">
      <div className="FirstcardsContainer">
        <CardIconAndTitle questions={questions?.questions_asked} title="Questions Asked" icon="category" />
        <CardIconAndTitle questions={questions?.questions_answered} title="Questions Answered" icon="global" />
        <CardIconAndTitle questions={questions?.averate_rating} title="Averate Rating" icon="like" />
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
            <SmallCardNoBorder areas={data?.requestedServices  } from="questionPage" title="Service Requested" />
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
            <CardSurveyChallenges width="ljk" title="Contact Requests"/>
          </div>
        </div>
      </div>
      
      <div className="gap" style={{width:'100%',backgroundColor:'white',height:'60px'}}></div>
    </div>
  )
}
