<h1 align="center">
	C U R R B I T
	<br>
	<a href="https://travis-ci.org/CodeDotJS/currbit"><img src="https://travis-ci.org/CodeDotJS/currbit.svg?branch=master"></a>  <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
	<br>
</h1>

<p align="center">
An API to convert any world currency to Bitcoin value!
</p>

## Install

```
$ npm install --save currbit
```

## Usage

__`Random Currencies`__

```js
const currbit = require('currbit');

currbit().then(res => {
  console.log(res);
  // 1 Pound sterling = 0.00018 Bitcoin
});

currbit().then(res => {
  console.log(res);
  // 1 Nicaraguan Cordoba = 0.0000041 Bitcoin
});
```

__`Specific Currency Code`__

```js
currbit('usd').then(res => {
  console.log(res);
  // 1 United States Dollar = 0.00013 Bitcoin
});
```

__`Specific currency with value`__

```js
currbit('100000 Iranian rial').then(res => {
  console.log(res);
  // 1,00,000 Iranian Rial = 0.00033 Bitcoin
})
```

## API

#### __`currbit()`__
Returns bitcoin value of random currencies!

#### __`currbit(curr)`__
Returns bitcoin value of specific currecy!

__`curr`__

`Type :` `string`


## Related


- __[`C2B`](https://github.com/CodeDotJS/c2b)__ `:` `Easily convert any World Currency into Bitcoin`

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml)

