// import { environment } from "../environment/environment_dev";
import { environment } from "../environment/environment_prod";
import { Device, ApplicationInfo, DeviceI, DeviceRaw, QueryResponses } from "../models/models";

export interface IApi {
    getAllDevices(): Promise<Device[]>
    getDeviceInfo(device: Device): Promise<QueryResponses>

    getListOfApplications(device: Device): Promise<ApplicationInfo[]>
    installKSCApplication(device: Device): Promise<void>
    installApplication(device: Device, appId: number): Promise<void>

    downloadProfileLink(): string;
}

export class ApiImpl implements IApi {

    async get<T>(request: RequestInfo): Promise<T> {
        const respone = await fetch(request);
        const body = respone.json();
        return body;
    }

    async getAllDevices(): Promise<DeviceI[]> {
        if (environment.isDebug) {
            const devices: Device[] = [
                Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(),
                Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(),
                Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(),
                Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(),
                Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice(), Device.testDevice()
            ];
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

    async getDeviceInfo(device: Device): Promise<QueryResponses> {
        return this.get<QueryResponses>(`${environment.baseUrl}/backend/devices/${device.UDID}/info`);
    }

    async installKSCApplication(device: Device): Promise<void> {
        return this.installApplication(device, 1089969624);
    }

    async installApplication(device: Device, appId: number): Promise<void> {
        return this.get<void>(`${environment.baseUrl}/backend/devices/${device.UDID}/install_applcication/${appId}`);
    }

    downloadProfileLink(): string {
        return environment.baseUrl + '/backend/static/profile/';
    }
    
}