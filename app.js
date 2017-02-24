var express = require('express');
var util = require('util');
var app = express();

app.get('/bonjour', function (req, res) {
	var msgBienvenue = util.format('Bonjours %s %s!',req.query.firstName, req.query.lastName);
	res.send(msgBienvenue);
});

app.listen(3000, function () {
	console.log('app listening on port 3000!');
});