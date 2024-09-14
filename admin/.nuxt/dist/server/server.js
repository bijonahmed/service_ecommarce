module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/backup-sidebar","2":"components/nuxt-logo","3":"components/tree-view","4":"components/tutorial","5":"pages/blog/blog-cat","6":"pages/blog/blog-list","7":"pages/blog/edit-blogCat","8":"pages/blog/new-blog","9":"pages/brands/brands-list","10":"pages/brands/edit-brand","11":"pages/brands/new-brand","12":"pages/changePassword","13":"pages/company-profile","14":"pages/coupons/all-coupons","15":"pages/coupons/edit/_id","16":"pages/coupons/new-coupons","17":"pages/customer/customerList","18":"pages/customer/edit/_id","19":"pages/customer/newCustomer","20":"pages/dashboard","21":"pages/dashboard/index","22":"pages/dashboard/profile","23":"pages/ecommarce/Old-product-add","24":"pages/ecommarce/Old-product-edit","25":"pages/ecommarce/attributes-list","26":"pages/ecommarce/category-add","27":"pages/ecommarce/category-edit","28":"pages/ecommarce/category-list","29":"pages/ecommarce/category-percentage-history","30":"pages/ecommarce/product-add","31":"pages/ecommarce/product-edit","32":"pages/ecommarce/product-list","33":"pages/ecommarce/product-preview","34":"pages/ecommarce/product-varient","35":"pages/employee/attendance-status","36":"pages/employee/change-of-circumstances-add","37":"pages/employee/change-of-circumstances-employee","38":"pages/employee/change-of-circumstances-list","39":"pages/employee/cir-edit/_id","40":"pages/employee/dashboard","41":"pages/employee/department-add","42":"pages/employee/department-list","43":"pages/employee/designation-add","44":"pages/employee/designation-list","45":"pages/employee/emp-assign-to-user","46":"pages/employee/emp-edit/_id","47":"pages/employee/employee-add","48":"pages/employee/employee-list","49":"pages/employee/leave-approval-list","50":"pages/employee/leaveRequest/_id","51":"pages/employee/leavel-rquest-add","52":"pages/employee/migrant-employee-list","53":"pages/holiday/add-holidays","54":"pages/holiday/dashboard","55":"pages/holiday/editholidaylist/_id","56":"pages/holiday/holiday-add","57":"pages/holiday/holiday-list","58":"pages/holiday/holiday-type-list","59":"pages/hrm/dashboard","60":"pages/index","61":"pages/leave/add-allocation","62":"pages/leave/add-leaverole","63":"pages/leave/add-leavetype","64":"pages/leave/allocation-list","65":"pages/leave/dashboard","66":"pages/leave/edit/leaveallocation/_id","67":"pages/leave/edit/leaverole/_id","68":"pages/leave/edit/leavetype/_id","69":"pages/leave/leave-balance-list","70":"pages/leave/leave-report","71":"pages/leave/leave-request-dashboard","72":"pages/leave/leave-request-list","73":"pages/leave/leave-role-list","74":"pages/leave/leave-type-list","75":"pages/login","76":"pages/manufacturer/edit-manufacturer","77":"pages/manufacturer/manufacturers-list","78":"pages/manufacturer/new-manufacturer","79":"pages/mlm/report","80":"pages/models/edit-models","81":"pages/models/models-list","82":"pages/models/new-models","83":"pages/orders/details","84":"pages/orders/edit-orderstatus","85":"pages/orders/new-orderstatus","86":"pages/orders/order-list","87":"pages/orders/status-list","88":"pages/profile","89":"pages/project/new-project","90":"pages/project/project-list","91":"pages/register","92":"pages/role/newrole","93":"pages/role/role_list","94":"pages/seller/allseller","95":"pages/seller/edit/_id","96":"pages/setting/add-salary","97":"pages/setting/ads-management","98":"pages/setting/annual-pay-add","99":"pages/setting/annual-pay-list","100":"pages/setting/bank-master-add","101":"pages/setting/bank-master-list","102":"pages/setting/bank-short-code-add","103":"pages/setting/bank-short-code-list","104":"pages/setting/dashboard","105":"pages/setting/employee-type-add","106":"pages/setting/employee-type-list","107":"pages/setting/packages-list","108":"pages/setting/pay-group-add","109":"pages/setting/pay-group-list","110":"pages/setting/payment-type-add","111":"pages/setting/payment-type-list","112":"pages/setting/payroll-payitem-add","113":"pages/setting/payroll-payitem-list","114":"pages/setting/salary-list","115":"pages/setting/tax-master-add","116":"pages/setting/tax-master-list","117":"pages/setting/wedges-pay-add","118":"pages/setting/wedges-pay-list","119":"pages/task/add-task","120":"pages/task/dashboard","121":"pages/task/edit/_id","122":"pages/task/task-list","123":"pages/user/changesPass/_id","124":"pages/user/dashboard","125":"pages/user/edit/_id","126":"pages/user/newUser","127":"pages/user/user_list"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;
module.exports = defu;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vform");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("requrl");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sidebar.vue?vue&type=template&id=45ba03c3
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "sidebar-wrapper",
    staticStyle: {
      "background-color": "black"
    },
    attrs: {
      "data-simplebar": "true"
    }
  }, [_vm._ssrNode("<div class=\"sidebar-header\">", "</div>", [_vm._ssrNode("<div>", "</div>", [_c('Nuxt-link', {
    attrs: {
      "to": "/",
      "href": "javascript:;"
    }
  }, [_c('h4', {
    staticClass: "logo-text"
  }, [_c('img', {
    staticStyle: {
      "height": "40px",
      "width": "100px"
    },
    attrs: {
      "src": "/images/futuregenit-logo.png",
      "alt": "logo icon"
    }
  })])])], 1), _vm._ssrNode(" <div class=\"toggle-icon ms-auto\"><i class=\"bx bx-arrow-to-left\"></i></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<ul id=\"menu-collapse\" is-nav class=\"metismenu\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-home-circle"
  }), _vm._v(" "), _c('div', {
    staticClass: "menu-title"
  }, [_vm._v("Dashboard")])])], 1), _vm._ssrNode(" "), _vm.user.role_id === 1 ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#dashboard-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    My Products\n                </a> "), _vm._ssrNode("<div id=\"dashboard-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/ecommarce/product-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Product\n                            ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Product Review")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Seller Product")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/ecommarce/category-percentage-history"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Category Percentage History")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#Sales-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Sales\n                </a> "), _vm._ssrNode("<div id=\"Sales-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/orders/order-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("All\n                                Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Inhouse orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/orders/order-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Seller\n                                Orders")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Pickup- Point Order")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#customer-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Customers\n                </a> "), _vm._ssrNode("<div id=\"customer-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/customer/customerList"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("All\n                                Customer")])], 1)])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#seller-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Sellers\n                </a> "), _vm._ssrNode("<div id=\"seller-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/allseller"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("All\n                                Sellers")])], 1)])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#Coupons-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Coupons\n                </a> "), _vm._ssrNode("<div id=\"Coupons-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/coupons/all-coupons"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("All\n                                Coupons")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/coupons/new-coupons"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add New\n                                Coupons")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#mlm-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Affliate &amp; MLM\n                </a> "), _vm._ssrNode("<div id=\"mlm-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "#"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Affliate")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/mlm/report"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("MLM")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#ecommerce-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Ecommarce Setting\n                </a> "), _vm._ssrNode("<div id=\"ecommerce-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/ecommarce/category-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Category")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/ecommarce/attributes-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Attributes")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/manufacturer/manufacturers-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Manufacturers")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/brands/brands-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Brands")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/orders/status-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Order\n                                Status")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#HRM-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    HRM\n                </a> "), _vm._ssrNode("<div id=\"HRM-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/setting/dashboard"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Setting\n                                Master")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/dashboard"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Employee")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/holiday/dashboard"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Holiday")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/leave/dashboard"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Leave\n                                Management")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/task/dashboard"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Task")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/leave/leave-request-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Leave\n                                Request\n                            ")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#User-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    User Management\n                </a> "), _vm._ssrNode("<div id=\"User-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/role/role_list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Role\n                                List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/user/user_list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("User\n                                List")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#blog-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Blog\n                </a> "), _vm._ssrNode("<div id=\"blog-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/blog/blog-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Blog list")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/blog/new-blog"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Add new blog")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/blog/blog-cat"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Blog Categories")])], 1)], 2)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_c('Nuxt-link', {
    staticClass: "btn align-items-center rounded",
    attrs: {
      "to": "/company-profile"
    }
  }, [_c('i', {
    staticClass: "bx bx-category"
  }), _vm._v("\n                    Company Profile\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"mb-1\">", "</li>", [_vm._ssrNode("<a data-bs-toggle=\"collapse\" data-bs-target=\"#Settings-collapse\" aria-expanded=\"false\" class=\"btn has-arrow align-items-center rounded collapsed dropdown-toggle\"><i class=\"bx bx-category\"></i>\n                    Settings\n                </a> "), _vm._ssrNode("<div id=\"Settings-collapse\" bis_skin_checked=\"1\" class=\"collapse\">", "</div>", [_vm._ssrNode("<ul class=\"btn-toggle-nav list-unstyled fw-normal pb-1 small\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/setting/ads-management"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Ads\n                                Management")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/seller/allseller"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Top " + _vm._s(_vm.count) + "\n                                Store\n                                List")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/setting/salary-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Salary")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/setting/packages-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Packages")])], 1)], 2)])], 2)], 2) : _vm.user.role_id == 2 ? _vm._ssrNode("<span>", "</span>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode("<a href=\"#\" id=\"submenuDropdown_35\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"has-arrow nav-link dropdown-toggle\"><i class=\"bx bx-category\"></i> <div class=\"menu-title\">Employee Access Value</div></a> "), _vm._ssrNode("<ul aria-labelledby=\"submenuDropdown_35\" class=\"menu dropdown-menu\" style=\"width:100%;\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/profile"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("View Profile")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    attrs: {
      "to": "/employee/leave-approval-list"
    }
  }, [_c('i', {
    staticClass: "bx bx-right-arrow-alt"
  }), _vm._v("Leave\n                            Approval List")])], 1)], 2)], 2)]) : _vm._e()], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=template&id=45ba03c3

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Sidebar.vue?vue&type=script&lang=js
/* harmony default export */ var Sidebarvue_type_script_lang_js = ({
  data() {
    return {
      user: {
        role_id: ''
      },
      count: ''
    };
  },
  mounted() {
    this.defaultLoadingData();
  },
  methods: {
    toggleMenu() {
      const wrapper = document.querySelector('.wrapper');
      if (wrapper.classList.contains('toggled')) {
        wrapper.classList.remove('toggled');
      } else {
        wrapper.classList.add('toggled');
      }
    },
    defaultLoadingData() {
      this.$axios.get('/auth/showProfileData').then(response => {
        console.log(response.data.data.role_id);
        this.user.role_id = response.data.data.role_id;
      });
    },
    async fetchData() {
      try {
        const response = await this.$axios.get(`/unauthenticate/allsellerListadmin`);
        // this.data = response.data.data;
        this.count = response.data.active_data;
        // console.log(response.data.active_data);
      } catch (error) {
        console.error(error);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Sidebar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js = (Sidebarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Sidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2470a208"
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=template&id=06adfeb6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', [_vm.user ? _vm._ssrNode("<div class=\"topbar d-flex align-items-center\">", "</div>", [_vm._ssrNode("<nav class=\"navbar navbar-expand\">", "</nav>", [_vm._ssrNode("<div id=\"menu-toggle\" class=\"mobile-toggle-menu\"><i class=\"bx bx-menu\"></i></div> <div class=\"top-menu ms-auto\"><ul class=\"navbar-nav align-items-center\"><li class=\"nav-item dropdown dropdown-large\"><a href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle dropdown-toggle-nocaret\"><i class=\"bx bx-category\"></i></a> <div class=\"dropdown-menu dropdown-menu-end\"><div class=\"row row-cols-3 g-3 p-3\"><div class=\"col text-center\"><div class=\"app-box mx-auto bg-gradient-cosmic text-white\"><i class=\"bx bx-group\"></i></div> <div class=\"app-title\">Teams</div></div> <div class=\"col text-center\"><div class=\"app-box mx-auto bg-gradient-burning text-white\"><i class=\"bx bx-atom\"></i></div> <div class=\"app-title\">Projects</div></div> <div class=\"col text-center\"><div class=\"app-box mx-auto bg-gradient-lush text-white\"><i class=\"bx bx-shield\"></i></div> <div class=\"app-title\">Tasks</div></div> <div class=\"col text-center\"><div class=\"app-box mx-auto bg-gradient-kyoto text-dark\"><i class=\"bx bx-notification\"></i></div> <div class=\"app-title\">Feeds</div></div> <div class=\"col text-center\"><div class=\"app-box mx-auto bg-gradient-blues text-dark\"><i class=\"bx bx-file\"></i></div> <div class=\"app-title\">Files</div></div> <div class=\"col text-center\"><div class=\"app-box mx-auto bg-gradient-moonlit text-white\"><i class=\"bx bx-filter-alt\"></i></div> <div class=\"app-title\">Alerts</div></div></div></div></li> <li class=\"nav-item dropdown dropdown-large d-none\"><a href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle dropdown-toggle-nocaret position-relative\"><span class=\"alert-count\">7</span> <i class=\"bx bx-bell\"></i></a> <div class=\"dropdown-menu dropdown-menu-end\"><a href=\"javascript:;\"><div class=\"msg-header\"><p class=\"msg-header-title\">Notifications</p> <p class=\"msg-header-clear ms-auto\">Marks all as read</p></div></a> <div class=\"header-notifications-list\"><a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-primary text-primary\"><i class=\"bx bx-group\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">New Customers<span class=\"msg-time float-end\">14 Sec\r\n                                                    ago</span></h6> <p class=\"msg-info\">5 new user registered</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-danger text-danger\"><i class=\"bx bx-cart-alt\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">New Orders <span class=\"msg-time float-end\">2 min\r\n                                                    ago</span></h6> <p class=\"msg-info\">You have recived new orders</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-success text-success\"><i class=\"bx bx-file\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">24 PDF File<span class=\"msg-time float-end\">19 min\r\n                                                    ago</span></h6> <p class=\"msg-info\">The pdf files generated</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-warning text-warning\"><i class=\"bx bx-send\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Time Response <span class=\"msg-time float-end\">28 min\r\n                                                    ago</span></h6> <p class=\"msg-info\">5.1 min avarage time response</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-info text-info\"><i class=\"bx bx-home-circle\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">New Product Approved <span class=\"msg-time float-end\">2 hrs ago</span></h6> <p class=\"msg-info\">Your new product has approved</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-danger text-danger\"><i class=\"bx bx-message-detail\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">New Comments <span class=\"msg-time float-end\">4 hrs\r\n                                                    ago</span></h6> <p class=\"msg-info\">New customer comments recived</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-success text-success\"><i class=\"bx bx-check-square\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Your item is shipped <span class=\"msg-time float-end\">5 hrs\r\n                                                    ago</span></h6> <p class=\"msg-info\">Successfully shipped your item</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-primary text-primary\"><i class=\"bx bx-user-pin\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">New 24 authors<span class=\"msg-time float-end\">1 day\r\n                                                    ago</span></h6> <p class=\"msg-info\">24 new authors joined last week</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"notify bg-light-warning text-warning\"><i class=\"bx bx-door-open\"></i></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Defense Alerts <span class=\"msg-time float-end\">2 weeks\r\n                                                    ago</span></h6> <p class=\"msg-info\">45% less alerts last 4 weeks</p></div></div></a></div> <a href=\"javascript:;\"><div class=\"text-center msg-footer\">View All Notifications</div></a></div></li> <li class=\"nav-item dropdown dropdown-large d-none\"><a href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle dropdown-toggle-nocaret position-relative\"><span class=\"alert-count\">8</span> <i class=\"bx bx-comment\"></i></a> <div class=\"dropdown-menu dropdown-menu-end\"><a href=\"javascript:;\"><div class=\"msg-header\"><p class=\"msg-header-title\">Messages</p> <p class=\"msg-header-clear ms-auto\">Marks all as read</p></div></a> <div class=\"header-message-list\"><a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-1.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Daisy Anderson <span class=\"msg-time float-end\">5 sec\r\n                                                    ago</span></h6> <p class=\"msg-info\">The standard chunk of lorem</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-2.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Althea Cabardo <span class=\"msg-time float-end\">14\r\n                                                    sec ago</span></h6> <p class=\"msg-info\">Many desktop publishing packages</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-3.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Oscar Garner <span class=\"msg-time float-end\">8 min\r\n                                                    ago</span></h6> <p class=\"msg-info\">Various versions have evolved over</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-4.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Katherine Pechon <span class=\"msg-time float-end\">15\r\n                                                    min ago</span></h6> <p class=\"msg-info\">Making this the first true generator</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-5.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Amelia Doe <span class=\"msg-time float-end\">22 min\r\n                                                    ago</span></h6> <p class=\"msg-info\">Duis aute irure dolor in reprehenderit</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-6.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Cristina Jhons <span class=\"msg-time float-end\">2 hrs\r\n                                                    ago</span></h6> <p class=\"msg-info\">The passage is attributed to an unknown</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-7.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">James Caviness <span class=\"msg-time float-end\">4 hrs\r\n                                                    ago</span></h6> <p class=\"msg-info\">The point of using Lorem</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-8.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Peter Costanzo <span class=\"msg-time float-end\">6 hrs\r\n                                                    ago</span></h6> <p class=\"msg-info\">It was popularised in the 1960s</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-9.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">David Buckley <span class=\"msg-time float-end\">2 hrs\r\n                                                    ago</span></h6> <p class=\"msg-info\">Various versions have evolved over</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-10.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Thomas Wheeler <span class=\"msg-time float-end\">2 days\r\n                                                    ago</span></h6> <p class=\"msg-info\">If you are going to use a passage</p></div></div></a> <a href=\"javascript:;\" class=\"dropdown-item\"><div class=\"d-flex align-items-center\"><div class=\"user-online\"><img src=\"/images/avatars/avatar-11.png\" alt=\"user avatar\" class=\"msg-avatar\"></div> <div class=\"flex-grow-1\"><h6 class=\"msg-name\">Johnny Seitz <span class=\"msg-time float-end\">5 days\r\n                                                    ago</span></h6> <p class=\"msg-info\">All the Lorem Ipsum generators</p></div></div></a></div> <a href=\"javascript:;\"><div class=\"text-center msg-footer\">View All Messages</div></a></div></li></ul></div> "), _vm._ssrNode("<div class=\"user-box dropdown\">", "</div>", [_vm._ssrNode("<a href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret\"><div id=\"nav_dataimages\"></div> <div class=\"user-info ps-3\"><p class=\"user-name mb-0\">" + _vm._ssrEscape(_vm._s(_vm.user.name)) + "</p> <p class=\"designattion mb-0\">Admin</p></div></a> "), _vm._ssrNode("<ul class=\"dropdown-menu dropdown-menu-end\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('Nuxt-link', {
    staticClass: "dropdown-item",
    attrs: {
      "to": "/profile",
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "bx bx-user"
  }), _c('span', [_vm._v("Profile")])])], 1), _vm._ssrNode(" <li><div class=\"dropdown-divider mb-0\"></div></li> <li><a href=\"javascript:;\" class=\"dropdown-item\"><i class=\"bx bx-log-out-circle\"></i><span>Logout</span></a></li>")], 2)], 2)], 2)]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=template&id=06adfeb6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NavBar.vue?vue&type=script&lang=js
