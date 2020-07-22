(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/json-viewer/json-viewer.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/json-viewer/json-viewer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>JSON ОБРАБОТЧИК</h2>\n<div class=\"json-container\" (dragenter)=\"onDragEnter($event)\" (dragleave)=\"onDragLeave($event)\">\n  <button class=\"add-btn\" (click)=\"dropzone.showFileSelector()\">Загрузить Json</button>\n\n  <p class=\"json-placeholder\" *ngIf=\"!preparedJson.length || isDropping\">ПЕРЕТАЩИТЕ ФАЙЛ СЮДА</p>\n  <ng-container *ngIf=\"!isDropping\">\n    <div class=\"json-object\">\n      <ul>\n        <ng-container *ngFor=\"let item of preparedJson; let i = index;\">\n          <li *ngIf=\"item.isVisible\">\n            <span *ngIf=\"item.level\" [ngClass]=\"[item.type !== 'empty' ? 'gray-line w-level-' + item.level : 'w-level-' + item.level]\"></span>\n            <ng-container *ngIf=\"['array', 'object', 'empty'].includes(item.type); else notObject\">\n              <i [ngClass]=\"{'fa': true, 'fa-caret-down': item.isOpened, 'fa-caret-right': !item.isOpened}\"\n                 (click)=\"toggleObject(i)\"\n                 [style.display]=\"item.type === 'empty' ? 'none' : 'inline-block'\" aria-hidden=\"true\">\n              </i>\n              <span *ngIf=\"item.type !== 'empty'\" class=\"json-object--text\" (click)=\"toggleObject(i)\">{{item.value + ' ' + item.data}}</span>\n              <span *ngIf=\"item.type === 'empty'\" class=\"json-object--empty\">{{item.value}}</span>\n            </ng-container>\n            <ng-template #notObject>\n              <span class=\"key-black-color\">{{item.value}}:</span>\n              <span class=\"entry-green-color\">{{item.data}}</span>\n            </ng-template>\n\n            <i class=\"fa fa-files-o copy-icon\" aria-hidden=\"true\" (click)=\"copyData(i)\"></i>\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n  </ng-container>\n  <ngx-dropzone (change)=\"onSelect($event)\" [multiple]=\"false\" [accept]=\"'application/json'\"\n    [ngStyle]=\"{'pointer-events': isDropping ? 'auto' : 'none'}\"></ngx-dropzone>\n</div>\n<app-notification *ngIf=\"notificationText\" (onClick)=\"closeNotification($event)\"\n  [text]=\"notificationText\" [type]=\"notificationType\">\n</app-notification>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"notification\">\n  <i class=\"ti ti-close close-icon\" (click)=\"onClick.emit('')\"></i>\n  <div class=\"icon\">\n    <i [ngClass]=\"['fa fa-files-o copy-icon', type === 'error' ? 'magenta-color' : '']\" aria-hidden=\"true\"></i>\n  </div>\n  <div class=\"message\">{{text}}</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json-viewer/json-viewer.component */ "./src/app/json-viewer/json-viewer.component.ts");




const routes = [{ path: '', component: _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_3__["JsonViewerComponent"] }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'json-viewer-test';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json-viewer/json-viewer.component */ "./src/app/json-viewer/json-viewer.component.ts");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.js");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _json_viewer_json_viewer_component__WEBPACK_IMPORTED_MODULE_5__["JsonViewerComponent"],
            _notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["NotificationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__["NgxDropzoneModule"],
            ngx_json_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxJsonViewerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/json-viewer/json-viewer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/json-viewer/json-viewer.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-flow: column nowrap;\n  padding-top: 84px;\n}\n:host app-notification {\n  position: absolute;\n  right: 40px;\n  bottom: 60px;\n}\n:host h2 {\n  text-align: center;\n  letter-spacing: 0px;\n  color: #313643;\n  padding: 10px;\n  margin: 0;\n  font: 500 32px/30px Roboto;\n}\n:host .json-container {\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n  width: 1000px;\n  max-width: 100%;\n  min-height: 652px;\n  height: calc(100vh - 148px);\n  overflow: hidden;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #E6ECF5;\n  border-radius: 10px 10px 0px 0px;\n  margin: auto;\n}\n:host .json-container p.json-placeholder {\n  position: relative;\n  top: -50px;\n  margin: auto;\n  padding: 0;\n  text-align: center;\n  letter-spacing: 0px;\n  color: #E6ECF5;\n  font: 500 32px/30px Roboto;\n}\n:host .json-container button.add-btn {\n  position: absolute;\n  z-index: 2;\n  top: 40px;\n  right: 60px;\n  border: none;\n  outline: none;\n  background: #22A4DC 0% 0% no-repeat padding-box;\n  border-radius: 10px;\n  letter-spacing: 0px;\n  padding: 5px 13px;\n  color: #FFFFFF;\n  font: 300 14px/30px Roboto;\n  cursor: pointer;\n}\n:host .json-container ngx-dropzone {\n  position: absolute;\n  z-index: 1;\n  border: none;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n:host .json-container ngx-json-viewer, :host .json-container .json-object {\n  position: absolute;\n  z-index: 1;\n  border: none;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  padding-top: 120px;\n  padding-left: 37px;\n  padding-right: 62px;\n}\n:host .json-container .json-object {\n  font: 300 14px/30px Roboto;\n  letter-spacing: 0px;\n  color: #888EA7;\n  overflow: auto;\n  padding-bottom: 20px;\n}\n:host .json-container .json-object--empty {\n  color: #E6ECF5;\n}\n:host .json-container .json-object span, :host .json-container .json-object i {\n  padding-left: 10px;\n}\n:host .json-container .json-object ul {\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n}\n:host .json-container .json-object li {\n  counter-increment: number;\n  padding-left: 10px;\n}\n:host .json-container .json-object li .copy-icon {\n  display: none;\n  color: #F7AB29;\n}\n:host .json-container .json-object li:hover {\n  cursor: pointer;\n  background: #E6ECF5 0% 0% no-repeat padding-box;\n}\n:host .json-container .json-object li:hover .copy-icon {\n  display: inline-block;\n}\n:host .json-container .json-object li .gray-line {\n  display: inline-block;\n  vertical-align: middle;\n  min-width: 21px;\n  height: 0px;\n  border: 1px solid #E6ECF5;\n  margin-left: 10px;\n}\n:host .json-container .json-object li .w-level-1 {\n  display: inline-block;\n  width: 21px;\n}\n:host .json-container .json-object li .w-level-2 {\n  display: inline-block;\n  width: 42px;\n}\n:host .json-container .json-object li .w-level-3 {\n  display: inline-block;\n  width: 63px;\n}\n:host .json-container .json-object li .w-level-4 {\n  display: inline-block;\n  width: 84px;\n}\n:host .json-container .json-object li .w-level-5 {\n  display: inline-block;\n  width: 105px;\n}\n:host .json-container .json-object li .w-level-6 {\n  display: inline-block;\n  width: 126px;\n}\n:host .json-container .json-object li .w-level-7 {\n  display: inline-block;\n  width: 147px;\n}\n:host .json-container .json-object li .w-level-8 {\n  display: inline-block;\n  width: 168px;\n}\n:host .json-container .json-object li .w-level-9 {\n  display: inline-block;\n  width: 189px;\n}\n:host .json-container .json-object li .w-level-10 {\n  display: inline-block;\n  width: 210px;\n}\n:host .json-container .json-object li .key-black-color {\n  color: #313643;\n}\n:host .json-container .json-object li .entry-green-color {\n  color: #AAC72E;\n}\n:host .json-container .json-object li::before {\n  content: counter(number) \" \";\n}\n:host .json-container .json-object li:hover::before {\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvanNvbi12aWV3ZXIvQzpcXFVzZXJzXFxQYXZlbCBBXFxEZXNrdG9wXFxEZXZzXFxqc29uLXZpZXdlci9zcmNcXGFwcFxcanNvbi12aWV3ZXJcXGpzb24tdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9qc29uLXZpZXdlci9qc29uLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDQ0o7QURFSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDRE47QURJSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNGTjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0hOO0FETUk7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0pOO0FETU07RUFDRSxjQUFBO0FDSlI7QURPTTtFQUNFLGtCQUFBO0FDTFI7QURRTTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNOUjtBRFFNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ05SO0FET1E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0xWO0FEUVE7RUFDRSxlQUFBO0VBQ0EsK0NBQUE7QUNOVjtBRE9VO0VBQ0UscUJBQUE7QUNMWjtBRFNRO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ1BWO0FEVVU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNSWjtBRE1VO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDSlo7QURFVTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0FaO0FERlU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNJWjtBRE5VO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDUVo7QURWVTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ1laO0FEZFU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNnQlo7QURsQlU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNvQlo7QUR0QlU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUN3Qlo7QUQxQlU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUM0Qlo7QURsQlE7RUFDRSxjQUFBO0FDb0JWO0FEbEJRO0VBQ0UsY0FBQTtBQ29CVjtBRGpCTTtFQUNFLDRCQUFBO0FDbUJSO0FEakJNO0VBQ0UsY0FBQTtBQ21CUiIsImZpbGUiOiJzcmMvYXBwL2pzb24tdmlld2VyL2pzb24tdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gIHBhZGRpbmctdG9wOiA4NHB4O1xyXG5cclxuICBhcHAtbm90aWZpY2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA0MHB4O1xyXG4gICAgYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMzMTM2NDM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udDogNTAwIDMycHgvMzBweCBSb2JvdG87XHJcbiAgfVxyXG4gIC5qc29uLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MnB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQ4cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U2RUNGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuXHJcbiAgICBwLmpzb24tcGxhY2Vob2xkZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTUwcHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogI0U2RUNGNTtcclxuICAgICAgZm9udDogNTAwIDMycHgvMzBweCBSb2JvdG87XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmFkZC1idG4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIHRvcDogNDBweDtcclxuICAgICAgcmlnaHQ6IDYwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogIzIyQTREQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxM3B4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udDogMzAwIDE0cHgvMzBweCBSb2JvdG87XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBuZ3gtZHJvcHpvbmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICBuZ3gtanNvbi12aWV3ZXIsIC5qc29uLW9iamVjdCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTIwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzdweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNjJweDtcclxuICAgIH1cclxuXHJcbiAgICAuanNvbi1vYmplY3Qge1xyXG4gICAgICBmb250OiAzMDAgMTRweC8zMHB4IFJvYm90bztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgY29sb3I6ICM4ODhFQTc7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICYtLWVtcHR5IHtcclxuICAgICAgICBjb2xvcjogI0U2RUNGNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiwgaSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBjb3VudGVyLWluY3JlbWVudDogbnVtYmVyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAuY29weS1pY29uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogI0Y3QUIyOTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0U2RUNGNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAuY29weS1pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyYXktbGluZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAyMXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRTZFQ0Y1O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtaXhpbiB3aWR0aC1jbGFzcygkc2l6ZSkge1xyXG4gICAgICAgICAgLnctbGV2ZWwtI3skc2l6ZX0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAkc2l6ZSAqIDIxcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtaXhpbiBkeW53aWR0aHMoJHNpemUtbGlzdCkge1xyXG4gICAgICAgICAgQGVhY2ggJHNpemUgaW4gJHNpemUtbGlzdCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHdpZHRoLWNsYXNzKCRzaXplKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBkeW53aWR0aHMoMSAyIDMgNCA1IDYgNyA4IDkgMTApO1xyXG5cclxuICAgICAgICAua2V5LWJsYWNrLWNvbG9yIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzEzNjQzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW50cnktZ3JlZW4tY29sb3Ige1xyXG4gICAgICAgICAgY29sb3I6ICNBQUM3MkU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIobnVtYmVyKVwiIFwiO1xyXG4gICAgICB9XHJcbiAgICAgIGxpOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBwYWRkaW5nLXRvcDogODRweDtcbn1cbjpob3N0IGFwcC1ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0MHB4O1xuICBib3R0b206IDYwcHg7XG59XG46aG9zdCBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICMzMTM2NDM7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udDogNTAwIDMycHgvMzBweCBSb2JvdG87XG59XG46aG9zdCAuanNvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgd2lkdGg6IDEwMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA2NTJweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQ4cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U2RUNGNTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciBwLmpzb24tcGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogI0U2RUNGNTtcbiAgZm9udDogNTAwIDMycHgvMzBweCBSb2JvdG87XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgYnV0dG9uLmFkZC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogNDBweDtcbiAgcmlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzIyQTREQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIHBhZGRpbmc6IDVweCAxM3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udDogMzAwIDE0cHgvMzBweCBSb2JvdG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciBuZ3gtZHJvcHpvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciBuZ3gtanNvbi12aWV3ZXIsIDpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy10b3A6IDEyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDM3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDYycHg7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IHtcbiAgZm9udDogMzAwIDE0cHgvMzBweCBSb2JvdG87XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjODg4RUE3O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0LS1lbXB0eSB7XG4gIGNvbG9yOiAjRTZFQ0Y1O1xufVxuOmhvc3QgLmpzb24tY29udGFpbmVyIC5qc29uLW9iamVjdCBzcGFuLCA6aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IGkge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IGxpIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IG51bWJlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLmpzb24tY29udGFpbmVyIC5qc29uLW9iamVjdCBsaSAuY29weS1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICNGN0FCMjk7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjRTZFQ0Y1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGk6aG92ZXIgLmNvcHktaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGkgLmdyYXktbGluZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWluLXdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U2RUNGNTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IGxpIC53LWxldmVsLTEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMXB4O1xufVxuOmhvc3QgLmpzb24tY29udGFpbmVyIC5qc29uLW9iamVjdCBsaSAudy1sZXZlbC0yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDJweDtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGkgLnctbGV2ZWwtMyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYzcHg7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IGxpIC53LWxldmVsLTQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4NHB4O1xufVxuOmhvc3QgLmpzb24tY29udGFpbmVyIC5qc29uLW9iamVjdCBsaSAudy1sZXZlbC01IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTA1cHg7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IGxpIC53LWxldmVsLTYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMjZweDtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGkgLnctbGV2ZWwtNyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE0N3B4O1xufVxuOmhvc3QgLmpzb24tY29udGFpbmVyIC5qc29uLW9iamVjdCBsaSAudy1sZXZlbC04IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTY4cHg7XG59XG46aG9zdCAuanNvbi1jb250YWluZXIgLmpzb24tb2JqZWN0IGxpIC53LWxldmVsLTkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxODlweDtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGkgLnctbGV2ZWwtMTAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTBweDtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGkgLmtleS1ibGFjay1jb2xvciB7XG4gIGNvbG9yOiAjMzEzNjQzO1xufVxuOmhvc3QgLmpzb24tY29udGFpbmVyIC5qc29uLW9iamVjdCBsaSAuZW50cnktZ3JlZW4tY29sb3Ige1xuICBjb2xvcjogI0FBQzcyRTtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobnVtYmVyKSBcIiBcIjtcbn1cbjpob3N0IC5qc29uLWNvbnRhaW5lciAuanNvbi1vYmplY3QgbGk6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/json-viewer/json-viewer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/json-viewer/json-viewer.component.ts ***!
  \******************************************************/
/*! exports provided: JsonViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonViewerComponent", function() { return JsonViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm2015/ngx-dropzone.js");



let JsonViewerComponent = class JsonViewerComponent {
    constructor() {
        this.files = [];
        this.jsonFile = {};
        this.preparedJson = [];
        this.isDropping = 0;
        this.notifications = {
            error: 'Файл содержит ошибки. Загрузите другой файл',
            copied: 'Строка и вложение скопированы в буфер'
        };
    }
    ngOnInit() {
    }
    checkFile(jsonData) {
        this.preparedJson = [];
        const getDataType = (d) => {
            if (d === null) {
                return 'null';
            }
            if (Array.isArray(d)) {
                return 'array';
            }
            return typeof d;
        };
        const getDataValue = (type, d) => {
            if (type === 'object') {
                return `{${Object.keys(d).length}}`;
            }
            if (type === 'array') {
                return `[${Object.keys(d).length}]`;
            }
            if (type === 'null') {
                return 'null';
            }
            return d;
        };
        this.preparedJson.push({
            level: 0,
            parentIndex: null,
            value: getDataType(jsonData).charAt(0).toUpperCase() + getDataType(jsonData).slice(1),
            type: getDataType(jsonData),
            data: getDataValue(getDataType(jsonData), jsonData),
            isOpened: true,
            isVisible: true,
            parentKeys: []
        });
        const prepareData = (data, level = 1, parentKeys = []) => {
            const items = Object.keys(data);
            if (!items.length) {
                this.preparedJson.push({
                    level,
                    value: '(empty array)',
                    type: 'empty',
                    data: null,
                    isOpened: false,
                    isVisible: false,
                    parentKeys: [...parentKeys]
                });
            }
            items.forEach(item => {
                const itemType = getDataType(data[item]);
                const objectedItem = ['array', 'object'].includes(itemType);
                const preparedItem = {
                    level,
                    value: item,
                    type: itemType,
                    data: getDataValue(itemType, data[item]),
                    isOpened: false,
                    isVisible: level > 1 ? false : true,
                    parentKeys: [...parentKeys, item]
                };
                this.preparedJson.push(preparedItem);
                if (objectedItem) {
                    prepareData(data[item], level + 1, preparedItem.parentKeys);
                }
            });
        };
        prepareData(jsonData);
    }
    onDragEnter(event) {
        this.isDropping = 1;
    }
    onDragLeave(event) {
        this.isDropping = 0;
    }
    onSelect(event) {
        const fileReader = new FileReader();
        this.files = [...event.addedFiles];
        fileReader.readAsText(this.files[0], 'UTF-8');
        fileReader.onload = () => {
            try {
                this.jsonFile = JSON.parse(fileReader.result);
                this.checkFile(this.jsonFile);
                this.isDropping = 0;
            }
            catch (e) {
                this.notificationType = 'error';
                this.notificationText = this.notifications.error;
                setTimeout(() => {
                    this.notificationType = '';
                    this.notificationText = '';
                }, 5000);
            }
        };
        fileReader.onerror = (error) => {
            console.log(error);
            this.notificationType = 'error';
            this.notificationText = this.notifications.error;
            setTimeout(() => {
                this.notificationType = '';
                this.notificationText = '';
            }, 5000);
        };
    }
    toggleObject(index) {
        this.preparedJson[index].isOpened = !this.preparedJson[index].isOpened;
        const selectedItem = this.preparedJson[index];
        let stopToggle = 0;
        this.preparedJson.map((d, i) => {
            if (selectedItem.level === d.level && i > index) {
                stopToggle = 1;
            }
            if (selectedItem.isOpened && i > index && d.level === selectedItem.level + 1 && !stopToggle) {
                d.isVisible = true;
            }
            if (!selectedItem.isOpened && i > index && d.level > selectedItem.level && !stopToggle) {
                d.isVisible = false;
                d.isOpened = false;
            }
            return d;
        });
    }
    copyData(index) {
        const selectedItem = this.preparedJson[index];
        const result = {};
        let item = this.jsonFile;
        for (const key of selectedItem.parentKeys) {
            item = item[key];
        }
        result[selectedItem.value] = item;
        const inp = document.createElement('textarea');
        document.body.appendChild(inp);
        inp.textContent = JSON.stringify(result, null, 2);
        inp.select();
        document.execCommand('copy', false);
        inp.remove();
        this.notificationType = 'copied';
        this.notificationText = this.notifications.copied;
        setTimeout(() => {
            this.notificationType = '';
            this.notificationText = '';
        }, 5000);
    }
    closeNotification(event) {
        this.notificationType = '';
        this.notificationText = '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_dropzone__WEBPACK_IMPORTED_MODULE_2__["NgxDropzoneComponent"], { static: false })
], JsonViewerComponent.prototype, "dropzone", void 0);
JsonViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-json-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./json-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/json-viewer/json-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./json-viewer.component.scss */ "./src/app/json-viewer/json-viewer.component.scss")).default]
    })
], JsonViewerComponent);



