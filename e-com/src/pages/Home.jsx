
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
        <div className='fixed top-0 left-0 right-0 z-10 bg-white'>
            <Navbar />
            </div>

            <div className='mt-[50px]'>
            <Slider />
            </div>
            <Categories />
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Home;
