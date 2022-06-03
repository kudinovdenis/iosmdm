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
    ApiImpl.prototype.post = function (url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var requestInit, respone, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestInit = {
                            method: "POST",
                            body: data,
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
                        };
                        return [4 /*yield*/, fetch(url, requestInit)];
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
    ApiImpl.prototype.getDeviceInfo = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("".concat(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/backend/devices/").concat(device.UDID, "/info"))];
            });
        });
    };
    ApiImpl.prototype.installKSCApplication = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.installApplicationById(device, 1089969624)];
            });
        });
    };
    ApiImpl.prototype.installApplicationById = function (device, appId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("".concat(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/backend/devices/").concat(device.UDID, "/install_application?app_id=").concat(appId))];
            });
        });
    };
    ApiImpl.prototype.installApplicationByManifest = function (device, manifestURL) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.get("".concat(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/backend/devices/").concat(device.UDID, "/install_application?manifest_url=").concat(manifestURL))];
            });
        });
    };
    // Profiles
    ApiImpl.prototype.getInstalledProfiles = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.isDebug) {
                    return [2 /*return*/, Promise.resolve([_models_models__WEBPACK_IMPORTED_MODULE_1__.Profile.mock()])];
                }
                else {
                    return [2 /*return*/, this.get("".concat(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/backend/devices/").concat(device.UDID, "/profiles"))];
                }
                return [2 /*return*/];
            });
        });
    };
    ApiImpl.prototype.installProfile = function (device, profileContent) {
        return __awaiter(this, void 0, void 0, function () {
            var formData;
            return __generator(this, function (_a) {
                formData = new FormData();
                formData.append('data', profileContent);
                return [2 /*return*/, this.post("".concat(_environment_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl, "/backend/devices/").concat(device.UDID, "/profiles/install"), formData)];
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
/* harmony export */   "ApplicationInfo": () => (/* binding */ ApplicationInfo),
/* harmony export */   "ProfilePayloadContent": () => (/* binding */ ProfilePayloadContent),
/* harmony export */   "Profile": () => (/* binding */ Profile)
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
        device.PushToken = "n0EZmTGmWsN1J9yfq1sMQ77OoLZdyDS6ELCr1M6/YS4=";
        device.PushMagic = uuidv4();
        device.Topic = uuidv4();
        return device;
    };
    return Device;
}());

var ApplicationInfo = /** @class */ (function () {
    function ApplicationInfo() {
    }
    return ApplicationInfo;
}());

var ProfilePayloadContent = /** @class */ (function () {
    function ProfilePayloadContent() {
    }
    return ProfilePayloadContent;
}());

var Profile = /** @class */ (function () {
    function Profile() {
    }
    Profile.mock = function () {
        var mockPayloadContent = new ProfilePayloadContent();
        mockPayloadContent.PayloadDisplayName = "Mock display name";
        mockPayloadContent.PayloadIdentifier = uuidv4();
        mockPayloadContent.PayloadType = "Mock Payload type";
        mockPayloadContent.PayloadVersion = 1;
        mockPayloadContent.PayloadOrganization = "Mock Payload Organization";
        mockPayloadContent.PayloadDescription = "Mock Payload Description";
        mockPayloadContent.PayloadUUID = uuidv4();
        var mockProfile = new Profile();
        mockProfile.HasRemovalPasscode = false;
        mockProfile.IsEncrypted = false;
        mockProfile.IsManaged = false;
        mockProfile.PayloadContent = [mockPayloadContent];
        mockProfile.PayloadDisplayName = "Mock Payload Display name";
        mockProfile.PayloadIdentifier = uuidv4();
        mockProfile.PayloadRemovalDisallowed = false;
        mockProfile.PayloadUUID = uuidv4();
        mockProfile.PayloadOrganization = "Mock Payload Organization";
        return mockProfile;
    };
    return Profile;
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
/* harmony import */ var _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/html/div */ "./ui/helpers/html/div.ts");
/* harmony import */ var _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/html/paragraph */ "./ui/helpers/html/paragraph.ts");
/* harmony import */ var _helpers_uielement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var DeviceControl = /** @class */ (function (_super) {
    __extends(DeviceControl, _super);
    function DeviceControl(device, apiClient) {
        var _this = _super.call(this) || this;
        _this.addClass('col');
        _this.card = new _helpers_uielement__WEBPACK_IMPORTED_MODULE_4__.UIElement($('<a>')
            .addClass('DeviceControl')
            .addClass('card')
            .addClass('p-3') // padding (inside)
            .addClass('m-3') // margin (outside)
            .attr('style', 'width: 18rem;'));
        var udidDiv = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_3__.Paragraph("Device: ".concat(device.UDID, "."));
        var lastConnectionDateDiv = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_3__.Paragraph("LastConnectionDate: ".concat(device.LastConnectionDate));
        _this.card.append(udidDiv);
        _this.card.append(lastConnectionDateDiv);
        _this.device = device;
        _this.apiClient = apiClient;
        _this.fullDeviceInfoControl = new _full_full_device_info__WEBPACK_IMPORTED_MODULE_0__.FullDeviceInfoControl(device, apiClient);
        var modalFullDeviceIfoControl = new _helpers_modal__WEBPACK_IMPORTED_MODULE_1__.ModalWindow("Device info", _this.fullDeviceInfoControl);
        _this.append(modalFullDeviceIfoControl);
        _this.card.setOnClick(function () {
            modalFullDeviceIfoControl.show();
        });
        _this.append(_this.card);
        return _this;
    }
    DeviceControl.prototype.clear = function () {
        this.fullDeviceInfoControl.clear();
    };
    return DeviceControl;
}(_helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div));



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
/* harmony import */ var _helpers_html_div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/html/div */ "./ui/helpers/html/div.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DevicesControl = /** @class */ (function (_super) {
    __extends(DevicesControl, _super);
    function DevicesControl() {
        var _this = _super.call(this) || this;
        _this.deviceControls = [];
        _this.addClass("DevicesControl");
        _this.addClass("container");
        _this.row = new _helpers_html_div__WEBPACK_IMPORTED_MODULE_0__.Div();
        _this.row.addClass('row');
        _this.append(_this.row);
        return _this;
    }
    DevicesControl.prototype.clear = function () {
        for (var _i = 0, _a = this.deviceControls; _i < _a.length; _i++) {
            var deviceControl = _a[_i];
            this.removeDeviceControl(deviceControl);
        }
    };
    DevicesControl.prototype.appendDeviceControl = function (deviceControl) {
        this.deviceControls.push(deviceControl);
        this.row.append(deviceControl);
    };
    DevicesControl.prototype.removeDeviceControl = function (deviceControl) {
        deviceControl.remove();
        var index = this.deviceControls.indexOf(deviceControl, 0);
        if (index > -1) {
            this.deviceControls.splice(index, 1);
        }
    };
    return DevicesControl;
}(_helpers_html_div__WEBPACK_IMPORTED_MODULE_0__.Div));



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
/* harmony import */ var _helpers_uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/uielement */ "./ui/helpers/uielement.ts");
/// <reference types="jquery" />
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ApplicationControl = /** @class */ (function (_super) {
    __extends(ApplicationControl, _super);
    function ApplicationControl(applicationInfo) {
        var _this = _super.call(this, $("<div>")
            .addClass('card')
            .addClass('ApplicationControl')) || this;
        var nameDiv = new _helpers_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<p>').text("App: ".concat(applicationInfo.Name)));
        var identifierDiv = new _helpers_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<p>').text("Identifier: ".concat(applicationInfo.Identifier)));
        var appVersionDiv = new _helpers_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<p>').text("Version: ".concat(applicationInfo.Version)));
        _this.append(nameDiv);
        _this.append(identifierDiv);
        _this.append(appVersionDiv);
        _this.applicationInfo = applicationInfo;
        return _this;
    }
    ApplicationControl.prototype.clear = function () {
        this.empty();
    };
    return ApplicationControl;
}(_helpers_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



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
/* harmony import */ var _helpers_border__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/border */ "./ui/helpers/border.ts");
/* harmony import */ var _helpers_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/button */ "./ui/helpers/button.ts");
/* harmony import */ var _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/html/div */ "./ui/helpers/html/div.ts");
/* harmony import */ var _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/html/h4 */ "./ui/helpers/html/h4.ts");
/* harmony import */ var _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/html/paragraph */ "./ui/helpers/html/paragraph.ts");
/* harmony import */ var _helpers_textfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/textfield */ "./ui/helpers/textfield.ts");
/* harmony import */ var _application_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application_control */ "./ui/device/full/child/applications/application_control.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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







