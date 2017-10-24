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

## Code of Conduct

[Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## License

MIT © [Alex Devero](https://alexdevero.com).
