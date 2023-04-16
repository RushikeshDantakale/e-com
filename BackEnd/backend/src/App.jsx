import "./index.css";
import { useState, useEffect } from "react";

import Mobile from "./products/mobile";
import Pants from "./products/pants";
import Shirts from "./products/Shirts";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { changeRender } from "./store/adminSlice";
import Product from "./components/Product";



function App() {

  const [toggle, setToggle] = useState('shirt');

  const [refresh, setRefresh] = useState(true);


  const [dataProduct, setDataProduct] = useState([]);

  const [editPr, setEditPr] = useState("");

 

  
  const dispatch = useDispatch();

  const render = useSelector(state => state.rootReducer.render);


  var activeTab = " bg-purple-500 border border-2 border-white text-white";
  var inActiveTab = " bg-gray-200";
  var tab = "my-2 p-2 flex-auto";
  



  const handleClick = index => {
    setToggle(index);
    
  };

  const removeProduct = async id => {
    try {
      const res1 = await axios.delete("http://localhost:4000/shirt/delete", {
        data: {
          id,
        },
      });

   
 
      dispatch(changeRender());

      if (res1.data.message) {
        toast.warn(res1.data.message, {
          position: "top-right",
          theme: "colored",
          pauseOnHover: false,
        });
      
      }
    } catch (err) {
     toast.error(err.response.data.error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
 console.log(toggle);
        try {
          const res = await axios(`http://localhost:4000/${toggle}`);
          setDataProduct(res.data);
         
        } catch (error) {
          console.log(error);
        }
      
    };
    fetchProducts();
  }, [render, refresh, toggle]);

  const checkSubmit = () => {
    dispatch(changeRender());
  };

  const refreshData = () => {
    setRefresh(!refresh);
  };

  const editProduct = product => {
    setEditPr(product);
  };



  return (
    <div className="h-[100vh] w-[100vw] relative">
      <ToastContainer />
      <div className="md:flex items-center justify-center md:mx-[50px] sm:mx-[20px] mx-[10px] ">
      
      

        <div className="w-full h-[680px] mx-auto border border-2 p-4 bg-white mt-4 rounded-lg shadow-2xl flex-1 overflow-y-auto  ">
          <div className="flex ">
            <button
              className={`${tab} rounded-l-lg ${
                toggle === 'shirt' ? activeTab : inActiveTab
              }`}
              onClick={() => handleClick("shirt")}
            >
              Shirts
            </button>
            <button
              className={`${tab}  ${toggle === 'pant' ? activeTab : inActiveTab}`}
              onClick={() => handleClick('pant')}
            >
              Pants
            </button>
            <button
              className={`${tab} rounded-r-lg  ${
                toggle === 'mobile' ? activeTab : inActiveTab
              }`}
              onClick={() => handleClick('mobile')}
            >
              Mobiles
            </button>
          </div>

          {toggle === 'shirt' && <Shirts checkSubmit={checkSubmit} />}
          {toggle === 'pant' && <Pants checkSubmit={checkSubmit} />}
          {toggle === 'mobile' && <Mobile checkSubmit={checkSubmit} />}
        </div>





        <div className=" h-[680px] mt-4 md:ml-[20px] rounded-lg shadow-2xl border-2 border-gray-200 flex-[1.6] overflow-h-auto  overflow-y-auto">
          <div className="font-bold text-[25px] bg-white w-full pt-[20px] pl-[20px] border-b-2 border-gray-400 flex justify-between">
            <div className="flex">
              Your &nbsp;{" "}
              {(toggle === 'shirt' && <p>Shirt</p>) ||
                (toggle === 'pant' && <p> Pants</p>) ||
                (toggle === 'mobile' && <div className="ml-[2px]"> Mobile </div>)}{" "}
              &nbsp; data is below:
            </div>
            <button
              className="bg-lime-300 md:mr-[25px] p-[5px] my-[10px] rounded-xl  text-[20px]"
              onClick={refreshData}
            >
              Refresh
            </button>
          </div>

          <div className=" flex flex-wrap p-[10px] gap-4  ">
           
            {dataProduct.map((product, index) => (
              <Product key={index} product={product} editProduct={editProduct} removeProduct = {removeProduct} toggle={toggle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
