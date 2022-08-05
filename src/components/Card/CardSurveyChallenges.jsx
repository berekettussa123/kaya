import React from 'react'

export default function CardSurveyChallenges(props) {
  return (
    <div className='CardResourceTrending'>
        <div className="trendingTitle">
        {props.title?props.title:"Top Well Being Challenges"}
        </div>
        <div className="trendingContainer">

        </div>
        <div className="textAreaLink">View All</div>
    </div>
  )
}
