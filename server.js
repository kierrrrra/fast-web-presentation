var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, '')));

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});