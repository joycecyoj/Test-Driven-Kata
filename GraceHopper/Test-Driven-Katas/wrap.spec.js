const wrap = require('./wrap')
const { expect } = require('chai')

describe('wrap', function() {
  const testStr = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."

  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('')
  })
  it('returns the whole string if no maxLength is provided', () => {
    expect(wrap('hello')).to.equal('hello')
  })
  it('takes its first argument as a string', () => {
    expect(() => wrap(10, 10)).to.throw('Needs a string as a first argument')
  })
  it('takes its second argument as a number', () => {
    expect(() => wrap('hi', 'yo')).to.throw('Needs a number as a second argument')
  })
  it('has the first line break at index not greater than the maxLength', () => {
    const testOutput = wrap(testStr, 20)
    const testArr = testOutput.split('\n')
    expect(testArr[0].length).to.equal(17)
  })
  it('has no line greater than maxLength', () => {

  })

})
