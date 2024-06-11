import React, { useState, useEffect } from 'react';
import Logo from "../../assets/logo.png";
import SignupImage from "../../assets/signupp.png";
import Profile from "../../assets/profile.png";
import UserTag from "../../assets/user-tag.png";
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const [borderColor, setBorderColor] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRoleSelection = (role, color) => {
    setBorderColor(color);
    setSelectedRole(role);
  };

  const navigate = useNavigate()

  const handleContinue = () => {
    if (selectedRole === 'worker') {
      navigate("/worker-registration")
      // Additional logic for workers
    } else if (selectedRole === 'member') {
      navigate("/member-registration")
      
      // Additional logic for members
    }
  };

  return (
    <div>
      <div className={`contain flex ${windowWidth <= 970 ? "flex-col" : "justify-between"}`}>
        <div className={`w-full ${windowWidth > 970 ? "lg:w-2/5 pt-16" : "pt-4"}`}>
          <div className="">
            <img src={Logo} alt="" className="mx-auto" />
          </div>

          <div className="mt-5 text-center">
            <h1 className="font-bold">Deeper Life Campus Fellowship</h1>
            <p className="mt-3 font-extralight">Akure Region</p>
          </div>

          <div className="mt-12">
            <div className="px-12">
              <h1 className='mb-6 xl:mx-4 font-medium'>What best describes you?</h1>
              <div>
                <div className={`flex items-center border rounded-3xl cursor-pointer ${borderColor === 'border-blue-800' ? 'border-blue-800' : ''} px-3 py-4 mb-7 xl:mx-5`} onClick={() => handleRoleSelection('worker', 'border-blue-800')}>
                  <img src={Profile} alt="" className='relative px-5'/>
                  <label className='flex items-center cursor-pointer justify-between w-full'>
                    <span className='font-medium'>Worker</span>
                    <input 
                      type="radio"
                      name="role"
                      value="worker"
                      className="flex items-center w-[50px] border text-[#A0A0AA]"  
                    />
                  </label>
                </div>

                <div className={`flex items-center border rounded-3xl cursor-pointer ${borderColor === 'border-blue-600' ? 'border-blue-600' : ''} px-3 py-4 mb-7 xl:mx-5`} onClick={() => handleRoleSelection('member', 'border-blue-600')}>
                  <img src={UserTag} alt="" className='relative px-5' />
                  <label className='flex items-center cursor-pointer justify-between w-full'>
                    <span>Member</span>
                    <input 
                      type="radio"
                      name="role"
                      value="member"
                      className="flex items-center w-[50px] border text-[#A0A0AA]"  
                    />
                  </label>
                </div>
              </div>
              <div className='xl:mx-5'>
                <button className={`rounded-3xl ${selectedRole ? 'bg-blue-900 text-[#fff]' : 'bg-gray-300 text-[#A0A0AA] cursor-not-allowed'} px-3 mt-6 py-3 w-full`} onClick={handleContinue} disabled={!selectedRole}>
                  Continue
                </button>
              </div>
            </div>
          </div>              
        </div>
        {windowWidth > 970 ? (
        <div className="w-3/5 fixed-position">
          <div className="overlay-container">
            <div className="overlay"></div>
            <img
              src={SignupImage}
              className="w-full"
              style={{ maxWidth: "100%", display: "block" }}
            />
          </div>
          <p className="positioning-text">We are Dean Listers, Christ Followers, Department of Love, Care and Fellowship, Devoted Life-Transformed Followers of Christ.</p>
        </div>) : null}
      </div>
    </div>
  );
};

export default FirstPage;
