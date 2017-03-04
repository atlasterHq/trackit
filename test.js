var trackit = require('./index');

trackit()
  .then((id)=>{
    console.log(id);
  })
  .catch((err)=>{
    console.log(err);
  });
