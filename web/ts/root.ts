import { environment } from "./environment/environment_prod.js";
// import { environment } from "./environment/environment_dev.js";

interface DeviceI {
    udid: string
}

class Device implements DeviceI {
    udid: string
}

interface IApi {
    getAllDevices(): Promise<[Device]>
}

class ApiImpl implements IApi {

    async get<T>(request: RequestInfo): Promise<T> {
        const respone = await fetch(request)
        const body = await respone.json()
        return body
    }

    async getAllDevices(): Promise<[Device]> {
        return await this.get<[Device]>(environment.baseUrl + "/backend/devices")
    }
    
}

let apiClient = new ApiImpl();
(async () => {
    try {
        let allDevices = await apiClient.getAllDevices();
        document.body.textContent = "Devices: " + JSON.stringify(allDevices);
    } catch (e) {
        document.body.textContent = "Error: " + e;
    }
})();