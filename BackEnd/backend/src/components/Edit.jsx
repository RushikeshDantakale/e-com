import React, { useState } from "react";
import axios from "axios";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { red } from "@mui/material/colors";
import { toast } from "react-toastify";

export default function Edit({ setIsEdit, isEdit, product, toggle }) {
  const [productEdit, setProductEdit] = useState({
    title: product.title,
    desc: product.desc,
    price: product.price,
    quantity: product.quantity,
  });

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setProductEdit({ ...productEdit, [name]: value });
  };

  const updateProduct = async e => {
    e.preventDefault();
try{
    const response = await axios.post(
      `http://localhost:4000/${toggle}/${product._id}`,
       productEdit 
    );

    const data = response.data;
     toast.success(data.message);

}catch(err){
 toast.error(err.response.data.error);
}
   
  };

  return (
    <div className="w-[100%] bg-blue-200 relative pt-[50px] rounded rounded-[30px] p-[20px] shadow-2xl mt-[-14px] flex flex-col gap-[20px]">

      <div className="flex justify-center items-center ">
        <div className="flex-[0.5] text-[25px] font-bold">Title</div>
        <div className="flex-[1.5]">
          <input
          className="w-[90%] px-[10px] py-[5px] text-[22px]"
            type="text"
            value={productEdit.title}
            name="title"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center items-center ">
      <div className="flex-[0.5] text-[25px] font-bold">Description</div>
      <div className="flex-[1.5]">
          <textarea
          className="w-[90%] h-[120px] px-[10px] py-[5px] text-[22px]"
            type="text"
            value={productEdit.desc}
            name="desc"
            onChange={handleChange}
          />
        </div>
      </div>


      <div className="flex justify-center items-center  ">
      <div className="flex-[0.5] text-[25px] font-bold">Price</div>
      <div className="flex-[1.5]">
          <input
          className="w-[90%] px-[10px] py-[5px] text-[22px]"
            type="text"
            value={productEdit.price}
            name="price"
            onChange={handleChange}
          />
        </div>
      </div>


      <div className="flex justify-center items-center ">
      <div className="flex-[0.5] text-[25px] font-bold">Quantity</div>
      <div className="flex-[1.5]">
          <input
          className="w-[90%] px-[10px] py-[5px] text-[22px]"
            type="text"
            value={productEdit.quantity}
            name="quantity"
            onChange={handleChange}
          />
        </div>
      </div>


      <div className="flex py-[10px] px-[10px] mb-[20px] justify-center gap-[20px]">
        <button className="rounded rounded-lg bg-green-500 flex-1 px-[20px] py-[10px] text-white text-[20px] font-bold hover:bg-green-600" onClick={updateProduct}>Update</button>
        <button className="rounded rounded-lg bg-red-500 flex-1 px-[20px] py-[10px] text-white text-[20px] font-bold hover:bg-red-600" onClick={() => setIsEdit(!isEdit)}>cancel</button>
      </div>

      <button
        className="absolute right-[20px] top-[20px] "
        onClick={() => setIsEdit(!isEdit)}
      >
    <DisabledByDefaultIcon sx={{fontSize:40, color:red[600] }} />
      </button>
    </div>
  );
}
