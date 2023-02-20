import React , {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch  } from 'react-redux';
import { changeRender } from "../store/adminSlice";



const Pants = () => {



    const [pant , setPant] = useState({ title:'',image:'', desc:'',price:'', quantity:'' })
    const [base64img , setBase64img] = useState('');

    const inputStyle = "my-2 p-2 rounded outline outline-gray-200 w-full focus-within:outline-purple-500 focus-within:outline-2 transition-all";

    const dispatch = useDispatch();


    const handleImage =async (e)=>{
        
        const file = e.target.files[0];
      const image64 =   await base64(file);
      
      setBase64img(image64)
      setPant({...pant , image: file });

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
    setPant({...pant,[name]:value})
}



const postData =async (e)=>{
    e.preventDefault();

    dispatch(changeRender());
    const {title,
        image,
        desc,
        price,
        quantity} = pant;
    try{
        
    if(!title || !desc || !image || !price || !quantity){
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

    const res =await axios.post('http://localhost:4000/pant/upload',
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
        <div className='w-[100%] h-[95%]'>
        <ToastContainer/>
        <form  method="POST">
        <div className='p-4'>
        <div className='my-2 text-2xl  font-bold'>Enter Your Pant's Details</div>
             <input className={inputStyle} type="text" name="title"  value={pant.title} onChange={handleInput} placeholder='Enter Title' />
             <input className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0  file:text-sm file:font-semibold file:bg-violet-50  hover:file:bg-purple-100" type="file" name="image" onChange={(e)=>{handleImage(e)}} />
            <input className={inputStyle} type="text" name="desc" value={pant.desc} onChange={handleInput} placeholder='Enter Description' />
            <input className={inputStyle} type="text" name="price" value={pant.price} onChange={handleInput} placeholder='Enter Price (in RS.)' /> 
            <input className={inputStyle} type="text" name="quantity" value={pant.quantity} onChange={handleInput} placeholder='Enter Quantity' />

            <button className='bg-green-500 p-2 rounded rounded-lg mt-2 text-white font-bold w-full -2 hover:outline-green-500  hover:outline hover:bg-white hover:text-green-500' onClick={postData} type='submit'>Submit</button>

            
        
        </div>
        
        </form>
        <img src={base64img} alt="img" className='h-[120px] w-[100%] mx-auto mt-[10px]' />
        
        </div>
    );
}

export default Pants;
