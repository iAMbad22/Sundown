import React from 'react'

function FooterB() {
  return (
    <div  className='h-[85vh] w-full bg-black top-[15vh] px-9 flex flex-col justify-end bottom-0 text-white' >
        <div className='h-[50vh] w-full border-b border-gray-400'>
            <h1 className='text-[40.2vh] font-bold'>Sundown</h1>
        </div>
        <div className='h-[10vh] w-full px-[4px] flex justify-between items-end py-6'>
            <h1>copyright@SundownStudio</h1>
            <h1>Brooklyn,NY</h1>
            <h1>Instagram</h1>
            <h1>LinkedIn</h1>
        </div>
    </div>
  )
}

export default FooterB