"use strict";
(self["webpackChunkrestaurant_app"] = self["webpackChunkrestaurant_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/home-bg.jpg */ "./assets/images/home-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  transition: 0.2s all;\r\n}\r\nbody {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n/* Layout Styles */\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-inline: 20rem;\r\n  padding-block: 1.5rem;\r\n  background: white;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n  margin-block-end: 2rem;\r\n}\r\nh1 {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-size: 2rem;\r\n  color: #686963;\r\n}\r\nh1 img {\r\n  width: 40px;\r\n  height: auto;\r\n}\r\nul {\r\n  display: flex;\r\n  gap: 2rem;\r\n  font-size: 1.7rem;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: #686963;\r\n}\r\n.active {\r\n  color: #db5461;\r\n}\r\n\r\n/* Home page styles */\r\n.home-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5rem;\r\n  gap: 10rem;\r\n  padding-inline: 20rem;\r\n}\r\n@keyframes burgerHover {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    transform: translateY(100px);\r\n  }\r\n}\r\n.home-wrapper img {\r\n  max-width: 600px;\r\n  width: 50vw;\r\n  height: auto;\r\n  animation: burgerHover 1s infinite alternate-reverse;\r\n}\r\n.home-wrapper h2 {\r\n  color: rgb(29, 28, 28);\r\n  font-size: 3.5rem;\r\n}\r\n.home-wrapper button {\r\n  margin-top: 1rem;\r\n  outline: none;\r\n  color: #db5461;\r\n  border: 2px solid #db5461;\r\n  padding: 0.5rem;\r\n  padding-inline: 2rem;\r\n  font-size: 1rem;\r\n  background-color: white;\r\n}\r\np {\r\n  color: #686963;\r\n}\r\nbutton:hover {\r\n  background-color: #db5461;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Menu styles */\r\n.menu-wrapper {\r\n  display: grid;\r\n  padding: 5rem;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 2rem;\r\n}\r\n.menu-item {\r\n  position: relative;\r\n  border: 3px solid #db5461;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n.hover-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1.5rem;\r\n  font-size: 2rem;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.486);\r\n  color: white;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: -90px;\r\n}\r\n.hover-container p {\r\n  color: white;\r\n}\r\n.menu-item:hover .hover-container {\r\n  bottom: 0;\r\n}\r\n.menu-item img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* Contact Styles */\r\n.contact-wrapper {\r\n  margin-top: 10rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.contact-info {\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border: 4px solid #db5461;\r\n}\r\n\r\n.contact-info p {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oBAAoB;AACtB;AACA;EACE,mDAA+C;EAC/C,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,4CAA4C;EAC5C,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,qBAAqB;AACvB;AACA;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,4BAA4B;EAC9B;AACF;AACA;EACE,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,oDAAoD;AACtD;AACA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,aAAa;EACb,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,eAAe;EACf,kBAAkB;EAClB,sCAAsC;EACtC,YAAY;EACZ,OAAO;EACP,QAAQ;EACR,aAAa;AACf;AACA;EACE,YAAY;AACd;AACA;EACE,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap\");\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  transition: 0.2s all;\r\n}\r\nbody {\r\n  background: url(\"../assets/images/home-bg.jpg\");\r\n  background-size: cover;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n/* Layout Styles */\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-inline: 20rem;\r\n  padding-block: 1.5rem;\r\n  background: white;\r\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n  margin-block-end: 2rem;\r\n}\r\nh1 {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  font-size: 2rem;\r\n  color: #686963;\r\n}\r\nh1 img {\r\n  width: 40px;\r\n  height: auto;\r\n}\r\nul {\r\n  display: flex;\r\n  gap: 2rem;\r\n  font-size: 1.7rem;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: #686963;\r\n}\r\n.active {\r\n  color: #db5461;\r\n}\r\n\r\n/* Home page styles */\r\n.home-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5rem;\r\n  gap: 10rem;\r\n  padding-inline: 20rem;\r\n}\r\n@keyframes burgerHover {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  100% {\r\n    transform: translateY(100px);\r\n  }\r\n}\r\n.home-wrapper img {\r\n  max-width: 600px;\r\n  width: 50vw;\r\n  height: auto;\r\n  animation: burgerHover 1s infinite alternate-reverse;\r\n}\r\n.home-wrapper h2 {\r\n  color: rgb(29, 28, 28);\r\n  font-size: 3.5rem;\r\n}\r\n.home-wrapper button {\r\n  margin-top: 1rem;\r\n  outline: none;\r\n  color: #db5461;\r\n  border: 2px solid #db5461;\r\n  padding: 0.5rem;\r\n  padding-inline: 2rem;\r\n  font-size: 1rem;\r\n  background-color: white;\r\n}\r\np {\r\n  color: #686963;\r\n}\r\nbutton:hover {\r\n  background-color: #db5461;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Menu styles */\r\n.menu-wrapper {\r\n  display: grid;\r\n  padding: 5rem;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 2rem;\r\n}\r\n.menu-item {\r\n  position: relative;\r\n  border: 3px solid #db5461;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n.hover-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1.5rem;\r\n  font-size: 2rem;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.486);\r\n  color: white;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: -90px;\r\n}\r\n.hover-container p {\r\n  color: white;\r\n}\r\n.menu-item:hover .hover-container {\r\n  bottom: 0;\r\n}\r\n.menu-item img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* Contact Styles */\r\n.contact-wrapper {\r\n  margin-top: 10rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.contact-info {\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  border: 4px solid #db5461;\r\n}\r\n\r\n.contact-info p {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts */ "./src/layouts/index.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./src/templates/index.js");





_router__WEBPACK_IMPORTED_MODULE_1__.router.initializeRoute(
  [
    {
      path: "home",
      template: _templates__WEBPACK_IMPORTED_MODULE_3__.homeTemplate,
      layout: _layouts__WEBPACK_IMPORTED_MODULE_2__.mainLayout,
      isDefault: true,
    },
    {
      path: "menu",
      template: _templates__WEBPACK_IMPORTED_MODULE_3__.menuTemplate,
      layout: _layouts__WEBPACK_IMPORTED_MODULE_2__.mainLayout,
    },
    {
      path: "contact",
      template: _templates__WEBPACK_IMPORTED_MODULE_3__.contactTemplate,
      layout: _layouts__WEBPACK_IMPORTED_MODULE_2__.mainLayout,
    },
  ],
  () => {
    // remove active status from old link
    const activeElement = document.querySelector(".active");
    if (activeElement) activeElement.classList.remove("active");

    // add active status to the new link
    const currentAnchorTag = document.querySelector(
      `a[href="${window.location.hash}"]`
    );
    currentAnchorTag.classList.add("active");
  }
);


/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLayout": () => (/* reexport safe */ _main_layout__WEBPACK_IMPORTED_MODULE_0__.mainLayout)
/* harmony export */ });
/* harmony import */ var _main_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.layout */ "./src/layouts/main.layout.js");



