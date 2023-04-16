import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {countAdd , countMinus } from '../store/cartSlice';


const Counter = (props) => {
  
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=> state.rootReducer.cartReducer);

    const item = cartItems.filter((item)=> item._id === props.id);
   


    function increaseCount(id){
        dispatch(countAdd(id));

    }

    function decreaseCount(id){
        if(item[0].count===1){}else{
        dispatch(countMinus(id));
    }
    }

    return (
        <div>
            <div className='flex items-center justify-center text-2xl '>
                <div className='ml-5 shadow-md flex'>
<div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md' onClick={()=>decreaseCount(props.id)}>
    -
</div>
<div className='w-8 flex items-center justify-center border-[1px] border-[#8a4af3]' >
   {item[0].count}
</div>
<div className='bg-[#8a4af3] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md' onClick={()=>increaseCount(props.id)}>
    +
</div>

                </div>
            </div>
            
        </div>
    );
}

export default Counter;
