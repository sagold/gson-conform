"use strict";


var expect = require("chai").expect;
var o = require("../../lib");


describe("object.keyOf", function () {

	it("should return the property of needle", function () {
		var data = {
			"first": {"name": "first"},
			"second": {"name": "second"}
		};

		var key = o.keyOf(data, data.second);

		expect(key).to.eql("second");
	});

	it("should return null of not found", function () {
		var data = {
			"first": {"name": "first"},
			"second": {"name": "second"}
		};

		var key = o.keyOf(data, {});

		expect(key).to.be.null;
	});

	it("should return index of needle", function () {
		var data = [
			{"name": "first"},
			{"name": "second"}
		];

		var key = o.keyOf(data, data[1]);

		expect(key).to.eql(1);
	});
});
