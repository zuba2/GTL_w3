module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/bayata/Desktop/GTL-PROGRAMM/week-3-react/src/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Header = () => {\n  return __jsx(\"header\", {\n    className: \"header\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, \"Mavel's Fearless\"), __jsx(\"p\", {\n    className: \"subtitle\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae molestias earum eveniet.\")), __jsx(\"div\", {\n    className: \"search-bar\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"search\",\n    placeholder: \"Search\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/YWQ4ZSJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsU0FDRTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdHQUZGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLGVBQVcsRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FSRixDQURGO0FBY0QsQ0FmRDs7QUFpQmVBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+TWF2ZWwncyBGZWFybGVzczwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gYmVhdGFlXG4gICAgICAgICAgbW9sZXN0aWFzIGVhcnVtIGV2ZW5pZXQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYmFyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIi8+XG4gICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _Photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Photo */ \"./src/components/Photo.js\");\nvar _jsxFileName = \"/home/bayata/Desktop/GTL-PROGRAMM/week-3-react/src/components/Layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Layout = props => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 10\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, props.title), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/global.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/layout.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/components.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"css/sample-wallpaper.css\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  })), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }), __jsx(_Photo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanM/ZWU4OCJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBSUMsS0FBRCxJQUFXO0FBQ3hCLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBSyxDQUFDQyxLQUFkLENBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxnQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsZ0JBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLG9CQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQywwQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREssRUFRTCxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSyxFQVNMLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRLLEVBVUwsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkssQ0FBUDtBQVlELENBYkQ7O0FBZWVGLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgUGhvdG8gZnJvbSBcIi4vUGhvdG9cIjtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybig8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvZ2xvYmFsLmNzc1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2xheW91dC5jc3NcIi8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9jb21wb25lbnRzLmNzc1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL3NhbXBsZS13YWxscGFwZXIuY3NzXCIvPlxuICAgIDwvSGVhZD5cbiAgICA8TmF2YmFyLz5cbiAgICA8SGVhZGVyLz5cbiAgICA8UGhvdG8vPlxuICA8L2Rpdj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bayata/Desktop/GTL-PROGRAMM/week-3-react/src/components/Navbar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Navbar = () => {\n  return __jsx(\"nav\", {\n    className: \"navbar\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }\n  }, \"Hulk\"), __jsx(\"a\", {\n    href: \"#\",\n    className: \"logo is-active\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"Mavel\"), __jsx(\"a\", {\n    href: \"#\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Venom\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanM/NTM5YiJdLCJuYW1lcyI6WyJOYXZiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixTQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBR0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxnQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLEVBSUU7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsQ0FEQSxDQURGO0FBVUQsQ0FYRDs7QUFhZUEscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIHJldHVybihcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8YSBocmVmPVwiI1wiPkh1bGs8L2E+XG4gICAgICB7LyogPCEtLSBDdXJyZW50bHkgQWN0aXZlIC0tPiAqL31cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibG9nbyBpcy1hY3RpdmVcIj5NYXZlbDwvYT5cbiAgICAgIDxhIGhyZWY9XCIjXCI+VmVub208L2E+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n");

/***/ }),

/***/ "./src/components/Photo.js":
/*!*********************************!*\
  !*** ./src/components/Photo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/bayata/Desktop/GTL-PROGRAMM/week-3-react/src/components/Photo.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Photo = () => {\n  return (// <!-- Sample Wallpaper -->\n    __jsx(\"div\", {\n      className: \"sample-wallpaper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 4,\n        columnNumber: 5\n      }\n    }, __jsx(\"article\", {\n      className: \"wallpaper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      src: \"./img/venom-1.jpg\",\n      alt: \"Wallpaper #1\",\n      class: \"wallpaper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }\n    })), __jsx(\"article\", {\n      className: \"wallpaper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      src: \"./img/hulk-1.jpg\",\n      alt: \"Wallpaper #1\",\n      class: \"wallpaper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }\n    })), __jsx(\"article\", {\n      className: \"wallpaper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      src: \"./img/venom-2.jpg\",\n      alt: \"Wallpaper #1\",\n      class: \"wallpaper\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }\n    })))\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Photo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaG90by5qcz9jY2FjIl0sIm5hbWVzIjpbIlBob3RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsU0FDRTtBQUNBO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRTtBQUFTLGVBQVMsRUFBQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBRyxFQUFDLGNBQWpDO0FBQWdELFdBQUssRUFBQyxXQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FGRixFQU9FO0FBQVMsZUFBUyxFQUFDLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBQyxrQkFBVDtBQUE0QixTQUFHLEVBQUMsY0FBaEM7QUFBK0MsV0FBSyxFQUFDLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQVBGLEVBWUU7QUFBUyxlQUFTLEVBQUMsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUcsRUFBQyxjQUFqQztBQUFnRCxXQUFLLEVBQUMsV0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBWkY7QUFGRjtBQW1CRCxDQXBCRDs7QUFzQmVBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGhvdG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQaG90byA9ICgpID0+IHtcbiAgcmV0dXJuKFxuICAgIC8vIDwhLS0gU2FtcGxlIFdhbGxwYXBlciAtLT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbXBsZS13YWxscGFwZXJcIj5cbiAgICAgIHsvKiA8IS0tIFdhbGxwYXBlciAjMSAtLT4gKi99XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy92ZW5vbS0xLmpwZ1wiIGFsdD1cIldhbGxwYXBlciAjMVwiIGNsYXNzPVwid2FsbHBhcGVyXCIgLz5cbiAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgey8qIDwhLS0gV2FsbHBhcGVyICMyIC0tPiAqL31cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIndhbGxwYXBlclwiPlxuICAgICAgICA8aW1nIHNyYz1cIi4vaW1nL2h1bGstMS5qcGdcIiBhbHQ9XCJXYWxscGFwZXIgIzFcIiBjbGFzcz1cIndhbGxwYXBlclwiIC8+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICAgIHsvKiA8IS0tIFdhbGxwYXBlciAjMyAtLT4gKi99XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3YWxscGFwZXJcIj5cbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy92ZW5vbS0yLmpwZ1wiIGFsdD1cIldhbGxwYXBlciAjMVwiIGNsYXNzPVwid2FsbHBhcGVyXCIgLz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhvdG87Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Photo.js\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.js\");\nvar _jsxFileName = \"/home/bayata/Desktop/GTL-PROGRAMM/week-3-react/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Home = () => {\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Week #3\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakIsU0FBTyxNQUFDLDBEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBR0QsQ0FKRDs7QUFPZUEsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4oPExheW91dCB0aXRsZT1cIldlZWsgIzNcIj5cblxuICA8L0xheW91dD4pO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });