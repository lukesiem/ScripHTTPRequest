var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
	var splitString = html.split("").reverse().join("");
	

 console.log(splitString);
 
}

getHTML(requestOptions, printReverse );