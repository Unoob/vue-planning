/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"view-MasterPage-vue":"view-MasterPage-vue","view-QrCode-vue":"view-QrCode-vue","view-Answer-vue":"view-Answer-vue","view-FlippedCard-vue":"view-FlippedCard-vue","view-Login-vue":"view-Login-vue","view-NewVote-vue":"view-NewVote-vue","view-ValueCard-vue":"view-ValueCard-vue"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/boot.js":
/*!***************************!*\
  !*** ./ClientApp/boot.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/index */ "./ClientApp/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./ClientApp/router.js");
/* harmony import */ var material_design_icons_iconfont_dist_material_design_icons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-design-icons-iconfont/dist/material-design-icons.css */ "./node_modules/material-design-icons-iconfont/dist/material-design-icons.css");
/* harmony import */ var material_design_icons_iconfont_dist_material_design_icons_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_iconfont_dist_material_design_icons_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/App.vue */ "./ClientApp/components/App.vue");






vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify__WEBPACK_IMPORTED_MODULE_5___default.a);

var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _store_index__WEBPACK_IMPORTED_MODULE_1__["default"],
  render: function render(h) {
    return h(_components_App_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
  }
}).$mount('#app-root');

/***/ }),

/***/ "./ClientApp/components lazy recursive ^\\.\\/.*\\.vue$":
/*!******************************************************************!*\
  !*** ./ClientApp/components lazy ^\.\/.*\.vue$ namespace object ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Answer.vue": [
		"./ClientApp/components/Answer.vue",
		"view-Answer-vue"
	],
	"./App.vue": [
		"./ClientApp/components/App.vue"
	],
	"./FlippedCard.vue": [
		"./ClientApp/components/FlippedCard.vue",
		"view-FlippedCard-vue"
	],
	"./Login.vue": [
		"./ClientApp/components/Login.vue",
		"view-Login-vue"
	],
	"./MasterPage.vue": [
		"./ClientApp/components/MasterPage.vue",
		"vendors",
		"view-MasterPage-vue"
	],
	"./NewVote.vue": [
		"./ClientApp/components/NewVote.vue",
		"view-NewVote-vue"
	],
	"./QrCode.vue": [
		"./ClientApp/components/QrCode.vue",
		"vendors",
		"view-QrCode-vue"
	],
	"./ValueCard.vue": [
		"./ClientApp/components/ValueCard.vue",
		"view-ValueCard-vue"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./ClientApp/components lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./ClientApp/components/App.vue":
/*!**************************************!*\
  !*** ./ClientApp/components/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_c43eece2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c43eece2& */ "./ClientApp/components/App.vue?vue&type=template&id=c43eece2&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./ClientApp/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_c43eece2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_c43eece2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "ClientApp/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./ClientApp/components/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./ClientApp/components/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************!*\
  !*** ./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./ClientApp/components/App.vue?vue&type=template&id=c43eece2&":
/*!*********************************************************************!*\
  !*** ./ClientApp/components/App.vue?vue&type=template&id=c43eece2& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c43eece2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=c43eece2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=template&id=c43eece2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c43eece2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c43eece2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./ClientApp/router.js":
/*!*****************************!*\
  !*** ./ClientApp/router.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index */ "./ClientApp/store/index.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);


function load(name) {
  return function () {
    return __webpack_require__("./ClientApp/components lazy recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue"));
  };
}

var routes = [{
  path: '/login',
  component: load('Login')
}, {
  path: '/',
  component: load('MasterPage'),
  beforeEnter: function beforeEnter(to, from, next) {
    if (_store_index__WEBPACK_IMPORTED_MODULE_2__["default"].getters.isLogged) {
      next();
    } else {
      next('/login');
    }
  },
  children: [{
    path: 'question',
    component: load('NewVote')
  }, {
    path: 'group',
    component: load('Answer')
  }]
}, {
  path: '/:room',
  component: load('Login'),
  props: true
}, {
  path: '/*',
  redirect: '/login'
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  base: __dirname,
  routes: routes
});
/* harmony default export */ __webpack_exports__["default"] = (router);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./ClientApp/services/HubService.js":
/*!******************************************!*\
  !*** ./ClientApp/services/HubService.js ***!
  \******************************************/
