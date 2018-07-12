var SfdcWwwGlobal=SfdcWwwGlobal||{};
SfdcWwwGlobal.assetCardsComponent=SfdcWwwGlobal.assetCardsComponent||{};
(function(a){SfdcWwwGlobal.assetCardsComponent.init=function(){if(a(".assets-cards-component-parentContainer")){SfdcWwwGlobal.assetCardsComponent.bindForLoadMoreButton()
}};
SfdcWwwGlobal.assetCardsComponent.bindForLoadMoreButton=function(){var c=".assets-cards-component-parentContainer";
var b=c+" .show-more";
a("body").on("click",b,function(){var e=a(this).attr("requestURL");
var d=a(this).closest(c).attr("componentid");
SfdcWwwGlobal.assetCardsComponent.ajaxCallToGetNewCards(e,d)
})
};
SfdcWwwGlobal.assetCardsComponent.ajaxCallToGetNewCards=function(e,d){SfdcWwwGlobal.assetCardsComponent.showSpinnersInComponent(d);
var g='.assets-cards-component-parentContainer[componentid="'+d+'"]';
var f=g+" .assets-cards-dataInner";
var b=g+" .assets-cards-areaForNewCards";
var c=".assets-cards-errorsLevel";
a.ajax({url:e,type:"GET",success:function(i){var h=a(i).find(f).children();
a(b).remove();
h.appendTo(f)
},error:function(h){a(g).find(c).removeClass("hidden")
},complete:function(h){SfdcWwwGlobal.assetCardsComponent.hideSpinnersInComponent(d)
}})
};
SfdcWwwGlobal.assetCardsComponent.hideSpinnersInComponent=function(b){var c='.assets-cards-component-parentContainer[componentid="'+b+'"]';
a(c).find(".assets-cards-loadMoreButton_link").removeClass("transparentColorText");
a(c).find(".loadingOverlay").hide()
};
SfdcWwwGlobal.assetCardsComponent.showSpinnersInComponent=function(b){var c='.assets-cards-component-parentContainer[componentid="'+b+'"]';
a(c).find(".assets-cards-loadMoreButton_link").addClass("transparentColorText");
a(c).find(".loadingOverlay").show()
};
a(document).ready(function(){SfdcWwwGlobal.assetCardsComponent.init()
})
}(jQuery));