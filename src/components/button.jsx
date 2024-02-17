import React from 'react'

function Buttons({data}) {
  return (
   <>
    {Object.entries(data).map(([key, value]) => (
      <React.Fragment key={key}>
        <div className=' relative border border-[#d7cec7] px-6 py-2.5 rounded-3xl group overflow-hidden'>
          <span className='absolute top-full left-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 transition-all ease-in duration-200 group-hover:top-0 rounded-full'></span>
          {value}
          <h4 className='top-2 left-4.2 opacity-0 absolute group-hover:text-white group-hover:opacity-100 duration-200 ease-in-out text-lg'>{value}</h4>
        </div>
      </React.Fragment>
      ))}
   </>
  )
}

export default Buttons

//coponents ka =name hamesha capital hona chahiye

