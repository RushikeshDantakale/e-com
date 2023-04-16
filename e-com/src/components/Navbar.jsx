import{ Badge} from '@mui/material';
import {ShoppingCartOutlined,FavoriteBorderOutlined,Search} from '@mui/icons-material';
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut} from '../store/cartSlice';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/ecom.svg'
import { useState } from 'react';

const Navbar =() => {

    const style = 'text-[14px] cursor-pointer '

    const [menu , setMenu] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    

    // const cartItems = useSelector((state)=> state.rootReducer.cartReducer);

    // const wishlistItems = useSelector((state)=> state.rootReducer.wishlist);

    // const isLogIn = useSelector((state)=> state.rootReducer.logIn.logIn);


// const userName = useSelector((state)=> state.rootReducer.logIn.user);


    const {cartReducer:cartItems ,wishlist:wishlistItems,logIn:{logIn:isLogIn},logIn:{user:userName}} = useSelector((state)=> state.rootReducer);


    const signout = () => {
     dispatch (logOut(''));
     navigate('/');
    }



return (<>
<div className='relative Navbar h-[70px] shadow-2xl relative z-[10] bg-white'>

 <div className='wrapper pl-[20px] pr-[20px] flex justify-between items-center h-[100%]'>

<div className='Left flex flex-1 items-center justify-between'>

<div className='center flex-0.1 text-center'>

<div className='Logo font-bold text-lg'> <img  className='h-[55px] bg-gray-500 p-[5px]  rounded-lg' alt='logo' src={logo} /></div>

</div>

<div className='searchInput flex border-[2px] border-solid border-lightgrey-200 rounded-md items-center md:ml-[50px] ml-[20px] mr-[30px] md:mr-[200px] p-[5px] focus-within:border-[purple] transition-all grow '>
    <input className='input outline-none grow' type='text' placeholder='Search'/>
    <button><Search/></button>
</div>
</div>




<div className=' right hidden md:flex md:flex-0.5 md:items-center md:justify-end md:h-[100%]'>

{!isLogIn ?<> <div className={`h-[100%] flex items-center justify-center w-[70px] hover:opacity-1 hover:bg-[rgba(0,0,0,0.1)] `+style}><Link to="/Signup">Sign-up</Link></div>
<div className={`h-[100%] flex items-center justify-center w-[70px] hover:opacity-1 hover:bg-[rgba(0,0,0,0.1)] `+style}><Link to='/Signin'>Sign-in</Link></div> </> :<> 

<button className={`h-[60%] flex items-center font-bold bg-red-500 text-white rounded-full justify-center w-[70px] hover:bg-red-700 `+style} onClick={signout}> Signout</button>

<div className={`h-[100%] flex items-center justify-center w-[70px] hover:opacity-1 hover:bg-[rgba(0,0,0,0.1)] font-bold `+style}>Hi {userName.name}!</div> </>}



<Link to="/wishlist">
<div className={style +` h-[100%] flex items-center justify-center w-[70px] hover:opacity-1 hover:bg-[rgba(0,0,0,0.1)] `} >
<Badge badgeContent={wishlistItems.length} color='primary' > 
<FavoriteBorderOutlined/>
</Badge>
</div>
</Link>

<div className={`h-[100%] flex items-center justify-center w-[70px] hover:opacity-1 hover:bg-[rgba(0,0,0,0.1)] `+style} >

<Link to="/cart">
<Badge badgeContent={cartItems.length} color='primary' >   
<ShoppingCartOutlined ></ShoppingCartOutlined>
</Badge>
</Link>


</div>

<div className='language cursor-pointer text-[16px]'>
En
</div>

</div>

<div className='md:hidden' onClick={()=>{setMenu(!menu);}}>
<MenuIcon/>
</div>


        </div>
        {((menu===true)&&(<div className='h-[300px]   w-[100%] absolute top-[70px] right-[20px] bg-white z-20 cursor-pointer font-semibold text-[20px] self-end p-[10px] flex flex-col gap-[20px] w-[200px] rounded-lg opacity-[0.9]'>
        <Link to="/Signin"><div>Signin</div></Link>
<hr/>
<div>Signup</div>
<hr/>
<div> 
<Badge badgeContent={wishlistItems.length} color='primary' > 
Wishlist
</Badge>
</div>
<hr/>
<div> 
<Link to="/cart">
<Badge badgeContent={cartItems.length} color='primary' >   
Cart
</Badge>
</Link>
</div>
<hr/>
</div>))}
       
    </div>
    
    </>);
}


export default Navbar;