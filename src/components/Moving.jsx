import React from 'react';

function Moving({ data }) {
  return (
    <div className='text-[9vw] font-bold whitespace-nowrap inline-block animate-move4'>
      {Object.entries(data).map(([key, value]) => (
        <React.Fragment key={key}>
          <h1 className='inline-block'>{value}</h1>
          <div className='inline-block w-[70px] h-[70px] mx-[2vw] bg-[#FE3309] rounded-full'></div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Moving;