/* harmony default export */ var NavBarvue_type_script_lang_js = ({
  insertdata: {
    image: ''
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.defaultLoadingData();
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      return location.reload();
    },
    defaultLoadingData() {
      this.$axios.get('/auth/showProfileData').then(response => {
        // console.log(response.data.data.name)
        $('#nav_dataimages').append('<img class="user-img"  src="' + response.data.dataImg + '" />');
      });
    },
    showhidesidebar() {
      console.log("Left Sidebar Open....");
      // e.preventDefault();
      $(".wrapper").toggleClass("toggled");
      // $(".wrapper").html('<div class="wrapper toggle">');
      // $('.wrapper').addClass('wrapper toggled');
    }
  }
});
// CONCATENATED MODULE: ./components/NavBar.vue?vue&type=script&lang=js
 /* harmony default export */ var components_NavBarvue_type_script_lang_js = (NavBarvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NavBar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavBarvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35b1de80"
  
)

/* harmony default export */ var NavBar = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("20fe578f", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("709683a2", content, true, context)
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
module.exports = __webpack_require__(32);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  $cookies
}) {
  if (false) {}
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_id_5eb69f1c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(11).default("ff0419f4", content, true)

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container.ql-disabled .ql-editor ul[data-checked]>li:before{pointer-events:none}.ql-clipboard{height:1px;left:-100000px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{word-wrap:break-word;box-sizing:border-box;height:100%;line-height:1.42;outline:none;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre,.ql-editor ul{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;margin:0;padding:0}.ql-editor ol,.ql-editor ul{padding-left:1.5em}.ql-editor ol>li,.ql-editor ul>li{list-style-type:none}.ql-editor ul>li:before{content:\"\\2022\"}.ql-editor ul[data-checked=false],.ql-editor ul[data-checked=true]{pointer-events:none}.ql-editor ul[data-checked=false]>li *,.ql-editor ul[data-checked=true]>li *{pointer-events:all}.ql-editor ul[data-checked=false]>li:before,.ql-editor ul[data-checked=true]>li:before{color:#777;cursor:pointer;pointer-events:all}.ql-editor ul[data-checked=true]>li:before{content:\"\\2611\"}.ql-editor ul[data-checked=false]>li:before{content:\"\\2610\"}.ql-editor li:before{display:inline-block;white-space:nowrap;width:1.2em}.ql-editor li:not(.ql-direction-rtl):before{margin-left:-1.5em;margin-right:.3em;text-align:right}.ql-editor li.ql-direction-rtl:before{margin-left:.3em;margin-right:-1.5em}.ql-editor ol li:not(.ql-direction-rtl),.ql-editor ul li:not(.ql-direction-rtl){padding-left:1.5em}.ql-editor ol li.ql-direction-rtl,.ql-editor ul li.ql-direction-rtl{padding-right:1.5em}.ql-editor ol li{counter-increment:list-0;counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li:before{content:counter(list-0,decimal) \". \"}.ql-editor ol li.ql-indent-1{counter-increment:list-1}.ql-editor ol li.ql-indent-1:before{content:counter(list-1,lower-alpha) \". \"}.ql-editor ol li.ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-2{counter-increment:list-2}.ql-editor ol li.ql-indent-2:before{content:counter(list-2,lower-roman) \". \"}.ql-editor ol li.ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-3{counter-increment:list-3}.ql-editor ol li.ql-indent-3:before{content:counter(list-3,decimal) \". \"}.ql-editor ol li.ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-4{counter-increment:list-4}.ql-editor ol li.ql-indent-4:before{content:counter(list-4,lower-alpha) \". \"}.ql-editor ol li.ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-5{counter-increment:list-5}.ql-editor ol li.ql-indent-5:before{content:counter(list-5,lower-roman) \". \"}.ql-editor ol li.ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}.ql-editor ol li.ql-indent-6{counter-increment:list-6}.ql-editor ol li.ql-indent-6:before{content:counter(list-6,decimal) \". \"}.ql-editor ol li.ql-indent-6{counter-reset:list-7 list-8 list-9}.ql-editor ol li.ql-indent-7{counter-increment:list-7}.ql-editor ol li.ql-indent-7:before{content:counter(list-7,lower-alpha) \". \"}.ql-editor ol li.ql-indent-7{counter-reset:list-8 list-9}.ql-editor ol li.ql-indent-8{counter-increment:list-8}.ql-editor ol li.ql-indent-8:before{content:counter(list-8,lower-roman) \". \"}.ql-editor ol li.ql-indent-8{counter-reset:list-9}.ql-editor ol li.ql-indent-9{counter-increment:list-9}.ql-editor ol li.ql-indent-9:before{content:counter(list-9,decimal) \". \"}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow .ql-toolbar:after,.ql-snow.ql-toolbar:after{clear:both;content:\"\";display:table}.ql-snow .ql-toolbar button,.ql-snow.ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow .ql-toolbar button svg,.ql-snow.ql-toolbar button svg{float:left;height:100%}.ql-snow .ql-toolbar button:active:hover,.ql-snow.ql-toolbar button:active:hover{outline:none}.ql-snow .ql-toolbar input.ql-image[type=file],.ql-snow.ql-toolbar input.ql-image[type=file]{display:none}.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar button.ql-active,.ql-snow .ql-toolbar button:focus,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover{color:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow .ql-toolbar button:hover:not(.ql-active),.ql-snow.ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;-webkit-text-decoration:none;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{-webkit-text-decoration:underline;text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor code,.ql-snow .ql-editor pre{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor pre{margin-bottom:5px;margin-top:5px;padding:5px 10px;white-space:pre-wrap}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor pre.ql-syntax{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;padding:2px 4px;width:24px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{margin-top:-9px;position:absolute;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:\"Normal\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before{content:\"Heading 1\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before{content:\"Heading 2\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before{content:\"Heading 3\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before{content:\"Heading 4\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before{content:\"Heading 5\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before{content:\"Heading 6\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:\"Sans Serif\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:\"Serif\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:\"Monospace\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:\"Normal\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:\"Small\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:\"Large\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:\"Huge\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:\"Helvetica Neue\",\"Helvetica\",\"Arial\",sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{border:1px solid #ccc;display:none;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:\"Edit\";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:\"Save\";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
const state = () => ({});
const mutations = {};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "BackupSidebar", function() { return BackupSidebar; });
__webpack_require__.d(components_namespaceObject, "NavBar", function() { return components_NavBar; });
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Sidebar", function() { return components_Sidebar; });
__webpack_require__.d(components_namespaceObject, "TreeView", function() { return TreeView; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(19);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['samesite'] = __webpack_require__(24);
middleware['samesite'] = middleware['samesite'].default || middleware['samesite'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));

          // check for previous reload time not to reload infinitely
          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true /* skip cache */);
          }
        }

        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(20);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(14);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(8);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(15);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _01e3517e = () => interopDefault(__webpack_require__.e(/* import() | pages/changePassword */ 12).then(__webpack_require__.bind(null, 240)));
const _7ed16273 = () => interopDefault(__webpack_require__.e(/* import() | pages/company-profile */ 13).then(__webpack_require__.bind(null, 241)));
const _adfaf6a4 = () => interopDefault(__webpack_require__.e(/* import() | pages/dashboard */ 20).then(__webpack_require__.bind(null, 242)));
const _493fd014 = () => interopDefault(__webpack_require__.e(/* import() | pages/dashboard/index */ 21).then(__webpack_require__.bind(null, 243)));
const _1bf7aa2a = () => interopDefault(__webpack_require__.e(/* import() | pages/dashboard/profile */ 22).then(__webpack_require__.bind(null, 244)));
const _348e2803 = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 75).then(__webpack_require__.bind(null, 245)));
const _44d109c3 = () => interopDefault(__webpack_require__.e(/* import() | pages/profile */ 88).then(__webpack_require__.bind(null, 246)));
const _ad99640e = () => interopDefault(__webpack_require__.e(/* import() | pages/register */ 91).then(__webpack_require__.bind(null, 247)));
const _562220ba = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-cat */ 5).then(__webpack_require__.bind(null, 248)));
const _191052a1 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-list */ 6).then(__webpack_require__.bind(null, 249)));
const _01229d89 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/edit-blogCat */ 7).then(__webpack_require__.bind(null, 250)));
const _c2a193b2 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/new-blog */ 8).then(__webpack_require__.bind(null, 251)));
const _cf75e366 = () => interopDefault(__webpack_require__.e(/* import() | pages/brands/brands-list */ 9).then(__webpack_require__.bind(null, 252)));
const _50542eb4 = () => interopDefault(__webpack_require__.e(/* import() | pages/brands/edit-brand */ 10).then(__webpack_require__.bind(null, 253)));
const _2c8a4368 = () => interopDefault(__webpack_require__.e(/* import() | pages/brands/new-brand */ 11).then(__webpack_require__.bind(null, 254)));
const _dce5a16c = () => interopDefault(__webpack_require__.e(/* import() | pages/coupons/all-coupons */ 14).then(__webpack_require__.bind(null, 255)));
const _344258c9 = () => interopDefault(__webpack_require__.e(/* import() | pages/coupons/new-coupons */ 16).then(__webpack_require__.bind(null, 256)));
const _11ce4bd0 = () => interopDefault(__webpack_require__.e(/* import() | pages/customer/customerList */ 17).then(__webpack_require__.bind(null, 257)));
const _fada87cc = () => interopDefault(__webpack_require__.e(/* import() | pages/customer/newCustomer */ 19).then(__webpack_require__.bind(null, 258)));
const _5ce6b4e6 = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/attributes-list */ 25).then(__webpack_require__.bind(null, 259)));
const _77d3fba0 = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/category-add */ 26).then(__webpack_require__.bind(null, 260)));
const _6a70eb0b = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/category-edit */ 27).then(__webpack_require__.bind(null, 261)));
const _5b28c39f = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/category-list */ 28).then(__webpack_require__.bind(null, 360)));
const _578b63bc = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/category-percentage-history */ 29).then(__webpack_require__.bind(null, 262)));
const _42b6f10f = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/Old-product-add */ 23).then(__webpack_require__.bind(null, 361)));
const _80244fe8 = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/Old-product-edit */ 24).then(__webpack_require__.bind(null, 362)));
const _d8939456 = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/product-add */ 30).then(__webpack_require__.bind(null, 363)));
const _e251a7f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/product-edit */ 31).then(__webpack_require__.bind(null, 364)));
const _7f8f049a = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/product-list */ 32).then(__webpack_require__.bind(null, 263)));
const _53327108 = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/product-preview */ 33).then(__webpack_require__.bind(null, 264)));
const _d0f58a86 = () => interopDefault(__webpack_require__.e(/* import() | pages/ecommarce/product-varient */ 34).then(__webpack_require__.bind(null, 265)));
const _5a405602 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/attendance-status */ 35).then(__webpack_require__.bind(null, 266)));
const _a377ab0a = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/change-of-circumstances-add */ 36).then(__webpack_require__.bind(null, 267)));
const _5ad43878 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/change-of-circumstances-employee */ 37).then(__webpack_require__.bind(null, 268)));
const _9280b698 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/change-of-circumstances-list */ 38).then(__webpack_require__.bind(null, 269)));
const _575bd640 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/dashboard */ 40).then(__webpack_require__.bind(null, 270)));
const _8fac5eac = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/department-add */ 41).then(__webpack_require__.bind(null, 271)));
const _2ce27736 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/department-list */ 42).then(__webpack_require__.bind(null, 272)));
const _a9ba5a12 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/designation-add */ 43).then(__webpack_require__.bind(null, 273)));
const _55b60bb8 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/designation-list */ 44).then(__webpack_require__.bind(null, 274)));
const _72d9a8a8 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/emp-assign-to-user */ 45).then(__webpack_require__.bind(null, 275)));
const _685279f4 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/employee-add */ 47).then(__webpack_require__.bind(null, 276)));
const _4b801d89 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/employee-list */ 48).then(__webpack_require__.bind(null, 277)));
const _f1d8b604 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/leave-approval-list */ 49).then(__webpack_require__.bind(null, 278)));
const _e4ff6630 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/leavel-rquest-add */ 51).then(__webpack_require__.bind(null, 279)));
const _2ade1dfc = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/migrant-employee-list */ 52).then(__webpack_require__.bind(null, 280)));
const _08c6138e = () => interopDefault(__webpack_require__.e(/* import() | pages/holiday/add-holidays */ 53).then(__webpack_require__.bind(null, 281)));
const _03413512 = () => interopDefault(__webpack_require__.e(/* import() | pages/holiday/dashboard */ 54).then(__webpack_require__.bind(null, 282)));
const _277172ac = () => interopDefault(__webpack_require__.e(/* import() | pages/holiday/holiday-add */ 56).then(__webpack_require__.bind(null, 283)));
const _39200e65 = () => interopDefault(__webpack_require__.e(/* import() | pages/holiday/holiday-list */ 57).then(__webpack_require__.bind(null, 284)));
const _286996cc = () => interopDefault(__webpack_require__.e(/* import() | pages/holiday/holiday-type-list */ 58).then(__webpack_require__.bind(null, 285)));
const _1a755867 = () => interopDefault(__webpack_require__.e(/* import() | pages/hrm/dashboard */ 59).then(__webpack_require__.bind(null, 286)));
const _67152d46 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/add-allocation */ 61).then(__webpack_require__.bind(null, 287)));
const _10b5ed80 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/add-leaverole */ 62).then(__webpack_require__.bind(null, 288)));
const _418dd3f8 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/add-leavetype */ 63).then(__webpack_require__.bind(null, 289)));
const _22c6e26a = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/allocation-list */ 64).then(__webpack_require__.bind(null, 290)));
const _663abc53 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/dashboard */ 65).then(__webpack_require__.bind(null, 291)));
const _23e6df16 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/leave-balance-list */ 69).then(__webpack_require__.bind(null, 292)));
const _537f17ca = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/leave-report */ 70).then(__webpack_require__.bind(null, 293)));
const _745992bf = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/leave-request-dashboard */ 71).then(__webpack_require__.bind(null, 294)));
const _095dd4c3 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/leave-request-list */ 72).then(__webpack_require__.bind(null, 295)));
const _1b570efe = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/leave-role-list */ 73).then(__webpack_require__.bind(null, 296)));
const _ce3f468c = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/leave-type-list */ 74).then(__webpack_require__.bind(null, 297)));
const _0d955cdd = () => interopDefault(__webpack_require__.e(/* import() | pages/manufacturer/edit-manufacturer */ 76).then(__webpack_require__.bind(null, 298)));
const _aab9d920 = () => interopDefault(__webpack_require__.e(/* import() | pages/manufacturer/manufacturers-list */ 77).then(__webpack_require__.bind(null, 299)));
const _1ca7b6c5 = () => interopDefault(__webpack_require__.e(/* import() | pages/manufacturer/new-manufacturer */ 78).then(__webpack_require__.bind(null, 300)));
const _1263f808 = () => interopDefault(__webpack_require__.e(/* import() | pages/mlm/report */ 79).then(__webpack_require__.bind(null, 301)));
const _5d1d5dfd = () => interopDefault(__webpack_require__.e(/* import() | pages/models/edit-models */ 80).then(__webpack_require__.bind(null, 302)));
const _0786e691 = () => interopDefault(__webpack_require__.e(/* import() | pages/models/models-list */ 81).then(__webpack_require__.bind(null, 303)));
const _533c4e12 = () => interopDefault(__webpack_require__.e(/* import() | pages/models/new-models */ 82).then(__webpack_require__.bind(null, 304)));
const _2b355997 = () => interopDefault(__webpack_require__.e(/* import() | pages/orders/details */ 83).then(__webpack_require__.bind(null, 305)));
const _246bdf10 = () => interopDefault(__webpack_require__.e(/* import() | pages/orders/edit-orderstatus */ 84).then(__webpack_require__.bind(null, 306)));
const _389679e8 = () => interopDefault(__webpack_require__.e(/* import() | pages/orders/new-orderstatus */ 85).then(__webpack_require__.bind(null, 307)));
const _4d6d5cf8 = () => interopDefault(__webpack_require__.e(/* import() | pages/orders/order-list */ 86).then(__webpack_require__.bind(null, 308)));
const _69dce6ee = () => interopDefault(__webpack_require__.e(/* import() | pages/orders/status-list */ 87).then(__webpack_require__.bind(null, 309)));
const _a3fa676e = () => interopDefault(__webpack_require__.e(/* import() | pages/project/new-project */ 89).then(__webpack_require__.bind(null, 310)));
const _b4d86d76 = () => interopDefault(__webpack_require__.e(/* import() | pages/project/project-list */ 90).then(__webpack_require__.bind(null, 311)));
const _605405fa = () => interopDefault(__webpack_require__.e(/* import() | pages/role/newrole */ 92).then(__webpack_require__.bind(null, 312)));
const _4ca669aa = () => interopDefault(__webpack_require__.e(/* import() | pages/role/role_list */ 93).then(__webpack_require__.bind(null, 313)));
const _000b059b = () => interopDefault(__webpack_require__.e(/* import() | pages/seller/allseller */ 94).then(__webpack_require__.bind(null, 314)));
const _e2e0a640 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/add-salary */ 96).then(__webpack_require__.bind(null, 315)));
const _1c8287ea = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/ads-management */ 97).then(__webpack_require__.bind(null, 316)));
const _e559f910 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/annual-pay-add */ 98).then(__webpack_require__.bind(null, 317)));
const _8ce82952 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/annual-pay-list */ 99).then(__webpack_require__.bind(null, 318)));
const _fa9c2f26 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/bank-master-add */ 100).then(__webpack_require__.bind(null, 319)));
const _7009a502 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/bank-master-list */ 101).then(__webpack_require__.bind(null, 320)));
const _da8159ae = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/bank-short-code-add */ 102).then(__webpack_require__.bind(null, 321)));
const _61a991c6 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/bank-short-code-list */ 103).then(__webpack_require__.bind(null, 322)));
const _739fa01a = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/dashboard */ 104).then(__webpack_require__.bind(null, 323)));
const _75a132d3 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/employee-type-add */ 105).then(__webpack_require__.bind(null, 324)));
const _49f8b148 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/employee-type-list */ 106).then(__webpack_require__.bind(null, 325)));
const _38f0d9f8 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/packages-list */ 107).then(__webpack_require__.bind(null, 326)));
const _09b4fef4 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/pay-group-add */ 108).then(__webpack_require__.bind(null, 327)));
const _6d2d414a = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/pay-group-list */ 109).then(__webpack_require__.bind(null, 328)));
const _420f42df = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/payment-type-add */ 110).then(__webpack_require__.bind(null, 329)));
const _c750ce60 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/payment-type-list */ 111).then(__webpack_require__.bind(null, 330)));
const _4738d16d = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/payroll-payitem-add */ 112).then(__webpack_require__.bind(null, 331)));
const _3c5fdc02 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/payroll-payitem-list */ 113).then(__webpack_require__.bind(null, 332)));
const _5c9fea47 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/salary-list */ 114).then(__webpack_require__.bind(null, 333)));
const _1db43882 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/tax-master-add */ 115).then(__webpack_require__.bind(null, 334)));
const _3551578d = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/tax-master-list */ 116).then(__webpack_require__.bind(null, 335)));
const _21850450 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/wedges-pay-add */ 117).then(__webpack_require__.bind(null, 336)));
const _d61e8612 = () => interopDefault(__webpack_require__.e(/* import() | pages/setting/wedges-pay-list */ 118).then(__webpack_require__.bind(null, 337)));
const _480edd68 = () => interopDefault(__webpack_require__.e(/* import() | pages/task/add-task */ 119).then(__webpack_require__.bind(null, 338)));
const _140820ee = () => interopDefault(__webpack_require__.e(/* import() | pages/task/dashboard */ 120).then(__webpack_require__.bind(null, 339)));
const _7b0253db = () => interopDefault(__webpack_require__.e(/* import() | pages/task/task-list */ 122).then(__webpack_require__.bind(null, 340)));
const _579b2483 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/dashboard */ 124).then(__webpack_require__.bind(null, 341)));
const _408eec8c = () => interopDefault(__webpack_require__.e(/* import() | pages/user/newUser */ 126).then(__webpack_require__.bind(null, 342)));
const _56ffa0fe = () => interopDefault(__webpack_require__.e(/* import() | pages/user/user_list */ 127).then(__webpack_require__.bind(null, 343)));
const _6ae684ec = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 60).then(__webpack_require__.bind(null, 344)));
const _3459c19e = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/edit/leaveallocation/_id */ 66).then(__webpack_require__.bind(null, 345)));
const _6a282bc8 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/edit/leaverole/_id */ 67).then(__webpack_require__.bind(null, 346)));
const _309d0cf8 = () => interopDefault(__webpack_require__.e(/* import() | pages/leave/edit/leavetype/_id */ 68).then(__webpack_require__.bind(null, 347)));
const _6818d599 = () => interopDefault(__webpack_require__.e(/* import() | pages/coupons/edit/_id */ 15).then(__webpack_require__.bind(null, 348)));
const _d19a0628 = () => interopDefault(__webpack_require__.e(/* import() | pages/customer/edit/_id */ 18).then(__webpack_require__.bind(null, 349)));
const _ea77e24a = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/cir-edit/_id */ 39).then(__webpack_require__.bind(null, 350)));
const _02af2452 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/emp-edit/_id */ 46).then(__webpack_require__.bind(null, 351)));
const _e59263e4 = () => interopDefault(__webpack_require__.e(/* import() | pages/employee/leaveRequest/_id */ 50).then(__webpack_require__.bind(null, 352)));
const _7aaffb00 = () => interopDefault(__webpack_require__.e(/* import() | pages/holiday/editholidaylist/_id */ 55).then(__webpack_require__.bind(null, 353)));
const _5407afab = () => interopDefault(__webpack_require__.e(/* import() | pages/seller/edit/_id */ 95).then(__webpack_require__.bind(null, 354)));
const _14c59536 = () => interopDefault(__webpack_require__.e(/* import() | pages/task/edit/_id */ 121).then(__webpack_require__.bind(null, 355)));
const _10152ba7 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/changesPass/_id */ 123).then(__webpack_require__.bind(null, 356)));
const _573c6a5f = () => interopDefault(__webpack_require__.e(/* import() | pages/user/edit/_id */ 125).then(__webpack_require__.bind(null, 357)));

