(window.webpackJsonp=window.webpackJsonp||[]).push([[132,10,18,23,24,26,27,46,48,102,113,114,120,128],{396:function(e,t,n){"use strict";var r=n(12),o=n(6),l=n(5),c=n(116),d=n(19),m=n(14),v=n(246),_=n(48),h=n(91),f=n(247),y=n(4),C=n(90).f,k=n(39).f,w=n(18).f,x=n(399),T=n(248).trim,S="Number",O=o.Number,j=O.prototype,A=o.TypeError,U=l("".slice),M=l("".charCodeAt),D=function(e){var t=f(e,"number");return"bigint"==typeof t?t:I(t)},I=function(e){var t,n,r,o,l,c,d,code,m=f(e,"number");if(h(m))throw A("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=T(m),43===(t=M(m,0))||45===t){if(88===(n=M(m,2))||120===n)return NaN}else if(48===t){switch(M(m,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(c=(l=U(m,2)).length,d=0;d<c;d++)if((code=M(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+m};if(c(S,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var N,E=function(e){var t=arguments.length<1?0:O(D(e)),n=this;return _(j,n)&&y((function(){x(n)}))?v(Object(t),n,E):t},R=r?C(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;R.length>z;z++)m(O,N=R[z])&&!m(E,N)&&w(E,N,k(O,N));E.prototype=j,j.constructor=E,d(o,S,E,{constructor:!0})}},397:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(398).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},398:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},399:function(e,t,n){var r=n(5);e.exports=r(1..valueOf)},401:function(e,t,n){"use strict";n.r(t);n(50),n(35),n(38),n(74),n(75);var r=n(32);n(47),n(11),n(40),n(72);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return l(l({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,n){if(e.date){var r=(new Date).getTime(),o=new Date(e.date).getTime()+e.duration-r;o>0?setTimeout((function(){t.updateMessageVisibility(n,"hidden")}),o):t.updateMessageVisibility(n,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},d=n(2),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(n,r){return"hidden"!==n.visibility?t("div",{key:r,class:"o-flash-messages__item"+(n.status?" -"+n.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(n.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},402:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)}},mounted:function(){this.adsenseAddLoad()}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},419:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonmUserHeaderComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-user-header"},[t("div",{staticClass:"skeleton-m-user-header__outer"},[t("div",{staticClass:"skeleton-m-user-header__inner"},[t("div",{staticClass:"skeleton-m-user-header__image"},[t("div",{class:"skeleton-m-user-header__image-file loading-image"+e.styleThema})]),e._v(" "),t("div",{staticClass:"skeleton-m-user-header__text"},[t("span",{class:"skeleton-m-user-header__nickname loading-image"+e.styleThema})])])])])}),[],!1,null,null,null);t.default=component.exports},420:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoUserUrlsComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-user-urls"},[t("div",{staticClass:"skeleton-o-user-urls__outer"},[t("div",{staticClass:"skeleton-o-user-urls__inner"},[t("div",{staticClass:"skeleton-o-user-urls__items"},e._l(3,(function(n){return t("div",{key:n,class:"skeleton-o-user-urls__item loading-image"+e.styleThema})})),0)])])])}),[],!1,null,null,null);t.default=component.exports},426:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmUserHeaderComponent",components:{skeletonmUserHeader:n(419).default},props:{user:{type:Array,required:!0},skeleton:{type:Boolean,required:!1}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.user&&!0===e.skeleton?t("skeletonmUserHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}):e._e(),e._v(" "),null!==e.user&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"m-user-header"},[t("div",{staticClass:"m-user-header__outer"},[t("div",{staticClass:"m-user-header__inner"},[t("div",{staticClass:"m-user-header__image"},[t("div",{staticClass:"m-user-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-user-header__text"},[t("span",{staticClass:"m-user-header__nickname"},[e._v(e._s(e.user[0].nickname))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},427:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmNavUserComponent",props:{statusOpen:{type:Boolean,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-user",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-user__outer"},[t("div",{staticClass:"m-nav-user__inner"},[t("ul",{staticClass:"m-nav-user__items"},[t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug,"exact-active-class":"-active"}},[e._v("Základní informace")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -post",class:{"-active":"/ucet/profil/clanky"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/clanky","exact-active-class":"-active"}},[e._v("Články")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -video",class:{"-active":"/ucet/profil/videa"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/videa","exact-active-class":"-active"}},[e._v("Videa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -user",class:{"-active":"/ucet/profil/sleduji"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/sleduji","exact-active-class":"-active"}},[e._v("Sleduji")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports},428:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoUserUrlsComponent",components:{skeletonoUserUrls:n(420).default},props:{urls:{type:Array,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null!==e.urls?t("client-only",[t("div",{staticClass:"o-user-urls"},[t("div",{staticClass:"o-user-urls__outer"},[t("div",{staticClass:"o-user-urls__inner"},[t("div",{staticClass:"o-user-urls__items"},e._l(e.urls,(function(n){return t("div",{key:n.url,staticClass:"o-user-urls__item"},[t("a",{staticClass:"o-user-urls__link",attrs:{href:n.url,title:n.url}},[e._v(e._s(n.url))])])})),0)])])])]):e._e(),e._v(" "),null===e.urls||0===e.urls.length?t("client-only",[e._v("\n        Cestovatel nemá vyplňěné žádné odkazy.\n    ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},577:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoAchievementsListComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-achievements"},[t("div",{staticClass:"skeleton-o-achievements__outer"},[t("div",{staticClass:"skeleton-o-achievements__inner"},[t("div",{staticClass:"skeleton-o-achievements__items"},e._l(9,(function(n){return t("div",{key:n,staticClass:"skeleton-o-achievements__item"},[t("div",{class:"skeleton-o-achievements__content loading-image"+e.styleThema})])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},595:function(e,t,n){"use strict";n.r(t);var r=n(32),o=(n(24),n(35),n(49),n(9)),l=(n(37),n(396),n(11),n(72),{name:"OrganismsoAchievementsListComponent",components:{skeletonoAchievements:n(577).default},props:{account:{type:Array,required:!0},type:{type:String,required:!0},idUser:{type:Number,required:!1}},data:function(){return{skeleton:!0,achievements:[],achievementsList:[]}},methods:{calculateWidth:function(e,t){return t>=e?100:t/e*100},createAchievementsList:function(e){return[{type:"-type-world-continent",value:"-value-bronze",actual:e[0].continent,need:2,name:"Bronzový Kontinentální Cestovatel",description:""},{type:"-type-world-continent",value:"-value-silver",actual:e[0].continent,need:4,name:"Stříbrný Kontinentální Objevitel",description:""},{type:"-type-world-continent",value:"-value-gold",actual:e[0].continent,need:6,name:"Zlatý Kontinentální Dobrodruh",description:""},{type:"-type-world-continent",value:"-value-diamond",actual:e[0].continent,need:7,name:"Diamantový Kontinentální Mistr",description:""},{type:"-type-world-state",value:"-value-bronze",actual:e[0].state,need:10,name:"Bronzový Státní Cestovatel",description:""},{type:"-type-world-state",value:"-value-silver",actual:e[0].state,need:25,name:"Stříbrný Státní Objevitel",description:""},{type:"-type-world-state",value:"-value-gold",actual:e[0].state,need:125,name:"Zlatý Státní Dobrodruh",description:""},{type:"-type-world-state",value:"-value-diamond",actual:e[0].state,need:250,name:"Diamantový Státní Mistr",description:""},{type:"-type-world-region",value:"-value-bronze",actual:e[0].region,need:20,name:"Bronzový Regionální Cestovatel",description:""},{type:"-type-world-region",value:"-value-silver",actual:e[0].region,need:50,name:"Stříbrný Regionální Objevitel",description:""},{type:"-type-world-region",value:"-value-gold",actual:e[0].region,need:250,name:"Zlatý Regionální Dobrodruh",description:""},{type:"-type-world-region",value:"-value-diamond",actual:e[0].region,need:500,name:"Diamantový Regionální Mistr",description:""},{type:"-type-world-city",value:"-value-bronze",actual:e[0].city,need:50,name:"Bronzový Městský Cestovatel",description:""},{type:"-type-world-city",value:"-value-silver",actual:e[0].city,need:100,name:"Stříbrný Městský Objevitel",description:""},{type:"-type-world-city",value:"-value-gold",actual:e[0].city,need:500,name:"Zlatý Městský Dobrodruhh",description:""},{type:"-type-world-city",value:"-value-diamond",actual:e[0].city,need:1e3,name:"Diamantový Městský Mistr",description:""},{type:"-type-world-spot",value:"-value-bronze",actual:e[0].spot,need:100,name:"Bronzový Místní Cestovatel",description:""},{type:"-type-world-spot",value:"-value-silver",actual:e[0].spot,need:300,name:"Stříbrný Místní Objevitel",description:""},{type:"-type-world-spot",value:"-value-gold",actual:e[0].spot,need:1e3,name:"Zlatý Místní Dobrodruh",description:""},{type:"-type-world-spot",value:"-value-diamond",actual:e[0].spot,need:2500,name:"Diamantový Místní Mistr",description:""}]},fetchData:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"account"!==e.type){t.next=11;break}if(!e.account||0===e.account.length){t.next=9;break}return t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/user-achievements?id_user=".concat(e.account[0].id));case 6:e.achievements=t.sent,e.achievementsList=e.createAchievementsList(e.achievements),e.skeleton=!1;case 9:t.next=17;break;case 11:return t.next=14,e.$axios.$get("https://api.frytolnacestach.cz/api/user-achievements?id_user=".concat(e.idUser));case 14:e.achievements=t.sent,e.achievementsList=e.createAchievementsList(e.achievements),e.skeleton=!1;case 17:t.next=25;break;case 19:return t.prev=19,t.t0=t.catch(0),console.log("API ERROR - ACHIEMENTY"),console.error(t.t0),t.next=25,new Promise((function(e){return setTimeout(e,1e3)}));case 25:case"end":return t.stop()}}),t,null,[[0,19]])})))()}},watch:{account:{handler:"fetchData",immediate:!0}}}),c=n(2),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[e.skeleton?t("skeletonoAchievements",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),e.skeleton?e._e():t("client-only",[t("div",{staticClass:"o-achievements"},[t("div",{staticClass:"o-achievements__outer"},[t("div",{staticClass:"o-achievements__inner"},[t("div",{staticClass:"o-achievements__items"},e._l(e.achievementsList,(function(n){return t("div",{key:n.id,staticClass:"o-achievements__item print-section",class:[n.type,Object(r.a)({},n.value,n.actual>=n.need)]},[t("div",{staticClass:"o-achievements__content"},[t("div",{staticClass:"o-achievements__medal"}),e._v(" "),t("div",{staticClass:"o-achievements__text"},[t("h2",{staticClass:"o-achievements__name"},[e._v(e._s(n.name))]),e._v(" "),n.description?t("p",{staticClass:"o-achievements__description"},[e._v(e._s(n.description))]):e._e()]),e._v(" "),t("div",{staticClass:"o-achievements__progress"},[t("span",{staticClass:"o-achievements__progress-number"},[t("span",{staticClass:"o-achievements__progress-number-actual"},[e._v(e._s(n.actual>n.need?n.need:n.actual))]),e._v("/"),t("span",{staticClass:"o-achievements__progress-number-need"},[e._v(e._s(n.need))])]),e._v(" "),t("div",{staticClass:"o-achievements__progress-line"},[t("div",{staticClass:"o-achievements__progress-line-full",style:{width:e.calculateWidth(n.need,n.actual)+"%"}})])])])])})),0)])])])])],1)}),[],!1,null,null,null);t.default=component.exports},601:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoFollowerButtonComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"skeleton-o-follower-button"},[e("div",{staticClass:"skeleton-o-follower-button__outer"},[e("div",{staticClass:"skeleton-o-follower-button__inner"},[e("div",{staticClass:"skeleton-o-follower-button__items"},[e("div",{staticClass:"skeleton-o-follower-button__item"},[e("span",{class:"skeleton-o-follower-button__button loading-image"+this.styleThema})])])])])])}),[],!1,null,null,null);t.default=component.exports},646:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(37),n(396),n(11),n(46),n(601)),l=n(401),c={name:"OrganismsoFollowerButtonComponent",components:{skeletonoFollowerButton:o.default,oFlashMessages:l.default},data:function(){return{flashMessage:[],skeleton:!0,status:0}},props:{account:{type:Array,required:!0},user:{type:Number,required:!0}},methods:{follower:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.account||0===e.account.length){t.next=22;break}return t.prev=1,t.next=4,fetch("https://api.frytolnacestach.cz/api/user-follower-id-follower?email=".concat(encodeURIComponent(e.account[0].email),"&password_hash=").concat(encodeURIComponent(e.account[0].password),"&id_follower=").concat(encodeURIComponent(e.user)),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"GET"});case 4:if(!(n=t.sent).ok){t.next=13;break}return t.next=8,n.json();case 8:data=t.sent,e.status=data.message[0].status,e.skeleton=!1,t.next=14;break;case 13:404===n.status||n.status,e.skeleton=!1;case 14:t.next=20;break;case 16:throw t.prev=16,t.t0=t.catch(1),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 20:t.next=23;break;case 22:e.skeleton=!1;case 23:case"end":return t.stop()}}),t,null,[[1,16]])})))()},editFollower:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.account||0===t.account.length){n.next=21;break}return n.prev=1,t.status=e,n.prev=3,n.next=6,fetch("https://api.frytolnacestach.cz/api/user-follower-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.email,password_hash:t.passwordHash,id_follower:t.user,status:t.status})});case 6:(r=n.sent).ok?201===r.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam uložen"}):200===r.status&&(t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"}),t.status=0):404===r.status?(t.status=0,t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."})):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),n.next=14;break;case 10:throw n.prev=10,n.t0=n.catch(3),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),n.t0;case 14:n.next=19;break;case 16:n.prev=16,n.t1=n.catch(1),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 19:n.next=23;break;case 21:t.status=0,t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."});case 23:case"end":return n.stop()}}),n,null,[[1,16],[3,10]])})))()}},mounted:function(){this.follower()}},d=n(2),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[!0===e.skeleton?t("skeletonoFollowerButton",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),!1===e.skeleton?t("client-only",[t("div",{staticClass:"o-follower-button"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("div",{staticClass:"o-follower-button__outer"},[t("div",{staticClass:"o-follower-button__inner"},[t("div",{staticClass:"o-follower-button__items"},[t("div",{staticClass:"o-follower-button__item"},[t("span",{staticClass:"o-follower-button__button",class:{"-active":1===e.status},on:{click:function(t){return e.editFollower(1)}}},[e._v(e._s(1===e.status?"Sleduji":"Sledovat"))])])])])])],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},746:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(37),n(115),n(47),n(46),n(38),n(11),n(72),n(397)),l=n(426),c=n(427),d=n(402),m=n(595),v=n(646),_=n(428),h={name:"CestovatelSlugPage",components:{mHeadline:o.default,mUserHeader:l.default,mNavUser:c.default,oAdGoogleSidebar:d.default,oAchievements:m.default,oFollowerButton:v.default,oUserUrls:_.default},data:function(){return{account:[],staticUser:this.staticUser,user:"",placesContinentsID:[],placesStatesID:[],placesCitiesID:[],placesRegionsID:[],placesSpotsID:[],videos:[],images:[],mNavUserOpen:!1}},head:function(){var title,e,t;return title="".concat(this.staticUser[0].nickname," | Frytol na cestách"),e="Profil cestovatele ".concat(this.staticUser[0].nickname," na cestovatelském portálu Frytol na cestách"),this.staticUser[0].seo_tags&&this.staticUser[0].seo_tags.length>0&&(t=this.staticUser[0].seo_tags.map((function(e){return e.tag})).join(", ")),"https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title,meta:[{hid:"description",name:"description",content:e},{name:"keywords",content:"".concat(this.staticUser[0].nickname+t+", cestovatel, uživatel, cestování, svět, rady, cestovatelský portál")},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:e},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/cestovatel/").concat(this.staticUser[0].slug,"/videa")},{hid:"og:type",content:"website"}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.prev=1,t.next=4,n.$get("https://api.frytolnacestach.cz/api/user/".concat(r.slug));case 4:return o=t.sent,t.abrupt("return",{staticUser:o});case 8:return t.prev=8,t.t0=t.catch(1),console.log("API ERROR - CESTOVATEL DETAIL(static): ".concat(r.slug)),console.error(t.t0),t.abrupt("return",{staticUser:null});case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},mounted:function(){var e=this;this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r,o,l,c,d,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,data=null;case 3:if(n){t.next=28;break}return t.prev=4,t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/user/".concat(e.$route.params.slug));case 7:return r=t.sent,t.next=10,e.$axios.$get("https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=".concat(r[0].id,"&status=1"));case 10:o=t.sent,l=o.filter((function(e){return"continent"===e.type})).map((function(e){return e.id_place}))||[],c=o.filter((function(e){return"state"===e.type})).map((function(e){return e.id_place}))||[],d=o.filter((function(e){return"city"===e.type})).map((function(e){return e.id_place}))||[],m=o.filter((function(e){return"region"===e.type})).map((function(e){return e.id_place}))||[],v=o.filter((function(e){return"spot"===e.type})).map((function(e){return e.id_place}))||[],data={staticUser:r,user:r,placesContinentsID:l,placesStatesID:c,placesCitiesID:d,placesRegionsID:m,placesSpotsID:v},n=!0,t.next=26;break;case 20:return t.prev=20,t.t0=t.catch(4),console.log("API ERROR - CESTOVATEL DETAIL: ".concat(e.$route.params.slug)),console.error(t.t0),t.next=26,new Promise((function(e){return setTimeout(e,1e3)}));case 26:t.next=3;break;case 28:Object.assign(e,data);case 29:case"end":return t.stop()}}),t,null,[[4,20]])}))))},methods:{menuUserUpdate:function(e){this.mNavUserOpen=e}},watch:{"$store.state.account":{deep:!0,immediate:!0,handler:function(){this.account=this.$store.state.account}}}},f=n(2),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-col2"},[t("div",{staticClass:"t-col2__sidebar mb-2 print-section"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[e.user[0]?t("mUserHeader",{attrs:{user:e.staticUser},on:{update:e.menuUserUpdate}}):e._e(),e._v(" "),e.user[0]?e._e():t("mUserHeader",{attrs:{user:null,skeleton:!0}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world"},[t("div",{staticClass:"t-section__inner"},[e.user[0]&&e.account[0]&&e.user[0].email!==e.account[0].email?t("oFollowerButton",{attrs:{account:e.account,user:e.user[0].id}}):e._e()],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavUser",{attrs:{statusOpen:e.mNavUserOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-col2__content mb-2"},[e.user[0]?t("section",{staticClass:"t-section -padding-x -p0 mb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Tady mě najdeš",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oUserUrls",{attrs:{urls:e.user[0].urls}})],1)]):e._e(),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Moje úspěchy",styleThema:" -user -blue",styleAlign:"",styleGap:""}}),e._v(" "),e.user[0]?t("oAchievements",{attrs:{type:"user",idUser:e.user[0].id}}):e._e()],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);