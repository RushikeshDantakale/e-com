const express = require('express');

const router = express();
const fs = require('fs');



const cors = require('cors');

const multer = require('multer');
const upload = multer({dest: 'uploads/Shirts/'});

const pantUpload = multer({dest : 'uploads/Pants/'});

const mobileUpload = multer({dest : 'uploads/Mobiles/'});





express.json({limit:1000000000000});
express.urlencoded({limit:1000000000000,extended:true});
express.raw({limit:1000000000000});

router.use(cors());
router.use('/uploads', express.static('uploads'));
require("../DB/conn");
const Shirt = require("../model/shirtSchema"); 
const Pant = require("../model/pantSchema"); 

const Mobile = require("../model/mobileSchema"); 
const Catagory = require('../model/catagorySchema');

router.get('/shirt', async (req,res)=> {
   
   const data = await Shirt.find({});
   if(!data){
res.status(402).json({error:"there is no data!"})
   }else{
   res.send(data);
   }

   });


router.get('/category',async (req,res)=>{

    const data = await Catagory.find({});
    if(!data){
        res.status(402).json({error:"there is no data!"})
           }else{
           res.send(data);
           }

})


router.get('/pant',async (req,res)=>{

    const data = await Pant.find({});
    if(!data){
        res.status(402).json({error:"there is no data!"})
           }else{
           res.send(data);
           }

})

router.get('/mobile',async (req,res)=>{

    const data = await Mobile.find({});
    if(!data){
        res.status(402).json({error:"there is no data!"})
           }else{
           res.send(data);
           }

})
   



router.post('/shirt/upload',upload.single('image'), async (req, res)=>{

    const {title , desc , price , quantity } = req.body;
   const imageUrl =req.file.path;

    try{
    if(!title || !desc || !price || !quantity || !imageUrl){
            res.status(402).json({error:"Please fill the fields properly!"});
            fs.unlink(imageUrl, (err) => {
                if (err) {
                  console.error(err);
                }else{
                    console.log('removed successfully!');
                }
              
                //file removed
              })
        }else{
    const itemExist = await Shirt.findOne({title:title})

    if(itemExist){
        res.status(402).json({error:"item already exists!"});
    }else{
     const shirt = new Shirt({title ,imageUrl ,desc , price , quantity});

     await shirt.save();

    res.json({message:"product uploaded successfully!"})
  }
}
}catch(error){
    res.status(402).json({error:"error occurred while uploading!"})
}


})


router.post('/pant/upload',pantUpload.single('image'), async (req, res)=>{

    const {title , desc , price , quantity } = req.body;
   const imageUrl =req.file.path;

    try{
    if(!title || !desc || !price || !quantity || !imageUrl){
            res.status(402).json({error:"Please fill the fields properly!"});
            fs.unlink(imageUrl, (err) => {
                if (err) {
                  console.error(err);
                }else{
                    console.log('removed successfully!');
                }
              
                //file removed
              })
        }else{
    const itemExist = await Pant.findOne({title:title})

    if(itemExist){
        res.status(402).json({error:"item already exists!"});
    }else{
     const shirt = new Pant({title ,imageUrl ,desc , price , quantity});

     await shirt.save();

    res.json({message:"product uploaded successfully!"})
  }
}
}catch(error){
    res.status(402).json({error:"error occurred while uploading!"})
}


})



router.post('/mobile/upload',mobileUpload.single('image'), async (req, res)=>{

    const {title , desc , price , quantity , frontCamera , rearCamera } = req.body;
   const imageUrl =req.file.path;

    try{
    if(!title || !desc || !price || !quantity || !imageUrl){
            res.status(402).json({error:"Please fill the fields properly!"});
            fs.unlink(imageUrl, (err) => {
                if (err) {
                  console.error(err);
                }else{
                    console.log('removed successfully!');
                }
              
                //file removed
              })
        }else{
    const itemExist = await Mobile.findOne({title:title})

    if(itemExist){
        res.status(402).json({error:"item already exists!"});
    }else{
     const shirt = new Mobile({title ,imageUrl ,desc , price , quantity});

     await shirt.save();

    res.json({message:"product uploaded successfully!"})
  }
}
}catch(error){
    res.status(402).json({error:"error occurred while uploading!"})
}


})




router.delete('/shirt/delete', async (req,res)=>{


    // console.log(req.body.id);
Shirt.find({_id:req.body.id }, function (err, docs) {

    //Deleting the file stored using multer at time of uploading !
    const path = './'+docs[0].imageUrl;
    fs.unlink(path, (err) => {
        if (err) {
          console.error(err);
        }
      })
  });

  //Deleting the record in the mongodb database!
 
await Shirt.findOneAndDelete({_id:req.body.id });

res.send({message:'removed Successfully!'});


})

router.post('/pant/upload', async (req, res)=>{
 
  
    const {title , image , desc , price , quantity } = req.body;
   
    try{
    if(!title || !desc || !price || !quantity){
            res.status(402).json({error:"Please fill the fields properly!"});
        }else{
    const itemExist = await Pant.findOne({title:title})

    if(itemExist){
        res.status(402).json({error:"item already exists!"});
    }else{
     const pant = new Pant({title ,image ,desc , price , quantity});

     await pant.save();

    res.json({message:"product uploaded successfully!"})
  }
}
}catch(error){
    res.status(402).json({error:"error occurred while uploading!"})
}


})



module.exports =  router;