var ApplicationsControl = /** @class */ (function (_super) {
    __extends(ApplicationsControl, _super);
    function ApplicationsControl(device, apiClient) {
        var _this = _super.call(this) || this;
        _this.applicationControls = [];
        _this.addClass('ApplicationsControl');
        _this.addClass('container');
        _this.device = device;
        _this.apiClient = apiClient;
        // install KSC for iOS app button
        var installKSCForiOSForm = _this.makeInstallKSCForiOSForm(apiClient, device);
        _this.append(new _helpers_border__WEBPACK_IMPORTED_MODULE_0__.Border(installKSCForiOSForm));
        // Arbitrary app form        
        var installArbitraryAppFromAppStoreForm = _this.makeInstallArbitraryAppFromAppStoreForm(apiClient, device);
        _this.append(new _helpers_border__WEBPACK_IMPORTED_MODULE_0__.Border(installArbitraryAppFromAppStoreForm));
        // Install with manifest URL
        var installByManifestURLForm = _this.makeInstallWithManifestURLForm(apiClient, device);
        _this.append(new _helpers_border__WEBPACK_IMPORTED_MODULE_0__.Border(installByManifestURLForm));
        // Load list of applications
        _this.applicationsListForm = _this.makeLoadListOfApplicationsForm(apiClient, device);
        _this.append(new _helpers_border__WEBPACK_IMPORTED_MODULE_0__.Border(_this.applicationsListForm));
        return _this;
    }
    ApplicationsControl.prototype.clear = function () {
        for (var _i = 0, _a = this.applicationControls; _i < _a.length; _i++) {
            var applicationControl = _a[_i];
            this.removeApplicationControl(applicationControl);
        }
    };
    ApplicationsControl.prototype.appendApplicationControl = function (applicationControl) {
        this.applicationControls.push(applicationControl);
        this.applicationsListForm.append(applicationControl);
    };
    ApplicationsControl.prototype.removeApplicationControl = function (applicationControl) {
        applicationControl.remove();
        var index = this.applicationControls.indexOf(applicationControl, 0);
        if (index > -1) {
            this.applicationControls.splice(index, 1);
        }
    };
    // MARK: Private
    ApplicationsControl.prototype.makeInstallKSCForiOSForm = function (apiClient, device) {
        var _this = this;
        var installKSCForm = new _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div();
        var installKSCLegend = new _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__.Header4('Installation Kaspersky Security Cloud (KSC) for iOS');
        var installKSCInfo = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_4__.Paragraph('Device will prompt installation.');
        var installKSCButton = new _helpers_button__WEBPACK_IMPORTED_MODULE_1__.ButtonControl('Tap to install from AppStore');
        installKSCButton.setOnClick(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        installKSCButton.startLoading();
                        return [4 /*yield*/, apiClient.installKSCApplication(device)];
                    case 1:
                        _a.sent();
                        installKSCButton.stopLoading();
                        return [2 /*return*/];
                }
            });
        }); });
        installKSCForm.append(installKSCLegend);
        installKSCForm.append(installKSCInfo);
        installKSCForm.append(installKSCButton);
        return installKSCForm;
    };
    ApplicationsControl.prototype.makeInstallArbitraryAppFromAppStoreForm = function (apiClient, device) {
        var installArbitraryApplicationForm = new _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div();
        var legend = new _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__.Header4('Installation of arbitrary application');
        var label = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_4__.Paragraph('Enter any application id from appstore link. For example, number 1089969624 from https://apps.apple.com/ru/app/kaspersky-security-cloud/id1089969624 for KSC.');
        var input = new _helpers_textfield__WEBPACK_IMPORTED_MODULE_5__.TextField('Application id');
        var installButton = new _helpers_button__WEBPACK_IMPORTED_MODULE_1__.ButtonControl('Install', function () {
            installButton.startLoading();
            var applicationId = input.number();
            apiClient.installApplicationById(device, applicationId);
            installButton.stopLoading();
        });
        installArbitraryApplicationForm.append(legend);
        installArbitraryApplicationForm.append(label);
        installArbitraryApplicationForm.append(input);
        installArbitraryApplicationForm.append(installButton);
        return installArbitraryApplicationForm;
    };
    ApplicationsControl.prototype.makeInstallWithManifestURLForm = function (apiClient, device) {
        var form = new _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div();
        var legend = new _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__.Header4('Installation by Manifest URL');
        var label = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_4__.Paragraph('Install any application by specifying manifest url.\nAs an example: https://m1553d.com/api/backend/static/apps/ios/internoffer/manifest');
        var input = new _helpers_textfield__WEBPACK_IMPORTED_MODULE_5__.TextField('Manifest URL');
        var installButton = new _helpers_button__WEBPACK_IMPORTED_MODULE_1__.ButtonControl('Install', function () {
            installButton.startLoading();
            var manifestURL = input.text();
            apiClient.installApplicationByManifest(device, manifestURL);
            installButton.stopLoading();
        });
        form.append(legend);
        form.append(label);
        form.append(input);
        form.append(installButton);
        return form;
    };
    ApplicationsControl.prototype.makeLoadListOfApplicationsForm = function (apiClient, device) {
        var _this = this;
        var applicationsListForm = new _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div();
        var applicationsListLegend = new _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__.Header4('Request installed applications list');
        var loadListOfApplicationsButton = new _helpers_button__WEBPACK_IMPORTED_MODULE_1__.ButtonControl('Load applications list');
        loadListOfApplicationsButton.setOnClick(function () { return __awaiter(_this, void 0, void 0, function () {
            var applications, _i, applications_1, application, applicationControl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clear();
                        loadListOfApplicationsButton.startLoading();
                        return [4 /*yield*/, apiClient.getListOfApplications(device)];
                    case 1:
                        applications = _a.sent();
                        loadListOfApplicationsButton.stopLoading();
                        for (_i = 0, applications_1 = applications; _i < applications_1.length; _i++) {
                            application = applications_1[_i];
                            applicationControl = new _application_control__WEBPACK_IMPORTED_MODULE_6__.ApplicationControl(application);
                            this.appendApplicationControl(applicationControl);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        applicationsListForm.append(applicationsListLegend);
        applicationsListForm.append(loadListOfApplicationsButton);
        return applicationsListForm;
    };
    return ApplicationsControl;
}(_helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div));



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
/* harmony import */ var _helpers_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/button */ "./ui/helpers/button.ts");
/* harmony import */ var _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/html/paragraph */ "./ui/helpers/html/paragraph.ts");
/* harmony import */ var _helpers_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/table */ "./ui/helpers/table.ts");
/* harmony import */ var _helpers_uielement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var DeviceBasicInfoControl = /** @class */ (function (_super) {
    __extends(DeviceBasicInfoControl, _super);
    function DeviceBasicInfoControl(device, apiClient) {
        var _this = _super.call(this, $('<div>')) || this;
        _this.table = new _helpers_table__WEBPACK_IMPORTED_MODULE_2__.TableControl();
        _this.table.setHeadersText(["Parameter", "Value", "Description"]);
        _this.table.appendRowText(["Identifier", device.UDID, "UDID"]);
        _this.table.appendRowText(["Push token", device.PushToken, "Used to send push"]);
        _this.table.appendRowText(["Push magic", device.PushMagic, "Used to send MDM payloads"]);
        _this.table.appendRowText(["Topic", device.Topic, "Unique string describing client-server interaction"]);
        _this.table.appendRowText(["CheckedOut", device.CheckedOut ? "true" : "false", "Is device removed from MDM"]);
        _this.append(_this.table);
        var queryAdditionalInfoButton = new _helpers_button__WEBPACK_IMPORTED_MODULE_0__.ButtonControl('Query additional device information');
        _this.append(queryAdditionalInfoButton);
        queryAdditionalInfoButton.setOnClick(function () { return __awaiter(_this, void 0, void 0, function () {
            var deviceInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryAdditionalInfoButton.startLoading();
                        return [4 /*yield*/, apiClient.getDeviceInfo(device)];
                    case 1:
                        deviceInfo = _a.sent();
                        this.fillTable(deviceInfo);
                        queryAdditionalInfoButton.stopLoading();
                        return [2 /*return*/];
                }
            });
        }); });
        return _this;
    }
    DeviceBasicInfoControl.prototype.fillTable = function (deviceInfo) {
        var keys = Object.keys(deviceInfo);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key == "ServiceSubscriptions" || key == "OSUpdateSettings") {
                // handle later
                continue;
            }
            this.table.appendRowText([key, JSON.stringify(deviceInfo[key], null, 2), this.descriptionForDeviceInfoKeyName(key)]);
        }
        // ServiceSubscriptions
        var serviceSubscriptionsInfo = deviceInfo.ServiceSubscriptions;
        var i = 0;
        for (var _a = 0, serviceSubscriptionsInfo_1 = serviceSubscriptionsInfo; _a < serviceSubscriptionsInfo_1.length; _a++) {
            var serviceSubscription = serviceSubscriptionsInfo_1[_a];
            var serviceSubscriptionTable = new _helpers_table__WEBPACK_IMPORTED_MODULE_2__.TableControl();
            serviceSubscriptionTable.setHeadersText(["Parameter", "Value", "Description"]);
            var serviceSubscriptionKeys = Object.keys(serviceSubscription);
            for (var _b = 0, serviceSubscriptionKeys_1 = serviceSubscriptionKeys; _b < serviceSubscriptionKeys_1.length; _b++) {
                var key = serviceSubscriptionKeys_1[_b];
                serviceSubscriptionTable.appendRowText([key, JSON.stringify(serviceSubscription[key], null, 2), this.descriptionForDeviceInfoKeyName(key)]);
            }
            var serviceSubscriptionP = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_1__.Paragraph("ServiceSubscription[".concat(i, "]"));
            var serviceSubscriptionDescriptionP = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_1__.Paragraph(this.descriptionForDeviceInfoKeyName("ServiceSubscriptions"));
            this.table.appendRow([serviceSubscriptionP, serviceSubscriptionTable, serviceSubscriptionDescriptionP]);
            i += 1;
        }
        // OSUpdateSettings
        var osUpdateSettingsInfo = deviceInfo.OSUpdateSettings;
        var osUpdateSettingsInfoTable = new _helpers_table__WEBPACK_IMPORTED_MODULE_2__.TableControl();
        osUpdateSettingsInfoTable.setHeadersText(["Parameter", "Value", "Description"]);
        var osUpdateSettingsInfoKeys = Object.keys(osUpdateSettingsInfo);
        for (var _c = 0, osUpdateSettingsInfoKeys_1 = osUpdateSettingsInfoKeys; _c < osUpdateSettingsInfoKeys_1.length; _c++) {
            var key = osUpdateSettingsInfoKeys_1[_c];
            osUpdateSettingsInfoTable.appendRowText([key, JSON.stringify(osUpdateSettingsInfo[key], null, 2), this.descriptionForDeviceInfoKeyName(key)]);
        }
        var osUpdateSettings = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_1__.Paragraph('OSUpdateSettings');
        var osUpdateSettingsDescription = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_1__.Paragraph(this.descriptionForDeviceInfoKeyName("OSUpdateSettings"));
        this.table.appendRow([osUpdateSettings, osUpdateSettingsInfoTable, osUpdateSettingsDescription]);
    };
    DeviceBasicInfoControl.prototype.descriptionForDeviceInfoKeyName = function (key) {
        switch (key) {
            case "UDID":
                return "The unique device identifier (UDID) of the device.";
            case "Languages":
                return "Array of strings. The first entry in this array indicates the current language. Availability: Available in Apple TV software 6.0 and later. Supported in macOS 10.10 and 10.11 but will be removed in a future macOS release.";
            case "Locales":
                return "Array of strings. The first entry in this array indicates the current locale. Availability: Available in Apple TV software 6.0 and later. Supported in macOS 10.10 and 10.11 but will be removed in a future macOS release.";
            case "DeviceID":
                return "The Apple TV device ID. Available in iOS 7 (Apple TV software 6.0) and later, on Apple TV only";
            case "LastCloudBackupDate":
                return "The date of the last iCloud backup. Availability: Available in iOS 8.0 and later.";
            case "AwaitingConfiguration":
                return "If true, device is still waiting for a DeviceConfigured message from MDM to continue through Setup Assistant. Availability: Available in iOS 9 and later and the response is only generated by devices enrolled in MDM via DEP (see Device Enrollment Program).";
            case "AutoSetupAdminAccounts":
                return "Returns the local admin users (if any) created automatically by Setup Assistant during DEP enrollment via the AccountConfiguration command. Availability: Available in macOS 10.11 and later and the response is only generated by devices enrolled in MDM via DEP (see Device Enrollment Program). Each dictionary in the array contains two keys: a key GUID with a string value of the Global Unique Identifier of a local admin account, and a key shortName with a string value of the short name of the admin account.";
            case "ITunesStoreAccountIsActive":
                return "true if the user is currently logged into an active iTunes Store account. Availability:Available in iOS 7 and later and in macOS 10.9.";
            case "ITunesStoreAccountHash":
                return "Returns a hash of the iTunes Store account currently logged in. This string is identical to the itsIdHash returned by the VPP App Assignment web service. Availability: Available in iOS 8.0 and later and macOS 10.10 and later.";
            case "DeviceName":
                return "-";
            case "OSVersion":
                return "-";
            case "BuildVersion":
                return "-";
            case "ModelName":
                return "-";
            case "Model":
                return "-";
            case "ProductName":
                return "-";
            case "SerialNumber":
                return "-";
            case "DeviceCapacity":
                return "-";
            case "AvailableDeviceCapacity":
                return "-";
            case "BatteryLevel":
                return "-";
            case "CellularTechnology":
                return "-";
            case "IMEI":
                return "-";
            case "MEID":
                return "-";
            case "ModemFirmwareVersion":
                return "-";
            case "IsSupervised":
                return "-";
            case "IsDeviceLocatorServiceEnabled":
                return "If true, the device has a device locator service (such as Find My iPhone) enabled. Availability: Available in iOS 7 and later.";
            case "IsActivationLockEnabled":
                return "-";
            case "IsDoNotDisturbInEffect":
                return "-";
            case "EASDeviceIdentifier":
                return "-";
            case "IsCloudBackupEnabled":
                return "-";
            case "OSUpdateSettings":
                return "-";
            case "LocalHostName":
                return "-";
            case "HostName":
                return "-";
            case "SystemIntegrityProtectionEnabled":
                return "-";
            case "ActiveManagedUsers":
                return "-";
            case "IsMDMLostModeEnabled":
                return "-";
            case "MaximumResidentUsers":
                return "-";
            case "ICCID":
                return "The ICC identifier for the installed SIM card. skip";
            case "BluetoothMAC":
                return "Bluetooth MAC address.";
            case "WiFiMAC":
                return "Wi-Fi MAC address.";
            case "EthernetMACs":
                return "Ethernet MAC addresses. Availability: Available in iOS 7 and later.";
            case "EthernetMAC":
                return "Primary Ethernet MAC address. Availability: Available in macOS v10.7 and later.";
            case "CurrentCarrierNetwork":
                return "Name of the current carrier network";
            case "SIMCarrierNetwork":
                return "Name of the home carrier network. (Replaces SIMCarrierNetwork.)";
            case "SubscriberCarrierNetwork":
                return "Name of the home carrier network. (Replaces SIMCarrierNetwork.) Availability: Available in iOS 5.0 and later.";
            case "CarrierSettingsVersion":
                return "Version of the currently-installed carrier settings file.";
            case "PhoneNumber":
                return "Raw phone number without punctuation, including country code.";
            case "VoiceRoamingEnabled":
                return "The current setting of the Voice Roaming setting. This is only available on certain carriers. Availability: iOS 5.0 and later.";
            case "DataRoamingEnabled":
                return "The current setting of the Data Roaming setting.";
            case "IsRoaming":
                return "Returns whether the device is currently roaming. Availability: Available in iOS 4.2 and later. See note below.";
            case "PersonalHotspotEnabled":
                return "True if the Personal Hotspot feature is currently turned on. This value is available only with certain carriers. Availability: iOS 7.0 and later.";
            case "SubscriberMCC":
                return "Home Mobile Country Code (numeric string). Availability: Available in iOS 4.2.6 and later.";
            case "SubscriberMNC":
                return "Home Mobile Network Code (numeric string). Availability: Available in iOS 4.2.6 and later.";
            case "CurrentMCC":
                return "Current Mobile Country Code (numeric string).";
            case "CurrentMNC":
                return "Current Mobile Network Code (numeric string).";
            case "ServiceSubscriptions":
                return "-";
            case "IsDataPreferred":
                return "If true, this subscription is preferred for data.";
            case "IsVoicePreferred":
                return "If true, this subscription is preferred for voice.";
            case "Label":
                return "The label of this subscription.";
            case "LabelID":
                return "The UUID identifying this subscription (as a string).";
            case "CatalogURL":
                return "The URL to the software update catalog currently in use by the client";
        }
    };
    return DeviceBasicInfoControl;
}(_helpers_uielement__WEBPACK_IMPORTED_MODULE_3__.UIElement));