/*! exports provided: start, sendQuestion, sendAnswer, joinGroup, createGroup, leaveGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendQuestion", function() { return sendQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAnswer", function() { return sendAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinGroup", function() { return joinGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGroup", function() { return createGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveGroup", function() { return leaveGroup; });
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _store_HubEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/HubEvents */ "./ClientApp/store/HubEvents.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./ClientApp/store/index.js");



var HUBS = {
  PLANNING: '/PlanningHub'
};
var pokerHub;
function start() {
  pokerHub = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]().withUrl(HUBS.PLANNING).build();
  pokerHub.on(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].Disconnected, handleDisconnected);
  pokerHub.on(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].UpdateUser, handleUpdateUser);
  pokerHub.on(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].SendAnswer, handleSendAnswer);
  pokerHub.on(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].UsersJoined, handleUserJoined);
  pokerHub.on(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].NewGame, handleNewGame);
  pokerHub.on(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].LeaveGroup, handleUserLeaved);
  pokerHub.start().catch(function (err) {
    return console.error(err.toString());
  });
}
function sendQuestion(question) {
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('newGame');
  pokerHub.invoke(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].NewGame, question);
}
function sendAnswer(value) {
  pokerHub.invoke(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].SendAnswer, value);
}
function joinGroup(playerName, groupId) {
  var message = {
    playerName: playerName,
    groupId: groupId
  };
  pokerHub.invoke(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].JoinGroup, message);
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].commit('setlogged', true);
}
function createGroup(playerName, groupId) {
  var message = {
    playerName: playerName,
    groupId: groupId
  };
  console.log('before invoke');
  pokerHub.invoke(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].CreateGroup, message);
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].commit("setlogged", true);
}
function leaveGroup() {
  console.log('before invoke');
  pokerHub.invoke(_store_HubEvents__WEBPACK_IMPORTED_MODULE_1__["default"].LeaveGroup);
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].commit("setlogged", false);
}

function handleNewGame(question) {
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('setQuestion', question);
}

function handleDisconnected(user) {
  handleUserLeaved(user);
  console.log(user);
}

function handleSendAnswer(userAnswer) {
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("setUserAnswer", userAnswer);
}

function handleUserJoined(user) {
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("userJoin", user);
}

function handleUserLeaved(user) {
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("userLeave", user);
  console.log("after leave");
}

function handleUpdateUser(user) {
  _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("userUpdate", user);
}

/***/ }),

/***/ "./ClientApp/store/HubEvents.js":
/*!**************************************!*\
  !*** ./ClientApp/store/HubEvents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  Connected: 'Connected',
  Disconnected: 'Disconnected',
  JoinGroup: 'JoinGroup',
  JoinUser: 'JoinUser',
  LeaveGroup: 'LeaveGroup',
  NewGame: 'NewGame',
  SendAnswer: 'SendAnswer',
  ShowCards: 'ShowCards',
  UpdateUser: 'UpdateUser',
  UsersJoined: 'UsersJoined',
  CreateGroup: 'CreateGroup'
});

/***/ }),

/***/ "./ClientApp/store/actions.js":
/*!************************************!*\
  !*** ./ClientApp/store/actions.js ***!
  \************************************/
