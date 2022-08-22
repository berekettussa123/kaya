import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListOfSurvey from '../Views/ListOfSurvey/ListOfSurvey';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
export default function CardAreaSurvey() {
  const [survey, setSurvey] = useState([]);
  const [surveyUpdated, setSurveyUpdates] = useState();
  const [loading, setLoading] = useState(true);
  const [surveyCopy, setSurveyCopy] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          'https://partnerdev.kayawellbeingindex.com/api/getSurveysListForPartner/21'
        );
        setSurvey(res.data);
        
        setLoading(false)
        // console.log(survey)
      } catch (error) {
        
      }

    };

    fetchPosts();
    // console.log(survey)
  }, [survey]);
  useEffect(() => {
    setSurveyCopy(survey);
    setList(survey);
  }, [survey]);
  // useEffect(()=>{
  //   console.log(surveyCopy)
  // },[surveyCopy])
  const [list, setList] = useState();
  const handleDelete = async (id) => {
    // setSurveyCopy(surveyCopy.filter((o, i) => item !== i))

    const res = await axios({
      method: 'post',
      url: 'https://partnerdev.kayawellbeingindex.com/api/deleteSurvey',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: {
        project_id: id,
      },
    });
    const newList = surveyCopy.filter((item) => item.project_id !== id);
    setList(newList);
    console.log(res);
  };
  return (
    <div className="surveyAreaContainer">
      <div className="buttonContainerSurvey">
        <div className="centerButton3 centerbtn centerbtn1">
          <a
            target={'_blank'}
            href="https://partnerdev.kayawellbeingindex.com/login/register/21"
          >
            Create Survey
          </a>
        </div>
        {/* <div className="centerButton3 centerbtn centerbtn2" onClick={()=>window.location.reload()}>View Survey</div> */}
      </div>
      <div className="surveyTable">
        <div className="surveyTitleContainer">
          <div className="surveyTitle">Company</div>
          <div className="surveyTitle surveyTitleLink">Link</div>
          <div className="surveyTitle surveyTitlecenter">Action</div>
          <div className="surveyTitle surveyTitlecenter">End Date</div>
          <div className="surveyTitle surveyTitlecenter">Expected</div>
          <div className="surveyTitle surveyTitlecenter">Recieved</div>
        </div>
        {list?.map((item) => (
          <div>
            {loading ? 
              (
              <Box sx={{ width: "100%"}}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            ):
            (
              <ListOfSurvey
                item={item}
                handleDelete={() => handleDelete(item.project_id)}
              />
            )
             
            }
          </div>
        ))}
        {/* <ListOfSurvey />
        <ListOfSurvey />
        <ListOfSurvey />
        <ListOfSurvey /> */}
      </div>
      <div className="centerButtonContainer">
        <div className="centerButton3 centerbtn centerbtn2" onClick={()=>window.location.reload()}>Update Survey</div>
      </div>
    </div>
  );
}
