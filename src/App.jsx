import { useState } from 'react'
import './App.css'
import Signup from './components/Sign-up/Signup'
import FirstPage from './components/FirstPage/FirstPage'
// import PhoneNumber  from 'react-phone-number-input'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MemberSignup from './components/Sign-up/memberSignUp'
import HallDetails from './components/Dashboard/HallDetails/HallDetails'
import HallReport from './components/Dashboard/HallReport/HallReports'
import FormSubmitConfirmation from './components/FormSubmit/FormSubmitConfirmation'
import UploadPic from './components/UploadPicture/UploadPic'
import WorkersPics from './components/UploadPicture/worker-pics'
import MemberPics from './components/UploadPicture/member-pics'
import MemberInfo from './components/Dashboard/MemberInfo/MemberInfo'
// import Upload from 'antd/es/upload/Upload'


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<FirstPage/>} />
      <Route exact path="/worker-registration" element={<Signup/>} />
      <Route exact path="/member-registration" element={<MemberSignup/>} />
      <Route exact path="/worker-pics" element={<WorkersPics/>} />
      <Route exact path="/member-pics" element={<MemberPics/>} />
      <Route exact path="/hall-details" element={<HallDetails/>} />
      <Route exact path="/hall-report" element={<HallReport/>} />
      <Route exact path="/member" element={<MemberInfo/>} />
      <Route exact path="/signup-success" element={<FormSubmitConfirmation/>} />


      </Routes>
    </Router>
      
    </>
  )
}

export default App
