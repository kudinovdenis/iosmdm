import { environment } from "../environment/environment_dev";

export interface IApi {
    getAllDevices(): Promise<Device[]>
    getListOfApplications(device: Device): Promise<ApplicationInfo[]>
}

export class ApiImpl implements IApi {

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