function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User2";

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
        return await this.get<[Device]>("http://localhost:8080/backend/devices")
    }
    
}

let apiClient = new ApiImpl();
(async () => {
    try {
        let allDevices = await apiClient.getAllDevices();
        document.body.textContent = "Devices: " + allDevices;
    } catch (e) {
        document.body.textContent = "Error: " + e;
    }
})();