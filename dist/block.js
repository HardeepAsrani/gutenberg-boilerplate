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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_js__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__sidebar_js__);\n// Include stylesheet\n\n\n// Import Gutenberg Boilerplate Block\n\n\n// Import Gutenberg Boilerplate Sidebar\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz84NzQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgc3R5bGVzaGVldFxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG4vLyBJbXBvcnQgR3V0ZW5iZXJnIEJvaWxlcnBsYXRlIEJsb2NrXG5pbXBvcnQgJy4vYmxvY2suanMnO1xuXG4vLyBJbXBvcnQgR3V0ZW5iZXJnIEJvaWxlcnBsYXRlIFNpZGViYXJcbmltcG9ydCAnLi9zaWRlYmFyLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzP2FjZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n/**\n * Register block\n */\n\n/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('gutenberg-boilerplate/block', {\n\t// Block Title\n\ttitle: __('Gutenberg Boilerplate'),\n\t// Block Description\n\tdescription: __('An example block.'),\n\t// Block Category\n\tcategory: 'common',\n\t// Block Icon\n\ticon: 'admin-site',\n\t// Block Keywords\n\tkeywords: [__('Boilerplate'), __('Hello World'), __('Example')],\n\tattributes: {},\n\t// Defining the edit interface\n\tedit: function edit(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'h2',\n\t\t\tnull,\n\t\t\t__('Hello Backend')\n\t\t);\n\t},\n\t// Defining the front-end interface\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'h2',\n\t\t\tnull,\n\t\t\t__('Hello Frontend')\n\t\t);\n\t}\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay5qcz8zNTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cbi8qKlxuICogUmVnaXN0ZXIgYmxvY2tcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlckJsb2NrVHlwZSgnZ3V0ZW5iZXJnLWJvaWxlcnBsYXRlL2Jsb2NrJywge1xuXHQvLyBCbG9jayBUaXRsZVxuXHR0aXRsZTogX18oJ0d1dGVuYmVyZyBCb2lsZXJwbGF0ZScpLFxuXHQvLyBCbG9jayBEZXNjcmlwdGlvblxuXHRkZXNjcmlwdGlvbjogX18oJ0FuIGV4YW1wbGUgYmxvY2suJyksXG5cdC8vIEJsb2NrIENhdGVnb3J5XG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0Ly8gQmxvY2sgSWNvblxuXHRpY29uOiAnYWRtaW4tc2l0ZScsXG5cdC8vIEJsb2NrIEtleXdvcmRzXG5cdGtleXdvcmRzOiBbX18oJ0JvaWxlcnBsYXRlJyksIF9fKCdIZWxsbyBXb3JsZCcpLCBfXygnRXhhbXBsZScpXSxcblx0YXR0cmlidXRlczoge30sXG5cdC8vIERlZmluaW5nIHRoZSBlZGl0IGludGVyZmFjZVxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdoMicsXG5cdFx0XHRudWxsLFxuXHRcdFx0X18oJ0hlbGxvIEJhY2tlbmQnKVxuXHRcdCk7XG5cdH0sXG5cdC8vIERlZmluaW5nIHRoZSBmcm9udC1lbmQgaW50ZXJmYWNlXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2gyJyxcblx0XHRcdG51bGwsXG5cdFx0XHRfXygnSGVsbG8gRnJvbnRlbmQnKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$editPost = wp.editPost,\n    PluginSidebar = _wp$editPost.PluginSidebar,\n    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;\nvar registerPlugin = wp.plugins.registerPlugin;\n\n\nvar Component = function Component() {\n\treturn wp.element.createElement(\n\t\tFragment,\n\t\tnull,\n\t\twp.element.createElement(\n\t\t\tPluginSidebarMoreMenuItem,\n\t\t\t{\n\t\t\t\ttarget: \"gutenberg-boilerplate-sidebar\"\n\t\t\t},\n\t\t\t__('Gutenberg Boilerplate')\n\t\t),\n\t\twp.element.createElement(\n\t\t\tPluginSidebar,\n\t\t\t{\n\t\t\t\tname: \"gutenberg-boilerplate-sidebar\",\n\t\t\t\ttitle: __('Gutenberg Boilerplate')\n\t\t\t},\n\t\t\twp.element.createElement(\n\t\t\t\t\"h2\",\n\t\t\t\tnull,\n\t\t\t\t__('Hello World!')\n\t\t\t)\n\t\t)\n\t);\n};\n\nregisterPlugin('gutenberg-boilerplate', {\n\ticon: 'admin-site',\n\trender: Component\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaWRlYmFyLmpzPzI1ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiAqL1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX3dwJGVkaXRQb3N0ID0gd3AuZWRpdFBvc3QsXG4gICAgUGx1Z2luU2lkZWJhciA9IF93cCRlZGl0UG9zdC5QbHVnaW5TaWRlYmFyLFxuICAgIFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0gPSBfd3AkZWRpdFBvc3QuUGx1Z2luU2lkZWJhck1vcmVNZW51SXRlbTtcbnZhciByZWdpc3RlclBsdWdpbiA9IHdwLnBsdWdpbnMucmVnaXN0ZXJQbHVnaW47XG5cblxudmFyIENvbXBvbmVudCA9IGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcblx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRGcmFnbWVudCxcblx0XHRudWxsLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFBsdWdpblNpZGViYXJNb3JlTWVudUl0ZW0sXG5cdFx0XHR7XG5cdFx0XHRcdHRhcmdldDogXCJndXRlbmJlcmctYm9pbGVycGxhdGUtc2lkZWJhclwiXG5cdFx0XHR9LFxuXHRcdFx0X18oJ0d1dGVuYmVyZyBCb2lsZXJwbGF0ZScpXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRQbHVnaW5TaWRlYmFyLFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiBcImd1dGVuYmVyZy1ib2lsZXJwbGF0ZS1zaWRlYmFyXCIsXG5cdFx0XHRcdHRpdGxlOiBfXygnR3V0ZW5iZXJnIEJvaWxlcnBsYXRlJylcblx0XHRcdH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiaDJcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0X18oJ0hlbGxvIFdvcmxkIScpXG5cdFx0XHQpXG5cdFx0KVxuXHQpO1xufTtcblxucmVnaXN0ZXJQbHVnaW4oJ2d1dGVuYmVyZy1ib2lsZXJwbGF0ZScsIHtcblx0aWNvbjogJ2FkbWluLXNpdGUnLFxuXHRyZW5kZXI6IENvbXBvbmVudFxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2lkZWJhci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);