import React from 'react'
import thank from "../assets/icon-thank-you.svg"
const Fifth = () => {
  return (
<div className="mt-10">
<div>
  <span className='sm:absolute sm:ml-auto sm:top-[29%] sm:left-[55%]'> 

  <img src={thank} alt="" className='sm:ml-auto ml-24' />
  </span>
  <h2 className= "sm:ml-[11rem] ml-20 mt-3 text-[#052653] sm:mt-[16rem] text-2xl sm:text-4xl font-semibold relative">
          
        Thank you
        </h2>
        <p className="text-gray-400 text-center mt-3 sm:text-[19px]">
Thank you for confirming your subscription! We hope you have <br /> fun using our platform. If you ever need support, please feel <br/> free to email us at random@gmail.com    </p>
</div>
    </div>
  )
}

export default Fifth
