const express=require('express');
const path=require('path');
const app=express();
app.use(express.static(__dirname+'/dist/project123'));
app.get('/*',function(req,res){
        res.sendFile(path.join(_dirname+'/dist/project123/index.html'));});
        app.listen(process.env.PORT||8080)
