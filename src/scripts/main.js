'use strict'

(() => {
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

  const inputEl = document.querySelector('.leetInput')

  // Convert input into l33t
  const convertInput = (text) => {
    text = text || inputEl.value.toLowerCase()

    for (var i = 0; i < text.length; i++) {
      let alphabet = adv.checked ? alphabetBasic[text[i]] || alphabetAdvanced[text[i]] : alphabetBasic[text[i]]

      if (alphabet) {
        text = text.replace(text[i], alphabet)
      }
    }

    return text
  }
})()
