const express = require('express');
const app = express();
const basicAuth = require('basic-auth');

const config = require('config');

const userdata = config.get('username');
const password = config.get('password');

const dynamicauth = require("./dynamicauth");

console.log("authenticate:", dynamicauth);

console.log("userdata1:", userdata);



console.log("====")
const authenticate = (req, res, next) => {

     const credentials = basicAuth(req);

     console.log(typeof credentials);
console.log("usercredentails:", credentials);
  

  if (!credentials || credentials.name !== userdata || credentials.pass !== password) {
  //  console.log("cred:", !credentials)
    //console.log ("cred1:", credentials.name);
    //console.log("condition:",!credentials || credentials.name !== userdata || credentials.pass !== password)
    res.set('WWW-Authenticate', 'Basic realm="Authentication Required"');
    res.sendStatus(401);
    return;
  }

  next();
};

module.exports = authenticate;
