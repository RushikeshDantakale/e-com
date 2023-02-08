import React from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import Footer from './Footer';
import Navbar from './Navbar';
import Newsletter from './Newsletter';


const Wishlist = () => {

    const wishlistItems = useSelector((state)=> state.rootReducer.wishlist);

    console.log(wishlistItems);


    return (
        <>
        <Navbar/>
        <div className=''>
        <div className='flex justify-center py-[20px] font-bold text-[30px] underline'>Your Wishlist  : {wishlistItems.length}</div>
           
        <div className='grid grid-cols-4 gap-2'>
            {(wishlistItems)&& wishlistItems.map((item)=> 
            (

          <div className='flex flex-col items-center justify-between shadow-2xl border-2 border-gray-300 my-[10px]'>
           <div className=' font-semibold text-[20px] p-[10px]'>{item.title}</div>  
           <div className='w-full h-full '> 
            <img className='cover' src={`http://localhost:4000/${item.imageUrl}`} />
            </div>
            </div> 
             
            )
            
            )}

            </div>
           
</div>
            <Newsletter/>
            <Footer/>

        </>
    );
}

export default Wishlist;
