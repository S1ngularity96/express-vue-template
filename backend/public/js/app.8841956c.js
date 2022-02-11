(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4adb":function(t,e,n){n("99af");var r="8080",a="http",o="development";function s(t){var e=i(t);return"".concat(e,":").concat(r)}function i(t){var e,n;if(e=a,"production"===o){var r="127.0.0.1";n="".concat(e,"://").concat(r)}else n="".concat(e,"://").concat(window.location.hostname);return n}t.exports={getConnectionString:s,getOrigin:i}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("1dce"),o=n.n(a),s=n("a925"),i=n("2b27"),c=n.n(i),u=n("0628"),l=n.n(u),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("snack-bar"),n("v-app-bar",{attrs:{app:"",dense:""}},[n("v-toolbar-title",[t._v(t._s(t.translatedRouteName))]),n("v-spacer")],1),n("Navigation"),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1),n("v-footer",{attrs:{dark:"",padless:"",app:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:"",color:"#323fa3"}},[n("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Boilerplate App")])])],1)],1)],1)},p=[],m=n("1da1"),d=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:""}},[n("v-list",{attrs:{nav:""}},[t._l(t.navbar,(function(e){return[t.hasGroup(e.Group)?n("v-list-group",{key:e.Title,attrs:{"prepend-icon":e.Icon,"no-action":"",eager:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.Title))])],1)]},proxy:!0}],null,!0)},t._l(e.Group,(function(e){return n("v-list-item",{key:e.Title,attrs:{to:e.To},on:{click:e.Click}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.Icon))])],1),n("v-list-item-title",[t._v(t._s(e.Title))])],1)})),1):n("v-list-item",{key:e.Title,attrs:{to:e.To},on:{click:e.Click}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.Icon))])],1),n("v-list-item-title",[t._v(t._s(e.Title))])],1)]}))],2)],1)}),b=[],h={data:function(){},methods:{pushSuccessToSnackbar:function(t){this.$store.commit("pushMsgToSnackbar",t),this.$store.commit("changeSnackbarType","success"),this.$store.commit("showSnackbar")},pushInfoToSnackbar:function(t){this.$store.commit("pushMsgToSnackbar",t),this.$store.commit("changeSnackbarType","info"),this.$store.commit("showSnackbar")},pushErrorToSnackbar:function(t){this.$store.commit("pushMsgToSnackbar",t),this.$store.commit("changeSnackbarType","error"),this.$store.commit("showSnackbar")},printErrorServerConntection:function(){this.$store.commit("pushMsgToSnackbar","Connection to server failed"),this.$store.commit("changeSnackbarType","error"),this.$store.commit("showSnackbar")},printMissingFeature:function(){this.$store.commit("pushMsgToSnackbar","The setting or action is not available"),this.$store.commit("changeSnackbarType","error"),this.$store.commit("showSnackbar")},snackbarHandleErrorMessage:function(t){"undefined"!==typeof t.message?this.pushErrorToSnackbar(t.message):this.printErrorServerConntection()}}},v={props:["value","theme"],mixins:[h],data:function(){return{navbar:[]}},computed:{},methods:{hasGroup:function(t){return"undefined"!==typeof t}},created:function(){this.navbar=[{Title:this.$t("Nav.Dashboard"),Icon:"mdi-view-dashboard",To:"/",Click:function(){}},{Title:this.$t("Nav.Network"),Icon:"mdi-network",To:"/",Click:function(){}},{Title:this.$t("Nav.Settings"),Icon:"mdi-cog",To:"/",Click:function(){}},{Title:this.$t("Nav.System.Title"),Icon:"mdi-power-settings",Group:[{Title:this.$t("Nav.System.Restart"),Icon:"mdi-restart",Click:function(){alert("System Restart")}},{Title:this.$t("Nav.System.Shutdown"),Icon:"mdi-power",Click:function(){alert("System Shutdown")}}]}]},mounted:function(){}},g=v,k=n("2877"),S=n("6544"),y=n.n(S),w=n("132d"),T=n("8860"),$=n("56b0"),_=n("da13"),x=n("5d23"),O=n("34c3"),M=n("f774"),C=Object(k["a"])(g,d,b,!1,null,null,null),V=C.exports;y()(C,{VIcon:w["a"],VList:T["a"],VListGroup:$["a"],VListItem:_["a"],VListItemContent:x["a"],VListItemIcon:O["a"],VListItemTitle:x["b"],VNavigationDrawer:M["a"]});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{staticClass:"snackbar",attrs:{timeout:t.countdown,top:!0,color:t.type,absolute:""},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){return t.close()}}},"v-btn",r,!1),[t._v("Close")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("span",{domProps:{innerHTML:t._s(t.message)}})])},I=[],N={data:function(){return{countdown:5e3}},methods:{close:function(){this.$store.commit("closeSnackbar")}},computed:{snackbar:{get:function(){return this.$store.state.displaySnackbar},set:function(t){this.$store.commit("closeSnackbar",t)}},message:function(){return this.$store.getters.snackbarMessage},type:function(){return"success"===this.$store.getters.snackbarType?"success":"error"===this.$store.getters.snackbarType?"error":(this.$store.getters.snackbarType,"info")}}},L=N,R=n("8336"),P=n("2db4"),E=Object(k["a"])(L,j,I,!1,null,null,null),D=E.exports;y()(E,{VBtn:R["a"],VSnackbar:P["a"]});var G={sockets:{},components:{"snack-bar":D,Navigation:V},data:function(){return{}},computed:{translatedRouteName:function(){return"Boilerplate Page"}},created:function(){this.$cookies.isKey("lang")&&(this.$i18n.locale=this.$cookies.get("lang"))},mounted:function(){return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{}},U=G,B=n("7496"),H=n("40dc"),A=n("b0af"),F=n("99d9"),z=n("a523"),J=n("553a"),W=n("f6c4"),K=n("2fa4"),Y=n("2a7f"),q=Object(k["a"])(U,f,p,!1,null,null,null),Q=q.exports;y()(q,{VApp:B["a"],VAppBar:H["a"],VCard:A["a"],VCardText:F["a"],VContainer:z["a"],VFooter:J["a"],VMain:W["a"],VSpacer:K["a"],VToolbarTitle:Y["a"]});var X=n("8c4f"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("p",[t._v(t._s(t.text))])]),n("v-col",{attrs:{cols:"6"}},[n("p",[t._v(t._s(t.time))])])],1)],1)},tt=[],et={sockets:{"/time":function(t){this.time=t}},data:function(){return{time:"Wait for Servertime ...",text:"Wait for Serverresponse ..."}},methods:{getText:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axiosx.get("/api/home");case 3:n=e.sent,t.text=n.data.message,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$snackbar.errorhandle(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getText();case 1:case"end":return e.stop()}}),e)})))()}},nt=et,rt=n("62ad"),at=n("0fd9"),ot=Object(k["a"])(nt,Z,tt,!1,null,null,null),st=ot.exports;y()(ot,{VCol:rt["a"],VContainer:z["a"],VRow:at["a"]}),r["a"].use(X["a"]);var it=[{path:"/",name:"Home",component:st}],ct=new X["a"]({mode:"history",base:"/",routes:it}),ut=ct,lt=n("2f62");r["a"].use(lt["a"]);var ft=new lt["a"].Store({state:{isMobile:!0,isLoggedIn:!1,snackbarmsg:"",snackbartype:"",displaySnackbar:!1,powerOff:{dialog:!1,cmd:""}},mutations:{changeSreenSize:function(t,e){t.isMobile=e},changeLoginState:function(t,e){t.isLoggedIn=e},pushMsgToSnackbar:function(t,e){t.snackbarmsg=e},changeSnackbarType:function(t,e){t.snackbartype=e},showSnackbar:function(t){t.displaySnackbar=!0},closeSnackbar:function(t){t.displaySnackbar=!1},triggerPowerOff:function(t,e){t.powerOff.cmd=e.cmd,t.powerOff.dialog=e.dialog}},getters:{isMobile:function(t){return t.isMobile},isLoggedIn:function(t){return t.isLoggedIn},snackbarMessage:function(t){return t.snackbarmsg},snackbarType:function(t){return t.snackbartype},snackbarDisplay:function(t){return t.displaySnackbar},powerOff:function(t){return{dialog:t.powerOff.dialog,cmd:t.powerOff.cmd}}},actions:{},modules:{}}),pt=(n("5363"),n("f309"));r["a"].use(pt["a"]);var mt=new pt["a"]({icons:{iconfont:"mdi"}}),dt={Nav:{Dashboard:"Dashboard",Network:"Netzwerk",Settings:"Einstellungen",System:{Title:"System",Restart:"Neustarten",Shutdown:"Herrunterfahren"}}},bt={Nav:{Dashboard:"Dashboard",Network:"Network",Settings:"Settings",System:{Title:"System",Restart:"Restart",Shutdown:"Shutdown"}}},ht={"de-DE":dt,"en-US":bt},vt=(n("a15b"),n("d3b7"),n("bc3a")),gt=n.n(vt),kt=n("4adb");function St(){var t="127.0.0.1",e="8080";return t="http://"+t+":"+e,gt.a.create({baseURL:t})}function yt(){return gt.a.create({baseURL:Object(kt["getConnectionString"])()})}var wt=function(t){var e="development";t.myGlobalMethod=function(){};var n=function(){var t=null;return t="production"===e?St():yt(),t.interceptors.response.use((function(t){return t}),(function(t){if(t.response){var e=t.response,n=e.status;return n>200&&(e.data.message=e.data.message.join("<br>")),Promise.reject(e.data)}return Promise.reject(t)})),t};t.prototype.$axiosx=n()},Tt={install:wt},$t=function(t,e){var n=e.store,r={success:function(t){n.commit("pushMsgToSnackbar",t),n.commit("changeSnackbarType","success"),n.commit("showSnackbar")},info:function(t){n.commit("pushMsgToSnackbar",t),n.commit("changeSnackbarType","info"),n.commit("showSnackbar")},error:function(t){n.commit("pushMsgToSnackbar",t),n.commit("changeSnackbarType","error"),n.commit("showSnackbar")},errorserverconnection:function(){n.commit("pushMsgToSnackbar","Connection to server failed"),n.commit("changeSnackbarType","error"),n.commit("showSnackbar")},missingfeature:function(){n.commit("pushMsgToSnackbar","The setting or action is not available"),n.commit("changeSnackbarType","error"),n.commit("showSnackbar")},errorhandle:function(t){"undefined"!==typeof t.message?this.error(t.message):this.errorserverconnection()}};t.prototype.$snackbar=r},_t={install:$t},xt=(n("e008"),n("f87c")),Ot=n("8e27"),Mt=n.n(Ot);r["a"].config.productionTip=!1,r["a"].use(c.a),r["a"].$cookies.config("1y","","",!1,"Lax"),r["a"].use(l.a),r["a"].use(s["a"]);var Ct=new s["a"]({locale:"en-US",fallbackLocale:"en-US",messages:ht});r["a"].use(Tt),r["a"].use(_t,{store:ft}),r["a"].use(o.a);var Vt=Mt()(Object(kt["getConnectionString"])(),{transports:["websocket"]});r["a"].use(xt["a"],Vt);var jt=new r["a"]({router:ut,store:ft,axios:Tt,i18n:Ct,VueCookies:c.a,snackbar:_t,vuetify:mt,render:function(t){return t(Q)}}).$mount("#app");e["default"]=jt},e008:function(t,e,n){}});
//# sourceMappingURL=app.8841956c.js.map