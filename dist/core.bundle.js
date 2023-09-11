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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/script */ \"./js/modules/script.js\");\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ \"./js/modules/animation.js\");\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_animation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_custom_gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/custom-gsap */ \"./js/modules/custom-gsap.js\");\n/* harmony import */ var _modules_custom_gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_custom_gsap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_custom_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/custom-slick */ \"./js/modules/custom-slick.js\");\n/* harmony import */ var _modules_custom_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_custom_slick__WEBPACK_IMPORTED_MODULE_3__);\n// import './isInViewport';\n\n\n\n\n\n\n//# sourceURL=webpack://amar-transport-html/./js/index.js?");

/***/ }),

/***/ "./js/modules/animation.js":
/*!*********************************!*\
  !*** ./js/modules/animation.js ***!
  \*********************************/
/***/ (() => {

eval("// import isInViewport from 'is-in-viewport';\nvar $animation_elements = jQuery('[data-animation]');\nvar $window = jQuery(window);\nfunction check_if_in_view() {\n  $animation_elements.each(function () {\n    const $self = jQuery(this);\n    const animation = $self.data('animation');\n    const animateType = $self.data('animate');\n    const delay = Number($self.data('animation-delay') || 0);\n    const timeline = $self[0].tl;\n    const counter = $self[0].counter;\n    if ($self.is(':in-viewport')) {\n      setTimeout(() => {\n        if (animateType) _.animateRun($self, animateType);else $self.addClass('visible ' + animation);\n        if (timeline) {\n          timeline.play();\n        }\n      }, delay);\n    } else {\n      if (timeline && timeline.progress() > 0) {\n        timeline.progress(0);\n      }\n      if (counter) {\n        counter.reset();\n      }\n    }\n  });\n}\n$window.on('scroll resize load', check_if_in_view);\n$window.trigger('scroll resize load', check_if_in_view);\n\n//# sourceURL=webpack://amar-transport-html/./js/modules/animation.js?");

/***/ }),

/***/ "./js/modules/custom-gsap.js":
/*!***********************************!*\
  !*** ./js/modules/custom-gsap.js ***!
  \***********************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {});\n\n//# sourceURL=webpack://amar-transport-html/./js/modules/custom-gsap.js?");

/***/ }),

/***/ "./js/modules/custom-slick.js":
/*!************************************!*\
  !*** ./js/modules/custom-slick.js ***!
  \************************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {\n  if ($(window).width() <= 1023) {\n    $(\".short-intro-row\").slick({\n      slideToShow: 1,\n      slideToScroll: 1,\n      variableWidth: true,\n      dots: true,\n      arrows: false\n    });\n  }\n});\n\n//# sourceURL=webpack://amar-transport-html/./js/modules/custom-slick.js?");

/***/ }),

/***/ "./js/modules/script.js":
/*!******************************!*\
  !*** ./js/modules/script.js ***!
  \******************************/
/***/ (() => {

eval("jQuery(document).ready(function ($) {\n  let lastScrollTop = 0;\n  $(window).on(\"scroll load\", function () {\n    let scroll = $(this).scrollTop();\n    scroll > lastScrollTop ? $(\"#header\").addClass(\"scroll-nav-down\").removeClass(\"scroll-nav-up\") : $(\"#header\").addClass(\"scroll-nav-up\").removeClass(\"scroll-nav-down\");\n    lastScrollTop = scroll;\n  });\n});\n\n//# sourceURL=webpack://amar-transport-html/./js/modules/script.js?");

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