/***/ }),

/***/ "./ui/device/full/child/profile/profiles_control.ts":
/*!**********************************************************!*\
  !*** ./ui/device/full/child/profile/profiles_control.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilesControl": () => (/* binding */ ProfilesControl)
/* harmony export */ });
/* harmony import */ var _helpers_border__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/border */ "./ui/helpers/border.ts");
/* harmony import */ var _helpers_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/button */ "./ui/helpers/button.ts");
/* harmony import */ var _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../helpers/html/div */ "./ui/helpers/html/div.ts");
/* harmony import */ var _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/html/h4 */ "./ui/helpers/html/h4.ts");
/* harmony import */ var _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/html/paragraph */ "./ui/helpers/html/paragraph.ts");
/* harmony import */ var _helpers_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/table */ "./ui/helpers/table.ts");
/* harmony import */ var _helpers_textfield__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../helpers/textfield */ "./ui/helpers/textfield.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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







var ProfilesControl = /** @class */ (function (_super) {
    __extends(ProfilesControl, _super);
    function ProfilesControl(device, apiClient) {
        var _this = _super.call(this) || this;
        _this.device = device;
        _this.apiClient = apiClient;
        var listProfilesBox = _this.createListProfilesBox();
        _this.append(listProfilesBox);
        var installProfileBox = _this.createInstallProfileBox();
        _this.append(installProfileBox);
        return _this;
    }
    // MARK: Private methods
    ProfilesControl.prototype.createListProfilesBox = function () {
        var _this = this;
        var listProfilesControl = new _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div();
        var listProfilesLegend = new _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__.Header4('Load list of device profiles');
        var listProfilesInfo = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_4__.Paragraph('Will load all profiles on device.');
        var listProfilesButton = new _helpers_button__WEBPACK_IMPORTED_MODULE_1__.ButtonControl('Load list of profiles');
        var listOfInstalledProfilesTable = new _helpers_table__WEBPACK_IMPORTED_MODULE_5__.TableControl();
        listProfilesButton.setOnClick(function () { return __awaiter(_this, void 0, void 0, function () {
            var listOfInstalledProfiles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listProfilesButton.startLoading();
                        listOfInstalledProfilesTable.clear();
                        return [4 /*yield*/, this.apiClient.getInstalledProfiles(this.device)];
                    case 1:
                        listOfInstalledProfiles = _a.sent();
                        listOfInstalledProfilesTable.addObject(listOfInstalledProfiles);
                        listProfilesButton.stopLoading();
                        return [2 /*return*/];
                }
            });
        }); });
        listProfilesControl.append(listProfilesLegend);
        listProfilesControl.append(listProfilesInfo);
        listProfilesControl.append(listProfilesButton);
        listProfilesControl.append(listOfInstalledProfilesTable);
        var listProfilesBox = new _helpers_border__WEBPACK_IMPORTED_MODULE_0__.Border(listProfilesControl);
        return listProfilesBox;
    };
    ProfilesControl.prototype.createInstallProfileBox = function () {
        var _this = this;
        var control = new _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div();
        var title = new _helpers_html_h4__WEBPACK_IMPORTED_MODULE_3__.Header4('Install arbitrary profile');
        var legend = new _helpers_html_paragraph__WEBPACK_IMPORTED_MODULE_4__.Paragraph('Payload XML should be in base64');
        var textField = new _helpers_textfield__WEBPACK_IMPORTED_MODULE_6__.TextField('Insert b64 data here');
        var installButton = new _helpers_button__WEBPACK_IMPORTED_MODULE_1__.ButtonControl('Install');
        installButton.setOnClick(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                installButton.startLoading();
                this.apiClient.installProfile(this.device, textField.text());
                installButton.stopLoading();
                return [2 /*return*/];
            });
        }); });
        control.append(title);
        control.append(legend);
        control.append(textField);
        control.append(installButton);
        var box = new _helpers_border__WEBPACK_IMPORTED_MODULE_0__.Border(control);
        return box;
    };
    return ProfilesControl;
}(_helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div));



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
/* harmony import */ var _helpers_uielement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/uielement */ "./ui/helpers/uielement.ts");
/* harmony import */ var _child_applications_applications_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/applications/applications_control */ "./ui/device/full/child/applications/applications_control.ts");
/* harmony import */ var _child_basic_device_basic_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child/basic/device_basic_info */ "./ui/device/full/child/basic/device_basic_info.ts");
/* harmony import */ var _child_profile_profiles_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child/profile/profiles_control */ "./ui/device/full/child/profile/profiles_control.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var FullDeviceInfoControl = /** @class */ (function (_super) {
    __extends(FullDeviceInfoControl, _super);
    function FullDeviceInfoControl(device, apiClient) {
        var _this = _super.call(this, $('<div>').addClass('FullDeviceInfoControl')) || this;
        _this.deviceBasicInfo = new _child_basic_device_basic_info__WEBPACK_IMPORTED_MODULE_3__.DeviceBasicInfoControl(device, apiClient);
        _this.applicationsControl = new _child_applications_applications_control__WEBPACK_IMPORTED_MODULE_2__.ApplicationsControl(device, apiClient);
        _this.profilesControl = new _child_profile_profiles_control__WEBPACK_IMPORTED_MODULE_4__.ProfilesControl(device, apiClient);
        var navBarData = [
            new _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__.NavbarTitleContentPair('Basic info', _this.deviceBasicInfo, true),
            new _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__.NavbarTitleContentPair('Applications', _this.applicationsControl, false),
            new _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__.NavbarTitleContentPair('Profiles', _this.profilesControl, false)
        ];
        var navBar = new _helpers_navbar__WEBPACK_IMPORTED_MODULE_0__.Navbar(navBarData);
        _this.append(navBar);
        return _this;
    }
    FullDeviceInfoControl.prototype.clear = function () {
    };
    return FullDeviceInfoControl;
}(_helpers_uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement));



