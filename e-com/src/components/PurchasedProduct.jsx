import React  from 'react';
import Counter from '../components/Counter';

import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice';




const PurchasedProduct = (props) => {


    const dispatch = useDispatch();
    
  
  const removeItem = (item)=>{
    dispatch(remove(item));
  }

    return (
        <>
        <div className='flex w-[100%] h-auto items-center shadow-lg hover:opacity-1 hover:bg-[rgba(0,0,0,0.1)] my-[10px]'>
                <div className='product flex self-start pl-5  p-2'>
                <img 
                className='w-[7.2rem] h-[100px] rounded-lg shadow-lg '
                    src={`http://localhost:4000/${props.cartItem.imageUrl}`}
                    alt='product-img'
                />
                <div className='description flex flex-col ml-5 h-auto justify-between ' >
                
                        <p>
                            <b className='mr-2'>Id:</b>{props.cartItem._id}
                        </p>
                        <p>
                            <b className='mr-2'>product:</b>{props.cartItem.title}
                        </p>
                    
                        <p>
                            <b className='mr-2'>price:</b>₹ {props.cartItem.price}
                        </p>
                
                    </div>
                </div>
                    <div className=' flex flex-row justify-around  flex-auto'> 
                    <Counter id={props.cartItem._id} />

                    <div>
                        <button className='text-red-500 font-semibold p-[10px] rounded-lg hover:bg-red-300' onClick={()=>{removeItem(props.cartItem._id)}} ><DeleteIcon fontSize='large'/></button>
                    </div>
                   
                    </div>

                   
                </div>
            
        </>
    );
}

export default PurchasedProduct;
