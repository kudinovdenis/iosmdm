/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiImpl\": () => (/* binding */ ApiImpl)\n/* harmony export */ });\n/* harmony import */ var _environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/environment_prod */ \"./environment/environment_prod.ts\");\n/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models */ \"./models/models.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n// import { environment } from \"../environment/environment_dev\";\n\n\nvar ApiImpl = /** @class */ (function () {\n    function ApiImpl() {\n    }\n    ApiImpl.prototype.get = function (request) {\n        return __awaiter(this, void 0, void 0, function () {\n            var respone, body;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, fetch(request)];\n                    case 1:\n                        respone = _a.sent();\n                        body = respone.json();\n                        return [2 /*return*/, body];\n                }\n            });\n        });\n    };\n    ApiImpl.prototype.getAllDevices = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var devices_1, devicesRaw, devices;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.isDebug) {\n                            devices_1 = [_models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice()];\n                            return [2 /*return*/, Promise.resolve(devices_1)];\n                        }\n                        devicesRaw = this.get(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + \"/backend/devices\");\n                        return [4 /*yield*/, devicesRaw];\n                    case 1:\n                        devices = (_a.sent()).map(function (rawDevice) {\n                            var device = new _models_models__WEBPACK_IMPORTED_MODULE_1__.Device();\n                            device.UDID = rawDevice.UDID;\n                            device.LastConnectionDate = new Date(Date.parse(rawDevice.LastConnectionDate));\n                            device.PushMagic = rawDevice.PushMagic;\n                            device.PushToken = rawDevice.PushToken;\n                            device.CheckedOut = rawDevice.CheckedOut;\n                            return device;\n                        });\n                        return [2 /*return*/, devices];\n                }\n            });\n        });\n    };\n    ApiImpl.prototype.getListOfApplications = function (device) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/, this.get(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + \"/backend/devices/\" + device.UDID + \"/applications\")];\n            });\n        });\n    };\n    ApiImpl.prototype.downloadProfileLink = function () {\n        return _environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/backend/static/profile/';\n    };\n    return ApiImpl;\n}());\n\n\n\n//# sourceURL=webpack:///./api/api.ts?");

/***/ }),

/***/ "./environment/environment_prod.ts":
/*!*****************************************!*\
  !*** ./environment/environment_prod.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"environment\": () => (/* binding */ environment)\n/* harmony export */ });\nvar environment = {\n    isDebug: false,\n    baseUrl: \"https://m1553d.com/api\"\n};\n\n\n//# sourceURL=webpack:///./environment/environment_prod.ts?");

/***/ }),

/***/ "./models/models.ts":
/*!**************************!*\
  !*** ./models/models.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeviceRaw\": () => (/* binding */ DeviceRaw),\n/* harmony export */   \"Device\": () => (/* binding */ Device),\n/* harmony export */   \"ApplicationInfo\": () => (/* binding */ ApplicationInfo)\n/* harmony export */ });\nfunction uuidv4() {\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);\n        return v.toString(16);\n    });\n}\nvar DeviceRaw = /** @class */ (function () {\n    function DeviceRaw() {\n    }\n    return DeviceRaw;\n}());\n\nvar Device = /** @class */ (function () {\n    function Device() {\n    }\n    Device.testDevice = function () {\n        var device = new Device();\n        var uuid = uuidv4();\n        device.UDID = uuid;\n        var lastConnectionDate = new Date(Date.parse(\"2021-12-27T08:45:14.316905946Z\"));\n        device.LastConnectionDate = lastConnectionDate;\n        console.log(\"Creating new device with uuid: \" + uuid);\n        return device;\n    };\n    return Device;\n}());\n\nvar ApplicationInfo = /** @class */ (function () {\n    function ApplicationInfo() {\n    }\n    return ApplicationInfo;\n}());\n\n\n\n//# sourceURL=webpack:///./models/models.ts?");

/***/ }),

