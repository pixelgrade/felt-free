/*!
 * @codingStandardsIgnoreFile
 * phpcs:ignoreFile
 */
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = _gsScope;

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = Masonry;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(0);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// EXTERNAL MODULE: external "Masonry"
var external_Masonry_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isFunction.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/config.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/hostReportError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
//# sourceMappingURL=hostReportError.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observer.js
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isArray.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/isObject.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscription.js
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */




var Subscription_Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                hasErrors = true;
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        hasErrors = true;
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        if (subscription._addParent(this)) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                subscriptions.push(subscription);
            }
            else {
                this._subscriptions = [subscription];
            }
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (_parent === parent) {
            return false;
        }
        else if (!_parent) {
            this._parent = parent;
            return true;
        }
        else if (!_parents) {
            this._parents = [parent];
            return true;
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
            return true;
        }
        return false;
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function'
    ? /*@__PURE__*/ Symbol('rxSubscriber')
    : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Subscriber.js
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber_Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new Subscriber_SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new Subscriber_SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_Subscription));

var Subscriber_SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber_Subscriber));

//# sourceMappingURL=Subscriber.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/canReportError.js
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_Subscriber(empty);
    }
    return new Subscriber_Subscriber(nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/symbol/observable.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/noop.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/pipe.js
/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (!fns) {
        return noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Observable.js
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable_Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/map.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new map_MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var map_MapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber_Subscriber));
//# sourceMappingURL=map.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/fromEvent.js
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var fromEvent_toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(map(function (args) { return isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new Observable_Observable(function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map

// CONCATENATED MODULE: ./components/base/ts/services/global.service.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var global_service_GlobalService =
/*#__PURE__*/
function () {
  function GlobalService() {
    _classCallCheck(this, GlobalService);
  }

  _createClass(GlobalService, null, [{
    key: "onCustomizerRender",
    value: function onCustomizerRender() {
      var exWindow = window;
      return Observable_Observable.create(function (observer) {
        var callback = observer.next.bind(observer);

        if (exWindow.wp && exWindow.wp.customize && exWindow.wp.customize.selectiveRefresh) {
          exWindow.wp.customize.selectiveRefresh.bind('partial-content-rendered', function (value) {
            callback(value);
          });
        }
      });
    }
  }, {
    key: "onCustomizerChange",
    value: function onCustomizerChange() {
      var exWindow = window;
      return Observable_Observable.create(function (observer) {
        var callback = observer.next.bind(observer);

        if (exWindow.wp && exWindow.wp.customize) {
          exWindow.wp.customize.bind('change', function (value) {
            callback(value);
          });
        }
      });
    }
  }, {
    key: "onReady",
    value: function onReady() {
      return fromEvent(document, 'DOMContentLoaded');
    }
  }]);

  return GlobalService;
}();
// CONCATENATED MODULE: ./components/base/ts/services/Helper.ts
function Helper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Helper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Helper_createClass(Constructor, protoProps, staticProps) { if (protoProps) Helper_defineProperties(Constructor.prototype, protoProps); if (staticProps) Helper_defineProperties(Constructor, staticProps); return Constructor; }


var Helper_Helper =
/*#__PURE__*/
function () {
  function Helper() {
    Helper_classCallCheck(this, Helper);
  }

  Helper_createClass(Helper, null, [{
    key: "isTouch",
    value: function isTouch() {
      // return 'ontouchstart' in window || 'DocumentTouch' in window && document instanceof DocumentTouch;
      return 'ontouchstart' in window || 'DocumentTouch' in window;
    }
  }, {
    key: "handleCustomCSS",
    value: function handleCustomCSS($container) {
      var $elements = typeof $container !== 'undefined' ? $container.find('[data-css]') : external_jQuery_default()('[data-css]');

      if ($elements.length) {
        $elements.each(function (index, obj) {
          var $element = external_jQuery_default()(obj);
          var css = $element.data('css');

          if (typeof css !== 'undefined') {
            $element.replaceWith('<style type="text/css">' + css + '</style>');
          }
        });
      }
    }
    /**
     * Search every image that is alone in a p tag and wrap it
     * in a figure element to behave like images with captions
     *
     * @param $container
     */

  }, {
    key: "unwrapImages",
    value: function unwrapImages() {
      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Helper.$body;
      $container.find('p > img:first-child:last-child, p > a:first-child:last-child > img').each(function (index, obj) {
        var $obj = external_jQuery_default()(obj);
        var $image = $obj.closest('img');
        var className = $image.attr('class');
        var $p = $image.closest('p');
        var $figure = external_jQuery_default()('<figure />').attr('class', className);
        console.log($figure, $p, external_jQuery_default.a.trim($p.text()).length);

        if (external_jQuery_default.a.trim($p.text()).length) {
          return;
        }

        $figure.append($image.removeAttr('class')).insertAfter($p);
        $p.remove();
      });
    }
  }, {
    key: "wrapEmbeds",
    value: function wrapEmbeds() {
      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Helper.$body;
      $container.children('iframe, embed, object').wrap('<p>');
    }
    /**
     * Initialize video elements on demand from placeholders
     *
     * @param $container
     */

  }, {
    key: "handleVideos",
    value: function handleVideos() {
      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Helper.$body;
      $container.find('.video-placeholder').each(function (index, obj) {
        var $placeholder = external_jQuery_default()(obj);
        var video = document.createElement('video');
        var $video = external_jQuery_default()(video).addClass('c-hero__video'); // play as soon as possible

        video.onloadedmetadata = function () {
          return video.play();
        };

        video.src = $placeholder.data('src');
        video.poster = $placeholder.data('poster');
        video.muted = true;
        video.loop = true;
        $placeholder.replaceWith($video);
      });
    }
  }, {
    key: "smoothScrollTo",
    value: function smoothScrollTo() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'swing';
      external_jQuery_default()('html, body').stop().animate({
        scrollTop: to
      }, duration, easing);
    } // Returns a function, that, as long as it continues to be invoked, will not
    // be triggered. The function will be called after it stops being called for
    // N milliseconds. If `immediate` is passed, trigger the function on the
    // leading edge, instead of the trailing.

  }, {
    key: "debounce",
    value: function debounce(func, wait, immediate) {
      var _this = this,
          _arguments = arguments;

      var timeout;
      return function () {
        var context = _this;
        var args = _arguments;

        var later = function later() {
          timeout = null;

          if (!immediate) {
            func.apply(context, args);
          }
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
          func.apply(context, args);
        }
      };
    } // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.

  }, {
    key: "throttle",
    value: function throttle(callback, limit) {
      var wait = false;
      return function () {
        if (!wait) {
          callback();
          wait = true;
          setTimeout(function () {
            wait = false;
          }, limit);
        }
      };
    }
  }, {
    key: "mq",
    value: function mq(direction, query) {
      var $temp = external_jQuery_default()('<div class="u-mq-' + direction + '-' + query + '">').appendTo('body');
      var response = $temp.is(':visible');
      $temp.remove();
      return response;
    }
  }, {
    key: "below",
    value: function below(query) {
      return Helper.mq('below', query);
    }
  }, {
    key: "above",
    value: function above(query) {
      return Helper.mq('above', query);
    }
  }, {
    key: "getParamFromURL",
    value: function getParamFromURL(param, url) {
      var parameters = url.split('?');

      if (typeof parameters[1] === 'undefined') {
        return parameters[1];
      }

      parameters = parameters[1].split('&');

      var _arr = Array.from(Array(parameters.length).keys());

      for (var _i = 0; _i < _arr.length; _i++) {
        var i = _arr[_i];
        var parameter = parameters[i].split('=');

        if (parameter[0] === param) {
          return parameter[1];
        }
      }
    }
  }, {
    key: "reloadScript",
    value: function reloadScript(filename) {
      var $old = external_jQuery_default()('script[src*="' + filename + '"]');
      var $new = external_jQuery_default()('<script>');
      var src = $old.attr('src');

      if (!$old.length) {
        return;
      }

      $old.replaceWith($new);
      $new.attr('src', src);
    }
    /**
     * returns version of IE or false, if browser is not Internet Explorer
     */

  }, {
    key: "getIEversion",
    value: function getIEversion() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');

      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');

      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');

      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      } // other browser


      return false;
    }
  }, {
    key: "markFirstWord",
    value: function markFirstWord($el) {
      var text = $el.text().trim().split(' ');
      var first = text.shift();
      $el.html((text.length > 0 ? '<span class="first-word">' + first + '</span> ' : first) + text.join(' '));
    }
  }, {
    key: "fitText",
    value: function fitText($el) {
      var currentFontSize = parseFloat($el.css('fontSize'));
      var currentLineHeight = parseFloat($el.css('lineHeight'));
      var height = $el.outerHeight() || currentLineHeight;
      $el.css('fontSize', currentFontSize * height / currentLineHeight);
    }
  }]);

  return Helper;
}();
Helper_Helper.$body = external_jQuery_default()('body');
// CONCATENATED MODULE: ./components/base/ts/services/window.service.ts
function window_service_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function window_service_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function window_service_createClass(Constructor, protoProps, staticProps) { if (protoProps) window_service_defineProperties(Constructor.prototype, protoProps); if (staticProps) window_service_defineProperties(Constructor, staticProps); return Constructor; }



var window_service_WindowService =
/*#__PURE__*/
function () {
  function WindowService() {
    window_service_classCallCheck(this, WindowService);
  }

  window_service_createClass(WindowService, null, [{
    key: "onLoad",
    value: function onLoad() {
      return fromEvent(window, 'load');
    }
  }, {
    key: "onResize",
    value: function onResize() {
      return fromEvent(window, 'resize');
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      return fromEvent(window, 'scroll');
    }
  }, {
    key: "getWindow",
    value: function getWindow() {
      return WindowService.$window;
    }
  }, {
    key: "getScrollY",
    value: function getScrollY() {
      return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      return WindowService.$window.width();
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return WindowService.$window.height();
    }
  }, {
    key: "getWindowEl",
    value: function getWindowEl() {
      return WindowService.$window[0];
    }
  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return WindowService.getWidth() > WindowService.getHeight() ? 'landscape' : 'portrait';
    }
  }]);

  return WindowService;
}();
window_service_WindowService.$window = external_jQuery_default()(window);
// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/observable/empty.js
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new Observable_Observable(function (subscriber) { return subscriber.complete(); });
function empty_empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable_Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/take.js
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */




