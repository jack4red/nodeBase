'use strict'
var test = require('./test_module.js');
function NodeBase() {
	return 'this is nodebase ' + test();
}

module.exports = NodeBase;