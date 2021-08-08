/*! For license information please see 249.3e7ea0928882f95e5a73.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_web=self.webpackChunkreact_web||[]).push([[249],{9214:(e,t,n)=>{n.d(t,{Z:()=>U});var r=n(2122),a=n(8991),i=n(8481),s=n(1253),c=n(7294),l=n(4184),o=n.n(l),u=n(4084),E=void 0;function N(e,t){var n=e.prefixCls,i=e.invalidate,l=e.item,N=e.renderItem,f=e.responsive,m=e.registerSize,d=e.itemKey,S=e.className,v=e.style,_=e.children,I=e.display,M=e.order,R=e.component,A=void 0===R?"div":R,C=(0,s.Z)(e,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),T=f&&!I;function U(e){m(d,e)}c.useEffect((function(){return function(){U(null)}}),[]);var O,p=N&&l!==E?N(l):_;i||(O={opacity:T?0:1,height:T?0:E,overflowY:T?"hidden":E,order:f?M:E,pointerEvents:T?"none":E,position:T?"absolute":E});var Z={};T&&(Z["aria-hidden"]=!0);var y=c.createElement(A,(0,r.Z)({className:o()(!i&&n,S),style:(0,a.Z)((0,a.Z)({},O),v)},Z,C,{ref:t}),p);return f&&(y=c.createElement(u.Z,{onResize:function(e){U(e.offsetWidth)}},y)),y}var f=c.forwardRef(N);f.displayName="Item";const m=f;var d=n(5164);var S=function(e,t){var n=c.useContext(I);if(!n){var a=e.component,i=void 0===a?"div":a,l=(0,s.Z)(e,["component"]);return c.createElement(i,(0,r.Z)({},l,{ref:t}))}var u=n.className,E=(0,s.Z)(n,["className"]),N=e.className,f=(0,s.Z)(e,["className"]);return c.createElement(I.Provider,{value:null},c.createElement(m,(0,r.Z)({ref:t,className:o()(u,N)},E,f)))},v=c.forwardRef(S);v.displayName="RawItem";const _=v;var I=c.createContext(null),M="responsive",R="invalidate";function A(e){return"+ ".concat(e.length," ...")}function C(e,t){var n=e.prefixCls,l=void 0===n?"rc-overflow":n,E=e.data,N=void 0===E?[]:E,f=e.renderItem,S=e.renderRawItem,v=e.itemKey,_=e.itemWidth,C=void 0===_?10:_,T=e.ssr,U=e.style,O=e.className,p=e.maxCount,Z=e.renderRest,y=e.renderRawRest,P=e.suffix,L=e.component,K=void 0===L?"div":L,h=e.itemComponent,F=e.onVisibleChange,g=(0,s.Z)(e,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),w=function(){var e=(0,c.useState)({}),t=(0,i.Z)(e,2)[1],n=(0,c.useRef)([]),r=(0,c.useRef)(!1),a=0,s=0;return(0,c.useEffect)((function(){return function(){r.current=!0}}),[]),function(e){var i=a;return a+=1,n.current.length<i+1&&(n.current[i]=e),[n.current[i],function(e){n.current[i]="function"==typeof e?e(n.current[i]):e,d.Z.cancel(s),s=(0,d.Z)((function(){r.current||t({})}))}]}}(),H="full"===T,b=w(null),D=(0,i.Z)(b,2),W=D[0],x=D[1],G=W||0,k=w(new Map),Q=(0,i.Z)(k,2),V=Q[0],B=Q[1],z=w(0),Y=(0,i.Z)(z,2),X=Y[0],J=Y[1],j=w(0),q=(0,i.Z)(j,2),$=q[0],ee=q[1],te=w(0),ne=(0,i.Z)(te,2),re=ne[0],ae=ne[1],ie=(0,c.useState)(null),se=(0,i.Z)(ie,2),ce=se[0],le=se[1],oe=(0,c.useState)(null),ue=(0,i.Z)(oe,2),Ee=ue[0],Ne=ue[1],fe=c.useMemo((function(){return null===Ee&&H?Number.MAX_SAFE_INTEGER:Ee||0}),[Ee,W]),me=(0,c.useState)(!1),de=(0,i.Z)(me,2),Se=de[0],ve=de[1],_e="".concat(l,"-item"),Ie=Math.max(X,$),Me=N.length&&p===M,Re=p===R,Ae=Me||"number"==typeof p&&N.length>p,Ce=(0,c.useMemo)((function(){var e=N;return Me?e=null===W&&H?N:N.slice(0,Math.min(N.length,G/C)):"number"==typeof p&&(e=N.slice(0,p)),e}),[N,C,W,p,Me]),Te=(0,c.useMemo)((function(){return Me?N.slice(fe+1):N.slice(Ce.length)}),[N,Ce,Me,fe]),Ue=(0,c.useCallback)((function(e,t){var n;return"function"==typeof v?v(e):null!==(n=v&&(null==e?void 0:e[v]))&&void 0!==n?n:t}),[v]),Oe=(0,c.useCallback)(f||function(e){return e},[f]);function pe(e,t){Ne(e),t||(ve(e<N.length-1),null==F||F(e))}function Ze(e,t){B((function(n){var r=new Map(n);return null===t?r.delete(e):r.set(e,t),r}))}function ye(e){return V.get(Ue(Ce[e],e))}c.useLayoutEffect((function(){if(G&&Ie&&Ce){var e=re,t=Ce.length,n=t-1;if(!t)return pe(0),void le(null);for(var r=0;r<t;r+=1){var a=ye(r);if(void 0===a){pe(r-1,!0);break}if(e+=a,0===n&&e<=G||r===n-1&&e+ye(n)<=G){pe(n),le(null);break}if(e+Ie>G){pe(r-1),le(e-a-re+$);break}}P&&ye(0)+re>G&&le(null)}}),[G,V,$,re,Ue,Ce]);var Pe=Se&&!!Te.length,Le={};null!==ce&&Me&&(Le={position:"absolute",left:ce,top:0});var Ke,he={prefixCls:_e,responsive:Me,component:h,invalidate:Re},Fe=S?function(e,t){var n=Ue(e,t);return c.createElement(I.Provider,{key:n,value:(0,a.Z)((0,a.Z)({},he),{},{order:t,item:e,itemKey:n,registerSize:Ze,display:t<=fe})},S(e,t))}:function(e,t){var n=Ue(e,t);return c.createElement(m,(0,r.Z)({},he,{order:t,key:n,item:e,renderItem:Oe,itemKey:n,registerSize:Ze,display:t<=fe}))},ge={order:Pe?fe:Number.MAX_SAFE_INTEGER,className:"".concat(_e,"-rest"),registerSize:function(e,t){ee(t),J($)},display:Pe};if(y)y&&(Ke=c.createElement(I.Provider,{value:(0,a.Z)((0,a.Z)({},he),ge)},y(Te)));else{var we=Z||A;Ke=c.createElement(m,(0,r.Z)({},he,ge),"function"==typeof we?we(Te):we)}var He=c.createElement(K,(0,r.Z)({className:o()(!Re&&l,O),style:U,ref:t},g),Ce.map(Fe),Ae?Ke:null,P&&c.createElement(m,(0,r.Z)({},he,{order:fe,className:"".concat(_e,"-suffix"),registerSize:function(e,t){ae(t)},display:!0,style:Le}),P));return Me&&(He=c.createElement(u.Z,{onResize:function(e,t){x(t.clientWidth)}},He)),He}var T=c.forwardRef(C);T.displayName="Overflow",T.Item=_,T.RESPONSIVE=M,T.INVALIDATE=R;const U=T},5105:(e,t,n)=>{n.d(t,{Z:()=>a});var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const a=r}}]);