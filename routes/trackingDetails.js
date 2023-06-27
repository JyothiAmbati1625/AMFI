const express = require ('express');
const app = express();
const {trackingDetails} = require("../model/trackingDetails")



app.post('/userdata', async(req, res)=>{
const data = req.body;

let userdata = await Data.findOne({'UserDetails': Data.UserDetails})

if(userdata) return res.send({message: "UserDetails Dilog existed"});


    userdata = await new  Data({
        UserDetails : data.UserDetails,
        Volatality : data.Volatality,
        VolatalityQuiz: data.VolatalityQuiz,
        RiskAssessment : data.RiskAssessment,
        RiskAssessmentQuiz : data.RiskAssessmentQuiz,
        GoalSetting : data.GoalSetting,
        InvestInMutualFunds : data.InvestInMutualFunds

    })
     
    await userdata.save();
    res.send(userdata)

});

module.exports = app;