var http 	= require('http'),
	fs 		= require('fs'),
	spawn 	= require('child_process').spawn;


var server = http.createServer(function(req, res) {

	var options = {
		host	: 'static.trygve-lie.com',
		port	: 80,
		path	: '/work/image.jpg',
		method 	: 'GET'
	}

	http.request(options, function(response){

		var	args 	= ['-', '-resize', '20%', '-quality', '50', '-'],
	    	convert = spawn('convert', args),
	    	toDisk	= fs.createWriteStream('media/small.png');

	    response.pipe(convert.stdin);

	    convert.stdout.pipe(res);
	    convert.stdout.pipe(toDisk);

	}).end();

}).listen(8000);