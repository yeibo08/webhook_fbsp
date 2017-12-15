var http = require('http');
var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var request = require('request');
const FB = require('./facebook.js');

var app = express();
var router = express.Router();
app.use(bodyParser.json());

var received_updates = [];

const sessions = {};

const findOrCreateSession = (fbid) => {
  let sessionId;
  Object.keys(sessions).forEach(k => {
    if (sessions[k].fbid === fbid) {
      sessionId = k;
    }
  });
  if (!sessionId) {
    sessionId = new Date().toISOString();
    sessions[sessionId] = {
      fbid: fbid,
      context: {
        _fbid_: fbid
      }
    };
  }
  return sessionId;
};

http.createServer(app).listen(process.env.PORT || 8000);

router.get('/', function (req, res,next) 
{
    console.log("En el inicio del webhook FB SP");

    console.log(req.query["hub.challenge"]);
    res.status(200).send(req.query["hub.challenge"]);
});

router.post('/', function(req, res, next)
{
	const messaging = FB.getFirstMessagingEntry(req.body);
	
	if(messaging && messaging.message) 
	{
        var sender = messaging.sender.id;
        var mensaje = messaging.message.text
		
		console.log("sender: " + sender);
		console.log("message: " + mensaje);
	}
	
    res.status(200).send("200 OK");

    var url = 'http://www.pentafon.com:3010/webhook';

    var params = {
        senderId: sender,
        message: mensaje,
    };

    request.post({url: url, qs: params}, function(err, resp, body) 
    {
        if(resp != undefined)
            if(resp.body != undefined)
                console.log("OK");
    });

    sender = "";
    mensaje = "";
    
});

app.use(router);