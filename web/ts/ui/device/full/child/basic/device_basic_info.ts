import { IApi } from "../../../../../api/api";
import { Device, QueryResponses } from "../../../../../models/models";
import { ButtonControl } from "../../../../helpers/button";
import { Paragraph } from "../../../../helpers/html/paragraph";
import { TableControl } from "../../../../helpers/table";
import { UIElement } from "../../../../helpers/uielement";

export class DeviceBasicInfoControl extends UIElement {

    table: TableControl;

    constructor(device: Device, apiClient: IApi) {
       super($('<div>'));
       
       this.table = new TableControl();
       this.table.setHeadersText(["Parameter", "Value", "Description"]);
       this.table.appendRowText(["Identifier", device.UDID, "UDID"]);
       this.table.appendRowText(["Push token", device.PushToken, "Used to send push"]);
       this.table.appendRowText(["Push magic", device.PushMagic, "Used to send MDM payloads"]);
       this.table.appendRowText(["Topic", device.Topic, "Unique string describing client-server interaction"]);
       this.table.appendRowText(["CheckedOut", device.CheckedOut ? "true" : "false", "Is device removed from MDM"]);

       this.append(this.table);

       const queryAdditionalInfoButton = new ButtonControl('Query additional device information');
       this.append(queryAdditionalInfoButton);
       queryAdditionalInfoButton.setOnClick(async () => {
           queryAdditionalInfoButton.startLoading();
           const deviceInfo = await apiClient.getDeviceInfo(device);
           this.fillTable(deviceInfo);

           queryAdditionalInfoButton.stopLoading();
       });
    }

    private fillTable(deviceInfo: QueryResponses) {
        const keys = Object.keys(deviceInfo);
        for (const key of keys) {
            if (key == "ServiceSubscriptions" || key == "OSUpdateSettings") {
                // handle later
                continue;
            }
            this.table.appendRowText([key, JSON.stringify(deviceInfo[key], null, 2), this.descriptionForDeviceInfoKeyName(key)]);
        }

        // ServiceSubscriptions

        const serviceSubscriptionsInfo = deviceInfo.ServiceSubscriptions
        var i = 0
        for (const serviceSubscription of serviceSubscriptionsInfo) {
            const serviceSubscriptionTable = new TableControl()
            serviceSubscriptionTable.setHeadersText(["Parameter", "Value", "Description"]);
            
            const serviceSubscriptionKeys = Object.keys(serviceSubscription);
            for (const key of serviceSubscriptionKeys) {
                serviceSubscriptionTable.appendRowText([key, JSON.stringify(serviceSubscription[key], null, 2), this.descriptionForDeviceInfoKeyName(key)]);
            }

            const serviceSubscriptionP = new Paragraph(`ServiceSubscription[${i}]`);
            const serviceSubscriptionDescriptionP = new Paragraph(this.descriptionForDeviceInfoKeyName("ServiceSubscriptions"));
            this.table.appendRow([serviceSubscriptionP, serviceSubscriptionTable, serviceSubscriptionDescriptionP]);

            i += 1
        }

        // OSUpdateSettings

        const osUpdateSettingsInfo = deviceInfo.OSUpdateSettings;
        const osUpdateSettingsInfoTable = new TableControl()
        osUpdateSettingsInfoTable.setHeadersText(["Parameter", "Value", "Description"]);
        
        const osUpdateSettingsInfoKeys = Object.keys(osUpdateSettingsInfo);
        for (const key of osUpdateSettingsInfoKeys) {
            osUpdateSettingsInfoTable.appendRowText([key, JSON.stringify(osUpdateSettingsInfo[key], null, 2), this.descriptionForDeviceInfoKeyName(key)]);
        }

        const osUpdateSettings = new Paragraph('OSUpdateSettings');
        const osUpdateSettingsDescription = new Paragraph(this.descriptionForDeviceInfoKeyName("OSUpdateSettings"));
        this.table.appendRow([osUpdateSettings, osUpdateSettingsInfoTable, osUpdateSettingsDescription]);
    }

