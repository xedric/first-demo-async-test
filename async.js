
exports.getInfo = function(callback) {
	const https = require('https');
	var  url = 'https://api.github.com/repos/xedric/calculate-area-of-rectangle';
	var options = {
		host: 'api.github.com',
		path: '/repos/xedric/calculate-area-of-rectangle',
		method: 'GET',
		headers: {
			'User-Agent': 'xedric'
		}
	};
	https.request(options, (response) => {
		var data = '';
		response.on('data', (chunk) => {
			data += chunk;
		});
		response.on('end', (chunk) => {
			callback(JSON.parse(data));	
		});
		response.on('error', (error) => {
			callback(error);	
		});
	}).end();
}

exports.getInfoLang = function(infoFunc, callback) {
	infoFunc(function(reply) {
		callback('Language is ' +reply.language);
	});
}