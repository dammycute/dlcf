import React, { useState, useEffect } from 'react';
import axios from 'axios';
import selectIcon from "../../assets/select-icon.svg";


const baseUrl = "https://dlcf-futa-backend-nodejs.onrender.com";

console.log(baseUrl)

function SchoolDepartmentSelect({ formData, handleFormChange }) {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [departments, setDepartments] = useState([]);

  // Function to fetch schools
  const fetchSchools = async () => {
    try {
      const response = await axios.get(`${baseUrl}/school/`);
      if (response.status === 200) {
        const data = response.data.data;
        setSchools(data.schools);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Effect hook to fetch schools on component mount
  useEffect(() => {
    fetchSchools();
  }, []);

  // Effect hook to update departments when selectedSchool changes
  useEffect(() => {
    const school = schools.find(school => school.school === selectedSchool);
    setDepartments(school ? school.department : []);
  }, [selectedSchool, schools]);

  // Handle form change
  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    if (name === "school") {
      setSelectedSchool(value); // Update selected school
    }
    handleFormChange(event); // Pass event to parent component
  };

  return (
    <div>
      <div className="mt-4">
        <p>Faculty</p>
        <div className="relative">
          <select
            name="school"
            value={formData.school}
            onChange={handleSelectChange}
            className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          >
            <option value="">Select a School</option>
            {schools.map(school => (
              <option key={school.id} value={school.school}>{school.school}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
            <img src={selectIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Department</p>
        <div className="relative">
          <select
            name="department"
            value={formData.department}
            onChange={handleFormChange}
            disabled={!selectedSchool}
            className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
          >
            <option value="">Select a Department</option>
            {departments.map(dept => (
              <option key={dept.slug} value={dept.slug}>{dept.name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
            <img src={selectIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolDepartmentSelect;
