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
/* harmony import */ var _environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/environment_prod */ "./environment/environment_prod.ts");
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
// import { environment } from "../environment/environment_dev";


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
                        if (_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.isDebug) {
                            devices_1 = [
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(),
                                _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice(), _models_models__WEBPACK_IMPORTED_MODULE_1__.Device.testDevice()
                            ];
                            return [2 /*return*/, Promise.resolve(devices_1)];
                        }
                        devicesRaw = this.get(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/backend/devices");
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
                return [2 /*return*/, this.get(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + "/backend/devices/" + device.UDID + "/applications")];
            });
        });
    };
    ApiImpl.prototype.downloadProfileLink = function () {
        return _environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + '/backend/static/profile/';
    };
    return ApiImpl;
}());



/***/ }),

/***/ "./environment/environment_prod.ts":
/*!*****************************************!*\
  !*** ./environment/environment_prod.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
var environment = {
    isDebug: false,
    baseUrl: "https://m1553d.com/api"
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
        device.PushToken = uuidv4();
        device.PushMagic = uuidv4();
        device.Topic = uuidv4();
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

/***/ "./ui/device/device_control.ts":
/*!*************************************!*\
  !*** ./ui/device/device_control.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceControl": () => (/* binding */ DeviceControl)
/* harmony export */ });
/* harmony import */ var _full_full_device_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full/full_device_info */ "./ui/device/full/full_device_info.ts");
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
        this.fullDeviceInfoControl = new _full_full_device_info__WEBPACK_IMPORTED_MODULE_0__.FullDeviceInfoControl(device, apiClient);
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

/***/ "./ui/device/devices_control.ts":
/*!**************************************!*\
  !*** ./ui/device/devices_control.ts ***!
  \**************************************/
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

/***/ "./ui/device/full/child/applications/application_control.ts":
/*!******************************************************************!*\
  !*** ./ui/device/full/child/applications/application_control.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationControl": () => (/* binding */ ApplicationControl)
/* harmony export */ });
/// <reference types="jquery" />
var ApplicationControl = /** @class */ (function () {
    function ApplicationControl(applicationInfo) {
        this.element = $("<div>")
            .addClass('card')
            .addClass('ApplicationControl');
        var nameDiv = $('<p>').text("App: ".concat(applicationInfo.Name));
        var identifierDiv = $('<p>').text("Identifier: ".concat(applicationInfo.Identifier));
        var appVersionDiv = $('<p>').text("Version: ".concat(applicationInfo.Version));
        this.element.append(nameDiv);
        this.element.append(identifierDiv);
        this.element.append(appVersionDiv);
        this.applicationInfo = applicationInfo;
    }
    ApplicationControl.prototype.clear = function () {
        this.element.empty();
    };
    return ApplicationControl;
}());



/***/ }),

/***/ "./ui/device/full/child/applications/applications_control.ts":
/*!*******************************************************************!*\
  !*** ./ui/device/full/child/applications/applications_control.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationsControl": () => (/* binding */ ApplicationsControl)
/* harmony export */ });
/* harmony import */ var _application_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application_control */ "./ui/device/full/child/applications/application_control.ts");
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

