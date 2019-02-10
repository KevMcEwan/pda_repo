var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 1 to 4 and get 5', function (){
    calculator.add(1);
    calculator.operatorClick("+");
    calculator.add(4);
    const actual = calculator.runningTotal;
    const expected = 5;
    assert.strictEqual(actual, expected);
  });

  it('should subtract 4 from 7 and get 3', function (){
    calculator.add(7);
    calculator.operatorClick("-");
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    const expected = 3;
    assert.strictEqual(actual , expected);
  });

  it('should multiply 3 by 5 and get 15', function (){
    calculator.add(3);
    calculator.operatorClick("*");
    calculator.multiply(5)
    const actual = calculator.runningTotal;
    const expected = 15;
    assert.strictEqual( actual, expected);
  });

  it('should divide 21 by 7 and get 3', function (){
    calculator.add(21);
    calculator.operatorClick("/");
    calculator.divide(7);
    const actual = calculator.runningTotal;
    const expected = 3;
    assert.strictEqual( actual, expected)
  });

  it('should concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    const actual = calculator.runningTotal;
    const expected = 12;
    assert.strictEqual(actual, expected)
  });

  it('should chain multiple operations together', function() {
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.operatorClick("*");
    calculator.operatorClick("+");
    calculator.operatorClick("=");
    const actual = calculator.runningTotal;
    const expected = 72;
    assert.strictEqual(actual, expected)
  });

  it('should clear the running total without affecting the calculation', function() {
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.operatorClick("*");
    calculator.clearClick();
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    const actual = calculator.runningTotal;
    const expected = 3;
    assert.strictEqual(actual, expected)
  });

});
