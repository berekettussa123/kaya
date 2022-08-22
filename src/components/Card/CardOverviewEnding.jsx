import React from 'react'

export default function CardOverviewEnding(props) {
   const newEnding=props?.ending&& Object.values(props?.ending)
  return (
    <div className='CardOverviewEndingContainer'>
        <div className="endingTitle">
        Surveys ending - 6 weeks
        </div>
        <div className="endingContainer">
            <div className="firstEnding">
                <div className="firstColor">
                {newEnding&&newEnding[0]}
                </div>
                <div className="firstCounter">
                1
                </div>
            </div>
            <div className="firstEnding">
                <div className="firstColor firstColor2">
                
                {newEnding&&newEnding[1]}
                </div>
                <div className="firstCounter">
                    2
                </div>
            </div>
            <div className="firstEnding">
                <div className="firstColor firstColor3">
                
                {newEnding&&newEnding[2]}
                </div>
                <div className="firstCounter">
                    3
                </div>
            </div>
            <div className="firstEnding">
                <div className="firstColor firstColor4">
                {newEnding&&newEnding[3]}
                </div>
                <div className="firstCounter">
                    4
                </div>
            </div>
            <div className="firstEnding">
                <div className="firstColor firstColor5">
                {newEnding&&newEnding[4]}
                </div>
                <div className="firstCounter">
                    5
                </div>
            </div>
            <div className="firstEnding">
                <div className="firstColor firstColor6">
            {newEnding &&newEnding[5]}
                    
                </div>
                <div className="firstCounter">
                    6
                </div>
            </div>
        </div>

    </div>
  )
}
