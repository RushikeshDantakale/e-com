import React from 'react';
import {Facebook,Instagram,Twitter,Pinterest, LocationOnOutlined, LocalPhoneOutlined, EmailOutlined} from '@mui/icons-material';

const Footer = () => {

const socialStyle = `m-3 rounded-full cursor-pointer p-2 text-white`;

    return (
        <div className='flex items-center justify-around p-2'>
            <div className='flex-1 flex flex-col flex-wrap p-2'>
                <h1 className='text-[25px]'>E-com Limited..</h1>

        <p>
        E-com Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India
        </p>
        <div className='flex items-center justify-center mt-3 self-start'>
            <div className={ socialStyle+` bg-blue-700`}>
                <Facebook />
            </div>
            <div className={ socialStyle+` bg-orange-500`}>
                <Instagram/>
            </div>
            <div className={ socialStyle+` bg-sky-400`}>
                <Twitter/>
            </div>
            <div className={ socialStyle+` bg-red-600`}>
                <Pinterest/>
            </div>

        </div>
            </div>

            <div className=' flex-1 flex flex-col p-2'>
            
            <div className='flex m-3'>
                <LocationOnOutlined/>
                <p className='pl-3'>State of Maharashtra.</p>
            </div>
            <div className='flex m-3'>
                <LocalPhoneOutlined/>
            <p className='pl-3'>+91 123456789</p>
            </div>
            <div className='flex m-3'>
                <EmailOutlined/>
                <p className='pl-3'>e-comINDIA@gmail.com</p>
            </div>

            </div>

        </div>
    );
}

export default Footer;
