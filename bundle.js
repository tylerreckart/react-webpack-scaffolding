!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var o in t)("object"==typeof exports?exports:n)[o]=t[o]}}(this,function(){return function(n){function e(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return n[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}({0:function(n,e,t){n.exports=t(219)},219:function(n,e,t){var o=t(220);"string"==typeof o&&(o=[[n.id,o,""]]),t(223)(o,{}),o.locals&&(n.exports=o.locals)},220:function(n,e,t){e=n.exports=t(221)(),e.i(t(222),""),e.push([n.id,".app{width:100%;height:100%;display:block;background-color:blue}","",{version:3,sources:["/./styles/app.scss"],names:[],mappings:"AAGA,KACE,WAAA,AACA,YAAA,AACA,cAAA,AACA,qBAAA,CAAD",file:"app.scss",sourcesContent:["@import 'bourbon';\n@import '~normalize.css/normalize.css';\n\n.app {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background-color: blue;\n}\n"],sourceRoot:"webpack://"}])},221:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},222:function(n,e,t){e=n.exports=t(221)(),e.push([n.id,"/*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font:inherit}optgroup{font-weight:700}button,input,select{overflow:visible}button,input,select,textarea{margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}button:-moz-focusring,input:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}","",{version:3,sources:["/./node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,4EAA4E,AAO5E,KACE,uBAAwB,AACxB,0BAA2B,AAC3B,6BAA+B,CAChC,AAMD,KACE,QAAU,CACX,AAWD,oFAYE,aAAe,CAChB,AAMD,4BAIE,oBAAsB,CACvB,AAMD,sBACE,aAAc,AACd,QAAU,CACX,AAMD,SACE,uBAAyB,CAC1B,AAOD,kBAEE,YAAc,CACf,AASD,EACE,4BAA8B,CAC/B,AAOD,iBAEE,eAAiB,CAClB,AAUD,YACE,mBAAoB,AACpB,0BAA2B,AAC3B,gCAAkC,CACnC,AAMD,SAEE,oBAAqB,AASrB,kBAAoB,CARrB,AAeD,IACE,iBAAmB,CACpB,AAOD,GACE,cAAe,AACf,cAAiB,CAClB,AAMD,KACE,sBAAuB,AACvB,UAAY,CACb,AAMD,MACE,aAAe,CAChB,AAOD,QAEE,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,uBAAyB,CAC1B,AAED,IACE,aAAgB,CACjB,AAED,IACE,SAAY,CACb,AASD,IACE,iBAAmB,CACpB,AAMD,eACE,eAAiB,CAClB,AAUD,kBAIE,sBAAkC,AAClC,aAAe,CAChB,AAMD,OACE,eAAiB,CAClB,AAOD,GACE,uBAAwB,AACxB,SAAU,AACV,gBAAkB,CACnB,AASD,6BAIE,YAAc,CACf,AAMD,SACE,eAAkB,CACnB,AAQD,oBAGE,gBAAkB,CACnB,AAOD,6BAIE,QAAU,CACX,AAOD,cAEE,mBAAqB,CACtB,AAMD,gDAIE,cAAgB,CACjB,AAMD,WACE,cAAgB,CACjB,AAQD,qDAIE,yBAA2B,CAC5B,AAMD,iDAEE,SAAU,AACV,SAAW,CACZ,AAMD,2CAEE,6BAA+B,CAChC,AAMD,SACE,wBAA0B,AAC1B,aAAc,AACd,0BAA+B,CAChC,AASD,OACE,sBAAuB,AACvB,cAAe,AACf,cAAe,AACf,eAAgB,AAChB,UAAW,AACX,kBAAoB,CACrB,AAMD,SACE,aAAe,CAChB,AAOD,6BAEE,sBAAuB,AACvB,SAAW,CACZ,AAMD,kFAEE,WAAa,CACd,AAMD,cACE,4BAA8B,CAC/B,AAOD,qFAEE,uBAAyB,CAC1B",file:"normalize.css",sourcesContent:['/*! normalize.css v4.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Change font properties to `inherit` in all browsers (opinionated).\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n * 2. Show the overflow in Edge, Firefox, and IE.\n */\n\nbutton,\ninput, /* 1 */\nselect { /* 2 */\n  overflow: visible;\n}\n\n/**\n * Remove the margin in Safari.\n * 1. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea { /* 1 */\n  margin: 0;\n}\n\n/**\n * Remove the inheritence of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritence of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Change the cursor in all browsers (opinionated).\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  cursor: pointer;\n}\n\n/**\n * Restore the default cursor to disabled elements unset by the previous rule.\n */\n\n[disabled] {\n  cursor: default;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS.\n */\n\nbutton,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\ninput:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the odd appearance of search inputs in Chrome and Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield;\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome on OS X and\n * Safari on OS X.\n */\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n'],sourceRoot:"webpack://"}])},223:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=p[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(d(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(d(o.parts[r],e));p[o.id]={id:o.id,refs:1,parts:a}}}}function i(n){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],r=i[0],a=i[1],s=i[2],A=i[3],d={css:a,media:s,sourceMap:A};t[r]?t[r].parts.push(d):e.push(t[r]={id:r,parts:[d]})}return e}function r(n,e){var t=b(),o=g[g.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),g.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function a(n){n.parentNode.removeChild(n);var e=g.indexOf(n);e>=0&&g.splice(e,1)}function s(n){var e=document.createElement("style");return e.type="text/css",r(n,e),e}function A(n){var e=document.createElement("link");return e.rel="stylesheet",r(n,e),e}function d(n,e){var t,o,i;if(e.singleton){var r=C++;t=m||(m=s(e)),o=c.bind(null,t,r,!1),i=c.bind(null,t,r,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=A(e),o=u.bind(null,t),i=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),o=l.bind(null,t),i=function(){a(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}function c(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=B(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function l(n,e){var t=e.css,o=e.media;if(e.sourceMap,o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function u(n,e){var t=e.css,o=(e.media,e.sourceMap);o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([t],{type:"text/css"}),r=n.href;n.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var p={},f=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,C=0,g=[];n.exports=function(n,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var t=i(n);return o(t,e),function(n){for(var r=[],a=0;a<t.length;a++){var s=t[a],A=p[s.id];A.refs--,r.push(A)}if(n){var d=i(n);o(d,e)}for(var a=0;a<r.length;a++){var A=r[a];if(0===A.refs){for(var c=0;c<A.parts.length;c++)A.parts[c]();delete p[A.id]}}}};var B=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()}})});