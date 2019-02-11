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
/******/ 		1: 0,
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([8,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseComponent = exports.BaseComponent = function BaseComponent() {
    _classCallCheck(this, BaseComponent);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Helper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = exports.Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: 'isTouch',
        value: function isTouch() {
            // return 'ontouchstart' in window || 'DocumentTouch' in window && document instanceof DocumentTouch;
            return 'ontouchstart' in window || 'DocumentTouch' in window;
        }
    }, {
        key: 'handleCustomCSS',
        value: function handleCustomCSS($container) {
            var $elements = typeof $container !== 'undefined' ? $container.find('[data-css]') : (0, _jquery2.default)('[data-css]');
            if ($elements.length) {
                $elements.each(function (index, obj) {
                    var $element = (0, _jquery2.default)(obj);
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
        key: 'unwrapImages',
        value: function unwrapImages() {
            var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Helper.$body;

            $container.find('p > img:first-child:last-child, p > a:first-child:last-child > img').each(function (index, obj) {
                var $obj = (0, _jquery2.default)(obj);
                var $image = $obj.closest('img');
                var className = $image.attr('class');
                var $p = $image.closest('p');
                var $figure = (0, _jquery2.default)('<figure />').attr('class', className);
                console.log($figure, $p, _jquery2.default.trim($p.text()).length);
                if (_jquery2.default.trim($p.text()).length) {
                    return;
                }
                $figure.append($image.removeAttr('class')).insertAfter($p);
                $p.remove();
            });
        }
    }, {
        key: 'wrapEmbeds',
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
        key: 'handleVideos',
        value: function handleVideos() {
            var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Helper.$body;

            $container.find('.video-placeholder').each(function (index, obj) {
                var $placeholder = (0, _jquery2.default)(obj);
                var video = document.createElement('video');
                var $video = (0, _jquery2.default)(video).addClass('c-hero__video');
                // play as soon as possible
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
        key: 'smoothScrollTo',
        value: function smoothScrollTo() {
            var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
            var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'swing';

            (0, _jquery2.default)('html, body').stop().animate({
                scrollTop: to
            }, duration, easing);
        }
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.

    }, {
        key: 'debounce',
        value: function debounce(func, wait, immediate) {
            var _this = this,
                _arguments = arguments;

            var timeout = void 0;
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
        }
        // Returns a function, that, when invoked, will only be triggered at most once
        // during a given window of time. Normally, the throttled function will run
        // as much as it can, without ever going more than once per `wait` duration;
        // but if you'd like to disable the execution on the leading edge, pass
        // `{leading: false}`. To disable execution on the trailing edge, ditto.

    }, {
        key: 'throttle',
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
        key: 'mq',
        value: function mq(direction, query) {
            var $temp = (0, _jquery2.default)('<div class="u-mq-' + direction + '-' + query + '">').appendTo('body');
            var response = $temp.is(':visible');
            $temp.remove();
            return response;
        }
    }, {
        key: 'below',
        value: function below(query) {
            return Helper.mq('below', query);
        }
    }, {
        key: 'above',
        value: function above(query) {
            return Helper.mq('above', query);
        }
    }, {
        key: 'getParamFromURL',
        value: function getParamFromURL(param, url) {
            var parameters = url.split('?');
            if (typeof parameters[1] === 'undefined') {
                return parameters[1];
            }
            parameters = parameters[1].split('&');
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Array.from(Array(parameters.length).keys())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    var parameter = parameters[i].split('=');
                    if (parameter[0] === param) {
                        return parameter[1];
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'reloadScript',
        value: function reloadScript(filename) {
            var $old = (0, _jquery2.default)('script[src*="' + filename + '"]');
            var $new = (0, _jquery2.default)('<script>');
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
        key: 'getIEversion',
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
            }
            // other browser
            return false;
        }
    }, {
        key: 'markFirstWord',
        value: function markFirstWord($el) {
            var text = $el.text().trim().split(' ');
            var first = text.shift();
            $el.html((text.length > 0 ? '<span class="first-word">' + first + '</span> ' : first) + text.join(' '));
        }
    }, {
        key: 'fitText',
        value: function fitText($el) {
            var currentFontSize = parseFloat($el.css('fontSize'));
            var currentLineHeight = parseFloat($el.css('lineHeight'));
            var height = $el.outerHeight() || currentLineHeight;
            $el.css('fontSize', currentFontSize * height / currentLineHeight);
        }
    }]);

    return Helper;
}();

Helper.$body = (0, _jquery2.default)('body');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxDom = __webpack_require__(5);

var Rx = _interopRequireWildcard(_rxDom);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindowService = exports.WindowService = function () {
    function WindowService() {
        _classCallCheck(this, WindowService);
    }

    _createClass(WindowService, null, [{
        key: 'onLoad',
        value: function onLoad() {
            return Rx.DOM.fromEvent(this.getWindowEl(), 'load');
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            return Rx.DOM.resize(this.getWindowEl());
        }
    }, {
        key: 'onScroll',
        value: function onScroll() {
            return Rx.DOM.scroll(this.getWindowEl());
        }
    }, {
        key: 'getWindow',
        value: function getWindow() {
            return WindowService.$window;
        }
    }, {
        key: 'getScrollY',
        value: function getScrollY() {
            return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return WindowService.$window.width();
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return WindowService.$window.height();
        }
    }, {
        key: 'getWindowEl',
        value: function getWindowEl() {
            return WindowService.$window[0];
        }
    }, {
        key: 'getOrientation',
        value: function getOrientation() {
            return WindowService.getWidth() > WindowService.getHeight() ? 'landscape' : 'portrait';
        }
    }]);

    return WindowService;
}();

WindowService.$window = (0, _jquery2.default)(window);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GlobalService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rxDom = __webpack_require__(5);

var Rx = _interopRequireWildcard(_rxDom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalService = exports.GlobalService = function () {
    function GlobalService() {
        _classCallCheck(this, GlobalService);
    }

    _createClass(GlobalService, null, [{
        key: 'onCustomizerRender',
        value: function onCustomizerRender() {
            var exWindow = window;
            return Rx.Observable.create(function (observer) {
                if (exWindow.wp && exWindow.wp.customize && exWindow.wp.customize.selectiveRefresh) {
                    exWindow.wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
                        observer.onNext($(placement.container));
                    });
                }
            });
        }
    }, {
        key: 'onCustomizerChange',
        value: function onCustomizerChange() {
            var exWindow = window;
            return Rx.Observable.create(function (observer) {
                if (exWindow.wp && exWindow.wp.customize) {
                    exWindow.wp.customize.bind('change', function (setting) {
                        observer.onNext(setting);
                    });
                }
            });
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            return Rx.DOM.ready();
        }
    }]);

    return GlobalService;
}();

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = Masonry;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Carousel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(0);

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _DefaultComponent = __webpack_require__(1);

var _Helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Carousel = exports.Carousel = function (_BaseComponent) {
    _inherits(Carousel, _BaseComponent);

    function Carousel(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));

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
        _this.bindEvents();
        // WindowService.onResize().debounce(300).subscribe( this.onResize.bind(this) );
        return _this;
    }

    _createClass(Carousel, [{
        key: 'bindEvents',
        value: function bindEvents() {
            this.bindSlick();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.element.slick('unslick');
        }
    }, {
        key: 'onResize',
        value: function onResize() {
            console.warn('carousel:resize');
            this.destroy();
            this.extendOptions();
            this.bindEvents();
            // setTimeout(() => {
            //
            // }, 100);
        }
    }, {
        key: 'extendOptions',
        value: function extendOptions() {
            if (_Helper.Helper.above('lap')) {
                return this.extendDesktopOptions(this.options);
            } else {
                return this.extendMobileOptions(this.options);
            }
        }
    }, {
        key: 'extendMobileOptions',
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
        key: 'extendDesktopOptions',
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
        key: 'bindSlick',
        value: function bindSlick() {
            this.element.slick(this.slickOptions);
            this.element.find('.slick-cloned').find('img').addClass('is-loaded');
        }
    }], [{
        key: 'customPagination',
        value: function customPagination(slider, i) {
            var index = i + 1;
            var sIndex = index <= 9 ? '0' + index : index;
            return (0, _jquery2.default)('<button type="button" />').text(sIndex);
        }
    }]);

    return Carousel;
}(_DefaultComponent.BaseComponent);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Felt = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _masonryLayout = __webpack_require__(6);

var Masonry = _interopRequireWildcard(_masonryLayout);

__webpack_require__(0);

var _global = __webpack_require__(4);

var _Helper = __webpack_require__(2);

var _BaseTheme2 = __webpack_require__(9);

var _Carousel = __webpack_require__(7);

var _Slideshow = __webpack_require__(10);

var _StickyHeader = __webpack_require__(12);

var _SearchOverlay = __webpack_require__(14);

var _Recipe = __webpack_require__(15);

var _Gallery = __webpack_require__(16);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Felt = exports.Felt = function (_BaseTheme) {
    _inherits(Felt, _BaseTheme);

    function Felt() {
        _classCallCheck(this, Felt);

        var _this = _possibleConstructorReturn(this, (Felt.__proto__ || Object.getPrototypeOf(Felt)).call(this));

        _this.Recipe = new _Recipe.Recipe();
        _this.featuredCarousel = [];
        _this.carousels = [];
        _this.slideshows = [];
        _this.masonrySelector = '.js-masonry, .u-gallery-type--masonry';
        _global.GlobalService.onCustomizerRender().subscribe(_this.handleCustomizerChanges.bind(_this));
        _this.handleContent();
        return _this;
    }

    _createClass(Felt, [{
        key: 'bindEvents',
        value: function bindEvents() {
            _get(Felt.prototype.__proto__ || Object.getPrototypeOf(Felt.prototype), 'bindEvents', this).call(this);
            (0, _jquery2.default)(document.body).on('post-load', this.onJetpackPostLoad.bind(this));
        }
    }, {
        key: 'onLoadAction',
        value: function onLoadAction() {
            _get(Felt.prototype.__proto__ || Object.getPrototypeOf(Felt.prototype), 'onLoadAction', this).call(this);
            this.Header = new _StickyHeader.StickyHeader();
            this.SearchOverlay = new _SearchOverlay.SearchOverlay();
            Object.assign(window, { StickyHeader: this.Header });
            this.adjustLayout();
            this.initCarousels();
        }
    }, {
        key: 'onResizeAction',
        value: function onResizeAction() {
            _get(Felt.prototype.__proto__ || Object.getPrototypeOf(Felt.prototype), 'onResizeAction', this).call(this);
            this.adjustLayout();
            this.destroySlideshows();
            this.handleSlideshows();
            this.destroyCarousels();
            this.handleCarousels();
            this.initCarousels();
        }
    }, {
        key: 'positionStickyWidgets',
        value: function positionStickyWidgets() {
            var adminBarHeight = (0, _jquery2.default)('#wpadminbar').outerHeight();
            var stickyHeaderHeight = (0, _jquery2.default)('.site-header-sticky').outerHeight();
            (0, _jquery2.default)('.widget-area--side').children('.widget-last').css('top', adminBarHeight + stickyHeaderHeight);
        }
    }, {
        key: 'onJetpackPostLoad',
        value: function onJetpackPostLoad() {
            var $container = (0, _jquery2.default)('#posts-container');
            var $newBlocks = $container.children().not('.post--loaded').addClass('post--loaded');
            $newBlocks.imagesLoaded(function () {
                if ($container.hasClass('js-masonry')) {
                    $container.masonry('appended', $newBlocks, true).masonry('layout');
                    (0, _jquery2.default)('.infinite-loader').hide();
                }
            });
            this.handleContent($container);
            this.adjustLayout();
        }
    }, {
        key: 'scaleCardSeparators',
        value: function scaleCardSeparators() {
            // loop through each card
            (0, _jquery2.default)('.c-card').not('.c-card--related').each(function (i, obj) {
                var $card = (0, _jquery2.default)(obj);
                var $meta = $card.find('.c-meta');
                var $separator = $card.find('.c-meta__separator').hide();
                var width = $card[0].offsetWidth;
                var totalWidth = 0;
                // calculate the sum of the widths of the meta elements
                $meta.children().each(function (j, element) {
                    totalWidth += element.offsetWidth;
                });
                // if there are still at least 14px left, display the separator
                if (totalWidth + 14 <= width) {
                    $separator.show();
                }
            });
        }
    }, {
        key: 'addIsLoadedListener',
        value: function addIsLoadedListener() {
            var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;

            // add every image on the page the .is-loaded class
            // after the image has actually loaded
            $container.find('.widget_categories_image_grid, .c-card__frame, .entry-thumbnail').find('img').each(function (i, element) {
                var $each = (0, _jquery2.default)(element);
                $each.imagesLoaded(function () {
                    $each.addClass('is-loaded');
                });
                if (_Helper.Helper.below('pad')) {
                    $each.addClass('is-loaded');
                }
            });
        }
    }, {
        key: 'handleContent',
        value: function handleContent() {
            var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;

            this.Recipe.positionPrintBtn();
            this.Recipe.wrapRecipeElements();
            _Helper.Helper.unwrapImages($container.find('.entry-content'));
            _Helper.Helper.wrapEmbeds($container.find('.entry-content'));
            _Helper.Helper.handleVideos($container);
            _Helper.Helper.handleCustomCSS($container);
            (0, _jquery2.default)('.single .entry-content .tiled-gallery').wrap('<div class="aligncenter" />');
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
            if ($container.hasClass('blog') && !$container.hasClass('u-site-header-short') && !(0, _jquery2.default)('.o-layout__side').length) {
                this.$body.addClass('has-extended-header-background');
            }
            $container.find('.entry-content p').each(function (i, obj) {
                var $p = (0, _jquery2.default)(obj);
                if (!$p.children().length && !_jquery2.default.trim($p.text()).length) {
                    $p.remove();
                }
            });
            var $commentForm = (0, _jquery2.default)('.comment-form');
            if ($commentForm.length) {
                var $commentFormFooter = (0, _jquery2.default)('<p class="comment-form-subscriptions"></p>').appendTo($commentForm);
                (0, _jquery2.default)('.comment-subscription-form').appendTo($commentFormFooter);
            }
            $container.find('.c-gallery').not('.c-gallery--widget, .c-footer__gallery').each(function (index, element) {
                new _Gallery.Gallery((0, _jquery2.default)(element));
            });
            $container.find('.widget_categories select').select2();
            this.handleCarousels();
            this.handleSlideshows();
            this.handleSingleHeader();
            this.eventHandlers($container);
        }
    }, {
        key: 'handleSingleHeader',
        value: function handleSingleHeader() {
            var $intro = (0, _jquery2.default)('.entry-content').children().first().filter('.intro');
            var $header = (0, _jquery2.default)('.entry-header');
            var $body = (0, _jquery2.default)('body');
            if ($header.is('is-initialised')) {
                return;
            }
            $header.addClass('is-initialised');
            if (_Helper.Helper.above('pad') && $body.is('.entry-image--portrait')) {
                var $wrapper = $header.wrap('<div>').parent();
                var $spacer = (0, _jquery2.default)('<div class="header-spacer"></div>');
                if ($intro.length) {
                    $wrapper.append($intro.wrap('<div class="entry-content u-content-width">').parent());
                } else {
                    $intro = (0, _jquery2.default)('<div class="entry-content u-content-width">');
                    $wrapper.append($intro);
                    $spacer.addClass('header-spacer--empty');
                }
                $spacer.insertAfter($intro);
            }
        }
    }, {
        key: 'destroyCarousels',
        value: function destroyCarousels() {
            this.carousels.forEach(function (carousel) {
                carousel.destroy();
            });
            this.carousels = [];
        }
    }, {
        key: 'destroySlideshows',
        value: function destroySlideshows() {
            this.slideshows.forEach(function (slideshow) {
                slideshow.destroy();
            });
            this.slideshows = [];
        }
    }, {
        key: 'handleCarousels',
        value: function handleCarousels() {
            var _this2 = this;

            this.getFeaturedPostsCarousels().forEach(function (carousel) {
                var $carousel = (0, _jquery2.default)(carousel);
                _this2.carousels.push(new _Carousel.Carousel($carousel, $carousel.data()));
            });
        }
    }, {
        key: 'handleSlideshows',
        value: function handleSlideshows() {
            var _this3 = this;

            var blendedSelector = '.blend-with-header';
            var slideshowWidgetSelector = '.widget_featured_posts_slideshow';
            var headerBlendedClass = 'site-header--inverted';
            var $slideshow = (0, _jquery2.default)('.featured-posts-slideshow');
            var $siteHeader = (0, _jquery2.default)('.site-header');
            var $blended = $slideshow.filter(blendedSelector).first();
            if ($blended.length) {
                if (_Helper.Helper.above('lap')) {
                    var $widget = $blended.closest(slideshowWidgetSelector);
                    var $placeholder = (0, _jquery2.default)('<div class="js-slideshow-placeholder">');
                    $widget.data('placeholder', $placeholder);
                    $placeholder.insertAfter($widget);
                    $widget.appendTo($siteHeader);
                    $siteHeader.addClass(headerBlendedClass);
                } else {
                    $siteHeader.find(slideshowWidgetSelector).each(function (i, obj) {
                        var $widget = (0, _jquery2.default)(obj);
                        var $placeholder = $widget.data('placeholder');
                        $placeholder.replaceWith($widget);
                    });
                    $siteHeader.removeClass(headerBlendedClass);
                }
            }
            $slideshow.each(function (i, obj) {
                var $element = (0, _jquery2.default)(obj);
                _this3.slideshows.push(new _Slideshow.Slideshow($element.find('.c-hero__slider'), $element.data()));
            });
        }
    }, {
        key: 'positionSidebar',
        value: function positionSidebar() {
            if (this.$body.is('.single-post.entry-image--portrait')) {
                var $sidebar = (0, _jquery2.default)('.widget-area--post');
                var $container = $sidebar.parent();
                var containerOffset = void 0;
                var sidebarHeight = void 0;
                var sidebarOffset = void 0;
                var sidebarBottom = void 0;
                if (!$container.length || !$sidebar.length) {
                    return;
                }
                // remove possible properties set on prior calls of this function
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
                if (_Helper.Helper.below('pad')) {
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
        key: 'getFeaturedPostsCarousels',
        value: function getFeaturedPostsCarousels() {
            return [].concat(_toConsumableArray((0, _jquery2.default)('.featured-posts-carousel')));
        }
    }, {
        key: 'handleCustomizerChanges',
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
        key: 'handleCarouselsReload',
        value: function handleCarouselsReload() {
            this.destroyCarousels();
            this.handleCarousels();
        }
    }, {
        key: 'handleSlideshowsReload',
        value: function handleSlideshowsReload() {
            this.destroySlideshows();
            this.handleSlideshows();
        }
    }, {
        key: 'changeHeaderDropcapOpacity',
        value: function changeHeaderDropcapOpacity() {
            if (_Helper.Helper.above('small')) {
                (0, _jquery2.default)('.header-dropcap, .post:not(.has-post-thumbnail) .c-card__letter').each(function (index, element) {
                    (0, _jquery2.default)(element).css('opacity', 1);
                });
            }
        }
    }, {
        key: 'adjustLayout',
        value: function adjustLayout() {
            this.applyMasonryOnGallery();
            this.changeHeaderDropcapOpacity();
            this.scaleCardSeparators();
            // If the branding happens to be in the Left Zone (no Top Menu set), move it in the middle zone
            var $headerNav = (0, _jquery2.default)('.header.nav');
            if ($headerNav.parent().hasClass('c-navbar__zone--left')) {
                $headerNav.appendTo('.c-navbar__zone--middle');
            }
            // If the Top Menu is not present, ensure that items in the left zone are aligned to the right
            if ((0, _jquery2.default)('.menu--secondary').length === 0) {
                (0, _jquery2.default)('.c-navbar__zone--left').addClass('u-justify-end');
            }
            this.wrapContentImages();
            setTimeout(this.modifyHeaderDropcap.bind(this), 100);
            this.positionStickyWidgets();
        }
    }, {
        key: 'applyMasonryOnGallery',
        value: function applyMasonryOnGallery() {
            var $gallery = (0, _jquery2.default)(this.masonrySelector);
            $gallery.each(function (i, obj) {
                var $obj = (0, _jquery2.default)(obj);
                $obj.children().addClass('post--loaded');
                $obj.imagesLoaded(function () {
                    new Masonry($obj.get(0), { transitionDuration: 0 });
                });
            });
        }
    }, {
        key: 'wrapContentImages',
        value: function wrapContentImages() {
            (0, _jquery2.default)('.entry-content').find('figure').filter('.aligncenter, .alignnone').each(function (index, element) {
                var $figure = (0, _jquery2.default)(element);
                var $image = $figure.find('img');
                var figureWidth = $figure.outerWidth();
                var imageWidth = $image.outerWidth();
                if (imageWidth < figureWidth) {
                    $figure.wrap('<p>');
                }
            });
        }
    }, {
        key: 'modifyHeaderDropcap',
        value: function modifyHeaderDropcap() {
            (0, _jquery2.default)('.header-dropcap, .c-card__letter').each(function (index, element) {
                _Helper.Helper.fitText((0, _jquery2.default)(element));
            });
        }
    }, {
        key: 'initCarousels',
        value: function initCarousels() {
            var _this4 = this;

            if (this.featuredCarousel.length > 0) {
                return;
            }
            if (_Helper.Helper.above('lap')) {
                return;
            }
            this.getXCardsCarousels().forEach(function (element) {
                _this4.initXCardsCarousel((0, _jquery2.default)(element));
            });
            this.getSlideshows().forEach(function (element) {
                _this4.initSlideshowCarousel((0, _jquery2.default)(element));
            });
        }
    }, {
        key: 'initSlideshowCarousel',
        value: function initSlideshowCarousel($element) {
            var $slides = $element.find('.c-hero__slide');
            var $elementClone = $element.clone().empty().removeAttr('id').addClass('featured-posts-cards--mobile');
            var newHTML = '';
            $slides.each(function (i, obj) {
                var $slide = (0, _jquery2.default)(obj);
                var $image = $slide.find('.c-hero__image').first();
                var $meta = $slide.find('.c-meta');
                var title = $slide.find('.c-hero__title-mask h2').text();
                var $excerpt = $slide.find('.c-hero__excerpt').html();
                var link = $slide.find('.c-hero__link').attr('href');
                var $cardImage = $image.clone().removeClass('c-hero__image');
                var $cardFrame = (0, _jquery2.default)('<div class="c-card__frame">');
                var $cardLetter = (0, _jquery2.default)('<div class="c-card__letter">' + title.charAt(0) + '</div>');
                var $cardAside = (0, _jquery2.default)('<div class="c-card__aside c-card__thumbnail-background"></div>');
                var $cardMeta = (0, _jquery2.default)('<div class="c-card__meta">').append($meta);
                var $cardTitle = (0, _jquery2.default)('<div class="c-card__title"><span>' + title + '</span></div>');
                var $cardExcerpt = (0, _jquery2.default)('<div class="c-card__excerpt">').append($excerpt);
                var $cardLink = (0, _jquery2.default)('<a class="c-card__link" href="' + link + '"></a>');
                var $card = (0, _jquery2.default)('<div class="c-card"></div>');
                var $cardContent = (0, _jquery2.default)('<div class="c-card__content"></div>');
                $cardFrame.append($cardImage, $cardLetter);
                $cardAside.append($cardFrame);
                $cardContent.append($cardMeta, $cardTitle, $cardExcerpt);
                $card.append($cardAside, $cardContent, $cardLink);
                newHTML += $card.wrap('<article>').parent().prop('outerHTML');
            });
            $elementClone.html(newHTML).insertAfter($element);
            this.featuredCarousel.push(new _Carousel.Carousel($elementClone, { show_pagination: '' }));
        }
    }, {
        key: 'initXCardsCarousel',
        value: function initXCardsCarousel($element) {
            var $articles = [].concat(_toConsumableArray($element.find('.posts-wrapper--main').find('article').clone()), _toConsumableArray($element.find('.posts-wrapper--left').find('article').clone()), _toConsumableArray($element.find('.posts-wrapper--right').find('article').clone()));
            var $elementClone = $element.clone().empty().append($articles).addClass('featured-posts-cards--mobile');
            $element.addClass('featured-posts-cards--desktop');
            $element.parent().append($elementClone);
            this.featuredCarousel.push(new _Carousel.Carousel($elementClone, { show_pagination: '' }));
        }
    }, {
        key: 'getSlideshows',
        value: function getSlideshows() {
            return [].concat(_toConsumableArray((0, _jquery2.default)('.widget_featured_posts_slideshow')));
        }
    }, {
        key: 'getXCardsCarousels',
        value: function getXCardsCarousels() {
            return [].concat(_toConsumableArray((0, _jquery2.default)('.featured-posts-5cards')), _toConsumableArray((0, _jquery2.default)('.featured-posts-6cards')));
        }
    }]);

    return Felt;
}(_BaseTheme2.BaseTheme);

new Felt();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseTheme = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _Helper = __webpack_require__(2);

var _window = __webpack_require__(3);

var _global = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseTheme = exports.BaseTheme = function () {
    function BaseTheme() {
        _classCallCheck(this, BaseTheme);

        this.$body = (0, _jquery2.default)('body');
        this.$window = (0, _jquery2.default)(window);
        this.$html = (0, _jquery2.default)('html');
        this.ev = (0, _jquery2.default)({});
        this.frameRendered = false;
        this.subscriptionActive = true;
        this.$html.toggleClass('is-IE', _Helper.Helper.getIEversion() && _Helper.Helper.getIEversion() < 12);
        this.bindEvents();
        this.renderLoop();
    }

    _createClass(BaseTheme, [{
        key: 'bindEvents',
        value: function bindEvents() {
            _global.GlobalService.onReady().take(1).subscribe(this.onReadyAction.bind(this));
            _window.WindowService.onLoad().take(1).subscribe(this.onLoadAction.bind(this));
            _window.WindowService.onResize().debounce(500).subscribe(this.onResizeAction.bind(this));
            _window.WindowService.onScroll().subscribe(this.onScrollAction.bind(this));
            // Leave comments area visible by default and
            // show it only if the URL links to a comment
            if (window.location.href.indexOf('#comment') === -1) {
                (0, _jquery2.default)('.trigger-comments').removeAttr('checked');
            }
            this.$window.on('beforeunload', this.fadeOut.bind(this));
            this.ev.on('render', this.update.bind(this));
        }
    }, {
        key: 'onScrollAction',
        value: function onScrollAction() {
            this.frameRendered = false;
        }
    }, {
        key: 'onReadyAction',
        value: function onReadyAction() {
            this.$html.addClass('is-ready');
        }
    }, {
        key: 'onLoadAction',
        value: function onLoadAction() {
            this.$html.addClass('is-loaded');
            this.fadeIn();
        }
    }, {
        key: 'onResizeAction',
        value: function onResizeAction() {}
    }, {
        key: 'destroy',
        value: function destroy() {
            this.subscriptionActive = false;
        }
    }, {
        key: 'renderLoop',
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
        key: 'update',
        value: function update() {
            this.backToTop();
        }
    }, {
        key: 'backToTop',
        value: function backToTop() {
            (0, _jquery2.default)('.back-to-top').toggleClass('is-visible', _window.WindowService.getScrollY() >= _window.WindowService.getHeight());
        }
    }, {
        key: 'eventHandlers',
        value: function eventHandlers($container) {
            $container.find('.back-to-top').on('click', function (e) {
                e.preventDefault();
                _Helper.Helper.smoothScrollTo(0, 1000);
            });
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut() {
            this.$html.removeClass('fade-in').addClass('fade-out');
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn() {
            this.$html.removeClass('fade-out no-transitions').addClass('fade-in');
        }
    }]);

    return BaseTheme;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slideshow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(0);

var _Carousel2 = __webpack_require__(7);

var _gsap = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slideshow = exports.Slideshow = function (_Carousel) {
    _inherits(Slideshow, _Carousel);

    function Slideshow(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Slideshow);

        return _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, element, options));
    }

    _createClass(Slideshow, [{
        key: 'destroy',
        value: function destroy() {
            _get(Slideshow.prototype.__proto__ || Object.getPrototypeOf(Slideshow.prototype), 'destroy', this).call(this);
            this.element.off('beforeChange');
        }
    }, {
        key: 'bindEvents',
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
        key: 'onResize',
        value: function onResize() {
            console.warn('slideshow:resize');
            this.destroy();
            this.extendOptions();
            this.bindEvents();
        }
    }, {
        key: 'onBeforeSlideChange',
        value: function onBeforeSlideChange(event, slick, currentSlide, nextSlide) {
            var $currentSlide = (0, _jquery2.default)(slick.$slides[currentSlide]);
            var $nextSlide = (0, _jquery2.default)(slick.$slides[nextSlide]);
            (0, _jquery2.default)(slick.$slides).css('zIndex', 800);
            this.transition($currentSlide, $nextSlide, this.getDirection(slick, currentSlide, nextSlide));
        }
    }, {
        key: 'transition',
        value: function transition($current, $next) {
            var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            var timeline = new _gsap.TimelineLite({ paused: true });
            var duration = this.slickOptions.speed / 1000;
            var slideWidth = $current.outerWidth();
            var move = 300;
            timeline.fromTo($next, duration, { x: sign * slideWidth }, { x: 0, ease: _gsap.Power4.easeInOut }, 0);
            timeline.fromTo($next.find('.c-hero__background'), duration, { x: -sign * (slideWidth - move) }, { x: 0, ease: _gsap.Power4.easeInOut }, 0);
            timeline.fromTo($next.find('.c-hero__content'), duration, { x: -sign * slideWidth }, { x: 0, ease: _gsap.Power4.easeInOut }, 0);
            timeline.fromTo($current, duration, { x: 0 }, { x: -sign * slideWidth, ease: _gsap.Power4.easeInOut }, 0);
            timeline.fromTo($current.find('.c-hero__background'), duration, { x: 0 }, { x: sign * (slideWidth - move), ease: _gsap.Power4.easeInOut }, 0);
            timeline.fromTo($current.find('.c-hero__content'), duration, { x: 0 }, { x: sign * slideWidth, ease: _gsap.Power4.easeInOut }, 0);
            timeline.play();
        }
    }, {
        key: 'getDirection',
        value: function getDirection(slick, currentSlide, nextSlide) {
            if (nextSlide > currentSlide) {
                return 1;
            }
            return -1;
        }
    }]);

    return Slideshow;
}(_Carousel2.Carousel);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = _gsScope;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StickyHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(0);

var _DefaultComponent = __webpack_require__(1);

var _ProgressBar = __webpack_require__(13);

var _window = __webpack_require__(3);

var _Helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickyHeader = exports.StickyHeader = function (_BaseComponent) {
    _inherits(StickyHeader, _BaseComponent);

    function StickyHeader() {
        _classCallCheck(this, StickyHeader);

        var _this = _possibleConstructorReturn(this, (StickyHeader.__proto__ || Object.getPrototypeOf(StickyHeader)).call(this));

        _this.$body = (0, _jquery2.default)('body');
        _this.$document = (0, _jquery2.default)(document);
        _this.$mainMenu = (0, _jquery2.default)('.menu--primary');
        _this.$mainMenuItems = _this.$mainMenu.find('li');
        _this.$readingBar = (0, _jquery2.default)('.js-reading-bar');
        _this.$stickyHeader = (0, _jquery2.default)('.js-site-header-sticky');
        _this.$menuToggle = (0, _jquery2.default)('#menu-toggle');
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
        (0, _jquery2.default)('.c-navbar .c-logo').imagesLoaded(function () {
            _this.bindEvents();
            _this.eventHandlers();
            _this.appendSearchTrigger();
            _this.updateOnResize();
            _this.refresh(_window.WindowService.getScrollY());
        });
        return _this;
    }

    _createClass(StickyHeader, [{
        key: 'destroy',
        value: function destroy() {
            this.subscriptionActive = false;
        }
    }, {
        key: 'bindEvents',
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
            _window.WindowService.onScroll().takeWhile(function () {
                return _this2.subscriptionActive;
            }).map(function () {
                return _window.WindowService.getScrollY();
            }).subscribe(function (scrollPosition) {
                _this2.refresh(scrollPosition);
            });
            _window.WindowService.onResize().takeWhile(function () {
                return _this2.subscriptionActive;
            }).subscribe(function () {
                _this2.updateOnResize();
            });
        }
    }, {
        key: 'eventHandlers',
        value: function eventHandlers() {
            if (_Helper.Helper.below('lap') && !this.areMobileBindingsDone) {
                this.$document.on('click', this.preventOneSelector, this.onMobileMenuExpand.bind(this));
                this.areMobileBindingsDone = true;
            }
            if (_Helper.Helper.above('lap') && this.areMobileBindingsDone) {
                this.$document.off('click', this.preventOneSelector, this.onMobileMenuExpand.bind(this));
                this.areMobileBindingsDone = false;
            }
        }
    }, {
        key: 'onMobileMenuExpand',
        value: function onMobileMenuExpand(e) {
            e.preventDefault();
            e.stopPropagation();
            var $button = (0, _jquery2.default)(e.currentTarget);
            var activeClass = 'active';
            var hoverClass = 'hover';
            if ($button.hasClass(activeClass)) {
                window.location.href = $button.attr('href');
                return;
            }
            (0, _jquery2.default)(this.preventOneSelector).removeClass(activeClass);
            $button.addClass(activeClass);
            // When a parent menu item is activated,
            // close other menu items on the same level
            $button.parent().siblings().removeClass(hoverClass);
            // Open the sub menu of this parent item
            $button.parent().addClass(hoverClass);
        }
    }, {
        key: 'onMenuToggleChange',
        value: function onMenuToggleChange(e) {
            var _this3 = this;

            var isMenuOpen = (0, _jquery2.default)(e.currentTarget).prop('checked');
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
        key: 'toggleSubMenu',
        value: function toggleSubMenu(e, toggle) {
            (0, _jquery2.default)(e.currentTarget).toggleClass('hover', toggle);
        }
    }, {
        key: 'refresh',
        value: function refresh() {
            var scrollPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            this.shouldUpdate = this.$body.is('.u-site-header-sticky');
            if (_Helper.Helper.below('lap')) {
                this.shouldUpdate = false;
            }
            this.updateOnScroll(scrollPosition);
        }
    }, {
        key: 'prepareDesktopMenuMarkup',
        value: function prepareDesktopMenuMarkup() {
            if (this.isDesktopHeaderInitialised) {
                return;
            }
            var htmlTop = parseInt((0, _jquery2.default)('html').css('marginTop'), 10);
            this.$stickyHeader.css('top', htmlTop);
            // Figure out where is the offset of the Main Menu.
            // If there is no Main Menu set, show the reading bar
            // after passing the branding.
            if (this.$mainMenu.length === 1) {
                this.initialMenuOffset = this.$mainMenu.offset().top - htmlTop;
            } else {
                var $branding = (0, _jquery2.default)('.c-branding');
                this.initialMenuOffset = $branding.offset().top + $branding.outerHeight();
            }
            // Fallback to the other, secondary menu (top left one).
            if (this.$mainMenu.length === 0) {
                this.$mainMenu = (0, _jquery2.default)('.menu--secondary');
            }
            // If there is a menu, either the "true" main one or the fallback one,
            // clone it and append it to the reading bar.
            if (this.$mainMenu.length === 1) {
                this.$mainMenu = this.$mainMenu.clone(true, true).appendTo(this.$stickyHeader.find('.c-navbar'));
            }
            this.$stickyHeader.find('.c-navbar').css('height', this.$stickyHeader.height());
            // this.$readingBar = null;
            // this.$progressBar = null;
            this.prepareSingleHeader();
            this.refresh();
            this.isDesktopHeaderInitialised = true;
        }
    }, {
        key: 'prepareMobileMenuMarkup',
        value: function prepareMobileMenuMarkup() {
            // If if has not been done yet, prepare the mark-up for the mobile navigation
            if (!this.isMobileHeaderInitialised) {
                // Append the branding
                var $branding = (0, _jquery2.default)('.c-branding');
                var $navbarZone = (0, _jquery2.default)('.c-navbar__zone--right');
                $branding.clone().addClass('c-branding--mobile').appendTo('.c-navbar');
                $branding.find('img').removeClass('is--loading');
                // Create the mobile site header
                var $siteHeaderMobile = (0, _jquery2.default)('<div class="site-header-mobile u-container-sides-spacing"></div>').appendTo('.c-navbar');
                // Append the social menu
                var $socialMenu = (0, _jquery2.default)('.c-navbar__zone--left .jetpack-social-navigation').clone();
                var $searchTrigger = $socialMenu.find('.js-search-trigger').parent().clone();
                $navbarZone.append($socialMenu);
                $navbarZone.find('.js-search-trigger').parent().remove();
                $siteHeaderMobile.append($socialMenu.empty().append($searchTrigger));
                // Handle sub menus:
                // Make sure there are no open menu items
                (0, _jquery2.default)('.menu-item-has-children').removeClass('hover');
                // Add a class so we know the items to handle
                (0, _jquery2.default)('.menu-item-has-children > a').each(function (index, element) {
                    (0, _jquery2.default)(element).addClass('prevent-one');
                });
                // Replace the label text and make it visible
                (0, _jquery2.default)('.c-navbar__label-text ').html((0, _jquery2.default)('.js-menu-mobile-label').html()).removeClass('screen-reader-text');
                this.isMobileHeaderInitialised = true;
            }
        }
    }, {
        key: 'prepareSingleHeader',
        value: function prepareSingleHeader() {
            if (!this.isSingular || !this.isStickyHeaderEnabled) {
                return;
            }
            (0, _jquery2.default)('.c-reading-bar__wrapper-social').find('.share-end').remove();
            var entryHeader = (0, _jquery2.default)('.entry-header, .entry-summary');
            var entryContent = (0, _jquery2.default)('.single-main').find('.entry-content');
            var entryHeaderHeight = entryHeader.outerHeight() || 0;
            var entryContentHeight = entryContent.outerHeight() || 0;
            var articleHeight = entryHeaderHeight + entryContentHeight;
            if (this.$body.hasClass('entry-image--landscape')) {
                articleHeight = articleHeight + (0, _jquery2.default)('.entry-thumbnail').outerHeight();
            }
            this.ProgressBar = new _ProgressBar.ProgressBar({
                canShow: this.isSingular,
                max: entryHeader.offset().top + articleHeight - this.initialMenuOffset,
                offset: this.initialMenuOffset
            });
            if (this.$mainMenu.length !== 1) {
                (0, _jquery2.default)('.js-sticky-menu-trigger').remove();
            }
        }
    }, {
        key: 'updateOnScroll',
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
        key: 'updateOnResize',
        value: function updateOnResize() {
            this.eventHandlers();
            if (_Helper.Helper.below('lap')) {
                this.prepareMobileMenuMarkup();
            } else {
                this.prepareDesktopMenuMarkup();
            }
        }
    }, {
        key: 'onClickStickyMenu',
        value: function onClickStickyMenu() {
            var _this5 = this;

            this.$stickyHeader.addClass('reading-bar--hide');
            setTimeout(function () {
                _this5.$stickyHeader.css('overflow', '');
            }, 350);
        }
    }, {
        key: 'appendSearchTrigger',
        value: function appendSearchTrigger() {
            var $headerSocialNavigation = (0, _jquery2.default)('.c-navbar__zone--left .jetpack-social-navigation');
            this.$searchTrigger = (0, _jquery2.default)('.js-search-trigger').removeClass('u-hidden');
            // Append the search trigger either to the social navigation
            if ($headerSocialNavigation.length === 1) {
                this.$searchTrigger.clone().wrap('<li class="menu-item"></li>').parent().appendTo($headerSocialNavigation.find('.menu'));
            } else {
                // Or directly to zone left if there is no social navigation
                this.$searchTrigger.clone().appendTo((0, _jquery2.default)('.c-navbar__zone--left'));
            }
            this.$searchTrigger.clone().appendTo((0, _jquery2.default)('.site-header-sticky .c-navbar'));
            this.$searchTrigger.remove();
        }
    }]);

    return StickyHeader;
}(_DefaultComponent.BaseComponent);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProgressBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _DefaultComponent = __webpack_require__(1);

var _window = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = exports.ProgressBar = function (_BaseComponent) {
    _inherits(ProgressBar, _BaseComponent);

    function ProgressBar(options) {
        _classCallCheck(this, ProgressBar);

        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this));

        _this.$progressBar = (0, _jquery2.default)('.js-reading-progress');
        _this.subscriptionActive = true;
        _this.scrollPosition = 0;
        _this.max = 0;
        _this.setOptions(options);
        _this.init();
        _this.bindEvents();
        return _this;
    }

    _createClass(ProgressBar, [{
        key: 'init',
        value: function init() {
            this.max = this.options.max > _window.WindowService.getHeight() ? this.options.max - _window.WindowService.getHeight() : this.options.max;
            this.$progressBar.attr('max', this.max);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.subscriptionActive = false;
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this2 = this;

            _window.WindowService.onScroll().takeWhile(function () {
                return _this2.subscriptionActive;
            }).subscribe(function () {
                _this2.onScroll();
            });
        }
    }, {
        key: 'change',
        value: function change(value) {
            this.$progressBar.attr('value', value);
        }
    }, {
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = Object.assign({}, this.options, options);
        }
    }, {
        key: 'isCloseToEnd',
        value: function isCloseToEnd() {
            return this.max <= this.scrollPosition - this.options.offset;
        }
    }, {
        key: 'onScroll',
        value: function onScroll() {
            this.scrollPosition = _window.WindowService.getScrollY();
            if (this.options.canShow && this.scrollPosition > this.options.offset) {
                this.change(this.scrollPosition - this.options.offset);
            }
        }
    }]);

    return ProgressBar;
}(_DefaultComponent.BaseComponent);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _rxDom = __webpack_require__(5);

var Rx = _interopRequireWildcard(_rxDom);

var _DefaultComponent = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var activeClass = 'show-search-overlay';
var openClass = '.js-search-trigger';
var closeClass = '.js-search-close';
var escKeyCode = 27;

var SearchOverlay = exports.SearchOverlay = function (_BaseComponent) {
    _inherits(SearchOverlay, _BaseComponent);

    function SearchOverlay() {
        _classCallCheck(this, SearchOverlay);

        var _this = _possibleConstructorReturn(this, (SearchOverlay.__proto__ || Object.getPrototypeOf(SearchOverlay)).call(this));

        _this.$body = (0, _jquery2.default)('body');
        _this.$document = (0, _jquery2.default)(document);
        _this.$searchField = (0, _jquery2.default)('.c-search-overlay').find('.search-field');
        _this.subscriptionActive = true;
        _this.keyupSubscriptionActive = true;
        _this.bindEvents();
        return _this;
    }

    _createClass(SearchOverlay, [{
        key: 'destroy',
        value: function destroy() {
            this.subscriptionActive = false;
            this.keyupSubscriptionActive = false;
            this.$document.off('click.SearchOverlay');
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this2 = this;

            this.$document.on('click.SearchOverlay', openClass, this.open.bind(this));
            this.closeSub = Rx.DOM.click(document.querySelector(closeClass));
            this.keyupSub = Rx.DOM.keyup(document.querySelector('body'));
            this.closeSub.takeWhile(function () {
                return _this2.subscriptionActive;
            }).subscribe(this.close.bind(this));
        }
    }, {
        key: 'createKeyupSubscription',
        value: function createKeyupSubscription() {
            var _this3 = this;

            this.keyupSubscriptionActive = true;
            this.keyupSub.takeWhile(function () {
                return _this3.keyupSubscriptionActive;
            }).subscribe(this.closeOnEsc.bind(this));
        }
    }, {
        key: 'open',
        value: function open() {
            this.$searchField.focus();
            this.$body.addClass(activeClass);
            this.createKeyupSubscription();
        }
    }, {
        key: 'close',
        value: function close() {
            this.$body.removeClass(activeClass);
            this.$searchField.blur();
            this.keyupSubscriptionActive = false;
        }
    }, {
        key: 'closeOnEsc',
        value: function closeOnEsc(e) {
            if (e.keyCode === escKeyCode) {
                this.close();
            }
        }
    }]);

    return SearchOverlay;
}(_DefaultComponent.BaseComponent);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Recipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _DefaultComponent = __webpack_require__(1);

var _Helper = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jetpackRecipeClass = 'jetpack-recipe';
var jetpackRecipePrintClass = 'jetpack-recipe-print';
var jetpackRecipeContentClass = 'jetpack-recipe-content';
var jetpackRecipeIngredientsClass = 'jetpack-recipe-ingredients';

var Recipe = exports.Recipe = function (_BaseComponent) {
    _inherits(Recipe, _BaseComponent);

    function Recipe() {
        _classCallCheck(this, Recipe);

        var _this = _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this));

        _this.$body = (0, _jquery2.default)('body');
        _this.bindEvents();
        return _this;
    }

    _createClass(Recipe, [{
        key: 'destroy',
        value: function destroy() {}
    }, {
        key: 'bindEvents',
        value: function bindEvents() {}
    }, {
        key: 'positionPrintBtn',
        value: function positionPrintBtn() {
            var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;

            $container.find('.' + jetpackRecipeClass).each(function (index, element) {
                var $recipe = (0, _jquery2.default)(element);
                var $print = $recipe.find('.' + jetpackRecipePrintClass);
                var $recipeContent = $recipe.find('.' + jetpackRecipeContentClass);
                var $ingredients = $recipe.find('.' + jetpackRecipeIngredientsClass);
                $print.find('a').clone(true).appendTo($recipeContent).wrap('<div class="' + jetpackRecipePrintClass + '"></div>');
                if ($ingredients.length) {
                    $recipeContent.find('.' + jetpackRecipePrintClass).addClass('jetpack-has-ingredients');
                }
                $print.remove();
            });
        }
    }, {
        key: 'wrapRecipeElements',
        value: function wrapRecipeElements() {
            var $container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$body;

            $container.find('.jetpack-recipe-image').wrap('<div class="jetpack-recipe-image-container"></div>');
            $container.find('.' + jetpackRecipeIngredientsClass + ' ul > li').each(function (index, element) {
                _Helper.Helper.markFirstWord((0, _jquery2.default)(element));
            });
        }
    }]);

    return Recipe;
}(_DefaultComponent.BaseComponent);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Gallery = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _masonryLayout = __webpack_require__(6);

var Masonry = _interopRequireWildcard(_masonryLayout);

var _DefaultComponent = __webpack_require__(1);

var _window = __webpack_require__(3);

var _global = __webpack_require__(4);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = exports.Gallery = function (_BaseComponent) {
    _inherits(Gallery, _BaseComponent);

    function Gallery(element) {
        _classCallCheck(this, Gallery);

        var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

        _this.subscriptionActive = true;
        _this.masonryGallerySelector = '.c-gallery--packed, .c-gallery--masonry';
        _this.element = element;
        _this.layout();
        _window.WindowService.onResize().debounce(300).takeWhile(function () {
            return _this.subscriptionActive;
        }).subscribe(function () {
            _this.layout();
        });
        _global.GlobalService.onCustomizerRender().debounce(300).takeWhile(function () {
            return _this.subscriptionActive;
        }).subscribe(function () {
            _this.layout();
        });
        _global.GlobalService.onCustomizerChange().debounce(300).takeWhile(function () {
            return _this.subscriptionActive;
        }).subscribe(function () {
            _this.layout();
        });
        return _this;
    }

    _createClass(Gallery, [{
        key: 'bindEvents',
        value: function bindEvents() {}
    }, {
        key: 'destroy',
        value: function destroy() {
            this.subscriptionActive = false;
        }
    }, {
        key: 'layout',
        value: function layout() {
            var $items = this.element.children();
            var minColumnWidth = void 0;
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
            this.masonry = new Masonry(this.element.get(0), {
                columnWidth: minColumnWidth,
                transitionDuration: 0
            });
        }
    }]);

    return Gallery;
}(_DefaultComponent.BaseComponent);

/***/ })
/******/ ]);