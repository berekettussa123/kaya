import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function CardArrayServices(props) {
  const { user } = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);
  // const [sub,setSub]=useState([])

  const selectSub = (number) => {
    console.log(number);
    setIsActive(!isActive);
    // isActive&&setSub([...sub,props.item])
(props.selectedArea === props.selectedSub)&&
    props.setListsub(
      props?.listsub?.includes(props?.item)
        ? props?.listsub.filter((n) => n !== props?.item)
        : () => [...props?.listsub, props?.item]
    );

    };
  useEffect(() => {
    // console.log(props.listsub)
  }, [props.listsub]);

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
        props?.listsub?.includes(props?.item)
         ? 'backAdd '
          : ''
      } singleCategory`}
      onClick={() => selectSub(props.item)}
    >
      {props.item}
    </div>
  );
}
