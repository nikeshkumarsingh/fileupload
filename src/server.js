const app=require("./index");
const connect =require("./config/db.js")

app.listen(1234,async function(){
   try{
     await connect();
     console.log("listening 1234")
   }
   catch(err){
       console.log(err)
   }
});