/***/ }),

/***/ "./src/layouts/main.layout.js":
/*!************************************!*\
  !*** ./src/layouts/main.layout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainLayout": () => (/* binding */ mainLayout)
/* harmony export */ });
/* harmony import */ var _assets_images_s_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/s-1.png */ "./assets/images/s-1.png");

const mainLayout = (children, childrenscripts) => /*html*/ `
  <nav>
  <h1><img src="${_assets_images_s_1_png__WEBPACK_IMPORTED_MODULE_0__}"/>Food</h1>
  <ul>
  <li>
  <a  href="#/home">Home</a>
  </li>
  <li>
  <a href="#/menu">Menu</a>
  </li>
  <li>
  <a href="#/contact">Contact</a>
  </li>
  </ul>
  </nav>
    <div class="main-content">${children}</div>
 `;


/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
function navigateTo({ path }) {
  this.currentRoute = this.routes.find((route) => route.path === path);
  this.renderCurrentRoute();
}
function renderCurrentRoute() {
  document.getElementById("content").innerHTML =
    this.currentRoute.layout(this.currentRoute.template) ??
    this.currentRoute.template;
  window.history.replaceState({}, null, "#/" + this.currentRoute.path);
  this.onNavigationFinished();
}

function initializeRoute(routes, handleNavigationChange) {
  this.routes = routes;
  this.onNavigationFinished = handleNavigationChange;
  const currentPath = window.location.hash.substring(2);
  let current;
  if (currentPath) {
    current = this.routes.find((route) => route.path === currentPath);
  } else {
    current = this.routes.find((route) => route.isDefault);
  }
  this.handleEventChange();
  this.currentRoute = current;
  const entryElement = document.createElement("div");
  entryElement.id = "content";
  document.body.appendChild(entryElement);
  this.renderCurrentRoute();
}

