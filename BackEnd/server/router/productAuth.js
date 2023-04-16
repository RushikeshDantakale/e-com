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
const { log } = require('console');

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

    const {title , desc , price , quantity , ram , rom , frontCamera , backCamera } = req.body;
   const imageUrl =req.file.path;

console.log(title , desc , rom , imageUrl , 166);

    try{
    if(!title || !desc || !price || !quantity || !imageUrl ){
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
        console.log('before creating object');
     const mobile = new Mobile({title ,imageUrl ,desc , price , quantity , ram ,rom, frontCamera, backCamera  });

     await mobile.save();
     console.log('after creating object');

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



router.delete('/pant/delete', async (req,res)=>{


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
 
await Pant.findOneAndDelete({_id:req.body.id });

res.send({message:'removed Successfully!'});


})


router.delete('/mobile/delete', async (req,res)=>{


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
 
await Mobile.findOneAndDelete({_id:req.body.id });

res.send({message:'removed Successfully!'});


})

/* UPDATE ROUTES : SHIRT , PANT , MOBILE */

router.post('/shirt/:id',async (req , res)=>{
  const id = req.params.id;

  const {title , desc , price , quantity } = req.body;
  console.log( title , desc , price , quantity,286 );
  if(!title || !desc || !price || !quantity){
    res.status(400).json({error:"all fields required!"});
  }else{

    const product = await Shirt.findOne({_id : id});

    console.log(product);

    if(product.title === title && product.desc === desc && product.price === price && product.quantity === quantity){
      console.log(product , title , desc , price , quantity ,296 );
      res.status(400).json({error:"cannot set all previous values!"});
    }else{
      await Shirt.findOneAndUpdate({_id:id}, {title,desc,price,quantity}, {
        new: true
      });
     res.status(200).json({message:'shirt updated successfully!'});
    }
    
  }

 


})

router.post('/pant/:id',async (req , res)=>{
  const id = req.params.id;

  const {title , desc , price , quantity } = req.body;
  
  if(!title || !desc || !price || !quantity){
    res.status(400).json({error:"all fields required!"});
  }else{

    const product = await Pant.findOne({_id : id});

    console.log(product);

    if(product.title === title && product.desc === desc && product.price === price && product.quantity === quantity){
      
      res.status(400).json({error:"cannot set all previous values!"});
    }else{
      await Pant.findOneAndUpdate({_id:id}, {title,desc,price,quantity}, {
        new: true
      });
     res.status(200).json({message:'pant updated successfully!'});
    }
    
  }
})

router.post('/mobile/:id',(req , res)=>{
  const id = req.params.id;
  console.log(req.body);

  console.log(id);

  res.send(id);
})

module.exports =  router;