    private descriptionForDeviceInfoKeyName(key: string): string {
        switch (key) {
            case "UDID":                          
                return "The unique device identifier (UDID) of the device."
            case "Languages":
                return "Array of strings. The first entry in this array indicates the current language. Availability: Available in Apple TV software 6.0 and later. Supported in macOS 10.10 and 10.11 but will be removed in a future macOS release."
            case "Locales":
                return "Array of strings. The first entry in this array indicates the current locale. Availability: Available in Apple TV software 6.0 and later. Supported in macOS 10.10 and 10.11 but will be removed in a future macOS release."
            case "DeviceID":
                return "The Apple TV device ID. Available in iOS 7 (Apple TV software 6.0) and later, on Apple TV only"
            case "LastCloudBackupDate":
                return "The date of the last iCloud backup. Availability: Available in iOS 8.0 and later."
            case "AwaitingConfiguration":
                return "If true, device is still waiting for a DeviceConfigured message from MDM to continue through Setup Assistant. Availability: Available in iOS 9 and later and the response is only generated by devices enrolled in MDM via DEP (see Device Enrollment Program)."
            case "AutoSetupAdminAccounts":
                return "Returns the local admin users (if any) created automatically by Setup Assistant during DEP enrollment via the AccountConfiguration command. Availability: Available in macOS 10.11 and later and the response is only generated by devices enrolled in MDM via DEP (see Device Enrollment Program). Each dictionary in the array contains two keys: a key GUID with a string value of the Global Unique Identifier of a local admin account, and a key shortName with a string value of the short name of the admin account."
            case "ITunesStoreAccountIsActive":
                return "true if the user is currently logged into an active iTunes Store account. Availability:Available in iOS 7 and later and in macOS 10.9."
            case "ITunesStoreAccountHash":
                return "Returns a hash of the iTunes Store account currently logged in. This string is identical to the itsIdHash returned by the VPP App Assignment web service. Availability: Available in iOS 8.0 and later and macOS 10.10 and later."
            case "DeviceName":
                return "-"
            case "OSVersion":
                return "-"
            case "BuildVersion":
                return "-"
            case "ModelName":
                return "-"
            case "Model":
                return "-"
            case "ProductName":
                return "-"
            case "SerialNumber":
                return "-"
            case "DeviceCapacity":
                return "-"
            case "AvailableDeviceCapacity":
                return "-"
            case "BatteryLevel":
                return "-"
            case "CellularTechnology":
                return "-"
            case "IMEI":
                return "-"
            case "MEID":
                return "-"
            case "ModemFirmwareVersion":
                return "-"
            case "IsSupervised":
                return "-"
            case "IsDeviceLocatorServiceEnabled":
                return "If true, the device has a device locator service (such as Find My iPhone) enabled. Availability: Available in iOS 7 and later."
            case "IsActivationLockEnabled":
                return "-"
            case "IsDoNotDisturbInEffect":
                return "-"
            case "EASDeviceIdentifier":
                return "-"
            case "IsCloudBackupEnabled":
                return "-"
            case "OSUpdateSettings":
                return "-"
            case "LocalHostName":
                return "-"
            case "HostName":
                return "-"
            case "SystemIntegrityProtectionEnabled":
                return "-"
            case "ActiveManagedUsers":
                return "-"
            case "IsMDMLostModeEnabled":
                return "-"
            case "MaximumResidentUsers":
                return "-"
            case "ICCID":
                return "The ICC identifier for the installed SIM card. skip"
            case "BluetoothMAC":
                return "Bluetooth MAC address."
            case "WiFiMAC":
                return "Wi-Fi MAC address."
            case "EthernetMACs":
                return "Ethernet MAC addresses. Availability: Available in iOS 7 and later."
            case "EthernetMAC":
                return "Primary Ethernet MAC address. Availability: Available in macOS v10.7 and later."
            case "CurrentCarrierNetwork":
                return "Name of the current carrier network"
            case "SIMCarrierNetwork":
                return "Name of the home carrier network. (Replaces SIMCarrierNetwork.)"
            case "SubscriberCarrierNetwork":
                return "Name of the home carrier network. (Replaces SIMCarrierNetwork.) Availability: Available in iOS 5.0 and later."
            case "CarrierSettingsVersion":
                return "Version of the currently-installed carrier settings file."
            case "PhoneNumber":
                return "Raw phone number without punctuation, including country code."
            case "VoiceRoamingEnabled":
                return "The current setting of the Voice Roaming setting. This is only available on certain carriers. Availability: iOS 5.0 and later."
            case "DataRoamingEnabled":
                return "The current setting of the Data Roaming setting."
            case "IsRoaming":
                return "Returns whether the device is currently roaming. Availability: Available in iOS 4.2 and later. See note below."
            case "PersonalHotspotEnabled":
                return "True if the Personal Hotspot feature is currently turned on. This value is available only with certain carriers. Availability: iOS 7.0 and later."
            case "SubscriberMCC":
                return "Home Mobile Country Code (numeric string). Availability: Available in iOS 4.2.6 and later."
            case "SubscriberMNC":
                return "Home Mobile Network Code (numeric string). Availability: Available in iOS 4.2.6 and later."
            case "CurrentMCC":
                return "Current Mobile Country Code (numeric string)."
            case "CurrentMNC":
                return "Current Mobile Network Code (numeric string)."
            case "ServiceSubscriptions":
                return "-"
            case "IsDataPreferred":
                return "If true, this subscription is preferred for data."

            case "IsVoicePreferred":
                return "If true, this subscription is preferred for voice."

            case "Label":
                return "The label of this subscription."

            case "LabelID":
                return "The UUID identifying this subscription (as a string)."

            case "CatalogURL":
                return "The URL to the software update catalog currently in use by the client"
        }
    }

}
