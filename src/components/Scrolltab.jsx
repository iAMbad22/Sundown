import React from 'react';
import { useHover } from './HoverContext';

function Scrolltab({ data }) {
    const { handleHover, handleLeave } = useHover();
  return (
    <div>
      {Object.entries(data).map(([key, { v1, v2, v3, v4 }]) => (
        <React.Fragment key={key}>
          <div className='z-[100] w-full h-[10vh] border border-b-gray-400 relative group overflow-hidden'
          onMouseEnter={()=> handleHover(v4)}
          onMouseLeave={()=> handleLeave()}
          >
            <span className='z-[100] absolute h-full w-full bg-gradient-to-b from-[#f4955b] to-[#fb740d] bottom-[10vh] group-hover:bottom-0 ease-in-out duration-[250ms]'></span>
            <div className='z-[100] absolute flex h-full w-full justify-between'>
              <div>
              <h1 className='z-[100] absolute top-3 text-[5vh] px-9'>{v1}</h1>
              </div>
              <div className='z-[100] flex flex-col shrink w-[9vw] h-[9vh] justify-end items-center'><h1 className='font-bold'>{v2}</h1><h1 className='font-[66]'>{v3}</h1></div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Scrolltab;
