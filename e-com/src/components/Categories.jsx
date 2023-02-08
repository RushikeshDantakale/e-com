import React ,{useEffect,useState} from 'react';
import Category from './Category';
import axios from 'axios';



const Categories = () => {

const [dataCatagory , setDataCatagory] = useState([]);

useEffect(() => {
    const fetchCatagories = async () =>{

        try{
   const res = await axios.get('/category');

   setDataCatagory(res.data);
        }catch(error){
console.log(error);
        }

};
    fetchCatagories();

}, []);




    return (
        <div className='grid grid-cols-3 justify-between items-center p-5'>

     {dataCatagory.map((category)=>{

     return (<Category 
     title= {category.product_name}
     src= {category.src}
     key = {category._id}
     />); 
     })}
        </div>
    );
}

export default Categories;
