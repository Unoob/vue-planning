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
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/index */ "./ClientApp/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ "./ClientApp/router.js");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ "./node_modules/vuetify/dist/vuetify.min.css");
/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js");
/* harmony import */ var vuetify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vuetify__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/App.vue */ "./ClientApp/components/App.vue");





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fas"]);
vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('fa', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"]);




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify__WEBPACK_IMPORTED_MODULE_8___default.a, {
  iconfont: 'fa',
  icons: {
    cancel: 'fas fa-ban',
    menu: 'fas fa-ellipsis-v',
    clear: 'fas fa-times'
  }
});

var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_6__["default"],
  store: _store_index__WEBPACK_IMPORTED_MODULE_5__["default"],
  render: function render(h) {
    return h(_components_App_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
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
  name: 'App',
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
exports.push([module.i, "\n#app {\r\n    font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    color: #2c3e50;\n}\r\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMgbGF6eSBeXFwuXFwvLipcXC52dWUkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlP2E3ZjYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZT80NWNmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL0h1YlNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0h1YkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlP2UzZjkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQXBwLnZ1ZT82ZDI5Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0FwcC52dWU/NmEzMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlP2Q2ZDciXSwibmFtZXMiOlsiYWRkIiwiY29tcG9uZW50IiwidXNlIiwiaWNvbmZvbnQiLCJpY29ucyIsImNhbmNlbCIsIm1lbnUiLCJjbGVhciIsImFwcCIsInJvdXRlciIsInN0b3JlIiwicmVuZGVyIiwiaCIsIiRtb3VudCIsImxvYWQiLCJuYW1lIiwicm91dGVzIiwicGF0aCIsImJlZm9yZUVudGVyIiwidG8iLCJmcm9tIiwibmV4dCIsImdldHRlcnMiLCJpc0xvZ2dlZCIsImNoaWxkcmVuIiwicHJvcHMiLCJyZWRpcmVjdCIsIm1vZGUiLCJiYXNlIiwiX19kaXJuYW1lIiwiSFVCUyIsIlBMQU5OSU5HIiwicG9rZXJIdWIiLCJzdGFydCIsIndpdGhVcmwiLCJidWlsZCIsIm9uIiwiRGlzY29ubmVjdGVkIiwiaGFuZGxlRGlzY29ubmVjdGVkIiwiVXBkYXRlVXNlciIsImhhbmRsZVVwZGF0ZVVzZXIiLCJTZW5kQW5zd2VyIiwiaGFuZGxlU2VuZEFuc3dlciIsIlVzZXJzSm9pbmVkIiwiaGFuZGxlVXNlckpvaW5lZCIsIk5ld0dhbWUiLCJoYW5kbGVOZXdHYW1lIiwiTGVhdmVHcm91cCIsImhhbmRsZVVzZXJMZWF2ZWQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInRvU3RyaW5nIiwic2VuZFF1ZXN0aW9uIiwicXVlc3Rpb24iLCJkaXNwYXRjaCIsImludm9rZSIsInNlbmRBbnN3ZXIiLCJ2YWx1ZSIsImpvaW5Hcm91cCIsInBsYXllck5hbWUiLCJncm91cElkIiwibWVzc2FnZSIsIkpvaW5Hcm91cCIsImNvbW1pdCIsImNyZWF0ZUdyb3VwIiwibG9nIiwiQ3JlYXRlR3JvdXAiLCJsZWF2ZUdyb3VwIiwidXNlciIsInVzZXJBbnN3ZXIiLCJDb25uZWN0ZWQiLCJKb2luVXNlciIsIlNob3dDYXJkcyIsImFjdGlvbnMiLCJzZXRVc2VyQW5zd2VyIiwidXNlclVwZGF0ZSIsInVzZXJKb2luIiwic2VsZWN0VmFsdWUiLCJ1c2VyTGVhdmUiLCJzZXRRdWVzdGlvbiIsIm5ld0dhbWUiLCJTdG9yZSIsInN0YXRlIiwidXNlcnMiLCJtdXRhdGlvbnMiLCJzZXRsb2dnZWQiLCJpc0xvZyIsImZpbmQiLCJ1IiwiY29ubmVjdGlvbklkIiwiYW5zd2VyIiwidXBkYXRlVXNlciIsInVzZXJKb2luZWQiLCJwdXNoIiwidXNlckxlYXZlZCIsImZpbHRlciIsInVzciIsInJlc2V0U2VsZWN0IiwibWFwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxpREFBeUMsb1JBQW9SO0FBQzdUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSx5Q0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUF3QixrQ0FBa0M7QUFDMUQsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBLGtEQUEwQyxvQkFBb0IsV0FBVzs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDek5BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSx5RUFBTyxDQUFDQSxHQUFSLENBQVkscUVBQVo7QUFFQSwyQ0FBRyxDQUFDQyxTQUFKLENBQWMsSUFBZCxFQUFvQiw0RUFBcEI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDJDQUFHLENBQUNDLEdBQUosQ0FBUSw4Q0FBUixFQUFpQjtBQUNiQyxVQUFRLEVBQUUsSUFERztBQUViQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFLFlBREw7QUFFSEMsUUFBSSxFQUFFLG1CQUZIO0FBR0hDLFNBQUssRUFBRTtBQUhKO0FBRk0sQ0FBakI7QUFTQTtBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJLDJDQUFKLENBQVE7QUFDaEJDLFFBQU0sRUFBTiwrQ0FEZ0I7QUFFaEJDLE9BQUssRUFBTCxvREFGZ0I7QUFHaEJDLFFBQU0sRUFBRSxnQkFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQywyREFBRCxDQUFMO0FBQUE7QUFITyxDQUFSLEVBSVRDLE1BSlMsQ0FJRixXQUpFLENBQVosQzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGtDO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozt3Q0N2QzJLLGdQQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBILDZXQUFvQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTdVO0FBQ0E7QUFDQSwyQ0FBRyxDQUFDWCxHQUFKLENBQVEsa0RBQVI7QUFFQTs7QUFFQSxTQUFTWSxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDaEIsU0FBTztBQUFBLFdBQU0sMEZBQStEQSxJQUEvRCxVQUFOO0FBQUEsR0FBUDtBQUNIOztBQUVELElBQU1DLE1BQU0sR0FBRyxDQUNYO0FBQUVDLE1BQUksRUFBRSxRQUFSO0FBQWtCaEIsV0FBUyxFQUFFYSxJQUFJLENBQUMsT0FBRDtBQUFqQyxDQURXLEVBRVg7QUFDSUcsTUFBSSxFQUFFLEdBRFY7QUFDZWhCLFdBQVMsRUFBRWEsSUFBSSxDQUFDLFlBQUQsQ0FEOUI7QUFFSUksYUFBVyxFQUFFLHFCQUFDQyxFQUFELEVBQUtDLElBQUwsRUFBV0MsSUFBWCxFQUFvQjtBQUM3QixRQUFJLG9EQUFLLENBQUNDLE9BQU4sQ0FBY0MsUUFBbEIsRUFBNEI7QUFDeEJGLFVBQUk7QUFDUCxLQUZELE1BRU87QUFDSEEsVUFBSSxDQUFDLFFBQUQsQ0FBSjtBQUNIO0FBQ0osR0FSTDtBQVNJRyxVQUFRLEVBQUUsQ0FDTjtBQUFFUCxRQUFJLEVBQUUsVUFBUjtBQUFvQmhCLGFBQVMsRUFBRWEsSUFBSSxDQUFDLFNBQUQ7QUFBbkMsR0FETSxFQUVOO0FBQUVHLFFBQUksRUFBRSxPQUFSO0FBQWlCaEIsYUFBUyxFQUFFYSxJQUFJLENBQUMsUUFBRDtBQUFoQyxHQUZNO0FBVGQsQ0FGVyxFQWdCWDtBQUFFRyxNQUFJLEVBQUUsUUFBUjtBQUFrQmhCLFdBQVMsRUFBRWEsSUFBSSxDQUFDLE9BQUQsQ0FBakM7QUFBNENXLE9BQUssRUFBRTtBQUFuRCxDQWhCVyxFQWlCWDtBQUFFUixNQUFJLEVBQUUsSUFBUjtBQUFjUyxVQUFRLEVBQUU7QUFBeEIsQ0FqQlcsQ0FBZjtBQW1CQSxJQUFNakIsTUFBTSxHQUFHLElBQUksa0RBQUosQ0FBYztBQUN6QmtCLE1BQUksRUFBRSxTQURtQjtBQUV6QkMsTUFBSSxFQUFFQyxTQUZtQjtBQUd6QmIsUUFBTSxFQUFOQTtBQUh5QixDQUFkLENBQWY7QUFNQSwrREFBZVAsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFFQSxJQUFNcUIsSUFBSSxHQUFHO0FBQ1RDLFVBQVEsRUFBRTtBQURELENBQWI7QUFJQSxJQUFJQyxRQUFKO0FBR08sU0FBU0MsS0FBVCxHQUFpQjtBQUNwQkQsVUFBUSxHQUFHLElBQUksb0VBQUosR0FBMkJFLE9BQTNCLENBQW1DSixJQUFJLENBQUNDLFFBQXhDLEVBQWtESSxLQUFsRCxFQUFYO0FBRUFILFVBQVEsQ0FBQ0ksRUFBVCxDQUFZLHdEQUFTLENBQUNDLFlBQXRCLEVBQW9DQyxrQkFBcEM7QUFDQU4sVUFBUSxDQUFDSSxFQUFULENBQVksd0RBQVMsQ0FBQ0csVUFBdEIsRUFBa0NDLGdCQUFsQztBQUNBUixVQUFRLENBQUNJLEVBQVQsQ0FBWSx3REFBUyxDQUFDSyxVQUF0QixFQUFrQ0MsZ0JBQWxDO0FBQ0FWLFVBQVEsQ0FBQ0ksRUFBVCxDQUFZLHdEQUFTLENBQUNPLFdBQXRCLEVBQW1DQyxnQkFBbkM7QUFDQVosVUFBUSxDQUFDSSxFQUFULENBQVksd0RBQVMsQ0FBQ1MsT0FBdEIsRUFBK0JDLGFBQS9CO0FBQ0FkLFVBQVEsQ0FBQ0ksRUFBVCxDQUFZLHdEQUFTLENBQUNXLFVBQXRCLEVBQWtDQyxnQkFBbEM7QUFFQWhCLFVBQVEsQ0FBQ0MsS0FBVCxHQUFpQmdCLEtBQWpCLENBQXVCLFVBQVVDLEdBQVYsRUFBZTtBQUNsQyxXQUFPQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBRyxDQUFDRyxRQUFKLEVBQWQsQ0FBUDtBQUNILEdBRkQ7QUFHSDtBQUVNLFNBQVNDLFlBQVQsQ0FBc0JDLFFBQXRCLEVBQWdDO0FBQ25DN0MsRUFBQSxvREFBSyxDQUFDOEMsUUFBTixDQUFlLFNBQWY7QUFDQXhCLFVBQVEsQ0FBQ3lCLE1BQVQsQ0FBZ0Isd0RBQVMsQ0FBQ1osT0FBMUIsRUFBbUNVLFFBQW5DO0FBQ0g7QUFFTSxTQUFTRyxVQUFULENBQW9CQyxLQUFwQixFQUEwQjtBQUM3QjNCLFVBQVEsQ0FBQ3lCLE1BQVQsQ0FBZ0Isd0RBQVMsQ0FBQ2hCLFVBQTFCLEVBQXNDa0IsS0FBdEM7QUFDSDtBQUVNLFNBQVNDLFNBQVQsQ0FBbUJDLFVBQW5CLEVBQStCQyxPQUEvQixFQUF3QztBQUMzQyxNQUFNQyxPQUFPLEdBQUc7QUFBRUYsY0FBVSxFQUFWQSxVQUFGO0FBQWNDLFdBQU8sRUFBUEE7QUFBZCxHQUFoQjtBQUNBOUIsVUFBUSxDQUFDeUIsTUFBVCxDQUFnQix3REFBUyxDQUFDTyxTQUExQixFQUFxQ0QsT0FBckM7QUFDQXJELEVBQUEsb0RBQUssQ0FBQ3VELE1BQU4sQ0FBYSxXQUFiLEVBQTBCLElBQTFCO0FBQ0g7QUFFTSxTQUFTQyxXQUFULENBQXFCTCxVQUFyQixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDN0MsTUFBTUMsT0FBTyxHQUFHO0FBQUVGLGNBQVUsRUFBVkEsVUFBRjtBQUFjQyxXQUFPLEVBQVBBO0FBQWQsR0FBaEI7QUFDQVgsU0FBTyxDQUFDZ0IsR0FBUixDQUFZLGVBQVo7QUFDQW5DLFVBQVEsQ0FBQ3lCLE1BQVQsQ0FBZ0Isd0RBQVMsQ0FBQ1csV0FBMUIsRUFBdUNMLE9BQXZDO0FBQ0FyRCxFQUFBLG9EQUFLLENBQUN1RCxNQUFOLENBQWEsV0FBYixFQUEwQixJQUExQjtBQUNIO0FBRU0sU0FBU0ksVUFBVCxHQUFzQjtBQUN6QmxCLFNBQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxlQUFaO0FBQ0FuQyxVQUFRLENBQUN5QixNQUFULENBQWdCLHdEQUFTLENBQUNWLFVBQTFCO0FBQ0FyQyxFQUFBLG9EQUFLLENBQUN1RCxNQUFOLENBQWEsV0FBYixFQUEwQixLQUExQjtBQUNIOztBQUVELFNBQVNuQixhQUFULENBQXVCUyxRQUF2QixFQUFpQztBQUM3QjdDLEVBQUEsb0RBQUssQ0FBQzhDLFFBQU4sQ0FBZSxhQUFmLEVBQThCRCxRQUE5QjtBQUNIOztBQUVELFNBQVNqQixrQkFBVCxDQUE0QmdDLElBQTVCLEVBQWtDO0FBQzlCdEIsa0JBQWdCLENBQUNzQixJQUFELENBQWhCO0FBQ0FuQixTQUFPLENBQUNnQixHQUFSLENBQVlHLElBQVo7QUFDSDs7QUFFRCxTQUFTNUIsZ0JBQVQsQ0FBMEI2QixVQUExQixFQUFzQztBQUNsQzdELEVBQUEsb0RBQUssQ0FBQzhDLFFBQU4sQ0FBZSxlQUFmLEVBQWdDZSxVQUFoQztBQUNIOztBQUVELFNBQVMzQixnQkFBVCxDQUEwQjBCLElBQTFCLEVBQWdDO0FBQzVCNUQsRUFBQSxvREFBSyxDQUFDOEMsUUFBTixDQUFlLFVBQWYsRUFBMkJjLElBQTNCO0FBQ0g7O0FBRUQsU0FBU3RCLGdCQUFULENBQTBCc0IsSUFBMUIsRUFBZ0M7QUFDNUI1RCxFQUFBLG9EQUFLLENBQUM4QyxRQUFOLENBQWUsV0FBZixFQUE0QmMsSUFBNUI7QUFDQW5CLFNBQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7O0FBRUQsU0FBUzNCLGdCQUFULENBQTBCOEIsSUFBMUIsRUFBZ0M7QUFDNUI1RCxFQUFBLG9EQUFLLENBQUM4QyxRQUFOLENBQWUsWUFBZixFQUE2QmMsSUFBN0I7QUFDSCxDOzs7Ozs7Ozs7Ozs7O0FDOUVELCtEQUFlO0FBQ1hFLFdBQVMsRUFBRSxXQURBO0FBRVhuQyxjQUFZLEVBQUUsY0FGSDtBQUdYMkIsV0FBUyxFQUFFLFdBSEE7QUFJWFMsVUFBUSxFQUFFLFVBSkM7QUFLWDFCLFlBQVUsRUFBRSxZQUxEO0FBTVhGLFNBQU8sRUFBRSxTQU5FO0FBT1hKLFlBQVUsRUFBRSxZQVBEO0FBUVhpQyxXQUFTLEVBQUUsV0FSQTtBQVNYbkMsWUFBVSxFQUFFLFlBVEQ7QUFVWEksYUFBVyxFQUFFLGFBVkY7QUFXWHlCLGFBQVcsRUFBRTtBQVhGLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNTyxPQUFPLEdBQUc7QUFDbkJDLGVBRG1CLCtCQUNPTixJQURQLEVBQ2E7QUFBQSxRQUFoQkwsTUFBZ0IsUUFBaEJBLE1BQWdCO0FBQzVCQSxVQUFNLENBQUMsWUFBRCxFQUFlSyxJQUFmLENBQU47QUFDSCxHQUhrQjtBQUluQk8sWUFKbUIsNkJBSUlQLElBSkosRUFJVTtBQUFBLFFBQWhCTCxNQUFnQixTQUFoQkEsTUFBZ0I7QUFDekJBLFVBQU0sQ0FBQyxZQUFELEVBQWVLLElBQWYsQ0FBTjtBQUNILEdBTmtCO0FBT25CUSxVQVBtQiwyQkFPRVIsSUFQRixFQU9RO0FBQUEsUUFBaEJMLE1BQWdCLFNBQWhCQSxNQUFnQjtBQUN2QkssUUFBSSxDQUFDUyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0FkLFVBQU0sQ0FBQyxZQUFELEVBQWVLLElBQWYsQ0FBTjtBQUNILEdBVmtCO0FBV25CVSxXQVhtQiw0QkFXR1YsSUFYSCxFQVdTO0FBQUEsUUFBaEJMLE1BQWdCLFNBQWhCQSxNQUFnQjtBQUN4QkEsVUFBTSxDQUFDLFlBQUQsRUFBZUssSUFBZixDQUFOO0FBQ0gsR0Fia0I7QUFjbkJXLGFBZG1CLDhCQWNLMUIsUUFkTCxFQWNlO0FBQUEsUUFBcEJVLE1BQW9CLFNBQXBCQSxNQUFvQjtBQUM5QkEsVUFBTSxDQUFDLFNBQUQsRUFBWVYsUUFBWixDQUFOO0FBQ0gsR0FoQmtCO0FBaUJuQjJCLFNBakJtQiwwQkFpQkY7QUFBQSxRQUFSakIsTUFBUSxTQUFSQSxNQUFRO0FBQ2JBLFVBQU0sQ0FBQyxhQUFELENBQU47QUFDSDtBQW5Ca0IsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0EsMkNBQUcsQ0FBQy9ELEdBQUosQ0FBUSw0Q0FBUjtBQUNBO0FBQ0E7QUFFQSwrREFBZSxJQUFJLDRDQUFJLENBQUNpRixLQUFULENBQWU7QUFDMUJDLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUUsRUFESjtBQUVIZixRQUFJLEVBQUUsRUFGSDtBQUdIL0MsWUFBUSxFQUFFLEtBSFA7QUFJSGdDLFlBQVEsRUFBRTtBQUpQLEdBRG1CO0FBTzFCK0IsV0FBUyxFQUFULG9EQVAwQjtBQVExQlgsU0FBTyxFQUFQLGdEQVIwQjtBQVMxQnJELFNBQU8sRUFBRTtBQUNMQyxZQURLLG9CQUNJNkQsS0FESixFQUNXO0FBQ1osYUFBT0EsS0FBSyxDQUFDN0QsUUFBYjtBQUNIO0FBSEk7QUFUaUIsQ0FBZixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDTk8sSUFBTStELFNBQVMsR0FBRztBQUNyQkMsV0FEcUIscUJBQ1hILEtBRFcsRUFDSkksS0FESSxFQUNHO0FBQ3BCSixTQUFLLENBQUM3RCxRQUFOLEdBQWlCaUUsS0FBakI7QUFDSCxHQUhvQjtBQUlyQmpCLFlBSnFCLHNCQUlWYSxLQUpVLEVBSUhiLFdBSkcsRUFJUztBQUMxQixRQUFJRCxJQUFJLEdBQUdjLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxJQUFaLENBQ1AsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsWUFBRixLQUFtQnBCLFdBQVUsQ0FBQ29CLFlBQWxDO0FBQUEsS0FETSxDQUFYOztBQUdBLFFBQUlyQixJQUFKLEVBQVU7QUFDTkEsVUFBSSxDQUFDUyxXQUFMLEdBQW1CUixXQUFVLENBQUNxQixNQUE5QjtBQUNIO0FBQ0osR0FYb0I7QUFZckJDLFlBWnFCLHNCQVlWVCxLQVpVLEVBWUhkLElBWkcsRUFZRztBQUNwQmMsU0FBSyxDQUFDZCxJQUFOLEdBQWFBLElBQWI7QUFDSCxHQWRvQjtBQWVyQndCLFlBZnFCLHNCQWVWVixLQWZVLEVBZUhkLElBZkcsRUFlRztBQUNwQmMsU0FBSyxDQUFDQyxLQUFOLENBQVlVLElBQVosQ0FBaUJ6QixJQUFqQjtBQUNILEdBakJvQjtBQWtCckIwQixZQWxCcUIsc0JBa0JWWixLQWxCVSxFQWtCSGQsSUFsQkcsRUFrQkc7QUFDcEJjLFNBQUssQ0FBQ0MsS0FBTixHQUFjRCxLQUFLLENBQUNDLEtBQU4sQ0FBWVksTUFBWixDQUFtQixVQUFTQyxHQUFULEVBQWM7QUFDM0MsYUFBT0EsR0FBRyxDQUFDUCxZQUFKLEtBQXFCckIsSUFBSSxDQUFDcUIsWUFBakM7QUFDSCxLQUZhLENBQWQ7QUFHSCxHQXRCb0I7QUF1QnJCUSxhQXZCcUIsdUJBdUJUZixLQXZCUyxFQXVCRjtBQUNmQSxTQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDQyxLQUFOLENBQVllLEdBQVosQ0FBZ0IsVUFBQVYsQ0FBQyxFQUFJO0FBQy9CQSxPQUFDLENBQUNYLFdBQUYsR0FBZ0IsSUFBaEI7QUFDQSxhQUFPVyxDQUFQO0FBQ0gsS0FIYSxDQUFkO0FBSUgsR0E1Qm9CO0FBNkJyQlIsU0E3QnFCLG1CQTZCYkUsS0E3QmEsRUE2Qk43QixRQTdCTSxFQTZCSTtBQUNyQjZCLFNBQUssQ0FBQzdCLFFBQU4sR0FBaUJBLFFBQWpCO0FBQ0g7QUEvQm9CLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVVA7QUFFQTtBQUNBLGFBREE7QUFFQSxnQkFGQTtBQUdBO0FBQ0E7QUFDQSxHQUxBO0FBTUEsY0FOQTtBQU9BO0FBQ0E7QUFDQSxHQVRBO0FBVUE7QUFWQSxHOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWtDLDREQUE0RCw0Q0FBNEMsMkNBQTJDLHVCQUF1QixHQUFHOztBQUUvTTs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsaUJBQWlCLEVBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsWSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1widmlldy1NYXN0ZXJQYWdlLXZ1ZVwiOlwidmlldy1NYXN0ZXJQYWdlLXZ1ZVwiLFwidmlldy1RckNvZGUtdnVlXCI6XCJ2aWV3LVFyQ29kZS12dWVcIixcInZpZXctQW5zd2VyLXZ1ZVwiOlwidmlldy1BbnN3ZXItdnVlXCIsXCJ2aWV3LUZsaXBwZWRDYXJkLXZ1ZVwiOlwidmlldy1GbGlwcGVkQ2FyZC12dWVcIixcInZpZXctTG9naW4tdnVlXCI6XCJ2aWV3LUxvZ2luLXZ1ZVwiLFwidmlldy1OZXdWb3RlLXZ1ZVwiOlwidmlldy1OZXdWb3RlLXZ1ZVwiLFwidmlldy1WYWx1ZUNhcmQtdnVlXCI6XCJ2aWV3LVZhbHVlQ2FyZC12dWVcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknKTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5cclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcydcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJ1xyXG5cclxubGlicmFyeS5hZGQoZmFzKVxyXG5cclxuVnVlLmNvbXBvbmVudCgnZmEnLCBGb250QXdlc29tZUljb24pXHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9pbmRleCdcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcclxuXHJcbmltcG9ydCAndnVldGlmeS9kaXN0L3Z1ZXRpZnkubWluLmNzcydcclxuaW1wb3J0IFZ1ZXRpZnkgZnJvbSAndnVldGlmeSdcclxuVnVlLnVzZShWdWV0aWZ5LCB7XHJcbiAgICBpY29uZm9udDogJ2ZhJyxcclxuICAgIGljb25zOiB7XHJcbiAgICAgICAgY2FuY2VsOiAnZmFzIGZhLWJhbicsXHJcbiAgICAgICAgbWVudTogJ2ZhcyBmYS1lbGxpcHNpcy12JyxcclxuICAgICAgICBjbGVhcjogJ2ZhcyBmYS10aW1lcycsXHJcbiAgICB9LFxyXG59KVxyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLnZ1ZSdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgcm91dGVyLFxyXG4gICAgc3RvcmUsXHJcbiAgICByZW5kZXI6IGggPT4gaChBcHApLFxyXG59KS4kbW91bnQoJyNhcHAtcm9vdCcpXHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9BbnN3ZXIudnVlXCI6IFtcblx0XHRcIi4vQ2xpZW50QXBwL2NvbXBvbmVudHMvQW5zd2VyLnZ1ZVwiLFxuXHRcdFwidmlldy1BbnN3ZXItdnVlXCJcblx0XSxcblx0XCIuL0FwcC52dWVcIjogW1xuXHRcdFwiLi9DbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlXCJcblx0XSxcblx0XCIuL0ZsaXBwZWRDYXJkLnZ1ZVwiOiBbXG5cdFx0XCIuL0NsaWVudEFwcC9jb21wb25lbnRzL0ZsaXBwZWRDYXJkLnZ1ZVwiLFxuXHRcdFwidmlldy1GbGlwcGVkQ2FyZC12dWVcIlxuXHRdLFxuXHRcIi4vTG9naW4udnVlXCI6IFtcblx0XHRcIi4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTG9naW4udnVlXCIsXG5cdFx0XCJ2aWV3LUxvZ2luLXZ1ZVwiXG5cdF0sXG5cdFwiLi9NYXN0ZXJQYWdlLnZ1ZVwiOiBbXG5cdFx0XCIuL0NsaWVudEFwcC9jb21wb25lbnRzL01hc3RlclBhZ2UudnVlXCIsXG5cdFx0XCJ2ZW5kb3JzXCIsXG5cdFx0XCJ2aWV3LU1hc3RlclBhZ2UtdnVlXCJcblx0XSxcblx0XCIuL05ld1ZvdGUudnVlXCI6IFtcblx0XHRcIi4vQ2xpZW50QXBwL2NvbXBvbmVudHMvTmV3Vm90ZS52dWVcIixcblx0XHRcInZpZXctTmV3Vm90ZS12dWVcIlxuXHRdLFxuXHRcIi4vUXJDb2RlLnZ1ZVwiOiBbXG5cdFx0XCIuL0NsaWVudEFwcC9jb21wb25lbnRzL1FyQ29kZS52dWVcIixcblx0XHRcInZlbmRvcnNcIixcblx0XHRcInZpZXctUXJDb2RlLXZ1ZVwiXG5cdF0sXG5cdFwiLi9WYWx1ZUNhcmQudnVlXCI6IFtcblx0XHRcIi4vQ2xpZW50QXBwL2NvbXBvbmVudHMvVmFsdWVDYXJkLnZ1ZVwiLFxuXHRcdFwidmlldy1WYWx1ZUNhcmQtdnVlXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdHZhciBpZHMgPSBtYXBbcmVxXTtcblx0aWYoIWlkcykge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoaWRzLnNsaWNlKDEpLm1hcChfX3dlYnBhY2tfcmVxdWlyZV9fLmUpKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpZCA9IGlkc1swXTtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vQ2xpZW50QXBwL2NvbXBvbmVudHMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwudnVlJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNDNlZWNlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXEdpdGh1YlxcXFx2dWUtcGxhbm5pbmdcXFxcVnVlUGxhbm5pbmdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M0M2VlY2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M0M2VlY2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM0M2VlY2UyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2M0M2VlY2UyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJDbGllbnRBcHAvY29tcG9uZW50cy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcclxuVnVlLnVzZShWdWVSb3V0ZXIpO1xyXG5cclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gbG9hZChuYW1lKSB7XHJcbiAgICByZXR1cm4gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwidmlldy1bcmVxdWVzdF1cIiAqL2AuL2NvbXBvbmVudHMvJHtuYW1lfS52dWVgKTtcclxufVxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnL2xvZ2luJywgY29tcG9uZW50OiBsb2FkKCdMb2dpbicpfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnLycsIGNvbXBvbmVudDogbG9hZCgnTWFzdGVyUGFnZScpLFxyXG4gICAgICAgIGJlZm9yZUVudGVyOiAodG8sIGZyb20sIG5leHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHN0b3JlLmdldHRlcnMuaXNMb2dnZWQpIHtcclxuICAgICAgICAgICAgICAgIG5leHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5leHQoJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICdxdWVzdGlvbicsIGNvbXBvbmVudDogbG9hZCgnTmV3Vm90ZScpIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2dyb3VwJywgY29tcG9uZW50OiBsb2FkKCdBbnN3ZXInKSB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7IHBhdGg6ICcvOnJvb20nLCBjb21wb25lbnQ6IGxvYWQoJ0xvZ2luJyksIHByb3BzOiB0cnVlIH0sXHJcbiAgICB7IHBhdGg6ICcvKicsIHJlZGlyZWN0OiAnL2xvZ2luJyB9XHJcbl07XHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gICAgbW9kZTogJ2hpc3RvcnknLFxyXG4gICAgYmFzZTogX19kaXJuYW1lLFxyXG4gICAgcm91dGVzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsImltcG9ydCB7IEh1YkNvbm5lY3Rpb25CdWlsZGVyIH0gZnJvbSAnQGFzcG5ldC9zaWduYWxyJztcclxuaW1wb3J0IEh1YkV2ZW50cyBmcm9tICcuLi9zdG9yZS9IdWJFdmVudHMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xyXG5cclxuY29uc3QgSFVCUyA9IHtcclxuICAgIFBMQU5OSU5HOiAnL1BsYW5uaW5nSHViJ1xyXG59O1xyXG5cclxubGV0IHBva2VySHViO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgIHBva2VySHViID0gbmV3IEh1YkNvbm5lY3Rpb25CdWlsZGVyKCkud2l0aFVybChIVUJTLlBMQU5OSU5HKS5idWlsZCgpO1xyXG4gICAgICAgIFxyXG4gICAgcG9rZXJIdWIub24oSHViRXZlbnRzLkRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcclxuICAgIHBva2VySHViLm9uKEh1YkV2ZW50cy5VcGRhdGVVc2VyLCBoYW5kbGVVcGRhdGVVc2VyKTtcclxuICAgIHBva2VySHViLm9uKEh1YkV2ZW50cy5TZW5kQW5zd2VyLCBoYW5kbGVTZW5kQW5zd2VyKTtcclxuICAgIHBva2VySHViLm9uKEh1YkV2ZW50cy5Vc2Vyc0pvaW5lZCwgaGFuZGxlVXNlckpvaW5lZCk7XHJcbiAgICBwb2tlckh1Yi5vbihIdWJFdmVudHMuTmV3R2FtZSwgaGFuZGxlTmV3R2FtZSk7XHJcbiAgICBwb2tlckh1Yi5vbihIdWJFdmVudHMuTGVhdmVHcm91cCwgaGFuZGxlVXNlckxlYXZlZCk7XHJcblxyXG4gICAgcG9rZXJIdWIuc3RhcnQoKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kUXVlc3Rpb24ocXVlc3Rpb24pIHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKCduZXdHYW1lJyk7XHJcbiAgICBwb2tlckh1Yi5pbnZva2UoSHViRXZlbnRzLk5ld0dhbWUsIHF1ZXN0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRBbnN3ZXIodmFsdWUpe1xyXG4gICAgcG9rZXJIdWIuaW52b2tlKEh1YkV2ZW50cy5TZW5kQW5zd2VyLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luR3JvdXAocGxheWVyTmFtZSwgZ3JvdXBJZCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IHsgcGxheWVyTmFtZSwgZ3JvdXBJZCB9O1xyXG4gICAgcG9rZXJIdWIuaW52b2tlKEh1YkV2ZW50cy5Kb2luR3JvdXAsIG1lc3NhZ2UpO1xyXG4gICAgc3RvcmUuY29tbWl0KCdzZXRsb2dnZWQnLCB0cnVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdyb3VwKHBsYXllck5hbWUsIGdyb3VwSWQpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7IHBsYXllck5hbWUsIGdyb3VwSWQgfTtcclxuICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgaW52b2tlJyk7XHJcbiAgICBwb2tlckh1Yi5pbnZva2UoSHViRXZlbnRzLkNyZWF0ZUdyb3VwLCBtZXNzYWdlKTtcclxuICAgIHN0b3JlLmNvbW1pdChcInNldGxvZ2dlZFwiLCB0cnVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlYXZlR3JvdXAoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYmVmb3JlIGludm9rZScpO1xyXG4gICAgcG9rZXJIdWIuaW52b2tlKEh1YkV2ZW50cy5MZWF2ZUdyb3VwKTtcclxuICAgIHN0b3JlLmNvbW1pdChcInNldGxvZ2dlZFwiLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld0dhbWUocXVlc3Rpb24pIHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKCdzZXRRdWVzdGlvbicsIHF1ZXN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdGVkKHVzZXIpIHtcclxuICAgIGhhbmRsZVVzZXJMZWF2ZWQodXNlcik7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2VuZEFuc3dlcih1c2VyQW5zd2VyKSB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChcInNldFVzZXJBbnN3ZXJcIiwgdXNlckFuc3dlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVVzZXJKb2luZWQodXNlcikge1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goXCJ1c2VySm9pblwiLCB1c2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVXNlckxlYXZlZCh1c2VyKSB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChcInVzZXJMZWF2ZVwiLCB1c2VyKTtcclxuICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXIgbGVhdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZVVzZXIodXNlcikge1xyXG4gICAgc3RvcmUuZGlzcGF0Y2goXCJ1c2VyVXBkYXRlXCIsIHVzZXIpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgQ29ubmVjdGVkOiAnQ29ubmVjdGVkJyxcclxuICAgIERpc2Nvbm5lY3RlZDogJ0Rpc2Nvbm5lY3RlZCcsXHJcbiAgICBKb2luR3JvdXA6ICdKb2luR3JvdXAnLFxyXG4gICAgSm9pblVzZXI6ICdKb2luVXNlcicsXHJcbiAgICBMZWF2ZUdyb3VwOiAnTGVhdmVHcm91cCcsXHJcbiAgICBOZXdHYW1lOiAnTmV3R2FtZScsXHJcbiAgICBTZW5kQW5zd2VyOiAnU2VuZEFuc3dlcicsXHJcbiAgICBTaG93Q2FyZHM6ICdTaG93Q2FyZHMnLFxyXG4gICAgVXBkYXRlVXNlcjogJ1VwZGF0ZVVzZXInLFxyXG4gICAgVXNlcnNKb2luZWQ6ICdVc2Vyc0pvaW5lZCcsXHJcbiAgICBDcmVhdGVHcm91cDogJ0NyZWF0ZUdyb3VwJ1xyXG59OyIsImV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xyXG4gICAgc2V0VXNlckFuc3dlcih7IGNvbW1pdCB9LCB1c2VyKSB7XHJcbiAgICAgICAgY29tbWl0KCd1c2VyQW5zd2VyJywgdXNlcik7XHJcbiAgICB9LFxyXG4gICAgdXNlclVwZGF0ZSh7IGNvbW1pdCB9LCB1c2VyKSB7XHJcbiAgICAgICAgY29tbWl0KCd1cGRhdGVVc2VyJywgdXNlcik7XHJcbiAgICB9LFxyXG4gICAgdXNlckpvaW4oeyBjb21taXQgfSwgdXNlcikge1xyXG4gICAgICAgIHVzZXIuc2VsZWN0VmFsdWUgPSAnJztcclxuICAgICAgICBjb21taXQoJ3VzZXJKb2luZWQnLCB1c2VyKTtcclxuICAgIH0sXHJcbiAgICB1c2VyTGVhdmUoeyBjb21taXQgfSwgdXNlcikge1xyXG4gICAgICAgIGNvbW1pdCgndXNlckxlYXZlZCcsIHVzZXIpO1xyXG4gICAgfSxcclxuICAgIHNldFF1ZXN0aW9uKHsgY29tbWl0IH0sIHF1ZXN0aW9uKSB7XHJcbiAgICAgICAgY29tbWl0KCduZXdHYW1lJywgcXVlc3Rpb24pO1xyXG4gICAgfSxcclxuICAgIG5ld0dhbWUoe2NvbW1pdH0pe1xyXG4gICAgICAgIGNvbW1pdCgncmVzZXRTZWxlY3QnKTtcclxuICAgIH1cclxufSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XHJcblZ1ZS51c2UoVnVleCk7XHJcbmltcG9ydCB7IG11dGF0aW9ucyB9IGZyb20gJy4vbXV0YXRpb25zJztcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICB1c2VyOiB7fSxcclxuICAgICAgICBpc0xvZ2dlZDogZmFsc2UsXHJcbiAgICAgICAgcXVlc3Rpb246IFwiXCJcclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnMsXHJcbiAgICBhY3Rpb25zLFxyXG4gICAgZ2V0dGVyczoge1xyXG4gICAgICAgIGlzTG9nZ2VkKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5pc0xvZ2dlZDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IG11dGF0aW9ucyA9IHtcclxuICAgIHNldGxvZ2dlZChzdGF0ZSwgaXNMb2cpIHtcclxuICAgICAgICBzdGF0ZS5pc0xvZ2dlZCA9IGlzTG9nXHJcbiAgICB9LFxyXG4gICAgdXNlckFuc3dlcihzdGF0ZSwgdXNlckFuc3dlcikge1xyXG4gICAgICAgIGxldCB1c2VyID0gc3RhdGUudXNlcnMuZmluZChcclxuICAgICAgICAgICAgdSA9PiB1LmNvbm5lY3Rpb25JZCA9PT0gdXNlckFuc3dlci5jb25uZWN0aW9uSWRcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgdXNlci5zZWxlY3RWYWx1ZSA9IHVzZXJBbnN3ZXIuYW5zd2VyXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXIoc3RhdGUsIHVzZXIpIHtcclxuICAgICAgICBzdGF0ZS51c2VyID0gdXNlclxyXG4gICAgfSxcclxuICAgIHVzZXJKb2luZWQoc3RhdGUsIHVzZXIpIHtcclxuICAgICAgICBzdGF0ZS51c2Vycy5wdXNoKHVzZXIpXHJcbiAgICB9LFxyXG4gICAgdXNlckxlYXZlZChzdGF0ZSwgdXNlcikge1xyXG4gICAgICAgIHN0YXRlLnVzZXJzID0gc3RhdGUudXNlcnMuZmlsdGVyKGZ1bmN0aW9uKHVzcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNyLmNvbm5lY3Rpb25JZCAhPT0gdXNlci5jb25uZWN0aW9uSWRcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHJlc2V0U2VsZWN0KHN0YXRlKSB7XHJcbiAgICAgICAgc3RhdGUudXNlcnMgPSBzdGF0ZS51c2Vycy5tYXAodSA9PiB7XHJcbiAgICAgICAgICAgIHUuc2VsZWN0VmFsdWUgPSBudWxsXHJcbiAgICAgICAgICAgIHJldHVybiB1XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBuZXdHYW1lKHN0YXRlLCBxdWVzdGlvbikge1xyXG4gICAgICAgIHN0YXRlLnF1ZXN0aW9uID0gcXVlc3Rpb25cclxuICAgIH0sXHJcbn1cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBpZD1cImFwcC1yb290XCI+XHJcbiAgICAgICAgPHYtYXBwPlxyXG4gICAgICAgICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuICAgICAgICA8L3YtYXBwPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgc3RhcnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9IdWJTZXJ2aWNlLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0FwcCcsXHJcbiAgICBjb21wb25lbnRzOiB7fSxcclxuICAgIGRhdGE6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge30sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBzdGFydCgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge30sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuI2FwcCB7XHJcbiAgICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2FwcCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQXZlbmlyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJhcHAtcm9vdFwiIH0gfSxcbiAgICBbX2MoXCJ2LWFwcFwiLCBbX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2YjE2ODRlZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9