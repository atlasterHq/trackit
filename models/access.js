var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accessSchema = new Schema({
  token: {type: Schema.ObjectId, required: true, ref: 'tracker'},
  headers: {type: Array},
  ip: {type: String, required: true},

  timeStamp: {type: Date,required: true}
});

module.exports = mongoose.model('access',accessSchema);
