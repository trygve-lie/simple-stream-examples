var http 	= require('http'),
	fs 		= require('fs');

var server = http.createServer(function (req, res) {

    var stream = fs.createReadStream('media/image.jpg');
    stream.pipe(res);

}).listen(8000);