/***/ }),

/***/ "./src/app/notification/notification.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification {\n  position: relative;\n  width: 250px;\n  height: 60px;\n  background: #313643CC 0% 0% no-repeat padding-box;\n  display: flex;\n  justify-content: space-around;\n  opacity: 0;\n  -webkit-animation: 0.3s 0.3s showNotification ease-out forwards;\n          animation: 0.3s 0.3s showNotification ease-out forwards;\n}\n@-webkit-keyframes showNotification {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes showNotification {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.notification .close-icon {\n  position: absolute;\n  cursor: pointer;\n  top: 4px;\n  right: 4px;\n  color: #FFFFFF;\n  font-size: 10px;\n}\n.notification .copy-icon {\n  color: #F7AB29;\n  font-size: 14px;\n}\n.notification .magenta-color {\n  color: #E63782;\n}\n.notification div {\n  margin: auto;\n}\n.notification div.icon {\n  flex-basis: 20%;\n  padding: 0px 0 0 10px;\n}\n.notification div.message {\n  flex-basis: 80%;\n  padding: 10px 0;\n  font: 300 14px/19px Roboto;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWZpY2F0aW9uL0M6XFxVc2Vyc1xcUGF2ZWwgQVxcRGVza3RvcFxcRGV2c1xcanNvbi12aWV3ZXIvc3JjXFxhcHBcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLCtEQUFBO1VBQUEsdURBQUE7QUNDRjtBREFFO0VBQ0U7SUFBSyxVQUFBO0VDR1A7RURGRTtJQUFPLFVBQUE7RUNLVDtBQUNGO0FEUkU7RUFDRTtJQUFLLFVBQUE7RUNHUDtFREZFO0lBQU8sVUFBQTtFQ0tUO0FBQ0Y7QURGRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNJSjtBREZFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNJSjtBREZFO0VBQ0UsY0FBQTtBQ0lKO0FERkU7RUFDRSxZQUFBO0FDSUo7QURGRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ0lKO0FERkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMzEzNjQzQ0MgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IC4zcyAuM3Mgc2hvd05vdGlmaWNhdGlvbiBlYXNlLW91dCBmb3J3YXJkcztcclxuICBAa2V5ZnJhbWVzIHNob3dOb3RpZmljYXRpb24ge1xyXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XHJcbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5jbG9zZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgcmlnaHQ6IDRweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuY29weS1pY29uIHtcclxuICAgIGNvbG9yOiAjRjdBQjI5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAubWFnZW50YS1jb2xvciB7XHJcbiAgICBjb2xvcjogI0U2Mzc4MjtcclxuICB9XHJcbiAgZGl2IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgZGl2Lmljb24ge1xyXG4gICAgZmxleC1iYXNpczogMjAlO1xyXG4gICAgcGFkZGluZzogMHB4IDAgMCAxMHB4O1xyXG4gIH1cclxuICBkaXYubWVzc2FnZSB7XHJcbiAgICBmbGV4LWJhc2lzOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250OiAzMDAgMTRweC8xOXB4IFJvYm90bztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzEzNjQzQ0MgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiAwLjNzIDAuM3Mgc2hvd05vdGlmaWNhdGlvbiBlYXNlLW91dCBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgc2hvd05vdGlmaWNhdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5ub3RpZmljYXRpb24gLmNsb3NlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIC5jb3B5LWljb24ge1xuICBjb2xvcjogI0Y3QUIyOTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm5vdGlmaWNhdGlvbiAubWFnZW50YS1jb2xvciB7XG4gIGNvbG9yOiAjRTYzNzgyO1xufVxuLm5vdGlmaWNhdGlvbiBkaXYge1xuICBtYXJnaW46IGF1dG87XG59XG4ubm90aWZpY2F0aW9uIGRpdi5pY29uIHtcbiAgZmxleC1iYXNpczogMjAlO1xuICBwYWRkaW5nOiAwcHggMCAwIDEwcHg7XG59XG4ubm90aWZpY2F0aW9uIGRpdi5tZXNzYWdlIHtcbiAgZmxleC1iYXNpczogODAlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQ6IDMwMCAxNHB4LzE5cHggUm9ib3RvO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationComponent = class NotificationComponent {
    constructor() {
        // tslint:disable-next-line: no-output-on-prefix
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotificationComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotificationComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotificationComponent.prototype, "onClick", void 0);
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.component.scss */ "./src/app/notification/notification.component.scss")).default]
    })
], NotificationComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pavel A\Desktop\Devs\json-viewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map