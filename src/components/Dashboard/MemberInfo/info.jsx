import React from 'react'
import Cancel from '../../../assets/SVG/Cancel'
import MemberPic from '../../../assets/MemberPic.png'

const MemberInfo = ({ member }) => {
    // const member = data && data.find(member => member.name === selectedMember);

    // Handling the case where the member is not found
    if (!member) {
        return <div>Member not found</div>;
    }
  
    return (
      <div>
        <div className='lg:w-4/12 md:w-8/12 w-full px-10 md:px-6 bg-[#fff] md:h-[130vh] absolute z-10 right-0 top-0 border'>
          <div className='bg-[#fff]'>
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
                  <h1 className='text-center mt-4 font-bold opacity-[0.7] text-xl'>{member.name}</h1>
                </div>
  
                <div className='pt-5'>
                  <div className='flex justify-between py-6'>
                    <h1 className='font-medium opacity-[0.7]'>Department</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.department}</p>
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='font-medium opacity-[0.7]'>Level</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.level}</p>
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='font-medium opacity-[0.7]'>Phone number</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.phoneNumber}</p>
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='font-medium opacity-[0.7]'>Status</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.status}</p>
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='font-medium opacity-[0.7]'>Unit</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.unit}</p>
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='font-medium opacity-[0.7]'>Email address</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.email}</p>
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='font-medium opacity-[0.7]'>Faculty</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.faculty}</p>
                  </div>
                  <div className='flex justify-between pb-6'>
                    <h1 className='font-medium opacity-[0.7]'>Residential Address</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.address}</p>
                  </div>
                  <div className='flex justify-between'>
                    <h1 className='font-medium opacity-[0.7]'>Date Submitted</h1>
                    <p className='text-right w-[50%] font-bold opacity-[0.7]'>{member.dateSubmitted}</p>
                  </div>
  
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    )
  }
  
  export default MemberInfo
