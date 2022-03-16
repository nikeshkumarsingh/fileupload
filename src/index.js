const express=require("express");
const usercontroller=require("./controlls/user.controller");
const galrycontroller=require("./controlls/galry.controller");
 const app=express();
 app.use(express.json());
 app.use("/users",usercontroller);
 app.use("/galry",galrycontroller);
 module.exports=app;