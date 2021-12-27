import { environment } from "./environment/environment_prod.js";
// import { environment } from "./environment/environment_dev.js";

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}  

interface DeviceI {
    UDID: string
    LastConnectionDate: Date
    PushMagic: string
    PushToken: string
    Topic: string
    CheckedOut: boolean
}

class DeviceRaw {
    UDID: string
    LastConnectionDate: string
    PushMagic: string
    PushToken: string
    Topic: string
    CheckedOut: boolean
}

class Device implements DeviceI {
    UDID: string
    LastConnectionDate: Date
    PushMagic: string
    PushToken: string
    Topic: string
    CheckedOut: boolean

    static testDevice(): Device {
        var device = new Device();
        const uuid = uuidv4();
        device.UDID = uuid;
        const lastConnectionDate = new Date(Date.parse("2021-12-27T08:45:14.316905946Z"))
        console.log("Creating new device with uuid: " + uuid);
        return device;
    }
}

class ApplicationInfo {
    identifier: string
}

interface IApi {
    getAllDevices(): Promise<Device[]>
}

class ApiImpl implements IApi {

    async get<T>(request: RequestInfo): Promise<T> {
        const respone = await fetch(request);
        const body = respone.json();
        return body;
    }

    async getAllDevices(): Promise<DeviceI[]> {
        if (environment.isDebug) {
            const devices: Device[] = [Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice()];
            return Promise.resolve(devices);
        }
        const devicesRaw = this.get<DeviceRaw[]>(environment.baseUrl + "/backend/devices");

        const devices = (await devicesRaw).map((rawDevice) => {
            var device = new Device();
            device.UDID = rawDevice.UDID;
            device.LastConnectionDate = new Date(Date.parse(rawDevice.LastConnectionDate));
            device.PushMagic = rawDevice.PushMagic;
            device.PushToken = rawDevice.PushToken;
            device.CheckedOut = rawDevice.CheckedOut;

            return device;
        })

        return devices
    }

    async getListOfApplications(device: Device): Promise<ApplicationInfo[]> {
        return this.get<ApplicationInfo[]>(environment.baseUrl + "/backend/devices/" + device.UDID + "/applications");
    }
    
}

function showListOfDevices(devices: Device[]) {
    for (const device of devices) {
        const deviceRow = document.createElement("div");
        deviceRow.textContent = "Device: " + device.UDID + "LastConnectionDate: " + device.LastConnectionDate

        const applicationsContainer = document.createElement("div");
        applicationsContainer.textContent = "Applications:"
        deviceRow.appendChild(applicationsContainer);

        const mdmPushButton = document.createElement("button");
        mdmPushButton.textContent = "Get list of applications";
        
        mdmPushButton.addEventListener("click", async (e: Event) => {
            console.log("OnClick!" + device.UDID);
            const applications = await apiClient.getListOfApplications(device);
            
            for (const application of applications) {
                const applicationRow = document.createElement("div");
                applicationRow.textContent = application.identifier;
                applicationsContainer.appendChild(applicationRow);
            }
        })
        deviceRow.appendChild(mdmPushButton);

        document.body.appendChild(deviceRow);
    };
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