import React from 'react'

function Anime() {

  return (
    <div className='z-[0] relative h-[40vw] w-[40vw] justify-center'>
        <div className=' absolute w-[45vw] h-[45vw] bg-[#FE370C] rounded-full blur-2xl animate-pulse animate-move3'></div>
        <div className=' absolute w-[45vw] h-[45vw] bg-[#FE370C] blur-3xl transform translate-x-[-10%] translate-y-[-10%] rounded-full animate-move'></div>
        <div className=' left-6 absolute w-[45vw] h-[45vw] bg-[#FE370C] animate-move2 rounded-full blur-2xl animate-pulse'></div>
    </div>
  )
}

export default Anime