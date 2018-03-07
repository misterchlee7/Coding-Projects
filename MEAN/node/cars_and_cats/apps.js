// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
function serveStaticFile(response, path, contentType, responseCode) {
    if(!responseCode) responseCode = 200;
    console.log(__dirname + path);

    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            response.writeHead(500, { 'Content-Type' : 'text/plain' });
            response.end('500 - Internal Error');
        }
        else {
            response.writeHead(responseCode, { 'Content-Type' : contentType });
            response.end(data);
        }
    });
}
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/cars/new') {
        fs.readFile('views/cars_new.html', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === '/images/IMG-0453.jpg') {
        serveStaticFile(response, '/images/IMG-0453.jpg', 'image/jpeg');
    }
    else if(request.url === '/images/viper.jpg') {
        serveStaticFile(response, '/images/viper.jpg', 'image/jpeg');
    }
    else if(request.url === '/images/cat1.jpg') {
        serveStaticFile(response, '/images/cat1.jpg', 'image/jpeg');
    }
    else if(request.url === '/images/cat2.jpg') {
        serveStaticFile(response, '/images/cat2.jpg', 'image/jpeg');
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('URL Requested is not available!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
