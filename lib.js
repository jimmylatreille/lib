/*! lib - v 0.2 - 2024
* https://github.com/jimmylatreille/lib
* Copyright (c) 2014-2024 AUTHORS.txt; Licensed MIT, GPL */

var lib = {
  version: 0.2,
  spec: 'ECMAScript 6',

  isObject: function(item) {
    return !!(item && typeof item === 'object' && !Array.isArray(item));
  },

  deepClone: function(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
      return obj.map(item => lib.deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = lib.deepClone(obj[key]);
      }
    }
    return clonedObj;
  },

  debounce: function(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  },

  throttle: function(func, limit) {
    let inThrottle;
    return function(...args) {
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// String extensions
Object.defineProperty(String.prototype, 'clean', {
  value: function() {
    return this.replace(/\s{2,}/g, ' ');
  },
  configurable: true,
  writable: true
});

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  configurable: true,
  writable: true
});

Object.defineProperty(String.prototype, 'truncate', {
  value: function(length, suffix = '...') {
    if (this.length <= length) return this.toString();
    return this.substring(0, length) + suffix;
  },
  configurable: true,
  writable: true
});

// Array extensions
Object.defineProperty(Array.prototype, 'shuffle', {
  value: function() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  },
  configurable: true,
  writable: true
});

Object.defineProperty(Array.prototype, 'unique', {
  value: function() {
    return [...new Set(this)];
  },
  configurable: true,
  writable: true
});

// Number extensions
Object.defineProperty(Number.prototype, 'clamp', {
  value: function(min, max) {
    return Math.min(Math.max(this, min), max);
  },
  configurable: true,
  writable: true
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lib;
}
