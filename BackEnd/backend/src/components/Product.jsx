import React, { useEffect, useState } from 'react'
import Edit from './Edit';

export default function Product({ product , editProduct , removeProduct , toggle}) {

const [isEdit ,setIsEdit] = useState(false);

useEffect(()=>{
setIsEdit(false);
},[toggle])

  return (<>
    <div
                className="flex flex-cols shadow-xl border-2 border-gray-200 w-full items-center justify-start"
               
              >
                <div className="w-[80px] h-[50px]">
                  <img
                    className="w-[100%] h-[100%] bg-cover rounded-lg "
                    src={`http://localhost:4000/${product.imageUrl}`}
                    alt=""
                  />
                </div>

                <div className="p-[10px] w-[400px]">{product.title}</div>
                <div className=" p-[10px] w-[100px] font-semibold">
                  ₹ {product.price}
                </div>
                <div className="flex w-full justify-end  ">
                  <button
                    className="m-[10px] bg-lime-300 h-[40px] rounded-lg p-[10px]  font-bold hover:bg-yellow-400 flex items-center  shadow-2xl"
                    onClick={() => {
                      setIsEdit(!isEdit);
                      editProduct(product);
                    }}
                  >
                    Edit/View
                  </button>

                  <button
                    className="m-[10px] bg-red-500 h-[40px] rounded-lg p-[10px] text-white font-bold hover:bg-red-400 flex items-center shadow-2xl"
                    onClick={() => removeProduct(product._id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
             {isEdit && <Edit setIsEdit={setIsEdit} isEdit={isEdit} product={product} toggle={toggle} />
              }
              </> )
}
