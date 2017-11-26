const { Wit, log } = require('node-wit');
const dotenv = require('dotenv');
// loads .env file to process.env
dotenv.load();

const token = process.env.WIT_TOKEN;

if (!token) {
  throw new Error ('Please provide a Wit token!');
}

module.exports = {
  // new instatiation of Wit
  client : new Wit({ accessToken : token }),
  MIN_CONFIDENCE : 0.50    
};