/***/ }),

/***/ "./ui/helpers/border.ts":
/*!******************************!*\
  !*** ./ui/helpers/border.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Border": () => (/* binding */ Border)
/* harmony export */ });
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Border = /** @class */ (function (_super) {
    __extends(Border, _super);
    function Border(child) {
        var _this = _super.call(this, $('<div>')
            .addClass('border')
            .addClass('border-primary')
            .addClass('p-3')
            .addClass('m-3')) || this;
        _this.append(child);
        return _this;
    }
    return Border;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



/***/ }),

/***/ "./ui/helpers/button.ts":
/*!******************************!*\
  !*** ./ui/helpers/button.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonControl": () => (/* binding */ ButtonControl)
/* harmony export */ });
/* harmony import */ var _spiner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spiner */ "./ui/helpers/spiner.ts");
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ButtonControl = /** @class */ (function (_super) {
    __extends(ButtonControl, _super);
    function ButtonControl(title, onClick) {
        var _this = _super.call(this, $('<button>')) || this;
        _this.addClass('btn');
        _this.addClass('btn-primary');
        _this.getJQueryElement().html(title);
        _this.spiner = new _spiner__WEBPACK_IMPORTED_MODULE_0__.Spiner();
        _this.setOnClick(onClick);
        return _this;
    }
    ButtonControl.prototype.startLoading = function () {
        this.disableUserInteraction();
        this.placeElementOnTop(this.spiner);
    };
    ButtonControl.prototype.stopLoading = function () {
        this.enableUserInteraction();
        this.spiner.remove();
    };
    return ButtonControl;
}(_uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement));



