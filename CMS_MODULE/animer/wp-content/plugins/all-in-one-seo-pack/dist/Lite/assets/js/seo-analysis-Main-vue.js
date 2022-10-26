(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["seo-analysis-Main-vue","seo-analysis-AnalyzeCompetitorSite-vue","seo-analysis-SeoAuditChecklist-vue"],{"2a928":function(t,e,s){"use strict";s("6544")},"3b33":function(t,e,s){"use strict";s("cfffe")},5192:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-seo-audit-checklist"},[s("core-card",{attrs:{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1}},[s("core-seo-site-score-analyze")],1),(t.$isPro&&t.options.general.licenseKey||t.internalOptions.internal.siteAnalysis.connectToken)&&t.internalOptions.internal.siteAnalysis.score?s("core-card",{attrs:{slug:"completeSeoChecklist"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"card-title"},[t._v(t._s(t.strings.completeSeoChecklist))]),s("base-button",{staticClass:"refresh-results",attrs:{type:"gray",size:"small",loading:t.analyzing},on:{click:t.refresh}},[s("svg-refresh"),t._v(" "+t._s(t.strings.refreshResults)+" ")],1)]},proxy:!0},{key:"tabs",fn:function(){return[s("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs.seoAuditChecklist,internal:"","skinny-tabs":""},on:{changed:t.processChangeTab},scopedSlots:t._u([{key:"md-tab",fn:function(e){var i=e.tab;return[s("span",{staticClass:"round",class:i.data.analyze.classColor},[t._v(t._s(i.data.analyze.count||0))]),s("span",{staticClass:"label"},[t._v(t._s(i.label))])]}}],null,!1,1060827092)})]},proxy:!0}],null,!1,4189792867)},[s("core-seo-site-analysis-results",{attrs:{section:t.settings.internalTabs.seoAuditChecklist,"all-results":t.getSiteAnalysisResults,"show-instructions":""}})],1):t._e()],1)},n=[],o=s("5530"),r=s("2f62"),a={data:function(){return{internalDebounce:!1,strings:{completeSeoChecklist:this.$t.__("Complete SEO Checklist",this.$td),refreshResults:this.$t.__("Refresh Results",this.$td)}}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["e"])(["internalOptions","options","settings","analyzing"])),Object(r["c"])(["getSiteAnalysisResults","allItemsCount","criticalCount","recommendedCount","goodCount"])),{},{tabs:function(){var t=this.internalOptions.internal.siteAnalysis;return[{slug:"all-items",name:this.$t.__("All Items",this.$td),analyze:{classColor:"black",count:t.score?this.allItemsCount():0}},{slug:"critical",name:this.$t.__("Critical Issues",this.$td),analyze:{classColor:"red",count:t.score?this.criticalCount():0}},{slug:"recommended-improvements",name:this.$t.__("Recommended Improvements",this.$td),analyze:{classColor:"blue",count:t.score?this.recommendedCount():0}},{slug:"good-results",name:this.$t.__("Good Results",this.$td),analyze:{classColor:"green",count:t.score?this.goodCount():0}}]}}),methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["changeTab","runSiteAnalyzer"])),{},{processChangeTab:function(t){var e=this;this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:"seoAuditChecklist",value:t}),setTimeout((function(){e.internalDebounce=!1}),50))},refresh:function(){this.$store.commit("analyzing",!0),this.runSiteAnalyzer({refresh:!0})}})},l=a,c=(s("2a928"),s("2877")),u=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=u.exports},6544:function(t,e,s){},"8c52":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-main",{attrs:{"page-name":t.strings.pageName,"show-save-button":!1}},[s(t.$route.name,{tag:"component"})],1)},n=[],o=s("e638"),r=s("5192"),a={components:{AnalyzeCompetitorSite:o["default"],SeoAuditChecklist:r["default"]},data:function(){return{strings:{pageName:this.$t.__("SEO Analysis",this.$td)}}}},l=a,c=s("2877"),u=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=u.exports},cfffe:function(t,e,s){},e638:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-analyze-competitor-site"},[s("core-analyze-competitor-site-header",{scopedSlots:t._u([{key:"competitor-results",fn:function(){return t._l(t.competitorResults,(function(e,i){return s("core-card",{key:i,attrs:{id:"aioseo-competitor-results"+t.hashCode(i),slug:"analyzeCompetitorSite"+i,"save-toggle-status":!1},scopedSlots:t._u([{key:"header",fn:function(){return[s("core-analyze-competitor-site-score",{attrs:{score:t.parseResults(e).score}}),t._v(" "+t._s(i)+" "),s("svg-trash",{nativeOn:{click:function(e){return t.startDeleteSite(i)}}})]},proxy:!0}],null,!0)},[s("div",{staticClass:"competitor-results-main"},[s("core-site-score-competitor",{attrs:{site:i,score:t.parseResults(e).score,loading:t.analyzing,summary:t.getSummary(t.parseResults(e).results),"mobile-snapshot":t.parseResults(e).results.advanced.mobileSnapshot}}),s("div",{staticClass:"competitor-results-body"},[s("core-seo-site-analysis-results",{attrs:{section:"all-items","all-results":t.parseResults(e).results,"show-google-preview":""}})],1)],1)])}))},proxy:!0}])},[s("div",{staticClass:"analyze-main"},[s("div",{staticClass:"analyze-header"},[t._v(" "+t._s(t.strings.enterCompetitorUrl)+" ")]),s("div",[t._v(" "+t._s(t.strings.performInDepthAnalysis)+" ")]),s("div",{staticClass:"analyze-input"},[s("base-input",{class:{"aioseo-error":t.inputError},attrs:{placeholder:"https://competitorwebsite.com"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.startAnalyzing.apply(null,arguments)}},model:{value:t.competitorUrl,callback:function(e){t.competitorUrl=e},expression:"competitorUrl"}}),s("base-button",{attrs:{type:"green",loading:t.isAnalyzing,disabled:!t.competitorUrl},on:{click:t.startAnalyzing}},[t._v(" "+t._s(t.strings.analyze)+" ")])],1),t.inputError?s("div",{staticClass:"aioseo-description aioseo-error"},[t._v(" "+t._s(t.strings.pleaseEnterValidUrl)+" ")]):t._e(),t.analyzeError?s("div",{staticClass:"analyze-errors aioseo-description aioseo-error",domProps:{innerHTML:t._s(t.getError)}}):t._e(),t.isAnalyzing?s("div",{staticClass:"analyze-progress"},[s("div",{staticClass:"analyze-progress-value",style:{animationDuration:t.analyzeTime+"s"}})]):t._e()])])],1)},n=[],o=s("5530"),r=(s("ac1f"),s("5319"),s("2ca0"),s("b64b"),s("159b"),s("2f62")),a=s("9c0e"),l=s("5c0f"),c={mixins:[a["l"]],data:function(){return{competitorUrl:null,isAnalyzing:!1,inputError:!1,competitorResults:{},analyzeTime:8,strings:{enterCompetitorUrl:this.$t.__("Enter Competitor URL",this.$td),performInDepthAnalysis:this.$t.__("Perform in-depth SEO Analysis of your competitor's website.",this.$td),analyze:this.$t.__("Analyze",this.$td),pleaseEnterValidUrl:this.$t.__("Please enter a valid URL.",this.$td)}}},watch:{analyzeError:function(t){t&&(this.isAnalyzing=!1)}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["e"])(["options","analyzing","analyzeError"])),Object(r["c"])(["getCompetitorSiteAnalysisResults","goodCount","recommendedCount","criticalCount"])),{},{getError:function(){switch(this.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.sprintf("%1$s %2$s",this.$t.__("We were unable to parse the content for this site.",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzeError}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["b"])(["runSiteAnalyzer","deleteCompetitorSite","saveConnectToken"])),Object(r["d"])(["toggleCard","closeCard"])),{},{parseResults:function(t){return JSON.parse(t)},getSummary:function(t){return{recommended:this.recommendedCount(t),critical:this.criticalCount(t),good:this.goodCount(t)}},startAnalyzing:function(){this.inputError=!1,this.competitorUrl=this.competitorUrl.replace("http://","https://"),this.competitorUrl.startsWith("https://")||(this.competitorUrl="https://"+this.competitorUrl),Object(l["a"])(this.competitorUrl)?(this.$store.commit("analyzing",!0),this.$store.commit("analyzeError",!1),this.runSiteAnalyzer({url:this.competitorUrl}),this.isAnalyzing=!0,setTimeout(this.checkStatus,1e3*this.analyzeTime),this.closeAllCards()):this.inputError=!0},checkStatus:function(){var t=this;this.isAnalyzing=!1,this.analyzing?this.$nextTick((function(){t.isAnalyzing=!0,2>t.analyzeTime&&(t.analyzeTime=8),t.analyzeTime=t.analyzeTime/2,setTimeout(t.checkStatus,1e3*t.analyzeTime)})):(this.competitorUrl=null,this.competitorResults=this.getCompetitorSiteAnalysisResults,this.toggleFirstCard(),this.$nextTick((function(){var e=Object.keys(t.competitorResults),s=document.querySelector(".aioseo-header"),i=s.offsetHeight+s.offsetTop+30;t.$scrollTo("#aioseo-competitor-results"+t.hashCode(e[0]),{offset:-i})})))},startDeleteSite:function(t){var e=this;this.closeAllCards(),this.$delete(this.competitorResults,t),this.deleteCompetitorSite(t).then((function(){e.competitorResults=e.getCompetitorSiteAnalysisResults}))},closeAllCards:function(){var t=this,e=Object.keys(this.competitorResults);e.forEach((function(e){t.closeCard("analyzeCompetitorSite"+e)}))},toggleFirstCard:function(){var t=Object.keys(this.competitorResults);this.toggleCard("analyzeCompetitorSite"+t[0])},hashCode:function(t){if(t){var e,s,i=0;for(e=0;e<t.length;e++)s=t.charCodeAt(e),i=(i<<5)-i+s,i|=0;return i}}}),mounted:function(){this.$store.commit("analyzeError",!1),this.competitorResults=this.getCompetitorSiteAnalysisResults,this.toggleFirstCard()}},u=c,h=(s("3b33"),s("2877")),p=Object(h["a"])(u,i,n,!1,null,null,null);e["default"]=p.exports}}]);