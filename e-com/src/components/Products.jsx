import React , {useState , useEffect} from 'react';
import Product from './Product';
import axios from 'axios';
import { useSelector } from 'react-redux';



const Products = () => {

 

        const [dataProduct , setDataProduct] = useState([]);

        const categoryClicked = useSelector((state) => state.rootReducer.categoryClick);

        console.log(categoryClicked);


        const fetchProducts = async (product) =>{
            try{
                const res = await axios(product);
                setDataProduct(res.data);
                     }catch(error){
             console.log(error);
                     }
        };


       
        
        useEffect(() => {

if(categoryClicked==='shirts'){
    fetchProducts('/shirt');
}else if(categoryClicked==='pants'){
    fetchProducts('/pant');
}else{
    fetchProducts('/mobile');
}
       }, [categoryClicked]);




    return (
        <div className='grid md:grid-cols-5 grid-cols-2  md:p-5 items-center justify-center gap-5'>
            {
                dataProduct.map((product , index)=>{
                return (<Product
                    product= {product}
                    key = {index}
                    
                />)
            })

            }
        </div>
    );
}

export default Products;
