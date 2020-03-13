/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Normalize.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\\r\\n\\r\\n/**\\r\\n * 1. Set default font family to sans-serif.\\r\\n * 2. Prevent iOS text size adjust after orientation change, without disabling\\r\\n *    user zoom.\\r\\n */\\r\\n\\r\\n *, *:before, *:after {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n html {\\r\\n    font-family: sans-serif; /* 1 */\\r\\n    -ms-text-size-adjust: 100%; /* 2 */\\r\\n    -webkit-text-size-adjust: 100%; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove default margin.\\r\\n   */\\r\\n  \\r\\n  body {\\r\\n    margin: 0;\\r\\n  }\\r\\n  \\r\\n  /* HTML5 display definitions\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\\r\\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\\r\\n   * and Firefox.\\r\\n   * Correct `block` display not defined for `main` in IE 11.\\r\\n   */\\r\\n  \\r\\n  article,\\r\\n  aside,\\r\\n  details,\\r\\n  figcaption,\\r\\n  figure,\\r\\n  footer,\\r\\n  header,\\r\\n  hgroup,\\r\\n  main,\\r\\n  menu,\\r\\n  nav,\\r\\n  section,\\r\\n  summary {\\r\\n    display: block;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct `inline-block` display not defined in IE 8/9.\\r\\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\\r\\n   */\\r\\n  \\r\\n  audio,\\r\\n  canvas,\\r\\n  progress,\\r\\n  video {\\r\\n    display: inline-block; /* 1 */\\r\\n    vertical-align: baseline; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Prevent modern browsers from displaying `audio` without controls.\\r\\n   * Remove excess height in iOS 5 devices.\\r\\n   */\\r\\n  \\r\\n  audio:not([controls]) {\\r\\n    display: none;\\r\\n    height: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address `[hidden]` styling not present in IE 8/9/10.\\r\\n   * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\\r\\n   */\\r\\n  \\r\\n  [hidden],\\r\\n  template {\\r\\n    display: none;\\r\\n  }\\r\\n  \\r\\n  /* Links\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove the gray background color from active links in IE 10.\\r\\n   */\\r\\n  \\r\\n  a {\\r\\n    background-color: transparent;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Improve readability when focused and also mouse hovered in all browsers.\\r\\n   */\\r\\n  \\r\\n  a:active,\\r\\n  a:hover {\\r\\n    outline: 0;\\r\\n  }\\r\\n  \\r\\n  /* Text-level semantics\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  abbr[title] {\\r\\n    border-bottom: 1px dotted;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  b,\\r\\n  strong {\\r\\n    font-weight: bold;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address styling not present in Safari and Chrome.\\r\\n   */\\r\\n  \\r\\n  dfn {\\r\\n    font-style: italic;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address variable `h1` font-size and margin within `section` and `article`\\r\\n   * contexts in Firefox 4+, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  h1 {\\r\\n    font-size: 2em;\\r\\n    margin: 0.67em 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address styling not present in IE 8/9.\\r\\n   */\\r\\n  \\r\\n  mark {\\r\\n    background: #ff0;\\r\\n    color: #000;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address inconsistent and variable font size in all browsers.\\r\\n   */\\r\\n  \\r\\n  small {\\r\\n    font-size: 80%;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\\r\\n   */\\r\\n  \\r\\n  sub,\\r\\n  sup {\\r\\n    font-size: 75%;\\r\\n    line-height: 0;\\r\\n    position: relative;\\r\\n    vertical-align: baseline;\\r\\n  }\\r\\n  \\r\\n  sup {\\r\\n    top: -0.5em;\\r\\n  }\\r\\n  \\r\\n  sub {\\r\\n    bottom: -0.25em;\\r\\n  }\\r\\n  \\r\\n  /* Embedded content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove border when inside `a` element in IE 8/9/10.\\r\\n   */\\r\\n  \\r\\n  img {\\r\\n    border: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Correct overflow not hidden in IE 9/10/11.\\r\\n   */\\r\\n  \\r\\n  svg:not(:root) {\\r\\n    overflow: hidden;\\r\\n  }\\r\\n  \\r\\n  /* Grouping content\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Address margin not present in IE 8/9 and Safari.\\r\\n   */\\r\\n  \\r\\n  figure {\\r\\n    margin: 1em 40px;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address differences between Firefox and other browsers.\\r\\n   */\\r\\n  \\r\\n  hr {\\r\\n    -moz-box-sizing: content-box;\\r\\n    box-sizing: content-box;\\r\\n    height: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Contain overflow in all browsers.\\r\\n   */\\r\\n  \\r\\n  pre {\\r\\n    overflow: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address odd `em`-unit font size rendering in all browsers.\\r\\n   */\\r\\n  \\r\\n  code,\\r\\n  kbd,\\r\\n  pre,\\r\\n  samp {\\r\\n    font-family: monospace, monospace;\\r\\n    font-size: 1em;\\r\\n  }\\r\\n  \\r\\n  /* Forms\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\\r\\n   * styling of `select`, unless a `border` property is set.\\r\\n   */\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct color not being inherited.\\r\\n   *    Known issue: affects color of disabled elements.\\r\\n   * 2. Correct font properties not being inherited.\\r\\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  input,\\r\\n  optgroup,\\r\\n  select,\\r\\n  textarea {\\r\\n    color: inherit; /* 1 */\\r\\n    font: inherit; /* 2 */\\r\\n    margin: 0; /* 3 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\\r\\n   */\\r\\n  \\r\\n  button {\\r\\n    overflow: visible;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\\r\\n   * All other form control elements do not inherit `text-transform` values.\\r\\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\\r\\n   * Correct `select` style inheritance in Firefox.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  select {\\r\\n    text-transform: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\\r\\n   *    and `video` controls.\\r\\n   * 2. Correct inability to style clickable `input` types in iOS.\\r\\n   * 3. Improve usability and consistency of cursor style between image-type\\r\\n   *    `input` and others.\\r\\n   */\\r\\n  \\r\\n  button,\\r\\n  html input[type=\\\"button\\\"], /* 1 */\\r\\n  input[type=\\\"reset\\\"],\\r\\n  input[type=\\\"submit\\\"] {\\r\\n    -webkit-appearance: button; /* 2 */\\r\\n    cursor: pointer; /* 3 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Re-set default cursor for disabled elements.\\r\\n   */\\r\\n  \\r\\n  button[disabled],\\r\\n  html input[disabled] {\\r\\n    cursor: default;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove inner padding and border in Firefox 4+.\\r\\n   */\\r\\n  \\r\\n  button::-moz-focus-inner,\\r\\n  input::-moz-focus-inner {\\r\\n    border: 0;\\r\\n    padding: 0;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\\r\\n   * the UA stylesheet.\\r\\n   */\\r\\n  \\r\\n  input {\\r\\n    line-height: normal;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * It's recommended that you don't attempt to style these elements.\\r\\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\\r\\n   *\\r\\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\\r\\n   * 2. Remove excess padding in IE 8/9/10.\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"checkbox\\\"],\\r\\n  input[type=\\\"radio\\\"] {\\r\\n    box-sizing: border-box; /* 1 */\\r\\n    padding: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\\r\\n   * `font-size` values of the `input`, it causes the cursor style of the\\r\\n   * decrement button to change from `default` to `text`.\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"number\\\"]::-webkit-inner-spin-button,\\r\\n  input[type=\\\"number\\\"]::-webkit-outer-spin-button {\\r\\n    height: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\\r\\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\\r\\n   *    (include `-moz` to future-proof).\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"search\\\"] {\\r\\n    -webkit-appearance: textfield; /* 1 */\\r\\n    -moz-box-sizing: content-box;\\r\\n    -webkit-box-sizing: content-box; /* 2 */\\r\\n    box-sizing: content-box;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\\r\\n   * Safari (but not Chrome) clips the cancel button when the search input has\\r\\n   * padding (and `textfield` appearance).\\r\\n   */\\r\\n  \\r\\n  input[type=\\\"search\\\"]::-webkit-search-cancel-button,\\r\\n  input[type=\\\"search\\\"]::-webkit-search-decoration {\\r\\n    -webkit-appearance: none;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Define consistent border, margin, and padding.\\r\\n   */\\r\\n  \\r\\n  fieldset {\\r\\n    border: 1px solid #c0c0c0;\\r\\n    margin: 0 2px;\\r\\n    padding: 0.35em 0.625em 0.75em;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\\r\\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\\r\\n   */\\r\\n  \\r\\n  legend {\\r\\n    border: 0; /* 1 */\\r\\n    padding: 0; /* 2 */\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Remove default vertical scrollbar in IE 8/9/10/11.\\r\\n   */\\r\\n  \\r\\n  textarea {\\r\\n    overflow: auto;\\r\\n  }\\r\\n  \\r\\n  /**\\r\\n   * Don't inherit the `font-weight` (applied by a rule above).\\r\\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\\r\\n   */\\r\\n  \\r\\n  optgroup {\\r\\n    font-weight: bold;\\r\\n  }\\r\\n  \\r\\n  /* Tables\\r\\n     ========================================================================== */\\r\\n  \\r\\n  /**\\r\\n   * Remove most spacing between table cells.\\r\\n   */\\r\\n  \\r\\n  table {\\r\\n    border-collapse: collapse;\\r\\n    border-spacing: 0;\\r\\n  }\\r\\n  \\r\\n  td,\\r\\n  th {\\r\\n    padding: 0;\\r\\n  }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Poppins&display=swap);\"]);\n// Module\nexports.push([module.i, \"body {\\r\\n  min-height: 100vh;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  padding: 0 20px;\\r\\n}\\r\\n\\r\\n.top-sect {\\r\\n  display: flex;\\r\\n  background-color: purple;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  padding: 10px;\\r\\n  align-items: center;\\r\\n  border-radius: 20px;\\r\\n  max-width: 1100px;\\r\\n  min-width: 300px;\\r\\n  margin: 40px auto 20px auto;\\r\\n}\\r\\n\\r\\n.top-sect > h3 {\\r\\n  text-align: center;\\r\\n  font-size: 30px;\\r\\n  padding: 10px;\\r\\n  height: 70px;\\r\\n  width: 60%;\\r\\n  color: #fff;\\r\\n  background-color: rebeccapurple;\\r\\n}\\r\\n\\r\\n.blob {\\r\\n  width: 100px;\\r\\n  height: 100px;\\r\\n  background: radial-gradient(ellipse at center, #fea04f 0%, #f99a00 31%, #fe1605 100%);\\r\\n  animation: animate_blob_1 30s cubic-bezier(0.75, 0.82, 0.165, 1) infinite;\\r\\n}\\r\\n\\r\\n.list-item>* {\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  min-width: 300px;\\r\\n  max-width: 900px;\\r\\n  padding: 20px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n::selection {\\r\\n  color: #fff;\\r\\n  background-color: #000;\\r\\n}\\r\\n\\r\\n.mouse-cursor-gradient span {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.mouse-cursor-gradient::before {\\r\\n  --size: 0;\\r\\n  content: '';\\r\\n  position: absolute;\\r\\n  left: var(--x);\\r\\n  top: var(--y);\\r\\n  width: var(--size);\\r\\n  height: var(--size);\\r\\n  background: radial-gradient(circle closest-side, rgb(199, 139, 235), transparent);\\r\\n  transform: translate(-50%, -50%);\\r\\n  transition: width 0.2s ease, height 0.3s ease;\\r\\n}\\r\\n\\r\\n.mouse-cursor-gradient:hover::before {\\r\\n  --size: 200px;\\r\\n}\\r\\n\\r\\n.todo-create {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.mouse-cursor-gradient, input[type=\\\"submit\\\"] {\\r\\n  position: relative;\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  width: 150px;\\r\\n  height: 40px;\\r\\n  border-radius: 15px;\\r\\n  font-size: 1.2em;\\r\\n  color: #fff;\\r\\n  border: 1px solid rgb(241, 57, 72);\\r\\n  box-shadow: 0 2px 0 0 rgba(252, 87, 101, 0.829);\\r\\n  background-color: rgb(241, 36, 53);\\r\\n  cursor: pointer;\\r\\n  color: #fff;\\r\\n  overflow: hidden;\\r\\n  margin: 10px auto;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.add-task {\\r\\n  font-size: 1.4em;\\r\\n  width: 200px;\\r\\n  height: 50px;\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\n.mouse-cursor-gradient:hover, input[type=\\\"submit\\\"]:hover {\\r\\n  box-shadow: none;\\r\\n  border: 2px solid rgb(241, 57, 72);\\r\\n}\\r\\n\\r\\n.radio {\\r\\n  margin-right: 15px;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  --dimen: 30px;\\r\\n  width: var(--dimen);\\r\\n  height: var(--dimen);\\r\\n  position: relative;\\r\\n  z-index: 3;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-flow: column wrap;\\r\\n  max-width: 400px;\\r\\n  height: 630px;\\r\\n  justify-content: space-around;\\r\\n  margin: 20px auto;\\r\\n  background-color: #fff;\\r\\n  border-radius: 15px;\\r\\n  padding: 0;\\r\\n  transform: translateY(-200px);\\r\\n  transition: transform 0.4s;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.form>h1 {\\r\\n  margin: -7px 0 0 0;\\r\\n  border-top-left-radius: 15px;\\r\\n  border-top-right-radius: 15px;\\r\\n  background-color: rgb(241, 36, 53);\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.translate {\\r\\n  transform: translateY(0px);\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  visibility: hidden;\\r\\n  z-index: 5;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.close {\\r\\n  margin: 10px;\\r\\n  cursor: pointer;\\r\\n  font-size: 30px;\\r\\n  font-weight: 800;\\r\\n  color: gray;\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.close:hover, .close:focus {\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.show-form {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.form>div {\\r\\n  margin: 3 20px;\\r\\n}\\r\\n\\r\\n.form input:not(.border) {\\r\\n  display: block;\\r\\n  border-color: none;\\r\\n  outline: none;\\r\\n  border-style: none;\\r\\n  border-bottom: 1px solid gray;\\r\\n}\\r\\n\\r\\n.choose-project {\\r\\n  border: 1px solid rgb(241, 36, 53);\\r\\n  border-radius: 10px;\\r\\n  padding: 10px 5px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 19px;\\r\\n}\\r\\n\\r\\n.list-item {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 2px;\\r\\n  background-color: rgb(241, 36, 53);\\r\\n  border-top: 3px solid #000;\\r\\n  border-bottom: 1px solid #9b0707;\\r\\n  border-radius: 2px;\\r\\n  box-shadow: 0 0 200px rgba(0, 0, 0, .43) inset;\\r\\n  word-spacing: normal;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.list-item-before {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  width: 0;\\r\\n  height: 5px;\\r\\n  transition: width 1s;\\r\\n  border-radius: 20px;\\r\\n  background-color: rgba(241, 15, 109, 0.829);\\r\\n}\\r\\n\\r\\n.task-item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.accordion-list {\\r\\n  perspective: 100vw;\\r\\n  transform-style: preserve-3d;\\r\\n}\\r\\n\\r\\n.project-title {\\r\\n  width: calc(100% + 10px);\\r\\n  margin-left: -5px;\\r\\n  color: rgb(26, 1, 17);\\r\\n  background-color: royalblue;\\r\\n  font-size: 28px;\\r\\n  text-align: center;\\r\\n  height: 50px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.project-toggle {\\r\\n  cursor: pointer;\\r\\n  display: block;\\r\\n  color: royalblue;\\r\\n  float: right;\\r\\n  margin-right: 20px;\\r\\n  margin-top: 4px;\\r\\n  font-size: 38px;\\r\\n  padding: 0px 4px;\\r\\n  height: 80%;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n@keyframes animate_blob_1 {\\r\\n  0% {\\r\\n    border-radius: 51% 49% 19% 81% / 51% 74% 26% 49%;\\r\\n  }\\r\\n  20% {\\r\\n    border-radius: 15% 85% 57% 43% / 69% 48% 52% 31%;\\r\\n  }\\r\\n  40% {\\r\\n    border-radius: 66% 34% 44% 56% / 33% 19% 81% 67%;\\r\\n  }\\r\\n  60% {\\r\\n    border-radius: 23% 77% 67% 33% / 11% 77% 23% 89%;\\r\\n  }\\r\\n  80% {\\r\\n    border-radius: 48% 52% 76% 24% / 46% 13% 87% 54%;\\r\\n  }\\r\\n  100% {\\r\\n    border-radius: 51% 49% 19% 81% / 51% 74% 26% 49%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.change {\\r\\n  transform: rotateX(-40deg) rotateY(0deg) rotate(0deg);\\r\\n  transform-origin: center center;\\r\\n  transition: all 0.7s ease-in-out;\\r\\n  background-color: rgba(252, 87, 101, 0.29);\\r\\n  border-top: 3px solid green;\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.change:hover {\\r\\n  transform: rotateX(0deg) rotateY(0deg) rotate(0deg);\\r\\n}\\r\\n\\r\\n.icon, .del-icon {\\r\\n  margin-right: 15px;\\r\\n  width: 35px;\\r\\n  height: 45px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.del-icon {\\r\\n  width: 37px;\\r\\n  height: 43px;\\r\\n}\\r\\n\\r\\n.priority  {\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\n.date-wrap {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.date-wrap > p {\\r\\n  flex-grow: 2;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Normalize.css":
/*!***************************!*\
  !*** ./src/Normalize.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./Normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Normalize.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/Normalize.css?");

/***/ }),

/***/ "./src/animate-dom.js":
/*!****************************!*\
  !*** ./src/animate-dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createButGradient = () => {\n  const btn = document.querySelector('.mouse-cursor-gradient');\n  btn.onmousemove = (e) => {\n    const x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft;\n    const y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop;\n    btn.style.setProperty('--x', `${x}px`);\n    btn.style.setProperty('--y', `${y}px`);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createButGradient);\n\n//# sourceURL=webpack:///./src/animate-dom.js?");

/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"174d0d2500042561d3ff3c8e85eaf573.png\");\n\n//# sourceURL=webpack:///./src/assets/delete.png?");

/***/ }),

/***/ "./src/assets/edit.png":
/*!*****************************!*\
  !*** ./src/assets/edit.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"56741c113bc20a0d64d63096bf871279.png\");\n\n//# sourceURL=webpack:///./src/assets/edit.png?");

/***/ }),

/***/ "./src/assets/high.png":
/*!*****************************!*\
  !*** ./src/assets/high.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"1c181b049dc96a229b622b7724336310.png\");\n\n//# sourceURL=webpack:///./src/assets/high.png?");

/***/ }),

/***/ "./src/assets/low.png":
/*!****************************!*\
  !*** ./src/assets/low.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"330d7dc4553e6126de720ea080ac80f1.png\");\n\n//# sourceURL=webpack:///./src/assets/low.png?");

/***/ }),

