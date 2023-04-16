import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';

const CategoryProduct = () => {

    const categoryClicked = useSelector((state) => state.rootReducer.categoryClick);

    console.log(categoryClicked);


    return (
        <div>
            <Navbar/>
            <div className='flex flex-col p-5'>
            <h1 className='text-[30px]'>{(categoryClicked==='mobiles')?(<div>Mobiles</div>):(<div>Men's {categoryClicked}</div>)}</h1>
            <div className='flex items-center justify-between mt-3'>
            <div className='flex '>
            <p>Filter by </p>
                <select className='ml-3 border-[2px] border-silver'>
                    <option selected disabled>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>

                </select>

                <select className='ml-3 border-[2px] border-silver'>
                    <option selected disabled>color</option>
                <option>Yellow</option>
                <option>Blue</option>
                <option>Red</option>

                </select>
                </div>
                <div className='flex'>
                <p>Sort by</p>
                <select className='ml-3 border-2  border-silver'>
                    <option>Newest (first)</option>
                    <option>Oldest (first)</option>
                    <option>Price (Asc)</option>
                    <option>Price (Des)</option>
                </select>

                </div>

            </div>

            </div>
            <Products />
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default CategoryProduct;
