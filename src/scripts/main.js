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

const alphabetBasicReversed = {
  '4': 'a',
  '8': 'b',
  '3': 'e',
  'ph': 'f',
  '6': 'g', // or 9
  '1': 'i', // or |
  '0': 'o',
  '5': 's',
  '7': 't' // or +
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

const alphabetAdvancedReversed = {
  '(': 'c', // or k or |< or /<
  '<|': 'd',
  '|-|': 'h',
  '|<': 'k', // or /<
  '|': 'l', // or 1
  '|\\/|': 'm',
  '|\\|': 'n',
  '|2': 'p',
  '|_|': 'u',
  '/': 'v', // or \/
  '//': 'w', // or \/\/
  '><': 'x',
  '\'/': 'y'
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
  for (let i = 0; i < text.length; i++) {
    let alphabet = ''/*alphabetBasicReversed[letter] ? alphabetBasicReversed[letter] : alphabetAdvancedReversed[letter]*/

    let letter = text[i].toLowerCase()

    if (alphabetAdvancedReversed[letter]) {
      alphabet = alphabetAdvancedReversed[letter]
    } else if (alphabetBasicReversed[letter]) {
      alphabet = alphabetBasicReversed[letter]
    } else {
      alphabet = letter
    }

    console.log(alphabet)

    if (alphabet) {
      text = text.replace(text[i], alphabet)
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
