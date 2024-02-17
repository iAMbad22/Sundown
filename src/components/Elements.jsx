import React from 'react'

function Elements() {
  return (
    <div className='absolute h-[40vw] flex'>
    <div className='w-[55vw] h-full  flex'>
       <h1 className='px-11 text-[4.3vw] tracking-tighter font-bold leading-[4vw]'>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h1>
    </div>
    <div className='w-[19vw] h-full ml-[15vw] flex items-end'>
       <div className='w-full'>
       <img className='w-full rounded-xl' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-800.jpg" alt="" />
        <p className='w-full py-11 text-[1.05vw] font-light'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
       </div>
    </div>
 </div>
  )
}

export default Elements