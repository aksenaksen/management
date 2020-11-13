const express=require('express');
const bodyParser = require('body-parser');
const app =express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/api/hello',(req,res)=>{
    res.send("Hello Express!");
})


app.listen(5000, ()=>console.log(`Listening on port 5000`));