const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/changePassword",
    component: _01e3517e,
    name: "changePassword"
  }, {
    path: "/company-profile",
    component: _7ed16273,
    name: "company-profile"
  }, {
    path: "/dashboard",
    component: _adfaf6a4,
    children: [{
      path: "",
      component: _493fd014,
      name: "dashboard"
    }, {
      path: "profile",
      component: _1bf7aa2a,
      name: "dashboard-profile"
    }]
  }, {
    path: "/login",
    component: _348e2803,
    name: "login"
  }, {
    path: "/profile",
    component: _44d109c3,
    name: "profile"
  }, {
    path: "/register",
    component: _ad99640e,
    name: "register"
  }, {
    path: "/blog/blog-cat",
    component: _562220ba,
    name: "blog-blog-cat"
  }, {
    path: "/blog/blog-list",
    component: _191052a1,
    name: "blog-blog-list"
  }, {
    path: "/blog/edit-blogCat",
    component: _01229d89,
    name: "blog-edit-blogCat"
  }, {
    path: "/blog/new-blog",
    component: _c2a193b2,
    name: "blog-new-blog"
  }, {
    path: "/brands/brands-list",
    component: _cf75e366,
    name: "brands-brands-list"
  }, {
    path: "/brands/edit-brand",
    component: _50542eb4,
    name: "brands-edit-brand"
  }, {
    path: "/brands/new-brand",
    component: _2c8a4368,
    name: "brands-new-brand"
  }, {
    path: "/coupons/all-coupons",
    component: _dce5a16c,
    name: "coupons-all-coupons"
  }, {
    path: "/coupons/new-coupons",
    component: _344258c9,
    name: "coupons-new-coupons"
  }, {
    path: "/customer/customerList",
    component: _11ce4bd0,
    name: "customer-customerList"
  }, {
    path: "/customer/newCustomer",
    component: _fada87cc,
    name: "customer-newCustomer"
  }, {
    path: "/ecommarce/attributes-list",
    component: _5ce6b4e6,
    name: "ecommarce-attributes-list"
  }, {
    path: "/ecommarce/category-add",
    component: _77d3fba0,
    name: "ecommarce-category-add"
  }, {
    path: "/ecommarce/category-edit",
    component: _6a70eb0b,
    name: "ecommarce-category-edit"
  }, {
    path: "/ecommarce/category-list",
    component: _5b28c39f,
    name: "ecommarce-category-list"
  }, {
    path: "/ecommarce/category-percentage-history",
    component: _578b63bc,
    name: "ecommarce-category-percentage-history"
  }, {
    path: "/ecommarce/Old-product-add",
    component: _42b6f10f,
    name: "ecommarce-Old-product-add"
  }, {
    path: "/ecommarce/Old-product-edit",
    component: _80244fe8,
    name: "ecommarce-Old-product-edit"
  }, {
    path: "/ecommarce/product-add",
    component: _d8939456,
    name: "ecommarce-product-add"
  }, {
    path: "/ecommarce/product-edit",
    component: _e251a7f4,
    name: "ecommarce-product-edit"
  }, {
    path: "/ecommarce/product-list",
    component: _7f8f049a,
    name: "ecommarce-product-list"
  }, {
    path: "/ecommarce/product-preview",
    component: _53327108,
    name: "ecommarce-product-preview"
  }, {
    path: "/ecommarce/product-varient",
    component: _d0f58a86,
    name: "ecommarce-product-varient"
  }, {
    path: "/employee/attendance-status",
    component: _5a405602,
    name: "employee-attendance-status"
  }, {
    path: "/employee/change-of-circumstances-add",
    component: _a377ab0a,
    name: "employee-change-of-circumstances-add"
  }, {
    path: "/employee/change-of-circumstances-employee",
    component: _5ad43878,
    name: "employee-change-of-circumstances-employee"
  }, {
    path: "/employee/change-of-circumstances-list",
    component: _9280b698,
    name: "employee-change-of-circumstances-list"
  }, {
    path: "/employee/dashboard",
    component: _575bd640,
    name: "employee-dashboard"
  }, {
    path: "/employee/department-add",
    component: _8fac5eac,
    name: "employee-department-add"
  }, {
    path: "/employee/department-list",
    component: _2ce27736,
    name: "employee-department-list"
  }, {
    path: "/employee/designation-add",
    component: _a9ba5a12,
    name: "employee-designation-add"
  }, {
    path: "/employee/designation-list",
    component: _55b60bb8,
    name: "employee-designation-list"
  }, {
    path: "/employee/emp-assign-to-user",
    component: _72d9a8a8,
    name: "employee-emp-assign-to-user"
  }, {
    path: "/employee/employee-add",
    component: _685279f4,
    name: "employee-employee-add"
  }, {
    path: "/employee/employee-list",
    component: _4b801d89,
    name: "employee-employee-list"
  }, {
    path: "/employee/leave-approval-list",
    component: _f1d8b604,
    name: "employee-leave-approval-list"
  }, {
    path: "/employee/leavel-rquest-add",
    component: _e4ff6630,
    name: "employee-leavel-rquest-add"
  }, {
    path: "/employee/migrant-employee-list",
    component: _2ade1dfc,
    name: "employee-migrant-employee-list"
  }, {
    path: "/holiday/add-holidays",
    component: _08c6138e,
    name: "holiday-add-holidays"
  }, {
    path: "/holiday/dashboard",
    component: _03413512,
    name: "holiday-dashboard"
  }, {
    path: "/holiday/holiday-add",
    component: _277172ac,
    name: "holiday-holiday-add"
  }, {
    path: "/holiday/holiday-list",
    component: _39200e65,
    name: "holiday-holiday-list"
  }, {
    path: "/holiday/holiday-type-list",
    component: _286996cc,
    name: "holiday-holiday-type-list"
  }, {
    path: "/hrm/dashboard",
    component: _1a755867,
    name: "hrm-dashboard"
  }, {
    path: "/leave/add-allocation",
    component: _67152d46,
    name: "leave-add-allocation"
  }, {
    path: "/leave/add-leaverole",
    component: _10b5ed80,
    name: "leave-add-leaverole"
  }, {
    path: "/leave/add-leavetype",
    component: _418dd3f8,
    name: "leave-add-leavetype"
  }, {
    path: "/leave/allocation-list",
    component: _22c6e26a,
    name: "leave-allocation-list"
  }, {
    path: "/leave/dashboard",
    component: _663abc53,
    name: "leave-dashboard"
  }, {
    path: "/leave/leave-balance-list",
    component: _23e6df16,
    name: "leave-leave-balance-list"
  }, {
    path: "/leave/leave-report",
    component: _537f17ca,
    name: "leave-leave-report"
  }, {
    path: "/leave/leave-request-dashboard",
    component: _745992bf,
    name: "leave-leave-request-dashboard"
  }, {
    path: "/leave/leave-request-list",
    component: _095dd4c3,
    name: "leave-leave-request-list"
  }, {
    path: "/leave/leave-role-list",
    component: _1b570efe,
    name: "leave-leave-role-list"
  }, {
    path: "/leave/leave-type-list",
    component: _ce3f468c,
    name: "leave-leave-type-list"
  }, {
    path: "/manufacturer/edit-manufacturer",
    component: _0d955cdd,
    name: "manufacturer-edit-manufacturer"
  }, {
    path: "/manufacturer/manufacturers-list",
    component: _aab9d920,
    name: "manufacturer-manufacturers-list"
  }, {
    path: "/manufacturer/new-manufacturer",
    component: _1ca7b6c5,
    name: "manufacturer-new-manufacturer"
  }, {
    path: "/mlm/report",
    component: _1263f808,
    name: "mlm-report"
  }, {
    path: "/models/edit-models",
    component: _5d1d5dfd,
    name: "models-edit-models"
  }, {
    path: "/models/models-list",
    component: _0786e691,
    name: "models-models-list"
  }, {
    path: "/models/new-models",
    component: _533c4e12,
    name: "models-new-models"
  }, {
    path: "/orders/details",
    component: _2b355997,
    name: "orders-details"
  }, {
    path: "/orders/edit-orderstatus",
    component: _246bdf10,
    name: "orders-edit-orderstatus"
  }, {
    path: "/orders/new-orderstatus",
    component: _389679e8,
    name: "orders-new-orderstatus"
  }, {
    path: "/orders/order-list",
    component: _4d6d5cf8,
    name: "orders-order-list"
  }, {
    path: "/orders/status-list",
    component: _69dce6ee,
    name: "orders-status-list"
  }, {
    path: "/project/new-project",
    component: _a3fa676e,
    name: "project-new-project"
  }, {
    path: "/project/project-list",
    component: _b4d86d76,
    name: "project-project-list"
  }, {
    path: "/role/newrole",
    component: _605405fa,
    name: "role-newrole"
  }, {
    path: "/role/role_list",
    component: _4ca669aa,
    name: "role-role_list"
  }, {
    path: "/seller/allseller",
    component: _000b059b,
    name: "seller-allseller"
  }, {
    path: "/setting/add-salary",
    component: _e2e0a640,
    name: "setting-add-salary"
  }, {
    path: "/setting/ads-management",
    component: _1c8287ea,
    name: "setting-ads-management"
  }, {
    path: "/setting/annual-pay-add",
    component: _e559f910,
    name: "setting-annual-pay-add"
  }, {
    path: "/setting/annual-pay-list",
    component: _8ce82952,
    name: "setting-annual-pay-list"
  }, {
    path: "/setting/bank-master-add",
    component: _fa9c2f26,
    name: "setting-bank-master-add"
  }, {
    path: "/setting/bank-master-list",
    component: _7009a502,
    name: "setting-bank-master-list"
  }, {
    path: "/setting/bank-short-code-add",
    component: _da8159ae,
    name: "setting-bank-short-code-add"
  }, {
    path: "/setting/bank-short-code-list",
    component: _61a991c6,
    name: "setting-bank-short-code-list"
  }, {
    path: "/setting/dashboard",
    component: _739fa01a,
    name: "setting-dashboard"
  }, {
    path: "/setting/employee-type-add",
    component: _75a132d3,
    name: "setting-employee-type-add"
  }, {
    path: "/setting/employee-type-list",
    component: _49f8b148,
    name: "setting-employee-type-list"
  }, {
    path: "/setting/packages-list",
    component: _38f0d9f8,
    name: "setting-packages-list"
  }, {
    path: "/setting/pay-group-add",
    component: _09b4fef4,
    name: "setting-pay-group-add"
  }, {
    path: "/setting/pay-group-list",
    component: _6d2d414a,
    name: "setting-pay-group-list"
  }, {
    path: "/setting/payment-type-add",
    component: _420f42df,
    name: "setting-payment-type-add"
  }, {
    path: "/setting/payment-type-list",
    component: _c750ce60,
    name: "setting-payment-type-list"
  }, {
    path: "/setting/payroll-payitem-add",
    component: _4738d16d,
    name: "setting-payroll-payitem-add"
  }, {
    path: "/setting/payroll-payitem-list",
    component: _3c5fdc02,
    name: "setting-payroll-payitem-list"
  }, {
    path: "/setting/salary-list",
    component: _5c9fea47,
    name: "setting-salary-list"
  }, {
    path: "/setting/tax-master-add",
    component: _1db43882,
    name: "setting-tax-master-add"
  }, {
    path: "/setting/tax-master-list",
    component: _3551578d,
    name: "setting-tax-master-list"
  }, {
    path: "/setting/wedges-pay-add",
    component: _21850450,
    name: "setting-wedges-pay-add"
  }, {
    path: "/setting/wedges-pay-list",
    component: _d61e8612,
    name: "setting-wedges-pay-list"
  }, {
    path: "/task/add-task",
    component: _480edd68,
    name: "task-add-task"
  }, {
    path: "/task/dashboard",
    component: _140820ee,
    name: "task-dashboard"
  }, {
    path: "/task/task-list",
    component: _7b0253db,
    name: "task-task-list"
  }, {
    path: "/user/dashboard",
    component: _579b2483,
    name: "user-dashboard"
  }, {
    path: "/user/newUser",
    component: _408eec8c,
    name: "user-newUser"
  }, {
    path: "/user/user_list",
    component: _56ffa0fe,
    name: "user-user_list"
  }, {
    path: "/",
    component: _6ae684ec,
    name: "index"
  }, {
    path: "/leave/edit/leaveallocation/:id?",
    component: _3459c19e,
    name: "leave-edit-leaveallocation-id"
  }, {
    path: "/leave/edit/leaverole/:id?",
    component: _6a282bc8,
    name: "leave-edit-leaverole-id"
  }, {
    path: "/leave/edit/leavetype/:id?",
    component: _309d0cf8,
    name: "leave-edit-leavetype-id"
  }, {
    path: "/coupons/edit/:id?",
    component: _6818d599,
    name: "coupons-edit-id"
  }, {
    path: "/customer/edit/:id?",
    component: _d19a0628,
    name: "customer-edit-id"
  }, {
    path: "/employee/cir-edit/:id?",
    component: _ea77e24a,
    name: "employee-cir-edit-id"
  }, {
    path: "/employee/emp-edit/:id?",
    component: _02af2452,
    name: "employee-emp-edit-id"
  }, {
    path: "/employee/leaveRequest/:id?",
    component: _e59263e4,
    name: "employee-leaveRequest-id"
  }, {
    path: "/holiday/editholidaylist/:id?",
    component: _7aaffb00,
    name: "holiday-editholidaylist-id"
  }, {
    path: "/seller/edit/:id?",
    component: _5407afab,
    name: "seller-edit-id"
  }, {
    path: "/task/edit/:id?",
    component: _14c59536,
    name: "task-edit-id"
  }, {
    path: "/user/changesPass/:id?",
    component: _10152ba7,
    name: "user-changesPass-id"
  }, {
    path: "/user/edit/:id?",
    component: _573c6a5f,
    name: "user-edit-id"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "__nuxt-error-page"
  }, [_vm._ssrNode("<div class=\"error\">", "</div>", [_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.message)) + "</div> "), _vm.statusCode === 404 ? _vm._ssrNode("<p class=\"description\">", "</p>", [typeof _vm.$route === 'undefined' ? _vm._ssrNode("<a href=\"/\" class=\"error-link\">", "</a>") : _c('NuxtLink', {
    staticClass: "error-link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back to the home page")])], 1) : _vm._e(), _vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_errorvue_type_script_lang_js = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || 'Error';
    }
  },
  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js = (nuxt_errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c2348c3"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "56cb2137"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/quill/dist/quill.snow.css
var quill_snow = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=3c1fc300
var defaultvue_type_template_id_3c1fc300_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Nuxt'), _vm._ssrNode(" "), _vm.$auth.loggedIn ? _vm._ssrNode("<div class=\"wrapper\">", "</div>", [_c('Sidebar'), _vm._ssrNode(" "), _c('NavBar'), _vm._ssrNode(" <div class=\"overlay toggle-icon\"></div> <a href=\"javaScript:;\" class=\"back-to-top\"><i class=\"bx bxs-up-arrow-alt\"></i></a> <footer class=\"page-footer\"><p class=\"mb-0\">Copyright © 2024. All right reserved.</p></footer>")], 2) : _vm._e()], 2);
};
var defaultvue_type_template_id_3c1fc300_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=3c1fc300

// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(21);

// EXTERNAL MODULE: ./components/Sidebar.vue + 4 modules
var Sidebar = __webpack_require__(12);

// EXTERNAL MODULE: ./components/NavBar.vue + 4 modules
var NavBar = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js



/* harmony default export */ var defaultvue_type_script_lang_js = ({
  middleware: "auth",
  components: {
    Sidebar: Sidebar["default"],
    NavBar: NavBar["default"]
  },
  methods: {
    async logout() {
      this.$nuxt.$loading.start();
      this.$auth.logout();
      this.$nuxt.$loading.finish();
      this.$router.push("/login");
    }
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js = (defaultvue_type_script_lang_js); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js,
  defaultvue_type_template_id_3c1fc300_render,
  defaultvue_type_template_id_3c1fc300_staticRenderFns,
  false,
  null,
  null,
  "04d99358"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Sidebar: __webpack_require__(12).default,NavBar: __webpack_require__(13).default})

// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (nuxt_error.options || nuxt_error).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};
(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(31), 'store/index.js');

  // If store is an exported method = classic mode (deprecated)

  // Enforce store modules
  store_store.modules = store_store.modules || {};

  // If the environment supports hot reloading...
})();

// createStore
const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};
function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;
  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }
  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }
  return normalizeModule(moduleData, filePath);
}
function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state);
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }
  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const BackupSidebar = () => __webpack_require__.e(/* import() | components/backup-sidebar */ 1).then(__webpack_require__.bind(null, 358)).then(c => wrapFunctional(c.default || c));
