import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used
import { faStar } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import SingleSub from './SingleSub';
export default function SingleCard(props) {
  const [subAreas, setSubAreas] = useState();
  const [mainArea,setMainArea] = useState();
  const [resourceName,setResourceName] = useState();
  const fin =props.single?.areas_addressed?.split(',')
  const [single, setSingle] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getHelpAreasSplits'
      );
      setSubAreas(res.data);
    };

    fetchPosts();
  }, []);
  const handleChange=(e)=>{
    e.preventDefault();
    setResourceName(e.target.value)
  }
  useEffect(()=>{

      console.log(resourceName)
  },[resourceName])
  useEffect(()=>{
      setResourceName(props.single?.title)

  },[props.single?.title])
  useEffect(()=>{
    setSingle(props.single?.areas_addressed?.split(','))
    // console.log(props.single?.areas_addressed?.split(','))
  },[props.single?.areas_addressed])
  useEffect(()=>{

      subAreas?.map((item,key)=>item?.area === props.single?.wellbeingtype && setMainArea(()=>item.areaSplits))
  },[props.single?.wellbeingtype, subAreas])
  const handleClick = (value) => {
    // console.log(item);
    setSingle(
      single?.includes(value)
  ? single?.filter((n) => n !== value)
  : () => [...single, value]
      // single.filter((item) => item !== value.toString())
      );
    console.log(value);
    console.log(single);
};

  return (
    <>
      {props.showSingle && (
        <div
          className="listResourceContainer singleResource"
          key={props.single?.id}
        >
          <div className="TitleListContainer TitleListContainerSingle">
            <div className="listResourceTitle">{props.single?.title}</div>
            <div className="listResourceTitle"><input type="text" defaultValue={props.single?.title} onChange={handleChange} /></div>
            <div className="fffffff">
               
              {mainArea?.split(',').map((index, id) => {

                return (
                  <SingleSub single={single} handleClick={handleClick} singleArea={props.single?.areas_addressed?.split(',')} subAreas={subAreas} mainArea={mainArea?.split(',')} item={index}/>
                );
              })}
            </div>
            <div className="resourceIconContainer">
              {!parseInt(props.single?.promote_count) > 0 && (
                <div className="removeIcon">Remove</div>
              )}
              <div>
                {parseInt(props.single?.promote_count) < 0 && (
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    color="#2691a3"
                    size="2x"
                  />
                )}
              </div>
              <div className="iconandrating">
                <div className="iconcontainer">
                  {props.single?.rate > 0 && (
                    <FontAwesomeIcon icon={faStar} color="#2691a3" size="1x" />
                  )}
                </div>
                <div className="rating">{props.single?.rate}</div>
              </div>
            </div>
            <div className="closeTag" onClick={()=>props?.setShowSingle(false)}>Close</div>
          </div>
        </div>
      )}
    </>
  );
}
