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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<mat-grid-list cols=\"3\" rowHeight=\"1:1\">\n  <mat-grid-tile>\n    <mat-card class=\"example-card\" class=\"grid-tile\" (click)=\"changeView(configuration.pages.NEW_ANALYSATION)\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>New Analyse</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image\n           src=\"https://www.programwitherik.com/content/images/2016/04/screencast.jpg\"\n           alt=\"New Analyse\" style=\"width: 200px; margin: 10px;\">\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card class=\"example-card\" class=\"grid-tile\" (click)=\"changeView(configuration.pages.ARCHIVE)\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Archive</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image\n           src=\"http://www.realviewdigital.com/wp-content/uploads/2016/10/digital_archives-3.jpg\"\n           alt=\"Archive\" style=\"width: 200px; margin: 10px;\">\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card class=\"example-card\" class=\"grid-tile\" (click)=\"changeView(configuration.pages.PROFILE)\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Profile</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image\n           src=\"https://www.pngitem.com/pimgs/m/285-2855629_profile-clipart-hd-png-download.png\"\n           alt=\"Archive\" style=\"width: 200px; margin: 10px;\">\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/google-signin/google-signin.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/google-signin/google-signin.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"width: 40%; margin-top: 20px\">\r\n  <mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>SCAScreenCastAnalyzer</mat-card-title>\r\n      <mat-card-subtitle>Login</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image\r\n         src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png\"\r\n         alt=\"Google Logo\" style=\"width: 50%; margin-left: 25%\">\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" style=\"margin-left: 35%;\"\r\n      (click)=\"socalSignIn()\"\r\n      >Login with Google</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/archive/archive.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/archive/archive.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div  class=\"container\">\n  <table class=\"table table-responsive\">\n    <th>\n      <tr>\n        <td>Saved Models</td>\n      </tr>\n    </th>\n    <tbody>\n    <tr *ngFor=\"let image of images; let i = index\" (click)=\"viewImage(image)\" style=\"cursor: pointer;\">\n      <td>Model: {{i}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"currentFile\">\n  <button mat-icon-button color=\"primary\" (click)=\"viewImage(null)\">\n    <mat-icon>close</mat-icon>\n  </button>\n  <app-canvas-image [images]=\"currentFile\"></app-canvas-image>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/new-analysation/new-analysation.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/new-analysation/new-analysation.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n\n<app-upload-file></app-upload-file>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/new-analysation/upload-file/upload-file.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/new-analysation/upload-file/upload-file.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [hidden]=\"!uploadView\">\n  <div class=\"uploadfilecontainer\" (click)=\"fileInput.click()\" appDragDropDirective\n       (onFileDropped)=\"uploadFile($event)\">\n    <input hidden type=\"file\" #fileInput (change)=\"uploadFile($event.target.files)\">\n  </div>\n\n  <div class=\"container aligner\" *ngIf=\"previewUrl\">\n    <button mat-icon-button color=\"warn\" (click)=\"previewUrl = null\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <video class=\"aligner-item\" [src]=\"previewUrl\" controls #videoPlayer>\n      >\n    </video>\n\n    <h5 *ngIf=\"isUploading\" style=\"margin-top: 20px\">{{progressValue}} % upload to server</h5>\n    <mat-progress-bar *ngIf=\"isUploading\" class=\"aligner-item\" color=\"warn\"\n                      mode=\"determinate\" [value]=\"progressValue\"></mat-progress-bar>\n  </div>\n\n\n  <div class=\"files-list\" *ngFor=\"let file of files; let i= index\">\n    <p> {{ file.file.name }} </p>\n\n    <button mat-icon-button color=\"warn\" (click)=\"deleteAttachment(i)\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <button mat-raised-button color=\"primary\" (click)=\"preview(file.file)\">Preview</button>\n    <button *ngIf=\"file.processedImage\" mat-icon-button color=\"primary\" (click)=\"toggleView(file.processedImage)\">\n      <mat-icon>file_copy</mat-icon>\n    </button>\n    <mat-spinner *ngIf=\"file.loading\" [diameter]=\"30\"></mat-spinner>\n    <button mat-raised-button color=\"primary\" (click)=\"submit(file.file, i)\">Submit</button>\n  </div>\n</div>\n<div *ngIf=\"!uploadView\">\n  <button mat-icon-button color=\"primary\" (click)=\"toggleView(null)\">\n    <mat-icon>keyboard_return</mat-icon>\n  </button>\n  <app-canvas-image [images]=\"currentFile\"></app-canvas-image>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<h2>User-Profile</h2>\n<table class=\"table\">\n  <tbody>\n  <tr>\n    <th>First Name</th>\n    <td>{{socialUser?.firstName}}</td>\n  </tr>\n  <tr>\n    <th>Last Name</th>\n    <td>{{socialUser?.lastName}}</td>\n  </tr>\n  <tr>\n    <th>Name</th>\n    <td>{{socialUser?.name}}</td>\n  </tr>\n  <tr>\n    <th>Email</th>\n    <td>{{socialUser?.email}}</td>\n  </tr>\n  <tr>\n    <th>Authorization Code</th>\n    <td>{{socialUser?.authorizationCode}}</td>\n  </tr>\n  <tr>\n    <th>Auth Token</th>\n    <td>{{socialUser?.authToken}}</td>\n  </tr>\n  <tr>\n    <th>Facebook</th>\n    <td>{{socialUser?.facebook}}</td>\n  </tr>\n  <tr>\n    <th>id</th>\n    <td>{{socialUser?.id}}</td>\n  </tr>\n  <tr>\n    <th>Id-Token</th>\n    <td>{{socialUser?.idToken}}</td>\n  </tr>\n  <tr>\n    <th>Image</th>\n    <td>{{socialUser?.image}}</td>\n  </tr>\n  <tr>\n    <th>LinkedIn</th>\n    <td>{{socialUser?.linkedIn}}</td>\n  </tr>\n  <tr>\n    <th>PhotoUrl</th>\n    <td>{{socialUser?.photoUrl}}</td>\n  </tr>\n  <tr>\n    <th>Provider</th>\n    <td>{{socialUser?.provider}}</td>\n  </tr>\n  <tr>\n    <th>Token</th>\n    <td>{{socialUser?.token}}</td>\n  </tr>\n  </tbody>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/canvas-image/canvas-image.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/canvas-image/canvas-image.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <button mat-raised-button (click)=\"persist()\">Persist</button>\n  <h2>Images:</h2>\n  <mat-grid-list cols=\"3\" rowHeight=\"270px\">\n    <mat-grid-tile\n      *ngFor=\"let image of images.images; let i = index\">\n      <mat-card class=\"example-card\" class=\"grid-tile\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{images.labels[i]}}</mat-card-title>\n        </mat-card-header>\n        <canvas #canvas [width]=\"image[0]?.length\" [height]=\"image?.length\"></canvas>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n\n  <h2>Workflow</h2>\n\n  <pre lang=\"xml\">{{images.workflow}}</pre>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span (click)=\"routeTo(configuration.pages.DASHBOARD)\" style=\"cursor: pointer;\">Dashboard</span>\n    <span class=\"example-spacer\"></span>\n    <span class=\"textItemAlign\" (click)=\"routeTo(configuration.pages.PROFILE)\">\n      <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">person</mat-icon>\n      {{socialUser?.firstName}} {{socialUser?.lastName}}\n    </span>\n    <span class=\"textItemAlign\" (click)=\"logout()\">\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">meeting_room</mat-icon>\n      Logout\n    </span>\n  </mat-toolbar-row>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_google_signin_google_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/google-signin/google-signin.component */ "./src/app/modules/google-signin/google-signin.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration/configuration */ "./src/app/configuration/configuration.ts");
/* harmony import */ var _modules_pages_new_analysation_new_analysation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pages/new-analysation/new-analysation.component */ "./src/app/modules/pages/new-analysation/new-analysation.component.ts");
/* harmony import */ var _modules_pages_archive_archive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/pages/archive/archive.component */ "./src/app/modules/pages/archive/archive.component.ts");
/* harmony import */ var _modules_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pages/profile/profile.component */ "./src/app/modules/pages/profile/profile.component.ts");









