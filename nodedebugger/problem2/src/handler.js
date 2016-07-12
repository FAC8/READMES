'use strict'
const fs = require('fs');

const handler = (req, res) => {
	const url = req.url;
	if (url=== '/'){
		fs.readFile(__dirname + "/../public/index.html", (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-type': 'text/html' });
			res.end(data);
		});
	} else if (url.indexOf('.') > -1){
		fs.readFile(__dirname + "/../public" + url, (err, data) => {
			if (err){
				res.writeHead(404)
				res.end('<h2> 404 cannot find file </h2>') 
			}else{ 
				res.writeHead(200, { 'Content-type': 'text/' });
				res.end(data);
			}
		});
	}

}
	module.exports = handler;
