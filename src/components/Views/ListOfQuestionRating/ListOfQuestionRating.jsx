import React from 'react';
import './listOfQuestionRating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function ListOfQuestionRating(props) {
  // useEffect(() => {
  //   data &&
  //     Object.values(data.ratings.financial).map((values) =>
  //       console.log(values)
  //     );
  // }, [data]);
  return (
    <div className="ListOfQuestionRatingContainer">
      <div className="qRatingList" style={{backgroundColor:`${props.color}`}}>
        <div className="qRatingListItem">
          <FontAwesomeIcon icon={faStar} color="#ffb934" fontSize="15px" />
          <div className="qratingNumber">{props.rate}</div>
        </div>
        <div className="ratingSContainer">
          {props.data && props.data.map((values) => <div>{values}</div>)}
        </div>
      </div>
    </div>
  );
}
