lib.js
===

Library that extend the core of javascript Object

===

`String.clean()` ***method that remove String multy spacing***

```js
String.prototype.clean = function() {
	return this.replace(/\s{2,}/g, ' ');
}
```
