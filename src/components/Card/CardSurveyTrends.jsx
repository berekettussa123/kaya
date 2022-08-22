import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IconAndWellbeings from '../Views/IconAndWellbeing/IconAndWellbeing';
import IconAndWellbeing from '../Views/IconAndWellbeing/IconAndWellbeing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
export default function CardSurveyTrends() {
  const [trend, setTrend] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getWellbeingTags/21'
      );

      setTrend(res.data);
    };

    fetchPosts();
  }, [trend]);
  return (
    <div className="CardSurveyTrendsContainer">
      <div className="surveyTrendTitle">Wellbeing Trends</div>
      <div className="surveyTypeContainer">
        <div className="typeContainer">
          <div className="typeTitle">Maintain</div>
          <div className="typeColor typeColor1">
            {trend && (
              <div className="valuesContainer">
                <div className="value">{trend.finanfial_tag.maintain}</div>

                <div className="value">{trend.professional_tag.maintain}</div>
                <div className="value">{trend.mental_tag.maintain}</div>
                <div className="value">{trend.physical_tag.maintain}</div>
                <div className="value">{trend.social_tag.maintain}</div>
                <div className="value">{trend.societal_tag.maintain}</div>
              </div>
            )}
          </div>
        </div>
        <div className="typeContainer">
          <div className="typeTitle">Risk</div>
          <div className="typeColor typeColor2">
            {trend && (
             <div className="valuesContainer">
             <div className="value">{trend.finanfial_tag.risk}</div>

             <div className="value">{trend.professional_tag.risk}</div>
             <div className="value">{trend.mental_tag.risk}</div>
             <div className="value">{trend.physical_tag.risk}</div>
             <div className="value">{trend.social_tag.risk}</div>
             <div className="value">{trend.societal_tag.risk}</div>
           </div>
            )}
          </div>
        </div>
        <div className="typeContainer">
          <div className="typeTitle">Issue</div>
          <div className="typeColor typeColor3">
            {trend && (
              <div className="valuesContainer">
              <div className="value">{trend.finanfial_tag.issue}</div>

              <div className="value">{trend.professional_tag.issue}</div>
              <div className="value">{trend.mental_tag.issue}</div>
              <div className="value">{trend.physical_tag.issue}</div>
              <div className="value">{trend.social_tag.issue}</div>
              <div className="value">{trend.societal_tag.issue}</div>
            </div>
            )}
          </div>
        </div>
        <div className="typeContainer">
          <div className="typeTitle"></div>
          <div className="allIconsContainer">
          <div>
        <div className="centerIconAndTitleContainer">
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <FontAwesomeIcon icon={faCoins} color="#2691a3" size="2x" />
            </div>
            <div className="centerTitle">
              Financial <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <FontAwesomeIcon icon={faSmile} color="#2691a3" size="2x" />
            </div>
            <div className="centerTitle">
              Emotional <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <FontAwesomeIcon icon={faRunning} color="#2691a3" size="2x" />
            </div>
            <div className="centerTitle">
              Physical <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <FontAwesomeIcon icon={faBrain} color="#2691a3" size="2x" />
            </div>
            <div className="centerTitle">
              Mental <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <FontAwesomeIcon icon={faUsers} color="#2691a3" size="2x" />
            </div>
            <div className="centerTitle">
              Social <br /> Wellbeing
            </div>
          </div>
          <div className="centerIconAndTitle">
            <div className="centerIcon">
              <FontAwesomeIcon
                icon={faHandshakeSimple}
                color="#2691a3"
                size="2x"
              />
            </div>
            <div className="centerTitle">
              Societal <br /> Wellbeing
            </div>
          </div>
        </div>
      </div>
            </div>
        </div>
      </div>
    </div>
  );
}
