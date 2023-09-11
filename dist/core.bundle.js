/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/script */ \"./js/modules/script.js\");\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_custom_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/custom-animation */ \"./js/modules/custom-animation.js\");\n/* harmony import */ var _modules_custom_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_custom_animation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_custom_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/custom-gsap */ \"./js/modules/custom-gsap.js\");\n/* harmony import */ var _modules_custom_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_custom_gsap__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://amar-transport-html/./js/index.js?");

/***/ }),

/***/ "./js/modules/custom-animation.js":
/*!****************************************!*\
  !*** ./js/modules/custom-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var isInViewport = __webpack_require__(/*! ../../node_modules/isinviewport/isInViewport */ \"./node_modules/isinviewport/isInViewport.js\");\nwindow.onscroll = function () {\n  isInViewport.inView(document.querySelectorAll('.banner-section'), function (el) {\n    $(el).addClass('zoomIn');\n  });\n};\n\n//# sourceURL=webpack://amar-transport-html/./js/modules/custom-animation.js?");

/***/ }),

/***/ "./js/modules/custom-gsap.js":
/*!***********************************!*\
  !*** ./js/modules/custom-gsap.js ***!
  \***********************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {});\n\n//# sourceURL=webpack://amar-transport-html/./js/modules/custom-gsap.js?");

/***/ }),

/***/ "./js/modules/script.js":
/*!******************************!*\
  !*** ./js/modules/script.js ***!
  \******************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {\n  let lastScrollTop = 0;\n  $(window).on(\"scroll load\", function () {\n    let scroll = $(this).scrollTop();\n    scroll > lastScrollTop ? $(\"#header\").addClass(\"scroll-nav-down\").removeClass(\"scroll-nav-up\") : $(\"#header\").addClass(\"scroll-nav-up\").removeClass(\"scroll-nav-down\");\n    lastScrollTop = scroll;\n  });\n});\n\n//# sourceURL=webpack://amar-transport-html/./js/modules/script.js?");

/***/ }),

/***/ "./node_modules/isinviewport/isInViewport.js":
/*!***************************************************!*\
  !*** ./node_modules/isinviewport/isInViewport.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n\nfunction isInViewport() {\n\n  function __inView(el) {\n    var bounds = el.getBoundingClientRect();\n    return bounds.top < window.innerHeight && bounds.bottom > 0;\n  }\n\n  var self = {\n    inView: function(el, cb) {\n      for (var i=0; i<el.length; i++) {\n        if (__inView(el[i])) {\n          return cb(el);\n        }\n      }\n    },\n    isInView: function(el) {\n      for (var i=0; i<el.length; i++) {\n        return __inView(el[i]);\n      };\n\n    },\n  };\n  return self;\n}\n\nmodule.exports = isInViewport();\n\n\n//# sourceURL=webpack://amar-transport-html/./node_modules/isinviewport/isInViewport.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;