import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import slide from '../APIFolder/Slide';
import './slide.css';

const Slider = () => {


    const [activeSlide,setActiveSlide] = useState(0);

const arrowStyle = 'leftarrow rounded-full bg-grey flex justify-center item-center shadow-sm hover:cursor-pointer';


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
        <div className='parentDiv h-[540px] b-white flex items-center justify-between'>

          <div className={arrowStyle} onClick={preSlide}> 
          <ArrowLeftOutlined style={{fontSize:'50px'}}/>
          </div>
           
           {slide.map((slide,index)=>{
            if (index === activeSlide){
          return (<div className='slide wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] overflow-hidden relative' key={index}>

      <div className='slide flex items-center justify-center h-[100%] w-[100%]'>
      <div className='forImage flex flex-1 justify-center items-center h-[100%] w-[100%]'>

        <img 
        className='h-[100%] w-[100%] object-cover'
        src={slide.src}
         alt={index}/>

      </div>


      </div>
      

          </div>);
          }
           }) }

          <div className={arrowStyle} onClick={nextSlide}>
           <ArrowRightOutlined style={{fontSize:'50px'}}/>
        </div>
        </div>
    );
}

export default Slider;
