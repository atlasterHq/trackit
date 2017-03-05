const model = require('auth/models/user.js');
const prompt = require('prompt');

prompt.start();

console.log(chalk.red.bold("New user creation script"));

prompt.get(['username','password'],(err,data)=>{
  if(err){
    console.log(err);
    process.exit(1);
  }else{
    new model(data)
      .save()
      .then(()=>{
        console.log(chalk.green("New user created"));
        process.exit(0);
      })
      .catch((ex)=>{
        console.log(chalk.red(ex.message));
        process.exit(1);
      });
  }
});
