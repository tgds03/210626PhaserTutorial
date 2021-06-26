var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var file, _url;
    if (request.url == '/') {
        _url = __dirname + '/index.html';
    } else {
        _url = __dirname + request.url;
    }
        
    try {
        file = fs.readFileSync(_url);
    } catch (e) {
        response.writeHead(404);
        console.log(`${e.name}: ${e.message}. ${_url}`);
        response.end();
    } finally {
        response.writeHead(200);
        response.end(file);
    }
    return;
});
app.listen(80);