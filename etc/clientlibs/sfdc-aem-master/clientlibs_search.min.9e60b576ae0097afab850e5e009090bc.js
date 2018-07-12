var SfdcWwwBase=window.SfdcWwwBase||{};
SfdcWwwBase.utils=SfdcWwwBase.utils||{};
SfdcWwwBase.utils.detectIE=function(){var c=window.navigator.userAgent;
var b=c.indexOf("MSIE ");
if(b>0){return parseInt(c.substring(b+5,c.indexOf(".",b)),10)
}var a=c.indexOf("Trident/");
if(a>0){var e=c.indexOf("rv:");
return parseInt(c.substring(e+3,c.indexOf(".",e)),10)
}var d=c.indexOf("Edge/");
if(d>0){return parseInt(c.substring(d+5,c.indexOf(".",d)),10)
}return false
};
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.coveo=SfdcWwwBase.coveo||{};
(function(a){SfdcWwwBase.coveo.bindClick=function(){var b=a(".coveo-search-section");
a(".search-collapsed .coveo-search-section .icon-sfdc-icon-magnifying-glass").on("click",function(){b.toggleClass("active")
});
b.on("focus","input",function(){a(this).closest(b).addClass("focused")
});
b.on("blur","input",function(){a(this).closest(b).removeClass("focused")
})
};
SfdcWwwBase.coveo.init=function(){this.bindClick()
};
a(document).ready(function(){SfdcWwwBase.coveo.init()
})
}(jQuery));
var SfdcWwwBase=SfdcWwwBase||{};
SfdcWwwBase.coveoSearch=SfdcWwwBase.coveoSearch||{};
(function(a){SfdcWwwBase.coveoSearch.bindAnalytics=function(){a("#searchResults.CoveoSearchInterface").on("querySuccess",function(c,b){if(b.query.q===undefined){return
}if(Page.getSearchTerm()!==b.query.q){Page.setSearchTerm(b.query.q)
}digitalData.util.addPageData("searchterm",Page.getSearchTerm());
if(digitalData.page.searchterm){digitalData.page.numsearchresults=b.results.totalCountFiltered;
digitalData.page.numofintsearches="+1"
}digitalData.util.trackBehavior("coveo-search",["intsearch"],["page.searchterm","page.previous","page.numsearchresults","page.numofintsearches"])
})
};
SfdcWwwBase.coveoSearch.init=function(){this.bindAnalytics()
};
SfdcWwwBase.coveoSearch.init()
}(jQuery));