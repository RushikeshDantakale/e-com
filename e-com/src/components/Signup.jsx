import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { ToastContainer, toast } from 'react-toastify';
import "./Signin.css";
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
const navigate = useNavigate();

const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""
});

const [password , setPassword ]=useState(0);

const [confirmPassword , setConfirmPassword ]=useState(0);

const handleInputs = (e)=>{
  
const {name , value } = e.target;

setUser({...user,[name]:value});

}

const postData = async (e)=>{
e.preventDefault();
const { name , email , phone , password , cpassword } = user;
const res =await fetch('/register',{
    'method':'POST',
    'headers':{
        'Content-Type':'application/json'
    },
    'body':JSON.stringify({
        name , email , phone , password , cpassword 
    })
})

console.log(res);
const data =await res.json(); 

if(data.error){
    toast.error(data.error,{
        'position':'top-center',
        'theme':'colored',
        'pauseOnHover':false
    });
}else{
    navigate('/signin');
    toast.success(data.message,{
        'position':'top-center',
        'theme':'colored',
        'pauseOnHover':false
    });
    
 
}
}


const passShow = (e)=>{
    setPassword(e);
}

const cPassShow = (e)=>{
    setConfirmPassword(e);
}

    return (
        <div className='backgroundImage pt-[80px]'>
      <div className='flex flex-cols items-center mx-[230px] rounded py-[15px] bg-white shadow-2xl pl-[30px]'>
      
        <div className="flex-[0.8] bg-white pt-4 shadow-2xl w-[400px] h-[550px]  shadow-2xl rounded rounded-l-2xl border border-[2px] border-white">
        <label className=' p-2 m-2 flex justify-center rounded rounded-lg text-gray-400 font-bold text-[40px] '>SignUp</label>

        <form method='POST' className='m-[20px]'>

           <input  className='rounded-lg mt-2 p-2 w-full' type="text" name='name'  value={user.name} onChange={handleInputs} placeholder="Enter your Name"/>

           <input className='rounded-lg mt-2 p-2 w-full' type="text"  name='email' value={user.email}  onChange={handleInputs} placeholder="Enter Email"/>

           <input className='rounded-lg mt-2 p-2 w-full' type="text"  name='phone' value={user.phone}  onChange={handleInputs} placeholder="Enter phone no"/>

           <div className='flex flex-cols items-center'>

           <input className='flex-[1.5] rounded-lg mt-2 p-2 w-full' type={password?"text":"password"} name='password' value={user.password}  onChange={handleInputs} placeholder="Enter password"/> {password?<VisibilityIcon className='flex-[0.5]' onClick={()=>passShow(0)}/>:<VisibilityOffIcon className='flex-[0.5]' onClick={()=>passShow(1)}/>}
           </div>

           <div className='flex flex-cols items-center'>

           <input className='flex-[1.5] rounded-lg mt-2 p-2 w-full' type={confirmPassword?"text":"password"} name='cpassword' value={user.cpassword}  onChange={handleInputs} placeholder="Confirm password"/>{confirmPassword?<VisibilityIcon className='flex-[0.5]' onClick={()=>cPassShow(0)}/>:<VisibilityOffIcon className='flex-[0.5]' onClick={()=>cPassShow(1)}/>}
           </div>

           <button type="submit" onClick={postData} className='bg-purple-500 text-[20px] rounded-md shadow-md ease-in-out duration-[50] p-2 opacity-[1.1] hover:bg-white hover:outline hover:outline-purple-500 text-white font-semibold p-2 mt-4 w-full hover:text-purple-500 '>Register</button>
           </form>
           </div>

           <div className='flex-[1.2] p-2 loginImage h-[550px] w-[100%] shadow-2xl rounded-r-2xl'> 
          

           </div>
           </div>
           <ToastContainer/>
        </div>);
    
}
export default Signup;
