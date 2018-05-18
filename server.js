
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');


function startServer(route, handle) {
    var onRequest = function(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request received ' + request.url);
        route(handle, request.url, response);
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

module.exports.startServer = startServer;