function take(count) {
    return function (source) {
        if (count === 0) {
            return empty_empty();
        }
        else {
            return source.lift(new take_TakeOperator(count));
        }
    };
}
var take_TakeOperator = /*@__PURE__*/ (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new take_TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
var take_TakeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_Subscriber));
//# sourceMappingURL=take.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/Action.js
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action_Action = /*@__PURE__*/ (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(Subscription_Subscription));

//# sourceMappingURL=Action.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction_AsyncAction = /*@__PURE__*/ (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_Action));

//# sourceMappingURL=AsyncAction.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/Scheduler.js
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler_AsyncScheduler = /*@__PURE__*/ (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/scheduler/async.js
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var async_async = /*@__PURE__*/ new AsyncScheduler_AsyncScheduler(AsyncAction_AsyncAction);
//# sourceMappingURL=async.js.map

// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/debounceTime.js
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */



function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) {
        scheduler = async_async;
    }
    return function (source) { return source.lift(new DebounceTimeOperator(dueTime, scheduler)); };
}
var DebounceTimeOperator = /*@__PURE__*/ (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new debounceTime_DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
var debounceTime_DebounceTimeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

// CONCATENATED MODULE: ./components/base/ts/BaseTheme.ts
function BaseTheme_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BaseTheme_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BaseTheme_createClass(Constructor, protoProps, staticProps) { if (protoProps) BaseTheme_defineProperties(Constructor.prototype, protoProps); if (staticProps) BaseTheme_defineProperties(Constructor, staticProps); return Constructor; }






var BaseTheme_BaseTheme =
/*#__PURE__*/
function () {
  function BaseTheme() {
    BaseTheme_classCallCheck(this, BaseTheme);

    this.$body = external_jQuery_default()('body');
    this.$window = external_jQuery_default()(window);
    this.$html = external_jQuery_default()('html');
    this.ev = external_jQuery_default()({});
    this.frameRendered = false;
    this.subscriptionActive = true;
    this.$html.toggleClass('is-IE', Helper_Helper.getIEversion() && Helper_Helper.getIEversion() < 12);
    this.bindEvents();
    this.renderLoop();
  }

  BaseTheme_createClass(BaseTheme, [{
    key: "bindEvents",
    value: function bindEvents() {
      global_service_GlobalService.onReady().pipe(take(1)).subscribe(this.onReadyAction.bind(this));
      window_service_WindowService.onLoad().pipe(take(1)).subscribe(this.onLoadAction.bind(this));
      window_service_WindowService.onResize().pipe(debounceTime(500)).subscribe(this.onResizeAction.bind(this));
      window_service_WindowService.onScroll().subscribe(this.onScrollAction.bind(this)); // Leave comments area visible by default and
      // show it only if the URL links to a comment

      if (window.location.href.indexOf('#comment') === -1) {
        external_jQuery_default()('.trigger-comments').removeAttr('checked');
      }

      this.$window.on('beforeunload', this.fadeOut.bind(this));
      this.ev.on('render', this.update.bind(this));
    }
  }, {
    key: "onScrollAction",
    value: function onScrollAction() {
      this.frameRendered = false;
    }
  }, {
    key: "onReadyAction",
    value: function onReadyAction() {
      this.$html.addClass('is-ready');
    }
  }, {
    key: "onLoadAction",
    value: function onLoadAction() {
      this.$html.addClass('is-loaded');
      this.fadeIn();
    }
  }, {
    key: "onResizeAction",
    value: function onResizeAction() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.subscriptionActive = false;
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this = this;

      if (this.frameRendered === false) {
        this.ev.trigger('render');
      }

      requestAnimationFrame(function () {
        _this.renderLoop();

        _this.frameRendered = true;

        _this.ev.trigger('afterRender');
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.backToTop();
    }
  }, {
    key: "backToTop",
    value: function backToTop() {
      external_jQuery_default()('.back-to-top').toggleClass('is-visible', window_service_WindowService.getScrollY() >= window_service_WindowService.getHeight());
    }
  }, {
    key: "eventHandlers",
    value: function eventHandlers($container) {
      $container.find('.back-to-top').on('click', function (e) {
        e.preventDefault();
        Helper_Helper.smoothScrollTo(0, 1000);
      });
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      this.$html.removeClass('fade-in').addClass('fade-out');
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      this.$html.removeClass('fade-out no-transitions').addClass('fade-in');
    }
  }]);

  return BaseTheme;
}();
// CONCATENATED MODULE: ./components/base/ts/models/DefaultComponent.ts
function DefaultComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseComponent = function BaseComponent() {
  DefaultComponent_classCallCheck(this, BaseComponent);
};
// CONCATENATED MODULE: ./components/base/ts/components/Carousel.ts
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Carousel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Carousel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Carousel_createClass(Constructor, protoProps, staticProps) { if (protoProps) Carousel_defineProperties(Constructor.prototype, protoProps); if (staticProps) Carousel_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var variableWidthDefaults = {
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth: true
};
var fixedWidthDefaults = {
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  variableWidth: false
};
var Carousel_Carousel =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Carousel, _BaseComponent);

  function Carousel(element) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Carousel_classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this));
    _this.element = element;
    _this.options = options;
    _this.defaultSlickOptions = {
      dots: false,
      fade: false,
      nextArrow: '<div class="slick-next"></div>',
      prevArrow: '<div class="slick-prev"></div>',
      speed: 500
    };
    _this.slickOptions = _this.defaultSlickOptions;

    _this.extendOptions();

    _this.bindEvents(); // WindowService.onResize().debounce(300).subscribe( this.onResize.bind(this) );


    return _this;
  }

  Carousel_createClass(Carousel, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.bindSlick();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.slick('unslick');
    }
  }, {
    key: "onResize",
    value: function onResize() {
      console.warn('carousel:resize');
      this.destroy();
      this.extendOptions();
      this.bindEvents(); // setTimeout(() => {
      //
      // }, 100);
    }
  }, {
    key: "extendOptions",
    value: function extendOptions() {
      if (Helper_Helper.above('lap')) {
        return this.extendDesktopOptions(this.options);
      } else {
        return this.extendMobileOptions(this.options);
      }
    }
  }, {
    key: "extendMobileOptions",
    value: function extendMobileOptions(options) {
      this.slickOptions = Object.assign({}, this.defaultSlickOptions, {
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        dots: this.options.show_pagination === '',
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1
      });
    }
  }, {
    key: "extendDesktopOptions",
    value: function extendDesktopOptions(options) {
      this.slickOptions = Object.assign({}, this.defaultSlickOptions, {
        arrows: true,
        customPaging: Carousel.customPagination
      });

      if (this.options.show_pagination === '') {
        this.slickOptions.dots = true;
      }

      if (this.options.items_layout === 'variable_width') {
        this.slickOptions = Object.assign({}, this.slickOptions, variableWidthDefaults);
      } else {
        this.slickOptions = Object.assign({}, this.slickOptions, fixedWidthDefaults);
      }

      if (this.options.items_per_row) {
        this.slickOptions = Object.assign({}, this.slickOptions, {
          slidesToScroll: this.options.items_per_row,
          slidesToShow: this.options.items_per_row
        });
      }
    }
  }, {
    key: "bindSlick",
    value: function bindSlick() {
      this.element.slick(this.slickOptions);
      this.element.find('.slick-cloned').find('img').addClass('is-loaded');
    }
  }], [{
    key: "customPagination",
    value: function customPagination(slider, i) {
      var index = i + 1;
      var sIndex = index <= 9 ? "0".concat(index) : index;
      return external_jQuery_default()('<button type="button" />').text(sIndex);
    }
  }]);

  return Carousel;
}(BaseComponent);
// EXTERNAL MODULE: external "_gsScope"
var external_gsScope_ = __webpack_require__(1);