function handleEventChange() {
  window.addEventListener("hashchange", () => {
    const currentPath = window.location.hash.substring(2);
    this.navigateTo({ path: currentPath });
  });
}
const router = {
  navigateTo,
  initializeRoute,
  routes: [],
  currentRoute: null,
  renderCurrentRoute,
  handleEventChange,
  onNavigationFinished: () => {},
};



/***/ }),

/***/ "./src/templates/ContactTemplate/index.js":
/*!************************************************!*\
  !*** ./src/templates/ContactTemplate/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactTemplate": () => (/* binding */ contactTemplate)
/* harmony export */ });
/* harmony import */ var _assets_images_location_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/images/location-img.png */ "./assets/images/location-img.png");

const contactTemplate = /*html*/ `
 <div class="contact-wrapper">
 <div class="contact-info">
 
 <p> <svg style="width:24px;height:24px" viewBox="0 0 24 24">
 <path fill="#db5461" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
</svg>0101234455</p>
 <p>
 <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#db5461" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
</svg>90 Faisel Street,Giza,Egypt</p>
 <div class="location-img">
 <img  src=${_assets_images_location_img_png__WEBPACK_IMPORTED_MODULE_0__}>
 </div>
 </div>
 </div>
 
 `;


/***/ }),

/***/ "./src/templates/HomeTemplate/index.js":
/*!*********************************************!*\
  !*** ./src/templates/HomeTemplate/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeTemplate": () => (/* binding */ homeTemplate)
/* harmony export */ });
/* harmony import */ var _assets_images_home_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/images/home-img.png */ "./assets/images/home-img.png");

const homeTemplate = /*html*/ `
 <div class="home-wrapper">
 <div class="info">
 <h2>Food Made with love</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis aspernatur, natus temporibus aperiam eos id corporis quae laudantium! Quisquam adipisci debitis soluta voluptate molestiae, delectus doloribus nesciunt aut ab.
</p>
<button>Order Now</button>
 </div>
 <div class="avatar">
 <img src="${_assets_images_home_img_png__WEBPACK_IMPORTED_MODULE_0__}"/>
 </div>
 
 </div>
 
 `;


/***/ }),

/***/ "./src/templates/MenuTemplate/index.js":
/*!*********************************************!*\
  !*** ./src/templates/MenuTemplate/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuTemplate": () => (/* binding */ menuTemplate)
/* harmony export */ });
/* harmony import */ var _assets_images_g_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/images/g-1.jpg */ "./assets/images/g-1.jpg");
/* harmony import */ var _assets_images_p_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/p-1.jpg */ "./assets/images/p-1.jpg");
/* harmony import */ var _assets_images_s_img_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/s-img-2.jpg */ "./assets/images/s-img-2.jpg");
/* harmony import */ var _assets_images_g_6_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/g-6.jpg */ "./assets/images/g-6.jpg");
/* harmony import */ var _assets_images_s_img_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/s-img-3.jpg */ "./assets/images/s-img-3.jpg");






const menuTemplate = /*html*/ `
 <div class="menu-wrapper">

  <div class='menu-item'> 
  <img src=${_assets_images_g_1_jpg__WEBPACK_IMPORTED_MODULE_0__}>
  <div class="hover-container">
  <p>Beef Burger</p>
  <p>50$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${_assets_images_p_1_jpg__WEBPACK_IMPORTED_MODULE_1__}>
  <div class="hover-container">
  <p>Cheese Burger</p>
  <p>60$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${_assets_images_s_img_2_jpg__WEBPACK_IMPORTED_MODULE_2__}>
  <div class="hover-container">
  <p>Veggie Pizza</p>
  <p>120$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${_assets_images_g_6_jpg__WEBPACK_IMPORTED_MODULE_3__}>
  <div class="hover-container">
  <p>Fried Chicken</p>
  <p>50$</p>
  </div>
  </div>

  <div class='menu-item'> 
  <img src=${_assets_images_s_img_3_jpg__WEBPACK_IMPORTED_MODULE_4__}>
  <div class="hover-container">
  <p>Ice Cream</p>
  <p>40$</p>
  </div>
  </div>

 </div>
 
 `;


