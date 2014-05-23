# object-nester

[http://stackoverflow.com/a/11433067](This answer) to a StackOverflow question,
packaged as a node.js module.

## Usage
```js
var nested = require( 'object-nester' );

var foo = nested.create( animals, [ 'mammals', 'cats', 'wild' ], 'lion' );
// animals.mammals.cats.wild = 'lion'
```
[![wercker status](https://app.wercker.com/status/71de5fc0ef408d6ef98c831ed2c9e725/m "wercker status")](https://app.wercker.com/project/bykey/71de5fc0ef408d6ef98c831ed2c9e725)
[![NPM](https://nodei.co/npm/object-nester.png)](https://nodei.co/npm/object-nester/)
