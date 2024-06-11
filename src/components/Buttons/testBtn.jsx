import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TestBtn = () => {
  const [activeButton, setActiveButton] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setActiveButton(index);
    if (index === 1) {
      navigate('/hall-report');
    } else {
      navigate('/hall-details');
    }
  };
  return (
    <div>
      <div className="btn-group flex bg-white">
        <button className={`btn ${activeButton === 0 ? 'active' : ''}`}
          onClick={() => handleButtonClick(0)}>
          <Link to="/hall-details">Hall Details</Link>
        </button>
        <button className={`btn ${activeButton === 1 ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleButtonClick(1);
          }}>
          <Link to="/hall-report">Hall Reports</Link>
        </button>
      </div>
    </div>
  )
}

export default TestBtn;