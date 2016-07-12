'use strict'
const fs = require('fs');

function handler (req, res)  {
	const url = req.url;

	if (url=== '/'){
		fs.readFile(__dirname + "../public/index.html", (err, data) => {
			res.writeHead(200, { 'Content-type': 'text/html' });
			res.end(data);
		});
	} else if (url.indexOf('.') > -1){
		const ext = url.split('.')[1];
		fs.readFile(__dirname + "/../public" + url, (err, data) => {
			if (err){
				res.writeHead(404)
				res.end('<h2> page not found </h2>')
			}else {
				res.writeHead(200, { 'Content-type': 'text/' + ext });
				res.end(data);
			}
		});
	}
}


module.exports = handler;
