import {expect} from 'chai';
import Util from './Util';

describe("Util", function() {
  it("Can filter out a specific number", function(){
    // Arrange
    let arrayWithoutTwos = [1, 3, 4, 5, 6, 7];
    let expectedResult = arrayWithoutTwos.slice();
    // Act
    let result = Util.removeNumbers(arrayWithoutTwos, 2);
    // Assert
    expect(result).to.eql(arrayWithoutTwos);
  });
});