// CONCATENATED MODULE: ./components/base/ts/components/Slideshow.ts
function Slideshow_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Slideshow_typeof = function _typeof(obj) { return typeof obj; }; } else { Slideshow_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Slideshow_typeof(obj); }

function Slideshow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Slideshow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Slideshow_createClass(Constructor, protoProps, staticProps) { if (protoProps) Slideshow_defineProperties(Constructor.prototype, protoProps); if (staticProps) Slideshow_defineProperties(Constructor, staticProps); return Constructor; }

function Slideshow_possibleConstructorReturn(self, call) { if (call && (Slideshow_typeof(call) === "object" || typeof call === "function")) { return call; } return Slideshow_assertThisInitialized(self); }

function Slideshow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = Slideshow_getPrototypeOf(object); if (object === null) break; } return object; }

function Slideshow_getPrototypeOf(o) { Slideshow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Slideshow_getPrototypeOf(o); }

function Slideshow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Slideshow_setPrototypeOf(subClass, superClass); }

function Slideshow_setPrototypeOf(o, p) { Slideshow_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Slideshow_setPrototypeOf(o, p); }





var Slideshow_Slideshow =
/*#__PURE__*/
function (_Carousel) {
  Slideshow_inherits(Slideshow, _Carousel);

  function Slideshow(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Slideshow_classCallCheck(this, Slideshow);

    return Slideshow_possibleConstructorReturn(this, Slideshow_getPrototypeOf(Slideshow).call(this, element, options));
  }

  Slideshow_createClass(Slideshow, [{
    key: "destroy",
    value: function destroy() {
      _get(Slideshow_getPrototypeOf(Slideshow.prototype), "destroy", this).call(this);

      this.element.off('beforeChange');
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.element.on('beforeChange', this.onBeforeSlideChange.bind(this));
      this.slickOptions = Object.assign({}, this.slickOptions, {
        fade: true,
        infinite: true,
        speed: 1000
      });
      this.element.slick(this.slickOptions);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      console.warn('slideshow:resize');
      this.destroy();
      this.extendOptions();
      this.bindEvents();
    }
  }, {
    key: "onBeforeSlideChange",
    value: function onBeforeSlideChange(event, slick, currentSlide, nextSlide) {
      var $currentSlide = external_jQuery_default()(slick.$slides[currentSlide]);
      var $nextSlide = external_jQuery_default()(slick.$slides[nextSlide]);
      external_jQuery_default()(slick.$slides).css('zIndex', 800);
      this.transition($currentSlide, $nextSlide, this.getDirection(slick, currentSlide, nextSlide));
    }
  }, {
    key: "transition",
    value: function transition($current, $next) {
      var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var timeline = new external_gsScope_["TimelineLite"]({
        paused: true
      });
      var duration = this.slickOptions.speed / 1000;
      var slideWidth = $current.outerWidth();
      var move = 300;
      timeline.fromTo($next, duration, {
        x: sign * slideWidth
      }, {
        x: 0,
        ease: external_gsScope_["Power4"].easeInOut
      }, 0);
      timeline.fromTo($next.find('.c-hero__background'), duration, {
        x: -sign * (slideWidth - move)
      }, {
        x: 0,
        ease: external_gsScope_["Power4"].easeInOut
      }, 0);
      timeline.fromTo($next.find('.c-hero__content'), duration, {
        x: -sign * slideWidth
      }, {
        x: 0,
        ease: external_gsScope_["Power4"].easeInOut
      }, 0);
      timeline.fromTo($current, duration, {
        x: 0
      }, {
        x: -sign * slideWidth,
        ease: external_gsScope_["Power4"].easeInOut
      }, 0);
      timeline.fromTo($current.find('.c-hero__background'), duration, {
        x: 0
      }, {
        x: sign * (slideWidth - move),
        ease: external_gsScope_["Power4"].easeInOut
      }, 0);
      timeline.fromTo($current.find('.c-hero__content'), duration, {
        x: 0
      }, {
        x: sign * slideWidth,
        ease: external_gsScope_["Power4"].easeInOut
      }, 0);
      timeline.play();
    }
  }, {
    key: "getDirection",
    value: function getDirection(slick, currentSlide, nextSlide) {
      if (nextSlide > currentSlide) {
        return 1;
      }

      return -1;
    }
  }]);

  return Slideshow;
}(Carousel_Carousel);
// CONCATENATED MODULE: ./node_modules/rxjs/_esm5/internal/operators/takeWhile.js
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) {
        inclusive = false;
    }
    return function (source) {
        return source.lift(new TakeWhileOperator(predicate, inclusive));
    };
}
var TakeWhileOperator = /*@__PURE__*/ (function () {
    function TakeWhileOperator(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new takeWhile_TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    };
    return TakeWhileOperator;
}());
var takeWhile_TakeWhileSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            if (this.inclusive) {
                destination.next(value);
            }
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber_Subscriber));
//# sourceMappingURL=takeWhile.js.map

// CONCATENATED MODULE: ./components/base/ts/components/ProgressBar.ts
function ProgressBar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProgressBar_typeof = function _typeof(obj) { return typeof obj; }; } else { ProgressBar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProgressBar_typeof(obj); }

function ProgressBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProgressBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProgressBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProgressBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProgressBar_defineProperties(Constructor, staticProps); return Constructor; }

function ProgressBar_possibleConstructorReturn(self, call) { if (call && (ProgressBar_typeof(call) === "object" || typeof call === "function")) { return call; } return ProgressBar_assertThisInitialized(self); }

function ProgressBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProgressBar_getPrototypeOf(o) { ProgressBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProgressBar_getPrototypeOf(o); }

function ProgressBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProgressBar_setPrototypeOf(subClass, superClass); }

function ProgressBar_setPrototypeOf(o, p) { ProgressBar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProgressBar_setPrototypeOf(o, p); }





