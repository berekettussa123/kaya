import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

export default function CardArea(props) {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getPartnerInformation/21'
      );

      setProfileData(res.data);
      setState({
        username: profileData?.username ? profileData?.username : '',
        financial_splits: [profileData?.financial_splits
          ? profileData.financial_splits
          : ''],
        professional_splits: profileData?.professional_splits
          ? profileData?.professional_splits
          : '',
        mental_splits: profileData?.mental_splits
          ? profileData?.mental_splits
          : '',
        physical_splits: profileData?.physical_splits
          ? profileData?.physical_splits
          : '',
        social_splits: profileData?.social_splits
          ? profileData?.social_splits
          : '',
        societal_splits: profileData?.societal_splits
          ? profileData?.societal_splits
          : '',
      });
      // setState({});
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
  const [selectedSplit, setSelectedSplit] = useState([
    props?.profileData?.financial_splits,
  ]);
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
    // name: nameRef.current?.value,
    username: profileData?.username ? profileData?.username : '',
    financial_splits:[ profileData?.financial_splits
      ? profileData.financial_splits
      : ''],
    professional_splits: profileData?.professional_splits
      ? profileData?.professional_splits
      : '',
    mental_splits:[ profileData?.mental_splits ? profileData?.mental_splits : ''],
    physical_splits: profileData?.physical_splits
      ? profileData?.physical_splits
      : '',
    social_splits: profileData?.social_splits ? profileData?.social_splits : '',
    societal_splits: profileData?.societal_splits
      ? profileData?.societal_splits
      : '',
  });

  useEffect(() => {
    //  props.profileData?.financial_splits &&
    //    setSelectedSplit(props.profileData?.financial_splits);
    //    props.profileData?.professional_splits &&
    //    setSelectedProfessional(props.profileData?.professional_splits);
    //    props.profileData?.financial_splits &&
    //    setSelectedFinancial(props.profileData?.financial_splits);
    //    props.profileData?.physical_splits &&
    //    setSelectedPhysical(props.profileData?.physical_splits);
    //    props.profileData?.mental_splits &&
    //   setSelectedMental( props.profileData?.mental_splits);
    //   props.profileData?.social_splits &&
    //    setSelectedSocial(props.profileData?.social_splits);
    //    props.profileData?.societal_splits &&
    //    setSelectedSocietal(props.profileData?.societal_splits);
    // console.log(props.profileData?.mental_splits)
    // console.log(selectedMental&&selectedMental);
    console.log(state);
    //  console.log({
    //    selectedMental:selectedMental,
    //    selectedPhysical:selectedPhysical,
    //    selectedFinancial:selectedFinancial,
    //    selectedProfessional:selectedProfessional,
    //    selectedSocial:selectedSocial,
    //    selectedSocietal:selectedSocietal,
    //  });
  }, [
    props.profileData?.mental_splits,
    selectedMental,
    selectedPhysical,
    selectedSocial,
    selectedSplit,
    state,
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getSupportAreas'
      );
      setArea(res.data);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getHelpAreasSplits'
      );

      setSplit(res.data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
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
  }, [areaSplitItem, finalString]);

  const saveProfile = async () => {
    setOpen(true);
    await axios({
      method: 'post',
      url: 'https://partnerdev.kayawellbeingindex.com/api/updatePartnerAreaSplits',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: state,
    })
      .then(function (response) {
        console.log(response);
        setOpen(false);
        window.location.reload();
        // console.log(state);
      })
      .catch(function (error) {
        console.log(error);
      });
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
                    handleClick={() => setSelectedArea(item)}
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
