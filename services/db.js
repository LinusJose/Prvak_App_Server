const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeRegister',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false 
})

const User=mongoose.model('User',{
    email:String,
      username: String,
     password: String,
     empid:String,
     name:String,
     number:String,
     designation:String,
     address:String

})

module.exports={
    User
}