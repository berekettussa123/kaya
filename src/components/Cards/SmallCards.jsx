import { border } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TitleList from '../Modals/TitleLists/TitleList';

export default function SmallCards(props) {
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
    <div style={{borderLeft:`{${props.border === "none" && props.border}}!important`}} className='SmallCardsContainer'>
      <div className="smallCardTitle">
      {props.title}
      </div>
      <div className="smallBody">

      {finalData && finalData.slice(0,3).map((keys,values) =>

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
