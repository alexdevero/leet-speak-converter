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

  alphabetReversed.map((x) => {
    text = text.replace(x[0], x[1])
  })

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
