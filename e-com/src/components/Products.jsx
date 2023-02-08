import React , {useState , useEffect} from 'react';
import Product from './Product';
import axios from 'axios';




const Products = () => {

 

        const [dataProduct , setDataProduct] = useState([]);
        
        useEffect(() => {
            const fetchProducts = async () =>{
        
                try{
           const res = await axios('/shirt');
           setDataProduct(res.data);
                }catch(error){
        console.log(error);
                }
        
        };
        fetchProducts();
        
        }, []);




    return (
        <div className='grid grid-cols-5 p-5 items-center justify-center gap-5'>
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