var ApplicationsControl = /** @class */ (function () {
    function ApplicationsControl(device, apiClient) {
        var _this = this;
        this.applicationControls = [];
        this.element = $('<div>')
            .addClass('ApplicationsControl')
            .addClass('container')
            .text('Applications');
        this.loadListOfApplicationsButton = $('<a>')
            .addClass('btn btn-primary')
            .html("Load applications list");
        this.element.append(this.loadListOfApplicationsButton);
        this.spiner = this.createSpinner();
        this.device = device;
        this.apiClient = apiClient;
        this.loadListOfApplicationsButton.on('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var applications, _i, applications_1, application, applicationControl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clear();
                        this.startLoading();
                        return [4 /*yield*/, apiClient.getListOfApplications(device)];
                    case 1:
                        applications = _a.sent();
                        this.stopLoading();
                        for (_i = 0, applications_1 = applications; _i < applications_1.length; _i++) {
                            application = applications_1[_i];
                            applicationControl = new _application_control__WEBPACK_IMPORTED_MODULE_0__.ApplicationControl(application);
                            this.appendApplicationControl(applicationControl);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
    ApplicationsControl.prototype.createSpinner = function () {
        var spinner = $("<span>")
            .addClass('spinner-grow')
            .addClass('spinner-grow-sm');
        return spinner;
    };
    ApplicationsControl.prototype.clear = function () {
        for (var _i = 0, _a = this.applicationControls; _i < _a.length; _i++) {
            var applicationControl = _a[_i];
            this.removeApplicationControl(applicationControl);
        }
    };
    ApplicationsControl.prototype.appendApplicationControl = function (applicationControl) {
        this.applicationControls.push(applicationControl);
        this.element.append(applicationControl.element);
    };
    ApplicationsControl.prototype.removeApplicationControl = function (applicationControl) {
        applicationControl.element.remove();
        var index = this.applicationControls.indexOf(applicationControl, 0);
        if (index > -1) {
            this.applicationControls.splice(index, 1);
        }
    };
    ApplicationsControl.prototype.startLoading = function () {
        this.loadListOfApplicationsButton.prop('disabled', 'true');
        this.loadListOfApplicationsButton.prepend(this.spiner);
    };
    ApplicationsControl.prototype.stopLoading = function () {
        this.loadListOfApplicationsButton.prop('disabled', 'false');
        this.spiner.remove();
    };
    return ApplicationsControl;
}());



/***/ }),

/***/ "./ui/device/full/child/basic/device_basic_info.ts":
/*!*********************************************************!*\
  !*** ./ui/device/full/child/basic/device_basic_info.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceBasicInfoControl": () => (/* binding */ DeviceBasicInfoControl)
/* harmony export */ });
/* harmony import */ var _helpers_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/table */ "./ui/helpers/table.ts");

var DeviceBasicInfoControl = /** @class */ (function () {
    function DeviceBasicInfoControl(device) {
        this.element = $('<div>');
        var table = new _helpers_table__WEBPACK_IMPORTED_MODULE_0__.TableControl();
        table.setHeaders(["Parameter", "Value"]);
        table.appendRow(["Identifier", device.UDID]);
        table.appendRow(["Push token", device.PushToken]);
        table.appendRow(["Push magic", device.PushMagic]);
        table.appendRow(["Topic", device.Topic]);
        table.appendRow(["CheckedOut", device.CheckedOut ? "true" : "false"]);
        this.element.append(table.element);
    }
    return DeviceBasicInfoControl;
}());



/***/ }),

/***/ "./ui/device/full/full_device_info.ts":
/*!********************************************!*\
  !*** ./ui/device/full/full_device_info.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullDeviceInfoControl": () => (/* binding */ FullDeviceInfoControl)
/* harmony export */ });
/* harmony import */ var _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/navbar */ "./ui/helpers/navbar.ts");
/* harmony import */ var _child_applications_applications_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child/applications/applications_control */ "./ui/device/full/child/applications/applications_control.ts");
/* harmony import */ var _child_basic_device_basic_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/basic/device_basic_info */ "./ui/device/full/child/basic/device_basic_info.ts");



