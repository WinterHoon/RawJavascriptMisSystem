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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./data.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ \"./table.js\");\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox */ \"./checkbox.js\");\n/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./histogram */ \"./histogram.js\");\n/* harmony import */ var _line_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line_chart */ \"./line_chart.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/**\n * 页面入口主流程代码\n */\n\n//页面加载完成后默认显示全部数据\n\n\n\n\n\n\n\n\nwindow.onload = function() {\n    _checkbox__WEBPACK_IMPORTED_MODULE_2__[\"allRegions\"][3].click();\n    _checkbox__WEBPACK_IMPORTED_MODULE_2__[\"allProducts\"][3].click();\n    Object(_table__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    Object(_histogram__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][8]);\n    Object(_line_chart__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"][8]);\n};\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./checkbox.js":
/*!*********************!*\
  !*** ./checkbox.js ***!
  \*********************/
/*! exports provided: allRegions, allProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allRegions\", function() { return allRegions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allProducts\", function() { return allProducts; });\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table */ \"./table.js\");\n\n\n/*-----------checkbox相关操作------------*/\n\n//获取地区、产品选择和表格显示区域\nvar allRegions = document.getElementsByClassName('region');\nvar allProducts = document.getElementsByClassName('product');\n//获取代表全选的那个复选框，感觉直接指定第几个是个很垃圾的方法，有没有更好的？\nvar selectAllRegions = allRegions[3];\nvar selectAllProducts = allProducts[3];\nselectAllRegions.onchange = function() {\n    if (selectAllRegions.checked) {\n        for (let region of allRegions) {\n            region.checked = true;\n        } \n    } else {\n        for (let region of allRegions) {\n            region.checked = false;\n        }\n    }\n    Object(_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\nselectAllProducts.onchange = function() {\n    if (selectAllProducts.checked) {\n        for (let product of allProducts) {\n            product.checked = true;\n        }\n    } else {\n        for (let product of allProducts) {\n            product.checked = false;\n        }\n    }\n    Object(_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n//为各个复选框绑定点击判断事件\nbindChangeEvent(allRegions);\nbindChangeEvent(allProducts);\n\n//点击判断事件\nfunction bindChangeEvent(arr) {\n    for (let i = 0; i < arr.length - 1; i++) {\n        let item = arr[i];\n        item.onchange = function() {\n            if (!item.checked && noSelect(arr)) {\n                item.checked = true;\n            }\n            if (item.checked && selectAll(arr)) {\n                arr[arr.length - 1].checked = true;\n            } else {\n                arr[arr.length - 1].checked = false;\n            }\n            Object(_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        };\n    }\n}\n\n//检查是否没有任一选择\nfunction noSelect(arr) {\n    for (let i = 0; i < arr.length - 1; i++) {\n        if (arr[i].checked) {\n            return false;\n        }\n    }\n    return true;\n}\n//检查是否全选了\nfunction selectAll(arr) {\n    for (let i = 0; i < arr.length - 1; i++) {\n        if (!arr[i].checked) {\n            return false;\n        }\n    }\n    return true;\n}\n// var tableWrapper = document.getElementById('table-wrapper');\n\n\n\n//# sourceURL=webpack:///./checkbox.js?");

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*---------------原始数据----------------*/\n\nlet sourceData = [{\n    product: \"手机\",\n    region: \"华东\",\n    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]\n}, {\n    product: \"手机\",\n    region: \"华北\",\n    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]\n}, {\n    product: \"手机\",\n    region: \"华南\",\n    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]\n}, {\n    product: \"笔记本\",\n    region: \"华东\",\n    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]\n}, {\n    product: \"笔记本\",\n    region: \"华北\",\n    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]\n}, {\n    product: \"笔记本\",\n    region: \"华南\",\n    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]\n}, {\n    product: \"智能音箱\",\n    region: \"华东\",\n    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]\n}, {\n    product: \"智能音箱\",\n    region: \"华北\",\n    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]\n}, {\n    product: \"智能音箱\",\n    region: \"华南\",\n    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]\n}]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sourceData);\n\n//# sourceURL=webpack:///./data.js?");

/***/ }),

