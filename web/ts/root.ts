import { IApi, ApiImpl } from './api/api'
import { WebAppControl } from './ui/web_app'

let apiClient: IApi = new ApiImpl();
let webAppControl = new WebAppControl(apiClient);
(async () => {
    try {
        await webAppControl.load();
    } catch (e) {
        document.body.textContent = "Error: " + e;
    }
})();