const components_NavBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 13)).then(c => wrapFunctional(c.default || c));
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 2).then(__webpack_require__.bind(null, 365)).then(c => wrapFunctional(c.default || c));
const components_Sidebar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12)).then(c => wrapFunctional(c.default || c));
const TreeView = () => __webpack_require__.e(/* import() | components/tree-view */ 3).then(__webpack_require__.bind(null, 36)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 4).then(__webpack_require__.bind(null, 359)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/defu/dist/defu.cjs
var defu = __webpack_require__(5);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// CONCATENATED MODULE: ./.nuxt/axios.js



// Axios.prototype cannot be modified
const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },
  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }
      this.defaults.headers[scope][name] = value;
    }
  },
  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },
  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },
  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },
  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },
  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },
  create(options) {
    return createAxiosInstance(defu_default()(options, this.defaults));
  }
};

// Request helpers ($get, $post, ...)
for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}
const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};
const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel;

  // Extend axios proto
  extendAxiosInstance(axios);

  // Intercept to apply default headers
  axios.onRequest(config => {
    config.headers = {
      ...axios.defaults.headers.common,
      ...config.headers
    };
  });

  // Setup interceptors

  setupProgress(axios);
  return axios;
};
const setupProgress = axios => {
  if (true) {
    return;
  }

  // A noop loading inteterface for when $nuxt is not yet ready
  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };
  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };
  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }
    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }
    currentRequests--;
    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }
    currentRequests--;
    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }
      return;
    }
    $loading().fail();
    $loading().finish();
  });
  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }
    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };
  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};
/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {};
  // baseURL
  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'https://api.isumax.com/api/';

  // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js
  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  };

  // Proxy SSR request headers headers
  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = {
      ...ctx.req.headers
    };
    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }
    axiosOptions.headers.common = {
      ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }
  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }
  const axios = createAxiosInstance(axiosOptions);

  // Inject axios to the context as $axios
  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "vform"
var external_vform_ = __webpack_require__(6);
var external_vform_default = /*#__PURE__*/__webpack_require__.n(external_vform_);

// CONCATENATED MODULE: ./plugins/vform.js



//import { AlertError } from 'vform'

//Vue.component(HasError.name, HasError)
//Vue.component(AlertError.name, AlertError)

/* harmony default export */ var vform = (({
  app
}, inject) => {
  external_vform_default.a.prototype.submit = function submit(method, url, config = {}) {
    this.startProcessing();
    const data = method === 'get' ? {
      params: this.data()
    } : this.data();
    return new Promise((resolve, reject) => {
      app.$axios.request({
        url: this.route(url),
        method,
        data,
        ...config
      }).then(response => {
        this.finishProcessing();
        resolve(response);
      }).catch(error => {
        this.busy = false;
        if (error.response) {
          this.errors.set(this.extractErrors(error.response));
        }
        reject(error);
      });
    });
  };
  app.$vform = (...params) => new external_vform_default.a(...params);
  inject('vform', (...params) => new external_vform_default.a(...params));
});
// EXTERNAL MODULE: external "requrl"
var external_requrl_ = __webpack_require__(9);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__(16);

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@nuxtjs/auth-next/dist/runtime.mjs






const isUnset = (o) => typeof o === "undefined" || o === null;
const isSet = (o) => !isUnset(o);
const isSameURL = (ctx, a, b) => normalizePath(a, ctx) === normalizePath(b, ctx);
function isRelativeURL(u) {
  return u && u.length && new RegExp([
    "^\\/([a-zA-Z0-9@\\-%_~.:]",
    "[/a-zA-Z0-9@\\-%_~.:]*)?",
    "([?][^#]*)?(#[^#]*)?$"
  ].join("")).test(u);
}
function parseQuery(queryString) {
  const query = {};
  const pairs = queryString.split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}
function encodeQuery(queryObject) {
  return Object.entries(queryObject).filter(([_key, value]) => typeof value !== "undefined").map(([key, value]) => encodeURIComponent(key) + (value != null ? "=" + encodeURIComponent(value) : "")).join("&");
}
function routeOption(route, key, value) {
  return route.matched.some((m) => {
    if (false) {} else {
      return Object.values(m.components).some((component) => Object.values(component._Ctor).some((ctor) => ctor.options && ctor.options[key] === value));
    }
  });
}
function runtime_getMatchedComponents(route, matches = []) {
  return [].concat(...[], ...route.matched.map(function(m, index) {
    return Object.keys(m.components).map(function(key) {
      matches.push(index);
      return m.components[key];
    });
  }));
}
function normalizePath(path = "", ctx) {
  let result = path.split("?")[0];
  if (ctx && ctx.base) {
    result = result.replace(ctx.base, "/");
  }
  if (result.charAt(result.length - 1) === "/") {
    result = result.slice(0, -1);
  }
  result = result.replace(/\/+/g, "/");
  return result;
}
function encodeValue(val) {
  if (typeof val === "string") {
    return val;
  }
  return JSON.stringify(val);
}
function decodeValue(val) {
  if (typeof val === "string") {
    try {
      return JSON.parse(val);
    } catch (_) {
    }
  }
  return val;
}
function getProp(holder, propName) {
  if (!propName || !holder || typeof holder !== "object") {
    return holder;
  }
  if (propName in holder) {
    return holder[propName];
  }
  const propParts = Array.isArray(propName) ? propName : (propName + "").split(".");
  let result = holder;
  while (propParts.length && result) {
    result = result[propParts.shift()];
  }
  return result;
}
function addTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string" || token.startsWith(tokenType)) {
    return token;
  }
  return tokenType + " " + token;
}
function removeTokenPrefix(token, tokenType) {
  if (!token || !tokenType || typeof token !== "string") {
    return token;
  }
  return token.replace(tokenType + " ", "");
}
function runtime_urlJoin(...args) {
  return args.join("/").replace(/[/]+/g, "/").replace(/^(.+):\//, "$1://").replace(/^file:/, "file:/").replace(/\/(\?|&|#[^!])/g, "$1").replace(/\?/g, "&").replace("&", "?");
}
function cleanObj(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function randomString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class runtime_Storage {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.options = options;
    this._initState();
  }
  setUniversal(key, value) {
    if (isUnset(value)) {
      return this.removeUniversal(key);
    }
    this.setCookie(key, value);
    this.setLocalStorage(key, value);
    this.setState(key, value);
    return value;
  }
  getUniversal(key) {
    let value;
    if (true) {
      value = this.getState(key);
    }
    if (isUnset(value)) {
      value = this.getCookie(key);
    }
    if (isUnset(value)) {
      value = this.getLocalStorage(key);
    }
    if (isUnset(value)) {
      value = this.getState(key);
    }
    return value;
  }
  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);
    if (isUnset(value) && isSet(defaultValue)) {
      value = defaultValue;
    }
    if (isSet(value)) {
      this.setUniversal(key, value);
    }
    return value;
  }
  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  }
  _initState() {
    external_vue_.set(this, "_state", {});
    this._useVuex = this.options.vuex && !!this.ctx.store;
    if (this._useVuex) {
      const storeModule = {
        namespaced: true,
        state: () => this.options.initialState,
        mutations: {
          SET(state, payload) {
            external_vue_.set(state, payload.key, payload.value);
          }
        }
      };
      this.ctx.store.registerModule(this.options.vuex.namespace, storeModule, {
        preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
      });
      this.state = this.ctx.store.state[this.options.vuex.namespace];
    } else {
      external_vue_.set(this, "state", {});
      console.warn("[AUTH] The Vuex Store is not activated. This might cause issues in auth module behavior, like redirects not working properly.To activate it, see https://nuxtjs.org/docs/2.x/directory-structure/store");
    }
  }
  setState(key, value) {
    if (key[0] === "_") {
      external_vue_.set(this._state, key, value);
    } else if (this._useVuex) {
      this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
        key,
        value
      });
    } else {
      external_vue_.set(this.state, key, value);
    }
    return value;
  }
  getState(key) {
    if (key[0] !== "_") {
      return this.state[key];
    } else {
      return this._state[key];
    }
  }
  watchState(key, fn) {
    if (this._useVuex) {
      return this.ctx.store.watch((state) => getProp(state[this.options.vuex.namespace], key), fn);
    }
  }
  removeState(key) {
    this.setState(key, void 0);
  }
  setLocalStorage(key, value) {
    if (isUnset(value)) {
      return this.removeLocalStorage(key);
    }
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    try {
      localStorage.setItem(_key, encodeValue(value));
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }
    return value;
  }
  getLocalStorage(key) {
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    const value = localStorage.getItem(_key);
    return decodeValue(value);
  }
  removeLocalStorage(key) {
    if (!this.isLocalStorageEnabled()) {
      return;
    }
    const _key = this.getPrefix() + key;
    localStorage.removeItem(_key);
  }
  getCookies() {
    if (!this.isCookiesEnabled()) {
      return;
    }
    const cookieStr =  false ? undefined : this.ctx.req.headers.cookie;
    return external_cookie_.parse(cookieStr || "") || {};
  }
  setCookie(key, value, options = {}) {
    if (!this.options.cookie ||  true && !this.ctx.res) {
      return;
    }
    if (!this.isCookiesEnabled()) {
      return;
    }
    const _prefix = options.prefix !== void 0 ? options.prefix : this.options.cookie.prefix;
    const _key = _prefix + key;
    const _options = Object.assign({}, this.options.cookie.options, options);
    const _value = encodeValue(value);
    if (isUnset(value)) {
      _options.maxAge = -1;
    }
    if (typeof _options.expires === "number") {
      _options.expires = new Date(Date.now() + _options.expires * 864e5);
    }
    const serializedCookie = external_cookie_.serialize(_key, _value, _options);
    if (false) {} else if ( true && this.ctx.res) {
      let cookies = this.ctx.res.getHeader("Set-Cookie") || [];
      if (!Array.isArray(cookies))
        cookies = [cookies];
      cookies.unshift(serializedCookie);
      this.ctx.res.setHeader("Set-Cookie", cookies.filter((v, i, arr) => arr.findIndex((val) => val.startsWith(v.substr(0, v.indexOf("=")))) === i));
    }
    return value;
  }
  getCookie(key) {
    if (!this.options.cookie ||  true && !this.ctx.req) {
      return;
    }
    if (!this.isCookiesEnabled()) {
      return;
    }
    const _key = this.options.cookie.prefix + key;
    const cookies = this.getCookies();
    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : void 0;
    return decodeValue(value);
  }
  removeCookie(key, options) {
    this.setCookie(key, void 0, options);
  }
  getPrefix() {
    if (!this.options.localStorage) {
      throw new Error("Cannot get prefix; localStorage is off");
    }
    return this.options.localStorage.prefix;
  }
  isLocalStorageEnabled() {
    if (!this.options.localStorage) {
      return false;
    }
    if (true) {
      return false;
    }
    const test = "test";
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        console.warn("[AUTH] Local storage is enabled in config, but browser doesn't support it");
      }
      return false;
    }
  }
  isCookiesEnabled() {
    if (!this.options.cookie) {
      return false;
    }
    if (true) {
      return true;
    }
    if (window.navigator.cookieEnabled) {
      return true;
    } else {
      console.warn("[AUTH] Cookies is enabled in config, but browser doesn't support it");
      return false;
    }
  }
}

