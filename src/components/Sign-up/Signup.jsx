import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import SignupImage from "../../assets/signupp.png";
import selectIcon from "../../assets/select-icon.svg";
// import { Form, Formik } from "formik";
import axios from "axios";
import { useRef } from "react";
import SchoolDepartmentSelect from "./schools";
import HallsDisplay from "./hall";
import { useNavigate } from "react-router-dom";
// imp

const akureCampuses = [
  {
    name: "DLCF FUTA",
    slug: "futa",
  },
  {
    name: "DLCF UniMed",
    slug: "unimed",
  }
]

const gender = [
  {
    name: "Male",
    slug: "male"
  },
  {
    name: "Female",
    slug: "female"
  }
]

const unitsArray = [
  {
    name: "GPT/SMAT",
    slug: "gpt/smat"
  },
  {
    name: "Evangelism",
    slug: "evangelism"
  },
  {
    name: "Prayer",
    slug: "prayer"
  },
  {
    name: "Maintenance",
    slug: "maintenance"
  },
  {
    name: "Choir",
    slug: "choir"
  },
  {
    name: "Ushering",
    slug: "ushering"
  },
  {
    name: "Secretariat",
    slug: "secretariat"
  },
  {
    name: "Library",
    slug: "library"
  },
  {
    name: "Colpoteur",
    slug: "colpoteur"
  },
  {
    name: "Logistics",
    slug: "logistics"
  }
]

const baseUrl = "https://dlcf-futa-backend-nodejs.onrender.com";



const Signup = () => {

  const [formData, setFormData] = useState({
    centre: "",
    hall: "",
    firstName: "",
    lastName: "",
    dlcfCampus: "",
    email: "",
    phoneNumber: "",
    department: "",
    school: "",
    level: "",
    unit: "",
    residentialAddress: "",
    gender: "",
  })

  const [formFilled, setFormFilled] = useState(true);
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


  const handleFormChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev, [name]: value
    }))

    // if (name == 'dlcfCampus') {
    //   handleCampusChange(e);
    // } else if (name == 'center') {
    //   handleCenterChange(e);
    // }

    checkFormFilled();
  }

  const navigate = useNavigate()

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    await axios.post(`${baseUrl}/worker/`, formData).then((response) => {
      console.log(response)
      if (response.status === 201) {

        navigate('/worker-pics')
        const id =  response.data.data.id;
        localStorage.setItem('userID', id);
      }
    }).catch(err => {
      console.log(err)
    })
  }

  const handleCampusChange = (event) => {
    const centerArray = akureCampuses.find((x) => x.slug === event.target.value);
    
    updateCenterArray(centerArray.centers);
  };


  const checkFormFilled = () => {
    const filled =
      formData.dlcfCampus !== "" &&
      formData.centre !== "" &&
      formData.hall !== "";

    setFormFilled(filled);
  };


  return (
    <div>
      <div className={`contain flex ${windowWidth <= 970 ? "flex-col" : "justify-between"}`}>
        <div className={`w-full ${windowWidth > 970 ? "lg:w-2/5 pt-16" : "p-12"}`}>
          <div className="">
            <img src={Logo} alt="" className="mx-auto" />
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="mt-5  text-center">
              <h1 className="font-bold">Deeper Life Campus Fellowship</h1>
              <p className="font-thin mt-3">Akure Region</p>
            </div>

            <div className="mt-12">
              <h1 className="font-bold text-center">Workers Registration</h1>

              {/* <div className="px-8"> */}
              <div className={` ${windowWidth > 970 ? "px-12" : "px-2"}`}>
                <div className="">
                  <p className="mt-4">DLCF Campus</p>
                  <div className="relative">
                    <select name="dlcfCampus" value={formData.dlcfCampus} className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500" onChange={handleFormChange} >
                      <option>Select your campus</option>
                      {
                        akureCampuses.map((camp, index) => {
                          return <option key={index} value={camp.slug}>{camp.name}</option>
                        })
                      }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
                      <img src={selectIcon} alt="" />
                    </div>
                  </div>
                </div>

                <HallsDisplay formData={formData} handleFormChange={handleFormChange} baseUrl={baseUrl} />
                <div>
                  <p className="mt-4">Residential Address</p>
                  <input
                    value={formData.residentialAddress} onChange={handleFormChange}
                    name="residentialAddress"
                    type="text"
                    placeholder="Enter you residential address"
                    className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  />
                </div>

                <div>
                  <p className="mt-4">Unit</p>
                  <div className="relative">
                    <select value={formData.unit} onChange={handleFormChange} name="unit" className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500" >
                      <option >Select your Unit</option>
                      {
                        unitsArray.map((unit, index) => {
                          // console.log(center)
                          return <option key={index} value={unit.slug}>{unit.name}</option>
                        })
                      }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
                      <img src={selectIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mt-4">Gender</p>
                  <div className="relative">
                    <select value={formData.gender} onChange={handleFormChange} name="gender" className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500" >
                      <option >Select your Gender</option>
                      {
                        gender.map((gend, index) => {
                          // console.log(center)
                          return <option key={index} value={gend.slug}>{gend.name}</option>
                        })
                      }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700">
                      <img src={selectIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mt-4">First Name</p>
                  <input
                    value={formData.firstName} onChange={handleFormChange}
                    name="firstName"
                    type="text"
                    className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <p className="mt-4">Last Name</p>
                  <input
                    value={formData.lastName} onChange={handleFormChange}
                    name="lastName"
                    type="text"
                    className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
                <SchoolDepartmentSelect formData={formData} handleFormChange={handleFormChange} baseUrl={baseUrl} />
                <div>
                  <p className="mt-4">Level</p>
                  <input
                    value={formData.level} onChange={handleFormChange}
                    name="level"
                    type="text"
                    className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Enter your Level"
                  />
                </div>
                <div>
                  <p className="mt-4">Email Address</p>
                  <input
                    value={formData.email} onChange={handleFormChange}
                    name="email"
                    type="email"
                    className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <p className="mt-4">Phone Number</p>
                  <input
                    value={formData.phoneNumber} onChange={handleFormChange}
                    name="phoneNumber"
                    type="tel"
                    className="block appearance-none w-full border border-gray-200 text-md placeholder-[#A0A0AA] py-5 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8 mb-8 px-12">
                <button
                  className={`${formFilled
                    ? "bg-[#32357C]"
                    : "bg-gray-300 cursor-not-allowed"
                    } text-white py-2 px-4 rounded-full w-full`}
                  disabled={!formFilled}
                >
                  Continue
                </button>
              </div>
            </div>
          </form>

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

export default Signup;
