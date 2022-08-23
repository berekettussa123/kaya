import React, { useEffect, useState } from 'react';

export default function SingleSub(props) {
  const [include, setInclude] = useState([
    props?.singleArea && props?.singleArea,
  ]);
  const [final, setFinal] = useState([]);
  const mainSub = props.mainArea;
  const singleSub = props?.singleArea;
  const [single, setSingle] = useState(['Sleep issues'," Diet and Healthy eating"," Disability Support"," Menopause and Women Issues"]);
  // const [single, setSingle] = useState(["Money Saving tips","Help with Tax and Annual returns"]);
  
  useEffect(() => {
          // console.log(singleSub?.includes(single), single);
          //   setSingle(singleSub)
          // setInclude(singleSub)
          console.log(props.single);
        },
        [props.single]
        );
        // console.log(mainSub);
        // console.log(singleSub);
        // console.log(single);

        const handleClick = (value) => {
          // console.log(item);
          setSingle(
            single.includes(value)
        ? single.filter((n) => n !== value)
        : () => [...single, 'new']
            // single.filter((item) => item !== value.toString())
            );
          console.log(value);
  };


  return (
    <div
      style={{
        // backgroundColor: `${singleSub?.includes(props.item) && '#2691a3'}`,
        // color: `${singleSub?.includes(props.item) && 'white'}`,
      }}
      className={`${props.single.includes(props.item) ?'backAdd ':''} resourceCategory resourceCategorySingle`}
        // onClick={() =>setSingle( single?.filter((e) => e !== props.item) )}
      onClick={()=>props.handleClick(props.item)}
    >
      {props.item.toString()}
    </div>
  );
}
