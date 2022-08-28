import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import TitleList from '../Modals/TitleLists/TitleList';

export default function CardResourceTrending() {
  const [dataTrend, setData] = useState();
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getTrendingResources/${user.success.partnerId}`
      );

      setData(res.data);
      // data?.map((item)=>{
      //   console.log(item.title)
      // })
    };
    fetchPosts();
  }, []);

  return (
    <div className="CardResourceTrending">
      <div className="trendingTitle">Your Trending Resources</div>
      <div className="trendingContainer">
        {dataTrend?.slice(0,10).map((item) => {
          return (
            
            <div className="trendingListItem">
              <div className="trendTitle">{item.title}</div>
              <div className="trendCount">{item.promote_count}</div>
            </div>
          );
        })}
      </div>
      <div className="textAreaLink" onClick={showModal}>
        View All
      </div>
      <TitleList dataTrend={dataTrend} title="Your Trending Resources" show={show} handleClose={hideModal} />{' '}
    </div>
  );
}
