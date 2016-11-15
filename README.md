# json-conform

via npm `npm i gson-conform`


```js
const gson = require("gson-conform");

var array = gson.asArray(anything);
// [anything]

gson.forEach(arrayOrObject, callback(value, key, parent) {});

var keyInData = gson.keyOf(arrayOrObject, valueToFind);
// *

var allKeys = gson.keys(anything);
// []

var allValues = gson.values(anything);
// []
```