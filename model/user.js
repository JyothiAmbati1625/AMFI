
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: "String",
    lastName : "String",
    phoneNumber : Number,
    age: {
        type: Number,
        min: [18,'you must be atleast 18 years old.'],
        max: [100, 'please provide valid age.']
    },
    dateofbirth: {
        type: Date,
        validate: {
            validator: function(value) {
                const currentYear = new Date().getFullYear();
                const birthYear = value.getFullYear();
                return currentYear - birthYear >= 18;
        
            },
            message: 'you must be at least 18 years old '
        }

    },
    email: {
        type: String,
        required: true,
    
    },
    gender: "string"

    
    
  });

  //"{  firstName: {{context.entities.newUser_SignInForm[0].value}},  "lastName": {{context.entities.newUser_SignInForm[1].value}},\n  \"phoneNumber\": {{context.entities.newUser_SignInForm[2].value}},  "gender": {{context.entities.newUser_SignInForm[5].value}},  "age": 24, "email": {{context.entities.newUser_SignInForm[3].value}},  "dataofbirth": {{context.entities.newUser_SignInForm[4].value}}}"
  
  const User = mongoose.model('User', userSchema);

  module.exports.User = User;



  