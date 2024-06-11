import React from 'react'
import Buttons from '../../Buttons/Buttons'
import HallDetailsData from './HallDetailsData'
import TestBtn from '../../Buttons/testBtn'

const HallDetails = () => {
  return (
    <div className='bg-[#f8f8ff] h-full w-full'>
      <div className='w-[250px] h-[100px] blur-2xl absolute backdrop-filter mix-blend-multiply filter'></div>
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
          {/* <SwitchButtons/> */}
          <TestBtn/>
          <div className='mx-auto md:flex justify-between rounded-md gap-10'>
            <div className='bg-[#fff] my-3 px-5 py-5 border w-full rounded-md'>
              <h1 className='text-md font-thin pb-3'>Number of Brothers</h1>
              <p className='text-xl font-bold pb-3'>80</p>
            </div>
            <div className='bg-[#fff] my-3 px-5 py-5 border w-full rounded-md'>
              <h1 className='text-md font-extralight pb-3'>Number of Sisters</h1>
              <p className='text-xl font-bold pb-3'>10</p>
            </div>
            <div className='bg-[#fff] my-3 px-5 py-5 w-full border rounded-md'>
              <h1 className='text-md font-extralight pb-3'>Total Number of Members</h1>
              <p className='text-xl font-bold pb-3'>90</p>
            </div>
            <div className='bg-[#fff] my-3 px-5 py-5 w-full rounded-md border'>
              <h1 className='text-md font-extralight pb-3'>Total Number of Workers</h1>
              <p className='text-xl font-bold pb-3'>10</p>
            </div>
          </div>
          <HallDetailsData />
        </div>

      </div>
    </div>
  )
}

export default HallDetails


{/*  */}