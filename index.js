const express = require('express');
const app = express();
const temp = require('./HTTP-PROTOCOLS/Protocols');
app.use(express.json());
app.use(temp);
app.listen(3000,()=>
{
    console.log("Running")
})
