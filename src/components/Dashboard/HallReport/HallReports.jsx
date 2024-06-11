import React from 'react'
import Buttons from '../../Buttons/Buttons'
import Members from '../HallDetails/HallDetailsData'
import HallReportData from './HallReportData'
import TestBtn from '../../Buttons/testBtn'

const HallReport = () => {
  return (
    <div className='bg-[#f8f8ff] h-full w-full'>
      <div className='w-[250px] h-[20px] blur-2xl absolute backdrop-filter mix-blend-multiply filter'></div>
      <div className=''>
        <div className='md:flex items-center justify-between mb-6 md:mb-10 bg-[#fff] md:px-20 px-14 md:py-10 border'>
          <div className=''>
            <h1 className='md:text-2xl text-xl pb-5 md:pb-0 pt-4'>Welcome to Peace Hall, Apatapiti Centre 👋🏽</h1>
          </div>
          <div>
            <button className='text-[#fff] bg-[#32357c] px-10 md:px-14 rounded-3xl py-2 md:py-3 mb-4'>Submit report</button>
          </div>
        </div>

        <div className='md:px-20 px-14'>
          <TestBtn />
          <HallReportData />
        </div>

      </div>
    </div>
  )
}

export default HallReport
