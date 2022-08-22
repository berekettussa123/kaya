import React from 'react';
import './titleList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function TitleList(props) {
  return (
    <>
      {props.show && (
        <div className="titleContainerModal">
          <div className="TitleListContainer">
            <div className="TitleListTitle">
              {props.title ? props.title : 'Title Here'}
            </div>
            <div
              className={`${
                props.wellbeing ? ' hidebackground ' : ''
              } ' TitleListBody '`}
            >
              {props.resources?.map((item, id) => {
                return (
                  <div className="listResourceContainer" key={id}>
                    <div className="listResourceTitle">{item.title}</div>

                    <div className="fffffff">
                      {item.areas_addressed.split(',').map((index, id) => {
                        return (
                          <div className="resourceCategory">
                            {index.toString()}{' '}
                          </div>
                        );
                      })}
                    </div>
                    <div className="resourceIconContainer">
                      {!parseInt(item.promote_count) > 0 && (
                        <div className="removeIcon">Remove</div>
                      )}
                      <div>
                        {parseInt(item.promote_count) < 0 && (
                          <FontAwesomeIcon
                            icon={faThumbsUp}
                            color="#2691a3"
                            size="2x"
                          />
                        )}
                      </div>
                      <div className="iconandrating">
                        <div className="iconcontainer">
                          {item.rate > 0 && (
                            <FontAwesomeIcon
                              icon={faStar}
                              color="#2691a3"
                              size="1x"
                            />
                          )}
                        </div>
                        <div className="rating">{item.rate}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {props.wellbeing && (
                <div className="topWellbeingContainer topWellbeingContainerView">
                  <ul>
                    {props.wellbeing &&
                      Object.keys(props.wellbeing).map((key, index) => {
                        return (
                          <li>
                            <div key={index}>
                              <p className="keyTitle">{key}</p>

                              <p>{props.wellbeing[key]}</p>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
              {props.dataTrend && (
                <div>
                  <div className="trendingContainer poptrend">
                    {props.dataTrend?.map((item) => {
                      return (
                        <div className="trendingListItem trendingListItemPop">
                          <div className="trendTitle">{item.title}</div>
                          <div className="trendCount">{item.promote_count}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {props.challenge &&
                props.challenge.map((keys, values) => (
                  <div 
                    key={keys}
                  className="challendeArea ">

                  <div
                    className="trendingListItem trendingListItemPop"
                    >
                    <div className="trendTitle">{keys[0]}</div>
                    <div className="trendCount">{keys[1]}</div>
                  </div>
                    </div>
                ))}
              {props.description && (
                <div className="descPopUp">
                  <p>{props.description}</p>
                </div>
              )}
            </div>
            <div className="TitleListClose" onClick={props.handleClose}>
              Close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
