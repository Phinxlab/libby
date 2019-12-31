import t from"@babel/runtime/helpers/objectSpread";import e from"@babel/runtime/regenerator";import r from"@babel/runtime/helpers/asyncToGenerator";import n from"@babel/runtime/helpers/classCallCheck";import a from"@babel/runtime/helpers/createClass";import o from"@babel/runtime/helpers/defineProperty";import s from"lodash/get";import i from"@babel/runtime/helpers/possibleConstructorReturn";import u from"@babel/runtime/helpers/getPrototypeOf";import c from"@babel/runtime/helpers/get";import h from"@babel/runtime/helpers/inherits";import p from"lodash";import{SessionStrategy as f,Libby as l,Database as v,DAO as d,DAOQueryBuilder as m,StoreStrategy as y}from"@phinxlab/libby-core-public";var k,g,b,x,w=function(o){function s(){return n(this,s),i(this,u(s).call(this))}var v,d,m,y;return h(s,f),a(s,null,[{key:"name",value:function(){return"rest"}}]),a(s,[{key:"recoverSession",value:(y=r(e.mark((function t(){var r;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(u(s.prototype),"recoverSession",this).call(this),t.next=3,this.getTokenManager().retrieve();case 3:(r=t.sent)||this.notify(f.NO_SESSION),this.status(r);case 6:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})},{key:"init",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/platform/login",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/platform/logout",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/platform/status";return c(u(s.prototype),"init",this).call(this),O.defineHeader("x-libby-app",l.App),this.config={url:t,loginPath:e,logoutPath:r,statusPath:n},this.notify(f.NO_SESSION),this}},{key:"status",value:(m=r(e.mark((function t(r){var n=this;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(u(s.prototype),"status",this).call(this,r),O.defineHeader("x-chino-token",r),t.abrupt("return",O.execute("".concat(this.config.statusPath),{},S.POST).then((function(t){var e=t.data,r=e.user;return r.isGuest=e.isGuest,n.notify(f.NEW_SESSION,r,t.headers["x-chino-token"]),t.data})).catch((function(t){console.log(t.message),O.removeHeader("x-chino-token"),n.notify(f.FAILED_TO_LOGIN,void 0,void 0,p.get(t,"rest.data","Unable to connect to server"))})));case 3:case"end":return t.stop()}}),t,this)}))),function(t){return m.apply(this,arguments)})},{key:"login",value:(d=r(e.mark((function r(n,a){var o,i,h=this,l=arguments;return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=l.length>2&&void 0!==l[2]?l[2]:{},c(u(s.prototype),"login",this).call(this,n,a),i=t({nick:n,password:a},o),O.removeHeader("x-chino-token"),e.abrupt("return",O.execute("".concat(this.config.loginPath),i,S.POST,!0).then((function(t){var e=t.headers["x-chino-token"];O.defineHeader("x-chino-token",e);var r=t.data,n=r.user;return n.isGuest=r.isGuest,h.notify(f.NEW_SESSION,n,e),t.data})).catch((function(t){h.notify(f.FAILED_TO_LOGIN,void 0,void 0,p.get(t,"rest.data","Unable to connect to server"))})));case 5:case"end":return e.stop()}}),r,this)}))),function(t,e){return d.apply(this,arguments)})},{key:"getURL",value:function(t){return this.config.url+t}},{key:"logout",value:(v=r(e.mark((function t(){var r=this;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(u(s.prototype),"logout",this).call(this),t.abrupt("return",O.execute("".concat(this.config.logoutPath),{},S.POST).then((function(t){O.removeHeader("x-chino-token"),r.getTokenManager().clean(),r.notify(f.NO_SESSION)})).catch((function(t){O.removeHeader("x-chino-token"),r.notify(f.FAILED_TO_LOGIN,void 0,void 0,p.get(t,"rest.data","Unable to connect to server"))})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"name",get:function(){return"rest"}}]),s}(),E=new w,S={};function T(t){return t.toString().indexOf("Network Error")>0?"Network connection to server has failed":t.toString().replace("Error:","")}S.PUT=Symbol("put"),S.POST=Symbol("post"),S.DELETE=Symbol("delete"),S.GET=Symbol("get"),k=S.PUT,g=S.POST,b=S.DELETE,x=S.GET;var O=new(function(){function i(){var t=this;n(this,i),o(this,"header",{"Content-Type":"application/json; charset=utf-8"}),o(this,k,function(){var n=r(e.mark((function r(n,a,o){return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.executeHTTP("put",n,a,o));case 1:case"end":return e.stop()}}),r)})));return function(t,e,r){return n.apply(this,arguments)}}()),o(this,g,function(){var n=r(e.mark((function r(n,a,o){return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.executeHTTP("post",n,a,o));case 1:case"end":return e.stop()}}),r)})));return function(t,e,r){return n.apply(this,arguments)}}()),o(this,b,function(){var n=r(e.mark((function r(n,a,o){return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.executeHTTP("delete",n,a,o));case 1:case"end":return e.stop()}}),r)})));return function(t,e,r){return n.apply(this,arguments)}}()),o(this,x,function(){var n=r(e.mark((function r(n,a,o){return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.executeHTTP("get",n,a,o));case 1:case"end":return e.stop()}}),r)})));return function(t,e,r){return n.apply(this,arguments)}}()),o(this,"validateResponse",(function(e,r){if(Object.keys(e).includes("x-chino-error")){var n=T(e["x-chino-error"]);throw t.createHTTPError(r,n,n)}}))}var u,c;return a(i,[{key:"createConfig",value:function(t,e,r){return"get"===t?{url:e,method:t,headers:this.header}:{url:e,method:t,body:JSON.stringify(r),headers:this.header}}},{key:"removeHeader",value:function(t){delete this.header[t]}},{key:"defineHeader",value:function(t,e){this.header[t]=e}},{key:"execute",value:(c=r(e.mark((function t(r,n,a){var o,s=arguments;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>3&&void 0!==s[3]&&s[3],t.abrupt("return",this[a](E.getURL(r),n,o));case 2:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return c.apply(this,arguments)})},{key:"executeHTTP",value:(u=r(e.mark((function r(n,a,o,i){var u,c,h,p,f,l;return e.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(a,this.createConfig(n,a,o));case 3:return u=e.sent,c=u.headers.get("x-chino-token"),h=s(u,"headers.map","headers"),p=t({},h,{"x-chino-token":c}),f=u.status,this.validateResponse(p,f),e.prev=9,e.next=12,u.json();case 12:return l=e.sent,e.abrupt("return",{data:l,headers:p,status:f});case 16:return e.prev=16,e.t0=e.catch(9),e.abrupt("return",{headers:p,status:f});case 19:e.next=29;break;case 21:if(e.prev=21,e.t1=e.catch(0),console.log(e.t1),!s(e.t1,"rest")){e.next=28;break}throw e.t1;case 28:throw new Error(e.t1.toString(),T(e.t1));case 29:case"end":return e.stop()}}),r,this,[[0,21],[9,16]])}))),function(t,e,r,n){return u.apply(this,arguments)})},{key:"createHTTPError",value:function(t,e,r){var n=v.getSessionStrategy(E.name),a=new Error("REST ERROR -> ".concat(t," with ").concat(e," at data ").concat(r),e);switch(t){case 412:n.sessionHasExpired()}return a.rest={code:t,text:e,data:r},a}}]),i}()),R=function(t){function o(t,e){var r;return n(this,o),(r=i(this,u(o).call(this,t,e))).strategy=v.get(t).strategy,r}var s,p,f,l;return h(o,d),a(o,[{key:"processResultset",value:(l=r(e.mark((function t(r){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.strategy.find(r.parameter));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return l.apply(this,arguments)})},{key:"processChange",value:(f=r(e.mark((function t(r){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.strategy.save(r.parameter).then((function(t){return t})));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return f.apply(this,arguments)})},{key:"processRemove",value:(p=r(e.mark((function t(r){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.strategy.remove(r.parameter).then((function(t){return t})));case 1:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)})},{key:"execute",value:(s=r(e.mark((function t(r){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c(u(o.prototype),"execute",this).call(this,r),r.isSave()){t.next=7;break}if(!r.isRemove()){t.next=4;break}return t.abrupt("return",this.processRemove(r));case 4:return t.abrupt("return",this.processResultset(r));case 7:return t.abrupt("return",this.processChange(r));case 8:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})}]),o}(),P={};P[m.LOWEROREQUALS]="lowerorequals",P[m.LOWER]="lower",P[m.EQUALS]="equals",P[m.NOT_EQUALS]="not_equals",P[m.HIGHEROREQUALS]="higherorequals",P[m.HIGHER]="higher",P[m.INCLUDES]="includes",P[m.STARTS]="starts",P[m.ENDS]="ends";var H=function(){function t(e,r){n(this,t),this.path=e,this.pk=r}return a(t,[{key:"createInsert",value:function(t){return"".concat(this.path,"/")}},{key:"createUpdate",value:function(t){return"".concat(this.path,"/").concat(t[this.pk])}},{key:"createDelete",value:function(t){return"".concat(this.path,"/").concat(t[this.pk])}},{key:"createFind",value:function(t){var e=t.filter,r=t.order,n=t.limit,a=t.aggregate,o=Object.getOwnPropertySymbols(e),s=[];if(o.length>0){this.reference;for(var i=0;i<o.length;i++){var u=e[o[i]];u.type===m.RANGE&&(s.push("".concat(u.field,"[").concat(P[m.HIGHEROREQUALS],"]=").concat(u.value)),s.push("".concat(u.field,"[").concat(P[m.LOWEROREQUALS],"]=").concat(u.to))),u.type===m.GROUP_START||u.type===m.GROUP_END||u.type===m.AND||u.type===m.OR?s.push("".concat(u.field,"[").concat(u.value,"]")):s.push("".concat(u.field,"[").concat(P[u.type],"]=").concat(u.value))}}for(var c=[],h=0;h<r.length;h++){var p=r[h];c.push(("desc"===p.direction?"^":"")+p.field)}return a&&s.push(a.toURL().join("&")),c.length&&s.push("sort=".concat(c.join(","))),n&&n.from&&n.to?s.push("offset=".concat(n.from,"&limit=").concat(n.to)):n&&n.to?s.push("offset=0&limit=".concat(n.to)):n&&n.from&&s.push("offset=".concat(n.from)),"".concat(this.path,"?").concat(s.join("&"))}}]),t}();H.ACTIVE=H;var L=function(t){function o(t,e,r){var a;return n(this,o),(a=i(this,u(o).call(this,t,r))).urlMaker=new H.ACTIVE(e,r),a}var s,c,f;return h(o,y),a(o,[{key:"createDAO",value:function(){var t=this;return(function(e){function r(){return n(this,r),i(this,u(r).call(this,t.name,t.pk))}return h(r,R),r}())}},{key:"find",value:(f=r(e.mark((function t(r,n){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O.execute(this.urlMaker.createFind(r),r,S.GET,n).then((function(t){if(200===t.status)return t.data;throw new Error(p.get(t,"rest.data","Failed to execute request"))})));case 1:case"end":return t.stop()}}),t,this)}))),function(t,e){return f.apply(this,arguments)})},{key:"save",value:(c=r(e.mark((function t(r,n){var a;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r[this.pk]?this.urlMaker.createUpdate(r):this.urlMaker.createInsert(r),t.abrupt("return",O.execute(a,r,r[this.pk]?S.PUT:S.POST,n).then((function(t){if(200===t.status)return t.data;throw new Error(p.get(t,"rest.data","Failed to execute request"))})));case 2:case"end":return t.stop()}}),t,this)}))),function(t,e){return c.apply(this,arguments)})},{key:"remove",value:(s=r(e.mark((function t(r,n){return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O.execute(this.urlMaker.createDelete(r),r,S.DELETE,n).then((function(t){if(200===t.status)return t.data;throw new Error(p.get(t,"rest.data","Failed to execute request"))})));case 1:case"end":return t.stop()}}),t,this)}))),function(t,e){return s.apply(this,arguments)})}]),o}();export{S as RESTMethod,O as RESTConnection,R as RESTDAO,w as RESTSessionStrategyRAW,E as RESTSessionStrategy,L as RESTStoreStrategy};
//# sourceMappingURL=rrpm.module.js.map