var ProgressBar_ProgressBar =
/*#__PURE__*/
function (_BaseComponent) {
  ProgressBar_inherits(ProgressBar, _BaseComponent);

  function ProgressBar(options) {
    var _this;

    ProgressBar_classCallCheck(this, ProgressBar);

    _this = ProgressBar_possibleConstructorReturn(this, ProgressBar_getPrototypeOf(ProgressBar).call(this));
    _this.$progressBar = external_jQuery_default()('.js-reading-progress');
    _this.subscriptionActive = true;
    _this.scrollPosition = 0;
    _this.max = 0;

    _this.setOptions(options);

    _this.init();

    _this.bindEvents();

    return _this;
  }

  ProgressBar_createClass(ProgressBar, [{
    key: "init",
    value: function init() {
      this.max = this.options.max > window_service_WindowService.getHeight() ? this.options.max - window_service_WindowService.getHeight() : this.options.max;
      this.$progressBar.attr('max', this.max);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.subscriptionActive = false;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      window_service_WindowService.onScroll().pipe(takeWhile(function () {
        return _this2.subscriptionActive;
      })).subscribe(function () {
        _this2.onScroll();
      });
    }
  }, {
    key: "change",
    value: function change(value) {
      this.$progressBar.attr('value', value);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = Object.assign({}, this.options, options);
    }
  }, {
    key: "isCloseToEnd",
    value: function isCloseToEnd() {
      return this.max <= this.scrollPosition - this.options.offset;
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      this.scrollPosition = window_service_WindowService.getScrollY();

      if (this.options.canShow && this.scrollPosition > this.options.offset) {
        this.change(this.scrollPosition - this.options.offset);
      }
    }
  }]);

  return ProgressBar;
}(BaseComponent);
// CONCATENATED MODULE: ./components/header/ts/StickyHeader.ts
function StickyHeader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StickyHeader_typeof = function _typeof(obj) { return typeof obj; }; } else { StickyHeader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StickyHeader_typeof(obj); }

function StickyHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StickyHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StickyHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) StickyHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) StickyHeader_defineProperties(Constructor, staticProps); return Constructor; }

function StickyHeader_possibleConstructorReturn(self, call) { if (call && (StickyHeader_typeof(call) === "object" || typeof call === "function")) { return call; } return StickyHeader_assertThisInitialized(self); }

function StickyHeader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StickyHeader_getPrototypeOf(o) { StickyHeader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StickyHeader_getPrototypeOf(o); }

function StickyHeader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) StickyHeader_setPrototypeOf(subClass, superClass); }

function StickyHeader_setPrototypeOf(o, p) { StickyHeader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StickyHeader_setPrototypeOf(o, p); }








var StickyHeader_StickyHeader =
/*#__PURE__*/
function (_BaseComponent) {
  StickyHeader_inherits(StickyHeader, _BaseComponent);

  function StickyHeader() {
    var _this;

    StickyHeader_classCallCheck(this, StickyHeader);

    _this = StickyHeader_possibleConstructorReturn(this, StickyHeader_getPrototypeOf(StickyHeader).call(this));
    _this.$body = external_jQuery_default()('body');
    _this.$document = external_jQuery_default()(document);
    _this.$mainMenu = external_jQuery_default()('.menu--primary');
    _this.$secondaryMenu = external_jQuery_default()('.menu--secondary');
    _this.$mainMenuItems = _this.$mainMenu.find('li');
    _this.$readingBar = external_jQuery_default()('.js-reading-bar');
    _this.$stickyHeader = external_jQuery_default()('.js-site-header-sticky');
    _this.$menuToggle = external_jQuery_default()('#menu-toggle');
    _this.isStickyHeaderEnabled = _this.$body.hasClass('u-site-header-sticky');
    _this.isSingular = _this.$body.hasClass('single');
    _this.isMobileHeaderInitialised = false;
    _this.isDesktopHeaderInitialised = false;
    _this.areMobileBindingsDone = false;
    _this.stickyHeaderShown = false;
    _this.hideReadingBar = _this.$readingBar !== null;
    _this.currentScrollPosition = 0;
    _this.initialMenuOffset = 0;
    _this.subscriptionActive = true;
    _this.preventOneSelector = 'a.prevent-one';
    external_jQuery_default()('.c-navbar .c-logo').imagesLoaded(function () {
      _this.bindEvents();

      _this.eventHandlers();

      _this.appendSearchTrigger();

      _this.updateOnResize();

      _this.refresh(window_service_WindowService.getScrollY());
    });
    return _this;
  }

  StickyHeader_createClass(StickyHeader, [{
    key: "destroy",
    value: function destroy() {
      this.subscriptionActive = false;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      if (this.$mainMenu.length === 1) {
        this.$document.on('click', '.js-sticky-menu-trigger', this.onClickStickyMenu.bind(this));
      }

      this.$menuToggle.on('change', this.onMenuToggleChange.bind(this));
      this.$mainMenuItems.hoverIntent({
        out: function out(e) {
          return _this2.toggleSubMenu(e, false);
        },
        over: function over(e) {
          return _this2.toggleSubMenu(e, true);
        },
        timeout: 300
      });
      window_service_WindowService.onScroll().pipe(takeWhile(function () {
        return _this2.subscriptionActive;
      })).pipe(map(function () {
        return window_service_WindowService.getScrollY();
      })).subscribe(function (scrollPosition) {
        _this2.refresh(scrollPosition);
      });
      window_service_WindowService.onResize().pipe(takeWhile(function () {
        return _this2.subscriptionActive;
      })).subscribe(function () {
        _this2.updateOnResize();
      });
    }
  }, {
    key: "eventHandlers",
    value: function eventHandlers() {
      if (Helper_Helper.below('lap') && !this.areMobileBindingsDone) {
        this.$document.on('click', this.preventOneSelector, this.onMobileMenuExpand.bind(this));
        this.areMobileBindingsDone = true;
      }

      if (Helper_Helper.above('lap') && this.areMobileBindingsDone) {
        this.$document.off('click', this.preventOneSelector, this.onMobileMenuExpand.bind(this));
        this.areMobileBindingsDone = false;
      }
    }
  }, {
    key: "onMobileMenuExpand",
    value: function onMobileMenuExpand(e) {
      e.preventDefault();
      e.stopPropagation();
      var $button = external_jQuery_default()(e.currentTarget);
      var activeClass = 'active';
      var hoverClass = 'hover';

      if ($button.hasClass(activeClass)) {
        window.location.href = $button.attr('href');
        return;
      }

      external_jQuery_default()(this.preventOneSelector).removeClass(activeClass);
      $button.addClass(activeClass); // When a parent menu item is activated,
      // close other menu items on the same level

      $button.parent().siblings().removeClass(hoverClass); // Open the sub menu of this parent item

      $button.parent().addClass(hoverClass);
    }
  }, {
    key: "onMenuToggleChange",
    value: function onMenuToggleChange(e) {
      var _this3 = this;

      var isMenuOpen = external_jQuery_default()(e.currentTarget).prop('checked');
      this.$body.toggleClass('nav--is-open', isMenuOpen);

      if (!isMenuOpen) {
        setTimeout(function () {
          // Close the open submenus in the mobile menu overlay
          _this3.$mainMenuItems.removeClass('hover');

          _this3.$mainMenuItems.find('a').removeClass('active');
        }, 300);
      }
    }
  }, {
    key: "toggleSubMenu",
    value: function toggleSubMenu(e, toggle) {
      external_jQuery_default()(e.currentTarget).toggleClass('hover', toggle);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var scrollPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.shouldUpdate = this.$body.is('.u-site-header-sticky');

      if (Helper_Helper.below('lap')) {
        this.shouldUpdate = false;
      }

      this.updateOnScroll(scrollPosition);
    }
  }, {
    key: "prepareDesktopMenuMarkup",
    value: function prepareDesktopMenuMarkup() {
      if (this.isDesktopHeaderInitialised) {
        return;
      }

      var htmlTop = parseInt(external_jQuery_default()('html').css('marginTop'), 10);
      this.$stickyHeader.css('top', htmlTop); // Figure out where is the offset of the Main Menu.
      // If there is no Main Menu set, show the reading bar
      // after passing the branding.

      if (this.$mainMenu.length === 1) {
        this.initialMenuOffset = this.$mainMenu.offset().top - htmlTop;
      } else {
        var $branding = external_jQuery_default()('.c-branding');
        this.initialMenuOffset = $branding.offset().top + $branding.outerHeight();
      } // Fallback to the other, secondary menu (top left one).


      if (this.$mainMenu.length === 0) {
        this.$mainMenu = external_jQuery_default()('.menu--secondary');
      } // If there is a menu, either the "true" main one or the fallback one,
      // clone it and append it to the reading bar.


      if (this.$mainMenu.length === 1) {
        this.$mainMenu = this.$mainMenu.clone(true, true).appendTo(this.$stickyHeader.find('.c-navigation-bar__middle'));
      }

      if (this.$secondaryMenu.length === 1) {
        this.$secondaryMenu = this.$secondaryMenu.clone(true, true).appendTo(this.$stickyHeader.find('.c-navigation-bar__left'));
      }

      this.$stickyHeader.find('.c-navbar').css('height', this.$stickyHeader.height()); // this.$readingBar = null;
      // this.$progressBar = null;

      this.prepareSingleHeader();
      this.refresh();
      this.isDesktopHeaderInitialised = true;
    }
  }, {
    key: "prepareMobileMenuMarkup",
    value: function prepareMobileMenuMarkup() {
      // If if has not been done yet, prepare the mark-up for the mobile navigation
      if (!this.isMobileHeaderInitialised) {
        // Append the branding
        var $branding = external_jQuery_default()('.c-branding');
        var $navbarZone = external_jQuery_default()('.c-navbar__zone--right');
        $branding.clone().addClass('c-branding--mobile').appendTo('.c-navbar');
        $branding.find('img').removeClass('is--loading'); // Create the mobile site header

        var $siteHeaderMobile = external_jQuery_default()('<div class="site-header-mobile u-container-sides-spacing"></div>').appendTo('.c-navbar'); // Append the social menu

        var $socialMenu = external_jQuery_default()('.c-navbar__zone--left .jetpack-social-navigation').clone();
        var $searchTrigger = $socialMenu.find('.js-search-trigger').parent().clone();
        $navbarZone.append($socialMenu);
        $navbarZone.find('.js-search-trigger').parent().remove();
        $siteHeaderMobile.append($socialMenu.empty().append($searchTrigger)); // Handle sub menus:
        // Make sure there are no open menu items

        external_jQuery_default()('.menu-item-has-children').removeClass('hover'); // Add a class so we know the items to handle

        external_jQuery_default()('.menu-item-has-children > a').each(function (index, element) {
          external_jQuery_default()(element).addClass('prevent-one');
        }); // Replace the label text and make it visible

        external_jQuery_default()('.c-navbar__label-text ').html(external_jQuery_default()('.js-menu-mobile-label').html()).removeClass('screen-reader-text');
        this.isMobileHeaderInitialised = true;
      }
    }
  }, {
    key: "prepareSingleHeader",
    value: function prepareSingleHeader() {
      if (!this.isSingular || !this.isStickyHeaderEnabled) {
        return;
      }

      external_jQuery_default()('.c-reading-bar__wrapper-social').find('.share-end').remove();
      var entryHeader = external_jQuery_default()('.entry-header, .entry-summary');
      var entryContent = external_jQuery_default()('.single-main').find('.entry-content');
      var entryHeaderHeight = entryHeader.outerHeight() || 0;
      var entryContentHeight = entryContent.outerHeight() || 0;
      var articleHeight = entryHeaderHeight + entryContentHeight;

      if (this.$body.hasClass('entry-image--landscape')) {
        articleHeight = articleHeight + external_jQuery_default()('.entry-thumbnail').outerHeight();
      }

      this.ProgressBar = new ProgressBar_ProgressBar({
        canShow: this.isSingular,
        max: entryHeader.offset().top + articleHeight - this.initialMenuOffset,
        offset: this.initialMenuOffset
      });

      if (this.$mainMenu.length !== 1) {
        external_jQuery_default()('.js-sticky-menu-trigger').remove();
      }
    }
  }, {
    key: "updateOnScroll",
    value: function updateOnScroll() {
      var _this4 = this;

      var scrollPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.shouldUpdate) {
        return;
      }

      var showSticky = scrollPosition > this.initialMenuOffset;
      var hideReadingBar = scrollPosition < this.currentScrollPosition && this.$mainMenu.length === 1;

      if (this.$readingBar !== null && hideReadingBar !== this.hideReadingBar) {
        clearTimeout(this.overflowTimeout);

        if (!hideReadingBar) {
          if (this.$readingBar.length) {
            this.$stickyHeader.css('overflow', 'hidden');
          }
        } else {
          this.overflowTimeout = setTimeout(function () {
            _this4.$stickyHeader.css('overflow', '');
          }, 350);
        }

        this.$stickyHeader.toggleClass('reading-bar--hide', hideReadingBar);
        this.hideReadingBar = hideReadingBar;
      }

      if (this.ProgressBar && null !== this.$readingBar) {
        this.$readingBar.toggleClass('show-next-title', this.ProgressBar.isCloseToEnd());
      }

      if (showSticky !== this.stickyHeaderShown) {
        this.$stickyHeader.toggleClass('site-header-sticky--show', showSticky);
        this.stickyHeaderShown = showSticky;
      }

      this.currentScrollPosition = scrollPosition;
    }
  }, {
    key: "updateOnResize",
    value: function updateOnResize() {
      this.eventHandlers();

      if (Helper_Helper.below('lap')) {
        this.prepareMobileMenuMarkup();
      } else {
        this.prepareDesktopMenuMarkup();
      }
    }
  }, {
    key: "onClickStickyMenu",
    value: function onClickStickyMenu() {
      var _this5 = this;

      this.$stickyHeader.addClass('reading-bar--hide');
      setTimeout(function () {
        _this5.$stickyHeader.css('overflow', '');
      }, 350);
    }
  }, {
    key: "appendSearchTrigger",
    value: function appendSearchTrigger() {
      var $headerSocialNavigation = external_jQuery_default()('.c-navbar__zone--left .jetpack-social-navigation');
      this.$searchTrigger = external_jQuery_default()('.js-search-trigger').removeClass('u-hidden'); // Append the search trigger either to the social navigation

      if ($headerSocialNavigation.length === 1) {
        this.$searchTrigger.clone().wrap('<li class="menu-item"></li>').parent().appendTo($headerSocialNavigation.find('.menu'));
      } else {
        // Or directly to zone left if there is no social navigation
        this.$searchTrigger.clone().appendTo(external_jQuery_default()('.c-navbar__zone--left'));
      }

      var $newSearchTrigger = this.$searchTrigger.clone();
      $newSearchTrigger.find('span').removeAttr('class');
      $newSearchTrigger.appendTo(external_jQuery_default()('.c-navigation-bar__right'));
      this.$searchTrigger.remove();
    }
  }]);

  return StickyHeader;
}(BaseComponent);
// CONCATENATED MODULE: ./components/base/ts/components/SearchOverlay.ts
function SearchOverlay_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchOverlay_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchOverlay_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchOverlay_typeof(obj); }

