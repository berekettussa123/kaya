import React, { useContext, useEffect, useState } from 'react';
import CardIconAndTitle from '../Card/CardIconAndTitle';
import CardOverviewEnding from '../Card/CardOverviewEnding';
import CardSurveyPERMA from '../Card/CardSurveyPERMA';
import CardOverviewCheck from '../Card/CardOverviewCheck';
import './cards.css';
import CardSurveyChallenges from '../Card/CardSurveyChallenges';
import CardOverviewArea from '../Card/CardOverviewArea';
import SmallCards from './SmallCards';
import SmallCardNoBorder from './SmallCardNoBorder';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
export default function Cards() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(()=>{
    console.log(user.success.partnerId)
  })
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getOverallSummary/${user.success.partnerId}`
      );

      setData(res.data);
    };

    fetchDatas();
  }, [data]);
  
  return (
    <div className="cardsContainer">
      {/* <div>{data}</div> */}
      <div className="FirstcardsContainer">
        <CardIconAndTitle width={272} count={data?.wellbeingScore} title="Wellbeing Scored" icon="category" />
        <CardIconAndTitle title="Number Of Sector" icon="edit" />
        <CardOverviewEnding width={280} ending={data?.ClosingInWeeks} />
      </div>
      <div className="FirstcardsContainer secondCardContainer">
        <CardSurveyPERMA perma={data?.permaCounts}/>
        <CardOverviewCheck feelings={data?.feelings}/>
        <CardSurveyChallenges width={286} areas={data?.lowScoreReasons} title="Reasons For Low Score" />
      </div>
      <div className="ThirdCardContainer">
        <div className="thirdFirstContainer">
          <CardOverviewArea wellbeingTotals={data?.wellbeingTotals}/>
        </div>
        <div className="smallContainer">
          <div className="thirdSecondContainer">
            <SmallCards areas={data?.wellbeingAreaStats} title="Wellbeing Challenge Area" />
            <SmallCards areas={data?.wellbeingChallenges } title="Top Wellbeing Challenges" />
            <SmallCards areas={data?.wellbeingInitiatives}  title="Trending Initiatives" />
          </div>
          <div className="thirdSecondContainer">
            <SmallCardNoBorder areas={data?.requestedServices  } title="Service Requested" />
            <SmallCardNoBorder areas={data?.performanceChallenges }  title="Performance Challenges" />
            <SmallCardNoBorder areas={data?.feelings}  title="Top Feelings" />
          </div>
        </div>
      </div>
      <div className="gap" style={{width:'100%',backgroundColor:'white',height:'60px'}}></div>
    </div>
  );
}