/*! exports provided: actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
var actions = {
  setUserAnswer: function setUserAnswer(_ref, user) {
    var commit = _ref.commit;
    commit('userAnswer', user);
  },
  userUpdate: function userUpdate(_ref2, user) {
    var commit = _ref2.commit;
    commit('updateUser', user);
  },
  userJoin: function userJoin(_ref3, user) {
    var commit = _ref3.commit;
    user.selectValue = '';
    commit('userJoined', user);
  },
  userLeave: function userLeave(_ref4, user) {
    var commit = _ref4.commit;
    commit('userLeaved', user);
  },
  setQuestion: function setQuestion(_ref5, question) {
    var commit = _ref5.commit;
    commit('newGame', question);
  },
  newGame: function newGame(_ref6) {
    var commit = _ref6.commit;
    commit('resetSelect');
  }
};

/***/ }),

/***/ "./ClientApp/store/index.js":
/*!**********************************!*\
  !*** ./ClientApp/store/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./ClientApp/store/mutations.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./ClientApp/store/actions.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    users: [],
    user: {},
    isLogged: false,
    question: ""
  },
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_2__["mutations"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__["actions"],
  getters: {
    isLogged: function isLogged(state) {
      return state.isLogged;
    }
  }
}));

/***/ }),

/***/ "./ClientApp/store/mutations.js":
/*!**************************************!*\
  !*** ./ClientApp/store/mutations.js ***!
  \**************************************/
