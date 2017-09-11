var https = require('https');



function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);

 