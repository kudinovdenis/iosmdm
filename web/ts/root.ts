import { environment } from "./environment/environment_prod.js";
// import { environment } from "./environment/environment_dev.js";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}  

interface DeviceI {
    udid: string
}

class Device implements DeviceI {
    udid: string

    static testDevice(): Device {
        var device = new Device();
        const uuid = uuidv4();
        device.udid = uuid;
        console.log("Creating new device with uuid: " + uuid);
        return device;
    }
}

interface IApi {
    getAllDevices(): Promise<Device[]>
}

class ApiImpl implements IApi {

    async get<T>(request: RequestInfo): Promise<T> {
        const respone = await fetch(request)
        const body = await respone.json()
        return body
    }

    async getAllDevices(): Promise<Device[]> {
        if (environment.isDebug) {
            const devices: Device[] = [Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice()];
            return Promise.resolve(devices)
        }
        return await this.get<[Device]>(environment.baseUrl + "/backend/devices")
    }
    
}

function showListOfDevices(devices: Device[]) {
    devices.forEach(device => {
        document.body.innerHTML += `<br>${ JSON.stringify(device) }</br>`;
    });
}

let apiClient = new ApiImpl();
(async () => {
    try {
        let allDevices = await apiClient.getAllDevices();
        console.log("Get all devices: " + allDevices);
        showListOfDevices(allDevices);
    } catch (e) {
        document.body.textContent = "Error: " + e;
    }
})();