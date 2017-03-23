'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Thing = require('../models/Thing');

var _Thing2 = _interopRequireDefault(_Thing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thingRouter = _express2.default.Router();

thingRouter.route('/things').post(function (req, res, next) {
  var thing = new _Thing2.default();
  thing.name = req.body.name;
  thing.weight = req.body.weight;

  thing.save(function (err, t) {
    if (err) {
      next(err);
    } else {
      res.json(t);
    }
  });
}).get(function (req, res, next) {
  _Thing2.default.find(function (err, things) {
    if (err) {
      return next(err);
    } else {
      res.json(things);
    }
  });
});

exports.default = thingRouter;