var routes = [
    {
        path: _configuration_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"].pages.LOGIN,
        component: _modules_google_signin_google_signin_component__WEBPACK_IMPORTED_MODULE_3__["GoogleSigninComponent"],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: _configuration_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"].pages.DASHBOARD,
        component: _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        data: {
            title: 'Dashboard Page'
        }
    },
    {
        path: _configuration_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"].pages.NEW_ANALYSATION,
        component: _modules_pages_new_analysation_new_analysation_component__WEBPACK_IMPORTED_MODULE_6__["NewAnalysationComponent"],
        data: {
            title: 'New Analysation Page'
        }
    },
    {
        path: _configuration_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"].pages.ARCHIVE,
        component: _modules_pages_archive_archive_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveComponent"],
        data: {
            title: 'Archive Page'
        }
    },
    {
        path: _configuration_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"].pages.PROFILE,
        component: _modules_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        data: {
            title: 'Profile Page'
        }
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SCAFrontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_google_signin_google_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/google-signin/google-signin.component */ "./src/app/modules/google-signin/google-signin.component.ts");
/* harmony import */ var _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dashboard/dashboard.component */ "./src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_pages_new_analysation_new_analysation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/pages/new-analysation/new-analysation.component */ "./src/app/modules/pages/new-analysation/new-analysation.component.ts");
/* harmony import */ var _modules_pages_archive_archive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/pages/archive/archive.component */ "./src/app/modules/pages/archive/archive.component.ts");
/* harmony import */ var _modules_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/pages/profile/profile.component */ "./src/app/modules/pages/profile/profile.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_directives_drag_drop_directive_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/directives/drag-drop-directive.directive */ "./src/app/shared/directives/drag-drop-directive.directive.ts");
/* harmony import */ var _modules_pages_new_analysation_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/pages/new-analysation/upload-file/upload-file.component */ "./src/app/modules/pages/new-analysation/upload-file/upload-file.component.ts");
/* harmony import */ var _shared_components_canvas_image_canvas_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/canvas-image/canvas-image.component */ "./src/app/shared/components/canvas-image/canvas-image.component.ts");


















