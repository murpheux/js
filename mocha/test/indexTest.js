// indexTest.js

var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

var hello = require("../index");

describe("App unitTest", function() {
  describe("Test sayhello", function() {
    var result = hello();

    it("return hello", function() {
        expect(result).to.be.equal('hello');
    });

    it("return is a string", function() {
       expect(result).to.be.a('string');
    });
  });
});