class runtime_Auth {
  constructor(ctx, options) {
    this.strategies = {};
    this._errorListeners = [];
    this._redirectListeners = [];
    this.ctx = ctx;
    this.options = options;
    const initialState = { user: null, loggedIn: false };
    const storage = new runtime_Storage(ctx, { ...options, ...{ initialState } });
    this.$storage = storage;
    this.$state = storage.state;
  }
  get state() {
    if (!this._stateWarnShown) {
      this._stateWarnShown = true;
      console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn");
    }
    return this.$state;
  }
  get strategy() {
    return this.getStrategy();
  }
  getStrategy(throwException = true) {
    if (throwException) {
      if (!this.$state.strategy) {
        throw new Error("No strategy is set!");
      }
      if (!this.strategies[this.$state.strategy]) {
        throw new Error("Strategy not supported: " + this.$state.strategy);
      }
    }
    return this.strategies[this.$state.strategy];
  }
  get user() {
    return this.$state.user;
  }
  get loggedIn() {
    return this.$state.loggedIn;
  }
  get busy() {
    return this.$storage.getState("busy");
  }
  async init() {
    if (this.options.resetOnError) {
      this.onError((...args) => {
        if (typeof this.options.resetOnError !== "function" || this.options.resetOnError(...args)) {
          this.reset();
        }
      });
    }
    this.$storage.syncUniversal("strategy", this.options.defaultStrategy);
    if (!this.getStrategy(false)) {
      this.$storage.setUniversal("strategy", this.options.defaultStrategy);
      if (!this.getStrategy(false)) {
        return Promise.resolve();
      }
    }
    try {
      await this.mounted();
    } catch (error) {
      this.callOnError(error);
    } finally {
      if (false) {}
    }
  }
  getState(key) {
    if (!this._getStateWarnShown) {
      this._getStateWarnShown = true;
      console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn");
    }
    return this.$storage.getState(key);
  }
  registerStrategy(name, strategy) {
    this.strategies[name] = strategy;
  }
  setStrategy(name) {
    if (name === this.$storage.getUniversal("strategy")) {
      return Promise.resolve();
    }
    if (!this.strategies[name]) {
      throw new Error(`Strategy ${name} is not defined!`);
    }
    this.reset();
    this.$storage.setUniversal("strategy", name);
    return this.mounted();
  }
  mounted(...args) {
    if (!this.getStrategy().mounted) {
      return this.fetchUserOnce();
    }
    return Promise.resolve(this.getStrategy().mounted(...args)).catch((error) => {
      this.callOnError(error, { method: "mounted" });
      return Promise.reject(error);
    });
  }
  loginWith(name, ...args) {
    return this.setStrategy(name).then(() => this.login(...args));
  }
  login(...args) {
    if (!this.getStrategy().login) {
      return Promise.resolve();
    }
    return this.wrapLogin(this.getStrategy().login(...args)).catch((error) => {
      this.callOnError(error, { method: "login" });
      return Promise.reject(error);
    });
  }
  fetchUser(...args) {
    if (!this.getStrategy().fetchUser) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().fetchUser(...args)).catch((error) => {
      this.callOnError(error, { method: "fetchUser" });
      return Promise.reject(error);
    });
  }
  logout(...args) {
    if (!this.getStrategy().logout) {
      this.reset();
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().logout(...args)).catch((error) => {
      this.callOnError(error, { method: "logout" });
      return Promise.reject(error);
    });
  }
  setUserToken(token, refreshToken) {
    if (!this.getStrategy().setUserToken) {
      this.getStrategy().token.set(token);
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().setUserToken(token, refreshToken)).catch((error) => {
      this.callOnError(error, { method: "setUserToken" });
      return Promise.reject(error);
    });
  }
  reset(...args) {
    if (!this.getStrategy().reset) {
      this.setUser(false);
      this.getStrategy().token.reset();
      this.getStrategy().refreshToken.reset();
    }
    return this.getStrategy().reset(...args);
  }
  refreshTokens() {
    if (!this.getStrategy().refreshController) {
      return Promise.resolve();
    }
    return Promise.resolve(this.getStrategy().refreshController.handleRefresh()).catch((error) => {
      this.callOnError(error, { method: "refreshTokens" });
      return Promise.reject(error);
    });
  }
  check(...args) {
    if (!this.getStrategy().check) {
      return { valid: true };
    }
    return this.getStrategy().check(...args);
  }
  fetchUserOnce(...args) {
    if (!this.$state.user) {
      return this.fetchUser(...args);
    }
    return Promise.resolve();
  }
  setUser(user) {
    this.$storage.setState("user", user);
    let check = { valid: Boolean(user) };
    if (check.valid) {
      check = this.check();
    }
    this.$storage.setState("loggedIn", check.valid);
  }
  request(endpoint, defaults = {}) {
    const _endpoint = typeof defaults === "object" ? Object.assign({}, defaults, endpoint) : endpoint;
    if (_endpoint.baseURL === "") {
      _endpoint.baseURL = external_requrl_(this.ctx.req);
    }
    if (!this.ctx.app.$axios) {
      console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file");
      return;
    }
    return this.ctx.app.$axios.request(_endpoint).catch((error) => {
      this.callOnError(error, { method: "request" });
      return Promise.reject(error);
    });
  }
  requestWith(strategy, endpoint, defaults) {
    const token = this.getStrategy().token.get();
    const _endpoint = Object.assign({}, defaults, endpoint);
    const tokenName = this.strategies[strategy].options.token.name || "Authorization";
    if (!_endpoint.headers) {
      _endpoint.headers = {};
    }
    if (!_endpoint.headers[tokenName] && isSet(token) && token && typeof token === "string") {
      _endpoint.headers[tokenName] = token;
    }
    return this.request(_endpoint);
  }
  wrapLogin(promise) {
    this.$storage.setState("busy", true);
    this.error = null;
    return Promise.resolve(promise).then((response) => {
      this.$storage.setState("busy", false);
      return response;
    }).catch((error) => {
      this.$storage.setState("busy", false);
      return Promise.reject(error);
    });
  }
  onError(listener) {
    this._errorListeners.push(listener);
  }
  callOnError(error, payload = {}) {
    this.error = error;
    for (const fn of this._errorListeners) {
      fn(error, payload);
    }
  }
  redirect(name, noRouter = false) {
    if (!this.options.redirect) {
      return;
    }
    const from = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path;
    let to = this.options.redirect[name];
    if (!to) {
      return;
    }
    if (this.options.rewriteRedirects) {
      if (name === "login" && isRelativeURL(from) && !isSameURL(this.ctx, to, from)) {
        this.$storage.setUniversal("redirect", from);
      }
      if (name === "home") {
        const redirect = this.$storage.getUniversal("redirect");
        this.$storage.setUniversal("redirect", null);
        if (isRelativeURL(redirect)) {
          to = redirect;
        }
      }
    }
    to = this.callOnRedirect(to, from) || to;
    if (isSameURL(this.ctx, to, from)) {
      return;
    }
    if (false) {} else {
      this.ctx.redirect(to, this.ctx.query);
    }
  }
  onRedirect(listener) {
    this._redirectListeners.push(listener);
  }
  callOnRedirect(to, from) {
    for (const fn of this._redirectListeners) {
      to = fn(to, from) || to;
    }
    return to;
  }
  hasScope(scope) {
    const userScopes = this.$state.user && getProp(this.$state.user, this.options.scopeKey);
    if (!userScopes) {
      return false;
    }
    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }
    return Boolean(getProp(userScopes, scope));
  }
}

const authMiddleware = async (ctx) => {
  if (routeOption(ctx.route, "auth", false)) {
    return;
  }
  const matches = [];
  const Components = runtime_getMatchedComponents(ctx.route, matches);
  if (!Components.length) {
    return;
  }
  const { login, callback } = ctx.$auth.options.redirect;
  const pageIsInGuestMode = routeOption(ctx.route, "auth", "guest");
  const insidePage = (page) => normalizePath(ctx.route.path, ctx) === normalizePath(page, ctx);
  if (ctx.$auth.$state.loggedIn) {
    const { tokenExpired, refreshTokenExpired, isRefreshable } = ctx.$auth.check(true);
    if (!login || insidePage(login) || pageIsInGuestMode) {
      ctx.$auth.redirect("home");
    }
    if (refreshTokenExpired) {
      ctx.$auth.reset();
    } else if (tokenExpired) {
      if (isRefreshable) {
        try {
          await ctx.$auth.refreshTokens();
        } catch (error) {
          ctx.$auth.reset();
        }
      } else {
        ctx.$auth.reset();
      }
    }
  } else if (!pageIsInGuestMode && (!callback || !insidePage(callback))) {
    ctx.$auth.redirect("login");
  }
};

class ConfigurationDocumentRequestError extends Error {
  constructor() {
    super("Error loading OpenIDConnect configuration document");
    this.name = "ConfigurationDocumentRequestError";
  }
}

