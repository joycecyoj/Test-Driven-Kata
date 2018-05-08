const wrap = (string, maxLength) => {
  let output;
  if (typeof string !== 'string') {
    throw new Error('Needs a string as a first argument')
  }
  if (!maxLength) {
    return string
  } else if (typeof maxLength !== 'number') {
    throw new Error('Needs a number as a second argument')
  }
  if (string.length) {
    let firstline = string.slice(0, maxLength+1)
    let spaceInd = firstline.lastIndexOf(' ')
    output = firstline.slice(0, spaceInd) + '\n'

  // new string slice output spaceInd to end
  // let second = stringt.slice(spaceInd+1, )
  } else {
    return ''
  }

  return output
}

module.exports = wrap
