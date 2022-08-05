import React from 'react'
import IconAndWellbeing from '../Views/IconAndWellbeing/IconAndWellbeing'

export default function CardSurveyTrends() {
  return (
    <div className='CardSurveyTrendsContainer'>
        <div className="surveyTrendTitle">
        Wellbeing Trends
        </div>
        <div className="surveyTypeContainer">
            <div className="typeContainer">
                <div className="typeTitle">
                    Maintain
                </div>
                <div className="typeColor typeColor1">
                </div>
            </div>
            <div className="typeContainer">
                <div className="typeTitle">
                    Risk
                </div>
                <div className="typeColor typeColor2">
                </div>
            </div>
            <div className="typeContainer">
                <div className="typeTitle">
                    Issue
                </div>
                <div className="typeColor typeColor3">
                </div>
            </div>
            <div className="typeContainer">
                <div className="typeTitle">
                    
                </div>
                <div className="allIconsContainer">
                    <IconAndWellbeing/>
                </div>
            </div>
        </div>
    </div>
  )
}
