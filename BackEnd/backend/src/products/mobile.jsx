import React from 'react';

const Mobile = () => {

    const inputStyle = "my-2 p-2 rounded outline outline-gray-200 w-[100%] focus-within:outline-purple-500 focus-within:outline-2 transition-all";


    return (
        <>
        <form  method="post">
        <div className='p-4 overflow-x-hidden'>
        <div className='font-bold text-2xl my-2'>Enter Mobile Data here!</div>
             <input className={inputStyle} type="text" name="" placeholder='Enter Title' />
             <input className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0  file:text-sm file:font-semibold file:bg-violet-50  hover:file:bg-purple-100" type="file" name="" />
            <input className={inputStyle} type="text" name="" placeholder='Enter Description' />
            
            <div className='flex gap-[10px]'>
            <input className={inputStyle} type="text" name="" placeholder='Enter Price' />
            <input className={inputStyle} type="text" name="" placeholder='Enter quantity' />
            <input className={inputStyle} type="text" name="" placeholder='Enter Ram' />
            </div>

            <div className='flex gap-[10px]'>
            <input className={inputStyle} type="text" name="" placeholder='Enter Front Camera (in MP)' />
            <input className={` ${inputStyle} w-[100px]`} type="text" name="" placeholder='Enter Rom' />           
            </div>

            <input className={`${inputStyle}`} type="text" name="" placeholder='Enter Rear Camera (in MP)' />

            <button className='bg-green-400 p-2 rounded rounded-lg m-4 text-white font-bold w-full' type='submit'>Submit</button>
        </div>
        </form>
        <div className='h-[800px]'>
            <img src="" alt="" />
        </div>

        </>
    );
}

export default Mobile;
