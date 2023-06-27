const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const trackingDetailsSchema = new Schema({
    UserDetails : "String",
    Volatality  : "String",
    VolatalityQuiz : "String",
    RiskAssessment : "String",
    RiskAssessmentQuiz : "String",
    GoalSetting : "String",
    InvestInMutualFunds : "String"



});

const trackingDetails = mongoose.model('TrackingDetails', trackingDetailsSchema);

module.exports.TrackingDetails = trackingDetails;