/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactTemplate": () => (/* reexport safe */ _ContactTemplate__WEBPACK_IMPORTED_MODULE_2__.contactTemplate),
/* harmony export */   "homeTemplate": () => (/* reexport safe */ _HomeTemplate__WEBPACK_IMPORTED_MODULE_0__.homeTemplate),
/* harmony export */   "menuTemplate": () => (/* reexport safe */ _MenuTemplate__WEBPACK_IMPORTED_MODULE_1__.menuTemplate)
/* harmony export */ });
/* harmony import */ var _HomeTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeTemplate */ "./src/templates/HomeTemplate/index.js");
/* harmony import */ var _MenuTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuTemplate */ "./src/templates/MenuTemplate/index.js");
/* harmony import */ var _ContactTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactTemplate */ "./src/templates/ContactTemplate/index.js");





/***/ }),

/***/ "./assets/images/g-1.jpg":
/*!*******************************!*\
  !*** ./assets/images/g-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3956f280cf1e46192d82.jpg";

/***/ }),

/***/ "./assets/images/g-6.jpg":
/*!*******************************!*\
  !*** ./assets/images/g-6.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be8720ef85643b5cc0ca.jpg";

/***/ }),

/***/ "./assets/images/home-bg.jpg":
/*!***********************************!*\
  !*** ./assets/images/home-bg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0194505ca36882e84c67.jpg";

/***/ }),

/***/ "./assets/images/home-img.png":
/*!************************************!*\
  !*** ./assets/images/home-img.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6f20db929517197608e.png";

/***/ }),

/***/ "./assets/images/location-img.png":
/*!****************************************!*\
  !*** ./assets/images/location-img.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "067e625b423d242b0617.png";

/***/ }),

/***/ "./assets/images/p-1.jpg":
/*!*******************************!*\
  !*** ./assets/images/p-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0866ba35986774347e2d.jpg";

/***/ }),

/***/ "./assets/images/s-1.png":
/*!*******************************!*\
  !*** ./assets/images/s-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1163a6ffbcbcc1d2f2cf.png";

/***/ }),

/***/ "./assets/images/s-img-2.jpg":
/*!***********************************!*\
  !*** ./assets/images/s-img-2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e2d6faccd9892f2828b.jpg";

/***/ }),

