import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import SingleContact from '../CardQuestions/SingleContact';
import TitleList from '../Modals/TitleLists/TitleList';

export default function CardSurveyChallenges(props) {
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const [contact, setContact] = useState();
  const [showContact, setShowContact] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getOverallSummary/${user.success.partnerId}`
      );

      setData(res.data);
    };

    fetchDatas();
    // console.log(data);
  }, [data]);
  useEffect(() => {
    const fetchDatas = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getMessagesList/${user.success.partnerId}`
      );

      setMessage(res.data);
    };

    fetchDatas();
    // console.log(message && message[0].manager_name);
  }, [message]);
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  const handleContact = (item) => {
    setContact(item);
    setShowContact(true);
  };
  useEffect(() => {
    console.log(contact);
  }, [contact]);
  let finalData = props?.areas && Object.entries(props?.areas);
  let finalMessage = message && Object.entries(message);
  // console.log(finalData)
  return (
    <div
      style={{
        marginTop: '26px',
        width: `${props.width}px`,
        height: `${props.width && ''}`,
        borderLeft: `{${props.border === 'none' && props.border}}!important`,
      }}
      className="SmallCardsContainer"
    >
      <div className="smallCardTitle">{props.title}</div>
      <div
        style={{
          width: `${props.width && 'auto'}`,
          height: `${props.width && 'maxContent'}`,
        }}
        className="smallBody"
      >
        {finalData &&
          finalData.slice(0, 2).map((keys, values) => (
            <div key={keys} className="listofwellbeing">
              {/* <p style={{fontSize:'20px',fontWeight:'bold'}}>{keys}</p> */}

              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{keys[0]}</p>
              <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{keys[1]}</p>

              {/* <p style={{fontSize:'14px',fontWeight:'bold'}}>{props.title}</p> */}
            </div>
          ))}
        {message &&
          message?.slice(0, 3).map((item, index) => (
            <div style={{ width: '270px', overflow: 'hidden' }} key={index}>
              {item.message && (
                <div
                  className="listofwellbeing"
                  onClick={() => handleContact(item)}
                >
                  <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    {item.message}
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="textAreaLink" onClick={showModal}>
        View All
      </div>
      <SingleContact
        setShowContact={setShowContact}
        show={showContact}
        item={contact}
      />
      <TitleList
      challenge={finalData}
        item={message}
        title={props.title}
        // challenge={finalData}
        show={show}
        handleClose={hideModal}
      />
    </div>
  );
}
