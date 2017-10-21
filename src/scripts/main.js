// Web version of l33t speak converter

const buttonEl = document.querySelector('.leet-button')
const checkboxAdvancedEl = document.querySelector('.leet-advanced')
const checkboxReverseEl = document.querySelector('.leet-reverse')
const resultEl = document.querySelector('.leet-result')
const textareaEl = document.querySelector('.leet-textarea')

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

// If user wants to use advanced l33t conversion, disable option for conversion from l33t to text
checkboxAdvancedEl.addEventListener('click', (e) => {
  if (e.target.checked) {
    checkboxReverseEl.setAttribute('disabled', true)
    checkboxReverseEl.parentNode.classList.add('switch--inactive')
  } else {
    checkboxReverseEl.removeAttribute('disabled')
    checkboxReverseEl.parentNode.classList.remove('switch--inactive')
  }
})

// If user wants to use conversion from l33t to text, disable option for advanced l33t conversion
checkboxReverseEl.addEventListener('click', (e) => {
  if (e.target.checked) {
    checkboxAdvancedEl.setAttribute('disabled', true)
    checkboxAdvancedEl.parentNode.classList.add('switch--inactive')
  } else {
    checkboxAdvancedEl.removeAttribute('disabled')
    checkboxAdvancedEl.parentNode.classList.remove('switch--inactive')
  }
})

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

  return text
}

buttonEl.addEventListener('click', () => {
  let text = textareaEl.value
  let useAdvanced = checkboxAdvancedEl.checked ? 'y' : 'n'
  let convertReversed = checkboxReverseEl.checked ? 'y' : 'n'

  if (convertReversed.toLowerCase() === 'y') {
    text = convertInputReverse(text)
  } else {
    text = convertInput(text, useAdvanced)
  }

  resultEl.value = text
})
