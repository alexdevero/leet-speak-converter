// CLI version of l33t speak converter

'use strict'

const readline = require('readline')

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
  text = text || inputEl.value.toLowerCase()

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What text would you like to convert to l33t speak? \n', (answerOne) => {
  rl.question('Do you want to use advanced l33t alphabet? (Y/N) ', (answerTwo) => {
    convertInput(answerOne, answerTwo)

    rl.close()
  })
})