/***/ }),

/***/ "./ui/helpers/html/div.ts":
/*!********************************!*\
  !*** ./ui/helpers/html/div.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Div": () => (/* binding */ Div)
/* harmony export */ });
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div() {
        return _super.call(this, $('<div>')) || this;
    }
    return Div;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



/***/ }),

/***/ "./ui/helpers/html/h4.ts":
/*!*******************************!*\
  !*** ./ui/helpers/html/h4.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header4": () => (/* binding */ Header4)
/* harmony export */ });
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Header4 = /** @class */ (function (_super) {
    __extends(Header4, _super);
    function Header4(title) {
        var _this = _super.call(this, $('<h4>')) || this;
        _this.setTitle(title);
        return _this;
    }
    Header4.prototype.setTitle = function (title) {
        this.getJQueryElement().html(title);
    };
    return Header4;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



/***/ }),

/***/ "./ui/helpers/html/paragraph.ts":
/*!**************************************!*\
  !*** ./ui/helpers/html/paragraph.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Paragraph": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(text) {
        var _this = _super.call(this, $('<p>')) || this;
        _this.setText(text);
        return _this;
    }
    Paragraph.prototype.setText = function (text) {
        this.getJQueryElement().text(text);
    };
    return Paragraph;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



/***/ }),

/***/ "./ui/helpers/link_button.ts":
/*!***********************************!*\
  !*** ./ui/helpers/link_button.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkButton": () => (/* binding */ LinkButton)
