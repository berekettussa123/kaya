import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function CardSurveyPERMA(props) {
  const [perma, setPerma] = useState();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getPermaCountsForPartner/21'
      );

      setPerma(res.data);
    };

    fetchPosts();
  }, [perma]);


  return (
    <div className="CardSurveyPERMA">
      <div className="permaTitle">PERMA Spread</div>
      <div className="permasContainer">
        <div className="permaMainContainer">
          <div className="maintainContainer">
            <div className="maintainTitle">Maintain</div>
            {props.perma ? (
              <div className="maintainCheckboxs">
                <div className="mainChecbox">{props?.perma?.P1}</div>
                <div className="mainChecbox">{props?.perma?.E1}</div>
                <div className="mainChecbox">{props?.perma?.R1}</div>
                <div className="mainChecbox">{props?.perma?.M1}</div>
                <div className="mainChecbox">{props?.perma?.A1}</div>
              </div>
            ) : (
              <div className="maintainCheckboxs">
                <div className="mainChecbox">{perma?.P1}</div>
                <div className="mainChecbox">{perma?.E1}</div>
                <div className="mainChecbox">{perma?.R1}</div>
                <div className="mainChecbox">{perma?.M1}</div>
                <div className="mainChecbox">{perma?.A1}</div>
              </div>
            )}
          </div>
        </div>
        <div className="permaMainContainer">
          <div className="maintainContainer">
            <div className="maintainTitle">Support</div>
            {props.perma ? (
              <div className="maintainCheckboxs">
                <div className="supportChecbox">{props?.perma?.P2}</div>
                <div className="supportChecbox">{props?.perma?.E2}</div>
                <div className="supportChecbox">{props?.perma?.R2}</div>
                <div className="supportChecbox">{props?.perma?.M2}</div>
                <div className="supportChecbox">{props?.perma?.A2}</div>
              </div>
            ) : (
              <div className="maintainCheckboxs">
                <div className="supportChecbox">{perma?.P2}</div>
                <div className="supportChecbox">{perma?.E2}</div>
                <div className="supportChecbox">{perma?.R2}</div>
                <div className="supportChecbox">{perma?.M2}</div>
                <div className="supportChecbox">{perma?.A2}</div>
              </div>
            )}
          </div>
        </div>
        <div className="permaMainContainer">
          <div className="maintainContainer">
            <div className="maintainTitle"></div>
            <div className="maintainCheckboxs">
              <div className="asupportChecbox">P</div>
              <div className="asupportChecbox">E</div>
              <div className="asupportChecbox">R</div>
              <div className="asupportChecbox">M</div>
              <div className="asupportChecbox">A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
