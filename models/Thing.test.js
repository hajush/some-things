import {expect, assert} from 'chai';
import Thing from './Thing';

describe("Thing Schema", () => {
  xit("must have a name string", (done) => {
    let thing = new Thing();
    thing.validate((err, t) => {
      expect(err.errors.name).to.exist;
      done();
    });
  });
  xit("may a weight number", (done) => {
    let thing = new Thing();
    thing.name = "Crate";
    thing.weight = 7;
    thing.validate((err, t) => {
      expect(err).to.not.exist;
      done();
    });
  });
  xit("may not have a weight string", (done) => {
    let thing = new Thing();
    thing.name = "George";
    thing.weight = "eee";
    thing.validate((err, t) => {
      expect(err.errors.weight).to.exist;
      done();
    });
  });
  xit("may not have a negative weight", (done) => {
    let thing = new Thing();
    thing.name = "George";
    thing.weight = -8;
    thing.validate((err, t) => {
      expect(err.errors.weight).to.exist;
      done();
    });
  });
});
