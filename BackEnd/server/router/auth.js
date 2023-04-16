const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors')




const router = express();


express.json({limit:1000000000000,type:'application/json'});
express.urlencoded({limit:1000000000000,type:'application/json',extended:true});
express.raw({limit:1000000000000});


router.use(cors());
const jwt = require('jsonwebtoken');
require("../DB/conn");

const User = require("../model/userSchema"); 



router.get('/', (req, res)=>{
    res.send('hello World from the Router server.')
    });  

router.post('/register', async (req,res)=>{

    console.log(req.body);

const {name , email, phone , password ,cpassword} =req.body;


if(!name || !email || !phone || !password || !cpassword){
    return res.status(422).json({error:"Please fill the fields properly!"});
}



try{
    const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error : "user already exists!"})
        }else if(password !== cpassword){
            
            return res.status(422).json({error:"Password and Confirm Password must be same!"})
        }else{
    
        const user = new User({name , email, phone , password ,cpassword});

        //Hashing 
    
        await user.save();

  
        res.status(201).json({message:"user registered successfully!"})

        }
      
     }catch (err){
console.log(err);
}

})


//loginroute
router.post('/login',async (req,res)=>{

try{

const { email ,password }= req.body;

if(!email || !password){
    res.status(400).json({error:"plz fill the data correctly!"})
}

const userLogin =await User.findOne({$or:[{email:email},{name:email}]})

if(userLogin){
    const isMatch = await bcrypt.compare(password , userLogin.password);
  
    const token =await userLogin.generateAuthToken()
    console.log(token);

    res.cookie("jwtoken",token,{
        expires:new Date(Date.now() + 259000000),
        httponly:true
    });

    if(!isMatch){
        res.status(400).json({error:"Invalid Credientials!"})
    }else{
        res.json({message:"user Signin successfully",
    user:userLogin})
        }
}else{
    res.status(400).json({error:"Invalid Credientials!"})
}




}catch(error){

console.log(error);
}
})





module.exports =  router;