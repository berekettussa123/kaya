import React from 'react';

export default function SingleContact(props) {
  return (
    <div>
      {props.show && (
        <div className="titleContainerModal">
          <div className="TitleListContainer TitleListContainerContact">
            
            <div
              className={`${
                props.wellbeing ? ' hidebackground ' : ''
              } ' TitleListBody TitleListBodyContact '`}
            >
              <div  className="challendeArea ">
                <div className="trendingListItem trendingListItemPop trendingListItemPopContact">
                  <div className="trendCount">Manager Name: {props.item.manager_name}</div>
                  <div className="trendCount">Email: {props.item.email}</div>
                  <div className="trendTitle">Message: {props.item.message}</div>
                </div>
              </div>
            </div>
            <div
              className="TitleListClose"
              onClick={() => props.setShowContact(false)}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
