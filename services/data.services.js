const { mquery } = require('mongoose');
const db = require('./db')

  const login=(req,username,password)=> {
  return db.User.findOne({username,password})
  .then(user=>{
    if(user){
      console.log(user)
       req.session.currentUser=user.username;     
      return{
        statusCode:200,
           status:true,
           message:"Login successfully",
           name:user.username 
       }
    }
    else{
      return{
        statusCode:422,
          status:false,
          message:"Invalid credentials"
      }
    }
  })
  }
 
  const register=(email,username,password,empid,name,number,designation,address)=>{
    return db.User.findOne({username})
    .then(user=>{
      if(user){
     return {
       statusCode:422,
       status:false,
       message:"User exist"
     }
   }
     else{
      const newUser=new db.User({
         email,
         username,
         password,
         empid,
         name,
         number,
         designation,
         address
       })
       newUser.save();
    return{
     statusCode:200,
        status:true,
        message:"Employee created successfully"
    }
     }
    })
 }
 module.exports={
    register,
    login
    
     }