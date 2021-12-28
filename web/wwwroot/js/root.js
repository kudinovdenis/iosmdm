/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api/api.ts":
/*!********************!*\
  !*** ./api/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiImpl": () => (/* binding */ ApiImpl)
/* harmony export */ });
/* harmony import */ var _environment_environment_dev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/environment_dev */ "./environment/environment_dev.ts");
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models */ "./models/models.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};

// import { environment } from "../environment/environment_prod";

var ApiImpl = /** @class */ (function () {
    function ApiImpl() {
    }
    ApiImpl.prototype.get = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var respone, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(request)];
                    case 1:
                        respone = _a.sent();
                        body = respone.json();
                        return [2 /*return*/, body];
                }
            });
        });
    };
    ApiImpl.prototype.getAllDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices_1, devicesRaw, devices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (_environment_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.isDebug) {
                            devices_1 = [
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice()
                            ];
                            return [2 /*return*/, Promise.resolve(devices_1)];
                        }
                        devicesRaw = this.get(_environment_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/backend/devices");
                        return [4 /*yield*/, devicesRaw];
                    case 1:
                        devices = (_a.sent()).map(function (rawDevice) {
                            var device = new _models_models__WEBPACK_IMPORTED_MODULE_1__.Device();
                            device.UDID = rawDevice.UDID;
                            device.LastConnectionDate = new Date(Date.parse(rawDevice.LastConnectionDate));
                            device.PushMagic = rawDevice.PushMagic;
                            device.PushToken = rawDevice.PushToken;
                            device.CheckedOut = rawDevice.CheckedOut;
                            return device;
                        });
                        return [2 /*return*/, devices];
                }
            });
        });
    };
    ApiImpl.prototype.getListOfApplications = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get(_environment_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/backend/devices/" + device.UDID + "/applications")];
            });
        });
    };
    ApiImpl.prototype.downloadProfileLink = function () {
        return _environment_environment_dev__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/backend/static/profile/';
    };
    return ApiImpl;
}());



/***/ }),

/***/ "./environment/environment_dev.ts":
/*!****************************************!*\
  !*** ./environment/environment_dev.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
var environment = {
    isDebug: true,
    baseUrl: "http://localhost:8082"
};


/***/ }),

/***/ "./models/models.ts":
/*!**************************!*\
  !*** ./models/models.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceRaw": () => (/* binding */ DeviceRaw),
/* harmony export */   "Device": () => (/* binding */ Device),
/* harmony export */   "ApplicationInfo": () => (/* binding */ ApplicationInfo)
/* harmony export */ });
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
var DeviceRaw = /** @class */ (function () {
    function DeviceRaw() {
    }
    return DeviceRaw;
}());

var Device = /** @class */ (function () {
    function Device() {
    }
    Device.testDevice = function () {
        var device = new Device();
        var uuid = uuidv4();
        device.UDID = uuid;
        var lastConnectionDate = new Date(Date.parse("2021-12-27T08:45:14.316905946Z"));
        device.LastConnectionDate = lastConnectionDate;
        console.log("Creating new device with uuid: " + uuid);
        return device;
    };
    return Device;
}());

var ApplicationInfo = /** @class */ (function () {
    function ApplicationInfo() {
    }
    return ApplicationInfo;
}());



/***/ }),

/***/ "./ui/devices/device_control.ts":
/*!**************************************!*\
  !*** ./ui/devices/device_control.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceControl": () => (/* binding */ DeviceControl)
/* harmony export */ });
/* harmony import */ var _full_full_device_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full/full_device_info */ "./ui/devices/full/full_device_info.ts");
/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/modal */ "./ui/helpers/modal.ts");


var DeviceControl = /** @class */ (function () {
    function DeviceControl(device, apiClient) {
        this.element = $('<div>').addClass('col');
        this.card = $('<a>')
            .addClass('DeviceControl')
            .addClass('card')
            .addClass('p-3') // padding (inside)
            .addClass('m-3') // margin (outside)
            .attr('style', 'width: 18rem;');
        var udidDiv = $('<p>').text("Device: ".concat(device.UDID, "."));
        var lastConnectionDateDiv = $('<p>').text("LastConnectionDate: ".concat(device.LastConnectionDate));
        this.card.append(udidDiv);
        this.card.append(lastConnectionDateDiv);
        this.device = device;
        this.apiClient = apiClient;
        this.fullDeviceInfoControl = new _full_full_device_info__WEBPACK_IMPORTED_MODULE_0__.FullDeviceInfoControl(device);
        var modalFullDeviceIfoControl = new _helpers_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWindow("Device info", this.fullDeviceInfoControl.element);
        this.element.append(modalFullDeviceIfoControl.element);
        this.card.on('click', function () {
            modalFullDeviceIfoControl.element.modal('show');
        });
        this.element.append(this.card);
    }
    DeviceControl.prototype.clear = function () {
        this.fullDeviceInfoControl.clear();
    };
    return DeviceControl;
}());



/***/ }),

/***/ "./ui/devices/devices_control.ts":
/*!***************************************!*\
  !*** ./ui/devices/devices_control.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevicesControl": () => (/* binding */ DevicesControl)
