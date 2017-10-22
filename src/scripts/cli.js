// CLI version of l33t speak converter

const readline = require('readline')

const { convertInput, convertInputReverse } = require('./modules/leet-converter')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Do you want to convert text to l33t speak or l33t speak to text (latin)? (Y = text to l33t / N = l33t to text) \n', (answerZero) => {
  if (answerZero.toLowerCase() === 'y') {
    rl.question('What text would you like to convert to l33t speak? \n', (answerOne) => {
      rl.question('Do you want to use advanced l33t alphabet? (Y/N) \n', (answerTwo) => {
        convertInput(answerOne, answerTwo)

        rl.close()
      })
    })
  } else {
    rl.question('What l33t speak text would you like to convert to text (latin)? \n', (answerThree) => {
      convertInputReverse(answerThree)

      rl.close()
    })
  }
})
