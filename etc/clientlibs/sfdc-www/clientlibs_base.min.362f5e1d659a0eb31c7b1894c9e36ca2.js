var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.fixIE8css=SfdcWwwBase.fixIE8css||{};
(function(){SfdcWwwBase.fixIE8css.init=function(){if(/MSIE 8\.0/.test(navigator.appVersion)){var b=document.getElementsByTagName("link"),a=b.length,g,d,c=false,f,e;
for(d=0;
d<a;
d+=1){f=b[d].href;
if(typeof f!=="undefined"&&/^(http)?(s)?(:)?\/\/[\w\d\.\/-]*\.css$/.test(f)){e=f.replace(/^[\w:]*[\/]{2}/,"");
e=e.substr(e.indexOf("/"),e.length);
b[d].href=e;
c=true
}}if(c===true){g=document.createElement("script");
g.type="text/javascript";
g.src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js";
document.body.appendChild(g)
}}};
SfdcWwwBase.fixIE8css.init()
}());
+function(b){function a(){var e=document.createElement("bootstrap");
var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}
}}return false
}b.fn.emulateTransitionEnd=function(e){var d=false;
var c=this;
b(this).one("bsTransitionEnd",function(){d=true
});
var f=function(){if(!d){b(c).trigger(b.support.transition.end)
}};
setTimeout(f,e);
return this
};
b(function(){b.support.transition=a();
if(!b.support.transition){return
}b.event.special.bsTransitionEnd={bindType:b.support.transition.end,delegateType:b.support.transition.end,handle:function(c){if(b(c.target).is(this)){return c.handleObj.handler.apply(this,arguments)
}}}
})
}(jQuery);
+function(d){var b=function(f,e){this.$element=d(f);
this.options=d.extend({},b.DEFAULTS,e);
this.isLoading=false
};
b.VERSION="3.3.2";
b.DEFAULTS={loadingText:"loading..."};
b.prototype.setState=function(g){var j="disabled";
var e=this.$element;
var h=e.is("input")?"val":"html";
var f=e.data();
g=g+"Text";
if(f.resetText==null){e.data("resetText",e[h]())
}setTimeout(d.proxy(function(){e[h](f[g]==null?this.options[g]:f[g]);
if(g=="loadingText"){this.isLoading=true;
e.addClass(j).attr(j,j)
}else{if(this.isLoading){this.isLoading=false;
e.removeClass(j).removeAttr(j)
}}},this),0)
};
b.prototype.toggle=function(){var f=true;
var e=this.$element.closest('[data-toggle="buttons"]');
if(e.length){var g=this.$element.find("input");
if(g.prop("type")=="radio"){if(g.prop("checked")&&this.$element.hasClass("active")){f=false
}else{e.find(".active").removeClass("active")
}}if(f){g.prop("checked",!this.$element.hasClass("active")).trigger("change")
}}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
}if(f){this.$element.toggleClass("active")
}};
function c(e){return this.each(function(){var h=d(this);
var g=h.data("bs.button");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.button",(g=new b(this,f)))
}if(e=="toggle"){g.toggle()
}else{if(e){g.setState(e)
}}})
}var a=d.fn.button;
d.fn.button=c;
d.fn.button.Constructor=b;
d.fn.button.noConflict=function(){d.fn.button=a;
return this
};
d(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(g){var f=d(g.target);
if(!f.hasClass("btn")){f=f.closest(".btn")
}c.call(f,"toggle");
g.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(f){d(f.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(f.type))
})
}(jQuery);
+function(d){var e=function(g,f){this.$element=d(g);
this.options=d.extend({},e.DEFAULTS,f);
this.$trigger=d(this.options.trigger).filter('[href="#'+g.id+'"], [data-target="#'+g.id+'"]');
this.transitioning=null;
if(this.options.parent){this.$parent=this.getParent()
}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)
}if(this.options.toggle){this.toggle()
}};
e.VERSION="3.3.2";
e.TRANSITION_DURATION=350;
e.DEFAULTS={toggle:true,trigger:'[data-toggle="collapse"]'};
e.prototype.dimension=function(){var f=this.$element.hasClass("width");
return f?"width":"height"
};
e.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return
}var h;
var k=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(k&&k.length){h=k.data("bs.collapse");
if(h&&h.transitioning){return
}}var g=d.Event("show.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}if(k&&k.length){b.call(k,"hide");
h||k.data("bs.collapse",null)
}var l=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[l](0).attr("aria-expanded",true);
this.$trigger.removeClass("collapsed").attr("aria-expanded",true);
this.transitioning=1;
var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[l]("");
this.transitioning=0;
this.$element.trigger("shown.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}var j=d.camelCase(["scroll",l].join("-"));
this.$element.one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[l](this.$element[0][j])
};
e.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return
}var g=d.Event("hide.bs.collapse");
this.$element.trigger(g);
if(g.isDefaultPrevented()){return
}var h=this.dimension();
this.$element[h](this.$element[h]())[0].offsetHeight;
this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);
this.$trigger.addClass("collapsed").attr("aria-expanded",false);
this.transitioning=1;
var f=function(){this.transitioning=0;
this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
if(!d.support.transition){return f.call(this)
}this.$element[h](0).one("bsTransitionEnd",d.proxy(f,this)).emulateTransitionEnd(e.TRANSITION_DURATION)
};
e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
};
e.prototype.getParent=function(){return d(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(d.proxy(function(h,g){var f=d(g);
this.addAriaAndCollapsedClass(c(f),f)
},this)).end()
};
e.prototype.addAriaAndCollapsedClass=function(g,f){var h=g.hasClass("in");
g.attr("aria-expanded",h);
f.toggleClass("collapsed",!h).attr("aria-expanded",h)
};
function c(f){var g;
var h=f.attr("data-target")||(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]+$)/,"");
return d(h)
}function b(f){return this.each(function(){var j=d(this);
var h=j.data("bs.collapse");
var g=d.extend({},e.DEFAULTS,j.data(),typeof f=="object"&&f);
if(!h&&g.toggle&&f=="show"){g.toggle=false
}if(!h){j.data("bs.collapse",(h=new e(this,g)))
}if(typeof f=="string"){h[f]()
}})
}var a=d.fn.collapse;
d.fn.collapse=b;
d.fn.collapse.Constructor=e;
d.fn.collapse.noConflict=function(){d.fn.collapse=a;
return this
};
d(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(k){var j=d(this);
if(!j.attr("data-target")){k.preventDefault()
}var f=c(j);
var h=f.data("bs.collapse");
var g=h?"toggle":d.extend({},j.data(),{trigger:this});
b.call(f,g)
})
}(jQuery);
+function(h){var e=".dropdown-backdrop";
var b='[data-toggle="dropdown"]';
var a=function(j){h(j).on("click.bs.dropdown",this.toggle)
};
a.VERSION="3.3.2";
a.prototype.toggle=function(n){var m=h(this);
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
d();
if(!k){if("ontouchstart" in document.documentElement&&!l.closest(".navbar-nav").length){h('<div class="dropdown-backdrop"/>').insertAfter(h(this)).on("click",d)
}var j={relatedTarget:this};
l.trigger(n=h.Event("show.bs.dropdown",j));
if(n.isDefaultPrevented()){return
}m.trigger("focus").attr("aria-expanded","true");
l.toggleClass("open").trigger("shown.bs.dropdown",j)
}return false
};
a.prototype.keydown=function(n){if(!/(38|40|27|32)/.test(n.which)||/input|textarea/i.test(n.target.tagName)){return
}var m=h(this);
n.preventDefault();
n.stopPropagation();
if(m.is(".disabled, :disabled")){return
}var l=f(m);
var k=l.hasClass("open");
if((!k&&n.which!=27)||(k&&n.which==27)){if(n.which==27){l.find(b).trigger("focus")
}return m.trigger("click")
}var o=" li:not(.divider):visible a";
var p=l.find('[role="menu"]'+o+', [role="listbox"]'+o);
if(!p.length){return
}var j=p.index(n.target);
if(n.which==38&&j>0){j--
}if(n.which==40&&j<p.length-1){j++
}if(!~j){j=0
}p.eq(j).trigger("focus")
};
function d(j){if(j&&j.which===3){return
}h(e).remove();
h(b).each(function(){var m=h(this);
var l=f(m);
var k={relatedTarget:this};
if(!l.hasClass("open")){return
}l.trigger(j=h.Event("hide.bs.dropdown",k));
if(j.isDefaultPrevented()){return
}m.attr("aria-expanded","false");
l.removeClass("open").trigger("hidden.bs.dropdown",k)
})
}function f(l){var j=l.attr("data-target");
if(!j){j=l.attr("href");
j=j&&/#[A-Za-z]/.test(j)&&j.replace(/.*(?=#[^\s]*$)/,"")
}var k=j&&h(j);
return k&&k.length?k:l.parent()
}function g(j){return this.each(function(){var l=h(this);
var k=l.data("bs.dropdown");
if(!k){l.data("bs.dropdown",(k=new a(this)))
}if(typeof j=="string"){k[j].call(l)
}})
}var c=h.fn.dropdown;
h.fn.dropdown=g;
h.fn.dropdown.Constructor=a;
h.fn.dropdown.noConflict=function(){h.fn.dropdown=c;
return this
};
h(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(j){j.stopPropagation()
}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b,a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',a.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',a.prototype.keydown)
}(jQuery);
+function(d){var b=function(f,e){this.options=e;
this.$body=d(document.body);
this.$element=d(f);
this.$backdrop=this.isShown=null;
this.scrollbarWidth=0;
if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,d.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
}};
b.VERSION="3.3.2";
b.TRANSITION_DURATION=300;
b.BACKDROP_TRANSITION_DURATION=150;
b.DEFAULTS={backdrop:true,keyboard:true,show:true};
b.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)
};
b.prototype.show=function(h){var f=this;
var g=d.Event("show.bs.modal",{relatedTarget:h});
this.$element.trigger(g);
if(this.isShown||g.isDefaultPrevented()){return
}this.isShown=true;
this.checkScrollbar();
this.setScrollbar();
this.$body.addClass("modal-open");
this.escape();
this.resize();
this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',d.proxy(this.hide,this));
this.backdrop(function(){var k=d.support.transition&&f.$element.hasClass("fade");
if(!f.$element.parent().length){f.$element.appendTo(f.$body)
}f.$element.show().scrollTop(0);
if(f.options.backdrop){f.adjustBackdrop()
}f.adjustDialog();
if(k){f.$element[0].offsetWidth
}f.$element.addClass("in").attr("aria-hidden",false);
f.enforceFocus();
var j=d.Event("shown.bs.modal",{relatedTarget:h});
k?f.$element.find(".modal-dialog").one("bsTransitionEnd",function(){f.$element.trigger("focus").trigger(j)
}).emulateTransitionEnd(b.TRANSITION_DURATION):f.$element.trigger("focus").trigger(j)
})
};
b.prototype.hide=function(f){if(f){f.preventDefault()
}f=d.Event("hide.bs.modal");
this.$element.trigger(f);
if(!this.isShown||f.isDefaultPrevented()){return
}this.isShown=false;
this.escape();
this.resize();
d(document).off("focusin.bs.modal");
this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");
d.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",d.proxy(this.hideModal,this)).emulateTransitionEnd(b.TRANSITION_DURATION):this.hideModal()
};
b.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){this.$element.trigger("focus")
}},this))
};
b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",d.proxy(function(f){f.which==27&&this.hide()
},this))
}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")
}}};
b.prototype.resize=function(){if(this.isShown){d(window).on("resize.bs.modal",d.proxy(this.handleUpdate,this))
}else{d(window).off("resize.bs.modal")
}};
b.prototype.hideModal=function(){var e=this;
this.$element.hide();
this.backdrop(function(){e.$body.removeClass("modal-open");
e.resetAdjustments();
e.resetScrollbar();
e.$element.trigger("hidden.bs.modal")
})
};
b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();
this.$backdrop=null
};
b.prototype.backdrop=function(j){var h=this;
var f=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var e=d.support.transition&&f;
this.$backdrop=d('<div class="modal-backdrop '+f+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",d.proxy(function(k){if(k.target!==k.currentTarget){return
}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)
},this));
if(e){this.$backdrop[0].offsetWidth
}this.$backdrop.addClass("in");
if(!j){return
}e?this.$backdrop.one("bsTransitionEnd",j).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):j()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var g=function(){h.removeBackdrop();
j&&j()
};
d.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION):g()
}else{if(j){j()
}}}};
b.prototype.handleUpdate=function(){if(this.options.backdrop){this.adjustBackdrop()
}this.adjustDialog()
};
b.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)
};
b.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})
};
b.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
};
b.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight;
this.scrollbarWidth=this.measureScrollbar()
};
b.prototype.setScrollbar=function(){var e=parseInt((this.$body.css("padding-right")||0),10);
if(this.bodyIsOverflowing){this.$body.css("padding-right",e+this.scrollbarWidth)
}};
b.prototype.resetScrollbar=function(){this.$body.css("padding-right","")
};
b.prototype.measureScrollbar=function(){var f=document.createElement("div");
f.className="modal-scrollbar-measure";
this.$body.append(f);
var e=f.offsetWidth-f.clientWidth;
this.$body[0].removeChild(f);
return e
};
function c(e,f){return this.each(function(){var j=d(this);
var h=j.data("bs.modal");
var g=d.extend({},b.DEFAULTS,j.data(),typeof e=="object"&&e);
if(!h){j.data("bs.modal",(h=new b(this,g)))
}if(typeof e=="string"){h[e](f)
}else{if(g.show){h.show(f)
}}})
}var a=d.fn.modal;
d.fn.modal=c;
d.fn.modal.Constructor=b;
d.fn.modal.noConflict=function(){d.fn.modal=a;
return this
};
d(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=d(this);
var g=j.attr("href");
var f=d(j.attr("data-target")||(g&&g.replace(/.*(?=#[^\s]+$)/,"")));
var h=f.data("bs.modal")?"toggle":d.extend({remote:!/#/.test(g)&&g},f.data(),j.data());
if(j.is("a")){k.preventDefault()
}f.one("show.bs.modal",function(e){if(e.isDefaultPrevented()){return
}f.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
});
c.call(f,h,this)
})
}(jQuery);
+function(d){var c=function(f,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;
this.init("tooltip",f,e)
};
c.VERSION="3.3.2";
c.TRANSITION_DURATION=150;
c.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};
c.prototype.init=function(l,j,g){this.enabled=true;
this.type=l;
this.$element=d(j);
this.options=this.getOptions(g);
this.$viewport=this.options.viewport&&d(this.options.viewport.selector||this.options.viewport);
var k=this.options.trigger.split(" ");
for(var h=k.length;
h--;
){var f=k[h];
if(f=="click"){this.$element.on("click."+this.type,this.options.selector,d.proxy(this.toggle,this))
}else{if(f!="manual"){var m=f=="hover"?"mouseenter":"focusin";
var e=f=="hover"?"mouseleave":"focusout";
this.$element.on(m+"."+this.type,this.options.selector,d.proxy(this.enter,this));
this.$element.on(e+"."+this.type,this.options.selector,d.proxy(this.leave,this))
}}}this.options.selector?(this._options=d.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()
};
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.getOptions=function(e){e=d.extend({},this.getDefaults(),this.$element.data(),e);
if(e.delay&&typeof e.delay=="number"){e.delay={show:e.delay,hide:e.delay}
}return e
};
c.prototype.getDelegateOptions=function(){var e={};
var f=this.getDefaults();
this._options&&d.each(this._options,function(g,h){if(f[g]!=h){e[g]=h
}});
return e
};
c.prototype.enter=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(e&&e.$tip&&e.$tip.is(":visible")){e.hoverState="in";
return
}if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}clearTimeout(e.timeout);
e.hoverState="in";
if(!e.options.delay||!e.options.delay.show){return e.show()
}e.timeout=setTimeout(function(){if(e.hoverState=="in"){e.show()
}},e.options.delay.show)
};
c.prototype.leave=function(f){var e=f instanceof this.constructor?f:d(f.currentTarget).data("bs."+this.type);
if(!e){e=new this.constructor(f.currentTarget,this.getDelegateOptions());
d(f.currentTarget).data("bs."+this.type,e)
}clearTimeout(e.timeout);
e.hoverState="out";
if(!e.options.delay||!e.options.delay.hide){return e.hide()
}e.timeout=setTimeout(function(){if(e.hoverState=="out"){e.hide()
}},e.options.delay.hide)
};
c.prototype.show=function(){var q=d.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(q);
var r=d.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(q.isDefaultPrevented()||!r){return
}var p=this;
var n=this.tip();
var j=this.getUID(this.type);
this.setContent();
n.attr("id",j);
this.$element.attr("aria-describedby",j);
if(this.options.animation){n.addClass("fade")
}var m=typeof this.options.placement=="function"?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement;
var u=/\s?auto?\s?/i;
var v=u.test(m);
if(v){m=m.replace(u,"")||"top"
}n.detach().css({top:0,left:0,display:"block"}).addClass(m).data("bs."+this.type,this);
this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);
var s=this.getPosition();
var f=n[0].offsetWidth;
var o=n[0].offsetHeight;
if(v){var l=m;
var t=this.options.container?d(this.options.container):this.$element.parent();
var h=this.getPosition(t);
m=m=="bottom"&&s.bottom+o>h.bottom?"top":m=="top"&&s.top-o<h.top?"bottom":m=="right"&&s.right+f>h.width?"left":m=="left"&&s.left-f<h.left?"right":m;
n.removeClass(l).addClass(m)
}var k=this.getCalculatedOffset(m,s,f,o);
this.applyPlacement(k,m);
var g=function(){var e=p.hoverState;
p.$element.trigger("shown.bs."+p.type);
p.hoverState=null;
if(e=="out"){p.leave(p)
}};
d.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",g).emulateTransitionEnd(c.TRANSITION_DURATION):g()
}};
c.prototype.applyPlacement=function(k,l){var m=this.tip();
var g=m[0].offsetWidth;
var r=m[0].offsetHeight;
var f=parseInt(m.css("margin-top"),10);
var j=parseInt(m.css("margin-left"),10);
if(isNaN(f)){f=0
}if(isNaN(j)){j=0
}k.top=k.top+f;
k.left=k.left+j;
d.offset.setOffset(m[0],d.extend({using:function(s){m.css({top:Math.round(s.top),left:Math.round(s.left)})
}},k),0);
m.addClass("in");
var e=m[0].offsetWidth;
var n=m[0].offsetHeight;
if(l=="top"&&n!=r){k.top=k.top+r-n
}var q=this.getViewportAdjustedDelta(l,k,e,n);
if(q.left){k.left+=q.left
}else{k.top+=q.top
}var o=/top|bottom/.test(l);
var h=o?q.left*2-g+e:q.top*2-r+n;
var p=o?"offsetWidth":"offsetHeight";
m.offset(k);
this.replaceArrow(h,m[0][p],o)
};
c.prototype.replaceArrow=function(g,e,f){this.arrow().css(f?"left":"top",50*(1-g/e)+"%").css(f?"top":"left","")
};
c.prototype.setContent=function(){var f=this.tip();
var e=this.getTitle();
f.find(".tooltip-inner")[this.options.html?"html":"text"](e);
f.removeClass("fade in top bottom left right")
};
c.prototype.hide=function(k){var g=this;
var j=this.tip();
var h=d.Event("hide.bs."+this.type);
function f(){if(g.hoverState!="in"){j.detach()
}g.$element.removeAttr("aria-describedby").trigger("hidden.bs."+g.type);
k&&k()
}this.$element.trigger(h);
if(h.isDefaultPrevented()){return
}j.removeClass("in");
d.support.transition&&this.$tip.hasClass("fade")?j.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f();
this.hoverState=null;
return this
};
c.prototype.fixTitle=function(){var e=this.$element;
if(e.attr("title")||typeof(e.attr("data-original-title"))!="string"){e.attr("data-original-title",e.attr("title")||"").attr("title","")
}};
c.prototype.hasContent=function(){return this.getTitle()
};
c.prototype.getPosition=function(g){g=g||this.$element;
var j=g[0];
var f=j.tagName=="BODY";
var h=j.getBoundingClientRect();
if(h.width==null){h=d.extend({},h,{width:h.right-h.left,height:h.bottom-h.top})
}var l=f?{top:0,left:0}:g.offset();
var e={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:g.scrollTop()};
var k=f?{width:d(window).width(),height:d(window).height()}:null;
return d.extend({},h,e,k,l)
};
c.prototype.getCalculatedOffset=function(e,h,f,g){return e=="bottom"?{top:h.top+h.height,left:h.left+h.width/2-f/2}:e=="top"?{top:h.top-g,left:h.left+h.width/2-f/2}:e=="left"?{top:h.top+h.height/2-g/2,left:h.left-f}:{top:h.top+h.height/2-g/2,left:h.left+h.width}
};
c.prototype.getViewportAdjustedDelta=function(h,l,e,k){var n={top:0,left:0};
if(!this.$viewport){return n
}var g=this.options.viewport&&this.options.viewport.padding||0;
var m=this.getPosition(this.$viewport);
if(/right|left/.test(h)){var o=l.top-g-m.scroll;
var j=l.top+g-m.scroll+k;
if(o<m.top){n.top=m.top-o
}else{if(j>m.top+m.height){n.top=m.top+m.height-j
}}}else{var p=l.left-g;
var f=l.left+g+e;
if(p<m.left){n.left=m.left-p
}else{if(f>m.width){n.left=m.left+m.width-f
}}}return n
};
c.prototype.getTitle=function(){var g;
var e=this.$element;
var f=this.options;
g=e.attr("data-original-title")||(typeof f.title=="function"?f.title.call(e[0]):f.title);
return g
};
c.prototype.getUID=function(e){do{e+=~~(Math.random()*1000000)
}while(document.getElementById(e));
return e
};
c.prototype.tip=function(){return(this.$tip=this.$tip||d(this.options.template))
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))
};
c.prototype.enable=function(){this.enabled=true
};
c.prototype.disable=function(){this.enabled=false
};
c.prototype.toggleEnabled=function(){this.enabled=!this.enabled
};
c.prototype.toggle=function(g){var f=this;
if(g){f=d(g.currentTarget).data("bs."+this.type);
if(!f){f=new this.constructor(g.currentTarget,this.getDelegateOptions());
d(g.currentTarget).data("bs."+this.type,f)
}}f.tip().hasClass("in")?f.leave(f):f.enter(f)
};
c.prototype.destroy=function(){var e=this;
clearTimeout(this.timeout);
this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type)
})
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.tooltip");
var f=typeof e=="object"&&e;
if(!g&&e=="destroy"){return
}if(!g){h.data("bs.tooltip",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.tooltip;
d.fn.tooltip=b;
d.fn.tooltip.Constructor=c;
d.fn.tooltip.noConflict=function(){d.fn.tooltip=a;
return this
}
}(jQuery);
+function(d){var c=function(f,e){this.init("popover",f,e)
};
if(!d.fn.tooltip){throw new Error("Popover requires tooltip.js")
}c.VERSION="3.3.2";
c.DEFAULTS=d.extend({},d.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
c.prototype=d.extend({},d.fn.tooltip.Constructor.prototype);
c.prototype.constructor=c;
c.prototype.getDefaults=function(){return c.DEFAULTS
};
c.prototype.setContent=function(){var g=this.tip();
var f=this.getTitle();
var e=this.getContent();
g.find(".popover-title")[this.options.html?"html":"text"](f);
g.find(".popover-content").children().detach().end()[this.options.html?(typeof e=="string"?"html":"append"):"text"](e);
g.removeClass("fade top bottom left right in");
if(!g.find(".popover-title").html()){g.find(".popover-title").hide()
}};
c.prototype.hasContent=function(){return this.getTitle()||this.getContent()
};
c.prototype.getContent=function(){var e=this.$element;
var f=this.options;
return e.attr("data-content")||(typeof f.content=="function"?f.content.call(e[0]):f.content)
};
c.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))
};
c.prototype.tip=function(){if(!this.$tip){this.$tip=d(this.options.template)
}return this.$tip
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.popover");
var f=typeof e=="object"&&e;
if(!g&&e=="destroy"){return
}if(!g){h.data("bs.popover",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.popover;
d.fn.popover=b;
d.fn.popover.Constructor=c;
d.fn.popover.noConflict=function(){d.fn.popover=a;
return this
}
}(jQuery);
+function(d){function c(f,e){var g=d.proxy(this.process,this);
this.$body=d("body");
this.$scrollElement=d(f).is("body")?d(window):d(f);
this.options=d.extend({},c.DEFAULTS,e);
this.selector=(this.options.target||"")+" .nav li > a";
this.offsets=[];
this.targets=[];
this.activeTarget=null;
this.scrollHeight=0;
this.$scrollElement.on("scroll.bs.scrollspy",g);
this.refresh();
this.process()
}c.VERSION="3.3.2";
c.DEFAULTS={offset:10};
c.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
};
c.prototype.refresh=function(){var e="offset";
var g=0;
if(!d.isWindow(this.$scrollElement[0])){e="position";
g=this.$scrollElement.scrollTop()
}this.offsets=[];
this.targets=[];
this.scrollHeight=this.getScrollHeight();
var f=this;
this.$body.find(this.selector).map(function(){var j=d(this);
var h=j.data("target")||j.attr("href");
var k=/^#./.test(h)&&d(h);
return(k&&k.length&&k.is(":visible")&&[[k[e]().top+g,h]])||null
}).sort(function(j,h){return j[0]-h[0]
}).each(function(){f.offsets.push(this[0]);
f.targets.push(this[1])
})
};
c.prototype.process=function(){var k=this.$scrollElement.scrollTop()+this.options.offset;
var g=this.getScrollHeight();
var j=this.options.offset+g-this.$scrollElement.height();
var h=this.offsets;
var e=this.targets;
var l=this.activeTarget;
var f;
if(this.scrollHeight!=g){this.refresh()
}if(k>=j){return l!=(f=e[e.length-1])&&this.activate(f)
}if(l&&k<h[0]){this.activeTarget=null;
return this.clear()
}for(f=h.length;
f--;
){l!=e[f]&&k>=h[f]&&(!h[f+1]||k<=h[f+1])&&this.activate(e[f])
}};
c.prototype.activate=function(g){this.activeTarget=g;
this.clear();
var e=this.selector+'[data-target="'+g+'"],'+this.selector+'[href="'+g+'"]';
var f=d(e).parents("li").addClass("active");
if(f.parent(".dropdown-menu").length){f=f.closest("li.dropdown").addClass("active")
}f.trigger("activate.bs.scrollspy")
};
c.prototype.clear=function(){d(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.scrollspy");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.scrollspy",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.scrollspy;
d.fn.scrollspy=b;
d.fn.scrollspy.Constructor=c;
d.fn.scrollspy.noConflict=function(){d.fn.scrollspy=a;
return this
};
d(window).on("load.bs.scrollspy.data-api",function(){d('[data-spy="scroll"]').each(function(){var e=d(this);
b.call(e,e.data())
})
})
}(jQuery);
+function(d){var b=function(f){this.element=d(f)
};
b.VERSION="3.3.2";
b.TRANSITION_DURATION=150;
b.prototype.show=function(){var m=this.element;
var h=m.closest("ul:not(.dropdown-menu)");
var g=m.data("target");
if(!g){g=m.attr("href");
g=g&&g.replace(/.*(?=#[^\s]*$)/,"")
}if(m.parent("li").hasClass("active")){return
}var k=h.find(".active:last a");
var l=d.Event("hide.bs.tab",{relatedTarget:m[0]});
var j=d.Event("show.bs.tab",{relatedTarget:k[0]});
k.trigger(l);
m.trigger(j);
if(j.isDefaultPrevented()||l.isDefaultPrevented()){return
}var f=d(g);
this.activate(m.closest("li"),h);
this.activate(f,f.parent(),function(){k.trigger({type:"hidden.bs.tab",relatedTarget:m[0]});
m.trigger({type:"shown.bs.tab",relatedTarget:k[0]})
})
};
b.prototype.activate=function(h,g,l){var f=g.find("> .active");
var k=l&&d.support.transition&&((f.length&&f.hasClass("fade"))||!!g.find("> .fade").length);
function j(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);
h.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);
if(k){h[0].offsetWidth;
h.addClass("in")
}else{h.removeClass("fade")
}if(h.parent(".dropdown-menu")){h.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)
}l&&l()
}f.length&&k?f.one("bsTransitionEnd",j).emulateTransitionEnd(b.TRANSITION_DURATION):j();
f.removeClass("in")
};
function c(f){return this.each(function(){var h=d(this);
var g=h.data("bs.tab");
if(!g){h.data("bs.tab",(g=new b(this)))
}if(typeof f=="string"){g[f]()
}})
}var a=d.fn.tab;
d.fn.tab=c;
d.fn.tab.Constructor=b;
d.fn.tab.noConflict=function(){d.fn.tab=a;
return this
};
var e=function(f){f.preventDefault();
c.call(d(this),"show")
};
d(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)
}(jQuery);
+function(d){var c=function(f,e){this.options=d.extend({},c.DEFAULTS,e);
this.$target=d(this.options.target).on("scroll.bs.affix.data-api",d.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",d.proxy(this.checkPositionWithEventLoop,this));
this.$element=d(f);
this.affixed=this.unpin=this.pinnedOffset=null;
this.checkPosition()
};
c.VERSION="3.3.2";
c.RESET="affix affix-top affix-bottom";
c.DEFAULTS={offset:0,target:window};
c.prototype.getState=function(o,n,f,g){var e=this.$target.scrollTop();
var j=this.$element.offset();
var k=this.$target.height();
if(f!=null&&this.affixed=="top"){return e<f?"top":false
}if(this.affixed=="bottom"){if(f!=null){return(e+this.unpin<=j.top)?false:"bottom"
}return(e+k<=o-g)?false:"bottom"
}var h=this.affixed==null;
var m=h?e:j.top;
var l=h?k:n;
if(f!=null&&e<=f){return"top"
}if(g!=null&&(m+l>=o-g)){return"bottom"
}return false
};
c.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(c.RESET).addClass("affix");
var f=this.$target.scrollTop();
var e=this.$element.offset();
return(this.pinnedOffset=e.top-f)
};
c.prototype.checkPositionWithEventLoop=function(){setTimeout(d.proxy(this.checkPosition,this),1)
};
c.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return
}var f=this.$element.height();
var m=this.options.offset;
var k=m.top;
var h=m.bottom;
var j=d("body").height();
if(typeof m!="object"){h=k=m
}if(typeof k=="function"){k=m.top(this.$element)
}if(typeof h=="function"){h=m.bottom(this.$element)
}var g=this.getState(j,f,k,h);
if(this.affixed!=g){if(this.unpin!=null){this.$element.css("top","")
}var n="affix"+(g?"-"+g:"");
var l=d.Event(n+".bs.affix");
this.$element.trigger(l);
if(l.isDefaultPrevented()){return
}this.affixed=g;
this.unpin=g=="bottom"?this.getPinnedOffset():null;
this.$element.removeClass(c.RESET).addClass(n).trigger(n.replace("affix","affixed")+".bs.affix")
}if(g=="bottom"){this.$element.offset({top:j-f-h})
}};
function b(e){return this.each(function(){var h=d(this);
var g=h.data("bs.affix");
var f=typeof e=="object"&&e;
if(!g){h.data("bs.affix",(g=new c(this,f)))
}if(typeof e=="string"){g[e]()
}})
}var a=d.fn.affix;
d.fn.affix=b;
d.fn.affix.Constructor=c;
d.fn.affix.noConflict=function(){d.fn.affix=a;
return this
};
d(window).on("load",function(){d('[data-spy="affix"]').each(function(){var f=d(this);
var e=f.data();
e.offset=e.offset||{};
if(e.offsetBottom!=null){e.offset.bottom=e.offsetBottom
}if(e.offsetTop!=null){e.offset.top=e.offsetTop
}b.call(f,e)
})
})
}(jQuery);
(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"undefined"!==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)
})(function(b){function d(e){return !e.nodeName||-1!==b.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])
}function a(e){return b.isFunction(e)||b.isPlainObject(e)?e:{top:e,left:e}
}var c=b.scrollTo=function(f,g,e){return b(window).scrollTo(f,g,e)
};
c.defaults={axis:"xy",duration:0,limit:!0};
b.fn.scrollTo=function(f,h,e){"object"===typeof h&&(e=h,h=0);
"function"===typeof e&&(e={onAfter:e});
"max"===f&&(f=9000000000);
e=b.extend({},c.defaults,e);
h=h||e.duration;
var g=e.queue&&1<e.axis.length;
g&&(h/=2);
e.offset=a(e.offset);
e.over=a(e.over);
return this.each(function(){function n(l){var q=b.extend({},e,{queue:!0,duration:h,complete:l&&function(){l.call(u,w,e)
}});
p.animate(s,q)
}if(null!==f){var j=d(this),u=j?this.contentWindow||window:this,p=b(u),w=f,s={},o;
switch(typeof w){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(w)){w=a(w);
break
}w=j?b(w):b(w,u);
if(!w.length){return
}case"object":if(w.is||w.style){o=(w=b(w)).offset()
}}var m=b.isFunction(e.offset)&&e.offset(u,w)||e.offset;
b.each(e.axis.split(""),function(l,x){var t="x"===x?"Left":"Top",k=t.toLowerCase(),r="scroll"+t,q=p[r](),v=c.max(u,x);
o?(s[r]=o[k]+(j?0:q-p.offset()[k]),e.margin&&(s[r]-=parseInt(w.css("margin"+t),10)||0,s[r]-=parseInt(w.css("border"+t+"Width"),10)||0),s[r]+=m[k]||0,e.over[k]&&(s[r]+=w["x"===x?"width":"height"]()*e.over[k])):(t=w[k],s[r]=t.slice&&"%"===t.slice(-1)?parseFloat(t)/100*v:t);
e.limit&&/^\d+$/.test(s[r])&&(s[r]=0>=s[r]?0:Math.min(s[r],v));
!l&&1<e.axis.length&&(q===s[r]?s={}:g&&(n(e.onAfterFirst),s={}))
});
n(e.onAfter)
}})
};
c.max=function(g,n){var e="x"===n?"Width":"Height",m="scroll"+e;
if(!d(g)){return g[m]-b(g)[e.toLowerCase()]()
}var e="client"+e,j=g.ownerDocument||g.document,f=j.documentElement,j=j.body;
return Math.max(f[m],j[m])-Math.min(f[e],j[e])
};
b.Tween.propHooks.scrollLeft=b.Tween.propHooks.scrollTop={get:function(e){return b(e.elem)[e.prop]()
},set:function(f){var g=this.get(f);
if(f.options.interrupt&&f._last&&f._last!==g){return b(f.elem).stop()
}var e=Math.round(f.now);
g!==e&&(b(f.elem)[f.prop](e),f._last=this.get(f))
}};
return c
});
if(typeof(com)=="undefined"){com={}
}if(typeof(com.salesforce)=="undefined"){com.salesforce={}
}if(typeof(com.salesforce.thirdparty)=="undefined"){com.salesforce.thirdparty={}
}com.salesforce.thirdparty.OpinionLab=(function($){var _sp="%3A\\/\\/",_rp="%3A//",_poE=0,_poX=0,_sH=screen.height,_d=document,_w=window,_ht=escape(_w.location.href),_hr=_d.referrer,_tm=(new Date()).getTime(),_kp=0,_sW=screen.width;
function _fC(_u){_aT=_sp+",\\/,\\.,-,_,"+_rp+",%2F,%2E,%2D,%5F";
_aA=_aT.split(",");
for(i=0;
i<5;
i++){eval("_u=_u.replace(/"+_aA[i]+"/g,_aA[i+5])")
}return _u
}function O_LC(){_w.open("https://secure.opinionlab.com/ccc01/comment_card.asp?time1="+_tm+"&time2="+(new Date()).getTime()+"&prev="+_fC(escape(_hr))+"&referer="+_fC(_ht)+"&height="+_sH+"&width="+_sW+"&custom_var="+(typeof(custom_var)=="undefined"?"":custom_var),"comments","width=535,height=192,screenX="+((_sW-535)/2)+",screenY="+((_sH-192)/2)+",top="+((_sH-192)/2)+",left="+((_sW-535)/2)+",resizable=yes,copyhistory=yes,scrollbars=no")
}function _fPe(){if(Math.random()>=1-_poE){O_LC();
_poX=0
}}function _fPx(){if(Math.random()>=1-_poX){O_LC()
}}window.onunload=_fPx;
function O_GoT(_p){_d.write("<a href='javascript:O_LC()'>"+_p+"</a>");
_fPe()
}return{init:function(){$("#opinionlab-trigger, #yt-feedback, .opinionlab-trigger").removeClass("disguised").bind("click",function(){O_LC()
})
},launchCard:function(){O_LC()
}}
})(jQuery);
com.salesforce.thirdparty.OpinionLab.init();
(function(){function ya(a){switch(a){case"'":return"\x26#39;";
case"\x26":return"\x26amp;";
case"\x3c":return"\x26lt;";
case"\x3e":return"\x26gt;";
case'"':return"\x26quot;";
case"\u00a9":return"\x26copy;";
case"\u2028":return"\x3cbr\x3e";
case"\u2029":return"\x3cp\x3e";
default:return a
}}function l(){}function s(){}function ia(a){l.prototype.init.call(this,a,l.TYPE.STANDARD)
}function ja(a){k[a]||(k[a]=new ia(a));
return k[a]
}function R(a,b){l.prototype.init.call(this,b+"_"+a,l.TYPE.AGENT)
}function K(a,b){var c=b+"_"+a;
if(!k[c]){var e=new R(a,b),d;
k[a]&&(d=k[a],d.endpoint&&e.setEndpoint(d.endpoint),d.prechat&&e.setPrechat(d.prechat),d.language&&e.setLanguage(d.language),e.setOnlineState(d.onlineState));
k[c]=e
}return k[c]
}function S(a,b){s.prototype.init.call(this,a,b)
}function T(a,b){s.prototype.init.call(this,a,b)
}function n(a){l.prototype.init.call(this,a,l.TYPE.INVITE);
this.active=!1;
this.filterLogic=null;
this.rules={};
this.autoRejectTimeout=this.inviteTimeout=this.inviteDelay=this.ruleTree=null
}function t(a){k[a]||(k[a]=new n(a));
return k[a]
}function z(a,b,c,e,d,g,B,x){s.prototype.init.call(this,a,b);
this.hasInviteAfterAccept=g;
this.hasInviteAfterReject=B;
this.rejectTime=x;
null!==f.getCssAnimation(b)||"Custom"==c?this.renderer=new n.RENDERER[c].renderClass(a,b,n.START_POSITION[e],n.END_POSITION[d]):this.renderer=new n.RENDERER.Appear.renderClass(a,b,n.START_POSITION[e],n.END_POSITION[d])
}function C(a){return t(a)?t(a).getTracker():null
}function r(){}function I(a,b,c,e){r.prototype.init.call(this,a,b,c,e)
}function J(a,b,c,e){r.prototype.init.call(this,a,b,null,e)
}function L(a,b,c,e){r.prototype.init.call(this,a,b,null,e)
}function D(a,b,c,e){D.prototype.init.call(this,a,b,null,null)
}function h(){}function M(a,b,c,e,d){h.prototype.init.call(this,a,b,c,e,d)
}function N(a,b,c,e,d){h.prototype.init.call(this,a,b,c,e,d)
}function U(a,b,c,e,d){h.prototype.init.call(this,a,b,c,e,d)
}function E(a){ka++;
if(1000<ka){throw Error("Error processing rule filter logic, preventing recursion")
}for(var b=0,c=0,e=0;
e<a.length;
e++){"("==a.charAt(e)?c++:")"==a.charAt(e)&&c--,","==a.charAt(e)&&1==c&&(b=e)
}if(0==a.indexOf("AND(")){return c=E(a.substring(4,b)),a=E(a.substring(b+1,a.length-1)),new V(c,a)
}if(0==a.indexOf("OR(")){return c=E(a.substring(3,b)),a=E(a.substring(b+1,a.length-1)),new W(c,a)
}if(0==a.indexOf("NOT(")){return c=E(a.substring(4,a.length-1)),new X(c)
}if(!isNaN(parseInt(a,10))){return new Y(parseInt(a,10))
}throw Error("Encountered unexpected character in filter logic")
}function y(){}function Y(a){this.ruleId=a;
y.prototype.init.call(this,null,null)
}function V(a,b){y.prototype.init.call(this,a,b)
}function W(a,b){y.prototype.init.call(this,a,b)
}function X(a){y.prototype.init.call(this,a,null)
}function za(a,b,c,e){var d=document.createElement("div");
d.id="liveagent_invite_button_"+a;
var g=document.createElement("img");
g.style.cursor="pointer";
g.style.position="absolute";
g.style.right="-20px";
g.style.top="-20px";
g.src=f.addPrefixToURL(m.contentServerUrl,m.urlPrefix,!0)+"/images/x.png";
f.addEventListener(g,"click",function(){p.rejectChat(a)
});
d.appendChild(g);
g=document.createElement("img");
g.style.cursor="pointer";
g.style.clear="right";
g.src=b;
g.width=c;
g.height=e;
f.addEventListener(g,"click",function(){p.startChat(a)
});
d.appendChild(g);
document.body.appendChild(d);
return d
}function la(a,b,c){"undefined"==typeof c&&(c=!0);
this.getLabel=function(){return a
};
this.getValue=function(){return b
};
this.getDisplayToAgent=function(){return c
};
var e=new Z;
this.getMapper=function(){return e
};
this.doKnowledgeSearch=!1;
this.getDoKnowledgeSearch=function(){return this.doKnowledgeSearch
};
this.setDoKnowledgeSearch=function(){this.doKnowledgeSearch=!0
}
}function Z(){var a=[],b=[];
this.getEntityMaps=function(){return a
};
this.getTranscriptFields=function(){return b
}
}function ma(a,b,c,e,d){this.getEntityName=function(){return a
};
this.getFieldName=function(){return b
};
this.getFastFill=function(){return c
};
this.getAutoQuery=function(){return e
};
this.getExactMatch=function(){return d
}
}function na(a){this.saveToTranscript="";
this.showOnCreate=!1;
this.linkToEntityField=this.linkToEntityName="";
var b=new oa;
this.getEntityName=function(){return a
};
this.getSaveTranscript=function(){return this.saveTranscript
};
this.getShowOnCreate=function(){return this.showOnCreate
};
this.getLinkToEntityName=function(){return this.linkToEntityName
};
this.getLinkToEntityField=function(){return this.linkToEntityField
};
this.getEntityMapper=function(){return b
};
this.setSaveTranscript=function(a){this.saveTranscript=a
};
this.setShowOnCreate=function(a){this.showOnCreate=a
};
this.setLinkToEntityName=function(a){this.linkToEntityName=a
};
this.setLinkToEntityField=function(a){this.linkToEntityField=a
}
}function oa(){var a=[];
this.getEntityFieldsMaps=function(){return a
}
}function pa(a,b,c,e,d){this.getFieldName=function(){return a
};
this.getLabel=function(){return b
};
this.getDoFind=function(){return c
};
this.getIsExactMatch=function(){return e
};
this.getDoCreate=function(){return d
}
}function O(){if(!qa){qa=!0;
f.log("DOM is ready. Setting up environment.");
null==u.getOref()&&u.setOref(document.referrer);
null==u.getVisitCount()&&u.setVisitCount(1);
if(window._laq){for(var a=0;
a<window._laq.length;
a++){window._laq[a].call(window)
}}q.connection.setCallback("liveagent._.handlePing");
ra()
}}function ra(){var a=[],b={};
$&&(b.chatted=1);
v?(b.sid=v,f.log("Reusing existing session.")):(a.push(new q.Noun("VisitorId")),f.log("Requesting new session."));
a.push(new q.Noun("Settings",{buttonIds:"["+sa()+"]",updateBreadcrumb:1,urlPrefix:m.urlPrefix}));
q.connection.send(a,b)
}function ta(a,b){b.endpointUrl&&a.setEndpoint(b.endpointUrl);
b.prechatUrl&&a.setPrechat(b.prechatUrl);
b.language&&a.setLanguage(b.language);
a.setOnlineState(b.isAvailable)
}function Aa(){if(q.connection.isRunning()){if(null==v){ra()
}else{f.log("Pinging server to keep presence");
P=null;
var a={};
a.sid=v;
$&&(a.chatted=1);
a.r=(new Date).getMilliseconds();
var b=[new q.Noun("Availability",{ids:"["+sa()+"]"})];
q.connection.send(b,a)
}}}function aa(){f.log("Disconnecting from Live Agent");
q.connection.setIsRunning(!1);
for(var a in k){k.hasOwnProperty(a)&&k[a].setOnlineState(!1)
}}function sa(){var a=[],b={},c;
for(c in k){k.hasOwnProperty(c)&&k[c].getType()==l.TYPE.STANDARD&&(b[c]=k[c])
}for(var e in b){a.push(e)
}var b={},d;
for(d in k){k.hasOwnProperty(d)&&k[d].getType()==l.TYPE.AGENT&&(b[d]=k[d])
}for(e in b){a.push(e)
}d={};
for(var g in k){k.hasOwnProperty(g)&&k[g].getType()==l.TYPE.INVITE&&(d[g]=k[g])
}for(e in d){a.push(e)
}e="";
for(g=0;
g<a.length;
g++){e+=a[g],g<a.length-1&&(e+=",")
}return e
}function ua(a,b,c,e){document.cookie="liveagent_chatted\x3d1;path\x3d/;";
$=!0;
var d;
d="deployment_id\x3d"+m.deploymentId;
d=d+"\x26org_id\x3d"+m.orgId;
d+="\x26button_id\x3d";
d+=a;
c&&(d+="\x26agent_id\x3d",d+=c);
e&&(d+="\x26do_fallback\x3d1");
d+="\x26session_id\x3d";
d+=v;
a=c?k[c+"_"+a].getEndpoint(d):k[a].getEndpoint(d);
c="height\x3d"+m.chatWindowHeight;
c=c+",width\x3d"+m.chatWindowWidth;
c+=",menubar\x3dno";
c+=",toolbar\x3dno";
c+=",location\x3dno";
c+=",personalbar\x3dno";
window.open("",b,c);
Ba(b,a)
}function Ba(a,b){function c(a,b,c){var d=document.createElement("input");
d.name=b;
d.value=c;
a.appendChild(d)
}var e=u.getVisitCount();
null==e&&(e="0");
var d=document.createElement("form");
d.style.display="none";
c(d,"deploymentId",m.deploymentId);
c(d,"orgId",m.orgId);
c(d,"vc",e);
c(d,"sid",v);
c(d,"ptid",u.getPermanentId());
c(d,"det",f.jsonEncode(va));
c(d,"oref",u.getOref());
c(d,"pages",f.jsonEncode(A.getPages()));
c(d,"sessionStart",(new Date).getTime()-A.getSessionStart());
c(d,"ent",f.jsonEncode(wa));
ba&&c(d,"visitorName",ba);
d.method="POST";
d.action=b;
d.target=a;
document.body.appendChild(d);
d.submit()
}function ca(a){a?f.log("Server Warning: "+a):f.log("Server sent an anoymous warning.")
}function xa(a){a?f.log("Server Error: "+a):f.log("Server responded with an error.");
aa()
}if(!window.liveAgentDeployment){window.liveAgentDeployment=!0;
var p={};
window.liveagent&&(p=window.liveagent);
window.liveagent=p;
var f={getCookie:function(a){var b=document.cookie,c=b.indexOf(a+"\x3d");
if(-1==c){return null
}c+=(a+"\x3d").length;
a=b.indexOf(";",c);
-1==a&&(a=b.length);
return b.substring(c,a)
},setCookie:function(a,b,c){a=a+"\x3d"+b+";";
c&&(c=new Date,c.setFullYear(c.getFullYear()+10),a+="expires\x3d"+c.toGMTString()+";");
document.cookie=a+"path\x3d/;"
},addEventListener:function(a,b,c){if(a.addEventListener){a.addEventListener(b,c,!1)
}else{if(a.attachEvent){a.attachEvent("on"+b,c,!1)
}else{throw Error("Could not add event listener")
}}},log:function(a){Q&&window.console&&window.console.log&&window.console.log("LIVE AGENT: "+a)
},logGroupStart:function(a){Q&&window.console&&(window.console.group?window.console.groupCollapsed("LIVE AGENT: "+a):f.log(a))
},logGroupEnd:function(){Q&&window.console&&window.console.group&&window.console.groupEnd()
},getLanguage:function(){return"undefined"!=typeof window.navigator.language?window.navigator.language:"undefined"!=typeof window.navigator.userLanguage?window.navigator.userLanguage:""
},arrayHasItem:function(a,b){if(Array.prototype.indexOf){return -1<a.indexOf(b)
}for(var c=0;
c<a.length;
c++){if(a[c]==b){return !0
}}},jsonEncode:function(a,b,c){function e(a){g.lastIndex=0;
return g.test(a)?'"'+a.replace(g,function(a){var b=f[a];
return"string"===typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+a+'"'
}function d(a,b){var c,g,f,B,x=w,k,h=b[a];
h&&("object"===typeof h&&"function"===typeof h.toJSON)&&(h=h.toJSON(a));
"function"===typeof m&&(h=m.call(b,a,h));
switch(typeof h){case"string":return e(h);
case"number":return isFinite(h)?String(h):"null";
case"boolean":case"null":return String(h);
case"object":if(!h){return"null"
}w+=l;
k=[];
if("[object Array]"===Object.prototype.toString.apply(h)){B=h.length;
for(c=0;
c<B;
c+=1){k[c]=d(c,h)||"null"
}f=0===k.length?"[]":w?"[\n"+w+k.join(",\n"+w)+"\n"+x+"]":"["+k.join(",")+"]";
w=x;
return f
}if(m&&"object"===typeof m){B=m.length;
for(c=0;
c<B;
c+=1){"string"===typeof m[c]&&(g=m[c],(f=d(g,h))&&k.push(e(g)+(w?": ":":")+f))
}}else{for(g in h){Object.prototype.hasOwnProperty.call(Object(h),g)&&(f=d(g,h))&&k.push(e(g)+(w?": ":":")+f)
}}f=0===k.length?"{}":w?"{\n"+w+k.join(",\n"+w)+"\n"+x+"}":"{"+k.join(",")+"}";
w=x;
return f
}}if("undefined"!==typeof window.JSON){return window.JSON.stringify(a,b,c)
}if(void 0===a||null===a){return"null"
}var g=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},x,w="",l="",m=b;
if("number"===typeof c){for(x=0;
x<c;
x+=1){l+=" "
}}else{"string"===typeof c&&(l=c)
}if(b&&"function"!==typeof b&&("object"!==typeof b||"number"!==typeof b.length)){throw Error("Error during JSON.stringify")
}return d("",{"":a})
},jsonDecode:function(a){a=String(a);
if("undefined"!==typeof window.JSON){return window.JSON.parse(a)
}var b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
b.lastIndex=0;
b.test(a)&&(a=a.replace(b,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
}));
if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+a+")")
}throw Error("Error during JSON.parse")
},getCssAnimation:function(a){var b=["Webkit","Moz","O","ms","Khtml"];
if(void 0!==a.style.animationName){return""
}for(var c=0;
c<b.length;
c++){if(void 0!==a.style[b[c]+"AnimationName"]){return b[c].toLowerCase()
}}return null
},addPrefixToURL:function(a,b,c){if(!f.isEmpty(a)&&!f.isEmpty(b)&&0!==a.indexOf(b)){c&&(b=f.escapeToHtml(b));
var e=/(https?:\/\/)(.*)/i;
c=a.replace(e,"$1");
a=a.replace(e,"$2");
b=b.replace(e,"$2");
a=c+b+"/"+a
}return a
},getDomainFromUrl:function(a){if(f.isEmpty(a)){return""
}var b;
da||(da=document.createElement("a"));
b=da;
b.href=a;
a=a.match(/:(\d+)/g);
b=b.protocol+"//"+b.hostname||window.location.protocol+"//"+window.location.hostname;
return a?b+a[0]:b
},isEmpty:function(a){return null===a||void 0===a||""===a
},escapeToHtml:function(a){return null===a||void 0===a||""===a?"":a=a.replace(/[&<>"'\u00a9\u2028\u2029]/g,ya)
},isValidEntityId:function(a){return a&&"string"===typeof a&&(18===a.length||15===a.length)
},getKeyPrefix:function(a){return this.isValidEntityId(a)?a.substr(0,3):null
},isOrganizationId:function(a){return"00D"===this.getKeyPrefix(a)
},isDeploymentId:function(a){return"572"===this.getKeyPrefix(a)
}},da,u={getVisitCount:function(){var a=parseInt(f.getCookie("liveagent_vc"),10);
return isNaN(a)?null:a
},getOref:function(){return f.getCookie("liveagent_oref")
},getPermanentId:function(){var a=f.getCookie("liveagent_ptid");
return null!=a?a:""
},setVisitCount:function(a){f.setCookie("liveagent_vc",a,!0)
},setOref:function(a){return f.setCookie("liveagent_oref",a,!0)
},setPermanentId:function(a){f.setCookie("liveagent_ptid",a,!0)
}},A=new function(){function a(){return window.localStorage?window.localStorage:window.sessionStorage
}function b(){var a=document.createElement("div");
a.style.display="none";
document.body.appendChild(a);
a.id="liveagent_userdata_provider";
a.addBehavior("#default#userData");
a.load("liveagent");
return{getItem:function(b){return a.getAttribute(b)
},setItem:function(b,c){a.setAttribute(b,c);
a.save("liveagent")
},removeItem:function(b){a.removeAttribute(b);
a.save("liveagent")
}}
}function c(){var a={};
return{getItem:function(b){return a[b]
},setItem:function(b,c){a[b]=c
},removeItem:function(b){delete a[b]
}}
}function e(){g.setItem(d.SESSION_ID,v);
g.setItem(d.PAGE_COUNT,"0");
g.setItem(d.SESSION_START,(new Date).getTime().toString())
}var d={SESSION_ID:"liveAgentSid",PAGE_COUNT:"liveAgentPc",SESSION_START:"liveAgentStart",PAGE:"liveAgentPage_",PAGE_TIME:"liveAgentPageTime_"};
a.isSupported=function(){try{if(window.localStorage||window.sessionStorage){var a=window.localStorage?window.localStorage:window.sessionStorage;
a.setItem("liveAgentTestKey","1");
a.removeItem("liveAgentTestKey");
return !0
}return !1
}catch(b){return !1
}};
b.isSupported=function(){return document.createElement("div").addBehavior
};
var g;
g=a.isSupported()?a():b.isSupported()?b():c();
this.init=function(){if(g.getItem(d.SESSION_ID)){if(g.getItem(d.SESSION_ID)!=v){g.removeItem(d.SESSION_START);
for(var a=g.getItem(d.PAGE_COUNT),b=25>a?0:a-25;
b<a;
b++){g.removeItem(d.PAGE+b),g.removeItem(d.PAGE_TIME+b)
}e()
}}else{e()
}a=parseInt(g.getItem(d.PAGE_COUNT),10);
25<=a&&(g.removeItem(d.PAGE+(a-25)),g.removeItem(d.PAGE_TIME+(a-25)));
g.setItem(d.PAGE_COUNT,(a+1).toString());
g.setItem(d.PAGE+a.toString(),window.location.href);
g.setItem(d.PAGE_TIME+a.toString(),(new Date).getTime())
};
this.getPageCount=function(){return parseInt(g.getItem(d.PAGE_COUNT),10)
};
this.getSessionStart=function(){return g.getItem(d.SESSION_START)
};
this.getPages=function(){for(var a=[],b=this.getPageCount(),c=25>b?0:b-25;
c<b;
c++){a.unshift({location:g.getItem(d.PAGE+c.toString()),time:((new Date).getTime()-parseInt(g.getItem(d.PAGE_TIME+c.toString()),10)).toString()})
}return a
};
this.getCurrentPage=function(){return g.getItem(d.PAGE+(this.getPageCount()-1).toString())
};
this.clear=function(){g.clear()
}
};
l.TYPE={STANDARD:"STANDARD",INVITE:"INVITE",AGENT:"AGENT"};
l.EVENT={BUTTON_AVAILABLE:"BUTTON_AVAILABLE",BUTTON_UNAVAILABLE:"BUTTON_UNAVAILABLE",BUTTON_ACCEPTED:"BUTTON_ACCEPTED",BUTTON_REJECTED:"BUTTON_REJECTED"};
l.prototype.init=function(a,b){this.buttonId=a;
this.type=b;
this.onlineState=null;
this.trackers=[];
this.language=this.prechat=this.endpoint=null
};
l.prototype.getType=function(){return this.type
};
l.prototype.getOnlineState=function(){return this.onlineState
};
l.prototype.setOnlineState=function(a){this.onlineState=a;
for(var b=0;
b<this.trackers.length;
b++){this.trackers[b].setState(a)
}};
l.prototype.addTracker=function(a){this.trackers.push(a)
};
l.prototype.setPrechat=function(a){this.prechat=a
};
l.prototype.setEndpoint=function(a){this.endpoint=a
};
l.prototype.getEndpoint=function(a){function b(){var b=m.contentServerUrl,c=m.urlPrefix;
if(null==b){throw Error("You cannot call liveagent.startChat until the asynchronous call to liveagent.init has completed!")
}m.contentServerUrl=f.addPrefixToURL(b,c,!0);
b=this.endpoint;
b=!f.isEmpty(b)&&-1<f.getDomainFromUrl(b).indexOf("force")?f.addPrefixToURL(b,c,!0):b;
this.endpoint=b;
b=(null!=this.endpoint?this.endpoint:m.contentServerUrl+m.chatPage)+"?language\x3d"+(this.language?this.language:"");
f.isEmpty(c)||(b+="\x26proxy\x3d"+c+"\x26proxyKey\x3d"+m.prefixKey+"\x26org_id\x3d"+m.orgId+"\x26deployment_id\x3d"+m.deploymentId);
return b+="#"+a
}var c=null,c=null==this.prechat?b.call(this):this.prechat+"?endpoint\x3d"+encodeURIComponent(b.call(this));
return m.contentServerUrl+m.prechatHandler+"?endpoint\x3d"+encodeURIComponent(c)
};
l.prototype.setLanguage=function(a){this.language=a
};
l.prototype.startChat=function(a){return this.dispatchEvent(l.EVENT.BUTTON_ACCEPTED)?(ua(this.buttonId,a),!0):!1
};
l.prototype.rejectChat=function(){return this.dispatchEvent(l.EVENT.BUTTON_REJECTED)?!0:!1
};
l.prototype.dispatchEvent=function(a){return ea.hasOwnProperty(this.buttonId)?!1===ea[this.buttonId].call(this,a)?!1:!0:!0
};
s.prototype.init=function(a,b){this.buttonId=a;
this.element=b
};
s.prototype.getId=function(){return this.buttonId
};
s.prototype.setState=function(a){f.log("Setting state for button "+this.buttonId+" to "+(a?"online":"offline"));
return k[this.buttonId].dispatchEvent(a?l.EVENT.BUTTON_AVAILABLE:l.EVENT.BUTTON_UNAVAILABLE)?!0:!1
};
ia.prototype=new l;
R.prototype=new l;
R.prototype.startChat=function(a,b){if(this.dispatchEvent(l.EVENT.BUTTON_ACCEPTED)){var c=this.buttonId.split("_");
ua(c[1],a,c[0],b);
return !0
}return !1
};
S.prototype=new s;
S.prototype.setState=function(a){s.prototype.setState.call(this,a)&&(this.element.style.display=a?"":"none")
};
T.prototype=new s;
T.prototype.setState=function(a){s.prototype.setState.call(this,a)&&(this.element.style.display=a?"none":"")
};
var fa=!1,F=null,ga={},G={};
n.prototype=new l;
n.RENDERER={Slide:{renderClass:I},Fade:{renderClass:J},Appear:{renderClass:L},Custom:{renderClass:D}};
n.START_POSITION={TopLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:0,yPosition:-1,yOffset:-1},TopLeftTop:{xPercent:0,xPosition:0,xOffset:1,yPercent:0,yPosition:-1,yOffset:-1},Top:{xPercent:0.5,xPosition:-0.5,xOffset:0,yPercent:0,yPosition:-1,yOffset:-1},TopRightTop:{xPercent:1,xPosition:-1,xOffset:-1,yPercent:0,yPosition:-1,yOffset:-1},TopRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:0,yPosition:-1,yOffset:-1},TopRightRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:0,yPosition:0,yOffset:1},Right:{xPercent:1,xPosition:0,xOffset:1,yPercent:0.5,yPosition:-0.5,yOffset:0},BottomRightRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:1,yPosition:-1,yOffset:-1},BottomRight:{xPercent:1,xPosition:0,xOffset:1,yPercent:1,yPosition:0,yOffset:1},BottomRightBottom:{xPercent:1,xPosition:-1,xOffset:-1,yPercent:1,yPosition:0,yOffset:1},Bottom:{xPercent:0.5,xPosition:-0.5,xOffset:0,yPercent:1,yPosition:0,yOffset:1},BottomLeftBottom:{xPercent:0,xPosition:0,xOffset:1,yPercent:1,yPosition:0,yOffset:1},BottomLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:1,yPosition:0,yOffset:1},BottomLeftLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:1,yPosition:-1,yOffset:-1},Left:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:0.5,yPosition:-0.5,yOffset:0},TopLeftLeft:{xPercent:0,xPosition:-1,xOffset:-1,yPercent:0,yPosition:0,yOffset:1}};
n.END_POSITION={TopLeft:{xPercent:0,xOffset:1,yPercent:0,yOffset:1},Top:{xPercent:0.5,xOffset:0,yPercent:0,yOffset:1},TopRight:{xPercent:1,xOffset:-1,yPercent:0,yOffset:1},Left:{xPercent:0,xOffset:1,yPercent:0.5,yOffset:0},Center:{xPercent:0.5,xOffset:0,yPercent:0.5,yOffset:0},Right:{xPercent:1,xOffset:-1,yPercent:0.5,yOffset:0},BottomLeft:{xPercent:0,xOffset:1,yPercent:1,yOffset:-1},Bottom:{xPercent:0.5,xOffset:0,yPercent:1,yOffset:-1},BottomRight:{xPercent:1,xOffset:-1,yPercent:1,yOffset:-1}};
n.prototype.setRules=function(a,b){if(a&&b){for(var c in a){var e=a[c],d=null;
switch(e.type){case h.TYPE.NUMBER_OF_PAGE_VIEWS:d=new M(e.order,this.buttonId,A.getPageCount(),e.operator,parseInt(e.value,10));
break;
case h.TYPE.URL_MATCH:d=new M(e.order,this.buttonId,A.getCurrentPage(),e.operator,e.value);
break;
case h.TYPE.SECONDS_ON_PAGE:d=new N(e.order,this.buttonId,(new Date).getTime(),e.operator,1000*parseInt(e.value,10));
break;
case h.TYPE.SECONDS_ON_SITE:d=new N(e.order,this.buttonId,parseInt(A.getSessionStart(),10),e.operator,1000*parseInt(e.value,10));
break;
case h.TYPE.CUSTOM_VARIABLE:d=new U(e.order,this.buttonId,e.name,e.operator,e.value),G.hasOwnProperty(e.name)||(G[e.name]=[]),G[e.name].push(this.buttonId)
}null!=d&&this.addRule(d)
}this.filterLogic=b;
this.ruleTree=E(b)
}};
n.prototype.setOnlineState=function(a){!a&&null!==this.inviteTimeout&&(clearTimeout(this.inviteTimeout),this.inviteTimeout=null);
!a&&null!==this.autoRejectTimeout&&(clearTimeout(this.autoRejectTimeout),this.autoRejectTimeout=null);
l.prototype.setOnlineState.call(this,a)
};
n.prototype.isActive=function(){return this.active
};
n.prototype.setActive=function(a){this.active=a
};
n.prototype.addTracker=function(a){this.trackers=[];
l.prototype.addTracker.call(this,a)
};
n.prototype.getTracker=function(){if(1!=this.trackers.length){throw Error("InviteButtons should have exactly 1 tracker")
}return this.trackers[0]
};
n.prototype.startChat=function(a){return this.active&&l.prototype.startChat.call(this,a)?(this.getTracker().accept(),!0):!1
};
n.prototype.rejectChat=function(){return this.active&&l.prototype.rejectChat.call(this)?(this.getTracker().reject(),!0):!1
};
n.prototype.trigger=function(){if(f.getCookie("liveagent_invite_rejected_"+this.buttonId)){return !1
}var a=!0;
null!=this.ruleTree&&(f.logGroupStart("Invite "+this.buttonId+" Rule Evaluation"),f.log("Filter Logic: "+this.filterLogic),a=this.ruleTree.evaluate(this),f.logGroupEnd());
if(!a&&null!=this.inviteDelay){var b=this;
this.inviteTimeout=window.setTimeout(function(){b.setOnlineState(!0)
},this.inviteDelay);
this.inviteDelay=null
}return a
};
n.prototype.addRule=function(a){this.rules[a.getId()]=a
};
n.prototype.getRule=function(a){return this.rules[a]
};
n.prototype.getInviteDelay=function(){return this.inviteDelay
};
n.prototype.setInviteDelay=function(a){f.log("Setting invite delay to: "+a);
this.inviteDelay=a
};
n.prototype.setAutoRejectTimeout=function(a){this.autoRejectTimeout=a
};
z.prototype=new s;
z.prototype.setState=function(a){a&&!fa&&t(this.buttonId).trigger()&&s.prototype.setState.call(this,!0)?(fa=!0,F=this.buttonId,this.renderer.render()):!a&&(t(this.buttonId).isActive()&&s.prototype.setState.call(this,!1))&&(fa=!1,this.remove(!0))
};
z.prototype.renderFinish=function(){t(this.buttonId).setActive(!0);
if(-1!=this.rejectTime){var a=this.buttonId;
t(this.buttonId).setAutoRejectTimeout(window.setTimeout(function(){t(a).rejectChat()
},1000*this.rejectTime))
}this.renderer.renderFinish()
};
z.prototype.accept=function(){this.hasInviteAfterAccept||f.setCookie("liveagent_invite_rejected_"+this.buttonId,!0,!1);
this.remove(!1)
};
z.prototype.reject=function(){this.hasInviteAfterReject||f.setCookie("liveagent_invite_rejected_"+this.buttonId,!0,!1);
this.remove(!0)
};
z.prototype.remove=function(a){t(this.buttonId).setActive(!1);
this.renderer.remove(a)
};
z.prototype.removeFinish=function(){this.renderer.remove(!1)
};
r.prototype.init=function(a,b,c,e){window.innerWidth?this.realWidth=window.innerWidth:document.documentElement&&document.documentElement.clientWidth?this.realWidth=document.documentElement.clientWidth:document.body&&(this.realWidth=document.body.clientWidth);
window.innerHeight?this.realHeight=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?this.realHeight=document.documentElement.clientHeight:document.body&&(this.realHeight=document.body.clientHeight);
this.offset=25;
this.buttonId=a;
this.animationPrefix=f.getCssAnimation(b);
this.element=b;
this.element.style.position=null!==this.animationPrefix?"fixed":"absolute";
this.element.style.left="-1000px";
this.element.style.top="-1000px";
this.element.style.zIndex="10000";
this.element.style.display="";
this.width=this.element.offsetWidth;
this.height=this.element.offsetHeight;
this.startPosition=c;
this.endPosition=e
};
r.prototype.render=function(){this.element.style.display=""
};
r.prototype.renderFinish=function(){};
r.prototype.remove=function(a){this.element.style.left="-1000px";
this.element.style.top="-1000px"
};
r.prototype.addRenderListeners=function(){var a=this.buttonId,b="AnimationIteration",c="AnimationEnd";
""==this.animationPrefix?(b=b.toLowerCase(),c=c.toLowerCase()):(b=this.animationPrefix+b,c=this.animationPrefix+c);
f.addEventListener(this.element,b,function(){C(a).renderFinish()
});
f.addEventListener(this.element,c,function(){C(a).removeFinish()
})
};
I.prototype=new r;
I.prototype.render=function(){r.prototype.addRenderListeners.call(this);
var a=this.width*this.startPosition.xPosition+this.offset*this.startPosition.xOffset,b=this.height*this.startPosition.yPosition+this.offset*this.startPosition.yOffset,c=-1*this.width*this.endPosition.xPercent+this.offset*this.endPosition.xOffset,e=-1*this.height*this.endPosition.yPercent+this.offset*this.endPosition.yOffset,d="";
""!==this.animationPrefix&&(d="-"+this.animationPrefix+"-");
var g=document.createElement("style");
g.innerHTML="@"+d+"keyframes slide"+this.buttonId+"{from { margin-left: "+a+"px; margin-top: "+b+"px; left: "+100*this.startPosition.xPercent+"%; top: "+100*this.startPosition.yPercent+"%; }to { margin-left: "+c+"px; margin-top: "+e+"px; left: "+100*this.endPosition.xPercent+"%; top: "+100*this.endPosition.yPercent+"%; }}";
document.getElementsByTagName("head")[0].appendChild(g);
this.element.style[d+"animation-name"]="slide"+this.buttonId;
this.element.style[d+"animation-duration"]="1s";
this.element.style[d+"animation-iteration-count"]="2";
this.element.style[d+"animation-direction"]="alternate";
this.element.style[d+"animation-timing-function"]="ease-in-out";
this.element.style.setProperty(d+"animation-name","slide"+this.buttonId,"");
this.element.style.setProperty(d+"animation-duration","1s","");
this.element.style.setProperty(d+"animation-iteration-count","2","");
this.element.style.setProperty(d+"animation-direction","alternate","");
this.element.style.setProperty(d+"animation-timing-function","ease-in-out","");
r.prototype.render.call(this)
};
I.prototype.renderFinish=function(){var a="";
""!==this.animationPrefix&&(a="-"+this.animationPrefix+"-");
this.element.style[a+"animation-play-state"]="paused";
this.element.style.setProperty(a+"animation-play-state","paused","")
};
I.prototype.remove=function(a){var b="";
""!==this.animationPrefix&&(b="-"+this.animationPrefix+"-");
a?(this.element.style[b+"animation-play-state"]="running",this.element.style.setProperty(b+"animation-play-state","running","")):(this.element.style[b+"animation-name"]="",this.element.style.setProperty(b+"animation-name","",""),r.prototype.remove.call(this,a))
};
J.prototype=new r;
J.prototype.render=function(){r.prototype.addRenderListeners.call(this);
var a="";
""!==this.animationPrefix&&(a="-"+this.animationPrefix+"-");
var b=document.createElement("style");
b.innerHTML="@"+a+"keyframes fade"+this.buttonId+"{from { opacity: 0; }to { opacity: 1; }}";
document.getElementsByTagName("head")[0].appendChild(b);
this.element.style[a+"animation-name"]="fade"+this.buttonId;
this.element.style[a+"animation-duration"]="1s";
this.element.style[a+"animation-iteration-count"]="2";
this.element.style[a+"animation-direction"]="alternate";
this.element.style[a+"animation-timing-function"]="ease-in-out";
this.element.style.setProperty(a+"animation-name","fade"+this.buttonId,"");
this.element.style.setProperty(a+"animation-duration","1s","");
this.element.style.setProperty(a+"animation-iteration-count","2","");
this.element.style.setProperty(a+"animation-direction","alternate","");
this.element.style.setProperty(a+"animation-timing-function","ease-in-out","");
this.element.style.marginLeft=-1*this.width*this.endPosition.xPercent+this.offset*this.endPosition.xOffset+"px";
this.element.style.left=100*this.endPosition.xPercent+"%";
this.element.style.marginTop=-1*this.height*this.endPosition.yPercent+this.offset*this.endPosition.yOffset+"px";
this.element.style.top=100*this.endPosition.yPercent+"%";
r.prototype.render.call(this)
};
J.prototype.renderFinish=function(){var a="";
""!==this.animationPrefix&&(a="-"+this.animationPrefix+"-");
this.element.style[a+"animation-play-state"]="paused";
this.element.style.setProperty(a+"animation-play-state","paused","")
};
J.prototype.remove=function(a){var b="";
""!==this.animationPrefix&&(b="-"+this.animationPrefix+"-");
a?(this.element.style[b+"animation-play-state"]="running",this.element.style.setProperty(b+"animation-play-state","running",""),this.element.style.opacity=0):(this.element.style[b+"animation-name"]="",this.element.style.setProperty(b+"animation-name","",""),r.prototype.remove.call(this,a))
};
L.prototype=new r;
L.prototype.render=function(){this.element.style.marginLeft=-1*this.width*this.endPosition.xPercent+this.offset*this.endPosition.xOffset+"px";
this.element.style.left=100*this.endPosition.xPercent+"%";
this.element.style.marginTop=-1*this.height*this.endPosition.yPercent+this.offset*this.endPosition.yOffset+"px";
this.element.style.top=100*this.endPosition.yPercent+"%";
r.prototype.render.call(this);
C(this.buttonId).renderFinish()
};
L.prototype.remove=function(a){a?C(this.buttonId).removeFinish():r.prototype.remove.call(this,a)
};
D.prototype=new r;
D.prototype.render=function(){C(this.buttonId).renderFinish()
};
D.prototype.renderFinish=function(){};
D.prototype.remove=function(a){a&&C(this.buttonId).removeFinish()
};
h.TYPE={NUMBER_OF_PAGE_VIEWS:"NUMBER_OF_PAGE_VIEWS",URL_MATCH:"URL_MATCH",SECONDS_ON_PAGE:"SECONDS_ON_PAGE",SECONDS_ON_SITE:"SECONDS_ON_SITE",CUSTOM_VARIABLE:"CUSTOM_VARIABLE"};
h.OPERATOR={EQUALS:"EQUALS",NOT_EQUAL:"NOT_EQUAL",START_WITH:"START_WITH",CONTAINS:"CONTAINS",NOT_CONTAIN:"NOT_CONTAIN",LESS_THAN:"LESS_THAN",GREATER_THAN:"GREATER_THAN",LESS_OR_EQUAL:"LESS_OR_EQUAL",GREATER_OR_EQUAL:"GREATER_OR_EQUAL"};
h.prototype.init=function(a,b,c,e,d){this.ruleId=a;
this.buttonId=b;
this.compareFrom=c;
this.operator=e;
this.compareTo=d
};
h.prototype.getId=function(){return this.ruleId
};
h.prototype.evaluate=function(a,b){switch(this.operator){case h.OPERATOR.EQUALS:return f.log("Evaluate: "+a+" \x3d\x3d "+b),a==b;
case h.OPERATOR.NOT_EQUAL:return f.log("Evaluate: "+a+" !\x3d "+b),a!=b;
case h.OPERATOR.START_WITH:return f.log("Evaluate: "+a+" indexOf "+b+" \x3d\x3d 0"),0==a.indexOf(b);
case h.OPERATOR.CONTAINS:return f.log("Evaluate: "+a+" indexOf "+b+" !\x3d -1"),-1!=a.indexOf(b);
case h.OPERATOR.NOT_CONTAIN:return f.log("Evaluate: "+a+" indexOf "+b+" \x3d\x3d -1"),-1==a.indexOf(b);
case h.OPERATOR.LESS_THAN:return f.log("Evaluate: "+parseFloat(a)+" \x3c "+parseFloat(b)),parseFloat(a)<parseFloat(b);
case h.OPERATOR.GREATER_THAN:return f.log("Evaluate: "+parseFloat(a)+" \x3e "+parseFloat(b)),parseFloat(a)>parseFloat(b);
case h.OPERATOR.LESS_OR_EQUAL:return f.log("Evaluate: "+parseFloat(a)+" \x3c\x3d "+parseFloat(b)),parseFloat(a)<=parseFloat(b);
case h.OPERATOR.GREATER_OR_EQUAL:return f.log("Evaluate: "+parseFloat(a)+" \x3e\x3d "+parseFloat(b)),parseFloat(a)>=parseFloat(b)
}};
M.prototype=new h;
M.prototype.evaluate=function(){f.log("Evaluating StandardInviteRule");
return h.prototype.evaluate.call(this,this.compareFrom,this.compareTo)
};
N.prototype=new h;
N.prototype.evaluate=function(){f.log("Evaluating TimerInviteRule");
var a=(new Date).getTime()-this.compareFrom,b=h.prototype.evaluate.call(this,a,this.compareTo);
!b&&a<=this.compareTo&&(a=this.compareTo-a,(null==t(this.buttonId).getInviteDelay()||a<t(this.buttonId).getInviteDelay())&&t(this.buttonId).setInviteDelay(a));
return b
};
U.prototype=new h;
U.prototype.evaluate=function(){if(ga.hasOwnProperty(this.compareFrom)){return f.log("Evaluating CustomInviteRule"),h.prototype.evaluate.call(this,ga[this.compareFrom].toString(),this.compareTo)
}f.log("CustomInviteRule evaluation failed due to missing custom variable");
return !1
};
var ka=0;
y.prototype.init=function(a,b){this.left=a;
this.right=b
};
y.prototype.evaluate=function(a){return !1
};
Y.prototype=new y;
Y.prototype.evaluate=function(a){f.log("Evaluating Atom Node: "+this.ruleId);
return a.getRule(this.ruleId).evaluate()
};
V.prototype=new y;
V.prototype.evaluate=function(a){f.logGroupStart("Evaluating And Node");
a=this.left.evaluate(a)&&this.right.evaluate(a);
f.logGroupEnd();
return a
};
W.prototype=new y;
W.prototype.evaluate=function(a){f.logGroupStart("Evaluating Or Node");
a=this.left.evaluate(a)||this.right.evaluate(a);
f.logGroupEnd();
return a
};
X.prototype=new y;
X.prototype.evaluate=function(a){f.logGroupStart("Evaluating Not Node");
a=!this.left.evaluate(a);
f.logGroupEnd();
return a
};
la.prototype.toJSON=function(){return{label:this.getLabel(),value:this.getValue(),displayToAgent:this.getDisplayToAgent(),entityMaps:this.getMapper().getEntityMaps(),transcriptFields:this.getMapper().getTranscriptFields(),doKnowledgeSearch:this.getDoKnowledgeSearch()}
};
Z.prototype.map=function(a,b,c,e,d){"undefined"==typeof c&&(c=!0);
"undefined"==typeof e&&(e=!0);
"undefined"==typeof d&&(d=!0);
this.getEntityMaps().push(new ma(a,b,c,e,d))
};
Z.prototype.saveToTranscript=function(a){this.getTranscriptFields().push(a)
};
ma.prototype.toJSON=function(){return{entityName:this.getEntityName(),fieldName:this.getFieldName(),fastFill:this.getFastFill(),autoQuery:this.getAutoQuery(),exactMatch:this.getExactMatch()}
};
var H={};
p._=H;
H.handlePing=function(a){q.connection.handlePing(a)
};
H.error=function(a){a?f.log("Server Error: "+a):f.log("Server responded with an error.");
aa()
};
H.warning=function(a){a?f.log("Server Warning: "+a):f.log("Server sent an anoymous warning.")
};
H.setNewPtid=function(a){u.setPermanentId(a)
};
H.clearStorage=function(){A.clear()
};
p.init=function(a,b,c){if("string"!=typeof a){throw Error("The url to init must be strings")
}if(!f.isOrganizationId(c)){throw Error("Invalid OrganizationId Parameter Value: "+c)
}if(!f.isDeploymentId(b)){throw Error("Invalid DeploymentId Parameter Value: "+b)
}m.url=a;
m.deploymentId=b;
m.orgId=c;
f.log("System Initialized. Waiting for the DOM to be ready");
"complete"===document.readyState?setTimeout(O,1):document.addEventListener?(document.addEventListener("DOMContentLoaded",O,!1),window.addEventListener("load",O,!1)):window.attachEvent?window.attachEvent("onload",O):f.log("No available event model. Exiting.")
};
p.getSid=function(){return v
};
p.enableLogging=function(){Q=!0
};
p.setLocation=function(a){};
p.setChatWindowWidth=function(a){m.chatWindowWidth=a
};
p.setChatWindowHeight=function(a){m.chatWindowHeight=a
};
p.disconnect=function(){aa()
};
p.startChat=function(a,b,c){(b?K(a,b):k[a]).startChat("liveagent"+Math.round(100000*Math.random())+(new Date).getTime(),c)
};
p.startChatWithWindow=function(a,b,c,e){(c?K(a,c):k[a]).startChat(b,e)
};
p.rejectChat=function(a){k[a].rejectChat()
};
p.showWhenOnline=function(a,b,c){if(q.connection.isRunning()){throw Error("You cannot add a button after page initialization.")
}a=c?K(a,c):ja(a);
a.addTracker(new S(a.buttonId,b))
};
p.showWhenOffline=function(a,b,c){if(q.connection.isRunning()){throw Error("You cannot add a button after page initialization.")
}a=c?K(a,c):ja(a);
a.addTracker(new T(a.buttonId,b))
};
p.addCustomDetail=function(a,b,c){if(q.connection.isRunning()){throw Error("You cannot add a detail after page initialization.")
}if("undefined"==typeof a||"undefined"==typeof b||null===a||null===b){throw Error("CustomDetail contains null value")
}var e=new la(a,b,c);
va.push(e);
var d={map:function(a,b,c,f,h){if("undefined"==typeof a||null===a||"undefined"==typeof b||null===b||null===c||null===f||null===h){throw Error("CustomDetail.map contains null value")
}e.getMapper().map(a,b,c,f,h);
return d
},saveToTranscript:function(a){if("undefined"==typeof a||null===a){throw Error("CustomDetail.saveToTranscript contains null value")
}e.getMapper().saveToTranscript(a);
return d
},doKnowledgeSearch:function(){e.setDoKnowledgeSearch();
return d
}};
return d
};
p.setName=function(a){if(q.connection.isRunning()){throw Error("You cannot set the name after page initialization.")
}ba=a
};
p.addButtonEventHandler=function(a,b){"function"==typeof b&&(ea[a]=b)
};
p.BUTTON_EVENT=l.EVENT;
p.setCustomVariable=function(a,b){ga[a]=b;
if(G.hasOwnProperty(a)){for(var c=0;
c<G[a].length;
c++){var e=t(G[a][c]);
e.getOnlineState()&&e.setOnlineState(!0)
}}};
p.findOrCreate=function(a){if(q.connection.isRunning()){throw Error("You cannot find or create after page initialization.")
}var b=new na(a);
wa.push(b);
var c={map:function(a,d,g,f,h){b.getEntityMapper().map(a,d,g,f,h);
return c
},saveToTranscript:function(a){b.setSaveTranscript(a);
return c
},showOnCreate:function(){b.setShowOnCreate(!0);
return c
},linkToEntity:function(a,d){if(ha.hasOwnProperty(a)&&ha[a]==b.getEntityName()){return ca("Warning: Recursive links detected, skip link "+b.getEntityName()+" to "+a),c
}b.setLinkToEntityName(a);
b.setLinkToEntityField(d);
ha[b.getEntityName()]=a;
return c
}};
return c
};
p.addURLPrefix=function(a){if(q.connection.isRunning()){throw Error("You cannot set a URL Prefix after page initialization.")
}if("string"!=typeof a){throw Error("The parameter to addURLPrefix must be a string")
}m.url=f.addPrefixToURL(m.url,a,!0);
m.urlPrefix=a
};
var q={VisitorMessage:{ERROR:"Error",WARNING:"Warning"},SystemMessage:{ASYNC_RESULT:"AsyncResult",SWITCH_SERVER:"SwitchServer"}};
(function(){var a=null,b=!1,c=null,e=null,d={};
(function(){d.send=function(b,f){if(null!==c){d.onError.call(window,"Did not handle response before sending another message")
}else{"undefined"==typeof f&&(f={});
var h="Visitor",k="",l=!1;
1<b.length?(h="System",k="MultiNoun",f.nouns="",l=!0):k=b[0].getName();
h=m.url+"/rest/"+h+"/"+k+".jsonp?";
for(k=0;
k<b.length;
k++){l&&(f.nouns+=b[k].getName()+",");
f[b[k].getName()+".prefix"]="Visitor";
for(var n in b[k].getData()){b[k].getData().hasOwnProperty(n)&&(f[b[k].getName()+"."+n]=b[k].getData()[n])
}}l&&(f.nouns=f.nouns.substr(0,f.nouns.length-1));
for(var p in f){f.hasOwnProperty(p)&&(h+=p+"\x3d"+f[p]+"\x26")
}h+="callback\x3d"+a;
h+="\x26deployment_id\x3d"+m.deploymentId;
h+="\x26org_id\x3d"+m.orgId;
h+="\x26version\x3d36";
l=document.createElement("script");
l.type="text/javascript";
l.src=h;
c=document.body.appendChild(l);
e=window.setTimeout(function(){d.onError.call(window,"Server failed to respond.")
},m.pingTimeout)
}};
d.handlePing=function(a){e&&(clearTimeout(e),e=null);
b=!0;
a=a.messages;
for(var f=0;
f<a.length;
f++){d.messageHandler.call(window,a[f].type,a[f].message)
}d.onSuccess.call(window);
null!==c&&(document.body.removeChild(c),c=null)
};
d.messageHandler=function(a,b){};
d.onSuccess=function(){};
d.onError=function(a){};
d.isRunning=function(){return b
};
d.setIsRunning=function(a){b=a
};
d.setCallback=function(b){a=b
}
})();
q.connection=d;
q.Noun=function(a,b){this.getName=function(){return a
};
this.getData=function(){return b
}
}
})();
na.prototype.toJSON=function(){return{entityName:this.getEntityName(),saveToTranscript:this.getSaveTranscript(),showOnCreate:this.getShowOnCreate(),linkToEntityName:this.getLinkToEntityName(),linkToEntityField:this.getLinkToEntityField(),entityFieldsMaps:this.getEntityMapper().getEntityFieldsMaps()}
};
oa.prototype.map=function(a,b,c,e,d){"undefined"==typeof c&&(c=!0);
"undefined"==typeof e&&(e=!0);
"undefined"==typeof d&&(d=!0);
this.getEntityFieldsMaps().push(new pa(a,b,c,e,d))
};
pa.prototype.toJSON=function(){return{fieldName:this.getFieldName(),label:this.getLabel(),doFind:this.getDoFind(),isExactMatch:this.getIsExactMatch(),doCreate:this.getDoCreate()}
};
var v=f.getCookie("liveagent_sid"),$=f.getCookie("liveagent_chatted"),qa=!1,Q=!1,k={},va=[],wa=[],ba=null,ea={},P=null,ha={},m={url:null,deploymentId:null,orgId:null,pingRate:null,pingTimeout:5000,chatWindowWidth:482,chatWindowHeight:450,contentServerUrl:null,chatPage:"/s/chat",prechatHandler:"/s/prechatVisitor"};
q.connection.messageHandler=function(a,b){switch(a){case"VisitorId":b.sessionId&&(f.log("Received new session ID"),v=b.sessionId,document.cookie="liveagent_sid\x3d"+encodeURIComponent(v)+";path\x3d/;",null!=u.getVisitCount()&&u.setVisitCount(u.getVisitCount()+1),u.getPermanentId()||u.setPermanentId(v));
break;
case"Settings":A.init();
f.log("Ping rate set to "+b.pingRate+"ms");
m.pingRate=b.pingRate;
m.contentServerUrl=b.contentServerUrl;
m.prefixKey=b.prefixKey;
for(var c=0;
c<b.buttons.length;
c++){switch(b.buttons[c].type){case"ToAgent":case"Standard":var e=b.buttons[c],d=k[e.id];
d&&ta(d,e);
break;
case"Invite":var e=b.buttons[c],g=null,g=e.inviteImageUrl?za(e.id,e.inviteImageUrl,e.inviteImageWidth,e.inviteImageHeight):document.getElementById("liveagent_invite_button_"+e.id);
null==g?ca("Warning: Button "+e.id+" disabled because HTML element was not found"):(d=t(e.id),d.addTracker(new z(e.id,g,e.inviteRenderer,e.inviteStartPosition,e.inviteEndPosition,e.hasInviteAfterAccept,e.hasInviteAfterReject,e.inviteRejectTime)),g=f.jsonDecode(e.inviteRules),d.setRules(g.rules,g.filter),ta(d,e))
}}break;
case"Availability":c={};
for(e=0;
e<b.results.length;
e++){(d=k[b.results[e].id])&&(c[b.results[e].id]={button:d,isAvailable:b.results[e].isAvailable})
}null!=F&&c.hasOwnProperty(F)&&(c[F].button.setOnlineState(c[F].isAvailable),delete c[F]);
for(g in c){c.hasOwnProperty(g)&&c[g].button.setOnlineState(c[g].isAvailable)
}break;
case q.VisitorMessage.WARNING:ca(b.text);
break;
case q.VisitorMessage.ERROR:xa(b.text);
break;
case q.SystemMessage.SWITCH_SERVER:c=b.newUrl;
if("string"===typeof c){m.url=c,f.log("Received updated LiveAgent server url: "+c+"! Consider updating this site's deployment code.")
}else{throw Error("Trying to set invalid LiveAgent server url: "+c)
}v=null
}};
q.connection.onSuccess=function(){null!==P&&clearTimeout(P);
P=window.setTimeout(Aa,m.pingRate)
};
q.connection.onError=function(a){xa(a)
}
}})();
(function(a){var b=true;
a.flexslider=function(g,r){var d=a(g);
d.vars=a.extend({},a.flexslider.defaults,r);
var l=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,m=(("ontouchstart" in window)||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,e="click touchend MSPointerUp keyup",c="",q,k=d.vars.direction==="vertical",n=d.vars.reverse,p=(d.vars.itemWidth>0),j=d.vars.animation==="fade",o=d.vars.asNavFor!=="",h={};
a.data(g,"flexslider",d);
h={init:function(){d.animating=false;
d.currentSlide=parseInt((d.vars.startAt?d.vars.startAt:0),10);
if(isNaN(d.currentSlide)){d.currentSlide=0
}d.animatingTo=d.currentSlide;
d.atEnd=(d.currentSlide===0||d.currentSlide===d.last);
d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" "));
d.slides=a(d.vars.selector,d);
d.container=a(d.containerSelector,d);
d.count=d.slides.length;
d.syncExists=a(d.vars.sync).length>0;
if(d.vars.animation==="slide"){d.vars.animation="swing"
}d.prop=(k)?"top":"marginLeft";
d.args={};
d.manualPause=false;
d.stopped=false;
d.started=false;
d.startTimeout=null;
d.transitions=!d.vars.video&&!j&&d.vars.useCSS&&(function(){var u=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
for(var s in t){if(u.style[t[s]]!==undefined){d.pfx=t[s].replace("Perspective","").toLowerCase();
d.prop="-"+d.pfx+"-transform";
return true
}}return false
}());
d.ensureAnimationEnd="";
if(d.vars.controlsContainer!==""){d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)
}if(d.vars.manualControls!==""){d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)
}if(d.vars.customDirectionNav!==""){d.customDirectionNav=a(d.vars.customDirectionNav).length===2&&a(d.vars.customDirectionNav)
}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)
});
d.container.empty().append(d.slides)
}d.doMath();
d.setup("init");
if(d.vars.controlNav){h.controlNav.setup()
}if(d.vars.directionNav){h.directionNav.setup()
}if(d.vars.keyboard&&(a(d.containerSelector).length===1||d.vars.multipleKeyboard)){a(document).bind("keyup",function(t){var s=t.keyCode;
if(!d.animating&&(s===39||s===37)){var u=(s===39)?d.getTarget("next"):(s===37)?d.getTarget("prev"):false;
d.flexAnimate(u,d.vars.pauseOnAction)
}})
}if(d.vars.mousewheel){d.bind("mousewheel",function(u,w,t,s){u.preventDefault();
var v=(w<0)?d.getTarget("next"):d.getTarget("prev");
d.flexAnimate(v,d.vars.pauseOnAction)
})
}if(d.vars.pausePlay){h.pausePlay.setup()
}if(d.vars.slideshow&&d.vars.pauseInvisible){h.pauseInvisible.init()
}if(d.vars.slideshow){if(d.vars.pauseOnHover){d.hover(function(){if(!d.manualPlay&&!d.manualPause){d.pause()
}},function(){if(!d.manualPause&&!d.manualPlay&&!d.stopped){d.play()
}})
}if(!d.vars.pauseInvisible||!h.pauseInvisible.isHidden()){(d.vars.initDelay>0)?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play()
}}if(o){h.asNav.setup()
}if(m&&d.vars.touch){h.touch()
}if(!j||(j&&d.vars.smoothHeight)){a(window).bind("resize orientationchange focus",h.resize)
}d.find("img").attr("draggable","false");
setTimeout(function(){d.vars.start(d)
},200)
},asNav:{setup:function(){d.asNav=true;
d.animatingTo=Math.floor(d.currentSlide/d.move);
d.currentItem=d.currentSlide;
d.slides.removeClass(l+"active-slide").eq(d.currentItem).addClass(l+"active-slide");
if(!f){d.slides.on(e,function(u){u.preventDefault();
var t=a(this),s=t.index();
var v=t.offset().left-a(d).scrollLeft();
if(v<=0&&t.hasClass(l+"active-slide")){d.flexAnimate(d.getTarget("prev"),true)
}else{if(!a(d.vars.asNavFor).data("flexslider").animating&&!t.hasClass(l+"active-slide")){d.direction=(d.currentItem<s)?"next":"prev";
d.flexAnimate(s,d.vars.pauseOnAction,false,true,true)
}}})
}else{g._slider=d;
d.slides.each(function(){var s=this;
s._gesture=new MSGesture();
s._gesture.target=s;
s.addEventListener("MSPointerDown",function(t){t.preventDefault();
if(t.currentTarget._gesture){t.currentTarget._gesture.addPointer(t.pointerId)
}},false);
s.addEventListener("MSGestureTap",function(v){v.preventDefault();
var u=a(this),t=u.index();
if(!a(d.vars.asNavFor).data("flexslider").animating&&!u.hasClass("active")){d.direction=(d.currentItem<t)?"next":"prev";
d.flexAnimate(t,d.vars.pauseOnAction,false,true,true)
}})
})
}}},controlNav:{setup:function(){if(!d.manualControls){h.controlNav.setupPaging()
}else{h.controlNav.setupManual()
}},setupPaging:function(){var w=(d.vars.controlNav==="thumbnails")?"control-thumbs":"control-paging",u=1,x,s;
d.controlNavScaffold=a('<ol class="'+l+"control-nav "+l+w+'"></ol>');
if(d.pagingCount>1){for(var v=0;
v<d.pagingCount;
v++){s=d.slides.eq(v);
if(undefined===s.attr("data-thumb-alt")){s.attr("data-thumb-alt","")
}var t=(""!==s.attr("data-thumb-alt"))?t=' alt="'+s.attr("data-thumb-alt")+'"':"";
x=(d.vars.controlNav==="thumbnails")?'<img src="'+s.attr("data-thumb")+'"'+t+"/>":'<a href="#">'+u+"</a>";
if("thumbnails"===d.vars.controlNav&&true===d.vars.thumbCaptions){var y=s.attr("data-thumbcaption");
if(""!==y&&undefined!==y){x+='<span class="'+l+'caption">'+y+"</span>"
}}d.controlNavScaffold.append("<li>"+x+"</li>");
u++
}}(d.controlsContainer)?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold);
h.controlNav.set();
h.controlNav.active();
d.controlNavScaffold.delegate("a, img",e,function(z){z.preventDefault();
if(c===""||c===z.type){var B=a(this),A=d.controlNav.index(B);
if(!B.hasClass(l+"active")){d.direction=(A>d.currentSlide)?"next":"prev";
d.flexAnimate(A,d.vars.pauseOnAction)
}}if(c===""){c=z.type
}h.setToClearWatchedEvent()
})
},setupManual:function(){d.controlNav=d.manualControls;
h.controlNav.active();
d.controlNav.bind(e,function(s){s.preventDefault();
if(c===""||c===s.type){var u=a(this),t=d.controlNav.index(u);
if(!u.hasClass(l+"active")){(t>d.currentSlide)?d.direction="next":d.direction="prev";
d.flexAnimate(t,d.vars.pauseOnAction)
}}if(c===""){c=s.type
}h.setToClearWatchedEvent()
})
},set:function(){var s=(d.vars.controlNav==="thumbnails")?"img":"a";
d.controlNav=a("."+l+"control-nav li "+s,(d.controlsContainer)?d.controlsContainer:d)
},active:function(){d.controlNav.removeClass(l+"active").eq(d.animatingTo).addClass(l+"active")
},update:function(s,t){if(d.pagingCount>1&&s==="add"){d.controlNavScaffold.append(a('<li><a href="#">'+d.count+"</a></li>"))
}else{if(d.pagingCount===1){d.controlNavScaffold.find("li").remove()
}else{d.controlNav.eq(t).closest("li").remove()
}}h.controlNav.set();
(d.pagingCount>1&&d.pagingCount!==d.controlNav.length)?d.update(t,s):h.controlNav.active()
}},directionNav:{setup:function(){var s=a('<ul class="'+l+'direction-nav"><li class="'+l+'nav-prev"><a class="'+l+'prev" href="#">'+d.vars.prevText+'</a></li><li class="'+l+'nav-next"><a class="'+l+'next" href="#">'+d.vars.nextText+"</a></li></ul>");
if(d.customDirectionNav){d.directionNav=d.customDirectionNav
}else{if(d.controlsContainer){a(d.controlsContainer).append(s);
d.directionNav=a("."+l+"direction-nav li a",d.controlsContainer)
}else{d.append(s);
d.directionNav=a("."+l+"direction-nav li a",d)
}}h.directionNav.update();
d.directionNav.bind(e,function(t){t.preventDefault();
var u;
if(c===""||c===t.type){u=(a(this).hasClass(l+"next"))?d.getTarget("next"):d.getTarget("prev");
d.flexAnimate(u,d.vars.pauseOnAction)
}if(c===""){c=t.type
}h.setToClearWatchedEvent()
})
},update:function(){var s=l+"disabled";
if(d.pagingCount===1){d.directionNav.addClass(s).attr("tabindex","-1")
}else{if(!d.vars.animationLoop){if(d.animatingTo===0){d.directionNav.removeClass(s).filter("."+l+"prev").addClass(s).attr("tabindex","-1")
}else{if(d.animatingTo===d.last){d.directionNav.removeClass(s).filter("."+l+"next").addClass(s).attr("tabindex","-1")
}else{d.directionNav.removeClass(s).removeAttr("tabindex")
}}}else{d.directionNav.removeClass(s).removeAttr("tabindex")
}}}},pausePlay:{setup:function(){var s=a('<div class="'+l+'pauseplay"><a href="#"></a></div>');
if(d.controlsContainer){d.controlsContainer.append(s);
d.pausePlay=a("."+l+"pauseplay a",d.controlsContainer)
}else{d.append(s);
d.pausePlay=a("."+l+"pauseplay a",d)
}h.pausePlay.update((d.vars.slideshow)?l+"pause":l+"play");
d.pausePlay.bind(e,function(t){t.preventDefault();
if(c===""||c===t.type){if(a(this).hasClass(l+"pause")){d.manualPause=true;
d.manualPlay=false;
d.pause()
}else{d.manualPause=false;
d.manualPlay=true;
d.play()
}}if(c===""){c=t.type
}h.setToClearWatchedEvent()
})
},update:function(s){(s==="play")?d.pausePlay.removeClass(l+"pause").addClass(l+"play").html(d.vars.playText):d.pausePlay.removeClass(l+"play").addClass(l+"pause").html(d.vars.pauseText)
}},touch:function(){var D,A,y,E,H,F,z,t,G,C=false,v=0,u=0,x=0;
if(!f){z=function(I){if(d.animating){I.preventDefault()
}else{if((window.navigator.msPointerEnabled)||I.touches.length===1){d.pause();
E=(k)?d.h:d.w;
F=Number(new Date());
v=I.touches[0].pageX;
u=I.touches[0].pageY;
y=(p&&n&&d.animatingTo===d.last)?0:(p&&n)?d.limit-(((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo):(p&&d.currentSlide===d.last)?d.limit:(p)?((d.itemW+d.vars.itemMargin)*d.move)*d.currentSlide:(n)?(d.last-d.currentSlide+d.cloneOffset)*E:(d.currentSlide+d.cloneOffset)*E;
D=(k)?u:v;
A=(k)?v:u;
g.addEventListener("touchmove",t,false);
g.addEventListener("touchend",G,false)
}}};
t=function(I){v=I.touches[0].pageX;
u=I.touches[0].pageY;
H=(k)?D-u:D-v;
C=(k)?(Math.abs(H)<Math.abs(v-A)):(Math.abs(H)<Math.abs(u-A));
var J=500;
if(!C||Number(new Date())-F>J){I.preventDefault();
if(!j&&d.transitions){if(!d.vars.animationLoop){H=H/((d.currentSlide===0&&H<0||d.currentSlide===d.last&&H>0)?(Math.abs(H)/E+2):1)
}d.setProps(y+H,"setTouch")
}}};
G=function(K){g.removeEventListener("touchmove",t,false);
if(d.animatingTo===d.currentSlide&&!C&&!(H===null)){var J=(n)?-H:H,I=(J>0)?d.getTarget("next"):d.getTarget("prev");
if(d.canAdvance(I)&&(Number(new Date())-F<550&&Math.abs(J)>50||Math.abs(J)>E/2)){d.flexAnimate(I,d.vars.pauseOnAction)
}else{if(!j){d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,true)
}}}g.removeEventListener("touchend",G,false);
D=null;
A=null;
H=null;
y=null
};
g.addEventListener("touchstart",z,false)
}else{g.style.msTouchAction="none";
g._gesture=new MSGesture();
g._gesture.target=g;
g.addEventListener("MSPointerDown",s,false);
g._slider=d;
g.addEventListener("MSGestureChange",B,false);
g.addEventListener("MSGestureEnd",w,false);
function s(I){I.stopPropagation();
if(d.animating){I.preventDefault()
}else{d.pause();
g._gesture.addPointer(I.pointerId);
x=0;
E=(k)?d.h:d.w;
F=Number(new Date());
y=(p&&n&&d.animatingTo===d.last)?0:(p&&n)?d.limit-(((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo):(p&&d.currentSlide===d.last)?d.limit:(p)?((d.itemW+d.vars.itemMargin)*d.move)*d.currentSlide:(n)?(d.last-d.currentSlide+d.cloneOffset)*E:(d.currentSlide+d.cloneOffset)*E
}}function B(L){L.stopPropagation();
var K=L.target._slider;
if(!K){return
}var J=-L.translationX,I=-L.translationY;
x=x+((k)?I:J);
H=x;
C=(k)?(Math.abs(x)<Math.abs(-J)):(Math.abs(x)<Math.abs(-I));
if(L.detail===L.MSGESTURE_FLAG_INERTIA){setImmediate(function(){g._gesture.stop()
});
return
}if(!C||Number(new Date())-F>500){L.preventDefault();
if(!j&&K.transitions){if(!K.vars.animationLoop){H=x/((K.currentSlide===0&&x<0||K.currentSlide===K.last&&x>0)?(Math.abs(x)/E+2):1)
}K.setProps(y+H,"setTouch")
}}}function w(L){L.stopPropagation();
var I=L.target._slider;
if(!I){return
}if(I.animatingTo===I.currentSlide&&!C&&!(H===null)){var K=(n)?-H:H,J=(K>0)?I.getTarget("next"):I.getTarget("prev");
if(I.canAdvance(J)&&(Number(new Date())-F<550&&Math.abs(K)>50||Math.abs(K)>E/2)){I.flexAnimate(J,I.vars.pauseOnAction)
}else{if(!j){I.flexAnimate(I.currentSlide,I.vars.pauseOnAction,true)
}}}D=null;
A=null;
H=null;
y=null;
x=0
}}},resize:function(){if(!d.animating&&d.is(":visible")){if(!p){d.doMath()
}if(j){h.smoothHeight()
}else{if(p){d.slides.width(d.computedW);
d.update(d.pagingCount);
d.setProps()
}else{if(k){d.viewport.height(d.h);
d.setProps(d.h,"setTotal")
}else{if(d.vars.smoothHeight){h.smoothHeight()
}d.newSlides.width(d.computedW);
d.setProps(d.computedW,"setTotal")
}}}}},smoothHeight:function(s){if(!k||j){var t=(j)?d:d.viewport;
(s)?t.animate({height:d.slides.eq(d.animatingTo).innerHeight()},s):t.innerHeight(d.slides.eq(d.animatingTo).innerHeight())
}},sync:function(s){var u=a(d.vars.sync).data("flexslider"),t=d.animatingTo;
switch(s){case"animate":u.flexAnimate(t,d.vars.pauseOnAction,false,true);
break;
case"play":if(!u.playing&&!u.asNav){u.play()
}break;
case"pause":u.pause();
break
}},uniqueID:function(s){s.filter("[id]").add(s.find("[id]")).each(function(){var t=a(this);
t.attr("id",t.attr("id")+"_clone")
});
return s
},pauseInvisible:{visProp:null,init:function(){var t=h.pauseInvisible.getHiddenProp();
if(t){var s=t.replace(/[H|h]idden/,"")+"visibilitychange";
document.addEventListener(s,function(){if(h.pauseInvisible.isHidden()){if(d.startTimeout){clearTimeout(d.startTimeout)
}else{d.pause()
}}else{if(d.started){d.play()
}else{if(d.vars.initDelay>0){setTimeout(d.play,d.vars.initDelay)
}else{d.play()
}}}})
}},isHidden:function(){var s=h.pauseInvisible.getHiddenProp();
if(!s){return false
}return document[s]
},getHiddenProp:function(){var t=["webkit","moz","ms","o"];
if("hidden" in document){return"hidden"
}for(var s=0;
s<t.length;
s++){if((t[s]+"Hidden") in document){return t[s]+"Hidden"
}}return null
}},setToClearWatchedEvent:function(){clearTimeout(q);
q=setTimeout(function(){c=""
},3000)
}};
d.flexAnimate=function(A,B,u,w,x){if(!d.vars.animationLoop&&A!==d.currentSlide){d.direction=(A>d.currentSlide)?"next":"prev"
}if(o&&d.pagingCount===1){d.direction=(d.currentItem<A)?"next":"prev"
}if(!d.animating&&(d.canAdvance(A,x)||u)&&d.is(":visible")){if(o&&w){var t=a(d.vars.asNavFor).data("flexslider");
d.atEnd=A===0||A===d.count-1;
t.flexAnimate(A,true,false,true,x);
d.direction=(d.currentItem<A)?"next":"prev";
t.direction=d.direction;
if(Math.ceil((A+1)/d.visible)-1!==d.currentSlide&&A!==0){d.currentItem=A;
d.slides.removeClass(l+"active-slide").eq(A).addClass(l+"active-slide");
A=Math.floor(A/d.visible)
}else{d.currentItem=A;
d.slides.removeClass(l+"active-slide").eq(A).addClass(l+"active-slide");
return false
}}d.animating=true;
d.animatingTo=A;
if(B){d.pause()
}d.vars.before(d);
if(d.syncExists&&!x){h.sync("animate")
}if(d.vars.controlNav){h.controlNav.active()
}if(!p){d.slides.removeClass(l+"active-slide").eq(A).addClass(l+"active-slide")
}d.atEnd=A===0||A===d.last;
if(d.vars.directionNav){h.directionNav.update()
}if(A===d.last){d.vars.end(d);
if(!d.vars.animationLoop){d.pause()
}}if(!j){var z=(k)?d.slides.filter(":first").height():d.computedW,y,v,s;
if(p){y=d.vars.itemMargin;
s=((d.itemW+y)*d.move)*d.animatingTo;
v=(s>d.limit&&d.visible!==1)?d.limit:s
}else{if(d.currentSlide===0&&A===d.count-1&&d.vars.animationLoop&&d.direction!=="next"){v=(n)?(d.count+d.cloneOffset)*z:0
}else{if(d.currentSlide===d.last&&A===0&&d.vars.animationLoop&&d.direction!=="prev"){v=(n)?0:(d.count+1)*z
}else{v=(n)?((d.count-1)-A+d.cloneOffset)*z:(A+d.cloneOffset)*z
}}}d.setProps(v,"",d.vars.animationSpeed);
if(d.transitions){if(!d.vars.animationLoop||!d.atEnd){d.animating=false;
d.currentSlide=d.animatingTo
}d.container.unbind("webkitTransitionEnd transitionend");
d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd);
d.wrapup(z)
});
clearTimeout(d.ensureAnimationEnd);
d.ensureAnimationEnd=setTimeout(function(){d.wrapup(z)
},d.vars.animationSpeed+100)
}else{d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(z)
})
}}else{if(!m){d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing);
d.slides.eq(A).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup)
}else{d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1});
d.slides.eq(A).css({opacity:1,zIndex:2});
d.wrapup(z)
}}if(d.vars.smoothHeight){h.smoothHeight(d.vars.animationSpeed)
}}};
d.wrapup=function(s){if(!j&&!p){if(d.currentSlide===0&&d.animatingTo===d.last&&d.vars.animationLoop){d.setProps(s,"jumpEnd")
}else{if(d.currentSlide===d.last&&d.animatingTo===0&&d.vars.animationLoop){d.setProps(s,"jumpStart")
}}}d.animating=false;
d.currentSlide=d.animatingTo;
d.vars.after(d)
};
d.animateSlides=function(){if(!d.animating&&b){d.flexAnimate(d.getTarget("next"))
}};
d.pause=function(){clearInterval(d.animatedSlides);
d.animatedSlides=null;
d.playing=false;
if(d.vars.pausePlay){h.pausePlay.update("play")
}if(d.syncExists){h.sync("pause")
}};
d.play=function(){if(d.playing){clearInterval(d.animatedSlides)
}d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed);
d.started=d.playing=true;
if(d.vars.pausePlay){h.pausePlay.update("pause")
}if(d.syncExists){h.sync("play")
}};
d.stop=function(){d.pause();
d.stopped=true
};
d.canAdvance=function(u,s){var t=(o)?d.pagingCount-1:d.last;
return(s)?true:(o&&d.currentItem===d.count-1&&u===0&&d.direction==="prev")?true:(o&&d.currentItem===0&&u===d.pagingCount-1&&d.direction!=="next")?false:(u===d.currentSlide&&!o)?false:(d.vars.animationLoop)?true:(d.atEnd&&d.currentSlide===0&&u===t&&d.direction!=="next")?false:(d.atEnd&&d.currentSlide===t&&u===0&&d.direction==="next")?false:true
};
d.getTarget=function(s){d.direction=s;
if(s==="next"){return(d.currentSlide===d.last)?0:d.currentSlide+1
}else{return(d.currentSlide===0)?d.last:d.currentSlide-1
}};
d.setProps=function(v,s,t){var u=(function(){var w=(v)?v:((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo,x=(function(){if(p){return(s==="setTouch")?v:(n&&d.animatingTo===d.last)?0:(n)?d.limit-(((d.itemW+d.vars.itemMargin)*d.move)*d.animatingTo):(d.animatingTo===d.last)?d.limit:w
}else{switch(s){case"setTotal":return(n)?((d.count-1)-d.currentSlide+d.cloneOffset)*v:(d.currentSlide+d.cloneOffset)*v;
case"setTouch":return(n)?v:v;
case"jumpEnd":return(n)?v:d.count*v;
case"jumpStart":return(n)?d.count*v:v;
default:return v
}}}());
return(x*-1)+"px"
}());
if(d.transitions){u=(k)?"translate3d(0,"+u+",0)":"translate3d("+u+",0,0)";
t=(t!==undefined)?(t/1000)+"s":"0s";
d.container.css("-"+d.pfx+"-transition-duration",t);
d.container.css("transition-duration",t)
}d.args[d.prop]=u;
if(d.transitions||t===undefined){d.container.css(d.args)
}d.container.css("transform",u)
};
d.setup=function(t){if(!j){var u,s;
if(t==="init"){d.viewport=a('<div class="'+l+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container);
d.cloneCount=0;
d.cloneOffset=0;
if(n){s=a.makeArray(d.slides).reverse();
d.slides=a(s);
d.container.empty().append(d.slides)
}}if(d.vars.animationLoop&&!p){d.cloneCount=2;
d.cloneOffset=1;
if(t!=="init"){d.container.find(".clone").remove()
}d.container.append(h.uniqueID(d.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(h.uniqueID(d.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))
}d.newSlides=a(d.vars.selector,d);
u=(n)?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset;
if(k&&!p){d.container.height((d.count+d.cloneCount)*200+"%").css("position","absolute").width("100%");
setTimeout(function(){d.newSlides.css({display:"block"});
d.doMath();
d.viewport.height(d.h);
d.setProps(u*d.h,"init")
},(t==="init")?100:0)
}else{d.container.width((d.count+d.cloneCount)*200+"%");
d.setProps(u*d.computedW,"init");
setTimeout(function(){d.doMath();
d.newSlides.css({width:d.computedW,marginRight:d.computedM,"float":"left",display:"block"});
if(d.vars.smoothHeight){h.smoothHeight()
}},(t==="init")?100:0)
}}else{d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});
if(t==="init"){if(!m){if(d.vars.fadeFirstSlide==false){d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).css({opacity:1})
}else{d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)
}}else{d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2})
}}if(d.vars.smoothHeight){h.smoothHeight()
}}if(!p){d.slides.removeClass(l+"active-slide").eq(d.currentSlide).addClass(l+"active-slide")
}d.vars.init(d)
};
d.doMath=function(){var s=d.slides.first(),v=d.vars.itemMargin,t=d.vars.minItems,u=d.vars.maxItems;
d.w=(d.viewport===undefined)?d.width():d.viewport.width();
d.h=s.height();
d.boxPadding=s.outerWidth()-s.width();
if(p){d.itemT=d.vars.itemWidth+v;
d.itemM=v;
d.minW=(t)?t*d.itemT:d.w;
d.maxW=(u)?(u*d.itemT)-v:d.w;
d.itemW=(d.minW>d.w)?(d.w-(v*(t-1)))/t:(d.maxW<d.w)?(d.w-(v*(u-1)))/u:(d.vars.itemWidth>d.w)?d.w:d.vars.itemWidth;
d.visible=Math.floor(d.w/(d.itemW));
d.move=(d.vars.move>0&&d.vars.move<d.visible)?d.vars.move:d.visible;
d.pagingCount=Math.ceil(((d.count-d.visible)/d.move)+1);
d.last=d.pagingCount-1;
d.limit=(d.pagingCount===1)?0:(d.vars.itemWidth>d.w)?(d.itemW*(d.count-1))+(v*(d.count-1)):((d.itemW+v)*d.count)-d.w-v
}else{d.itemW=d.w;
d.itemM=v;
d.pagingCount=d.count;
d.last=d.count-1
}d.computedW=d.itemW-d.boxPadding;
d.computedM=d.itemM
};
d.update=function(t,s){d.doMath();
if(!p){if(t<d.currentSlide){d.currentSlide+=1
}else{if(t<=d.currentSlide&&t!==0){d.currentSlide-=1
}}d.animatingTo=d.currentSlide
}if(d.vars.controlNav&&!d.manualControls){if((s==="add"&&!p)||d.pagingCount>d.controlNav.length){h.controlNav.update("add")
}else{if((s==="remove"&&!p)||d.pagingCount<d.controlNav.length){if(p&&d.currentSlide>d.last){d.currentSlide-=1;
d.animatingTo-=1
}h.controlNav.update("remove",d.last)
}}}if(d.vars.directionNav){h.directionNav.update()
}};
d.addSlide=function(s,u){var t=a(s);
d.count+=1;
d.last=d.count-1;
if(k&&n){(u!==undefined)?d.slides.eq(d.count-u).after(t):d.container.prepend(t)
}else{(u!==undefined)?d.slides.eq(u).before(t):d.container.append(t)
}d.update(u,"add");
d.slides=a(d.vars.selector+":not(.clone)",d);
d.setup();
d.vars.added(d)
};
d.removeSlide=function(s){var t=(isNaN(s))?d.slides.index(a(s)):s;
d.count-=1;
d.last=d.count-1;
if(isNaN(s)){a(s,d.slides).remove()
}else{(k&&n)?d.slides.eq(d.last).remove():d.slides.eq(s).remove()
}d.doMath();
d.update(t,"remove");
d.slides=a(d.vars.selector+":not(.clone)",d);
d.setup();
d.vars.removed(d)
};
h.init()
};
a(window).blur(function(c){b=false
}).focus(function(c){b=true
});
a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,fadeFirstSlide:true,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};
a.fn.flexslider=function(c){if(c===undefined){c={}
}if(typeof c==="object"){return this.each(function(){var g=a(this),e=(c.selector)?c.selector:".slides > li",f=g.find(e);
if((f.length===1&&c.allowOneSlide===false)||f.length===0){f.fadeIn(400);
if(c.start){c.start(g)
}}else{if(g.data("flexslider")===undefined){new a.flexslider(this,c)
}}})
}else{var d=a(this).data("flexslider");
switch(c){case"play":d.play();
break;
case"pause":d.pause();
break;
case"stop":d.stop();
break;
case"next":d.flexAnimate(d.getTarget("next"),true);
break;
case"prev":case"previous":d.flexAnimate(d.getTarget("prev"),true);
break;
default:if(typeof c==="number"){d.flexAnimate(c,true)
}}}}
})(jQuery);
!function(d,c){"object"==typeof exports&&"undefined"!=typeof module?module.exports=c():"function"==typeof define&&define.amd?define(c):d.moment=c()
}(this,function(){function e5(){return b7.apply(null,arguments)
}function e3(b){b7=b
}function e1(b){return b instanceof Array||"[object Array]"===Object.prototype.toString.call(b)
}function eZ(b){return null!=b&&"[object Object]"===Object.prototype.toString.call(b)
}function eX(d){var c;
for(c in d){return !1
}return !0
}function eV(b){return"number"==typeof b||"[object Number]"===Object.prototype.toString.call(b)
}function eU(b){return b instanceof Date||"[object Date]"===Object.prototype.toString.call(b)
}function eS(f,e){var h,g=[];
for(h=0;
h<f.length;
++h){g.push(e(f[h],h))
}return g
}function eR(d,c){return Object.prototype.hasOwnProperty.call(d,c)
}function eQ(e,d){for(var f in d){eR(d,f)&&(e[f]=d[f])
}return eR(d,"toString")&&(e.toString=d.toString),eR(d,"valueOf")&&(e.valueOf=d.valueOf),e
}function eP(f,e,h,g){return bC(f,e,h,g,!0).utc()
}function eO(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}
}function eN(b){return null==b._pf&&(b._pf=eO()),b._pf
}function eM(f){if(null==f._isValid){var e=eN(f),h=bL.call(e.parsedDateParts,function(b){return null!=b
}),g=!isNaN(f._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&h);
if(f._strict&&(g=g&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(f)){return g
}f._isValid=g
}return f._isValid
}function eL(d){var c=eP(NaN);
return null!=d?eQ(eN(c),d):eN(c).userInvalidated=!0,c
}function eK(b){return void 0===b
}function eJ(g,f){var k,j,h;
if(eK(f._isAMomentObject)||(g._isAMomentObject=f._isAMomentObject),eK(f._i)||(g._i=f._i),eK(f._f)||(g._f=f._f),eK(f._l)||(g._l=f._l),eK(f._strict)||(g._strict=f._strict),eK(f._tzm)||(g._tzm=f._tzm),eK(f._isUTC)||(g._isUTC=f._isUTC),eK(f._offset)||(g._offset=f._offset),eK(f._pf)||(g._pf=eN(f)),eK(f._locale)||(g._locale=f._locale),bA.length>0){for(k in bA){j=bA[k],h=f[j],eK(h)||(g[j]=h)
}}return g
}function eI(a){eJ(this,a),this._d=new Date(null!=a._d?a._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),bk===!1&&(bk=!0,e5.updateOffset(this),bk=!1)
}function eH(b){return b instanceof eI||null!=b&&null!=b._isAMomentObject
}function eG(b){return b<0?Math.ceil(b)||0:Math.floor(b)
}function eF(e){var d=+e,f=0;
return 0!==d&&isFinite(d)&&(f=eG(d)),f
}function eE(j,h,o){var n,m=Math.min(j.length,h.length),l=Math.abs(j.length-h.length),k=0;
for(n=0;
n<m;
n++){(o&&j[n]!==h[n]||!o&&eF(j[n])!==eF(h[n]))&&k++
}return k+l
}function eD(a){e5.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)
}function eC(a,f){var e=!0;
return eQ(function(){if(null!=e5.deprecationHandler&&e5.deprecationHandler(null,a),e){for(var j,d=[],c=0;
c<arguments.length;
c++){if(j="","object"==typeof arguments[c]){j+="\n["+c+"] ";
for(var b in arguments[0]){j+=b+": "+arguments[0][b]+", "
}j=j.slice(0,-2)
}else{j=arguments[c]
}d.push(j)
}eD(a+"\nArguments: "+Array.prototype.slice.call(d).join("")+"\n"+(new Error).stack),e=!1
}return f.apply(this,arguments)
},f)
}function eA(a,d){null!=e5.deprecationHandler&&e5.deprecationHandler(a,d),a4[a]||(eD(d),a4[a]=!0)
}function ey(b){return b instanceof Function||"[object Function]"===Object.prototype.toString.call(b)
}function fN(e){var d,f;
for(f in e){d=e[f],ey(d)?this[f]=d:this["_"+f]=d
}this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)
}function fM(f,d){var h,g=eQ({},f);
for(h in d){eR(d,h)&&(eZ(f[h])&&eZ(d[h])?(g[h]={},eQ(g[h],f[h]),eQ(g[h],d[h])):null!=d[h]?g[h]=d[h]:delete g[h])
}for(h in f){eR(f,h)&&!eR(d,h)&&eZ(f[h])&&(g[h]=eQ({},g[h]))
}return g
}function fK(b){null!=b&&this.set(b)
}function fI(f,e,h){var g=this._calendar[f]||this._calendar.sameElse;
return ey(g)?g.call(e,h):g
}function fG(e){var d=this._longDateFormat[e],f=this._longDateFormat[e.toUpperCase()];
return d||!f?d:(this._longDateFormat[e]=f.replace(/MMMM|MM|DD|dddd/g,function(b){return b.slice(1)
}),this._longDateFormat[e])
}function fE(){return this._invalidDate
}function fC(b){return this._ordinal.replace("%d",b)
}function fB(g,f,k,j){var h=this._relativeTime[k];
return ey(h)?h(g,f,k,j):h.replace(/%d/i,g)
}function fz(e,d){var f=this._relativeTime[e>0?"future":"past"];
return ey(f)?f(d):f.replace(/%s/i,d)
}function fy(e,d){var f=e.toLowerCase();
aP[f]=aP[f+"s"]=aP[d]=e
}function fx(b){return"string"==typeof b?aP[b]||aP[b.toLowerCase()]:void 0
}function fw(f){var e,h,g={};
for(h in f){eR(f,h)&&(e=fx(h),e&&(g[e]=f[h]))
}return g
}function fv(d,c){aF[d]=c
}function fu(e){var d=[];
for(var f in e){d.push({unit:f,priority:aF[f]})
}return d.sort(function(g,c){return g.priority-c.priority
}),d
}function ft(a,d){return function(b){return null!=b?(fr(this,a,b),e5.updateOffset(this,d),this):fs(this,a)
}
}function fs(d,c){return d.isValid()?d._d["get"+(d._isUTC?"UTC":"")+c]():NaN
}function fr(e,d,f){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+d](f)
}function fq(b){return b=fx(b),ey(this[b])?this[b]():this
}function fp(f,e){if("object"==typeof f){f=fw(f);
for(var h=fu(f),g=0;
g<h.length;
g++){this[h[g].unit](f[h[g].unit])
}}else{if(f=fx(f),ey(this[f])){return this[f](e)
}}return this
}function fo(h,g,m){var l=""+Math.abs(h),k=g-l.length,j=h>=0;
return(j?m?"+":"":"-")+Math.pow(10,Math.max(0,k)).toString().substr(1)+l
}function fn(g,f,k,j){var h=j;
"string"==typeof j&&(h=function(){return this[j]()
}),g&&(fP[g]=h),f&&(fP[f[0]]=function(){return fo(h.apply(this,arguments),f[1],f[2])
}),k&&(fP[k]=function(){return this.localeData().ordinal(h.apply(this,arguments),g)
})
}function fm(b){return b.match(/\[[\s\S]/)?b.replace(/^\[|\]$/g,""):b.replace(/\\/g,"")
}function fl(f){var e,h,g=f.match(av);
for(e=0,h=g.length;
e<h;
e++){fP[g[e]]?g[e]=fP[g[e]]:g[e]=fm(g[e])
}return function(a){var d,c="";
for(d=0;
d<h;
d++){c+=g[d] instanceof Function?g[d].call(a,f):g[d]
}return c
}
}function fk(d,c){return d.isValid()?(c=fj(c,d.localeData()),f6[c]=f6[c]||fl(c),f6[c](d)):d.localeData().invalidDate()
}function fj(f,e){function h(b){return e.longDateFormat(b)||b
}var g=5;
for(gm.lastIndex=0;
g>=0&&gm.test(f);
){f=f.replace(gm,h),gm.lastIndex=0,g-=1
}return f
}function fh(e,d,f){cn[e]=ey(d)?d:function(b,c){return b&&f?f:d
}
}function f3(d,c){return eR(cn,d)?cn[d](c._strict,c._locale):new RegExp(e6(d))
}function e6(b){return f4(b.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(g,f,k,j,h){return f||k||j||h
}))
}function f4(b){return b.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")
}function fL(f,e){var h,g=e;
for("string"==typeof f&&(f=[f]),eV(e)&&(g=function(b,d){d[e]=eF(b)
}),h=0;
h<f.length;
h++){ap[f[h]]=g
}}function e4(d,c){fL(d,function(b,h,g,f){g._w=g._w||{},c(b,g._w,g,f)
})
}function eu(e,d,f){null!=d&&eR(ap,e)&&ap[e](d,f._a,f,e)
}function ej(d,c){return new Date(Date.UTC(d,c+1,0)).getUTCDate()
}function d2(d,c){return d?e1(this._months)?this._months[d.month()]:this._months[(this._months.isFormat||cZ).test(c)?"format":"standalone"][d.month()]:this._months
}function dR(d,c){return d?e1(this._monthsShort)?this._monthsShort[d.month()]:this._monthsShort[cZ.test(c)?"format":"standalone"][d.month()]:this._monthsShort
}function dG(j,h,o){var n,m,l,k=j.toLocaleLowerCase();
if(!this._monthsParse){for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;
n<12;
++n){l=eP([2000,n]),this._shortMonthsParse[n]=this.monthsShort(l,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(l,"").toLocaleLowerCase()
}}return o?"MMM"===h?(m=dg.call(this._shortMonthsParse,k),m!==-1?m:null):(m=dg.call(this._longMonthsParse,k),m!==-1?m:null):"MMM"===h?(m=dg.call(this._shortMonthsParse,k),m!==-1?m:(m=dg.call(this._longMonthsParse,k),m!==-1?m:null)):(m=dg.call(this._longMonthsParse,k),m!==-1?m:(m=dg.call(this._shortMonthsParse,k),m!==-1?m:null))
}function dv(h,g,m){var l,k,j;
if(this._monthsParseExact){return dG.call(this,h,g,m)
}for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),l=0;
l<12;
l++){if(k=eP([2000,l]),m&&!this._longMonthsParse[l]&&(this._longMonthsParse[l]=new RegExp("^"+this.months(k,"").replace(".","")+"$","i"),this._shortMonthsParse[l]=new RegExp("^"+this.monthsShort(k,"").replace(".","")+"$","i")),m||this._monthsParse[l]||(j="^"+this.months(k,"")+"|^"+this.monthsShort(k,""),this._monthsParse[l]=new RegExp(j.replace(".",""),"i")),m&&"MMMM"===g&&this._longMonthsParse[l].test(h)){return l
}if(m&&"MMM"===g&&this._shortMonthsParse[l].test(h)){return l
}if(!m&&this._monthsParse[l].test(h)){return l
}}}function dk(e,d){var f;
if(!e.isValid()){return e
}if("string"==typeof d){if(/^\d+$/.test(d)){d=eF(d)
}else{if(d=e.localeData().monthsParse(d),!eV(d)){return e
}}}return f=Math.min(e.date(),ej(e.year(),d)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](d,f),e
}function c3(a){return null!=a?(dk(this,a),e5.updateOffset(this,!0),this):fs(this,"Month")
}function cS(){return ej(this.year(),this.month())
}function cH(b){return this._monthsParseExact?(eR(this,"_monthsRegex")||cg.call(this),b?this._monthsShortStrictRegex:this._monthsShortRegex):(eR(this,"_monthsShortRegex")||(this._monthsShortRegex=cs),this._monthsShortStrictRegex&&b?this._monthsShortStrictRegex:this._monthsShortRegex)
}function cw(b){return this._monthsParseExact?(eR(this,"_monthsRegex")||cg.call(this),b?this._monthsStrictRegex:this._monthsRegex):(eR(this,"_monthsRegex")||(this._monthsRegex=b6),this._monthsStrictRegex&&b?this._monthsStrictRegex:this._monthsRegex)
}function cg(){function h(d,c){return c.length-d.length
}var g,m,l=[],k=[],j=[];
for(g=0;
g<12;
g++){m=eP([2000,g]),l.push(this.monthsShort(m,"")),k.push(this.months(m,"")),j.push(this.months(m,"")),j.push(this.monthsShort(m,""))
}for(l.sort(h),k.sort(h),j.sort(h),g=0;
g<12;
g++){l[g]=f4(l[g]),k[g]=f4(k[g])
}for(g=0;
g<24;
g++){j[g]=f4(j[g])
}this._monthsRegex=new RegExp("^("+j.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+k.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+l.join("|")+")","i")
}function bZ(b){return bO(b)?366:365
}function bO(b){return b%4===0&&b%100!==0||b%400===0
}function bD(){return bO(this.year())
}function bn(k,j,q,p,o,n,m){var l=new Date(k,j,q,p,o,n,m);
return k<100&&k>=0&&isFinite(l.getFullYear())&&l.setFullYear(k),l
}function a7(d){var c=new Date(Date.UTC.apply(null,arguments));
return d<100&&d>=0&&isFinite(c.getUTCFullYear())&&c.setUTCFullYear(d),c
}function aX(g,f,k){var j=7+f-k,h=(7+a7(g,0,j).getUTCDay()-f)%7;
return -h+j-1
}function aN(t,s,r,q,p){var o,n,m=(7+r-q)%7,l=aX(t,q,p),k=1+7*(s-1)+m+l;
return k<=0?(o=t-1,n=bZ(o)+k):k>bZ(t)?(o=t+1,n=k-bZ(t)):(o=t,n=k),{year:o,dayOfYear:n}
}function aD(j,h,o){var n,m,l=aX(j.year(),h,o),k=Math.floor((j.dayOfYear()-l-1)/7)+1;
return k<1?(m=j.year()-1,n=k+an(m,h,o)):k>an(j.year(),h,o)?(n=k-an(j.year(),h,o),m=j.year()+1):(m=j.year(),n=k),{week:n,year:m}
}function an(g,f,k){var j=aX(g,f,k),h=aX(g+1,f,k);
return(bZ(g)-j+h)/7
}function gk(b){return aD(b,this._week.dow,this._week.doy).week
}function fX(){return this._week.dow
}function bx(){return this._week.doy
}function bi(d){var c=this.localeData().week(this);
return null==d?c:this.add(7*(d-c),"d")
}function a2(d){var c=aD(this,1,4).week;
return null==d?c:this.add(7*(d-c),"d")
}function aS(d,c){return"string"!=typeof d?d:isNaN(d)?(d=c.weekdaysParse(d),"number"==typeof d?d:null):parseInt(d,10)
}function aI(d,c){return"string"==typeof d?c.weekdaysParse(d)%7||7:isNaN(d)?null:d
}function ay(d,c){return d?e1(this._weekdays)?this._weekdays[d.day()]:this._weekdays[this._weekdays.isFormat.test(c)?"format":"standalone"][d.day()]:this._weekdays
}function ai(b){return b?this._weekdaysShort[b.day()]:this._weekdaysShort
}function f9(b){return b?this._weekdaysMin[b.day()]:this._weekdaysMin
}function fS(j,h,o){var n,m,l,k=j.toLocaleLowerCase();
if(!this._weekdaysParse){for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;
n<7;
++n){l=eP([2000,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(l,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(l,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(l,"").toLocaleLowerCase()
}}return o?"dddd"===h?(m=dg.call(this._weekdaysParse,k),m!==-1?m:null):"ddd"===h?(m=dg.call(this._shortWeekdaysParse,k),m!==-1?m:null):(m=dg.call(this._minWeekdaysParse,k),m!==-1?m:null):"dddd"===h?(m=dg.call(this._weekdaysParse,k),m!==-1?m:(m=dg.call(this._shortWeekdaysParse,k),m!==-1?m:(m=dg.call(this._minWeekdaysParse,k),m!==-1?m:null))):"ddd"===h?(m=dg.call(this._shortWeekdaysParse,k),m!==-1?m:(m=dg.call(this._weekdaysParse,k),m!==-1?m:(m=dg.call(this._minWeekdaysParse,k),m!==-1?m:null))):(m=dg.call(this._minWeekdaysParse,k),m!==-1?m:(m=dg.call(this._weekdaysParse,k),m!==-1?m:(m=dg.call(this._shortWeekdaysParse,k),m!==-1?m:null)))
}function fi(h,g,m){var l,k,j;
if(this._weekdaysParseExact){return fS.call(this,h,g,m)
}for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),l=0;
l<7;
l++){if(k=eP([2000,1]).day(l),m&&!this._fullWeekdaysParse[l]&&(this._fullWeekdaysParse[l]=new RegExp("^"+this.weekdays(k,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[l]=new RegExp("^"+this.weekdaysShort(k,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[l]=new RegExp("^"+this.weekdaysMin(k,"").replace(".",".?")+"$","i")),this._weekdaysParse[l]||(j="^"+this.weekdays(k,"")+"|^"+this.weekdaysShort(k,"")+"|^"+this.weekdaysMin(k,""),this._weekdaysParse[l]=new RegExp(j.replace(".",""),"i")),m&&"dddd"===g&&this._fullWeekdaysParse[l].test(h)){return l
}if(m&&"ddd"===g&&this._shortWeekdaysParse[l].test(h)){return l
}if(m&&"dd"===g&&this._minWeekdaysParse[l].test(h)){return l
}if(!m&&this._weekdaysParse[l].test(h)){return l
}}}function eB(d){if(!this.isValid()){return null!=d?this:NaN
}var c=this._isUTC?this._d.getUTCDay():this._d.getDay();
return null!=d?(d=aS(d,this.localeData()),this.add(d-c,"d")):c
}function eo(d){if(!this.isValid()){return null!=d?this:NaN
}var c=(this.day()+7-this.localeData()._week.dow)%7;
return null==d?c:this.add(d-c,"d")
}function d7(d){if(!this.isValid()){return null!=d?this:NaN
}if(null!=d){var c=aI(d,this.localeData());
return this.day(this.day()%7?c:c-7)
}return this.day()||7
}function dW(b){return this._weekdaysParseExact?(eR(this,"_weekdaysRegex")||dq.call(this),b?this._weekdaysStrictRegex:this._weekdaysRegex):(eR(this,"_weekdaysRegex")||(this._weekdaysRegex=aT),this._weekdaysStrictRegex&&b?this._weekdaysStrictRegex:this._weekdaysRegex)
}function dL(b){return this._weekdaysParseExact?(eR(this,"_weekdaysRegex")||dq.call(this),b?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(eR(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=aJ),this._weekdaysShortStrictRegex&&b?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)
}function dA(b){return this._weekdaysParseExact?(eR(this,"_weekdaysRegex")||dq.call(this),b?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(eR(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=az),this._weekdaysMinStrictRegex&&b?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)
}function dq(){function t(d,c){return c.length-d.length
}var s,r,q,p,o,n=[],m=[],l=[],k=[];
for(s=0;
s<7;
s++){r=eP([2000,1]).day(s),q=this.weekdaysMin(r,""),p=this.weekdaysShort(r,""),o=this.weekdays(r,""),n.push(q),m.push(p),l.push(o),k.push(q),k.push(p),k.push(o)
}for(n.sort(t),m.sort(t),l.sort(t),k.sort(t),s=0;
s<7;
s++){m[s]=f4(m[s]),l[s]=f4(l[s]),k[s]=f4(k[s])
}this._weekdaysRegex=new RegExp("^("+k.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+m.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+n.join("|")+")","i")
}function c8(){return this.hours()%12||12
}function cX(){return this.hours()||24
}function cM(d,c){fn(d,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),c)
})
}function cB(d,c){return c._meridiemParse
}function cl(b){return"p"===(b+"").toLowerCase().charAt(0)
}function b4(e,d,f){return e>11?f?"pm":"PM":f?"am":"AM"
}function bT(b){return b?b.toLowerCase().replace("_","-"):b
}function bI(h){for(var g,m,l,k,j=0;
j<h.length;
){for(k=bT(h[j]).split("-"),g=k.length,m=bT(h[j+1]),m=m?m.split("-"):null;
g>0;
){if(l=bs(k.slice(0,g).join("-"))){return l
}if(m&&m.length>=g&&eE(k,m,!0)>=g-1){break
}g--
}j++
}return null
}function bs(d){var c=null;
if(!a8[d]&&"undefined"!=typeof module&&module&&module.exports){try{c=aj._abbr,require("./locale/"+d),cq(c)
}catch(d){}}return a8[d]
}function cq(e,d){var f;
return e&&(f=eK(d)?fJ(e):at(e,d),f&&(aj=f)),aj._abbr
}function at(e,d){if(null!==d){var f=bt;
if(d.abbr=e,null!=a8[e]){eA("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),f=a8[e]._config
}else{if(null!=d.parentLocale){if(null==a8[d.parentLocale]){return aY[d.parentLocale]||(aY[d.parentLocale]=[]),aY[d.parentLocale].push({name:e,config:d}),null
}f=a8[d.parentLocale]._config
}}return a8[e]=new fK(fM(f,d)),aY[e]&&aY[e].forEach(function(b){at(b.name,b.config)
}),cq(e),a8[e]
}return delete a8[e],null
}function f2(f,e){if(null!=e){var h,g=bt;
null!=a8[f]&&(g=a8[f]._config),e=fM(g,e),h=new fK(e),h.parentLocale=a8[f],a8[f]=h,cq(f)
}else{null!=a8[f]&&(null!=a8[f].parentLocale?a8[f]=a8[f].parentLocale:null!=a8[f]&&delete a8[f])
}return a8[f]
}function fJ(d){var c;
if(d&&d._locale&&d._locale._abbr&&(d=d._locale._abbr),!d){return aj
}if(!e1(d)){if(c=bs(d)){return c
}d=[d]
}return bI(d)
}function e2(){return aA(a8)
}function et(e){var d,f=e._a;
return f&&eN(e).overflow===-2&&(d=f[fD]<0||f[fD]>11?fD:f[eW]<1||f[eW]>ej(f[fZ],f[fD])?eW:f[eq]<0||f[eq]>24||24===f[eq]&&(0!==f[d9]||0!==f[dY]||0!==f[dN])?eq:f[d9]<0||f[d9]>59?d9:f[dY]<0||f[dY]>59?dY:f[dN]<0||f[dN]>999?dN:-1,eN(e)._overflowDayOfYear&&(d<fZ||d>eW)&&(d=eW),eN(e)._overflowWeeks&&d===-1&&(d=dC),eN(e)._overflowWeekday&&d===-1&&(d=dr),eN(e).overflow=d),e
}function ei(r){var q,p,o,n,m,l,k=r._i,j=aO.exec(k)||aE.exec(k);
if(j){for(eN(r).iso=!0,q=0,p=gl.length;
q<p;
q++){if(gl[q][1].exec(j[1])){n=gl[q][0],o=gl[q][2]!==!1;
break
}}if(null==n){return void (r._isValid=!1)
}if(j[3]){for(q=0,p=f5.length;
q<p;
q++){if(f5[q][1].exec(j[3])){m=(j[2]||" ")+f5[q][0];
break
}}if(null==m){return void (r._isValid=!1)
}}if(!o&&null!=m){return void (r._isValid=!1)
}if(j[4]){if(!au.exec(j[4])){return void (r._isValid=!1)
}l="Z"
}r._f=n+(m||"")+(l||""),c2(r)
}else{r._isValid=!1
}}function d1(a){var d=fO.exec(a._i);
return null!==d?void (a._d=new Date(+d[1])):(ei(a),void (a._isValid===!1&&(delete a._isValid,e5.createFromInputFallback(a))))
}function dQ(e,d,f){return null!=e?e:null!=d?d:f
}function dF(a){var d=new Date(e5.now());
return a._useUTC?[d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()]:[d.getFullYear(),d.getMonth(),d.getDate()]
}function du(h){var g,m,l,k,j=[];
if(!h._d){for(l=dF(h),h._w&&null==h._a[eW]&&null==h._a[fD]&&dj(h),h._dayOfYear&&(k=dQ(h._a[fZ],l[fZ]),h._dayOfYear>bZ(k)&&(eN(h)._overflowDayOfYear=!0),m=a7(k,0,h._dayOfYear),h._a[fD]=m.getUTCMonth(),h._a[eW]=m.getUTCDate()),g=0;
g<3&&null==h._a[g];
++g){h._a[g]=j[g]=l[g]
}for(;
g<7;
g++){h._a[g]=j[g]=null==h._a[g]?2===g?1:0:h._a[g]
}24===h._a[eq]&&0===h._a[d9]&&0===h._a[dY]&&0===h._a[dN]&&(h._nextDay=!0,h._a[eq]=0),h._d=(h._useUTC?a7:bn).apply(null,j),null!=h._tzm&&h._d.setUTCMinutes(h._d.getUTCMinutes()-h._tzm),h._nextDay&&(h._a[eq]=24)
}}function dj(t){var s,r,q,p,o,n,m,l;
if(s=t._w,null!=s.GG||null!=s.W||null!=s.E){o=1,n=4,r=dQ(s.GG,t._a[fZ],aD(bm(),1,4).year),q=dQ(s.W,1),p=dQ(s.E,1),(p<1||p>7)&&(l=!0)
}else{o=t._locale._week.dow,n=t._locale._week.doy;
var k=aD(bm(),o,n);
r=dQ(s.gg,t._a[fZ],k.year),q=dQ(s.w,k.week),null!=s.d?(p=s.d,(p<0||p>6)&&(l=!0)):null!=s.e?(p=s.e+o,(s.e<0||s.e>6)&&(l=!0)):p=o
}q<1||q>an(r,o,n)?eN(t)._overflowWeeks=!0:null!=l?eN(t)._overflowWeekday=!0:(m=aN(r,q,p,o,n),t._a[fZ]=m.year,t._dayOfYear=m.dayOfYear)
}function c2(r){if(r._f===e5.ISO_8601){return void ei(r)
}r._a=[],eN(r).empty=!0;
var q,p,o,n,m,l=""+r._i,k=l.length,a=0;
for(o=fj(r._f,r._locale).match(av)||[],q=0;
q<o.length;
q++){n=o[q],p=(l.match(f3(n,r))||[])[0],p&&(m=l.substr(0,l.indexOf(p)),m.length>0&&eN(r).unusedInput.push(m),l=l.slice(l.indexOf(p)+p.length),a+=p.length),fP[n]?(p?eN(r).empty=!1:eN(r).unusedTokens.push(n),eu(n,p,r)):r._strict&&!p&&eN(r).unusedTokens.push(n)
}eN(r).charsLeftOver=k-a,l.length>0&&eN(r).unusedInput.push(l),r._a[eq]<=12&&eN(r).bigHour===!0&&r._a[eq]>0&&(eN(r).bigHour=void 0),eN(r).parsedDateParts=r._a.slice(0),eN(r).meridiem=r._meridiem,r._a[eq]=cR(r._locale,r._a[eq],r._meridiem),du(r),et(r)
}function cR(f,e,h){var g;
return null==h?e:null!=f.meridiemHour?f.meridiemHour(e,h):null!=f.isPM?(g=f.isPM(h),g&&e<12&&(e+=12),g||12!==e||(e=0),e):e
}function cG(h){var g,m,l,k,j;
if(0===h._f.length){return eN(h).invalidFormat=!0,void (h._d=new Date(NaN))
}for(k=0;
k<h._f.length;
k++){j=0,g=eJ({},h),null!=h._useUTC&&(g._useUTC=h._useUTC),g._f=h._f[k],c2(g),eM(g)&&(j+=eN(g).charsLeftOver,j+=10*eN(g).unusedTokens.length,eN(g).score=j,(null==l||j<l)&&(l=j,m=g))
}eQ(h,m||g)
}function cv(d){if(!d._d){var c=fw(d._i);
d._a=eS([c.year,c.month,c.day||c.date,c.hour,c.minute,c.second,c.millisecond],function(b){return b&&parseInt(b,10)
}),du(d)
}}function b9(d){var c=new eI(et(bY(d)));
return c._nextDay&&(c.add(1,"d"),c._nextDay=void 0),c
}function bY(e){var c=e._i,f=e._f;
return e._locale=e._locale||fJ(e._l),null===c||void 0===f&&""===c?eL({nullInput:!0}):("string"==typeof c&&(e._i=c=e._locale.preparse(c)),eH(c)?new eI(et(c)):(eU(c)?e._d=c:e1(f)?cG(e):f?c2(e):bN(e),eM(e)||(e._d=null),e))
}function bN(a){var c=a._i;
void 0===c?a._d=new Date(e5.now()):eU(c)?a._d=new Date(c.valueOf()):"string"==typeof c?d1(a):e1(c)?(a._a=eS(c.slice(0),function(b){return parseInt(b,10)
}),du(a)):"object"==typeof c?cv(a):eV(c)?a._d=new Date(c):e5.createFromInputFallback(a)
}function bC(d,c,l,k,j){var e={};
return l!==!0&&l!==!1||(k=l,l=void 0),(eZ(d)&&eX(d)||e1(d)&&0===d.length)&&(d=void 0),e._isAMomentObject=!0,e._useUTC=e._isUTC=j,e._l=l,e._i=d,e._f=c,e._strict=k,b9(e)
}function bm(f,e,h,g){return bC(f,e,h,g,!1)
}function a6(f,c){var h,g;
if(1===c.length&&e1(c[0])&&(c=c[0]),!c.length){return bm()
}for(h=c[0],g=1;
g<c.length;
++g){c[g].isValid()&&!c[g][f](h)||(h=c[g])
}return h
}function aW(){var b=[].slice.call(arguments,0);
return a6("isBefore",b)
}function aM(){var b=[].slice.call(arguments,0);
return a6("isAfter",b)
}function aC(v){var u=fw(v),t=u.year||0,s=u.quarter||0,r=u.month||0,q=u.week||0,p=u.day||0,o=u.hour||0,n=u.minute||0,m=u.second||0,l=u.millisecond||0;
this._milliseconds=+l+1000*m+60000*n+1000*o*60*60,this._days=+p+7*q,this._months=+r+3*s+12*t,this._data={},this._locale=fJ(),this._bubble()
}function am(b){return b instanceof aC
}function gj(b){return b<0?Math.round(-1*b)*-1:Math.round(b)
}function fW(d,c){fn(d,0,0,function(){var b=this.utcOffset(),e="+";
return b<0&&(b=-b,e="-"),e+fo(~~(b/60),2)+c+fo(~~b%60,2)
})
}function bw(h,g){var m=(g||"").match(h);
if(null===m){return null
}var l=m[m.length-1]||[],k=(l+"").match(d3)||["-",0,0],j=+(60*k[1])+eF(k[2]);
return 0===j?0:"+"===k[0]?j:-j
}function bh(a,h){var g,f;
return h._isUTC?(g=h.clone(),f=(eH(a)||eU(a)?a.valueOf():bm(a).valueOf())-g.valueOf(),g._d.setTime(g._d.valueOf()+f),e5.updateOffset(g,!1),g):bm(a).local()
}function a1(b){return 15*-Math.round(b._d.getTimezoneOffset()/15)
}function aR(a,h){var g,f=this._offset||0;
if(!this.isValid()){return null!=a?this:NaN
}if(null!=a){if("string"==typeof a){if(a=bw(bQ,a),null===a){return this
}}else{Math.abs(a)<16&&(a=60*a)
}return !this._isUTC&&h&&(g=a1(this)),this._offset=a,this._isUTC=!0,null!=g&&this.add(g,"m"),f!==a&&(!h||this._changeInProgress?cL(this,dK(a-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e5.updateOffset(this,!0),this._changeInProgress=null)),this
}return this._isUTC?f:a1(this)
}function aH(d,c){return null!=d?("string"!=typeof d&&(d=-d),this.utcOffset(d,c),this):-this.utcOffset()
}function ax(b){return this.utcOffset(0,b)
}function ah(b){return this._isUTC&&(this.utcOffset(0,b),this._isUTC=!1,b&&this.subtract(a1(this),"m")),this
}function f8(){if(null!=this._tzm){this.utcOffset(this._tzm)
}else{if("string"==typeof this._i){var b=bw(b1,this._i);
null!=b?this.utcOffset(b):this.utcOffset(0,!0)
}}return this
}function fR(b){return !!this.isValid()&&(b=b?bm(b).utcOffset():0,(this.utcOffset()-b)%60===0)
}function fg(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()
}function ez(){if(!eK(this._isDSTShifted)){return this._isDSTShifted
}var d={};
if(eJ(d,this),d=bY(d),d._a){var c=d._isUTC?eP(d._a):bm(d._a);
this._isDSTShifted=this.isValid()&&eE(d._a,c.toArray())>0
}else{this._isDSTShifted=!1
}return this._isDSTShifted
}function en(){return !!this.isValid()&&!this._isUTC
}function d6(){return !!this.isValid()&&this._isUTC
}function dV(){return !!this.isValid()&&(this._isUTC&&0===this._offset)
}function dK(j,f){var o,n,m,l=j,k=null;
return am(j)?l={ms:j._milliseconds,d:j._days,M:j._months}:eV(j)?(l={},f?l[f]=j:l.milliseconds=j):(k=dS.exec(j))?(o="-"===k[1]?-1:1,l={y:0,d:eF(k[eW])*o,h:eF(k[eq])*o,m:eF(k[d9])*o,s:eF(k[dY])*o,ms:eF(gj(1000*k[dN]))*o}):(k=dH.exec(j))?(o="-"===k[1]?-1:1,l={y:dz(k[2],o),M:dz(k[3],o),w:dz(k[4],o),d:dz(k[5],o),h:dz(k[6],o),m:dz(k[7],o),s:dz(k[8],o)}):null==l?l={}:"object"==typeof l&&("from" in l||"to" in l)&&(m=c7(bm(l.from),bm(l.to)),l={},l.ms=m.milliseconds,l.M=m.months),n=new aC(l),am(j)&&eR(j,"_locale")&&(n._locale=j._locale),n
}function dz(e,d){var f=e&&parseFloat(e.replace(",","."));
return(isNaN(f)?0:f)*d
}function dp(e,d){var f={milliseconds:0,months:0};
return f.months=d.month()-e.month()+12*(d.year()-e.year()),e.clone().add(f.months,"M").isAfter(d)&&--f.months,f.milliseconds=+d-+e.clone().add(f.months,"M"),f
}function c7(e,d){var f;
return e.isValid()&&d.isValid()?(d=bh(d,e),e.isBefore(d)?f=dp(e,d):(f=dp(d,e),f.milliseconds=-f.milliseconds,f.months=-f.months),f):{milliseconds:0,months:0}
}function cW(d,c){return function(h,g){var b,a;
return null===g||isNaN(+g)||(eA(c,"moment()."+c+"(period, number) is deprecated. Please use moment()."+c+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=h,h=g,g=a),h="string"==typeof h?+h:h,b=dK(h,g),cL(this,b,d),this
}
}function cL(a,o,n,m){var l=o._milliseconds,k=gj(o._days),j=gj(o._months);
a.isValid()&&(m=null==m||m,l&&a._d.setTime(a._d.valueOf()+l*n),k&&fr(a,"Date",fs(a,"Date")+k*n),j&&dk(a,fs(a,"Month")+j*n),m&&e5.updateOffset(a,k||j))
}function cA(e,d){var f=e.diff(d,"days",!0);
return f<-6?"sameElse":f<-1?"lastWeek":f<0?"lastDay":f<1?"sameDay":f<2?"nextDay":f<7?"nextWeek":"sameElse"
}function ck(a,m){var l=a||bm(),k=bh(l,this).startOf("day"),j=e5.calendarFormat(this,k)||"sameElse",h=m&&(ey(m[j])?m[j].call(this,l):m[j]);
return this.format(h||this.localeData().calendar(j,this,bm(l)))
}function b3(){return new eI(this)
}function bS(e,d){var f=eH(e)?e:bm(e);
return !(!this.isValid()||!f.isValid())&&(d=fx(eK(d)?"millisecond":d),"millisecond"===d?this.valueOf()>f.valueOf():f.valueOf()<this.clone().startOf(d).valueOf())
}function bH(e,d){var f=eH(e)?e:bm(e);
return !(!this.isValid()||!f.isValid())&&(d=fx(eK(d)?"millisecond":d),"millisecond"===d?this.valueOf()<f.valueOf():this.clone().endOf(d).valueOf()<f.valueOf())
}function br(f,e,h,g){return g=g||"()",("("===g[0]?this.isAfter(f,h):!this.isBefore(f,h))&&(")"===g[1]?this.isBefore(e,h):!this.isAfter(e,h))
}function cp(f,e){var h,g=eH(f)?f:bm(f);
return !(!this.isValid()||!g.isValid())&&(e=fx(e||"millisecond"),"millisecond"===e?this.valueOf()===g.valueOf():(h=g.valueOf(),this.clone().startOf(e).valueOf()<=h&&h<=this.clone().endOf(e).valueOf()))
}function ar(d,c){return this.isSame(d,c)||this.isAfter(d,c)
}function f1(d,c){return this.isSame(d,c)||this.isBefore(d,c)
}function fH(j,h,o){var n,m,l,k;
return this.isValid()?(n=bh(j,this),n.isValid()?(m=60000*(n.utcOffset()-this.utcOffset()),h=fx(h),"year"===h||"month"===h||"quarter"===h?(k=e0(this,n),"quarter"===h?k/=3:"year"===h&&(k/=12)):(l=this-n,k="second"===h?l/1000:"minute"===h?l/60000:"hour"===h?l/3600000:"day"===h?(l-m)/86400000:"week"===h?(l-m)/604800000:l),o?k:eG(k)):NaN):NaN
}function e0(h,g){var m,l,k=12*(g.year()-h.year())+(g.month()-h.month()),j=h.clone().add(k,"months");
return g-j<0?(m=h.clone().add(k-1,"months"),l=(g-j)/(j-m)):(m=h.clone().add(k+1,"months"),l=(g-j)/(m-j)),-(k+l)||0
}function es(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}function eh(){var b=this.clone().utc();
return 0<b.year()&&b.year()<=9999?ey(Date.prototype.toISOString)?this.toDate().toISOString():fk(b,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):fk(b,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}function d0(){if(!this.isValid()){return"moment.invalid(/* "+this._i+" */)"
}var h="moment",g="";
this.isLocal()||(h=0===this.utcOffset()?"moment.utc":"moment.parseZone",g="Z");
var m="["+h+'("]',l=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",k="-MM-DD[T]HH:mm:ss.SSS",j=g+'[")]';
return this.format(m+l+k+j)
}function dP(a){a||(a=this.isUtc()?e5.defaultFormatUtc:e5.defaultFormat);
var d=fk(this,a);
return this.localeData().postformat(d)
}function dE(d,c){return this.isValid()&&(eH(d)&&d.isValid()||bm(d).isValid())?dK({to:this,from:d}).locale(this.locale()).humanize(!c):this.localeData().invalidDate()
}function dt(b){return this.from(bm(),b)
}function di(d,c){return this.isValid()&&(eH(d)&&d.isValid()||bm(d).isValid())?dK({from:this,to:d}).locale(this.locale()).humanize(!c):this.localeData().invalidDate()
}function c1(b){return this.to(bm(),b)
}function cQ(d){var c;
return void 0===d?this._locale._abbr:(c=fJ(d),null!=c&&(this._locale=c),this)
}function cF(){return this._locale
}function cu(b){switch(b=fx(b)){case"year":this.month(0);
case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":case"date":this.hours(0);
case"hour":this.minutes(0);
case"minute":this.seconds(0);
case"second":this.milliseconds(0)
}return"week"===b&&this.weekday(0),"isoWeek"===b&&this.isoWeekday(1),"quarter"===b&&this.month(3*Math.floor(this.month()/3)),this
}function b8(b){return b=fx(b),void 0===b||"millisecond"===b?this:("date"===b&&(b="day"),this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms"))
}function bX(){return this._d.valueOf()-60000*(this._offset||0)
}function bM(){return Math.floor(this.valueOf()/1000)
}function bB(){return new Date(this.valueOf())
}function bl(){var b=this;
return[b.year(),b.month(),b.date(),b.hour(),b.minute(),b.second(),b.millisecond()]
}function a5(){var b=this;
return{years:b.year(),months:b.month(),date:b.date(),hours:b.hours(),minutes:b.minutes(),seconds:b.seconds(),milliseconds:b.milliseconds()}
}function aV(){return this.isValid()?this.toISOString():null
}function aL(){return eM(this)
}function aB(){return eQ({},eN(this))
}function al(){return eN(this).overflow
}function gi(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}
}function fV(d,c){fn(0,[d,d.length],0,c)
}function bv(b){return aG.call(this,b,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)
}function bg(b){return aG.call(this,b,this.isoWeek(),this.isoWeekday(),1,4)
}function a0(){return an(this.year(),1,4)
}function aQ(){var b=this.localeData()._week;
return an(this.year(),b.dow,b.doy)
}function aG(h,g,m,l,k){var j;
return null==h?aD(this,l,k).year:(j=an(h,l,k),g>j&&(g=j),aw.call(this,h,g,m,l,k))
}function aw(j,h,o,n,m){var l=aN(j,h,o,n,m),k=a7(l.year,0,l.dayOfYear);
return this.year(k.getUTCFullYear()),this.month(k.getUTCMonth()),this.date(k.getUTCDate()),this
}function ag(b){return null==b?Math.ceil((this.month()+1)/3):this.month(3*(b-1)+this.month()%3)
}function f7(d){var c=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/86400000)+1;
return null==d?c:this.add(d-c,"d")
}function fQ(d,c){c[dN]=eF(1000*("0."+d))
}function e9(){return this._isUTC?"UTC":""
}function ex(){return this._isUTC?"Coordinated Universal Time":""
}function em(b){return bm(1000*b)
}function d5(){return bm.apply(null,arguments).parseZone()
}function dU(b){return b
}function dJ(h,g,m,l){var k=fJ(),j=eP().set(l,g);
return k[m](j,h)
}function dy(g,f,k){if(eV(g)&&(f=g,g=void 0),g=g||"",null!=f){return dJ(g,f,k,"month")
}var j,h=[];
for(j=0;
j<12;
j++){h[j]=dJ(g,j,k,"month")
}return h
}function dn(j,f,p,o){"boolean"==typeof j?(eV(f)&&(p=f,f=void 0),f=f||""):(f=j,p=f,j=!1,eV(f)&&(p=f,f=void 0),f=f||"");
var n=fJ(),m=j?n._week.dow:0;
if(null!=p){return dJ(f,(p+m)%7,o,"day")
}var l,k=[];
for(l=0;
l<7;
l++){k[l]=dJ(f,(l+m)%7,o,"day")
}return k
}function c6(d,c){return dy(d,c,"months")
}function cV(d,c){return dy(d,c,"monthsShort")
}function cK(e,d,f){return dn(e,d,f,"weekdays")
}function cz(e,d,f){return dn(e,d,f,"weekdaysShort")
}function cj(e,d,f){return dn(e,d,f,"weekdaysMin")
}function b2(){var b=this._data;
return this._milliseconds=bo(this._milliseconds),this._days=bo(this._days),this._months=bo(this._months),b.milliseconds=bo(b.milliseconds),b.seconds=bo(b.seconds),b.minutes=bo(b.minutes),b.hours=bo(b.hours),b.months=bo(b.months),b.years=bo(b.years),this
}function bR(g,f,k,j){var h=dK(f,k);
return g._milliseconds+=j*h._milliseconds,g._days+=j*h._days,g._months+=j*h._months,g._bubble()
}function bG(d,c){return bR(this,d,c,1)
}function bq(d,c){return bR(this,d,c,-1)
}function co(b){return b<0?Math.floor(b):Math.ceil(b)
}function aq(){var r,q,p,o,n,m=this._milliseconds,l=this._days,k=this._months,j=this._data;
return m>=0&&l>=0&&k>=0||m<=0&&l<=0&&k<=0||(m+=86400000*co(fF(k)+l),l=0,k=0),j.milliseconds=m%1000,r=eG(m/1000),j.seconds=r%60,q=eG(r/60),j.minutes=q%60,p=eG(q/60),j.hours=p%24,l+=eG(p/24),n=eG(f0(l)),k+=n,l-=co(fF(n)),o=eG(k/12),k%=12,j.days=l,j.months=k,j.years=o,this
}function f0(b){return 4800*b/146097
}function fF(b){return 146097*b/4800
}function eY(f){var e,h,g=this._milliseconds;
if(f=fx(f),"month"===f||"year"===f){return e=this._days+g/86400000,h=this._months+f0(e),"month"===f?h:h/12
}switch(e=this._days+Math.round(fF(this._months)),f){case"week":return e/7+g/604800000;
case"day":return e+g/86400000;
case"hour":return 24*e+g/3600000;
case"minute":return 1440*e+g/60000;
case"second":return 86400*e+g/1000;
case"millisecond":return Math.floor(86400000*e)+g;
default:throw new Error("Unknown unit "+f)
}}function er(){return this._milliseconds+86400000*this._days+this._months%12*2592000000+31536000000*eF(this._months/12)
}function eg(b){return function(){return this.as(b)
}
}function dZ(b){return b=fx(b),this[b+"s"]()
}function dO(b){return function(){return this._data[b]
}
}function dD(){return eG(this.days()/7)
}function ds(g,f,k,j,h){return h.relativeTime(f||1,!!k,g,j)
}function dh(v,u,t){var s=dK(v).abs(),r=b5(s.as("s")),q=b5(s.as("m")),p=b5(s.as("h")),o=b5(s.as("d")),n=b5(s.as("M")),m=b5(s.as("y")),l=r<bU.s&&["s",r]||q<=1&&["m"]||q<bU.m&&["mm",q]||p<=1&&["h"]||p<bU.h&&["hh",p]||o<=1&&["d"]||o<bU.d&&["dd",o]||n<=1&&["M"]||n<bU.M&&["MM",n]||m<=1&&["y"]||["yy",m];
return l[2]=u,l[3]=+v>0,l[4]=t,ds.apply(null,l)
}function c0(b){return void 0===b?b5:"function"==typeof b&&(b5=b,!0)
}function cP(d,c){return void 0!==bU[d]&&(void 0===c?bU[d]:(bU[d]=c,!0))
}function cE(e){var d=this.localeData(),f=dh(this,!e,d);
return e&&(f=d.pastFuture(+this,f)),d.postformat(f)
}function ct(){var z,y,x,w=bJ(this._milliseconds)/1000,v=bJ(this._days),u=bJ(this._months);
z=eG(w/60),y=eG(z/60),w%=60,z%=60,x=eG(u/12),u%=12;
var t=x,s=u,r=v,q=y,p=z,o=w,n=this.asSeconds();
return n?(n<0?"-":"")+"P"+(t?t+"Y":"")+(s?s+"M":"")+(r?r+"D":"")+(q||p||o?"T":"")+(q?q+"H":"")+(p?p+"M":"")+(o?o+"S":""):"P0D"
}var b7,bW;
bW=Array.prototype.some?Array.prototype.some:function(f){for(var e=Object(this),h=e.length>>>0,g=0;
g<h;
g++){if(g in e&&f.call(this,e[g],g,e)){return !0
}}return !1
};
var bL=bW,bA=e5.momentProperties=[],bk=!1,a4={};
e5.suppressDeprecationWarnings=!1,e5.deprecationHandler=null;
var aU;
aU=Object.keys?Object.keys:function(e){var d,f=[];
for(d in e){eR(e,d)&&f.push(d)
}return f
};
var aK,aA=aU,ak={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},gh={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},fU="Invalid date",bu="%d",a9=/\d{1,2}/,aZ={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},aP={},aF={},av=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,gm=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,f6={},fP={},e8=/\d/,ew=/\d\d/,el=/\d{3}/,d4=/\d{4}/,dT=/[+-]?\d{6}/,dI=/\d\d?/,dx=/\d\d\d\d?/,dm=/\d\d\d\d\d\d?/,c5=/\d{1,3}/,cU=/\d{1,4}/,cJ=/[+-]?\d{1,6}/,cy=/\d+/,ci=/[+-]?\d+/,b1=/Z|[+-]\d\d:?\d\d/gi,bQ=/Z|[+-]\d\d(?::?\d\d)?/gi,bF=/[+-]?\d+(\.\d{1,3})?/,bp=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,cn={},ap={},fZ=0,fD=1,eW=2,eq=3,d9=4,dY=5,dN=6,dC=7,dr=8;
aK=Array.prototype.indexOf?Array.prototype.indexOf:function(d){var c;
for(c=0;
c<this.length;
++c){if(this[c]===d){return c
}}return -1
};
var dg=aK;
fn("M",["MM",2],"Mo",function(){return this.month()+1
}),fn("MMM",0,0,function(b){return this.localeData().monthsShort(this,b)
}),fn("MMMM",0,0,function(b){return this.localeData().months(this,b)
}),fy("month","M"),fv("month",8),fh("M",dI),fh("MM",dI,ew),fh("MMM",function(d,c){return c.monthsShortRegex(d)
}),fh("MMMM",function(d,c){return c.monthsRegex(d)
}),fL(["M","MM"],function(d,c){c[fD]=eF(d)-1
}),fL(["MMM","MMMM"],function(g,f,k,j){var h=k._locale.monthsParse(g,j,k._strict);
null!=h?f[fD]=h:eN(k).invalidMonth=g
});
var cZ=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,cO="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),cD="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),cs=bp,b6=bp;
fn("Y",0,0,function(){var b=this.year();
return b<=9999?""+b:"+"+b
}),fn(0,["YY",2],0,function(){return this.year()%100
}),fn(0,["YYYY",4],0,"year"),fn(0,["YYYYY",5],0,"year"),fn(0,["YYYYYY",6,!0],0,"year"),fy("year","y"),fv("year",1),fh("Y",ci),fh("YY",dI,ew),fh("YYYY",cU,d4),fh("YYYYY",cJ,dT),fh("YYYYYY",cJ,dT),fL(["YYYYY","YYYYYY"],fZ),fL("YYYY",function(a,d){d[fZ]=2===a.length?e5.parseTwoDigitYear(a):eF(a)
}),fL("YY",function(a,d){d[fZ]=e5.parseTwoDigitYear(a)
}),fL("Y",function(d,c){c[fZ]=parseInt(d,10)
}),e5.parseTwoDigitYear=function(b){return eF(b)+(eF(b)>68?1900:2000)
};
var bV=ft("FullYear",!0);
fn("w",["ww",2],"wo","week"),fn("W",["WW",2],"Wo","isoWeek"),fy("week","w"),fy("isoWeek","W"),fv("week",5),fv("isoWeek",5),fh("w",dI),fh("ww",dI,ew),fh("W",dI),fh("WW",dI,ew),e4(["w","ww","W","WW"],function(f,e,h,g){e[g.substr(0,1)]=eF(f)
});
var bK={dow:0,doy:6};
fn("d",0,"do","day"),fn("dd",0,0,function(b){return this.localeData().weekdaysMin(this,b)
}),fn("ddd",0,0,function(b){return this.localeData().weekdaysShort(this,b)
}),fn("dddd",0,0,function(b){return this.localeData().weekdays(this,b)
}),fn("e",0,0,"weekday"),fn("E",0,0,"isoWeekday"),fy("day","d"),fy("weekday","e"),fy("isoWeekday","E"),fv("day",11),fv("weekday",11),fv("isoWeekday",11),fh("d",dI),fh("e",dI),fh("E",dI),fh("dd",function(d,c){return c.weekdaysMinRegex(d)
}),fh("ddd",function(d,c){return c.weekdaysShortRegex(d)
}),fh("dddd",function(d,c){return c.weekdaysRegex(d)
}),e4(["dd","ddd","dddd"],function(g,f,k,j){var h=k._locale.weekdaysParse(g,j,k._strict);
null!=h?f.d=h:eN(k).invalidWeekday=g
}),e4(["d","e","E"],function(f,e,h,g){e[g]=eF(f)
});
var bz="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),bj="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),a3="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),aT=bp,aJ=bp,az=bp;
fn("H",["HH",2],0,"hour"),fn("h",["hh",2],0,c8),fn("k",["kk",2],0,cX),fn("hmm",0,0,function(){return""+c8.apply(this)+fo(this.minutes(),2)
}),fn("hmmss",0,0,function(){return""+c8.apply(this)+fo(this.minutes(),2)+fo(this.seconds(),2)
}),fn("Hmm",0,0,function(){return""+this.hours()+fo(this.minutes(),2)
}),fn("Hmmss",0,0,function(){return""+this.hours()+fo(this.minutes(),2)+fo(this.seconds(),2)
}),cM("a",!0),cM("A",!1),fy("hour","h"),fv("hour",13),fh("a",cB),fh("A",cB),fh("H",dI),fh("h",dI),fh("HH",dI,ew),fh("hh",dI,ew),fh("hmm",dx),fh("hmmss",dm),fh("Hmm",dx),fh("Hmmss",dm),fL(["H","HH"],eq),fL(["a","A"],function(e,d,f){f._isPm=f._locale.isPM(e),f._meridiem=e
}),fL(["h","hh"],function(e,d,f){d[eq]=eF(e),eN(f).bigHour=!0
}),fL("hmm",function(f,e,h){var g=f.length-2;
e[eq]=eF(f.substr(0,g)),e[d9]=eF(f.substr(g)),eN(h).bigHour=!0
}),fL("hmmss",function(g,f,k){var j=g.length-4,h=g.length-2;
f[eq]=eF(g.substr(0,j)),f[d9]=eF(g.substr(j,2)),f[dY]=eF(g.substr(h)),eN(k).bigHour=!0
}),fL("Hmm",function(f,e,h){var g=f.length-2;
e[eq]=eF(f.substr(0,g)),e[d9]=eF(f.substr(g))
}),fL("Hmmss",function(g,f,k){var j=g.length-4,h=g.length-2;
f[eq]=eF(g.substr(0,j)),f[d9]=eF(g.substr(j,2)),f[dY]=eF(g.substr(h))
});
var aj,gg=/[ap]\.?m?\.?/i,fT=ft("Hours",!0),bt={calendar:ak,longDateFormat:gh,invalidDate:fU,ordinal:bu,ordinalParse:a9,relativeTime:aZ,months:cO,monthsShort:cD,week:bK,weekdays:bz,weekdaysMin:a3,weekdaysShort:bj,meridiemParse:gg},a8={},aY={},aO=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,aE=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,au=/Z|[+-]\d\d(?::?\d\d)?/,gl=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],f5=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],fO=/^\/?Date\((\-?\d+)/i;
e5.createFromInputFallback=eC("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(b){b._d=new Date(b._i+(b._useUTC?" UTC":""))
}),e5.ISO_8601=function(){};
var e7=eC("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var b=bm.apply(null,arguments);
return this.isValid()&&b.isValid()?b<this?this:b:eL()
}),ev=eC("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var b=bm.apply(null,arguments);
return this.isValid()&&b.isValid()?b>this?this:b:eL()
}),ek=function(){return Date.now?Date.now():+new Date
};
fW("Z",":"),fW("ZZ",""),fh("Z",bQ),fh("ZZ",bQ),fL(["Z","ZZ"],function(e,d,f){f._useUTC=!0,f._tzm=bw(bQ,e)
});
var d3=/([\+\-]|\d\d)/gi;
e5.updateOffset=function(){};
var dS=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,dH=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
dK.fn=aC.prototype;
var dw=cW(1,"add"),dl=cW(-1,"subtract");
e5.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e5.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";
var c4=eC("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return void 0===b?this.localeData():this.locale(b)
});
fn(0,["gg",2],0,function(){return this.weekYear()%100
}),fn(0,["GG",2],0,function(){return this.isoWeekYear()%100
}),fV("gggg","weekYear"),fV("ggggg","weekYear"),fV("GGGG","isoWeekYear"),fV("GGGGG","isoWeekYear"),fy("weekYear","gg"),fy("isoWeekYear","GG"),fv("weekYear",1),fv("isoWeekYear",1),fh("G",ci),fh("g",ci),fh("GG",dI,ew),fh("gg",dI,ew),fh("GGGG",cU,d4),fh("gggg",cU,d4),fh("GGGGG",cJ,dT),fh("ggggg",cJ,dT),e4(["gggg","ggggg","GGGG","GGGGG"],function(f,e,h,g){e[g.substr(0,2)]=eF(f)
}),e4(["gg","GG"],function(a,h,g,f){h[f]=e5.parseTwoDigitYear(a)
}),fn("Q",0,"Qo","quarter"),fy("quarter","Q"),fv("quarter",7),fh("Q",e8),fL("Q",function(d,c){c[fD]=3*(eF(d)-1)
}),fn("D",["DD",2],"Do","date"),fy("date","D"),fv("date",9),fh("D",dI),fh("DD",dI,ew),fh("Do",function(d,c){return d?c._ordinalParse:c._ordinalParseLenient
}),fL(["D","DD"],eW),fL("Do",function(d,c){c[eW]=eF(d.match(dI)[0],10)
});
var cT=ft("Date",!0);
fn("DDD",["DDDD",3],"DDDo","dayOfYear"),fy("dayOfYear","DDD"),fv("dayOfYear",4),fh("DDD",c5),fh("DDDD",el),fL(["DDD","DDDD"],function(e,d,f){f._dayOfYear=eF(e)
}),fn("m",["mm",2],0,"minute"),fy("minute","m"),fv("minute",14),fh("m",dI),fh("mm",dI,ew),fL(["m","mm"],d9);
var cI=ft("Minutes",!1);
fn("s",["ss",2],0,"second"),fy("second","s"),fv("second",15),fh("s",dI),fh("ss",dI,ew),fL(["s","ss"],dY);
var cx=ft("Seconds",!1);
fn("S",0,0,function(){return ~~(this.millisecond()/100)
}),fn(0,["SS",2],0,function(){return ~~(this.millisecond()/10)
}),fn(0,["SSS",3],0,"millisecond"),fn(0,["SSSS",4],0,function(){return 10*this.millisecond()
}),fn(0,["SSSSS",5],0,function(){return 100*this.millisecond()
}),fn(0,["SSSSSS",6],0,function(){return 1000*this.millisecond()
}),fn(0,["SSSSSSS",7],0,function(){return 10000*this.millisecond()
}),fn(0,["SSSSSSSS",8],0,function(){return 100000*this.millisecond()
}),fn(0,["SSSSSSSSS",9],0,function(){return 1000000*this.millisecond()
}),fy("millisecond","ms"),fv("millisecond",16),fh("S",c5,e8),fh("SS",c5,ew),fh("SSS",c5,el);
var ch;
for(ch="SSSS";
ch.length<=9;
ch+="S"){fh(ch,cy)
}for(ch="S";
ch.length<=9;
ch+="S"){fL(ch,fQ)
}var b0=ft("Milliseconds",!1);
fn("z",0,0,"zoneAbbr"),fn("zz",0,0,"zoneName");
var bP=eI.prototype;
bP.add=dw,bP.calendar=ck,bP.clone=b3,bP.diff=fH,bP.endOf=b8,bP.format=dP,bP.from=dE,bP.fromNow=dt,bP.to=di,bP.toNow=c1,bP.get=fq,bP.invalidAt=al,bP.isAfter=bS,bP.isBefore=bH,bP.isBetween=br,bP.isSame=cp,bP.isSameOrAfter=ar,bP.isSameOrBefore=f1,bP.isValid=aL,bP.lang=c4,bP.locale=cQ,bP.localeData=cF,bP.max=ev,bP.min=e7,bP.parsingFlags=aB,bP.set=fp,bP.startOf=cu,bP.subtract=dl,bP.toArray=bl,bP.toObject=a5,bP.toDate=bB,bP.toISOString=eh,bP.inspect=d0,bP.toJSON=aV,bP.toString=es,bP.unix=bM,bP.valueOf=bX,bP.creationData=gi,bP.year=bV,bP.isLeapYear=bD,bP.weekYear=bv,bP.isoWeekYear=bg,bP.quarter=bP.quarters=ag,bP.month=c3,bP.daysInMonth=cS,bP.week=bP.weeks=bi,bP.isoWeek=bP.isoWeeks=a2,bP.weeksInYear=aQ,bP.isoWeeksInYear=a0,bP.date=cT,bP.day=bP.days=eB,bP.weekday=eo,bP.isoWeekday=d7,bP.dayOfYear=f7,bP.hour=bP.hours=fT,bP.minute=bP.minutes=cI,bP.second=bP.seconds=cx,bP.millisecond=bP.milliseconds=b0,bP.utcOffset=aR,bP.utc=ax,bP.local=ah,bP.parseZone=f8,bP.hasAlignedHourOffset=fR,bP.isDST=fg,bP.isLocal=en,bP.isUtcOffset=d6,bP.isUtc=dV,bP.isUTC=dV,bP.zoneAbbr=e9,bP.zoneName=ex,bP.dates=eC("dates accessor is deprecated. Use date instead.",cT),bP.months=eC("months accessor is deprecated. Use month instead",c3),bP.years=eC("years accessor is deprecated. Use year instead",bV),bP.zone=eC("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",aH),bP.isDSTShifted=eC("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",ez);
var bE=fK.prototype;
bE.calendar=fI,bE.longDateFormat=fG,bE.invalidDate=fE,bE.ordinal=fC,bE.preparse=dU,bE.postformat=dU,bE.relativeTime=fB,bE.pastFuture=fz,bE.set=fN,bE.months=d2,bE.monthsShort=dR,bE.monthsParse=dv,bE.monthsRegex=cw,bE.monthsShortRegex=cH,bE.week=gk,bE.firstDayOfYear=bx,bE.firstDayOfWeek=fX,bE.weekdays=ay,bE.weekdaysMin=f9,bE.weekdaysShort=ai,bE.weekdaysParse=fi,bE.weekdaysRegex=dW,bE.weekdaysShortRegex=dL,bE.weekdaysMinRegex=dA,bE.isPM=cl,bE.meridiem=b4,cq("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var d=e%10,f=1===eF(e%100/10)?"th":1===d?"st":2===d?"nd":3===d?"rd":"th";
return e+f
}}),e5.lang=eC("moment.lang is deprecated. Use moment.locale instead.",cq),e5.langData=eC("moment.langData is deprecated. Use moment.localeData instead.",fJ);
var bo=Math.abs,cm=eg("ms"),ao=eg("s"),fY=eg("m"),fA=eg("h"),eT=eg("d"),ep=eg("w"),d8=eg("M"),dX=eg("y"),dM=dO("milliseconds"),dB=dO("seconds"),c9=dO("minutes"),cY=dO("hours"),cN=dO("days"),cC=dO("months"),cr=dO("years"),b5=Math.round,bU={s:45,m:45,h:22,d:26,M:11},bJ=Math.abs,by=aC.prototype;
return by.abs=b2,by.add=bG,by.subtract=bq,by.as=eY,by.asMilliseconds=cm,by.asSeconds=ao,by.asMinutes=fY,by.asHours=fA,by.asDays=eT,by.asWeeks=ep,by.asMonths=d8,by.asYears=dX,by.valueOf=er,by._bubble=aq,by.get=dZ,by.milliseconds=dM,by.seconds=dB,by.minutes=c9,by.hours=cY,by.days=cN,by.weeks=dD,by.months=cC,by.years=cr,by.humanize=cE,by.toISOString=ct,by.toString=ct,by.toJSON=ct,by.locale=cQ,by.localeData=cF,by.toIsoString=eC("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ct),by.lang=c4,fn("X",0,0,"unix"),fn("x",0,0,"valueOf"),fh("x",ci),fh("X",bF),fL("X",function(e,d,f){f._d=new Date(1000*parseFloat(e,10))
}),fL("x",function(e,d,f){f._d=new Date(eF(e))
}),e5.version="2.17.1",e3(bm),e5.fn=bP,e5.min=aW,e5.max=aM,e5.now=ek,e5.utc=eP,e5.unix=em,e5.months=c6,e5.isDate=eU,e5.locale=cq,e5.invalid=eL,e5.duration=dK,e5.isMoment=eH,e5.weekdays=cK,e5.parseZone=d5,e5.localeData=fJ,e5.isDuration=am,e5.monthsShort=cV,e5.weekdaysMin=cj,e5.defineLocale=at,e5.updateLocale=f2,e5.locales=e2,e5.weekdaysShort=cz,e5.normalizeUnits=fx,e5.relativeTimeRounding=c0,e5.relativeTimeThreshold=cP,e5.calendarFormat=cA,e5.prototype=bP,e5
});
!function(d,c){"function"==typeof define&&define.amd?define(["moment"],c):"object"==typeof module&&module.exports?module.exports=c(require("moment")):c(d.moment)
}(this,function(aC){function aB(b){return b>96?b-87:b>64?b-29:b-48
}function aA(r){var q,p=0,o=r.split("."),n=o[0],m=o[1]||"",l=1,k=0,b=1;
for(45===r.charCodeAt(0)&&(p=1,b=-1),p;
p<n.length;
p++){q=aB(n.charCodeAt(p)),k=60*k+q
}for(p=0;
p<m.length;
p++){l/=60,q=aB(m.charCodeAt(p)),k+=q*l
}return k*b
}function az(d){for(var c=0;
c<d.length;
c++){d[c]=aA(d[c])
}}function ay(e,d){for(var f=0;
f<d;
f++){e[f]=Math.round((e[f-1]||0)+60000*e[f])
}e[d-1]=1/0
}function ax(f,e){var h,g=[];
for(h=0;
h<e.length;
h++){g[h]=f[e[h]]
}return g
}function aw(e){var d=e.split("|"),k=d[2].split(" "),j=d[3].split(""),f=d[4].split(" ");
return az(k),az(j),az(f),ay(f,j.length),{name:d[0],abbrs:ax(d[1].split(" "),j),offsets:ax(k,j),untils:f,population:0|d[5]}
}function av(b){b&&this._set(aw(b))
}function au(e){var d=e.toTimeString(),f=d.match(/\([a-z ]+\)/i);
f&&f[0]?(f=f[0].match(/[A-Z]/g),f=f?f.join(""):void 0):(f=d.match(/[A-Z]{3,5}/g),f=f?f[0]:void 0),"GMT"===f&&(f=void 0),this.at=+e,this.abbr=f,this.offset=e.getTimezoneOffset()
}function at(b){this.zone=b,this.offsetScore=0,this.abbrScore=0
}function ar(f,e){for(var h,g;
g=60000*((e.at-f.at)/120000|0);
){h=new au(new Date(f.at+g)),h.offset===f.offset?f=h:e=h
}return f
}function aq(){var h,g,m,l=(new Date).getFullYear()-2,k=new au(new Date(l,0,1)),j=[k];
for(m=1;
m<48;
m++){g=new au(new Date(l,m,1)),g.offset!==k.offset&&(h=ar(k,g),j.push(h),j.push(new au(new Date(h.at+60000)))),k=g
}for(m=0;
m<4;
m++){j.push(new au(new Date(l+m,0,1))),j.push(new au(new Date(l+m,6,1)))
}return j
}function ap(d,c){return d.offsetScore!==c.offsetScore?d.offsetScore-c.offsetScore:d.abbrScore!==c.abbrScore?d.abbrScore-c.abbrScore:c.zone.population-d.zone.population
}function ao(f,d){var h,g;
for(az(d),h=0;
h<d.length;
h++){g=d[h],T[g]=T[g]||{},T[g][f]=!0
}}function an(j){var h,o,n,m=j.length,l={},k=[];
for(h=0;
h<m;
h++){n=T[j[h].offset]||{};
for(o in n){n.hasOwnProperty(o)&&(l[o]=!0)
}}for(h in l){l.hasOwnProperty(h)&&k.push(U[h])
}return k
}function am(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;
if(t){var s=U[ak(t)];
if(s){return s
}ac("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")
}}catch(r){}var q,p,o,n=aq(),m=n.length,l=an(n),j=[];
for(p=0;
p<l.length;
p++){for(q=new at(ai(l[p]),m),o=0;
o<m;
o++){q.scoreOffsetAt(n[o])
}j.push(q)
}return j.sort(ap),j.length>0?j[0].zone.name:void 0
}function al(b){return Y&&!b||(Y=am()),Y
}function ak(b){return(b||"").toLowerCase().replace(/\//g,"_")
}function aj(g){var f,k,j,h;
for("string"==typeof g&&(g=[g]),f=0;
f<g.length;
f++){j=g[f].split("|"),k=j[0],h=ak(k),W[h]=g[f],U[h]=k,j[5]&&ao(h,j[2].split(" "))
}}function ai(f,e){f=ak(f);
var h,g=W[f];
return g instanceof av?g:"string"==typeof g?(g=new av(g),W[f]=g,g):V[f]&&e!==ai&&(h=ai(V[f],ai))?(g=W[f]=new av,g._set(h),g.name=U[f],g):null
}function ah(){var d,c=[];
for(d in U){U.hasOwnProperty(d)&&(W[d]||W[V[d]])&&U[d]&&c.push(U[d])
}return c.sort()
}function ag(g){var f,k,j,h;
for("string"==typeof g&&(g=[g]),f=0;
f<g.length;
f++){k=g[f].split("|"),j=ak(k[0]),h=ak(k[1]),V[j]=h,U[j]=k[0],V[h]=j,U[h]=k[1]
}}function af(b){aj(b.zones),ag(b.links),ab.dataVersion=b.version
}function ae(b){return ae.didShowError||(ae.didShowError=!0,ac("moment.tz.zoneExists('"+b+"') has been deprecated in favor of !moment.tz.zone('"+b+"')")),!!ai(b)
}function ad(b){return !(!b._a||void 0!==b._tzm)
}function ac(b){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(b)
}function ab(a){var k=Array.prototype.slice.call(arguments,0,-1),j=arguments[arguments.length-1],h=ai(j),g=aC.utc.apply(null,k);
return h&&!aC.isMoment(a)&&ad(g)&&g.add(h.parse(g),"minutes"),g.tz(j),g
}function aa(b){return function(){return this._z?this._z.abbr(this):b.call(this)
}
}function Z(b){return function(){return this._z=null,b.apply(this,arguments)
}
}var Y,X="0.5.13",W={},V={},U={},T={},S=aC.version.split("."),R=+S[0],Q=+S[1];
(R<2||2===R&&Q<6)&&ac("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+aC.version+". See momentjs.com"),av.prototype={_set:function(b){this.name=b.name,this.abbrs=b.abbrs,this.untils=b.untils,this.offsets=b.offsets,this.population=b.population
},_index:function(f){var e,h=+f,g=this.untils;
for(e=0;
e<g.length;
e++){if(h<g[e]){return e
}}},parse:function(r){var q,p,o,n,m=+r,l=this.offsets,k=this.untils,j=k.length-1;
for(n=0;
n<j;
n++){if(q=l[n],p=l[n+1],o=l[n?n-1:n],q<p&&ab.moveAmbiguousForward?q=p:q>o&&ab.moveInvalidForward&&(q=o),m<k[n]-60000*q){return l[n]
}}return l[j]
},abbr:function(b){return this.abbrs[this._index(b)]
},offset:function(b){return this.offsets[this._index(b)]
}},at.prototype.scoreOffsetAt=function(b){this.offsetScore+=Math.abs(this.zone.offset(b.at)-b.offset),this.zone.abbr(b.at).replace(/[^A-Z]/g,"")!==b.abbr&&this.abbrScore++
},ab.version=X,ab.dataVersion="",ab._zones=W,ab._links=V,ab._names=U,ab.add=aj,ab.link=ag,ab.load=af,ab.zone=ai,ab.zoneExists=ae,ab.guess=al,ab.names=ah,ab.Zone=av,ab.unpack=aw,ab.unpackBase60=aA,ab.needsOffset=ad,ab.moveInvalidForward=!0,ab.moveAmbiguousForward=!1;
var P=aC.fn;
aC.tz=ab,aC.defaultZone=null,aC.updateOffset=function(a,h){var g,f=aC.defaultZone;
void 0===a._z&&(f&&ad(a)&&!a._isUTC&&(a._d=aC.utc(a._a)._d,a.utc().add(f.parse(a),"minutes")),a._z=f),a._z&&(g=a._z.offset(a),Math.abs(g)<16&&(g/=60),void 0!==a.utcOffset?a.utcOffset(-g,h):a.zone(g,h))
},P.tz=function(a){return a?(this._z=ai(a),this._z?aC.updateOffset(this):ac("Moment Timezone has no data for "+a+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0
},P.zoneName=aa(P.zoneName),P.zoneAbbr=aa(P.zoneAbbr),P.utc=Z(P.utc),aC.tz.setDefault=function(a){return(R<2||2===R&&Q<9)&&ac("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+aC.version+"."),aC.defaultZone=a?ai(a):null,aC
};
var O=aC.momentProperties;
return"[object Array]"===Object.prototype.toString.call(O)?(O.push("_z"),O.push("_a")):O&&(O._z=null),af({version:"2017b",zones:["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5","Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5","Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5","Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5","Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6","Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldWV.E 2xonV.E|39e4","Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5","Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3","Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4","Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5","Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|01212121212121212121212121212121213|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|51e5","Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5","Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5","Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5","Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5","Africa/Windhoek|+0130 SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|012134545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2GJdu 1Ajdu 1cL0 1SqL0 9NA0 11D0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0|32e4","America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3","America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4","America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0","America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0","America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0","America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0","America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0","America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0","America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0","America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4","America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5","America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2","America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5","America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3","America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4","America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5","America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3","America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2","America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2","America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5","America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4","America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2","America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|77e4","America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5","America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3","America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5","America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4","America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5","America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2","America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|54e4","America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8","America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2","America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3","America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|01234252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 Jy10 SL0 dnB0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5","America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5","America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3","America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5","America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5","America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5","America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3","America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212123|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5","America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5","America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4","America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4","America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2","America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2","America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4","America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3","America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/La_Paz|CMT BOST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5","America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6","America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4","America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5","America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5","America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4","America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4","America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4","America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2","America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5","America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6","America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3","America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5","America/Montevideo|MMT -0330 -03 -02 -0230|3I.I 3u 30 20 2u|012121212121212121212121213232323232324242423243232323232323232323232323232323232323232|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5","America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4","America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2","America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2","America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2","America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4","America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5","America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4","America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4","America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5","America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0","America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842","America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2","America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5","America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4","America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229","America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4","America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5","America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5","America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|20e6","America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452","America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2","America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3","America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5","America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656","America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4","America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642","America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","Antarctica/Casey|-00 +08 +11|0 -80 -b0|0121212|-2q00 1DjS0 T90 40P0 KL0 blz0|10","Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70","Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80","Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1","Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60","Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5","Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","Antarctica/Rothera|-00 -03|0 30|01|gOo0|130","Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20","Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40","Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25","Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4","Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5","Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5","Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5","Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3","Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4","Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4","Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4","Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0","Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5","Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4","Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6","Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5","Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4","Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4","Asia/Kolkata|HMT +0630 IST|-5R.k -6u -5u|01212|-18LFR.k 1unn.k HB0 7zX0|15e6","Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6","Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5","Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6","Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5","Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4","Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5","Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4","Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212123|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0","Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5","Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4","Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5","Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5","Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6","Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4","Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4","Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5","Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4","Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6","Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5","Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5","Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5","Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4","Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4","Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5","Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6","Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4","Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4","Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5","Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4","Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4","Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|01231|-2um8n 97XR 1lTzu 2Onc0|29e5","Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4","Asia/Rangoon|RMT +0630 +09|-6o.E -6u -90|0121|-21Jio.E SmnS.E 7j9u|48e5","Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4","Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6","Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2","Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5","Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5","Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5","Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3","Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJH0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6","Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4","Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3","Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2xomp.U 1qOMp.U 7zX0 1djf0|50e4","Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3","Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4","Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4","Atlantic/South_Georgia|-02|20|0||30","Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2","Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5","Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3","Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746","Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4","Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368","Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4","Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347","Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10","Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5","Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5","CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2","EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","EST|EST|50|0|","EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g5X0 14p0 1wn0 17d0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Etc/GMT+0|GMT|0|0|","Etc/GMT+1|-01|10|0|","Etc/GMT+10|-10|a0|0|","Etc/GMT+11|-11|b0|0|","Etc/GMT+12|-12|c0|0|","Etc/GMT+3|-03|30|0|","Etc/GMT+4|-04|40|0|","Etc/GMT+5|-05|50|0|","Etc/GMT+6|-06|60|0|","Etc/GMT+7|-07|70|0|","Etc/GMT+8|-08|80|0|","Etc/GMT+9|-09|90|0|","Etc/GMT-1|+01|-10|0|","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Pohnpei|+11|-b0|0||34e3","Pacific/Tarawa|+12|-c0|0||29e3","Etc/GMT-13|+13|-d0|0|","Etc/GMT-14|+14|-e0|0|","Etc/GMT-2|+02|-20|0|","Etc/GMT-3|+03|-30|0|","Etc/GMT-4|+04|-40|0|","Etc/GMT-5|+05|-50|0|","Etc/GMT-6|+06|-60|0|","Indian/Christmas|+07|-70|0||21e2","Etc/GMT-8|+08|-80|0|","Pacific/Palau|+09|-90|0||21e3","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5","Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3","Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5","Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6","Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5","Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5","Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5","Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4","Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4","Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3","Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4","Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5","Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4","Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5","Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5","Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5","Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3","Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6","Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6","Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4","Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5","Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5","Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810","Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5","Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4","Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5","Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4","HST|HST|a0|0|","Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2","Indian/Cocos|+0630|-6u|0||596","Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130","Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3","Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4","Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4","Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4","Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3","MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","MST|MST|70|0|","MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600","PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4","Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3","Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B8n0|1","Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483","Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0|88e4","Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3","Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125","Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4","Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4","Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4","Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B8nk|51e2","Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2","Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3","Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2","Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2","Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3","Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2","Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4","Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3","Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56","Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3","Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4","Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121212121212121212121212121212121212121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0|75e3","WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],links:["Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Sao_Tome","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/St_Helena","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Khartoum|Africa/Juba","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Atikokan|America/Coral_Harbour","America/Chicago|US/Central","America/Curacao|America/Aruba","America/Curacao|America/Kralendijk","America/Curacao|America/Lower_Princes","America/Denver|America/Shiprock","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Panama|America/Cayman","America/Phoenix|US/Arizona","America/Port_of_Spain|America/Anguilla","America/Port_of_Spain|America/Antigua","America/Port_of_Spain|America/Dominica","America/Port_of_Spain|America/Grenada","America/Port_of_Spain|America/Guadeloupe","America/Port_of_Spain|America/Marigot","America/Port_of_Spain|America/Montserrat","America/Port_of_Spain|America/St_Barthelemy","America/Port_of_Spain|America/St_Kitts","America/Port_of_Spain|America/St_Lucia","America/Port_of_Spain|America/St_Thomas","America/Port_of_Spain|America/St_Vincent","America/Port_of_Spain|America/Tortola","America/Port_of_Spain|America/Virgin","America/Regina|Canada/East-Saskatchewan","America/Regina|Canada/Saskatchewan","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Tijuana|America/Ensenada","America/Tijuana|America/Santa_Isabel","America/Tijuana|Mexico/BajaNorte","America/Toronto|America/Montreal","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Singapore","Asia/Macau|Asia/Macao","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Qatar|Asia/Bahrain","Asia/Rangoon|Asia/Yangon","Asia/Riyadh|Asia/Aden","Asia/Riyadh|Asia/Kuwait","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|PRC","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Asia/Kashgar","Atlantic/Faroe|Atlantic/Faeroe","Atlantic/Reykjavik|Iceland","Atlantic/South_Georgia|Etc/GMT+2","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/Lord_Howe|Australia/LHI","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/NSW","Etc/GMT+0|Etc/GMT","Etc/GMT+0|Etc/GMT-0","Etc/GMT+0|Etc/GMT0","Etc/GMT+0|Etc/Greenwich","Etc/GMT+0|GMT","Etc/GMT+0|GMT+0","Etc/GMT+0|GMT-0","Etc/GMT+0|GMT0","Etc/GMT+0|Greenwich","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Helsinki|Europe/Mariehamn","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Portugal","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Oslo|Arctic/Longyearbyen","Europe/Oslo|Atlantic/Jan_Mayen","Europe/Prague|Europe/Bratislava","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Europe/Zurich|Europe/Busingen","Europe/Zurich|Europe/Vaduz","Indian/Christmas|Etc/GMT-7","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kwajalein|Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Palau|Etc/GMT-9","Pacific/Pohnpei|Etc/GMT-11","Pacific/Pohnpei|Pacific/Ponape","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tarawa|Etc/GMT-12","Pacific/Tarawa|Pacific/Funafuti","Pacific/Tarawa|Pacific/Wake","Pacific/Tarawa|Pacific/Wallis"]}),aC
});
eval(function(h,b,j,d,g,f){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))
};
if(!"".replace(/^/,String)){while(j--){f[g(j)]=d[j]||g(j)
}d=[function(a){return f[a]
}];
g=function(){return"\\w+"
};
j=1
}while(j--){if(d[j]){h=h.replace(new RegExp("\\b"+g(j)+"\\b","g"),d[j])
}}return h
}("7 $d(d){1d 8.5X(d)}6 1e=2G.5W;4(1e!='5V:'){1e='5U:'}6 21=1e+'//5.1l/3r/3w-3g-3M.3X';6 2H='';6 2l=L;6 28='U';6 1P='';6 1L='';6 1Z='5T 2g';6 27='5S 2g';6 22='5J 2g';6 2j='5I 2g';6 2b='5F 2g';6 2c='5E 5C';6 2n=U;6 2q=U;6 2r=U;6 2s=U;6 2x=U;6 2z=U;6 2D=L;6 5=7(){6 D=L,3F=5B,R=1,26='',3e,3d=L,3c=L;1d{1y:7(){1t{21=21}1u(e){21=1e+'//5.1l/3r/3w-3g-3M.3X'}1t{2H=5A}1u(e){}1t{2l=5x}1u(e){}1t{28=5w}1u(e){}6 b=5.3B(2H);6 c=8.2d('*');2e(6 d=0;d<c.1D;d+=1){6 f='',2a=L,5u=c[d].V,Z='';4(5.Q(c[d],'5')){6 g=c[d].2d('H');2e(6 m=0;m<g.1D;m+=1){4(5.Q(g[m],'39')){g[m].I.J='K'}4(5.Q(g[m],'38')){g[m].I.J='K';f+='&5t='+Y(5.12(g[m].S))}4(5.Q(g[m],'36')){g[m].I.J='K';f+='&5s='+Y(5.12(g[m].S))}4(5.Q(g[m],'35')){g[m].I.J='K';f+='&5p='+Y(5.12(g[m].S))}4(5.Q(g[m],'34')){g[m].I.J='K';f+='&5m='+Y(5.12(g[m].S))}4(5.Q(g[m],'33')){g[m].I.J='K';f+='&5l='+Y(5.12(g[m].S))}4(5.Q(g[m],'32')){g[m].I.J='K';f+='&5k='+Y(5.12(g[m].S))}4(5.Q(g[m],'30')){g[m].I.J='K';f+='&5j='+Y(5.12(g[m].S))}4(5.Q(g[m],'2Y')){g[m].I.J='K';f+='&5g='+Y(5.12(g[m].S))}4(5.Q(g[m],'3K')){g[m].I.J='K';f+='&5d='+Y(5.12(g[m].S))}4(5.Q(g[m],'2V')){g[m].I.J='K';f+='&5c='+Y(5.12(g[m].S))}4(5.Q(g[m],'5b')){g[m].I.J='K';f+='&5a='+Y(5.12(g[m].S))}4(5.Q(g[m],'59')){g[m].I.J='K';f+='&58='+Y(5.12(g[m].S))}4(5.Q(g[m],'57')){g[m].I.J='K';f+='&56='+Y(5.12(g[m].S))}4(5.Q(g[m],'55')){g[m].I.J='K';f+='&54='+Y(5.12(g[m].S))}4(5.Q(g[m],'2U')){4(g[m].S!=''){g[m].I.J='K';6 h=g[m].S.1o(/ /1w,\"\");f+='&2a='+Y(h);2a=U}}}4(b){f+='&53=L'}f=f.1o(/'/1w,\"Â´\");4(1L!=''){1L=1L+',';6 i=1L.3j(',');2e(6 a=0;a<i.1D;a+=1){4(2n&&i[a]=='1j'){Z+='<H 16=\"3A\" P-N=\"'+R+'\" T=\"5.13(X,\\'1j\\',\\''+f+'\\');\">'+1Z+'</H>'}4(2q&&i[a]=='1h'){Z+='<H 16=\"3O\" P-N=\"'+R+'\" T=\"5.13(X,\\'1h\\',\\''+f+'\\');\">'+27+'</H>'}4(2r&&i[a]=='1g'){Z+='<H 16=\"3R\" P-N=\"'+R+'\" T=\"5.13(X,\\'1g\\',\\''+f+'\\');\">'+22+'</H>'}4(2s&&i[a]=='1q'){Z+='<H 16=\"3U\" P-N=\"'+R+'\" T=\"5.13(X,\\'1q\\',\\''+f+'\\');\">'+2j+'</H>'}4(2x&&i[a]=='1f'){Z+='<H 16=\"3Y\" P-N=\"'+R+'\" T=\"5.13(X,\\'1f\\',\\''+f+'\\');\">'+2b+'</H>'}4(2a&&i[a]=='1i'){4(2z&&i[a]=='1i'){Z+='<H 16=\"52\" P-N=\"'+R+'\" T=\"5.13(X,\\'1i\\',\\''+f+'\\');\">'+2c+'</H>'}}}}G{4(2n){Z+='<H 16=\"3A\" P-N=\"'+R+'\" T=\"5.13(X,\\'1j\\',\\''+f+'\\');\">'+1Z+'</H>'}4(2q){Z+='<H 16=\"3O\" P-N=\"'+R+'\" T=\"5.13(X,\\'1h\\',\\''+f+'\\');\">'+27+'</H>'}4(2r){Z+='<H 16=\"3R\" P-N=\"'+R+'\" T=\"5.13(X,\\'1g\\',\\''+f+'\\');\">'+22+'</H>'}4(2s){Z+='<H 16=\"3U\" P-N=\"'+R+'\" T=\"5.13(X,\\'1q\\',\\''+f+'\\');\">'+2j+'</H>'}4(2x){Z+='<H 16=\"3Y\" P-N=\"'+R+'\" T=\"5.13(X,\\'1f\\',\\''+f+'\\');\">'+2b+'</H>'}4(2a){4(2z){Z+='<H P-N=\"'+R+'\" T=\"5.13(X,\\'1i\\',\\''+f+'\\');\">'+2c+'</H>'}}}4(!b){Z+='<1I 16=\"4d\"><1I 16=\"4e\"></1I><1I 16=\"2T\" P-N=\"'+R+'\" T=\"5.13(X,\\'2R\\');\">51</1I></1I>'}c[d].2w='2Q'+R;c[d].V=c[d].V.1o(/5/1w,'');c[d].V=c[d].V+' 5-E';c[d].4Z='';6 j=c[d].29('P-2C');4(j){c[d].3x('P-2O',f);c[d].3x('P-N',R);c[d].T=7(){5.2C(X);1d L}}G{4(2l){c[d].4Y=7(){4X(3e);5.11(X,'1H','1H',U)};c[d].4W=7(){3e=1O(\"5.3H();\",4V)};c[d].T=7(){1d L}}G{c[d].T=7(){5.11(X,'1H','1H');1d L}}}6 k=c[d];6 l=8.2k('H');l.2w='2Q'+R+'-E';l.V='1s';l.S=Z;k.1F(l);R++}}4(28=='L'){5.1Y()}G{5.3Q(b)}},2C:7(f){6 a=f.29('P-2O');6 b=f.29('P-2C');5.13(f,b,a)},13:7(f,a,b){6 c='',N=2G.2N,2p=U,4U=3V 4T();4(a=='1j'){c=1e+'//5.1l/1V/?1J=4S'+b+'&1K='+N;2p=L}4(a=='1h'){c=1e+'//5.1l/1V/?1J=4R'+b+'&1K='+N}4(a=='1g'){c=1e+'//5.1l/1V/?1J=4Q'+b+'&1K='+N}4(a=='1q'){c=1e+'//5.1l/1V/?1J=4P'+b+'&1K='+N}4(a=='1f'){c=1e+'//5.1l/1V/?1J=4O'+b+'&1K='+N;2p=L}4(a=='1i'){c=1e+'//5.1l/1V/?1J=4N'+b+'&1K='+N}4(a=='2R'){c=1e+'//5.1l/'}4(c!=''){4(a!='2R'){6 d=f.29('P-N');6 g=$d('2Q'+d);4(g){6 h=g.29('P-4L');4(h!=4a){h=h.1o(/4K-3g/1w,a);1t{4j(h)}1u(e){}}}}4(2p){19.4J(c)}G{2G.2N=c}}4(1P){2e(6 i=0;i<1P.1D;i++){1t{4j(1P[i])}1u(e){4G(e.4F)}}}},3Q:7(a){4(!3c){6 b;b='.5-E {J:4D-1Q;1R:3n;1m-4C:4B;1x:#4A!1U;1z:#3u 2O('+21+') 4z-4y 2h 50%;M-1T:K!1U;W:O 1k #4v;1x:#3D;1m-2P:3E;1m-25:3G;M-1T:K;24:2h 2S 3I 4r;-23-W-1E:1v;-2i-W-1E:1v;}';b+='.5-E:2W {W:O 1k #4l;1x:#3D;1m-2P:3E;1m-25:3G;M-1T:K!1U;}';b+='.5-E:5e {1r:O;}';b+='.5-2Z {1z-1x:#4k;}';4(a){b+='.1s {2E:2L;1R:2B;z-2y:3Z;24:1a 1a 1a 1a;1z:#2t;M-37:1b;J:K;2J-1r:-1v;2J-1b:-O;W-1r:O 1k #44;W-1A:O 1k #2A;W-47:O 1k #48;W-1b:O 1k #2A;-23-W-1E:1v;-2i-W-1E:1v;-2i-1G-1M:O 1N 1B 1S(0,0,0,0.15);-23-1G-1M:O 1N 1B 1S(0,0,0,0.15);1G-1M:O 1N 1B 1S(0,0,0,0.15);}'}G{b+='.1s {2E:2L;1R:2B;z-2y:3Z;24:1B 1a 1a 1a;1z:#2t;M-37:1b;J:K;2J-1r:-1v;2J-1b:-O;W-1r:O 1k #44;W-1A:O 1k #2A;W-47:O 1k #48;W-1b:O 1k #2A;-23-W-1E:1v;-2i-W-1E:1v;-2i-1G-1M:O 1N 1B 1S(0,0,0,0.15);-23-1G-1M:O 1N 1B 1S(0,0,0,0.15);1G-1M:O 1N 1B 1S(0,0,0,0.15);}'}b+='.1s H {J:1Q;3i:4g;4h-2m:3T%;1z:#2t;M-1T:K;1m-25:2S;1x:#2X;24:3I 2K 2h 4m;}';b+='.1s H:2W {1z:#3u;1x:#2X;M-1T:K;1m-25:2S;}';b+='.5 H {J:K!1U;}';b+='.5-E .39,.5-E .38,.5-E .36,.5-E .35,.5-E .34,.5-E .33,.5-E .32,.5-E .30,.5-E .2Y,.5-E .2U,.5-E .2V {J:K!1U;}';b+='.1s .4d {2E:2L;2m:4n;J:1Q;1R:3n;3i:4o;}';b+='.1s .4e {2E:4p;2m:O;4q:3J;1z:#4s;1R:2B;z-2y:4t;1b:2K;1r:2h;}';b+='.1s .2T {1R:2B;1r:4u;3i:4g;1A:2K;24-1b:2K;1m-I:3C;1m-2P:3C;M-37:1A;z-2y:4w;4h-2m:3T%;1z:#2t;M-1T:K;1m-25:2h;1x:#4x;}';b+='.1s .2T:2W {1x:#2X;}';6 c=8.2k(\"I\");c.3y=\"M/2I\";c.2w=\"3v\";4(c.2F){c.2F.3q=b}G{c.1F(8.2M(b))}8.2d(\"3k\")[0].1F(c);3c=U}},1Y:7(){4(!3d){1t{6 a='.5 {4E:3J;}';a+='.5-E .39,.5-E .38,.5-E .36,.5-E .35,.5-E .34,.5-E .33,.5-E .32,.5-E .30,.5-E .2Y,.5-E .3K,.5-E .2U,.5-E .2V {J:K!1U;}';6 b=8.2k(\"I\");b.3y=\"M/2I\";4(b.2F){b.2F.3q=a}G{b.1F(8.2M(a))}8.2d(\"3k\")[0].1F(b)}1u(e){}3d=U}},4i:7(){1t{1d(31=$d('3v'))?31.4H.4I(31):L}1u(e){}},11:7(f,o,a,b){6 c=f.2w;6 d=$d(c);6 g=$d(c+'-E');4(d&&g){4(26!=c){5.2v(26)}6 h=5.49(g,'J');1t{f.4M()}1u(e){};4(h=='1Q'){4(b){}G{5.2v(c)}}G{26=c;d.V=d.V+' 5-2Z';d.I.46=3F++;g.I.1b='1a';g.I.1r='1a';g.I.J='1Q';1O(\"5.45();\",43);D=L;6 i=1p(d.42);6 j=1p(d.40);6 k=1p(g.42);6 l=1p(g.40);6 m=5.3W();6 n=m.3j('/');6 p=1p(n[0]);6 q=1p(n[1]);6 r=1p(n[2]);6 s=1p(n[3]);6 t=5.3m(g);6 u=t.3j('/');6 v=1p(u[0]);6 w=1p(u[1]);6 x=w+k;6 y=q+s;6 z=v+l;6 A=p+r;6 B=0,1c=0;4(o=='3S'&&a=='1b'){B='1a';1c=i+'14'}G 4(o=='3N'&&a=='1b'){B='1a';1c=-k+'14'}G 4(o=='3S'&&a=='1A'){B=-(l-j)+'14';1c=i+'14'}G 4(o=='3N'&&a=='1A'){B=-(l-j)+'14';1c=-k+'14'}G 4(o=='1H'&&a=='1b'){B='1a';4(x>y){1c=-k+'14'}G{1c=i+'14'}}G 4(o=='1H'&&a=='1A'){B=-(l-j)+'14';4(x>y){1c=-k+'14'}G{1c=i+'14'}}G{4(x>y){1c=-k+'14'}G{1c=i+'14'}4(z>A){B=-(l-j)+'14'}G{B='1a'}}g.I.1b=B;g.I.1r=1c;6 C='66'5f 8.1n?'5h':'5i';4(8.1X){8.1X(C,7(){4(D){1O(7(){5.1W(c)},3s)}},L)}G 4(8.2f){8.2f(\"5n\"+C,7(){4(D){1O(7(){5.1W(c)},3s)}})}G{8.T=7(){5.1W(c)}}}}},1W:7(f){6 a=$d(f);6 b=$d(f+'-E');4(a&&b){4(D&&b.I.J=='1Q'){1O(\"5.2v('\"+f+\"');\",43)}}},3H:7(){5.1W(26)},2v:7(f){6 a=$d(f);6 b=$d(f+'-E');4(a&&b){a.V=a.V.1o(/5-2Z/1w,'');b.I.J='K';b.I.46=''}},45:7(){D=U},3W:7(){6 w=0,h=0,y=0,x=0;4(5o(19.3l)=='5q'){w=19.3l;h=19.5r}G 4(8.1n&&(8.1n.2u||8.1n.2o)){w=8.1n.2u;h=8.1n.2o}G 4(8.1C&&(8.1C.2u||8.1C.2o)){w=8.1C.2u;h=8.1C.2o}4(8.5v){x=(8.1n.3a)?8.1n.3a:8.1C.3a;y=(8.1n.3b)?8.1n.3b:8.1C.3b}G{x=19.5y;y=19.5z}1d w+'/'+h+'/'+x+'/'+y},3m:7(a){6 x=0,y=0;4(a.3t){x=a.3L;y=a.4b;5D(a=a.3t){x+=a.3L;y+=a.4b}}1d x+'/'+y},49:7(a,b){6 x=a;6 y;4(x.41){y=x.41[b]}G 4(19.3P){y=8.5G.3P(x,4a).5H(b)}1d y},3B:7(f){6 b=2G.2N;6 c=U;6 d=f;6 e=d.1D;4(e==20){6 a=d.3f(0,1);6 z=d.3f(9,10);6 m=d.3f(17,18);4(a!='a'){c=L}4(z!='z'){c=L}4(m!='m'){c=L}}G{c=L}4(b.5K('5.1l')==-1&&d=='5L'){c=L}1d c},5M:7(){6 a=8.2d('*');2e(6 d=0;d<a.1D;d+=1){4(5.Q(a[d],'5-E')){a[d].V=a[d].V.1o(/5-E/1w,'');a[d].V=a[d].V.1o(/5/1w,'');a[d].V=a[d].V+' 5'}}5.1y()},5N:7(f){1P=f},5O:7(l,t){6 x=l.5P();4(x=='1j'){1Z=t}4(x=='1h'){27=t}4(x=='1g'){22=t}4(x=='1f'){2b=t}4(x=='5Q'){2c=t}},5R:7(c){4(c.3p!=F){2H=c.3p}4(c.2I!=F){4(c.2I){28='U'}G{28='L';5.4i()}}4(c.3z!=F){2l=c.3z}4(c.1j!=F){4(c.1j.11!=F){2n=c.1j.11}}4(c.1h!=F){4(c.1h.11!=F){2q=c.1h.11}}4(c.1g!=F){4(c.1g.11!=F){2r=c.1g.11}}4(c.1q!=F){4(c.1q.11!=F){2s=c.1q.11}}4(c.1f!=F){4(c.1f.11!=F){2x=c.1f.11}}4(c.1i!=F){4(c.1i.11!=F){2z=c.1i.11}}4(c.1j!=F){4(c.1j.M!=F){1Z=c.1j.M}}4(c.1h!=F){4(c.1h.M!=F){27=c.1h.M}}4(c.1g!=F){4(c.1g.M!=F){22=c.1g.M}}4(c.1q!=F){4(c.1q.M!=F){2j=c.1q.M}}4(c.1f!=F){4(c.1f.M!=F){2b=c.1f.M}}4(c.1i!=F){4(c.1i.M!=F){2c=c.1i.M}}4(c.3h!=F){4(c.3h.4c!=F){1L=c.3h.4c}}4(c.4f!=F){1P=c.4f}},Q:7(e,c){1d 3V 5Y('(\\\\s|^)'+c+'(\\\\s|$)').5Z(e.V)},12:7(a){6 b=a.1o(/<60\\s*[\\/]?>/1w,\"\\n\");b=b.1o(/<(?:.|\\n)*?>/61,'');b=b.1o(/(^\\s+|\\s+$)/g,'');6 c=8.2k(\"62\");6 d=8.2M(b);c.1F(d);1d c.S}}}();4(19.1X){19.1X(\"63\",7(){2D=U;5.1Y();5.1y()},L);19.1X(\"64\",7(){5.1y()},L)}G 4(19.2f){19.2f(\"65\",7(){2D=U;5.1Y();5.1y()});19.2f(\"3o\",7(){5.1y()})}G{19.3o=7(){5.1y()}}4(!2D){1O(\"5.1Y();5.1y();\",20)}",62,379,"||||if|addthisevent|var|function|document||||||||||||||||||||||||||||||||drop|undefined|else|span|style|display|none|false|text|ref|1px|data|hasclass|dropzcx|innerHTML|onclick|true|className|border|this|encodeURIComponent|htmx||show|htmlencode|cli|px||class|||window|0px|left|dropy|return|proc|ical|yahoo|google|facebook|outlook|solid|com|font|documentElement|replace|parseInt|hotmail|top|addthisevent_dropdown|try|catch|2px|gi|color|generate|background|right|6px|body|length|radius|appendChild|box|auto|em|service|reference|_ate_dropdown|shadow|3px|setTimeout|_ate_callback|block|position|rgba|decoration|important|create|force|addEventListener|trycss|_ate_lbl_outlook||_image_path|_ate_lbl_yahoo|moz|padding|size|olddrop|_ate_lbl_google|_ate_css|getAttribute|fbevent|_ate_lbl_ical|_ate_lbl_fb_event|getElementsByTagName|for|attachEvent|Calendar|9px|webkit|_ate_lbl_hotmail|createElement|_ate_mouse|height|_ate_show_outlook|clientHeight|nw|_ate_show_google|_ate_show_yahoo|_ate_show_hotmail|fff|clientWidth|hide|id|_ate_show_ical|index|_ate_show_facebook|bebebe|absolute|direct|_d_rd|width|styleSheet|location|_ate_license|css|margin|10px|200px|createTextNode|href|url|weight|atedrop|home|12px|frs|_facebook_event|_all_day_event|hover|6d84b4|_organizer_email|selected|_organizer|hdx|_location|_description|_summary|_zonecode|_end|align|_start|_url|scrollLeft|scrollTop|css2|css1|dropmousetim|substring|calendar|dropdown|cursor|split|head|innerWidth|elementposition|relative|onload|license|cssText|gfx|300|offsetParent|f4f4f4|ate_css|icon|setAttribute|type|mouse|ateoutlook|glicense|normal|555|bold|dropzind|14px|out|8px|hidden|_attendees|offsetLeft|t1|up|ategoogle|getComputedStyle|applycss|ateyahoo|down|110|atehotmail|new|viewport|png|ateical|99999|offsetWidth|currentStyle|offsetHeight|350|c8c8c8|tim|zIndex|bottom|a8a8a8|getstyle|null|offsetTop|order|copyx|brx|callback|pointer|line|removecss|eval|f7f7f7|aab9d4|15px|21px|default|180px|overflow|35px|e0e0e0|100|5px|d9d9d9|101|cacaca|repeat|no|333|arial|family|inline|visibility|description|alert|parentNode|removeChild|open|ate|track|blur|FACEBOOK|ICAL|HOTMAIL|YAHOO|GOOGLE|OUTLOOK|Date|now|200|onmouseout|clearTimeout|onmouseover|title||AddThisEvent|atefacebook|credits|uid|_uid|drule|_recurring|alarm|_alarm_reminder|dateformat|_date_format|dallday|datte|active|in|dorgaem|touchstart|click|dorga|dloca|ddesc|dsum|on|typeof|dzone|number|innerHeight|dend|dstart|str|all|_css|_mouse|pageXOffset|pageYOffset|_license|999999|Event|while|Facebook|iCal|defaultView|getPropertyValue|Hotmail|Yahoo|indexOf|aao8iuet5zp9iqw5sm9z|refresh|callcack|setlabel|toLowerCase|facebookevent|settings|Google|Outlook|http|https|protocol|getElementById|RegExp|test|br|gm|div|DOMContentLoaded|load|onreadystatechange|ontouchstart".split("|"),0,{}));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.search=SfdcWwwBase.search||{};
(function(a){SfdcWwwBase.search.bindClick=function(){a(".search-form .glyphicon-search").on("click",function(){a(".search-form").toggleClass("active")
})
};
SfdcWwwBase.search.init=function(){this.bindClick()
};
a(document).ready(function(){SfdcWwwBase.search.init()
})
}(jQuery));
(function(a){a("#region-selector").on("click",function(){a(this).toggleClass("active");
a(".footer-bottom-section").slideToggle(function(){a("html, body").animate({scrollTop:a(document).height()},1000)
})
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.tileSystem=SfdcWwwBase.tileSystem||{};
(function(a){SfdcWwwBase.tileSystem.resizeTimer=0;
SfdcWwwBase.tileSystem.setHeight=function(){if(this.tiles&&this.tiles.size()>0){this.tiles.each(function(){var b=0;
a(this).find(".tile-item").each(function(){a(this).children(".columns-wrapper").css("height","100%");
if(a(this).height()>b){b=a(this).height()
}});
a(this).find(".tile-item").each(function(){var c=b;
if(a(this).height()!==b&&SfdcWwwBase.utils.isEditMode()){c+=80
}a(this).children(".columns-wrapper").css("height",c+"px")
})
})
}};
SfdcWwwBase.tileSystem.init=function(){this.tiles=a(".tile-system");
this.setHeight()
};
a(document).ready(function(){SfdcWwwBase.tileSystem.init()
});
a(window).on("load",function(){this.tiles=a(".tile-system");
if(this.tiles.find("img").hasClass("lazy")){SfdcWwwBase.tileSystem.init()
}});
a(window).resize(function(){this.tiles=a(".tile-system");
clearTimeout(SfdcWwwBase.tileSystem.resizeTimer);
SfdcWwwBase.tileSystem.resizeTimer=setTimeout(SfdcWwwBase.tileSystem.setHeight,100)
})
}(jQuery));
VidyardPlayer=(function(){ITEM_TEMPLATE='<li class="media-item">				<div class="">					<div class="media-count">						<span><a href="#">#{count}</a></span>					</div>					<div class="media-action">						<a href="#"><span>&nbsp;</span></a>					</div>					<div class="media-title">						<div class="thumb-title"><a href="#">#{name}</a></div>					</div>					<div class="media-duration">						<span class="mduration">#{duration}</span>					</div>				</div>			</li>';
function a(c){return c.replace(/\\n/g,"\n").replace(/\\(.)/g,"$1")
}function b(c,d){return c.substring(0,d)+(c.length>d?"...":"")
}return{init:function(d){var k=new Vidyard.player(d.playerID);
var l=$(".video-playlist"),g=$(".vidyard_player > span"),e=$(".video-title"),j=$(".video-description");
g.css("width","100%");
function c(){var m=g.parents(".video-frame");
g.css({height:m.innerHeight(),width:m.innerWidth()});
g.find(".vidyard_iframe").css({height:m.innerHeight(),width:m.innerWidth()})
}c();
$(window).on("resize",_.throttle(c,250));
function h(){$vidyard_playlist_items.find(".video-toggle img").attr("src",PAUSE_IMAGE)
}var f=setInterval(function(){if(k.status!==null){var u=k.metadata||k.metadata();
if(u){var s,n,t=$.map(u.chapters_attributes,function(w){return w.video_attributes
});
var o="Vidyard";
l.empty();
function v(){$.each(t,function(x,w){$(w.playlist_item).find(".media-action").addClass("paused")
})
}function r(w){$(".video-title").text(w.name);
$(".video-description").text(w.description);
$(".video-time").text(w.duration);
v();
$(w.playlist_item).find(".media-action").addClass("playing");
q()
}function q(){var y=$(".min-scr4 .conf-right-container");
if(y.size()){var z=y.outerHeight(),A=parseInt(y.css("padding-bottom").split("px")[0]),x=$("#layout > .grid-row-first > .cell-first").outerHeight(),w=x-A;
y.css("height",w)
}else{}}k.on("play",function(){var w=t[k.getCurrentChapter()],y;
r(w);
if(k.lastVidPlayed!==w.name){if(k.lastVidPlayed){digitalData.util.media.close(k.lastVidPlayed)
}digitalData.util.media.open(w.name,w.length_in_seconds-1,o)
}k.lastVidPlayed=w.name;
try{y=Math.round(parseFloat(k.currentTime()))
}catch(x){y=0
}digitalData.util.media.play(w.name,y)
});
k.on("pause",function(){var w=t[k.getCurrentChapter()],y;
try{y=Math.round(parseFloat(k.currentTime()))
}catch(x){y=0
}digitalData.util.media.stop(w.name,y)
});
k.on("playerComplete",function(){n=k.status.chapterIndex;
r(t[n]);
var w=$(".media-item").outerHeight()*n;
$(".video-playlist").animate({scrollTop:w},function(){q()
});
digitalData.util.media.close(t[n].name)
});
if(t.length>1){$('<div class="playlist-items slides">').append(s=$("<ul>")).appendTo(l);
$.each(t,function(y,x){var w=new Date(x.length_in_seconds*1000);
x.idx=y;
x.duration=w.getMinutes()+":"+(w.getSeconds()<10?"0":"")+w.getSeconds();
x.count=y+1;
x.name=a(x.name);
x.description=a(b(x.description,400));
x.playlist_item=$($.tmpl(ITEM_TEMPLATE,x));
s.append(x.playlist_item);
x.playlist_item.on("click",function(){if(k.getCurrentChapter()!==x.idx){k.playChapter(x.idx);
r(x);
$(".media-action img").hide(0,function(){$(".media-action img").show(0)
})
}})
})
}else{l.hide()
}n=k.status.chapterIndex;
r(t[n]);
var m=0;
for(var p=0;
p<n;
p++){m+=$(".media-item").eq(p).outerHeight()
}$(".video-playlist").animate({scrollTop:m},function(){q()
});
$(".video-playlist").scrollTop(m)
}clearInterval(f)
}},1)
}}
})();
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.carousel=SfdcWwwBase.carousel||{};
(function(a){SfdcWwwBase.carousel.setOptions=function(b){return{namespace:"carousel_",selector:".carousel_slides > .carousel_slide",animation:b.animation||"slide",slideshow:b.slideshow||false,slideshowSpeed:b.slideshowSpeed||7000,animationSpeed:b.animationSpeed||600,controlNav:b.controlNav||false,directionNav:b.directionNav||false,prevText:"",nextText:""}
};
SfdcWwwBase.carousel.init=function(b){var c=this;
a(b).each(function(){var g=this;
var e=a(g),f,d;
if(e.size()>0){f=e.data();
d=c.setOptions(f);
e.flexslider(d);
if(a(".carousel_direction-nav").length){a(".carousel_direction-nav .carousel_prev").addClass("icon-sfdc-icon-left-arrow");
a(".carousel_direction-nav .carousel_next").addClass("icon-sfdc-icon-right-arrow")
}}});
SfdcWwwBase.carousel.addClassForIE9(".carousel_collapsed_laucher");
a(".carousel_collapsed_laucher").on("click",function(f){f.preventDefault();
var g=a(".carousel_collapsed_laucher").siblings(".carousel"),d=a(".carousel_collapsed_laucher").siblings(".carousel_collapsed_layer");
if(a(g).hasClass("collapsed_layout")){SfdcWwwBase.carousel.addClassForIE9(".carousel_collapsed_laucher");
a(g).removeClass("collapsed_layout");
a(d).addClass("bg-gradient-override");
a(this).removeClass("collapsed_launcher").addClass("open_launcher")
}else{SfdcWwwBase.carousel.addClassForIE9(".carousel_collapsed_laucher");
a(g).addClass("collapsed_layout");
a(d).removeClass("bg-gradient-override");
a(this).removeClass("open_launcher").addClass("collapsed_launcher")
}})
};
SfdcWwwBase.carousel.addClassForIE9=function(b){if(a("html").hasClass("ie9")){if(a(b).hasClass("margin_ie9")){a(".carousel_collapsed_laucher").removeClass("margin_ie9")
}else{a(".carousel_collapsed_laucher").addClass("margin_ie9")
}}};
SfdcWwwBase.carousel.applyFullHeightArrowBarCss=function(){a(".carousel-wrapper.arrow-button-full-height").each(function(){var b=a(this).height();
var c=-1*(b/2-30);
a(this).find(".carousel_next").css({height:b,"margin-top":c});
a(this).find(".carousel_prev").css({height:b,"margin-top":c})
})
};
a(document).ready(function(){if(a(".carousel").length>0){SfdcWwwBase.carousel.init(".carousel")
}});
a(window).on("load",function(){SfdcWwwBase.carousel.applyFullHeightArrowBarCss()
});
a(document).on("targetedContentLoaded",function(){SfdcWwwBase.carousel.init(".carousel")
})
}(jQuery));
(function(a){a.fn.equalizeChildren=function(f){if(typeof f==="undefined"){return this
}var c=f.defaultRwd,e=f.screenMap||[{name:"scr4",minWidth:990},{name:"scr3",minWidth:768},{name:"scr2",minWidth:480},{name:"scr1",minWidth:0}],d=this,h=[];
d.each(function(){var n=a(this),l=b(n.attr("class"),"equalize-children-groupprefix-")||"";
if(l.length!==0){l+="-"
}var k=n.find("[class^='equalize-group-"+l+"'],[class*=' equalize-group-"+l+"']");
var m={};
k.each(function(){var o=b(a(this).attr("class"),"equalize-group-");
if(m[o]===null){m[o]=a()
}m[o]=m[o].add(a(this))
});
h.push({rwdBehavior:(b(n.attr("class"),"equalize-children-rwd-")||c),childrenByTag:m})
});
function b(l,m){var n=new RegExp(m+"([^\\s]*)"),k=n.exec(l);
return(k&&k.length>0?k[1]:null)
}function j(){var k=a(window).width();
a.each(h,function(l,p){var m=p.rwdBehavior,q=p.childrenByTag,n=!m;
if(m){for(var o=0;
o<e.length;
o++){var s=e[o];
if(k>=s.minWidth){if(m.indexOf(s.name)!==-1){n=true
}break
}}}for(var t in q){var r=q[t];
r.css("height","auto");
if(n){r.innerHeight(Math.max.apply(null,r.map(function(u,v){return a(v).innerHeight()
}).toArray()))
}}})
}j();
if(_&&_.throttle){var g=_.throttle(j,1000);
a(window).resize(g)
}return this
};
a(window).load(function(){a("div.equalize-children").equalizeChildren()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.card=SfdcWwwBase.card||{};
(function(c){var a=[];
var b={sm:768,md:1024,lg:1200};
SfdcWwwBase.card.getCardGroupNames=function(d,e){if(c.inArray(c(e).attr("data-equalize"),a)===-1){a.push(c(this).attr("data-equalize"))
}};
SfdcWwwBase.card.bindCardClick=function(){c("body").on("click",".thumbnail-content.thumbnail-linked",function(f){var e=c(f.target).closest("a");
if(!e||!c(e).attr("href")){var d=c(this).data("href");
var g=c(this).data("new-window");
if(typeof d==="string"){if(g){window.open(d);
return false
}else{window.location=d
}}}})
};
SfdcWwwBase.card.adjustHeights=function(){c(".cardComponent [data-equalize]").each(SfdcWwwBase.card.getCardGroupNames);
c(".cardComponent[data-equalize]").each(SfdcWwwBase.card.getCardGroupNames);
c.each(a,function(d,e){var f="."+e;
SfdcWwwBase.card.equalizeElement(f)
})
};
SfdcWwwBase.card.equalizeElement=function(d){if(c(d).length>0){SfdcWwwBase.utils.equalizeHeightsResponsive(d,["xs","sm"])
}};
SfdcWwwBase.card.animateElement=function(){var d=0;
c(".animate-card").each(function(e){var f=this;
if(SfdcWwwBase.card.isElementVisible(this,100)&&c(window).width()>=b.sm){d+=100;
setTimeout(function(){c(f).animate({marginTop:"0px",opacity:"1"},200)
},d)
}})
};
SfdcWwwBase.card.isElementVisible=function(f,j){var h=c(window).scrollTop();
var e=h+c(window).height();
var g=c(f).offset().top-j;
var d=g+c(f).height();
return((g<e&&g>h)||(d<e&&d>h))
};
SfdcWwwBase.card.init=function(){var d=this;
d.adjustHeights();
d.bindCardClick();
c(window).on("resize",_.throttle(function(){d.adjustHeights()
},200));
c(window).on("scroll load resize",d.animateElement);
d.animateElement()
};
c(document).ready(function(){SfdcWwwBase.card.init();
c(document).on("targetedContentLoaded",function(){SfdcWwwBase.card.adjustHeights()
})
})
}(jQuery));
SfdcWwwBase.card.authorUtil=(function(f){var l="utf-8",b="POST",k="You have changed the layout of this component. Any content that is currently in this component will be permanently deleted. Do you wish to continue?",o="./startingLayout",d="./contentSource",n="CardSource",e="CardManualSettings",j="/apps/sfdc-www/components/content/general/cardComponent/cq:template/";
var m="",c="",a="",h="";
var q=function(r,s){f.ajax({url:s,method:b,async:false,data:{_charset_:l,"./@CopyFrom":r}})
};
var p=function(r){m=r.getField(d).getValue();
if(m===e){c=r.getField(o).getValue()
}};
var g=function(s){a=s.getField(d).getValue();
if(a===e){h=s.getField(o).getValue()
}var u=m&&m!==a;
var t=c&&c!==h;
if(u&&a===n||!u&&t&&a===e){if(window.confirm(k)){var r=j+c;
var v=s.path+"/"+c;
q(r,v);
return true
}else{return false
}}return true
};
return{init:p,checkLayout:g}
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.privacyBar=SfdcWwwBase.privacyBar||{};
(function(a){SfdcWwwBase.privacyBar.getCookie=function(b){if(!b){return null
}return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(b).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null
};
SfdcWwwBase.privacyBar.loadPrivacyBar=function(){var b=a(".privacy-bar");
SfdcWwwBase.privacyBar.validatePrivaceBar(b,SfdcWwwBase.privacyBar.getCookie("privacy_bar"))
};
SfdcWwwBase.privacyBar.validatePrivaceBar=function(c,b){if(c&&b!=="hidden"){c.show();
SfdcWwwBase.privacyBar.setLeftNavPaddingOffset(c);
a("#privacy-bar-close").click(function(){c.hide();
a(".leftnav.padding-top-no-affix").removeAttr("style");
SfdcWwwBase.privacyBar.setCookie()
})
}};
SfdcWwwBase.privacyBar.setLeftNavPaddingOffset=function(f){var e=a(".leftnav.padding-top-no-affix");
var b=e.css("padding-top");
if(b!==undefined){var d=b.substring(0,b.length-2);
var c=f.outerHeight();
e.css("padding-top",c+parseInt(d))
}};
SfdcWwwBase.privacyBar.setCookie=function(){var b=new Date();
b.setDate(b.getDate()+30);
document.cookie="privacy_bar=hidden; expires="+b.toUTCString()+"; path=/"
};
a(document).ready(function(){SfdcWwwBase.privacyBar.loadPrivacyBar()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.scrollableTabs=SfdcWwwBase.scrollableTabs||{};
(function(a){SfdcWwwBase.scrollableTabs.tabs=null;
SfdcWwwBase.scrollableTabs.offset=null;
SfdcWwwBase.scrollableTabs.bindEvents=function(){var b=this;
b.tabs.each(function(){a(this).on("click",function(e){e.preventDefault();
var d=a(this).attr("href");
a("body").scrollTo(d,"slow",{offset:-(b.offset)})
})
});
a(".scrollable-nav > .nav").on("affixed-top.bs.affix",function(){a(this).removeAttr("style");
b.forceTabsWidth()
});
var c=_.throttle(b.forceTabsWidth,200);
a(window).on("resize",c)
};
SfdcWwwBase.scrollableTabs.scrollspy=function(){var b=this;
if(a("#Scrollspy").size()>0){a("body").scrollspy({target:"#Scrollspy",offset:b.offset})
}};
SfdcWwwBase.scrollableTabs.forceTabsWidth=function(){var b=a(".scrollable-nav").width();
a(".scrollable-nav > ul.nav-pills").width(b)
};
SfdcWwwBase.scrollableTabs.init=function(){this.tabs=a(".scrollable-nav li.scrollable a");
this.offset=a(".scrollable-nav ul.nav").height()+70;
this.forceTabsWidth();
this.scrollspy();
this.bindEvents()
};
a(document).ready(function(){SfdcWwwBase.scrollableTabs.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.sideAnchorNavbar=SfdcWwwBase.sideAnchorNavbar||{};
(function(a){SfdcWwwBase.sideAnchorNavbar.scrollspy=function(){if(a(".sideAnchorNavbar .side-anchorbar").size()>0){a("body").scrollspy({target:".sideAnchorNavbar .side-anchorbar"})
}};
SfdcWwwBase.sideAnchorNavbar.init=function(){this.scrollspy()
};
a(document).ready(function(){SfdcWwwBase.sideAnchorNavbar.init()
})
}(jQuery));
var SfdcWwwBase=window.SfdcWwwBase||{};
SfdcWwwBase.utils=SfdcWwwBase.utils||{};
(function(){var f={sm:768,md:1024,lg:1312},b={xs:{min:0,max:f.sm-1},sm:{min:f.sm,max:f.md-1},md:{min:f.md,max:f.lg-1},lg:{min:f.lg,max:Infinity}};
var g=function(h){return $(h).height()
};
var d=function(j){var h=_.max(j,g);
return typeof h==="object"?$(h):$([])
};
var c=function(h){return d(h).height()||0
};
var e=function(){var k=$(window).width(),j;
for(j in b){var h=b[j];
if(k>=h.min&&k<=h.max){return j
}}};
var a=function(h,j){return function(){return $(this).data(h)===j
}
};
SfdcWwwBase.data=SfdcWwwBase.data||{};
SfdcWwwBase.utils.equalizeHeights=function(k,l){var j,h;
if(typeof k==="string"){j=$(k)
}else{if(typeof k==="object"){j=k
}}j.height("");
h=c(j);
j.height(h);
if(l){l()
}return h
};
SfdcWwwBase.utils.equalizeHeightsResponsive=function(h,j,m,q){var o=this,l=200,k,p,n;
m=m||l;
k=function(r){return _.indexOf(r,e())!==-1
};
p=function(){if(k(j)){$(h).height("")
}else{o.equalizeHeights(h,q)
}};
n=_.throttle(p,m);
$(window).on("load",p).on("resize",n);
p()
};
SfdcWwwBase.utils.equalizeElementsByClass=function(){var k=".equalize-height",j="equalize-group-id",n="exclude-screens",h=",",m=$(k),l={};
var o=function(p){return !!l[p.data(j)]
};
m.each(function(){var r=$(this);
if(o(r)){return
}var t=r.data(j),s=a(j,t),q=m.filter(s),v;
var p=function(w,x){return $(w).data(x)
};
var u=function(x){var w=p(x,n);
return w?w.split(h):[]
};
v=_.chain(q).map(u).flatten().uniq().value();
SfdcWwwBase.utils.equalizeHeightsResponsive(q,v);
l[t]=q
})
};
SfdcWwwBase.utils.equalizeElementsByClass();
SfdcWwwBase.utils.secondsToHHmm=function(p){var o=p;
if(!isNaN(p)){var k=Number(p);
var n=Math.floor(k/3600);
var j=Math.floor(k%3600/60);
var l=Math.floor(k%3600%60);
o=((n>0?n+":"+(j<10?"0":""):"")+j+":"+(l<10?"0":"")+l)
}return o
};
SfdcWwwBase.utils.isEditMode=function(){if(typeof CQ!=="undefined"&&typeof CQ.WCM!=="undefined"){return CQ.WCM.isEditMode(true)
}else{return false
}};
SfdcWwwBase.utils.getJSONP=function(j,l,k){if(!k&&SfdcWwwBase.data.hasOwnProperty(j)){l.call(this,SfdcWwwBase.data[j])
}else{var h=j+(j.indexOf("?")!==-1?"&":"?")+"callback=?";
$.getJSON(h,function(m){SfdcWwwBase.data[j]=m;
l.call(this,SfdcWwwBase.data[j])
})
}};
SfdcWwwBase.utils.getQueryParameterByName=function(h){h=h.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var k=new RegExp("[\\?&]"+h+"=([^&#]*)"),j=k.exec(location.search);
return j===null?"":decodeURIComponent(j[1].replace(/\+/g," "))
};
SfdcWwwBase.utils.getHashParameterByName=function(h){h=h.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var k=new RegExp("[\\?&#]"+h+"=([^&#]*)"),j=k.exec(location.hash);
return j===null?"":decodeURIComponent(j[1].replace(/\+/g," "))
};
SfdcWwwBase.utils.updateHashParameter=function(h,l){var j=new RegExp("([#?&])"+h+"=.*?(&|$)","i");
var k=location.hash;
var m=k.indexOf("#")!==-1?"&":"";
if(k.match(j)){location.hash=k.replace(j,"$1"+h+"="+encodeURIComponent(l)+"$2").substr(1)
}else{location.hash=k.substr(1)+m+h+"="+encodeURIComponent(l)
}if(l===""){location.hash=k.replace(j,"")
}};
SfdcWwwBase.utils.getSeoFriendlyHashParameterByName=function(h){h=h.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var k=new RegExp("(&|#!)"+h+"=([^&#]*)"),j=k.exec(location.hash);
return j===null?"":decodeURIComponent(j[1].replace(/\+/g," "))
};
SfdcWwwBase.utils.updateSeoFriendlyHashParameter=function(h,l){var j=new RegExp("(#!|&)"+h+"=.*?(&|$)","i");
var k=location.hash;
var m=k.indexOf("#")!==-1?"&":"!";
if(k.match(j)){location.hash=k.replace(j,"$1"+h+"="+encodeURIComponent(l)+"$2").substr(1)
}else{location.hash=k.substr(1)+m+h+"="+encodeURIComponent(l)
}if(l===""){location.hash=k.replace(j,"")
}};
SfdcWwwBase.utils.adjacentImages=function(){$(".imageComponent").filter(function(){return $(this).prev().is(".imageComponent")||$(this).next().is(".imageComponent")
}).addClass("adjacent")
};
window.SfdcWwwBase=SfdcWwwBase;
$(".fixBlank").parent().css("display","block");
SfdcWwwBase.utils.getCurrentBreakpoint=function(){var k=$(window).width(),j;
for(j in b){var h=b[j];
if(k>=h.min&&k<=h.max){return j
}}};
SfdcWwwBase.utils.stripXssChars=function(h){return h.replace(/[<>:;#$%()]/gi,"")
};
$(window).on("load resize",function(){SfdcWwwBase.utils.adjacentImages();
SfdcWwwBase.utils.getCurrentBreakpoint()
})
}());
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.Nav=SfdcWwwBase.Nav||{};
(function(a){SfdcWwwBase.Nav.minHeight=0;
SfdcWwwBase.Nav.drawerHeight=0;
SfdcWwwBase.Nav.equalizeHeight=function(){a(".navbar-expandable-container > div.tab-pane").each(function(){var b=a(this).find("div.container.tab-wrap").outerHeight(),d=a(this).find("div.tab-closer").outerHeight(),e=a(this).find("footer").outerHeight(),c=b+d+e+8;
SfdcWwwBase.Nav.minHeight=b>SfdcWwwBase.Nav.minHeight?b:SfdcWwwBase.Nav.minHeight;
SfdcWwwBase.Nav.drawerHeight=c>SfdcWwwBase.Nav.drawerHeight?c:SfdcWwwBase.Nav.drawerHeight
});
a(".navbar-expandable-container").children("div.tab-pane").each(function(){a(this).find("div.container").first().css("min-height",SfdcWwwBase.Nav.minHeight)
})
};
SfdcWwwBase.Nav.toggleNav=function(){a("button.navbar-toggle").click(function(){var c=a(this).attr("aria-expanded")==="true"?true:false;
var b=a("body");
if(c){b.removeClass("lock-position")
}else{b.addClass("lock-position")
}})
};
SfdcWwwBase.Nav.closeDrawer=function(){a("div.navbar-expandable-container").removeClass("nav-expanded").removeAttr("style");
a(".primary-menu-item, .secondary-menu-item").removeClass("active-menu")
};
SfdcWwwBase.Nav.setDrawerHeight=function(){a("div.navbar-expandable-container").css("height",SfdcWwwBase.Nav.drawerHeight)
};
SfdcWwwBase.Nav.bindClick=function(){a(".nav-container ul.main-menu .navbar-expander").on("click",function(){if(a(this).parents("li").hasClass("active-menu")){SfdcWwwBase.Nav.closeDrawer()
}else{a(".primary-menu-item, .secondary-menu-item").removeClass("active-menu");
a(this).parents("li").addClass("active-menu");
a("#expandablenavigation").removeClass("in");
a("div.navbar-expandable-container").addClass("nav-expanded");
SfdcWwwBase.Nav.setDrawerHeight();
if(a(".navbar .collapse").hasClass("in")&&a(window).width()<=1024){a(".navbar .collapse").removeClass("in")
}}});
a("button[data-target=#expandablenavigation]").on("click",function(){SfdcWwwBase.Nav.closeDrawer(SfdcWwwBase.Nav.drawerHeight)
});
a("span.footer-closer-tab").on("click",function(){SfdcWwwBase.Nav.closeDrawer()
});
a(window).on("click",function(b){if(!a(b.target).closest("header").length){SfdcWwwBase.Nav.closeDrawer()
}});
a(".navbar-expandable-container").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){if(!a(this).hasClass("nav-expanded")){a(".primary-menu-item, .secondary-menu-item").removeClass("active-menu")
}})
};
SfdcWwwBase.Nav.init=function(){var f=a(".primaryMenuOverlayEffectTypeLevel").length>0;
if(!f){var b=this;
var c=200;
var e=_.throttle(function(){b.equalizeHeight();
if(a(".navbar-expandable-container").height()){b.setDrawerHeight()
}},c);
this.equalizeHeight();
b.bindClick();
a(window).on("resize",e)
}var d=a(".tab-equalize");
a(".overlayMenuItem").hover(function(){SfdcWwwBase.utils.equalizeHeights(d)
});
this.toggleNav()
};
a(document).ready(function(){SfdcWwwBase.Nav.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.regionSelector=SfdcWwwBase.regionSelector||{};
(function(b){var c=".region-selector_button";
var a=".region-selector_dialog";
b(function(){b(".region-selector_dialog").clone().insertBefore(".globalnavbar .region-selector_button, .skinnynav .region-selector_button");
b(".globalnavbar .region-selector_button,.region-selector_dialog").hover(function(){b(".globalnavbar .region-selector_dialog, .skinnynav .region-selector_dialog").show()
},function(){b(".globalnavbar .region-selector_dialog, .skinnynav .region-selector_dialog").hide()
});
b("body").on("click",c,function(){b(a).toggle()
}).on("click",function(e){var d=b(e.target);
if(!(d.is(a)||d.is(c)||d.closest(a).size()||d.closest(c).size())){b(a).hide()
}})
});
SfdcWwwBase.regionSelector.bindRegionSelectorUsHomepageClick=function(){var e=2;
var d=5;
var f=b(".region-selector a");
b(f).on("click",function(){var h=b(this).attr("href");
if(h){h=(h.endsWith("/")||h.endsWith("?ir=1")||h.indexOf("?"))!==-1?h:h+"/";
var j=3;
var g=h.split("/").slice(j)[0];
if(g===""){SfdcWwwBase.regionSelector.setGeoOverrideCookie("us",h)
}else{if(g.length===e||g.length===d){SfdcWwwBase.regionSelector.setGeoOverrideCookie(g,h)
}}}})
};
SfdcWwwBase.regionSelector.setGeoOverrideCookie=function(e,h){var f=window.location.hostname;
var d={regionCode:e,targetUrl:h};
var g=60*60*24*15;
Util.setJSONCookie(d,"web_core_regionSelectOverride",g,f)
};
b(document).ready(function(){SfdcWwwBase.regionSelector.bindRegionSelectorUsHomepageClick()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.promoBanner=SfdcWwwBase.promoBanner||{};
(function(a){SfdcWwwBase.promoBanner.init=function(){a("body").on("click",".banner-close",function(b){a(b.target).closest(".promo-banner-container").fadeOut(800).remove();
return false
});
if(!SfdcWwwBase.utils.isEditMode()){SfdcWwwBase.promoBanner.bindPromoClick()
}};
SfdcWwwBase.promoBanner.bindPromoClick=function(){a(".promo-banner-container").on("click",function(b){if(a(b.target).is(".banner-close, .banner-close *")){b.preventDefault();
return
}if(a(this).data("target")){window.open(a(this).data("href"))
}else{window.location=a(this).data("href")
}})
};
a(document).ready(function(){SfdcWwwBase.promoBanner.init()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.genericLinkListComponent=SfdcWwwBase.genericLinkListComponent||{};
(function(a){SfdcWwwBase.genericLinkListComponent.init=function(){var b=a(".generic-links .tooltip-enabled");
if(b.size()>0){b.each(function(){a(this).parents("li.tipped .li-wrap").on("mouseenter focusin",function(){a(this).find(".tooltip-enabled").popover("show")
}).on("mouseleave focusout",function(){a(this).find(".tooltip-enabled").popover("hide")
})
}).popover({trigger:"hover",viewport:{selector:"body",padding:10}})
}};
SfdcWwwBase.genericLinkListComponent.init();
a(document).on("targetedContentLoaded",function(){SfdcWwwBase.genericLinkListComponent.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.liveagent=SfdcWwwBase.liveagent||{};
(function(a){SfdcWwwBase.liveagent.tryLiveAgentInit=function(){if(window.liveagent){var h=a(".liveagent-data");
var d=SfdcWwwBase.config.liveAgentButtonId;
var f=SfdcWwwBase.config.liveAgentOrganizationId;
var c=SfdcWwwBase.config.liveAgentDeploymentId;
var b=SfdcWwwBase.config.liveAgentEndpointUrl;
if(!(b&&c&&f)){return
}if(!(SfdcWwwBase.modal&&SfdcWwwBase.modal.shouldDoWaterfall())){try{liveagent.init(b,c,f)
}catch(e){}}var g=function(){if(!window._laq){window._laq=[]
}window._laq.push(function(){if(a("#liveagent_button_online_"+d).length){liveagent.showWhenOnline(d,document.getElementById("liveagent_button_online_"+d));
liveagent.showWhenOffline(d,document.getElementById("liveagent_button_offline_"+d))
}liveagent.setChatWindowHeight(368)
})
};
g()
}else{window.setTimeout(SfdcWwwBase.liveagent.tryLiveAgentInit,500)
}if(!SfdcWwwBase.utils.isEditMode()){a("body").on("click","a.chat-trigger",function(){liveagent.startChat(d)
})
}if(SfdcWwwBase.utils.isEditMode()){a("body").on("click","a.chat-trigger-contact",function(j){j.preventDefault()
})
}a("body").on("click","a.chat-trigger-v2",function(){if(a(".sidebarHeader.minimizedContainer.isMinimized").length){a(".sidebarHeader.minimizedContainer.isMinimized")[0].click()
}if(a(".helpButtonEnabled").length&&!a(".sidebarHeader.minimizedContainer.isMinimized").length){a(".helpButtonEnabled").click()
}})
};
SfdcWwwBase.liveagent.initSecondButton=function(){var b=SfdcWwwBase.config.liveAgentButtonId;
if(a("#liveagent_button_online_"+b+"1").length){if(!window._laq){window._laq=[]
}window._laq.push(function(){a(".buttonCTAItemComponent a.chat-trigger").each(function(){liveagent.showWhenOnline(b,a(this)[0])
});
a(".buttonCTAItemComponent a.live-chat-form-btn").each(function(){liveagent.showWhenOffline(b,a(this)[0])
})
})
}try{liveagent.init(SfdcWwwBase.config.liveAgentEndpointUrl,SfdcWwwBase.config.liveAgentDeploymentId,SfdcWwwBase.config.liveAgentOrganizationId)
}catch(c){}};
a(document).ready(function(){SfdcWwwBase.liveagent.tryLiveAgentInit()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.modal=(function(){var b=1000,q=1.5,d=q*b,e="slide",h="fade",p;
var g=function(){var s;
if(!$("#modal").length){s=$('<div id="modal" class="live-chat-modal"></div>');
$("body").append(s)
}else{s=$("#modal")
}return s
};
var m=function(){return g().is(":visible")
};
var k=function(t){var s=g();
switch(t){case e:s.slideDown(d);
break;
case h:s.fadeIn();
break;
default:s.show();
break
}};
var a=function(t){var s=g();
switch(t){case e:s.slideUp(d);
break;
case h:s.fadeOut();
break;
default:s.hide();
break
}};
var f=function(t,u){var s=t+".html"+location.search;
$.get(s).done(function(v){g().html(v)
}).done(u)
};
var j=function(t,s,u){f(t,u||function(){k(s)
})
};
var o=function(){$("body").on("click","a.open-modal",function(){j($(this).attr("href"))
})
};
var c=function(){$("body").on("click","a.close-modal, a.chat-trigger, a.chat-trigger-v2",function(){a($(this).data("animation"))
})
};
var n=function(){var t=SfdcWwwBase.config.liveChatModalPath;
var v=SfdcWwwBase.config.liveChatWaterFallDelay||30;
var s=v*b;
if(t){var u=typeof digitalData==="object"&&digitalData.user[0]&&digitalData.user[0].profile[0]&&digitalData.user[0].profile[0].usertype;
j(t,e,function(){SfdcWwwBase.liveagent.initSecondButton();
setTimeout(function(){k(e);
digitalData.localStorage.chat=1;
digitalData.util.saveLocalStorage();
digitalData.util.addPageData("customlink","chat-fall");
digitalData.util.addPageData("drivertypepathing","prop 22 value");
digitalData.util.addPageData("moduletracking",Page.getName()+"|chat-fall");
digitalData.util.trackBehavior("chat-fall",["chatdrop"],["page.pagename","page.drivertypepathing","page.moduletracking","user[0].profile[0].usertype","page.customlink"]);
if(typeof Invoca==="object"&&Invoca.hasOwnProperty("_DOM")&&Invoca.hasOwnProperty("PNAPI")){Invoca._DOM.numberToReplaceHasRun=false;
Invoca.PNAPI.doInvoca()
}},s)
})
}else{SfdcWwwBase.liveagent.initSecondButton()
}};
var l=function(){return !!SfdcWwwBase.config&&!SfdcWwwBase.config.liveChatWaterfallDisabled&&typeof digitalData!=="undefined"&&digitalData.localStorage&&!digitalData.localStorage.chat
};
var r=function(){g();
o();
c();
if(l()){n()
}else{SfdcWwwBase.liveagent.initSecondButton()
}};
p={showModal:k,hideModal:a,triggerModal:j,isActive:m,shouldDoWaterfall:l,init:r};
if(!SfdcWwwBase.utils.isEditMode()){p.init()
}return p
}());
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.highlight=SfdcWwwBase.highlight||{};
(function(a){SfdcWwwBase.highlight.init=function(){if(!SfdcWwwBase.utils.isEditMode()){SfdcWwwBase.highlight.bindHighlightClick()
}};
SfdcWwwBase.highlight.bindHighlightClick=function(){a(".highlight-container").each(function(){a(this).on("click",function(c){var b=a(this).find(".buttonCTAItemComponent a")[0];
b.click()
})
})
};
a(document).ready(function(){SfdcWwwBase.highlight.init()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.tallHighlight=SfdcWwwBase.tallHighlight||{};
(function(a){var c=a(window);
var b=false;
SfdcWwwBase.tallHighlight.init=function(){SfdcWwwBase.tallHighlight.bindHighlightClick();
SfdcWwwBase.tallHighlight.checkWidth();
a(window).resize(function(){var d=c.width();
if(d<769&&!b){SfdcWwwBase.tallHighlight.insertCaret();
b=true
}else{if(d>768&&b){SfdcWwwBase.tallHighlight.removeCaret();
b=false
}}})
};
SfdcWwwBase.tallHighlight.checkWidth=function(){var d=c.width();
if(d<769){SfdcWwwBase.tallHighlight.insertCaret();
b=true
}else{if(d>768){SfdcWwwBase.tallHighlight.removeCaret();
b=false
}}};
SfdcWwwBase.tallHighlight.insertCaret=function(){a(".outer-btn-container.cta-at-mobile .btn-container .btn").each(function(){a(this).append('<span class="salesforce-icon icon-sfdc-icon-right-arrow" id="tall-highlight-caret"></span>')
})
};
SfdcWwwBase.tallHighlight.removeCaret=function(){a(".outer-btn-container.cta-at-mobile .btn-container .btn").each(function(){a("#tall-highlight-caret").remove()
})
};
SfdcWwwBase.tallHighlight.bindHighlightClick=function(){a(".outer-tall-highlight").each(function(){a(this).on("click",function(g){var f=a(this).parent();
var d=a(f).find(".outer-btn-container .btn-container .btn")[0];
d.click()
})
})
};
a(document).ready(function(){SfdcWwwBase.tallHighlight.init()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.navigation=SfdcWwwBase.navigation||{};
(function(b){var a,c=0;
SfdcWwwBase.navigation.handleProspectNavToggle=function(){var f=0;
var g=1024;
var h=".free-trial-mobile";
var e=3;
var d=false;
if(window.innerWidth>g){h=".free-trial-desktop";
d=true
}f=b(h).find(".btn").outerWidth()||0;
if(d&&f>0){f-=e
}b(".navbar-toggle").css("right",f)
};
SfdcWwwBase.navigation.trialButtonVisibility=function(d){if(d){b("body").addClass("isc")
}else{b("body").addClass("isp");
SfdcWwwBase.navigation.handleProspectNavToggle()
}};
SfdcWwwBase.navigation.handleTrialButton=function(){if(c>100){SfdcWwwBase.navigation.trialButtonVisibility(false)
}else{clearTimeout(c);
if(typeof vp==="object"&&typeof vp.isCustomer==="function"){SfdcWwwBase.navigation.trialButtonVisibility(vp.isCustomer())
}else{c=setTimeout(SfdcWwwBase.navigation.handleTrialButton,25)
}}};
SfdcWwwBase.navigation.handleSearchLayout=function(){b(".navbar .icon-sfdc-icon-magnifying-glass, .globalnavbar .icon-sfdc-icon-magnifying-glass, .skinnynav .icon-sfdc-icon-magnifying-glass").delay(600).fadeIn().addClass("gsc-globalSearhIsVisible");
if(SfdcWwwBase.searchResults){SfdcWwwBase.searchResults.init()
}b(".gsc-input").on("keypress",_.throttle(SfdcWwwBase.navigation.onSearchKeyChanged,500));
b(window).on("rezise",_.throttle(SfdcWwwBase.navigation.onSearchKeyChanged,500))
};
SfdcWwwBase.navigation.checkGoogleSearchInput=function(){if(b("#___gcse_0").length>0){SfdcWwwBase.navigation.handleSearchLayout();
clearTimeout(a)
}else{a=setTimeout(SfdcWwwBase.navigation.checkGoogleSearchInput,200)
}};
SfdcWwwBase.navigation.onSearchKeyChanged=function(){b(".gssb_c").css("min-width",b(".gsc-search-box").width()+"px")
};
SfdcWwwBase.navigation.handleContactUs=function(){b(".globalnavbar .dropdown, .skinnynav .dropdown").hover(function(){b(this).find(".dropdown-menu").show()
},function(){b(this).find(".dropdown-menu").hide()
});
if(b(".fixedFooterCTAItemComponent .live-chat-container").length){setInterval(function(){if(b("#liveagent_button_online_57330000000MBlR").css("display")==="none"){b(".utility-bar a.chat-trigger").hide()
}else{b(".utility-bar a.chat-trigger").show()
}},5000)
}};
SfdcWwwBase.navigation.init=function(){SfdcWwwBase.navigation.handleTrialButton();
SfdcWwwBase.navigation.checkGoogleSearchInput();
SfdcWwwBase.navigation.handleContactUs()
};
b(document).ready(function(){SfdcWwwBase.navigation.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.mobileNavigation=SfdcWwwBase.mobileNavigation||{};
(function(a){SfdcWwwBase.mobileNavigation.bindUI=function(){var b=a(".drawer-previous");
a(".free-trial-mobile-nav .btn").on("click",function(f){var c=a(".free-trial-mobile-nav .btn"),d=c.text();
f.preventDefault();
if(a(c).attr("href")!==undefined){a(".freeTrialHeader").hide();
var e=a(c).attr("href");
SfdcWwwBase.mobileNavigation.openNavigation(true);
SfdcWwwBase.mobileNavigation.fadeHeader(d);
SfdcWwwBase.mobileNavigation.openForm(a("#freeTrialForm"),{formUrl:e,formHeight:850});
a(".drawer-previous").data("sourceTitle",d)
}else{a(".freeTrialHeader").show();
SfdcWwwBase.mobileNavigation.openNavigation(true);
SfdcWwwBase.mobileNavigation.fadeHeader(d);
SfdcWwwBase.mobileNavigation.openForm(a("#freeTrialForm"),a("#mobileFormSelect option:selected").data());
a(".drawer-previous").data("sourceTitle",d)
}});
a("#drawer_contactus").parent().on("click",function(){SfdcWwwBase.mobileNavigation.openForm(a("#contactForm"),a("#contactForm").data())
});
a("#freetrial-footer").on("click",function(f){var c=a(this).attr("href"),e=a(this).text(),d=a(this).data("freetrialHeight");
f.preventDefault();
if(c===undefined){a(".freeTrialHeader").show();
SfdcWwwBase.mobileNavigation.openNavigation(true);
SfdcWwwBase.mobileNavigation.fadeHeader(e);
SfdcWwwBase.mobileNavigation.openForm(a("#freeTrialForm"),a("#mobileFormSelect option:selected").data());
a(".drawer-previous").data("sourceTitle",e)
}else{a(".freeTrialHeader").hide();
SfdcWwwBase.mobileNavigation.openNavigation(true);
SfdcWwwBase.mobileNavigation.fadeHeader(e);
SfdcWwwBase.mobileNavigation.openForm(a("#freeTrialForm"),{formUrl:c,formHeight:d});
a(".drawer-previous").data("sourceTitle",e)
}});
a("#mobileFormSelect").change(function(){SfdcWwwBase.mobileNavigation.openForm(a("#freeTrialForm"),a("#mobileFormSelect option:selected").data())
});
a(".mobile-nav-toggle").on("click",function(c){c.preventDefault();
a(this).attr("sfdc:generic-linktrack-suffix","SFDC:us:mobileglobalnav:open");
SfdcWwwBase.mobileNavigation.openNavigation()
});
a(".drawer-close, .overlay").on("click",function(c){SfdcWwwBase.mobileNavigation.closeNav()
});
a("a.has-child").on("click",function(c){c.preventDefault();
var k=a(this),n=k.data("target-drawer"),j=k.next("div.drawer-container"),g=j.data("drawer-title"),h=k.data("freetrial-url"),d=k.data("freetrial-title"),m=a("#freetrial-footer");
if(!j.hasClass("active")){j.addClass("active")
}if(!b.hasClass("active")){b.fadeIn().addClass("active")
}b.data("currentDrawer","#drawer_"+n);
if(h!==undefined){if(d!==undefined){m.fadeOut(200,function(){m.text(d).fadeIn(200)
})
}else{var l=a("#freetrial-footer").data("default-trialtitle");
m.fadeOut(200,function(){m.text(l).fadeIn(200)
})
}var f=a(this).data("freetrial-url"),e=a(this).data("freetrial-height");
m.attr({"data-freetrial-url":f,"data-freetrial-height":e,href:h})
}SfdcWwwBase.mobileNavigation.fadeHeader(g)
});
a(b).on("click",function(){var g=a(this).data("current-drawer"),l=a(g).parent().closest(".drawer-container"),f=l.attr("id"),c=l.data("drawerTitle"),j=l.prev("a").data("freetrial-url"),d=l.prev("a").data("freetrial-title"),e=a("#freetrial-footer"),h=e.data("default-trialtitle"),k=e.text();
a(g).removeClass("active");
if(g==="#drawer_freetrial"){c=(a(".drawer-container .active").length>0?a(".drawer-container .active").last().data("drawerTitle"):a("#drawer-title").data("defaultTitle"));
f=a(".drawer-container .active").last().attr("id");
a(this).data("current-drawer","#"+f);
j=a(".drawer-container .active").last().prev("a").data("freetrialUrl");
d=a(".drawer-container .active").last().prev("a").data("freetrial-title");
e.attr("href",j)
}if(g==="#drawer_contactus"){c=a(this).data("sourceTitle")
}if(!f){a(this).removeClass("active").fadeOut();
c=a("#drawer-title").data("defaultTitle")
}else{a(this).data("current-drawer","#"+f)
}if(j===undefined){e.removeAttr("href")
}if(d!==undefined){e.fadeOut(200,function(){e.text(d).fadeIn(200)
})
}else{if(k!==h){e.fadeOut(200,function(){e.text(h).fadeIn(200)
})
}}SfdcWwwBase.mobileNavigation.fadeHeader(c)
})
};
SfdcWwwBase.mobileNavigation.openBlankForm=function(b,c){};
SfdcWwwBase.mobileNavigation.openForm=function(b,c){b.fadeTo(200,0);
b.attr("src",c.formUrl).css("height",c.formHeight);
b.off("load");
b.on("load",function(){b.fadeTo(500,1);
b.siblings(".loading-icon").hide()
})
};
SfdcWwwBase.mobileNavigation.openNavigation=function(e){var c=e===true,g=a("body"),h=a(".mobile-drawer-navigation").height(),d=a(".mobile-drawer-footer").height();
a(".drawer-container").not("#drawer_contactus").css({top:h,bottom:d});
a("#drawer_contactus").css({top:h});
g.addClass("mobile-navigation-drawer-active");
if(c){var f=a(".free-trial-drawer"),b=a(".drawer-previous");
if(!g.hasClass("loaded")){g.addClass("loaded");
SfdcWwwBase.mobileNavigation.openForm(a("#freeTrialForm"),a("#mobileFormSelect option:selected").data())
}f.addClass("active");
b.fadeIn().addClass("active");
b.data("currentDrawer","#drawer_freetrial")
}};
SfdcWwwBase.mobileNavigation.freeTrial=function(c,b){console.log(c+" : "+b)
};
SfdcWwwBase.mobileNavigation.fadeHeader=function(d,b){var c=a("#drawer-title span");
if(b){c.text(d)
}else{c.fadeOut(200,function(){c.text(d).fadeIn(200)
})
}};
SfdcWwwBase.mobileNavigation.closeNav=function(){var b=a("body");
var c=a(".content-container");
b.removeClass("mobile-navigation-drawer-active");
a(".content-container").css("-webkit-overflow-scrolling","touch");
a(".drawer-container.active").removeClass("active");
a(".drawer-previous").removeClass("active").fadeOut();
SfdcWwwBase.mobileNavigation.fadeHeader(a("#drawer-title").data("defaultTitle"));
setTimeout(function(){c.off("click touchstart");
a("body").trigger("resize")
},300)
};
SfdcWwwBase.mobileNavigation.init=function(){var b=a(".mobileNavigationComponent > .header-container").outerHeight()+"px";
a(".mobileNavigationComponent").css({height:b});
SfdcWwwBase.mobileNavigation.bindUI()
};
a(document).ready(function(){SfdcWwwBase.mobileNavigation.init()
})
}(jQuery));
(function(a){if(!a("body").hasClass("cq-wcm-edit")){a(document).ready(function(){var c=a(".leftnav");
if(c.length){var d=a(".leftnav-header-affix"),e=a(".leftnav-page-list"),f=a(".leftnav-footer-affix");
var b=function(){var h=(parseInt(c.data("offset-top"))>0)?c.data("offset-top"):c.height();
var g=a("header.header-container").outerHeight(true);
return h+g
};
c.data("offset-top",b);
c.on("affix.bs.affix",function(){c.hide().removeClass("padding-top-no-affix").addClass("padding-top-affix");
d.show();
e.hide();
f.show()
});
c.on("affixed.bs.affix",function(){c.slideDown(250)
});
c.on("affix-top.bs.affix",function(){if(!e.is(":visible")){c.removeClass("padding-top-affix").addClass("padding-top-no-affix");
d.hide();
e.show();
f.hide()
}});
a(".leftnav-back-to-top").on("click",function(g){g.preventDefault();
a("html, body").animate({scrollTop:0},"slow")
})
}})
}a.each(a(".manual_items a"),function(){if(a(this).attr("href")===window.location.pathname){a(this).addClass("active")
}});
a("select#leftnav-select").change(function(){window.location=a(this).children(":selected")[0].value
});
(function(){var b=a(".leftnav-select-container");
var c=a(".leftnav-heading .header-text").text();
b.find(".leftnav-select-head").text(c);
a(".content-container").prepend(b)
})();
(function(){a("#leftnav-select").find("option").each(function(b){var c=this.className.split(/\s+/);
if(c.indexOf("active")!==-1&&c.indexOf("active-child")===-1){a(this).attr("selected","selected")
}})
}())
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.searchResults=SfdcWwwBase.searchResults||{};
SfdcWwwBase.searchResults.isRendered=SfdcWwwBase.searchResults.isRendered||false;
(function(c){var a=SfdcWwwBase.searchResults;
var b={sm:768,md:1024,lg:1200};
a.placePromo=function(){var d=c(".search-result-item").size(),e=d>2?2:d;
c(".results-promo .columnContainer > .columns-wrapper > .container").removeClass("container");
c(".results-promo").insertAfter(c(".search-result-item:eq("+e+")")).removeClass("hidden")
};
a.processData=function(e){var g=Math.ceil(e.searchInformation.totalResults/10);
g=(g>10)?10:g;
e.searchInformation.pages=g;
var h=(e.queries.request[0]["startIndex"]+9)/10;
e.searchInformation.currentpage=h;
var d=c("#search-results_template").html();
var f=_.template(d);
c(".search-results-container").html(f(e));
a.placePromo();
a.bindPaginationClicks()
};
a.bindPaginationClicks=function(){c(".search-results-container .pagination div").on("click",function(){var d=c(this).data("result-index");
var e=(d*10)-9;
a.getResults(e);
c("html, body").animate({scrollTop:0},"fast")
})
};
a.getResults=function(e){var d="https://www.googleapis.com/customsearch/v1",g=c(".search-results-container"),f=SfdcWwwBase.utils.getQueryParameterByName("q"),h=isNaN(e)?"":"&start="+e;
if(g.size()>0&&f!==""){d+="?key="+g.data("guid")+"&cx="+g.data("cx")+"&q="+f+h;
SfdcWwwBase.utils.getJSONP(d,this.processData,false)
}};
a.bindClick=function(){c(".expandableNavigationBarComponent .icon-sfdc-icon-magnifying-glass, .globalnavbar .icon-sfdc-icon-magnifying-glass").on("click",function(){if(window.innerWidth>=b.md){c(".search-form").toggleClass("active");
c("form.gsc-search-box").toggleClass("active");
c(".phone-number").toggleClass("search-active")
}})
};
a.customizeSearchButton=function(){var d=c("div .search-button").data("search");
c("input.gsc-search-button").attr("value",d)
};
a.init=function(){if(SfdcWwwBase.searchResults.isRendered===false){SfdcWwwBase.searchResults.isRendered=true;
this.getResults();
this.bindClick();
this.customizeSearchButton()
}}
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.pricingComponent=SfdcWwwBase.pricingComponent||{};
(function(a){SfdcWwwBase.pricingComponent.adjustHeights=function(){if(a(".pricingComponent .horizontal-layout").length>0){SfdcWwwBase.utils.equalizeHeights(".pricingComponent .horizontal-layout .left-pricing-column, .pricingComponent .horizontal-layout .right-pricing-column")
}if(a(".pricingComponent .vertical-layout").length>0){SfdcWwwBase.utils.equalizeHeights(".pricingComponent .pricing-container.vertical-layout .title-editions-container",SfdcWwwBase.pricingComponent.dockElement);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .edition-container",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .feature-bar",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .price-body-description",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .pre-text",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .pricing-number",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .pricing-tagline",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .included-message",["xs"]);
SfdcWwwBase.utils.equalizeHeightsResponsive(".pricingComponent .pricing-container.vertical-layout .edition-head",["xs"])
}};
SfdcWwwBase.pricingComponent.dockElement=function(){a(".pricingComponent .pricing-container .title-editions-container .funky").addClass("docked")
};
SfdcWwwBase.pricingComponent.windowResizeContent=function(){if(a(".pricingComponent .vertical-layout").length>0){a(".pricingComponent .pricing-container .title-editions-container .funky").removeClass("docked");
SfdcWwwBase.utils.equalizeHeights(".pricingComponent .pricing-container.vertical-layout .title-editions-container",SfdcWwwBase.pricingComponent.dockElement)
}};
SfdcWwwBase.pricingComponent.init=function(){SfdcWwwBase.pricingComponent.showFeatures();
SfdcWwwBase.pricingComponent.adjustHeights();
a(window).on("resize",_.throttle(function(){SfdcWwwBase.pricingComponent.windowResizeContent()
},500))
};
SfdcWwwBase.pricingComponent.showFeatures=function(){a(".pricingComponent .features a.see-features").on("click",function(){var b=a(this).find(".feature-text");
if(b.text()===b.data("text-swap")){b.text(b.data("text-original"))
}else{b.data("text-original",b.text());
b.text(b.data("text-swap"))
}var d=a(this).find(".feature-caret");
d.toggleClass("icon-sfdc-icon-down-arrow icon-sfdc-icon-up-arrow");
var c=a(this).parent().next();
if(c.hasClass("hidden-xs")){c.removeClass("hidden-xs")
}else{c.addClass("hidden-xs")
}})
};
SfdcWwwBase.pricingComponent.targetInit=function(){SfdcWwwBase.pricingComponent.init();
a(window).trigger("resize")
};
a(document).ready(function(){if(a(".pricingComponent").length>0){SfdcWwwBase.pricingComponent.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.drawerNavigation=SfdcWwwBase.drawerNavigation||{};
(function(a){SfdcWwwBase.drawerNavigation.moveItemsForGlobalNav=function(){a("body").prepend(a(".side-drawers"))
};
SfdcWwwBase.drawerNavigation.bindUI=function(){var b=a("body");
var c=a(".content-container");
a(".free-trial-mobile .btn-nav").on("click",function(d){d.preventDefault();
if(!b.hasClass("freetrial-drawer-active")){b.addClass("nav-active freetrial-drawer-active");
a(this).attr("sfdc:generic-linktrack-suffix","SFDC:us:mobileglobalnav:open");
if(!b.hasClass("loaded")){b.addClass("loaded");
SfdcWwwBase.drawerNavigation.openForm(a("#freeTrialForm"),a("#formSelect option:selected").data())
}SfdcWwwBase.drawerNavigation.footerSectionPhoneHandler("hide")
}else{if(this.id==="nav-open-btn"){a(this).attr("sfdc:generic-linktrack-suffix","SFDC:us:mobileglobalnav:close")
}SfdcWwwBase.drawerNavigation.closeNav()
}c.on("click touchstart",function(e){if(b.hasClass("freetrial-drawer-active")){SfdcWwwBase.drawerNavigation.closeNav()
}})
});
a(".contact-header").on("click",function(){var d=a(".contactForm-container");
a(this).toggleClass("active");
if(!d.hasClass("loaded")){SfdcWwwBase.drawerNavigation.openForm(a("#contactForm"),d.find("iframe").data())
}c.on("click touchstart",function(e){if(b.hasClass("nav-active")){SfdcWwwBase.drawerNavigation.closeNav()
}});
d.addClass("loaded");
d.slideToggle("fast");
a(".freeTrial-container").slideToggle("fast")
});
a("#formSelect").change(function(){SfdcWwwBase.drawerNavigation.openForm(a("#freeTrialForm"),a("#formSelect option:selected").data())
});
window.addEventListener("resize",function(){if(window.innerWidth>1024&&a("body").hasClass("nav-active")){SfdcWwwBase.drawerNavigation.closeNav()
}});
window.addEventListener("orientationchange",SfdcWwwBase.drawerNavigation.doOnOrientationChange,false)
};
SfdcWwwBase.drawerNavigation.footerSectionPhoneHandler=function(b){var c=a(".mobile-footer-phone-number");
if(c.length>0){if(b==="show"){setTimeout(function(){c.show()
},150)
}else{if(b==="hide"){c.hide()
}}}};
SfdcWwwBase.drawerNavigation.closeNav=function(){var b=a("body");
var c=a(".content-container");
b.removeClass("nav-active");
setTimeout(function(){b.removeClass("freetrial-drawer-active");
a(".content-container").css("-webkit-overflow-scrolling","touch");
SfdcWwwBase.drawerNavigation.footerSectionPhoneHandler("show")
},200);
setTimeout(function(){c.off("click touchstart");
a("body").trigger("resize")
},300)
};
SfdcWwwBase.drawerNavigation.openForm=function(b,c){b.fadeTo(200,0);
b.attr("src",c.formUrl).css("height",c.formHeight);
b.off("load");
b.on("load",function(){b.fadeTo(500,1)
})
};
SfdcWwwBase.drawerNavigation.doOnOrientationChange=function(){switch(window.orientation){case -90:case 90:SfdcWwwBase.drawerNavigation.closeNav();
break;
default:SfdcWwwBase.drawerNavigation.closeNav();
break
}};
SfdcWwwBase.drawerNavigation.init=function(){SfdcWwwBase.drawerNavigation.bindUI()
};
a(document).ready(function(){SfdcWwwBase.drawerNavigation.moveItemsForGlobalNav();
SfdcWwwBase.drawerNavigation.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.modalOverlay=SfdcWwwBase.modalOverlay||{};
(function(b){SfdcWwwBase.modalOverlay.mainPayloads={};
SfdcWwwBase.modalOverlay.getProps=function(d,c){var e=b(d.relatedTarget);
var f=e.data(c)||"";
var g=e.data("modal-title")||"";
return{path:f,title:g}
};
SfdcWwwBase.modalOverlay.loadModalContent=function(c){b("#mainModal .modal-body").html(c).find(".columnContainer > .columns-wrapper > .container").removeClass("container").addClass("container-fluid")
};
SfdcWwwBase.modalOverlay.bindUI=function(){b(".image-modal").on("show.bs.modal",function(e){var d=SfdcWwwBase.modalOverlay.getProps(e,"modal-path");
if(!a(d.path)){d.path+=".html"
}var c=b(this);
c.find(".modal-title").html(d.title);
c.find(".modal-body-container").load(d.path)
});
b("#mainModal").on("show.bs.modal",function(d){var c=SfdcWwwBase.modalOverlay.getProps(d,"modal-src");
if(typeof SfdcWwwBase.modalOverlay.mainPayloads[c.path]!=="undefined"){SfdcWwwBase.modalOverlay.loadModalContent(SfdcWwwBase.modalOverlay.mainPayloads[c.path])
}else{b.get(c.path,function(e){SfdcWwwBase.modalOverlay.mainPayloads[c.path]=e;
SfdcWwwBase.modalOverlay.loadModalContent(e)
})
}}).on("hidden.bs.modal",function(){b(this).find(".modal-body").html("")
});
b(".modal").on("click","[data-target='#mainModal']",function(d){b(this).removeAttr("data-toggle");
var e=b(d.currentTarget).data("modal-src")||"";
var f=b(d.currentTarget).data("modal-title")||"";
var c={path:e,title:f};
if(typeof SfdcWwwBase.modalOverlay.mainPayloads[c.path]!=="undefined"){SfdcWwwBase.modalOverlay.loadModalContent(SfdcWwwBase.modalOverlay.mainPayloads[c.path])
}else{b.get(c.path,function(g){SfdcWwwBase.modalOverlay.mainPayloads[c.path]=g;
SfdcWwwBase.modalOverlay.loadModalContent(g)
})
}})
};
function a(c){return !c||c.trim()===""||c.indexOf("?")>=0||c.indexOf("#")>=0||c.indexOf(".html")>=0||c.indexOf("http://")===0||c.indexOf("https://")===0||c.lastIndexOf("/")===c.length-"/".length
}SfdcWwwBase.modalOverlay.init=function(){SfdcWwwBase.modalOverlay.bindUI()
};
b(document).ready(function(){SfdcWwwBase.modalOverlay.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.loadMore=SfdcWwwBase.loadMore||{};
(function(b){SfdcWwwBase.loadMore.bindUI=function(){var d=b(".btn-load-more");
for(var c=0;
c<d.length;
c++){a(b(d[c]))
}};
function a(d){var e=d.parent().siblings().children(".columnContainer.parbase.section");
if(e.length<=2){d.hide()
}for(var c=2;
c<e.length;
c++){b(e[c]).hide()
}d.on("click",function(h){h.preventDefault();
var f,g=0;
for(f=0;
f<e.length;
f++){if(f<e.length&&g<2&&b(e[f]).is(":hidden")){b(e[f]).show();
g++;
if(f===e.length-1){b(this).hide()
}}else{if(g>=2){break
}}}})
}SfdcWwwBase.loadMore.init=function(){SfdcWwwBase.loadMore.bindUI()
};
b(document).ready(function(){SfdcWwwBase.loadMore.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.comparisonComponent=SfdcWwwBase.comparisonComponent||{};
(function(a){SfdcWwwBase.comparisonComponent.adjustWidths=function(){a(".comparisonRowComponent").each(function(){var b=a(this).find(">.comparisonCells");
if(a(window).width()>=1024){var c=Math.floor(80/(b.size()-1));
b.first().width("20%");
b.not(":first()").width(c+"%")
}else{b.width("100%")
}})
};
SfdcWwwBase.comparisonComponent.redrawDOM=function(){var f=a(".comparisonRowComponent").size();
var c=a(".comparisonRowComponent").first().find(">.comparisonCells").size();
var e=[];
for(var b=1;
b<c;
b++){e[b]=[]
}a(".comparisonRowComponent").each(function(g,h){a(this).find(">.comparisonCells").each(function(j,k){if(j!==0){e[j].push(a(this).html())
}})
});
var d="";
a.each(e,function(g,h){if(g!==0){a.each(e[g],function(j,k){d+="<div class='comparisonCells'>"+k+"</div>"
})
}});
d="<div class='comparisonComponent'><div class='comparisonRowComponent'>"+d+"</div></div>";
a(".comparisonComponent").replaceWith(d)
};
SfdcWwwBase.comparisonComponent.equalizeHeight=function(){SfdcWwwBase.utils.equalizeHeightsResponsive(".comparisonComponent .comparisonCells.comparison-cell-data .columns-wrapper",["xs","sm"])
};
SfdcWwwBase.comparisonComponent.init=function(){SfdcWwwBase.comparisonComponent.adjustWidths();
SfdcWwwBase.comparisonComponent.equalizeHeight();
if(a(window).width()<1024){SfdcWwwBase.comparisonComponent.redrawDOM()
}};
a(document).ready(function(){if(a(".comparisonComponent").length>0){SfdcWwwBase.comparisonComponent.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.moduleContentReplacement=SfdcWwwBase.moduleContentReplacement||{};
(function(e){var d="content-replacement-source",a="content-replacement-id",c="module-content",b="content-close";
SfdcWwwBase.moduleContentReplacement.ogHeight={};
SfdcWwwBase.moduleContentReplacement.hideModuleContent=function(){var f=this;
e(".btn-content-replace-close").on("click",function(){var k=e(this).data(a),g=f.getOgColumnContainer(k),j=c+"-"+k,h=e("#"+j)[0];
e(h).fadeOut("slow",function(){e(h).remove();
f.adjustHotSwapHeight(k,f.ogHeight[j]);
e(g).fadeIn("slow","linear")
})
})
};
SfdcWwwBase.moduleContentReplacement.adjustHotSwapHeight=function(g,f){var h=this;
e(h.getOgColumnContainer(g)).closest(".hot-swap").css({height:f})
};
SfdcWwwBase.moduleContentReplacement.windowResizeHandler=function(){e(".columnContainer.hot-swap").each(function(){var g=e(this).find(".content-replacement-overlay"),j,f,h=e(this).find(">.columns-wrapper").height();
if(g.size()>0){j=g.attr("id");
f=g.height();
SfdcWwwBase.moduleContentReplacement.ogHeight[j]=h;
e(this).height(f)
}else{e(this).height(h)
}})
};
SfdcWwwBase.moduleContentReplacement.getVyPlayerId=function(g){var f=e(g).find(".vy-player-container script");
if(f.size()>0){var l=e(f).attr("id"),h=l.split("_"),k=h.length,j=h[k-1];
return j
}return null
};
SfdcWwwBase.moduleContentReplacement.showModuleContent=function(){var f=this;
e(".btn-content-replace").on("click",function(){var j=e(this).data(a),g=f.getOgColumnContainer(j),h=c+"-"+j,k=e(this).data(d)+".html";
e(g).closest(".columnContainer").addClass("hot-swap");
if(e("#"+h).size()===0){e.get(k,function(s){var q=e.parseHTML(s,true),m=e("<div/>",{id:h,"class":"content-replacement-overlay"}).append(q),u=b+"-"+j,o=e(g).children("#"+u).clone(),n=e(q).find(".columns-wrapper.lazy");
f.ogHeight[h]=e(g).height();
f.setColumnsBgImage(n);
e(o).removeClass("hidden");
e(m).prepend(o);
e(g).before(m);
var p=e(q).find(".videoComponent").size()>0;
if(p&&typeof MutationObserver!=="undefined"){var l=f.getVyPlayerId(q);
var t=new MutationObserver(function(w){var x=this;
w.forEach(function(y){var z="vidyard_span_"+l;
if(e(y.addedNodes).is("span#"+z)){x.disconnect();
f.replaceContent(j,g,h,m)
}})
});
var r={childList:true,subtree:true};
var v=document.getElementById(h);
t.observe(v,r)
}else{f.replaceContent(j,g,h,m)
}})
}})
};
SfdcWwwBase.moduleContentReplacement.replaceContent=function(j,g,h,f){var k=this;
this.adjustHotSwapHeight(j,this.ogHeight[h]);
e(g).fadeOut("fast",function(){var m=f.height();
k.adjustHotSwapHeight(j,m);
e("#"+h+".content-replacement-overlay").fadeIn("fast");
var l=f.height();
if(l!==m){k.adjustHotSwapHeight(j,l)
}});
this.hideModuleContent()
};
SfdcWwwBase.moduleContentReplacement.setColumnsBgImage=function(f){f.map(function(h,g){var j=e(g).data("src");
e(g).css("background-image",'url("'+j+'")')
})
};
SfdcWwwBase.moduleContentReplacement.getOgColumnContainer=function(f){return e("div.columnContainer div[data-content-replacement-id="+f+"]")[0]
};
SfdcWwwBase.moduleContentReplacement.init=function(){var f=this;
f.showModuleContent();
e(window).on("resize",_.throttle(f.windowResizeHandler,500))
};
SfdcWwwBase.moduleContentReplacement.init()
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.imageComponent=SfdcWwwBase.imageComponent||{};
(function(a){SfdcWwwBase.imageComponent.dockToBottom=function(){a(".imageComponent img.dock-img-bottom").each(function(){a(this).closest("div.col").css({position:"absolute",bottom:0,right:0})
})
};
SfdcWwwBase.imageComponent.init=function(){SfdcWwwBase.imageComponent.dockToBottom()
};
a(document).ready(function(){if(a(".imageComponent").length>0){SfdcWwwBase.imageComponent.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.filters=SfdcWwwBase.filters||{};
(function(c){var b;
var a;
SfdcWwwBase.filters.mobileDrawer=function(){c(".filter-category-title").unbind("click").click(function(){c(this).siblings(".filter-category-sub").slideToggle();
c(this).children(".icon-sfdc-icon-down-arrow, .icon-sfdc-icon-up-arrow").toggleClass("icon-sfdc-icon-up-arrow icon-sfdc-icon-down-arrow")
})
};
SfdcWwwBase.filters.resizeMobileDrawer=function(){var d;
c(window).resize(function(){clearTimeout(d);
d=setTimeout(SfdcWwwBase.filters.mobileDrawer,500)
})
};
SfdcWwwBase.filters.counter=function(){c('.filter-category [id^="collapse_"]').each(function(){var e=c(this).attr("id");
var d=e.replace("collapse_","heading_");
var f=c("#"+e+" .selected").length;
if(f>0){c("#"+d).children(".filters-category-count").show().children("span").text(f);
c("#"+d).children('*[data-toggle="collapse"]').removeClass("collapsed");
c(this).prev(".category-title").find("h4").removeClass("collapsed");
c(this).addClass("in")
}})
};
SfdcWwwBase.filters.bindMoreLink=function(){var d=this;
c("body").on("click",".filters-view-more > a",function(g){g.preventDefault();
var f=c(this).attr("href"),h=c(this).parents(".filteredCardsComponent > .row.columns-wrapper").attr("id"),e=c(this);
e.parent().addClass("waiting");
if(!b){e.siblings(".slds-spinner_container").removeClass("hide")
}if(a){f=SfdcWwwBase.filters.convertFragmentToSelectors(f)
}c.get(f,function(m){var l=c.parseHTML(m,true),j=c(l).find("#"+h).find(".filters-grid-card, .filtersListContainer, .filters-list-view-card").addClass("appended"),k=c(l).find("#"+h).find(".filters-view-more");
e.parents(".filters-grid-container, .filtersListContainer").append(j).append(k);
e.parent().remove();
d.cleanTags();
d.collapseList();
setTimeout(function(){c(".filters-grid-card, .filters-list-view-card").removeClass("appended")
},100)
})
})
};
SfdcWwwBase.filters.showMore=function(){SfdcWwwBase.filters.bindMoreLink()
};
SfdcWwwBase.filters.bindFilterLinks=function(){c("body").on("click",".filter-category-sub a, .filters-search-container a",function(j){j.preventDefault();
var k=c(this).attr("href"),g=c(this).closest('.filter-category [id^="collapse_"]').attr("id"),f={clickedURL:k,clickedCategoryId:g},l=c(this).data("analytics-id"),d=c(this).closest("li").hasClass("selected")?true:false;
if(l){if(!isNaN(l)){l=l.toString()
}l=l.replace(" ","").toLowerCase()
}SfdcWwwBase.filters.updateFilterPage(k,g);
SfdcWwwBase.filters.addToHistory(f,"",k);
var e=c(this).parent().hasClass("filter multiple");
if(d===false&&e===true){var h=c(this).closest('.filter-category [id^="collapse_"]').data("namespace").replace(" ","").toLowerCase();
SfdcWwwBase.filters.filterAnalytics(h,l)
}})
};
SfdcWwwBase.filters.filterAnalytics=function(d,e){var f="filterclicked|"+d+"|"+e;
if(typeof(digitalData)!=="undefined"){digitalData.util.trackActivity(f)
}};
SfdcWwwBase.filters.updateFilterPage=function(d,e){if(!b){c(".filteredCardsAjax-spinner .slds-spinner_container").removeClass("hide")
}if(a){d=SfdcWwwBase.filters.convertFragmentToSelectors(d)
}c.get(d,function(j){var f=c.parseHTML(j,true),h=c(f).find(".filters"),g=c(f).find(".filters-grid-container, .filtersListContainer");
if(!b){c(".filteredCardsAjax-spinner .slds-spinner_container").addClass("hide")
}c(".filters").replaceWith(h);
c(".filters-grid-container, .filtersListContainer").replaceWith(g)
}).done(function(){SfdcWwwBase.filters.collapseAll();
SfdcWwwBase.filters.expandLastClickedFilter(e);
SfdcWwwBase.filters.layoutFilters();
SfdcWwwBase.filters.collapseList()
})
};
SfdcWwwBase.filters.convertFragmentToSelectors=function(e){if(e.indexOf("#")!==-1){var m=e.match("^(([^:\\/?#]+):)?(\\/\\/([^\\/?#]*))?([^?#]*)([\\w\\-\\.]+[^#?\\s]+)?(#(.*))?");
var k=m[5];
var f=m[8];
var g=f.replace(/,/g,".");
var n=e.slice(0,e.indexOf("#"));
if(k.indexOf(".html")!==-1){var d=k.indexOf(".");
var l=k.slice(0,d);
return n.replace(k,l+"."+g+".html")
}else{var j=k.lastIndexOf("/");
var h=k.slice(0,j);
return n.replace(k,h+"."+g+"/")
}}return e
};
SfdcWwwBase.filters.initDeepLinkFilters=function(d){if(d.href.indexOf("<")===-1&&d.href.indexOf(">")===-1&&d.href.indexOf('"')===-1){if(d.hash!==null&&d.hash.indexOf("_filter")!==-1){SfdcWwwBase.filters.updateFilterPage(d.pathname+d.hash,null)
}}};
SfdcWwwBase.filters.addToHistory=function(d,f,e){if(typeof(window.history.pushState==="function")){window.history.pushState(d,f,e)
}};
SfdcWwwBase.filters.updatePageFromHistory=function(e){var f=e.state.clickedURL,d=e.state.clickedCategoryId;
SfdcWwwBase.filters.updateFilterPage(f,d)
};
SfdcWwwBase.filters.expandLastClickedFilter=function(d){c("#"+d).addClass("in").prev(".category-title").find("h4").removeClass("collapsed")
};
SfdcWwwBase.filters.bindPopStateEvent=function(){if(typeof(window.addEventListener==="function")){window.addEventListener("popstate",function(d){SfdcWwwBase.filters.updatePageFromHistory(d)
})
}else{window.attachEvent("popstate",function(d){SfdcWwwBase.filters.updatePageFromHistory(d)
})
}};
SfdcWwwBase.filters.filterLinks=function(){SfdcWwwBase.filters.bindFilterLinks()
};
SfdcWwwBase.filters.popState=function(){SfdcWwwBase.filters.bindPopStateEvent()
};
SfdcWwwBase.filters.collapseAll=function(){c(".category-title h4").addClass("collapsed");
c(".category-items").removeClass("in")
};
SfdcWwwBase.filters.layoutFilters=function(){SfdcWwwBase.filters.counter();
if(c(window).width()<=768){SfdcWwwBase.filters.mobileDrawer()
}else{SfdcWwwBase.filters.resizeMobileDrawer()
}};
SfdcWwwBase.filters.cleanTags=function(){var e=this;
var d=c(".cardComponent");
c.each(d,function(l,g){var p=c(g).find("nobr");
var h=p[0];
if(undefined!==h){var m=parseInt(c(h).css("line-height").replace("px",""));
var f=e.getTopPosition(h);
var n=f+m;
for(var j=0;
j<p.length;
j++){var o=p[j];
if(e.getTopPosition(o)>=n+m){var k=p[j-1];
if(undefined!==k){k.innerHTML=e.removeComma(k.innerHTML);
break
}}}}})
};
SfdcWwwBase.filters.getTopPosition=function(d){if(null!==d||undefined!==d){var e=d.getBoundingClientRect();
return e.top
}return 0
};
SfdcWwwBase.filters.removeComma=function(d){var f=d.length-1,e=d[f];
if(undefined!==e&&e===","){return d.substring(0,f)
}return d
};
SfdcWwwBase.filters.collapseList=function(h){var d=c(".trigger"),g=c(".triggerContent"),e=c(".expanded-line"),f=c(".toggle-arrow");
d.off();
d.on("click",function(j){j.preventDefault();
var k=c(this);
if(k.hasClass("active-card")){k.removeClass("active-card");
k.next().slideUp();
k.parents(e).removeClass("expanded-line-active");
k.find(f).removeClass("icon-sfdc-icon-up-arrow");
k.find(f).addClass("icon-sfdc-icon-down-arrow")
}else{d.removeClass("active-card");
g.slideUp();
e.removeClass("expanded-line-active");
f.removeClass("icon-sfdc-icon-up-arrow");
f.addClass("icon-sfdc-icon-down-arrow");
k.addClass("active-card");
k.next().slideDown();
k.parents(e).addClass("expanded-line-active");
k.find(f).removeClass("icon-sfdc-icon-down-arrow");
k.find(f).addClass("icon-sfdc-icon-up-arrow")
}})
};
SfdcWwwBase.filters.init=function(){b=c("html").is(".ie9");
a=c("[data-enablefragment]").data("enablefragment");
SfdcWwwBase.filters.collapseAll();
SfdcWwwBase.filters.layoutFilters();
SfdcWwwBase.filters.showMore();
SfdcWwwBase.filters.filterLinks();
SfdcWwwBase.filters.popState();
SfdcWwwBase.filters.cleanTags();
SfdcWwwBase.filters.collapseList();
if(a){SfdcWwwBase.filters.initDeepLinkFilters(window.location)
}};
c(document).ready(function(){if(c(".filteredCardsComponent").length>0){SfdcWwwBase.filters.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.progressiveDisclosure=SfdcWwwBase.progressiveDisclosure||{};
(function(a){SfdcWwwBase.progressiveDisclosure.bindUI=function(){a("body").on("click",".btn-container-progressive-disclosure .btn",function(c){c.preventDefault();
var b=a(this).closest(".progressive-disclosure-container");
a(b).find(".row.columns-wrapper").css("max-height","10000px");
a(b).find(".progressive-disclosure-gradient").hide();
a(this).parents(".btn-container-progressive-disclosure").hide();
SfdcWwwBase.progressiveDisclosure.analytics(a(this).data("tracking-id"))
})
};
SfdcWwwBase.progressiveDisclosure.init=function(){SfdcWwwBase.progressiveDisclosure.bindUI()
};
SfdcWwwBase.progressiveDisclosure.analytics=function(c){var b="CTA-click:"+c;
if(typeof(digitalData)!=="undefined"&&typeof(c)!=="undefined"){digitalData.util.trackActivity(b)
}};
a(document).ready(function(){SfdcWwwBase.progressiveDisclosure.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.powerFooterComponent=SfdcWwwBase.powerFooterComponent||{};
(function(a){SfdcWwwBase.powerFooterComponent.alignPageFooter=function(){var c="#mobileFooterPhoneNumber_level";
if(a(c).length){var b=_.debounce(function(f){var d=a(c).outerHeight()+"px";
a(".page-footer").css({"padding-bottom":d})
},200);
window.addEventListener("resize",b,false)
}};
SfdcWwwBase.powerFooterComponent.init=function(){SfdcWwwBase.powerFooterComponent.alignPageFooter()
};
a(document).ready(function(){SfdcWwwBase.powerFooterComponent.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.productTree=SfdcWwwBase.productTree||{};
(function(a){SfdcWwwBase.productTree.init=function(b){SfdcWwwBase.productTree.toggleProductTree(b);
SfdcWwwBase.productTree.pulseCheck(b);
SfdcWwwBase.productTree.trackClick(b)
};
SfdcWwwBase.productTree.pulseCheck=function(b){if(b){if(b.find(".icon-sfdc-icon-plus").length!==0){SfdcWwwBase.productTree.hideProductTreeItems(b);
SfdcWwwBase.productTree.pulseStart(b)
}else{SfdcWwwBase.productTree.showProductTreeItems(b);
SfdcWwwBase.productTree.pulseStop(b)
}}};
SfdcWwwBase.productTree.pulseStart=function(b){if(b){var c=b.find(".pulse-circle");
c.removeClass("pulse-stop")
}};
SfdcWwwBase.productTree.pulseStop=function(b){if(b){var c=b.find(".pulse-circle");
c.addClass("pulse-stop")
}};
SfdcWwwBase.productTree.toggleProductTree=function(b){if(b.find(".product-tree-subheading.show").length!==0){b.find(".product-tree-header").on("click",function(){var c=a(this).closest(".productTreeComponent");
if(c.find(".icon-sfdc-icon-plus").length!==0){SfdcWwwBase.productTree.showProductTreeItems(c)
}else{SfdcWwwBase.productTree.hideProductTreeItems(c)
}})
}};
SfdcWwwBase.productTree.hideProductTreeItems=function(b){if(b){SfdcWwwBase.productTree.pulseStart(b);
b.find(".product-tree-subheading h4").css("visibility","visible");
b.find(".product-tree-body").slideUp();
b.find(".pulse-icon").removeClass("rotate");
var c=b.find(".icon-sfdc-icon-minus");
c.removeClass("icon-sfdc-icon-minus").addClass("icon-sfdc-icon-plus");
b.find(".pulse-line").removeClass("pulse-line-border")
}};
SfdcWwwBase.productTree.showProductTreeItems=function(b){if(b){SfdcWwwBase.productTree.pulseStop(b);
b.find(".product-tree-subheading h4").css("visibility","hidden");
b.find(".product-tree-body").slideDown();
b.find(".pulse-icon").addClass("rotate");
var c=b.find(".icon-sfdc-icon-plus");
c.removeClass("icon-sfdc-icon-plus").addClass("icon-sfdc-icon-minus");
b.find(".pulse-line").addClass("pulse-line-border")
}};
SfdcWwwBase.productTree.trackClick=function(b){if(b){b.on("click",function(){var d=b.find(".product-tree-subheading .header-text").text();
var c=a.trim(d);
var e=typeof digitalData==="object"&&digitalData.page&&digitalData.page.pagename;
var f=typeof digitalData==="object"&&digitalData.user[0]&&digitalData.user[0].profile[0]&&digitalData.user[0].profile[0].usertype;
if(e&&f&&digitalData.util&&digitalData.util.trackActivity){digitalData.util.trackActivity(e+"|"+c,{properties:{prop14:f}})
}})
}};
a(document).ready(function(){if(a(".productTreeComponent").length>0){a(".productTreeComponent").each(function(){SfdcWwwBase.productTree.init(a(this))
})
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.hotspot=SfdcWwwBase.hotspot||{};
(function(b){var a;
SfdcWwwBase.hotspot.init=function(){if(!SfdcWwwBase.utils.isEditMode()){SfdcWwwBase.hotspot.bindHotspotClick();
SfdcWwwBase.hotspot.resizeLoadListener()
}};
SfdcWwwBase.hotspot.bindHotspotClick=function(){var d=this;
var c=b(".hotspot-dot, .hotspot-icon");
c.on("click",function(){var e=b(this).parents(".hotspot-wrapper").find(".hotspot-callout").not(".open");
var f=b(this).parents(".imageComponent").find(".hotspot-callout.open");
f.map(function(h,g){var j=d.getHotspotFromCallout(g);
SfdcWwwBase.hotspot.closeHotspot(d,j)
});
e.map(function(g,j){var h=d.getHotspotFromCallout(j);
SfdcWwwBase.hotspot.openHotspot(d,h);
b("html").on("click",function(l){var k=(b(l.target).parents(".hotspotComponent").length===0);
if(k){SfdcWwwBase.hotspot.closeHotspot(d,h);
b(this).unbind(l)
}})
})
})
};
SfdcWwwBase.hotspot.openHotspot=function(f,e){var d=b(e).parents(".hotspotComponent").find(".hotspot-callout");
var c=b(e).parents(".hotspotComponent").find(".hotspot-container");
f.setToMinus(e);
e.addClass("opened");
b(d).addClass("open");
c.addClass("open")
};
SfdcWwwBase.hotspot.closeHotspot=function(f,e){var d=b(e).parents(".hotspotComponent").find(".hotspot-callout");
var c=b(e).parents(".hotspotComponent").find(".hotspot-container");
f.setToPlus(e);
e.removeClass("opened");
b(d).removeClass("open");
c.removeClass("open")
};
SfdcWwwBase.hotspot.setToPlus=function(f){var c=b(f).find(".hotspot-dot");
var g=b(f).find(".hotspot-plus");
var e=b(f).find(".hotspot-minus");
var d=e.css("color");
c.css("border-color","#fff");
c.css("background-color",d);
g.css("color","#fff");
e.addClass("hidden");
g.removeClass("hidden")
};
SfdcWwwBase.hotspot.setToMinus=function(f){var c=b(f).find(".hotspot-dot");
var g=b(f).find(".hotspot-plus");
var e=b(f).find(".hotspot-minus");
var d=c.css("background-color");
c.css("border-color",d);
c.css("background-color","#fff");
e.css("color",d);
g.addClass("hidden");
e.removeClass("hidden")
};
SfdcWwwBase.hotspot.resizeLoadListener=function(){b(window).on("load resize",function(){SfdcWwwBase.hotspot.toggleTabletClass()
})
};
SfdcWwwBase.hotspot.toggleTabletClass=function(){var c=b(window).width();
if(c<1024){b(".hotspot").addClass("tablet");
b(".hotspot-callout").addClass("tablet")
}else{b(".hotspot").removeClass("tablet");
b(".hotspot-callout").removeClass("tablet")
}};
SfdcWwwBase.hotspot.getHotspotFromCallout=function(c){return b(c).parents(".hotspot-wrapper").find(".hotspot")
};
b(document).ready(function(){SfdcWwwBase.hotspot.init()
})
})(jQuery);
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.sidebarRelatedPromo=SfdcWwwBase.sidebarRelatedPromo||{};
(function(a){SfdcWwwBase.sidebarRelatedPromo.bindClick=function(){a(".promo-container").on("click",function(c){if(a(c.target).is(".promo-cta.buttonCTAItemComponent *")){return
}var b=a(this).find(".promo-cta > .btn-container > a").attr("href");
if(b){window.location=b
}})
};
SfdcWwwBase.sidebarRelatedPromo.init=function(){SfdcWwwBase.sidebarRelatedPromo.bindClick()
};
a(document).ready(function(){SfdcWwwBase.sidebarRelatedPromo.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.embed=SfdcWwwBase.embed||{};
(function(a){SfdcWwwBase.embed={selectText:function(b){if(window.getSelection){var c=document.createRange();
c.selectNodeContents(b);
window.getSelection().removeAllRanges();
window.getSelection().addRange(c)
}else{if(document.selection){var d=document.body.createTextRange();
d.moveToElementText(b);
d.select()
}}},init:function(){var b=a(".embedComponent");
var c=this;
if(b.length>0){b.on("click",function(){var d=this.getElementsByTagName("code")[0].firstChild;
c.selectText(d)
})
}}};
a(document).ready(function(){SfdcWwwBase.embed.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.navTabs=SfdcWwwBase.navTabs||{};
(function(a){SfdcWwwBase.navTabs.init=function(){var b=150,c;
a("ul.nav-tabs > li").click(function(d){d.preventDefault();
a(this).find("a").tab("show")
}).hover(function(){var d=a(this).find("a");
c=setTimeout(function(){d.tab("show")
},b)
},function(){clearTimeout(c)
});
a(".nav-tab").click(function(){var d=a(this).data("href");
if(d){var e=a(this).data("target");
if(e&&e==="_blank"){window.open(d,"_blank")
}else{window.location.href=d
}}})
};
a(document).ready(function(){SfdcWwwBase.navTabs.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.AccordionV2=SfdcWwwBase.AccordionV2||{};
(function(a){SfdcWwwBase.AccordionV2.setAccordionHover=function(){a(".openOnHover.panel-group .panel").mouseenter(function(){var b=a(this).find('a[data-toggle="collapse"]').attr("href");
a(b).collapse("show")
});
a(".openOnHover.panel-group .panel").mouseleave(function(){var b=a(this).find('a[data-toggle="collapse"]').attr("href");
a(b).collapse("hide")
})
};
SfdcWwwBase.AccordionV2.init=function(){if(a('[id^="accordioncontainerv2"].openOnHover').length){SfdcWwwBase.AccordionV2.setAccordionHover()
}};
a(document).ready(function(){SfdcWwwBase.AccordionV2.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.kruxConsumerChoice=SfdcWwwBase.kruxConsumerChoice||{};
(function(a,b){b(document).ready(function(){var f=b("a[data-qe=krux-btn]");
var o=b("[data-qe=krux-txt]");
var m=b("[data-qe=krx-errtxt]");
var r=b("[data-qe=krx-safari-text]");
var n=navigator.userAgent;
var p=n.indexOf("Safari")>-1&&n.indexOf("Chrome")===-1;
if(f.length>0&&o.length>0){var l="Remove Browser Opt Out";
var d="If you don't like the idea of websites using anonymous information about you...";
var k="Browser Opt Out";
var c="You have successfully opted out. You may opt-in at any time by clicking the link below.";
var e="You are currently opted out. If you don't mind websites using anonymous data to customize your web experience, you may opt-in by clicking the link below.";
var h="Could not set cookie. Are cookies enabled?";
var q="An error occoured while processing your request.";
var j="https://consumer.krxd.net/consumer/";
var g=j+"tmp_cookie";
if(p&&r.length>0&&!localStorage.getItem("krxHasRedirected")){localStorage.setItem("krxHasRedirected",true);
document.location=g
}SfdcWwwBase.kruxConsumerChoice={request:function(w,x){var v=j;
var s={init:"cookie_status",optin:"optin",optout:"optout"};
var u=s[w];
var t=v+u;
b.ajax({url:t,cache:true,jsonpCallback:x,dataType:"jsonp",timeout:10000,error:function(z,A,y){if(A==="timeout"){SfdcWwwBase.kruxConsumerChoice.krxErrorHandler("timeout")
}}})
},krxErrorHandler:function(s){if(s==="failure"){m.text(h)
}else{m.text(q)
}}};
a.kxOptOutStatusHandler=function(s){if(s.code==="optedout"){f.text(l).one("click",function(){SfdcWwwBase.kruxConsumerChoice.request("optin","kxOptinChangeHandler")
});
o.text(e)
}else{f.one("click",function(){SfdcWwwBase.kruxConsumerChoice.request("optout","kxOptoutChangeHandler")
});
o.text(d)
}};
a.kxOptinChangeHandler=function(s){if(s.code==="failure"){SfdcWwwBase.kruxConsumerChoice.krxErrorHandler("failure")
}else{f.text(k).one("click",function(){SfdcWwwBase.kruxConsumerChoice.request("optout","kxOptoutChangeHandler")
});
o.text(d)
}};
a.kxOptoutChangeHandler=function(s){if(s.code==="failure"){SfdcWwwBase.kruxConsumerChoice.krxErrorHandler("failure")
}else{f.text(l).one("click",function(){SfdcWwwBase.kruxConsumerChoice.request("optin","kxOptinChangeHandler")
});
o.text(c)
}};
SfdcWwwBase.kruxConsumerChoice.request("init","kxOptOutStatusHandler")
}})
}(window,jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.targetPostDOMRender=SfdcWwwBase.targetPostDOMRender||{};
(function(a){SfdcWwwBase.targetPostDOMRender.init=function(){document.addEventListener("targetedContentLoaded",function(c){var d=c.detail.targetDivs;
var b=SfdcWwwBase.targetPostDOMRender.findTargetedDivs(d);
a.each(b,function(f,h){var e=a("#"+h);
var g=SfdcWwwBase.targetPostDOMRender.extractFunctions(e);
SfdcWwwBase.targetPostDOMRender.invokeFunctions(g)
})
})
};
SfdcWwwBase.targetPostDOMRender.findTargetedDivs=function(c){var b=[];
a.each(c,function(e,f){if(a("#"+f).length>0){b.push(f)
}else{if(a("#mboxImported-default-"+f+"-0").length>0){var d="mboxImported-default-"+f+"-0";
b.push(d)
}}});
return b
};
SfdcWwwBase.targetPostDOMRender.extractFunctions=function(b){var c=[];
a("div",b).each(function(){if(a(this).attr("data-target-init-function")){c.push(a(this).data("target-init-function"))
}});
return SfdcWwwBase.targetPostDOMRender.removeDuplicates(c)
};
SfdcWwwBase.targetPostDOMRender.removeDuplicates=function(c){var b=[];
a.each(c,function(d,e){if(a.inArray(e,b)===-1){b.push(e)
}});
return b
};
SfdcWwwBase.targetPostDOMRender.invokeFunctions=function(b){a.each(b,function(c,d){SfdcWwwBase.targetPostDOMRender.dotNotationConvert(d,SfdcWwwBase)
})
};
SfdcWwwBase.targetPostDOMRender.dotNotationConvert=function(g,d){var b=[].slice.call(arguments).splice(2);
var f=g.split(".");
var e=f.pop();
for(var c=0;
c<f.length;
c++){d=d[f[c]]
}return d[e].apply(d,b)
};
SfdcWwwBase.targetPostDOMRender.init()
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.pricingComparisonComponent=SfdcWwwBase.pricingComparisonComponent||{};
(function(a){SfdcWwwBase.pricingComparisonComponent.equalizeCells=function(){SfdcWwwBase.utils.equalizeHeights(".pricingComparisonComponent .feature-name-group, .pricingComparisonComponent .feature-amount");
a(".pricingComparisonComponent .panel-group").on("shown.bs.collapse",function(){SfdcWwwBase.utils.equalizeHeights(".pricingComparisonComponent .feature-included, .pricingComparisonComponent .feature-name")
})
};
SfdcWwwBase.pricingComparisonComponent.tracking=function(c){if(typeof(digitalData)!=="undefined"&&digitalData.util&&digitalData.util.trackActivity){var b=Page.getName();
var e=typeof digitalData==="object"&&digitalData.user[0]&&digitalData.user[0].profile[0]&&digitalData.user[0].profile[0].visitnumber;
var d={properties:{eVar8:b?"D=pageName":"",eVar34:e,eVar35:Page.getCloud(),prop49:Page.getSegment()}};
a.extend(d.properties,c);
digitalData.util.trackActivity(b,d)
}};
SfdcWwwBase.pricingComparisonComponent.init=function(){SfdcWwwBase.pricingComparisonComponent.equalizeCells();
a('.pricingComparisonComponent [data-toggle="popover"]').popover();
a(".pricingComparisonComponent [data-toggle=popover]").on("shown.bs.popover",function(){a(".pricingComparisonComponent .popover").css("top",parseInt(a(".popover").css("top"))+25+"%")
});
a(".pricingComparisonComponent a.expand-all").click(function(){a(this).hide();
a(this).parent().parent().find(".panel-collapse").collapse("show");
a(this).closest(".header-bar").children(".collapse-all").show();
SfdcWwwBase.pricingComparisonComponent.tracking({eVar37:"pricing_feature_comparison_table:collapse_all"})
});
a(".pricingComparisonComponent a.collapse-all").click(function(){a(this).hide();
a(this).parent().parent().find(".panel-collapse").collapse("hide");
a(this).closest(".header-bar").children(".expand-all").show()
});
a('.pricingComparisonComponent a[data-toggle="collapse"]').click(function(){if(a(this).attr("aria-expanded")==="false"){var b=a(this).find("h4").text();
b=b.replace(/ /g,"_").replace(/\./g,"").toLowerCase();
SfdcWwwBase.pricingComparisonComponent.tracking({eVar37:"pricing_feature_comparison_table:"+b})
}})
};
SfdcWwwBase.pricingComparisonComponent.stickyRelocate=function(){var b=a(window).scrollTop();
var e=a("#sticky-anchor").offset().top;
var d=a(".stop-anchor").offset().top;
var c=a(".pricing-comparison-feature-category").width();
if(b>e&&b<d){a("#feature-comparison-header").addClass("sticky");
a("#sticky-anchor").height(a("#feature-comparison-header").outerHeight());
a("#feature-comparison-header").css("width",c)
}else{a("#feature-comparison-header").removeClass("sticky");
a("#sticky-anchor").height(0)
}};
a(document).ready(function(){if(a(".pricingComparisonComponent").length>0){SfdcWwwBase.pricingComparisonComponent.init();
a(window).scroll(SfdcWwwBase.pricingComparisonComponent.stickyRelocate);
a(window).resize(function(){SfdcWwwBase.pricingComparisonComponent.equalizeCells()
})
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.livechat=SfdcWwwBase.livechat||{};
(function(e){var c="1";
var f="0";
var d="AgentStatus";
var b;
SfdcWwwBase.livechat.trackSnapInWindowOpensFromChatAnchorOrFall=function(){e("body").on("click","a.uiButton",function(g){b=g.isTrigger?"chat-fall":"chat-anchor";
digitalData.util.addPageData("customlink",b);
digitalData.util.addPageData("moduletracking",Page.getName()+"|"+b);
digitalData.util.trackBehavior(b,["chatformshown"],["page.pagename","page.customlink","page.moduletracking","user[0].profile[0].usertype"])
})
};
SfdcWwwBase.livechat.trackSnapInWindowStartedFromChatAnchor=function(){var g=false;
setInterval(function(){if(e(".embeddedServiceLiveAgentStateChat .chasitorInputWrapper").length&&!g){digitalData.util.addPageData("customlink",b);
digitalData.util.addPageData("moduletracking",Page.getName()+"|"+b);
digitalData.util.trackBehavior(b,["chatview"],["page.pagename","page.customlink","page.moduletracking","user[0].profile[0].usertype"]);
g=true
}else{if(!e(".embeddedServiceLiveAgentStateChat .chasitorInputWrapper").length){g=false
}}},1000)
};
function a(j){var h=j+"=";
var m=decodeURIComponent(document.cookie);
var g=m.split(";");
for(var l=0;
l<g.length;
l++){var k=g[l];
while(k.charAt(0)===" "){k=k.substring(1)
}if(k.indexOf(h)===0){return k.substring(h.length,k.length)
}}return""
}e(window).load(function(){var j=SfdcWwwBase.config.liveAgentButtonId;
e("#liveagent_button_offline_"+j+"1").show();
e("#liveagent_button_online_"+j+"1").hide();
if(window.embedded_svc){var k=Object.getPrototypeOf(window.embedded_svc).deleteSessionData;
var h=function(o){if(this.storageKeys[1]===o){e(".embeddedServiceHelpButton .uiButton.helpButtonEnabled .embeddedServiceIcon").attr("style","display:none")
}};
Object.getPrototypeOf(window.embedded_svc).deleteSessionData=function(){k.apply(this,arguments);
h.apply(this,arguments)
};
var m=Object.getPrototypeOf(window.embedded_svc).createLightningComponent;
var g=function(){var o=e(".embeddedServiceSidebarMinimizedContainer");
if(o.length&&!o.find(".agent-image").length){o.append(e(".agent-image").clone())
}};
Object.getPrototypeOf(window.embedded_svc).createLightningComponent=function(){m.apply(this,arguments);
g.apply(this,arguments)
};
var n=Object.getPrototypeOf(window.embedded_svc.liveAgentAPI).handleAvailability;
var l=function(o){if(!o.results[0].isAvailable){e(".embeddedServiceHelpButton").hide();
e("#liveagent_button_offline_"+j).show();
e("#liveagent_button_v2_"+j).hide();
e("#liveagent_button_offline_"+j+"1").show();
e("#liveagent_button_online_"+j+"1").hide();
sessionStorage.setItem(d,f)
}else{if(e(".embeddedServiceHelpButton").css("display")==="none"&&!e(".embeddedServiceSidebarMinimizedContainer").length){e(".embeddedServiceHelpButton").show();
e("#liveagent_button_offline_"+j).hide();
e("#liveagent_button_v2_"+j).show();
e("#liveagent_button_online_"+j+"1").show();
e("#liveagent_button_offline_"+j+"1").hide();
sessionStorage.setItem(d,c)
}}};
Object.getPrototypeOf(window.embedded_svc.liveAgentAPI).handleAvailability=function(){l.apply(this,arguments);
n.apply(this,arguments)
}
}SfdcWwwBase.livechat.hideLiveChatInSmallScreen=function(){e(".embeddedServiceHelpButton").addClass("hidden-xs hidden-sm hidden-md").show();
e(".embeddedServiceSidebarMinimizedContainer").addClass("hidden-xs hidden-sm hidden-md");
e(".modalContainer.sidebarMaximized.layout-docked.embeddedServiceSidebar").addClass("hidden-xs hidden-sm hidden-md")
};
setInterval(function(){if(a("liveagent_vc")!==""){if(e(".helpButton").length&&e(".helpButton .message").text()!=="Agent Offline"){SfdcWwwBase.livechat.hideLiveChatInSmallScreen();
e("#liveagent_button_offline_"+j).hide();
e("#liveagent_button_v2_"+j).show();
e("#liveagent_button_online_"+j+"1").show();
e("#liveagent_button_offline_"+j+"1").hide()
}}},1000)
});
SfdcWwwBase.livechat.addAgentImage=function(){e(".randomImage").each(function(){var l=e(this).data();
if(l.embeddedimage&&l.embeddedto){var h=l.embeddedto.split(",");
var k=0,g;
for(k=0,g=h.length;
k<g;
k++){var j=e(h[k]);
if(j.length&&!j.find(".agent-image").length){j.append('<img class="agent-image '+l.customclass+'" src="'+l.srcimage+'"/>')
}}}})
};
SfdcWwwBase.livechat.isAgentOnline=function(){return(sessionStorage.getItem(d)===c)
};
SfdcWwwBase.livechat.showWhenAgentIsOnline=function(){if(SfdcWwwBase.livechat.isAgentOnline()){var g=SfdcWwwBase.config.liveAgentButtonId;
e(".embeddedServiceHelpButton").show();
e("#liveagent_button_offline_"+g).hide();
e("#liveagent_button_v2_"+g).show();
e("#liveagent_button_online_"+g+"1").show();
e("#liveagent_button_offline_"+g+"1").hide();
SfdcWwwBase.livechat.addAgentImage()
}};
e(document).ready(function(){SfdcWwwBase.livechat.showWhenAgentIsOnline();
SfdcWwwBase.livechat.trackSnapInWindowOpensFromChatAnchorOrFall();
SfdcWwwBase.livechat.trackSnapInWindowStartedFromChatAnchor()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.columnContainer=SfdcWwwBase.columnContainer||{};
(function(a){SfdcWwwBase.columnContainer.targetInit=function(){a(window).trigger("resize")
}
}(jQuery));
SfdcWwwBase.columnContainer.layoutAuthorUtil=(function(f){var q="utf-8",s="POST",l="./columns",m="You have reduced the number of columns. Any content in the removed columns will be permanently deleted. Do you wish to continue?",k=2,j="deletePage",e=":",o="column{0}_par",n="/bin/wcmcommand";
var r,c=k,d=k;
var h=function(u){var t={path:u,_charset_:q,cmd:j,force:false};
f.ajax({url:n,method:s,data:t})
};
var a=function(){var t=r.getField(l).getValue();
if(t){var u=t.split(e);
if(u.length){return u.length
}}return k
};
var g=function(){var t=r.path;
for(var u=c;
u>d;
u--){h(t+"/"+o.replace("{0}",u))
}};
var p=function(t){r=t;
c=a()
};
var b=function(){d=a();
if(d<c){if(window.confirm(m)){g();
return true
}else{return false
}}return true
};
return{init:p,checkColumns:b}
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.jumbotronComponent=SfdcWwwBase.jumbotronComponent||{};
(function(a){SfdcWwwBase.jumbotronComponent.targetInit=function(){a(window).trigger("resize")
}
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.roiCalculator=SfdcWwwBase.roiCalculator||{};
(function(a){SfdcWwwBase.roiCalculator.init=function(b){a(b).each(function(){var d=this;
var c=a(d).find("a.step_nav");
c.each(function(){a(this).click(function(f){f.preventDefault();
SfdcWwwBase.roiCalculator.goToStep(d,a(this).data("step"))
})
});
SfdcWwwBase.roiCalculator.goToStepFromUrl(d)
});
SfdcWwwBase.roiCalculator.trackeVar()
};
SfdcWwwBase.roiCalculator.goToStepFromUrl=function(b){SfdcWwwBase.roiCalculator.goToStep(b,SfdcWwwBase.utils.getHashParameterByName("currentStep"))
};
SfdcWwwBase.roiCalculator.setStepInUrl=function(b){SfdcWwwBase.utils.updateHashParameter("currentStep",b)
};
SfdcWwwBase.roiCalculator.goToStep=function(d,h){if(typeof h===undefined||h.length<1){return
}var e=a(d).find("#"+h);
SfdcWwwBase.roiCalculator.tracking(e);
var j=a(d).find(".panel-collapse[data-step="+h+"]");
var c=a(d).find("nav .step_nav[data-step="+h+"]").parent("li").not(".restart");
if(e.length>0){a(d).find(".roiStepComponent > div").hide();
e.removeClass("hidden").show()
}if(j.length>0){var g=a(d).find(".panel-collapse.in").not(j);
g.parent().removeClass("active");
g.collapse("hide");
g.siblings(".panel-heading").addClass("collapsed");
j.collapse("show");
j.siblings(".panel-heading").removeClass("collapsed");
j.parent().addClass("active")
}if(c.length>0){var b=a(d).find("nav .pagination li");
b.removeClass("active checked");
c.addClass("active");
c.prevAll().not(".restart").addClass("checked")
}if(SfdcWwwBase.utils.getQueryParameterByName("currentStep")!==h){SfdcWwwBase.roiCalculator.setStepInUrl(h)
}var f=a(d).find(".roiStepComponent > div").last();
if(f[0].id===h){a(".list-heading .steps").hide();
a(".list-heading .summary").show().removeClass("hidden");
SfdcWwwBase.roiSummary.calculate();
SfdcWwwBase.roiSummary.roiSetCookie()
}else{a(".list-heading .steps").show();
a(".list-heading .summary").hide()
}};
SfdcWwwBase.roiCalculator.tracking=function(b){if(typeof(digitalData)!=="undefined"&&digitalData.util&&digitalData.util.trackActivity){var c=b.find("h1.cover-heading").html().toLowerCase().replace(/\s+/g,"_");
digitalData.util.trackPartialPageLoad(Page.getName()+":"+c)
}};
SfdcWwwBase.roiCalculator.trackeVar=function(){a('a.btn[data-qe="generate_roi_cta"]').on("click",function(){var b="";
a("div.roiStepComponent").each(function(c,d){var e=a(this).find("h1.cover-heading").html().toLowerCase().replace(/\s+/g,"_");
b+=e+"|";
a(d).find("div.roiSliderComponent").each(function(){b+=a(this).find("input.roi-quantity").val()+"|"
})
});
b+="ROI|"+a(".roi-summary").data("roi-total")+"|"+a(".roi-summary").data("value-total")+"|"+a(".roi-summary").data("time-total");
digitalData.util.trackActivity("roi-calculator",{properties:{eVar32:Page.getName()+"|roic|"+b}})
})
};
a(document).ready(function(){if(a(".roiCalculatorComponent").length>0){SfdcWwwBase.roiCalculator.init(".roiCalculatorComponent")
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.roiSlider=SfdcWwwBase.roiSlider||{};
(function(a){SfdcWwwBase.roiSlider.init=function(){a('input[type="range"].roi-slider').on("input",function(){var b=a(this).closest(".roi-wrap");
b.find("input.roi-quantity").val(this.value);
SfdcWwwBase.utils.updateHashParameter(b.data("var-name"),this.value)
});
a(".roi-wrap .roi-quantity").on("input",function(){var b=a(this).closest(".roi-wrap");
b.find("input.roi-slider").val(this.value).change();
SfdcWwwBase.utils.updateHashParameter(b.data("var-name"),this.value)
});
a(".roi-step").click(function(){var g=a(this).closest(".roi-wrap");
var f=g.find("input.roi-quantity");
var e=a(this).data("step");
var b=f.prop("min");
var h=f.prop("max");
var c=f.val();
var d=parseFloat(c);
if(a(this).data("action")==="decr"){d-=parseFloat(e)
}else{if(a(this).data("action")==="incr"){d+=parseFloat(e)
}}if(d<b){d=b
}else{if(d>h){d=h
}}g.find("input.roi-slider").val(d).change();
f.val(d);
SfdcWwwBase.utils.updateHashParameter(g.data("var-name"),d)
});
a(".roi-step").each(function(){var d=a(this).closest(".roi-wrap");
var c=d.find("input.roi-quantity");
var b=SfdcWwwBase.utils.getHashParameterByName(d.data("var-name"));
if(typeof b!==undefined&&b!==""){d.find("input.roi-slider").val(b).change();
c.val(b)
}})
};
a(document).ready(function(){if(a(".slider-wrap .roi-slider").length){SfdcWwwBase.roiSlider.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.roiSummary=SfdcWwwBase.roiSummary||{};
(function(a){SfdcWwwBase.roiSummary.calculate=function(){var k=a(".roi-summary");
var f=k.data("roi-formula")||"";
var g=k.data("time-formula")||"";
var e=k.data("value-formula")||"";
var q=[];
a(".roi-wrap").each(function(){q.push(a(this).data("var-name"))
});
q.sort(function(s,r){return r.length-s.length
});
for(var l=0;
l<q.length;
l++){var j=q[l];
var m=a('.roi-wrap[data-var-name="'+j+'"]');
var n=m.find(".roi-quantity").val();
var p=new RegExp(j,"g");
f=f.replace(p,n);
g=g.replace(p,n);
e=e.replace(p,n)
}var d=new SfdcWwwBase.roiSummary.MathSolver();
var h=Math.round(d.solvePostfix(d.infixToPostfix(f)));
var c=Math.round(d.solvePostfix(d.infixToPostfix(g)));
var o=Math.round(d.solvePostfix(d.infixToPostfix(e)));
k.data("roi-total",h);
k.data("time-total",c);
k.data("value-total",o);
var b=SfdcWwwBase.roiSummary.formatRoiTotal(k,h);
k.html(b)
};
SfdcWwwBase.roiSummary.formatRoiTotal=function(f,d){var c=f.data("currency-code");
var b=f.data("locale");
var e=parseFloat(d).toLocaleString(b,{style:"currency",currency:c,minimumFractionDigits:0});
return e
};
SfdcWwwBase.roiSummary.isNumeric=function(b){return !isNaN(parseFloat(b))&&isFinite(b)
};
SfdcWwwBase.roiSummary.clean=function(c){for(var b=0;
b<c.length;
b++){if(c[b]===""){c.splice(b,1)
}}return c
};
SfdcWwwBase.roiSummary.MathSolver=function(){this.infixToPostfix=function(c){var f="";
var j=[];
var b={"^":{precedence:4,associativity:"Right"},"/":{precedence:3,associativity:"Left"},"*":{precedence:3,associativity:"Left"},"+":{precedence:2,associativity:"Left"},"-":{precedence:2,associativity:"Left"}};
c=c.replace(/\s+/g,"");
c=SfdcWwwBase.roiSummary.clean(c.split(/([\+\-\*\/\^\(\)])/));
for(var e=0;
e<c.length;
e++){var d=c[e];
if(SfdcWwwBase.roiSummary.isNumeric(d)){f+=d+" "
}else{if("^*/+-".indexOf(d)!==-1){var h=d;
var g=j[j.length-1];
while("^*/+-".indexOf(g)!==-1&&this.determine(b,h,g)){f+=j.pop()+" ";
g=j[j.length-1]
}j.push(h)
}else{if(d==="("){j.push(d)
}else{if(d===")"){while(j[j.length-1]!=="("){f+=j.pop()+" "
}j.pop()
}}}}}while(j.length>0){f+=j.pop()+" "
}return f.trim()
};
this.determine=function(b,d,c){return(b[d].associativity==="Left"&&b[d].precedence<=b[c].precedence)||(b[d].associativity==="Right"&&b[d].precedence<b[c].precedence)
};
this.solvePostfix=function(g){var f=[];
g=g.split(" ");
for(var e=0;
e<g.length;
e++){if(SfdcWwwBase.roiSummary.isNumeric(g[e])){f.push(g[e])
}else{var d=f.pop();
var c=f.pop();
if(g[e]==="+"){f.push(parseFloat(d)+parseFloat(c))
}else{if(g[e]==="-"){f.push(parseFloat(c)-parseFloat(d))
}else{if(g[e]==="*"){f.push(parseFloat(d)*parseFloat(c))
}else{if(g[e]==="/"){f.push(parseFloat(c)/parseFloat(d))
}else{if(g[e]==="^"){f.push(Math.pow(parseFloat(c),parseFloat(d)))
}}}}}}}if(f.length>1){return"error"
}else{return f.pop()
}}
};
SfdcWwwBase.roiSummary.roiSetCookie=function(){var c=a(".roi-summary").html();
var d=a(".roi-summary").data("time-total");
var g=a(".roi-summary").data("value-total");
var b=a(".roi-pdf-download").data("roi-pdf-template-path");
var f={roiTotal:c,roiTimeTotal:d,roiValueTotal:g,roiPdfTemplatePath:b};
var e=window.location.hostname;
Util.setJSONCookie(f,"roi",60*60,e)
}
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.eventforceListing=SfdcWwwBase.eventforceListing||{};
(function(a){SfdcWwwBase.eventforceListing.filter=function(e){var b=a(".eventforceListingComponent");
var d=b.find(".event");
var c=b.find('.event[data-region="'+e+'"]');
if(e==="ALL"){d.show()
}else{d.hide();
c.show()
}};
a(document).ready(function(){a(".eventforceListingComponent .nav-filter").click(function(b){b.preventDefault();
a(".eventforceListingComponent .nav-filter").removeClass("selected");
a(this).addClass("selected");
SfdcWwwBase.eventforceListing.filter(a(this).data("filter-region"))
})
})
}(jQuery));
(function(a){a(window).load(function(){var b=setInterval(function(){var e=0,d=0,c;
a(".randomImage").each(function(){var h=a(this).data();
if(h.embeddedimage&&h.embeddedto){var f=h.embeddedto.split(",");
for(d=0,c=f.length;
d<c;
d++){var g=a(f[d]);
if(g.length&&!g.find(".agent-image").length){g.append('<img class="agent-image '+h.customclass+'" src="'+h.srcimage+'"/>')
}else{if(g.length&&g.find(".agent-image").length){e++
}}}}});
if(e===d){clearInterval(b);
b=null
}},1000)
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.customListComponent=SfdcWwwBase.customListComponent||{};
(function(a){SfdcWwwBase.customListComponent={resultSet:[],totalResultSet:[],sortKey:"pageTitle",displayResultsAs:"list_view",tagJoinLogic:"or",featuredItems:[],pageSize:9,resultsDiv:a(".dynamic-content-list"),pageButtonsDiv:a("#pageButtons"),currentNumberOfResults:0,currentPage:isNaN(parseInt(SfdcWwwBase.utils.getHashParameterByName("page")))?1:parseInt(SfdcWwwBase.utils.getHashParameterByName("page")),appliedTags:[],enableRefinement:true,contentType:"customer-stories"};
SfdcWwwBase.customListComponent.initialSortKeyValue=function(){var c=SfdcWwwBase.utils.getHashParameterByName("sort");
var b;
if(c===""||c===null||c===undefined){a("ul.category-single li.single").each(function(){if(a(this).hasClass("selected")){b=a(this).attr("value");
SfdcWwwBase.customListComponent.sortKey=SfdcWwwBase.customListComponent.applySortKeyForJson(b)
}})
}};
SfdcWwwBase.customListComponent.bindFilterClick=function(){a("ul.category-single li.single a").each(function(){a(this).on("click",function(c){c.preventDefault();
a(this).parent("li").addClass("selected");
a(this).parent("li").siblings().removeClass("selected");
a(".filteredCardsAjax-spinner .slds-spinner_container").removeClass("hide");
SfdcWwwBase.customListComponent.sortKey=SfdcWwwBase.customListComponent.applySortKeyForJson(a(this).parent("li").attr("value"));
SfdcWwwBase.customListComponent.updateUrlHash();
SfdcWwwBase.customListComponent.sortResults();
SfdcWwwBase.customListComponent.applyFeaturedItemsToResultSet();
SfdcWwwBase.customListComponent.applyTags();
SfdcWwwBase.customListComponent.displayResults();
SfdcWwwBase.customListComponent.isRefinementEnabled();
var b=a(this).find(".filterItemText").html().replace(/ /g,"").toLowerCase();
SfdcWwwBase.customListComponent.filterAnalytics(Page.getName(),b)
})
});
a("ul.category-multiple li.multiple a.tag-title").each(function(){a(this).on("click",function(c){c.preventDefault();
a(this).parent("li").toggleClass("selected");
a(this).toggleClass("is-checked");
a(".filteredCardsAjax-spinner .slds-spinner_container").removeClass("hide");
var b=a(this).data("tag-id");
SfdcWwwBase.customListComponent.applyFilterPill(b);
var d=a(".is-checked").map(function(){return a(this).attr("data-tag-id")
}).get();
SfdcWwwBase.customListComponent.appliedTags=d.slice(0);
SfdcWwwBase.customListComponent.updateUrlHash();
SfdcWwwBase.customListComponent.applyTags();
SfdcWwwBase.customListComponent.updateFilterCounter();
SfdcWwwBase.customListComponent.displayResults();
SfdcWwwBase.customListComponent.isRefinementEnabled();
if(a(this).hasClass("is-checked")){SfdcWwwBase.customListComponent.filterAnalytics("",b)
}})
})
};
SfdcWwwBase.customListComponent.updateUrlHash=function(){var b=a("ul.category-single li.single.selected").attr("value");
if(b===null||b===undefined){b=""
}var c="";
if(SfdcWwwBase.customListComponent.appliedTags.length!==0){c=SfdcWwwBase.customListComponent.appliedTags.join("|")
}SfdcWwwBase.utils.updateSeoFriendlyHashParameter("sort",b);
SfdcWwwBase.utils.updateSeoFriendlyHashParameter("tags",c)
};
SfdcWwwBase.customListComponent.applySortKeyForJson=function(b){if(b==="alphaSort"){return"pageTitle"
}else{if(b==="newestSort"){return"dateForSorting"
}else{if(b==="oldestSort"){return"dateForSortingOld"
}else{if(b==="popularSort"){return"popularity"
}}}}};
SfdcWwwBase.customListComponent.applyFilterPill=function(e){var c=".customListComponent .filters-selected-body";
var f=".customListComponent .category-multiple li.filter a[data-tag-id="+e+"]";
if(a(f).parent("li").hasClass("selected")){var d=a(f+" label").text();
var g=a(c).html();
var b='<a class="filter-pill" id="'+e+'">'+d+'<span class="disable">X</span></a>';
a(c).html(g+b)
}SfdcWwwBase.customListComponent.bindPillClick();
if(!a(f).parent("li").hasClass("selected")){a(".customListComponent .filter-pill#"+e).remove()
}SfdcWwwBase.customListComponent.addOrRemoveFilterSearchContainer()
};
SfdcWwwBase.customListComponent.addOrRemoveFilterSearchContainer=function(){var b=".customListComponent .filter-pill";
var c=".customListComponent .filters-search-container";
if(a(b).length!==0){a(c).removeClass("hidden")
}else{if(a(b).length===0){a(c).addClass("hidden")
}}};
SfdcWwwBase.customListComponent.bindPillClick=function(){a(".filter-pill .disable").each(function(){a(this).on("click",function(){SfdcWwwBase.customListComponent.setLoadingSpinnerOverlay();
var b=a(this).parent(".filter-pill").attr("id");
SfdcWwwBase.customListComponent.toggleFilterCheckboxAndRemovePill(b);
SfdcWwwBase.customListComponent.addOrRemoveFilterSearchContainer();
SfdcWwwBase.customListComponent.removeTagWithTagId(b);
SfdcWwwBase.customListComponent.updateUrlHash();
SfdcWwwBase.customListComponent.applyTags();
SfdcWwwBase.customListComponent.updateFilterCounter();
SfdcWwwBase.customListComponent.displayResults();
SfdcWwwBase.customListComponent.isRefinementEnabled()
})
})
};
SfdcWwwBase.customListComponent.setLoadingSpinnerOverlay=function(){a(".filteredCardsAjax-spinner .slds-spinner_container").removeClass("hide")
};
SfdcWwwBase.customListComponent.removeTagWithTagId=function(c){var b=SfdcWwwBase.customListComponent.appliedTags.indexOf(c);
SfdcWwwBase.customListComponent.appliedTags.splice(b,1)
};
SfdcWwwBase.customListComponent.toggleFilterCheckboxAndRemovePill=function(b){var c=".customListComponent ul.category-multiple li a[data-tag-id='"+b+"']";
a(c).parent("li").toggleClass("selected");
a(c).toggleClass("is-checked");
a(".customListComponent .filter-pill#"+b).remove()
};
SfdcWwwBase.customListComponent.bindClearAllClick=function(){a(".customListComponent .filters-clear-all").parent("a").each(function(){a(this).on("click",function(b){b.preventDefault();
SfdcWwwBase.customListComponent.setLoadingSpinnerOverlay();
a(".customListComponent .filters-selected-body .filter-pill").each(function(){var c=a(this).attr("id");
SfdcWwwBase.customListComponent.toggleFilterCheckboxAndRemovePill(c);
SfdcWwwBase.customListComponent.removeTagWithTagId(c)
});
SfdcWwwBase.customListComponent.addOrRemoveFilterSearchContainer();
SfdcWwwBase.customListComponent.updateUrlHash();
SfdcWwwBase.customListComponent.applyTags();
SfdcWwwBase.customListComponent.updateFilterCounter();
SfdcWwwBase.customListComponent.displayResults();
SfdcWwwBase.customListComponent.isRefinementEnabled()
})
})
};
SfdcWwwBase.customListComponent.getResultObject=function(){a.getJSON(SfdcWwwBase.customListComponent.resultsDiv.data("results-json"),function(b){SfdcWwwBase.customListComponent.totalResultSet=b.listResults;
SfdcWwwBase.customListComponent.resultSet=b.listResults;
SfdcWwwBase.customListComponent.sortKey=b.listConfig.orderBy||"pageTitle";
SfdcWwwBase.customListComponent.pageSize=b.listConfig.paginateAfter||9;
SfdcWwwBase.customListComponent.displayResultsAs=b.listConfig.displayResultsAs||"list_view";
SfdcWwwBase.customListComponent.featuredItems=b.listConfig.featuredItems;
SfdcWwwBase.customListComponent.tagJoinLogic=b.listConfig.tagJoinLogic;
SfdcWwwBase.customListComponent.enableRefinement=b.listConfig.enableRefinement;
SfdcWwwBase.customListComponent.contentType=b.listConfig.contentType
}).done(function(){SfdcWwwBase.customListComponent.totalPages=Math.ceil(SfdcWwwBase.customListComponent.resultSet.length/SfdcWwwBase.customListComponent.pageSize);
SfdcWwwBase.customListComponent.setLoadingSpinnerOverlay();
SfdcWwwBase.customListComponent.getQueryParameters();
SfdcWwwBase.customListComponent.applyFilterSelectsAndPills();
SfdcWwwBase.customListComponent.initialSortKeyValue();
SfdcWwwBase.customListComponent.sortResults();
SfdcWwwBase.customListComponent.applyFeaturedItemsToResultSet();
SfdcWwwBase.customListComponent.applyTags();
SfdcWwwBase.customListComponent.updateFilterCounter(true);
SfdcWwwBase.customListComponent.displayResults();
SfdcWwwBase.customListComponent.isRefinementEnabled();
SfdcWwwBase.customListComponent.bindLoadMoreClick();
SfdcWwwBase.customListComponent.bindPrevNextButtons()
})
};
SfdcWwwBase.customListComponent.sortResults=function(){if(SfdcWwwBase.customListComponent.sortKey==="pageTitle"){SfdcWwwBase.customListComponent.totalResultSet.sort(function(d,c){if(d[SfdcWwwBase.customListComponent.sortKey]===null&&c[SfdcWwwBase.customListComponent.sortKey]===null){return 0
}if(d[SfdcWwwBase.customListComponent.sortKey]===null){return 1
}if(c[SfdcWwwBase.customListComponent.sortKey]===null){return -1
}if(d[SfdcWwwBase.customListComponent.sortKey]<c[SfdcWwwBase.customListComponent.sortKey]){return -1
}if(d[SfdcWwwBase.customListComponent.sortKey]>c[SfdcWwwBase.customListComponent.sortKey]){return 1
}return 0
})
}if(SfdcWwwBase.customListComponent.sortKey==="popularity"){SfdcWwwBase.customListComponent.totalResultSet.sort(function(d,c){if(Number(d.popularity)>Number(c.popularity)){return 1
}if(Number(d.popularity)<Number(c.popularity)){return -1
}if(d.pageTitle===null&&c.pageTitle===null){return 0
}if(d.pageTitle===null){return 1
}if(c.pageTitle===null){return -1
}if(d.pageTitle>c.pageTitle){return 1
}if(d.pageTitle<c.pageTitle){return -1
}else{return 0
}})
}if(SfdcWwwBase.customListComponent.sortKey==="dateForSorting"){SfdcWwwBase.customListComponent.totalResultSet.sort(function(d,c){if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])===null&&Date.parse(c[SfdcWwwBase.customListComponent.sortKey])===null){return 0
}if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])===null){return -1
}if(Date.parse(c[SfdcWwwBase.customListComponent.sortKey])===null){return 1
}if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])<Date.parse(c[SfdcWwwBase.customListComponent.sortKey])){return 1
}if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])>Date.parse(c[SfdcWwwBase.customListComponent.sortKey])){return -1
}return 0
})
}if(SfdcWwwBase.customListComponent.sortKey==="dateForSortingOld"){SfdcWwwBase.customListComponent.sortKey="dateForSorting";
SfdcWwwBase.customListComponent.totalResultSet.sort(function(d,c){if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])===null&&Date.parse(c[SfdcWwwBase.customListComponent.sortKey])===null){return 0
}if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])===null){return -1
}if(Date.parse(c[SfdcWwwBase.customListComponent.sortKey])===null){return 1
}if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])>Date.parse(c[SfdcWwwBase.customListComponent.sortKey])){return 1
}if(Date.parse(d[SfdcWwwBase.customListComponent.sortKey])<Date.parse(c[SfdcWwwBase.customListComponent.sortKey])){return -1
}return 0
})
}};
SfdcWwwBase.customListComponent.applyFeaturedItemsToResultSet=function(){var e=SfdcWwwBase.customListComponent.featuredItems;
if(e.length===0){return
}var d=SfdcWwwBase.customListComponent.totalResultSet;
var c=[];
c=c.concat(e);
var b=d.reduce(function(f,h){var k=false;
for(var g=0;
g<e.length;
g++){if(h.pagePath===e[g].pagePath){k=true;
break
}}if(!k){f.push(h)
}return f
},c);
SfdcWwwBase.customListComponent.totalResultSet=b
};
SfdcWwwBase.customListComponent.displayResults=function(){SfdcWwwBase.customListComponent.displayPage(SfdcWwwBase.customListComponent.currentPage)
};
SfdcWwwBase.customListComponent.displayResultRange=function(d,b,f){SfdcWwwBase.customListComponent.stripShowMore();
if(SfdcWwwBase.customListComponent.resultSet.length===0){a(".filteredCardsAjax-spinner .slds-spinner_container").addClass("hide");
a(".dynamic-content-empty").removeClass("hide");
a(".customListComponent .load-more-container").hide();
return
}else{if(!a(".dynamic-content-empty").hasClass("hide")){a(".dynamic-content-empty").addClass("hide")
}}if(SfdcWwwBase.customListComponent.resultSet.length<=d){return
}if(SfdcWwwBase.customListComponent.resultSet.length<=(d+1)){a(".customListComponent .load-more-container").hide()
}else{a(".customListComponent .load-more-container").show()
}var e=SfdcWwwBase.customListComponent.resultSet[d].pagePath;
var c=e;
if(SfdcWwwBase.customListComponent.displayResultsAs==="list_view"){c+=".views.page_summary.html"
}else{if(SfdcWwwBase.customListComponent.displayResultsAs==="grid_view"){c+=".views.page_card.html"
}}if(!SfdcWwwBase.config.isPublish&&!SfdcWwwBase.utils.isEditMode()){c+="?wcmmode=disabled"
}a.ajax(c,{complete:f}).done(function(h){var g=SfdcWwwBase.customListComponent.resultsDiv.find(".filters-grid-container");
if(SfdcWwwBase.customListComponent.displayResultsAs==="grid_view"){var j=SfdcWwwBase.customListComponent.singleCardWrapperHtml().attr("itemindex",d).append(h);
j.find(".input-group .form-control").attr("placeholder",e).attr("value",e);
j.find(".input-group .input-group-btn a").prop("href","/cf#"+e+".card-authoring.html");
g.append(j)
}else{g.append(h)
}SfdcWwwBase.customListComponent.currentNumberOfResults++
}).fail(function(g,j,h){console.log(h)
}).always(function(){if(d<b){SfdcWwwBase.customListComponent.displayResultRange(d+1,b)
}else{var g=SfdcWwwBase.customListComponent.showMoreHtml();
SfdcWwwBase.customListComponent.resultsDiv.find(".filters-grid-container").append(g);
SfdcWwwBase.customListComponent.bindLoadMoreClick()
}if(SfdcWwwBase.customListComponent.currentNumberOfResults===SfdcWwwBase.customListComponent.pageSize){a(".filteredCardsAjax-spinner .slds-spinner_container").addClass("hide")
}else{if(SfdcWwwBase.customListComponent.currentNumberOfResults===SfdcWwwBase.customListComponent.resultSet.length){a(".filteredCardsAjax-spinner .slds-spinner_container").addClass("hide")
}}})
};
SfdcWwwBase.customListComponent.loadMoreResults=function(c){var b=SfdcWwwBase.customListComponent.currentNumberOfResults+SfdcWwwBase.customListComponent.pageSize;
if(b>SfdcWwwBase.customListComponent.resultSet.length){b=SfdcWwwBase.customListComponent.resultSet.length;
a(".customListComponent .load-more-container").hide()
}SfdcWwwBase.customListComponent.displayResultRange(SfdcWwwBase.customListComponent.currentNumberOfResults,b-1,c)
};
SfdcWwwBase.customListComponent.displayPage=function(b){var d=(b-1)*SfdcWwwBase.customListComponent.pageSize;
var c=(b*SfdcWwwBase.customListComponent.pageSize)-1;
SfdcWwwBase.customListComponent.resultsDiv.find(".filters-grid-container").empty();
SfdcWwwBase.customListComponent.currentNumberOfResults=0;
SfdcWwwBase.customListComponent.displayResultRange(d,c);
SfdcWwwBase.customListComponent.currentPage=b;
SfdcWwwBase.customListComponent.updatePaginationButtons();
SfdcWwwBase.customListComponent.updatePaginationActiveButton();
SfdcWwwBase.utils.updateSeoFriendlyHashParameter("page",SfdcWwwBase.customListComponent.currentPage)
};
SfdcWwwBase.customListComponent.bindLoadMoreClick=function(){a("#loadMoreButton").click(function(c){c.preventDefault();
var b=a(this);
b.addClass("disabled");
SfdcWwwBase.customListComponent.filterAnalytics(Page.getName(),"showmore");
SfdcWwwBase.customListComponent.loadMoreResults(function(){b.removeClass("disabled")
})
})
};
SfdcWwwBase.customListComponent.bindPaginationClicks=function(){SfdcWwwBase.customListComponent.pageButtonsDiv.find("a").click(function(b){b.preventDefault();
SfdcWwwBase.customListComponent.displayPage(a(this).data("page"))
})
};
SfdcWwwBase.customListComponent.bindPrevNextButtons=function(){a(".customListComponent .pagination a").click(function(d){d.preventDefault();
var c=a(this).data("page");
var b=c;
if(c==="previous"){b=SfdcWwwBase.customListComponent.currentPage*1-1
}else{if(c==="next"){b=SfdcWwwBase.customListComponent.currentPage+1
}else{if(c==="first"){b=1
}else{if(c==="last"){b=SfdcWwwBase.customListComponent.totalPages
}}}}SfdcWwwBase.customListComponent.displayPage(b)
})
};
SfdcWwwBase.customListComponent.updatePaginationActiveButton=function(){var d=a(".customListComponent .pagination li");
var b=d.find("[data-page='first']").parent();
var f=d.find("[data-page='last']").parent();
var c=d.find("[data-page='previous']").parent();
var e=d.find("[data-page='next']").parent();
d.removeClass("active").find("[data-page='"+SfdcWwwBase.customListComponent.currentPage+"']").parent().addClass("active");
if(SfdcWwwBase.customListComponent.currentPage===1){b.addClass("disabled");
c.addClass("disabled")
}else{b.removeClass("disabled");
c.removeClass("disabled")
}if(SfdcWwwBase.customListComponent.currentPage===SfdcWwwBase.customListComponent.totalPages){f.addClass("disabled");
e.addClass("disabled")
}else{f.removeClass("disabled");
e.removeClass("disabled")
}};
SfdcWwwBase.customListComponent.updatePaginationButtons=function(){if(a(".customListComponent .pagination li [data-page='"+SfdcWwwBase.customListComponent.currentPage+"']").size()===0){SfdcWwwBase.customListComponent.pageButtonsDiv.empty();
var d=Math.floor((SfdcWwwBase.customListComponent.currentPage-1)/9)*9+1;
var c=SfdcWwwBase.customListComponent.totalPages>d+8?d+8:SfdcWwwBase.customListComponent.totalPages;
for(var b=d;
b<=c;
b++){SfdcWwwBase.customListComponent.createPaginationButton(b)
}SfdcWwwBase.customListComponent.bindPaginationClicks()
}};
SfdcWwwBase.customListComponent.createPaginationButton=function(b){SfdcWwwBase.customListComponent.pageButtonsDiv.append("<li><a data-page='"+b+"' href='#page="+b+"'>"+b+"</a></li>")
};
SfdcWwwBase.customListComponent.singleCardWrapperHtml=function(){return a(".hidden.filters-grid-card").clone().removeClass("hidden")
};
SfdcWwwBase.customListComponent.showMoreHtml=function(){return a(".hidden.load-more-container").clone().removeClass("hidden")
};
SfdcWwwBase.customListComponent.stripShowMore=function(){SfdcWwwBase.customListComponent.resultsDiv.find(".filters-grid-container .load-more-container").remove()
};
SfdcWwwBase.customListComponent.getUrlParameter=function(b){var e=decodeURIComponent(window.location.search.substring(1)),d=e.split("&"),f,c;
for(c=0;
c<d.length;
c++){f=d[c].split("=");
if(f[0]===b){return f[1]===undefined?true:f[1]
}}};
SfdcWwwBase.customListComponent.getQueryParameters=function(){var b=SfdcWwwBase.utils.getHashParameterByName("sort");
var c=SfdcWwwBase.utils.getHashParameterByName("tags").split("|");
if(c.length===1&&c[0]===""){c=[]
}SfdcWwwBase.customListComponent.appliedTags=c;
SfdcWwwBase.customListComponent.sortKey=SfdcWwwBase.customListComponent.applySortKeyForJson(b)
};
SfdcWwwBase.customListComponent.applyFilterSelectsAndPills=function(){a("ul.category-single li.single").each(function(){if(a(this).attr("value")===SfdcWwwBase.utils.getHashParameterByName("sort")){a(this).addClass("selected");
a(this).siblings().removeClass("selected")
}});
a("ul.category-multiple li.multiple a.tag-title").each(function(){for(var b=0;
b<SfdcWwwBase.customListComponent.appliedTags.length;
b++){var c=a(this).attr("data-tag-id");
if(c===SfdcWwwBase.customListComponent.appliedTags[b]){a(this).addClass("is-checked");
a(this).parent("li").addClass("selected");
SfdcWwwBase.customListComponent.applyFilterPill(c)
}}})
};
SfdcWwwBase.customListComponent.applyTags=function(){var c=SfdcWwwBase.customListComponent.appliedTags;
var k=SfdcWwwBase.customListComponent.totalResultSet;
var q=[];
var o=[];
var p=SfdcWwwBase.customListComponent.contentType;
if(c.length===0){SfdcWwwBase.customListComponent.resultSet=o.concat(SfdcWwwBase.customListComponent.totalResultSet);
return
}if(p==="customer-stories"){if(SfdcWwwBase.customListComponent.enableRefinement){if(SfdcWwwBase.customListComponent.tagJoinLogic==="or"){q=SfdcWwwBase.customListComponent.filteringLogicOR(k,c)
}else{if(SfdcWwwBase.customListComponent.tagJoinLogic==="and"){for(var g=0;
g<k.length;
g++){var n=true;
var e=[];
for(var f in k[g].tagMap){e.push(k[g].tagMap[f])
}for(var d=0;
d<c.length;
d++){if(a.inArray(c[d],e)===-1){n=false;
break
}}if(n===true){q.push(k[g])
}}}}}else{var m=[];
var l=[],h=1;
a("div.category-items ul.category-multiple").each(function(){var w=[],t=[],z=[];
for(var v=0;
v<c.length;
v++){a(this).find("li.multiple a").each(function(){if(a(this).attr("data-tag-id")===c[v]){w.push(c[v])
}})
}l[h]=w;
if(l[h].length===0){return true
}else{if(h===1){m=SfdcWwwBase.customListComponent.filteringLogicOR(k,l[h]);
q=m
}else{for(var v=0;
v<m.length;
v++){var y=[];
for(var s in m[v].tagMap){y.push(m[v].tagMap[s])
}var r=l[h];
for(var u=0;
u<r.length;
u++){var x=true;
if(a.inArray(r[u],y)===-1){x=false;
continue
}if(x===true){t.push(m[v]);
a.each(t,function(A,j){if(a.inArray(j,z)===-1){z.push(j)
}})
}}}m=z;
q=z
}}h++
})
}}else{if(p=="press-releases"){for(var g=0;
g<k.length;
g++){var b=new Date(k[g].date).getFullYear().toString();
if(a.inArray(b,c)!=-1){q.push(k[g])
}}}}SfdcWwwBase.customListComponent.resultSet=q
};
SfdcWwwBase.customListComponent.filteringLogicOR=function(b,d){var e=[];
for(var c=0;
c<b.length;
c++){for(var g in b[c].tagMap){var f=b[c].tagMap[g];
if(a.inArray(f,d)!=-1){e.push(b[c]);
break
}}}return e
};
SfdcWwwBase.customListComponent.isRefinementEnabled=function(){if(SfdcWwwBase.customListComponent.contentType==="customer-stories"&&SfdcWwwBase.customListComponent.enableRefinement){if(SfdcWwwBase.customListComponent.appliedTags.length===0){SfdcWwwBase.customListComponent.showAllFilters();
return
}SfdcWwwBase.customListComponent.filtersRefinement()
}else{SfdcWwwBase.customListComponent.showAllFilters()
}};
SfdcWwwBase.customListComponent.filtersRefinement=function(){var c=true;
var h=SfdcWwwBase.customListComponent.resultSet;
if(h.length===0){a("ul.category-multiple li.multiple").each(function(){if(!a(this).hasClass("selected")){a(this).addClass("hide")
}});
c=false
}if(c){var f=[],k=[];
for(var g=0;
g<h.length;
g++){var e=h[g].tagMap;
var b=Object.keys(e).map(function(j){return e[j]
});
for(var d=0;
d<b.length;
d++){f.push(b[d])
}}a.each(f,function(l,j){if(a.inArray(j,k)===-1){k.push(j)
}});
a("ul.category-multiple a.tag-title").each(function(){for(var j=0;
j<k.length;
j++){if(a(this).data("tag-id")===k[j]){a(this).parent("li.multiple").removeClass("hide");
break
}else{a(this).parent("li.multiple").addClass("hide")
}}})
}a("div.category-items ul.category-multiple").each(function(){if(a(this).find("li.hide").length!==a(this).find("li.multiple").length){a(this).removeClass("hide");
a(this).parent("div.category-items").prev().removeClass("hide")
}else{a(this).addClass("hide");
a(this).parent("div.category-items").prev().addClass("hide")
}})
};
SfdcWwwBase.customListComponent.showAllFilters=function(){a("ul.category-multiple").each(function(){a(this).removeClass("hide");
a(this).parent("div.category-items").prev().removeClass("hide")
});
a("ul.category-multiple li.multiple").each(function(){a(this).removeClass("hide")
})
};
SfdcWwwBase.customListComponent.collapseAll=function(){a(".category-title h4").addClass("collapsed");
a(".category-items").removeClass("in")
};
SfdcWwwBase.customListComponent.mobileDrawer=function(){a(".filter-category-title").unbind("click").click(function(){a(this).siblings(".filter-category-sub").slideToggle();
a(this).children(".icon-sfdc-icon-down-arrow, .icon-sfdc-icon-up-arrow").toggleClass("icon-sfdc-icon-up-arrow icon-sfdc-icon-down-arrow")
})
};
SfdcWwwBase.customListComponent.resizeMobileDrawer=function(){var b;
a(window).resize(function(){clearTimeout(b);
b=setTimeout(SfdcWwwBase.customListComponent.mobileDrawer,500)
})
};
SfdcWwwBase.customListComponent.updateFilterCounter=function(b){a('.filter-category [id^="collapse_"]').each(function(){var d=a(this).attr("id");
var c=d.replace("collapse_","heading_");
var e=a("#"+d+" .selected").length;
var f=a("#"+c).children(".filters-category-count");
if(e>0){a(f).show();
a(f).children("span").text(e);
b=b||false;
if(b){a("#"+c).children('*[data-toggle="collapse"]').removeClass("collapsed");
a(this).prev(".category-title").find("h4").removeClass("collapsed");
a(this).addClass("in")
}}else{if(e===0){a(f).hide()
}}})
};
SfdcWwwBase.customListComponent.layoutFilters=function(){if(a(window).width()<=768){SfdcWwwBase.customListComponent.mobileDrawer()
}else{SfdcWwwBase.customListComponent.resizeMobileDrawer()
}};
SfdcWwwBase.customListComponent.filterAnalytics=function(b,d){var c="";
if(b!==""){c=b+"|"
}if(typeof(d)==="number"){d="year|"+d
}var e="filterclicked|"+c+d;
if(typeof(digitalData)!=="undefined"){digitalData.util.trackActivity(e)
}};
SfdcWwwBase.customListComponent.mobileShowMoreClickArea=function(){if(a(window).width()<=768){a(".btn-container .load-more-container").click(function(){SfdcWwwBase.customListComponent.loadMoreResults()
})
}};
SfdcWwwBase.customListComponent.injectPrevious10YearsIntoList=function(){var b=a("ul.single-check").attr("data-year");
for(var c=b;
c>(b-10);
c--){a("ul.category-multiple li.multiple:first").clone().removeClass("hidden").find("a").attr("data-tag-id",c).find("label").html(c).end().end().appendTo("ul.category-multiple:last");
a("div.filters-selected-body a.filter-pill:first").clone().html(c).appendTo("div.filters-selected-body a.filter-pill:last")
}};
SfdcWwwBase.customListComponent.init=function(){SfdcWwwBase.customListComponent.getResultObject();
if(a("div.category-items ul.category-multiple").hasClass("single-check")){SfdcWwwBase.customListComponent.injectPrevious10YearsIntoList()
}SfdcWwwBase.customListComponent.bindFilterClick();
SfdcWwwBase.customListComponent.bindClearAllClick();
SfdcWwwBase.customListComponent.collapseAll();
SfdcWwwBase.customListComponent.layoutFilters();
SfdcWwwBase.customListComponent.mobileShowMoreClickArea()
};
a(function(){if(SfdcWwwBase.customListComponent.resultsDiv.find(".filters-grid-container").length){SfdcWwwBase.customListComponent.init()
}})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.socialMediaSharingComponent=SfdcWwwBase.socialMediaSharingComponent||{};
(function(g){var c=".socialMediaSharingComponent .share-icon-row .share-icon a.twitter";
var b=g(c).attr("href");
var h="";
var d="";
var f="";
var a=1;
var e="";
SfdcWwwBase.socialMediaSharingComponent.twitterShareParameters=function(){var l,n;
l=b.match("url=(.*)&text");
h=l[1];
var k=b.match("&text=(.*)&via=");
d=decodeURI(k[1]);
if(d===""||d===null){d=g(c).attr("data-pagetitle");
SfdcWwwBase.socialMediaSharingComponent.sanitizeSpecialCharsFromTitle()
}n=b.match("&via=(.*)");
e=" via @"+n[1];
var r,j=h.concat(e).length;
if(a!==0){r=h.concat(d,e).length
}else{r=h.concat(f,e).length
}var o,q,m=b.indexOf("&text=")+6;
b=decodeURI(b);
if(r>279){if(a!==0){o=d.substring(0,279-j);
var p=new RegExp(d,"g");
q=b.replace(p,o)
}else{o=f.substring(0,279-j);
q=[b.slice(0,m),o,b.slice(m)].join("")
}}else{if(a===0){q=[b.slice(0,m),f,b.slice(m)].join("")
}}g(c).attr("href",q)
};
SfdcWwwBase.socialMediaSharingComponent.sanitizeSpecialCharsFromTitle=function(){var j=new RegExp("[#%^&;:]","g");
f=d.replace(j,"");
a=0
};
SfdcWwwBase.socialMediaSharingComponent.init=function(){SfdcWwwBase.socialMediaSharingComponent.twitterShareParameters()
};
g(document).ready(function(){if(g(".socialMediaSharingComponent").length>0){SfdcWwwBase.socialMediaSharingComponent.init()
}})
}(jQuery));