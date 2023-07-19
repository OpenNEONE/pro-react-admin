(self.webpackChunkpro_react_admin=self.webpackChunkpro_react_admin||[]).push([[670],{59542:function(Pt){(function(G,F){Pt.exports=F()})(this,function(){"use strict";var G="day";return function(F,vt,C){var ot=function(v){return v.add(4-v.isoWeekday(),G)},j=vt.prototype;j.isoWeekYear=function(){return ot(this).year()},j.isoWeek=function(v){if(!this.$utils().u(v))return this.add(7*(v-this.isoWeek()),G);var b,Z,W,$,O=ot(this),tt=(b=this.isoWeekYear(),Z=this.$u,W=(Z?C.utc:C)().year(b).startOf("year"),$=4-W.isoWeekday(),W.isoWeekday()>4&&($+=7),W.add($,G));return O.diff(tt,"week")+1},j.isoWeekday=function(v){return this.$utils().u(v)?this.day()||7:this.day(this.day()%7?v:v-7)};var Tt=j.startOf;j.startOf=function(v,b){var Z=this.$utils(),W=!!Z.u(b)||b;return Z.p(v)==="isoweek"?W?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Tt.bind(this)(v,b)}}})},60670:function(Pt,G,F){"use strict";F.d(G,{diagram:function(){return Ae}});var vt=F(17967),C=F(27484),ot=F(59542),j=F(10285),Tt=F(28734),v=F(15581),b=F(61491),Z=F(27856),W=function(){var t=function(m,c,o,f){for(o=o||{},f=m.length;f--;o[m[f]]=c);return o},u=[1,3],s=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],n=[1,15],h=[1,16],d=[1,17],L=[1,18],A=[1,19],nt=[1,20],R=[1,21],P=[1,22],K=[1,23],U=[1,24],B=[1,25],_=[1,26],dt=[1,27],ht=[1,29],mt=[1,31],kt=[1,34],yt=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],rt={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(c,o,f,r,k,e,x){var a=e.length-1;switch(k){case 2:return e[a-1];case 3:this.$=[];break;case 4:e[a-1].push(e[a]),this.$=e[a-1];break;case 5:case 6:this.$=e[a];break;case 7:case 8:this.$=[];break;case 9:r.setDateFormat(e[a].substr(11)),this.$=e[a].substr(11);break;case 10:r.enableInclusiveEndDates(),this.$=e[a].substr(18);break;case 11:r.TopAxis(),this.$=e[a].substr(8);break;case 12:r.setAxisFormat(e[a].substr(11)),this.$=e[a].substr(11);break;case 13:r.setTickInterval(e[a].substr(13)),this.$=e[a].substr(13);break;case 14:r.setExcludes(e[a].substr(9)),this.$=e[a].substr(9);break;case 15:r.setIncludes(e[a].substr(9)),this.$=e[a].substr(9);break;case 16:r.setTodayMarker(e[a].substr(12)),this.$=e[a].substr(12);break;case 17:r.setDiagramTitle(e[a].substr(6)),this.$=e[a].substr(6);break;case 18:this.$=e[a].trim(),r.setAccTitle(this.$);break;case 19:case 20:this.$=e[a].trim(),r.setAccDescription(this.$);break;case 21:r.addSection(e[a].substr(8)),this.$=e[a].substr(8);break;case 23:r.addTask(e[a-1],e[a]),this.$="task";break;case 27:this.$=e[a-1],r.setClickEvent(e[a-1],e[a],null);break;case 28:this.$=e[a-2],r.setClickEvent(e[a-2],e[a-1],e[a]);break;case 29:this.$=e[a-2],r.setClickEvent(e[a-2],e[a-1],null),r.setLink(e[a-2],e[a]);break;case 30:this.$=e[a-3],r.setClickEvent(e[a-3],e[a-2],e[a-1]),r.setLink(e[a-3],e[a]);break;case 31:this.$=e[a-2],r.setClickEvent(e[a-2],e[a],null),r.setLink(e[a-2],e[a-1]);break;case 32:this.$=e[a-3],r.setClickEvent(e[a-3],e[a-1],e[a]),r.setLink(e[a-3],e[a-2]);break;case 33:this.$=e[a-1],r.setLink(e[a-1],e[a]);break;case 34:case 40:this.$=e[a-1]+" "+e[a];break;case 35:case 36:case 38:this.$=e[a-2]+" "+e[a-1]+" "+e[a];break;case 37:case 39:this.$=e[a-3]+" "+e[a-2]+" "+e[a-1]+" "+e[a];break;case 41:r.parseDirective("%%{","open_directive");break;case 42:r.parseDirective(e[a],"type_directive");break;case 43:e[a]=e[a].trim().replace(/'/g,'"'),r.parseDirective(e[a],"arg_directive");break;case 44:r.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:u,30:4,40:s},{1:[3]},{3:6,4:2,5:u,30:4,40:s},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:n,13:h,14:d,15:L,16:A,17:nt,18:R,19:P,20:K,21:U,23:B,25:_,26:dt,27:28,28:ht,30:4,35:mt,40:s},{32:32,33:[1,33],43:kt},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:n,13:h,14:d,15:L,16:A,17:nt,18:R,19:P,20:K,21:U,23:B,25:_,26:dt,27:28,28:ht,30:4,35:mt,40:s},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t(yt,[2,25]),{32:47,43:kt},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t(yt,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(c,o){if(o.recoverable)this.trace(c);else{var f=new Error(c);throw f.hash=o,f}},parse:function(c){var o=this,f=[0],r=[],k=[null],e=[],x=this.table,a="",I=0,M=0,ct=2,l=1,y=e.slice.call(arguments,1),g=Object.create(this.lexer),p={yy:{}};for(var T in this.yy)Object.prototype.hasOwnProperty.call(this.yy,T)&&(p.yy[T]=this.yy[T]);g.setInput(c,p.yy),p.yy.lexer=g,p.yy.parser=this,typeof g.yylloc=="undefined"&&(g.yylloc={});var w=g.yylloc;e.push(w);var E=g.options&&g.options.ranges;typeof p.yy.parseError=="function"?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Mt(){var N;return N=r.pop()||g.lex()||l,typeof N!="number"&&(N instanceof Array&&(r=N,N=r.pop()),N=o.symbols_[N]||N),N}for(var S,X,V,Ft,H={},gt,z,Xt,pt;;){if(X=f[f.length-1],this.defaultActions[X]?V=this.defaultActions[X]:((S===null||typeof S=="undefined")&&(S=Mt()),V=x[X]&&x[X][S]),typeof V=="undefined"||!V.length||!V[0]){var Ot="";pt=[];for(gt in x[X])this.terminals_[gt]&&gt>ct&&pt.push("'"+this.terminals_[gt]+"'");g.showPosition?Ot="Parse error on line "+(I+1)+`:
`+g.showPosition()+`
Expecting `+pt.join(", ")+", got '"+(this.terminals_[S]||S)+"'":Ot="Parse error on line "+(I+1)+": Unexpected "+(S==l?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(Ot,{text:g.match,token:this.terminals_[S]||S,line:g.yylineno,loc:w,expected:pt})}if(V[0]instanceof Array&&V.length>1)throw new Error("Parse Error: multiple actions possible at state: "+X+", token: "+S);switch(V[0]){case 1:f.push(S),k.push(g.yytext),e.push(g.yylloc),f.push(V[1]),S=null,M=g.yyleng,a=g.yytext,I=g.yylineno,w=g.yylloc;break;case 2:if(z=this.productions_[V[1]][1],H.$=k[k.length-z],H._$={first_line:e[e.length-(z||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(z||1)].first_column,last_column:e[e.length-1].last_column},E&&(H._$.range=[e[e.length-(z||1)].range[0],e[e.length-1].range[1]]),Ft=this.performAction.apply(H,[a,M,I,p.yy,V[1],k,e].concat(y)),typeof Ft!="undefined")return Ft;z&&(f=f.slice(0,-1*z*2),k=k.slice(0,-1*z),e=e.slice(0,-1*z)),f.push(this.productions_[V[1]][0]),k.push(H.$),e.push(H._$),Xt=x[f[f.length-2]][f[f.length-1]],f.push(Xt);break;case 3:return!0}}return!0}},Lt=function(){var m={EOF:1,parseError:function(o,f){if(this.yy.parser)this.yy.parser.parseError(o,f);else throw new Error(o)},setInput:function(c,o){return this.yy=o||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var o=c.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},unput:function(c){var o=c.length,f=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var k=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===r.length?this.yylloc.first_column:0)+r[r.length-f.length].length-f[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[k[0],k[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(c){this.unput(this.match.slice(c))},pastInput:function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var c=this.pastInput(),o=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+o+"^"},test_match:function(c,o){var f,r,k;if(this.options.backtrack_lexer&&(k={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(k.yylloc.range=this.yylloc.range.slice(0))),r=c[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],f=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var e in k)this[e]=k[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,o,f,r;this._more||(this.yytext="",this.match="");for(var k=this._currentRules(),e=0;e<k.length;e++)if(f=this._input.match(this.rules[k[e]]),f&&(!o||f[0].length>o[0].length)){if(o=f,r=e,this.options.backtrack_lexer){if(c=this.test_match(f,k[e]),c!==!1)return c;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(c=this.test_match(o,k[r]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var o=this.next();return o||this.lex()},begin:function(o){this.conditionStack.push(o)},popState:function(){var o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},pushState:function(o){this.begin(o)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(o,f,r,k){switch(r){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 38;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 26:this.popState();break;case 27:return 37;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return m}();rt.lexer=Lt;function at(){this.yy={}}return at.prototype=rt,rt.Parser=at,new at}();W.parser=W;const $=W;C.extend(ot),C.extend(j),C.extend(Tt);let O="",tt="",bt,xt="",et=[],it=[],_t={},Et=[],lt=[],Q="",Dt="";const Bt=["active","done","crit","milestone"];let wt=[],st=!1,Ct=!1,St=0;const Gt=function(t,u,s){v.m.parseDirective(this,t,u,s)},Zt=function(){Et=[],lt=[],Q="",wt=[],ut=0,It=void 0,ft=void 0,D=[],O="",tt="",Dt="",bt=void 0,xt="",et=[],it=[],st=!1,Ct=!1,St=0,_t={},(0,v.v)()},Qt=function(t){tt=t},qt=function(){return tt},Jt=function(t){bt=t},Ht=function(){return bt},$t=function(t){xt=t},te=function(){return xt},ee=function(t){O=t},ie=function(){st=!0},se=function(){return st},ne=function(){Ct=!0},re=function(){return Ct},ae=function(t){Dt=t},ce=function(){return Dt},oe=function(){return O},le=function(t){et=t.toLowerCase().split(/[\s,]+/)},ue=function(){return et},fe=function(t){it=t.toLowerCase().split(/[\s,]+/)},de=function(){return it},he=function(){return _t},me=function(t){Q=t,Et.push(t)},ke=function(){return Et},ye=function(){let t=Nt();const u=10;let s=0;for(;!t&&s<u;)t=Nt(),s++;return lt=D,lt},Vt=function(t,u,s,i){return i.includes(t.format(u.trim()))?!1:t.isoWeekday()>=6&&s.includes("weekends")||s.includes(t.format("dddd").toLowerCase())?!0:s.includes(t.format(u.trim()))},Rt=function(t,u,s,i){if(!s.length||t.manualEndTime)return;let n;t.startTime instanceof Date?n=C(t.startTime):n=C(t.startTime,u,!0),n=n.add(1,"d");let h;t.endTime instanceof Date?h=C(t.endTime):h=C(t.endTime,u,!0);const[d,L]=ge(n,h,u,s,i);t.endTime=d.toDate(),t.renderEndTime=L},ge=function(t,u,s,i,n){let h=!1,d=null;for(;t<=u;)h||(d=u.toDate()),h=Vt(t,s,i,n),h&&(u=u.add(1,"d")),t=t.add(1,"d");return[u,d]},At=function(t,u,s){s=s.trim();const n=/^after\s+([\d\w- ]+)/.exec(s.trim());if(n!==null){let d=null;if(n[1].split(" ").forEach(function(L){let A=J(L);A!==void 0&&(d?A.endTime>d.endTime&&(d=A):d=A)}),d)return d.endTime;{const L=new Date;return L.setHours(0,0,0,0),L}}let h=C(s,u.trim(),!0);if(h.isValid())return h.toDate();{v.l.debug("Invalid date:"+s),v.l.debug("With date format:"+u.trim());const d=new Date(s);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+s);return d}},Wt=function(t){const u=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return u!==null?[Number.parseFloat(u[1]),u[2]]:[NaN,"ms"]},Yt=function(t,u,s,i=!1){s=s.trim();let n=C(s,u.trim(),!0);if(n.isValid())return i&&(n=n.add(1,"d")),n.toDate();let h=C(t);const[d,L]=Wt(s);if(!Number.isNaN(d)){const A=h.add(d,L);A.isValid()&&(h=A)}return h.toDate()};let ut=0;const q=function(t){return t===void 0?(ut=ut+1,"task"+ut):t},pe=function(t,u){let s;u.substr(0,1)===":"?s=u.substr(1,u.length):s=u;const i=s.split(","),n={};Kt(i,n,Bt);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let h="";switch(i.length){case 1:n.id=q(),n.startTime=t.endTime,h=i[0];break;case 2:n.id=q(),n.startTime=At(void 0,O,i[0]),h=i[1];break;case 3:n.id=q(i[0]),n.startTime=At(void 0,O,i[1]),h=i[2];break}return h&&(n.endTime=Yt(n.startTime,O,h,st),n.manualEndTime=C(h,"YYYY-MM-DD",!0).isValid(),Rt(n,O,it,et)),n},ve=function(t,u){let s;u.substr(0,1)===":"?s=u.substr(1,u.length):s=u;const i=s.split(","),n={};Kt(i,n,Bt);for(let h=0;h<i.length;h++)i[h]=i[h].trim();switch(i.length){case 1:n.id=q(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=q(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=q(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]};break}return n};let It,ft,D=[];const zt={},Te=function(t,u){const s={section:Q,type:Q,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:u},task:t,classes:[]},i=ve(ft,u);s.raw.startTime=i.startTime,s.raw.endTime=i.endTime,s.id=i.id,s.prevTaskId=ft,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,s.order=St,St++;const n=D.push(s);ft=s.id,zt[s.id]=n-1},J=function(t){const u=zt[t];return D[u]},be=function(t,u){const s={section:Q,type:Q,description:t,task:t,classes:[]},i=pe(It,u);s.startTime=i.startTime,s.endTime=i.endTime,s.id=i.id,s.active=i.active,s.done=i.done,s.crit=i.crit,s.milestone=i.milestone,It=s,lt.push(s)},Nt=function(){const t=function(s){const i=D[s];let n="";switch(D[s].raw.startTime.type){case"prevTaskEnd":{const h=J(i.prevTaskId);i.startTime=h.endTime;break}case"getStartDate":n=At(void 0,O,D[s].raw.startTime.startData),n&&(D[s].startTime=n);break}return D[s].startTime&&(D[s].endTime=Yt(D[s].startTime,O,D[s].raw.endTime.data,st),D[s].endTime&&(D[s].processed=!0,D[s].manualEndTime=C(D[s].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Rt(D[s],O,it,et))),D[s].processed};let u=!0;for(const[s,i]of D.entries())t(s),u=u&&i.processed;return u},xe=function(t,u){let s=u;(0,v.c)().securityLevel!=="loose"&&(s=(0,vt.N)(u)),t.split(",").forEach(function(i){J(i)!==void 0&&(jt(i,()=>{window.open(s,"_self")}),_t[i]=s)}),Ut(t,"clickable")},Ut=function(t,u){t.split(",").forEach(function(s){let i=J(s);i!==void 0&&i.classes.push(u)})},_e=function(t,u,s){if((0,v.c)().securityLevel!=="loose"||u===void 0)return;let i=[];if(typeof s=="string"){i=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<i.length;h++){let d=i[h].trim();d.charAt(0)==='"'&&d.charAt(d.length-1)==='"'&&(d=d.substr(1,d.length-2)),i[h]=d}}i.length===0&&i.push(t),J(t)!==void 0&&jt(t,()=>{v.u.runFunc(u,...i)})},jt=function(t,u){wt.push(function(){const s=document.querySelector(`[id="${t}"]`);s!==null&&s.addEventListener("click",function(){u()})},function(){const s=document.querySelector(`[id="${t}-text"]`);s!==null&&s.addEventListener("click",function(){u()})})},Ee=function(t,u,s){t.split(",").forEach(function(i){_e(i,u,s)}),Ut(t,"clickable")},De=function(t){wt.forEach(function(u){u(t)})},we={parseDirective:Gt,getConfig:()=>(0,v.c)().gantt,clear:Zt,setDateFormat:ee,getDateFormat:oe,enableInclusiveEndDates:ie,endDatesAreInclusive:se,enableTopAxis:ne,topAxisEnabled:re,setAxisFormat:Qt,getAxisFormat:qt,setTickInterval:Jt,getTickInterval:Ht,setTodayMarker:$t,getTodayMarker:te,setAccTitle:v.s,getAccTitle:v.g,setDiagramTitle:v.r,getDiagramTitle:v.t,setDisplayMode:ae,getDisplayMode:ce,setAccDescription:v.b,getAccDescription:v.a,addSection:me,getSections:ke,getTasks:ye,addTask:Te,findTaskById:J,addTaskOrg:be,setIncludes:le,getIncludes:ue,setExcludes:fe,getExcludes:de,setClickEvent:Ee,setLink:xe,getLinks:he,bindFunctions:De,parseDuration:Wt,isInvalidDate:Vt};function Kt(t,u,s){let i=!0;for(;i;)i=!1,s.forEach(function(n){const h="^\\s*"+n+"\\s*$",d=new RegExp(h);t[0].match(d)&&(u[n]=!0,t.shift(1),i=!0)})}const Ce=function(){v.l.debug("Something is calling, setConf, remove the call")},Se=(t,u)=>{let s=[...t].map(()=>-1/0),i=[...t].sort((h,d)=>h.startTime-d.startTime||h.order-d.order),n=0;for(const h of i)for(let d=0;d<s.length;d++)if(h.startTime>=s[d]){s[d]=h.endTime,h.order=d+u,d>n&&(n=d);break}return n};let Y;const Ae={parser:$,db:we,renderer:{setConf:Ce,draw:function(t,u,s,i){const n=(0,v.c)().gantt,h=(0,v.c)().securityLevel;let d;h==="sandbox"&&(d=(0,b.Ys)("#i"+u));const L=h==="sandbox"?(0,b.Ys)(d.nodes()[0].contentDocument.body):(0,b.Ys)("body"),A=h==="sandbox"?d.nodes()[0].contentDocument:document,nt=A.getElementById(u);Y=nt.parentElement.offsetWidth,Y===void 0&&(Y=1200),n.useWidth!==void 0&&(Y=n.useWidth);const R=i.db.getTasks();let P=[];for(const m of R)P.push(m.type);P=at(P);const K={};let U=2*n.topPadding;if(i.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const m={};for(const o of R)m[o.section]===void 0?m[o.section]=[o]:m[o.section].push(o);let c=0;for(const o of Object.keys(m)){const f=Se(m[o],c)+1;c+=f,U+=f*(n.barHeight+n.barGap),K[o]=f}}else{U+=R.length*(n.barHeight+n.barGap);for(const m of P)K[m]=R.filter(c=>c.type===m).length}nt.setAttribute("viewBox","0 0 "+Y+" "+U);const B=L.select(`[id="${u}"]`),_=(0,b.Xf)().domain([(0,b.VV$)(R,function(m){return m.startTime}),(0,b.Fp7)(R,function(m){return m.endTime})]).rangeRound([0,Y-n.leftPadding-n.rightPadding]);function dt(m,c){const o=m.startTime,f=c.startTime;let r=0;return o>f?r=1:o<f&&(r=-1),r}R.sort(dt),ht(R,Y,U),(0,v.i)(B,U,Y,n.useMaxWidth),B.append("text").text(i.db.getDiagramTitle()).attr("x",Y/2).attr("y",n.titleTopMargin).attr("class","titleText");function ht(m,c,o){const f=n.barHeight,r=f+n.barGap,k=n.topPadding,e=n.leftPadding,x=(0,b.BYU)().domain([0,P.length]).range(["#00B9FA","#F95002"]).interpolate(b.JHv);kt(r,k,e,c,o,m,i.db.getExcludes(),i.db.getIncludes()),yt(e,k,c,o),mt(m,r,k,e,f,x,c),rt(r,k),Lt(e,k,c,o)}function mt(m,c,o,f,r,k,e){const a=[...new Set(m.map(l=>l.order))].map(l=>m.find(y=>y.order===l));B.append("g").selectAll("rect").data(a).enter().append("rect").attr("x",0).attr("y",function(l,y){return y=l.order,y*c+o-2}).attr("width",function(){return e-n.rightPadding/2}).attr("height",c).attr("class",function(l){for(const[y,g]of P.entries())if(l.type===g)return"section section"+y%n.numberSectionStyles;return"section section0"});const I=B.append("g").selectAll("rect").data(m).enter(),M=i.db.getLinks();if(I.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?_(l.startTime)+f+.5*(_(l.endTime)-_(l.startTime))-.5*r:_(l.startTime)+f}).attr("y",function(l,y){return y=l.order,y*c+o}).attr("width",function(l){return l.milestone?r:_(l.renderEndTime||l.endTime)-_(l.startTime)}).attr("height",r).attr("transform-origin",function(l,y){return y=l.order,(_(l.startTime)+f+.5*(_(l.endTime)-_(l.startTime))).toString()+"px "+(y*c+o+.5*r).toString()+"px"}).attr("class",function(l){const y="task";let g="";l.classes.length>0&&(g=l.classes.join(" "));let p=0;for(const[w,E]of P.entries())l.type===E&&(p=w%n.numberSectionStyles);let T="";return l.active?l.crit?T+=" activeCrit":T=" active":l.done?l.crit?T=" doneCrit":T=" done":l.crit&&(T+=" crit"),T.length===0&&(T=" task"),l.milestone&&(T=" milestone "+T),T+=p,T+=" "+g,y+T}),I.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",n.fontSize).attr("x",function(l){let y=_(l.startTime),g=_(l.renderEndTime||l.endTime);l.milestone&&(y+=.5*(_(l.endTime)-_(l.startTime))-.5*r),l.milestone&&(g=y+r);const p=this.getBBox().width;return p>g-y?g+p+1.5*n.leftPadding>e?y+f-5:g+f+5:(g-y)/2+y+f}).attr("y",function(l,y){return y=l.order,y*c+n.barHeight/2+(n.fontSize/2-2)+o}).attr("text-height",r).attr("class",function(l){const y=_(l.startTime);let g=_(l.endTime);l.milestone&&(g=y+r);const p=this.getBBox().width;let T="";l.classes.length>0&&(T=l.classes.join(" "));let w=0;for(const[Mt,S]of P.entries())l.type===S&&(w=Mt%n.numberSectionStyles);let E="";return l.active&&(l.crit?E="activeCritText"+w:E="activeText"+w),l.done?l.crit?E=E+" doneCritText"+w:E=E+" doneText"+w:l.crit&&(E=E+" critText"+w),l.milestone&&(E+=" milestoneText"),p>g-y?g+p+1.5*n.leftPadding>e?T+" taskTextOutsideLeft taskTextOutside"+w+" "+E:T+" taskTextOutsideRight taskTextOutside"+w+" "+E+" width-"+p:T+" taskText taskText"+w+" "+E+" width-"+p}),(0,v.c)().securityLevel==="sandbox"){let l;l=(0,b.Ys)("#i"+u);const y=l.nodes()[0].contentDocument;I.filter(function(g){return M[g.id]!==void 0}).each(function(g){var p=y.querySelector("#"+g.id),T=y.querySelector("#"+g.id+"-text");const w=p.parentNode;var E=y.createElement("a");E.setAttribute("xlink:href",M[g.id]),E.setAttribute("target","_top"),w.appendChild(E),E.appendChild(p),E.appendChild(T)})}}function kt(m,c,o,f,r,k,e,x){const a=k.reduce((p,{startTime:T})=>p?Math.min(p,T):T,0),I=k.reduce((p,{endTime:T})=>p?Math.max(p,T):T,0),M=i.db.getDateFormat();if(!a||!I)return;const ct=[];let l=null,y=C(a);for(;y.valueOf()<=I;)i.db.isInvalidDate(y,M,e,x)?l?l.end=y:l={start:y,end:y}:l&&(ct.push(l),l=null),y=y.add(1,"d");B.append("g").selectAll("rect").data(ct).enter().append("rect").attr("id",function(p){return"exclude-"+p.start.format("YYYY-MM-DD")}).attr("x",function(p){return _(p.start)+o}).attr("y",n.gridLineStartPadding).attr("width",function(p){const T=p.end.add(1,"day");return _(T)-_(p.start)}).attr("height",r-c-n.gridLineStartPadding).attr("transform-origin",function(p,T){return(_(p.start)+o+.5*(_(p.end)-_(p.start))).toString()+"px "+(T*m+.5*r).toString()+"px"}).attr("class","exclude-range")}function yt(m,c,o,f){let r=(0,b.LLu)(_).tickSize(-f+c+n.gridLineStartPadding).tickFormat((0,b.i$Z)(i.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));const e=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||n.tickInterval);if(e!==null){const x=e[1];switch(e[2]){case"minute":r.ticks(b.Z_i.every(x));break;case"hour":r.ticks(b.WQD.every(x));break;case"day":r.ticks(b.rr1.every(x));break;case"week":r.ticks(b.NGh.every(x));break;case"month":r.ticks(b.F0B.every(x));break}}if(B.append("g").attr("class","grid").attr("transform","translate("+m+", "+(f-50)+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||n.topAxis){let x=(0,b.F5q)(_).tickSize(-f+c+n.gridLineStartPadding).tickFormat((0,b.i$Z)(i.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));if(e!==null){const a=e[1];switch(e[2]){case"minute":x.ticks(b.Z_i.every(a));break;case"hour":x.ticks(b.WQD.every(a));break;case"day":x.ticks(b.rr1.every(a));break;case"week":x.ticks(b.NGh.every(a));break;case"month":x.ticks(b.F0B.every(a));break}}B.append("g").attr("class","grid").attr("transform","translate("+m+", "+c+")").call(x).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function rt(m,c){let o=0;const f=Object.keys(K).map(r=>[r,K[r]]);B.append("g").selectAll("text").data(f).enter().append(function(r){const k=r[0].split(v.e.lineBreakRegex),e=-(k.length-1)/2,x=A.createElementNS("http://www.w3.org/2000/svg","text");x.setAttribute("dy",e+"em");for(const[a,I]of k.entries()){const M=A.createElementNS("http://www.w3.org/2000/svg","tspan");M.setAttribute("alignment-baseline","central"),M.setAttribute("x","10"),a>0&&M.setAttribute("dy","1em"),M.textContent=I,x.appendChild(M)}return x}).attr("x",10).attr("y",function(r,k){if(k>0)for(let e=0;e<k;e++)return o+=f[k-1][1],r[1]*m/2+o*m+c;else return r[1]*m/2+c}).attr("font-size",n.sectionFontSize).attr("class",function(r){for(const[k,e]of P.entries())if(r[0]===e)return"sectionTitle sectionTitle"+k%n.numberSectionStyles;return"sectionTitle"})}function Lt(m,c,o,f){const r=i.db.getTodayMarker();if(r==="off")return;const k=B.append("g").attr("class","today"),e=new Date,x=k.append("line");x.attr("x1",_(e)+m).attr("x2",_(e)+m).attr("y1",n.titleTopMargin).attr("y2",f-n.titleTopMargin).attr("class","today"),r!==""&&x.attr("style",r.replace(/,/g,";"))}function at(m){const c={},o=[];for(let f=0,r=m.length;f<r;++f)Object.prototype.hasOwnProperty.call(c,m[f])||(c[m[f]]=!0,o.push(m[f]));return o}}},styles:t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`}}}]);

//# sourceMappingURL=670.998d9ada70037f99c1a2.js.map