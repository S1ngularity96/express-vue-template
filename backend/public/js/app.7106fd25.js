(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4adb":function(t,e,n){n("99af");var r="8080",a="http",o="development";function i(t){var e=s(t);return"".concat(e,":").concat(r)}function s(t){var e,n;if(e=a,"production"===o){var r="127.0.0.1";n="".concat(e,"://").concat(r)}else n="".concat(e,"://").concat(window.location.hostname);return n}t.exports={getConnectionString:i,getOrigin:s}},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("1dce"),o=n.n(a),i=n("a925"),s=n("2b27"),c=n.n(s),u=n("0628"),l=n.n(u),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("snack-bar"),n("v-app-bar",{attrs:{app:"",dense:""}},[n("v-toolbar-title",[t._v(t._s(t.translatedRouteName))]),n("v-spacer")],1),n("Navigation"),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1),n("v-footer",{attrs:{dark:"",padless:"",app:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:"",color:"#323fa3"}},[n("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Boilerplate App")])])],1)],1)],1)},f=[],d=n("1da1"),v=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:""}},[n("v-list",{attrs:{nav:""}},[t._l(t.navbar,(function(e){return[t.hasGroup(e.Group)?n("v-list-group",{key:e.Title,attrs:{"prepend-icon":e.Icon,"no-action":"",eager:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.Title))])],1)]},proxy:!0}],null,!0)},t._l(e.Group,(function(e){return n("v-list-item",{key:e.Title,attrs:{to:e.To},on:{click:e.Click}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.Icon))])],1),n("v-list-item-title",[t._v(t._s(e.Title))])],1)})),1):n("v-list-item",{key:e.Title,attrs:{to:e.To},on:{click:e.Click}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.Icon))])],1),n("v-list-item-title",[t._v(t._s(e.Title))])],1)]}))],2)],1)}),m=[],b={props:["value","theme"],data:function(){return{navbar:[]}},computed:{},methods:{hasGroup:function(t){return"undefined"!==typeof t}},created:function(){this.navbar=[{Title:this.$t("Nav.Dashboard"),Icon:"mdi-view-dashboard",To:"/",Click:function(){}},{Title:this.$t("Nav.Network"),Icon:"mdi-network",To:"/",Click:function(){}},{Title:this.$t("Nav.Settings"),Icon:"mdi-cog",To:"/",Click:function(){}},{Title:this.$t("Nav.System.Title"),Icon:"mdi-power-settings",Group:[{Title:this.$t("Nav.System.Restart"),Icon:"mdi-restart",Click:function(){alert("System Restart")}},{Title:this.$t("Nav.System.Shutdown"),Icon:"mdi-power",Click:function(){alert("System Shutdown")}}]}]},mounted:function(){}},h=b,k=n("2877"),y=n("6544"),g=n.n(y),w=n("132d"),_=n("8860"),x=n("56b0"),S=n("da13"),$=n("5d23"),T=n("34c3"),N=n("f774"),C=Object(k["a"])(h,v,m,!1,null,null,null),V=C.exports;g()(C,{VIcon:w["a"],VList:_["a"],VListGroup:x["a"],VListItem:S["a"],VListItemContent:$["a"],VListItemIcon:T["a"],VListItemTitle:$["b"],VNavigationDrawer:N["a"]});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("v-snackbar",{attrs:{dark:t.$vuetify.theme.dark,app:"",top:"",absolute:"",color:t.color,timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.attrs;return[n("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t.array?t._l(t.text,(function(e,r){return n("span",{key:r},[t._v(t._s(e)),n("br")])})):n("span",[t._v(t._s(t.text))])],2)],1)},O=[],R={data:function(){return{snackbar:!1,text:"",timeout:3e3,color:"primary",array:!1}},methods:{setText:function(t){Array.isArray(t)?(this.array=!0,this.text=t):(this.array=!1,this.text=t),this.snackbar=!0},success:function(){this.color="green"},error:function(){this.color="red"},info:function(){this.color="blue"}},mounted:function(){this.$snackbar.registerCallbacks(this.success,this.error,this.info,this.setText)},beforeDestroy:function(){this.$snackbar.unregister()}},I=R,L=n("8336"),P=n("2db4"),D=Object(k["a"])(I,j,O,!1,null,null,null),G=D.exports;g()(D,{VBtn:L["a"],VSnackbar:P["a"]});var E={sockets:{},components:{"snack-bar":G,Navigation:V},data:function(){return{}},computed:{translatedRouteName:function(){return"Boilerplate Page"}},created:function(){this.$cookies.isKey("lang")&&(this.$i18n.locale=this.$cookies.get("lang"))},mounted:function(){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{}},M=E,A=n("7496"),U=n("40dc"),B=n("b0af"),F=n("99d9"),H=n("a523"),J=n("553a"),W=n("f6c4"),z=n("2fa4"),K=n("2a7f"),Y=Object(k["a"])(M,p,f,!1,null,null,null),q=Y.exports;g()(Y,{VApp:A["a"],VAppBar:U["a"],VCard:B["a"],VCardText:F["a"],VContainer:H["a"],VFooter:J["a"],VMain:W["a"],VSpacer:z["a"],VToolbarTitle:K["a"]});var Q=n("8c4f"),X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("p",[t._v(t._s(t.text))])]),n("v-col",{attrs:{cols:"6"}},[n("p",[t._v(t._s(t.time))])])],1)],1)},Z=[],tt={sockets:{"/time":function(t){this.time=t}},data:function(){return{time:"Wait for Servertime ...",text:"Wait for Serverresponse ..."}},methods:{getText:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axiosx.get("/api/home");case 3:n=e.sent,t.text=n.data.message,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$snackbar.errorhandle(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getText();case 1:case"end":return e.stop()}}),e)})))()}},et=tt,nt=n("62ad"),rt=n("0fd9"),at=Object(k["a"])(et,X,Z,!1,null,null,null),ot=at.exports;g()(at,{VCol:nt["a"],VContainer:H["a"],VRow:rt["a"]}),r["a"].use(Q["a"]);var it=[{path:"/",name:"Home",component:ot}],st=new Q["a"]({mode:"history",base:"/",routes:it}),ct=st,ut=n("2f62");r["a"].use(ut["a"]);var lt=new ut["a"].Store({state:{},mutations:{},getters:{},actions:{},modules:{}}),pt=(n("5363"),n("f309"));r["a"].use(pt["a"]);var ft=new pt["a"]({icons:{iconfont:"mdi"}}),dt={Nav:{Dashboard:"Dashboard",Network:"Netzwerk",Settings:"Einstellungen",System:{Title:"System",Restart:"Neustarten",Shutdown:"Herrunterfahren"}}},vt={Nav:{Dashboard:"Dashboard",Network:"Network",Settings:"Settings",System:{Title:"System",Restart:"Restart",Shutdown:"Shutdown"}}},mt={"de-DE":dt,"en-US":vt},bt=(n("a15b"),n("d3b7"),n("bc3a")),ht=n.n(bt),kt=n("4adb");function yt(){var t="127.0.0.1",e="8080";return t="http://"+t+":"+e,ht.a.create({baseURL:t})}function gt(){return ht.a.create({baseURL:Object(kt["getConnectionString"])()})}var wt=function(t){var e="development";t.myGlobalMethod=function(){};var n=function(){var t=null;return t="production"===e?yt():gt(),t.interceptors.response.use((function(t){return t}),(function(t){if(t.response){var e=t.response,n=e.status;return n>200&&(e.data.message=e.data.message.join("<br>")),Promise.reject(e.data)}return Promise.reject(t)})),t};t.prototype.$axiosx=n()},_t={install:wt},xt=(n("25f0"),function(t){t.prototype.$snackbar={},t.prototype.$snackbar.success=function(){console.error("Not implemented function")},t.prototype.$snackbar.error=function(){console.error("Not implemented function")},t.prototype.$snackbar.info=function(){console.error("Not implemented function")},t.prototype.$snackbar.registerCallbacks=function(e,n,r,a){t.prototype.$snackbar.success=function(t){e(),a(t)},t.prototype.$snackbar.error=function(t){n(),a(t)},t.prototype.$snackbar.errorhandle=function(t){n(),t.response&&t.response.data?a(t.response.data.message):a(t.toString())},t.prototype.$snackbar.info=function(t){r(),a(t)}},t.prototype.$snackbar.unregister=function(){t.prototype.$snackbar.success=function(){console.error("Not implemented function")},t.prototype.$snackbar.error=function(){console.error("Not implemented function")},t.prototype.$snackbar.info=function(){console.error("Not implemented function")}}}),St={install:xt},$t=(n("e008"),n("f87c")),Tt=n("8e27"),Nt=n.n(Tt);r["a"].config.productionTip=!1,r["a"].use(c.a),r["a"].$cookies.config("1y","","",!1,"Lax"),r["a"].use(l.a),r["a"].use(i["a"]);var Ct=new i["a"]({locale:"en-US",fallbackLocale:"en-US",messages:mt});r["a"].use(_t),r["a"].use(St,{store:lt}),r["a"].use(o.a);var Vt=Nt()(Object(kt["getConnectionString"])(),{transports:["websocket"]});r["a"].use($t["a"],Vt);var jt=new r["a"]({router:ct,store:lt,axios:_t,i18n:Ct,VueCookies:c.a,snackbar:St,vuetify:ft,render:function(t){return t(q)}}).$mount("#app");e["default"]=jt},e008:function(t,e,n){}});
//# sourceMappingURL=app.7106fd25.js.map