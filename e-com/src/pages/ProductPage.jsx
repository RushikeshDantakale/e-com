import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {add , countAdd} from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';


const ProductPage = () => {
  const itemView =  useSelector((state)=>state.rootReducer.productReducer);
  const cartItem = useSelector((state)=>state.rootReducer.cartReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (itemAdd) =>{
     
    const foundItemArray = cartItem.filter((item)=> item._id === itemAdd._id );

    if(foundItemArray.length === 0 ){

     dispatch(add(itemAdd));
     navigate('/cart');
    }else{
      dispatch(countAdd(itemAdd._id));
      navigate('/cart');
    }
     
  }


    return (
        <div>
          <Navbar/>

          {(!itemView) ?'There is nothing to view!' :
            (<div className='flex justify-center '>
            <div className='flex flex-1 item-center flex justify-center'>
                <img
                className='w-[500px] h-[400px] rounded-lg  my-auto ' 
                src={`http://localhost:4000/${itemView.imageUrl}`} alt=''
                />
            </div>
            <div className='flex-[1.3] flex items-start flex-col justify-items-start'>
        <h1 className='title text-[40px] '>{itemView.title}</h1>
        <p className='pr-[4rem] text-justify mt-4'>{itemView.desc}</p>

        <p className='mt-7 text-3xl'>Price: <b>₹ {itemView.price}</b></p>

      <div className='flex text-2xl mt-7'>
        Colors
        <div className='bg-red-600 h-[2rem] w-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
        <div className='bg-blue-600 h-[2rem] w-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
        <div className='bg-yellow-400 h-[2rem] w-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>

      </div>

      <div className='mt-7 text-2xl '>
        Size
        <select className='ml-5 border-2'>
            <option  selected disabled>Select</option>
            <option >sm</option>
            <option>lg</option>
            <option>xl</option>
            <option>xxl</option>

        </select>

      </div>

      <div className='mt-5'>
      </div>

      <button className='btn my-5' onClick={()=>handleClick(itemView)}>Add to cart</button>

            </div>


            </div>) }

          <Newsletter/>
          <Footer/>  
        </div>
    );
}

export default ProductPage;
