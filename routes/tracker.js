var express = require('express');
var tracker = require('../models/tracker');
var access  = require('../models/access');
var resp    = require('response');
var route = express.Router();

route.post("/",function(req,res,next){
  var respCtx = new resp(req,res);
  req.body.created = new Date();
  new tracker(req.body)
    .save()
    .then(respCtx.list)
    .catch(respCtx.err);
});

route.get("/:id",function(req,res,next){
  var respCtx = new resp(req,res);
  req.body.ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  req.body.headers = req.headers;
  req.body.token = req.params.id;
  req.body.timeStamp = new Date();
  new access(req.body)
    .save()
    .then(function(data){
      var buf = new Buffer(35);
      buf.write("R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", "base64");
      res.setHeader('Content-Type','image/gif');
      res.end(buf);
    })
    .catch(respCtx.err);
});

module.exports = route;