var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"]("1078752352470-64hqv26nc3bg5eehos2vqlfjvsvs2sht.apps.googleusercontent.com")
    },
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _modules_google_signin_google_signin_component__WEBPACK_IMPORTED_MODULE_5__["GoogleSigninComponent"],
                _modules_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _modules_pages_new_analysation_new_analysation_component__WEBPACK_IMPORTED_MODULE_11__["NewAnalysationComponent"],
                _modules_pages_archive_archive_component__WEBPACK_IMPORTED_MODULE_12__["ArchiveComponent"],
                _modules_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _shared_directives_drag_drop_directive_directive__WEBPACK_IMPORTED_MODULE_15__["DragDropDirectiveDirective"],
                _modules_pages_new_analysation_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_16__["UploadFileComponent"],
                _shared_components_canvas_image_canvas_image_component__WEBPACK_IMPORTED_MODULE_17__["CanvasImageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]
            ],
            providers: [
                angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configuration/configuration.ts":
/*!************************************************!*\
  !*** ./src/app/configuration/configuration.ts ***!
  \************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Configuration = {
    pages: {
        LOGIN: "login",
        DASHBOARD: "dashboard",
        NEW_ANALYSATION: "new-analysation",
        ARCHIVE: "archive",
        PROFILE: "profile"
    },
    user: {
        STORAGE: "socialUser"
    },
};


/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.grid-tile {\r\n  width: 250px;\r\n  height: 300px;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUdmLDhDQUE4QztBQUNoRCIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZ3JpZC10aWxlIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuration/configuration */ "./src/app/configuration/configuration.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.configuration = _configuration_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.changeView = function (page) {
        this.router.navigate([page]);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/modules/dashboard/dashboard.component.css")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/google-signin/google-signin.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/google-signin/google-signin.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvYXBwL21vZHVsZXMvZ29vZ2xlLXNpZ25pbi9nb29nbGUtc2lnbmluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/google-signin/google-signin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/google-signin/google-signin.component.ts ***!
  \******************************************************************/
/*! exports provided: GoogleSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleSigninComponent", function() { return GoogleSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _shared_services_SocialLoginService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/SocialLoginService */ "./src/app/shared/services/SocialLoginService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_SocialUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/SocialUser */ "./src/app/shared/models/SocialUser.ts");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configuration/configuration */ "./src/app/configuration/configuration.ts");







var GoogleSigninComponent = /** @class */ (function () {
    function GoogleSigninComponent(OAuth, socialLoginService, router) {
        this.OAuth = OAuth;
        this.socialLoginService = socialLoginService;
        this.router = router;
        this.socialUser = new _shared_models_SocialUser__WEBPACK_IMPORTED_MODULE_5__["SocialUser"]();
    }
    GoogleSigninComponent.prototype.ngOnInit = function () {
    };
    GoogleSigninComponent.prototype.socalSignIn = function () {
        var _this = this;
        this.OAuth.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID).then(function (socialUser) {
            _this.socialUser = socialUser;
            _this.saveUser();
        });
    };
    GoogleSigninComponent.prototype.saveUser = function () {
        localStorage.setItem(_configuration_configuration__WEBPACK_IMPORTED_MODULE_6__["Configuration"].user.STORAGE, JSON.stringify(this.socialUser));
        this.router.navigate([_configuration_configuration__WEBPACK_IMPORTED_MODULE_6__["Configuration"].pages.DASHBOARD]);
        // this.socialLoginService.saveUser(socialUser).subscribe(
        //   (res: any) => {
        //     console.log(res);
        //   }
        // )
    };
    GoogleSigninComponent.ctorParameters = function () { return [
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_services_SocialLoginService__WEBPACK_IMPORTED_MODULE_3__["SocialLoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    GoogleSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-signin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/google-signin/google-signin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-signin.component.css */ "./src/app/modules/google-signin/google-signin.component.css")).default]
        })
    ], GoogleSigninComponent);
    return GoogleSigninComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/archive/archive.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/archive/archive.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-tile {\r\n  width: 250px;\r\n  height: 50px;\r\n  cursor: pointer;\r\n  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvbW9kdWxlcy9wYWdlcy9hcmNoaXZlL2FyY2hpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUdmLDhDQUE4QztBQUNoRCIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvYXBwL21vZHVsZXMvcGFnZXMvYXJjaGl2ZS9hcmNoaXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC10aWxlIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/pages/archive/archive.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/archive/archive.component.ts ***!
  \************************************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_persist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/persist.service */ "./src/app/shared/services/persist.service.ts");



var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(persistService) {
        this.persistService = persistService;
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.persistService.getAll()
            .subscribe(function (imgs) {
            _this.images = imgs;
        });
    };
    ArchiveComponent.prototype.viewImage = function (image) {
        this.currentFile = image;
    };
    ArchiveComponent.ctorParameters = function () { return [
        { type: _shared_services_persist_service__WEBPACK_IMPORTED_MODULE_2__["PersistService"] }
    ]; };
    ArchiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archive',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./archive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/archive/archive.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./archive.component.css */ "./src/app/modules/pages/archive/archive.component.css")).default]
        })
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/new-analysation/new-analysation.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pages/new-analysation/new-analysation.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvYXBwL21vZHVsZXMvcGFnZXMvbmV3LWFuYWx5c2F0aW9uL25ldy1hbmFseXNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/new-analysation/new-analysation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/pages/new-analysation/new-analysation.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewAnalysationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAnalysationComponent", function() { return NewAnalysationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewAnalysationComponent = /** @class */ (function () {
    function NewAnalysationComponent() {
    }
    NewAnalysationComponent.prototype.ngOnInit = function () {
    };
    NewAnalysationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-analysation',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-analysation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/new-analysation/new-analysation.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-analysation.component.css */ "./src/app/modules/pages/new-analysation/new-analysation.component.css")).default]
        })
    ], NewAnalysationComponent);
    return NewAnalysationComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/new-analysation/upload-file/upload-file.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/pages/new-analysation/upload-file/upload-file.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploadfilecontainer {\r\n  background-image: url('cloud.png');\r\n  background-repeat: no-repeat;\r\n  background-size: 100px;\r\n  background-position: center;\r\n  height: 200px;\r\n  width: 80%;\r\n  margin: 20px auto;\r\n  border: 2px dashed #1C8ADB;\r\n  border-radius: 10px;\r\n}\r\n\r\n.uploadfilecontainer:hover {\r\n  cursor: pointer;\r\n  background-color: #9ecbec !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n.files-list {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n  margin: 10px auto;\r\n  background: #ffffff;\r\n  border: 1px dashed;\r\n  border-radius: 12px;\r\n  padding: 5px;\r\n  color: #1c8adb;\r\n}\r\n\r\n.files-list .delete-file {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.files-list .delete-file img {\r\n  width: 30px;\r\n}\r\n\r\n.aligner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.aligner-item {\r\n  max-width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvbW9kdWxlcy9wYWdlcy9uZXctYW5hbHlzYXRpb24vdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6Ii4uLy4uLy4uLy4uL3NyYy9hcHAvbW9kdWxlcy9wYWdlcy9uZXctYW5hbHlzYXRpb24vdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvY2xvdWQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjMUM4QURCO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWRmaWxlY29udGFpbmVyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllY2JlYyAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmZpbGVzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBkYXNoZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6ICMxYzhhZGI7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IC5kZWxldGUtZmlsZSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpbGVzLWxpc3QgLmRlbGV0ZS1maWxlIGltZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5hbGlnbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduZXItaXRlbSB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/pages/new-analysation/upload-file/upload-file.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/pages/new-analysation/upload-file/upload-file.component.ts ***!
  \************************************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/file-upload.service */ "./src/app/shared/services/file-upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_models_AnalyzeFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/models/AnalyzeFile */ "./src/app/shared/models/AnalyzeFile.ts");






var UploadFileComponent = /** @class */ (function () {
    function UploadFileComponent(fileUploadService, sanitizer) {
        this.fileUploadService = fileUploadService;
        this.sanitizer = sanitizer;
        this.uploadView = true;
        this.currentFile = null;
        this.files = [];
        this.isUploading = false;
        this.progressValue = 0;
    }
    UploadFileComponent.prototype.ngOnInit = function () {
    };
    UploadFileComponent.prototype.uploadFile = function (event) {
        this.preview(event[0]);
        for (var index = 0; index < event.length; index++) {
            var element = event[index];
            this.files.push(new _shared_models_AnalyzeFile__WEBPACK_IMPORTED_MODULE_5__["AnalyzeFile"](element));
        }
    };
    UploadFileComponent.prototype.preview = function (file) {
        var _this = this;
        // Show Preview
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (_event) {
            _this.previewUrl = _this.sanitizer.bypassSecurityTrustUrl(reader.result);
        };
    };
    UploadFileComponent.prototype.deleteAttachment = function (index) {
        this.files.splice(index, 1);
    };
    UploadFileComponent.prototype.submit = function (fileData, index) {
        var _this = this;
        this.files[index].loading = true;
        this.fileUploadService.submitAll(fileData)
            .subscribe(function (events) {
            if (events.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                _this.isUploading = true;
                _this.progressValue = Math.round(events.loaded / events.total * 100);
                console.log(_this.progressValue);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                _this.isUploading = false;
                _this.progressValue = 0;
                _this.files[index].loading = false;
                var img = events.body;
                _this.files[index].processedImage = img;
                console.log("SUCCESS");
            }
        });
    };
    UploadFileComponent.prototype.toggleView = function (analyzeImage) {
        if (this.uploadView) {
            // Change view to File View
            this.currentFile = analyzeImage;
            this.uploadView = false;
        }
        else {
            // Change view to Upload View
            this.currentFile = analyzeImage;
            this.uploadView = true;
        }
    };
    UploadFileComponent.ctorParameters = function () { return [
        { type: _shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_2__["FileUploadService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    UploadFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-file',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/new-analysation/upload-file/upload-file.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload-file.component.css */ "./src/app/modules/pages/new-analysation/upload-file/upload-file.component.css")).default]
        })
    ], UploadFileComponent);
    return UploadFileComponent;
}());



/***/ }),

