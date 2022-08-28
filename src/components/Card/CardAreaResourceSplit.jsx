import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function CardAreaResourceSplit(props) {
  const { user } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  // const [sub,setSub]=useState([])

  const selectSub = (number) => {
    console.log(number);
    setIsActive(!isActive);
    // isActive&&setSub([...sub,props.item])
    if (props.selectedArea === 'financial') {
      props.setListsub(
        props?.listsub?.includes(props?.item)
          ? props?.listsub.filter((n) => n !== props?.item)
          : () => [...props?.listsub, props?.item]
      );
    }
    if (props?.selectedArea === 'physical') {
      props?.setSelectedPhysical(
        props?.selectedPhysical?.includes(props?.item)
          ? props?.selectedPhysical.filter((n) => n !== props?.item)
          : () => [...props?.selectedPhysical, props?.item]
      );
    }
    // if (props?.selectedArea === 'financial') {
    //   props?.setSelectedFinancial(
    //     props?.selectedFinancial?.includes(props?.item)
    //       ? props?.selectedFinancial.filter((n) => n !== props?.item)
    //       : () => [...props?.selectedFinancial, props?.item]
    //   );
    // }
    if (props?.selectedArea === 'professional') {
      props?.setSelectedProfessional(
        props?.selectedProfessional?.includes(props?.item)
          ? props?.selectedProfessional.filter((n) => n !== props?.item)
          : () => [...props?.selectedProfessional, props?.item]
      );
    }
    if (props?.selectedArea === 'social') {
      props?.setSelectedSocial(
        props?.selectedSocial?.includes(props?.item)
          ? props?.selectedSocial.filter((n) => n !== props?.item)
          : () => [...props?.selectedSocial, props?.item]
      );
    }
    if (props?.selectedArea === 'societal') {
      props?.setSelectedSocietal(
        props?.selectedSocietal?.includes(props?.item)
          ? props?.selectedSocietal.filter((n) => n !== props?.item)
          : () => [...props?.selectedSocietal, props?.item]
      );
    }
    if (props?.selectedArea === 'mental') {
      props?.setSelectedMental(
        props?.selectedMental?.includes(props?.item)
          ? props?.selectedMental.filter((n) => n !== props?.item)
          : () => [...props?.selectedMental, props?.item]
      );
    }
    // props.selectedArea==="financial" &&   props.setListsub(props?.listsub.includes( props?.item) ? props?.listsub.filter(n => n !==  props?.item) : ()=>[...props?.listsub, props?.item])
    // props.selectedArea==="mental" &&  props.setSelectedMental(props?.selectedMental.includes( props?.item) ? props?.selectedMental.filter(n => n !==  props?.item) : ()=>[...props?.selectedMental, props?.item])
    // props.selectedArea==="professional" &&  props?.setSelectedProfessional(props?.selectedProfessional.includes( props?.item) ? props?.selectedProfessional.filter(n => n !==  props?.item) : ()=>[...props?.selectedProfessional, props?.item])
    // props.selectedArea==="physical" &&  props.setSelectedPhysical(props?.selectedPhysical.includes( props?.item) ? props?.selectedPhysical.filter(n => n !==  props?.item) : ()=>[...props?.selectedPhysical, props?.item])
    // props.selectedArea==="social" &&  props.setSelectedSocial(props?.selectedSocial.includes( props?.item) ? props?.selectedSocial.filter(n => n !==  props?.item) : ()=>[...props?.selectedSocial, props?.item])
    // props.selectedArea==="societal" &&  props.setSelectedSocietal(props?.selectedSocietal.includes( props?.item) ? props?.selectedSocietal.filter(n => n !==  props?.item) : ()=>[...props?.selectedSocietal, props?.item])
    // props.selectedArea==="financial" &&  props.setState({...props?.state,financial_splits:props?.item})
    // // console.log(props.selectedArea)
  };
  useEffect(() => {
    // console.log(props.listsub)
  }, []);

  const handleNumberClick = (number) => {
    // setSub(nums => nums.includes(number) ? nums.filter(n => n !== number) : [number, ...nums])
  };

  return (
    <div
      // style={{
      //   backgroundColor: isActive ? '#2691A3' : '',
      //   color: isActive ? 'white' : '',
      // }}
      className={`${
        props?.listsub?.includes(props?.item) ||
        props?.selectedPhysical?.includes(props?.item) ||
        props?.selectedProfessional?.includes(props?.item) ||
        props?.selectedSocial?.includes(props?.item) ||
        props?.selectedMental?.includes(props?.item) ||
        props?.selectedSocietal?.includes(props?.item)
          ? 'backAdd '
          : ''
      } singleCategory`}
      onClick={() => selectSub(props.item)}
    >
      {props.item}
    </div>
  );
}