/***/ "./root.ts":
/*!*****************!*\
  !*** ./root.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ \"./api/api.ts\");\n/* harmony import */ var _ui_application_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/application_control */ \"./ui/application_control.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar apiClient = new _api_api__WEBPACK_IMPORTED_MODULE_0__.ApiImpl();\nvar webAppControl = new _ui_application_control__WEBPACK_IMPORTED_MODULE_1__.WebAppControl(apiClient);\n(function () { return __awaiter(void 0, void 0, void 0, function () {\n    var e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, webAppControl.load()];\n            case 1:\n                _a.sent();\n                return [3 /*break*/, 3];\n            case 2:\n                e_1 = _a.sent();\n                document.body.textContent = \"Error: \" + e_1;\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); })();\n\n\n//# sourceURL=webpack:///./root.ts?");

/***/ }),

/***/ "./ui/application_control.ts":
/*!***********************************!*\
  !*** ./ui/application_control.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebAppControl\": () => (/* binding */ WebAppControl)\n/* harmony export */ });\n/// <reference types=\"jquery\" />\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n// UI\nvar WebAppControl = /** @class */ (function () {\n    function WebAppControl(apiClient) {\n        this.element = $(\"<div>\").addClass(\"WebAppControl\");\n        this.serviceControl = new ServiceControl(apiClient);\n        this.devicesControl = new DevicesControl();\n        this.apiClient = apiClient;\n        this.element.append(this.serviceControl.element);\n        this.element.append(this.devicesControl.element);\n        $(document.body).append(this.element);\n    }\n    WebAppControl.prototype.load = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var allDevices;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.apiClient.getAllDevices()];\n                    case 1:\n                        allDevices = _a.sent();\n                        console.log(\"Get all devices: \" + allDevices);\n                        this.showListOfDevices(allDevices);\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    WebAppControl.prototype.showListOfDevices = function (devices) {\n        for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {\n            var device = devices_1[_i];\n            var deviceControl = new DeviceControl(device, this.apiClient);\n            this.devicesControl.appendDeviceControl(deviceControl);\n        }\n        ;\n    };\n    return WebAppControl;\n}());\n\nvar ServiceControl = /** @class */ (function () {\n    function ServiceControl(apiClient) {\n        this.apiClient = apiClient;\n        this.element = $('<button>')\n            .addClass('btn btn-primary')\n            .html('Download profile')\n            .attr('href', this.apiClient.downloadProfileLink());\n    }\n    return ServiceControl;\n}());\nvar DevicesControl = /** @class */ (function () {\n    function DevicesControl() {\n        this.deviceControls = [];\n        this.element = $(\"<div>\").addClass(\"DevicesControl\").addClass(\"container\");\n    }\n    DevicesControl.prototype.clear = function () {\n        for (var _i = 0, _a = this.deviceControls; _i < _a.length; _i++) {\n            var deviceControl = _a[_i];\n            this.removeDeviceControl(deviceControl);\n        }\n    };\n    DevicesControl.prototype.appendDeviceControl = function (deviceControl) {\n        this.deviceControls.push(deviceControl);\n        this.element.append(deviceControl.element);\n    };\n    DevicesControl.prototype.removeDeviceControl = function (deviceControl) {\n        deviceControl.element.remove();\n        var index = this.deviceControls.indexOf(deviceControl, 0);\n        if (index > -1) {\n            this.deviceControls.splice(index, 1);\n        }\n    };\n    return DevicesControl;\n}());\nvar DeviceControl = /** @class */ (function () {\n    function DeviceControl(device, apiClient) {\n        this.element = $('<h4>')\n            .addClass('DeviceControl')\n            .addClass('card');\n        var udidDiv = $('<p>').text(\"Device: \".concat(device.UDID, \".\"));\n        var lastConnectionDateDiv = $('<p>').text(\"LastConnectionDate: \".concat(device.LastConnectionDate));\n        this.element.append(udidDiv);\n        this.element.append(lastConnectionDateDiv);\n        this.device = device;\n        this.apiClient = apiClient;\n        this.applicationsControl = new ApplicationsControl(device, apiClient);\n        this.element.append(this.applicationsControl.element);\n    }\n    DeviceControl.prototype.clear = function () {\n        this.applicationsControl.clear;\n    };\n    return DeviceControl;\n}());\nvar ApplicationsControl = /** @class */ (function () {\n    function ApplicationsControl(device, apiClient) {\n        var _this = this;\n        this.applicationControls = [];\n        this.element = $('<div>')\n            .addClass('ApplicationsControl')\n            .addClass('container')\n            .text('Applications');\n        this.loadListOfApplicationsButton = $('<button>')\n            .addClass('btn btn-primary')\n            .html(\"Load applications list\");\n        this.element.append(this.loadListOfApplicationsButton);\n        this.spiner = this.createSpinner();\n        this.device = device;\n        this.apiClient = apiClient;\n        this.loadListOfApplicationsButton.on('click', function () { return __awaiter(_this, void 0, void 0, function () {\n            var applications, _i, applications_1, application, applicationControl;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        this.clear();\n                        this.startLoading();\n                        console.log(\"OnClick!\" + device.UDID);\n                        return [4 /*yield*/, apiClient.getListOfApplications(device)];\n                    case 1:\n                        applications = _a.sent();\n                        this.stopLoading();\n                        for (_i = 0, applications_1 = applications; _i < applications_1.length; _i++) {\n                            application = applications_1[_i];\n                            applicationControl = new ApplicationControl(application);\n                            this.appendApplicationControl(applicationControl);\n                        }\n                        return [2 /*return*/];\n                }\n            });\n        }); });\n    }\n    ApplicationsControl.prototype.createSpinner = function () {\n        var spinner = $(\"<span>\")\n            .addClass('spinner-grow')\n            .addClass('spinner-grow-sm');\n        return spinner;\n    };\n    ApplicationsControl.prototype.clear = function () {\n        for (var _i = 0, _a = this.applicationControls; _i < _a.length; _i++) {\n            var applicationControl = _a[_i];\n            this.removeApplicationControl(applicationControl);\n        }\n    };\n    ApplicationsControl.prototype.appendApplicationControl = function (applicationControl) {\n        this.applicationControls.push(applicationControl);\n        this.element.append(applicationControl.element);\n    };\n    ApplicationsControl.prototype.removeApplicationControl = function (applicationControl) {\n        applicationControl.element.remove();\n        var index = this.applicationControls.indexOf(applicationControl, 0);\n        if (index > -1) {\n            this.applicationControls.splice(index, 1);\n        }\n    };\n    ApplicationsControl.prototype.startLoading = function () {\n        this.loadListOfApplicationsButton.prop('disabled', 'true');\n        this.loadListOfApplicationsButton.prepend(this.spiner);\n    };\n    ApplicationsControl.prototype.stopLoading = function () {\n        this.loadListOfApplicationsButton.prop('disabled', 'false');\n        this.spiner.remove();\n    };\n    return ApplicationsControl;\n}());\nvar ApplicationControl = /** @class */ (function () {\n    function ApplicationControl(applicationInfo) {\n        this.element = $(\"<div>\")\n            .addClass('card')\n            .addClass('ApplicationControl');\n        var nameDiv = $('<p>').text(\"App: \".concat(applicationInfo.Name));\n        var identifierDiv = $('<p>').text(\"Identifier: \".concat(applicationInfo.Identifier));\n        var appVersionDiv = $('<p>').text(\"Version: \".concat(applicationInfo.Version));\n        this.element.append(nameDiv);\n        this.element.append(identifierDiv);\n        this.element.append(appVersionDiv);\n        this.applicationInfo = applicationInfo;\n    }\n    ApplicationControl.prototype.clear = function () {\n        this.element.empty();\n    };\n    return ApplicationControl;\n}());\n\n\n//# sourceURL=webpack:///./ui/application_control.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./root.ts");
/******/ 	
/******/ })()
;