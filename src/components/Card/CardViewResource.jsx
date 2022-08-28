import React, { useContext, useEffect, useState } from 'react';
import ListOfResources from '../Views/ListOfResourceView/ListOfResources';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used
import { faStar } from '@fortawesome/free-solid-svg-icons'; // <-- import styles to be used
import { red } from '@material-ui/core/colors';
import '../../components/Views/ListOfResourceView/listOfResources.css';
import TitleList from '../Modals/TitleLists/TitleList';
import SingleCard from './SingleCard';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../../context/AuthContext';
export default function CardViewResource() {
  const [show, setShow] = useState(false);
  const [showSingle, setShowSingle] = useState(false);
  const { user } = useContext(AuthContext);
  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  const [areaSplit, setAreaSplit] = useState();
  const [view, setView] = useState();
  const [single, setSingle] = useState();
  const [viewArray, setViewArray] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getTrendingResources/${user.success.partnerId}`
      );

      setView(res.data);
    };

    fetchPosts();
  }, [view]);
  useEffect(()=>{

    // console.log(view)
  },[view])

  useEffect(() => {
    view?.map((item) => setAreaSplit(() => item.areas_addressed));
    
  },[view]);
  view?.sort((a, b) => (b.rate > a.rate ? 1 : -1));
  const handleRemove = async (item) => {
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/removeResource`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: { resourceId: item },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="CardViewResource">
      <div className="viewTitle">View Resources</div>
      {/* {view?.slice(0, 2).map((item, id) => { */}
      {view?.map((item, id) => {
        return (
          <div className="listResourceContainer" onClick={()=>setSingle(item)} key={id}>
           {(item?.title&& !item?.document_url)&& <div className="listResourceTitle" >{item.title}</div>}
           {(item?.title&& item?.document_url)&& <div className="listResourceTitle" >{item.title}</div>}
           {(item?.document_url&& !item?.title) && <div className="listResourceTitle" >{item?.document_url}</div>}
            <div className="fffffff">
              {item.areas_addressed?.split(',').map((index, id) => {
                
                return (
                  <div style={{display:!index&&'none'}} className="resourceCategory resourceCategoryAll">{index.toString()} </div>
                );
              })}
            </div>
            <div className="resourceIconContainer">
              {!parseInt(item.promote_count) > 0 && (
                <div className="removeIcon" onClick={()=>handleRemove(item.id)}>Remove</div>
              )}
             
              <div onClick={()=>setShowSingle(true)}>
                
                  <FontAwesomeIcon
                    icon={faEdit}
                    color="#2691a3"
                    size="2x"
                    
                  />
                
              </div>
              <div className="iconandrating">
                <div className="iconcontainer">
                  
                    <FontAwesomeIcon icon={faStar} color="#2691a3" size="1x" />
                  
                </div>
                <div className="rating">{item.rate}</div>
              </div>
            </div>
          </div>
        );
      })} 
      {/* <ListOfResources/> */}
      {/* <div className="textAreaLink" onClick={showModal}>
        View All
      </div> */}
        <SingleCard setShowSingle = {setShowSingle} showSingle={showSingle}  single={single}/>
      {/* <TitleList
        title="View Resources"
        resources={view}
        show={show}
        handleClose={hideModal}
      /> */}
    </div>
  );
}
