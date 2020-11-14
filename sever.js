const express=require('express');
const bodyParser = require('body-parser');
const app =express();
const cors= require('cors');
const port =process.env.PORT || 5000;
const fs=require('fs');

const data=fs.readFileSync('./database.json');
const conf=JSON.parse(data);
const mysql=require('mysql');

const db=mysql.createConnection({
  host: conf.host,
  user:conf.user,
  password:conf.password,
  port:conf.port,
  database:conf.database
});
db.connect();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/api/customers',(req,res)=>{
   db.query("SELECT *FROM customerdata",(err,data)=>{
     res.send(data);
   })
})


app.listen(port, ()=>console.log(`Listening on port ${port}`));