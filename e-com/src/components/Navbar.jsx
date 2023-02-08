import{ Badge} from '@mui/material';
import {ShoppingCartOutlined,FavoriteBorderOutlined,Search} from '@mui/icons-material';
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut} from '../store/cartSlice';
import {Link} from 'react-router-dom';

const Navbar =() => {

    const style = 'text-[14px] cursor-pointer '

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const cartItems = useSelector((state)=> state.rootReducer.cartReducer);

    const wishlistItems = useSelector((state)=> state.rootReducer.wishlist);

    const isLogIn = useSelector((state)=> state.rootReducer.logIn.logIn);


    const userName = useSelector((state)=> state.rootReducer.logIn.user);




    const signout = () => {
     dispatch (logOut(''));
     navigate('/');
    }



return (
<div className='Navbar h-[60px] shadow-2xl relative z-10'>
        <div className='wrapper pl-[20px] pr-[20px] flex justify-between items-center h-[100%]'>

<div className='Left flex flex-1 items-center justify-between'>

<div className='center flex-0.1 text-center'>

<div className='Logo font-bold text-lg'>e-com</div>

</div>

<div className='searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[250px] mr-[400px] p-[5px] focus-within:border-[purple] transition-all grow '>
    <input className='input outline-none grow' type='text' placeholder='Search'/>
    <button><Search/></button>
</div>
</div>




<div className='right flex flex-0.5 items-center justify-end h-[100%]'>

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


        </div>

       
    </div>);
}


export default Navbar;