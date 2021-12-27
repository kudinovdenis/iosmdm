/// <reference types="jquery" />
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
// UI
var WebAppControl = /** @class */ (function () {
    function WebAppControl(apiClient) {
        this.element = $("<div>").addClass("WebAppControl");
        this.devicesControl = new DevicesControl();
        this.apiClient = apiClient;
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
            var deviceControl = new DeviceControl(device, this.apiClient);
            this.devicesControl.appendDeviceControl(deviceControl);
        }
        ;
    };
    return WebAppControl;
}());
export { WebAppControl };
var DevicesControl = /** @class */ (function () {
    function DevicesControl() {
        this.deviceControls = [];
        this.element = $("<div>").addClass("DevicesControl").addClass("container");
    }
    DevicesControl.prototype.clear = function () {
        for (var _i = 0, _a = this.deviceControls; _i < _a.length; _i++) {
            var deviceControl = _a[_i];
            this.removeDeviceControl(deviceControl);
        }
    };
    DevicesControl.prototype.appendDeviceControl = function (deviceControl) {
        this.deviceControls.push(deviceControl);
        this.element.append(deviceControl.element);
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
var DeviceControl = /** @class */ (function () {
    function DeviceControl(device, apiClient) {
        this.element = $('<h4>')
            .text("Device: ".concat(device.UDID, ". LastConnectionDate: ").concat(device.LastConnectionDate))
            .addClass('DeviceControl');
        this.device = device;
        this.apiClient = apiClient;
        this.applicationsControl = new ApplicationsControl(device, apiClient);
        this.element.append(this.applicationsControl.element);
    }
    DeviceControl.prototype.clear = function () {
        this.applicationsControl.clear;
    };
    return DeviceControl;
}());
var ApplicationsControl = /** @class */ (function () {
    function ApplicationsControl(device, apiClient) {
        var _this = this;
        this.applicationControls = [];
        this.element = $('<div>').text('Applications');
        this.loadListOfApplicationsButton = $('<button>')
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
                        console.log("OnClick!" + device.UDID);
                        return [4 /*yield*/, apiClient.getListOfApplications(device)];
                    case 1:
                        applications = _a.sent();
                        this.stopLoading();
                        for (_i = 0, applications_1 = applications; _i < applications_1.length; _i++) {
                            application = applications_1[_i];
                            applicationControl = new ApplicationControl(application);
                            this.appendApplicationControl(applicationControl);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
    ApplicationsControl.prototype.createSpinner = function () {
        var spinner = $("<div>").addClass("Spinner").addClass('spinner-border text-light');
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
        this.loadListOfApplicationsButton.append(this.spiner);
    };
    ApplicationsControl.prototype.stopLoading = function () {
        this.spiner.remove();
    };
    return ApplicationsControl;
}());
var ApplicationControl = /** @class */ (function () {
    function ApplicationControl(applicationInfo) {
        this.element = document.createElement("<div>");
        this.element.className = "ApplicationControl";
        this.applicationInfo = applicationInfo;
        this.element.textContent = "App: ".concat(applicationInfo.Name, ". Identifier: ").concat(applicationInfo.Identifier, ". Version: ").concat(applicationInfo.Version);
    }
    ApplicationControl.prototype.clear = function () {
        this.element.innerHTML = "";
    };
    return ApplicationControl;
}());