/***/ "./src/app/modules/pages/profile/profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/profile/profile.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvYXBwL21vZHVsZXMvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration/configuration */ "./src/app/configuration/configuration.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router) {
        this.router = router;
        this.displayedColumns = ['firstName', 'lastName', 'authorizationCode', 'authToken', 'email', 'facebook',
            'id', 'idToken', 'image', 'linkedIn', 'name', 'photoUrl', 'provider', 'token'];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.socialUser = JSON.parse(localStorage.getItem(_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].user.STORAGE));
        if (!this.socialUser) {
            this.routeTo(_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].pages.LOGIN);
        }
    };
    ProfileComponent.prototype.routeTo = function (page) {
        this.router.navigate([page]);
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/pages/profile/profile.component.css")).default]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/canvas-image/canvas-image.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/canvas-image/canvas-image.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi8uLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhbnZhcy1pbWFnZS9jYW52YXMtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/canvas-image/canvas-image.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/canvas-image/canvas-image.component.ts ***!
  \**************************************************************************/
/*! exports provided: CanvasImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasImageComponent", function() { return CanvasImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_persist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/persist.service */ "./src/app/shared/services/persist.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





//import {Image} from "../../models/Image";
var CanvasImageComponent = /** @class */ (function () {
    function CanvasImageComponent(persistService, snackBar) {
        this.persistService = persistService;
        this.snackBar = snackBar;
    }
    CanvasImageComponent_1 = CanvasImageComponent;
    CanvasImageComponent.prototype.ngAfterViewInit = function () {
        for (var i = 0; i < this.canvas.length; i++) {
            var canvas = this.canvas.toArray()[i].nativeElement;
            var ctx = canvas.getContext("2d");
            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            console.log(imageData);
            imageData = this.eachPic(i, ctx, imageData, canvas.width, canvas.height);
            console.log(imageData);
            ctx.putImageData(imageData, 0, 0);
            console.log("Finished image " + i);
        }
    };
    CanvasImageComponent.prototype.eachPic = function (imageIndex, ctx, imageData, width, height) {
        var imgdatalen = imageData.data.length;
        var image = this.images.images[imageIndex];
        for (var i = 0; i < imgdatalen / 4; i++) { //iterate over every pixel in the canvas
            var row = Math.floor(i / width);
            var col = Math.floor(i % width);
            imageData.data[4 * i] = image[row][col][0]; // RED (0-255)
            imageData.data[4 * i + 1] = image[row][col][1]; // GREEN (0-255)
            imageData.data[4 * i + 2] = image[row][col][2]; // BLUE (0-255)
            imageData.data[4 * i + 3] = 255; // APLHA (0-255)
        }
        return imageData;
    };
    CanvasImageComponent.prototype.persist = function () {
        var _this = this;
        this.persistService.persist(this.images)
            .subscribe(function (events) {
            if (events.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                var progressValue = Math.round(events.loaded / events.total * 100);
                console.log(progressValue);
            }
            else if (events.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                _this.openSnackbar();
                console.log("SUCCESS");
            }
        });
    };
    CanvasImageComponent.prototype.openSnackbar = function () {
        this.snackBar.openFromComponent(CanvasImageComponent_1, {
            duration: 5 * 1000,
        });
    };
    var CanvasImageComponent_1;
    CanvasImageComponent.ctorParameters = function () { return [
        { type: _services_persist_service__WEBPACK_IMPORTED_MODULE_2__["PersistService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('images')
    ], CanvasImageComponent.prototype, "images", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('canvas')
    ], CanvasImageComponent.prototype, "canvas", void 0);
    CanvasImageComponent = CanvasImageComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas-image',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./canvas-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/canvas-image/canvas-image.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./canvas-image.component.css */ "./src/app/shared/components/canvas-image/canvas-image.component.css")).default]
        })
    ], CanvasImageComponent);
    return CanvasImageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.textItemAlign {\r\n  cursor: pointer;\r\n  margin-right: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50ZXh0SXRlbUFsaWduIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_SocialUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/SocialUser */ "./src/app/shared/models/SocialUser.ts");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configuration/configuration */ "./src/app/configuration/configuration.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, OAuth) {
        this.router = router;
        this.OAuth = OAuth;
        this.configuration = _configuration_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"];
        this.socialUser = new _models_SocialUser__WEBPACK_IMPORTED_MODULE_2__["SocialUser"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.socialUser = JSON.parse(localStorage.getItem(_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].user.STORAGE));
        if (!this.socialUser) {
            this.routeTo(_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].pages.LOGIN);
        }
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.OAuth.signOut().then(function (data) {
            localStorage.removeItem(_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].user.STORAGE);
            _this.router.navigate([_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].pages.LOGIN]);
        });
    };
    HeaderComponent.prototype.routeTo = function (page) {
        this.router.navigate([page]);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/shared/components/header/header.component.css")).default]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/drag-drop-directive.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/drag-drop-directive.directive.ts ***!
  \********************************************************************/
/*! exports provided: DragDropDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirectiveDirective", function() { return DragDropDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DragDropDirectiveDirective = /** @class */ (function () {
    function DragDropDirectiveDirective() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    // Dragover Listener
    DragDropDirectiveDirective.prototype.onDragOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    };
    // Drop Listener
    DragDropDirectiveDirective.prototype.onDrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        var files = event.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DragDropDirectiveDirective.prototype, "onFileDropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background-color')
    ], DragDropDirectiveDirective.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.opacity')
    ], DragDropDirectiveDirective.prototype, "opacity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event'])
    ], DragDropDirectiveDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
    ], DragDropDirectiveDirective.prototype, "onDrop", null);
    DragDropDirectiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDragDropDirective]'
        })
    ], DragDropDirectiveDirective);
    return DragDropDirectiveDirective;
}());