const ConfigurationDocumentWarning = (message) => console.warn(`[AUTH] [OPENID CONNECT] Invalid configuration. ${message}`);
class runtime_ConfigurationDocument {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
    this.key = "_configuration_document." + this.scheme.name;
  }
  _set(value) {
    return this.$storage.setState(this.key, value);
  }
  get() {
    return this.$storage.getState(this.key);
  }
  set(value) {
    this._set(value);
    return value;
  }
  async request() {
    var _a, _b, _c, _d;
    const serverDoc = (_d = (_c = (_b = (_a = this.scheme.$auth.ctx) == null ? void 0 : _a.nuxtState) == null ? void 0 : _b.$auth) == null ? void 0 : _c.openIDConnect) == null ? void 0 : _d.configurationDocument;
    if (false) {}
    if (!this.get()) {
      const configurationDocument = await this.scheme.requestHandler.axios.$get(this.scheme.options.endpoints.configuration).catch((e) => Promise.reject(e));
      if (true) {
        this.scheme.$auth.ctx.beforeNuxtRender(({ nuxtState }) => {
          nuxtState.$auth = {
            oidc: {
              configurationDocument
            }
          };
        });
      }
      this.set(configurationDocument);
    }
  }
  validate() {
    const mapping = {
      responseType: "response_type_supported",
      scope: "scopes_supported",
      grantType: "grant_types_supported",
      acrValues: "acr_values_supported"
    };
    Object.keys(mapping).forEach((optionsKey) => {
      const configDocument = this.get();
      const configDocumentKey = mapping[optionsKey];
      const configDocumentValues = configDocument[configDocumentKey];
      const optionsValues = this.scheme.options[optionsKey];
      if (typeof configDocumentValues !== "undefined") {
        if (Array.isArray(optionsValues) && Array.isArray(configDocumentValues)) {
          optionsValues.forEach((optionsValue) => {
            if (!configDocumentValues.includes(optionsValue)) {
              ConfigurationDocumentWarning(`A value of scheme options ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
            }
          });
        }
        if (!Array.isArray(optionsValues) && Array.isArray(configDocumentValues) && !configDocumentValues.includes(optionsValues)) {
          ConfigurationDocumentWarning(`Value of scheme option ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
        }
        if (!Array.isArray(optionsValues) && !Array.isArray(configDocumentValues) && configDocumentValues !== optionsValues) {
          ConfigurationDocumentWarning(`Value of scheme option ${optionsKey} is not supported by ${configDocumentKey} of by Authorization Server.`);
        }
      }
    });
  }
  async init() {
    await this.request().catch(() => {
      throw new ConfigurationDocumentRequestError();
    });
    this.validate();
    this.setSchemeEndpoints();
  }
  setSchemeEndpoints() {
    const configurationDocument = this.get();
    this.scheme.options.endpoints = defu(this.scheme.options.endpoints, {
      authorization: configurationDocument.authorization_endpoint,
      token: configurationDocument.token_endpoint,
      userInfo: configurationDocument.userinfo_endpoint,
      logout: configurationDocument.end_session_endpoint
    });
  }
  reset() {
    this._set(false);
  }
}

class ExpiredAuthSessionError extends Error {
  constructor() {
    super("Both token and refresh token have expired. Your request was aborted.");
    this.name = "ExpiredAuthSessionError";
  }
}

class RefreshController {
  constructor(scheme) {
    this.scheme = scheme;
    this._refreshPromise = null;
    this.$auth = scheme.$auth;
  }
  handleRefresh() {
    if (this._refreshPromise) {
      return this._refreshPromise;
    }
    return this._doRefresh();
  }
  _doRefresh() {
    this._refreshPromise = new Promise((resolve, reject) => {
      this.scheme.refreshTokens().then((response) => {
        this._refreshPromise = null;
        resolve(response);
      }).catch((error) => {
        this._refreshPromise = null;
        reject(error);
      });
    });
    return this._refreshPromise;
  }
}

var TokenStatusEnum;
(function(TokenStatusEnum2) {
  TokenStatusEnum2["UNKNOWN"] = "UNKNOWN";
  TokenStatusEnum2["VALID"] = "VALID";
  TokenStatusEnum2["EXPIRED"] = "EXPIRED";
})(TokenStatusEnum || (TokenStatusEnum = {}));
class TokenStatus {
  constructor(token, tokenExpiresAt) {
    this._status = this._calculate(token, tokenExpiresAt);
  }
  unknown() {
    return TokenStatusEnum.UNKNOWN === this._status;
  }
  valid() {
    return TokenStatusEnum.VALID === this._status;
  }
  expired() {
    return TokenStatusEnum.EXPIRED === this._status;
  }
  _calculate(token, tokenExpiresAt) {
    const now = Date.now();
    try {
      if (!token || !tokenExpiresAt) {
        return TokenStatusEnum.UNKNOWN;
      }
    } catch (error) {
      return TokenStatusEnum.UNKNOWN;
    }
    const timeSlackMillis = 500;
    tokenExpiresAt -= timeSlackMillis;
    if (now < tokenExpiresAt) {
      return TokenStatusEnum.VALID;
    }
    return TokenStatusEnum.EXPIRED;
  }
}

class runtime_RefreshToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const refreshToken = addTokenPrefix(tokenValue, this.scheme.options.refreshToken.type);
    this._setToken(refreshToken);
    this._updateExpiration(refreshToken);
    return refreshToken;
  }
  sync() {
    const refreshToken = this._syncToken();
    this._syncExpiration();
    return refreshToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.refreshToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(refreshToken) {
    let refreshTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.refreshToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      refreshTokenExpiration = external_jwt_decode_(refreshToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      refreshTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(refreshTokenExpiration || false);
  }
  _setToken(refreshToken) {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, refreshToken);
  }
  _syncToken() {
    const _key = this.scheme.options.refreshToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class RequestHandler {
  constructor(scheme, axios) {
    this.scheme = scheme;
    this.axios = axios;
    this.interceptor = null;
  }
  setHeader(token) {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, token);
    }
  }
  clearHeader() {
    if (this.scheme.options.token.global) {
      this.axios.setHeader(this.scheme.options.token.name, false);
    }
  }
  initializeRequestInterceptor(refreshEndpoint) {
    this.interceptor = this.axios.interceptors.request.use(async (config) => {
      if (!this._needToken(config) || config.url === refreshEndpoint) {
        return config;
      }
      const { valid, tokenExpired, refreshTokenExpired, isRefreshable } = this.scheme.check(true);
      let isValid = valid;
      if (refreshTokenExpired) {
        this.scheme.reset();
        throw new ExpiredAuthSessionError();
      }
      if (tokenExpired) {
        if (!isRefreshable) {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        }
        isValid = await this.scheme.refreshTokens().then(() => true).catch(() => {
          this.scheme.reset();
          throw new ExpiredAuthSessionError();
        });
      }
      const token = this.scheme.token.get();
      if (!isValid) {
        if (!token && this._requestHasAuthorizationHeader(config)) {
          throw new ExpiredAuthSessionError();
        }
        return config;
      }
      return this._getUpdatedRequestConfig(config, token);
    });
  }
  reset() {
    this.axios.interceptors.request.eject(this.interceptor);
    this.interceptor = null;
  }
  _needToken(config) {
    const options = this.scheme.options;
    return options.token.global || Object.values(options.endpoints).some((endpoint) => typeof endpoint === "object" ? endpoint.url === config.url : endpoint === config.url);
  }
  _getUpdatedRequestConfig(config, token) {
    if (typeof token === "string") {
      config.headers[this.scheme.options.token.name] = token;
    }
    return config;
  }
  _requestHasAuthorizationHeader(config) {
    return !!config.headers.common[this.scheme.options.token.name];
  }
}

class runtime_Token {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const token = addTokenPrefix(tokenValue, this.scheme.options.token.type);
    this._setToken(token);
    this._updateExpiration(token);
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  sync() {
    const token = this._syncToken();
    this._syncExpiration();
    if (typeof token === "string") {
      this.scheme.requestHandler.setHeader(token);
    }
    return token;
  }
  reset() {
    this.scheme.requestHandler.clearHeader();
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.token.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(token) {
    let tokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.token.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      tokenExpiration = external_jwt_decode_(token + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      tokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(tokenExpiration || false);
  }
  _setToken(token) {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, token);
  }
  _syncToken() {
    const _key = this.scheme.options.token.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
}

class runtime_IdToken {
  constructor(scheme, storage) {
    this.scheme = scheme;
    this.$storage = storage;
  }
  get() {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  set(tokenValue) {
    const idToken = addTokenPrefix(tokenValue, this.scheme.options.idToken.type);
    this._setToken(idToken);
    this._updateExpiration(idToken);
    return idToken;
  }
  sync() {
    const idToken = this._syncToken();
    this._syncExpiration();
    return idToken;
  }
  reset() {
    this._setToken(false);
    this._setExpiration(false);
  }
  status() {
    return new TokenStatus(this.get(), this._getExpiration());
  }
  _getExpiration() {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.getUniversal(_key);
  }
  _setExpiration(expiration) {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.setUniversal(_key, expiration);
  }
  _syncExpiration() {
    const _key = this.scheme.options.idToken.expirationPrefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  _updateExpiration(idToken) {
    let idTokenExpiration;
    const _tokenIssuedAtMillis = Date.now();
    const _tokenTTLMillis = Number(this.scheme.options.idToken.maxAge) * 1e3;
    const _tokenExpiresAtMillis = _tokenTTLMillis ? _tokenIssuedAtMillis + _tokenTTLMillis : 0;
    try {
      idTokenExpiration = external_jwt_decode_(idToken + "").exp * 1e3 || _tokenExpiresAtMillis;
    } catch (error) {
      idTokenExpiration = _tokenExpiresAtMillis;
      if (!(error && error.name === "InvalidTokenError")) {
        throw error;
      }
    }
    return this._setExpiration(idTokenExpiration || false);
  }
  _setToken(idToken) {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.setUniversal(_key, idToken);
  }
  _syncToken() {
    const _key = this.scheme.options.idToken.prefix + this.scheme.name;
    return this.$storage.syncUniversal(_key);
  }
  userInfo() {
    const idToken = this.get();
    if (typeof idToken === "string") {
      return external_jwt_decode_(idToken);
    }
  }
}

class runtime_BaseScheme {
  constructor($auth, ...options) {
    this.$auth = $auth;
    this.options = options.reduce((p, c) => defu(p, c), {});
  }
  get name() {
    return this.options.name;
  }
}

const DEFAULTS$4 = {
  name: "local",
  endpoints: {
    login: {
      url: "/api/auth/login",
      method: "post"
    },
    logout: {
      url: "/api/auth/logout",
      method: "post"
    },
    user: {
      url: "/api/auth/user",
      method: "get"
    }
  },
  token: {
    property: "token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    required: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  user: {
    property: "user",
    autoFetch: true
  },
  clientId: false,
  grantType: false,
  scope: false
};
class LocalScheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$4);
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false
    };
    const token = this.token.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted({
    tokenCallback = () => this.$auth.reset(),
    refreshTokenCallback = void 0
  } = {}) {
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired && typeof refreshTokenCallback === "function") {
      refreshTokenCallback();
    } else if (tokenExpired && typeof tokenCallback === "function") {
      tokenCallback();
    }
    this.initializeRequestInterceptor();
    return this.$auth.fetchUserOnce();
  }
  async login(endpoint, { reset = true } = {}) {
    if (!this.options.endpoints.login) {
      return;
    }
    if (reset) {
      this.$auth.reset({ resetInterceptor: false });
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = this.options.grantType;
    }
    if (this.options.scope) {
      endpoint.data.scope = this.options.scope;
    }
    const response = await this.$auth.request(endpoint, this.options.endpoints.login);
    this.updateTokens(response);
    if (!this.requestHandler.interceptor) {
      this.initializeRequestInterceptor();
    }
    if (this.options.user.autoFetch) {
      await this.fetchUser();
    }
    return response;
  }
  setUserToken(token) {
    this.token.set(token);
    return this.fetchUser();
  }
  fetchUser(endpoint) {
    if (!this.check().valid) {
      return Promise.resolve();
    }
    if (!this.options.endpoints.user) {
      this.$auth.setUser({});
      return Promise.resolve();
    }
    return this.$auth.requestWith(this.name, endpoint, this.options.endpoints.user).then((response) => {
      const userData = getProp(response.data, this.options.user.property);
      if (!userData) {
        const error = new Error(`User Data response does not contain field ${this.options.user.property}`);
        return Promise.reject(error);
      }
      this.$auth.setUser(userData);
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "fetchUser" });
      return Promise.reject(error);
    });
  }
  async logout(endpoint = {}) {
    if (this.options.endpoints.logout) {
      await this.$auth.requestWith(this.name, endpoint, this.options.endpoints.logout).catch(() => {
      });
    }
    return this.$auth.reset();
  }
  reset({ resetInterceptor = true } = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    this.token.set(token);
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor();
  }
}

const DEFAULTS$3 = {
  name: "cookie",
  cookie: {
    name: null
  },
  token: {
    type: "",
    property: "",
    maxAge: false,
    global: false,
    required: false
  },
  endpoints: {
    csrf: null
  }
};
class CookieScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS$3);
  }
  mounted() {
    if (true) {
      this.$auth.ctx.$axios.setHeader("referer", this.$auth.ctx.req.headers.host);
    }
    return super.mounted();
  }
  check() {
    const response = { valid: false };
    if (!super.check().valid) {
      return response;
    }
    if (this.options.cookie.name) {
      const cookies = this.$auth.$storage.getCookies();
      response.valid = Boolean(cookies[this.options.cookie.name]);
      return response;
    }
    response.valid = true;
    return response;
  }
  async login(endpoint) {
    this.$auth.reset();
    if (this.options.endpoints.csrf) {
      await this.$auth.request(this.options.endpoints.csrf, {
        maxRedirects: 0
      });
    }
    return super.login(endpoint, { reset: false });
  }
  reset() {
    if (this.options.cookie.name) {
      this.$auth.$storage.setCookie(this.options.cookie.name, null, {
        prefix: ""
      });
    }
    return super.reset();
  }
}

const DEFAULTS$2 = {
  name: "oauth2",
  accessType: null,
  redirectUri: null,
  logoutRedirectUri: null,
  clientId: null,
  audience: null,
  grantType: null,
  responseMode: null,
  acrValues: null,
  autoLogout: false,
  endpoints: {
    logout: null,
    authorization: null,
    token: null,
    userInfo: null
  },
  scope: [],
  token: {
    property: "access_token",
    type: "Bearer",
    name: "Authorization",
    maxAge: 1800,
    global: true,
    prefix: "_token.",
    expirationPrefix: "_token_expiration."
  },
  refreshToken: {
    property: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  user: {
    property: false
  },
  responseType: "token",
  codeChallengeMethod: "implicit"
};
class runtime_Oauth2Scheme extends runtime_BaseScheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$2);
    this.req = $auth.ctx.req;
    this.token = new runtime_Token(this, this.$auth.$storage);
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
    this.requestHandler = new RequestHandler(this, this.$auth.ctx.$axios);
  }
  get scope() {
    return Array.isArray(this.options.scope) ? this.options.scope.join(" ") : this.options.scope;
  }
  get redirectURI() {
    const basePath = this.$auth.ctx.base || "";
    const path = normalizePath(basePath + "/" + this.$auth.options.redirect.callback);
    return this.options.redirectUri || runtime_urlJoin(external_requrl_(this.req), path);
  }
  get logoutRedirectURI() {
    return this.options.logoutRedirectUri || runtime_urlJoin(external_requrl_(this.req), this.$auth.options.redirect.logout);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
  }
  async login(_opts = {}) {
    const opts = {
      protocol: "oauth2",
      response_type: this.options.responseType,
      access_type: this.options.accessType,
      client_id: this.options.clientId,
      redirect_uri: this.redirectURI,
      scope: this.scope,
      state: _opts.state || randomString(10),
      code_challenge_method: this.options.codeChallengeMethod,
      ..._opts.params
    };
    if (this.options.audience) {
      opts.audience = this.options.audience;
    }
    if (opts.response_type.includes("token") || opts.response_type.includes("id_token")) {
      opts.nonce = _opts.nonce || randomString(10);
    }
    if (opts.code_challenge_method) {
      switch (opts.code_challenge_method) {
        case "plain":
        case "S256":
          {
            const state = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_state", state);
            const codeVerifier = this.generateRandomString();
            this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", codeVerifier);
            const codeChallenge = await this.pkceChallengeFromVerifier(codeVerifier, opts.code_challenge_method === "S256");
            opts.code_challenge = window.encodeURIComponent(codeChallenge);
          }
          break;
      }
    }
    if (this.options.responseMode) {
      opts.response_mode = this.options.responseMode;
    }
    if (this.options.acrValues) {
      opts.acr_values = this.options.acrValues;
    }
    this.$auth.$storage.setUniversal(this.name + ".state", opts.state);
    const url = this.options.endpoints.authorization + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId + "",
        logout_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const response = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(getProp(response.data, this.options.user.property));
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path, this.$auth.ctx) !== normalizePath(this.$auth.options.redirect.callback, this.$auth.ctx)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId + "",
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    if (this.$auth.options.watchLoggedIn) {
      this.$auth.redirect("home", true);
      return true;
    }
  }
  async refreshTokens() {
    const refreshToken = this.refreshToken.get();
    if (!refreshToken) {
      return;
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    this.requestHandler.clearHeader();
    const response = await this.$auth.request({
      method: "post",
      url: this.options.endpoints.token,
      baseURL: "",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: encodeQuery({
        refresh_token: removeTokenPrefix(refreshToken, this.options.token.type),
        scopes: this.scope,
        client_id: this.options.clientId + "",
        grant_type: "refresh_token"
      })
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "refreshToken" });
      return Promise.reject(error);
    });
    this.updateTokens(response);
    return response;
  }
  updateTokens(response) {
    const token = getProp(response.data, this.options.token.property);
    const refreshToken = getProp(response.data, this.options.refreshToken.property);
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
  }
  async pkceChallengeFromVerifier(v, hashValue) {
    if (hashValue) {
      const hashed = await this._sha256(v);
      return this._base64UrlEncode(hashed);
    }
    return v;
  }
  generateRandomString() {
    const array = new Uint32Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(16)).substr(-2)).join("");
  }
  _sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  }
  _base64UrlEncode(str) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
}

