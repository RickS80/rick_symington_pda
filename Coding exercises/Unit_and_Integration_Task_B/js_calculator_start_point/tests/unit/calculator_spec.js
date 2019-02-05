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


})