function SearchOverlay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchOverlay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchOverlay_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchOverlay_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchOverlay_defineProperties(Constructor, staticProps); return Constructor; }

function SearchOverlay_possibleConstructorReturn(self, call) { if (call && (SearchOverlay_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchOverlay_assertThisInitialized(self); }

function SearchOverlay_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchOverlay_getPrototypeOf(o) { SearchOverlay_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchOverlay_getPrototypeOf(o); }

function SearchOverlay_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchOverlay_setPrototypeOf(subClass, superClass); }

function SearchOverlay_setPrototypeOf(o, p) { SearchOverlay_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchOverlay_setPrototypeOf(o, p); }





var SearchOverlay_activeClass = 'show-search-overlay';
var openClass = '.js-search-trigger';
var closeClass = '.js-search-close';
var escKeyCode = 27;
var SearchOverlay_SearchOverlay =
/*#__PURE__*/
function (_BaseComponent) {
  SearchOverlay_inherits(SearchOverlay, _BaseComponent);

  function SearchOverlay() {
    var _this;

    SearchOverlay_classCallCheck(this, SearchOverlay);

    _this = SearchOverlay_possibleConstructorReturn(this, SearchOverlay_getPrototypeOf(SearchOverlay).call(this));
    _this.$body = external_jQuery_default()('body');
    _this.$document = external_jQuery_default()(document);
    _this.$searchField = external_jQuery_default()('.c-search-overlay').find('.search-field');
    _this.keyupSubscriptionActive = true;

    _this.bindEvents();

    return _this;
  }

  SearchOverlay_createClass(SearchOverlay, [{
    key: "destroy",
    value: function destroy() {
      this.keyupSubscriptionActive = false;
      this.$document.off('click.SearchOverlay');
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.$document.on('click.SearchOverlay', openClass, this.open.bind(this));
      this.$document.on('click.SearchOverlay', closeClass, this.close.bind(this));
      this.keyupSub = fromEvent(window.document.body, 'keyup');
    }
  }, {
    key: "createKeyupSubscription",
    value: function createKeyupSubscription() {
      var _this2 = this;

      this.keyupSubscriptionActive = true;
      this.keyupSub.pipe(takeWhile(function () {
        return _this2.keyupSubscriptionActive;
      })).subscribe(this.closeOnEsc.bind(this));
    }
  }, {
    key: "open",
    value: function open() {
      this.$searchField.focus();
      this.$body.addClass(SearchOverlay_activeClass);
      this.createKeyupSubscription();
    }
  }, {
    key: "close",
    value: function close() {
      this.$body.removeClass(SearchOverlay_activeClass);
      this.$searchField.blur();
      this.keyupSubscriptionActive = false;
    }
  }, {
    key: "closeOnEsc",
    value: function closeOnEsc(e) {
      if (e.keyCode === escKeyCode) {
        this.close();
      }
    }
  }]);

  return SearchOverlay;
}(BaseComponent);
// CONCATENATED MODULE: ./components/base/ts/components/Recipe.ts
function Recipe_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Recipe_typeof = function _typeof(obj) { return typeof obj; }; } else { Recipe_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Recipe_typeof(obj); }

