"use strict";(self.webpackChunkpro_react_admin=self.webpackChunkpro_react_admin||[]).push([[219,585],{2908:function(e,t,n){var r=n(4836),u=n(8698);Object.defineProperty(t,"__esModule",{value:!0}),t.useProTabContext=t.ProTabProvider=void 0;var a=r(n(7424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(7294)),l=n(6634),i=r(n(4585));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var f={activeKey:"",setActiveKey:function(){},panes:[],setPanes:function(){},removeTab:function(){}},d=[{title:"首页",key:"/",content:o.default.createElement(i.default,null),closable:!1,path:"/"}],s=(0,o.createContext)(f);t.useProTabContext=function(){var e=(0,o.useContext)(s);if(void 0===e)throw new Error("useValue must be used within a ValueProvider");return e};t.ProTabProvider=function(e){var t=e.children,n=(0,o.useState)(""),r=(0,a.default)(n,2),u=r[0],i=r[1],c=(0,o.useState)(d),f=(0,a.default)(c,2),v=f[0],p=f[1],y=(0,l.useNavigate)(),b=(0,o.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=v.findIndex((function(t){return t.key===e})),r=v.filter((function(t){return t.key!==e}));if(e!==u)p(r);else{var a=r[n-1].key;y(a),i(a),p(r)}t()}),[u,v]),P=(0,o.useMemo)((function(){return{activeKey:u,setActiveKey:i,panes:v,setPanes:p,removeTab:b}}),[u,i,v,p,b]);return o.default.createElement(o.default.Fragment,null,o.default.createElement(s.Provider,{value:P},t))}},8722:function(e,t,n){var r=n(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(7294)),a=function(e){var t=e.children;return u.default.createElement("div",{style:{width:"100%",minHeight:"calc(100vh - 252px)"}},t)};t.default=a},4138:function(e,t,n){var r=n(4836),u=n(8698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(7424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(7294));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}var i=function(e){var t=e.children,n=e.delay,r=void 0===n?110:n,u=(0,o.useState)(0),l=(0,a.default)(u,2),i=l[0],c=l[1],f=setInterval((function(){return c((function(e){return e+1}))}),r);return(0,o.useEffect)((function(){i===t.length&&clearInterval(f)}),[t,f,i]),(0,o.useEffect)((function(){return function(){return clearInterval(f)}}),[f]),o.default.createElement(o.default.Fragment,null,t.substring(0,i))},c=(0,o.memo)(i);t.default=c},2219:function(e,t,n){var r=n(4836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(7294)),a=n(6634),o=n(2058),l=r(n(8722)),i=n(2908),c=function(){var e=(0,i.useProTabContext)(),t=e.activeKey,n=e.removeTab,r=(0,a.useNavigate)();return u.default.createElement(l.default,null,u.default.createElement(o.Button,{type:"link",onClick:function(){n(t,(function(){r("coupons/edit",{replace:!0})}))}},"关闭当前标签 并打开 Angular标签"),u.default.createElement(o.Alert,{message:"Success Tips",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}))};t.default=c},4585:function(e,t,n){var r=n(4836),u=n(8698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(7294)),o=n(2058),l=r(n(8722)),i=r(n(4138));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var f=function(){return a.default.createElement(l.default,null,a.default.createElement("h2",null,a.default.createElement(i.default,null,"Cool! Hi, React & Ant Design!")),a.default.createElement("h2",null,"React version: ",a.version),a.default.createElement(o.Button,{type:"primary",onClick:function(){window.open("https://ngrok.com/","_blank")}},"Hi, Ngrok!"))};t.default=f}}]);
//# sourceMappingURL=219.516592855cfc26869e55.js.map