
const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})

require('./DB/conn.js');
// const User = require('./model/userSchema')

app.use(express.json());
//linking the router files.
app.use(require('./router/auth'));
app.use(require('./router/productAuth'));




app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT }`);
})

