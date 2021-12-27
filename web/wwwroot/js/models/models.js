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
