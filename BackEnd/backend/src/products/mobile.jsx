import React , {useState} from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Mobile = () => {

    const inputStyle = "my-2 p-2 rounded outline outline-gray-200 w-[100%] focus-within:outline-purple-500 focus-within:outline-2 transition-all";
    
    
    
    const [mobile , setMobile] = useState({ title:'', desc:'',image : '' ,price:'', quantity:'', ram:'' , rom:'' , backCamera:'', frontCamera:'' })
    const [img64 , setImg64] = useState('')



    const handleImage =async (e)=>{
        
        const file = e.target.files[0];
      const image64 =   await base64(file);
      setImg64(image64);
      setMobile({...mobile,image : file});
     

    }


    const base64 = (file)=>{
        return new Promise((resolve , reject)=>{

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = ()=>{
                resolve(fileReader.result);
            } 

            fileReader.onerror = (error)=> {
                reject(error);
            }

        })
    }

const handleInput = (e) =>{
  
    const { name , value } = e.target; 
    setMobile({...mobile,[name]:value})
}



const postData =async (e)=>{
    e.preventDefault();

    // checkSubmit();
    const {title,
        image,
        desc,
        price,
        quantity,
    ram,
    rom,
    backCamera,
    frontCamera} = mobile;



    try{
        
    if(!title || !desc || !image || !price || !quantity || !rom || !ram || !backCamera || !frontCamera){
        toast.error("please fill the fields properly!",{
            'position':'top-right',
            'theme':'colored',
            'pauseOnHover':false
        });
    }else{
        const formData = new FormData();
    formData.append('title',title);
    formData.append('desc',desc);
    formData.append('image',image);
    formData.append('price',price);
    formData.append('quantity',quantity);
    formData.append('rom',rom);
    formData.append('ram',ram);
    formData.append('backCamera',backCamera);
    formData.append('frontCamera',frontCamera);

    const res =await axios.post('http://localhost:4000/mobile/upload',
    formData
    )

const data = res.data;



if(data){
    toast.success(data.message,{
        'position':'top-right',
        'theme':'colored',
        'pauseOnHover':false
    })
}
    }
    
    }catch(error){
        toast.error(error.response.data.error,{
            'position':'top-right',
            'theme':'colored',
            'pauseOnHover':false
        });
        console.log(error.response.data.error);
    }
}

    return (
        <>
         
        <form  method="post">
        <div className='p-4 overflow-x-hidden'>
        <div className='font-bold text-2xl my-2'>Enter Mobile Data here!</div>
             <input className={inputStyle} type="text" name="title" placeholder='Enter Title' onChange={handleInput}/>
             <input className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0  file:text-sm file:font-semibold file:bg-violet-50  hover:file:bg-purple-100" type="file" name="" onChange={(e)=>handleImage(e)} />
            <input className={inputStyle} type="text" name="desc" placeholder='Enter Description' onChange={handleInput}/>
            
            <div className='flex gap-[10px]'>
            <input className={inputStyle} type="text" name="price" placeholder='Enter Price' onChange={handleInput}/>
            <input className={inputStyle} type="text" name="quantity" placeholder='Enter quantity' onChange={handleInput} />
            <input className={inputStyle} type="text" name="ram" placeholder='Enter Ram' onChange={handleInput}/>
            </div>

            <div className='flex gap-[10px]'>
            <input className={inputStyle} type="text" name="frontCamera" placeholder='Enter Front Camera (in MP)' onChange={handleInput} />
            <input className={` ${inputStyle} w-[100px]`} type="text" name="rom" placeholder='Enter Rom' onChange={handleInput}/>           
            </div>

            <input className={`${inputStyle}`} type="text" name="backCamera" placeholder='Enter Back Camera (in MP)' onChange={handleInput}/>

            <button className='bg-green-400 p-2 rounded rounded-lg m-4 text-white font-bold w-full' onClick={postData}  type='submit'>Submit</button>
        </div>
        </form>
        <div className='h-[800px]'>
            <img src={img64} alt="img" />
        </div>

        </>
    );
}

export default Mobile;
