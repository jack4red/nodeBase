var testIndex = require('../src/index.js');
var expect = require('chai').expect;
describe('测试demo', function() {
	it('应该返回字符串', function() {
		expect(testIndex()).to.be.equal('this is nodebase test');
	});
});