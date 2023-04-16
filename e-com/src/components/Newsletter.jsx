import React from 'react';
import {Send} from '@mui/icons-material';

const Newsletter = () => {
    return (
    
        <div className='flex justify-center items-center md:h-[350px] h-[250px] w-[100%] flex-col  bg-purple-300'>
            <h1 className='md:text-[50px] text-[40px] font-bold '>
            NEWSLETTER
            </h1>
            <h2 className='md:text-[20px] text-[15px] mt-2'>
            Always in touch with us, for your favourite products.
            </h2>
            <div className='flex mt-[3rem] items-center justify-between md:min-w-[30rem] min-w-[25rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden'>
                <input 
                className='border-none pl-[20px] flex-[7] outline-none py-[15px]'
                    type='email'
                    placeholder='email'
                />
                <button className='bg-green-400 flex-1 h-[100%]'><Send className='text-white'/></button>
            </div>
        </div>
        
    );
}

export default Newsletter;
