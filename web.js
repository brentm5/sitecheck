var express = require('express');
var fs = require('fs');
var request = require('request');


var app = express();

app.get('/', function(request, response) {
  response.sendfile('index.html');
});

app.get('/api', function(req, resp) {
  if(req.query.s) {
    request('http://' + req.query.s, function (error, response, body) {
      var responseSend = new Object;
      if(error) {
        responseSend.status = "Dead"
        responseSend.class = "dead"
      }else{
        responseSend.status = "Alive"
        responseSend.class = "alive"
      }
      resp.send(JSON.stringify(responseSend));
    });
  }
  else
    {
      resp.send('Did not have any params');
    }
});

app.listen(80);
