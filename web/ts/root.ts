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
}

class Device implements DeviceI {
    UDID: string

    static testDevice(): Device {
        var device = new Device();
        const uuid = uuidv4();
        device.UDID = uuid;
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
        const body = await respone.json();
        return body;
    }

    async getAllDevices(): Promise<Device[]> {
        if (environment.isDebug) {
            const devices: Device[] = [Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice()];
            return Promise.resolve(devices);
        }
        return await this.get<Device[]>(environment.baseUrl + "/backend/devices");
    }

    async getListOfApplications(device: Device): Promise<ApplicationInfo[]> {
        return await this.get<ApplicationInfo[]>(environment.baseUrl + "/backend/devices/" + device.UDID + "/applications");
    }
    
}

function showListOfDevices(devices: Device[]) {
    for (const device of devices) {
        const deviceRow = document.createElement("h3");
        deviceRow.textContent = `${ JSON.stringify(device) }`;

        const mdmPushButton = document.createElement("button");
        mdmPushButton.textContent = "Get list of applications";
        
        mdmPushButton.addEventListener("click", async (e: Event) => {
            console.log("OnClick!" + device.UDID);
            const applications = await apiClient.getListOfApplications(device);
            console.log("Applications: " + JSON.stringify(applications));
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