(function(o,l){var f=o.yall={get:function(){return b
},init:function(E){if(!b){b=new m(E);
l(document).ready(function(){e();
b.refresh()
})
}else{if(b&&E){b.setOptions(E)
}}return b
},VERSION:"0.1"};
var b,v,A=false,z={},n=false,x=null,i,j,B,t,h,p,y=l(o);
var c={img:{filter:"img[data-src].lazy",fn:function(F){var E=l(F),G=E.attr("data-src")||"",I=E.attr("data-sizes")||"";
if(G&&I){G=k(G,I)
}if(G){var H=B?B(G):G;
if(H!==E.attr("src")){E.attr("src",H);
E.error(function(){l(this).after('<span style="color:red;">MISSING IMAGE "'+H+'"</span>')
});
E.load(function(){l(this).trigger("yall-loaded")
});
if(h){console.log("yall.js: Image "+H)
}}else{E.show().data("yall-nosource",false)
}}else{E.hide().data("yall-nosource",true)
}}},div:{filter:"div[data-src].lazy",fn:function(H){var E=l(H),J=E.attr("data-src")||"",L=E.attr("data-sizes")||"",F=E.attr("data-style")||"";
if(J&&L){J=k(J,L)
}if(J){var K=B?B(J):J;
var G=E.css("background-image");
if(!G.match(K)){C(E);
var I=r(F);
l.extend(I,{"background-image":"url("+K+")"});
q(E,I);
E.error(function(){l(this).after('<span style="color:red;">MISSING IMAGE "'+J+'"</span>')
});
if(h){console.log("yall.js: Background "+J+" with attributes "+JSON.stringify(I))
}}}else{C(E)
}}},iframe:{filter:"iframe[data-src].lazy",fn:function(F){var E=l(F),G=E.attr("data-src")||"";
if(G&&G!==E.attr("src")){E.attr("src",G);
if(h){console.log("yall.js: Iframe "+G)
}}}}};
var g=[{type:"svg",condition:function(){return !!o.SVGSVGElement
},imgSuffix:"",imgExtension:"svg"},{type:"ret-lo",condition:function(){return(z.retina&&z.win_width<768)
},imgSuffix:"-ret-lo"},{type:"ret-hi",condition:function(){return(z.retina&&z.win_width>=768)
},imgSuffix:"-ret-hi"},{type:"lo",condition:function(){return(z.win_width<768)
},imgSuffix:"-lo"},{type:"hi",condition:function(){return(z.win_width>=768)
},imgSuffix:"-hi"}];
function m(E){this.setOptions(E);
b=this;
return b
}m.prototype.setOptions=function(E){E=(E||{});
i=E.threshY||0;
j=E.threshX||0;
B=E.urlFormatter;
t=E.forceWindow;
h=(o.console&&E.debug)||false;
p=E.pollInterval||0;
n=E.showImmediately===true
};
m.prototype.attach=function(E){l.extend(c,E);
return b
};
m.prototype.trigger=function(H){H=H===true;
if(x){o.clearTimeout(x);
x=null
}if(H){v.data("loaded",false);
A=(v.length>0)
}if(!A){return
}d(H);
var L=false,G=z.win_top,I=G+z.win_height,J=z.win_left,K=J+z.win_width,E=z.calcThreshY,F=z.calcThreshX;
v.filter(function(){if(l(this).data("loaded")===true){return false
}if(n){return true
}var M=l(this),P=M.offset().top,O=P+M.height(),Q=M.offset().left,V=Q+M.width();
var W=O>=G-E&&P<=I+E;
var T=V>=J-F&&Q<=K+F;
var N=W&&T;
var S=(M.data("yall-nosource")===true);
var R=(M.is(":hidden")||M.css("visibility")==="hidden");
var U=N&&(S||!R);
if(!L&&!U){L=true
}return U
}).data("loaded",true).trigger("yall-show");
A=L;
if(A&&p>0){x=o.setTimeout(b.trigger,p)
}if(h&&!A){console.log("yall.js: All nodes revealed.")
}};
m.prototype.refresh=function(E){a();
u();
this.trigger(true);
return b
};
var a=function(){var E=l.map(c,function(G,F){return G.filter
});
v=l(E.join(","));
A=(v.length>0)
};
var u=function(){l.each(c,function(E,F){v.filter(F.filter).data({type:E,fn:F.fn,loaded:false})
});
v.on("yall-show",function(){var E=l(this).data("fn");
if(typeof(E)==="function"){E.call(b,this)
}else{l(this).off("yall-show").after('<span style="color:red;">MISSING HANDLER FOR THIS ELEMENT (Did you forget data-src and data-sizes?)</span>')
}})
};
var e=function(){var E=s(function(){b.trigger(true);
b.refresh()
},100);
if(!n){y.scroll(function(){b.trigger(false)
})
}y.resize(E)
};
var d=function(E){z={win_top:y.scrollTop(),win_left:y.scrollLeft(),win_width:y.width(),win_height:y.height(),retina:o.devicePixelRatio>1,calcThreshY:(E===true&&Math.ceil(i)===1)?y.height()*i:(z.calcThreshY||i),calcThreshX:(E===true&&Math.ceil(j)===1)?y.width()*j:(z.calcThreshX||j)};
if(t){l.extend(z,t)
}};
var s=function(F,H,L){var E,J,M;
var K=null;
var I=0;
L||(L={});
var G=function(){I=L.leading===false?0:new Date();
K=null;
M=F.apply(E,J)
};
return function(){var N=new Date();
if(!I&&L.leading===false){I=N
}var O=H-(N-I);
E=this;
J=arguments;
if(O<=0){clearTimeout(K);
K=null;
I=N;
M=F.apply(E,J)
}else{if(!K&&L.trailing!==false){K=setTimeout(G,O)
}}return M
}
};
var k=function(H,L){var K=w(L,","),I=H.lastIndexOf("."),E=H.substring(0,I);
var J=D("imgSuffix",K);
var G=D("imgExtension",K);
var F=G||H.substring(I+1);
return(J||G)?(E+J+"."+F):""
};
var D=function(F,H){for(var G=0;
G<g.length;
G++){var E=g[G];
if(l.inArray(E.type,H)==-1){continue
}if(E.condition()){return E[F]
}}return null
};
var w=function(E,F){return l.map(E.split(F),function(G,H){return l.trim(G)
})
};
var r=function(I){var L={};
var J=w(I,",");
var G={};
l.each(J,function(O,N){var M=w(N,"=");
G[M[0]]=M[1]
});
for(var H=0;
H<g.length;
H++){var F=g[H];
var E=G[F.type];
if(E===undefined||!F.condition()){continue
}var K=w(E.replace("(","").replace(")",""),";");
l.each(K,function(N,M){var O=w(M,":");
if(O.length===2){L[O[0]]=O[1]
}})
}return L
};
var q=function(E,F){E.css(F).data({yallStyles:F})
};
var C=function(F){var E=F.data("yallStyles");
if(E){l.each(E,function(G,H){F.css(G,"")
})
}}
}(window,jQuery));
(function(){var a=((navigator.userAgent||"").match(/(iPod|iPhone|iPad)/i))!=null;
var c=(window.location.href.indexOf("debuglazy=")!==-1);
var d=a||(window.location.href.indexOf("debuglazy=force")!==-1);
var b=yall.init({debug:c,threshY:250,threshX:0.75,pollInterval:200,showImmediately:d,urlFormatter:(window.Url?window.Url.getFullUrl:undefined)})
})();