/***/ "./assets/images/s-img-3.jpg":
/*!***********************************!*\
  !*** ./assets/images/s-img-3.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5a10f0ad0b66081834b.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDZnlEO0FBQ0M7QUFDRztBQUNIO0FBQ0E7QUFDMUQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVcsQ0FBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVksQ0FBQztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdURBQVcsQ0FBQztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVksQ0FBQztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdURBQVEsQ0FBQztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkQrQjtBQUNBO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vc3JjL2xheW91dHMvbWFpbi5sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vc3JjL3RlbXBsYXRlcy9Db250YWN0VGVtcGxhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHAvLi9zcmMvdGVtcGxhdGVzL0hvbWVUZW1wbGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcC8uL3NyYy90ZW1wbGF0ZXMvTWVudVRlbXBsYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwLy4vc3JjL3RlbXBsYXRlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9ob21lLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMYXlvdXQgU3R5bGVzICovXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLWlubGluZTogMjByZW07XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbiAgbWFyZ2luLWJsb2NrLWVuZDogMnJlbTtcXHJcXG59XFxyXFxuaDEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiAjNjg2OTYzO1xcclxcbn1cXHJcXG5oMSBpbWcge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG59XFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzY4Njk2MztcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogI2RiNTQ2MTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSBwYWdlIHN0eWxlcyAqL1xcclxcbi5ob21lLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgZ2FwOiAxMHJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHJlbTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBidXJnZXJIb3ZlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaG9tZS13cmFwcGVyIGltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBhbmltYXRpb246IGJ1cmdlckhvdmVyIDFzIGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcclxcbn1cXHJcXG4uaG9tZS13cmFwcGVyIGgyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjksIDI4LCAyOCk7XFxyXFxuICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG59XFxyXFxuLmhvbWUtd3JhcHBlciBidXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogI2RiNTQ2MTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYjU0NjE7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5wIHtcXHJcXG4gIGNvbG9yOiAjNjg2OTYzO1xcclxcbn1cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNTQ2MTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSBzdHlsZXMgKi9cXHJcXG4ubWVudS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAjZGI1NDYxO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmhvdmVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ4Nik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IC05MHB4O1xcclxcbn1cXHJcXG4uaG92ZXItY29udGFpbmVyIHAge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtOmhvdmVyIC5ob3Zlci1jb250YWluZXIge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGFjdCBTdHlsZXMgKi9cXHJcXG4uY29udGFjdC13cmFwcGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNkYjU0NjE7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWluZm8gcCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbURBQStDO0VBQy9DLHNCQUFzQjtFQUN0QixpQ0FBaUM7QUFDbkM7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw0Q0FBNEM7RUFDNUMsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIExheW91dCBTdHlsZXMgKi9cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAyMHJlbTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxuICBtYXJnaW4tYmxvY2stZW5kOiAycmVtO1xcclxcbn1cXHJcXG5oMSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICM2ODY5NjM7XFxyXFxufVxcclxcbmgxIGltZyB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbn1cXHJcXG5saSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjNjg2OTYzO1xcclxcbn1cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGNvbG9yOiAjZGI1NDYxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lIHBhZ2Ugc3R5bGVzICovXFxyXFxuLmhvbWUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVyZW07XFxyXFxuICBnYXA6IDEwcmVtO1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDIwcmVtO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGJ1cmdlckhvdmVyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ob21lLXdyYXBwZXIgaW1nIHtcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGFuaW1hdGlvbjogYnVyZ2VySG92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxyXFxufVxcclxcbi5ob21lLXdyYXBwZXIgaDIge1xcclxcbiAgY29sb3I6IHJnYigyOSwgMjgsIDI4KTtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG4uaG9tZS13cmFwcGVyIGJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZGI1NDYxO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2RiNTQ2MTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbnAge1xcclxcbiAgY29sb3I6ICM2ODY5NjM7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI1NDYxO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IHN0eWxlcyAqL1xcclxcbi5tZW51LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmc6IDVyZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNkYjU0NjE7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uaG92ZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDg2KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogLTkwcHg7XFxyXFxufVxcclxcbi5ob3Zlci1jb250YWluZXIgcCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5tZW51LWl0ZW06aG92ZXIgLmhvdmVyLWNvbnRhaW5lciB7XFxyXFxuICBib3R0b206IDA7XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250YWN0IFN0eWxlcyAqL1xcclxcbi5jb250YWN0LXdyYXBwZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb250YWN0LWluZm8ge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgI2RiNTQ2MTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyBwIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgbWFpbkxheW91dCB9IGZyb20gXCIuL2xheW91dHNcIjtcclxuaW1wb3J0IHsgaG9tZVRlbXBsYXRlLCBtZW51VGVtcGxhdGUsIGNvbnRhY3RUZW1wbGF0ZSB9IGZyb20gXCIuL3RlbXBsYXRlc1wiO1xyXG5cclxucm91dGVyLmluaXRpYWxpemVSb3V0ZShcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwiaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZTogaG9tZVRlbXBsYXRlLFxyXG4gICAgICBsYXlvdXQ6IG1haW5MYXlvdXQsXHJcbiAgICAgIGlzRGVmYXVsdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhdGg6IFwibWVudVwiLFxyXG4gICAgICB0ZW1wbGF0ZTogbWVudVRlbXBsYXRlLFxyXG4gICAgICBsYXlvdXQ6IG1haW5MYXlvdXQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXRoOiBcImNvbnRhY3RcIixcclxuICAgICAgdGVtcGxhdGU6IGNvbnRhY3RUZW1wbGF0ZSxcclxuICAgICAgbGF5b3V0OiBtYWluTGF5b3V0LFxyXG4gICAgfSxcclxuICBdLFxyXG4gICgpID0+IHtcclxuICAgIC8vIHJlbW92ZSBhY3RpdmUgc3RhdHVzIGZyb20gb2xkIGxpbmtcclxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcclxuICAgIGlmIChhY3RpdmVFbGVtZW50KSBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgLy8gYWRkIGFjdGl2ZSBzdGF0dXMgdG8gdGhlIG5ldyBsaW5rXHJcbiAgICBjb25zdCBjdXJyZW50QW5jaG9yVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYGFbaHJlZj1cIiR7d2luZG93LmxvY2F0aW9uLmhhc2h9XCJdYFxyXG4gICAgKTtcclxuICAgIGN1cnJlbnRBbmNob3JUYWcuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9XHJcbik7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL21haW4ubGF5b3V0XCI7XHJcbiIsImltcG9ydCBidXJnZXJJY29uIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3MtMS5wbmdcIjtcclxuZXhwb3J0IGNvbnN0IG1haW5MYXlvdXQgPSAoY2hpbGRyZW4sIGNoaWxkcmVuc2NyaXB0cykgPT4gLypodG1sKi8gYFxyXG4gIDxuYXY+XHJcbiAgPGgxPjxpbWcgc3JjPVwiJHtidXJnZXJJY29ufVwiLz5Gb29kPC9oMT5cclxuICA8dWw+XHJcbiAgPGxpPlxyXG4gIDxhICBocmVmPVwiIy9ob21lXCI+SG9tZTwvYT5cclxuICA8L2xpPlxyXG4gIDxsaT5cclxuICA8YSBocmVmPVwiIy9tZW51XCI+TWVudTwvYT5cclxuICA8L2xpPlxyXG4gIDxsaT5cclxuICA8YSBocmVmPVwiIy9jb250YWN0XCI+Q29udGFjdDwvYT5cclxuICA8L2xpPlxyXG4gIDwvdWw+XHJcbiAgPC9uYXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50XCI+JHtjaGlsZHJlbn08L2Rpdj5cclxuIGA7XHJcbiIsImZ1bmN0aW9uIG5hdmlnYXRlVG8oeyBwYXRoIH0pIHtcclxuICB0aGlzLmN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGVzLmZpbmQoKHJvdXRlKSA9PiByb3V0ZS5wYXRoID09PSBwYXRoKTtcclxuICB0aGlzLnJlbmRlckN1cnJlbnRSb3V0ZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRSb3V0ZSgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaW5uZXJIVE1MID1cclxuICAgIHRoaXMuY3VycmVudFJvdXRlLmxheW91dCh0aGlzLmN1cnJlbnRSb3V0ZS50ZW1wbGF0ZSkgPz9cclxuICAgIHRoaXMuY3VycmVudFJvdXRlLnRlbXBsYXRlO1xyXG4gIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgbnVsbCwgXCIjL1wiICsgdGhpcy5jdXJyZW50Um91dGUucGF0aCk7XHJcbiAgdGhpcy5vbk5hdmlnYXRpb25GaW5pc2hlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplUm91dGUocm91dGVzLCBoYW5kbGVOYXZpZ2F0aW9uQ2hhbmdlKSB7XHJcbiAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XHJcbiAgdGhpcy5vbk5hdmlnYXRpb25GaW5pc2hlZCA9IGhhbmRsZU5hdmlnYXRpb25DaGFuZ2U7XHJcbiAgY29uc3QgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMik7XHJcbiAgbGV0IGN1cnJlbnQ7XHJcbiAgaWYgKGN1cnJlbnRQYXRoKSB7XHJcbiAgICBjdXJyZW50ID0gdGhpcy5yb3V0ZXMuZmluZCgocm91dGUpID0+IHJvdXRlLnBhdGggPT09IGN1cnJlbnRQYXRoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudCA9IHRoaXMucm91dGVzLmZpbmQoKHJvdXRlKSA9PiByb3V0ZS5pc0RlZmF1bHQpO1xyXG4gIH1cclxuICB0aGlzLmhhbmRsZUV2ZW50Q2hhbmdlKCk7XHJcbiAgdGhpcy5jdXJyZW50Um91dGUgPSBjdXJyZW50O1xyXG4gIGNvbnN0IGVudHJ5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZW50cnlFbGVtZW50LmlkID0gXCJjb250ZW50XCI7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbnRyeUVsZW1lbnQpO1xyXG4gIHRoaXMucmVuZGVyQ3VycmVudFJvdXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUV2ZW50Q2hhbmdlKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygyKTtcclxuICAgIHRoaXMubmF2aWdhdGVUbyh7IHBhdGg6IGN1cnJlbnRQYXRoIH0pO1xyXG4gIH0pO1xyXG59XHJcbmNvbnN0IHJvdXRlciA9IHtcclxuICBuYXZpZ2F0ZVRvLFxyXG4gIGluaXRpYWxpemVSb3V0ZSxcclxuICByb3V0ZXM6IFtdLFxyXG4gIGN1cnJlbnRSb3V0ZTogbnVsbCxcclxuICByZW5kZXJDdXJyZW50Um91dGUsXHJcbiAgaGFuZGxlRXZlbnRDaGFuZ2UsXHJcbiAgb25OYXZpZ2F0aW9uRmluaXNoZWQ6ICgpID0+IHt9LFxyXG59O1xyXG5leHBvcnQgeyByb3V0ZXIgfTtcclxuIiwiaW1wb3J0IGxvY2F0aW9uSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9jYXRpb24taW1nLnBuZ1wiO1xyXG5leHBvcnQgY29uc3QgY29udGFjdFRlbXBsYXRlID0gLypodG1sKi8gYFxyXG4gPGRpdiBjbGFzcz1cImNvbnRhY3Qtd3JhcHBlclwiPlxyXG4gPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb1wiPlxyXG4gXHJcbiA8cD4gPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiA8cGF0aCBmaWxsPVwiI2RiNTQ2MVwiIGQ9XCJNMjAsMTUuNUMxOC44LDE1LjUgMTcuNSwxNS4zIDE2LjQsMTQuOUMxNi4zLDE0LjkgMTYuMiwxNC45IDE2LjEsMTQuOUMxNS44LDE0LjkgMTUuNiwxNSAxNS40LDE1LjJMMTMuMiwxNy40QzEwLjQsMTUuOSA4LDEzLjYgNi42LDEwLjhMOC44LDguNkM5LjEsOC4zIDkuMiw3LjkgOSw3LjZDOC43LDYuNSA4LjUsNS4yIDguNSw0QzguNSwzLjUgOCwzIDcuNSwzSDRDMy41LDMgMywzLjUgMyw0QzMsMTMuNCAxMC42LDIxIDIwLDIxQzIwLjUsMjEgMjEsMjAuNSAyMSwyMFYxNi41QzIxLDE2IDIwLjUsMTUuNSAyMCwxNS41TTUsNUg2LjVDNi42LDUuOSA2LjgsNi44IDcsNy42TDUuOCw4LjhDNS40LDcuNiA1LjEsNi4zIDUsNU0xOSwxOUMxNy43LDE4LjkgMTYuNCwxOC42IDE1LjIsMTguMkwxNi40LDE3QzE3LjIsMTcuMiAxOC4xLDE3LjQgMTksMTcuNFYxOVpcIiAvPlxyXG48L3N2Zz4wMTAxMjM0NDU1PC9wPlxyXG4gPHA+XHJcbiA8c3ZnIHN0eWxlPVwid2lkdGg6MjRweDtoZWlnaHQ6MjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgIDxwYXRoIGZpbGw9XCIjZGI1NDYxXCIgZD1cIk0xMiwxMS41QTIuNSwyLjUgMCAwLDEgOS41LDlBMi41LDIuNSAwIDAsMSAxMiw2LjVBMi41LDIuNSAwIDAsMSAxNC41LDlBMi41LDIuNSAwIDAsMSAxMiwxMS41TTEyLDJBNyw3IDAgMCwwIDUsOUM1LDE0LjI1IDEyLDIyIDEyLDIyQzEyLDIyIDE5LDE0LjI1IDE5LDlBNyw3IDAgMCwwIDEyLDJaXCIgLz5cclxuPC9zdmc+OTAgRmFpc2VsIFN0cmVldCxHaXphLEVneXB0PC9wPlxyXG4gPGRpdiBjbGFzcz1cImxvY2F0aW9uLWltZ1wiPlxyXG4gPGltZyAgc3JjPSR7bG9jYXRpb25JbWFnZX0+XHJcbiA8L2Rpdj5cclxuIDwvZGl2PlxyXG4gPC9kaXY+XHJcbiBcclxuIGA7XHJcbiIsImltcG9ydCBidXJnZXJJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLWltZy5wbmdcIjtcclxuZXhwb3J0IGNvbnN0IGhvbWVUZW1wbGF0ZSA9IC8qaHRtbCovIGBcclxuIDxkaXYgY2xhc3M9XCJob21lLXdyYXBwZXJcIj5cclxuIDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcbiA8aDI+Rm9vZCBNYWRlIHdpdGggbG92ZTwvaDI+XHJcbjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFyY2hpdGVjdG8gcGVyc3BpY2lhdGlzIGFzcGVybmF0dXIsIG5hdHVzIHRlbXBvcmlidXMgYXBlcmlhbSBlb3MgaWQgY29ycG9yaXMgcXVhZSBsYXVkYW50aXVtISBRdWlzcXVhbSBhZGlwaXNjaSBkZWJpdGlzIHNvbHV0YSB2b2x1cHRhdGUgbW9sZXN0aWFlLCBkZWxlY3R1cyBkb2xvcmlidXMgbmVzY2l1bnQgYXV0IGFiLlxyXG48L3A+XHJcbjxidXR0b24+T3JkZXIgTm93PC9idXR0b24+XHJcbiA8L2Rpdj5cclxuIDxkaXYgY2xhc3M9XCJhdmF0YXJcIj5cclxuIDxpbWcgc3JjPVwiJHtidXJnZXJJbWFnZX1cIi8+XHJcbiA8L2Rpdj5cclxuIFxyXG4gPC9kaXY+XHJcbiBcclxuIGA7XHJcbiIsImltcG9ydCBidXJnZXJJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nLTEuanBnXCI7XHJcbmltcG9ydCBDaGVlc2VCdXJnZXIgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcC0xLmpwZ1wiO1xyXG5pbXBvcnQgVmVnZ2llUGl6emEgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcy1pbWctMi5qcGdcIjtcclxuaW1wb3J0IEZyaWVkQ2hpY2tlbiBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nLTYuanBnXCI7XHJcbmltcG9ydCBJY2VDcmVhbSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zLWltZy0zLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVUZW1wbGF0ZSA9IC8qaHRtbCovIGBcclxuIDxkaXYgY2xhc3M9XCJtZW51LXdyYXBwZXJcIj5cclxuXHJcbiAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz4gXHJcbiAgPGltZyBzcmM9JHtidXJnZXJJbWFnZX0+XHJcbiAgPGRpdiBjbGFzcz1cImhvdmVyLWNvbnRhaW5lclwiPlxyXG4gIDxwPkJlZWYgQnVyZ2VyPC9wPlxyXG4gIDxwPjUwJDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz4gXHJcbiAgPGltZyBzcmM9JHtDaGVlc2VCdXJnZXJ9PlxyXG4gIDxkaXYgY2xhc3M9XCJob3Zlci1jb250YWluZXJcIj5cclxuICA8cD5DaGVlc2UgQnVyZ2VyPC9wPlxyXG4gIDxwPjYwJDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz0nbWVudS1pdGVtJz4gXHJcbiAgPGltZyBzcmM9JHtWZWdnaWVQaXp6YX0+XHJcbiAgPGRpdiBjbGFzcz1cImhvdmVyLWNvbnRhaW5lclwiPlxyXG4gIDxwPlZlZ2dpZSBQaXp6YTwvcD5cclxuICA8cD4xMjAkPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPiBcclxuICA8aW1nIHNyYz0ke0ZyaWVkQ2hpY2tlbn0+XHJcbiAgPGRpdiBjbGFzcz1cImhvdmVyLWNvbnRhaW5lclwiPlxyXG4gIDxwPkZyaWVkIENoaWNrZW48L3A+XHJcbiAgPHA+NTAkPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPSdtZW51LWl0ZW0nPiBcclxuICA8aW1nIHNyYz0ke0ljZUNyZWFtfT5cclxuICA8ZGl2IGNsYXNzPVwiaG92ZXItY29udGFpbmVyXCI+XHJcbiAgPHA+SWNlIENyZWFtPC9wPlxyXG4gIDxwPjQwJDwvcD5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiA8L2Rpdj5cclxuIFxyXG4gYDtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vSG9tZVRlbXBsYXRlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL01lbnVUZW1wbGF0ZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9Db250YWN0VGVtcGxhdGVcIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9