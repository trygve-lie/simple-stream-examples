var http 	= require('http'),
	fs 		= require('fs');

var server = http.createServer(function (req, res) {

    fs.readFile('media/image.jpg', function (err, data) {
        res.end(data);
    });

}).listen(8000);