/*! exports provided: mutations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
var mutations = {
  setlogged: function setlogged(state, isLog) {
    state.isLogged = isLog;
  },
  userAnswer: function userAnswer(state, _userAnswer) {
    var user = state.users.find(function (u) {
      return u.connectionId === _userAnswer.connectionId;
    });

    if (user) {
      user.selectValue = _userAnswer.answer;
    }
  },
  updateUser: function updateUser(state, user) {
    state.user = user;
  },
  userJoined: function userJoined(state, user) {
    state.users.push(user);
  },
  userLeaved: function userLeaved(state, user) {
    state.users = state.users.filter(function (usr) {
      return usr.connectionId !== user.connectionId;
    });
  },
  resetSelect: function resetSelect(state) {
    state.users = state.users.map(function (u) {
      u.selectValue = null;
      return u;
    });
  },
  newGame: function newGame(state, question) {
    state.question = question;
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./ClientApp/components/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_HubService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/HubService.js */ "./ClientApp/services/HubService.js");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {},
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {
    Object(_services_HubService_js__WEBPACK_IMPORTED_MODULE_0__["start"])();
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#app {\r\n  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #2c3e50;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=template&id=c43eece2&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ClientApp/components/App.vue?vue&type=template&id=c43eece2& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app-root" } },
    [_c("v-app", [_c("router-view")], 1)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./ClientApp/components/App.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6b1684ee", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi @babel/polyfill ./ClientApp/boot.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./ClientApp/boot.js */"./ClientApp/boot.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMgbGF6eSBeXFwuXFwvLipcXC52dWUkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlP2E3ZjYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZT80NWNmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL0h1YlNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0h1YkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlP2UzZjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZT82ZDI5Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0FwcC52dWU/NmEzMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlP2Q2ZDciXSwibmFtZXMiOlsidXNlIiwiYXBwIiwicm91dGVyIiwic3RvcmUiLCJyZW5kZXIiLCJoIiwiJG1vdW50IiwibG9hZCIsIm5hbWUiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiYmVmb3JlRW50ZXIiLCJ0byIsImZyb20iLCJuZXh0IiwiZ2V0dGVycyIsImlzTG9nZ2VkIiwiY2hpbGRyZW4iLCJwcm9wcyIsInJlZGlyZWN0IiwibW9kZSIsImJhc2UiLCJfX2Rpcm5hbWUiLCJIVUJTIiwiUExBTk5JTkciLCJwb2tlckh1YiIsInN0YXJ0Iiwid2l0aFVybCIsImJ1aWxkIiwib24iLCJEaXNjb25uZWN0ZWQiLCJoYW5kbGVEaXNjb25uZWN0ZWQiLCJVcGRhdGVVc2VyIiwiaGFuZGxlVXBkYXRlVXNlciIsIlNlbmRBbnN3ZXIiLCJoYW5kbGVTZW5kQW5zd2VyIiwiVXNlcnNKb2luZWQiLCJoYW5kbGVVc2VySm9pbmVkIiwiTmV3R2FtZSIsImhhbmRsZU5ld0dhbWUiLCJMZWF2ZUdyb3VwIiwiaGFuZGxlVXNlckxlYXZlZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJzZW5kUXVlc3Rpb24iLCJxdWVzdGlvbiIsImRpc3BhdGNoIiwiaW52b2tlIiwic2VuZEFuc3dlciIsInZhbHVlIiwiam9pbkdyb3VwIiwicGxheWVyTmFtZSIsImdyb3VwSWQiLCJtZXNzYWdlIiwiSm9pbkdyb3VwIiwiY29tbWl0IiwiY3JlYXRlR3JvdXAiLCJsb2ciLCJDcmVhdGVHcm91cCIsImxlYXZlR3JvdXAiLCJ1c2VyIiwidXNlckFuc3dlciIsIkNvbm5lY3RlZCIsIkpvaW5Vc2VyIiwiU2hvd0NhcmRzIiwiYWN0aW9ucyIsInNldFVzZXJBbnN3ZXIiLCJ1c2VyVXBkYXRlIiwidXNlckpvaW4iLCJzZWxlY3RWYWx1ZSIsInVzZXJMZWF2ZSIsInNldFF1ZXN0aW9uIiwibmV3R2FtZSIsIlN0b3JlIiwic3RhdGUiLCJ1c2VycyIsIm11dGF0aW9ucyIsInNldGxvZ2dlZCIsImlzTG9nIiwiZmluZCIsInUiLCJjb25uZWN0aW9uSWQiLCJhbnN3ZXIiLCJ1cGRhdGVVc2VyIiwidXNlckpvaW5lZCIsInB1c2giLCJ1c2VyTGVhdmVkIiwiZmlsdGVyIiwidXNyIiwicmVzZXRTZWxl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IjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcInZpZXctTWFzdGVyUGFnZS12dWVcIjpcInZpZXctTWFzdGVyUGFnZS12dWVcIixcInZpZXctUXJDb2RlLXZ1ZVwiOlwidmlldy1RckNvZGUtdnVlXCIsXCJ2aWV3LUFuc3dlci12dWVcIjpcInZpZXctQW5zd2VyLXZ1ZVwiLFwidmlldy1GbGlwcGVkQ2FyZC12dWVcIjpcInZpZXctRmxpcHBlZENhcmQtdnVlXCIsXCJ2aWV3LUxvZ2luLXZ1ZVwiOlwidmlldy1Mb2dpbi12dWVcIixcInZpZXctTmV3Vm90ZS12dWVcIjpcInZpZXctTmV3Vm90ZS12dWVcIixcInZpZXctVmFsdWVDYXJkLXZ1ZVwiOlwidmlldy1WYWx1ZUNhcmQtdnVlXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJyk7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcblxyXG5pbXBvcnQgIHN0b3JlICBmcm9tICcuL3N0b3JlL2luZGV4JztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgJ21hdGVyaWFsLWRlc2lnbi1pY29ucy1pY29uZm9udC9kaXN0L21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnO1xyXG5pbXBvcnQgJ3Z1ZXRpZnkvZGlzdC92dWV0aWZ5Lm1pbi5jc3MnO1xyXG5pbXBvcnQgVnVldGlmeSBmcm9tICd2dWV0aWZ5JztcclxuVnVlLnVzZShWdWV0aWZ5KTtcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICByb3V0ZXIsXHJcbiAgICBzdG9yZSxcclxuICAgIHJlbmRlcjogaCA9PiBoKEFwcClcclxufSkuJG1vdW50KCcjYXBwLXJvb3QnKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQW5zd2VyLnZ1ZVwiOiBbXG5cdFx0XCIuL0NsaWVudEFwcC9jb21wb25lbnRzL0Fuc3dlci52dWVcIixcblx0XHRcInZpZXctQW5zd2VyLXZ1ZVwiXG5cdF0sXG5cdFwiLi9BcHAudnVlXCI6IFtcblx0XHRcIi4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXG5cdF0sXG5cdFwiLi9GbGlwcGVkQ2FyZC52dWVcIjogW1xuXHRcdFwiLi9DbGllbnRBcHAvY29tcG9uZW50cy9GbGlwcGVkQ2FyZC52dWVcIixcblx0XHRcInZpZXctRmxpcHBlZENhcmQtdnVlXCJcblx0XSxcblx0XCIuL0xvZ2luLnZ1ZVwiOiBbXG5cdFx0XCIuL0NsaWVudEFwcC9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiLFxuXHRcdFwidmlldy1Mb2dpbi12dWVcIlxuXHRdLFxuXHRcIi4vTWFzdGVyUGFnZS52dWVcIjogW1xuXHRcdFwiLi9DbGllbnRBcHAvY29tcG9uZW50cy9NYXN0ZXJQYWdlLnZ1ZVwiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwidmlldy1NYXN0ZXJQYWdlLXZ1ZVwiXG5cdF0sXG5cdFwiLi9OZXdWb3RlLnZ1ZVwiOiBbXG5cdFx0XCIuL0NsaWVudEFwcC9jb21wb25lbnRzL05ld1ZvdGUudnVlXCIsXG5cdFx0XCJ2aWV3LU5ld1ZvdGUtdnVlXCJcblx0XSxcblx0XCIuL1FyQ29kZS52dWVcIjogW1xuXHRcdFwiLi9DbGllbnRBcHAvY29tcG9uZW50cy9RckNvZGUudnVlXCIsXG5cdFx0XCJ2ZW5kb3JzXCIsXG5cdFx0XCJ2aWV3LVFyQ29kZS12dWVcIlxuXHRdLFxuXHRcIi4vVmFsdWVDYXJkLnZ1ZVwiOiBbXG5cdFx0XCIuL0NsaWVudEFwcC9jb21wb25lbnRzL1ZhbHVlQ2FyZC52dWVcIixcblx0XHRcInZpZXctVmFsdWVDYXJkLXZ1ZVwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHR2YXIgaWRzID0gbWFwW3JlcV07XG5cdGlmKCFpZHMpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgaWQgPSBpZHNbMF07XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL0NsaWVudEFwcC9jb21wb25lbnRzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnZ1ZSRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzQzZWVjZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxHaXRodWJcXFxcdnVlLXBsYW5uaW5nXFxcXFZ1ZVBsYW5uaW5nXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjNDNlZWNlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjNDNlZWNlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNDNlZWNlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjNDNlZWNlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XHJcblZ1ZS51c2UoVnVlUm91dGVyKTtcclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL2luZGV4JztcclxuXHJcbmZ1bmN0aW9uIGxvYWQobmFtZSkge1xyXG4gICAgcmV0dXJuICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZpZXctW3JlcXVlc3RdXCIgKi9gLi9jb21wb25lbnRzLyR7bmFtZX0udnVlYCk7XHJcbn1cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJy9sb2dpbicsIGNvbXBvbmVudDogbG9hZCgnTG9naW4nKX0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJy8nLCBjb21wb25lbnQ6IGxvYWQoJ01hc3RlclBhZ2UnKSxcclxuICAgICAgICBiZWZvcmVFbnRlcjogKHRvLCBmcm9tLCBuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdG9yZS5nZXR0ZXJzLmlzTG9nZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiAncXVlc3Rpb24nLCBjb21wb25lbnQ6IGxvYWQoJ05ld1ZvdGUnKSB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdncm91cCcsIGNvbXBvbmVudDogbG9hZCgnQW5zd2VyJykgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyBwYXRoOiAnLzpyb29tJywgY29tcG9uZW50OiBsb2FkKCdMb2dpbicpLCBwcm9wczogdHJ1ZSB9LFxyXG4gICAgeyBwYXRoOiAnLyonLCByZWRpcmVjdDogJy9sb2dpbicgfVxyXG5dO1xyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICAgIG1vZGU6ICdoaXN0b3J5JyxcclxuICAgIGJhc2U6IF9fZGlybmFtZSxcclxuICAgIHJvdXRlc1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJpbXBvcnQgeyBIdWJDb25uZWN0aW9uQnVpbGRlciB9IGZyb20gJ0Bhc3BuZXQvc2lnbmFscic7XHJcbmltcG9ydCBIdWJFdmVudHMgZnJvbSAnLi4vc3RvcmUvSHViRXZlbnRzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcclxuXHJcbmNvbnN0IEhVQlMgPSB7XHJcbiAgICBQTEFOTklORzogJy9QbGFubmluZ0h1YidcclxufTtcclxuXHJcbmxldCBwb2tlckh1YjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICBwb2tlckh1YiA9IG5ldyBIdWJDb25uZWN0aW9uQnVpbGRlcigpLndpdGhVcmwoSFVCUy5QTEFOTklORykuYnVpbGQoKTtcclxuICAgICAgICBcclxuICAgIHBva2VySHViLm9uKEh1YkV2ZW50cy5EaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XHJcbiAgICBwb2tlckh1Yi5vbihIdWJFdmVudHMuVXBkYXRlVXNlciwgaGFuZGxlVXBkYXRlVXNlcik7XHJcbiAgICBwb2tlckh1Yi5vbihIdWJFdmVudHMuU2VuZEFuc3dlciwgaGFuZGxlU2VuZEFuc3dlcik7XHJcbiAgICBwb2tlckh1Yi5vbihIdWJFdmVudHMuVXNlcnNKb2luZWQsIGhhbmRsZVVzZXJKb2luZWQpO1xyXG4gICAgcG9rZXJIdWIub24oSHViRXZlbnRzLk5ld0dhbWUsIGhhbmRsZU5ld0dhbWUpO1xyXG4gICAgcG9rZXJIdWIub24oSHViRXZlbnRzLkxlYXZlR3JvdXAsIGhhbmRsZVVzZXJMZWF2ZWQpO1xyXG5cclxuICAgIHBva2VySHViLnN0YXJ0KCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZFF1ZXN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaCgnbmV3R2FtZScpO1xyXG4gICAgcG9rZXJIdWIuaW52b2tlKEh1YkV2ZW50cy5OZXdHYW1lLCBxdWVzdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kQW5zd2VyKHZhbHVlKXtcclxuICAgIHBva2VySHViLmludm9rZShIdWJFdmVudHMuU2VuZEFuc3dlciwgdmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gam9pbkdyb3VwKHBsYXllck5hbWUsIGdyb3VwSWQpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IHBsYXllck5hbWUsIGdyb3VwSWQgfTtcclxuICAgIHBva2VySHViLmludm9rZShIdWJFdmVudHMuSm9pbkdyb3VwLCBtZXNzYWdlKTtcclxuICAgIHN0b3JlLmNvbW1pdCgnc2V0bG9nZ2VkJywgdHJ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHcm91cChwbGF5ZXJOYW1lLCBncm91cElkKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0geyBwbGF5ZXJOYW1lLCBncm91cElkIH07XHJcbiAgICBjb25zb2xlLmxvZygnYmVmb3JlIGludm9rZScpO1xyXG4gICAgcG9rZXJIdWIuaW52b2tlKEh1YkV2ZW50cy5DcmVhdGVHcm91cCwgbWVzc2FnZSk7XHJcbiAgICBzdG9yZS5jb21taXQoXCJzZXRsb2dnZWRcIiwgdHJ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZWF2ZUdyb3VwKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2JlZm9yZSBpbnZva2UnKTtcclxuICAgIHBva2VySHViLmludm9rZShIdWJFdmVudHMuTGVhdmVHcm91cCk7XHJcbiAgICBzdG9yZS5jb21taXQoXCJzZXRsb2dnZWRcIiwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVOZXdHYW1lKHF1ZXN0aW9uKSB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaCgnc2V0UXVlc3Rpb24nLCBxdWVzdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3RlZCh1c2VyKSB7XHJcbiAgICBoYW5kbGVVc2VyTGVhdmVkKHVzZXIpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNlbmRBbnN3ZXIodXNlckFuc3dlcikge1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goXCJzZXRVc2VyQW5zd2VyXCIsIHVzZXJBbnN3ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVVc2VySm9pbmVkKHVzZXIpIHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKFwidXNlckpvaW5cIiwgdXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVVzZXJMZWF2ZWQodXNlcikge1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goXCJ1c2VyTGVhdmVcIiwgdXNlcik7XHJcbiAgICBjb25zb2xlLmxvZyhcImFmdGVyIGxlYXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVVcGRhdGVVc2VyKHVzZXIpIHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKFwidXNlclVwZGF0ZVwiLCB1c2VyKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIENvbm5lY3RlZDogJ0Nvbm5lY3RlZCcsXHJcbiAgICBEaXNjb25uZWN0ZWQ6ICdEaXNjb25uZWN0ZWQnLFxyXG4gICAgSm9pbkdyb3VwOiAnSm9pbkdyb3VwJyxcclxuICAgIEpvaW5Vc2VyOiAnSm9pblVzZXInLFxyXG4gICAgTGVhdmVHcm91cDogJ0xlYXZlR3JvdXAnLFxyXG4gICAgTmV3R2FtZTogJ05ld0dhbWUnLFxyXG4gICAgU2VuZEFuc3dlcjogJ1NlbmRBbnN3ZXInLFxyXG4gICAgU2hvd0NhcmRzOiAnU2hvd0NhcmRzJyxcclxuICAgIFVwZGF0ZVVzZXI6ICdVcGRhdGVVc2VyJyxcclxuICAgIFVzZXJzSm9pbmVkOiAnVXNlcnNKb2luZWQnLFxyXG4gICAgQ3JlYXRlR3JvdXA6ICdDcmVhdGVHcm91cCdcclxufTsiLCJleHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICAgIHNldFVzZXJBbnN3ZXIoeyBjb21taXQgfSwgdXNlcikge1xyXG4gICAgICAgIGNvbW1pdCgndXNlckFuc3dlcicsIHVzZXIpO1xyXG4gICAgfSxcclxuICAgIHVzZXJVcGRhdGUoeyBjb21taXQgfSwgdXNlcikge1xyXG4gICAgICAgIGNvbW1pdCgndXBkYXRlVXNlcicsIHVzZXIpO1xyXG4gICAgfSxcclxuICAgIHVzZXJKb2luKHsgY29tbWl0IH0sIHVzZXIpIHtcclxuICAgICAgICB1c2VyLnNlbGVjdFZhbHVlID0gJyc7XHJcbiAgICAgICAgY29tbWl0KCd1c2VySm9pbmVkJywgdXNlcik7XHJcbiAgICB9LFxyXG4gICAgdXNlckxlYXZlKHsgY29tbWl0IH0sIHVzZXIpIHtcclxuICAgICAgICBjb21taXQoJ3VzZXJMZWF2ZWQnLCB1c2VyKTtcclxuICAgIH0sXHJcbiAgICBzZXRRdWVzdGlvbih7IGNvbW1pdCB9LCBxdWVzdGlvbikge1xyXG4gICAgICAgIGNvbW1pdCgnbmV3R2FtZScsIHF1ZXN0aW9uKTtcclxuICAgIH0sXHJcbiAgICBuZXdHYW1lKHtjb21taXR9KXtcclxuICAgICAgICBjb21taXQoJ3Jlc2V0U2VsZWN0Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnO1xyXG5WdWUudXNlKFZ1ZXgpO1xyXG5pbXBvcnQgeyBtdXRhdGlvbnMgfSBmcm9tICcuL211dGF0aW9ucyc7XHJcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xyXG4gICAgc3RhdGU6IHtcclxuICAgICAgICB1c2VyczogW10sXHJcbiAgICAgICAgdXNlcjoge30sXHJcbiAgICAgICAgaXNMb2dnZWQ6IGZhbHNlLFxyXG4gICAgICAgIHF1ZXN0aW9uOiBcIlwiXHJcbiAgICB9LFxyXG4gICAgbXV0YXRpb25zLFxyXG4gICAgYWN0aW9ucyxcclxuICAgIGdldHRlcnM6IHtcclxuICAgICAgICBpc0xvZ2dlZChzdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuaXNMb2dnZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBtdXRhdGlvbnMgPSB7XHJcbiAgICBzZXRsb2dnZWQoc3RhdGUsIGlzTG9nKSB7XHJcbiAgICAgICAgc3RhdGUuaXNMb2dnZWQgPSBpc0xvZ1xyXG4gICAgfSxcclxuICAgIHVzZXJBbnN3ZXIoc3RhdGUsIHVzZXJBbnN3ZXIpIHtcclxuICAgICAgICBsZXQgdXNlciA9IHN0YXRlLnVzZXJzLmZpbmQoXHJcbiAgICAgICAgICAgIHUgPT4gdS5jb25uZWN0aW9uSWQgPT09IHVzZXJBbnN3ZXIuY29ubmVjdGlvbklkXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHVzZXIuc2VsZWN0VmFsdWUgPSB1c2VyQW5zd2VyLmFuc3dlclxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVVc2VyKHN0YXRlLCB1c2VyKSB7XHJcbiAgICAgICAgc3RhdGUudXNlciA9IHVzZXJcclxuICAgIH0sXHJcbiAgICB1c2VySm9pbmVkKHN0YXRlLCB1c2VyKSB7XHJcbiAgICAgICAgc3RhdGUudXNlcnMucHVzaCh1c2VyKVxyXG4gICAgfSxcclxuICAgIHVzZXJMZWF2ZWQoc3RhdGUsIHVzZXIpIHtcclxuICAgICAgICBzdGF0ZS51c2VycyA9IHN0YXRlLnVzZXJzLmZpbHRlcihmdW5jdGlvbih1c3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzci5jb25uZWN0aW9uSWQgIT09IHVzZXIuY29ubmVjdGlvbklkXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZXNldFNlbGVjdChzdGF0ZSkge1xyXG4gICAgICAgIHN0YXRlLnVzZXJzID0gc3RhdGUudXNlcnMubWFwKHUgPT4ge1xyXG4gICAgICAgICAgICB1LnNlbGVjdFZhbHVlID0gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gdVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgbmV3R2FtZShzdGF0ZSwgcXVlc3Rpb24pIHtcclxuICAgICAgICBzdGF0ZS5xdWVzdGlvbiA9IHF1ZXN0aW9uXHJcbiAgICB9LFxyXG59XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJhcHAtcm9vdFwiPlxyXG4gICAgICAgIDx2LWFwcD5cclxuICAgICAgICAgICAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XHJcbiAgICAgICAgPC92LWFwcD5cclxuICAgIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge3N0YXJ0fSBmcm9tICcuLi9zZXJ2aWNlcy9IdWJTZXJ2aWNlLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkFwcFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6KCk9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4jYXBwIHtcclxuICBmb250LWZhbWlseTogXCJBdmVuaXJcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jYXBwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXZlbmlyXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJhcHAtcm9vdFwiIH0gfSxcbiAgICBbX2MoXCJ2LWFwcFwiLCBbX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2YjE2ODRlZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9