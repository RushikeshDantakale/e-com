import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import slide from '../APIFolder/Slide';
import './slide.css';

const Slider = () => {


    const [activeSlide,setActiveSlide] = useState(0);

const arrowStyle = 'leftarrow rounded-full bg-grey text-grey flex justify-center item-center shadow-sm hover:cursor-pointer opacity-[0.1] hover:opacity-[0.5]';

// setInterval(()=> nextSlide(),7000)

const nextSlide=()=>{
if(activeSlide === slide.length - 1){
    setActiveSlide(0);
}else{
    setActiveSlide(activeSlide + 1);
}
}



const preSlide = ()=>{
    if(activeSlide === 0){
        setActiveSlide(slide.length - 1);
    }else{
        setActiveSlide(activeSlide-1);
    }
}



    return (
        <div className='relative parentDiv md:h-[540px] h-[340px] b-white flex items-center justify-between'>

          <div className={`${arrowStyle} absolute left-0 top-auto z-[10] `} onClick={preSlide}> 
          <ArrowLeftOutlined style={{fontSize:'100px'}}/>
          </div>
           
           {slide.map((slide,index)=>{
           return  ((index === activeSlide)&&(<div className='slide wrapper flex w-[100%] md:h-[500px] h-[300px] justify-center items-center shadow-2xl  border-[#c0c0c0] overflow-hidden relative' key={index}>

      <div className='slide flex items-center justify-center h-[100%] w-[100%]'>
      <div className='forImage flex flex-1 justify-center items-center h-[100%] w-[100%]'>

        <img 
        className='h-[100%] w-[100%] '
        src={slide.src}
         alt={index}/>

      </div>


      </div>
      

          </div>));
          
           }) }

          <div className={`${arrowStyle} absolute right-0 top-auto z-[11] `} onClick={nextSlide}>
           <ArrowRightOutlined style={{fontSize:'100px'}}/>
        </div>
        </div>
    );
}

export default Slider;
