import React,{useState} from 'react';
import {ShoppingCartOutlined} from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { view ,wishlistRemove,add , countAdd } from '../store/cartSlice';
import {useDispatch  ,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { wishlistAdd } from '../store/cartSlice';



const Product = (item) => {
    const dispatch = useDispatch();
    

    const[hoverEffect, setHoverEffect]=useState(``);
    const [onClickColor , setOnClickColor] = useState(` opacity-[1.1] text-[rgba(0,0,0,0.1)]`);

    const navigate = useNavigate();
    const wishlistItem = useSelector((state)=>state.rootReducer.wishlist);
    const cartItem = useSelector((state)=>state.rootReducer.cartReducer);



const iconStyle = 'h-[35px] w-[40] flex items-center justify-center p-1 m-2 cursor pointer  ease-in duration-100 cursor-pointer '

const handleMouseEnter=()=>{
    setHoverEffect(` opacity-[1.1] bg-[rgba(0,0,0,0.1)]`)
} 
const handleMouseLeave=()=>{
    setHoverEffect(``)

}



const viewProduct= (item) =>{
    console.log(item.product);
    dispatch(view(item.product));
    navigate('/product');
}

const addWishlist = (item) =>{

  const wishlistArray = wishlistItem.filter((wishlistItem)=>{
    return wishlistItem.title === item.title;
  });

if(wishlistArray.length !== 0){
   console.log('item already exists on your wishlist!');
   dispatch(wishlistRemove(item._id));
   setOnClickColor(' opacity-1.1 text-[rgba(0,0,0,0.1)]');

}else{
    setOnClickColor(' text-red-500');
    dispatch(wishlistAdd(item));
}

 navigate('/category');
}

const handleAdd = (item)=> {
    const cartArray = cartItem.filter((cartItem)=>{
        return cartItem._id === item._id;
      });
    
    if(cartArray.length !== 0){
       console.log('item already exists on your Cart!');
        dispatch(countAdd(item._id));
      
    
    }else{
        dispatch(add(item));
        // navigate('/category');
    }
    
    
}


    return (
    <div className='relative shadow-2xl ' >
     
            <FavoriteIcon className= {`absolute right-[10px] top-[20px] `+ iconStyle + onClickColor} onClick={()=>addWishlist(item.product)} fontSize='large'/>
           

           
           
         
        <div className={`flex flex-1 flex-col items-center justify-center min-w-[250px] min-h-[300px] overflow-hidden rounded-md  m-2 `+ hoverEffect } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <img className='w-[100%] h-[250px] bg-contain bg-center' src={`http://localhost:4000/${item.product.imageUrl}`} onClick={()=>{viewProduct(item)}} alt=""/>
            <div className='pt-[3px] font-semibold text-[23px]'>{item.product.title}</div>
            <div className='pt-[3px] text-white font-semibold text-[23px] w-[100%] bg-purple-500 flex items-center justify-center line-through'>₹{item.product.price}</div>
            <div className='bg-black text-[15px] m-[5px] px-[20px] py-[5px] text-white rounded-full'>10 % Discount : ₹{Number(item.product.price)-(Number(item.product.price))*0.1}</div>

            <div className='bg-purple-800 text-[15px] m-[5px] px-[20px] py-[5px] w-[100%] text-white  cursor-pointer flex justify-center items-center rounded-lg hover:bg-purple-700 hover:opacity-[1.1]' onClick = {()=>{handleAdd(item.product)}}>
            <ShoppingCartOutlined className= { iconStyle}  fontSize='large'/>
            <span className='font-bold text-[23px]'>Buy Now</span>
            </div>
           


        </div>
        
            
      </div> 
    );
}

export default Product;
