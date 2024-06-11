import React from 'react'
import Cancel from '../../../assets/SVG/Cancel'
import MemberPic from '../../../assets/MemberPic.png'

const WorkerInfo = () => {
  return (
    <div>
        <div className='lg:w-4/12 md:w-6/12 w-full px-10 md:px-6 bg-[#fff] md:h-[130vh] absolute z-10 right-0 top-0 border'>
            <div>
                <div className='rounded-full border-2 w-10 h-10 mt-8 flex items-center justify-center'>
                <Cancel/>
                </div>

                <div className='mt-7'>
                    <div>
                        <h1 className='font-bold text-xl pb-4'>Member Information</h1>
                    </div>

                    <div className='mt-10'>
                        <img src={MemberPic} alt="" className='mx-auto' />
                        <div className='mb-6'>
                            <h1 className='text-center mt-4 font-bold opacity-[0.7] text-xl'>Taiwo John</h1>
                        </div>

                        <div className='pt-5'>
                            <div className='flex justify-between py-6'>
                                <h1 className='font-medium opacity-[0.7]'>Department</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>Materials & Metallurgical Engineering</p>
                            </div>
                            <div className='flex justify-between pb-6'>
                                <h1 className='font-medium opacity-[0.7]'>Level</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>500</p>
                            </div>
                            <div className='flex justify-between pb-6'>
                                <h1 className='font-medium opacity-[0.7]'>Phone number</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>08160862773</p>
                            </div>
                            <div className='flex justify-between pb-6'>
                                <h1 className='font-medium opacity-[0.7]'>Status</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>Worker</p>
                            </div>
                            <div className='flex justify-between pb-6'>
                                <h1 className='font-medium opacity-[0.7]'>Unit</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>Choir</p>
                            </div>
                            <div className='flex justify-between pb-6'>
                                <h1 className='font-medium opacity-[0.7]'>Email address</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>JohnDoe@gmail.com</p>
                            </div>
                            <div className='flex justify-between pb-6'>
                                <h1 className='font-medium opacity-[0.7]'>Faculty</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>SEET</p>
                            </div>
                            <div className='flex justify-between pb-6'>
                                <h1 className='font-medium opacity-[0.7]'>Residential Address</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>12, Success Gate, Apatapiti, FUTA South Gate</p>
                            </div>
                            <div className='flex justify-between'>
                                <h1 className='font-medium opacity-[0.7]'>Date Submitted</h1>
                                <p className='text-right w-[50%] font-bold opacity-[0.7]'>19th Dec 2023, 11:02am</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default WorkerInfo
