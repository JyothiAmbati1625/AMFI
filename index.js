const express = require('express');
const mongoose = require('mongoose');
//const { use } = require('./example');
//const url = 'mongodb://localhost/JyothiAmbati'
//GZtFtUl6lXvaUs3J
let url1 ='mongodb+srv://JyothiAmbati:fRobcqd7MgwC5RsR@atlascluster.jjm7lag.mongodb.net/AMFIpractice?retryWrites=true&w=majority'
//let url ='mongodb+srv://mailtosaisandeep:p2Zh0PaXy6bwsnng@cluster0.i9f0psd.mongodb.net/test?retryWrites=true&w=majority'
const app = express();
app.use(express.json());
mongoose.connect(url1,{useNewUrlParser:true}).then(console.log("Mongoose connected")).catch((error)=>console.log("error occured", error))

const user = require('./routes/users')

app.use("/api", user)
// app.get('/api/users', (req, res) => {
//     // Handle the GET request
//     // Return the data
//     res.json({ message: 'GET request received' });
//   });

  //app.use(express.json())
// let users= [];
//   app.post('/api/user', (req, res) => {
//     console.log('sending request', "Jyothi");
//     //console.log(users, "abc")
//     //console.log("abc")
//     //console.log(this is log , "")
//     // Handle the POST request
//     // Access the data from the request body
//     const data = req.body;
// console.log(data, "data")
//   let user= {
//     name: data.firstName,
//     lastName: data.lastName,
//     phoneNumber: data.phoneNumber
//   }
//     // Process the data
//     // Return a response
//     users.push(user)
//     //res.json({ message: 'POST request received', data });
//     res.send(users)
//   });

const port = process.env.PORT || 8086; // Choose any port you prefer

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;