/***/ "./src/assets/medium.png":
/*!*******************************!*\
  !*** ./src/assets/medium.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ba4cc0ad736b2684bb217ba9a63ba931.png\");\n\n//# sourceURL=webpack:///./src/assets/medium.png?");

/***/ }),

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/*! exports provided: addItems, collector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addItems\", function() { return addItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collector\", function() { return collector; });\nconst collector = [];\n\nconst addItems = ({\n  project,\n  title,\n  description,\n  date,\n  time,\n  priority,\n  note,\n}) => {\n  collector.push({\n    project,\n    title,\n    description,\n    date,\n    time,\n    priority,\n    note,\n    completed: false,\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/container.js?");

/***/ }),

/***/ "./src/del-task.js":
/*!*************************!*\
  !*** ./src/del-task.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\nconst delTask = index => {\n  let tasks = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"retrieveTasks\"])();\n  tasks = tasks.filter((e, ind) => ind !== index);\n  localStorage.removeItem('taskList');\n  if (tasks.length > 0) {\n    localStorage.setItem('taskList', JSON.stringify(tasks));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (delTask);\n\n\n//# sourceURL=webpack:///./src/del-task.js?");

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/*! exports provided: appendStorage, appendProjects, completeTask, showTaskForm, toggleProjectTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendStorage\", function() { return appendStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendProjects\", function() { return appendProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"completeTask\", function() { return completeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showTaskForm\", function() { return showTaskForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleProjectTasks\", function() { return toggleProjectTasks; });\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ \"./src/container.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _edit_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-task */ \"./src/edit-task.js\");\n/* harmony import */ var _del_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./del-task */ \"./src/del-task.js\");\n/* harmony import */ var _assets_edit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/edit.png */ \"./src/assets/edit.png\");\n/* harmony import */ var _assets_high_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/high.png */ \"./src/assets/high.png\");\n/* harmony import */ var _assets_medium_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/medium.png */ \"./src/assets/medium.png\");\n/* harmony import */ var _assets_low_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/low.png */ \"./src/assets/low.png\");\n/* harmony import */ var _assets_delete_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/delete.png */ \"./src/assets/delete.png\");\n\n\n\n\n\n\n\n\n\n\nconst form = document.querySelector('.form');\nconst modal = document.querySelector('.modal');\nconst showTaskForm = () => {\n  const showBut = document.querySelector('.add-task');\n\n  showBut.onclick = () => {\n    modal.style.visibility = 'visible';\n    form.classList.add('translate');\n    form.elements[10].value = 'Add Todo';\n    form.firstElementChild.textContent = 'Create Task';\n  };\n\n  document.querySelector('.close').onclick = () => {\n    modal.style.visibility = 'hidden';\n    form.classList.remove('translate');\n  };\n  window.onclick = e => {\n    if (e.target === modal) {\n      modal.style.visibility = 'hidden';\n      form.classList.remove('translate');\n    }\n  };\n};\n\nconst completedState = (parent, line) => {\n  line.style.width = '100%';\n  parent.classList.add('change');\n};\n\nconst uncompletedState = (parent, line) => {\n  line.style.width = '0';\n  parent.classList.remove('change');\n};\n\nconst projects = [];\nconst appendProjects = () => {\n  const select = document.querySelector('#project');\n  if (Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"retrieveTasks\"])()) {\n    Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"retrieveTasks\"])().forEach(task => {\n      const proj = task.project;\n      if (!projects.includes(proj)) {\n        projects.push(proj);\n        const uniqProj = projects[projects.length - 1];\n        select.innerHTML += `<option value='${uniqProj}'>${uniqProj}</option>`;\n      }\n    });\n  } else {\n    const proj = projects[projects.length - 1];\n    if (proj) {\n      select.innerHTML += `<option value='${proj}'>${proj}</option>`;\n    }\n  }\n};\n\nconst checkPriority = status => {\n  let priority;\n  if (status === 'urgent') {\n    priority = _assets_high_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n  } else if (status === 'important') {\n    priority = _assets_medium_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n  } else {\n    priority = _assets_low_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n  }\n  return priority;\n};\n\n\nconst appendTask = (elem, ind) => {\n  const createElem = ele => document.createElement(ele);\n  const parent = document.querySelector('.task-list');\n\n  const newElem = createElem('div');\n  newElem.classList.add('list-item');\n  newElem.dataset.index = ind;\n  const priority = checkPriority(elem.priority);\n  newElem.innerHTML = `\n  <span class=\"list-item-before\" data-check=${ind}></span>\n  <div class=\"task-item\">\n      <div>\n      <img src=${priority} alt=\"priority\" class=\"priority\"/>\n      </div>\n      <input type=\"checkbox\" data-check=${ind}>\n      <h2>${elem.title}</h2>\n  </div>\n  <div class=\"date-wrap\">\n  <p>Due: <span>${elem.date}</span>|<span>${elem.time}</span></p>\n  <img src=${_assets_edit_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]} alt=\"edit\" class=\"icon icon-${ind}\"/>\n  <img src=${_assets_delete_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]} alt=\"delete\" class=\"del-icon del-icon-${ind}\"/>\n  </div>\n  </div>\n  `;\n\n  const createAccordion = () => {\n    const accordionList = createElem('div');\n    accordionList.classList.add('accordion-list');\n    accordionList.dataset.project = `${elem.project}`;\n    const projectTitle = createElem('p');\n    projectTitle.classList.add('project-title');\n    projectTitle.innerHTML = `${elem.project} <span class=\"project-toggle\">&plus;</span>`;\n    parent.appendChild(accordionList);\n    accordionList.append(projectTitle, newElem);\n  };\n\n  const accordion = [...document.querySelectorAll('.accordion-list')];\n  const accordionArray = accordion.map(e => e.dataset.project);\n\n  if (accordion.length > 0) {\n    let bool;\n    let index;\n    const accordSet = [...new Set(accordionArray)];\n    accordSet.map((ele, i) => {\n      if (elem.project === ele) {\n        index = i;\n        bool = true;\n      }\n      return ele;\n    });\n\n    if (bool) {\n      accordion[index].appendChild(newElem);\n    } else {\n      createAccordion();\n    }\n  } else {\n    createAccordion();\n  }\n\n  if (elem.completed) {\n    completedState(\n      newElem,\n      document.querySelector(`span[data-check=\"${ind}\"]`),\n    );\n    const checkBoxes = document.querySelectorAll(\"input[type='checkbox']\");\n    checkBoxes.forEach(e => {\n      if (e.dataset.check === ind.toString()) {\n        e.checked = true;\n      }\n    });\n  }\n\n  document.querySelector(`.icon-${ind}`).onclick = () => {\n    modal.style.visibility = 'visible';\n    form.classList.add('translate');\n    Object(_edit_task__WEBPACK_IMPORTED_MODULE_2__[\"editTaskForm\"])(ind);\n  };\n\n  document.querySelector(`.del-icon-${ind}`).onclick = () => {\n    Object(_del_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ind);\n    window.location.reload();\n  };\n};\n\nconst appendStorage = () => {\n  if (Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"retrieveTasks\"])()) {\n    Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"retrieveTasks\"])().forEach((elem, ind) => appendTask(elem, ind));\n  }\n};\n\nconst displayTasks = () => {\n  const items = Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"retrieveTasks\"])();\n  const task = items[items.length - 1];\n  appendTask(task, items.length - 1);\n};\n\nconst appendEditTask = index => {\n  const task = Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"retrieveTasks\"])()[index];\n  const formElems = form.elements;\n  const project = formElems.newProj.value.length < 1\n    ? formElems.project.value\n    : formElems.newProj.value;\n  let status;\n  formElems.priority.forEach(e => {\n    if (e.checked) {\n      status = e.id;\n    }\n  });\n\n  const title = formElems.title.value;\n  const dueDate = formElems.dueDate.value;\n  const dueTime = formElems.dueTime.value;\n  task.project = project;\n  task.title = title;\n  task.description = formElems.description.value;\n  task.date = dueDate;\n  task.time = dueTime;\n  task.priority = status;\n  task.note = formElems.notes.value;\n\n  Object(_edit_task__WEBPACK_IMPORTED_MODULE_2__[\"editStorage\"])(index, task);\n\n  Array.from(formElems).forEach(e => {\n    if (e.value) {\n      e.value = '';\n    }\n    return e;\n  });\n\n  document.querySelector('.modal').style.visibility = 'hidden';\n  form.classList.remove('translate');\n\n  const list = document.querySelectorAll('.list-item');\n  list.forEach(e => {\n    if (e.dataset.index === index.toString()) {\n      const listChildren = e.children;\n      const parentFirstchild = listChildren[1];\n      const parentSecondchild = listChildren[2];\n      parentFirstchild.children[0].lastElementChild.src = checkPriority(status);\n      parentFirstchild.lastElementChild.textContent = title;\n      parentSecondchild.innerHTML = `\n      <p>Due: <span>${dueDate}</span>|<span>${dueTime}</span></p>\n      <img src=${_assets_edit_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]} alt=\"edit\" class=\"icon\"/>\n      <img src=${_assets_delete_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]} alt=\"delete\" class=\"del-icon\"/>\n      `;\n\n      const icons = [...document.querySelectorAll('.icon')];\n      const icon = icons[index];\n\n      icon.onclick = () => {\n        modal.style.visibility = 'visible';\n        form.classList.add('translate');\n        Object(_edit_task__WEBPACK_IMPORTED_MODULE_2__[\"editTaskForm\"])(index);\n      };\n\n      const delIcons = [...document.querySelectorAll('.del-icon')];\n      const delIcon = delIcons[index];\n\n      delIcon.onclick = () => {\n        Object(_del_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index);\n        window.location.reload();\n      };\n    }\n  });\n  window.location.reload();\n};\n\nform.addEventListener('submit', e => {\n  const formSubmit = e.target.elements[10];\n  e.preventDefault();\n  if (formSubmit.value === 'Edit Item') {\n    const submitInd = formSubmit.dataset.index;\n    return appendEditTask(submitInd);\n  }\n  const formElems = form.elements;\n  let status;\n  formElems.priority.forEach(e => {\n    if (e.checked) {\n      status = e.id;\n    }\n  });\n  const newProj = formElems.newProj.value;\n  const project = formElems.newProj.value.length < 1 ? formElems.project.value : newProj;\n  const formTitle = formElems.title.value;\n  const formDesc = formElems.description.value;\n  const dueDate = formElems.dueDate.value;\n  const dueTime = formElems.dueTime.value;\n  const notes = formElems.notes.value;\n  Object(_container__WEBPACK_IMPORTED_MODULE_0__[\"addItems\"])({\n    project,\n    title: formTitle,\n    description: formDesc,\n    date: dueDate,\n    time: dueTime,\n    priority: status,\n    note: notes,\n  });\n  Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"saveTask\"])(_container__WEBPACK_IMPORTED_MODULE_0__[\"collector\"][_container__WEBPACK_IMPORTED_MODULE_0__[\"collector\"].length - 1]);\n\n  appendProjects();\n  displayTasks();\n\n  formElems.newProj.value = '';\n  formElems.title.value = '';\n  formElems.description.value = '';\n  formElems.dueDate.value = '';\n  formElems.dueTime.value = '';\n  formElems.notes.value = '';\n\n  modal.style.visibility = 'hidden';\n  return form.classList.remove('translate');\n});\n\nconst toggleLocalStore = (ind, state) => {\n  const newTaskList = [];\n  const tasks = Object(_storage__WEBPACK_IMPORTED_MODULE_1__[\"retrieveTasks\"])();\n  tasks.forEach((item, taskInd) => {\n    if (+ind === taskInd) {\n      item.completed = state;\n    }\n    newTaskList.push(item);\n  });\n  localStorage.setItem('taskList', JSON.stringify(newTaskList));\n};\n\nconst completeTask = () => {\n  const checkboxes = document.querySelectorAll(\"input[type='checkbox']\");\n  checkboxes.forEach(box => {\n    box.onclick = e => {\n      const parent = box.parentNode;\n      const ind = e.target.dataset.check;\n\n      const lineCancel = document.querySelector(`span[data-check=\"${ind}\"]`);\n\n      if (e.target.checked === true) {\n        completedState(parent.parentNode, lineCancel);\n        toggleLocalStore(ind, true);\n      } else {\n        uncompletedState(parent.parentNode, lineCancel);\n        toggleLocalStore(ind, false);\n      }\n    };\n  });\n};\n\n\nconst toggleProjectTasks = () => {\n  const toggleTasks = (e) => {\n    const parent = e.target.parentNode.parentNode;\n    const children = parent.querySelectorAll('.list-item');\n    children.forEach(elem => {\n      if (elem.style.display === 'none') { elem.style.display = 'flex'; } else { elem.style.display = 'none'; }\n    });\n  };\n  const pointers = document.querySelectorAll('.project-toggle');\n  pointers.forEach(elem => elem.addEventListener('click', toggleTasks));\n};\n\n\n\n//# sourceURL=webpack:///./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/edit-task.js":
/*!**************************!*\
  !*** ./src/edit-task.js ***!
  \**************************/
