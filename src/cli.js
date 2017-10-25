// CLI version of l33t speak converter

const readline = require('readline')

const { convertInput, convertInputReverse } = require('./leet-converter')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const init = () => {
  rl.question('Do you want to convert text to l33t speak or l33t speak to text (latin)? (Y = text to l33t / N = l33t to text) \n', (answerZero) => {
    if (answerZero.toLowerCase() === 'y') {
      rl.question('What text would you like to convert to l33t speak? \n', (answerOne) => {
        rl.question('Do you want to use advanced l33t alphabet? (Y/N) \n', (answerTwo) => {
          convertInput(answerOne, answerTwo)

          rl.question('Do you want to convert another word? (Y/N) \n', (answerThree) => {
            if (answerThree.toLowerCase() === 'y') {
              init()
            } else {
              rl.close()
            }
          })
        })
      })
    } else {
      rl.question('What l33t speak text would you like to convert to text (latin)? \n', (answerThree) => {
        convertInputReverse(answerThree)

        rl.question('Do you want to convert another word? (Y/N) \n', (answerFive) => {
          if (answerFive.toLowerCase() === 'y') {
            init()
          } else {
            rl.close()
          }
        })
      })
    }
  })
}

init()