/* harmony export */ });
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LinkButton = /** @class */ (function (_super) {
    __extends(LinkButton, _super);
    function LinkButton(title, link) {
        var _this = _super.call(this, $('<a>')) || this;
        _this.addClass('btn btn-primary');
        _this.getJQueryElement().html('Install profile');
        _this.getJQueryElement().attr('href', link);
        return _this;
    }
    return LinkButton;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



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
/* harmony import */ var _html_div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/div */ "./ui/helpers/html/div.ts");
/* harmony import */ var _html_h4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html/h4 */ "./ui/helpers/html/h4.ts");
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ModalWindow = /** @class */ (function (_super) {
    __extends(ModalWindow, _super);
    function ModalWindow(title, body) {
        var _this = _super.call(this) || this;
        _this.addClass('modal');
        _this.addClass('fade');
        var modalDialog = new _html_div__WEBPACK_IMPORTED_MODULE_0__.Div();
        modalDialog.addClass('modal-dialog');
        modalDialog.addClass('modal-xl');
        var modalContent = new _html_div__WEBPACK_IMPORTED_MODULE_0__.Div();
        modalContent.addClass('modal-content');
        modalContent.append(_this.modalHeader(title));
        modalContent.append(_this.modalBody(body));
        modalDialog.append(modalContent);
        _this.append(modalDialog);
        return _this;
    }
    ModalWindow.prototype.show = function () {
        this.getJQueryElement().modal('show');
    };
    ModalWindow.prototype.modalHeader = function (title) {
        /**
         * <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
         */
        var header = new _html_div__WEBPACK_IMPORTED_MODULE_0__.Div();
        header.addClass('modal-header');
        var modalTitle = new _html_h4__WEBPACK_IMPORTED_MODULE_1__.Header4(title);
        modalTitle.addClass('modal-title');
        var closeButton = new _uielement__WEBPACK_IMPORTED_MODULE_2__.UIElement($('<button>').addClass('btn-close').attr('data-bs-dismiss', 'modal'));
        header.append(modalTitle);
        header.append(closeButton);
        return header;
    };
    ModalWindow.prototype.modalBody = function (body) {
        // anything goes in html
        var modalBody = new _html_div__WEBPACK_IMPORTED_MODULE_0__.Div();
        modalBody.addClass('modal-body');
        modalBody.append(body);
        return modalBody;
    };
    return ModalWindow;
}(_html_div__WEBPACK_IMPORTED_MODULE_0__.Div));



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
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

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
        return "tab" + result;
    };
    return NavbarTitleContentPair;
}());

