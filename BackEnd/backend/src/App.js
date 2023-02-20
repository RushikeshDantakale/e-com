import "./index.css"
import { useState ,useEffect } from "react";

import Mobile from "./products/mobile";
import Pants from "./products/pants";
import Shirts from "./products/Shirts";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch ,useSelector } from 'react-redux';
import { changeRender } from "./store/adminSlice";
import BorderColorIcon from '@mui/icons-material/BorderColor';




function App() {

  const [toggle,setToggle] =useState(1);

  const [refresh , setRefresh] = useState(true);

  const [showModal, setShowModal] =useState(false);

  const [product, setProduct] = useState({title:'',imageUrl:'', desc:'' , price: ''});

  const dispatch = useDispatch();

  const render = useSelector((state)=> state.rootReducer.render);
  
  // console.log(render , 25);

 

  var activeTab = " bg-purple-500 border border-2 border-white text-white"
  var inActiveTab = " bg-gray-200"
  var tab = "my-2 p-2 flex-auto"
  const [dataProduct , setDataProduct] = useState([]);

  const [editPr , setEditPr] = useState('');
  const [editInput, setEditInput] = useState(false);



  const inputStyle = `flex-wrap grow p-[5px] `;
  const inputDiv = 'flex justify-between items-center border-2 border-purple-300 p-[10px] ';


  // const navigate = useNavigate();

  const handleClick = (index) => {

    setToggle(index);
  }

  const removeProduct= async (id) => {
    try{
     const res1 = await axios.delete('http://localhost:4000/shirt/delete',
     {
      data:{
        id
      }
    
    });

    console.log(res1);
   //dispatch the Render
   dispatch(changeRender());

    if(res1.data.message){
    toast.warn(res1.data.message,{
      'position':'top-right',
      'theme':'colored',
      'pauseOnHover':false
  });
// navigate('/');
}
 
     
    }catch(err){
     console.log(err);
    }
   
   }

  useEffect(() => {
    const fetchProducts = async () =>{

      if(toggle===1){
        try{
          const res = await axios('http://localhost:4000/shirt');
          setDataProduct(res.data);
          console.log(render , 91);
               }catch(error){
       console.log(error);
               }
      }else if(toggle===2){
        try{
          const res = await axios('http://localhost:4000/pant');
          setDataProduct(res.data);
          console.log(render , 99);
               }catch(error){
       console.log(error);
               }
      }else{
        try{
          const res = await axios('http://localhost:4000/mobile');
          setDataProduct(res.data);
          console.log(render , 107);
               }catch(error){
       console.log(error);
               }
              }

};
fetchProducts();

}, [render , refresh, toggle]);


const checkSubmit = ()=> {
 dispatch(changeRender());
}


const refreshData =()=>{
  setRefresh(!refresh);
}


const editProduct = (product) => {
setEditPr(product);
}

const editOrView = () =>{
  setEditInput(!editInput);
}

  return (<>
 
  <ToastContainer/>

   
      {showModal ? (
        <div >
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] h-[600px] bg-white outline-none focus:outline-none p-[20px]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Edit/View
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-white text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>


                {/* content here */}
                {console.log(editPr)}
                <div  className={inputDiv}>
                <input className={inputStyle} type="text" value={editInput?null:editPr.title} />
                <div  className="cursor-pointer " onClick={editOrView} r><BorderColorIcon/></div>
                 </div>

                 <div  className={inputDiv}>
                <input className={inputStyle} type="text" value={editInput?null:editPr.desc}/>
                <div className="cursor-pointer " onClick={editOrView}><BorderColorIcon/></div>
                 </div>

                 <div  className={inputDiv}>
                <input className={inputStyle} type="text" value={editInput?null:editPr.price} />
                <div className="cursor-pointer "  onClick={editOrView}><BorderColorIcon/></div>
                 </div>

                 <div className="">
                  <img className="h-[200px] w-[100%]" src={`http://localhost:4000/${editPr.imageUrl}`} alt="img" />
                 </div>
                 <div className="flex items-center justify-center gap-4 mt-[10px]">
                 <button className="bg-red-500 rounded-lg w-[100%] p-[10px]  text-white font-bold hover:bg-red-300"
                 onClick={()=>setShowModal(false)}
                 >Cancel</button>
                 <button className="bg-green-500 rounded-lg w-[100%] p-[10px]  text-white font-bold hover:bg-green-300">Update</button>
                 </div>
                 
          
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    
<div className="flex items-center justify-center mx-[200px]">
<div className="w-[400px] h-[680px] mx-auto border border-2 p-4 bg-white mt-4 rounded-lg shadow-2xl flex-1 overflow-y-auto  ">
<div className="flex ">
<button className={`${tab} rounded-l-lg ${toggle===1 ? activeTab :inActiveTab}`} onClick={()=>handleClick(1)}>Shirts</button>
<button className={`${tab}  ${toggle===2 ?activeTab:inActiveTab}`} onClick={()=>handleClick(2)}>Pants</button>
<button className={`${tab} rounded-r-lg  ${toggle===3 ? activeTab:inActiveTab}`} onClick={()=>handleClick(3)}>Mobiles</button>
</div>

{toggle===1 && <Shirts checkSubmit = {checkSubmit}/>}
{toggle===2 && <Pants checkSubmit = {checkSubmit}/>}
{toggle===3 && <Mobile checkSubmit = {checkSubmit}/>}

</div>

<div className="w-[400px] h-[680px] mt-4 ml-[20px] rounded-lg shadow-2xl border-2 border-gray-200 flex-[1.6] overflow-h-auto  overflow-y-auto">
<p className="font-bold text-[25px] fixed bg-white w-[43%] pt-[20px] pl-[20px] border-b-2 border-gray-400 flex justify-between items-center">Your {(toggle===1 && <p>Shirt</p>) || (toggle===2 && <p> Pants</p>) || (toggle===3 && <p>Mobile</p>) } data is below <button className="bg-lime-300 mr-[25px] p-[5px] my-[10px] rounded-xl  text-[20px]" onClick={refreshData}>Refresh</button></p> 

<div className=" flex flex-wrap p-[10px] gap-4 mt-[60px] ">  {dataProduct.map((product,index)=>

(<div className="flex flex-cols shadow-xl border-2 border-gray-200 w-full items-center justify-start" key={index}>
<div className="w-[80px] h-[50px]">
<img className='w-[100%] h-[100%] bg-cover rounded-lg ' src={`http://localhost:4000/${product.imageUrl}`} alt=""/></div>

<div className="p-[10px] w-[400px]">{product.title}</div>
<div className=" p-[10px] w-[100px] font-semibold">₹ {product.price}</div>
<div className="flex w-full justify-end  ">

<button className="m-[10px] bg-lime-300 h-[40px] rounded-lg p-[10px]  font-bold hover:bg-yellow-400 flex items-center  shadow-2xl" onClick={() => {
  setShowModal(true );
  editProduct(product);
  }} >Edit/View</button>

<button className="m-[10px] bg-red-500 h-[40px] rounded-lg p-[10px] text-white font-bold hover:bg-red-400 flex items-center shadow-2xl" onClick={()=>removeProduct(product._id)}>Remove</button>
</div>

</div>))}</div>

</div>

</div>

  </>);
}

export default App;
