import { IApi } from "../../../../../api/api";
import { Device, QueryResponses } from "../../../../../models/models";
import { ButtonControl } from "../../../../helpers/button";
import { TableControl } from "../../../../helpers/table";

export class DeviceBasicInfoControl {

    element: JQuery<HTMLElement>;
    table: TableControl;

    constructor(device: Device, apiClient: IApi) {
       this.element = $('<div>')
       
       this.table = new TableControl();
       this.table.setHeaders(["Parameter", "Value", "Description"]);
       this.table.appendRow(["Identifier", device.UDID, "UDID"]);
       this.table.appendRow(["Push token", device.PushToken, "Used to send push"]);
       this.table.appendRow(["Push magic", device.PushMagic, "Used to send MDM payloads"]);
       this.table.appendRow(["Topic", device.Topic, "Unique string describing client-server interaction"]);
       this.table.appendRow(["CheckedOut", device.CheckedOut ? "true" : "false", "Is device removed from MDM"]);

       const queryAdditionalInfoButton = new ButtonControl('Query additional device information');
       this.element.append(queryAdditionalInfoButton.element);
       queryAdditionalInfoButton.setOnClick(async () => {
           queryAdditionalInfoButton.startLoading();
           const deviceInfo = await apiClient.getDeviceInfo(device);
           this.fillTable(deviceInfo);

           queryAdditionalInfoButton.stopLoading();
       });

       this.element.append(this.table.element);
    }

    private fillTable(deviceInfo: QueryResponses) {
        const keys = Object.keys(deviceInfo);
        for (const key of keys) {
            this.table.appendRow([key, JSON.stringify(deviceInfo[key], null, 2), this.descriptionForDeviceInfoKeyName(key)]);
        }
    }

    private descriptionForDeviceInfoKeyName(key: string): string {
        switch (key) {
            case "UDID":                          
                return "desc"
            case "Languages":
                return "desc"
            case "Locales":
                return "desc"
            case "DeviceID":
                return "desc"
            case "LastCloudBackupDate":
                return "desc"
            case "AwaitingConfiguration":
                return "desc"
            case "AutoSetupAdminAccounts":
                return "desc"
            case "ITunesStoreAccountIsActive":
                return "desc"
            case "ITunesStoreAccountHash":
                return "desc"
            case "DeviceName":
                return "desc"
            case "OSVersion":
                return "desc"
            case "BuildVersion":
                return "desc"
            case "ModelName":
                return "desc"
            case "Model":
                return "desc"
            case "ProductName":
                return "desc"
            case "SerialNumber":
                return "desc"
            case "DeviceCapacity":
                return "desc"
            case "AvailableDeviceCapacity":
                return "desc"
            case "BatteryLevel":
                return "desc"
            case "CellularTechnology":
                return "desc"
            case "IMEI":
                return "desc"
            case "MEID":
                return "desc"
            case "ModemFirmwareVersion":
                return "desc"
            case "IsSupervised":
                return "desc"
            case "IsDeviceLocatorServiceEnabled":
                return "desc"
            case "IsActivationLockEnabled":
                return "desc"
            case "IsDoNotDisturbInEffect":
                return "desc"
            case "EASDeviceIdentifier":
                return "desc"
            case "IsCloudBackupEnabled":
                return "desc"
            case "OSUpdateSettings":
                return "desc"
            case "LocalHostName":
                return "desc"
            case "HostName":
                return "desc"
            case "SystemIntegrityProtectionEnabled":
                return "desc"
            case "ActiveManagedUsers":
                return "desc"
            case "IsMDMLostModeEnabled":
                return "desc"
            case "MaximumResidentUsers":
                return "desc"
            case "ICCID":
                return "desc"
            case "BluetoothMAC":
                return "desc"
            case "WiFiMAC":
                return "desc"
            case "EthernetMACs":
                return "desc"
            case "EthernetMAC":
                return "desc"
            case "CurrentCarrierNetwork":
                return "desc"
            case "SIMCarrierNetwork":
                return "desc"
            case "SubscriberCarrierNetwork":
                return "desc"
            case "CarrierSettingsVersion":
                return "desc"
            case "PhoneNumber":
                return "desc"
            case "VoiceRoamingEnabled":
                return "desc"
            case "DataRoamingEnabled":
                return "desc"
            case "IsRoaming":
                return "desc"
            case "PersonalHotspotEnabled":
                return "desc"
            case "SubscriberMCC":
                return "desc"
            case "SubscriberMNC":
                return "desc"
            case "CurrentMCC":
                return "desc"
            case "CurrentMNC":
                return "desc"
            case "ServiceSubscriptions":
                return "desc"
        }
    }

}