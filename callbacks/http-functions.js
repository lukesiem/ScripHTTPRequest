module.exports = function getHTML (options, callback) {
	var https = require('https');

	https.get(options,function (response) {

	 	response.setEncoding('utf8');

	 	var collectedData = "";
		response.on('data', function (data) {
			collectedData += data;
			console.log(collectedData);
		});


		response.on('end', function (){
			callback(collectedData);
		  	console.log('Response stream complete.');
	  	});
	});
}


 