var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    /**
     *  <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        </div>
     */
    function Navbar(data) {
        var _this = _super.call(this, $('<div>')) || this;
        var navElement = new _uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<nav>'));
        var tabTitlesContainer = new _uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<div>')
            .addClass('nav')
            .addClass('nav-tabs'));
        var tabContentContainer = new _uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<div>').addClass('tab-content'));
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var titleContentPair = data_1[_i];
            var tabTitle = new _uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<div>')
                .addClass('nav-link')
                .attr('data-bs-toggle', 'tab')
                .attr('data-bs-target', "#".concat(titleContentPair.contentIdentifier))
                .attr('id', titleContentPair.tabIdentifier)
                .attr('type', 'button')
                .html(titleContentPair.title));
            tabTitlesContainer.append(tabTitle);
            var tabContent = new _uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement($('<div>')
                .addClass('tab-pane')
                .addClass('fade')
                .attr('id', titleContentPair.contentIdentifier));
            tabContent.append(titleContentPair.content);
            tabContentContainer.append(tabContent);
            if (titleContentPair.isSelected) {
                tabTitle.addClass('active');
                tabContent.addClass('show');
                tabContent.addClass('active');
            }
        }
        navElement.append(tabTitlesContainer);
        _this.append(navElement);
        _this.append(tabContentContainer);
        return _this;
    }
    return Navbar;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



/***/ }),

/***/ "./ui/helpers/spiner.ts":
/*!******************************!*\
  !*** ./ui/helpers/spiner.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spiner": () => (/* binding */ Spiner)
