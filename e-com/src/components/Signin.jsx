import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./Signin.css";
import "../index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { isLogIn , user } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';



const Signin = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const loginUser = async (e)=>{
        e.preventDefault();

        const res =await fetch('/login',{
            'method':'POST',
            'headers':{
                'Content-Type':'application/json'
            },
            'body':JSON.stringify({
                email,
                password
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
            toast.success(data.message,{
                'position':'top-center',
                'theme':'colored',
                'pauseOnHover':false
            })
            console.log('before setting true islogin!');
            dispatch(isLogIn(true));
            dispatch(user(data.user));
            
            console.log('after setting true islogin!');
            navigate('/');
        
        }
    }





    return (
        <div className='backgroundImage  pt-[80px]'>
         <div className='flex flex-cols items-center mx-[230px] rounded py-[15px] bg-white shadow-2xl pl-[30px]'>
      
        <div className="flex-[0.8] bg-white pt-4  w-[400px] h-[550px]  shadow-2xl rounded-l-2xl p-[20px]">
        <label className='font-bold text-[35px] ml-[20px] '>Signin</label><Link to="/Signup">
        <div className='text-gray-400 text-[15px] cursor-pointer pl-[20px] mt-[10px]'>Doesn't have an account yet? <span className='underline  underline-offset-2 text-purple-500 font-bold '>Sign Up</span></div>
        </Link>

        <form method='POST' className='m-[20px]'>
        <label className='block text-[14px] font-semibold mb-[4px] ml-[5px]'>Email Address or Username</label>

           <input type="text" placeholder='you@gmail.com' name='email' value={email} onChange={(e)=> setEmail(e.target.value) }
           className='w-full h-[40px] py-[23px] px-[10px] mb-[20px] rounded-lg outline outline-[2px] outline-gray-300  focus-within:outline focus-within:outline-[2px]  focus-within:outline-purple-500' />


            <div className='flex items-center justify-between text-[14px] font-semibold mb-[6px] ml-[5px]'>
           <label className=''>Password</label>
           <div className='underline underline-offset-2 text-purple-500 cursor-pointer font-bold'>Forgot Password ?</div>
            </div>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className='block w-full h-[40px] py-[23px] px-[10px] mb-[20px] rounded-lg outline outline-[2px] outline-gray-300  focus-within:outline focus-within:outline-[2px]  focus-within:outline-purple-500 ' />


          <input type="checkbox" name="" id="" className='inline accent-purple-500'/>
          <div className='inline text-[14px] font-semibold ml-[10px]'>Remember me</div>
         
           <button type='submit' onClick={loginUser} className='bg-purple-500 text-[20px] rounded-md shadow-md ease-in-out duration-[50] p-2 opacity-[1.1] hover:bg-white hover:outline hover:outline-purple-500 text-white font-semibold p-2 mt-4 w-full hover:text-purple-500 '>SignIn</button>
           </form>
           </div>

           <div className='flex-[1.2] p-2 loginImage h-[550px] w-[100%] shadow-2xl rounded-r-2xl '> 
          

           </div>
           </div>
           <ToastContainer/>
        </div>
    );
}

export default Signin;
