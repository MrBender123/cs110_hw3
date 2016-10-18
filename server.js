const http = require('http');

const myServer = http.createServer(function (req, res){
     if (req.url ==='/main') {
     	 res.writeHead(200, {'Content-Type' : 'text/plain'});
     	 res.end ('Main Page');
     }

     if (req.url === '/assist') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end('Assistance is needed');
     }

     if (req.url === '/hidden') {
     	res.writeHead(404, {'Content-Type' : 'text/plain'});
     	res.end('Nope Go away');
     }


     if (req.url === '/justyay') {
     	res.writeHead(200, {'Content-Type' : 'text/plain'});
     	res.end('YAY');
	 }


      if (req.url === '/exit') {
	 res.writeHead(404, {'Content-Type' : 'text/plain'});
	 res.end('ERROR');
	 }

	 res.writeHead(404, {'Content-Type' : 'text/plain'});
	 res.end("Use an entry");
 
});

			myServer.listen(3001);
			console.log('Server is listening to 3001');
