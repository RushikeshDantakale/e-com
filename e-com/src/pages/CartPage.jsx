import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import PurchasedProduct from '../components/PurchasedProduct';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';


const CartPage = () => {

    const cartItems = useSelector((state)=>state.rootReducer.cartReducer);
    const wishlistItems = useSelector((state)=> state.rootReducer.wishlist);
    
   

   const navigate = useNavigate();


 const shippingPrice = 40;
 const shippingDiscount = 40;

 
 const priceArr = cartItems.map((item)=>{
    return  Number(item.price)*(item.count);
 });


 const reducedPrice =(cartItems.length !== 0) && priceArr.reduce((AC, NV)=>{
    return AC+NV;
 });



 const back = () => { 
    navigate('/');
 }





    return (
        <div>

        
            <Navbar fixed top-0 left-0 right-0/>

{cartItems.length === 0 ?<div className='w-[100%] h-[600px] flex flex-row items-center justify-center '><div className='mr-[30px]'> Your Cart is empty!  </div> 

<button className='btn bg-white border-2 border-[#8a4af3] text-[#8a4af3] hover:bg-white' onClick={back}>Continue Shopping</button> 
</div> :

            <div className='p-5'>

            <div className='flex justify-center text-5xl'>Cart</div>

            <div className='flex items-center justify-between mt-4'> 
                <button className='btn bg-white border-2 border-[#8a4af3] text-[#8a4af3] hover:bg-white' onClick={back}>Continue Shopping</button>
                <div className='flex underline text-lg hover:cursor-pointer '>
                    <p>Items in your Cart : {cartItems.length}</p>
                   <Link to="/wishlist"> <p className='ml-5'>Whishlist Item : {wishlistItems.length}</p> </Link> 
                </div>
                <button className='btn '>Checkout</button>
            </div>

            <div className='flex mt-7 gap-[20px]'>
                <div className='flex flex-col flex-1 '>
                {cartItems.map((cartItem)=>
                
                    <PurchasedProduct   cartItem={cartItem}/>
                )

                }
                    
                </div>
                <div className=' flex-[0.4] w-auto h-[40vh]  rounded-md shadow-2xl  flex-col items-center flex p-5 '>
                <h1 className='text-[2rem] '>Summary</h1>
                <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Subtotal:</p>
                    <p>₹{reducedPrice}</p>
                </div>

                <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Shipping:</p>
                    <p>₹40</p>
                </div>

                <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Shipping discount:</p>
                    <p>₹40</p>
                </div>

                <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
                    <p>Total:</p>
                    <p>₹{(reducedPrice)+shippingPrice-shippingDiscount}</p>
                </div>

                </div>

            </div>
            </div>

           }

             

            <Newsletter/>
            <Footer/>

        </div>
    );
}

export default CartPage;
