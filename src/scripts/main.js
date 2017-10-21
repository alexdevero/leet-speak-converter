// Web version of l33t speak converter

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

const alphabetReversed = {
  '3': 'e',
  '(': 'c', // or k or |< or /<
  '|\\/|': 'm',
  '|\\|': 'n',
  '<|': 'd',
  '|-|': 'h',
  '|<': 'k', // or /<
  '|': 'l', // or 1
  '|2': 'p',
  '|_|': 'u',
  '/': 'v', // or \/
  '//': 'w', // or \/\/
  '><': 'x',
  '4': 'a',
  '\'/': 'y',
  '8': 'b',
  'ph': 'f',
  '6': 'g', // or 9
  '1': 'i', // or |
  '0': 'o',
  '5': 's',
  '7': 't' // or +
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

  return text
}

const convertInputReverse = (text) => {
  // Working basic version
  for (let prop in alphabetReversed) {
    if (text.indexOf(prop) != -1) {
      text = text.replace(new RegExp(prop, 'g'), alphabetReversed[prop])
    }
  }

  return text
}

const buttonEl = document.querySelector('.leet-button')
const checkboxEl = document.querySelector('.leet-checkbox')
const checkboxReverseEl = document.querySelector('.leet-reverse')
const resultEl = document.querySelector('.leet-result')
const textareaEl = document.querySelector('.leet-textarea')

buttonEl.addEventListener('click', () => {
  let text = textareaEl.value
  let useAdvanced = checkboxEl.checked ? 'y' : 'n'
  let convertReversed = checkboxReverseEl.checked ? 'y' : 'n'

  if (convertReversed.toLowerCase() === 'y') {
    text = convertInputReverse(text)
    console.log('reversed')
  } else {
    text = convertInput(text, useAdvanced)
    console.log('regular')
  }

  resultEl.value = text
})
