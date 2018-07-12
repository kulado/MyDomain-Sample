var siteCatConfig=siteCatConfig||{};
siteCatConfig.setDynamicVariablesAndAlwaysSendVars=function(){s.prop1=s.eVar1="D=g";
s.prop2=s.eVar3?"D=v3":"";
s.channel=s.eVar6?"D=v6":"";
s.prop12=s.eVar12?"D=v12":"";
s.prop14=s.eVar14?"D=v14":"";
s.prop18=s.eVar24?"D=v24":"";
s.prop19=s.eVar25?"D=v25":"";
s.prop23=s.eVar34?"D=v34":"";
s.prop32=s.eVar35?"D=v35":"";
s.prop33=s.eVar36?"D=v36":"";
s.eVar2=s.referrer?"D=r":"";
s.eVar8=s.pageName?"D=pageName":"";
s.eVar64=(s.transactionID?"D=xact":"");
s.eVar27=s.campaign?"D=v0":"";
s.eVar39=s.prop35?"D=c35":"";
s.linkTrackVars=s.apl(s.linkTrackVars,"prop7",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"prop49",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar34",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar7",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar8",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar35",",",2);
s.linkTrackEvents=s.apl(s.linkTrackEvents,"event7",",",2)
};
siteCatConfig.trackPageLoad=function(){s.server=digitalData.page.server;
s.pageName=digitalData.page.pagename;
s.pageURL=digitalData.page.url;
s.referrer=digitalData.page.referrer;
s.eVar1=digitalData.page.url;
s.eVar3=digitalData.page.locale;
s.eVar4=digitalData.user[0].profile[0].dayssincelastvisit;
s.eVar6=digitalData.page.sitesection;
s.eVar10=digitalData.user[0].profile[0].targetingcompanysize;
s.eVar11=digitalData.page.pageloadtime;
s.eVar12=digitalData.page.searchterm;
s.eVar14=digitalData.user[0].profile[0].usertype;
s.eVar16=digitalData.user[0].profile[0].usercompanysize;
s.eVar17=digitalData.page.numberpageviews;
s.eVar18=digitalData.user[0].profile[0].usercompanycountry;
s.eVar19=digitalData.user[0].profile[0].userprimaryprodinterest;
s.eVar20=digitalData.page.convertingpage;
s.eVar22=digitalData.page.internaldrivers;
s.eVar24=digitalData.user[0].profile[0].timepartinghour;
s.eVar25=digitalData.user[0].profile[0].timepartingday;
s.eVar26=digitalData.user[0].profile[0].formfillstatus;
s.eVar28=digitalData.page.offerid;
s.eVar31=digitalData.user[0].profile[0].logintype;
s.eVar32=digitalData.page.moduletracking;
s.eVar33=digitalData.page.numofintsearches;
s.eVar34=digitalData.user[0].profile[0].visitnumber;
s.eVar35=digitalData.page.cloud;
s.eVar36=digitalData.page.type;
s.eVar38=digitalData.user[0].profile[0].usercompanyname;
s.eVar40=digitalData.page.authorName;
s.eVar41=digitalData.user[0].profile[0].targetingcompanyindustry;
s.eVar42=digitalData.page.emailid;
s.eVar43=digitalData.page.numberofformcompletes;
s.eVar44=digitalData.util.mappings.adobe.formatElement("crossvisittrafficdrivertype",digitalData.page.crossvisittrafficdrivertype);
s.eVar45=digitalData.page.toporleftnav;
s.eVar46=digitalData.page.sembrand;
s.eVar50=digitalData.page.captchatype;
s.eVar52=digitalData.user[0].profile[0].targetingcompanyname;
s.eVar53=digitalData.page.sharechannel;
s.eVar54=digitalData.user[0].profile[0].userfirstformcompletetime;
s.eVar57=digitalData.user[0].profile[0].orgId;
s.eVar58=digitalData.user[0].profile[0].orgEdition;
s.eVar63=digitalData.user[0].profile[0].targetingaudience;
s.eVar73=digitalData.user[0].profile[0].accounttype;
s.eVar75=digitalData.page.subdomainReferrer;
s.eVar77=digitalData.user[0].profile[0].neustar;
s.eVar81=digitalData.user[0].profile[0].kxsfdc;
s.prop4=digitalData.page.pageloadtime;
s.prop22=digitalData.page.drivertypepathing;
s.prop27=digitalData.user[0].profile[0].detailedusertype;
s.prop35=digitalData.page.prevpagesanitized;
s.prop39=digitalData.page.namenolocale;
s.prop40=digitalData.page.drivertype;
s.prop42=digitalData.page.uiframework;
s.prop43=digitalData.page.blogpostmeta;
s.prop47=digitalData.page.numsearchresults;
s.prop49=digitalData.page.segment;
s.prop50=digitalData.page.reportsuite;
s.transactionID=digitalData.user[0].profile[0].transactionid;
s.linkType=digitalData.flags.linktype;
s.pageLoaded=digitalData.flags.pageloaded;
s.charSet=digitalData.page.charSet;
s.channel=digitalData.page.sitesection;
s.prevPage=digitalData.page.prevpage;
s.events=_(digitalData.event).chain().pluck("eventInfo").pluck("eventID").map(digitalData.util.mappings.adobe.getAdobeEventId).union(s.events?s.events.split(","):[]).uniq().value().join(",");
s.pageType=digitalData.page.spagetype;
if(digitalData.page.spagetype==="errorPage"){s.pageType="errorPage";
s.prop29=digitalData.page.url
}s.products=digitalData.util.mappings.adobe.formatElement("products",digitalData.products);
s.campaign=digitalData.page.scampaign;
try{if(s.prop35){var a=s.getPercentPageViewed(s.pageName);
if(s.c_r("s_ppv_x")=="true"){s.prop37="100|0";
s.c_w("s_ppv_x","",digitalData.page.expdate)
}else{if(a.length>1&&a[1]!="undefined"&&typeof(a[1])!="undefined"){s.prop37=a[1]+"|"+(a.length>2&&a[1]>a[2]?(a[1]-a[2]):"0")
}}}}catch(b){}try{if(top!=self){s.browserWidth=s.browserHeight="";
s.c_w("s_ppv_x","true")
}}catch(b){}siteCatConfig.setDynamicVariablesAndAlwaysSendVars()
};
siteCatConfig.runOnEveryAMRequest=function(){if(s.linkObject&&s.linkType==="e"){if(s.linkObject.attributes&&s.linkObject.attributes["data-exit"]&&s.linkObject.attributes["data-exit"].value==="false"){s.linkObject=null
}if(s.pageName.indexOf("news-press")>-1){s.linkObject.name="pr_page:"+s.linkObject.name
}s.eVar70=s.linkObject.name;
s.linkTrackVars=s.apl(s.linkTrackVars,"eVar70",",",2);
s.events=s.apl(s.events,"event65",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"events",",",2);
s.linkTrackEvents=s.apl(s.linkTrackEvents,"event65",",",2)
}s.clicked=s.p_go();
if(s.clicked&&s.clicked.href){var b=s.trimUrl(document.location.href);
var f=s.trimUrl(s.clicked.href);
if((b!=f)&&Util.getParam("d","",s.clicked.href)){var a=Server.getInternalDomains(),g=true;
if(a.length>0){for(var d=0;
d<a.length;
d++){if(s.clicked.href.indexOf(a[d])>-1){g=false;
break
}}if(g){s.linkType="e";
s.products=digitalData.util.trackCTAs("",Util.convert15To18(Util.getParam("d","",s.clicked.href)));
s.events=s.products.indexOf("event25")==-1?s.events:s.apl(s.events,"event25",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"products",",",2);
s.linkTrackVars=s.apl(s.linkTrackVars,"events",",",2);
s.linkTrackEvents=s.apl(s.linkTrackEvents,"event25",",",2)
}else{if(s.clicked.href.indexOf("internal=true")==-1){s.clicked.href=s.clicked.href.replace("d="+Util.getParam("d","",s.clicked.href),"d="+Util.getParam("d","",s.clicked.href)+"&internal=true")
}}}}if(s.pageName.indexOf(":login")>-1&&s.clicked.href.indexOf("www.salesforce.com")>-1){s.clicked.href+=(s.clicked.href.indexOf("?")>-1?"&":"?")+"r="+Url.encodeComponent(document.location.href)
}try{s.dfSite="dreamevent.secure.force.com/dreamforce";
if(s.clicked.href.indexOf(s.dfSite)>-1){s.clicked.href=s.clicked.href.indexOf(s.dfSite+"/")>-1?s.clicked.href:s.clicked.href.replace(s.dfSite,s.dfSite+"/");
s.clicked.href+=(s.clicked.href.indexOf("?")>-1?"&":"?")+"wl="+Page.getLocale()+"&wt="+vp.getType();
s.clicked.href+=(s.clicked.href.indexOf("?")>-1?"&":"?")+"mboxSession="+mboxFactoryDefault.getSessionId().getId()
}}catch(c){}try{if(s.clicked.getAttribute("sfdc:mobilehref")!=null){s.linkType=s.linkType||"o";
s.linkName="mobile-swap|"+s.clicked.href
}else{if(s.clicked.href.indexOf("#")>-1&&s.clicked.href.indexOf("#submit")==-1&&s.clicked.href.indexOf("#")!=s.clicked.href.length-1&&!s.linkTracked){s.linkType=s.linkType||"o";
s.linkName="anchor|"+s.clicked.href
}}}catch(c){}s.linkTracked=false
}if(!s.linkTracked){s.downloadUrl=s.linkHandler("","d","",1);
if(s.downloadUrl){s.events="event11";
s.downloadUrl=s.downloadUrl.indexOf("#")>-1?s.downloadUrl.substring(0,s.downloadUrl.indexOf("#")):s.downloadUrl;
s.downloadUrl=s.downloadUrl.toLowerCase();
s.downloadUrl=s.repl(s.downloadUrl,"https://","");
s.downloadUrl=s.repl(s.downloadUrl,"http://","");
s.downloadUrl=s.downloadUrl.substring(s.downloadUrl.indexOf("/")+1);
s.downloadUrl=s.repl(s.downloadUrl,"/",":").toLowerCase();
s.pageName=s.server+":"+s.eVar6+":file:"+s.downloadUrl;
s.prop35=Page.setPrevious()?Page.setPrevious():"[NO PREVIOUS PAGE AVAILABLE]"
}}siteCatConfig.setDynamicVariablesAndAlwaysSendVars()
};
var s_account=Server.getAccount();
var s=s_gi(s_account);
s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=true;
s.linkDownloadFileTypes=".exe,.zip,.wav,.mp3,.mov,.mpg,.avi,.wmv,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.eps";
s.linkInternalFilters="javascript:,.salesforce.com,sfdcstatic.com,.force.com,chatter.com,opinionlab.com,mailto:,"+document.location.hostname;
s.linkLeaveQueryString=false;
s.linkTrackVars="None";
s.linkTrackEvents="None";
s.fpCookieDomainPeriods=(Util.countChars(document.location.hostname,".")+1).toString();
s._tpDST={2012:"3/11,11/4",2013:"3/10,11/3",2014:"3/9,11/2",2015:"3/8,11/1",2016:"3/13,11/6",2017:"3/12,11/5",2018:"3/11,11/4",2019:"3/10,11/3"};
s.wd=window;
s.usePlugins=true;
function s_doPlugins(a){if(!a.canceldoplugins){if(!a.pageLoaded){siteCatConfig.trackPageLoad()
}siteCatConfig.runOnEveryAMRequest()
}a.pageLoaded=true
}s.doPlugins=s_doPlugins;
s.cvpSimple=function(v,cn,ex,ct,dl){if(!v){return""
}ex=ex?ex:365;
var exd=new Date(),cv=s.c_r(cn),na=new Array();
if(cv.indexOf("[[")>-1){var oa=new Array();
oa=eval(cv);
for(var i=0;
i<oa.length;
i++){na[na.length]=oa[i][0]
}exd.setDate(exd.getDate()-1)
}else{if(cv){na=cv.split("~")
}}if(na.length>=ct){na.splice(0,1)
}na[na.length]=v;
exd.setDate(exd.getDate()+ex);
s.c_w(cn,na.join("~"),exd);
return na.join(dl)
};
function s_getLoadTime(){if(!window.s_loadT){var c=new Date().getTime(),f=window.performance?performance.timing:0,d=f?f.requestStart:window.inHeadTS||0;
s_loadT=d?Math.round((c-d)/100):""
}return s_loadT
}s.trimUrl=new Function("u","if(!u){return '';}if(u.indexOf('?')>-1){u=u.substring(0,u.indexOf('?'));}if(u.indexOf('#')>-1){u=u.substring(0,u.indexOf('#'));}return u;");
s.deDupe=new Function("l","d","d=d?d:',';if(!(l&&d)){return false;}var a=l.split(d),lv='',i=0;a.sort();while(i<a.length){if(a[i]==lv){a.splice(i,1);}else{lv=a[i];i++;}}return a.join(d)");
s.getQueryParam=s.Util.getQueryParam;
s.getValOnce=new Function("v","c","e","var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
if(!s.__ccucr){s.c_rr=s.c_r;
s.__ccucr=true;
function c_r(f){var h=this,l=new Date,b=h.c_rr(f),n=h.c_rspers(),g,a,j;
if(b){return b
}f=h.escape?h.escape(f):encodeURIComponent(f);
g=n.indexOf(" "+f+"=");
n=g<0?h.c_rr("s_sess"):n;
g=n.indexOf(" "+f+"=");
a=g<0?g:n.indexOf("|",g);
j=g<0?g:n.indexOf(";",g);
a=a>0?a:j;
b=g<0?"":h.unescape?h.unescape(n.substring(g+2+f.length,a<0?n.length:a)):decodeURIComponent(n.substring(g+2+f.length,a<0?n.length:a));
return b
}function c_rspers(){var h=this,c=h.c_rr("s_pers"),f=new Date().getTime(),a=null,j=[],d="";
if(!c){return d
}j=c.split(";");
for(var g=0,b=j.length;
g<b;
g++){a=j[g].match(/\|([0-9]+)$/);
if(a&&parseInt(a[1])>=f){d+=j[g]+";"
}}return d
}s.c_rspers=c_rspers;
s.c_r=s.cookieRead=c_r
}if(!s.__ccucw){s.c_wr=s.c_w;
s.__ccucw=true;
function c_w(g,w,m){var z=this,n=new Date,r=0,b="s_pers",a="s_sess",q=0,p=0,x,u,o,h,y,l;
n.setTime(n.getTime()-60000);
if(z.c_rr(g)){z.c_wr(g,"",n)
}g=z.escape?z.escape(g):encodeURIComponent(g);
x=z.c_rspers();
h=x.indexOf(" "+g+"=");
if(h>-1){x=x.substring(0,h)+x.substring(x.indexOf(";",h)+1);
q=1
}u=z.c_rr(a);
h=u.indexOf(" "+g+"=");
if(h>-1){u=u.substring(0,h)+u.substring(u.indexOf(";",h)+1);
p=1
}n=new Date;
if(m){if(m==1){m=new Date,l=m.getYear(),m.setYear(l+5+(l<1900?1900:0))
}if(m.getTime()>n.getTime()){x+=" "+g+"="+(z.escape?z.escape(w):encodeURIComponent(w))+"|"+m.getTime()+";";
q=1
}}else{u+=" "+g+"="+(z.escape?z.escape(w):encodeURIComponent(w))+";";
p=1
}u=u.replace(/%00/g,"");
x=x.replace(/%00/g,"");
if(p){z.c_wr(a,u,0)
}if(q){y=x;
while(y&&y.indexOf(";")!=-1){var j=parseInt(y.substring(y.indexOf("|")+1,y.indexOf(";")));
y=y.substring(y.indexOf(";")+1);
r=r<j?j:r
}n.setTime(r);
z.c_wr(b,x,n)
}return w==z.c_r(z.unescape?z.unescape(g):decodeURIComponent(g))
}s.c_w=s.cookieWrite=c_w
}s.getAndPersistValue=new Function("v","c","e","var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(v)s.c_w(c,v,e?a:0);return s.c_r(c);");
s.linkHandler=new Function("p","t","r","c","var s=this;var o=s.p_go(),h=o.href;var i,l;var n=p?'':t=='e'?'linkInternalFilters':t=='d'?'linkDownloadFileTypes':'';t=t?t:'o';if(!h||(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(n){p=s.rep(s[n],',','|');}l=s.pt(p,'|','p_gn',h.toLowerCase());if(l&&n!='linkInternalFilters'||(!l&&n=='linkInternalFilters')){s.linkName=l=='[['?'':l;s.linkType=t;if(c){s.linkName=s.linkType=s.lnk=s.eo='';}return r?o:h;}return '';");
s.p_gn=new Function("t","h","var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x=t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}return 0;");
s.getPercentPageViewed=new Function("n","var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load','unload','scroll','resize','zoom','keyup','mouseup','touchend','orientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s.pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){var k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split(',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]=!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){var W=window,D=document,B=D.body,E=D.documentElement,S=window.screen||0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWidth',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj||W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.substring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[Hs],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.innerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round(C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180:Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!=N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|iPad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P':'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E.length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};var a=s.s_PPVg();return!n||n=='-'?a[1]:a");
s.getTimeParting=new Function("h","z","var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMonth()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYear());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de){z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' PM';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
s.trackTNT=new Function("v","p","b","var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s.getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");
s.apl=new Function("l","v","d","u","var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l");
s.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.repl=new Function("x","o","n","var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.ia=new Function("ar","v","for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");
s.p_go=new Function("var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk;var y=s.ot(o);var n=s.oid(o);var x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);x=o.s_oidt}}return o?o:'';");
s.visitorNamespace="salesforce";
s.trackingServer="omtr1.partners.salesforce.com";
s.trackingServerSecure="omtr2.partners.salesforce.com";
s.visitorMigrationServer="salesforce.122.2o7.net";
if(typeof Visitor!=="undefined"){s.prop57="VisitorAPI Present";
s.visitor=Visitor.getInstance("8D6C67C25245AF020A490D4C@AdobeOrg")
}else{s.prop57="VisitorAPI Missing"
}function AppMeasurement_Module_ActivityMap(l){function j(g,k){var f,p,m;
if(g&&k&&(f=n.c[k]||(n.c[k]=k.split(",")))){for(m=0;
m<f.length&&(p=f[m++]);
){if(-1<g.indexOf(p)){return null
}}}c=1;
return g
}function b(y,t,x,w,r){var q,p;
if(y.dataset&&(p=y.dataset[t])){q=p
}else{if(y.getAttribute){if(p=y.getAttribute("data-"+x)){q=p
}else{if(p=y.getAttribute(x)){q=p
}}}}if(!q&&l.useForcedLinkTracking&&r&&(q="",t=y.onclick?""+y.onclick:"")){x=t.indexOf(w);
var f,m;
if(0<=x){for(x+=10;
x<t.length&&0<="= \t\r\n".indexOf(t.charAt(x));
){x++
}if(x<t.length){p=x;
for(f=m=0;
p<t.length&&(";"!=t.charAt(p)||f);
){f?t.charAt(p)!=f||m?m="\\"==t.charAt(p)?!m:0:f=0:(f=t.charAt(p),'"'!=f&&"'"!=f&&(f=0)),p++
}if(t=t.substring(x,p)){y.e=new Function("s","var e;try{s.w."+w+"="+t+"}catch(e){}"),y.e(l)
}}}}return q||r&&l.w[w]
}function a(g,k,f){var m;
return(m=n[k](g,f))&&(c?(c=0,m):j(h(m),n[k+"Exclusions"]))
}function u(g,k,f){var m;
if(g&&!(1===(m=g.nodeType)&&(m=g.nodeName)&&(m=m.toUpperCase())&&o[m])&&(1===g.nodeType&&(m=g.nodeValue)&&(k[k.length]=m),f.a||f.t||f.s||!g.getAttribute||((m=g.getAttribute("alt"))?f.a=m:(m=g.getAttribute("title"))?f.t=m:"IMG"==(""+g.nodeName).toUpperCase()&&(m=g.getAttribute("src")||g.src)&&(f.s=m)),(m=g.childNodes)&&m.length)){for(g=0;
g<m.length;
g++){u(m[g],k,f)
}}}function h(f){if(null==f||void 0==f){return f
}try{return f.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)
}catch(g){}}var n=this;
n.s=l;
var d=window;
d.s_c_in||(d.s_c_il=[],d.s_c_in=0);
n._il=d.s_c_il;
n._in=d.s_c_in;
n._il[n._in]=n;
d.s_c_in++;
n._c="s_m";
n.c={};
var c=0,o={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};
n._g=function(){var g,m,f,p=l.contextData,k=l.linkObject;
(g=l.pageName||l.pageURL)&&(m=a(k,"link",l.linkName))&&(f=a(k,"region"))&&(p["a.activitymap.page"]=g.substring(0,255),p["a.activitymap.link"]=128<m.length?m.substring(0,128):m,p["a.activitymap.region"]=127<f.length?f.substring(0,127):f,p["a.activitymap.pageIDType"]=l.pageName?1:0)
};
n.link=function(k,p){var g;
if(p){g=j(h(p),n.linkExclusions)
}else{if((g=k)&&!(g=b(k,"sObjectId","s-object-id","s_objectID",1))){var q,m;
(m=j(h(k.innerText||k.textContent),n.linkExclusions))||(u(k,q=[],g={a:void 0,t:void 0,s:void 0}),(m=j(h(q.join(""))))||(m=j(h(g.a?g.a:g.t?g.t:g.s?g.s:void 0)))||!(q=(q=k.tagName)&&q.toUpperCase?q.toUpperCase():"")||("INPUT"==q||"SUBMIT"==q&&k.value?m=j(h(k.value)):"IMAGE"==q&&k.src&&(m=j(h(k.src)))));
g=m
}}return g
};
n.region=function(g){for(var k,f=n.regionIDAttribute||"id";
g&&(g=g.parentNode);
){if(k=b(g,f,f,f)){return k
}if("BODY"==g.nodeName){return"BODY"
}}}
}function AppMeasurement(b){var j=this;
j.version="2.4.0";
var g=window;
g.s_c_in||(g.s_c_il=[],g.s_c_in=0);
j._il=g.s_c_il;
j._in=g.s_c_in;
j._il[j._in]=j;
g.s_c_in++;
j._c="s_c";
var c=g.AppMeasurement.Pb;
c||(c=null);
var d=g,f,z;
try{for(f=d.parent,z=d.location;
f&&f.location&&z&&""+f.location!=""+z&&d.location&&""+f.location!=""+d.location&&f.location.host==z.host;
){d=f,f=d.parent
}}catch(q){}j.F=function(m){try{console.log(m)
}catch(k){}};
j.Ma=function(k){return""+parseInt(k)==""+k
};
j.replace=function(m,k,n){return !m||0>m.indexOf(k)?m:m.split(k).join(n)
};
j.escape=function(m){var a,k;
if(!m){return m
}m=encodeURIComponent(m);
for(a=0;
7>a;
a++){k="+~!*()'".substring(a,a+1),0<=m.indexOf(k)&&(m=j.replace(m,k,"%"+k.charCodeAt(0).toString(16).toUpperCase()))
}return m
};
j.unescape=function(k){if(!k){return k
}k=0<=k.indexOf("+")?j.replace(k,"+"," "):k;
try{return decodeURIComponent(k)
}catch(a){}return unescape(k)
};
j.wb=function(){var m=g.location.hostname,a=j.fpCookieDomainPeriods,k;
a||(a=j.cookieDomainPeriods);
if(m&&!j.Ea&&!/^[0-9.]+$/.test(m)&&(a=a?parseInt(a):2,a=2<a?a:2,k=m.lastIndexOf("."),0<=k)){for(;
0<=k&&1<a;
){k=m.lastIndexOf(".",k-1),a--
}j.Ea=0<k?m.substring(k):m
}return j.Ea
};
j.c_r=j.cookieRead=function(n){n=j.escape(n);
var a=" "+j.d.cookie,m=a.indexOf(" "+n+"="),k=0>m?m:a.indexOf(";",m);
n=0>m?"":j.unescape(a.substring(m+2+n.length,0>k?a.length:k));
return"[[B]]"!=n?n:""
};
j.c_w=j.cookieWrite=function(r,a,p){var m=j.wb(),n=j.cookieLifetime,k;
a=""+a;
n=n?(""+n).toUpperCase():"";
p&&"SESSION"!=n&&"NONE"!=n&&((k=""!=a?parseInt(n?n:0):-60)?(p=new Date,p.setTime(p.getTime()+1000*k)):1==p&&(p=new Date,k=p.getYear(),p.setYear(k+5+(1900>k?1900:0))));
return r&&"NONE"!=n?(j.d.cookie=j.escape(r)+"="+j.escape(""!=a?a:"[[B]]")+"; path=/;"+(p&&"SESSION"!=n?" expires="+p.toGMTString()+";":"")+(m?" domain="+m+";":""),j.cookieRead(r)==a):0
};
j.L=[];
j.ia=function(t,a,r){if(j.Fa){return 0
}j.maxDelay||(j.maxDelay=250);
var n=0,p=(new Date).getTime()+j.maxDelay,m=j.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];
m||(m=j.d.webkitVisibilityState);
if(m&&"prerender"==m){if(!j.ja){for(j.ja=1,r=0;
r<k.length;
r++){j.d.addEventListener(k[r],function(){var u=j.d.visibilityState;
u||(u=j.d.webkitVisibilityState);
"visible"==u&&(j.ja=0,j.delayReady())
})
}}n=1;
p=0
}else{r||j.p("_d")&&(n=1)
}n&&(j.L.push({m:t,a:a,t:p}),j.ja||setTimeout(j.delayReady,j.maxDelay));
return n
};
j.delayReady=function(){var m=(new Date).getTime(),a=0,k;
for(j.p("_d")?a=1:j.xa();
0<j.L.length;
){k=j.L.shift();
if(a&&!k.t&&k.t>m){j.L.unshift(k);
setTimeout(j.delayReady,parseInt(j.maxDelay/2));
break
}j.Fa=1;
j[k.m].apply(j,k.a);
j.Fa=0
}};
j.setAccount=j.sa=function(m){var a,k;
if(!j.ia("setAccount",arguments)){if(j.account=m,j.allAccounts){for(a=j.allAccounts.concat(m.split(",")),j.allAccounts=[],a.sort(),k=0;
k<a.length;
k++){0!=k&&a[k-1]==a[k]||j.allAccounts.push(a[k])
}}else{j.allAccounts=m.split(",")
}}};
j.foreachVar=function(t,a){var r,n,p,m,k="";
p=n="";
if(j.lightProfileID){r=j.P,(k=j.lightTrackVars)&&(k=","+k+","+j.na.join(",")+",")
}else{r=j.g;
if(j.pe||j.linkType){k=j.linkTrackVars,n=j.linkTrackEvents,j.pe&&(p=j.pe.substring(0,1).toUpperCase()+j.pe.substring(1),j[p]&&(k=j[p].Nb,n=j[p].Mb))
}k&&(k=","+k+","+j.H.join(",")+",");
n&&k&&(k+=",events,")
}a&&(a=","+a+",");
for(n=0;
n<r.length;
n++){p=r[n],(m=j[p])&&(!k||0<=k.indexOf(","+p+","))&&(!a||0<=a.indexOf(","+p+","))&&t(p,m)
}};
j.r=function(B,C,A,w,x){var u="",t,p,r,a,n=0;
"contextData"==B&&(B="c");
if(C){for(t in C){if(!(Object.prototype[t]||x&&t.substring(0,x.length)!=x)&&C[t]&&(!A||0<=A.indexOf(","+(w?w+".":"")+t+","))){r=!1;
if(n){for(p=0;
p<n.length;
p++){t.substring(0,n[p].length)==n[p]&&(r=!0)
}}if(!r&&(""==u&&(u+="&"+B+"."),p=C[t],x&&(t=t.substring(x.length)),0<t.length)){if(r=t.indexOf("."),0<r){p=t.substring(0,r),r=(x?x:"")+p+".",n||(n=[]),n.push(r),u+=j.r(p,C,A,w,r)
}else{if("boolean"==typeof p&&(p=p?"true":"false"),p){if("retrieveLightData"==w&&0>x.indexOf(".contextData.")){switch(r=t.substring(0,4),a=t.substring(4),t){case"transactionID":t="xact";
break;
case"channel":t="ch";
break;
case"campaign":t="v0";
break;
default:j.Ma(a)&&("prop"==r?t="c"+a:"eVar"==r?t="v"+a:"list"==r?t="l"+a:"hier"==r&&(t="h"+a,p=p.substring(0,255)))
}}u+="&"+j.escape(t)+"="+j.escape(p)
}}}}}""!=u&&(u+="&."+B)
}return u
};
j.usePostbacks=0;
j.zb=function(){var D="",E,C,A,B,x,w,t,u,a="",r="",p=B="";
if(j.lightProfileID){E=j.P,(a=j.lightTrackVars)&&(a=","+a+","+j.na.join(",")+",")
}else{E=j.g;
if(j.pe||j.linkType){a=j.linkTrackVars,r=j.linkTrackEvents,j.pe&&(B=j.pe.substring(0,1).toUpperCase()+j.pe.substring(1),j[B]&&(a=j[B].Nb,r=j[B].Mb))
}a&&(a=","+a+","+j.H.join(",")+",");
r&&(r=","+r+",",a&&(a+=",events,"));
j.events2&&(p+=(""!=p?",":"")+j.events2)
}if(j.visitor&&j.visitor.getCustomerIDs){B=c;
if(x=j.visitor.getCustomerIDs()){for(C in x){Object.prototype[C]||(A=x[C],"object"==typeof A&&(B||(B={}),A.id&&(B[C+".id"]=A.id),A.authState&&(B[C+".as"]=A.authState)))
}}B&&(D+=j.r("cid",B))
}j.AudienceManagement&&j.AudienceManagement.isReady()&&(D+=j.r("d",j.AudienceManagement.getEventCallConfigParams()));
for(C=0;
C<E.length;
C++){B=E[C];
x=j[B];
A=B.substring(0,4);
w=B.substring(4);
x||("events"==B&&p?(x=p,p=""):"marketingCloudOrgID"==B&&j.visitor&&(x=j.visitor.marketingCloudOrgID));
if(x&&(!a||0<=a.indexOf(","+B+","))){switch(B){case"customerPerspective":B="cp";
break;
case"marketingCloudOrgID":B="mcorgid";
break;
case"supplementalDataID":B="sdid";
break;
case"timestamp":B="ts";
break;
case"dynamicVariablePrefix":B="D";
break;
case"visitorID":B="vid";
break;
case"marketingCloudVisitorID":B="mid";
break;
case"analyticsVisitorID":B="aid";
break;
case"audienceManagerLocationHint":B="aamlh";
break;
case"audienceManagerBlob":B="aamb";
break;
case"authState":B="as";
break;
case"pageURL":B="g";
255<x.length&&(j.pageURLRest=x.substring(255),x=x.substring(0,255));
break;
case"pageURLRest":B="-g";
break;
case"referrer":B="r";
break;
case"vmk":case"visitorMigrationKey":B="vmt";
break;
case"visitorMigrationServer":B="vmf";
j.ssl&&j.visitorMigrationServerSecure&&(x="");
break;
case"visitorMigrationServerSecure":B="vmf";
!j.ssl&&j.visitorMigrationServer&&(x="");
break;
case"charSet":B="ce";
break;
case"visitorNamespace":B="ns";
break;
case"cookieDomainPeriods":B="cdp";
break;
case"cookieLifetime":B="cl";
break;
case"variableProvider":B="vvp";
break;
case"currencyCode":B="cc";
break;
case"channel":B="ch";
break;
case"transactionID":B="xact";
break;
case"campaign":B="v0";
break;
case"latitude":B="lat";
break;
case"longitude":B="lon";
break;
case"resolution":B="s";
break;
case"colorDepth":B="c";
break;
case"javascriptVersion":B="j";
break;
case"javaEnabled":B="v";
break;
case"cookiesEnabled":B="k";
break;
case"browserWidth":B="bw";
break;
case"browserHeight":B="bh";
break;
case"connectionType":B="ct";
break;
case"homepage":B="hp";
break;
case"events":p&&(x+=(""!=x?",":"")+p);
if(r){for(w=x.split(","),x="",A=0;
A<w.length;
A++){t=w[A],u=t.indexOf("="),0<=u&&(t=t.substring(0,u)),u=t.indexOf(":"),0<=u&&(t=t.substring(0,u)),0<=r.indexOf(","+t+",")&&(x+=(x?",":"")+w[A])
}}break;
case"events2":x="";
break;
case"contextData":D+=j.r("c",j[B],a,B);
x="";
break;
case"lightProfileID":B="mtp";
break;
case"lightStoreForSeconds":B="mtss";
j.lightProfileID||(x="");
break;
case"lightIncrementBy":B="mti";
j.lightProfileID||(x="");
break;
case"retrieveLightProfiles":B="mtsr";
break;
case"deleteLightProfiles":B="mtsd";
break;
case"retrieveLightData":j.retrieveLightProfiles&&(D+=j.r("mts",j[B],a,B));
x="";
break;
default:j.Ma(w)&&("prop"==A?B="c"+w:"eVar"==A?B="v"+w:"list"==A?B="l"+w:"hier"==A&&(B="h"+w,x=x.substring(0,255)))
}x&&(D+="&"+B+"="+("pev"!=B.substring(0,3)?j.escape(x):x))
}"pev3"==B&&j.e&&(D+=j.e)
}return D
};
j.D=function(m){var k=m.tagName;
if("undefined"!=""+m.Sb||"undefined"!=""+m.Ib&&"HTML"!=(""+m.Ib).toUpperCase()){return""
}k=k&&k.toUpperCase?k.toUpperCase():"";
"SHAPE"==k&&(k="");
k&&(("INPUT"==k||"BUTTON"==k)&&m.type&&m.type.toUpperCase?k=m.type.toUpperCase():!k&&m.href&&(k="A"));
return k
};
j.Ia=function(m){var k=g.location,t=m.href?m.href:"",p,r,n;
p=t.indexOf(":");
r=t.indexOf("?");
n=t.indexOf("/");
t&&(0>p||0<=r&&p>r||0<=n&&p>n)&&(r=m.protocol&&1<m.protocol.length?m.protocol:k.protocol?k.protocol:"",p=k.pathname.lastIndexOf("/"),t=(r?r+"//":"")+(m.host?m.host:k.host?k.host:"")+("/"!=t.substring(0,1)?k.pathname.substring(0,0>p?0:p)+"/":"")+t);
return t
};
j.M=function(r){var a=j.D(r),p,m,n="",k=0;
return a&&(p=r.protocol,m=r.onclick,!r.href||"A"!=a&&"AREA"!=a||m&&p&&!(0>p.toLowerCase().indexOf("javascript"))?m?(n=j.replace(j.replace(j.replace(j.replace(""+m,"\r",""),"\n",""),"\t","")," ",""),k=2):"INPUT"==a||"SUBMIT"==a?(r.value?n=r.value:r.innerText?n=r.innerText:r.textContent&&(n=r.textContent),k=3):"IMAGE"==a&&r.src&&(n=r.src):n=j.Ia(r),n)?{id:n.substring(0,100),type:k}:0
};
j.Qb=function(m){for(var a=j.D(m),k=j.M(m);
m&&!k&&"BODY"!=a;
){if(m=m.parentElement?m.parentElement:m.parentNode){a=j.D(m),k=j.M(m)
}}k&&"BODY"!=a||(m=0);
m&&(a=m.onclick?""+m.onclick:"",0<=a.indexOf(".tl(")||0<=a.indexOf(".trackLink("))&&(m=0);
return m
};
j.Hb=function(){var B,C,A=j.linkObject,w=j.linkType,x=j.linkURL,u,t;
j.oa=1;
A||(j.oa=0,A=j.clickObject);
if(A){B=j.D(A);
for(C=j.M(A);
A&&!C&&"BODY"!=B;
){if(A=A.parentElement?A.parentElement:A.parentNode){B=j.D(A),C=j.M(A)
}}C&&"BODY"!=B||(A=0);
if(A&&!j.linkObject){var r=A.onclick?""+A.onclick:"";
if(0<=r.indexOf(".tl(")||0<=r.indexOf(".trackLink(")){A=0
}}}else{j.oa=1
}!x&&A&&(x=j.Ia(A));
x&&!j.linkLeaveQueryString&&(u=x.indexOf("?"),0<=u&&(x=x.substring(0,u)));
if(!w&&x){var p=0,a=0,k;
if(j.trackDownloadLinks&&j.linkDownloadFileTypes){for(r=x.toLowerCase(),u=r.indexOf("?"),t=r.indexOf("#"),0<=u?0<=t&&t<u&&(u=t):u=t,0<=u&&(r=r.substring(0,u)),u=j.linkDownloadFileTypes.toLowerCase().split(","),t=0;
t<u.length;
t++){(k=u[t])&&r.substring(r.length-(k.length+1))=="."+k&&(w="d")
}}if(j.trackExternalLinks&&!w&&(r=x.toLowerCase(),j.La(r)&&(j.linkInternalFilters||(j.linkInternalFilters=g.location.hostname),u=0,j.linkExternalFilters?(u=j.linkExternalFilters.toLowerCase().split(","),p=1):j.linkInternalFilters&&(u=j.linkInternalFilters.toLowerCase().split(",")),u))){for(t=0;
t<u.length;
t++){k=u[t],0<=r.indexOf(k)&&(a=1)
}a?p&&(w="e"):p||(w="e")
}}j.linkObject=A;
j.linkURL=x;
j.linkType=w;
if(j.trackClickMap||j.trackInlineStats){j.e="",A&&(w=j.pageName,x=1,A=A.sourceIndex,w||(w=j.pageURL,x=0),g.s_objectID&&(C.id=g.s_objectID,A=C.type=1),w&&C&&C.id&&B&&(j.e="&pid="+j.escape(w.substring(0,255))+(x?"&pidt="+x:"")+"&oid="+j.escape(C.id.substring(0,100))+(C.type?"&oidt="+C.type:"")+"&ot="+B+(A?"&oi="+A:"")))
}};
j.Ab=function(){var w=j.oa,x=j.linkType,u=j.linkURL,r=j.linkName;
x&&(u||r)&&(x=x.toLowerCase(),"d"!=x&&"e"!=x&&(x="o"),j.pe="lnk_"+x,j.pev1=u?j.escape(u):"",j.pev2=r?j.escape(r):"",w=1);
j.abort&&(w=0);
if(j.trackClickMap||j.trackInlineStats||j.ActivityMap){var x={},u=0,t=j.cookieRead("s_sq"),p=t?t.split("&"):0,n,a,m,t=0;
if(p){for(n=0;
n<p.length;
n++){a=p[n].split("="),r=j.unescape(a[0]).split(","),a=j.unescape(a[1]),x[a]=r
}}r=j.account.split(",");
n={};
for(m in j.contextData){m&&!Object.prototype[m]&&"a.activitymap."==m.substring(0,14)&&(n[m]=j.contextData[m],j.contextData[m]="")
}j.e=j.r("c",n)+(j.e?j.e:"");
if(w||j.e){w&&!j.e&&(t=1);
for(a in x){if(!Object.prototype[a]){for(m=0;
m<r.length;
m++){for(t&&(p=x[a].join(","),p==j.account&&(j.e+=("&"!=a.charAt(0)?"&":"")+a,x[a]=[],u=1)),n=0;
n<x[a].length;
n++){p=x[a][n],p==r[m]&&(t&&(j.e+="&u="+j.escape(p)+("&"!=a.charAt(0)?"&":"")+a+"&u=0"),x[a].splice(n,1),u=1)
}}}}w||(u=1);
if(u){t="";
n=2;
!w&&j.e&&(t=j.escape(r.join(","))+"="+j.escape(j.e),n=1);
for(a in x){!Object.prototype[a]&&0<n&&0<x[a].length&&(t+=(t?"&":"")+j.escape(x[a].join(","))+"="+j.escape(a),n--)
}j.cookieWrite("s_sq",t)
}}}return w
};
j.Bb=function(){if(!j.Lb){var F=new Date,G=d.location,E,C,D=C=E="",B="",A="",w="1.2",x=j.cookieWrite("s_cc","true",0)?"Y":"N",u="",n="";
if(F.setUTCDate&&(w="1.3",(0).toPrecision&&(w="1.5",F=[],F.forEach))){w="1.6";
C=0;
E={};
try{C=new Iterator(E),C.next&&(w="1.7",F.reduce&&(w="1.8",w.trim&&(w="1.8.1",Date.parse&&(w="1.8.2",Object.create&&(w="1.8.5")))))
}catch(a){}}E=screen.width+"x"+screen.height;
D=navigator.javaEnabled()?"Y":"N";
C=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
B=j.w.innerWidth?j.w.innerWidth:j.d.documentElement.offsetWidth;
A=j.w.innerHeight?j.w.innerHeight:j.d.documentElement.offsetHeight;
try{j.b.addBehavior("#default#homePage"),u=j.b.Rb(G)?"Y":"N"
}catch(I){}try{j.b.addBehavior("#default#clientCaps"),n=j.b.connectionType
}catch(H){}j.resolution=E;
j.colorDepth=C;
j.javascriptVersion=w;
j.javaEnabled=D;
j.cookiesEnabled=x;
j.browserWidth=B;
j.browserHeight=A;
j.connectionType=n;
j.homepage=u;
j.Lb=1
}};
j.Q={};
j.loadModule=function(n,a){var m=j.Q[n];
if(!m){m=g["AppMeasurement_Module_"+n]?new g["AppMeasurement_Module_"+n](j):{};
j.Q[n]=j[n]=m;
m.eb=function(){return m.ib
};
m.jb=function(p){if(m.ib=p){j[n+"_onLoad"]=p,j.ia(n+"_onLoad",[j,m],1)||p(j,m)
}};
try{Object.defineProperty?Object.defineProperty(m,"onLoad",{get:m.eb,set:m.jb}):m._olc=1
}catch(k){m._olc=1
}}a&&(j[n+"_onLoad"]=a,j.ia(n+"_onLoad",[j,m],1)||a(j,m))
};
j.p=function(m){var a,k;
for(a in j.Q){if(!Object.prototype[a]&&(k=j.Q[a])&&(k._olc&&k.onLoad&&(k._olc=0,k.onLoad(j,k)),k[m]&&k[m]())){return 1
}}return 0
};
j.Db=function(){var n=Math.floor(10000000000000*Math.random()),a=j.visitorSampling,m=j.visitorSamplingGroup,m="s_vsn_"+(j.visitorNamespace?j.visitorNamespace:j.account)+(m?"_"+m:""),k=j.cookieRead(m);
if(a){a*=100;
k&&(k=parseInt(k));
if(!k){if(!j.cookieWrite(m,n)){return 0
}k=n
}if(k%10000>a){return 0
}}return 1
};
j.R=function(u,a){var t,p,r,n,m,k;
for(t=0;
2>t;
t++){for(p=0<t?j.Aa:j.g,r=0;
r<p.length;
r++){if(n=p[r],(m=u[n])||u["!"+n]){if(!a&&("contextData"==n||"retrieveLightData"==n)&&j[n]){for(k in j[n]){m[k]||(m[k]=j[n][k])
}}j[n]=m
}}}};
j.Va=function(r,a){var p,m,n,k;
for(p=0;
2>p;
p++){for(m=0<p?j.Aa:j.g,n=0;
n<m.length;
n++){k=m[n],r[k]=j[k],a||r[k]||(r["!"+k]=1)
}}};
j.vb=function(C){var B,A,w,x,u,t=0,p,r="",n="";
if(C&&255<C.length&&(B=""+C,A=B.indexOf("?"),0<A&&(p=B.substring(A+1),B=B.substring(0,A),x=B.toLowerCase(),w=0,"http://"==x.substring(0,7)?w+=7:"https://"==x.substring(0,8)&&(w+=8),A=x.indexOf("/",w),0<A&&(x=x.substring(w,A),u=B.substring(A),B=B.substring(0,A),0<=x.indexOf("google")?t=",q,ie,start,search_key,word,kw,cd,":0<=x.indexOf("yahoo.co")&&(t=",p,ei,"),t&&p)))){if((C=p.split("&"))&&1<C.length){for(w=0;
w<C.length;
w++){x=C[w],A=x.indexOf("="),0<A&&0<=t.indexOf(","+x.substring(0,A)+",")?r+=(r?"&":"")+x:n+=(n?"&":"")+x
}r&&n?p=r+"&"+n:n=""
}A=253-(p.length-n.length)-B.length;
C=B+(0<A?u.substring(0,A):"")+"?"+p
}return C
};
j.ab=function(m){var a=j.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];
a||(a=j.d.webkitVisibilityState);
if(a&&"prerender"==a){if(m){for(a=0;
a<k.length;
a++){j.d.addEventListener(k[a],function(){var n=j.d.visibilityState;
n||(n=j.d.webkitVisibilityState);
"visible"==n&&m()
})
}}return !1
}return !0
};
j.ea=!1;
j.J=!1;
j.lb=function(){j.J=!0;
j.j()
};
j.ca=!1;
j.V=!1;
j.hb=function(a){j.marketingCloudVisitorID=a;
j.V=!0;
j.j()
};
j.fa=!1;
j.W=!1;
j.mb=function(a){j.visitorOptedOut=a;
j.W=!0;
j.j()
};
j.Z=!1;
j.S=!1;
j.Xa=function(a){j.analyticsVisitorID=a;
j.S=!0;
j.j()
};
j.ba=!1;
j.U=!1;
j.Za=function(a){j.audienceManagerLocationHint=a;
j.U=!0;
j.j()
};
j.aa=!1;
j.T=!1;
j.Ya=function(a){j.audienceManagerBlob=a;
j.T=!0;
j.j()
};
j.$a=function(a){j.maxDelay||(j.maxDelay=250);
return j.p("_d")?(a&&setTimeout(function(){a()
},j.maxDelay),!1):!0
};
j.da=!1;
j.I=!1;
j.xa=function(){j.I=!0;
j.j()
};
j.isReadyToTrack=function(){var p=!0,a=j.visitor,n,k,m;
j.ea||j.J||(j.ab(j.lb)?j.J=!0:j.ea=!0);
if(j.ea&&!j.J){return !1
}a&&a.isAllowed()&&(j.ca||j.marketingCloudVisitorID||!a.getMarketingCloudVisitorID||(j.ca=!0,j.marketingCloudVisitorID=a.getMarketingCloudVisitorID([j,j.hb]),j.marketingCloudVisitorID&&(j.V=!0)),j.fa||j.visitorOptedOut||!a.isOptedOut||(j.fa=!0,j.visitorOptedOut=a.isOptedOut([j,j.mb]),j.visitorOptedOut!=c&&(j.W=!0)),j.Z||j.analyticsVisitorID||!a.getAnalyticsVisitorID||(j.Z=!0,j.analyticsVisitorID=a.getAnalyticsVisitorID([j,j.Xa]),j.analyticsVisitorID&&(j.S=!0)),j.ba||j.audienceManagerLocationHint||!a.getAudienceManagerLocationHint||(j.ba=!0,j.audienceManagerLocationHint=a.getAudienceManagerLocationHint([j,j.Za]),j.audienceManagerLocationHint&&(j.U=!0)),j.aa||j.audienceManagerBlob||!a.getAudienceManagerBlob||(j.aa=!0,j.audienceManagerBlob=a.getAudienceManagerBlob([j,j.Ya]),j.audienceManagerBlob&&(j.T=!0)),p=j.ca&&!j.V&&!j.marketingCloudVisitorID,a=j.Z&&!j.S&&!j.analyticsVisitorID,n=j.ba&&!j.U&&!j.audienceManagerLocationHint,k=j.aa&&!j.T&&!j.audienceManagerBlob,m=j.fa&&!j.W,p=p||a||n||k||m?!1:!0);
j.da||j.I||(j.$a(j.xa)?j.I=!0:j.da=!0);
j.da&&!j.I&&(p=!1);
return p
};
j.o=c;
j.u=0;
j.callbackWhenReadyToTrack=function(n,a,m){var k;
k={};
k.qb=n;
k.pb=a;
k.nb=m;
j.o==c&&(j.o=[]);
j.o.push(k);
0==j.u&&(j.u=setInterval(j.j,100))
};
j.j=function(){var a;
if(j.isReadyToTrack()&&(j.kb(),j.o!=c)){for(;
0<j.o.length;
){a=j.o.shift(),a.pb.apply(a.qb,a.nb)
}}};
j.kb=function(){j.u&&(clearInterval(j.u),j.u=0)
};
j.fb=function(p){var a,n,k=c,m=c;
if(!j.isReadyToTrack()){a=[];
if(p!=c){for(n in k={},p){k[n]=p[n]
}}m={};
j.Va(m,!0);
a.push(k);
a.push(m);
j.callbackWhenReadyToTrack(j,j.track,a);
return !0
}return !1
};
j.xb=function(){var p=j.cookieRead("s_fid"),a="",n="",k;
k=8;
var m=4;
if(!p||0>p.indexOf("-")){for(p=0;
16>p;
p++){k=Math.floor(Math.random()*k),a+="0123456789ABCDEF".substring(k,k+1),k=Math.floor(Math.random()*m),n+="0123456789ABCDEF".substring(k,k+1),k=m=16
}p=a+"-"+n
}j.cookieWrite("s_fid",p,1)||(p=0);
return p
};
j.t=j.track=function(r,a){var p,m=new Date,n="s"+Math.floor(m.getTime()/10800000)%10+Math.floor(10000000000000*Math.random()),k=m.getYear(),k="t="+j.escape(m.getDate()+"/"+m.getMonth()+"/"+(1900>k?k+1900:k)+" "+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds()+" "+m.getDay()+" "+m.getTimezoneOffset());
j.visitor&&j.visitor.getAuthState&&(j.authState=j.visitor.getAuthState());
j.p("_s");
j.fb(r)||(a&&j.R(a),r&&(p={},j.Va(p,0),j.R(r)),j.Db()&&!j.visitorOptedOut&&(j.analyticsVisitorID||j.marketingCloudVisitorID||(j.fid=j.xb()),j.Hb(),j.usePlugins&&j.doPlugins&&j.doPlugins(j),j.account&&(j.abort||(j.trackOffline&&!j.timestamp&&(j.timestamp=Math.floor(m.getTime()/1000)),m=g.location,j.pageURL||(j.pageURL=m.href?m.href:m),j.referrer||j.Wa||(m=j.Util.getQueryParam("adobe_mc_ref",null,null,!0),j.referrer=m||void 0===m?void 0===m?"":m:d.document.referrer),j.Wa=1,j.referrer=j.vb(j.referrer),j.p("_g")),j.Ab()&&!j.abort&&(j.visitor&&!j.supplementalDataID&&j.visitor.getSupplementalDataID&&(j.supplementalDataID=j.visitor.getSupplementalDataID("AppMeasurement:"+j._in,j.expectSupplementalData?!1:!0)),j.Bb(),k+=j.zb(),j.Gb(n,k),j.p("_t"),j.referrer=""))),r&&j.R(p,1));
j.abort=j.supplementalDataID=j.timestamp=j.pageURLRest=j.linkObject=j.clickObject=j.linkURL=j.linkName=j.linkType=g.s_objectID=j.pe=j.pev1=j.pev2=j.pev3=j.e=j.lightProfileID=0
};
j.za=[];
j.registerPreTrackCallback=function(m){for(var a=[],k=1;
k<arguments.length;
k++){a.push(arguments[k])
}"function"==typeof m?j.za.push([m,a]):j.debugTracking&&j.F("DEBUG: Non function type passed to registerPreTrackCallback")
};
j.cb=function(a){j.wa(j.za,a)
};
j.ya=[];
j.registerPostTrackCallback=function(m){for(var a=[],k=1;
k<arguments.length;
k++){a.push(arguments[k])
}"function"==typeof m?j.ya.push([m,a]):j.debugTracking&&j.F("DEBUG: Non function type passed to registerPostTrackCallback")
};
j.bb=function(a){j.wa(j.ya,a)
};
j.wa=function(r,a){if("object"==typeof r){for(var p=0;
p<r.length;
p++){var m=r[p][0],n=r[p][1];
n.unshift(a);
if("function"==typeof m){try{m.apply(null,n)
}catch(k){j.debugTracking&&j.F(k.message)
}}}}};
j.tl=j.trackLink=function(p,a,n,k,m){j.linkObject=p;
j.linkType=a;
j.linkName=n;
m&&(j.l=p,j.A=m);
return j.track(k)
};
j.trackLight=function(n,a,m,k){j.lightProfileID=n;
j.lightStoreForSeconds=a;
j.lightIncrementBy=m;
return j.track(k)
};
j.clearVars=function(){var k,a;
for(k=0;
k<j.g.length;
k++){if(a=j.g[k],"prop"==a.substring(0,4)||"eVar"==a.substring(0,4)||"hier"==a.substring(0,4)||"list"==a.substring(0,4)||"channel"==a||"events"==a||"eventList"==a||"products"==a||"productList"==a||"purchaseID"==a||"transactionID"==a||"state"==a||"zip"==a||"campaign"==a){j[a]=void 0
}}};
j.tagContainerMarker="";
j.Gb=function(t,a){var r,n=j.trackingServer;
r="";
var p=j.dc,m="sc.",k=j.visitorNamespace;
n?j.trackingServerSecure&&j.ssl&&(n=j.trackingServerSecure):(k||(k=j.account,n=k.indexOf(","),0<=n&&(k=k.substring(0,n)),k=k.replace(/[^A-Za-z0-9]/g,"")),r||(r="2o7.net"),p=p?(""+p).toLowerCase():"d1","2o7.net"==r&&("d1"==p?p="112":"d2"==p&&(p="122"),m=""),n=k+"."+p+"."+m+r);
r=j.ssl?"https://":"http://";
p=j.AudienceManagement&&j.AudienceManagement.isReady()||0!=j.usePostbacks;
r+=n+"/b/ss/"+j.account+"/"+(j.mobile?"5.":"")+(p?"10":"1")+"/JS-"+j.version+(j.Kb?"T":"")+(j.tagContainerMarker?"-"+j.tagContainerMarker:"")+"/"+t+"?AQB=1&ndh=1&pf=1&"+(p?"callback=s_c_il["+j._in+"].doPostbacks&et=1&":"")+a+"&AQE=1";
j.cb(r);
j.tb(r);
j.ka()
};
j.Ua=/{(%?)(.*?)(%?)}/;
j.Ob=RegExp(j.Ua.source,"g");
j.ub=function(w){if("object"==typeof w.dests){for(var a=0;
a<w.dests.length;
++a){var u=w.dests[a];
if("string"==typeof u.c&&"aa."==u.id.substr(0,3)){for(var r=u.c.match(j.Ob),t=0;
t<r.length;
++t){var p=r[t],n=p.match(j.Ua),m="";
"%"==n[1]&&"timezone_offset"==n[2]?m=(new Date).getTimezoneOffset():"%"==n[1]&&"timestampz"==n[2]&&(m=j.yb());
u.c=u.c.replace(p,j.escape(m))
}}}}};
j.yb=function(){var k=new Date,a=new Date(60000*Math.abs(k.getTimezoneOffset()));
return j.k(4,k.getFullYear())+"-"+j.k(2,k.getMonth()+1)+"-"+j.k(2,k.getDate())+"T"+j.k(2,k.getHours())+":"+j.k(2,k.getMinutes())+":"+j.k(2,k.getSeconds())+(0<k.getTimezoneOffset()?"-":"+")+j.k(2,a.getUTCHours())+":"+j.k(2,a.getUTCMinutes())
};
j.k=function(m,k){return(Array(m+1).join(0)+k).slice(-m)
};
j.ta={};
j.doPostbacks=function(m){if("object"==typeof m){if(j.ub(m),"object"==typeof j.AudienceManagement&&"function"==typeof j.AudienceManagement.isReady&&j.AudienceManagement.isReady()&&"function"==typeof j.AudienceManagement.passData){j.AudienceManagement.passData(m)
}else{if("object"==typeof m&&"object"==typeof m.dests){for(var a=0;
a<m.dests.length;
++a){var k=m.dests[a];
"object"==typeof k&&"string"==typeof k.c&&"string"==typeof k.id&&"aa."==k.id.substr(0,3)&&(j.ta[k.id]=new Image,j.ta[k.id].alt="",j.ta[k.id].src=k.c)
}}}}};
j.tb=function(a){j.i||j.Cb();
j.i.push(a);
j.ma=j.C();
j.Sa()
};
j.Cb=function(){j.i=j.Eb();
j.i||(j.i=[])
};
j.Eb=function(){var m,a;
if(j.ra()){try{(a=g.localStorage.getItem(j.pa()))&&(m=g.JSON.parse(a))
}catch(k){}return m
}};
j.ra=function(){var a=!0;
j.trackOffline&&j.offlineFilename&&g.localStorage&&g.JSON||(a=!1);
return a
};
j.Ja=function(){var a=0;
j.i&&(a=j.i.length);
j.q&&a++;
return a
};
j.ka=function(){if(j.q&&(j.B&&j.B.complete&&j.B.G&&j.B.va(),j.q)){return
}j.Ka=c;
if(j.qa){j.ma>j.O&&j.Qa(j.i),j.ua(500)
}else{var a=j.ob();
if(0<a){j.ua(a)
}else{if(a=j.Ga()){j.q=1,j.Fb(a),j.Jb(a)
}}}};
j.ua=function(a){j.Ka||(a||(a=0),j.Ka=setTimeout(j.ka,a))
};
j.ob=function(){var a;
if(!j.trackOffline||0>=j.offlineThrottleDelay){return 0
}a=j.C()-j.Pa;
return j.offlineThrottleDelay<a?0:j.offlineThrottleDelay-a
};
j.Ga=function(){if(0<j.i.length){return j.i.shift()
}};
j.Fb=function(m){if(j.debugTracking){var a="AppMeasurement Debug: "+m;
m=m.split("&");
var k;
for(k=0;
k<m.length;
k++){a+="\n\t"+j.unescape(m[k])
}j.F(a)
}};
j.gb=function(){return j.marketingCloudVisitorID||j.analyticsVisitorID
};
j.Y=!1;
var y;
try{y=JSON.parse('{"x":"y"}')
}catch(l){y=null
}y&&"y"==y.x?(j.Y=!0,j.X=function(k){return JSON.parse(k)
}):g.$&&g.$.parseJSON?(j.X=function(k){return g.$.parseJSON(k)
},j.Y=!0):j.X=function(){return null
};
j.Jb=function(r){var a,p,m;
j.gb()&&2047<r.length&&("undefined"!=typeof XMLHttpRequest&&(a=new XMLHttpRequest,"withCredentials" in a?p=1:a=0),a||"undefined"==typeof XDomainRequest||(a=new XDomainRequest,p=2),a&&(j.AudienceManagement&&j.AudienceManagement.isReady()||0!=j.usePostbacks)&&(j.Y?a.Ba=!0:a=0));
!a&&j.Ta&&(r=r.substring(0,2047));
!a&&j.d.createElement&&(0!=j.usePostbacks||j.AudienceManagement&&j.AudienceManagement.isReady())&&(a=j.d.createElement("SCRIPT"))&&"async" in a&&((m=(m=j.d.getElementsByTagName("HEAD"))&&m[0]?m[0]:j.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),p=3):a=0);
a||(a=new Image,a.alt="",a.abort||"undefined"===typeof g.InstallTrigger||(a.abort=function(){a.src=c
}));
a.Da=function(){try{a.G&&(clearTimeout(a.G),a.G=0)
}catch(t){}};
a.onload=a.va=function(){j.bb(r);
a.Da();
j.sb();
j.ga();
j.q=0;
j.ka();
if(a.Ba){a.Ba=!1;
try{j.doPostbacks(j.X(a.responseText))
}catch(t){}}};
a.onabort=a.onerror=a.Ha=function(){a.Da();
(j.trackOffline||j.qa)&&j.q&&j.i.unshift(j.rb);
j.q=0;
j.ma>j.O&&j.Qa(j.i);
j.ga();
j.ua(500)
};
a.onreadystatechange=function(){4==a.readyState&&(200==a.status?a.va():a.Ha())
};
j.Pa=j.C();
if(1==p||2==p){var n=r.indexOf("?");
m=r.substring(0,n);
n=r.substring(n+1);
n=n.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");
1==p?(a.open("POST",m,!0),a.send(n)):2==p&&(a.open("POST",m),a.send(n))
}else{if(a.src=r,3==p){if(j.Na){try{m.removeChild(j.Na)
}catch(k){}}m.firstChild?m.insertBefore(a,m.firstChild):m.appendChild(a);
j.Na=j.B
}}a.G=setTimeout(function(){a.G&&(a.complete?a.va():(j.trackOffline&&a.abort&&a.abort(),a.Ha()))
},5000);
j.rb=r;
j.B=g["s_i_"+j.replace(j.account,",","_")]=a;
if(j.useForcedLinkTracking&&j.K||j.A){j.forcedLinkTrackingTimeout||(j.forcedLinkTrackingTimeout=250),j.ha=setTimeout(j.ga,j.forcedLinkTrackingTimeout)
}};
j.sb=function(){if(j.ra()&&!(j.Oa>j.O)){try{g.localStorage.removeItem(j.pa()),j.Oa=j.C()
}catch(a){}}};
j.Qa=function(k){if(j.ra()){j.Sa();
try{g.localStorage.setItem(j.pa(),g.JSON.stringify(k)),j.O=j.C()
}catch(a){}}};
j.Sa=function(){if(j.trackOffline){if(!j.offlineLimit||0>=j.offlineLimit){j.offlineLimit=10
}for(;
j.i.length>j.offlineLimit;
){j.Ga()
}}};
j.forceOffline=function(){j.qa=!0
};
j.forceOnline=function(){j.qa=!1
};
j.pa=function(){return j.offlineFilename+"-"+j.visitorNamespace+j.account
};
j.C=function(){return(new Date).getTime()
};
j.La=function(k){k=k.toLowerCase();
return 0!=k.indexOf("#")&&0!=k.indexOf("about:")&&0!=k.indexOf("opera:")&&0!=k.indexOf("javascript:")?!0:!1
};
j.setTagContainer=function(n){var a,m,k;
j.Kb=n;
for(a=0;
a<j._il.length;
a++){if((m=j._il[a])&&"s_l"==m._c&&m.tagContainerName==n){j.R(m);
if(m.lmq){for(a=0;
a<m.lmq.length;
a++){k=m.lmq[a],j.loadModule(k.n)
}}if(m.ml){for(k in m.ml){if(j[k]){for(a in n=j[k],k=m.ml[k],k){!Object.prototype[a]&&("function"!=typeof k[a]||0>(""+k[a]).indexOf("s_c_il"))&&(n[a]=k[a])
}}}}if(m.mmq){for(a=0;
a<m.mmq.length;
a++){k=m.mmq[a],j[k.m]&&(n=j[k.m],n[k.f]&&"function"==typeof n[k.f]&&(k.a?n[k.f].apply(n,k.a):n[k.f].apply(n)))
}}if(m.tq){for(a=0;
a<m.tq.length;
a++){j.track(m.tq[a])
}}m.s=j;
break
}}};
j.Util={urlEncode:j.escape,urlDecode:j.unescape,cookieRead:j.cookieRead,cookieWrite:j.cookieWrite,getQueryParam:function(r,a,p,m){var n,k="";
a||(a=j.pageURL?j.pageURL:g.location);
p=p?p:"&";
if(!r||!a){return k
}a=""+a;
n=a.indexOf("?");
if(0>n){return k
}a=p+a.substring(n+1)+p;
if(!m||!(0<=a.indexOf(p+r+p)||0<=a.indexOf(p+r+"="+p))){n=a.indexOf("#");
0<=n&&(a=a.substr(0,n)+p);
n=a.indexOf(p+r+"=");
if(0>n){return k
}a=a.substring(n+p.length+r.length+1);
n=a.indexOf(p);
0<=n&&(a=a.substring(0,n));
0<a.length&&(k=j.unescape(a));
return k
}}};
j.H="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
j.g=j.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
j.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
j.P=j.na.slice(0);
j.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(f=0;
250>=f;
f++){76>f&&(j.g.push("prop"+f),j.P.push("prop"+f)),j.g.push("eVar"+f),j.P.push("eVar"+f),6>f&&j.g.push("hier"+f),4>f&&j.g.push("list"+f)
}f="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");
j.g=j.g.concat(f);
j.H=j.H.concat(f);
j.ssl=0<=g.location.protocol.toLowerCase().indexOf("https");
j.charSet="UTF-8";
j.contextData={};
j.offlineThrottleDelay=0;
j.offlineFilename="AppMeasurement.offline";
j.Pa=0;
j.ma=0;
j.O=0;
j.Oa=0;
j.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
j.w=g;
j.d=g.document;
try{if(j.Ta=!1,navigator){var o=navigator.userAgent;
if("Microsoft Internet Explorer"==navigator.appName||0<=o.indexOf("MSIE ")||0<=o.indexOf("Trident/")&&0<=o.indexOf("Windows NT 6")){j.Ta=!0
}}}catch(h){}j.ga=function(){j.ha&&(g.clearTimeout(j.ha),j.ha=c);
j.l&&j.K&&j.l.dispatchEvent(j.K);
j.A&&("function"==typeof j.A?j.A():j.l&&j.l.href&&(j.d.location=j.l.href));
j.l=j.K=j.A=0
};
j.Ra=function(){j.b=j.d.body;
j.b?(j.v=function(A){var B,x,u,w,t;
if(!(j.d&&j.d.getElementById("cppXYctnr")||A&&A["s_fe_"+j._in])){if(j.Ca){if(j.useForcedLinkTracking){j.b.removeEventListener("click",j.v,!1)
}else{j.b.removeEventListener("click",j.v,!0);
j.Ca=j.useForcedLinkTracking=0;
return
}}else{j.useForcedLinkTracking=0
}j.clickObject=A.srcElement?A.srcElement:A.target;
try{if(!j.clickObject||j.N&&j.N==j.clickObject||!(j.clickObject.tagName||j.clickObject.parentElement||j.clickObject.parentNode)){j.clickObject=0
}else{var r=j.N=j.clickObject;
j.la&&(clearTimeout(j.la),j.la=0);
j.la=setTimeout(function(){j.N==r&&(j.N=0)
},10000);
u=j.Ja();
j.track();
if(u<j.Ja()&&j.useForcedLinkTracking&&A.target){for(w=A.target;
w&&w!=j.b&&"A"!=w.tagName.toUpperCase()&&"AREA"!=w.tagName.toUpperCase();
){w=w.parentNode
}if(w&&(t=w.href,j.La(t)||(t=0),x=w.target,A.target.dispatchEvent&&t&&(!x||"_self"==x||"_top"==x||"_parent"==x||g.name&&x==g.name))){try{B=j.d.createEvent("MouseEvents")
}catch(p){B=new g.MouseEvent
}if(B){try{B.initMouseEvent("click",A.bubbles,A.cancelable,A.view,A.detail,A.screenX,A.screenY,A.clientX,A.clientY,A.ctrlKey,A.altKey,A.shiftKey,A.metaKey,A.button,A.relatedTarget)
}catch(k){B=0
}B&&(B["s_fe_"+j._in]=B.s_fe=1,A.stopPropagation(),A.stopImmediatePropagation&&A.stopImmediatePropagation(),A.preventDefault(),j.l=A.target,j.K=B)
}}}}}catch(a){j.clickObject=0
}}},j.b&&j.b.attachEvent?j.b.attachEvent("onclick",j.v):j.b&&j.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&j.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&g.MouseEvent)&&(j.Ca=1,j.useForcedLinkTracking=1,j.b.addEventListener("click",j.v,!0)),j.b.addEventListener("click",j.v,!1))):setTimeout(j.Ra,30)
};
j.Ra();
b?j.setAccount(b):j.F("Error, missing Report Suite ID in AppMeasurement initialization");
j.loadModule("ActivityMap")
}function s_gi(b){var h,g=window.s_c_il,c,d,f=b.split(","),o,j,l=0;
if(g){for(c=0;
!l&&c<g.length;
){h=g[c];
if("s_c"==h._c&&(h.account||h.oun)){if(h.account&&h.account==b){l=1
}else{for(d=h.account?h.account:h.oun,d=h.allAccounts?h.allAccounts:d.split(","),o=0;
o<f.length;
o++){for(j=0;
j<d.length;
j++){f[o]==d[j]&&(l=1)
}}}}c++
}}l||(h=new AppMeasurement(b));
return h
}AppMeasurement.getInstance=s_gi;
window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var d=window,b=d.s_giq,c,f,g;
if(b){for(c=0;
c<b.length;
c++){f=b[c],g=s_gi(f.oun),g.setAccount(f.un),g.setTagContainer(f.tagContainerName)
}}d.s_giq=0
}s_pgicq();
function AppMeasurement_Module_Integrate(a){var d=this;
d.s=a;
var b=window;
b.s_c_in||(b.s_c_il=[],b.s_c_in=0);
d._il=b.s_c_il;
d._in=b.s_c_in;
d._il[d._in]=d;
b.s_c_in++;
d._c="s_m";
d.list=[];
d.add=function(g,c){var f;
c||(c="s_Integrate_"+g);
b[c]||(b[c]={});
f=d[g]=b[c];
f.a=g;
f.e=d;
f._c=0;
f._d=0;
void 0==f.disable&&(f.disable=0);
f.get=function(j,q){var p=document,o=p.getElementsByTagName("HEAD"),n;
if(!f.disable&&(q||(v="s_"+d._in+"_Integrate_"+f.a+"_get_"+f._c),f._c++,f.VAR=v,f.CALLBACK="s_c_il["+d._in+"]."+f.a+".callback",f.delay(),o=o&&0<o.length?o[0]:p.body)){try{n=p.createElement("SCRIPT"),n.type="text/javascript",n.setAttribute("async","async"),n.src=d.c(f,j),0>j.indexOf("[CALLBACK]")&&(n.onload=n.onreadystatechange=function(){f.callback(b[v])
}),o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n)
}catch(m){}}};
f.callback=function(h){var j;
if(h){for(j in h){Object.prototype[j]||(f[j]=h[j])
}}f.ready()
};
f.beacon=function(h){var j="s_i_"+d._in+"_Integrate_"+f.a+"_"+f._c;
f.disable||(f._c++,j=b[j]=new Image,j.src=d.c(f,h))
};
f.script=function(h){f.get(h,1)
};
f.delay=function(){f._d++
};
f.ready=function(){f._d--;
f.disable||a.delayReady()
};
d.list.push(g)
};
d._g=function(h){var c,f=(h?"use":"set")+"Vars";
for(h=0;
h<d.list.length;
h++){if((c=d[d.list[h]])&&!c.disable&&c[f]){try{c[f](a,c)
}catch(g){}}}};
d._t=function(){d._g(1)
};
d._d=function(){var f,c;
for(f=0;
f<d.list.length;
f++){if((c=d[d.list[f]])&&!c.disable&&0<c._d){return 1
}}return 0
};
d.c=function(n,h){var j,m,k,l;
"http"!=h.toLowerCase().substring(0,4)&&(h="http://"+h);
a.ssl&&(h=a.replace(h,"http:","https:"));
n.RAND=Math.floor(10000000000000*Math.random());
for(j=0;
0<=j;
){j=h.indexOf("[",j),0<=j&&(m=h.indexOf("]",j),m>j&&(k=h.substring(j+1,m),2<k.length&&"s."==k.substring(0,2)?(l=a[k.substring(2)])||(l=""):(l=""+n[k],l!=n[k]&&parseFloat(l)!=n[k]&&(k=0)),k&&(h=h.substring(0,j)+encodeURIComponent(l)+h.substring(m+1)),j=m))
}return h
}
}function AppMeasurement_Module_Media(c){var a=this;
a.s=c;
c=window;
c.s_c_in||(c.s_c_il=[],c.s_c_in=0);
a._il=c.s_c_il;
a._in=c.s_c_in;
a._il[a._in]=a;
c.s_c_in++;
a._c="s_m";
a.list=[];
a.open=function(p,q,o,j){var n={},h=new Date,b="",m;
q||(q=-1);
if(p&&o){a.list||(a.list={});
a.list[p]&&a.close(p);
j&&j.id&&(b=j.id);
if(b){for(m in a.list){!Object.prototype[m]&&a.list[m]&&a.list[m].R==b&&a.close(a.list[m].name)
}}n.name=p;
n.length=q;
n.offset=0;
n.e=0;
n.playerName=a.playerName?a.playerName:o;
n.R=b;
n.C=0;
n.a=0;
n.timestamp=Math.floor(h.getTime()/1000);
n.k=0;
n.u=n.timestamp;
n.c=-1;
n.n="";
n.g=-1;
n.D=0;
n.I={};
n.G=0;
n.m=0;
n.f="";
n.B=0;
n.L=0;
n.A=0;
n.F=0;
n.l=!1;
n.v="";
n.J="";
n.K=0;
n.r=!1;
n.H="";
n.complete=0;
n.Q=0;
n.p=0;
n.q=0;
a.list[p]=n
}};
a.openAd=function(q,r,p,j,o,t,b,n){var m={};
a.open(q,r,p,n);
if(m=a.list[q]){m.l=!0,m.v=j,m.J=o,m.K=t,m.H=b
}};
a.M=function(b){var f=a.list[b];
a.list[b]=0;
f&&f.monitor&&clearTimeout(f.monitor.interval)
};
a.close=function(b){a.i(b,0,-1)
};
a.play=function(j,l,h,b){var g=a.i(j,1,l,h,b);
g&&!g.monitor&&(g.monitor={},g.monitor.update=function(){1==g.k&&a.i(g.name,3,-1);
g.monitor.interval=setTimeout(g.monitor.update,1000)
},g.monitor.update())
};
a.click=function(b,f){a.i(b,7,f)
};
a.complete=function(b,f){a.i(b,5,f)
};
a.stop=function(b,f){a.i(b,2,f)
};
a.track=function(b){a.i(b,4,-1)
};
a.P=function(t,u){var r="a.media.",m=t.linkTrackVars,p=t.linkTrackEvents,w="m_i",j,o=t.contextData,n;
u.l&&(r+="ad.",u.v&&(o["a.media.name"]=u.v,o[r+"pod"]=u.J,o[r+"podPosition"]=u.K),u.G||(o[r+"CPM"]=u.H));
u.r&&(o[r+"clicked"]=!0,u.r=!1);
o["a.contentType"]="video"+(u.l?"Ad":"");
o["a.media.channel"]=a.channel;
o[r+"name"]=u.name;
o[r+"playerName"]=u.playerName;
0<u.length&&(o[r+"length"]=u.length);
o[r+"timePlayed"]=Math.floor(u.a);
0<Math.floor(u.a)&&(o[r+"timePlayed"]=Math.floor(u.a));
u.G||(o[r+"view"]=!0,w="m_s",a.Heartbeat&&a.Heartbeat.enabled&&(w=u.l?a.__primetime?"mspa_s":"msa_s":a.__primetime?"msp_s":"ms_s"),u.G=1);
u.f&&(o[r+"segmentNum"]=u.m,o[r+"segment"]=u.f,0<u.B&&(o[r+"segmentLength"]=u.B),u.A&&0<u.a&&(o[r+"segmentView"]=!0));
!u.Q&&u.complete&&(o[r+"complete"]=!0,u.S=1);
0<u.p&&(o[r+"milestone"]=u.p);
0<u.q&&(o[r+"offsetMilestone"]=u.q);
if(m){for(n in o){Object.prototype[n]||(m+=",contextData."+n)
}}j=o["a.contentType"];
t.pe=w;
t.pev3=j;
var b,x;
if(a.contextDataMapping){for(n in t.events2||(t.events2=""),m&&(m+=",events"),a.contextDataMapping){if(!Object.prototype[n]){w=n.length>r.length&&n.substring(0,r.length)==r?n.substring(r.length):"";
j=a.contextDataMapping[n];
if("string"==typeof j){for(b=j.split(","),x=0;
x<b.length;
x++){j=b[x],"a.contentType"==n?(m&&(m+=","+j),t[j]=o[n]):"view"==w||"segmentView"==w||"clicked"==w||"complete"==w||"timePlayed"==w||"CPM"==w?(p&&(p+=","+j),"timePlayed"==w||"CPM"==w?o[n]&&(t.events2+=(t.events2?",":"")+j+"="+o[n]):o[n]&&(t.events2+=(t.events2?",":"")+j)):"segment"==w&&o[n+"Num"]?(m&&(m+=","+j),t[j]=o[n+"Num"]+":"+o[n]):(m&&(m+=","+j),t[j]=o[n])
}}else{if("milestones"==w||"offsetMilestones"==w){n=n.substring(0,n.length-1),o[n]&&a.contextDataMapping[n+"s"][o[n]]&&(p&&(p+=","+a.contextDataMapping[n+"s"][o[n]]),t.events2+=(t.events2?",":"")+a.contextDataMapping[n+"s"][o[n]])
}}o[n]&&(o[n]=0);
"segment"==w&&o[n+"Num"]&&(o[n+"Num"]=0)
}}}t.linkTrackVars=m;
t.linkTrackEvents=p
};
a.i=function(O,P,N,J,M){var Q={},I=(new Date).getTime()/1000,L,K,E=a.trackVars,C=a.trackEvents,B=a.trackSeconds,A=a.trackMilestones,z=a.trackOffsetMilestones,o=a.segmentByMilestones,j=a.segmentByOffsetMilestones,F,G,D=1,H={},b;
a.channel||(a.channel=a.s.w.location.hostname);
if(Q=O&&a.list&&a.list[O]?a.list[O]:0){if(Q.l&&(B=a.adTrackSeconds,A=a.adTrackMilestones,z=a.adTrackOffsetMilestones,o=a.adSegmentByMilestones,j=a.adSegmentByOffsetMilestones),0>N&&(N=1==Q.k&&0<Q.u?I-Q.u+Q.c:Q.c),0<Q.length&&(N=N<Q.length?N:Q.length),0>N&&(N=0),Q.offset=N,0<Q.length&&(Q.e=Q.offset/Q.length*100,Q.e=100<Q.e?100:Q.e),0>Q.c&&(Q.c=N),b=Q.D,H.name=O,H.ad=Q.l,H.length=Q.length,H.openTime=new Date,H.openTime.setTime(1000*Q.timestamp),H.offset=Q.offset,H.percent=Q.e,H.playerName=Q.playerName,H.mediaEvent=0>Q.g?"OPEN":1==P?"PLAY":2==P?"STOP":3==P?"MONITOR":4==P?"TRACK":5==P?"COMPLETE":7==P?"CLICK":"CLOSE",2<P||P!=Q.k&&(2!=P||1==Q.k)){M||(J=Q.m,M=Q.f);
if(P){1==P&&(Q.c=N);
if((3>=P||5<=P)&&0<=Q.g&&(D=!1,E=C="None",Q.g!=N)){K=Q.g;
K>N&&(K=Q.c,K>N&&(K=N));
F=A?A.split(","):0;
if(0<Q.length&&F&&N>=K){for(G=0;
G<F.length;
G++){(L=F[G]?parseFloat(""+F[G]):0)&&K/Q.length*100<L&&Q.e>=L&&(D=!0,G=F.length,H.mediaEvent="MILESTONE",Q.p=H.milestone=L)
}}if((F=z?z.split(","):0)&&N>=K){for(G=0;
G<F.length;
G++){(L=F[G]?parseFloat(""+F[G]):0)&&K<L&&N>=L&&(D=!0,G=F.length,H.mediaEvent="OFFSET_MILESTONE",Q.q=H.offsetMilestone=L)
}}}if(Q.L||!M){if(o&&A&&0<Q.length){if(F=A.split(",")){for(F.push("100"),G=K=0;
G<F.length;
G++){if(L=F[G]?parseFloat(""+F[G]):0){Q.e<L&&(J=G+1,M="M:"+K+"-"+L,G=F.length),K=L
}}}}else{if(j&&z&&(F=z.split(","))){for(F.push(""+(0<Q.length?Q.length:"E")),G=K=0;
G<F.length;
G++){if((L=F[G]?parseFloat(""+F[G]):0)||"E"==F[G]){if(N<L||"E"==F[G]){J=G+1,M="O:"+K+"-"+L,G=F.length
}K=L
}}}}M&&(Q.L=!0)
}(M||Q.f)&&M!=Q.f&&(Q.F=!0,Q.f||(Q.m=J,Q.f=M),0<=Q.g&&(D=!0));
(2<=P||100<=Q.e)&&Q.c<N&&(Q.C+=N-Q.c,Q.a+=N-Q.c);
if(2>=P||3==P&&!Q.k){Q.n+=(1==P||3==P?"S":"E")+Math.floor(N),Q.k=3==P?1:P
}!D&&0<=Q.g&&3>=P&&(B=B?B:0)&&Q.a>=B&&(D=!0,H.mediaEvent="SECONDS");
Q.u=I;
Q.c=N
}if(!P||3>=P&&100<=Q.e){2!=Q.k&&(Q.n+="E"+Math.floor(N)),P=0,E=C="None",H.mediaEvent="CLOSE"
}7==P&&(D=H.clicked=Q.r=!0);
if(5==P||a.completeByCloseOffset&&(!P||100<=Q.e)&&0<Q.length&&N>=Q.length-a.completeCloseOffsetThreshold){D=H.complete=Q.complete=!0
}I=H.mediaEvent;
"MILESTONE"==I?I+="_"+H.milestone:"OFFSET_MILESTONE"==I&&(I+="_"+H.offsetMilestone);
Q.I[I]?H.eventFirstTime=!1:(H.eventFirstTime=!0,Q.I[I]=1);
H.event=H.mediaEvent;
H.timePlayed=Q.C;
H.segmentNum=Q.m;
H.segment=Q.f;
H.segmentLength=Q.B;
a.monitor&&4!=P&&a.monitor(a.s,H);
a.Heartbeat&&a.Heartbeat.enabled&&0<=Q.g&&(D=!1);
0==P&&a.M(O);
D&&Q.D==b&&(O={contextData:{}},O.linkTrackVars=E,O.linkTrackEvents=C,O.linkTrackVars||(O.linkTrackVars=""),O.linkTrackEvents||(O.linkTrackEvents=""),a.P(O,Q),O.linkTrackVars||(O["!linkTrackVars"]=1),O.linkTrackEvents||(O["!linkTrackEvents"]=1),a.s.track(O),Q.F?(Q.m=J,Q.f=M,Q.A=!0,Q.F=!1):0<Q.a&&(Q.A=!1),Q.n="",Q.p=Q.q=0,Q.a-=Math.floor(Q.a),Q.g=N,Q.D++)
}}return Q
};
a.O=function(l,m,j,g,h){var b=0;
if(l&&(!a.autoTrackMediaLengthRequired||m&&0<m)){if(a.list&&a.list[l]){b=1
}else{if(1==j||3==j){a.open(l,m,"HTML5 Video",h),b=1
}}b&&a.i(l,j,g,-1,0)
}};
a.attach=function(g){var h,f,b;
g&&g.tagName&&"VIDEO"==g.tagName.toUpperCase()&&(a.o||(a.o=function(n,j,m){var l,k;
a.autoTrack&&(l=n.currentSrc,(k=n.duration)||(k=-1),0>m&&(m=n.currentTime),a.O(l,k,j,m,n))
}),h=function(){a.o(g,1,-1)
},f=function(){a.o(g,1,-1)
},a.j(g,"play",h),a.j(g,"pause",f),a.j(g,"seeking",f),a.j(g,"seeked",h),a.j(g,"ended",function(){a.o(g,0,-1)
}),a.j(g,"timeupdate",h),b=function(){g.paused||g.ended||g.seeking||a.o(g,3,-1);
setTimeout(b,1000)
},b())
};
a.j=function(d,g,f){d.attachEvent?d.attachEvent("on"+g,f):d.addEventListener&&d.addEventListener(g,f,!1)
};
void 0==a.completeByCloseOffset&&(a.completeByCloseOffset=1);
void 0==a.completeCloseOffsetThreshold&&(a.completeCloseOffsetThreshold=1);
a.Heartbeat={};
a.N=function(){var b,f;
if(a.autoTrack&&(b=a.s.d.getElementsByTagName("VIDEO"))){for(f=0;
f<b.length;
f++){a.attach(b[f])
}}};
a.j(c,"load",a.N)
}if(typeof digitalData==="undefined"){var digitalData={page:{},user:[{profile:{0:{}}}],products:[],event:[],flags:{}}
}if(typeof(CQ_Analytics)!=="undefined"){try{if(typeof(CQ_Analytics.PageDataMgr.data)!=="undefined"){digitalData.cq_pagedata=CQ_Analytics.PageDataMgr.data
}if(typeof(CQ_Analytics.ProfileDataMgr.data)!=="undefined"){digitalData.cq_profiledata=CQ_Analytics.ProfileDataMgr.data
}if(typeof(CQ_Analytics.SurferInfoMgr.data)!=="undefined"){digitalData.cq_surferdata=CQ_Analytics.SurferInfoMgr.data
}if(typeof(CQ_Analytics.EventDataMgr.data)!=="undefined"){digitalData.cq_eventdata=CQ_Analytics.EventDataMgr.data
}}catch(e){console.log(e)
}}digitalData.util.getTimeParting=function(h){var n={2015:"3/8,11/1",2016:"3/13,11/6",2017:"3/12,11/5",2018:"3/11,11/4",2019:"3/10,11/3",2020:"3/8,11/1",2021:"3/14,11/7"};
var l,f,k,a,g,j,c,d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],b=new Date();
h=h?h:0;
h=parseFloat(h);
if(n){var m=n[b.getFullYear()].split(/,/);
g=new Date(m[0]+"/"+b.getFullYear());
j=new Date(m[1]+"/"+b.getFullYear());
if(b>g&&b<j){h=h+1
}}b=b.getTime()+(b.getTimezoneOffset()*60000);
b=new Date(b+(3600000*h));
l=b.getHours();
f=b.getMinutes();
f=(f<10)?"0"+f:f;
k=b.getDay();
a=" AM";
if(l>=12){a=" PM";
l=l-12
}if(l==0){l=12
}k=d[k];
c=l+":"+f+a;
return(c+"|"+k)
};
digitalData.util.getCTAs=function(){if(!Page.getCTAs()){Page.setCTAs()
}return Page.getCTAs()
};
digitalData.util.trackActivity=function(g,a){if(!g){return
}var c=a&&a.events||[];
var b=a&&a.properties||{};
c.push("event66");
var f=_(c).chain().map(digitalData.util.mappings.adobe.getEventName).uniq().value();
var d=[];
_(b).chain().keys().each(function(j){var h=digitalData.util.mappings.adobe.getDataElementName(j);
if(h){if(h==="products"){_(b[j]).map(function(l){var k;
if(_.indexOf(f,"intdriverclick")>-1){k="intdriverclick"
}else{k="intdriverimp"
}digitalData.util.addProduct(l,k)
})
}else{digitalData.util.setElement(h,b[j])
}d.push(h)
}});
digitalData.util.addPageData("customlink",g);
if(d&&d.length){d.push("page.customlink")
}else{d=["page.customlink"]
}digitalData.util.trackBehavior(g,f,d)
};
digitalData.util.addDriversToDigitalData=function(a){if(a&&a.length>0){var b="intdriverimp";
for(var c=0;
c<a.length;
c++){var d=a[c];
digitalData.util.addProduct(d,b)
}digitalData.util.addBehavior(b)
}};
digitalData.util.setFormFillVals=function(){digitalData.user[0].profile[0].usercompanysize=vp.getCompanyEmployees()?vp.getCompanyEmployees():"[FORM:NO COMPANY SIZE]";
digitalData.user[0].profile[0].usercompanycountry=vp.getCompanyCountry()?vp.getCompanyCountry():"[FORM:NO COUNTRY]";
digitalData.user[0].profile[0].userprimaryprodinterest=vp.getPrimaryProductInterest()?vp.getPrimaryProductInterest():"[FORM:NO PRIMARY PRODUCT INTEREST]";
digitalData.user[0].profile[0].usercompanyname=vp.getCompanyName()?vp.getCompanyName():"[FORM:NO COMPANY NAME]";
digitalData.user[0].profile[0].userfirstformcompletetime=vp.getFirstFormCompleteTime()
};
digitalData.util.sfTrackFormsCampaigns=function(){digitalData.util.addPageData("pagename",Page.getName());
digitalData.util.addPageData("prevpage",Page.getPrevious());
var d="";
digitalData.event=[];
digitalData.page.moduletracking=digitalData.page.sharechannel=digitalData.page.captchatype="";
digitalData.util.addBehavior("pageview");
if(Page.hasLeadCaptureForm()&&(Page.getName().indexOf(":form:")>-1||Page.getName().indexOf(":events:details:")>-1)){d=(digitalData.page.offerid&&digitalData.page.offerid.indexOf("|")==-1)?digitalData.page.offerid:Page.getNameCaptureId();
if(d){s.c_w("lastOffer",d+":view");
digitalData.page.offerid=s.getValOnce(d,"v28");
d=digitalData.page.pagename+"|"+d;
d=(Page.isFormBuilderForm()?"form-builder":"old-form")+"|"+d;
if(digitalData.page.offerid&&digitalData.page.offerid.indexOf(digitalData.page.pagename)==-1){digitalData.page.offerid=d;
s.c_w("c30",digitalData.page.offerid)
}}if(digitalData.page.offerid){digitalData.util.addBehavior("formview")
}}else{if(Page.isConfirmation()){digitalData.util.addBehavior("formconfirmationview");
if(Util.getParam("redirect")==="true"){var h=Util.convert15To18(Util.getParam("d")?Util.getParam("d"):Util.getParam("DriverCampaignId"));
if(h&&!Util.getParam("d")){digitalData.util.addProduct(h,"intdriverclick");
digitalData.util.addBehavior("intdriverclick");
digitalData.util.addPageData("internaldrivers",Page.getPrevious()+"|"+h)
}digitalData.page.offerid=Util.convert15To18(Util.getParam("FormCampaignId"));
if(digitalData.page.offerid){digitalData.page.offerid="form-builder|"+Page.calculateName(Util.getParam("landing_page"))+"|"+digitalData.page.offerid
}}if(vp.getFormCompleteId()){digitalData.user[0].profile[0].transactionid=vp.getFormCompleteId()
}if(digitalData.user[0].profile[0].transactionid){digitalData.page.numberofformcompletes="+1";
if(Util.getParam("redirect")==="true"){digitalData.util.addBehavior("autoformcomplete")
}else{digitalData.util.addBehavior("formcompletesubmitbuttonclick");
if(Page.isDemo()){digitalData.util.addBehavior("demoformcomplete")
}if(Page.isSignup()){digitalData.util.addBehavior("signupformcomplete")
}}}}}if(Page.isConfirmation()){digitalData.util.setFormFillVals()
}digitalData.page.searchterm=Page.getSearchTerm();
digitalData.page.searchterm=s.getValOnce(digitalData.page.searchterm,"v12");
if(digitalData.page.searchterm){digitalData.page.numsearchresults=Page.getNumSearchResults();
digitalData.util.addBehavior("intsearch");
digitalData.page.numofintsearches="+1"
}var a=digitalData.util.getCTAs();
digitalData.util.addDriversToDigitalData(a);
if(Page.getDriver()&&Page.getDriver().type=="internal"){var c="intdriverclick";
var g=Page.getDriver().id;
digitalData.util.addProduct(g,c);
digitalData.util.addBehavior(c)
}if(s.c_r("v32")){digitalData.page.moduletracking=s.c_r("v32");
s.c_w("v32","");
try{if(digitalData.page.moduletracking){var j="";
if(digitalData.page.moduletracking.indexOf("|left-nav")>-1){j="Left"
}else{if(digitalData.page.moduletracking.indexOf("|topnav-products-menu")>-1){j="products-menu-Top"
}else{if(digitalData.page.moduletracking.indexOf("|topnav")>-1){j="Top"
}}}if(j){digitalData.util.addBehavior("topnavigationclicks");
var b=Page.getNameNoLocale();
b=b.replace(Page.getServer()+":","");
digitalData.page.toporleftnav=j+"|"+b
}}}catch(f){}}if(digitalData.flags.linktype){}};
digitalData.util.trackDynamicContentImpressions=function(){if(typeof Modernizr==="object"){return
}var b=(function(){var g=window.MutationObserver||window.WebKitMutationObserver;
var f=window.addEventListener;
return function(h,k){if(g){if(h.className=="mboxDefault"){var j=new g(function(l,m){k(l)
});
j.observe(h,{childList:true,subtree:true,attributes:true})
}else{var j=new g(function(l,m){if(l[0].addedNodes.length||l[0].removedNodes.length){k(l)
}});
j.observe(h,{childList:true,subtree:true})
}}else{if(f){h.addEventListener("DOMNodeInserted",k,false);
h.addEventListener("DOMNodeRemoved",k,false)
}}}
})();
var a=$('.campaign, .mboxDefault:not([id^="mbox-target-global-mbox-"])');
var c=[];
var d=0;
a.each(function(){c.push($(this).attr("id"))
});
Page.ctas=[];
Page.noclosure_ctas=[];
$(c).each(function(f){b(document.getElementById(c[f]),function(l){var x=offerid=type=_location="";
var p=[];
var m,q,n;
var o=l[0];
if(o.target.className=="mboxDefault"){var g=$("#mboxImported-default-"+c[f]+"-0");
$anchors=g===null?$([]):g.find("a");
$anchors.each(function(){if(Page.isValidDynamicComponentLink(this)){n=Util.getParam("d",Util.getHref(this)).length==15?Util.convert15To18(Util.getParam("d",Util.getHref(this))):Util.getParam("d",Util.getHref(this));
if($.inArray(n,Page.ctas)===-1){Page.ctas.push(n)
}}});
d+=1
}else{for(var t=0;
t<l.length;
t++){if(l[t].addedNodes&&l[t].addedNodes.length>0){$anchors=$(l[t].addedNodes[0]).html()===null?$([]):$(l[t].addedNodes[0]).find("a");
$anchors.each(function(){if(Page.isValidDynamicComponentLink(this)){n=Util.getParam("d",Util.getHref(this)).length==15?Util.convert15To18(Util.getParam("d",Util.getHref(this))):Util.getParam("d",Util.getHref(this));
if($.inArray(n,Page.ctas)===-1){Page.ctas.push(n)
}}});
d+=1
}}}if(d===c.length){(function(){if(typeof window.CustomEvent==="function"){return false
}function y(A,B){B=B||{bubbles:false,cancelable:false,detail:undefined};
var z=document.createEvent("CustomEvent");
z.initCustomEvent(A,B.bubbles,B.cancelable,B.detail);
return z
}y.prototype=window.Event.prototype;
window.CustomEvent=y
})();
var j=new CustomEvent("targetedContentLoaded",{detail:{targetDivs:c}});
document.dispatchEvent(j);
var k=$("div[data-campaign-url]");
var h=[];
k.each(function(y,A){var z=$(A).data("campaignUrl");
z=z.replace("|content|campaigns|","").replace("|_jcr_content|par","");
h.push(z)
});
var w=h.join(",");
if(window.s_tnt){s.tnt=s.deDupe(s.trackTNT(),",");
s.linkTrackVars=s.apl(s.linkTrackVars,"tnt",",",2)
}var u=digitalData.util.getCTAs();
var r=!(digitalData.user[0].profile[0]&&digitalData.user[0].profile[0].db&&digitalData.user[0].profile[0].db.city&&digitalData.user[0].profile[0].db.state)?"":digitalData.user[0].profile[0].db.city+"|"+digitalData.user[0].profile[0].db.state;
if(Page.getLocale()==="jp"&&typeof SURFPOINT!="undefined"){digitalData.user[0].profile[0].targetingcompanyindustry="DB="+(digitalData.util.getLocalStorage("db.ind")||"[NO DATA]")+"|DC="+(SURFPOINT.getOrgIndustrialCategoryL()||"[NO DATA]")+"|"+(SURFPOINT.getOrgIndustrialCategoryM()||"[NO DATA]")+"|"+(SURFPOINT.getOrgIndustrialCategoryS()||"[NO DATA]")+"|"+(SURFPOINT.getOrgIndustrialCategoryT()||"[NO DATA]");
digitalData.user[0].profile[0].targetingcompanyname="DB="+(digitalData.util.getLocalStorage("db.name")||"[NO DATA]")+"|SFDC="+(vp.getCompanyName()||"[NO DATA]")+"|DC="+(SURFPOINT.getOrgEnglishName()||"[NO DATA]")+"|"+(SURFPOINT.getOrgName()||"[NO DATA]");
digitalData.user[0].profile[0].targetingaudience="DB="+(digitalData.util.getLocalStorage("db.aud")||"[NO DATA]")+"|DC="+(SURFPOINT.getOrgIpoType()||"[NO DATA]")+"|"+(SURFPOINT.getOrgEmployeesCode()||"[NO DATA]")+"|"+(SURFPOINT.getOrgCapitalCode()||"[NO DATA]")
}else{digitalData.user[0].profile[0].targetingcompanyindustry="DB="+(digitalData.util.getLocalStorage("db.ind")||"[NO DATA]");
digitalData.user[0].profile[0].targetingcompanyname="DB="+(digitalData.util.getLocalStorage("db.name")||"[NO DATA]")+"|SFDC="+(vp.getCompanyName()||"[NO DATA]");
digitalData.user[0].profile[0].targetingaudience="DB="+(digitalData.util.getLocalStorage("db.aud")||"[NO DATA]")
}digitalData.util.trackActivity(digitalData.page.pagename+"|dynamic_component_tracking",{events:["event19"],properties:{eVar82:r,eVar52:digitalData.user[0].profile[0].targetingcompanyname,eVar63:digitalData.user[0].profile[0].targetingaudience,eVar41:digitalData.user[0].profile[0].targetingcompanyindustry,list1:w,products:u}});
trackTrailheadLinks()
}})
});
if(c.length===0){trackTrailheadLinks()
}};
digitalData.util.trackVidyard=function(){VidyardProgressEvents(function(a){var f=typeof a!=="undefined"&&a.player.metadata.chapters_attributes[a.chapter].video_attributes;
var c=typeof a!=="undefined"&&a.event;
var d=0;
var b="";
if(f&&c){b=f.name?f.name:"";
var g=function(l,j){d=f.length_in_seconds*l/100;
var h=["customlink"];
for(var k=0;
k<j.length;
k++){h.push(new digitalData.util.Behavior(j[k],{primaryCategory:"video"}))
}digitalData.util.addPageData("videoname",b);
digitalData.util.addPageData("videoduration",d);
digitalData.util.trackBehavior("video",h,["page.videoname","page.videoduration"])
};
switch(c){case 1:g(c,["number_video_views"]);
break;
case 25:g(c,["video_25percent_viewed"]);
break;
case 50:g(c,["video_50percent_viewed"]);
break;
case 75:g(c,["video_75percent_viewed"]);
break;
case 100:g(c,["video_100percent_viewed"]);
break
}}},[1,25,50,75,100])
};
digitalData.util.trackPageGlobal=function(){digitalData.page.pagename=digitalData.page.pagename?digitalData.page.pagename:Page.getName();
digitalData.page.charSet="UTF-8";
digitalData.page.sitesection=Page.getChannel();
digitalData.page.server="SFDC";
digitalData.page.locale=Page.getLocale();
digitalData.page.prevpage=Page.getPrevious();
digitalData.page.prevpagesanitized=digitalData.page.prevpage||"[NO PREVIOUS PAGE AVAILABLE]";
digitalData.page.namenolocale=Page.getNameNoLocale();
digitalData.page.type=Page.getType();
digitalData.page.cloud=Page.getCloud();
var c=new Date();
c.setDate(c.getDate()-1);
digitalData.page.expdate=c;
digitalData.page.referrer=Page.getReferrer();
digitalData.page.subdomainReferrer=Page.getSFDCNetworkReferrer()&&Page.getSFDCNetworkReferrer().id;
if(Page.hasInternalReferrer()){Page.prevpageanalyticsurl=s.c_r("prevpageanalyticsurl")
}s.c_w("prevpageanalyticsurl","",digitalData.page.expdate);
var b=Util.getMeta("analytics_url");
if(b){$("a").on("click",function(){s.c_w("prevpageanalyticsurl",b)
})
}else{$("a").on("click",function(){s.c_w("prevpageanalyticsurl",curName)
})
}var d=window.location.href;
digitalData.page.url=Page.hasExcludedParam(d)?d.split("?")[0]:d;
digitalData.util.addBehavior("pageview");
digitalData.page.numberpageviews="+1";
digitalData.page.segment=Page.getSegment();
if(Page.is404()){digitalData.page.spagetype="errorPage"
}if(vp.isNewSession()){if(vp.isNewVisitor()){digitalData.util.addBehavior("firsttimevisit")
}else{digitalData.util.addBehavior("returnvisit")
}}digitalData.page.reportsuite=Server.getAccount();
digitalData.page.pageloadtime=(function(){if(!window._pageLoadTime){var h=new Date().getTime(),g=window.performance?performance.timing:0,j=g?g.requestStart:0;
_pageLoadTime=j?Math.round((h-j)/100):""
}return _pageLoadTime
})();
digitalData.util.addDriversToDigitalData(digitalData.util.getCTAs());
var a=digitalData.util.getUserProfileByName("legacy")||{};
a.usertype=vp.getType();
a.timepartinghour=digitalData.util.getTimeParting(-8).split("|")[0];
a.timepartingday=digitalData.util.getTimeParting(-8).split("|")[1];
a.dayssincelastvisit=vp.getDaysSinceLastVisit();
try{if(vp.OrgInfo.getStatus()||vp.OrgInfo.getType()){a.orgEdition=vp.OrgInfo.getEdition()
}a.orgId=vp.OrgInfo.getID()
}catch(f){}a.visitnumber=vp.getVisitNumber();
digitalData.util.setUserProfileByName("legacy",a)
};
digitalData.util.migrateLegacyCookie=function(b,a){var c="s_pers";
var g=60*60*24*365*10;
var f=digitalData.util.readCookie(c);
if(f&&f.length>0){var j=_(f.replace(/\s/g,"").split(";")).chain().map(function(l){var k=l.split("=");
return[k[0],k[1]]
}).filter(function(k){return k&&k.length==2&&k[0]&&k[1]
}).object().value();
var d=j[b];
j=_.omit(j,[b]);
if(_.keys(j).length>0){var h=_(j).chain().pairs().map(function(k){return k.join("=")
}).value().join("; ");
digitalData.util.writeCookie(c,h,g)
}else{Util.deleteCookie(c)
}if(d){if(d.indexOf("|")>0){d=d.split("|")[0]
}d=Url.decodeComponent(d);
if(a){return a(d)
}return d
}}return undefined
};
digitalData.util.trackPageSFDC=function(){var c="";
var m;
var j="";
var b=digitalData.util.getUserProfileByName("legacy")||{};
b.detailedusertype=vp.getTypeDetailed();
b.formfillstatus=vp.getUserEmail()?"known":"anonymous";
if(Page.isLogin()){if(vp.hasCurrentTrial()){b.logintype="freetrial";
digitalData.util.addBehavior("freetriallogin")
}else{if(digitalData.user[0].profile[0].usertype==="developer"){b.logintype="developer"
}else{b.logintype="customer"
}}}var f=digitalData.util.getLocalStorage("db.size");
b.targetingcompanysize="DB="+(f||"[NO DATA]");
f=digitalData.util.getLocalStorage("db.atype");
digitalData.util.setUserProfileByName("demandbase",vp.db);
b.db=vp.db;
b.targetingcompanyindustry="DB="+(digitalData.util.getLocalStorage("db.ind")||"[NO DATA]");
b.targetingcompanyname="DB="+(digitalData.util.getLocalStorage("db.name")||"[NO DATA]")+"|SFDC="+(vp.getCompanyName()||"[NO DATA]");
b.targetingaudience="DB="+(digitalData.util.getLocalStorage("db.aud")||"[NO DATA]");
b.accounttype="DB="+(f||"[NO DATA]");
b.neustar="neustar="+(vp.getNeustarInfoForOmniture()?vp.getNeustarInfoForOmniture():"[NO DATA]");
b.dreamforcerole=vp.getActivity("DFrole")||"";
b.kxsfdc="kxsfdc="+(vp.getKruxSegmentsForOmniture()?vp.getKruxSegmentsForOmniture():"NONE");
if(Page.isProductCategory()){digitalData.util.addBehavior("scremove")
}digitalData.page.jobid=Util.getParam("jobId");
if(Page.isCareersConfirmation()){digitalData.util.addBehavior("onlinejobapp")
}var d=Util.getParam("elq_mid")||Util.getParam("RRID")||Util.getParam("eid")||Util.getParam("ban")||Util.getParam("dcmp")||Util.getParam("soc")||Util.getParam("mkt_tok");
digitalData.page.emailid=s.getValOnce(d,"v42",0);
digitalData.page.displayadid=Page.getDisplayAdId();
if(digitalData.page.displayadid){digitalData.util.addBehavior("displayadid")
}var p=Page.getDriver();
if(p){if(p.type=="internal"||p.internal){var a=digitalData.util.getValueOnce(p.internal||p.id,"v22");
if(a){a=Page.getPrevious()+"|"+a;
digitalData.util.addPageData("internaldrivers",a)
}}if(p.type!="internal"){if((p.type=="Typed/Bookmarked"||p.type=="Force.com")&&digitalData.util.readCookie("v0")){p.id=""
}p.id=digitalData.util.getValueOnce(p.id,"v0",0);
if(p.id){digitalData.util.addPageData("scampaign",p.id);
if(p.type=="SEO"){digitalData.util.addBehavior("seosearches")
}else{if(p.type=="SEM"){digitalData.util.addBehavior("semsearches")
}}var h=digitalData.util.getAndPersistValue(p.type,"c22");
digitalData.util.addPageData("drivertypepathing",h);
digitalData.util.addPageData("drivertype",h);
var n=60*60*24*365*10;
var o=[];
var l="cvtdt";
var q=digitalData.util.readCookie(l);
function k(r,u){var t=["Typed/Bookmarked","Force.com"];
return !(_.contains(t,u)&&_.contains(r,u))
}if(_.isString(q)&&q.length>0){o=q.split("~")
}else{o=digitalData.util.migrateLegacyCookie("v44",function(r){if(r&&r.length>0){return r.split("~")
}return[]
})||[]
}if(digitalData.page.drivertype&&k(o,digitalData.page.drivertype)){o.push(digitalData.page.drivertype)
}while(o.length>5){o.shift()
}digitalData.util.addPageData("crossvisittrafficdrivertype",o);
if(digitalData.page.crossvisittrafficdrivertype&&digitalData.page.crossvisittrafficdrivertype.length){digitalData.util.writeCookie(l,digitalData.page.crossvisittrafficdrivertype.join("~"),n)
}}}}if((digitalData.page.scampaign||digitalData.page.internaldrivers||(Page.hasLeadCaptureForm()&&!digitalData.util.readCookie("v20")))){if(digitalData.page.prevpage){digitalData.page.convertingpage=digitalData.page.prevpage;
try{if(Page.hasInternalReferrer()){m=document.createElement("a");
m.href=Page.getReferrer();
if(m.pathname){c=m.pathname.replace(/(^\/?)/,"/")
}j=Page.calculateName(c,m.hostname);
if(Page.prevpageanalyticsurl){j=Page.calculateName(Page.prevpageanalyticsurl)
}if(j===Page.getServer()+":"+Page.getLocale()+":blog"){j+=":homepage"
}if(document.referrer.indexOf("login.salesforce.com")>-1){j=Page.getServer()+":"+Page.getLocale()+":login"
}if(digitalData.page.prevpage!==j){digitalData.page.convertingpage=j
}}}catch(g){}}else{if(!s.c_r("v20")){digitalData.page.convertingpage="Direct Landing"
}}if(digitalData.page.convertingpage){s.c_w("v20",digitalData.page.convertingpage)
}}if(digitalData.util.hasEvent("formcompletesubmitbuttonclick")){if(!(s.c_r("v28")||s.c_r("c30"))){digitalData.page.offerid="[NO OFFER ID]"
}else{digitalData.page.offerid=s.c_r("c30")
}if(!s.c_r("v22")){digitalData.page.internaldrivers="[NO INTERNAL PLACEMENT ID]"
}s.c_w("v0","",digitalData.page.expdate);
s.c_w("v20","",digitalData.page.expdate);
s.c_w("v22","",digitalData.page.expdate);
s.c_w("v28","",digitalData.page.expdate);
s.c_w("c30","",digitalData.page.expdate)
}digitalData.page.drivertypepathing=digitalData.util.getAndPersistValue("","c22");
digitalData.page.drivertypepathing=digitalData.page.drivertypepathing?digitalData.page.drivertypepathing+":"+digitalData.page.pagename:"";
if(s.c_r("c40")||digitalData.page.drivertype){if(!digitalData.page.drivertype||(digitalData.page.drivertype===s.c_r("c40"))){digitalData.page.drivertype="did not bounce"
}else{if(digitalData.page.drivertype!=s.c_r("c40")){digitalData.page.drivertype=digitalData.util.getAndPersistValue(digitalData.page.drivertype,"c40")
}}}digitalData.page.uiframework="AEM framework";
if(Page.hasChatForm()){digitalData.util.addBehavior("chatformshown")
}if(Page.hasChatFormV2()){digitalData.util.addBehavior("chatview")
}if(Page.isBlog()){digitalData.page.blogpostmeta=Page.getBlogPostMeta();
digitalData.page.authorName=Page.getBlogAuthor()
}if(Page.isSEM()){if(Util.getParam("brand")==="yes"){digitalData.page.sembrand="yes"
}else{if(Util.getParam("brand")==="no"){digitalData.page.sembrand="no"
}}}digitalData.util.setUserProfileByName("legacy",b)
};
digitalData.util.trackModules=function(c,d){var b="";
try{switch(d){case"blogs":(function(f,g){f(g).parentsUntil(".page-wrap").each(function(){var j=f(this),k=j.attr("id")||"",h=j.attr("class")||"";
if(h.indexOf("header-main")>-1){b="topnav"
}else{if(k==="blogspotlightwrap"){b="grid-row-1"
}else{if(h==="container-fluid container-width-md top-20"){b="grid-row-2"
}else{if(h==="footer"){b="footer"
}}}}if(b){return false
}})
})($,c);
break;
case"sflive":(function(f,g){f(g).parentsUntil("body").each(function(){var j=f(this),k=j.attr("id")||"",h=j.attr("class")||"";
if(h.indexOf("header-container")>-1){b="topnav"
}else{if(h==="bottom"){b="footer"
}else{if(j.parent().get(0).className.indexOf("content-container")>-1){b="grid-row-"+(f(this).index()+1)
}}}if(b){return false
}})
})($,c);
break;
default:(function(g,h){var f=g(h).parentsUntil("body").addBack();
selfUpToParents=g(f).get().reverse();
g(selfUpToParents).each(function(){var k=g(this),l=k.attr("id")||"",j=k.attr("class")||"";
if(l.indexOf("products_expand_par")>-1){b="topnav-products-menu"
}else{if(j.indexOf("navbar-expandable-container")>-1||(j.indexOf("overlayMenuItem")>-1)){b="topnav"
}else{if(l==="navigation_left"||(j.indexOf("leftnav")>-1)){b="left-nav"
}else{if(j.indexOf("navbar-header-container")>-1){b="header"
}else{if(j==="bottom"){b="footer"
}else{if(k.parent().get(0).className.indexOf("content-container")>-1){b="grid-row-"+(g(this).index()+1)
}}}}}}if(b){return false
}})
})($,c)
}}catch(a){}if(b){s.c_w("v32",digitalData.page.pagename+"|"+b)
}};
digitalData.util.doCustomPlugins=function(){try{custom_var=Page.getLocale()+"|"+vp.getType()+"|"+Page.getSegment()+"|"+vp.getTypeDetailed()+"|"+vp.getVisitNumber()+"|"+Page.getName()
}catch(a){}$('a[href$=".pdf"]').on("click",function(){var d=$(this);
s.downloadUrl=d.attr("href").toLowerCase();
s.downloadUrl=s.server+":"+s.eVar6+":file:"+s.downloadUrl;
var c=Page.setPrevious()?Page.setPrevious():"[NO PREVIOUS PAGE AVAILABLE]";
var b=digitalData.page.pagename;
digitalData.util.trackPartialPageLoad(s.downloadUrl,{events:["event11"],properties:{prop35:c}});
digitalData.page.pagename=s.pageName=b
});
if(!($("html").hasClass("ie7")||$("html").hasClass("ie6"))){if(Page.isBlog()){$("header a, .page-content a").click(function(){digitalData.util.trackModules(this,"blogs")
})
}else{if(Page.isSFLive()){$("header.header-container a, footer.bottom a, .content-container a").click(function(){digitalData.util.trackModules(this,"sflive")
})
}else{$("header.header-container a, footer.bottom a, .content-container a, .leftnav a").click(function(){digitalData.util.trackModules(this,"www")
});
$(".nav-container a").on("click",function(){var b=$(this).find(".header-text").text().toLowerCase(),c=$.trim(b).replace(/ /g,"_"),d=Page.getName()+"|topnav-toplevel|"+c;
digitalData.util.trackActivity(d,{events:["event2"],properties:{eVar32:d}})
});
$(".globalNavigationBar a").on("click",function(){var j="Top";
var g=$(this);
var c=g.text().toLowerCase(),f=$.trim(c).replace(/ /g,"_"),k=j+"|"+f,h=g.closest("li.primary-menu-item").attr("id"),d=Page.getName()+"|"+k;
if(h){var l=h.replace("_menu_item","");
var b=g.closest(".tab-pane").attr("id")||"";
if(b){k=j+"|"+l+"|"+b.replace("_"+l,"")+"|"+f
}else{k=j+"|"+l+"|"+f
}d=Page.getName()+"|"+k
}if(g.closest("ul").hasClass("flyout-menu-login")||f=="login"){k=j+"|Login|"+f;
d=Page.getName()+"|"+k
}if(!g.parent().hasClass("panel-heading")){digitalData.util.trackActivity(d,{events:["event2"],properties:{eVar32:d,eVar37:k,prop14:s.prop14?s.prop14:""}})
}});
$(".globalNavigationBar .tab-content .tab-pane").each(function(d,f){var c=$(f);
var g=c.attr("id");
var b=c.find(".image-link[data-modal-src] img");
if(g&&b.length!==0){b.on("click",function(){var j=g.split("_")[0];
var h=Page.getName()+"|navvideoplay|"+j;
digitalData.util.trackActivity(h,{events:["event2"],properties:{eVar32:h}})
})
}})
}}}};
digitalData.util.setEvent=function(a,c){if(!a){return false
}if(digitalData.event){var b=undefined;
if(c){b={primaryCategory:c}
}digitalData.util.addBehavior(a,b)
}};
digitalData.util.hasEvent=function(a){for(i=0;
i<digitalData.event.length;
i++){if(digitalData.event[i].eventInfo.eventID===a){return true
}}return false
};
digitalData.util.trackPartialPageLoad=function(g,a){if(!g){return
}var c=a&&a.events||[];
var b=a&&a.properties||{};
c.push("event11");
var f=_(c).chain().map(digitalData.util.mappings.adobe.getEventName).uniq().value();
var d=[];
_.chain(b).keys().each(function(j){var h=digitalData.util.mappings.adobe.getDataElementName(j);
if(h){if(h==="products"){_(b[j]).map(function(l){var k;
if(_.indexOf(f,"intdriverclick")>-1){k="intdriverclick"
}else{k="intdriverimp"
}digitalData.util.addProduct(l,k)
})
}else{digitalData.util.setElement(h,b[j])
}d.push(h)
}});
digitalData.util.dynamicPageLoad(g,f,d)
};
digitalData.util.trackCTAs=function(b,d){var c="";
d=d||"";
if(!b){return d?";"+d+";;;event25=1":""
}if(d){c=";"+d+";;;event25=1"
}for(var a=0;
a<b.length;
a++){if(c.indexOf(b[a])==-1){c+=(c!=""?",":"")+";"+b[a]+";;;event19=1"
}}return c
};
digitalData.util.clearVarsAndEvents=function(){s.clearVars()
};
var OmniConfig=OmniConfig||{};
OmniConfig.trackAjaxForm=function(){if(typeof digitalData==="object"&&digitalData.util&&digitalData.util.trackAjaxForm){digitalData.util.trackAjaxForm()
}return true
};
OmniConfig.trackForm=function(a,c,d,b){if(typeof digitalData==="object"&&digitalData.util&&digitalData.util.trackAjaxForm){digitalData.util.trackForm(a,c,d,b)
}return true
};
OmniConfig.trackSocial=function(a,b){if(!a){return false
}if(!b){b="Social sharing"
}if(typeof digitalData==="object"&&digitalData.util&&digitalData.util.trackSocial){digitalData.util.trackSocial(a,b)
}return true
};
function trackGoogPlus(b){try{if(b.state=="on"){digitalData.util.trackActivity("GooglePlus: social share",{events:["event26"],properties:{eVar53:"GooglePlus"}})
}}catch(a){}}function trackTrailheadLinks(){var b=$("a[href^='https://trailhead.salesforce.com'], div.thumbnail-linked[data-href^='https://trailhead.salesforce.com']");
var a=digitalData.page.pagename||Page.getName();
if(b.length>0){b.on("click",function(){digitalData.util.trackActivity("Trailhead_"+a)
})
}}digitalData.util.sfTrackFormsCampaigns();
digitalData.util.trackPageGlobal();
digitalData.util.trackPageSFDC();
digitalData.util.doCustomPlugins();
digitalData.util.trackDynamicContentImpressions();
$(window).load(function(){var a="event26";
if(Page.isBlog()){$(".IN-widget a").bind("click",function(){digitalData.util.trackActivity("LinkedIn: social share",{events:[a],properties:{eVar53:"LinkedIn"}})
});
$(".email_share a").bind("click",function(){digitalData.util.trackActivity("email: social share",{events:[a],properties:{eVar53:"email"}})
});
try{FB.Event.subscribe("edge.create",function(c){digitalData.util.trackActivity("Facebook-like: social share",{events:[a],properties:{eVar53:"Facebook-like"}})
})
}catch(b){}try{FB.Event.subscribe("comment.create",function(c){digitalData.util.trackActivity("Facebook-comment: social share",{events:[a],properties:{eVar53:"Facebook-comment"}})
})
}catch(b){}try{twttr.events.bind("click",function(c){if(c.type==="click"){digitalData.util.trackActivity("Twitter: social share",{events:[a],properties:{eVar53:"Twitter"}})
}})
}catch(b){}}});
var _curLocationQuery=window.location.search.toLowerCase();
if(Page.isTrackedOnLoad()&&!(_curLocationQuery.indexOf("un%3d")>-1||_curLocationQuery.indexOf("pw%3d")>-1||_curLocationQuery.indexOf("un=")>-1||_curLocationQuery.indexOf("pw=")>-1)){s.t()
};