/* harmony export */ });
var DevicesControl = /** @class */ (function () {
    function DevicesControl() {
        this.deviceControls = [];
        this.element = $("<div>").addClass("DevicesControl").addClass("container");
        this.row = $('<div>').addClass('row');
        this.element.append(this.row);
    }
    DevicesControl.prototype.clear = function () {
        for (var _i = 0, _a = this.deviceControls; _i < _a.length; _i++) {
            var deviceControl = _a[_i];
            this.removeDeviceControl(deviceControl);
        }
    };
    DevicesControl.prototype.appendDeviceControl = function (deviceControl) {
        this.deviceControls.push(deviceControl);
        this.row.append(deviceControl.element);
    };
    DevicesControl.prototype.removeDeviceControl = function (deviceControl) {
        deviceControl.element.remove();
        var index = this.deviceControls.indexOf(deviceControl, 0);
        if (index > -1) {
            this.deviceControls.splice(index, 1);
        }
    };
    return DevicesControl;
}());



/***/ }),

/***/ "./ui/devices/full/full_device_info.ts":
/*!*********************************************!*\
  !*** ./ui/devices/full/full_device_info.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullDeviceInfoControl": () => (/* binding */ FullDeviceInfoControl)
/* harmony export */ });
var FullDeviceInfoControl = /** @class */ (function () {
    function FullDeviceInfoControl(device) {
        this.element = $('<p>').addClass('FullDeviceInfoControl');
        this.element.html(device.UDID);
    }
    FullDeviceInfoControl.prototype.clear = function () {
    };
    return FullDeviceInfoControl;
}());



/***/ }),

/***/ "./ui/helpers/modal.ts":
/*!*****************************!*\
  !*** ./ui/helpers/modal.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalWindow": () => (/* binding */ ModalWindow)
/* harmony export */ });
var ModalWindow = /** @class */ (function () {
    function ModalWindow(title, body) {
        this.element = $('<div>').addClass('modal').addClass('fade');
        var modalDialog = $('<div>').addClass('modal-dialog');
        var modalContent = $('<div>').addClass('modal-content');
        modalContent.append(this.modalHeader(title));
        modalContent.append(this.modalBody(body));
        modalDialog.append(modalContent);
        this.element.append(modalDialog);
    }
    ModalWindow.prototype.modalHeader = function (title) {
        /**
         * <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
         */
        var header = $('<div>').addClass('modal-header');
        var modalTitle = $('<div>').addClass('modal-title');
        modalTitle.html(title);
        var closeButton = $('<button>').addClass('btn-close').attr('data-bs-dismiss', 'modal');
        header.append(title);
        header.append(closeButton);
        return header;
    };
    ModalWindow.prototype.modalBody = function (body) {
        // anything goes in html
        var modalBody = $('<div>').addClass('modal-body');
        modalBody.append(body);
        return body;
    };
    return ModalWindow;
}());



/***/ }),

/***/ "./ui/service_control.ts":
/*!*******************************!*\
  !*** ./ui/service_control.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceControl": () => (/* binding */ ServiceControl)
/* harmony export */ });
var ServiceControl = /** @class */ (function () {
    function ServiceControl(apiClient) {
        this.apiClient = apiClient;
        this.element = $('<a>')
            .addClass('btn btn-primary')
            .html('Install profile')
            .attr('href', this.apiClient.downloadProfileLink());
    }
    return ServiceControl;
}());



/***/ }),

/***/ "./ui/web_app.ts":
/*!***********************!*\
  !*** ./ui/web_app.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebAppControl": () => (/* binding */ WebAppControl)
/* harmony export */ });
/* harmony import */ var _devices_devices_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices/devices_control */ "./ui/devices/devices_control.ts");
/* harmony import */ var _devices_device_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devices/device_control */ "./ui/devices/device_control.ts");
/* harmony import */ var _service_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service_control */ "./ui/service_control.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var WebAppControl = /** @class */ (function () {
    function WebAppControl(apiClient) {
        this.element = $("<div>").addClass("WebAppControl");
        this.serviceControl = new _service_control__WEBPACK_IMPORTED_MODULE_2__.ServiceControl(apiClient);
        this.devicesControl = new _devices_devices_control__WEBPACK_IMPORTED_MODULE_0__.DevicesControl();
        this.apiClient = apiClient;
        this.element.append(this.serviceControl.element);
        this.element.append(this.devicesControl.element);
        $(document.body).append(this.element);
    }
    WebAppControl.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allDevices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiClient.getAllDevices()];
                    case 1:
                        allDevices = _a.sent();
                        console.log("Get all devices: " + allDevices);
                        this.showListOfDevices(allDevices);
                        return [2 /*return*/];
                }
            });
        });
    };
    WebAppControl.prototype.showListOfDevices = function (devices) {
        for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
            var device = devices_1[_i];
            var deviceControl = new _devices_device_control__WEBPACK_IMPORTED_MODULE_1__.DeviceControl(device, this.apiClient);
            this.devicesControl.appendDeviceControl(deviceControl);
        }
        ;
    };
    return WebAppControl;
}());



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./root.ts ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./api/api.ts");
/* harmony import */ var _ui_web_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/web_app */ "./ui/web_app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};


var apiClient = new _api_api__WEBPACK_IMPORTED_MODULE_0__.ApiImpl();
var webAppControl = new _ui_web_app__WEBPACK_IMPORTED_MODULE_1__.WebAppControl(apiClient);
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, webAppControl.load()];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                document.body.textContent = "Error: " + e_1;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })();

})();

/******/ })()
;
//# sourceMappingURL=root.js.map