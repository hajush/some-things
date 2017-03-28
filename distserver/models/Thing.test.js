'use strict';

var _chai = require('chai');

var _Thing = require('./Thing');

var _Thing2 = _interopRequireDefault(_Thing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Thing Schema", function () {
  xit("must have a name string", function (done) {
    var thing = new _Thing2.default();
    thing.validate(function (err, t) {
      (0, _chai.expect)(err.errors.name).to.exist;
      done();
    });
  });
  xit("may a weight number", function (done) {
    var thing = new _Thing2.default();
    thing.name = "Crate";
    thing.weight = 7;
    thing.validate(function (err, t) {
      (0, _chai.expect)(err).to.not.exist;
      done();
    });
  });
  xit("may not have a weight string", function (done) {
    var thing = new _Thing2.default();
    thing.name = "George";
    thing.weight = "eee";
    thing.validate(function (err, t) {
      (0, _chai.expect)(err.errors.weight).to.exist;
      done();
    });
  });
  xit("may not have a negative weight", function (done) {
    var thing = new _Thing2.default();
    thing.name = "George";
    thing.weight = -8;
    thing.validate(function (err, t) {
      (0, _chai.expect)(err.errors.weight).to.exist;
      done();
    });
  });
});