/* harmony export */ });
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Spiner = /** @class */ (function (_super) {
    __extends(Spiner, _super);
    function Spiner() {
        var _this = _super.call(this, $("<span>")) || this;
        _this.addClass('spinner-grow');
        _this.addClass('spinner-grow-sm');
        return _this;
    }
    return Spiner;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



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
/* harmony import */ var _html_paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html/paragraph */ "./ui/helpers/html/paragraph.ts");
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TableControl = /** @class */ (function (_super) {
    __extends(TableControl, _super);
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
        var _this = _super.call(this, $('<table>')) || this;
        _this.addClass('table');
        _this.addClass('table-striped');
        _this.header = new _uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement($('<thead>'));
        _this.body = new _uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement($('<tbody>'));
        _this.append(_this.header);
        _this.append(_this.body);
        return _this;
    }
    TableControl.prototype.setHeadersText = function (headers) {
        var headersElements = headers.map(function (val) {
            return $('<p>').html(val);
        });
        this.setHeaders(headersElements);
    };
    TableControl.prototype.setHeaders = function (headers) {
        var row = new _uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement($('<tr>'));
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var header = headers_1[_i];
            var col = new _uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement($('<th>').append(header));
            row.append(col);
        }
        this.header.empty();
        this.header.append(row);
    };
    TableControl.prototype.appendRowText = function (rowContent) {
        var rowContentElements = rowContent.map(function (val) {
            return new _html_paragraph__WEBPACK_IMPORTED_MODULE_0__.Paragraph(val);
        });
        this.appendRow(rowContentElements);
    };
    TableControl.prototype.appendRow = function (rowContent) {
        var row = new _uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement($('<tr>'));
        for (var _i = 0, rowContent_1 = rowContent; _i < rowContent_1.length; _i++) {
            var rowColumn = rowContent_1[_i];
            var col = new _uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement($('<td>'));
            col.append(rowColumn);
            row.append(col);
        }
        this.body.append(row);
    };
    TableControl.prototype.clear = function () {
        this.body.empty();
    };
    // Experimental
    TableControl.prototype.addObject = function (object) {
        var rootKeys = Object.keys(object);
        for (var _i = 0, rootKeys_1 = rootKeys; _i < rootKeys_1.length; _i++) {
            var rootKey = rootKeys_1[_i];
            this.addAny(rootKey, object[rootKey]);
        }
    };
    TableControl.prototype.addAny = function (key, o) {
        switch (typeof (o)) {
            case "string":
            case "number":
            case "bigint":
            case "boolean":
            case "symbol":
            case "undefined":
                this.appendRowText([key, JSON.stringify(o)]);
                break;
            case "object":
                var newTable = new TableControl();
                newTable.addObject(o);
                var title = new _html_paragraph__WEBPACK_IMPORTED_MODULE_0__.Paragraph(key);
                this.appendRow([title, newTable]);
                break;
        }
    };
    return TableControl;
}(_uielement__WEBPACK_IMPORTED_MODULE_1__.UIElement));



/***/ }),

/***/ "./ui/helpers/textfield.ts":
/*!*********************************!*\
  !*** ./ui/helpers/textfield.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var _uielement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uielement */ "./ui/helpers/uielement.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextField = /** @class */ (function (_super) {
    __extends(TextField, _super);
    function TextField(placeholder) {
        var _this = _super.call(this, $('<input>')) || this;
        _this.getJQueryElement().prop('placeholder', placeholder);
        return _this;
    }
    TextField.prototype.text = function () {
        return this.getJQueryElement().val();
    };
    TextField.prototype.number = function () {
        return this.getJQueryElement().val();
    };
    return TextField;
}(_uielement__WEBPACK_IMPORTED_MODULE_0__.UIElement));



/***/ }),

/***/ "./ui/helpers/uielement.ts":
/*!*********************************!*\
  !*** ./ui/helpers/uielement.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIElement": () => (/* binding */ UIElement)
/* harmony export */ });
var UIElement = /** @class */ (function () {
    function UIElement(jqueryElement) {
        this.jqueryElement = jqueryElement;
    }
    UIElement.prototype.append = function (uiElement) {
        this.jqueryElement.append(uiElement.jqueryElement);
    };
    UIElement.prototype.empty = function () {
        this.jqueryElement.empty();
    };
    UIElement.prototype.remove = function () {
        this.jqueryElement.remove();
    };
    UIElement.prototype.addClass = function (classname) {
        this.jqueryElement.addClass(classname);
    };
    UIElement.prototype.getJQueryElement = function () {
        return this.jqueryElement;
    };
    UIElement.prototype.setOnClick = function (onClick) {
        this.jqueryElement.on('click', onClick);
    };
    UIElement.prototype.disableUserInteraction = function () {
        this.jqueryElement.prop('disabled', true);
    };
    UIElement.prototype.enableUserInteraction = function () {
        this.jqueryElement.prop('disabled', false);
    };
    UIElement.prototype.placeElementOnTop = function (element) {
        this.jqueryElement.prepend(element.jqueryElement);
    };
    return UIElement;
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
/* harmony import */ var _helpers_link_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/link_button */ "./ui/helpers/link_button.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ServiceControl = /** @class */ (function (_super) {
    __extends(ServiceControl, _super);
    function ServiceControl(apiClient) {
        return _super.call(this, 'Install profile', apiClient.downloadProfileLink()) || this;
    }
    return ServiceControl;
}(_helpers_link_button__WEBPACK_IMPORTED_MODULE_0__.LinkButton));



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
/* harmony import */ var _helpers_html_div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/html/div */ "./ui/helpers/html/div.ts");
/* harmony import */ var _service_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service_control */ "./ui/service_control.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var WebAppControl = /** @class */ (function (_super) {
    __extends(WebAppControl, _super);
    function WebAppControl(apiClient) {
        var _this = _super.call(this) || this;
        _this.addClass("WebAppControl");
        _this.serviceControl = new _service_control__WEBPACK_IMPORTED_MODULE_3__.ServiceControl(apiClient);
        _this.devicesControl = new _device_devices_control__WEBPACK_IMPORTED_MODULE_0__.DevicesControl();
        _this.apiClient = apiClient;
        _this.append(_this.serviceControl);
        _this.append(_this.devicesControl);
        $(document.body).append(_this.getJQueryElement());
        return _this;
    }
    WebAppControl.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allDevices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.apiClient.getAllDevices()];
                    case 1:
                        allDevices = _a.sent();
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
}(_helpers_html_div__WEBPACK_IMPORTED_MODULE_2__.Div));



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
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, webAppControl.load()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();

})();

/******/ })()
;
//# sourceMappingURL=root.js.map