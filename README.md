# gfinance [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A way to access the now deprecated Google Finance API

## Installation

```sh
$ npm install --save gfinance
```

## Usage

```js
var gfinance = require('gfinance');

gfinance.get(['GOOG'], function (err, res) {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
}
```
## License

MIT © [Jay Looney &lt;jay.m.looney@gmail.com&gt;](http://www.jaylooney.us)


[npm-image]: https://badge.fury.io/js/gfinance.svg
[npm-url]: https://npmjs.org/package/gfinance
[travis-image]: https://travis-ci.org/zenware/gfinance.svg?branch=master
[travis-url]: https://travis-ci.org/zenware/gfinance
[daviddm-image]: https://david-dm.org/zenware/gfinance.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zenware/gfinance
[coveralls-image]: https://coveralls.io/repos/zenware/gfinance/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/zenware/gfinance?branch=master