function Recipe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Recipe_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Recipe_createClass(Constructor, protoProps, staticProps) { if (protoProps) Recipe_defineProperties(Constructor.prototype, protoProps); if (staticProps) Recipe_defineProperties(Constructor, staticProps); return Constructor; }

function Recipe_possibleConstructorReturn(self, call) { if (call && (Recipe_typeof(call) === "object" || typeof call === "function")) { return call; } return Recipe_assertThisInitialized(self); }

function Recipe_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Recipe_getPrototypeOf(o) { Recipe_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Recipe_getPrototypeOf(o); }

function Recipe_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Recipe_setPrototypeOf(subClass, superClass); }

function Recipe_setPrototypeOf(o, p) { Recipe_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Recipe_setPrototypeOf(o, p); }




var jetpackRecipeClass = 'jetpack-recipe';
var jetpackRecipePrintClass = 'jetpack-recipe-print';
var jetpackRecipeContentClass = 'jetpack-recipe-content';
var jetpackRecipeIngredientsClass = 'jetpack-recipe-ingredients';
var Recipe_Recipe =
/*#__PURE__*/
function (_BaseComponent) {
  Recipe_inherits(Recipe, _BaseComponent);

  function Recipe() {
    var _this;

    Recipe_classCallCheck(this, Recipe);

    _this = Recipe_possibleConstructorReturn(this, Recipe_getPrototypeOf(Recipe).call(this));
    _this.$body = external_jQuery_default()('body');

    _this.bindEvents();

    return _this;
  }

  Recipe_createClass(Recipe, [{
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "positionPrintBtn",
    value: function positionPrintBtn() {
      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;
      $container.find(".".concat(jetpackRecipeClass)).each(function (index, element) {
        var $recipe = external_jQuery_default()(element);
        var $print = $recipe.find(".".concat(jetpackRecipePrintClass));
        var $recipeContent = $recipe.find(".".concat(jetpackRecipeContentClass));
        var $ingredients = $recipe.find(".".concat(jetpackRecipeIngredientsClass));
        $print.find('a').clone(true).appendTo($recipeContent).wrap("<div class=\"".concat(jetpackRecipePrintClass, "\"></div>"));

        if ($ingredients.length) {
          $recipeContent.find(".".concat(jetpackRecipePrintClass)).addClass('jetpack-has-ingredients');
        }

        $print.remove();
      });
    }
  }, {
    key: "wrapRecipeElements",
    value: function wrapRecipeElements() {
      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;
      $container.find('.jetpack-recipe-image').wrap('<div class="jetpack-recipe-image-container"></div>');
      $container.find(".".concat(jetpackRecipeIngredientsClass, " ul > li")).each(function (index, element) {
        Helper_Helper.markFirstWord(external_jQuery_default()(element));
      });
    }
  }]);

  return Recipe;
}(BaseComponent);
// CONCATENATED MODULE: ./components/base/ts/components/Gallery.ts
function Gallery_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Gallery_typeof = function _typeof(obj) { return typeof obj; }; } else { Gallery_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Gallery_typeof(obj); }

function Gallery_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Gallery_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Gallery_createClass(Constructor, protoProps, staticProps) { if (protoProps) Gallery_defineProperties(Constructor.prototype, protoProps); if (staticProps) Gallery_defineProperties(Constructor, staticProps); return Constructor; }

function Gallery_possibleConstructorReturn(self, call) { if (call && (Gallery_typeof(call) === "object" || typeof call === "function")) { return call; } return Gallery_assertThisInitialized(self); }

function Gallery_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Gallery_getPrototypeOf(o) { Gallery_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Gallery_getPrototypeOf(o); }

function Gallery_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Gallery_setPrototypeOf(subClass, superClass); }

function Gallery_setPrototypeOf(o, p) { Gallery_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Gallery_setPrototypeOf(o, p); }






var Gallery_Gallery =
/*#__PURE__*/
function (_BaseComponent) {
  Gallery_inherits(Gallery, _BaseComponent);

  function Gallery(element) {
    var _this;

    Gallery_classCallCheck(this, Gallery);

    _this = Gallery_possibleConstructorReturn(this, Gallery_getPrototypeOf(Gallery).call(this));
    _this.subscriptionActive = true;
    _this.masonryGallerySelector = '.c-gallery--packed, .c-gallery--masonry';
    _this.element = element;

    _this.layout();

    window_service_WindowService.onResize().pipe(debounceTime(300)).pipe(takeWhile(function () {
      return _this.subscriptionActive;
    })).subscribe(function () {
      _this.layout();
    });
    global_service_GlobalService.onCustomizerRender().pipe(debounceTime(300)).pipe(takeWhile(function () {
      return _this.subscriptionActive;
    })).subscribe(function () {
      _this.layout();
    });
    global_service_GlobalService.onCustomizerChange().pipe(debounceTime(300)).pipe(takeWhile(function () {
      return _this.subscriptionActive;
    })).subscribe(function () {
      _this.layout();
    });
    return _this;
  }

  Gallery_createClass(Gallery, [{
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.subscriptionActive = false;
    }
  }, {
    key: "layout",
    value: function layout() {
      var $items = this.element.children();
      var minColumnWidth;

      if (!$items.length || !this.element.is(this.masonryGallerySelector)) {
        return;
      }

      minColumnWidth = this.element.children().get(0).getBoundingClientRect().width;
      $items.each(function (index, element) {
        var width = element.getBoundingClientRect().width;
        minColumnWidth = width < minColumnWidth ? width : minColumnWidth;
      });

      if (this.masonry) {
        this.masonry.destroy();
      }

      this.masonry = new external_Masonry_(this.element.get(0), {
        columnWidth: minColumnWidth,
        transitionDuration: 0
      });
    }
  }]);

  return Gallery;
}(BaseComponent);
// CONCATENATED MODULE: ./variations/felt/ts/App.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Felt", function() { return App_Felt; });
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { App_get = Reflect.get; } else { App_get = function _get(target, property, receiver) { var base = App_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return App_get(target, property, receiver || target); }

function App_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = App_getPrototypeOf(object); if (object === null) break; } return object; }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }













