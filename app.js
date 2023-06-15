const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/JyothiAmbati'
const url1 = 'mongodb+srv:mongodb+srv://JyothiAmbati:Vandani@123@atlascluster.jjm7lag.mongodb.net/Jyothi?retryWrites=true&w=majority'
const app = express()
app.use(bodyParser.json());


mongoose.connect(url,{useNewUrlParser:true}).then(console.log("Mongoose connected")).catch((error)=>console.log("error occured", error))



//const examplerouter = require('./example')
//app.use('/example', examplerouter)

app.get("/", function(req, res) {
  //res.json({ message: 'User created successfully' });
});

app.post('/api/users', (req, res) => {
    // Handle POST request for /api/users
    // Create a new user based on the request body
    // Save the user to the database or other data source
    // Send a response indicating success or failure
    res.json({ message: 'User created successfully' });
  });

app.listen(8000, () => {
    console.log('server started')
})