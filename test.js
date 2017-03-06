var trackit = require('./index');

trackit()
  .then(function(id){
    console.log(id);
  })
  .catch(function(err){
    console.log(err);
  });
