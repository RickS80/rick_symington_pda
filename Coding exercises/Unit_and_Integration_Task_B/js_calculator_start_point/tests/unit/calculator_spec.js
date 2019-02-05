var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.strictEqual(5, calculator.runningTotal)
  });

  it('should be able to subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.strictEqual(3, calculator.runningTotal)
  });

  it('should be able to multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.strictEqual(15, calculator.runningTotal)
  });

  it('should be able to divide', function(){
    calculator.previousTotal = 21
    calculator.divide(3)
    assert.strictEqual(7, calculator.runningTotal)
  });

  it('should be able to concatenate mulitple clicks', function(){
    calculator.numberClick(4)
    calculator.numberClick(3)
    assert.strictEqual(43, calculator.runningTotal)
  });

  it('should be able to chain mulitple operations together', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(6)
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.strictEqual(5, calculator.runningTotal)
  });

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(10)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.strictEqual(13, calculator.runningTotal)
  });







})