/***/ }),

/***/ "./src/app/shared/models/AnalyzeFile.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/AnalyzeFile.ts ***!
  \**********************************************/
/*! exports provided: AnalyzeFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeFile", function() { return AnalyzeFile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AnalyzeFile = /** @class */ (function () {
    function AnalyzeFile(file) {
        this.loading = false;
        this.file = file;
    }
    return AnalyzeFile;
}());



/***/ }),

/***/ "./src/app/shared/models/Image.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/Image.ts ***!
  \****************************************/
/*! exports provided: Image, ImgWithUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgWithUser", function() { return ImgWithUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());

var ImgWithUser = /** @class */ (function () {
    function ImgWithUser(image, userId) {
        this.images = image.images;
        this.labels = image.labels;
        this.workflow = image.workflow;
        this.userId = userId;
    }
    return ImgWithUser;
}());



/***/ }),

/***/ "./src/app/shared/models/SocialUser.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/SocialUser.ts ***!
  \*********************************************/
/*! exports provided: SocialUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialUser", function() { return SocialUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SocialUser = /** @class */ (function () {
    function SocialUser() {
    }
    return SocialUser;
}());



/***/ }),

/***/ "./src/app/shared/services/SocialLoginService.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/SocialLoginService.ts ***!
  \*******************************************************/
