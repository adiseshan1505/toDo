const express= require('express');
const app= express();

//route handle, here there is only one route handle
app.get('/', function(req, res){
    res.send("Hello, world");
});

//asd endpoint one more route handler
app.get('/asd', function(req, res){
    res.send("Hello from the asd endpoint");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000....");
});