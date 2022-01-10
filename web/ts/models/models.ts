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
        device.PushToken = "n0EZmTGmWsN1J9yfq1sMQ77OoLZdyDS6ELCr1M6/YS4=";
        device.PushMagic = uuidv4();
        device.Topic = uuidv4();
        console.log("Creating new device with uuid: " + uuid);
        return device;
    }
}

export interface QueryResponses {
    UDID:                             string;
    Languages:                        string[];
    Locales:                          string[];
    DeviceID:                         string;
    LastCloudBackupDate:              Date;
    AwaitingConfiguration:            boolean;
    AutoSetupAdminAccounts:           AutoSetupAdminAccount[];
    ITunesStoreAccountIsActive:       boolean;
    ITunesStoreAccountHash:           string;
    DeviceName:                       string;
    OSVersion:                        string;
    BuildVersion:                     string;
    ModelName:                        string;
    Model:                            string;
    ProductName:                      string;
    SerialNumber:                     string;
    DeviceCapacity:                   number;
    AvailableDeviceCapacity:          number;
    BatteryLevel:                     number;
    CellularTechnology:               number;
    IMEI:                             string;
    MEID:                             string;
    ModemFirmwareVersion:             string;
    IsSupervised:                     boolean;
    IsDeviceLocatorServiceEnabled:    boolean;
    IsActivationLockEnabled:          boolean;
    IsDoNotDisturbInEffect:           boolean;
    EASDeviceIdentifier:              string;
    IsCloudBackupEnabled:             boolean;
    OSUpdateSettings:                 OSUpdateSettings;
    LocalHostName:                    string;
    HostName:                         string;
    SystemIntegrityProtectionEnabled: boolean;
    ActiveManagedUsers:               string[];
    IsMDMLostModeEnabled:             boolean;
    MaximumResidentUsers:             number;
    ICCID:                            string;
    BluetoothMAC:                     string;
    WiFiMAC:                          string;
    EthernetMACs:                     string[];
    EthernetMAC:                      string;
    CurrentCarrierNetwork:            string;
    SIMCarrierNetwork:                string;
    SubscriberCarrierNetwork:         string;
    CarrierSettingsVersion:           string;
    PhoneNumber:                      string;
    VoiceRoamingEnabled:              boolean;
    DataRoamingEnabled:               boolean;
    IsRoaming:                        boolean;
    PersonalHotspotEnabled:           boolean;
    SubscriberMCC:                    string;
    SubscriberMNC:                    string;
    CurrentMCC:                       string;
    CurrentMNC:                       string;
    ServiceSubscriptions:             ServiceSubscription[];
}

export interface AutoSetupAdminAccount {
    GUID:      string
	ShortName: string
}

export interface OSUpdateSettings {
    CatalogURL:                      string;
    IsDefaultCatalog:                boolean;
    PreviousScanDate:                Date;
    PreviousScanResult:              number;
    PerformPeriodicCheck:            boolean;
    AutomaticCheckEnabled:           boolean;
    BackgroundDownloadEnabled:       boolean;
    AutomaticAppInstallationEnabled: boolean;
    AutomaticOSInstallationEnabled:  boolean;
    AutomaticSecurityUpdatesEnabled: boolean;
}

export interface ServiceSubscription {
    CarrierSettingsVersion: string;
    CurrentCarrierNetwork:  string;
    CurrentMCC:             string;
    CurrentMNC:             string;
    ICCID:                  string;
    IMEI:                   string;
    IsDataPreferred:        boolean;
    IsVoicePreferred:       boolean;
    Label:                  string;
    LabelID:                string;
    MEID:                   string;
    PhoneNumber:            string;
    Slot:                   string;
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

export class ProfilePayloadContent {
    PayloadDisplayName:  string
	PayloadIdentifier:   string
	PayloadType:         string
	PayloadVersion:      number
	PayloadOrganization: string
	PayloadDescription:  string
	PayloadUUID:         string
}
export class Profile {
    HasRemovalPasscode:         boolean
    IsEncrypted:                boolean
    IsManaged:                  boolean
    PayloadContent:             ProfilePayloadContent[]
    PayloadDisplayName:         string
    PayloadIdentifier:          string
	PayloadRemovalDisallowed:   boolean
	PayloadUUID:                string
	PayloadOrganization:        string

}