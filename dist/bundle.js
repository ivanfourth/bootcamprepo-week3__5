!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(3)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){n(this,e),this.firstName=t,this.lastName=r}return r(e,[{key:"sayHello",value:function(){console.log("Cześć, nazywam się "+this.firstName+" "+this.lastName+"!")}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),f=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"JavaScript";o(this,t);var a=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.lang=r,a}return a(t,e),i(t,[{key:"work",value:function(){this.sayHello(),console.log("Piszę właśnie kod w moim ulubionym języku, którym jest "+this.lang+".")}}]),t}(c.default);t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(2),u=r(o),a=new u.default("Baltazar","Gąbka","CSS");a.work()}]);
//# sourceMappingURL=bundle.js.map