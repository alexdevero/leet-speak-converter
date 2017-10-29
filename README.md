<p align="center">
  <a href="https://david-dm.org/alexdevero/leet-speak-converter"><img alt="Dependency Status" src="https://david-dm.org/alexdevero/leet-speak-converter.svg?style=flat"></a>
  <a href="https://david-dm.org/alexdevero/leet-speak-converter?type=dev"><img alt="devDependency Status" src="https://david-dm.org/alexdevero/leet-speak-converter/dev-status.svg?style=flat"></a>
  <a href="https://alexdevero.com"><img alt="Built by DEVERO" src="https://img.shields.io/badge/built%20by-DEVERO-brightgreen.svg?colorB=d30320"></a>
</p>

<p align="center">
  <a href="http://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/npm/l/express.svg"></a>
  <a href="#"><img alt="Releases" src="https://img.shields.io/github/release/alexdevero/leet-speak-converter.svg"></a>
</p>

# l33t speak converter

A simple utility to convert text into l33t speak. You can test it [here](https://alexdevero.com/labs/leetspeak).

### Table of contents
* [Install](#install)
* [Usage](#usage)
* [Support this project](#support-this-project)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

## Install
```
$ npm install leet-speak-converter
```
Or if you prefer using Yarn:
```
$ yarn add leet-speak-converter
```

Or you can also clone this repo
```
$ git clone https://github.com/alexdevero/leet-speak-converter.git
```

## Usage
### Use l33t converter in your code:
```js
// Import converter
// convertInput: converts text to leet
// convertInputReverse: converts leet to text
const { convertInput, convertInputReverse } = require('./leet-converter')

// Convert text to leet
// text: string
// useAdvanced: string - 'Y' or 'N'
convertInput(text, useAdvanced)

// Convert leet to text
// text: string
convertInputReverse(text)

```

### Run CLI version (in command line):
```
$ npm run start:cli
```
Or if you prefer using Yarn:
```
$ yarn run start:cli
```
### Run web version (on locahost, port 1337) use:
```
$ npm run start:web
```
Or if you prefer using Yarn:
```
$ yarn run start:web
```

## Support this project

<!-- This project is released as an open-source. If you need help with using this project, please ask and I will do my best reply to as soon as possible. You can use this project as you wish *for free*. Also, you can change the source code and redistribute it if you want. -->

Development and maintenance of this project takes a lot of time. If you want to support this project and help its author, there are few ways you can do it:

 - Starring and sharing the project
 - [![Donate](https://img.shields.io/badge/Donate-Paypal-brightgreen.svg?colorB=259cd2)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YKLGUUB34ASEL)—make one-time donations via PayPal.
 - [![Donate](https://img.shields.io/badge/Donate-Patreon-brightgreen.svg?colorB=f86213)](https://www.patreon.com/alexdevero)—set up monthly donation via Patreon and get interesting news about what I'm doing.
 - <img alt="Releases" src="https://img.shields.io/badge/Donate-Bitcoin-brightgreen.svg?colorB=fab915">—send bitcoins or ethereum to this address: `19jHGagJWeVvuNjN3kaBoAszXd9ea9gKzp`.

Thank you!

## Code of Conduct

[Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## License

MIT © [Alex Devero](https://alexdevero.com).
