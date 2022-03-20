/*! lib - v 0.1 - 2014-01-20
* https://github.com/jimmylatreille/lib
* Copyright (c) 2014 AUTHORS.txt; Licensed MIT, GPL */
 
 var lib  = {
	version : 0.7,
	spec : 'ECMAScript 6'
}

//Clean String spacing
String.prototype.clean = function() {
	return this.replace(/\s{2,}/g, ' ');
}


function multiply(nb1, nb2) {
	return nb1 * nb2;
}