/*! exports provided: editTaskForm, editStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTaskForm\", function() { return editTaskForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editStorage\", function() { return editStorage; });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\nconst editTaskForm = (ind) => {\n  const form = document.querySelector('.form');\n  const formElems = form.elements;\n  const task = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"retrieveTasks\"])()[ind];\n  formElems.newProj.value = task.project;\n  formElems.title.value = task.title;\n  formElems.description.value = task.description;\n  formElems.dueDate.value = task.date;\n  formElems.dueTime.value = task.time;\n  formElems.priority.forEach(e => {\n    if (e.id === task.priority) {\n      e.checked = true;\n    }\n  });\n  formElems.notes.value = task.note;\n  formElems[10].value = 'Edit Item';\n  formElems[10].dataset.index = ind;\n  form.firstElementChild.textContent = 'Edit Task';\n};\n\nconst editStorage = (ind, task) => {\n  const obj = Object(_storage__WEBPACK_IMPORTED_MODULE_0__[\"retrieveTasks\"])();\n  obj[ind] = task;\n  localStorage.setItem('taskList', JSON.stringify(obj));\n};\n\n\n\n\n//# sourceURL=webpack:///./src/edit-task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Normalize.css */ \"./src/Normalize.css\");\n/* harmony import */ var _Normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animate_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animate-dom */ \"./src/animate-dom.js\");\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n\n\n\n\n\nObject(_animate_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_dom_manipulation__WEBPACK_IMPORTED_MODULE_3__[\"appendStorage\"])();\nObject(_dom_manipulation__WEBPACK_IMPORTED_MODULE_3__[\"appendProjects\"])(true);\nObject(_dom_manipulation__WEBPACK_IMPORTED_MODULE_3__[\"completeTask\"])();\nObject(_dom_manipulation__WEBPACK_IMPORTED_MODULE_3__[\"showTaskForm\"])();\nObject(_dom_manipulation__WEBPACK_IMPORTED_MODULE_3__[\"toggleProjectTasks\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: saveTask, retrieveTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveTask\", function() { return saveTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retrieveTasks\", function() { return retrieveTasks; });\nconst storageAvailable = (type) => {\n  let storage;\n  try {\n    storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException\n      // everything except Firefox\n      && (e.code === 22\n        // Firefox\n        || e.code === 1014\n        // test name field too, because code might not be present\n        // everything except Firefox\n        || e.name === 'QuotaExceededError'\n        // Firefox\n        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')\n      // acknowledge QuotaExceededError only if there's something already stored\n      && storage\n      && storage.length !== 0\n    );\n  }\n};\n\nconst saveTask = (task) => {\n  if (storageAvailable('localStorage')) {\n    const taskObjs = [];\n    if (localStorage.getItem('taskList')) {\n      const storedTask = JSON.parse(localStorage.getItem('taskList'));\n      storedTask.push(task);\n      localStorage.setItem('taskList', JSON.stringify(storedTask));\n    } else {\n      taskObjs.push(task);\n      localStorage.setItem('taskList', JSON.stringify(taskObjs));\n    }\n  }\n};\n\nconst retrieveTasks = () => {\n  if (storageAvailable('localStorage') && localStorage.getItem('taskList')) {\n    const savedTasks = JSON.parse(localStorage.getItem('taskList'));\n    return savedTasks;\n  }\n  return false;\n};\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });