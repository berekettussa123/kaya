import React, { useEffect, useRef, useState } from 'react';
import Card from '../Card/Card';
import CardContact from '../Card/CardContact';
import CardEditlogin from '../Card/CardEditlogin';
import CardInput from '../Card/CardInput';
import CardProfileGeographic from '../Card/CardProfileGeographic';
import CardSocialmedia from '../Card/CardSocialmedia';
import CardTextArea from '../Card/CardTextArea';
import CardProfilePreview from '../Card/CardProfilePreview';
import axios, { Axios } from 'axios';

export default function CardProfile() {
  const [profileData, setData] = useState({});
  const [logo, setLogo] = useState();
  const nameRef = useRef();
  const [file, setFile] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    // name: nameRef.current?.value,
    username: profileData?.username ? profileData?.username : '',
    name: profileData?.name ? profileData.name : '',
    first_name: profileData?.first_name ? profileData?.first_name : '',
    surname: profileData?.surname ? profileData?.surname : '',
    email: profileData?.email ? profileData?.email : '',
    phone: profileData?.phone ? profileData?.phone : '',
    password: profileData?.password ? profileData?.password : '',
    facebook_handle: profileData?.facebook_handle
      ? profileData?.facebook_handle
      : '',
    twitter_handle: profileData?.twitter_handle
      ? profileData?.fwitter_handle
      : '',
    youtube_handle: profileData?.ioutube_handle
      ? profileData?.youtube_handle
      : '',
      picturefile: file ? file : '',
    linkedin_handle: profileData?.iinkedin_handle
      ? profileData?.linkedin_handle
      : '',
    instagram_handle: profileData?.instagram_handle
      ? profileData?.instagram_handle
      : '',
    url: profileData?.url ? profileData?.url : '',
    description: profileData?.description ? profileData?.description : '',
  });

  const saveProfile = async () => {
    setOpen(true);
    await axios({
      method: 'post',
      url: 'https://partnerdev.kayawellbeingindex.com/api/updatePartner',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: state,
    })
      .then(function (response) {
        // console.log(response);
        setOpen(false);
        console.log(state);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(()=>{
    // console.log(state)
  },[state])

  const handleClose = () => {
    setOpen(true);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getOverallSummary/21'
      );
      
      console.log(typeof(res.data))
    };
    fetchPosts()
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        'https://partnerdev.kayawellbeingindex.com/api/getPartnerInformation/21'
      );

      setData(res.data);
      setState({
        username: profileData?.username ? profileData?.username : '',
        name: profileData?.name ? profileData.name : '',
        first_name: profileData?.first_name ? profileData?.first_name : '',
        surname: profileData?.surname ? profileData?.surname : '',
        email: profileData?.email ? profileData?.email : '',
        phone: profileData?.phone ? profileData?.phone : '',
        password: profileData?.password ? profileData?.password : '',
        facebook_handle: profileData?.facebook_handle
          ? profileData?.facebook_handle
          : '',
        twitter_handle: profileData?.twitter_handle
          ? profileData?.fwitter_handle
          : '',
        youtube_handle: profileData?.youtube_handle
          ? profileData?.youtube_handle
          : '',
        linkedin_handle: profileData?.linkedin_handle
          ? profileData?.linkedin_handle
          : '',
        instagram_handle: profileData?.instagram_handle
          ? profileData?.instagram_handle
          : '',
        picturefile: file,
        url: profileData?.url ? profileData?.url : '',
        description: profileData?.description ? profileData?.description : '',
      });
    };
  

    fetchPosts();
  }, [file, profileData?.description, profileData?.email, profileData?.facebook_handle, profileData?.first_name, profileData?.fwitter_handle, profileData?.linkedin_handle, profileData?.instagram_handle, profileData?.youtube_handle, profileData.name, profileData?.password, profileData?.phone, profileData?.surname, profileData?.twitter_handle, profileData?.url, profileData?.username]);

  var blob = new Blob(
    ['https://partnerdev.kayawellbeingindex.com/' + profileData?.logo],
    {
      type: 'image/png',
    }
  );
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onloadend = function () {
    var base64String = btoa(
      String.fromCharCode(
        ...new Uint8Array(
          'https://partnerdev.kayawellbeingindex.com/' + profileData?.logo
        )
      )
    );
    setLogo(base64String);
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  const handleChangelogo = (e) => {
    setFile(e.target.files[0]);
    setState({
      ...state,
      [e.target.name]: file,
    });
    console.log(state);
  };
  return (
    <div className="cardsContainer">
      
      <div className="FirstcardsContainer">
        <Card
          name={profileData?.picturefile}
          handleChange={handleChangelogo}
          file={file}
          setFile={setFile}
          image={
            'https://partnerdev.kayawellbeingindex.com/' + profileData.logo
          }
          title="Wellbeing Score"
        />
        <CardInput
          handleChange={handleChange}
          name={profileData?.name}
          title="Business Name"
          icon="phone"
          nameRef={nameRef}
        />
        <CardInput
          handleChange={handleChange}
          name={profileData?.url}
          title="Web Address"
          icon="global"
        />
      </div>
      <div
        // style={{ height: '410px', width: `638px` }}
        className="FirstcardsContainer secondCardContainer"
      >
        <CardTextArea
          handleChange={handleChange}
          description={profileData?.description}
        />
        <div className="ContactAndEdit">
          <CardContact
            handleChange={handleChange}
            Contactvalues={[
              profileData?.first_name,
              profileData?.surname,
              profileData?.email,
              profileData?.phone,
            ]}
          />
          <CardEditlogin
            handleChange={handleChange}
            LoginData={[profileData?.username, profileData?.password]}
          />
        </div>
      </div>
      <div className="profileSocialAndGeo">
        <CardSocialmedia
          handleChange={handleChange}
          values={[
            profileData?.facebook_handle,
            profileData?.twitter_handle,
            profileData?.instagram_handle,
            profileData?.youtube_handle,
            profileData?.linkedin_handle,
          ]}
        />
        <CardProfileGeographic geographicareas={profileData?.geographicareas}/>
        <CardProfilePreview
        profileData={profileData}
        image={'https://partnerdev.kayawellbeingindex.com/' + profileData.logo}
          open={open}
          handleClose={handleClose}
          saveProfile={saveProfile}
        />
      </div>
    </div>
  );
}
