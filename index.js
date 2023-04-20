const Express=require('express');

app=Express();

app.get("/",function(req,res){
    res.send("Hello Express js");
})

app.listen(5000,function(){
    console.log("Surver Run Success");
})