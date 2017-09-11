var https = require('https');

//function to retrieve host and path(not hardcoded)
function getAndPrintHTML (options) {
	
	//GET Data from source 
    https.get(requestOptions,function (response) {

//explains how to encode incoming data
	  response.setEncoding('utf8');

//stores incoming data into a variable 
		var collectedData = "";
		response.on('data', function (data) {
			collectedData += data;

			console.log(collectedData);

		});
//callback is invoked when all of the data has been receiceved

		response.on('end', function (){
			console.log('Response stream complete.');
		});
	});


}
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
}

getAndPrintHTML(requestOptions);