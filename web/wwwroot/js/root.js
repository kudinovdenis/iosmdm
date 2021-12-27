var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
// import { environment } from "./environment/environment_prod.js";
import { environment } from "./environment/environment_dev.js";
import { Spinner } from "./node_modules/spin.js";
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
                        if (environment.isDebug) {
                            devices_1 = [Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice()];
                            return [2 /*return*/, Promise.resolve(devices_1)];
                        }
                        devicesRaw = this.get(environment.baseUrl + "/backend/devices");
                        return [4 /*yield*/, devicesRaw];
                    case 1:
                        devices = (_a.sent()).map(function (rawDevice) {
                            var device = new Device();
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
                return [2 /*return*/, this.get(environment.baseUrl + "/backend/devices/" + device.UDID + "/applications")];
            });
        });
    };
    return ApiImpl;
}());
// UI
var WebAppControl = /** @class */ (function () {
    function WebAppControl() {
        this.element = document.createElement("div");
        this.element.className = "WebAppControl";
        this.devicesControl = new DevicesControl();
        this.element.appendChild(this.devicesControl.element);
        document.appendChild(this.element);
    }
    WebAppControl.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allDevices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apiClient.getAllDevices()];
                    case 1:
                        allDevices = _a.sent();
                        console.log("Get all devices: " + allDevices);
                        showListOfDevices(allDevices);
                        return [2 /*return*/];
                }
            });
        });
    };
    return WebAppControl;
}());
var DevicesControl = /** @class */ (function () {
    function DevicesControl() {
        this.deviceControls = [];
        this.element = document.createElement("div");
        this.element.className = "DevicesControl";
    }
    DevicesControl.prototype.clear = function () {
        for (var _i = 0, _a = this.deviceControls; _i < _a.length; _i++) {
            var deviceControl = _a[_i];
            this.removeDeviceControl(deviceControl);
        }
    };
    DevicesControl.prototype.appendDeviceControl = function (deviceControl) {
        this.deviceControls.push(deviceControl);
        this.element.appendChild(deviceControl.element);
    };
    DevicesControl.prototype.removeDeviceControl = function (deviceControl) {
        this.element.removeChild(deviceControl.element);
        var index = this.deviceControls.indexOf(deviceControl, 0);
        if (index > -1) {
            this.deviceControls.splice(index, 1);
        }
    };
    return DevicesControl;
}());
var DeviceControl = /** @class */ (function () {
    function DeviceControl(device) {
        this.element = document.createElement("div");
        this.element.className = "DeviceControl";
        this.device = device;
        this.element.textContent = "Device: " + device.UDID + "LastConnectionDate: " + device.LastConnectionDate;
        this.applicationsControl = new ApplicationsControl(device);
        this.element.appendChild(this.applicationsControl.element);
    }
    DeviceControl.prototype.clear = function () {
        this.applicationsControl.clear;
    };
    return DeviceControl;
}());
var ApplicationsControl = /** @class */ (function () {
    function ApplicationsControl(device) {
        var _this = this;
        this.element = document.createElement("div");
        this.element.className = "ApplicationsControl";
        this.element.textContent = "Applications";
        this.device = device;
        this.spiner = new Spinner();
        var loadListOfApplicationsButton = document.createElement("button");
        loadListOfApplicationsButton.textContent = "Get list of applications";
        loadListOfApplicationsButton.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var applications, _i, applications_1, application, applicationControl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clear();
                        this.startLoading();
                        console.log("OnClick!" + device.UDID);
                        return [4 /*yield*/, apiClient.getListOfApplications(device)];
                    case 1:
                        applications = _a.sent();
                        for (_i = 0, applications_1 = applications; _i < applications_1.length; _i++) {
                            application = applications_1[_i];
                            applicationControl = new ApplicationControl(application);
                            this.appendApplicationControl(applicationControl);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        this.element.appendChild(loadListOfApplicationsButton);
    }
    ApplicationsControl.prototype.clear = function () {
        for (var _i = 0, _a = this.applicationControls; _i < _a.length; _i++) {
            var applicationControl = _a[_i];
            this.removeApplicationControl(applicationControl);
        }
    };
    ApplicationsControl.prototype.appendApplicationControl = function (applicationControl) {
        this.applicationControls.push(applicationControl);
        this.element.appendChild(applicationControl.element);
    };
    ApplicationsControl.prototype.removeApplicationControl = function (applicationControl) {
        this.element.removeChild(applicationControl.element);
        var index = this.applicationControls.indexOf(applicationControl, 0);
        if (index > -1) {
            this.applicationControls.splice(index, 1);
        }
    };
    ApplicationsControl.prototype.startLoading = function () {
        this.spiner.spin(this.element);
    };
    ApplicationsControl.prototype.stopLoading = function () {
        this.spiner.stop();
    };
    return ApplicationsControl;
}());
var ApplicationControl = /** @class */ (function () {
    function ApplicationControl(applicationInfo) {
        this.element = document.createElement("div");
        this.element.className = "ApplicationControl";
        this.applicationInfo = applicationInfo;
        this.element.textContent = "App: ".concat(applicationInfo.Name, ". Identifier: ").concat(applicationInfo.Identifier, ". Version: ").concat(applicationInfo.Version);
    }
    ApplicationControl.prototype.clear = function () {
        this.element.innerHTML = "";
    };
    return ApplicationControl;
}());
function showListOfDevices(devices) {
    for (var _i = 0, devices_2 = devices; _i < devices_2.length; _i++) {
        var device = devices_2[_i];
        var deviceControl = new DeviceControl(device);
        webAppControl.devicesControl.appendDeviceControl(deviceControl);
    }
    ;
}
var apiClient = new ApiImpl();
var webAppControl = new WebAppControl();
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