/***/ "./histogram.js":
/*!**********************!*\
  !*** ./histogram.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction drawHistogram(data) {\n\n    var canvas = document.getElementById(\"histogram\");\n    if (canvas && canvas.getContext) {\n        var ctx = canvas.getContext('2d');\n    }\n    // chart margin\n    var cMargin = 30;\n    // chart left and top padding\n    var cPadding = 60;\n    // chart width\n    var cWidth = canvas.width - 2 * cMargin - cPadding;\n    // chart height\n    var cHeight = canvas.height - 2 * cMargin - cPadding;\n    var originX = cMargin + cPadding;\n    var originY = cMargin + cHeight;\n    var months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];\n    var bMargin = 15;\n    var bWidth = cWidth / months.length - bMargin;\n    drawLineLabelMarkers();\n    drawBars(data.sale);\n\n    function drawLineLabelMarkers() {\n        // 画两条坐标轴\n        drawLine(originX,originY,originX + cWidth,originY);\n        drawLine(originX,originY,originX,cMargin);\n        // 画坐标轴上的刻度\n        drawMarkers();\n    }\n\n    function drawLine(x1,y1,x2,y2) {\n        ctx.beginPath();\n        ctx.moveTo(x1,y1);\n        ctx.lineTo(x2,y2);\n        ctx.stroke();\n    }\n\n    function drawMarkers() {\n        \n        // 获取数据中的最大值以便来决定y轴的刻度最大值\n        var maxValue = Math.max.apply(null,data.sale);\n        \n        // y轴总共十个刻度\n        var yMarkersNum = 10;\n        // 刻度之间的间隔\n        var interval = Math.ceil(maxValue/yMarkersNum);\n        // 写上刻度\n        ctx.textAlign = \"right\";\n        ctx.strokeStyle = \"rgb(200,200,200)\";\n        for (let i = 0; i < yMarkersNum; i++) {\n            let markerVal = i * interval;\n            let xMarker = originX - 5;\n            \n            let yMarker = cHeight * (1 - markerVal/maxValue) + cMargin;\n            ctx.fillText(markerVal,xMarker,yMarker,cPadding);\n            // 每个刻度处画条参考线\n            if (i > 0) {\n                drawLine(originX, yMarker, originX + cWidth, yMarker);\n            }\n        }\n\n        // 画x轴刻度标签\n        ctx.textAlign = \"center\";\n        for (let i = 0; i < months.length; i++) {\n            let markerVal = months[i];\n            let xMarker = originX + cWidth * (i/months.length) + bMargin + bWidth/2;\n            let yMarker = originY + 15;\n            ctx.fillText(markerVal,xMarker,yMarker);\n        }\n\n        // 绘制y轴标题\n        ctx.save();\n        ctx.rotate(-Math.PI/2);\n        ctx.font = \"16px sans-serif\";\n        ctx.fillText(\"销 量（单位：台）\",-(cHeight)/2 + 20,cPadding - 10);\n\n        // 绘制x轴标题\n        ctx.restore();\n        ctx.font = \"16px sans-serif\";\n        ctx.fillText(\"月份\",originX + cWidth/2,originY + cPadding/2 + 10 );\n        \n    }\n\n    // 绘制柱状图的柱子\n    function drawBars(sales) {\n\n        for (let i = 0; i < sales.length; i++) { \n            let x = originX + bMargin + i * (bWidth + bMargin);\n            let height = sales[i]/Math.max.apply(null,sales) * cHeight - 1;//减一避免覆盖x轴\n            let y =  originY - height - 1;\n            let width = bWidth;\n            \n            ctx.fillStyle = \"#60acfc\";\n            ctx.fillRect(x,y,width,height);\n        }\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawHistogram);\n\n//# sourceURL=webpack:///./histogram.js?");

/***/ }),

