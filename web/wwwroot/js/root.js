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
import { environment } from "./environment/environment_prod.js";
// import { environment } from "./environment/environment_dev.js";
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
var Device = /** @class */ (function () {
    function Device() {
    }
    Device.testDevice = function () {
        var device = new Device();
        var uuid = uuidv4();
        device.udid = uuid;
        console.log("Creating new device with uuid: " + uuid);
        return device;
    };
    return Device;
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
                        return [4 /*yield*/, respone.json()];
                    case 2:
                        body = _a.sent();
                        return [2 /*return*/, body];
                }
            });
        });
    };
    ApiImpl.prototype.getAllDevices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var devices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (environment.isDebug) {
                            devices = [Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice()];
                            return [2 /*return*/, Promise.resolve(devices)];
                        }
                        return [4 /*yield*/, this.get(environment.baseUrl + "/backend/devices")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiImpl.prototype.getListOfApplications = function (device) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(environment.baseUrl + "/backend/devices/" + device.udid + "/applications")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ApiImpl;
}());
function showListOfDevices(devices) {
    var _this = this;
    var _loop_1 = function (device) {
        var deviceRow = document.createElement("h3");
        deviceRow.textContent = "".concat(JSON.stringify(device));
        var mdmPushButton = document.createElement("button");
        mdmPushButton.textContent = "Get list of applications";
        mdmPushButton.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var applications;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("OnClick!" + device.udid);
                        return [4 /*yield*/, apiClient.getListOfApplications(device)];
                    case 1:
                        applications = _a.sent();
                        console.log("Applications: " + JSON.stringify(applications));
                        return [2 /*return*/];
                }
            });
        }); });
        deviceRow.appendChild(mdmPushButton);
        document.body.appendChild(deviceRow);
    };
    for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
        var device = devices_1[_i];
        _loop_1(device);
    }
    ;
}
var apiClient = new ApiImpl();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var allDevices, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, apiClient.getAllDevices()];
            case 1:
                allDevices = _a.sent();
                console.log("Get all devices: " + allDevices);
                showListOfDevices(allDevices);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                document.body.textContent = "Error: " + e_1;
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); })();
