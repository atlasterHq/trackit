require('dotenv').config();
const request = require('request');

module.exports = ()=>{
  return new Promise((fullfill,reject)=>{
    request.post(process.env.TrackitHost+"/tracker",{},(err,response,body)=>{
      if(err) reject(err)
      else{
        var resp = JSON.parse(response.body);
        fullfill(resp.data._id);
      }
    });
  });
};
