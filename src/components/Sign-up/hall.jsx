import React, { useState, useEffect } from 'react';
import selectIcon from "../../assets/select-icon.svg";

const HallsDisplay = ({ formData, handleFormChange, baseUrl }) => {
  const [centers, setCenters] = useState([]);
  const [halls, setHalls] = useState([]);
  const [filteredHalls, setFilteredHalls] = useState([]);

  useEffect(() => {
    const fetchHallsData = async () => {
      try {
        const response = await fetch(`${baseUrl}/hall/`);
        if (!response.ok) {
          throw new Error('Failed to fetch halls data');
        }
        const fetchedData = await response.json();
        setHalls(fetchedData.data.hall);

        const uniqueCenters = Array.from(new Set(fetchedData.data.hall.map(hall => hall.centre.name)));
        setCenters(uniqueCenters);
      } catch (error) {
        console.error('Error fetching halls data:', error);
      }
    };

    fetchHallsData();
  }, [baseUrl]);

  useEffect(() => {
    // Filter halls based on the selected center
    const hallsToShow = halls.filter(hall => hall.centre.name === formData.centre);
    setFilteredHalls(hallsToShow);
  }, [formData.centre, halls]);

  return (
    <div>
      <div>
        <p className="mt-4">Centers</p>
        <div className="relative">
          <select
            name="centre"
            value={formData.centre}
            onChange={handleFormChange}
            className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          >
            <option value="">Select a Center</option>
            {centers.map(center => (
              <option key={center} value={center}>{center}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
            <img src={selectIcon} alt="" />
          </div>
        </div>
      </div>
      
      {filteredHalls.length > 0 && (
        <div>
          <p className="mt-4">Halls</p>
          <div className="relative">
            <select
              name="hall"
              value={formData.hall}
              onChange={handleFormChange}
              className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            >
              <option value="">Select a Hall</option>
              {filteredHalls.map(hall => (
                <option key={hall.name} value={hall.name}>{hall.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
              <img src={selectIcon} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallsDisplay;
