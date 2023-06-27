const express = require ('express');
const app = express();
const {User} = require("../model/user")
const authenticate = require("../authtoken")

const {TrackingDetails} = require("../model/trackingDetails")

//console.log("auth-token:", authenticate);
 app.get('/user/:phoneNumber', authenticate, async(req, res) => {
  let user =  await User.findOne({'phoneNumber': parseInt(req.params.phoneNumber)})
  if (!user) return res.send({message: "user does not exist"})

  res.send(user);

   // Handle the GET request
   // Return the data
//     res.json({ message: 'GET request received' });
});


app.get('/trackingDetails/:phoneNumber',  async(req, res) =>{

  let user = await User.findOne({'phoneNumber': parseInt(req.params.phoneNumber)}).populate('trackingdetails')
  if (!user) return res.send({message: "user does not exist"})

  res.send(user);
});

  //app.use(express.json())
// let users= [];
  app.post('/user',async (req, res) => {
    console.log('sending request', "Jyothi");

    const data = req.body;
    let user = await User.findOne({'phoneNumber': data.phoneNumber})
    
if(user) return res.send({message: "data alredy existed"});
let td = await new  TrackingDetails({
  UserDetails : 'endtask',
  Volatality : 'false',
  VolatalityQuiz: 'false',
  RiskAssessment : 'false',
  RiskAssessmentQuiz : 'false',
  GoalSetting : 'false',
  InvestInMutualFunds : 'false'

})

await td.save();
console.log("userdetails", td)
    //console.log(users, "abc")
    //console.log("abc")
    //console.log(this is log , "")
    // Handle the POST request
    // Access the data from the request body
console.log(data, "data")
  user=  await new User({
    firstName: data.firstName,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    email: data.email,
    age: data.age,
    gender: data.gender,
    dateofbirth: data.dateofbirth,
    trackingdetails: td._id
  })
    // Process the data
    // Return a response
   // users.push(user)
    //res.json({ message: 'POST request received', data });
   await user.save();
    res.send(user)
  });

 // const port = 8085;
 // app.listen(port, () => {
  //  console.log('server running on port ${/port}');
 // });

module.exports = app;