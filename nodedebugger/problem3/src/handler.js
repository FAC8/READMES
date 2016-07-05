'use strict'
const fs = require('fs');

const handler = (req, res) => {
	const url = res.url;
	if (url=== '/'){
		fs.readFile(__dirname + "/../public/index.html", (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-type': 'text/html' });
			res.end(data);
		});
	} else if (url.indexOf('.') > -1){
		fs.readFile(__dirname + "/../public" + url, (err, data) => {
            const type = url.split('.')[1];
			if (err){
				res.writeHead(404)
				res.end('<h2> 404 cannot find file </h2>')
			}else{
				res.writeHead(200, { 'Content-type': 'text/' + type });
				res.end(data);
			}
		});
	}

}
	module.exports = handler;
