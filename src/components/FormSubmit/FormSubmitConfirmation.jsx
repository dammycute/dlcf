import React from 'react'
import Logo from "../../assets/logo.png";
import TickCircle from '../../assets/tick-circle.png'


const FormSubmitConfirmation = () => {
  return (
    <div className='pt-16'>
        <div className="">
            <img src={Logo} alt="" className="mx-auto" />
          </div>

          <div className="mt-5 mb-20 text-center">
            <h1 className="font-bold">Deeper Life Campus Fellowship</h1>
            <p className="mt-3 font-extralight">Akure Region</p>
          </div>

          <div>
            <div className='border xl:w-[30%] w-[80%] md:w-[50%] h-full mx-auto xl:py-14 py-7'>
                <div className='mx-auto'>
                    <img src={TickCircle} alt="" className='mx-auto' />
                    <h1 className='font-extrathin xl:w-1/2 w-[70%] text-center mx-auto'>Thanks, your details has been successfully submitted</h1>
                </div>
            </div>
          </div>
    </div>
  )
}

export default FormSubmitConfirmation
