//	Starting with nodejs
//	Note that the commets are fairly redundant, but I tend to forget
//	things easily.
//	Following nodejs documentation

const http = require('http'); // http is a node module

const hostname = '127.0.0.1';
const port = 3000;

//	createServer is a method of http that creates a new HTTP server and
//	returns it.
const server = http.createServer((req, res)=>{
	// res is an http.serverResponse object
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	//	here we close the response and the content is the argument of end method
	res.end('Bonjour Node!');
});

//	This shows a message in the terminal, so one can know what is going on.
server.listen(port, hostname, ()=>{
	console.log(`Server running at http://${hostname}:${port}/`);
});
