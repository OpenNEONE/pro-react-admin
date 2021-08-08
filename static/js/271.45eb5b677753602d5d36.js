/*! For license information please see 271.45eb5b677753602d5d36.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_web=self.webpackChunkreact_web||[]).push([[271],{7254:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};var l=n(76),o=function(e,t){return r.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))};o.displayName="DownOutlined";const c=r.forwardRef(o)},9271:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};var l=n(76),o=function(e,t){return r.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))};o.displayName="HomeOutlined";const c=r.forwardRef(o)},7724:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};var l=n(76),o=function(e,t){return r.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))};o.displayName="LeftOutlined";const c=r.forwardRef(o)},8812:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};var l=n(76),o=function(e,t){return r.createElement(l.Z,Object.assign({},e,{ref:t,icon:a}))};o.displayName="RightOutlined";const c=r.forwardRef(o)},1555:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(2122),a=n(6156),l=n(7294),o=n(271),c=n(4184),i=n.n(c),s=n(8812),u=n(8481),d=n(4545),m=n(404),p=n(6032),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=m.Z.Group,h=function(e){var t=l.useContext(p.E_),n=t.getPopupContainer,a=t.getPrefixCls,o=t.direction,c=e.prefixCls,s=e.type,h=e.disabled,y=e.onClick,g=e.htmlType,b=e.children,E=e.className,C=e.overlay,Z=e.trigger,O=e.align,N=e.visible,w=e.onVisibleChange,S=e.placement,P=e.getPopupContainer,j=e.href,k=e.icon,z=void 0===k?l.createElement(d.Z,null):k,_=e.title,M=e.buttonsRender,I=e.mouseEnterDelay,A=e.mouseLeaveDelay,R=e.overlayClassName,L=e.overlayStyle,H=f(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle"]),T=a("dropdown-button",c),B={align:O,overlay:C,disabled:h,trigger:h?[]:Z,onVisibleChange:w,getPopupContainer:P||n,mouseEnterDelay:I,mouseLeaveDelay:A,overlayClassName:R,overlayStyle:L};"visible"in e&&(B.visible=N),B.placement="placement"in e?S:"rtl"===o?"bottomLeft":"bottomRight";var D=M([l.createElement(m.Z,{type:s,disabled:h,onClick:y,htmlType:g,href:j,title:_},b),l.createElement(m.Z,{type:s,icon:z})]),V=(0,u.Z)(D,2),F=V[0],W=V[1];return l.createElement(v,(0,r.Z)({},H,{className:i()(T,E)}),F,l.createElement(x,B,W))};h.__ANT_BUTTON=!0,h.defaultProps={type:"default",buttonsRender:function(e){return e}};const y=h;var g=n(1687),b=n(3355),E=n(6159),C=((0,b.b)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,n,c,u,d,m=l.useContext(p.E_),f=m.getPopupContainer,v=m.getPrefixCls,h=m.direction,y=e.arrow,b=e.prefixCls,C=e.children,x=e.trigger,Z=e.disabled,O=e.getPopupContainer,N=e.overlayClassName,w=v("dropdown",b),S=l.Children.only(C),P=(0,E.Tm)(S,{className:i()("".concat(w,"-trigger"),(0,a.Z)({},"".concat(w,"-rtl"),"rtl"===h),S.props.className),disabled:Z}),j=i()(N,(0,a.Z)({},"".concat(w,"-rtl"),"rtl"===h)),k=Z?[]:x;return k&&-1!==k.indexOf("contextMenu")&&(t=!0),l.createElement(o.Z,(0,r.Z)({arrow:y,alignPoint:t},e,{overlayClassName:j,prefixCls:w,getPopupContainer:O||f,transitionName:(n=v(),c=e.placement,u=void 0===c?"":c,d=e.transitionName,void 0!==d?d:u.indexOf("top")>=0?"".concat(n,"-slide-down"):"".concat(n,"-slide-up")),trigger:k,overlay:function(){return function(t){var n,r=e.overlay;n="function"==typeof r?r():r;var a=(n=l.Children.only("string"==typeof n?l.createElement("span",null,n):n)).props;(0,g.Z)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var o=a.selectable,c=void 0!==o&&o,i=a.expandIcon,u=void 0!==i&&l.isValidElement(i)?i:l.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},l.createElement(s.Z,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"==typeof n.type?n:(0,E.Tm)(n,{mode:"vertical",selectable:c,expandIcon:u})}(w)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===h?"bottomRight":"bottomLeft"}()}),P)});C.Button=y,C.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};const x=C},8899:(e,t,n)=>{n(2779),n(7750)},4025:(e,t,n)=>{n.d(t,{D:()=>x,Z:()=>N});var r=n(6156),a=n(2122),l=n(8481),o=n(7294),c=n(4184),i=n.n(c),s=n(8423);const u={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"};var d=n(76),m=function(e,t){return o.createElement(d.Z,Object.assign({},e,{ref:t,icon:u}))};m.displayName="BarsOutlined";const p=o.forwardRef(m);var f=n(8812),v=n(7724),h=n(2897),y=n(6032);const g=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};var b,E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},x=o.createContext({}),Z=(b=0,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b+=1,"".concat(e).concat(b)}),O=o.forwardRef((function(e,t){var n=e.prefixCls,c=e.className,u=e.trigger,d=e.children,m=e.defaultCollapsed,b=void 0!==m&&m,O=e.theme,N=void 0===O?"dark":O,w=e.style,S=void 0===w?{}:w,P=e.collapsible,j=void 0!==P&&P,k=e.reverseArrow,z=void 0!==k&&k,_=e.width,M=void 0===_?200:_,I=e.collapsedWidth,A=void 0===I?80:I,R=e.zeroWidthTriggerStyle,L=e.breakpoint,H=e.onCollapse,T=e.onBreakpoint,B=E(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),D=(0,o.useContext)(h.Gs).siderHook,V=(0,o.useState)("collapsed"in B?B.collapsed:b),F=(0,l.Z)(V,2),W=F[0],G=F[1],$=(0,o.useState)(!1),U=(0,l.Z)($,2),Y=U[0],Q=U[1];(0,o.useEffect)((function(){"collapsed"in B&&G(B.collapsed)}),[B.collapsed]);var X=function(e,t){"collapsed"in B||G(e),null==H||H(e,t)},J=(0,o.useRef)();J.current=function(e){Q(e.matches),null==T||T(e.matches),W!==e.matches&&X(e.matches,"responsive")},(0,o.useEffect)((function(){function e(e){return J.current(e)}var t;if("undefined"!=typeof window){var n=window.matchMedia;if(n&&L&&L in C){t=n("(max-width: ".concat(C[L],")"));try{t.addEventListener("change",e)}catch(n){t.addListener(e)}e(t)}}return function(){try{null==t||t.removeEventListener("change",e)}catch(n){null==t||t.removeListener(e)}}}),[]),(0,o.useEffect)((function(){var e=Z("ant-sider-");return D.addSider(e),function(){return D.removeSider(e)}}),[]);var K,q,ee,te,ne,re,ae,le,oe,ce,ie=function(){X(!W,"clickTrigger")},se=(0,o.useContext)(y.E_).getPrefixCls;return o.createElement(x.Provider,{value:{siderCollapsed:W}},(q=se("layout-sider",n),ee=(0,s.Z)(B,["collapsed"]),ne=g(te=W?A:M)?"".concat(te,"px"):String(te),re=0===parseFloat(String(A||0))?o.createElement("span",{onClick:ie,className:i()("".concat(q,"-zero-width-trigger"),"".concat(q,"-zero-width-trigger-").concat(z?"right":"left")),style:R},u||o.createElement(p,null)):null,ae={expanded:z?o.createElement(f.Z,null):o.createElement(v.Z,null),collapsed:z?o.createElement(v.Z,null):o.createElement(f.Z,null)}[W?"collapsed":"expanded"],le=null!==u?re||o.createElement("div",{className:"".concat(q,"-trigger"),onClick:ie,style:{width:ne}},u||ae):null,oe=(0,a.Z)((0,a.Z)({},S),{flex:"0 0 ".concat(ne),maxWidth:ne,minWidth:ne,width:ne}),ce=i()(q,"".concat(q,"-").concat(N),(K={},(0,r.Z)(K,"".concat(q,"-collapsed"),!!W),(0,r.Z)(K,"".concat(q,"-has-trigger"),j&&null!==u&&!re),(0,r.Z)(K,"".concat(q,"-below"),!!Y),(0,r.Z)(K,"".concat(q,"-zero-width"),0===parseFloat(ne)),K),c),o.createElement("aside",(0,a.Z)({className:ce},ee,{style:oe,ref:t}),o.createElement("div",{className:"".concat(q,"-children")},d),j||Y&&re?le:null)))}));O.displayName="Sider";const N=O},7183:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2897),a=n(4025),l=r.ZP;l.Header=r.h4,l.Footer=r.$_,l.Content=r.VY,l.Sider=a.Z;const o=l},2897:(e,t,n)=>{n.d(t,{Gs:()=>m,h4:()=>h,$_:()=>y,VY:()=>g,ZP:()=>b});var r=n(5061),a=n(6156),l=n(8481),o=n(2122),c=n(7294),i=n(4184),s=n.n(i),u=n(6032),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=c.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function p(e){var t=e.suffixCls,n=e.tagName,r=e.displayName;return function(e){var a=function(r){var a=c.useContext(u.E_).getPrefixCls,l=r.prefixCls,i=a(t,l);return c.createElement(e,(0,o.Z)({prefixCls:i,tagName:n},r))};return a.displayName=r,a}}var f=function(e){var t=e.prefixCls,n=e.className,r=e.children,a=e.tagName,l=d(e,["prefixCls","className","children","tagName"]),i=s()(t,n);return c.createElement(a,(0,o.Z)({className:i},l),r)},v=p({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var t,n=c.useContext(u.E_).direction,i=c.useState([]),p=(0,l.Z)(i,2),f=p[0],v=p[1],h=e.prefixCls,y=e.className,g=e.children,b=e.hasSider,E=e.tagName,C=d(e,["prefixCls","className","children","hasSider","tagName"]),x=s()(h,(t={},(0,a.Z)(t,"".concat(h,"-has-sider"),"boolean"==typeof b?b:f.length>0),(0,a.Z)(t,"".concat(h,"-rtl"),"rtl"===n),t),y);return c.createElement(m.Provider,{value:{siderHook:{addSider:function(e){v((function(t){return[].concat((0,r.Z)(t),[e])}))},removeSider:function(e){v((function(t){return t.filter((function(t){return t!==e}))}))}}}},c.createElement(E,(0,o.Z)({className:x},C),g))})),h=p({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(f),y=p({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(f),g=p({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(f);const b=v},6562:(e,t,n)=>{n(2779)},9210:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(2122),a=n(6610),l=n(5991),o=n(379),c=n(4144),i=n(7294),s=n(985),u=n(4184),d=n.n(u),m=n(8423),p=n(4545);const f=(0,i.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var v=n(6159);const h=function(e){var t,n,a=e.popupClassName,l=e.icon,o=e.title,c=i.useContext(f),u=c.prefixCls,p=c.inlineCollapsed,h=c.antdMenuTheme,y=(0,s.Xl)();if(l){var g=(0,v.l$)(o)&&"span"===o.type;n=i.createElement(i.Fragment,null,(0,v.Tm)(l,{className:d()((0,v.l$)(l)?null===(t=l.props)||void 0===t?void 0:t.className:"","".concat(u,"-item-icon"))}),g?o:i.createElement("span",{className:"".concat(u,"-title-content")},o))}else n=p&&!y.length&&o&&"string"==typeof o?i.createElement("div",{className:"".concat(u,"-inline-collapsed-noicon")},o.charAt(0)):i.createElement("span",{className:"".concat(u,"-title-content")},o);return i.createElement(f.Provider,{value:(0,r.Z)((0,r.Z)({},c),{firstLevel:!1})},i.createElement(s.Wd,(0,r.Z)({},(0,m.Z)(e,["icon"]),{title:n,popupClassName:d()(u,"".concat(u,"-").concat(h),a)})))};var y=n(6156),g=n(344),b=n(9713),E=n(4025),C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},x=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).renderItem=function(t){var n,a,l=t.siderCollapsed,o=e.context,c=o.prefixCls,u=o.firstLevel,m=o.inlineCollapsed,p=o.direction,f=e.props,h=f.className,E=f.children,x=e.props,Z=x.title,O=x.icon,N=x.danger,w=C(x,["title","icon","danger"]),S=Z;void 0===Z?S=u?E:"":!1===Z&&(S="");var P={title:S};l||m||(P.title=null,P.visible=!1);var j=(0,g.Z)(E).length;return i.createElement(b.Z,(0,r.Z)({},P,{placement:"rtl"===p?"left":"right",overlayClassName:"".concat(c,"-inline-collapsed-tooltip")}),i.createElement(s.ck,(0,r.Z)({},w,{className:d()((n={},(0,y.Z)(n,"".concat(c,"-item-danger"),N),(0,y.Z)(n,"".concat(c,"-item-only-child"),1===(O?j+1:j)),n),h),title:"string"==typeof Z?Z:void 0}),(0,v.Tm)(O,{className:d()((0,v.l$)(O)?null===(a=O.props)||void 0===a?void 0:a.className:"","".concat(c,"-item-icon"))}),e.renderItemChildren(m)))},e}return(0,l.Z)(n,[{key:"renderItemChildren",value:function(e){var t=this.context,n=t.prefixCls,r=t.firstLevel,a=this.props,l=a.icon,o=a.children,c=i.createElement("span",{className:"".concat(n,"-title-content")},o);return(!l||(0,v.l$)(o)&&"span"===o.type)&&o&&e&&r&&"string"==typeof o?i.createElement("div",{className:"".concat(n,"-inline-collapsed-noicon")},o.charAt(0)):c}},{key:"render",value:function(){return i.createElement(E.D.Consumer,null,this.renderItem)}}]),n}(i.Component);x.contextType=f;var Z=n(6032),O=n(1687),N=n(3603),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},S=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(e){var l;return(0,a.Z)(this,n),(l=t.call(this,e)).renderMenu=function(e){var t=e.getPopupContainer,n=e.getPrefixCls,a=e.direction,o=n(),c=l.props,u=c.prefixCls,h=c.className,y=c.theme,g=c.expandIcon,b=w(c,["prefixCls","className","theme","expandIcon"]),E=(0,m.Z)(b,["siderCollapsed","collapsedWidth"]),C=l.getInlineCollapsed(),x={horizontal:{motionName:"".concat(o,"-slide-up")},inline:N.Z,other:{motionName:"".concat(o,"-zoom-big")}},Z=n("menu",u),O=d()("".concat(Z,"-").concat(y),h);return i.createElement(f.Provider,{value:{prefixCls:Z,inlineCollapsed:C||!1,antdMenuTheme:y,direction:a,firstLevel:!0}},i.createElement(s.ZP,(0,r.Z)({getPopupContainer:t,overflowedIndicator:i.createElement(p.Z,null),overflowedIndicatorPopupClassName:"".concat(Z,"-").concat(y)},E,{inlineCollapsed:C,className:O,prefixCls:Z,direction:a,defaultMotions:x,expandIcon:(0,v.Tm)(g,{className:"".concat(Z,"-submenu-expand-icon")})})))},(0,O.Z)(!("inlineCollapsed"in e&&"inline"!==e.mode),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),(0,O.Z)(!(void 0!==e.siderCollapsed&&"inlineCollapsed"in e),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),l}return(0,l.Z)(n,[{key:"getInlineCollapsed",value:function(){var e=this.props,t=e.inlineCollapsed,n=e.siderCollapsed;return void 0!==n?n:t}},{key:"render",value:function(){return i.createElement(Z.C,null,this.renderMenu)}}]),n}(i.Component);S.defaultProps={theme:"light"};var P=function(e){(0,o.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,a.Z)(this,n),t.apply(this,arguments)}return(0,l.Z)(n,[{key:"render",value:function(){var e=this;return i.createElement(E.D.Consumer,null,(function(t){return i.createElement(S,(0,r.Z)({},e.props,t))}))}}]),n}(i.Component);P.Divider=s.iz,P.Item=x,P.SubMenu=h,P.ItemGroup=s.BW;const j=P},429:(e,t,n)=>{n(2779),n(1364)},9650:(e,t,n)=>{n.d(t,{u:()=>f,Z:()=>h});var r=n(2122),a=n(6156),l=n(8481),o=n(7294),c=n(4184),i=n.n(c),s=n(344),u=n(6032);function d(e){var t=e.className,n=e.direction,l=e.index,c=e.marginDirection,i=e.children,s=e.split,u=e.wrap,d=o.useContext(f),m=d.horizontalSize,p=d.verticalSize,v=d.latestIndex,h={};return d.supportFlexGap||("vertical"===n?l<v&&(h={marginBottom:m/(s?2:1)}):h=(0,r.Z)((0,r.Z)({},l<v&&(0,a.Z)({},c,m/(s?2:1))),u&&{paddingBottom:p})),null==i?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:h},i),l<v&&s&&o.createElement("span",{className:"".concat(t,"-split"),style:h},s))}var m=n(3732),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},f=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24};const h=function(e){var t,n=o.useContext(u.E_),c=n.getPrefixCls,h=n.space,y=n.direction,g=e.size,b=void 0===g?(null==h?void 0:h.size)||"small":g,E=e.align,C=e.className,x=e.children,Z=e.direction,O=void 0===Z?"horizontal":Z,N=e.prefixCls,w=e.split,S=e.style,P=e.wrap,j=void 0!==P&&P,k=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),z=(0,m.Z)(),_=o.useMemo((function(){return(Array.isArray(b)?b:[b,b]).map((function(e){return function(e){return"string"==typeof e?v[e]:e||0}(e)}))}),[b]),M=(0,l.Z)(_,2),I=M[0],A=M[1],R=(0,s.Z)(x,{keepEmpty:!0}),L=void 0===E&&"horizontal"===O?"center":E,H=c("space",N),T=i()(H,"".concat(H,"-").concat(O),(t={},(0,a.Z)(t,"".concat(H,"-rtl"),"rtl"===y),(0,a.Z)(t,"".concat(H,"-align-").concat(L),L),t),C),B="".concat(H,"-item"),D="rtl"===y?"marginLeft":"marginRight",V=0,F=R.map((function(e,t){return null!=e&&(V=t),o.createElement(d,{className:B,key:"".concat(B,"-").concat(t),direction:O,index:t,marginDirection:D,split:w,wrap:j},e)})),W=o.useMemo((function(){return{horizontalSize:I,verticalSize:A,latestIndex:V,supportFlexGap:z}}),[I,A,V,z]);if(0===R.length)return null;var G={};return j&&(G.flexWrap="wrap",z||(G.marginBottom=-A)),z&&(G.columnGap=I,G.rowGap=A),o.createElement("div",(0,r.Z)({className:T,style:(0,r.Z)((0,r.Z)({},G),S)},k),o.createElement(f.Provider,{value:W},F))}},9218:(e,t,n)=>{n(2779)},331:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(6156),a=n(2122),l=n(8481),o=n(7294),c=n(4184),i=n.n(c),s=n(8423),u=n(4549),d=n(6032),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const p=function(e){var t,n=e.prefixCls,l=e.className,c=e.checked,s=e.onChange,u=e.onClick,p=m(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,o.useContext(d.E_).getPrefixCls)("tag",n),v=i()(f,(t={},(0,r.Z)(t,"".concat(f,"-checkable"),!0),(0,r.Z)(t,"".concat(f,"-checkable-checked"),c),t),l);return o.createElement("span",(0,a.Z)({},p,{className:v,onClick:function(e){null==s||s(!c),null==u||u(e)}}))};var f=n(8787),v=n(1790),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(f.E.join("|"),")$")),b=function(e,t){var n,c=e.prefixCls,m=e.className,p=e.style,f=e.children,b=e.icon,E=e.color,C=e.onClose,x=e.closeIcon,Z=e.closable,O=void 0!==Z&&Z,N=h(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=o.useContext(d.E_),S=w.getPrefixCls,P=w.direction,j=o.useState(!0),k=(0,l.Z)(j,2),z=k[0],_=k[1];o.useEffect((function(){"visible"in N&&_(N.visible)}),[N.visible]);var M=function(){return!!E&&(y.test(E)||g.test(E))},I=(0,a.Z)({backgroundColor:E&&!M()?E:void 0},p),A=M(),R=S("tag",c),L=i()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(E),A),(0,r.Z)(n,"".concat(R,"-has-color"),E&&!A),(0,r.Z)(n,"".concat(R,"-hidden"),!z),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===P),n),m),H=function(e){e.stopPropagation(),null==C||C(e),e.defaultPrevented||"visible"in N||_(!1)},T="onClick"in N||f&&"a"===f.type,B=(0,s.Z)(N,["visible"]),D=b||null,V=D?o.createElement(o.Fragment,null,D,o.createElement("span",null,f)):f,F=o.createElement("span",(0,a.Z)({},B,{ref:t,className:L,style:I}),V,O?x?o.createElement("span",{className:"".concat(R,"-close-icon"),onClick:H},x):o.createElement(u.Z,{className:"".concat(R,"-close-icon"),onClick:H}):null);return T?o.createElement(v.Z,null,F):F},E=o.forwardRef(b);E.displayName="Tag",E.CheckableTag=p;const C=E},3467:(e,t,n)=>{n(2779)},1888:(e,t,n)=>{n.d(t,{Z:()=>U});n(6562);var r=n(7183),a=n(7294),l=n(4142),o=n(8014),c=(n(2779),n(429),n(8899),n(2122)),i=n(6156),s=n(5061),u=n(4184),d=n.n(u),m=n(344),p=n(7254),f=n(1555),v=n(6032),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=function(e){var t,n,r=e.prefixCls,l=e.separator,o=void 0===l?"/":l,i=e.children,s=e.overlay,u=e.dropdownProps,d=h(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,a.useContext(v.E_).getPrefixCls)("breadcrumb",r);return t="href"in d?a.createElement("a",(0,c.Z)({className:"".concat(m,"-link")},d),i):a.createElement("span",(0,c.Z)({className:"".concat(m,"-link")},d),i),n=t,t=s?a.createElement(f.Z,(0,c.Z)({overlay:s,placement:"bottomCenter"},u),a.createElement("span",{className:"".concat(m,"-overlay-link")},n,a.createElement(p.Z,null))):n,i?a.createElement("span",null,t,o&&a.createElement("span",{className:"".concat(m,"-separator")},o)):null};y.__ANT_BREADCRUMB_ITEM=!0;const g=y;var b=function(e){var t=e.children,n=(0,a.useContext(v.E_).getPrefixCls)("breadcrumb");return a.createElement("span",{className:"".concat(n,"-separator")},t||"/")};b.__ANT_BREADCRUMB_SEPARATOR=!0;const E=b;var C=n(9210),x=n(1687),Z=n(6159),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function N(e,t,n,r){var l=n.indexOf(e)===n.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return l?a.createElement("span",null,o):a.createElement("a",{href:"#/".concat(r.join("/"))},o)}var w=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},S=function(e){var t,n=e.prefixCls,r=e.separator,l=void 0===r?"/":r,o=e.style,u=e.className,p=e.routes,f=e.children,h=e.itemRender,y=void 0===h?N:h,b=e.params,E=void 0===b?{}:b,S=O(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=a.useContext(v.E_),j=P.getPrefixCls,k=P.direction,z=j("breadcrumb",n);if(p&&p.length>0){var _=[];t=p.map((function(e){var t,n=w(e.path,E);return n&&_.push(n),e.children&&e.children.length&&(t=a.createElement(C.Z,null,e.children.map((function(e){return a.createElement(C.Z.Item,{key:e.path||e.breadcrumbName},y(e,E,p,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=(0,s.Z)(e),a=w(t,n);return a&&r.push(a),r}(_,e.path,E)))})))),a.createElement(g,{overlay:t,separator:l,key:n||e.breadcrumbName},y(e,E,p,_))}))}else f&&(t=(0,m.Z)(f).map((function(e,t){return e?((0,x.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,Z.Tm)(e,{separator:l,key:t})):e})));var M=d()(z,(0,i.Z)({},"".concat(z,"-rtl"),"rtl"===k),u);return a.createElement("div",(0,c.Z)({className:M,style:o},S),t)};S.Item=g,S.Separator=E;const P=S;var j=function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return Array.isArray(n)&&(t=n.find((function(t){return t.path===r||e(t.routes,r)}))),t},k=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return Array.isArray(n)&&n.forEach((function(n){n.path===r?t.push({path:n.path,name:n.name}):(t.push({path:n.path,name:n.name}),e(t,j(n.routes,r)?[j(n.routes,r)]:[],r))})),t},z=n(5977),_=n(6854);const M={breadcrumb:"pages-layout-proContent-breadcrumb-index-module__breadcrumb--_o88_"};function I(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const H=function(){var e=(0,z.TH)().pathname,t=(0,z.k6)(),n=A((0,a.useState)([]),2),r=n[0],l=n[1];(0,a.useEffect)((function(){var t=k([],j(_.Z,e)?[j(_.Z,e)]:[],e);l(I(t))}),[e]);return a.createElement(a.Fragment,null,a.createElement(P,{separator:"/"},r.map((function(e,n){return n!==r.length?a.createElement(P.Item,{className:M.breadcrumb,key:e.path,onClick:function(){return n=e.path,void t.push(n);var n}},e.name):a.createElement(P.Item,{className:M.lastBreadcrumb,key:e.path},e.name)}))))},T="pages-layout-proContent-index-module__layout--37beT",B="pages-layout-proContent-index-module__header--LPAae",D="pages-layout-proContent-index-module__content--27JT-",V="pages-layout-proContent-index-module__container--3QOtG",F="pages-layout-proContent-index-module__footer--1ttTC";function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G=r.Z.Content,$=r.Z.Header;const U=function(e){var t=e.routes,n=void 0===t?[]:t;return a.createElement(r.Z,{className:T},a.createElement($,{className:B},a.createElement(H,null)),a.createElement(G,{className:D},a.createElement("div",{className:V},a.createElement(l.Z,null,n.map((function(e,t){return a.createElement(o.Z,W({key:t},e))})))),a.createElement("div",{className:F},"Copyright © 2020-",(new Date).getFullYear()," 上海科技有限公司")))}},5101:(e,t,n)=>{n.d(t,{Z:()=>_});n(6562);var r=n(7183);n(8899);const a=n(1555).Z;n(429);var l=n(9210),o=(n(9218),n(9650)),c=(n(3467),n(331)),i=n(7294);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"};var u=n(76),d=function(e,t){return i.createElement(u.Z,Object.assign({},e,{ref:t,icon:s}))};d.displayName="BellOutlined";const m=i.forwardRef(d);const p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var f=function(e,t){return i.createElement(u.Z,Object.assign({},e,{ref:t,icon:p}))};f.displayName="UserOutlined";const v=i.forwardRef(f);const h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"};var y=function(e,t){return i.createElement(u.Z,Object.assign({},e,{ref:t,icon:h}))};y.displayName="SettingOutlined";const g=i.forwardRef(y);const b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"};var E=function(e,t){return i.createElement(u.Z,Object.assign({},e,{ref:t,icon:b}))};E.displayName="LogoutOutlined";const C=i.forwardRef(E);var x=n(5977);const Z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"code",theme:"outlined"};var O=function(e,t){return i.createElement(u.Z,Object.assign({},e,{ref:t,icon:Z}))};O.displayName="CodeOutlined";const N=i.forwardRef(O);const w=function(){var e=(0,x.k6)();return i.createElement(l.Z,{mode:"horizontal",defaultSelectedKeys:["mail"]},i.createElement(l.Z.Item,{key:"mail",icon:i.createElement(N,null),onClick:function(){return t="/basis",void e.push(t);var t}},"活动组件库"))},S="pages-layout-proHeader-index-module__header--2w94Z",P="pages-layout-proHeader-index-module__logo--1kM1M",j="pages-layout-proHeader-index-module__headerMeta--2amY-",k="pages-layout-proHeader-index-module__headerMenu--2fQcH",z="pages-layout-proHeader-index-module__headerRight--1H3EX";const _=function(){var e=(0,x.k6)(),t=function(t){e.push(t)};return i.createElement(r.Z.Header,{className:S},i.createElement("div",{className:P,onClick:function(){return t("/")}},"Pro React ",i.createElement(c.Z,{color:"cyan"},"Production")),i.createElement("div",{className:j},i.createElement("div",{className:k},i.createElement(w,null)),i.createElement("div",{className:z},i.createElement(o.Z,{direction:"horizontal",style:{cursor:"pointer",paddingRight:8}},i.createElement(m,{style:{fontSize:18}})),i.createElement(a,{arrow:!0,overlay:i.createElement(l.Z,null,i.createElement(l.Z.Item,{key:"1",icon:i.createElement(v,null),onClick:function(){return t("/profile")}},"个人中心"),i.createElement(l.Z.Item,{key:"2",icon:i.createElement(g,null),onClick:function(){return t("/setting")}},"个人设置"),i.createElement(l.Z.Divider,null),i.createElement(l.Z.Item,{key:"3",icon:i.createElement(C,null),onClick:function(){return t("/signin")}},"退出登录"))},i.createElement(o.Z,{direction:"horizontal",style:{cursor:"pointer"}},i.createElement(v,{style:{fontSize:18}}),i.createElement("span",null,"Admin"))))))}},72:(e,t,n)=>{n.d(t,{Z:()=>h});n(6562);var r=n(7183),a=n(7294);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"};var o=n(76),c=function(e,t){return a.createElement(o.Z,Object.assign({},e,{ref:t,icon:l}))};c.displayName="MenuUnfoldOutlined";const i=a.forwardRef(c);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"}}]},name:"menu-fold",theme:"outlined"};var u=function(e,t){return a.createElement(o.Z,Object.assign({},e,{ref:t,icon:s}))};u.displayName="MenuFoldOutlined";const d=a.forwardRef(u),m="pages-layout-proSider-index-module__sider--3zA7e",p="pages-layout-proSider-index-module__proLink--o3MLl";function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const h=function(e){var t=f((0,a.useState)(!1),2),n=t[0],l=t[1];return a.createElement(r.Z.Sider,{width:208,collapsedWidth:80,theme:"dark",collapsible:!0,collapsed:n,trigger:null,className:m},e.children,a.createElement("div",{className:p,onClick:function(){l(!n)}},n?a.createElement(i,{style:{fontSize:"16px",color:"#08c",cursor:"pointer"}}):a.createElement(d,{style:{fontSize:"18px",color:"#08c",cursor:"pointer"}})))}}}]);