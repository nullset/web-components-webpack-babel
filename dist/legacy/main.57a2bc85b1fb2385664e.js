!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var r=new WeakMap,i=function(e){return"function"==typeof e&&r.has(e)},o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;r!==n;){var i=r.nextSibling;e.removeChild(r),r=i}},s={},u={};var l="{{lit-".concat(String(Math.random()).slice(2),"}}"),c="\x3c!--".concat(l,"--\x3e"),f=new RegExp("".concat(l,"|").concat(c)),p=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parts=[],this.element=n;var i=-1,o=0,a=[];!function e(n){for(var s=n.content,u=document.createTreeWalker(s,133,null,!1),c=0;u.nextNode();){i++;var p=u.currentNode;if(1===p.nodeType){if(p.hasAttributes()){for(var h=p.attributes,v=0,m=0;m<h.length;m++)h[m].value.indexOf(l)>=0&&v++;for(;v-- >0;){var b=t.strings[o],g=y.exec(b)[2],_=g.toLowerCase()+"$lit$",w=p.getAttribute(_).split(f);r.parts.push({type:"attribute",index:i,name:g,strings:w}),p.removeAttribute(_),o+=w.length-1}}"TEMPLATE"===p.tagName&&e(p)}else if(3===p.nodeType){var S=p.data;if(S.indexOf(l)>=0){for(var P=p.parentNode,k=S.split(f),x=k.length-1,O=0;O<x;O++)P.insertBefore(""===k[O]?d():document.createTextNode(k[O]),p),r.parts.push({type:"node",index:++i});""===k[x]?(P.insertBefore(d(),p),a.push(p)):p.data=k[x],o+=x}}else if(8===p.nodeType)if(p.data===l){var C=p.parentNode;null!==p.previousSibling&&i!==c||(i++,C.insertBefore(d(),p)),c=i,r.parts.push({type:"node",index:i}),null===p.nextSibling?p.data="":(a.push(p),i--),o++}else for(var E=-1;-1!==(E=p.data.indexOf(l,E+1));)r.parts.push({type:"node",index:-1})}}(n);for(var s=0,u=a;s<u.length;s++){var c=u[s];c.parentNode.removeChild(c)}},h=function(e){return-1!==e.index},d=function(){return document.createComment("")},y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._parts=[],this.template=t,this.processor=n,this.options=r}var t,n,r;return t=e,(n=[{key:"update",value:function(e){var t=0,n=!0,r=!1,i=void 0;try{for(var o,a=this._parts[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;void 0!==s&&s.setValue(e[t]),t++}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}var u=!0,l=!1,c=void 0;try{for(var f,p=this._parts[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=f.value;void 0!==h&&h.commit()}}catch(e){l=!0,c=e}finally{try{u||null==p.return||p.return()}finally{if(l)throw c}}}},{key:"_clone",value:function(){var e=this,t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=this.template.parts,r=0,i=0;return function t(o){for(var a=document.createTreeWalker(o,133,null,!1),s=a.nextNode();r<n.length&&null!==s;){var u=n[r];if(h(u))if(i===u.index){if("node"===u.type){var l=e.processor.handleTextExpression(e.options);l.insertAfterNode(s.previousSibling),e._parts.push(l)}else{var c;(c=e._parts).push.apply(c,v(e.processor.handleAttributeExpressions(s,u.name,u.strings,e.options)))}r++}else i++,"TEMPLATE"===s.nodeName&&t(s.content),s=a.nextNode();else e._parts.push(void 0),r++}}(t),o&&(document.adoptNode(t),customElements.upgrade(t)),t}}])&&m(t.prototype,n),r&&m(t,r),e}();function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}var S=function(){function e(t,n,r,i){g(this,e),this.strings=t,this.values=n,this.type=r,this.processor=i}return w(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=0;n<e;n++){var r=this.strings[n],i=y.exec(r);t+=i?r.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+l:r+c}return t+this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}();function P(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&N(e.prototype,t),n&&N(e,n),e}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T=function(e){return null===e||!("object"===A(e)||"function"==typeof e)},V=function(){function e(t,n,r){E(this,e),this.dirty=!0,this.element=t,this.name=n,this.strings=r,this.parts=[];for(var i=0;i<r.length-1;i++)this.parts[i]=this._createPart()}return j(e,[{key:"_createPart",value:function(){return new R(this)}},{key:"_getValue",value:function(){for(var e=this.strings,t=e.length-1,n="",r=0;r<t;r++){n+=e[r];var i=this.parts[r];if(void 0!==i){var o=i.value;if(null!=o&&(Array.isArray(o)||"string"!=typeof o&&o[Symbol.iterator])){var a=!0,s=!1,u=void 0;try{for(var l,c=o[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var f=l.value;n+="string"==typeof f?f:String(f)}}catch(e){s=!0,u=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw u}}}else n+="string"==typeof o?o:String(o)}}return n+=e[t]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),R=function(){function e(t){E(this,e),this.value=void 0,this.committer=t}return j(e,[{key:"setValue",value:function(e){e===s||T(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;i(this.value);){var e=this.value;this.value=s,e(this)}this.value!==s&&this.committer.commit()}}]),e}(),M=function(){function e(t){E(this,e),this.value=void 0,this._pendingValue=void 0,this.options=t}return j(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e._insert(this.startNode=d()),e._insert(this.endNode=d())}},{key:"insertAfterPart",value:function(e){e._insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=s,e(this)}var t=this._pendingValue;t!==s&&(T(t)?t!==this.value&&this._commitText(t):t instanceof S?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===u?(this.value=u,this.clear()):this._commitText(t))}},{key:"_insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"_commitNode",value:function(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}},{key:"_commitText",value:function(e){var t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}},{key:"_commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{var n=new b(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}},{key:"_commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r=this.value,i=0,o=!0,a=!1,s=void 0;try{for(var u,l=t[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;void 0===(n=r[i])&&(n=new e(this.options),r.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(r[i-1])),n.setValue(c),n.commit(),i++}}catch(e){a=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}i<r.length&&(r.length=i,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;a(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),U=function(){function e(t,n,r){if(E(this,e),this.value=void 0,this._pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=n,this.strings=r}return j(e,[{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=s,e(this)}if(this._pendingValue!==s){var t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=s}}}]),e}(),z=function(e){function t(e,n,r){var i;return E(this,t),(i=P(this,x(t).call(this,e,n,r))).single=2===r.length&&""===r[0]&&""===r[1],i}return O(t,V),j(t,[{key:"_createPart",value:function(){return new q(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:k(x(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(),q=function(e){function t(){return E(this,t),P(this,x(t).apply(this,arguments))}return O(t,R),t}(),F=!1;try{var L={get capture(){return F=!0,!1}};window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch(e){}var I=function(){function e(t,n,r){var i=this;E(this,e),this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=n,this.eventContext=r,this._boundHandleEvent=function(e){return i.handleEvent(e)}}return j(e,[{key:"setValue",value:function(e){this._pendingValue=e}},{key:"commit",value:function(){for(;i(this._pendingValue);){var e=this._pendingValue;this._pendingValue=s,e(this)}if(this._pendingValue!==s){var t=this._pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),o=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),o&&(this._options=H(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=s}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),H=function(e){return e&&(F?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new z(e,t.slice(1),n).parts:"@"===i?[new I(e,t.slice(1),r.eventContext)]:"?"===i?[new U(e,t.slice(1),n)]:new V(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new M(e)}}])&&B(t.prototype,n),r&&B(t,r),e}());function D(e){var t=J.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},J.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(l);return void 0===(n=t.keyString.get(r))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var J=new Map,$=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");var Y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new S(e,n,"html",W)},G=133;function K(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,G,null,!1),o=X(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++;var f=i.currentNode;for(f.previousSibling===c&&(c=null),t.has(f)&&(l.push(f),null===c&&(c=f)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=X(r,o)]}l.forEach(function(e){return e.parentNode.removeChild(e)})}var Q=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,G,null,!1);n.nextNode();)t++;return t},X=function(e){for(var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){var n=e[t];if(h(n))return t}return-1};var Z=function(e,t){return"".concat(e,"--").concat(t)},ee=!0;void 0===window.ShadyCSS?ee=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),ee=!1);var te=function(e){return function(t){var n=Z(t.type,e),r=J.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},J.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(l);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();ee&&window.ShadyCSS.prepareTemplateDom(a,e),i=new p(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},ne=["html","svg"],re=new Set,ie=function(e,t,n){re.add(n);var r=e.querySelectorAll("style");if(0!==r.length){for(var i=document.createElement("style"),o=0;o<r.length;o++){var a=r[o];a.parentNode.removeChild(a),i.textContent+=a.textContent}if(function(e){ne.forEach(function(t){var n=J.get(Z(t,e));void 0!==n&&n.keyString.forEach(function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(function(e){n.add(e)}),K(e,n)})})}(n),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,G,null,!1),a=X(i),s=0,u=-1;o.nextNode();)for(u++,o.currentNode===n&&(s=Q(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=X(i,a);return}a=X(i,a)}else r.appendChild(t)}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){var s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);var u=new Set;u.add(i),K(t,u)}}else window.ShadyCSS.prepareTemplateStyles(t.element,n)};function oe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){var t="function"==typeof Map?new Map:void 0;return(ce=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return fe(e,arguments,he(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),pe(r,e)})(e)}function fe(e,t,n){return(fe=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&pe(i,n.prototype),i}).apply(null,arguments)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}window.JSCompiler_renameProperty=function(e,t){return e};var de={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ye=function(e,t){return t!==e&&(t==t||e==e)},ve={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:ye},me=Promise.resolve(!0),be=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=le(this,he(t).call(this)))._updateState=0,e._instanceProperties=void 0,e._updatePromise=me,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,ce(HTMLElement)),n=t,r=[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach(function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}})}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach(function(t,n){return e[n]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ve,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n._classProperties.get(r)||ve;this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(e,t){var n=!0;if(void 0!==e){var r=this.constructor,i=r._classProperties.get(e)||ve;r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}},{key:"requestUpdate",value:function(e,t){return this._requestUpdate(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t,n,r,i,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,r=this._updatePromise,this._updatePromise=new Promise(function(e,r){t=e,n=r}),e.prev=3,e.next=6,r;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise(function(e){return o._hasConnectedResolver=e});case 13:if(e.prev=13,null==(i=this.performUpdate())){e.next=18;break}return e.next=18,i;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13),n(e.t1);case 23:t(!this._hasRequestedUpdate);case 24:case"end":return e.stop()}},e,this,[[3,8],[13,20]])}),function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){se(o,r,i,a,s,"next",e)}function s(e){se(o,r,i,a,s,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(e,n){return t._propertyToAttribute(n,t[n],e)}),this._reflectingProperties=void 0)}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasConnected",get:function(){return 32&this._updateState}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._updatePromise}}],i=[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(function(t,n){return e._classProperties.set(n,t)})}}},{key:"createProperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ve;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var n="symbol"===ae(e)?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get:function(){return this[n]},set:function(t){var r=this[e];this[n]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))||!this.finalized){var e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,n=[].concat(oe(Object.getOwnPropertyNames(t)),oe("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value;this.createProperty(u,t[u])}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:ye)(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||de,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||de.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach(function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))}),t}}],r&&ue(n.prototype,r),i&&ue(n,i),t}();be.finalized=!0;var ge="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Se(e,t){return!t||"object"!==_e(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Pe(e,t,n){return(Pe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ke(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function ke(e){return(ke=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xe(e,t){return(xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");var Oe=function(e){return e.flat?e.flat(1/0):function e(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0,i=t.length;r<i;r++){var o=t[r];Array.isArray(o)?e(o,n):n.push(o)}return n}(e)},Ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Se(this,ke(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&xe(e,t)}(t,be),n=t,i=[{key:"finalize",value:function(){Pe(ke(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}},{key:"_getUniqueStyles",value:function(){var e=this.styles,t=[];Array.isArray(e)?Oe(e).reduceRight(function(e,t){return e.add(t),e},new Set).forEach(function(e){return t.unshift(e)}):e&&t.push(e);return t}}],(r=[{key:"initialize",value:function(){Pe(ke(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ge?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function(){Pe(ke(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var n=this;Pe(ke(t.prototype),"update",this).call(this,e);var r=this.render();r instanceof S&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,n.renderRoot.appendChild(t)}))}},{key:"render",value:function(){}}])&&we(n.prototype,r),i&&we(n,i),t}();function Ee(e){return(Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["<div><p>A MY-ELEMENT paragraph</p></div>"]);return Ne=function(){return e},e}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e,t){return!t||"object"!==Ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Te(e){return(Te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Ce.finalized=!0,Ce.render=function(e,t,n){var r=n.scopeName,i=$.has(t),o=t instanceof ShadowRoot&&ee&&e instanceof S,s=o&&!re.has(r),u=s?document.createDocumentFragment():t;if(function(e,t,n){var r=$.get(t);void 0===r&&(a(t,t.firstChild),$.set(t,r=new M(Object.assign({templateFactory:D},n))),r.appendInto(t)),r.setValue(e),r.commit()}(e,u,Object.assign({templateFactory:te(r)},n)),s){var l=$.get(u);$.delete(u),l.value instanceof b&&ie(u,l.value.template,r),a(t,t.firstChild),t.appendChild(u),$.set(t,l)}!i&&o&&window.ShadyCSS.styleElement(t.host)},window.LitElement=Ce,window.html=Y;var Re=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Ae(this,Te(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(t,Ce),n=t,(r=[{key:"render",value:function(){return Y(Ne())}}])&&je(n.prototype,r),i&&je(n,i),t}();customElements.define("my-element",Re)}]);
//# sourceMappingURL=main.57a2bc85b1fb2385664e.js.map