import React from 'react';

const Mobile = () => {
    return (
        <>
        <form  method="post">
        <div className='p-4'>
             <input className="my-2 focus-within:border-[purple] transition-all" type="text" name="" placeholder='Enter Title' />
             <input className="my-2 p-2 focus-within:border-[purple] transition-all" type="file" name="" />
            <input className="my-2 focus-within:border-[purple] transition-all" type="text" name="" placeholder='Enter Description' />
            <input className="my-2 focus-within:border-[purple] transition-all" type="text" name="" placeholder='Enter Price' />

            <button className='bg-green-400 p-2 rounded rounded-lg m-4 text-white font-bold' type='submit'>Submit</button>
        </div>
        </form>

        </>
    );
}

export default Mobile;
