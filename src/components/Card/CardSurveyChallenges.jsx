import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TitleList from '../Modals/TitleLists/TitleList';

export default function CardSurveyChallenges(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getOverallSummary/21'
      );

      setData(res.data);
    };

    fetchDatas();
    // console.log(data);
  }, [data]);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  let finalData = props?.areas&&Object.entries(props?.areas)
  console.log(finalData)
  return (
    <div  style={{marginTop:'26px',width:`${props.width}px`,height:`${props.width&&'fit-content'}`, borderLeft:`{${props.border === "none" && props.border}}!important`}} className='SmallCardsContainer'>
      <div className="smallCardTitle">
      {props.title}
      </div>
      <div style={{width:`${props.width&&'auto'}`,height:`${props.width&&'maxContent'}`}} className="smallBody">

      {finalData && finalData.slice(0,2).map((keys,values) =>

        <div id={keys} className="listofwellbeing" > 
          {/* <p style={{fontSize:'20px',fontWeight:'bold'}}>{keys}</p> */}
    
          <p style={{fontSize:'12px',fontWeight:'bold'}}>{keys[0]}</p>
          <p style={{fontSize:'12px',fontWeight:'bold'}}>{keys[1]}</p>
          
         
          {/* <p style={{fontSize:'14px',fontWeight:'bold'}}>{props.title}</p> */}
        </div>
      )
        }
      </div>
      <div className="textAreaLink" onClick={showModal}>View All</div>
          <TitleList title={props.title} challenge={finalData} show={show} handleClose={hideModal}/>
    </div>
  )
}
