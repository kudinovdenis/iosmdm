// import { environment } from "./environment/environment_prod.js";
import { environment } from "./environment/environment_dev.js";
import { Spinner } from "./node_modules/spin.js"

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
    AdHocCodeSigned:           boolean
	AppStoreVendable:          boolean
	BetaApp:                   boolean
	BundleSize:                number
	DeviceBasedVPP:            boolean
	DynamicSize:               number
	ExternalVersionIdentifier: number
	HasUpdateAvailable:        boolean
	Identifier:                string
	Installing:                boolean
	IsValidated:               boolean
	Name:                      string
	ShortVersion:              string
	Version:                   string
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

// UI

class WebAppControl {

    element: HTMLElement
    devicesControl: DevicesControl

    constructor() {
        this.element = document.createElement("div");
        this.element.className = "WebAppControl";

        this.devicesControl = new DevicesControl();

        this.element.appendChild(this.devicesControl.element);

        document.appendChild(this.element);
    }

    async load() {
        let allDevices = await apiClient.getAllDevices();
        console.log("Get all devices: " + allDevices);
        showListOfDevices(allDevices);
    }

}

class DevicesControl {

    element: HTMLElement
    deviceControls: DeviceControl[] = []

    constructor() {
        this.element = document.createElement("div");
        this.element.className = "DevicesControl";
    }

    clear() {
        for (const deviceControl of this.deviceControls) {
            this.removeDeviceControl(deviceControl);
        }
    }

    appendDeviceControl(deviceControl: DeviceControl) {
        this.deviceControls.push(deviceControl);
        this.element.appendChild(deviceControl.element);
    }

    removeDeviceControl(deviceControl: DeviceControl) {
        this.element.removeChild(deviceControl.element);
        const index = this.deviceControls.indexOf(deviceControl, 0);
        if (index > -1) {
            this.deviceControls.splice(index, 1);
        }
    }

}

class DeviceControl {

    element: HTMLElement
    applicationsControl: ApplicationsControl
    device: Device

    constructor(device: Device) {
        this.element = document.createElement("div");
        this.element.className = "DeviceControl";

        this.device = device

        this.element.textContent = "Device: " + device.UDID + "LastConnectionDate: " + device.LastConnectionDate

        this.applicationsControl = new ApplicationsControl(device);

        this.element.appendChild(this.applicationsControl.element);
    }

    clear() {
        this.applicationsControl.clear
    }

}

class ApplicationsControl {

    element: HTMLElement
    applicationControls: ApplicationControl[]
    spiner: Spinner
    device: Device

    constructor(device: Device) {
        this.element = document.createElement("div");
        this.element.className = "ApplicationsControl";

        this.element.textContent = "Applications";

        this.device = device;

        this.spiner = new Spinner()

        const loadListOfApplicationsButton = document.createElement("button");
        loadListOfApplicationsButton.textContent = "Get list of applications";
        
        loadListOfApplicationsButton.addEventListener("click", async (e: Event) => {
            this.clear();
            this.startLoading();

            console.log("OnClick!" + device.UDID);

            const applications = await apiClient.getListOfApplications(device);
            
            for (const application of applications) {
                const applicationControl = new ApplicationControl(application);
                this.appendApplicationControl(applicationControl);
            }
        })

        this.element.appendChild(loadListOfApplicationsButton);
    }

    clear() {
        for (const applicationControl of this.applicationControls) {
            this.removeApplicationControl(applicationControl);
        }
    }

    appendApplicationControl(applicationControl: ApplicationControl) {
        this.applicationControls.push(applicationControl);
        this.element.appendChild(applicationControl.element);
    }

    removeApplicationControl(applicationControl: ApplicationControl) {
        this.element.removeChild(applicationControl.element);
        const index = this.applicationControls.indexOf(applicationControl, 0);
        if (index > -1) {
            this.applicationControls.splice(index, 1);
        }
    }

    startLoading() {
        this.spiner.spin(this.element);
    }

    stopLoading() {
        this.spiner.stop();
    }

}

class ApplicationControl {

    element: HTMLElement
    applicationInfo: ApplicationInfo

    constructor(applicationInfo: ApplicationInfo) {
        this.element = document.createElement("div");
        this.element.className = "ApplicationControl";

        this.applicationInfo = applicationInfo;

        this.element.textContent = `App: ${ applicationInfo.Name }. Identifier: ${ applicationInfo.Identifier }. Version: ${ applicationInfo.Version }`
    }

    clear() {
        this.element.innerHTML = "";
    }

}

function showListOfDevices(devices: Device[]) {
    for (const device of devices) {
        const deviceControl = new DeviceControl(device);
        webAppControl.devicesControl.appendDeviceControl(deviceControl);
    };
}

let apiClient = new ApiImpl();
let webAppControl = new WebAppControl();
(async () => {
    try {
        await webAppControl.load();
    } catch (e) {
        document.body.textContent = "Error: " + e;
    }
})();