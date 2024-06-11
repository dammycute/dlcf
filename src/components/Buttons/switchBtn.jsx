import React, { useState } from 'react';
import HallReportData from '../Dashboard/HallReport/HallReportData';
import MemberInfo from '../Dashboard/MemberInfo/MemberInfo';

const SwitchButtons = () => {
  const [selectedComponent, setSelectedComponent] = useState[0]
  const [activeButton, setActiveButton] = useState[0]

  const components = [
    <HallReportData key="1"/>,
    <MemberInfo key="2"/>,
    <HallReportData key="3"/>,
    <HallReportData key="4"/>
  ]

  const handleClick = (index) =>{
    setSelectedComponent(index)
    setActiveButton(index)
  }

  return (
    <div className="">
      <div className="btn-group1 flex bg-white">
        <button className={activeButton === 0 ? 'active' : ''} onClick={() => handleClick(0)}>Morning Prayer</button>
        <button className={activeButton === 1 ? 'active' : ''} onClick={() => handleClick(1)}>Night Prayer</button>
        <button className={activeButton === 2 ? 'active' : ''} onClick={() => handleClick(2)}>koinonia</button>
        <button className={activeButton === 3 ? 'active' : ''} onClick={() => handleClick(3)}>Evangelism</button>
        {components[selectedComponent]}
      </div>
    </div>
  );
};


const buttonStyles = `
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  cursor: pointer;

  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;


export default SwitchButtons;