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

const alphabetReversed = [
  [/(\|\\\/\|)/g, 'm'],
  [/(\|\\\|)/g, 'n'],
  [/(\()/g, 'c'],
  [/(<\|)/g, 'd'],
  [/\|-\|/g, 'h'],
  [/(\|<)/g, 'k'],
  [/(\|2)/g, 'p'],
  [/(\|_\|)/g, 'u'],
  [/(\/\/)/g, 'w'],
  [/(><)/g, 'x'],
  [/(\|)/g, 'l'],
  [/(\'\/)/g, 'y'],
  [/(\/)/g, 'v'],
  [/(1)/g, 'i'],
  [/(0)/g, 'o'],
  [/(3)/g, 'e'],
  [/(4)/g, 'a'],
  [/(5)/g, 's'],
  [/(6)/g, 'g'],
  [/(7)/g, 't'],
  [/(8)/g, 'b'],
  [/(ph)/g, 'f'],
]

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

  alphabetReversed.map((x) => {
    text = text.replace(x[0], x[1])
  })

  console.log(text)

  return text
}

module.exports = { convertInput, convertInputReverse }
