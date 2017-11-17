"use strict"
var x=1;
function text() {
	x=2;
	console.log("x inner: " + x);
}
text();
console.log(x);