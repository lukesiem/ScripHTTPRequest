var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
	var splitString = str.split(" ");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");

 console.log(joinArray);
 
}

getHTML(requestOptions, printReverse );