/*! exports provided: SocialLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginService", function() { return SocialLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SocialLoginService = /** @class */ (function () {
    function SocialLoginService(http) {
        this.http = http;
    }
    SocialLoginService.prototype.saveUser = function (socialUser) {
        return this.http.post(this.url, socialUser);
    };
    SocialLoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SocialLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SocialLoginService);
    return SocialLoginService;
}());



/***/ }),

/***/ "./src/app/shared/services/file-upload.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/file-upload.service.ts ***!
  \********************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment.local */ "./src/environments/environment.local.ts");




var FileUploadService = /** @class */ (function () {
    function FileUploadService(http) {
        this.http = http;
        this.host = _environments_environment_local__WEBPACK_IMPORTED_MODULE_3__["environmentLocal"].SCAAnalyserService.host;
        this.port = _environments_environment_local__WEBPACK_IMPORTED_MODULE_3__["environmentLocal"].SCAAnalyserService.port;
    }
    FileUploadService.prototype.submitAll = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.host + ":" + this.port + "/analyze", formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    FileUploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "./src/app/shared/services/persist.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/persist.service.ts ***!
  \****************************************************/
/*! exports provided: PersistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistService", function() { return PersistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_local__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment.local */ "./src/environments/environment.local.ts");
/* harmony import */ var _models_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Image */ "./src/app/shared/models/Image.ts");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuration/configuration */ "./src/app/configuration/configuration.ts");






