import express from 'express';
import Thing from '../models/Thing';

const thingRouter = express.Router();

thingRouter.route('/things')
  .post(function(req, res, next){
    let thing = new Thing();
    thing.name = req.body.name;
    thing.weight = req.body.weight;

    thing.save(function(err, t){
      if (err) {
        next(err);
      } else {
        res.json(t);
      }
    });
  })

  .get(function(req, res, next){
    Thing.find(function(err, things) {
      if (err) {
        return next(err);
      } else {
        res.json(things);
      }
    });
  });

export default thingRouter;
