import React from 'react'
import App from './App'
import FooterB from './components/FooterB'

function Apps() {
  return (
    <div className='relative'>
        <div className='relative z-[10]'>
           <App />
        </div >
    </div>
  )
}

export default Apps

{/* <div className='z-[10] absolute h-[180vh] w-[70vw] bg-red-500'></div>
        <div className='z-[0] fixed h-[90vh] w-[90vw] bg-blue-500'></div> */}