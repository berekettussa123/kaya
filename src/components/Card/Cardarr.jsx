import React, { useState } from 'react';
import CardAreaResourceSplit from './CardAreaResourceSplit';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Cardarr(props) {
  const listIcon = [
    faCoins,
    faSmile,
    faRunning,
    faBrain,
    faUsers,
    faHandshakeSimple,
  ];
  const [isActive, setIsActive] = useState(false);
  const selectSub = () => {
    setIsActive(!isActive);
  };

  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="centerIconAndTitle" onClick={props.handleClick}>
        <div className="centerIcon">
          <FontAwesomeIcon
            icon={listIcon[props.icon]}
            color={`${
              props.selectedArea === props.item ? '#0c7c90' : '#848484'
            }`}
            // style={{ backgroundColor:`${props.selectedArea === props.item ? '#2691a3' : ''}`}}
            size="2x"
          />
        </div>
        <div className="centerTitle" id="test">
          {props.item}
          {/* Financial <br /> Wellbeing */}
        </div>
      </div>
      {/* <CardAreaMain selectedArea={props.selectedArea}
        item={props.item} finalString={props.finalString}
        /> */}
      <div>
        <div className="mainAndSub">
          {props.selectedArea === props.item && (
            <div className="categoryContainer">
              {props.finalString?.map((item, id) => {
                return (
                  <CardAreaResourceSplit
                  setState={props.setState}
                  state={props.state}
                    listsub={props.selectedSplit}
                    setListsub={props.setSelectedSplit}
                    item={item}
                    finalString={props.finalString}
                    selectedArea={props.selectedArea}
                    selectedMental={props.selectedMental}
                    selectedPhysical={props.selectedPhysical}
                    selectedProfessional={props.selectedProfessional}
                    selectedSocial={props.selectedSocial}
                    selectedFinancial={props.selectedFinancial}
                    selectedSocietal={props.selectedSocietal}
                    setSelectedMental={props.setSelectedMental}
                    setSelectedPhysical={props.setSelectedPhysical}
                    setSelectedProfessional={props.setSelectedProfessional}
                    setSelectedSocial={props.setSelectedSocial}
                    setSelectedFinancial={props.setSelectedFinancial}
                    setSelectedSocietal={props.setSelectedSocietal}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
