import React from 'react'
import Buttons from '../Buttons/Buttons'

const MembersDashBoard = () => {
  return (
    <div className='bg-[#F8F8FF] h-[100vh]'>
        <div className='pt-10 md:flex md:bg-[#fff] items-center md:h-26 justify-between px-5'>
            <div>
            <div>
                <h1 className='md:text-2xl text-lg pb-8 md:pb-0'>Welcome to Peace Hall, Apatapiti Centre 👋🏽</h1>
            </div>
            <div>
                <Buttons text="Submit"/>
            </div>

            <div>
                <div className='flex items-center justify-center'>
                    <button className='rounded-'>Hall Details</button>
                    <button>Hall Reports</button>
                </div>
                <div className='mx-auto'>
                    <div className='bg-[#fff] mx-5 my-3 px-3'>
                        <h1 className='text-md font-thin'>Number of Brothers</h1>
                        <p className='text-lg font-bold'>80</p>
                    </div>
                    <div className='bg-[#fff] mx-5 my-3 px-3'>
                        <h1 className='text-md font-extralight'>Number of Sisters</h1>
                        <p className='text-lg font-bold'>10</p>
                    </div>
                    <div className='bg-[#fff] mx-5 my-3 px-3'>
                        <h1 className='text-md font-extralight'>Total Number of Members</h1>
                        <p className='text-lg font-bold'>90</p>
                    </div>
                    <div className='bg-[#fff] mx-5 my-3 px-3'>
                        <h1 className='text-md font-extralight'>Total Number of Workers</h1>
                        <p className='text-lg font-bold'>10</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default MembersDashBoard
