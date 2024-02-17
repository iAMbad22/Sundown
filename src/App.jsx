import { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Buttons from './components/button'
import Anime from './components/Anime'
import Moving from './components/Moving';
import Elements from './components/Elements';
import Anime2 from './components/Anime2';
import Scrolltab from './components/Scrolltab';
import { useHover } from './components/HoverContext';
import Anime3 from './components/Anime3';


function App() {
  const {overlayData,isHovered} =useHover();

  const data = {
      1:{
        v1:"50th anniversary",
        v2:"NIKE",
        v3:"Environment",
        v4:"https://images.unsplash.com/photo-1637844528447-aee837ccfc7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5pa2V8ZW58MHx8MHx8fDA%3D"
      },
      2:{
        v1:"Air Force 1 2021",
        v2:"NIKE",
        v3:"Environment",
        v4:"https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      3:{
        v1:"SOHO 2023",
        v2:"CONVERSE",
        v3:"Environment",
        v4:"https://images.unsplash.com/photo-1598447066791-f71f99d2e810?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXJzZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      4:{
        v1:"Makers Studio",
        v2:"HOI NIKE",
        v3:"Experiential",
        v4:"https://images.unsplash.com/photo-1595571024048-45a59177f538?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9pJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      5:{
        v1:"Play New Kidvision",
        v2:"NIKE",
        v3:"Environment",
        v4:"https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      6:{
        v1:"SOHO NYC",
        v2:"ARC’TERYX",
        v3:"Environment",
        v4:"https://images.unsplash.com/photo-1618508191136-2d13cd992220?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJjdGVyeXh8ZW58MHx8MHx8fDA%3D"
      },
      3:{
        v1:"NYFW Popup",
        v2:"AFTERPAY",
        v3:"Environment",
        v4:"https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGF5fGVufDB8fDB8fHww"
      }
  };
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     // Add other Locomotive Scroll options as needed
  //   });

  //   return () => {
  //     // Cleanup on component unmount
  //     scroll.destroy();
  //   };
  // }, []);
{/*ref={scrollRef}*/} 

const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    console.log('Email:', email);
  };

  return (
    <div>
      <div style={{ zIndex: 1000 }} className={`fixed h-[58vh] w-[25.5vw] ${isHovered ? "opacity-100 rounded-3xl" : "opacity-0"} rounded-2xl top-[20vw] left-[46vw] object-cover`}><img className='h-[58vh] w-[25.5vw] rounded-2xl top-[20vw] left-[46vw]' src={overlayData} alt="" /></div>
      <div className='z-[100] bg-[#EFEAE3] min-h-screen overflow-hidden realtive'>
        <div className='px-11'>
          <nav className='py-5 flex items-center justify-between'>
            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
            <nav className='relative flex items-center gap-3 px-3 text-lg text-gray-700'>
              <Buttons data={{1:"Work",2:"Studio",3:"Contact"}} />
            </nav>
          </nav>
          <div className='py-10 border-b border-black flex w-full h-[65vh] items-end justify-between'>
          <div className=''>
            <h3 className='px-3 py-11 leading-8 w-[25vw] tracking-tighter font-bold text-[1.7vw]'>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
          </div>
          <div>
            <h1 className='px-7 py-3 text-[10vw] leading-[8vw] tracking-tighter font-bold text-right'> SPACES <br />
                  THAT <br />
                  INSPIRE <br />
            </h1>
          </div>
          </div>
          <div className='relative h-[58vw] flex justify-end'>
          <Anime />
          <video autoPlay loop muted className='absolute mt-[3vw] rounded-3xl' src="../video.mp4"></video>
          </div>
          <div className='py-[2vw] whitespace-nowrap'>
            <Moving data={{1:'CONTENT',2:'ENVIRONMENTS',3:'EXPERIENCES'}}/>
            <Moving data={{1:'CONTENT',2:'ENVIRONMENTS',3:'EXPERIENCES'}}/>
            <Moving data={{1:'CONTENT',2:'ENVIRONMENTS',3:'EXPERIENCES'}}/>
          </div>
          <div className='h-[100vh]  py-[14vh] px-5 flex items-end relative'>
              <div className='absolute  top-[12vw] right-[66vw]'>
              <Anime2 />
              </div>
            <Elements />
            <h1 className='absolute bottom-4'>{overlayData}</h1>
          </div>
        </div>
          <div >
            <Scrolltab data={data}/>
          </div>
        </div>
        <div className='h-[90vh] w-full z-[0]'></div>
        <div> <h1 className='fixed top-[28vh] left-[102px] z-[-1]  text-[2vw] font-semibold tracking-tighter text-white'>Work</h1>
              <h1 className='fixed top-[32.5vh] left-[102px] z-[-1]  text-[2vw] font-semibold tracking-tighter text-white'>Studio</h1>
              <h1 className='fixed top-[37vh] left-[102px] z-[-1] text-[2vw] font-semibold tracking-tighter text-white'>Contact</h1>
              <input
                  className='fixed top-[36vh] bg-transparent border-b-[0.7px] right-[102px] placeholder-gary-500 z-[-1] w-[20vw] text-[2vh] font-thin tracking-tighter p-2'
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              <Anime3 />
          <div className='z-[-10] fixed h-[85vh] w-full bg-black top-[15vh] px-9 flex flex-col justify-end bottom-0 text-white' >
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
        </div>
    </div>
  )
}

export default App
