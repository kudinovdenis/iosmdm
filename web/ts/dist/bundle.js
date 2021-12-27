(()=>{"use strict";var t,e,n,o,i="http://localhost:8082",r=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function c(t){try{s(o.next(t))}catch(t){r(t)}}function a(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}s((o=o.apply(t,e||[])).next())}))},c=function(t,e){var n,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},a=function(){function t(){}return t.prototype.get=function(t){return r(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return[4,fetch(t)];case 1:return[2,e.sent().json()]}}))}))},t.prototype.getAllDevices=function(){return r(this,void 0,void 0,(function(){var t;return c(this,(function(e){switch(e.label){case 0:return t=[Device.testDevice(),Device.testDevice(),Device.testDevice(),Device.testDevice(),Device.testDevice()],[2,Promise.resolve(t)];case 1:return[2,e.sent().map((function(t){var e=new Device;return e.UDID=t.UDID,e.LastConnectionDate=new Date(Date.parse(t.LastConnectionDate)),e.PushMagic=t.PushMagic,e.PushToken=t.PushToken,e.CheckedOut=t.CheckedOut,e}))]}}))}))},t.prototype.getListOfApplications=function(t){return r(this,void 0,void 0,(function(){return c(this,(function(e){return[2,this.get(i+"/backend/devices/"+t.UDID+"/applications")]}))}))},t}(),s=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function c(t){try{s(o.next(t))}catch(t){r(t)}}function a(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}s((o=o.apply(t,e||[])).next())}))},l=function(t,e){var n,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}},u=function(){function t(t){this.element=$("<div>").addClass("WebAppControl"),this.devicesControl=new p,this.apiClient=t,this.element.append(this.devicesControl.element),$(document.body).append(this.element)}return t.prototype.load=function(){return s(this,void 0,void 0,(function(){var t;return l(this,(function(e){switch(e.label){case 0:return[4,this.apiClient.getAllDevices()];case 1:return t=e.sent(),console.log("Get all devices: "+t),this.showListOfDevices(t),[2]}}))}))},t.prototype.showListOfDevices=function(t){for(var e=0,n=t;e<n.length;e++){var o=n[e],i=new f(o,this.apiClient);this.devicesControl.appendDeviceControl(i)}},t}(),p=function(){function t(){this.deviceControls=[],this.element=$("<div>").addClass("DevicesControl").addClass("container")}return t.prototype.clear=function(){for(var t=0,e=this.deviceControls;t<e.length;t++){var n=e[t];this.removeDeviceControl(n)}},t.prototype.appendDeviceControl=function(t){this.deviceControls.push(t),this.element.append(t.element)},t.prototype.removeDeviceControl=function(t){t.element.remove();var e=this.deviceControls.indexOf(t,0);e>-1&&this.deviceControls.splice(e,1)},t}(),f=function(){function t(t,e){this.element=$("<h4>").text("Device: ".concat(t.UDID,". LastConnectionDate: ").concat(t.LastConnectionDate)).addClass("DeviceControl"),this.device=t,this.apiClient=e,this.applicationsControl=new h(t,e),this.element.append(this.applicationsControl.element)}return t.prototype.clear=function(){this.applicationsControl.clear},t}(),h=function(){function t(t,e){var n=this;this.applicationControls=[],this.element=$("<div>").text("Applications"),this.loadListOfApplicationsButton=$("<button>").addClass("btn btn-primary").html("Load applications list"),this.element.append(this.loadListOfApplicationsButton),this.spiner=this.createSpinner(),this.device=t,this.apiClient=e,this.loadListOfApplicationsButton.on("click",(function(){return s(n,void 0,void 0,(function(){var n,o,i,r,c;return l(this,(function(a){switch(a.label){case 0:return this.clear(),this.startLoading(),console.log("OnClick!"+t.UDID),[4,e.getListOfApplications(t)];case 1:for(n=a.sent(),this.stopLoading(),o=0,i=n;o<i.length;o++)r=i[o],c=new d(r),this.appendApplicationControl(c);return[2]}}))}))}))}return t.prototype.createSpinner=function(){return $("<div>").addClass("Spinner").addClass("spinner-border text-light")},t.prototype.clear=function(){for(var t=0,e=this.applicationControls;t<e.length;t++){var n=e[t];this.removeApplicationControl(n)}},t.prototype.appendApplicationControl=function(t){this.applicationControls.push(t),this.element.append(t.element)},t.prototype.removeApplicationControl=function(t){t.element.remove();var e=this.applicationControls.indexOf(t,0);e>-1&&this.applicationControls.splice(e,1)},t.prototype.startLoading=function(){this.loadListOfApplicationsButton.append(this.spiner)},t.prototype.stopLoading=function(){this.spiner.remove()},t}(),d=function(){function t(t){this.element=document.createElement("<div>"),this.element.className="ApplicationControl",this.applicationInfo=t,this.element.textContent="App: ".concat(t.Name,". Identifier: ").concat(t.Identifier,". Version: ").concat(t.Version)}return t.prototype.clear=function(){this.element.innerHTML=""},t}(),v=new u(new a);t=void 0,e=void 0,o=function(){var t;return function(t,e){var n,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return c.label++,{value:r[1],done:!1};case 5:c.label++,o=r[1],r=[0];continue;case 7:r=c.ops.pop(),c.trys.pop();continue;default:if(!((i=(i=c.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){c=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){c.label=r[1];break}if(6===r[0]&&c.label<i[1]){c.label=i[1],i=r;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(r);break}i[2]&&c.ops.pop(),c.trys.pop();continue}r=e.call(t,c)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,v.load()];case 1:return e.sent(),[3,3];case 2:return t=e.sent(),document.body.textContent="Error: "+t,[3,3];case 3:return[2]}}))},new((n=void 0)||(n=Promise))((function(i,r){function c(t){try{s(o.next(t))}catch(t){r(t)}}function a(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}s((o=o.apply(t,e||[])).next())}))})();