var App_Felt =
/*#__PURE__*/
function (_BaseTheme) {
  App_inherits(Felt, _BaseTheme);

  function Felt() {
    var _this;

    App_classCallCheck(this, Felt);

    _this = App_possibleConstructorReturn(this, App_getPrototypeOf(Felt).call(this));
    _this.Recipe = new Recipe_Recipe();
    _this.featuredCarousel = [];
    _this.carousels = [];
    _this.slideshows = [];
    _this.masonrySelector = '.js-masonry, .u-gallery-type--masonry';
    global_service_GlobalService.onCustomizerRender().subscribe(_this.handleCustomizerChanges.bind(App_assertThisInitialized(_this)));

    _this.handleContent();

    return _this;
  }

  App_createClass(Felt, [{
    key: "bindEvents",
    value: function bindEvents() {
      App_get(App_getPrototypeOf(Felt.prototype), "bindEvents", this).call(this);

      external_jQuery_default()(document.body).on('post-load', this.onJetpackPostLoad.bind(this));
    }
  }, {
    key: "onLoadAction",
    value: function onLoadAction() {
      App_get(App_getPrototypeOf(Felt.prototype), "onLoadAction", this).call(this);

      this.Header = new StickyHeader_StickyHeader();
      this.SearchOverlay = new SearchOverlay_SearchOverlay();
      Object.assign(window, {
        StickyHeader: this.Header
      });
      this.adjustLayout();
      this.initCarousels();
    }
  }, {
    key: "onResizeAction",
    value: function onResizeAction() {
      App_get(App_getPrototypeOf(Felt.prototype), "onResizeAction", this).call(this);

      this.adjustLayout();
      this.destroySlideshows();
      this.handleSlideshows();
      this.destroyCarousels();
      this.handleCarousels();
      this.initCarousels();
    }
  }, {
    key: "positionStickyWidgets",
    value: function positionStickyWidgets() {
      var adminBarHeight = external_jQuery_default()('#wpadminbar').outerHeight();
      var stickyHeaderHeight = external_jQuery_default()('.site-header-sticky').outerHeight();
      external_jQuery_default()('.widget-area--side').children('.widget-last').css('top', adminBarHeight + stickyHeaderHeight);
    }
  }, {
    key: "onJetpackPostLoad",
    value: function onJetpackPostLoad() {
      var $container = external_jQuery_default()('#posts-container');
      var $newBlocks = $container.children().not('.post--loaded').addClass('post--loaded');
      $newBlocks.imagesLoaded(function () {
        if ($container.hasClass('js-masonry')) {
          $container.masonry('appended', $newBlocks, true).masonry('layout');
          external_jQuery_default()('.infinite-loader').hide();
        }
      });
      this.handleContent($container);
      this.adjustLayout();
    }
  }, {
    key: "scaleCardSeparators",
    value: function scaleCardSeparators() {
      // loop through each card
      external_jQuery_default()('.c-card').not('.c-card--related').each(function (i, obj) {
        var $card = external_jQuery_default()(obj);
        var $meta = $card.find('.c-meta');
        var $separator = $card.find('.c-meta__separator').hide();
        var width = $card[0].offsetWidth;
        var totalWidth = 0; // calculate the sum of the widths of the meta elements

        $meta.children().each(function (j, element) {
          totalWidth += element.offsetWidth;
        }); // if there are still at least 14px left, display the separator

        if (totalWidth + 14 <= width) {
          $separator.show();
        }
      });
    }
  }, {
    key: "addIsLoadedListener",
    value: function addIsLoadedListener() {
      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;
      // add every image on the page the .is-loaded class
      // after the image has actually loaded
      $container.find('.widget_categories_image_grid, .c-card__frame, .entry-thumbnail').find('img').each(function (i, element) {
        var $each = external_jQuery_default()(element);
        $each.imagesLoaded(function () {
          $each.addClass('is-loaded');
        });

        if (Helper_Helper.below('pad')) {
          $each.addClass('is-loaded');
        }
      });
    }
  }, {
    key: "handleContent",
    value: function handleContent() {
      var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;
      this.Recipe.positionPrintBtn();
      this.Recipe.wrapRecipeElements();
      Helper_Helper.unwrapImages($container.find('.entry-content'));
      Helper_Helper.wrapEmbeds($container.find('.entry-content'));
      Helper_Helper.handleVideos($container);
      Helper_Helper.handleCustomCSS($container);
      external_jQuery_default()('.single .entry-content .tiled-gallery').wrap('<div class="aligncenter" />');
      this.addIsLoadedListener($container);

      if ($container.hasClass('page-template-front-page')) {
        var $widgetArea = $container.find('.content-area .widget-area');
        var $widget = $widgetArea.children('.widget').first();
        var isFullWidth = $widgetArea.is('.o-layout__full');
        var isProperWidget = $widget.is('.widget_featured_posts_5cards, .widget_featured_posts_6cards, .widget_featured_posts_grid');
        var hasTitle = $widget.children('.widget__title').length > 0;

        if (isFullWidth && isProperWidget && !hasTitle) {
          this.$body.addClass('has-extended-header-background');
        }
      }

      if ($container.hasClass('blog') && !$container.hasClass('u-site-header-short') && !external_jQuery_default()('.o-layout__side').length) {
        this.$body.addClass('has-extended-header-background');
      }

      $container.find('.entry-content p').each(function (i, obj) {
        var $p = external_jQuery_default()(obj);

        if (!$p.children().length && !external_jQuery_default.a.trim($p.text()).length) {
          $p.remove();
        }
      });
      var $commentForm = external_jQuery_default()('.comment-form');

      if ($commentForm.length) {
        var $commentFormFooter = external_jQuery_default()('<p class="comment-form-subscriptions"></p>').appendTo($commentForm);
        external_jQuery_default()('.comment-subscription-form').appendTo($commentFormFooter);
      }

      $container.find('.c-gallery').not('.c-gallery--widget, .c-footer__gallery').each(function (index, element) {
        new Gallery_Gallery(external_jQuery_default()(element));
      });
      $container.find('.widget_categories select').select2();
      this.handleCarousels();
      this.handleSlideshows();
      this.handleSingleHeader();
      this.eventHandlers($container);
    }
  }, {
    key: "handleSingleHeader",
    value: function handleSingleHeader() {
      var $intro = external_jQuery_default()('.entry-content').children().first().filter('.intro');
      var $header = external_jQuery_default()('.entry-header');
      var $body = external_jQuery_default()('body');

      if ($header.is('is-initialised')) {
        return;
      }

      $header.addClass('is-initialised');

      if (Helper_Helper.above('pad') && $body.is('.entry-image--portrait')) {
        var $wrapper = $header.wrap('<div>').parent();
        var $spacer = external_jQuery_default()('<div class="header-spacer"></div>');

        if ($intro.length) {
          $wrapper.append($intro.wrap('<div class="entry-content u-content-width">').parent());
        } else {
          $intro = external_jQuery_default()('<div class="entry-content u-content-width">');
          $wrapper.append($intro);
          $spacer.addClass('header-spacer--empty');
        }

        $spacer.insertAfter($intro);
      }
    }
  }, {
    key: "destroyCarousels",
    value: function destroyCarousels() {
      this.carousels.forEach(function (carousel) {
        carousel.destroy();
      });
      this.carousels = [];
    }
  }, {
    key: "destroySlideshows",
    value: function destroySlideshows() {
      this.slideshows.forEach(function (slideshow) {
        slideshow.destroy();
      });
      this.slideshows = [];
    }
  }, {
    key: "handleCarousels",
    value: function handleCarousels() {
      var _this2 = this;

      this.getFeaturedPostsCarousels().forEach(function (carousel) {
        var $carousel = external_jQuery_default()(carousel);

        _this2.carousels.push(new Carousel_Carousel($carousel, $carousel.data()));
      });
    }
  }, {
    key: "handleSlideshows",
    value: function handleSlideshows() {
      var _this3 = this;

      var blendedSelector = '.blend-with-header';
      var slideshowWidgetSelector = '.widget_featured_posts_slideshow';
      var headerBlendedClass = 'site-header--inverted';
      var $slideshow = external_jQuery_default()('.featured-posts-slideshow');
      var $siteHeader = external_jQuery_default()('.site-header');
      var $blended = $slideshow.filter(blendedSelector).first();

      if ($blended.length) {
        if (Helper_Helper.above('lap')) {
          var $widget = $blended.closest(slideshowWidgetSelector);
          var $placeholder = external_jQuery_default()('<div class="js-slideshow-placeholder">');
          $widget.data('placeholder', $placeholder);
          $placeholder.insertAfter($widget);
          $widget.appendTo($siteHeader);
          $siteHeader.addClass(headerBlendedClass);
        } else {
          $siteHeader.find(slideshowWidgetSelector).each(function (i, obj) {
            var $widget = external_jQuery_default()(obj);
            var $placeholder = $widget.data('placeholder');
            $placeholder.replaceWith($widget);
          });
          $siteHeader.removeClass(headerBlendedClass);
        }
      }

      $slideshow.each(function (i, obj) {
        var $element = external_jQuery_default()(obj);

        _this3.slideshows.push(new Slideshow_Slideshow($element.find('.c-hero__slider'), $element.data()));
      });
    }
  }, {
    key: "positionSidebar",
    value: function positionSidebar() {
      if (this.$body.is('.single-post.entry-image--portrait')) {
        var $sidebar = external_jQuery_default()('.widget-area--post');
        var $container = $sidebar.parent();
        var containerOffset;
        var sidebarHeight;
        var sidebarOffset;
        var sidebarBottom;

        if (!$container.length || !$sidebar.length) {
          return;
        } // remove possible properties set on prior calls of this function


        $container.css({
          minHeight: '',
          position: ''
        });
        $sidebar.css({
          bottom: '',
          position: '',
          right: '',
          top: ''
        });

        if (Helper_Helper.below('pad')) {
          return;
        }

        containerOffset = $container.offset();
        sidebarHeight = $sidebar.outerHeight();
        sidebarOffset = $sidebar.offset();
        sidebarBottom = $container.outerHeight() > sidebarHeight ? 0 : '';
        $container.css({
          minHeight: sidebarHeight + sidebarOffset.top - containerOffset.top,
          position: 'relative'
        });
        $sidebar.css({
          bottom: sidebarBottom,
          position: 'absolute',
          right: 0,
          top: sidebarOffset.top - containerOffset.top
        });
      }
    }
  }, {
    key: "getFeaturedPostsCarousels",
    value: function getFeaturedPostsCarousels() {
      return _toConsumableArray(external_jQuery_default()('.featured-posts-carousel'));
    }
  }, {
    key: "handleCustomizerChanges",
    value: function handleCustomizerChanges(element) {
      this.addIsLoadedListener();

      if (element.hasClass('widget_featured_posts_slideshow')) {
        this.handleSlideshowsReload();
      }

      if (element.find('.featured-posts-carousel').length) {
        this.handleCarouselsReload();
      }

      if (element['selector'] === '') {
        this.handleSlideshowsReload();
      }
    }
  }, {
    key: "handleCarouselsReload",
    value: function handleCarouselsReload() {
      this.destroyCarousels();
      this.handleCarousels();
    }
  }, {
    key: "handleSlideshowsReload",
    value: function handleSlideshowsReload() {
      this.destroySlideshows();
      this.handleSlideshows();
    }
  }, {
    key: "changeHeaderDropcapOpacity",
    value: function changeHeaderDropcapOpacity() {
      if (Helper_Helper.above('small')) {
        external_jQuery_default()('.header-dropcap, .post:not(.has-post-thumbnail) .c-card__letter').each(function (index, element) {
          external_jQuery_default()(element).css('opacity', 1);
        });
      }
    }
  }, {
    key: "adjustLayout",
    value: function adjustLayout() {
      this.applyMasonryOnGallery();
      this.changeHeaderDropcapOpacity();
      this.scaleCardSeparators(); // If the branding happens to be in the Left Zone (no Top Menu set), move it in the middle zone

      var $headerNav = external_jQuery_default()('.header.nav');

      if ($headerNav.parent().hasClass('c-navbar__zone--left')) {
        $headerNav.appendTo('.c-navbar__zone--middle');
      } // If the Top Menu is not present, ensure that items in the left zone are aligned to the right


      if (external_jQuery_default()('.menu--secondary').length === 0) {
        external_jQuery_default()('.c-navbar__zone--left').addClass('u-justify-end');
      }

      this.wrapContentImages();
      setTimeout(this.modifyHeaderDropcap.bind(this), 100);
      this.positionStickyWidgets();
    }
  }, {
    key: "applyMasonryOnGallery",
    value: function applyMasonryOnGallery() {
      var $gallery = external_jQuery_default()(this.masonrySelector);
      $gallery.each(function (i, obj) {
        var $obj = external_jQuery_default()(obj);
        $obj.children().addClass('post--loaded');
        $obj.imagesLoaded(function () {
          new external_Masonry_($obj.get(0), {
            transitionDuration: 0
          });
        });
      });
    }
  }, {
    key: "wrapContentImages",
    value: function wrapContentImages() {
      external_jQuery_default()('.entry-content').find('figure').filter('.aligncenter, .alignnone').each(function (index, element) {
        var $figure = external_jQuery_default()(element);
        var $image = $figure.find('img');
        var figureWidth = $figure.outerWidth();
        var imageWidth = $image.outerWidth();

        if (imageWidth < figureWidth) {
          $figure.wrap('<p>');
        }
      });
    }
  }, {
    key: "modifyHeaderDropcap",
    value: function modifyHeaderDropcap() {
      external_jQuery_default()('.header-dropcap, .c-card__letter').each(function (index, element) {
        Helper_Helper.fitText(external_jQuery_default()(element));
      });
    }
  }, {
    key: "initCarousels",
    value: function initCarousels() {
      var _this4 = this;

      if (this.featuredCarousel.length > 0) {
        return;
      }

      if (Helper_Helper.above('lap')) {
        return;
      }

      this.getXCardsCarousels().forEach(function (element) {
        _this4.initXCardsCarousel(external_jQuery_default()(element));
      });
      this.getSlideshows().forEach(function (element) {
        _this4.initSlideshowCarousel(external_jQuery_default()(element));
      });
    }
  }, {
    key: "initSlideshowCarousel",
    value: function initSlideshowCarousel($element) {
      var $slides = $element.find('.c-hero__slide');
      var $elementClone = $element.clone().empty().removeAttr('id').addClass('featured-posts-cards--mobile');
      var newHTML = '';
      $slides.each(function (i, obj) {
        var $slide = external_jQuery_default()(obj);
        var $image = $slide.find('.c-hero__image').first();
        var $meta = $slide.find('.c-meta');
        var title = $slide.find('.c-hero__title-mask h2').text();
        var $excerpt = $slide.find('.c-hero__excerpt').html();
        var link = $slide.find('.c-hero__link').attr('href');
        var $cardImage = $image.clone().removeClass('c-hero__image');
        var $cardFrame = external_jQuery_default()('<div class="c-card__frame">');
        var $cardLetter = external_jQuery_default()('<div class="c-card__letter">' + title.charAt(0) + '</div>');
        var $cardAside = external_jQuery_default()('<div class="c-card__aside c-card__thumbnail-background"></div>');
        var $cardMeta = external_jQuery_default()('<div class="c-card__meta">').append($meta);
        var $cardTitle = external_jQuery_default()('<div class="c-card__title"><span>' + title + '</span></div>');
        var $cardExcerpt = external_jQuery_default()('<div class="c-card__excerpt">').append($excerpt);
        var $cardLink = external_jQuery_default()('<a class="c-card__link" href="' + link + '"></a>');
        var $card = external_jQuery_default()('<div class="c-card"></div>');
        var $cardContent = external_jQuery_default()('<div class="c-card__content"></div>');
        $cardFrame.append($cardImage, $cardLetter);
        $cardAside.append($cardFrame);
        $cardContent.append($cardMeta, $cardTitle, $cardExcerpt);
        $card.append($cardAside, $cardContent, $cardLink);
        newHTML += $card.wrap('<article>').parent().prop('outerHTML');
      });
      $elementClone.html(newHTML).insertAfter($element);
      this.featuredCarousel.push(new Carousel_Carousel($elementClone, {
        show_pagination: ''
      }));
    }
  }, {
    key: "initXCardsCarousel",
    value: function initXCardsCarousel($element) {
      var $articles = [].concat(_toConsumableArray($element.find('.posts-wrapper--main').find('article').clone()), _toConsumableArray($element.find('.posts-wrapper--left').find('article').clone()), _toConsumableArray($element.find('.posts-wrapper--right').find('article').clone()));
      var $elementClone = $element.clone().empty().append($articles).addClass('featured-posts-cards--mobile');
      $element.addClass('featured-posts-cards--desktop');
      $element.parent().append($elementClone);
      this.featuredCarousel.push(new Carousel_Carousel($elementClone, {
        show_pagination: ''
      }));
    }
  }, {
    key: "getSlideshows",
    value: function getSlideshows() {
      return _toConsumableArray(external_jQuery_default()('.widget_featured_posts_slideshow'));
    }
  }, {
    key: "getXCardsCarousels",
    value: function getXCardsCarousels() {
      return [].concat(_toConsumableArray(external_jQuery_default()('.featured-posts-5cards')), _toConsumableArray(external_jQuery_default()('.featured-posts-6cards')));
    }
  }]);

  return Felt;
}(BaseTheme_BaseTheme);
new App_Felt();

/***/ })
/******/ ]);