const { Wit, log } = require('node-wit');
const MIN_CONFIDENCE = 0.50;

module.exports = function(token) {
  
  if (!token) {
    throw new Error ('Please provide a Wit token!');
  }

  // new instatiation of Wit
  const client = new Wit({
    // pass Wit a valid token
    accessToken : token
    // logger : new log.Logger(log.DEBUG) // optional
  });

  return {
    receive : receive,
    hears : hears    
  };
};