/***/ "./line_chart.js":
/*!***********************!*\
  !*** ./line_chart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nfunction drawLineChart(data) {\n    var canvas = document.getElementById(\"line-chart\");\n    if (canvas && canvas.getContext) {\n        var ctx = canvas.getContext('2d');\n    }\n    // chart margin\n    var cMargin = 30;\n    // chart left and top padding\n    var cPadding = 60;\n    // chart width\n    var cWidth = canvas.width - 2 * cMargin - cPadding;\n    // chart height\n    var cHeight = canvas.height - 2 * cMargin - cPadding;\n    var originX = cMargin + cPadding;\n    var originY = cMargin + cHeight;\n    var months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];\n    var bMargin = 15;\n    var bWidth = cWidth / months.length - bMargin;\n    drawLineLabelMarkers();\n    function drawLineLabelMarkers() {\n        // 画两条坐标轴\n        drawLine(originX,originY,originX + cWidth,originY);\n        drawLine(originX,originY,originX,cMargin);\n        // 画坐标轴上的刻度\n        drawMarkers();\n    }\n\n    function drawLine(x1,y1,x2,y2) {\n        ctx.beginPath();\n        ctx.moveTo(x1,y1);\n        ctx.lineTo(x2,y2);\n        ctx.stroke();\n    }\n\n    function drawMarkers() {\n        \n        // 获取数据中的最大值以便来决定y轴的刻度最大值\n        var maxValue = Math.max.apply(null,data.sale);\n        \n        // y轴总共十个刻度\n        var yMarkersNum = 10;\n        // 刻度之间的间隔\n        var interval = Math.ceil(maxValue/yMarkersNum);\n        // 写上刻度\n        ctx.textAlign = \"right\";\n        ctx.strokeStyle = \"rgb(200,200,200)\";\n        for (let i = 0; i < yMarkersNum; i++) {\n            let markerVal = i * interval;\n            let xMarker = originX - 5;\n            \n            let yMarker = cHeight * (1 - markerVal/maxValue) + cMargin;\n            ctx.fillText(markerVal,xMarker,yMarker,cPadding);\n            // 每个刻度处画条参考线\n            if (i > 0) {\n                drawLine(originX, yMarker, originX + cWidth, yMarker);\n            }\n        }\n\n        // 画x轴刻度标签\n        ctx.textAlign = \"center\";\n        for (let i = 0; i < months.length; i++) {\n            let markerVal = months[i];\n            let xMarker = originX + cWidth * (i/months.length) + bMargin + bWidth/2;\n            let yMarker = originY + 15;\n            ctx.fillText(markerVal,xMarker,yMarker);\n            drawLine(xMarker,originY,xMarker,originY - cHeight);\n        }\n\n        // 绘制y轴标题\n        ctx.save();\n        ctx.rotate(-Math.PI/2);\n        ctx.font = \"16px sans-serif\";\n        ctx.fillText(\"销 量（单位：台）\",-(cHeight)/2 + 20,cPadding - 10);\n\n        // 绘制x轴标题\n        ctx.restore();\n        ctx.font = \"16px sans-serif\";\n        ctx.fillText(\"月份\",originX + cWidth/2,originY + cPadding/2 + 10 );\n        \n    }  \n    //绘制折线\n    drawLines(data.sale);\n    function drawLines(sales) {\n        ctx.strokeStyle = \"#60acfc\";\n        ctx.beginPath();\n        for (let i = 0; i < sales.length; i++) {\n            let dotVal = sales[i];\n            let dotHeight = dotVal/Math.max.apply(null,sales) * cHeight;\n            let x = originX + cWidth * (i/sales.length) + bMargin + bWidth/2;\n            let y = originY - dotHeight;\n            if (i === 0) {\n                ctx.moveTo(x,y);\n            } else {\n                ctx.lineTo(x,y);\n            }\n        }\n        ctx.stroke();\n    }\n    drawDots(data.sale);\n    function drawDots(sales) {\n        ctx.fillStyle = \"#5bc49f\";\n        for (let i = 0; i < sales.length; i++) {\n            ctx.beginPath();\n            let dotVal = sales[i];\n            let dotHeight = dotVal/Math.max.apply(null,sales) * cHeight;\n            let x = originX + cWidth * (i/sales.length) + bMargin + bWidth/2;\n            let y = originY - dotHeight;\n            ctx.arc(x,y,5,0,Math.PI * 2,true);\n            ctx.fill();\n        }\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (drawLineChart);\n\n//# sourceURL=webpack:///./line_chart.js?");

/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#wrapper {\\n    width: 1300px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n.flex-box {\\n    display: flex;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style.css?./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./style.css */ \"./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./table.js":
/*!******************!*\
  !*** ./table.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./data.js\");\n/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ \"./checkbox.js\");\n\n\n\n\n\n/*----------------表格展示相关操作----------------*/\n\nfunction getData() {\n    var regions = [];\n    var products = [];\n    var newData = new Set();\n    for (let i = 0; i < _checkbox__WEBPACK_IMPORTED_MODULE_1__[\"allRegions\"].length - 1; i++) {\n        if (_checkbox__WEBPACK_IMPORTED_MODULE_1__[\"allRegions\"][i].checked === true) {\n            regions.push(_checkbox__WEBPACK_IMPORTED_MODULE_1__[\"allRegions\"][i].value);\n        }\n    }\n    for (let i = 0; i < _checkbox__WEBPACK_IMPORTED_MODULE_1__[\"allProducts\"].length - 1; i++) {\n        if (_checkbox__WEBPACK_IMPORTED_MODULE_1__[\"allProducts\"][i].checked === true) {\n            products.push(_checkbox__WEBPACK_IMPORTED_MODULE_1__[\"allProducts\"][i].value);\n        }\n    }\n    //利用集合获取交集\n    let set1 = new Set();\n    let set2 = new Set();\n    for (let item of _data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        for (let product of products) {\n            if (item.product === product) {\n                set2.add(item);\n            }\n        }\n        for (let region of regions) {\n            if (item.region === region ) {\n                set1.add(item);\n            }\n        }\n\n\n    }\n    newData = [...set1].filter(item => set2.has(item));\n    return newData;\n}\n\n//显示表格的方法\nfunction displayTable() {\n    var tableWrapper = document.getElementById('table-wrapper');\n    //先清除已经显示的表格\n    if (tableWrapper.children){\n        for (let child of tableWrapper.children) {\n            child.remove();\n        }\n    } \n    var data = getData();\n    var table = document.createElement('table');\n    //制作表头\n    var thRow = document.createElement('tr');\n    var months = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];\n    for(let i=0;i<months.length;i++) {\n        let th = document.createElement('th');\n        th.textContent = months[i];\n        thRow.appendChild(th);\n    }\n    table.appendChild(thRow);\n\n    //复制数据\n    for (let i=0;i<data.length;i++) {\n        let tr = document.createElement('tr');\n        let td1 = document.createElement('td');\n        let td2 = document.createElement('td');\n        td1.textContent = data[i].product;\n        td2.textContent = data[i].region;\n        tr.appendChild(td1);\n        tr.appendChild(td2);\n        for(let j=0;j<data[i]['sale'].length;j++){\n            let td = document.createElement('td');\n            td.textContent = data[i]['sale'][j];\n            tr.appendChild(td);\n\n        \n        }\n        table.appendChild(tr);\n    }\n    \n    tableWrapper.appendChild(table);\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayTable);\n\n//# sourceURL=webpack:///./table.js?");

/***/ })

/******/ });