import React from 'react';
import {Link} from 'react-router-dom';
import { changeCategory } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Category = (props) => {

    const dispatch = useDispatch();

    const handleClick = (title) => {
        console.log(title);
        dispatch(changeCategory(title));
    }


    
    return (
        <div className='m-2 shadow-2xl overflow-hidden relative' onClick= {()=>{handleClick(props.title)}}>

<img src={props.src} className='w-[100%] h-[450px]' alt=""/>

<div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
    <h2 className='text-gray-700 font-medium text-[30px] p-4'>{props.title}</h2>

    <Link to="/category" ><button className='btn ' >See more</button></Link> 
</div>

           
        </div>
    );
}

export default Category;



