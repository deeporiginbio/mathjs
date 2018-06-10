var assert = require('assert'),
  math = require('../../../src/index')

describe('pickRandom', function () {
  // Note: pickRandom is a convenience function generated by distribution
  // it is tested in distribution.test.js

  it('should have a function pickRandom', function () {
    assert.equal(typeof math.pickRandom, 'function')
  })

  it('should LaTeX pickRandom', function () {
    var expression = math.parse('pickRandom([1,2,3])')
    assert.equal(expression.toTex(), '\\mathrm{pickRandom}\\left(\\begin{bmatrix}1\\\\2\\\\3\\\\\\end{bmatrix}\\right)')
  })
})