var PersistService = /** @class */ (function () {
    function PersistService(http) {
        this.http = http;
        this.host = _environments_environment_local__WEBPACK_IMPORTED_MODULE_3__["environmentLocal"].SCAPersistService.host;
        this.port = _environments_environment_local__WEBPACK_IMPORTED_MODULE_3__["environmentLocal"].SCAPersistService.port;
        this.user = JSON.parse(localStorage.getItem(_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"].user.STORAGE));
    }
    PersistService.prototype.persist = function (image) {
        var imgWithUser = new _models_Image__WEBPACK_IMPORTED_MODULE_4__["ImgWithUser"](image, this.user.id);
        console.log(imgWithUser);
        return this.http.post(this.host + ":" + this.port + "/model", imgWithUser, {
            reportProgress: true,
            observe: 'events'
        });
    };
    PersistService.prototype.getAll = function () {
        return this.http.get(this.host + ":" + this.port + "/model/" + this.user.id);
    };
    PersistService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PersistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PersistService);
    return PersistService;
}());



/***/ }),

/***/ "./src/environments/environment.local.ts":
/*!***********************************************!*\
  !*** ./src/environments/environment.local.ts ***!
  \***********************************************/
/*! exports provided: environmentLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environmentLocal", function() { return environmentLocal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environmentLocal = {
    production: false,
    SCAAnalyserService: {
        host: "http://localhost",
        port: 5000
    },
    SCAPersistService: {
        host: "http://localhost",
        port: 8080
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ruhsi\Google Drive\FH\Master\3_Semester\CLC_Cloud_Computing\Projekt\Projekt\SCAAngularFrontend\src\main\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map