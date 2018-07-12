!function e(d,c,j){function h(k,m){if(!c[k]){if(!d[k]){var a="function"==typeof require&&require;
if(!m&&a){return a(k,!0)
}if(b){return b(k,!0)
}var i=new Error("Cannot find module '"+k+"'");
throw i.code="MODULE_NOT_FOUND",i
}var n=c[k]={exports:{}};
d[k][0].call(n.exports,function(o){var l=d[k][1][o];
return h(l||o)
},n,n.exports,e,d,c,j)
}return c[k].exports
}for(var b="function"==typeof require&&require,g=0;
g<j.length;
g++){h(j[g])
}return h
}({1:[function(c,b,a){(function(j){c("./utils/polyfills");
var q=c("./strategies/LocalVisitor"),m=c("./strategies/ProxyVisitor"),g=c("./strategies/PlaceholderVisitor"),k=c("./utils/callbackRegistryFactory"),p=c("./Message"),d=c("./enums"),h=d.MESSAGES;
b.exports=function(E,L,w,G){function F(l){Object.assign(H,l)
}function B(l){Object.assign(H.state,l),H.callbackRegistry.executeAll(H.state)
}function z(v){if(!r.isInvalid(v)){J=!1;
var l=r.parse(v);
H.setStateAndPublish(l.state)
}}function K(l){!J&&n&&(J=!0,r.send(G,l))
}function u(){F(new q(w._generateID)),H.getMarketingCloudVisitorID(),H.callbackRegistry.executeAll(H.state,!0),j.removeEventListener("message",o)
}function o(v){if(!r.isInvalid(v)){var l=r.parse(v);
J=!1,j.clearTimeout(this.timeout),j.removeEventListener("message",o),F(new m(H)),j.addEventListener("message",z),H.setStateAndPublish(l.state),H.callbackRegistry.hasCallbacks()&&K(h.GETSTATE)
}}function y(){n&&postMessage?(j.addEventListener("message",o),K(h.HANDSHAKE),this.timeout=setTimeout(u,250)):u()
}function x(){j.s_c_in||(j.s_c_il=[],j.s_c_in=0),H._c="Visitor",H._il=j.s_c_il,H._in=j.s_c_in,H._il[H._in]=H,j.s_c_in++
}function i(){function l(t){0!==t.indexOf("_")&&"function"==typeof w[t]&&(H[t]=function(){})
}Object.keys(w).forEach(l),H.getSupplementalDataID=w.getSupplementalDataID
}var H=this,n=L.whitelistParentDomain;
H.state={},H.version=w.version,H.marketingCloudOrgID=E;
var J=!1,r=new p(E,n);
H.callbackRegistry=k(),H.findField=function(v,l){if(H.state[v]){return l(H.state[v]),H.state[v]
}},H.messageParent=K,H.setStateAndPublish=B,function(){x(),i(),F(new g(H)),y()
}()
}
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})
},{"./Message":2,"./enums":4,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7,"./utils/callbackRegistryFactory":8,"./utils/polyfills":10}],2:[function(h,d,c){var j=h("./enums"),g=j.MESSAGES,b={0:"prefix",1:"orgID",2:"state"};
d.exports=function(i,a){this.parse=function(l){try{var k={};
return l.data.split("|").forEach(function(n,m){if(void 0!==n){k[b[m]]=2!==m?n:JSON.parse(n)
}}),k
}catch(l){}},this.isInvalid=function(l){var q=this.parse(l);
if(!q||Object.keys(q).length<2){return !0
}var k=i!==q.orgID,m=!a||l.origin!==a,p=-1===Object.keys(g).indexOf(q.prefix);
return k||m||p
},this.send=function(l,p,m){var k=p+"|"+o;
m&&m===Object(m)&&(k+="|"+JSON.stringify(m));
try{l.postMessage(k,a)
}catch(o){}}
}
},{"./enums":4}],3:[function(e,t,i){(function(i){function n(){function e(){o.windowLoaded=!0
}i.addEventListener?i.addEventListener("load",e):i.attachEvent&&i.attachEvent("onload",e),o.codeLoadEnd=(new Date).getTime()
}var r=e("./ChildVisitor"),a=e("./Message"),s=e("./utils/makeChildMessageListener"),o=function(e,t){function n(e){var t=e;
return function(e){var i=e||_.location.href;
try{var n=g._extractParamFromUri(i,t);
if(n){return R.parsePipeDelimetedKeyValues(n)
}}catch(e){}}
}function r(e){function t(e,t){e&&e.match(h.VALID_VISITOR_ID_REGEX)&&t(e)
}t(e[I],g.setMarketingCloudVisitorID),g._setFieldExpire(L,-1),t(e[O],g.setAnalyticsVisitorID)
}function o(e){e=e||{},g._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",g._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},g._supplementalDataIDLast=e.supplementalDataIDLast||"",g._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}
}function l(e){for(var t="",i=0,n=e.length;
i<n;
i++){var r=e[i],a=r[0],s=r[1];
null!=s&&s!==P&&(t=function(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)
}(a,s,t))
}return function(e){var t=R.getTimestampInSeconds();
return e=e?e+="|":e,e+="TS="+t
}(t)
}function u(e){var t=e.minutesToLive,i="";
return g.idSyncDisableSyncs&&(i=i||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(i=i||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(i=i||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(i=i||"Error: config.minutesToLive needs to be a positive number")),{error:i,ttl:t}
}function c(e){for(var t=0,i=e.length;
t<i;
t++){if(!h.POSITIVE_INT_REGEX.test(e[t])){return !1
}}return !0
}function d(e,t){for(;
e.length<t.length;
){e.push("0")
}for(;
t.length<e.length;
){t.push("0")
}}function f(e,t){for(var i=0;
i<e.length;
i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);
if(n>r){return 1
}if(r>n){return -1
}}return 0
}if(!e){throw new Error("Visitor requires Adobe Marketing Cloud Org ID")
}var g=this;
g.version="2.4.0";
var _=i,m=_.Visitor;
m.version=g.version,_.s_c_in||(_.s_c_il=[],_.s_c_in=0),g._c="Visitor",g._il=_.s_c_il,g._in=_.s_c_in,g._il[g._in]=g,_.s_c_in++,g._log={requests:[]};
var p=_.document,h={POST_MESSAGE_ENABLED:!!_.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:86400000,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,POSITIVE_INT_REGEX:/^\d+$/,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,HAS_JSON_STRINGIFY:window.JSON===Object(window.JSON)&&"function"==typeof window.JSON.stringify},S=function(e){return !Object.prototype[e]
};
g._hash=function(e){var t,i,n=0;
if(e){for(t=0;
t<e.length;
t++){i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n
}}return n
},g._generateID=function(e,t){var i,n,r="0123456789",a="",s="",o=8,l=10,u=10;
if(t===I&&(x.isClientSideMarketingCloudVisitorID=!0),1===e){for(r+="ABCDEF",i=0;
i<16;
i++){n=Math.floor(Math.random()*o),a+=r.substring(n,n+1),n=Math.floor(Math.random()*o),s+=r.substring(n,n+1),o=16
}return a+"-"+s
}for(i=0;
i<19;
i++){n=Math.floor(Math.random()*l),a+=r.substring(n,n+1),0===i&&9===n?l=3:(1===i||2===i)&&10!==l&&n<2?l=10:i>2&&(l=10),n=Math.floor(Math.random()*u),s+=r.substring(n,n+1),0===i&&9===n?u=3:(1===i||2===i)&&10!==u&&n<2?u=10:i>2&&(u=10)
}return a+s
},g._getDomain=function(e){var t;
if(!e&&_.location&&(e=_.location.hostname),t=e){if(/^[0-9.]+$/.test(t)){t=""
}else{var i=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",n=t.split("."),r=n.length-1,a=r-1;
if(r>1&&n[r].length<=2&&(2===n[r-1].length||i.indexOf(","+n[r]+",")<0)&&a--,a>0){for(t="";
r>=a;
){t=n[r]+(t?".":"")+t,r--
}}}}return t
},g.cookieRead=function(e){e=encodeURIComponent(e);
var t=(";"+p.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1);
return i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n))
},g.cookieWrite=function(e,t,i){var n,r=g.cookieLifetime;
if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r||0,10):-60){i=new Date,i.setTime(i.getTime()+1000*n)
}else{if(1===i){i=new Date;
var a=i.getYear();
i.setYear(a+2+(a<1900?1900:0))
}}}else{i=0
}return e&&"NONE"!==r?(p.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(g.cookieDomain?" domain="+g.cookieDomain+";":""),g.cookieRead(e)===t):0
},g._callbackList=null,g._callCallback=function(e,t){try{"function"==typeof e?e.apply(_,t):e[1].apply(e[0],t)
}catch(e){}},g._registerCallback=function(e,t){t&&(null==g._callbackList&&(g._callbackList={}),void 0==g._callbackList[e]&&(g._callbackList[e]=[]),g._callbackList[e].push(t))
},g._callAllCallbacks=function(e,t){if(null!=g._callbackList){var i=g._callbackList[e];
if(i){for(;
i.length>0;
){g._callCallback(i.shift(),t)
}}}},g._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=R.parseHash(e),s=R.hashlessUrl(e);
if(-1===s.indexOf("?")){return s+"?"+r+a
}var o=s.split("?"),l=o[0]+"?",u=o[1];
return l+R.addQueryParamAtLocation(u,r,n)+a
},g._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);
if(n&&n.length){return decodeURIComponent(n[1])
}},g._parseAdobeMcFromUrl=n(h.ADOBE_MC),g._parseAdobeMcSdidFromUrl=n(h.ADOBE_MC_SDID),g._attemptToPopulateSdidFromUrl=function(t){var i=g._parseAdobeMcSdidFromUrl(t),n=1000000000;
i&&i.TS&&(n=R.getTimestampInSeconds()-i.TS),i&&i.SDID&&i[C]===e&&n<g.sdidParamExpiry&&(g._supplementalDataIDCurrent=i.SDID,g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)
},g._attemptToPopulateIdsFromUrl=function(){var t=g._parseAdobeMcFromUrl();
if(t&&t.TS){var i=R.getTimestampInSeconds(),n=i-t.TS;
if(Math.floor(n/60)>h.ADOBE_MC_TTL_IN_MIN||t[C]!==e){return
}r(t)
}},g.resetState=function(e){e?g._mergeServerState(e):o()
},g._mergeServerState=function(e){if(e){try{if(e=function(e){return R.isObject(e)?e:R.parseJSON(e)
}(e),e[g.marketingCloudOrgID]){var t=e[g.marketingCloudOrgID];
!function(e){R.isObject(e)&&g.setCustomerIDs(e)
}(t.customerIDs),o(t.sdid)
}}catch(e){throw new Error("`serverState` has an invalid format.")
}}},g._timeout=null,g._loadData=function(e,t,i,n){t=g._addQuerystringParam(t,"d_fieldgroup",e,1),n.url=g._addQuerystringParam(n.url,"d_fieldgroup",e,1),n.corsUrl=g._addQuerystringParam(n.corsUrl,"d_fieldgroup",e,1),x.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===g._requestProcs.corsMetadata.corsType?g._requestProcs.fireCORS(n,i,e):g.useCORSOnly||g._loadJSONP(e,t,i)
},g._loadJSONP=function(e,t,i){var n,r=0,a=0;
if(t&&p){for(n=0;
!r&&n<2;
){try{r=p.getElementsByTagName(n>0?"HEAD":"head"),r=r&&r.length>0?r[0]:0
}catch(e){r=0
}n++
}if(!r){try{p.body&&(r=p.body)
}catch(e){r=0
}}if(r){for(n=0;
!a&&n<2;
){try{a=p.createElement(n>0?"SCRIPT":"script")
}catch(e){a=0
}n++
}}}if(!t||!r||!a){return void (i&&i())
}a.type="text/javascript",a.src=t,r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a);
var s=g.loadTimeout;
i&&(null==g._timeout&&(g._timeout={}),g._timeout[e]=setTimeout(function(){i(!0)
},s)),g._log.requests.push(t)
},g._clearTimeout=function(e){null!=g._timeout&&g._timeout[e]&&(clearTimeout(g._timeout[e]),g._timeout[e]=0)
},g._isAllowedDone=!1,g._isAllowedFlag=!1,g.isAllowed=function(){return g._isAllowedDone||(g._isAllowedDone=!0,(g.cookieRead(g.cookieName)||g.cookieWrite(g.cookieName,"T",1))&&(g._isAllowedFlag=!0)),g._isAllowedFlag
},g._fields=null,g._fieldsExpired=null;
var D="MC",I="MCMID",C="MCORGID",v="MCCIDH",A="MCSYNCS",y="MCSYNCSOP",M="MCIDTS",b="MCOPTOUT",E="A",O="MCAID",T="AAM",k="MCAAMLH",L="MCAAMB",P="NONE";
g._settingsDigest=0,g._getSettingsDigest=function(){if(!g._settingsDigest){var e=g.version;
g.audienceManagerServer&&(e+="|"+g.audienceManagerServer),g.audienceManagerServerSecure&&(e+="|"+g.audienceManagerServerSecure),g._settingsDigest=g._hash(e)
}return g._settingsDigest
},g._readVisitorDone=!1,g._readVisitor=function(){if(!g._readVisitorDone){g._readVisitorDone=!0;
var e,t,i,n,r,a,s=g._getSettingsDigest(),o=!1,l=g.cookieRead(g.cookieName),u=new Date;
if(null==g._fields&&(g._fields={}),l&&"T"!==l){for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2==1&&l.pop(),e=0;
e<l.length;
e+=2){t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&(i===v&&(n=""),r>0&&(r=u.getTime()/1000-60)),i&&n&&(g._setField(i,n,1),r>0&&(g._fields["expire"+i]=r+(a?"s":""),(u.getTime()>=1000*r||a&&!g.cookieRead(g.sessionCookieName))&&(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[i]=!0)))
}}!g._getField(O)&&R.isTrackingServerPopulated()&&(l=g.cookieRead("s_vi"))&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(h.VALID_VISITOR_ID_REGEX)&&g._setField(O,n)))
}},g._appendVersionTo=function(e){var t="vVersion|"+g.version,i=e?g._getCookieVersion(e):null;
return i?R.areVersionsDifferent(i,g.version)&&(e=e.replace(h.VERSION_REGEX,t)):e+=(e?"|":"")+t,e
},g._writeVisitor=function(){var e,t,i=g._getSettingsDigest();
for(e in g._fields){S(e)&&g._fields[e]&&"expire"!==e.substring(0,6)&&(t=g._fields[e],i+=(i?"|":"")+e+(g._fields["expire"+e]?"-"+g._fields["expire"+e]:"")+"|"+t)
}i=g._appendVersionTo(i),g.cookieWrite(g.cookieName,i,1)
},g._getField=function(e,t){return null==g._fields||!t&&g._fieldsExpired&&g._fieldsExpired[e]?null:g._fields[e]
},g._setField=function(e,t,i){null==g._fields&&(g._fields={}),g._fields[e]=t,i||g._writeVisitor()
},g._getFieldList=function(e,t){var i=g._getField(e,t);
return i?i.split("*"):null
},g._setFieldList=function(e,t,i){g._setField(e,t?t.join("*"):"",i)
},g._getFieldMap=function(e,t){var i=g._getFieldList(e,t);
if(i){var n,r={};
for(n=0;
n<i.length;
n+=2){r[i[n]]=i[n+1]
}return r
}return null
},g._setFieldMap=function(e,t,i){var n,r=null;
if(t){r=[];
for(n in t){S(n)&&(r.push(n),r.push(t[n]))
}}g._setFieldList(e,r,i)
},g._setFieldExpire=function(e,t,i){var n=new Date;
n.setTime(n.getTime()+1000*t),null==g._fields&&(g._fields={}),g._fields["expire"+e]=Math.floor(n.getTime()/1000)+(i?"s":""),t<0?(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[e]=!0):g._fieldsExpired&&(g._fieldsExpired[e]=!1),i&&(g.cookieRead(g.sessionCookieName)||g.cookieWrite(g.sessionCookieName,"1"))
},g._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&"NOTARGET"===(e=e.toUpperCase())&&(e=P),e&&(e===P||e.match(h.VALID_VISITOR_ID_REGEX))||(e="")),e
},g._setFields=function(e,t){if(g._clearTimeout(e),null!=g._loading&&(g._loading[e]=!1),x.fieldGroupObj[e]&&x.setState(e,!1),e===D){!0!==x.isClientSideMarketingCloudVisitorID&&(x.isClientSideMarketingCloudVisitorID=!1);
var i=g._getField(I);
if(!i||g.overwriteCrossDomainMCIDAndAID){if(!(i="object"==typeof t&&t.mid?t.mid:g._findVisitorID(t))){if(g._use1stPartyMarketingCloudServer&&!g.tried1stPartyMarketingCloudServer){return g.tried1stPartyMarketingCloudServer=!0,void g.getAnalyticsVisitorID(null,!1,!0)
}i=g._generateID(0,I)
}g._setField(I,i)
}i&&i!==P||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&g._setFields(T,t),g._use1stPartyMarketingCloudServer&&t.mid&&g._setFields(E,{id:t.id})),g._callAllCallbacks(I,[i])
}if(e===T&&"object"==typeof t){var n=604800;
void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));
var r=g._getField(k);
r||(r=t.d_region,r||(r=t.dcs_region),r&&(g._setFieldExpire(k,n),g._setField(k,r))),r||(r=""),g._callAllCallbacks(k,[r]);
var a=g._getField(L);
(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),g._setFieldExpire(L,n),g._setField(L,a)),a||(a=""),g._callAllCallbacks(L,[a]),!t.error_msg&&g._newCustomerIDsHash&&g._setField(v,g._newCustomerIDsHash)
}if(e===E){var s=g._getField(O);
s&&!g.overwriteCrossDomainMCIDAndAID||(s=g._findVisitorID(t),s?s!==P&&g._setFieldExpire(L,-1):s=P,g._setField(O,s)),s&&s!==P||(s=""),g._callAllCallbacks(O,[s])
}if(g.idSyncDisableSyncs){F.idCallNotProcesssed=!0
}else{F.idCallNotProcesssed=!1;
var o={};
o.ibs=t.ibs,o.subdomain=t.subdomain,F.processIDCallData(o)
}if(t===Object(t)){var l,u;
g.isAllowed()&&(l=g._getField(b)),l||(l=P,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),u=parseInt(t.d_ottl,10),isNaN(u)&&(u=7200),g._setFieldExpire(b,u,!0),g._setField(b,l)),g._callAllCallbacks(b,[l])
}},g._loading=null,g._getRemoteField=function(e,t,i,n,r){var a,s="",o=R.isFirstPartyAnalyticsVisitorIDCall(e);
if(g.isAllowed()){g._readVisitor(),s=g._getField(e,!0===V[e]);
if(function(){return(!s||g._fieldsExpired&&g._fieldsExpired[e])&&(!g.disableThirdPartyCalls||o)
}()){if(e===I||e===b?a=D:e===k||e===L?a=T:e===O&&(a=E),a){return !t||null!=g._loading&&g._loading[a]||(null==g._loading&&(g._loading={}),g._loading[a]=!0,g._loadData(a,t,function(t){if(!g._getField(e)){t&&x.setState(a,!0);
var i="";
e===I?i=g._generateID(0,I):a===T&&(i={error_msg:"timeout"}),g._setFields(a,i)
}},r)),g._registerCallback(e,i),s||(t||g._setFields(a,{id:P}),"")
}}else{s||(e===I?(g._registerCallback(e,i),s=g._generateID(0,I),g.setMarketingCloudVisitorID(s)):e===O?(g._registerCallback(e,i),s="",g.setAnalyticsVisitorID(s)):(s="",n=!0))
}}return e!==I&&e!==O||s!==P||(s="",n=!0),i&&n&&g._callCallback(i,[s]),s
},g._setMarketingCloudFields=function(e){g._readVisitor(),g._setFields(D,e)
},g.setMarketingCloudVisitorID=function(e){g._setMarketingCloudFields(e)
},g._use1stPartyMarketingCloudServer=!1,g.getMarketingCloudVisitorID=function(e,t){if(g.isAllowed()){g.marketingCloudServer&&g.marketingCloudServer.indexOf(".demdex.net")<0&&(g._use1stPartyMarketingCloudServer=!0);
var i=g._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;
return g._getRemoteField(I,n,e,t,i)
}return""
},g._mapCustomerIDs=function(e){g.getAudienceManagerBlob(e,!0)
},m.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},g._currentCustomerIDs={},g._customerIDsHashChanged=!1,g._newCustomerIDsHash="",g.setCustomerIDs=function(e){function t(){g._customerIDsHashChanged=!1
}if(g.isAllowed()&&e){g._readVisitor();
var i,n;
for(i in e){if(S(i)&&(n=e[i])){if("object"==typeof n){var r={};
n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),g._currentCustomerIDs[i]=r
}else{g._currentCustomerIDs[i]={id:n}
}}}var a=g.getCustomerIDs(),s=g._getField(v),o="";
s||(s=0);
for(i in a){S(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""))
}g._newCustomerIDsHash=g._hash(o),g._newCustomerIDsHash!==s&&(g._customerIDsHashChanged=!0,g._mapCustomerIDs(t))
}},g.getCustomerIDs=function(){g._readVisitor();
var e,t,i={};
for(e in g._currentCustomerIDs){S(e)&&(t=g._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=m.AuthState.UNKNOWN)
}return i
},g._setAnalyticsFields=function(e){g._readVisitor(),g._setFields(E,e)
},g.setAnalyticsVisitorID=function(e){g._setAnalyticsFields(e)
},g.getAnalyticsVisitorID=function(e,t,i){if(!R.isTrackingServerPopulated()&&!i){return g._callCallback(e,[""]),""
}if(g.isAllowed()){var n="";
if(i||(n=g.getMarketingCloudVisitorID(function(t){g.getAnalyticsVisitorID(e,!0)
})),n||i){var r=i?g.marketingCloudServer:g.trackingServer,a="";
g.loadSSL&&(i?g.marketingCloudServerSecure&&(r=g.marketingCloudServerSecure):g.trackingServerSecure&&(r=g.trackingServerSecure));
var s={};
if(r){var o="http"+(g.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+g.version+"&mcorgid="+encodeURIComponent(g.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(g.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),u=["s_c_il",g._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];
a=o+"?"+l+"&callback=s_c_il%5B"+g._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=u
}return s.url=a,g._getRemoteField(i?I:O,a,e,t,s)
}}return""
},g._setAudienceManagerFields=function(e){g._readVisitor(),g._setFields(T,e)
},g._getAudienceManagerURLData=function(e){var t=g.audienceManagerServer,i="",n=g._getField(I),r=g._getField(L,!0),a=g._getField(O),s=a&&a!==P?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";
if(g.loadSSL&&g.audienceManagerServerSecure&&(t=g.audienceManagerServerSecure),t){var o,l,u=g.getCustomerIDs();
if(u){for(o in u){S(o)&&(l=u[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""))
}}e||(e="_setAudienceManagerFields");
var c="http"+(g.loadSSL?"s":"")+"://"+t+"/id",d="d_visid_ver="+g.version+"&d_rtbd=json&d_ver=2"+(!n&&g._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(g.marketingCloudOrgID)+"&d_nsid="+(g.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(g.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(!0===j?"&d_coop_safe=1":!1===j?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,f=["s_c_il",g._in,e];
return i=c+"?"+d+"&d_cb=s_c_il%5B"+g._in+"%5D."+e,{url:i,corsUrl:c+"?"+d,callback:f}
}return{url:i}
},g.getAudienceManagerLocationHint=function(e,t){if(g.isAllowed()){if(g.getMarketingCloudVisitorID(function(t){g.getAudienceManagerLocationHint(e,!0)
})){var i=g._getField(O);
if(!i&&R.isTrackingServerPopulated()&&(i=g.getAnalyticsVisitorID(function(t){g.getAudienceManagerLocationHint(e,!0)
})),i||!R.isTrackingServerPopulated()){var n=g._getAudienceManagerURLData(),r=n.url;
return g._getRemoteField(k,r,e,t,n)
}}}return""
},g.getLocationHint=g.getAudienceManagerLocationHint,g.getAudienceManagerBlob=function(e,t){if(g.isAllowed()){if(g.getMarketingCloudVisitorID(function(t){g.getAudienceManagerBlob(e,!0)
})){var i=g._getField(O);
if(!i&&R.isTrackingServerPopulated()&&(i=g.getAnalyticsVisitorID(function(t){g.getAudienceManagerBlob(e,!0)
})),i||!R.isTrackingServerPopulated()){var n=g._getAudienceManagerURLData(),r=n.url;
return g._customerIDsHashChanged&&g._setFieldExpire(L,-1),g._getRemoteField(L,r,e,t,n)
}}}return""
},g._supplementalDataIDCurrent="",g._supplementalDataIDCurrentConsumed={},g._supplementalDataIDLast="",g._supplementalDataIDLastConsumed={},g.getSupplementalDataID=function(e,t){g._supplementalDataIDCurrent||t||(g._supplementalDataIDCurrent=g._generateID(1));
var i=g._supplementalDataIDCurrent;
return g._supplementalDataIDLast&&!g._supplementalDataIDLastConsumed[e]?(i=g._supplementalDataIDLast,g._supplementalDataIDLastConsumed[e]=!0):i&&(g._supplementalDataIDCurrentConsumed[e]&&(g._supplementalDataIDLast=g._supplementalDataIDCurrent,g._supplementalDataIDLastConsumed=g._supplementalDataIDCurrentConsumed,g._supplementalDataIDCurrent=i=t?"":g._generateID(1),g._supplementalDataIDCurrentConsumed={}),i&&(g._supplementalDataIDCurrentConsumed[e]=!0)),i
},m.OptOut={GLOBAL:"global"},g.getOptOut=function(e,t){if(g.isAllowed()){var i=g._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;
return g._getRemoteField(b,n,e,t,i)
}return""
},g.isOptedOut=function(e,t,i){if(g.isAllowed()){t||(t=m.OptOut.GLOBAL);
var n=g.getOptOut(function(i){var n=i===m.OptOut.GLOBAL||i.indexOf(t)>=0;
g._callCallback(e,[n])
},i);
return n?n===m.OptOut.GLOBAL||n.indexOf(t)>=0:null
}return !1
},g.appendVisitorIDsTo=function(e){var t=h.ADOBE_MC,i=[[I,g._getField(I)],[O,g._getField(O)],[C,g.marketingCloudOrgID]],n=l(i);
try{return g._addQuerystringParam(e,t,n)
}catch(t){return e
}},g.appendSupplementalDataIDTo=function(e,t){if(!(t=t||g.getSupplementalDataID(R.generateRandomString(),!0))){return e
}var i=h.ADOBE_MC_SDID,n="SDID="+encodeURIComponent(t)+"|";
n+=C+"="+encodeURIComponent(g.marketingCloudOrgID)+"|",n+="TS="+R.getTimestampInSeconds();
try{return g._addQuerystringParam(e,i,n)
}catch(t){return e
}},g._xd={postMessage:function(e,t,i){var n=1;
t&&(h.POST_MESSAGE_ENABLED?i.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(i.location=t.replace(/#.*$/,"")+"#"+ +new Date+n+++"&"+e))
},receiveMessage:function(e,t){var i;
try{h.POST_MESSAGE_ENABLED&&(e&&(i=function(i){if("string"==typeof t&&i.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(i.origin)){return !1
}e(i)
}),_.addEventListener?_[e?"addEventListener":"removeEventListener"]("message",i,!1):_[e?"attachEvent":"detachEvent"]("å",i))
}catch(e){}}};
var R={addListener:function(){return p.addEventListener?function(e,t,i){e.addEventListener(t,function(e){"function"==typeof i&&i(e)
},!1)
}:p.attachEvent?function(e,t,i){e.attachEvent("on"+t,function(e){"function"==typeof i&&i(e)
})
}:void 0
}(),map:function(e,t){if(Array.prototype.map){return e.map(t)
}if(void 0===e||null==e){throw new TypeError
}var i=Object(e),n=i.length>>>0;
if("function"!=typeof t){throw new TypeError
}for(var r=new Array(n),a=arguments[1],s=0;
s<n;
s++){s in i&&(r[s]=t.call(a,i[s],s,i))
}return r
},encodeAndBuildRequest:function(e,t){return this.map(e,function(e){return encodeURIComponent(e)
}).join(t)
},parseHash:function(e){var t=e.indexOf("#");
return t>0?e.substr(t):""
},hashlessUrl:function(e){var t=e.indexOf("#");
return t>0?e.substr(0,t):e
},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");
return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")
},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==O){return !1
}var n;
return t||(t=g.trackingServer),i||(i=g.trackingServerSecure),!("string"!=typeof(n=g.loadSSL?i:t)||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)
},isObject:function(e){return Boolean(e&&e===Object(e))
},isLessThan:function(e,t){return g._compareVersions(e,t)<0
},areVersionsDifferent:function(e,t){return 0!==g._compareVersions(e,t)
},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
},isTrackingServerPopulated:function(){return !!g.trackingServer||!!g.trackingServerSecure
},parseJSON:function(e,t){function i(e,n){var r,a,s=e[n];
if(s&&"object"==typeof s){for(r in s){Object.prototype.hasOwnProperty.call(s,r)&&(a=i(s,r),void 0!==a?s[r]=a:delete s[r])
}}return t.call(e,n,s)
}if("object"==typeof JSON&&"function"==typeof JSON.parse){return JSON.parse(e,t)
}var n,r=/^[\],:{}\s]*$/,a=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,s=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,o=/(?:^|:|,)(?:\s*\[)+/g,l=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
if(e=String(e),l.lastIndex=0,l.test(e)&&(e=e.replace(l,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)
})),r.test(e.replace(a,"@").replace(s,"]").replace(o,""))){return n=eval("("+e+")"),"function"==typeof t?i({"":n},""):n
}throw new SyntaxError("JSON.parse")
},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1000)
},parsePipeDelimetedKeyValues:function(e){for(var t={},i=e.split("|"),n=0,r=i.length;
n<r;
n++){var a=i[n].split("=");
t[a[0]]=decodeURIComponent(a[1])
}return t
},generateRandomString:function(e){e=e||5;
for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";
e--;
){t+=i[Math.floor(Math.random()*i.length)]
}return t
},parseBoolean:function(e){return"true"===e||"false"!==e&&null
}};
g._helpers=R;
var w={corsMetadata:function(){var e="none",t=!0;
return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials" in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(_.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}
}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new _[this.corsMetadata.corsType]
},fireCORS:function(e,t,i){function n(t){var i;
try{if((i=JSON.parse(t))!==Object(i)){return void r.handleCORSError(e,null,"Response is not JSON")
}}catch(t){return void r.handleCORSError(e,t,"Error parsing response as JSON")
}try{for(var n=e.callback,a=_,s=0;
s<n.length;
s++){a=a[n[s]]
}a(i)
}catch(t){r.handleCORSError(e,t,"Error forming callback function")
}}var r=this;
t&&(e.loadErrorHandler=t);
try{var a=this.getCORSInstance();
a.open("get",e.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(a.withCredentials=!0,a.timeout=g.loadTimeout,a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){4===this.readyState&&200===this.status&&n(this.responseText)
}),a.onerror=function(t){r.handleCORSError(e,t,"onerror")
},a.ontimeout=function(t){r.handleCORSError(e,t,"ontimeout")
},a.send(),g._log.requests.push(e.corsUrl)
}catch(t){this.handleCORSError(e,t,"try-catch")
}},handleCORSError:function(e,t,i){g.CORSErrors.push({corsData:e,error:t,description:i}),e.loadErrorHandler&&("ontimeout"===i?e.loadErrorHandler(!0):e.loadErrorHandler(!1))
}};
g._requestProcs=w;
var F={THROTTLE_START:30000,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");
return t[0]+"//"+t[2]
}},subdomain:null,url:null,getUrl:function(){var e,t="http://fast.",i="?d_nsid="+g.idSyncContainerID+"#"+encodeURIComponent(p.location.href);
return this.subdomain||(this.subdomain="nosubdomainreturned"),g.loadSSL&&(t=g.idSyncSSLUseAkamai?"https://fast.":"https://"),e=t+this.subdomain+".demdex.net/dest5.html"+i,this.iframeHost=this.getIframeHost(e),this.id="destination_publishing_iframe_"+this.subdomain+"_"+g.idSyncContainerID,e
},checkDPIframeSrc:function(){var e="?d_nsid="+g.idSyncContainerID+"#"+encodeURIComponent(p.location.href);
"string"==typeof g.dpIframeSrc&&g.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(g._subdomain||this.subdomain||(new Date).getTime())+"_"+g.idSyncContainerID,this.iframeHost=this.getIframeHost(g.dpIframeSrc),this.url=g.dpIframeSrc+e)
},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:h.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return !g.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||g._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||g._subdomain)&&this.url&&!this.startedAttachingIframe
},attachIframe:function(){function e(){n=document.createElement("iframe"),n.sandbox="allow-scripts allow-same-origin",n.title="Adobe ID Syncing iFrame",n.id=i.id,n.style.cssText="display: none; width: 0; height: 0;",n.src=i.url,i.newIframeCreated=!0,t(),document.body.appendChild(n)
}function t(){R.addListener(n,"load",function(){n.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.requestToProcess()
})
}this.startedAttachingIframe=!0;
var i=this,n=document.getElementById(this.id);
n?"IFRAME"!==n.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==n.className?(this.originalIframeHasLoadedAlready=!1,t()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=n,this.requestToProcess())):e(),this.iframe=n
},requestToProcess:function(e){function t(){n.jsonForComparison.push(e),n.jsonWaiting.push(e),n.processSyncOnPage(e)
}var i,n=this;
if(e===Object(e)&&e.ibs){if(h.HAS_JSON_STRINGIFY){if(i=JSON.stringify(e.ibs||[]),this.jsonForComparison.length){var r,a,s,o=!1;
for(r=0,a=this.jsonForComparison.length;
r<a;
r++){if(s=this.jsonForComparison[r],i===JSON.stringify(s.ibs||[])){o=!0;
break
}}o?this.jsonDuplicates.push(e):t()
}else{t()
}}else{t()
}}if((this.receivedThirdPartyCookiesNotification||!h.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var l=this.jsonWaiting.shift();
this.process(l),this.requestToProcess()
}!g.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){n.messageSendingInterval=h.POST_MESSAGE_ENABLED?null:150
},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())
},processSyncOnPage:function(e){var t,i,n,r;
if((t=e.ibs)&&t instanceof Array&&(i=t.length)){for(n=0;
n<i;
n++){r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")
}}},process:function(e){var t,i,n,r,a,s=encodeURIComponent,o=!1;
if((t=e.ibs)&&t instanceof Array&&(i=t.length)){for(o=!0,n=0;
n<i;
n++){r=t[n],a=[s("ibs"),s(r.id||""),s(r.tag||""),R.encodeAndBuildRequest(r.url||[],","),s(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")))
}}o&&this.jsonProcessed.push(e)
},checkFirstPartyCookie:function(e,t,i){var n="syncOnPage"===i,r=n?y:A;
g._readVisitor();
var a,s,o=g._getField(r),l=!1,u=!1,c=Math.ceil((new Date).getTime()/h.MILLIS_PER_DAY);
o?(a=o.split("*"),s=this.pruneSyncData(a,e.id,c),l=s.dataPresent,u=s.dataValid,l&&u||this.fireSync(n,e,t,a,r,c)):(a=[],this.fireSync(n,e,t,a,r,c))
},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;
for(r=0;
r<e.length;
r++){n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--)
}return{dataPresent:s,dataValid:o}
},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH){for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)
});
e.join("*").length>this.MAX_SYNCS_LENGTH;
){e.shift()
}}},fireSync:function(e,t,i,n,r,a){var s=this;
if(e){if("img"===t.tag){var o,l,u,c,d=t.url,f=g.loadSSL?"https:":"http:";
for(o=0,l=d.length;
o<l;
o++){u=d[o],c=/^\/\//.test(u);
var _=new Image;
R.addListener(_,"load",function(e,t,i,n){return function(){s.onPagePixels[e]=null,g._readVisitor();
var a,o=g._getField(r),l=[];
if(o){a=o.split("*");
var u,c,d;
for(u=0,c=a.length;
u<c;
u++){d=a[u],d.match("^"+t.id+"-")||l.push(d)
}}s.setSyncTrackingData(l,t,i,n)
}
}(this.onPagePixels.length,t,r,a)),_.src=(c?f:"")+u,this.onPagePixels.push(_)
}}}else{this.addMessage(i),this.setSyncTrackingData(n,t,r,a)
}},addMessage:function(e){var t=encodeURIComponent,i=t(g._enableErrorReporting?"---destpub-debug---":"---destpub---");
this.messages.push((h.POST_MESSAGE_ENABLED?"":i)+e)
},setSyncTrackingData:function(e,t,i,n){e.push(t.id+"-"+(n+Math.ceil(t.ttl/60/24))),this.manageSyncsSize(e),g._setField(i,e.join("*"))
},sendMessages:function(){var e,t=this;
this.messages.length?h.POST_MESSAGE_ENABLED?(e=encodeURIComponent("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(e),setTimeout(function(){t.sendMessages()
},this.messageSendingInterval)):this.sendingMessages=!1
},postMessage:function(e){g._xd.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)
},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;
"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))
},processIDCallData:function(e){(null==this.url||e.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof g._subdomain&&g._subdomain.length?this.subdomain=g._subdomain:this.subdomain=e.subdomain||"",this.url=this.getUrl()),e.ibs instanceof Array&&e.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(g.idSyncAttachIframeOnWindowLoad?(m.windowLoaded||"complete"===p.readyState||"loaded"===p.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof g.idSyncIDCallResult?g.idSyncIDCallResult(e):this.requestToProcess(e),"function"==typeof g.idSyncAfterIDCallResult&&g.idSyncAfterIDCallResult(e)
},canMakeSyncIDCall:function(e,t){return g._forceSyncIDCall||!e||t-e>h.DAYS_BETWEEN_SYNC_ID_CALLS
},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(document.body?t.attachIframe():setTimeout(e,30))
}var t=this;
e()
}};
g._destinationPublishing=F,g.timeoutMetricsLog=[];
var N,x={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case D:!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;
break;
case E:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;
break;
case T:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t
}}};
g.isClientSideMarketingCloudVisitorID=function(){return x.isClientSideMarketingCloudVisitorID
},g.MCIDCallTimedOut=function(){return x.MCIDCallTimedOut
},g.AnalyticsIDCallTimedOut=function(){return x.AnalyticsIDCallTimedOut
},g.AAMIDCallTimedOut=function(){return x.AAMIDCallTimedOut
},g.idSyncGetOnPageSyncInfo=function(){return g._readVisitor(),g._getField(y)
},g.idSyncByURL=function(e){var t=u(e||{});
if(t.error){return t.error
}var i,n,r=e.url,a=encodeURIComponent,s=F;
return r=r.replace(/^https:/,"").replace(/^http:/,""),i=R.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"
},g.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,g.idSyncByURL(e)):"Error: config or config.dpuuid is empty"
},g._compareVersions=function(e,t){if(e===t){return 0
}var i=e.toString().split("."),n=t.toString().split(".");
return c(i.concat(n))?(d(i,n),f(i,n)):NaN
},g._getCookieVersion=function(e){e=e||g.cookieRead(g.cookieName);
var t=h.VERSION_REGEX.exec(e);
return t&&t.length>1?t[1]:null
},g._resetAmcvCookie=function(e){var t=g._getCookieVersion();
t&&!R.isLessThan(t,e)||R.removeCookie(g.cookieName)
},g.setAsCoopSafe=function(){j=!0
},g.setAsCoopUnsafe=function(){j=!1
},e.indexOf("@")<0&&(e+="@AdobeOrg"),g.marketingCloudOrgID=e,g.cookieName="AMCV_"+e,g.sessionCookieName="AMCVS_"+e,g.cookieDomain=g._getDomain(),g.cookieDomain===_.location.hostname&&(g.cookieDomain=""),g.loadSSL=_.location.protocol.toLowerCase().indexOf("https")>=0,g.loadTimeout=30000,g.CORSErrors=[],g.marketingCloudServer=g.audienceManagerServer="dpm.demdex.net",g.sdidParamExpiry=30;
var V={};
V[k]=!0,V[L]=!0;
var j=null;
if(t&&"object"==typeof t){var U;
for(U in t){S(U)&&(g[U]=t[U])
}g.idSyncContainerID=g.idSyncContainerID||0,j="boolean"==typeof g.isCoopSafe?g.isCoopSafe:R.parseBoolean(g.isCoopSafe),g.resetBeforeVersion&&g._resetAmcvCookie(g.resetBeforeVersion),g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl(),g._readVisitor();
var H=g._getField(M),B=Math.ceil((new Date).getTime()/h.MILLIS_PER_DAY);
!g.idSyncDisableSyncs&&F.canMakeSyncIDCall(H,B)&&(g._setFieldExpire(L,-1),g._setField(M,B)),g.getMarketingCloudVisitorID(),g.getAudienceManagerLocationHint(),g.getAudienceManagerBlob(),g._mergeServerState(g.serverState)
}else{g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl()
}if(!g.idSyncDisableSyncs){F.checkDPIframeSrc();
var G=function(){var e=F;
e.readyToAttachIframe()&&e.attachIframe()
};
R.addListener(_,"load",function(){m.windowLoaded=!0,G()
});
try{g._xd.receiveMessage(function(e){F.receiveMessage(e.data)
},F.iframeHost)
}catch(e){}}g.whitelistIframeDomains&&h.POST_MESSAGE_ENABLED&&(g.whitelistIframeDomains=g.whitelistIframeDomains instanceof Array?g.whitelistIframeDomains:[g.whitelistIframeDomains],g.whitelistIframeDomains.forEach(function(t){var i=new a(e,t),n=s(g,i);
g._xd.receiveMessage(n,t)
}))
};
o.getInstance=function(e,t){if(!e){throw new Error("Visitor requires Adobe Marketing Cloud Org ID")
}e.indexOf("@")<0&&(e+="@AdobeOrg");
var n=function(){var t=i.s_c_il;
if(t){for(var n=0;
n<t.length;
n++){var r=t[n];
if(r&&"Visitor"===r._c&&r.marketingCloudOrgID===e){return r
}}}}();
if(n){return n
}var a=new o(e),s=a.isAllowed();
return function(){i.s_c_il.splice(--i.s_c_in,1)
}(),function(){try{return i.self!==i.parent
}catch(e){return !0
}}()&&!s&&i.parent?new r(e,t,a,i.parent):new o(e,t)
},n(),i.Visitor=o,t.exports=o
}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})
},{"./ChildVisitor":1,"./Message":2,"./utils/makeChildMessageListener":9}],4:[function(c,b,a){a.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},a.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},a.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},a.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"},a.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},a.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"}
},{}],5:[function(d,b,a){var g=d("../enums"),c=g.STATE_KEYS_MAP;
b.exports=function(k){function j(){}function h(m,l){var o=this;
return function(){var n=k(0,c.MCMID),i={};
return i[c.MCMID]=n,o.setStateAndPublish(i),l(n),n
}
}this.getMarketingCloudVisitorID=function(l){l=l||j;
var m=this.findField(c.MCMID,l),i=h.call(this,c.MCMID,l);
return void 0!==m?m:i()
}
}
},{"../enums":4}],6:[function(d,b,a){var g=d("../enums"),c=g.ASYNC_API_MAP;
b.exports=function(){Object.keys(c).forEach(function(h){this[c[h]]=function(i){this.callbackRegistry.add(h,i)
}
},this)
}
},{"../enums":4}],7:[function(j,d,c){var k=j("../enums"),h=k.MESSAGES,b=k.ASYNC_API_MAP,g=k.SYNC_API_MAP;
d.exports=function(){function m(){}function l(q,p){var n=this;
return function(){return n.callbackRegistry.add(q,p),n.messageParent(h.GETSTATE),""
}
}function a(n){this[b[n]]=function(q){q=q||m;
var p=this.findField(n,q),i=l.call(this,n,q);
return void 0!==p?p:i()
}
}function o(i){this[g[i]]=function(){return this.findField(i,m)||{}
}
}Object.keys(b).forEach(a,this),Object.keys(g).forEach(o,this)
}
},{"../enums":4}],8:[function(d,b,a){function g(){return{callbacks:{},add:function(k,j){this.callbacks[k]=this.callbacks[k]||[];
var h=this.callbacks[k].push(j)-1;
return function(){this.callbacks[k].splice(h,1)
}
},execute:function(k,j){if(this.callbacks[k]){j=void 0===j?[]:j,j=j instanceof Array?j:[j];
try{for(;
this.callbacks[k].length;
){var h=this.callbacks[k].shift();
"function"==typeof h?h.apply(null,j):h instanceof Array&&h[1].apply(h[0],j)
}delete this.callbacks[k]
}catch(k){}}},executeAll:function(i,h){(h||i&&!c.isObjectEmpty(i))&&Object.keys(this.callbacks).forEach(function(k){var j=void 0!==i[k]?i[k]:"";
this.execute(k,j)
},this)
},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)
}}
}var c=d("./utils");
b.exports=g
},{"./utils":11}],9:[function(j,m,h){var d=j("../enums"),b=j("./utils"),k=d.MESSAGES,p=d.ALL_APIS,c=d.ASYNC_API_MAP,g=d.FIELDGROUP_TO_FIELD;
m.exports=function(r,y){function l(){var i={};
return Object.keys(p).forEach(function(u){var z=p[u],t=r[z]();
b.isValueEmpty(t)||(i[u]=t)
}),i
}function a(){var i=[];
return r._loading&&Object.keys(r._loading).forEach(function(t){if(r._loading[t]){var u=g[t];
i.push(u)
}}),i.length?i:null
}function x(u){return function n(z){var i=a();
if(i){var t=c[i[0]];
r[t](n,!0)
}else{u()
}}
}function w(t,u){var i=l();
y.send(t,u,i)
}function v(i){o(i),w(i,k.HANDSHAKE)
}function q(i){x(function(){w(i,k.PARENTSTATE)
})()
}function o(t){function z(i){u.call(r,i),y.send(t,k.PARENTSTATE,{CUSTOMERIDS:r.getCustomerIDs()})
}var u=r.setCustomerIDs;
r.setCustomerIDs=z
}return function(i){if(!y.isInvalid(i)){(y.parse(i).prefix===k.HANDSHAKE?v:q)(i.source)
}}
}
},{"../enums":4,"./utils":11}],10:[function(c,b,a){Object.keys=Object.keys||function(h){var g=[];
for(var d in h){g.hasOwnProperty.call(h,d)&&g.push(d)
}return g
},Array.prototype.forEach=Array.prototype.forEach||function(j,g){for(var d=this,k=0,h=d.length;
k<h;
k++){j.call(g,d[k],k,d)
}},Object.assign=Object.assign||function(h){for(var g,d,j=1;
j<arguments.length;
++j){d=arguments[j];
for(g in d){Object.prototype.hasOwnProperty.call(d,g)&&(h[g]=d[g])
}}return h
}
},{}],11:[function(c,b,a){a.isObjectEmpty=function(d){return d===Object(d)&&0===Object.keys(d).length
},a.isValueEmpty=function(d){return""===d||a.isObjectEmpty(d)
}
},{}]},{},[1,2,3,4]);
var visitor=Visitor.getInstance("8D6C67C25245AF020A490D4C@AdobeOrg",{trackingServer:"omtr1.partners.salesforce.com",trackingServerSecure:"omtr2.partners.salesforce.com",marketingCloudServer:"omtr1.partners.salesforce.com",marketingCloudServerSecure:"omtr2.partners.salesforce.com"});
if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
(function(a){a.toJSON=function(b){if(typeof(JSON)=="object"&&JSON.stringify){return JSON.stringify(b)
}};
a.evalJSON=function(b){if(typeof(JSON)=="object"&&JSON.parse){return JSON.parse(b)
}};
a.secureEvalJSON=function(b){if(typeof(JSON)=="object"&&JSON.parse){return JSON.parse(b)
}}
})(jQuery);
var Url={encode:function(a){return encodeURI(a)
},decode:function(a){return decodeURI(a)
},encodeComponent:function(a){return encodeURIComponent(a)
},decodeComponent:function(a){return decodeURIComponent(a)
},getFullUrl:function(a){try{var j=/^(https?:)?\/\//;
var b=(a.match(j)==null);
var d=a.lastIndexOf(".");
var c=com.salesforce.www.App.config.domainPrefixes;
if(b&&d>0&&c!=null){var g=a.substring(d+1);
var i=c[g];
if(i!=null){if(a.indexOf("/")!=0){var k=this.sanitizedPathname();
a=k.substring(0,k.lastIndexOf("/")+1)+a
}return i+a
}}}catch(h){}return a
},sanitizedPathname:function(){return encodeURI(decodeURIComponent(document.location.pathname).replace(/<\/?[^>]+(>|$)/g,"").replace(/>/g,"").replace(/['";]/g,""))
}};
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var a="";
var m,k,h,l,j,g,d;
var b=0;
c=Base64._utf8_encode(c);
while(b<c.length){m=c.charCodeAt(b++);
k=c.charCodeAt(b++);
h=c.charCodeAt(b++);
l=m>>2;
j=((m&3)<<4)|(k>>4);
g=((k&15)<<2)|(h>>6);
d=h&63;
if(isNaN(k)){g=d=64
}else{if(isNaN(h)){d=64
}}a=a+this._keyStr.charAt(l)+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(d)
}return a
},decode:function(c){var a="";
var m,k,h;
var l,j,g,d;
var b=0;
c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");
while(b<c.length){l=this._keyStr.indexOf(c.charAt(b++));
j=this._keyStr.indexOf(c.charAt(b++));
g=this._keyStr.indexOf(c.charAt(b++));
d=this._keyStr.indexOf(c.charAt(b++));
m=(l<<2)|(j>>4);
k=((j&15)<<4)|(g>>2);
h=((g&3)<<6)|d;
a=a+String.fromCharCode(m);
if(g!=64){a=a+String.fromCharCode(k)
}if(d!=64){a=a+String.fromCharCode(h)
}}a=Base64._utf8_decode(a);
return a
},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");
var a="";
for(var g=0;
g<b.length;
g++){var d=b.charCodeAt(g);
if(d<128){a+=String.fromCharCode(d)
}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);
a+=String.fromCharCode((d&63)|128)
}else{a+=String.fromCharCode((d>>12)|224);
a+=String.fromCharCode(((d>>6)&63)|128);
a+=String.fromCharCode((d&63)|128)
}}}return a
},_utf8_decode:function(a){var b="";
var d=0;
var g=c1=c2=0;
while(d<a.length){g=a.charCodeAt(d);
if(g<128){b+=String.fromCharCode(g);
d++
}else{if((g>191)&&(g<224)){c2=a.charCodeAt(d+1);
b+=String.fromCharCode(((g&31)<<6)|(c2&63));
d+=2
}else{c2=a.charCodeAt(d+1);
c3=a.charCodeAt(d+2);
b+=String.fromCharCode(((g&15)<<12)|((c2&63)<<6)|(c3&63));
d+=3
}}}return b
}};
function CookieHandler(){this.setCookie=function(c,h,i,g){g=g?g:Server.getCookieDomain();
var a="";
var d="";
var b=new Date();
b.setTime(b.getTime()+(-1*1000));
d="; expires="+b.toGMTString();
if(typeof(i)!="undefined"){b.setTime(b.getTime()+(i*1000));
a="; expires="+b.toGMTString()
}document.cookie=c+"="+h+d+"; path=/";
document.cookie=c+"="+h+a+"; path=/; domain="+g
};
this.getCookie=function(b){b=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var g=a[d];
while(g.charAt(0)==" "){g=g.substring(1,g.length)
}if(g.indexOf(b)==0){return g.substring(b.length,g.length)
}}return null
};
this.deleteCookie=function(a){this.setCookie(a,"",-1);
this.setCookie(a,"",-1,document.location.hostname)
}
}var Util=Util||{};
(function($){$.extend(Util,{ua:navigator.userAgent,isTouch:"createTouch" in document,isOkAMO:function(str){return typeof str==="string"&&str.length<=100&&/^[a-zA-Z0-9\-@:_]+$/.test(str)
},redirect:function(destination){var cookiejar=new CookieHandler();
var referrer=document.referrer?document.referrer:"";
cookiejar.setCookie("referrer",escape(referrer),60);
top.location.href=destination
},isValidJson:function(jsonString){if(!jsonString){return false
}return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(jsonString.replace(/"(\\.|[^"\\])*"/g,"")))&&eval("("+jsonString+")")
},parseJSON:function(str){if(!str){return{}
}return $.secureEvalJSON(str)
},toJSON:function(obj){if(!obj){return""
}return $.toJSON(obj)
},stripXssChars:function(original){return original.replace(/[<>:;#$%()]/gi,"")
},getCookie:function(cookieName){var cookieVal=(new CookieHandler()).getCookie(cookieName);
cookieVal=cookieVal==null?"":Url.decodeComponent(cookieVal);
if(this.isValidJson(cookieVal)){return this.parseJSON(cookieVal)
}return cookieVal
},setCookie:function(val,cookieName,expiration,domain){var cookieVal="";
if(typeof(val)=="object"){cookieVal=this.toJSON(val)
}else{if(typeof(val)=="string"||typeof(val)=="number"){cookieVal=val
}else{return false
}}(new CookieHandler()).setCookie(cookieName,Url.encodeComponent(cookieVal),expiration,domain||"")
},deleteCookie:function(cookieName){(new CookieHandler()).deleteCookie(cookieName)
},getJSONCookie:function(cookieName){var cookieVal=(new CookieHandler()).getCookie(cookieName);
cookieVal=cookieVal==null?"":Url.decodeComponent(cookieVal);
if(!this.isValidJson(cookieVal)){return{}
}return this.parseJSON(cookieVal)
},setJSONCookie:function(vals,cookieName,expiration,domain){var cookieVal=this.toJSON(vals);
(new CookieHandler()).setCookie(cookieName,Url.encodeComponent(cookieVal),expiration,domain)
},convert15To18:function(id){var isInvalidInput=!id||id.length!==15||id.indexOf("70")!==0;
if(isInvalidInput){return id
}var suffix="";
for(var i=0;
i<3;
i++){var flags=0;
for(var j=0;
j<5;
j++){var c=id.charAt(i*5+j);
if(c>="A"&&c<="Z"){flags+=1<<j
}}if(flags<=25){suffix+="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(flags)
}else{suffix+="012345".charAt(flags-26)
}}return id+suffix
},getParam:function(name,targetURL){if(!targetURL){targetURL=window.location.href
}else{if(targetURL.indexOf("?")==-1){targetURL="?"+targetURL
}}targetURL=Url.decodeComponent(targetURL);
var regexS="[\\?&]+"+name+"=([^&#]*)";
var regex=new RegExp(regexS,"i");
var results=regex.exec(targetURL);
if(results==null){return""
}else{return results[1].replace(/^[ \t]+|[ \t]+$/,"")
}},cleanUrlData:function(val){if(!val){return""
}val=val.replace(/\+/g," ");
val=val.replace(/[',"]/g,"");
val=val.replace(/\t/g,"");
val=val.replace(/\n/g,"");
val=val.toLowerCase();
return val
},countChars:function(str,chr){var count=0;
for(var i=0;
i<str.length;
i++){if(str.charAt(i)==chr){count++
}}return count
},deDupe:function(list){if(!list||typeof(list)=="string"){return""
}var seen={};
return $(list).filter(function(item){return seen.hasOwnProperty(item)?false:(seen[item]=true)
})
},getMeta:function(name){var content="";
$("meta").each(function(){var attr="";
if($(this).attr("name")===name){attr="name"
}else{if($(this).attr("property")===name){attr="property"
}}if(attr){content=$(this).attr("content");
return false
}});
return content
},isIOS:function(){return this.isIPhone()||this.isIPad()
},isIPhone:function(){return(this.ua.match(/iPhone/i)!=null)||(this.ua.match(/iPod/i)!=null)
},isIPad:function(){return(this.ua.match(/iPad/i)!=null)
},getScreenSize:function(){var $w=$(window);
return[$w.width(),$w.height()]
},isRobot:function(){return(this.ua.match(/google web preview/i)!=null)||(this.ua.match(/gomezagent/i)!=null)||(this.ua.match(/dejaclick/i)!=null)||(this.ua.match(/KTXN/i)!=null)
},getHref:function(linkObj){try{if(linkObj.href&&!(linkObj.href==document.location.href||linkObj.href=="#"||linkObj.href.indexOf(document.location.href+"#")>-1)){return linkObj.href
}else{if(!(linkObj.getAttribute("sfdc:href")==""||linkObj.getAttribute("sfdc:href")==null)){return linkObj.getAttribute("sfdc:href")
}else{return""
}}}catch(ex){return""
}},getDriver:function(clickedUrl){if(!clickedUrl){return""
}else{if(Util.getParam("d",clickedUrl).length===18){clickedUrl=clickedUrl.replace("?d="+Util.getParam("d",clickedUrl),"?");
clickedUrl=clickedUrl.replace("&d="+Util.getParam("d",clickedUrl),"&")
}}if(!document.location.search){return clickedUrl
}var qParams=document.location.search.substring(1).split("&");
if(clickedUrl.indexOf("?")+1===clickedUrl.length){clickedUrl=clickedUrl.substring(0,clickedUrl.length-1)
}for(var i=0;
i<qParams.length;
i++){var param=qParams[i].substring(0,qParams[i].indexOf("="));
if(Util.getParam(param)){var from=param+"="+this.getParam(param,clickedUrl),to=param+"="+this.getParam(param);
if(this.getParam(param,clickedUrl)){clickedUrl=clickedUrl.replace("?"+from,"?"+to);
clickedUrl=clickedUrl.replace("&"+from,"&"+to)
}else{clickedUrl+=(clickedUrl.indexOf("?")>-1?"&":"?")+to
}}}if(Util.getParam("d",clickedUrl).length===18){clickedUrl=clickedUrl.replace(Util.getParam("d",clickedUrl),Util.getParam("d",clickedUrl).substring(0,15))
}return clickedUrl
},ellipsis:function(str,max){if(str.length<max){return str
}else{str=str.substring(0,max-3);
if(str.indexOf(" ")!=-1){if(" "!=str.charAt(str.length)){str=str.substring(0,str.lastIndexOf(" "))
}}return str+"..."
}},endsWith:function(val1,val2){if(!(val1||val2)||val1.indexOf(val2)===-1){return false
}else{if(val1.indexOf(val2)+val2.length===val1.length){return true
}}return false
},equalHeights:function(elSet){var tallestEl=0;
if(typeof elSet!=="undefined"){elSet.each(function(){var thisHeight=$(this).height();
if(thisHeight>tallestEl){tallestEl=thisHeight
}});
elSet.height(tallestEl)
}},moreLinkShowNext:function(el){$(el).hide().next().show();
return false
}})
})(jQuery);
var Server={isStaging:false,getAccount:function(){if(Util.getParam("trackAccount")){return Util.getParam("trackAccount")
}else{if(Util.isRobot()||!this.isProduction()){return this.stagingAccount
}else{return this.productionAccount
}}},isProduction:function(){if(Server.isStaging){return false
}if(this.productionDomains.length>0){for(var a in this.productionDomains){if(self.location.href.indexOf(this.productionDomains[a])>0){return true
}}}if(this.stagingDomains.length>0){for(var a in this.stagingDomains){if(self.location.href.indexOf(this.stagingDomains[a])>0){return false
}}}return false
},isProductionMachine:function(){try{return(com.salesforce.www.App.config.isProduction==true)
}catch(a){return false
}},isStage:function(){return !this.isProduction()
},getExternalDomains:function(){return this.externalDomains||[]
},getInternalDomains:function(){return this.internalDomains||[]
},getCookieDomain:function(){},productionAccount:"salesforcemarketing"+((document.location.href.indexOf("/dreamforce/")>-1)?",salesforcedreamforce":""),stagingAccount:"salesforcedevnew",productionDomains:["www.salesforce.com","a.sfdcstatic.com","c.salesforce.com","blogs.salesforce.com","certification.salesforce.com"],stagingDomains:[],internalDomains:[".salesforce.com","opinionlab.com","sfdc.net","a.sfdcstatic.com"],externalDomains:[".my.salesforce.com"],getCookieDomain:function(){var a=document.location.hostname;
return a.indexOf(".salesforce.com")>-1?".salesforce.com":"."+a
},cdnUrlPrefix:"http://www.sfdcstatic.com"};
var Targeter={xhr:null,buildXhr:function(b){var c,d="";
if(window.XMLHttpRequest&&!(window.ActiveXObject)){try{c=new XMLHttpRequest();
if(b){c.withCredentials="true"
}}catch(a){}}else{if(window.XDomainRequest){try{c=new XDomainRequest();
d="xdomain"
}catch(a){}}else{if(window.ActiveXObject){try{c=new ActiveXObject("Msxml2.XMLHTTP")
}catch(a){try{c=new ActiveXObject("Microsoft.XMLHTTP")
}catch(a){}}}}}return{xhr:c,method:d}
},getData:function(a,c,g){if(!(a&&c)){return false
}try{var d=this.buildXhr(g);
if(d.method=="xdomain"){d.xhr.open("GET",a);
d.xhr.onload=function(){var h=Util.parseJSON(this.responseText);
return c.call(this,h)
}
}else{d.xhr.open("GET",a,true);
d.xhr.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){try{var i=Util.parseJSON(this.responseText);
return c.call(this,i)
}catch(h){}}}}
}d.xhr.send()
}catch(b){}}};
"use strict";
if(typeof digitalData==="undefined"){var digitalData={page:{},user:[{profile:{0:{}}}],products:[],event:[],flags:{},ptc:(function(){var a=localStorage.getItem("ptc")||"{}";
if(!Util.isValidJson(a)){webactstoragedata="{}";
localStorage.removeItem("ptc")
}return JSON.parse(a)
})(),localStorage:(function(){var a=localStorage.getItem("webactls")||"{}";
if(!Util.isValidJson(a)){a="{}";
localStorage.removeItem("webactls")
}return JSON.parse(a)
})()}
}(function(u){(function(){if(typeof window.CustomEvent==="function"){return false
}function O(Q,R){R=R||{bubbles:false,cancelable:false,detail:undefined};
var P=document.createEvent("CustomEvent");
P.initCustomEvent(Q,R.bubbles,R.cancelable,R.detail);
return P
}O.prototype=window.Event.prototype;
window.CustomEvent=O
})();
var m=false;
var y={BEFORE_PAGE_LOAD:"beforepageload",PRODUCT_ADDED:"productadded",PROFILE_ADDED:"profileadded",ELEMENT_ADDED:"elementadded"};
var o={};
var r=(function(){var P="MockTagManager";
var S="event";
var V="pageLoad";
var R="trackLink";
function U(){return(typeof window[P]!=="undefined")
}function O(X){return U()&&typeof window[P][X]==="function"
}function Q(){if(O(V)){return window[P][V].apply(this,arguments)
}return false
}function T(){if(O(S)){return window[P][S].apply(this,arguments)
}return false
}function W(){if(O(R)){return window[P][R].apply(this,arguments)
}return false
}return{ready:U,load:Q,event:T,link:W}
}());
function a(O){return !_.isUndefined(O)&&!_.isNull(O)
}function t(O){return !a(O)||_.isEmpty(O)
}function x(O,R){if(!t(O)){var P="DataLayer:"+O;
var Q=new CustomEvent(P,R||{});
document.dispatchEvent(Q);
h(P)
}}function F(O,Q){if(t(o[O])){o[O]={fired:false,stack:[]}
}var P=function(){try{Q.apply(arguments)
}catch(R){console.log("Error executing handler for event"+O)
}};
if(!o[O].fired){o[O].stack.push(P)
}else{P()
}}function h(Q){if(!t(o[Q])){var P=o[Q].stack;
function R(){o[Q].stack=[];
o[Q].fired=true
}function S(T,U){return _.compose(T,U)
}var O=_.reduce(P,S,R);
O()
}}function j(O,P,Q){if(r.ready()&&a(O)&&!t(P)&&a(Q)){O[P]=Q
}}function E(S,R){if(!t(S)){var T=/(\w[\w\d]+)\[([\d]+)\]/i;
var Q=/(\w[\w\d]+)\[['"]?([\w]+)['"]?\]/i;
function O(X,U,Y){if(t(U)){return Y
}else{var aa=U.shift();
if(T.test(aa)){var V=aa.match(T);
var Z=V[1];
var W=V[2];
if(typeof X[Z]!=="object"){X[Z]=[]
}if(!X[Z][W]){X[Z][W]={}
}if(!U.length){X[Z][W]=O(X,U,Y)
}else{O(X[Z][W],U,Y)
}}else{if(Q.test(aa)){var V=aa.match(Q);
var Z=V[1];
var W=V[2];
if(typeof X[Z]!=="object"){X[Z]={}
}if(!X[Z][W]){X[Z][W]={}
}if(!U.length){X[Z][W]=O(X,U,Y)
}else{O(X[Z][W],U,Y)
}}else{if(!X[aa]){X[aa]={}
}if(!U.length){X[aa]=O(X,U,Y)
}else{O(X[aa],U,Y)
}}}}return Y
}var P=S.split(".");
return O(u,P,R)
}return false
}function B(P,O){if(r.ready()&&_.isArray(P)&&a(O)){P.push(O)
}}function z(O,Q){if(!t(O)&&!t(Q)){j(u.page,O,Q);
var P={path:"page."+O,value:Q};
x(y.ELEMENT_ADDED,P)
}}function H(P){var O=P;
if(P&&P.toLowerCase()==="legacy"){O=0
}return u.user[0].profile[O]
}function w(O,P){if(!t(O)&&!t(P)){var Q=P;
Q.profileID=O;
if(O&&O.toLowerCase()==="legacy"){O=0
}j(u.user[0].profile,O,Q);
x(y.PROFILE_ADDED,Q)
}}function k(P,Q){if(!t(P)){var O={productInfo:{productName:P},category:{primaryCategory:Q||""}};
B(u.products,O);
x(y.PRODUCT_ADDED,O)
}}function v(P,O){this.eventInfo={eventName:P,eventID:P,timeStamp:new Date()};
if(!t(O)){this.eventInfo.eventPoints=O.value||1;
if(!_.isEmpty(O.primaryCategory)){this.eventInfo.category={primaryCategory:O.primaryCategory}
}}return this
}function l(O){return(_.isObject(O)&&_.has(O,"eventInfo"))
}function M(P,O){var Q=null;
if(l(P)){Q=P
}else{if(_.isString(P)){Q=new v(P,O)
}}return Q
}function g(P,O){var Q=M(P,O);
if(a(Q)){r.event(Q);
B(u.event,Q);
x(Q.eventInfo.eventID,Q)
}}function D(Q,O,P){if(!t(Q)){r.link(Q,_(O).chain().map(function(R){var S=M(R,{primaryCategory:Q});
u.util.addBehavior(R);
return S
}).value(),P)
}}function G(O,Q){function P(S,T){if(S&&T.length){var U=T.shift();
return P(S[U],T)
}return S
}if(Q&&Q.length){var R=Q.replace(/\[/g,".").replace(/\]|\'|\"/g,"").split(".");
return P(O,R)
}return null
}function N(O){return G(u,O)
}function q(O){return G(u.localStorage,O)||""
}function I(P,R,O,Q){if(P&&R&&P.length>=1&&R.length>=1){Util.setCookie(R,encodeURIComponent(P),O,Q||location.hostname)
}return R
}function C(O){if(O&&O.length>=1){O=encodeURIComponent(O);
return Util.getCookie(O)
}return null
}function n(R,P,Q){var S=C(P);
if(S){var O=Q?(Q*86400):void 0;
I(P,R,O,location.hostname)
}return R==S?"":R
}function d(R,P,Q){var O=Q?(Q*86400):void 0;
if(R){I(P,R,O)
}return C(P)
}function i(){if(r.ready()&&!m){r.load();
m=true
}}function A(){h(y.BEFORE_PAGE_LOAD)
}F(y.BEFORE_PAGE_LOAD,i);
function b(P,O,R){var Q=_.reduce(R,function(S,T){var U=u.util.getElement(T);
S.push({element:T,value:U});
return S
},[]);
K();
u.util.trackPageGlobal();
u.page.pagename=P;
Page.setPrevious(u.page.pagename);
r.load(_.map(O,M),R,Q)
}function K(){u.page={};
u.user[0].profile={0:{}};
u.event=[];
u.product=[];
u.flags={}
}function c(){localStorage.setItem("webactls",JSON.stringify(u.localStorage));
return true
}function L(R,Q,P,V){var T=Page.getLocale();
var W="";
var O="";
var U=[];
var X=[];
u.util.addPageData("formerrors","");
u.util.addPageData("formerrorsall","");
u.util.addPageData("formerrorspercentage","");
if(!R){return false
}for(var S in R){var Y=(T+":"+S);
if((W+Y).length<100){W+=(W==""?"":"|")+Y
}if((O+Y).length<255){O+=(O==""?"":"|")+Y
}}if(W){W=W.toLowerCase();
O=O.toLowerCase();
u.util.addPageData("formerrors",W);
X.push("page.formerrors");
u.util.addPageData("formerrorsall",O);
X.push("page.formerrorsall");
u.util.addPageData("formerrorspercentage",Math.round(Q/(P+Q)*100).toString()+"%");
X.push("page.formerrorspercentage");
u.util.addBehavior("form_errors");
U.push("form_errors")
}else{u.util.setFormFillVals();
X.push("user[0].profile[0].usercompanysize");
X.push("user[0].profile[0].usercompanycountry");
X.push("user[0].profile[0].userprimaryprodinterest");
X.push("user[0].profile[0].usercompanyname");
X.push("user[0].profile[0].userfirstformcompletetime")
}if(V){Page.ajaxFormComplete=true;
u.util.addBehavior("formconfirmationview");
U.push("formconfirmationview");
if(vp.getFormCompleteId()){u.user[0].profile[0].transactionid=vp.getFormCompleteId();
X.push("user[0].profile[0].transactionid");
u.util.addPageData("numberofformcompletes","+1");
X.push("page.numberofformcompletes");
u.util.addBehavior("formcompletesubmitbuttonclick");
U.push("formcompletesubmitbuttonclick");
if(Page.isDemo()){u.util.addBehavior("demoformcomplete");
U.push("demoformcomplete")
}if(Page.isSignup()){u.util.addBehavior("signupformcomplete");
U.push("signupformcomplete")
}}}u.util.addBehavior("formbutton_clicks");
U.push("formbutton_clicks");
if(Page.hasChatForm()){u.util.addBehavior("chatview");
U.push("chatview")
}if(U.length===0){U.push("")
}u.util.trackBehavior("Form error tracking",U,X)
}function p(){u.util.trackBehavior("Ajax form view",[""],[])
}function J(O,P){var Q=[];
var R=[];
if(!O){return false
}if(!P){P="Social sharing"
}if(P==="Social signup"){u.util.addPageData("sharechannel",O);
R.push("page.sharechannel");
u.util.addPageData("customlink",P);
R.push("page.customlink")
}else{if(P==="Social success"){u.util.addBehavior("social_signin_success");
Q.push("social_signin_success")
}else{u.util.addBehavior("socialshares");
Q.push("socialshares");
u.util.addPageData("sharechannel",O);
R.push("page.sharechannel");
P=O+": social share"
}}if(Q.length===0){Q.push("")
}u.util.trackBehavior(P,Q,R)
}u.util={on:F,pageLoad:A,addPageData:z,getUserProfileByName:H,setUserProfileByName:w,addProduct:k,addBehavior:g,Behavior:v,trackBehavior:D,getElement:N,setElement:E,writeCookie:I,readCookie:C,getValueOnce:n,getAndPersistValue:d,dynamicPageLoad:b,event:y,saveLocalStorage:c,getLocalStorage:q,trackForm:L,trackAjaxForm:p,trackSocial:J}
}(digitalData));
"use strict";
(function(){if(digitalData&&digitalData.util){var k=digitalData.util;
k.mappings={};
k.mappings.adobe={};
var b={server:"page.server",pageName:"page.pagename",pageURL:"page.url",referrer:"page.referrer",transactionID:"user[0].profile[0].transactionid",linkType:"flags.linktype",pageLoaded:"flags.pageloaded",charSet:"page.charSet",channel:"page.sitesection",prevPage:"page.prevpage",campaign:"page.scampaign",products:"products",exitURL:"page.exiturl",list1:"page.campaignlist",eVar0:"page.scampaign",eVar1:"page.url",eVar2:"page.referrer",eVar3:"page.locale",eVar4:"user[0].profile[0].dayssincelastvisit",eVar5:"page.activityname",eVar6:"page.sitesection",eVar7:"page.videoname",eVar8:"page.pagename",eVar9:"user[0].profile[0].opinionlab.comments",eVar10:"user[0].profile[0].targetingcompanysize",eVar11:"page.pageloadtime",eVar12:"page.searchterm",eVar13:"page.interactionname",eVar14:"user[0].profile[0].usertype",eVar15:"user[0].profile[0].dreamforcerole",eVar16:"user[0].profile[0].usercompanysize",eVar17:"page.numberpageviews",eVar18:"user[0].profile[0].usercompanycountry",eVar19:"user[0].profile[0].userprimaryprodinterest",eVar20:"page.convertingpage",eVar21:"page.subsection",eVar22:"page.internaldrivers",eVar23:"user[0].profile[0].campaignmemberid",eVar24:"user[0].profile[0].timepartinghour",eVar25:"user[0].profile[0].timepartingday",eVar26:"user[0].profile[0].formfillstatus",eVar27:"page.scampaign ",eVar28:"page.offerid",eVar29:"page.dfregistrationtype",eVar30:"page.blogpostmeta",eVar31:"page.pageengagement",eVar32:"page.moduletracking",eVar33:"page.numofintsearches",eVar34:"user[0].profile[0].visitnumber",eVar35:"page.cloud",eVar36:"page.type",eVar37:"page.customlink",eVar38:"user[0].profile[0].usercompanyname",eVar39:"page.prevpage",eVar40:"page.authorName",eVar41:"user[0].profile[0].targetingcompanyindustry",eVar42:"page.emailid",eVar43:"page.numberofformcompletes",eVar44:"page.crossvisittrafficdrivertype",eVar45:"page.toporleftnav",eVar46:"page.sembrand",eVar47:"user[0].profile[0].utmcampaign",eVar48:"user[0].profile[0].utmmedium",eVar49:"user[0].profile[0].utmsource",eVar50:"page.captchatype",eVar51:"user[0].profile[0].utmterm",eVar52:"user[0].profile[0].targetingcompanyname",eVar53:"page.sharechannel",eVar54:"user[0].profile[0].userfirstformcompletetime",eVar55:"page.formerrorsall",eVar56:"page.formerrorspercentage",eVar57:"user[0].profile[0].orgId",eVar58:"user[0].profile[0].orgEdition",eVar59:"page.videoplayername",eVar60:"user[0].profile[0].propensitytobuy",eVar61:"page.appexlistingid",eVar62:"page.jobid",eVar63:"user[0].profile[0].targetingaudience",eVar64:"user[0].profile[0].transactionid",eVar65:"user[0].profile[0].dreamforceid",eVar66:"page.sfdcappname",eVar67:"page.sfdcappsubsection",eVar68:"page.walkthrough",eVar69:"user[0].profile[0].voicestormid",eVar70:"page.exiturl",eVar71:"page.partnerpromocode",eVar72:"page.formname",eVar73:"user[0].profile[0].accounttype",eVar74:"user[0].profile[0].customerstatus",eVar75:"page.subdomainReferrer",eVar76:"page.numberofpagesviewed",eVar77:"user[0].profile[0].neustar",eVar78:"page.airpr.re",eVar79:"page.airpr.rd",eVar80:"page.airpr.vi",eVar81:"user[0].profile[0].kxsfdc",eVar82:"user[0].profile[0].targetingcitystate",eVar83:"page.conductor.exportvariable",eVar84:"page.conductor.landingpage",eVar85:"page.conductor.url",eVar86:"page.conductor.keyword",eVar87:"page.videoduration",prop1:"page.url",prop2:"page.locale",prop3:"user[0].profile[0].opinionlab.rating",prop4:"page.pageloadtime",prop5:"page.activityname",prop6:"page.pageactivities                 ",prop7:"page.videoname",prop8:"page.urlnoqs",prop12:"page.searchterm",prop14:"user[0].profile[0].usertype",prop18:"user[0].profile[0].timepartinghour",prop19:"user[0].profile[0].timepartingday",prop21:"page.subsection",prop22:"page.drivertypepathing",prop23:"user[0].profile[0].visitnumber",prop27:"user[0].profile[0].detailedusertype",prop28:"user[0].profile[0].visitorid",prop29:"page.url",prop30:"page.pageengagement",prop31:"user[0].profile[0].logintype",prop32:"page.cloud",prop33:"page.type",prop34:"page.topnavigationlinks",prop35:"page.prevpagesanitized",prop37:"page.percentpageviewed",prop39:"page.namenolocale",prop40:"page.drivertype",prop42:"page.uiframework",prop43:"page.blogpostmeta",prop47:"page.numsearchresults",prop49:"page.segment",prop50:"page.reportsuite",prop52:"page.formerrors",prop53:"page.sfdcappname",prop54:"page.sfdcappsubsection",prop55:"page.diagnosticsleadindustry",prop56:"page.parallax",prop57:"page.visitorapi",prop58:"page.pageloadtime",prop59:"page.videoplayername",prop60:"page.overriden_url",prop75:"page.mboxversion"};
var g={event1:"onlinejobapp",event2:"topnavigationclicks",event3:"opinionlab_comments_positive",event4:"opinionlab_comments_negative",event5:"blogcomment",event6:"double_click_impressions",event7:"number_video_views",event8:"playground_interactions",event9:"doubleclick_clicks",event11:"pageview",event12:"intsearch",event14:"semsearches",event15:"seosearches",event16:"formview",event17:"formcompletesubmitbuttonclick",event19:"intdriverimp",event21:"demoformcomplete",event22:"signupformcomplete",event23:"autoformcomplete",event24:"livechats_initiated",event25:"intdriverclick",event26:"socialshares",event27:"formbutton_clicks",event28:"formconfirmationview",event29:"form_errors",event30:"df_registrations",event31:"social_signin_success",event32:"chatformshown",event33:"chatview",event34:"chatdrop",event36:"firsttimevisit",event37:"returnfivist",event38:"df_session_enrol",event39:"df_session_bookmark",event40:"df_interaction",event43:"displayadid",event44:"freetriallogin",event45:"newleadsadded_first_response",event46:"newleadsremoved_first_response",event47:"newopptysadded_first_response",event48:"newopptysremoved_first_response",event49:"newpipelineadded_first_response",event50:"newpipelineremoved_first_response",event51:"newleadsadded_last_response",event52:"newleadsremoved_last_response",event53:"newopptysadded_last_response",event54:"newopptysremoved_last_response",event55:"newpipelineadded_last_response",event56:"newpipelineremoved_last_response",event57:"newleadsadded_last_response",event58:"newleadsremoved_last_response",event59:"newopptysadded_last_response",event60:"newopptysremoved_last_response",event61:"newpipelineadded_last_response",event62:"newpipelineremoved_last_response",event63:"sent",event64:"delivered",event65:"exitlink",event66:"customlink",event67:"video_25percent_viewed",event68:"video_50percent_viewed",event69:"video_75percent_viewed",event70:"video_100percent_viewed",event71:"video_seconds_viewed",event72:"appexchange_listingid_accessedby_tzapi",event73:"pipelineadded_all_response",event74:"pipelineremoved_all_response",event75:"leadsadded_first_response",event76:"leadsremoved_first_response",event77:"opptysadded_first_response",event78:"opptysremoved_first_response",event79:"pipelineadded_first_response",event80:"pipelineremoved_first_response",event81:"conductor_sent",event82:"conductor_delivered",event83:"conductor_opened",event84:"conductor_clicked",event85:"conductor_score",event86:"conductor_denom",scRemove:"scremove"};
var j=_.chain(b).keys().reduce(function(n,q){var p=b[q];
if(p){var o=[];
if(n[p]&&n[p].length){o=n[p]
}o.push(q);
n[p]=o
}return n
},{}).value();
var m=_.invert(g);
function a(n){return _.chain(n).keys().reduce(function(p,o){p[o.toLowerCase()]=n[o];
return p
},{}).value()
}b=a(b);
g=a(g);
k.mappings.adobe.getDataElementName=function(o){var n=(typeof o=="string"?o.toLowerCase():"");
return b[n]
};
k.mappings.adobe.getEventName=function(o){var n=(typeof o=="string"?o.toLowerCase():"");
return g[n]
};
k.mappings.adobe.getAdobeProperties=function(o){var n=(typeof o=="string"?o.toLowerCase():"");
return j[n]
};
k.mappings.adobe.getAdobeEventId=function(o){var n=(typeof o=="string"?o.toLowerCase():"");
return m[n]
};
k.mappings.adobe.formatElement=function(n,o){switch(n.toLowerCase()){case"products":return i(o);
break;
case"crossvisittrafficdrivertype":return o?o.join(" ^ "):"";
break;
default:return o
}};
var d=[];
function i(n){return _(n).chain().uniq(false,function(o){return o.productInfo.productName+";"+o.category.productCategory
}).difference(d).reduce(function(o,q){if(q.category.primaryCategory==="intdriverimp"||q.category.primaryCategory==="intdriverclick"){var p=k.mappings.adobe.getAdobeEventId(q.category.primaryCategory);
o.push(";"+q.productInfo.productName+";;;"+p+"=1");
d.push(q)
}return o
},[]).value().join(",")
}}function h(){return !!window.s
}function l(n){var o=k.mappings.adobe.getAdobeEventId(n.eventInfo.eventID);
if(n.eventInfo.eventPoints>1){o+="="+n.eventInfo.eventPoints
}return o
}var c={};
c.pageLoad=function(r,t,q){if(h()){siteCatConfig.trackPageLoad();
_.map(q,function(v){digitalData.util.setElement(v.element,v.value)
});
_.map(r,digitalData.util.addBehavior);
if(r&&r.length){var n=_(r).chain().map(l).uniq().value().join(",");
s.events=n
}for(var p in t){var o=t[p];
var u=k.mappings.adobe.getAdobeProperties(o);
_.each(u,function(v){s[v]=digitalData.util.mappings.adobe.formatElement(o,k.getElement(o))
})
}s.canceldoplugins=true;
s.t();
s.canceldoplugins=false
}};
c.event=function(){};
c.trackLink=function(t,q,r){if(h()){if(q&&q.length){s.events=_(q).chain().map(l).uniq().value().join(",");
s.linkTrackEvents=_(q).chain().pluck("eventInfo").pluck("eventID").map(k.mappings.adobe.getAdobeEventId).uniq().value().join(",");
r.push("events");
var p=[];
for(var o in r){var n=r[o];
var u=k.mappings.adobe.getAdobeProperties(n);
p.push(u);
_.each(u,function(v){s[v]=digitalData.util.mappings.adobe.formatElement(n,k.getElement(n))
})
}s.linkTrackVars=_.chain(p).flatten().uniq().value().join(",");
s.linkTracked=true;
s.tl(true,"o",t);
s.linkTracked=false;
s.events="";
s.linkTrackVars="";
s.linkTrackEvents=""
}}};
window.MockTagManager=c
}());
"use strict";
(function(){if(digitalData&&digitalData.util){var k=digitalData.util;
k.media=k.media||{};
var l={};
var c="page.videoname";
var i="page.videoplayername";
var m="page.videoduration";
var a=[c,i,m];
var h={25:"video_25percent_viewed",50:"video_50percent_viewed",75:"video_75percent_viewed",100:"video_100percent_viewed"};
var g="number_video_views";
var j="video_seconds_viewed";
k.media.open=function(o,q,p){if(!_.isEmpty(o)){l[o]=new d(o,q,p);
l[o].timer.start();
k.setElement(m,0);
b(l[o].name,[g])
}};
k.media.stop=function(o,p){if(!_.isEmpty(o)&&_.isObject(l[o])){l[o].timer.pause()
}};
k.media.play=function(p,r,o,q){if(!_.isEmpty(p)&&_.isObject(l[p])){l[p].timer.resume()
}};
k.media.close=function(o){if(!_.isEmpty(o)&&_.isObject(l[o])){l[o].timer.stop();
b(o)
}};
k.media.trackElement=function(o){a.push(o)
};
function b(o,p){if(!_.isEmpty(o)&&_.isObject(l[o])){var q=l[o];
k.setElement(c,q.name);
k.setElement(i,q.player);
k.trackBehavior(digitalData.page.pagename,p||[],a)
}}function d(o,r,q){this.name=o;
this.length=r;
this.player=q;
this.timer=new n();
var u=0;
var p=_(h).chain().keys().sortBy(function(v){return Number(v)
}).reduce(function(w,x){var v=Math.floor(1000*r*(x/100));
w.push({milestone:v,event:h[x]});
return w
},[]).value();
var t=_(p).chain().pluck("milestone").min().value();
this.timer.onTick((function(v){return function(x){if(x>=t){var z=p.shift();
var w={value:Math.round((x-u)/1000)};
var y=new digitalData.util.Behavior(j,w);
k.setElement(m,Math.round(x/1000));
u=x;
b(v.name,[y,z.event]);
t=_(p).chain().pluck("milestone").min().value()
}}
}(this)));
return this
}function n(){var q={INITIALIZED:-1,COUNTING:0,PAUSED:1,STOPPED:2};
var p=100;
var v=0;
var u=0;
var o=[];
var t=q.INITIALIZED;
function r(){var w=_.now();
if(t===q.COUNTING){u+=w-v
}v=w;
if(t<q.STOPPED){window.setTimeout(r,p)
}_.map(o,function(x){x.apply(this,[u])
})
}this.start=function(){if(t===q.INITIALIZED){t=q.COUNTING;
v=_.now();
window.setTimeout(r,p)
}};
this.pause=function(){if(t===q.COUNTING){t=q.PAUSED;
v=_.now()
}};
this.resume=function(){if(t===q.PAUSED){t=q.COUNTING;
v=_.now()
}};
this.stop=function(){if(t<q.STOPPED){t=q.STOPPED;
v=_.now()
}};
this.onTick=function(w){o.push(w);
return this
};
this.getDuration=function(){return u
};
return this
}}}());
var SfdcWwwBase=SfdcWwwBase||{};
function VisitorProfile(){this.version="w172.1";
var c=new Date();
this.timestamp=c.getTime();
this.profileData=Util.getCookie("appxud")||{};
if(typeof(this.profileData)!="object"){this.profileData={};
Util.deleteCookie("appxud")
}this.activityData=Util.getCookie("webact")||{};
if(typeof(this.activityData)!="object"){this.activityData={};
Util.deleteCookie("webact")
}var g=["chat","db","kxsfdc","l_cloud","ptb","version"];
for(var d=0;
d<g.length;
d++){this.moveFieldToStorage(g[d]);
delete this.activityData[g[d]]
}if(this.isNewSession()){this.activityData.l_vdays=this.isNewVisitor()?-1:Math.round((this.timestamp-this.lastVisit())/(1000*60*60*24));
this.activityData.l_visit=this.getSession();
this.activityData.session=this.timestamp;
this.activityData.l_search="";
this.activityData.l_dtype=(""!=this.activityData.l_dtype&&typeof(this.activityData.l_dtype)!="undefined")?this.activityData.l_dtype:"";
this.activityData.l_page="";
if(this.lastVisit()>=this.firstVisit()){this.activityData.counter++;
this.activityData.pv=0
}digitalData.localStorage.chat=0
}this.idle=this.sessionTimer();
this.activityData.session=this.timestamp;
if(this.isNewVisitor()){this.activityData.counter=0;
if(this.firstVisit()==0){this.activityData.f_visit=this.timestamp;
digitalData.localStorage.version=this.version
}}if(typeof(this.customSetup)=="function"){this.customSetup()
}this.skipSave=false;
var b=Util.getParam("forceProfile");
if((b=="customer"&&!this.isCustomer())||(b=="prospect"&&this.isCustomer())){this.activityData.customer=(b=="customer"?this.timestamp:"");
this.skipSave=true
}if(this.getProperty("hash")&&(this.getProperty("fcid")||Util.getParam("FormCampaignId"))){this.setFormCompleteId()
}var a=false;
if(!this.isLoginPromo()){a=this.getDocoDoco()
}this.saveActivityData();
digitalData.util.saveLocalStorage()
}VisitorProfile.prototype.getBase64Cookie=function(b){var a=Util.getCookie(b);
return(a==null||!a)?"":Base64.decode(Url.decodeComponent(a))
};
VisitorProfile.prototype.getWWWCookie=function(c){try{var a=wwwCookies[c];
return Util.isValidJson(a)?Util.parseJSON(a):""
}catch(b){return""
}};
VisitorProfile.prototype.saveProfileData=function(){Util.setJSONCookie(this.profileData,"appxud",60*60*24*180);
return true
};
VisitorProfile.prototype.saveActivityData=function(){if(this.skipSave!=true){Util.setJSONCookie(this.activityData,"webact",60*60*24*365)
}return true
};
VisitorProfile.prototype.getActivity=function(a){if(this.activityData!=null){return(this.activityData[a]!=null?this.activityData[a]:"")
}else{return""
}};
VisitorProfile.prototype.moveFieldToStorage=function(a){if(typeof digitalData==="object"&&digitalData.localStorage&&this.activityData&&this.activityData[a]!=null){digitalData.localStorage[a]=this.activityData[a]
}};
VisitorProfile.prototype.isLoginPromo=function(){return window.location.pathname.indexOf("login-messages")!==-1
};
VisitorProfile.prototype.isCustomer=function(){return(this.getActivity("customer")>0)
};
VisitorProfile.prototype.isDeveloper=function(){return(this.getActivity("developer")>0)
};
VisitorProfile.prototype.isTrialUser=function(){return(this.getActivity("trial")>0)
};
VisitorProfile.prototype.hasCurrentTrial=function(){var a=1000*60*60*24;
if(((this.timestamp-this.getActivity("trial"))/a)<=30){return true
}else{if(((this.timestamp-this.getActivity("signup"))/a)<=30){return true
}else{return false
}}};
VisitorProfile.prototype.getVisitNumber=function(){return(this.getActivity("counter")>0?this.getActivity("counter"):0)+1
};
VisitorProfile.prototype.isNewVisitor=function(){return(this.lastVisit()==0)
};
VisitorProfile.prototype.lastVisit=function(){return(this.getActivity("l_visit")>0?this.getActivity("l_visit"):0)
};
VisitorProfile.prototype.getDaysSinceLastVisit=function(){if(this.getActivity("l_vdays")==-1){return"First Visit"
}else{if(this.getActivity("l_vdays")>-1&&this.getActivity("l_vdays")<=1){return"Less than 1 day"
}else{if(this.getActivity("l_vdays")>1&&this.getActivity("l_vdays")<=7){return"Less than 7 days"
}else{if(this.getActivity("l_vdays")>7&&this.getActivity("l_vdays")<=30){return"More than 7 days"
}else{if(this.getActivity("l_vdays")>30){return"More than 30 days"
}else{return"Cookies Not Supported"
}}}}}};
VisitorProfile.prototype.firstVisit=function(){return(this.getActivity("f_visit")>0?this.getActivity("f_visit"):0)
};
VisitorProfile.prototype.getSession=function(){return(this.getActivity("session")>0?this.getActivity("session"):0)
};
VisitorProfile.prototype.isNewSession=function(){var a=30*60;
if(this.sessionTimer()>a||this.newSession){this.newSession=true
}else{this.newSession=false
}return this.newSession
};
VisitorProfile.prototype.sessionTimer=function(){return(this.timestamp-this.getSession())/1000
};
VisitorProfile.prototype.getVersion=function(){return this.getActivity("version")
};
VisitorProfile.prototype.getFormCompleteId=function(){return this.fcid
};
VisitorProfile.prototype.setFormCompleteId=function(){var a=Util.getParam("FormCampaignId")||this.getProperty("fcid");
if(a){this.fcid=Util.convert15To18(a)+"|"+this.getProperty("hash");
this.saveProfileData()
}};
VisitorProfile.prototype.getType=function(){if(this.isEmployee()){return"employee"
}else{if(this.isCustomer()){return"customer"
}else{if(this.isDeveloper()){return"developer"
}else{if(this.getUserEmail()){return"known prospect"
}else{return"anonymous"
}}}}};
VisitorProfile.prototype.customSetup=function(){if(!this.isLoginPromo()){try{var j=document.location.protocol,c=Util.getParam("ipOverride"),b=j+"//api.demandbase.com/api/v2/ip.json?token=09dd7a8bed725339af3ce985f86800730b42b5cf"+(c!=""?"&query="+c:"");
var a=this;
Targeter.getData(b,function(k){digitalData.localStorage.db={name:!k.company_name?"":k.company_name.toLowerCase(),size:!k.employee_range?"":k.employee_range.toLowerCase(),sic:!k.primary_sic?"":k.primary_sic,ind:((!k.industry?"":(k.industry+(!k.sub_industry?"":":"+k.sub_industry)))).toLowerCase(),cmp:!k.db_campaign?"":k.db_campaign.toLowerCase(),aud:((!k.audience?"":(k.audience+(!k.audience_segment?"":":"+k.audience_segment)))).toLowerCase(),atype:!(k.watch_list&&k.watch_list.account_type)?"":k.watch_list.account_type,city:!k.city?"":k.city.toLowerCase(),state:!k.state?"":k.state.toLowerCase(),requestMade:true};
a.db=k;
digitalData.util.saveLocalStorage()
})
}catch(d){}}this.getNeustarInfo();
var g=this.OrgInfo.getStatus();
var i=this.OrgInfo.getType();
if(!this.isTrialUser()){if(g=="TRIAL"){this.activityData.trial=this.timestamp
}}if(!this.isCustomer()){if((g=="ACTIVE"||g=="DEMO"||g=="FREE")&&(i!="ME"&&i!="DE")){this.activityData.customer=this.timestamp
}}if(!this.isDeveloper()){if(i=="DE"){this.activityData.developer=this.timestamp
}}var h=Util.getParam("ef_id");
if(h&&Util.isOkAMO(h)){this.activityData.efid=h
}try{delete this.activityData.scores
}catch(d){}};
VisitorProfile.prototype.getTargeting=function(c,a){if(c&&a){var b=this.getActivity(c);
if(this.getActivity(c)){return this.getActivity(c)[a]?this.getActivity(c)[a]:""
}}return""
};
VisitorProfile.prototype.getTypeDetailed=function(){return this.getType()+":"+(this.isTrialUser()?"has-trial":"no-trial")
};
VisitorProfile.prototype.isEmployee=function(){if(typeof(App)!=="undefined"&&typeof(App.config)!=="undefined"&&typeof(App.config.profileUnmapped)!=="undefined"&&App.config.profileUnmapped==="employee"){return true
}else{if(typeof(SfdcWwwBase)!=="undefined"&&typeof(SfdcWwwBase.analyticsProfile)!=="undefined"&&typeof(SfdcWwwBase.analyticsProfile.isEmployee)!=="undefined"){return SfdcWwwBase.analyticsProfile.isEmployee
}}return false
};
VisitorProfile.prototype.getIdleTime=function(){var a=vp.idle;
if(0==a){return"No Previous SFDC Page"
}else{if(0<a&&a<=2){return"< 2 Seconds"
}else{if(2<a&&a<=5){return"2-5 Seconds"
}else{if(5<a&&a<=10){return"6-10 Seconds"
}else{if(10<a&&a<=15){return"11-15 Seconds"
}else{if(15<a&&a<=20){return"16-20 Seconds"
}else{if(20<a&&a<=30){return"21-30 Seconds"
}else{if(30<a&&a<=60){return"31-60 Seconds"
}else{if(60<a&&a<=120){return"1-2 Minutes"
}else{if(120<a&&a<=180){return"2-3 Minutes"
}else{if(180<a&&a<=300){return"3-5 Minutes"
}else{return"> 5 Minutes"
}}}}}}}}}}}};
VisitorProfile.prototype.getFirstFormCompleteTime=function(){if(this.getActivity("f_form")){return""
}this.activityData.f_form=this.timestamp;
this.saveActivityData();
var b=(this.getActivity("f_form")-this.getActivity("f_visit"))/1000;
var c=60,a=60,g=24;
if(b<=0){return"No Time Available"
}else{if(b<(5*a)){return"< 5 minutes"
}else{if(b<(10*a)){return"5-10 minutes"
}else{if(b<(30*a)){return"10-30 minutes"
}else{if(b<(2*a*c)){return"30 minutes to 2 hours"
}else{if(b<(5*a*c)){return"2-5 hours"
}else{if(b<(1*a*c*g)){return"5 hours to 1 day"
}else{if(b<(2*a*c*g)){return"1-2 days"
}else{if(b<(7*a*c*g)){return"2-7 days"
}else{if(b<(14*a*c*g)){return"1-2 weeks"
}else{return"> 2 weeks"
}}}}}}}}}}};
VisitorProfile.prototype.getUserProfile=function(){var a={isEmployee:false};
if(this.isLoginPromo()){$.getJSON("/wbin/www-core/user-attributes/",function(b){SfdcWwwBase.analyticsProfile=b
}).error(function(){SfdcWwwBase.analyticsProfile=a
});
return SfdcWwwBase.analyticsProfile
}return a
};
VisitorProfile.prototype.OrgInfo={cookieData:VisitorProfile.prototype.getBase64Cookie("oinfo"),getStatus:function(){return Util.getParam("status",this.cookieData).toUpperCase()
},getType:function(){var a=["TE","PE","EE","DE","ME","??","UE","CE","BE"];
var b=Util.getParam("type",this.cookieData);
return a[b]?a[b]:""
},getID:function(){var a=Util.getParam("oid",this.cookieData);
return a?Util.convert15To18(a):""
},getEdition:function(){var a=["Team Edition","Professional Edition","Enterprise Edition","Developer Edition","Personal Edition","Unknown Edition","Unlimited Edition","Contact Manager Edition","Base Edition (Chatter Free / Database.com)"];
var b=Util.getParam("type",this.cookieData);
return a[b]?a[b]:""
}};
VisitorProfile.prototype.getProperty=function(a){if(this.profileData!=null){return(this.profileData[a]!=null?this.profileData[a]:"")
}else{return""
}};
VisitorProfile.prototype.getProductInterests=function(){return this.getProperty("pi")
};
VisitorProfile.prototype.getPrimaryProductInterest=function(){return this.getProperty("ppi")
};
VisitorProfile.prototype.getCompanyEmployees=function(){return this.getProperty("emp")
};
VisitorProfile.prototype.getJobTitle=function(){return this.getProperty("t")
};
VisitorProfile.prototype.getCompanyName=function(){return this.getProperty("c")
};
VisitorProfile.prototype.getCompanyState=function(){return this.getProperty("st")
};
VisitorProfile.prototype.getCompanyCountry=function(){return this.getProperty("cn")
};
VisitorProfile.prototype.getUserEmail=function(){return this.getProperty("e")
};
VisitorProfile.prototype.getKruxSegment=function(){var b="";
if(typeof(Storage)!="undefined"){for(var a=0;
a<localStorage.length;
a++){if((localStorage.key(a).substring(0,7)=="kxsfdc_")&&(localStorage.key(a).substring(localStorage.key(a).length-5)=="_segs")){b+=localStorage.getItem(localStorage.key(a))+","
}}b=b.substring(0,b.length-1)
}vp.kxsfdc={segs:!b?"":b};
digitalData.localStorage.kxsfdc={segs:!b?"":b};
digitalData.util.saveLocalStorage();
return b
};
VisitorProfile.prototype.getKruxSegmentsForOmniture=function(){var a=this.getKruxSegment();
return a.replace(/,/g,"|")
};
VisitorProfile.prototype.getNeustarInfo=function(){if(document.location.hostname.indexOf("-auth")==-1&&!this.isLoginPromo()){var a="/wbin/www-core/f/g?analytics=true";
$.getJSON(a,function(b){vp.neustar={postcode:!b.pc?"":b.pc,city:!b.cic?"":b.cic,state:!b.sc?"":b.sc,region:!b.rc?"":b.rc,country:!b.cc?"":b.cc,dma:!b.dmac?"":b.dmac,coc:!b.coc?"":b.coc,ac:!b.ac?"":b.ac,tzc:!b.tzc?"":b.tzc,loc:!b.loc?"":b.loc,lac:!b.lac?"":b.lac,dmac:!b.dmac?"":b.dmac,msac:!b.msac?"":b.msac,ntc:!b.ntc?"":b.ntc,nsc:!b.nsc?"":b.nsc,ncc:!b.ncc?"":b.ncc,noc:!b.noc?"":b.noc}
}).fail(function(d,g,b){var c=g+", "+b;
console.log("Request Failed: "+c)
})
}};
VisitorProfile.prototype.getNeustarInfoForOmniture=function(){if(document.location.href.indexOf("-auth")==-1&&!this.isLoginPromo()){neustarTrackedItems=["postcode","city","state","region","country","dma"];
neustarItems=[];
for(var b in neustarTrackedItems){var a=neustarTrackedItems[b];
if(_.has(vp.neustar,a)&&vp.neustar[a]!==""){neustarItems.push(vp.neustar[a])
}}return neustarItems.join("|")
}};
VisitorProfile.prototype.getDocoDoco=(function(){var a=false;
return function(){if(document.location.hostname.indexOf("-auth")==-1){var b=window.location.pathname.split("/")[1];
if(b=="jp"){if(!a){var d=$.Deferred();
var c=document.createElement("script");
c.src="https://api.docodoco.jp/v5/docodoco?key=rGHkjbk3wv2rwXuMv3LE4NKhdy26SAv9XLpealm7p5msAafhypkGI64HC1LDD5uQ";
c.type="text/javascript";
c.charset="utf-8";
c.async=true;
c.onload=function(){setInterval(function(){if(typeof SURFPOINT!=="undefined"){var g=Object.keys(window.SURFPOINT);
g.forEach(function(h){window.SURFPOINT[h]=decodeURIComponent(window.SURFPOINT[h])
});
clearInterval();
vp.DC=window.SURFPOINT;
d.resolve()
}},500)
};
document.head.appendChild(c);
a=true;
return d.promise()
}else{if(a){return vp.DC
}}}}}
})();
var vp=new VisitorProfile();
var Page={name:null,server:null,type:null,driver:null,previous:null,locale:"us",excludeParams:["un","pw","vysfid","vyemail"],getName:function(){if(this.name==null){this.setName()
}return this.name
},setPrevious:function(a){var b="";
if(typeof a==="string"){b=a
}else{b=this.getName()
}this.previous=vp.getActivity("l_page");
vp.activityData.l_page=b;
if(vp.activityData.pv==null){vp.activityData.pv=0
}vp.activityData.pv++;
vp.saveActivityData();
return this.previous
},getPrevious:function(){if(this.previous==null){this.setPrevious()
}return this.previous==null?"":this.previous
},getNameNoLocale:function(){return this.getName().replace(":"+this.getLocale()+":",":")
},getPathNode:function(c,a){var b="";
if(typeof a==="string"){b=a.split(":")
}else{b=!this.name?(Url.sanitizedPathname().substring(1).split("/")):this.getName().split(":")
}var d=(c<=b.length?b[c]:"");
if(null!=d&&""!=d){return d.toString()
}else{return""
}},getSegment:function(){if(vp.getType()=="employee"||vp.getType()=="customer"){return vp.getType()+":"+this.getLocale()
}else{return"non-customer:"+this.getLocale()
}},saveDriver:function(){vp.activityData.l_dtype=this.driver.type;
if(Page.getDriver()&&Page.getDriver()["id"]==="Typed/Bookmarked"&&Page.getDriver()["type"]==="Typed/Bookmarked"){vp.activityData.d="70130000000sUVq"
}else{vp.activityData.d=Util.getParam("d")?Util.getParam("d"):this.driverLookup.getDefault(this.driver.type,this.driver.id)
}vp.saveActivityData()
},getDriver:function(){if(this.driver){return this.driver
}else{if(this.hasInternalReferrer()){if(Util.getParam("d")){return{id:(Util.getParam("d").length==15?Util.convert15To18(Util.getParam("d")):Util.getParam("d")),type:"internal"}
}else{return false
}}else{if(this.getReferrer()||Util.getParam("d")){var o=Util.getParam("d")?Util.convert15To18(Util.getParam("d")):"",p;
for(var h=0;
h<this.driverLookup.types.length;
h++){var b=this.driverLookup.types[h];
if(b.qp){var d=b.qp.split(",");
isType=true;
for(var g=0;
g<d.length;
g++){if(d[g].indexOf("|")>-1){var m=d[g].split("|"),a=false;
for(var c=0;
c<m.length;
c++){if(Util.getParam(m[c])){a=true;
break
}}if(!a){isType=false
}}else{if(!Util.getParam(d[g])){isType=false;
break
}}}if(isType&&Util.getParam("internal")!="true"){p={id:o+"|"+b.name,type:b.name};
if(b.cb){p=this.driverLookup[b.cb](p);
if(p){if(p.id==="null|Other"){this.driver={id:"Typed/Bookmarked",type:"Typed/Bookmarked"}
}else{this.driver=p
}this.saveDriver(o);
return this.driver
}}else{this.driver=p;
this.saveDriver(o);
return this.driver
}}}else{if(b.pm){for(var g=0;
g<b.pm.length;
g++){var n=b.pm[g].ms.split(",");
isType=false;
for(var l=0;
l<n.length;
l++){if(this.getReferrer().indexOf(n[l])>-1){isType=true;
p={id:(o?o+"|":"")+b.name+"|"+b.pm[g].name,type:b.name};
if(p){this.driver=p;
this.saveDriver(o);
return this.driver
}}}}}if(b.cb){p={id:(o?o+"|"+b.name:""),type:b.name};
p=this.driverLookup[b.cb](p);
if(p){this.driver=p;
this.saveDriver(o);
return this.driver
}}}}}}}this.driver={id:this.driverLookup.types[this.driverLookup.types.length-1].name,type:this.driverLookup.types[this.driverLookup.types.length-1].name};
this.saveDriver();
return this.driver
},hasInternalReferrer:function(){if(this.hasExternalReferrer()){return false
}var c=this.getReferrer()?this.getReferrer():"",b=Server.getInternalDomains();
c=c.indexOf("?")==-1?c:c.substring(0,c.indexOf("?"));
for(var a=0;
a<b.length;
a++){if(c.indexOf(b[a])>-1){return true
}}if(Util.getParam("internal")=="true"||(this.getPrevious()&&!(Util.getParam("r")||c))){return true
}return false
},hasExternalReferrer:function(){var c=this.getReferrer()?this.getReferrer():"",b=Server.getExternalDomains();
if(!c){return true
}c=c.indexOf("?")==-1?c:c.substring(0,c.indexOf("?"));
for(var a=0;
a<b.length;
a++){if(c.indexOf(b[a])>-1){return true
}}return false
},getReferrer:function(){var a=Util.getParam("r");
if(a){return a.length>1?a:""
}a=document.referrer;
return(this.hasExcludedParam(a)?a.split("?")[0]:a)
},hasExcludedParam:function(b){for(var c=0,a=this.excludeParams.length;
c<a;
c++){if(Util.getParam(this.excludeParams[c],b)){return true
}}return false
},hasSFDCNetworkReferrer:function(){var d=".salesforce.com",b=document.createElement("a"),c,g;
b.href=document.referrer;
c=b.hostname!==location.hostname;
g=b.hostname.indexOf(".salesforce.com")>-1&&location.hostname.indexOf(".salesforce.com")>-1;
return c&&g&&!this.getDriver()
},getSFDCNetworkReferrer:function(){if(!this.hasSFDCNetworkReferrer()){return null
}return this.lookupDriver(location.href,this.getReferrer())
},lookupDriver:function(a,p){var q=Util.getParam("d",a)?Util.convert15To18(Util.getParam("d",a)):"",r;
for(var l=0;
l<this.driverLookup.types.length;
l++){var c=this.driverLookup.types[l];
if(c.qp){var g=c.qp.split(",");
isType=true;
for(var h=0;
h<g.length;
h++){if(g[h].indexOf("|")>-1){var n=g[h].split("|"),b=false;
for(var d=0;
d<n.length;
d++){if(Util.getParam(n[d],a)){b=true;
break
}}if(!b){isType=false
}}else{if(!Util.getParam(g[h],a)){isType=false;
break
}}}if(isType&&Util.getParam("internal",a)!=="true"){r={id:q+"|"+c.name,type:c.name};
if(c.cb){r=this.driverLookup[c.cb](r);
if(r){if(r.id==="null|Other"){r={id:"Typed/Bookmarked",type:"Typed/Bookmarked"}
}}}return r
}}else{if(c.pm){for(var h=0;
h<c.pm.length;
h++){var o=c.pm[h].ms.split(",");
isType=false;
for(var m=0;
m<o.length;
m++){if(p.indexOf(o[m])>-1){isType=true;
r={id:(q?q+"|":"")+c.name+"|"+c.pm[h].name,type:c.name};
if(r){return r
}}}}}if(c.cb){r={id:(q?q+"|"+c.name:""),type:c.name};
r=this.driverLookup[c.cb](r);
if(r){return r
}}}}},driverLookup:{types:[{name:"SEM",qp:"d,dcmp",cb:"getSearchData"},{name:"Email",qp:"d",cb:"getEmail",d:"70130000000sUfv"},{name:"BAN",qp:"d,ban",cb:"getDisplay"},{name:"SEO",cb:"getSearchData",d:"70130000000sUVb"},{name:"Paid Social Media",qp:"d",cb:"getSocial"},{name:"Social Media",d:"70130000000sUVl",pm:[{name:"youtube",ms:"youtube.com"},{name:"vidyard",ms:"vidyard.com"},{name:"twitter",ms:"twitter.com,.t.co,/t.co/",d:"70130000000szyK"},{name:"linkedin",ms:"linkedin.com,lnkd.in",d:"70130000000szyP"},{name:"facebook",ms:"facebook.com",d:"70130000000szyF"},{name:"instagram",ms:"instagram.com",d:"701300000025Rrr"},{name:"flickr",ms:"flickr.com,flickr.net"},{name:"slideshare",ms:"slideshare.com,slideshare.net"},{name:"googleplus",ms:"plus.google.com,plus.url.google.com",d:"70130000000szyU"},{name:"vimeo",ms:"vimeo.com"},{name:"pinterest",ms:"pinterest.com,pintrest.com",d:"70130000000szyZ"},{name:"foursquare",ms:"foursquare.com"},{name:"stumbleupon",ms:"stumbleupon.com"},{name:"yelp",ms:"yelp.com"},{name:"myspace",ms:"myspace.com"},{name:"xing",ms:"xing.com"},{name:"mixi",ms:"mixi.jp"},{name:"viadeo",ms:"viadeo.com"},{name:"friendster",ms:"friendster.com"},{name:"badoo",ms:"badoo.com"},{name:"bebo",ms:"bebo.com"},{name:"hi5",ms:"hi5.com"},{name:"myyearbook",ms:"myyearbook.com"},{name:"nig",ms:"nig.com"},{name:"tumblr",ms:"tumblr.com"},{name:"xanga",ms:"xanga.com"},{name:"yammer",ms:"yammer.com"},{name:"medium",ms:"medium.com"}]},{name:"SFDC Network",d:"70130000000sUW0",pm:[{name:"[AppExchange]",ms:"appexchange.salesforce.com,appexchangejp.salesforce.com,sites.secure.force.com/appexchange"},{name:"[Community Site]",ms:"success.salesforce.com,sites.secure.force.com"},{name:"[DeveloperForce]",ms:"developer.salesforce.com"},{name:"[Help&Training]",ms:"help.salesforce.com"},{name:"[Foundation]",ms:"foundation.force.com,salesforcefoundation.org"},{name:"[VMForce]",ms:"vmforce.com"},{name:"[YourServiceCloud.com]",ms:"yourservicecloud.com,yourservicecloud.force.com"},{name:"[JoinTheConversations.com]",ms:"jointheconversations.com"},{name:"[Chatter.com]",ms:"chatter.com"},{name:"[Site.com]",ms:"site.com"},{name:"[Work.com]",ms:"work.com"},{name:"[Database.com]",ms:"database.force.com,database.com"},{name:"[Data.com]",ms:"data.com"},{name:"[Jigsaw.com]",ms:"jigsaw.com"},{name:"[Force.com]",ms:"www.force.com"},{name:"[Force.com Sites]",ms:".force.com"},{name:"[www.salesforce.com]",ms:"www.salesforce.com"},{name:"[trust.salesforce.com]",ms:"trust.salesforce.com"},{name:"[Salesforce Blogs]",ms:"blogs.salesforce.com, cloudblog.salesforce.com"},{name:"[Salesforce.com App]",ms:".salesforce.com"},{name:"[Desk.com]",ms:".desk.com"},{name:"[Relateiq.com]",ms:".salesforceiq.com"},{name:"[Steelbrick.com]",ms:".steelbrick.com, steelbrick.de"},{name:"[Demandware]",ms:".demandware.com"},{name:"[Beyondcore]",ms:".beyondcore.com,https://beyondcore.com"},{name:"[Heywire]",ms:".heywire.com"},{name:"[Quip]",ms:".quip.com,https://quip.com"},{name:"[Gravity Tank]",ms:".gravitytank.com"}]},{name:"External Websites",cb:"getReferredDriver",d:"70130000000sUVv"},{name:"Other",qp:"d",cb:"fixInternal"},{name:"Typed/Bookmarked",d:"70130000000sUVq"}],searchEngines:[{se:"All The Web",ms:"alltheweb.com",kw:"q,query",dc:"US"},{se:"Facebook Graph Search",ms:"facebook.com",kw:"q",dc:"US"},{se:"AllSearchEngines",ms:"allsearchengines.co.uk",kw:"query",dc:"United Kingdom"},{se:"AltaVista",ms:"altavista.com",kw:"q,r",dc:"US",cl:[{cn:"Canada",pre:"ca."},{cn:"Denmark",pre:"dk."},{cn:"France",pre:"fr."},{cn:"Germany",pre:"de."},{cn:"Italy",pre:"it."},{cn:"Netherlands",pre:"nl."},{cn:"Norway",pre:"no."},{cn:"Spain",pre:"es."},{cn:"Sweden",pre:"se."},{cn:"Switzerland",pre:"ch."},{cn:"United Kingdom",pre:"uk."}]},{se:"AOL",ms:".aol.",kw:"q,query",dc:"US",cl:[{cn:"Canada",post:"ca"},{cn:"France",post:"fr"},{cn:"Germany",post:"de"},{cn:"United Kingdom",post:"co.uk"}]},{se:"Ask",ms:"ask.com",kw:"q",dc:"US",cl:[{cn:"Japan",pre:"jp"},{cn:"United Kingdom",pre:"uk"}]},{se:"Baidu",ms:"baidu.com",kw:"wd,s",dc:"China"},{se:"BeGuide.com",ms:"beguide.com",kw:"q,search",dc:"US"},{se:"Biglobe",ms:"biglobe.ne.jp",kw:"q",dc:"Japan"},{se:"Microsoft Bing",ms:"bing.com",kw:"q",dc:"US"},{se:"Blue Window",ms:"search.bluewin.ch",kw:"q,qry",dc:"Switzerland"},{se:"Business.com",ms:"business.com",kw:"query",dc:"US"},{se:"BuyersIndex",ms:"buyersindex.com",kw:"query",dc:"US"},{se:"Chubba",ms:"whatuseek.com",kw:"arg",dc:"US"},{se:"CNET",ms:"cnet.com",kw:"query,q",dc:"US"},{se:"Debriefing.com",ms:"debriefing.com",kw:"tsearch",dc:"US"},{se:"Dmoz",ms:"dmoz.org",kw:"search",dc:"US"},{se:"Excite",ms:"excite.com",kw:"q,search",dc:"US",cl:[{cn:"Netherlands",post:".nl"},{cn:"France",post:".fr"},{cn:"Germany",post:".de"},{cn:"Japan",post:".co.jp"},{cn:"Switzerland",post:".ch"}]},{se:"Fireball",ms:"fireball.de",kw:"q,query",dc:"Germany"},{se:"FreshEye",ms:"fresheye.com",kw:"kw,ord",dc:"Japan"},{se:"Godado",ms:"godado.it",kw:"key",dc:"Italy"},{se:"Goo (Jp.)",ms:"goo.ne.jp",kw:"MT",dc:"Japan"},{se:"Google",ms:".google.,googlesyndication.com",kw:"q",types:[{tn:"Images",pre:"images"},{tn:"Video",pre:"video"}],dc:"US",cl:[{cn:"Afghanistan",post:"com.af"},{cn:"American Samoa",post:"as"},{cn:"Anguilla",post:"com.ai"},{cn:"Antigua and Barbuda",post:"com.ag"},{cn:"Argentina",post:"com.ar"},{cn:"Armenia",post:"am"},{cn:"Australia",post:"com.au"},{cn:"Austria",post:"at"},{cn:"Azerbaijan",post:"az"},{cn:"Bahrain",post:"com.bh"},{cn:"Bangladesh",post:"com.bd"},{cn:"Belarus",post:"com.by"},{cn:"Belgium",post:"be"},{cn:"Belize",post:"com.bz"},{cn:"Bolivia",post:"com.bo"},{cn:"Bosnia-Hercegovina",post:"ba"},{cn:"Botswana",post:"co.bw"},{cn:"Brasil",post:"com.br"},{cn:"British Virgin Islands",post:"vg"},{cn:"Brunei",post:"com.bn"},{cn:"Bulgaria",post:"bg"},{cn:"Burundi",post:"bi"},{cn:"Cambodia",post:"com.kh"},{cn:"Canada",post:"ca"},{cn:"Chile",post:"cl"},{cn:"China",post:"cn"},{cn:"Colombia",post:"com.co"},{cn:"Cook Islands",post:"co.ck"},{cn:"Costa Rica",post:"co.cr"},{cn:"Cote D'Ivoire",post:"ci"},{cn:"Croatia",post:"hr"},{cn:"Cuba",post:"com.cu"},{cn:"Czech Republic",post:"cz"},{cn:"Denmark",post:"dk"},{cn:"Djibouti",post:"dj"},{cn:"Dominica",post:"dm"},{cn:"Dominican Republic",post:"com.do"},{cn:"Ecuador",post:"com.ec"},{cn:"Egypt",post:"com.eg"},{cn:"El Salvador",post:"com.sv"},{cn:"Estonia",post:"ee"},{cn:"Ethiopia",post:"com.et"},{cn:"Fiji",post:"com.fj"},{cn:"Finland",post:"fi"},{cn:"France",post:"fr"},{cn:"Germany",post:"de"},{cn:"Greece",post:"gr"},{cn:"Greenland",post:"gl"},{cn:"Guadeloupe",post:"gp"},{cn:"Guatemala",post:"com.gt"},{cn:"Guernsey",post:"gg"},{cn:"Guyana",post:"gy"},{cn:"Haiti",post:"ht"},{cn:"Honduras",post:"hn"},{cn:"Hong Kong",post:"com.hk"},{cn:"Hungary",post:"hu"},{cn:"India",post:"co.in"},{cn:"Indonesia",post:"co.id"},{cn:"Ireland",post:"ie"},{cn:"Island",post:"is"},{cn:"Isle of Gibraltar",post:"com.gi"},{cn:"Isle of Man",post:"im"},{cn:"Israel",post:"co.il"},{cn:"Italy",post:"it"},{cn:"Jamaica",post:"com.jm"},{cn:"Japan",post:"co.jp"},{cn:"Jersey",post:"je"},{cn:"Jordan",post:"jo"},{cn:"Kazakhstan",post:"kz"},{cn:"Kenya",post:"co.ke"},{cn:"Kiribati",post:"ki"},{cn:"Korea",post:"co.kr"},{cn:"Kyrgyzstan",post:"kg"},{cn:"Laos",post:"la"},{cn:"Latvia",post:"lv"},{cn:"Lesotho",post:"co.ls"},{cn:"Libya",post:"com.ly"},{cn:"Liechtenstein",post:"li"},{cn:"Lithuania",post:"lt"},{cn:"Luxembourg",post:"lu"},{cn:"Madagascar",post:"mgz"},{cn:"Malawi",post:"mw"},{cn:"Malaysia",post:"com.my"},{cn:"Maldives",post:"mv"},{cn:"Malta",post:"com.mt"},{cn:"Mauritius",post:"mu"},{cn:"Mexico",post:"com.mx"},{cn:"Micronesia",post:"fm"},{cn:"Moldova",post:"md"},{cn:"Mongolia",post:"mn"},{cn:"Montserrat",post:"ms"},{cn:"Morocco",post:"co.ma"},{cn:"Namibia",post:"com.na"},{cn:"Nauru",post:"nr"},{cn:"Nepal",post:"com.np"},{cn:"Netherlands",post:"nl"},{cn:"New Zealand",post:"co.nz"},{cn:"Nicaragua",post:"com.ni"},{cn:"Nigeria",post:"com.ng"},{cn:"Niue",post:"nu"},{cn:"Norfolk Island",post:"com.nf"},{cn:"Norway",post:"no"},{cn:"Oman",post:"com.om"},{cn:"Pakistan",post:"com.pk"},{cn:"Panama",post:"com.pa"},{cn:"Paraguay",post:"com.py"},{cn:"Peru",post:"com.pe"},{cn:"Philippines",post:"com.ph"},{cn:"Pitcairn Islands",post:"pn"},{cn:"Poland",post:"pl"},{cn:"Portugal",post:"pt"},{cn:"Puerto Rico",post:"com.pr"},{cn:"Qatar",post:"com.qa"},{cn:"Rep. Dem. du Congo",post:"cd"},{cn:"Rep. du Congo",post:"cg"},{cn:"Repulic of Georgia",post:"ge"},{cn:"Romania",post:"ro"},{cn:"Russia",post:"ru"},{cn:"Rwanda",post:"rw"},{cn:"Saint Helena",post:"sh"},{cn:"Saint Vincent and the Grenadine",post:"com.vc"},{cn:"Samoa",post:"ws"},{cn:"San Marino",post:"sm"},{cn:"Sao Tome and Principe",post:"st"},{cn:"Saudi Arabia",post:"com.sa"},{cn:"Senegal",post:"sn"},{cn:"Seychelles",post:"sc"},{cn:"Singapore",post:"com.sg"},{cn:"Slovakia",post:"sk"},{cn:"Slovenia",post:"si"},{cn:"Solomon Islands",post:"com.sb"},{cn:"South Africa",post:"co.za"},{cn:"Spain",post:"es"},{cn:"Sri Lanka",post:"lk"},{cn:"Sweden",post:"se"},{cn:"Switzerland",post:"ch"},{cn:"Taiwan",post:"com.tw"},{cn:"Tajikistan",post:"com.tj"},{cn:"Thailand",post:"co.th"},{cn:"The Bahamas",post:"bs"},{cn:"The Gambia",post:"gm"},{cn:"Timor-Leste",post:"tp"},{cn:"Tokelau",post:"tk"},{cn:"Tonga",post:"to"},{cn:"Trinidad and Tobago",post:"tt"},{cn:"Turkey",post:"com.tr"},{cn:"Turkmenistan",post:"tm"},{cn:"Uganda",post:"co.ug"},{cn:"Ukraine",post:"com.ua"},{cn:"United Arab Emirates",post:"ae"},{cn:"United Kingdom",post:"co.uk"},{cn:"Uruguay",post:"com.uy"},{cn:"Uzbekiston",post:"co.uz"},{cn:"Vanuatu",post:"vu"},{cn:"Venezuela",post:"co.ve"},{cn:"Viet Nam",post:"com.vn"},{cn:"Virgin Islands",post:"co.vi"},{cn:"Yugoslavia",post:"co.yu"},{cn:"Zambia",post:"co.zm"},{cn:"Zimbabwe",post:"co.zw"}]},{se:"Hotbot",ms:"hotbot.com",kw:"query",dc:"US"},{se:"ilse.nl",ms:"ilse.nl",kw:"search_for",dc:"Netherlands"},{se:"Indeed",ms:"www.indeed.",kw:"q",dc:"US",cl:[{cn:"Canada",post:"ca"},{cn:"India",post:"co.in"}]},{se:"InfoSpace",ms:"infospace.com",kw:"",dc:"US"},{se:"InfoTiger",ms:"infotiger.com",kw:"qs",dc:"US"},{se:"Livedoor",ms:"livedoor.com",kw:"q",dc:"Japan"},{se:"Lycos",ms:".lycos",kw:"query",dc:"US",cl:[{cn:"France",post:".fr"},{cn:"Germany",post:".de"},{cn:"Italy",post:".it"},{cn:"Netherlands",post:".nl"},{cn:"Spain",post:".es"},{cn:"United Kingdom",post:".co.uk"}]},{se:"Metacrawler",ms:"metacrawler.com",kw:"",dc:"US"},{se:"Monster Crawler",ms:"monstercrawler.com",kw:"",dc:"US"},{se:"myGO",ms:"mygo.com",kw:"",dc:"Taiwan"},{se:"Nate.com",ms:"nate.com",kw:"q",dc:"Korea"},{se:"Naver",ms:"naver.com",kw:"query",dc:"Korea"},{se:"NetSearch",ms:"netscape.com",kw:"qry_str",dc:"US"},{se:"Nifty",ms:"nifty.com,search.nifty.com",kw:"q",dc:"Japan"},{se:"Oh! New? Mobile",ms:"ohnew.co.jp",kw:"k",dc:"Japan"},{se:"OptusZoo",ms:"optuszoo.com.au",kw:"q",dc:"Australia"},{se:"Reference.com",ms:"reference.com",kw:"q",dc:"US"},{se:"Search.ch",ms:"search.ch",kw:"q",dc:"Switzerland"},{se:"Searchalot",ms:"searchalot.com",kw:"q,query",dc:"US"},{se:"Tiscali",ms:"tiscali.it",kw:"key",dc:"Italy"},{se:"track.nl",ms:"track.nl",kw:"qr",dc:"Netherlands"},{se:"Virgilio",ms:"ricerca.virgilio.it,virgilio.it",kw:"qs",dc:"Italy"},{se:"Web Wombat",ms:"webwombat.com.au",kw:"ix,I",dc:"Australia"},{se:"Web.de",ms:"web.de",kw:"su",dc:"Germany"},{se:"Webalta",ms:"webalta.ru",kw:"q",dc:"Russia"},{se:"WebCrawler",ms:"webcrawler.com",kw:"",dc:"US"},{se:"Yahoo!",ms:"search.yahoo.",kw:"p",dc:"US",cl:[{cn:"Argentina",pre:"ar."},{cn:"Asia",pre:"asia."},{cn:"Australia",pre:"au."},{cn:"Austria",pre:"at."},{cn:"Brazil",pre:"br."},{cn:"Canada",pre:"ca."},{cn:"Canada (French)",pre:"qc."},{cn:"Catalan",pre:"ct."},{cn:"China",pre:"cn."},{cn:"Denmark",pre:"dk."},{cn:"Finland",pre:"fi."},{cn:"France",pre:"fr."},{cn:"Germany",pre:"de."},{cn:"Hong Kong",pre:"hk."},{cn:"India",pre:"in."},{cn:"Indonesia",pre:"id."},{cn:"Italy",pre:"it."},{cn:"Japan",post:"co.jp"},{cn:"Korea",pre:"kr."},{cn:"Malaysia",pre:"malaysia."},{cn:"Mexico",pre:"mx."},{cn:"Netherlands",pre:"nl."},{cn:"New Zealand",pre:"nz."},{cn:"Norway",pre:"no."},{cn:"Philippines",pre:"ph."},{cn:"Russia",pre:"ru."},{cn:"Singapore",pre:"sg."},{cn:"Spain",pre:"es."},{cn:"Sweden",pre:"se."},{cn:"Switzerland",pre:"ch."},{cn:"Taiwan",pre:"tw."},{cn:"Thailand",pre:"th."},{cn:"UK and Ireland",pre:"uk."},{cn:"Viet Nam",pre:"vn."}]},{se:"Yandex.ru",ms:"yandex.ru",kw:"text",dc:"Russia"},{se:"zoeken.nl",ms:"zoeken.nl",kw:"q",dc:"Netherlands"}],getReferringDomain:function(){var a=Page.getReferrer(),b="://";
if(!a||a.indexOf("http")!=0){return""
}a=a.indexOf(b)>-1?a.substring(a.indexOf(b)+b.length):a;
a=a.indexOf("/")>-1?a.substring(0,a.indexOf("/")):a;
a=a.indexOf("?")>-1?a.substring(0,a.indexOf("?")):a;
a=a.indexOf("#")>-1?a.substring(0,a.indexOf("#")):a;
return a
},getReferredDriver:function(a){var b=this.getReferringDomain();
if(!(a&&b)){return""
}a.id=(a.id?a.id:a.type)+"|"+b;
return a
},fixInternal:function(c){if(!c){return""
}var h=this.types[5];
for(var d=0;
d<h.pm.length;
d++){var a=h.pm[d].ms.split(",");
for(var b=0;
b<a.length;
b++){if(Page.getReferrer().indexOf(a[b])>-1){var g={id:h.name+"|"+h.pm[d].name,type:h.type,internal:Util.getParam("d")};
return g
}}}return c
},getDefault:function(d,h){if(!d){return""
}for(var c=0;
c<this.types.length;
c++){var g=this.types[c];
if(d==g.name){if(g.pm){var b=h.replace(d+"|","");
for(var a=0;
a<g.pm.length;
a++){if(b==g.pm[a].name&&g.pm[a].d){return g.pm[a].d
}}}if(g.d){return g.d
}}}return""
},getEmail:function(b){var a=document.location.href.toLowerCase();
if(!(a.indexOf("elq_mid=")>-1||a.indexOf("eid=")>-1||a.indexOf("rrid")>-1||a.indexOf("mkt_tok")>-1)){return""
}return b
},getDisplay:function(a){if(!(a&&a.id&&a.type)){return""
}var c=Url.decodeComponent(Util.getParam("ban")).replace(/_/g,"|"),b="ban|";
if(c.indexOf(b)==0||c.indexOf(b.toUpperCase())==0){c=c.substring(b.length-1)
}c=c.toLowerCase();
if(c.charAt(0)!="|"){c="|"+c
}return{id:a.id+c,type:a.type}
},getSocial:function(b){var a=Url.decodeComponent(Util.getParam("soc")).toLowerCase();
if(!(b&&a)){return""
}b.id+="|"+a;
return b
},isBaiduSEO:function(a){if(!a){return false
}else{if(a.indexOf(".baidu.")>-1&&(a.indexOf("?wd=")>-1||a.indexOf("&wd=")>-1)){return true
}}},getSearchData:function(q){var d=Page.getReferrer(),r="",c="",o="";
if(!q){return""
}else{if(!(q.type=="SEM"||q.type=="SEO")||(q.type=="SEO"&&q.id)){return""
}}for(var n=0;
n<this.searchEngines.length;
n++){var b=this.searchEngines[n],p=this.searchEngines[n].ms.split(",");
for(var m=0;
m<p.length;
m++){if(p[m]&&(d.indexOf(p[m])>-1)){r=b.se;
if(b.types){for(var u=0;
u<b.types.length;
u++){if(b.types[u].pre&&d.indexOf(b.types[u].pre+p[m])>-1){r=r+" "+b.types[u].tn;
break
}if(b.types[u].post&&d.indexOf(p[m]+b.types[u].post)>-1){r=r+" "+b.types[u].tn;
break
}}}var v=b.kw.split(",");
for(var h=0;
h<v.length;
h++){o=Url.decodeComponent(Util.getParam(v[h],d));
if(o){break
}}if(!o){var a=d.substring(d.indexOf("//")+2);
if((d.indexOf("/url")>-1&&(d.indexOf("q=&")>-1||d.indexOf("?sa=t")>-1))||(a.indexOf("/")==-1||a.indexOf("/")==a.length-1)||this.isBaiduSEO(d)){o="no keyword"+(d.indexOf("https")>-1?" (secure)":"")
}else{break
}}if(b.cl){for(var g=0;
g<b.cl.length;
g++){if(b.cl[g].pre&&d.indexOf(b.cl[g].pre+p[m])>-1){c=b.cl[g].cn
}if(b.cl[g].post&&d.indexOf(p[m]+b.cl[g].post)>-1){c=b.cl[g].cn
}}}if(!c){c=b.dc||"US"
}}}}if((q.id&&q.type=="SEM")||(r&&o)){o=o?Util.cleanUrlData(o):"no keyword";
r=r?(c.toUpperCase()!="US"&&c!=""?r+" - "+c:r):"no search engine";
if(q.type=="SEM"){q.id+=((r?"|"+r:"")+(o?"|"+o:""))
}return{id:(q.id?q.id:(q.type+"|"+r+"|"+o)),type:q.type,keyword:o,engine:r}
}else{return""
}}},TrackingPixel:function(b,a){this.protocol=document.location.protocol;
this.date=new Date();
this.current=[];
this.render=a;
if(typeof(b)!="object"){return false
}this.locales=b.locales?b.locales:[];
if(typeof(b.show)==="string"){this.show=false;
this.dynamic=b.show
}else{this.show=b.show?b.show:false;
this.dynamic=""
}this.exclusive=b.exclusive?b.exclusive:false;
this.details=b.details?b.details:{isEmpty:true};
this.mobile=b.mobile?b.mobile:false;
this.login=b.login?b.login:false;
this.insertImage=function(c){if(!c){return false
}(function(d){d("#conversion-tracking").append('<img width="1" height="1" border="0" src="'+c+'"/>')
})(jQuery)
};
this.insertIframe=function(c){if(!c){return false
}(function(d){d("#conversion-tracking").append('<iframe width="1" height="1" frameborder="0" scrolling="no" style="visibility:hidden;display:none;" src="'+c+'"></iframe>')
})(jQuery)
};
this.insertScript=function(d){try{var c=document.createElement("script"),h=document.getElementById("conversion-tracking");
c.setAttribute("type","text/javascript");
c.setAttribute("src",d);
h.appendChild(c);
return true
}catch(g){return false
}};
this.getGoogle=function(){var k=[];
if(this.getPixelFromMeta()){k[k.length]=this.getPixelFromMeta()
}for(var g=0;
g<this.current.length;
g++){if(this.details[this.current[g]]&&this.details[this.current[g]].id){k[k.length]=this.details[this.current[g]]
}}var d=0;
for(g=0;
g<k.length;
g++){d++;
var c=this.protocol+"//www.googleadservices.com/pagead/conversion/"+k[g].id+"/?",h="";
var j={random:this.date.getTime(),cv:"6",fst:this.date.getTime(),num:d,fmt:k[g].format||"1",value:k[g].value||"1",label:k[g].label||"lead",bg:"ffffff",hl:k[g].lang||"",gl:k[g].country||"",guid:"ON",u_tz:-this.date.getTimezoneOffset(),url:document.location.href};
c+=this.toQueryString(j);
this.insertImage(c)
}};
this.getPixelFromMeta=function(){var d=Util.getMeta("pageMetrics");
if(!(d&&Util.isValidJson(d))){return false
}var c=Util.parseJSON(d);
if(!(c.pixel&&c.pixel.id)){return false
}return c.pixel
};
this.toQueryString=function(h,k){k=k?k:"&";
var c="",d=0;
for(var g in h){if(h.hasOwnProperty(g)&&typeof(h[g])!="function"){if(h[g]!=""&&h[g]!=null){if(d>0){c+=k
}c+=g+"="+Url.encodeComponent(h[g]);
d++
}}}return c
};
this.isLogin=function(d){try{if(Page.isLogin()){return true
}}catch(c){}return false
};
this.isMobile=function(d){try{if(com.salesforce.www.App.cfg("isMobileDevice")){return false
}}catch(c){}return false
};
this.isValid=function(d){if(Util.getParam("un")||Util.getParam("pw")){return false
}else{this.current=[];
if((!this.show||(typeof(this.show)=="function"&&!this.show()))&&!this.dynamic){return false
}else{if(!this.login&&this.isLogin()){return false
}else{if(!this.mobile&&this.isMobile()){return false
}else{if((this.locales&&d.inArray(Page.getLocale(),this.locales)>-1||!this.locales||this.locales.length==0)&&this.details.isEmpty){return true
}else{if(!this.details.isEmpty&&(this.locales.length==0||d.inArray(Page.getLocale(),this.locales)>-1)){for(var c=0;
c<this.details.length;
c++){if((typeof(this.details[c].locales)=="undefined"||d.inArray(Page.getLocale(),this.details[c].locales)>-1)&&(typeof(this.details[c].show)=="undefined"||((typeof(this.details[c].show)!="function"&&this.details[c].show)||(typeof(this.details[c].show)=="function"&&this.details[c].show())))){this.current[this.current.length]=c;
if(this.exclusive){break
}}}return this.current.length>0?true:false
}}}}}}}
},PixelManager:{pixels:[],protocol:document.location.protocol,newPixel:function(b,a){if(!(b&&a)){return false
}this.pixels[this.pixels.length]=new Page.TrackingPixel(b,a)
},configure:function(b){if(b("#conversion-tracking").html()==null){b("body").append('<div aria-hidden="true" id="conversion-tracking"></div>')
}for(var a=0;
a<this.pixels.length;
a++){if(this.pixels[a].isValid(b)&&!this.pixels[a].dynamic){this.pixels[a].render(b)
}}},trackDynamic:function(b){if(typeof(b)!=="string"){return false
}b=","+b+",";
for(var a=0;
a<this.pixels.length;
a++){if(this.pixels[a].dynamic&&b.indexOf(this.pixels[a].dynamic)>-1){if(this.pixels[a].isValid($)){this.pixels[a].render($)
}}}}},nameCaptureId:null,chatForm:null,leadCaptureForm:null,ctas:null,errorName:"SFDC:error_404",searchTerm:null,searchPage:null,ajaxFormComplete:false,hasTnTRedirect:false,suppressTracking:function(){if(typeof(App)!=="undefined"&&typeof(App.config)!=="undefined"&&App.config.suppressTracking===true){return true
}return false
},getBlogPostMeta:function(){var a="";
if(typeof sfPageData!=="undefined"){a=sfPageData.blogMeta
}return a
},getBlogAuthor:function(){var a="";
if(typeof sfPageData!=="undefined"){a=sfPageData.blogAuthor
}return a
},calculateName:function(c,b){var g=false;
var a=":us";
if(c==this.errorName){c="";
g=true
}else{if(!c||c.indexOf("http")>-1){c=Url.sanitizedPathname();
b=document.location.hostname
}}if(c===Url.sanitizedPathname()){var d=Util.getMeta("analytics_url");
c=d?d:c
}if(!b){b=document.location.hostname
}if(c.indexOf("/")>-1&&c.indexOf(":")<0){c=c.replace(/\//g,":");
c=c.replace(/\:index\.jsp/,"");
c=c.replace(/\.jsp|\.htm(l?)/,"");
c=c.charAt(c.length-1)==":"?c:c+":";
if(c.indexOf("login-messages")>-1){c=this.nameLoginPage(c)
}if(c.match(/^\:\w{2}-\w{2}\:/)||c.match(/^\:\w{2}\:/)){a=""
}c=this.getServer()+a+c;
c=c.charAt(c.length-1)==":"?c.substring(0,c.length-1):c
}if(!this.isValidServer(this.getPathNode(0,c))){this.setServer();
c=this.getServer()+(c.charAt(0)==":"?"":":")
}if(!this.isValidLocale(this.getPathNode(1,c))){var h=c.split(":");
h.splice(1,0,this.locale);
c=h.join(":")
}if(!this.getPathNode(2,c)){c+=":homepage"
}if(g){c=this.errorName.replace(this.getServer()+":",this.getServer()+":"+this.getLocale()+":")
}if(b.indexOf("blogs.salesforce.com")>-1||b.indexOf(".blogs.com")>-1){var i=this.getServer()+":"+this.getLocale(c),j="blog";
c=c.replace(i,i+":"+j);
if(Util.getParam("filter.q")){c=i+":"+j+":search"
}}if(b.indexOf("certification.salesforce.com")>-1){var i=this.getServer()+":"+this.getLocale();
c=c.replace(i,i+":certification");
c=c.replace(":Home","");
c=this.getServer()+c.substring(this.getServer().length).toLowerCase()
}if(c.indexOf(":assets:swf:youtube_players")>-1){c=c.replace(":assets:swf:youtube_players",":form:conf")
}if(this.isConfirmation(c)&&!this.isError(c)&&!this.hasLeadCaptureForm(c)){c=c+":[conf]"
}if(Util.getParam("fromSocial")=="1"){c+=":social-signup-"+(Util.getParam("service")?Util.getParam("service")+"-":"")+"authenticated"
}if(c.indexOf(":blog:category:")>-1){c=c.replace(":blog:category:",":blog:company:")
}if(c==="SFDC:"+this.getLocale()+":blog"){c=c+":homepage"
}return c
},setName:function(a){this.name=this.calculateName(a);
if(document.location.hostname.indexOf("blogs.salesforce.com")>-1||document.location.hostname.indexOf(".blogs.com")>-1){if(Util.getParam("filter.q")){this.searchTerm=this.setSearchTerm(Util.getParam("filter.q"))
}}if(this.name.indexOf(":assets:swf:youtube_players")>-1){this.isDemoDirectory=true
}if(this.isConfirmation()&&!this.isError()&&!this.hasLeadCaptureForm()){if(Url.sanitizedPathname().indexOf("SignupServlet")!=-1){vp.activityData.signup=vp.timestamp
}}digitalData.localStorage.l_cloud=this.getCloud();
digitalData.util.saveLocalStorage();
vp.activityData.seg=this.getSegment();
if(!this.isLiveChat()){this.setPrevious()
}return this.name
},nameLoginPage:function(a){if(!a){return""
}a=a.replace("login-messages:","");
a=a.replace("messages:","");
a=a.replace("promos:","");
a=a.indexOf(":")==0?a.substring(1):a;
a=a.charAt(a.length-1)==":"?a.substring(0,a.length-1):a;
a=a?a:this.locale;
if(!this.isValidLocale(a)){var c=[{str:"appexchange",srv:"APPX"},{str:"appstore",srv:"STOR"},{str:"lms",srv:"LMS"},{str:"lmsdev",srv:"LMS"},{str:"developer",srv:"DFC"},{str:"community",srv:"COMM"}];
for(var b=0;
b<c.length;
b++){if(a.indexOf(c[b].str)>-1){a=a.replace(c[b].str,"");
a=a.indexOf(":")==0?a.substring(1):a;
a+=(a==""?this.locale:"");
this.setServer(c[b].srv);
break
}}}a=":"+a+":login";
if(a.indexOf("mobile")>-1){a=a.replace("mobile:login","login-mobile");
a=Util.getParam("locale")?(":"+Util.getParam("locale").toLowerCase()+a):a
}a=vp.hasCurrentTrial()&&!vp.isCustomer()&&!vp.isEmployee()?a.replace(/login/,"login:freetrial"):a;
a=vp.getType()=="developer"&&a.indexOf("login:freetrial")==-1?a.replace(/login/,"login:developer"):a;
return a
},getPrevious:function(){if(this.previous==null&&!this.isLiveChat()){this.setPrevious()
}return this.previous
},isConfirmation:function(a){var b="";
if(typeof a==="string"){b=a
}else{b=this.getName()
}return(((b.indexOf(":conf:")!=-1)||(b.indexOf("[conf]")!=-1)||(Util.endsWith(b,"conf"))||this.ajaxFormComplete||(Url.sanitizedPathname().indexOf("_conf.jsp")!=-1)||(Url.sanitizedPathname().indexOf("SignupServlet")!=-1)||(Url.sanitizedPathname().indexOf("LeadCaptureServlet")!=-1))&&(Page.previous!=Page.name)&&!this.isCareersConfirmation(a))
},isCareersForm:function(a){var b="";
if(typeof a==="string"){b=a
}else{b=this.getName()
}return b.indexOf(":form:careers")>-1
},isCareersConfirmation:function(a){if(typeof a==="string"){curName=a
}else{curName=this.getName()
}return(curName.indexOf(":careers:career-apply-confirm")>-1||curName.indexOf(":form:careers:conf")>-1)
},isHome:function(){return this.getName().indexOf("homepage")>-1
},isSEM:function(){return(this.hasLeadCaptureForm()||this.isConfirmation())&&this.getName().indexOf(":sem:")>-1
},isLogin:function(){return(this.getName().match(/\:\w{2}\:login/)!=null)
},is404:function(){return this.getName().indexOf("error_404")>-1
},isError:function(a){if(typeof a==="string"){curName=a
}else{curName=this.getName()
}return(curName.indexOf("error")!=-1&&this.isConfirmation(a))
},isSearchResults:function(){return(this.getName().indexOf(":blog:search")>-1||this.getName().indexOf(":video-search")>-1)
},isAjax:function(){return this.isSearchResults()||this.getName().indexOf("chat-available")>-1||this.ajaxFormComplete
},isBlog:function(){return this.getPathNode(2).indexOf("blog")>-1
},isSFLive:function(){return this.getPathNode(2).indexOf("video")>-1
},isMobile:function(){try{return com.salesforce.www.App.cfg("isMobile")||false
}catch(a){return false
}},getDisplayAdId:function(){if(Util.getCookie("adId")){this.displayAdId=Util.convert15To18(Util.getCookie("adId"));
Util.deleteCookie("adId")
}return this.displayAdId||""
},isTrackedOnLoad:function(){return !this.isAjax()&&vp.isLoginPromo()
},setSearchTerm:function(a){if(!a){return""
}this.searchTerm=Util.cleanUrlData(a);
vp.activityData.l_search=this.searchTerm;
vp.saveActivityData();
return this.searchTerm
},getSearchTerm:function(){return this.searchTerm==null?"":this.searchTerm
},getSearchLocale:function(){},setSearchPage:function(a){if(!a){return 1
}this.searchPage=a;
return this.searchPage
},getSearchPage:function(){return this.searchPage==null?"":this.searchPage
},getNumSearchResults:function(){if(this.isSearchResults()){var b="",c=0;
try{b=jQuery(".gsc-cursor-page:last").html();
b=b==null?"0":b;
b=b.indexOf("(")==0?b.substring(1):b;
b=b.lastIndexOf(")")==b.length-1?b.substring(0,b.length-1):b;
if((/^\d+$/).test(b)){b=parseInt(b);
return b==0?"zero search results":(b*10-9).toString()+" - "+(b*10).toString()
}else{return"[NUMBER OF RESULTS NOT AVAILABLE]"
}}catch(a){}}return""
},isDemoConfirmation:function(){return this.isDemo()&&this.isConfirmation()
},isDemo:function(){return(this.getName().indexOf("demo:")>-1||this.getName().indexOf("demo-")>-1||this.getName().indexOf("demos")>-1||this.getName().indexOf("demo_")>-1||this.isDemoDirectory)||(this.isConfirmation()&&this.getPrevious().indexOf("demo")>-1)
},isSignup:function(){return this.getName().indexOf("signup")>-1||this.getName().indexOf("trial")>-1||document.location.href.indexOf("SignupServlet")>-1
},isPricing:function(){return this.getName().indexOf("-pricing")>-1||this.getName().indexOf("pricing-")>-1||this.getName().indexOf("platform-edition")>-1||this.getName().indexOf(":editions")>-1
},isProductCategory:function(){var b=[":crm:sales-force-automation",":sales-cloud:overview",":service-cloud:overview",":data:overview",":crm:customer-service-support",":platform",":chatter",":chatter:overview",":radian6:overview",":jigsaw"];
for(var a=0;
a<b.length;
a++){if(Util.endsWith(this.getName(),":"+this.getLocale()+b[a])){return true
}}return false
},isProduct:function(){return !(this.isProductCategory()||this.getCloud()=="No Cloud")||this.getName().indexOf(":products")>-1||this.getName().indexOf(":touch")>-1
},isEvents:function(){var b=[":events",":cloudforce"];
for(var a=0;
a<b.length;
a++){if(this.getName().indexOf(b[a]+":")>-1||Util.endsWith(this.getName(),b[a])){return true
}}return false
},isSocialEnterprise:function(){return(this.getName().indexOf("social")>-1&&this.getName().indexOf("enterprise")>-1)||this.getChannel().indexOf(":solutions")>-1||this.getChannel().indexOf(":customers")>-1||this.getChannel().indexOf(":like")>-1||this.getName().indexOf("contactme-se")>-1
},isValidLocale:function(a){var b=["ap","au","br","ca","cn","de","dk","es","eu","fi","fr","fr-ca","in","it","jp","kr","mx","ne","nl","no","se","tw","uk","us","my","hk","th","fi","dk"];
for(var c=0;
c<b.length;
c++){if(a==b[c]){return true
}}return false
},isValidServer:function(c){var b=["SFDC","APPX","STOR","LMS","TRUST","DFC","COMM"];
for(var a=0;
a<b.length;
a++){if(c==b[a]){return true
}}return false
},isValidDynamicComponentLink:function(h){var g=(typeof Page==="object"&&Page.getName().indexOf("SFDC:us:blog")>-1)?false:true;
var b=Util.getHref(h),a=true,d=jQuery;
if(!b){return false
}else{if(!Util.getParam("d",b)){return false
}else{if(g&&b.indexOf("/form/")===-1){return false
}else{try{(function(j,i){j(h).parents().each(function(){if(j(this).css("display")=="none"||j(this).css("visibility")=="hidden"){a=false;
return false
}})
})(jQuery,this)
}catch(c){}if(a==false){return false
}}}}return true
},getLeadCaptureForm:function(a){if(this.leadCaptureForm==null&&!this.isCareersForm(a)){for(var b in document.forms){f=document.forms[b];
if(null!=f.name&&("reg_form"==f.name||"signup_form"==f.name)){this.leadCaptureForm=f;
break
}}}return this.leadCaptureForm
},hasChatForm:function(){return($("#prechatForm").size()>0)
},hasChatFormV2:function(){return($(".prechatForm").size()>0)
},hasLeadCaptureForm:function(a){return(this.getLeadCaptureForm(a)!=null)
},isFormBuilderForm:function(){return this.hasLeadCaptureForm()?(this.leadCaptureForm.className.indexOf("form-builder-form")>-1?true:false):false
},getNameCaptureId:function(){var b="FormCampaignId",a="radio1";
if(this.hasLeadCaptureForm()&&this.leadCaptureForm.elements[b]!=null&&!this.nameCaptureId){this.nameCaptureId=Util.convert15To18(this.leadCaptureForm.elements[b].value);
if(!this.nameCaptureId&&this.leadCaptureForm.elements[a]!=null){this.nameCaptureId=Util.convert15To18(this.leadCaptureForm.elements[a][0].value)
}}return this.nameCaptureId==null?"":this.nameCaptureId
},setNameCaptureId:function(a){this.nameCaptureId=Util.convert15To18(a)
},getType:function(){var a=[{name:"Form Page",cb:"hasLeadCaptureForm"},{name:"Form Error Page",cb:"isError"},{name:"Login Page",cb:"isLogin"},{name:"404 Error Page",cb:"is404"},{name:"Search Results Page",cb:"isSearchResults"},{name:"Blog Page",cb:"isBlog"},{name:"Home Page",cb:"isHome"},{name:"Confirmation Page",cb:"isConfirmation"},{name:"Demo Page",cb:"isDemo"},{name:"Pricing and Editions Page",cb:"isPricing"},{name:"Customer Testimonial Page",pm:"customers,success_stories"},{name:"Events Page",cb:"isEvents"},{name:"Video Page",pm:"video"},{name:"Careers Page",pm:"company:careers"},{name:"Press Release Page",pm:"news-press:press-releases"},{name:"Company Page",pm:"company"},{name:"Dreamforce Page",pm:"dreamforce"},{name:"Services: Training Page",pm:"services-training:training_certification"},{name:"Services: Support Page",pm:"services-training:customer-support"},{name:"Services: Consulting Page",pm:"services-training:professional-services"},{name:"Support: Partners Page",pm:"services-training:partner-support"},{name:"Services Page",pm:"services-training"},{name:"Resource Center Page",pm:"resource_center"},{name:"Product Category Page",cb:"isProductCategory"},{name:"Product Page",cb:"isProduct"},{name:"Social Enterprise Page",cb:"isSocialEnterprise"},{name:"Solutions Page",pm:"solutions"},{name:"Country Selector Page",pm:"country_selector"},{name:"Other Page"}];
for(var c=0;
c<a.length;
c++){if(c==a.length-1){break
}else{if(a[c].cb){if(this[a[c].cb]()){return a[c].name
}}else{if(a[c].pm){var d=a[c].pm.split(",");
for(var b=0;
b<d.length;
b++){if(this.getName().indexOf(":"+d[b]+":")>-1||Util.endsWith(this.getName(),":"+d[b])){return a[c].name
}}}}}}return a[a.length-1].name
},getCloud:function(){var a="No Cloud";
if(typeof sfPageData!=="undefined"&&sfPageData.pageCloud){return sfPageData.pageCloud
}else{return a
}},getScore:function(a){a=a?a:"to";
if(!this.scores){this.scores={sa:0,se:0,cu:0,co:0,sm:0,to:0};
var d=Util.getMeta("pageMetrics"),c="";
var g=new Array("sa","se","cu","co","sm","to");
if(d&&Util.isValidJson(d)){c=Util.parseJSON(d);
if(c.scores&&typeof(c.scores)=="object"){for(var b=0;
b<g.length;
b++){if(c.scores[g[b]]){this.scores[g[b]]=(parseFloat(c.scores[g[b]])).toFixed(2)
}else{this.scores[g[b]]=0
}}}}}return(this.getName()!=this.getPrevious()&&this.scores[a])?this.scores[a]:""
},isValidLink:function(g){var b=Util.getHref(g),a=true,d=jQuery;
if(!b){return false
}else{if(!Util.getParam("d",b)){return false
}else{if(!Page.isLogin()&&b.indexOf("/form/")===-1){return false
}else{if(d(g).hasClass("submit")){return false
}else{if(d(g).attr("id")=="free-trial-trigger"&&vp.isCustomer()){return false
}else{if(d(g).attr("class")&&d(g).attr("class").indexOf("chat")>-1){return true
}else{try{(function(i,h){i(g).parents().each(function(){if(i(this).css("display")=="none"||i(this).css("visibility")=="hidden"){a=false;
return false
}else{if(i(this).attr("id")=="nav"||i(this).attr("id")=="footer"||i(this).hasClass("sf-menu")){a=false;
return false
}}})
})(jQuery,this)
}catch(c){}if(a==false){return false
}}}}}}}return true
},setCTAs:function(h,a){h=h?h:"";
a=a?a:"a";
if(this.ctas==null||a){this.ctas=[];
try{(function(j,i){j(a).each(function(){if(i.isValidLink(this)){i.ctas[i.ctas.length]=Util.getParam("d",Util.getHref(this)).length==15?Util.convert15To18(Util.getParam("d",Util.getHref(this))):Util.getParam("d",Util.getHref(this))
}})
})(jQuery,this)
}catch(d){var g=document.getElementsByTagName("a");
for(var c=0;
c<g.length;
c++){var b=Util.getHref(g[c]);
if(b&&Util.getParam("d",b)){this.ctas[this.ctas.length]=Util.getParam("d",b).length==15?Util.convert15To18(Util.getParam("d",b)):Util.getParam("d",b)
}}return false
}}if(h){if(typeof(h)=="string"){this.ctas[this.ctas.length]=h
}else{this.ctas.concat(h)
}}if(this.ctas.length>0){this.ctas=Util.deDupe(this.ctas);
if(this.ctas.length>15){return this.ctas.splice(15,(this.ctas.length-15))
}else{return this.ctas
}}else{return""
}},getCTAs:function(){if(this.ctas==null){this.setCTAs()
}return this.ctas.length>0?this.ctas:""
},showWidgets:function(){try{var d=top!=self;
var c=this.hasLeadCaptureForm()||this.isConfirmation()||this.getName().indexOf(":form:")>-1;
var b=jQuery(window).width()<785;
var g=jQuery("#pagewrap").length==0&&jQuery("#centerwrap").length==0;
if(Util.isIOS()||d||c||b||g){return false
}}catch(a){return false
}return true
},isLiveChat:function(){return this.getName().indexOf("chat-available")>-1
},getLocale:function(b){var c=this.getPathNode(1,b).match(/^(\w{2})$/)||this.getPathNode(1,b).match(/^(\w{2}-\w{2})$/),a="us";
if(c!=null){a=this.isValidLocale(c[0])?c[0]:a
}return a.toLowerCase()
},getChannel:function(){var a=this.getLocale()+":"+(this.getPathNode(2)?this.getPathNode(2):"other");
if(this.getPathNode(3)=="news-press"&&this.getPathNode(4)=="press-releases"){a+=":"+this.getPathNode(3)+":"+this.getPathNode(4)
}else{if(this.getPathNode(3)=="careers"){a+=":"+this.getPathNode(3)
}}return a
},setServer:function(a){if(a&&this.isValidServer(a)){this.server=a;
return this.server
}this.server="SFDC";
return this.server
},getServer:function(){if(this.server==null){this.setServer()
}return this.server
},getReferrer:function(){if(this.referrer){return this.referrer
}else{this.referrer="";
if(Util.getParam("r")){this.referrer=Util.getParam("r");
if(this.referrer.length===1){this.referrer="";
return this.referrer
}}else{if(Util.getParam("adobe_mc_ref")){this.referrer=Util.getParam("adobe_mc_ref")
}else{var a=Util.getCookie("referrer");
if(!(a==""||a==null||a=="null")){Util.deleteCookie("referrer");
this.referrer=a
}else{if(document.referrer){if(document.referrer.indexOf("google.com/cse")>-1||Util.getParam("rurl",document.referrer).indexOf("salesforce.com")>-1){this.referrer="http://www.salesforce.com/site-search.jsp"
}else{if(this.hasExcludedParam(document.referrer)){this.referrer=document.referrer.split("?")[0]
}else{this.referrer=document.referrer
}}}}if(this.getName().indexOf("site-search")>-1){Util.setCookie(Url.encodeComponent(document.location.href),"referrer",60*60)
}}}if(this.isLogin()&&this.referrer.indexOf("https://login.salesforce.com")===0){this.referrer="https://login.salesforce.com"
}this.referrer=this.referrer.indexOf("://")==-1?Url.decodeComponent(this.referrer):this.referrer
}return this.referrer
}};
$(document).ready(function(){function b(g,c,h){var d=new RegExp("([?&])"+c+"=.*?(&|$)","i");
var i=g.indexOf("?")!==-1?"&":"?";
if(g.match(d)){return g.replace(d,"$1"+c+"="+h+"$2")
}else{return g+i+c+"="+h
}}var a={SEM:"701300000021LUP",Email:"701300000021LUU",BAN:"701300000021LUZ",SEO:"701300000021LUe","Paid Social Media":"701300000021LUj","Social Media":"701300000021LUo","SFDC Network":"701300000021LUt","Typed/Bookmarked":"701300000021LUy"};
$("a[href*='www.salesforceiq.com'], a[href*='app.salesforceiq.com']").each(function(){var c=$(this);
c.attr("href",b(c.attr("href"),"d",a[vp.activityData.l_dtype]))
})
});