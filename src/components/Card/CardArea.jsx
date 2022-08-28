import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import IconAndWellbeing from '../Views/IconAndWellbeing/IconAndWellbeing';
// import './iconAndWellbeing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import CardAreaResourceSplit from './CardAreaResourceSplit';
import CardAreaMain from './CardAreaMain';
import Cardarr from './Cardarr';
import { AuthContext } from '../../context/AuthContext';

export default function CardArea(props) {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getPartnerInformation/${user.success.partnerId}`
      );

      setProfileData(res.data);
    };
    // console.log(profileData)

    fetchPosts();
  });
  useEffect(() => {});
  const [selectedArea, setSelectedArea] = useState();
  const [area, setArea] = useState();
  const [profileData, setProfileData] = useState({});
  const [split, setSplit] = useState();
  const [areaSplitItem, setAreaSplit] = useState();
  const [isActive, setIsActive] = useState(false);
  const [finalString, setfinalString] = useState([]);
  const [selectedSplit, setSelectedSplit] = useState();
  const [selectedProfessional, setSelectedProfessional] = useState([]);
  const [selectedPhysical, setSelectedPhysical] = useState([]);
  const [selectedMental, setSelectedMental] = useState([
    props.profileData?.mental_splits,
  ]);
  const [selectedFinancial, setSelectedFinancial] = useState([]);
  const [selectedSocial, setSelectedSocial] = useState([]);
  const [selectedSocietal, setSelectedSocietal] = useState([]);
  const [data, setData] = useState();

  const [file, setFile] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    username: '',
    financial_splits: '',
    professional_splits: '',
    mental_splits: '',
    physical_splits: '',
    social_splits: '',
    societal_splits: '',
  });

  // useEffect(()=>{
  //   axios.post('https://partnerdev.kayawellbeingindex.com/api/updatePromotedAreas',{
  //     username:"vijay@nairvijay.com",
  //     promotedAreas:',,'
  //   })
  // })

  useEffect(() => {
    setState({
      username: profileData.username,
      societal_splits: profileData.societal_splits,
      social_splits: profileData.social_splits,
      mental_splits: profileData.mental_splits,
      physical_splits: profileData.physical_splits,
      professional_splits: profileData.professional_splits,
      financial_splits: profileData.financial_splits?profileData.financial_splits:'',
    });
    //  props.profileData?.financial_splits &&
    setSelectedSplit(profileData.financial_splits? profileData?.financial_splits?.split(','):'');
    //    props.profileData?.professional_splits &&
    setSelectedProfessional(profileData?.professional_splits?.split(','));
    //    props.profileData?.financial_splits &&
    // setSelectedFinancial(profileData?.financial_splits?.split(','));
    //    props.profileData?.physical_splits &&
    setSelectedPhysical(profileData?.physical_splits?.split(','));
    //    props.profileData?.mental_splits &&
    setSelectedMental(profileData?.mental_splits? profileData?.mental_splits?.split(','):'');
    //   props.profileData?.social_splits &&
    setSelectedSocial(profileData?.social_splits?.split(','));
    //    props.profileData?.societal_splits &&
    setSelectedSocietal(profileData?.societal_splits?.split(','));
    // console.log(props.profileData?.mental_splits)
    // console.log(selectedMental&&selectedMental);
    //  console.log({
    //    selectedMental:selectedMental,
    //    selectedPhysical:selectedPhysical,
    //    selectedFinancial:selectedFinancial,
    //    selectedProfessional:selectedProfessional,
    //    selectedSocial:selectedSocial,
    //    selectedSocietal:selectedSocietal,
    //  });
  }, [
    profileData.financial_splits,
    profileData.mental_splits,
    profileData.physical_splits,
    profileData.professional_splits,
    profileData.social_splits,
    profileData.societal_splits,
    profileData.username,
  ]);

  useEffect(() => {
    // console.log(selectedArea);
    // console.log(selectedMental);
    // console.log(selectedMental);
    // console.log(selectedProfessional);
  }, [profileData,selectedArea]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getSupportAreas`
      );
      setArea(res.data);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getHelpAreasSplits`
      );

      setSplit(res.data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    split?.map((item) => {
      selectedArea === item.area && setAreaSplit(() => item.areaSplits);
    });
  }, [selectedArea, split]);
  // const selectSub = () => {
  //   setIsActive((current) => !current);
  // };
  useEffect(() => {
    const newLocal = areaSplitItem?.split(',');
    setfinalString(newLocal);
  }, [areaSplitItem]);

  const saveProfile = async () => {
    setOpen(true);
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/updatePartnerAreaSplits`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: {
        username:`${user.success.username}`,
        financial_splits:selectedSplit.toString(),
        professional_splits:selectedProfessional.toString(),
        mental_splits:selectedMental.toString(),
        physical_splits:selectedPhysical.toString(),
        social_splits:selectedSocial.toString(),
        societal_splits:selectedSocietal.toString()
      },
    })
      .then(function (response) {
        console.log(response);
        setOpen(false);
        // window.location.reload();
        // console.log(state);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClick = (item) => {
    setSelectedArea(item);
    console.log(item);
  };

  return (
    <div className="resourceAreaContainer">
      <div className="areaTitle">
        Please choose the area of wellbeing you support
      </div>
      <div className="areaCenter">
        <div className="centerTitleMain">
          Enter your wellbeing service details on here. This will enable KAYA to
          promote your services to employees and employers who are searching for
          solution providers with your skills and services
        </div>
        <div>
          <div>
            <div
              className={`${
                selectedArea ? 'selectedAreaClicked ' : ''
              } centerIconAndTitleContainer`}
            >
              {area?.map((item, i) => {
                return (
                  <Cardarr
                    setState={setState}
                    state={state}
                    selectedSplit={selectedSplit}
                    selectedMental={selectedMental}
                    selectedPhysical={selectedPhysical}
                    selectedProfessional={selectedProfessional}
                    selectedSocial={selectedSocial}
                    selectedFinancial={selectedFinancial}
                    selectedSocietal={selectedSocietal}
                    setSelectedSplit={setSelectedSplit}
                    setSelectedMental={setSelectedMental}
                    setSelectedPhysical={setSelectedPhysical}
                    setSelectedProfessional={setSelectedProfessional}
                    setSelectedSocial={setSelectedSocial}
                    setSelectedFinancial={setSelectedFinancial}
                    setSelectedSocietal={setSelectedSocietal}
                    finalString={finalString}
                    selectedArea={selectedArea}
                    handleClick={() => handleClick(item)}
                    icon={i}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div>{/* <CardAreaMain/> */}</div>

        {/* <button className="centerbtn">Select All</button> */}
      </div>
      <div className="centerButtonContainer">
        <div className="centerButton3 centerbtn" onClick={saveProfile}>
          Save Resource
        </div>
      </div>
    </div>
  );
}
