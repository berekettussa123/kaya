import React, { useContext } from 'react';
import IconAndWellbeing from '../Views/IconAndWellbeing/IconAndWellbeing';
import ListOfQuestionRating from '../Views/ListOfQuestionRating/ListOfQuestionRating';
import { useEffect, useRef, useState } from 'react';
// import './iconAndWellbeing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
export default function CardQuestionRating() {
  const [data, setData] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getQuestionStats/${user.success.partnerId}`
      );

      setData(res.data);
    };

    fetchDatas();
   
  }, [data]);
  useEffect(()=>{
    // data && Object.values(data.ratings.financial).map((values)=>
    //     console.log(values)
    // )
  },[data])

  return (
    <div className="CardQuestionRatingContainer">
      <div className="qRetingTitle">Question Rating</div>
      <div className="qRatingsContainer">
        <ListOfQuestionRating rate='5.0' color="#4AA9BF" data={ data && Object.values(data.ratings.financial)}/>
        <ListOfQuestionRating rate='4.9' color="#9AD2C5" data={ data && Object.values(data.ratings.professional)}/>
        <ListOfQuestionRating rate='4.9' color="#F7BB1F" data={ data && Object.values(data.ratings.mental)}/>
        <ListOfQuestionRating rate='4.9' color="#F7BB1F" data={ data && Object.values(data.ratings.physical)}/>
        <ListOfQuestionRating rate='4.9' color="#EE7D2F" data={ data && Object.values(data.ratings.social)}/>
        <ListOfQuestionRating rate='4.9' color="#E9666B" data={ data && Object.values(data.ratings.societal)}/>
      </div>
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
  );
}
