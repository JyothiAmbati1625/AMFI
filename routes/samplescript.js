
// let res = context.NewUserdata_API.response.body ;

// res = typeof res =="string"? JSON.parse(res): res
// if(res.message){
//     context.userDetailsAPI = Failed}
//     else {
//     context.userDetailsAPI = Success;
// }
// //------------------------------------------------


// var mobileNumber = JSON.stringify(context.entities.existingUser_SignInForm).slice(7);
// var a = parseInt(mobileNumber);
// var message = {
//   "type": "template",
//   "payload": {
//     "template_type": "otpValidationTemplate",
//     "title": "Enter OTP",
//     "sliderView": true,
//     "description":"Please Enter your 4 digit OTP below2",
//     "mobileNumber":`+91******${a}`,
//     //"piiReductionChar":'#', // Special charater that is used for Pii reduction
//     "pinLength":4,// specifies the length of the pin, it should be minimun 4
//     "otpButtons": [
//       {
//         title: "Submit",
//         type:"submit"
//       },
//       {
//           title:"Resend OTP",
//           type:"resend"
//       }
//     ]
//   }
// };
// print(JSON.stringify(message));



// var message = {
//     "type": "template",
//     "payload": {
//       "template_type": "otpValidationTemplate",
//       "title": "Enter OTP",
//       "sliderView": true,
//       "description":"Please Enter your 4 digit One time password below1",
//       "mobileNumber":`+91******${context.session.BotUserSession.userDetails.phoneNumber.slice(6)}`,
//       //"piiReductionChar":'#', // Special charater that is used for Pii reduction
//       "pinLength":4,// specifies the length of the pin, it should be minimun 4
//       "otpButtons": [
//         {
//           title: "Submit",
//           type:"submit"
//         },
//         {
//             title:"Resend OTP",
//             type:"resend"
//         }
//       ]
//     }
//   };
//   print(JSON.stringify(message));