const DEFAULTS$1 = {
  name: "openIDConnect",
  responseType: "code",
  grantType: "authorization_code",
  scope: ["openid", "profile", "offline_access"],
  idToken: {
    property: "id_token",
    maxAge: 1800,
    prefix: "_id_token.",
    expirationPrefix: "_id_token_expiration."
  },
  codeChallengeMethod: "S256"
};
class OpenIDConnectScheme extends runtime_Oauth2Scheme {
  constructor($auth, options, ...defaults) {
    super($auth, options, ...defaults, DEFAULTS$1);
    this.idToken = new runtime_IdToken(this, this.$auth.$storage);
    this.configurationDocument = new runtime_ConfigurationDocument(this, this.$auth.$storage);
  }
  updateTokens(response) {
    super.updateTokens(response);
    const idToken = getProp(response.data, this.options.idToken.property);
    if (idToken) {
      this.idToken.set(idToken);
    }
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      idTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    this.refreshToken.sync();
    this.idToken.sync();
    if (!token) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    const idTokenStatus = this.idToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    if (idTokenStatus.expired()) {
      response.idTokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  async mounted() {
    await this.configurationDocument.init();
    const { tokenExpired, refreshTokenExpired } = this.check(true);
    if (refreshTokenExpired || tokenExpired && this.options.autoLogout) {
      this.$auth.reset();
    }
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.token);
    const redirected = await this._handleCallback();
    if (!redirected) {
      return this.$auth.fetchUserOnce();
    }
  }
  reset() {
    this.$auth.setUser(false);
    this.token.reset();
    this.idToken.reset();
    this.refreshToken.reset();
    this.requestHandler.reset();
    this.configurationDocument.reset();
  }
  logout() {
    if (this.options.endpoints.logout) {
      const opts = {
        id_token_hint: this.idToken.get(),
        post_logout_redirect_uri: this.logoutRedirectURI
      };
      const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
      window.location.replace(url);
    }
    return this.$auth.reset();
  }
  async fetchUser() {
    if (!this.check().valid) {
      return;
    }
    if (this.idToken.get()) {
      const data2 = this.idToken.userInfo();
      this.$auth.setUser(data2);
      return;
    }
    if (!this.options.endpoints.userInfo) {
      this.$auth.setUser({});
      return;
    }
    const { data } = await this.$auth.requestWith(this.name, {
      url: this.options.endpoints.userInfo
    });
    this.$auth.setUser(data);
  }
  async _handleCallback() {
    if (this.$auth.options.redirect && normalizePath(this.$auth.ctx.route.path) !== normalizePath(this.$auth.options.redirect.callback)) {
      return;
    }
    if (true) {
      return;
    }
    const hash = parseQuery(this.$auth.ctx.route.hash.substr(1));
    const parsedQuery = Object.assign({}, this.$auth.ctx.route.query, hash);
    let token = parsedQuery[this.options.token.property];
    let refreshToken;
    if (this.options.refreshToken.property) {
      refreshToken = parsedQuery[this.options.refreshToken.property];
    }
    let idToken = parsedQuery[this.options.idToken.property];
    const state = this.$auth.$storage.getUniversal(this.name + ".state");
    this.$auth.$storage.setUniversal(this.name + ".state", null);
    if (state && parsedQuery.state !== state) {
      return;
    }
    if (this.options.responseType === "code" && parsedQuery.code) {
      let codeVerifier;
      if (this.options.codeChallengeMethod && this.options.codeChallengeMethod !== "implicit") {
        codeVerifier = this.$auth.$storage.getUniversal(this.name + ".pkce_code_verifier");
        this.$auth.$storage.setUniversal(this.name + ".pkce_code_verifier", null);
      }
      const response = await this.$auth.request({
        method: "post",
        url: this.options.endpoints.token,
        baseURL: "",
        data: encodeQuery({
          code: parsedQuery.code,
          client_id: this.options.clientId,
          redirect_uri: this.redirectURI,
          response_type: this.options.responseType,
          audience: this.options.audience,
          grant_type: this.options.grantType,
          code_verifier: codeVerifier
        })
      });
      token = getProp(response.data, this.options.token.property) || token;
      refreshToken = getProp(response.data, this.options.refreshToken.property) || refreshToken;
      idToken = getProp(response.data, this.options.idToken.property) || idToken;
    }
    if (!token || !token.length) {
      return;
    }
    this.token.set(token);
    if (refreshToken && refreshToken.length) {
      this.refreshToken.set(refreshToken);
    }
    if (idToken && idToken.length) {
      this.idToken.set(idToken);
    }
    this.$auth.redirect("home", true);
    return true;
  }
}

const DEFAULTS = {
  name: "refresh",
  endpoints: {
    refresh: {
      url: "/api/auth/refresh",
      method: "post"
    }
  },
  refreshToken: {
    property: "refresh_token",
    data: "refresh_token",
    maxAge: 60 * 60 * 24 * 30,
    required: true,
    tokenRequired: false,
    prefix: "_refresh_token.",
    expirationPrefix: "_refresh_token_expiration."
  },
  autoLogout: false
};
class RefreshScheme extends LocalScheme {
  constructor($auth, options) {
    super($auth, options, DEFAULTS);
    this.refreshRequest = null;
    this.refreshToken = new runtime_RefreshToken(this, this.$auth.$storage);
    this.refreshController = new RefreshController(this);
  }
  check(checkStatus = false) {
    const response = {
      valid: false,
      tokenExpired: false,
      refreshTokenExpired: false,
      isRefreshable: true
    };
    const token = this.token.sync();
    const refreshToken = this.refreshToken.sync();
    if (!token || !refreshToken) {
      return response;
    }
    if (!checkStatus) {
      response.valid = true;
      return response;
    }
    const tokenStatus = this.token.status();
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      response.refreshTokenExpired = true;
      return response;
    }
    if (tokenStatus.expired()) {
      response.tokenExpired = true;
      return response;
    }
    response.valid = true;
    return response;
  }
  mounted() {
    return super.mounted({
      tokenCallback: () => {
        if (this.options.autoLogout) {
          this.$auth.reset();
        }
      },
      refreshTokenCallback: () => {
        this.$auth.reset();
      }
    });
  }
  refreshTokens() {
    if (!this.options.endpoints.refresh) {
      return Promise.resolve();
    }
    if (!this.check().valid) {
      return Promise.resolve();
    }
    const refreshTokenStatus = this.refreshToken.status();
    if (refreshTokenStatus.expired()) {
      this.$auth.reset();
      throw new ExpiredAuthSessionError();
    }
    if (!this.options.refreshToken.tokenRequired) {
      this.requestHandler.clearHeader();
    }
    const endpoint = {
      data: {
        client_id: void 0,
        grant_type: void 0
      }
    };
    if (this.options.refreshToken.required && this.options.refreshToken.data) {
      endpoint.data[this.options.refreshToken.data] = this.refreshToken.get();
    }
    if (this.options.clientId) {
      endpoint.data.client_id = this.options.clientId;
    }
    if (this.options.grantType) {
      endpoint.data.grant_type = "refresh_token";
    }
    cleanObj(endpoint.data);
    this.refreshRequest = this.refreshRequest || this.$auth.request(endpoint, this.options.endpoints.refresh);
    return this.refreshRequest.then((response) => {
      this.updateTokens(response, { isRefreshing: true });
      return response;
    }).catch((error) => {
      this.$auth.callOnError(error, { method: "refreshToken" });
      return Promise.reject(error);
    }).finally(() => {
      this.refreshRequest = null;
    });
  }
  setUserToken(token, refreshToken) {
    this.token.set(token);
    if (refreshToken) {
      this.refreshToken.set(refreshToken);
    }
    return this.fetchUser();
  }
  reset({ resetInterceptor = true } = {}) {
    this.$auth.setUser(false);
    this.token.reset();
    this.refreshToken.reset();
    if (resetInterceptor) {
      this.requestHandler.reset();
    }
  }
  updateTokens(response, { isRefreshing = false, updateOnRefresh = true } = {}) {
    const token = this.options.token.required ? getProp(response.data, this.options.token.property) : true;
    const refreshToken = this.options.refreshToken.required ? getProp(response.data, this.options.refreshToken.property) : true;
    this.token.set(token);
    if (refreshToken && (!isRefreshing || isRefreshing && updateOnRefresh)) {
      this.refreshToken.set(refreshToken);
    }
  }
  initializeRequestInterceptor() {
    this.requestHandler.initializeRequestInterceptor(this.options.endpoints.refresh.url);
  }
}

class Auth0Scheme extends runtime_Oauth2Scheme {
  logout() {
    this.$auth.reset();
    const opts = {
      client_id: this.options.clientId + "",
      returnTo: this.logoutRedirectURI
    };
    const url = this.options.endpoints.logout + "?" + encodeQuery(opts);
    window.location.replace(url);
  }
}

class LaravelJWTScheme extends RefreshScheme {
  updateTokens(response, { isRefreshing = false, updateOnRefresh = false } = {}) {
    super.updateTokens(response, { isRefreshing, updateOnRefresh });
  }
}



// CONCATENATED MODULE: ./.nuxt/auth.js



// Active schemes

_nuxt_middleware.auth = authMiddleware;
/* harmony default export */ var auth = (function (ctx, inject) {
  // Options
  const options = {
    "resetOnError": false,
    "ignoreExceptions": false,
    "scopeKey": "scope",
    "rewriteRedirects": true,
    "fullPathRedirect": false,
    "watchLoggedIn": true,
    "redirect": {
      "login": "/login",
      "logout": "/",
      "home": "/",
      "callback": "/login"
    },
    "vuex": {
      "namespace": "auth"
    },
    "cookie": {
      "prefix": "auth.",
      "options": {
        "path": "/"
      }
    },
    "localStorage": {
      "prefix": "auth."
    },
    "defaultStrategy": "local"
  };

  // Create a new Auth instance
  const $auth = new runtime_Auth(ctx, options);

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
    "token": {
      "property": "access_token"
    },
    "user": {
      "property": false
    },
    "endpoints": {
      "login": {
        "url": "/auth/login",
        "method": "post"
      },
      "logout": {
        "url": "/auth/logout",
        "method": "post"
      },
      "user": {
        "url": "/auth/me",
        "method": "post"
      }
    },
    "name": "local"
  }));

  // Inject it to nuxt context as $auth
  inject('auth', $auth);
  ctx.$auth = $auth;

  // Initialize auth
  return $auth.init().catch(error => {
    if (false) {}
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js













/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\axios.js (mode: 'all')
 // Source: ..\\plugins\\vform.js (mode: 'all')
 // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}
async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext);
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Add this.$router into store actions/mutations
  store.$router = router;

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule;

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Welcome to Ecommerce ",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Fimages\u002Ffavicon-32x32.png"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fgetbootstrap.com\u002Fdocs\u002F5.0\u002Fexamples\u002Fsidebars\u002Fsidebars.css"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Funpkg.com\u002Fvue-multiselect@2.1.6\u002Fdist\u002Fvue-multiselect.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Fnotifications\u002Fcss\u002Flobibox.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fplugins\u002Fmetismenu\u002Fcss\u002FmetisMenu.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fcss\u002Fpace.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fcss\u002Fbootstrap.min.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fcss\u002Fapp.css"
      }, {
        "rel": "stylesheet",
        "href": "\u002Fcss\u002Ficons.css"
      }],
      "script": [{
        "src": "\u002Fjs\u002Fbootstrap.bundle.min.js"
      }, {
        "src": "https:\u002F\u002Fcdn.ckeditor.com\u002F4.17.1\u002Fstandard\u002Fckeditor.js"
      }, {
        "src": "https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.3.1\u002Fjquery.min.js"
      }, {
        "src": "https:\u002F\u002Fgetbootstrap.com\u002Fdocs\u002F5.0\u002Fexamples\u002Fsidebars\u002Fsidebars.js",
        "ssr": false
      }, {
        "src": "\u002Fplugins\u002Fmetismenu\u002Fjs\u002FmetisMenu.min.js"
      }, {
        "src": "\u002Fplugins\u002Fsparkline-charts\u002Fjquery.sparkline.min.js"
      }, {
        "src": "\u002Fplugins\u002Fjquery-knob\u002Fexcanvas.js"
      }, {
        "src": "\u002Fplugins\u002Fjquery-knob\u002Fjquery.knob.js"
      }, {
        "src": "\u002Fplugins\u002Fnotifications\u002Fjs\u002Flobibox.min.js"
      }, {
        "src": "\u002Fplugins\u002Fnotifications\u002Fjs\u002Fnotifications.min.js"
      }, {
        "src": "\u002Fplugins\u002Fnotifications\u002Fjs\u002Fnotification-custom-script.js"
      }, {
        "src": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fsweetalert2@11"
      }, {
        "src": "\u002Fjs\u002Fpace.min.js"
      }, {
        "src": "\u002Fjs\u002Fadminlte.js"
      }],
      "style": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };

  // Make app available into store via this.app
  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Add into store
    store[key] = app[key];

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);
  if (false) {}

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }
  if (typeof vform === 'function') {
    await vform(app.context, inject);
  }
  if (typeof auth === 'function') {
    await auth(app.context, inject);
  }

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));

      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Dispatch store nuxtServerInit
  */
  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  }
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map