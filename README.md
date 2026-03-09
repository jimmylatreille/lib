lib.js
===

Library that extend the core of javascript

===

## lib properties and methods

### `lib.version`
Current version of the library.

### `lib.spec`
Target ECMAScript specification.

### `lib.isObject(item)`
Returns `true` if `item` is a plain object and not an array or null.

### `lib.deepClone(obj)`
Returns a deep clone of the provided object or array.

### `lib.debounce(func, wait)`
Returns a debounced version of the function that delays its execution until after `wait` milliseconds have elapsed since the last time it was invoked.

### `lib.throttle(func, limit)`
Returns a throttled version of the function that only executes at most once every `limit` milliseconds.

## String extensions

### `String.prototype.clean()`
Method that removes multiple spaces from a string.
```js
"hello     world".clean(); // "hello world"
```

### `String.prototype.capitalize()`
Capitalizes the first letter of the string.
```js
"hello".capitalize(); // "Hello"
```

### `String.prototype.truncate(length, suffix)`
Truncates the string to the specified length and adds a suffix (default is "...").
```js
"this is a long string".truncate(10); // "this is a ..."
```

## Array extensions

### `Array.prototype.shuffle()`
Shuffles the elements of the array in place.
```js
[1, 2, 3, 4].shuffle(); // e.g., [3, 1, 4, 2]
```

### `Array.prototype.unique()`
Returns a new array with unique elements.
```js
[1, 2, 2, 3, 3, 3].unique(); // [1, 2, 3]
```

## Number extensions

### `Number.prototype.clamp(min, max)`
Clamps the number between the specified min and max values.
```js
(10).clamp(0, 5); // 5
```
