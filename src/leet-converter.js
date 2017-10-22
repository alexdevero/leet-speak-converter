const alphabetBasic = {
  'a': '4',
  'b': '8',
  'e': '3',
  'f': 'ph',
  'g': '6', // or 9
  'i': '1', // or |
  'o': '0',
  's': '5',
  't': '7' // or +
}

const alphabetAdvanced = {
  'c': '(', // or k or |< or /<
  'd': '<|',
  'h': '|-|',
  'k': '|<', // or /<
  'l': '|', // or 1
  'm': '|\\/|',
  'n': '|\\|',
  'p': '|2',
  'u': '|_|',
  'v': '/', // or \/
  'w': '//', // or \/\/
  'x': '><',
  'y': '\'/'
}

// Convert input into l33t
const convertInput = (text, useAdvanced = 'n') => {
  for (let i = 0; i < text.length; i++) {
    let alphabet
    let letter = text[i].toLowerCase()

    if (useAdvanced.toLowerCase() === 'y') {
      // Use advanced l33t speak alphabet
      alphabet = alphabetBasic[letter] ? alphabetBasic[letter] : alphabetAdvanced[letter]
    } else {
      // Use basic l33t speak alphabet
      alphabet = alphabetBasic[letter]
    }

    if (alphabet) {
      text = text.replace(text[i], alphabet)
    }
  }

  // Show the result in console
  console.log(text)

  return text
}

const convertInputReverse = (text) => {
  text = text.toLowerCase()
    .replace(/(\|\\\/\|)/g, 'm')
    .replace(/(\|\\\|)/g, 'n')
    .replace(/(\()/g, 'c')
    .replace(/(<\|)/g, 'd')
    .replace(/\|-\|/g, 'h')
    .replace(/(\|<)/g, 'k')
    .replace(/(\|2)/g, 'p')
    .replace(/(\|_\|)/g, 'u')
    .replace(/(\/\/)/g, 'w')
    .replace(/(><)/g, 'x')
    .replace(/(\|)/g, 'l')
    .replace(/(\'\/)/g, 'y')
    .replace(/(\/)/g, 'v')
    .replace(/(1)/g, 'i')
    .replace(/(0)/g, 'o')
    .replace(/(3)/g, 'e')
    .replace(/(4)/g, 'a')
    .replace(/(5)/g, 's')
    .replace(/(6)/g, 'g')
    .replace(/(7)/g, 't')
    .replace(/(8)/g, 'b')
    .replace(/(ph)/g, 'f')

  // Show the result in console
  console.log(text)

  return text
}

module.exports = { convertInput, convertInputReverse }
