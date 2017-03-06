require('dotenv').config();
var request = require('request');

var Promise = global.promise;

module.exports = function(){
  return new Promise(function(fullfill,reject){
    request.post(process.env.TrackitHost+"/tracker",{},function(err,response,body){
      if(err){
        reject(err);
      }
      else{
        var resp = JSON.parse(response.body);
        fullfill(resp.data._id);
      }
    });
  });
};
