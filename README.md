# p-hex2rgb

Convert a hex color code in a rgb code, promisified

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Changelog](#changelog)


## Installation

```
$ npm install --save p-hex2rgb
```

Or if you prefer yarn:

```
$ yarn add p-hex2rgb
```

## Usage

```JavaScript
const hex2rgb = require('p-hex2rgb');

hex2rgb('#aabbcc')
  .then(rgb => console.log(rgb)) // [170, 187, 204]
  .catch(err => console.error(err));

// Shorthand notation allowed, same like above
hex2rgb('#abc')
  .then(rgb => console.log(rgb)) // [170, 187, 204]
  .catch(err => console.error(err));

```

## Development

```
$ npm test
```

## Changelog

- 1.0.0
  - Initial Release