var FullDeviceInfoControl = /** @class */ (function () {
    function FullDeviceInfoControl(device, apiClient) {
        this.element = $('<div>').addClass('FullDeviceInfoControl');
        this.deviceBasicInfo = new _child_basic_device_basic_info__WEBPACK_IMPORTED_MODULE_2__.DeviceBasicInfoControl(device);
        this.applicationsControl = new _child_applications_applications_control__WEBPACK_IMPORTED_MODULE_1__.ApplicationsControl(device, apiClient);
        var navBarData = [
            new _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__.NavbarTitleContentPair('Basic info', this.deviceBasicInfo.element, true),
            new _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__.NavbarTitleContentPair('Applications', this.applicationsControl.element, false)
        ];
        var navBar = new _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__.Navbar(navBarData);
        this.element.append(navBar.element);
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

/***/ "./ui/helpers/navbar.ts":
/*!******************************!*\
  !*** ./ui/helpers/navbar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarTitleContentPair": () => (/* binding */ NavbarTitleContentPair),
/* harmony export */   "Navbar": () => (/* binding */ Navbar)
/* harmony export */ });
var NavbarTitleContentPair = /** @class */ (function () {
    function NavbarTitleContentPair(title, content, isSelected) {
        this.title = title;
        this.content = content;
        this.isSelected = isSelected;
        this.tabIdentifier = this.makeid(10);
        this.contentIdentifier = this.makeid(10);
    }
    NavbarTitleContentPair.prototype.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    return NavbarTitleContentPair;
}());

var Navbar = /** @class */ (function () {
    function Navbar(data) {
        this.element = $('<div>');
        var navElement = $('<nav>');
        var tabTitlesContainer = $('<div>')
            .addClass('nav')
            .addClass('nav-tabs');
        var tabContentContainer = $('<div>').addClass('tab-content');
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var titleContentPair = data_1[_i];
            var tabTitle = $('<div>')
                .addClass('nav-link')
                .attr('data-bs-toggle', 'tab')
                .attr('data-bs-target', "#".concat(titleContentPair.contentIdentifier))
                .attr('id', titleContentPair.tabIdentifier)
                .attr('type', 'button')
                .html(titleContentPair.title);
            tabTitlesContainer.append(tabTitle);
            var tabContent = $('<div>')
                .addClass('tab-pane')
                .addClass('fade')
                .attr('id', titleContentPair.contentIdentifier);
            tabContent.append(titleContentPair.content);
            tabContentContainer.append(tabContent);
            if (titleContentPair.isSelected) {
                tabTitle.addClass('active');
                tabContent.addClass('show').addClass('active');
            }
        }
        navElement.append(tabTitlesContainer);
        this.element.append(navElement);
        this.element.append(tabContentContainer);
    }
    return Navbar;
}());



/***/ }),

/***/ "./ui/helpers/table.ts":
/*!*****************************!*\
  !*** ./ui/helpers/table.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableControl": () => (/* binding */ TableControl)
/* harmony export */ });
var TableControl = /** @class */ (function () {
    /**
     *
     *  <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
     */
    function TableControl() {
        this.element = $('<table>').addClass('table');
        this.header = $('<thead>');
        this.body = $('<tbody>');
        this.element.append(this.header);
        this.element.append(this.body);
    }
    TableControl.prototype.setHeaders = function (headers) {
        var row = $('<tr>');
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var header = headers_1[_i];
            var col = $('<th>').html(header);
            row.append(col);
        }
        this.header.empty();
        this.header.append(row);
    };
    TableControl.prototype.appendRow = function (rowContent) {
        var row = $('<tr>');
        for (var _i = 0, rowContent_1 = rowContent; _i < rowContent_1.length; _i++) {
            var rowColumn = rowContent_1[_i];
            var col = $('<td>').html(rowColumn);
            row.append(col);
        }
        this.body.append(row);
    };
    TableControl.prototype.clear = function () {
        this.body.empty();
    };
    return TableControl;
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
/* harmony import */ var _device_devices_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device/devices_control */ "./ui/device/devices_control.ts");
/* harmony import */ var _device_device_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device/device_control */ "./ui/device/device_control.ts");
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
        this.devicesControl = new _device_devices_control__WEBPACK_IMPORTED_MODULE_0__.DevicesControl();
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
            var deviceControl = new _device_device_control__WEBPACK_IMPORTED_MODULE_1__.DeviceControl(device, this.apiClient);
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