var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    if(path == "/") {  
        fs.readFile(__dirname + (path + "index.html"), function(error, data) {   
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            response.write(data);  
            response.end();   
        });  
    } else if (path == "/about") {
        fs.readFile(__dirname + (path + ".html"), function(error, data) {  
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            response.write(data);  
            response.end();   
        });  
    } else if (path == "/contact-me") {
        fs.readFile(__dirname + (path + ".html"), function(error, data) {  
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            response.write(data);  
            response.end();  
        });  
    } else {
        fs.readFile(__dirname + "/404.html", function(error, data) {
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            response.write(data);  
            response.end();
        });
    }     
});

server.listen(8080);
