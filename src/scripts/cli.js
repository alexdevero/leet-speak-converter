// CLI version of l33t speak converter

'use strict'

const readline = require('readline')

const convertInput = require('./modules/leet-converter')

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
