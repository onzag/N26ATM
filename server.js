var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var port = 3000;
var ip = '0.0.0.0';

new WebpackDevServer(webpack(config), {
	publicPath: '/'
}).listen(port, ip, function (err) {
	if(err) {
		return console.log(err);
	}
	console.log('Listening at ' + ip + ':' + port);
});
