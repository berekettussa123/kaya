import React, { useEffect, useState } from 'react';

export default function CardAreaResourceSplit(props) {
  const [isActive, setIsActive] = useState(false);
  // const [sub,setSub]=useState([])

  const selectSub = (number) => {
    setIsActive(!isActive);
    // isActive&&setSub([...sub,props.item])
    props.setListsub(
      props?.listsub.includes(props?.item)
        ? props?.listsub.filter((n) => n !== props?.item)
        : () => [...props?.listsub, props?.item]
    );
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
  }, [props.listsub]);

  const handleNumberClick = (number) => {
    // setSub(nums => nums.includes(number) ? nums.filter(n => n !== number) : [number, ...nums])
  };

  return (
    <div
      style={{
        backgroundColor: isActive ? '#2691A3' : '',
        color: isActive ? 'white' : '',
      }}
      className="singleCategory"
      onClick={selectSub}
    >
      {props.item}
    </div>
  );
}
