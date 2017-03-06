var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackerSchema = new Schema({
  tags: {type: Array},
  author: {type: Schema.ObjectId},

  created: {type: Date}
});

module.exports = mongoose.model('tracker',trackerSchema);
