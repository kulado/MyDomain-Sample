var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.loginPromo=SfdcWwwBase.loginPromo||{};
(function(a){SfdcWwwBase.loginPromo.forced=Util.getParam("forceShowPromo");
SfdcWwwBase.loginPromo.init=function(){var b=a(".promo");
if(this.isForced(b.length)){this.forcePromo(b)
}else{this.showPromo()
}};
SfdcWwwBase.loginPromo.isForced=function(b){var c=this.forced;
return !(c===""||isNaN(c)||c>=b)
};
SfdcWwwBase.loginPromo.forcePromo=function(c){var b=parseInt(this.forced);
c.eq(b).removeClass("hide")
};
SfdcWwwBase.loginPromo.showPromo=function(){var e,d,b,c=this.getType();
e=a(".promo").filter(c);
d=e.length;
if(0===d){return
}b=Math.floor(Math.random()*d);
e.eq(b).removeClass("hide")
};
SfdcWwwBase.loginPromo.findMatchingSegments=function(){if(typeof vp!=="undefined"&&_.has(vp.kxsfdc,"segs")){var c=[];
var d=vp.kxsfdc.segs.split(",");
a(".promo.sfdmp-only").each(function(){if(a(this).attr("data-sfdmp")){c.push(a(this).data("sfdmp"))
}});
var e=_.intersection(c,d);
var b=e[Math.floor(Math.random()*e.length)];
if(b){return'[data-sfdmp="'+b+'"]'
}}else{return null
}};
SfdcWwwBase.loginPromo.getType=function(){var c=SfdcWwwBase.loginPromo.findMatchingSegments();
if(typeof vp!=="undefined"&&(_.has(vp.kxsfdc,"segs")&&c)){return c
}else{if(vp.isCustomer()){var e=Util.getParam("r"),d=e.indexOf("logout.jsp")>-1&&a(".promo.customer-only-logged-out").length>0,b=(e.indexOf("success.salesforce.com")>-1||e.indexOf("salesforce.com/dreamforce")>-1)&&a(".promo.df-only").length>0;
if(d){return".customer-only-logged-out"
}if(b){return".df-only"
}return".customer-only"
}else{return".prospect-only"
}}};
SfdcWwwBase.loginPromo.init()
}(jQuery));