function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}  

export interface DeviceI {
    UDID: string
    LastConnectionDate: Date
    PushMagic: string
    PushToken: string
    Topic: string
    CheckedOut: boolean
}

export class DeviceRaw {
    UDID: string
    LastConnectionDate: string
    PushMagic: string
    PushToken: string
    Topic: string
    CheckedOut: boolean
}

export class Device implements DeviceI {
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
        const lastConnectionDate = new Date(Date.parse("2021-12-27T08:45:14.316905946Z"));
        device.LastConnectionDate = lastConnectionDate;
        device.PushToken = uuidv4();
        device.PushMagic = uuidv4();
        device.Topic = uuidv4();
        console.log("Creating new device with uuid: " + uuid);
        return device;
    }
}

export class ApplicationInfo {
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