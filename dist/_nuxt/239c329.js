(window.webpackJsonp=window.webpackJsonp||[]).push([[136,10,18,23,24,27,104,115,130],{397:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(398).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},398:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},402:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)}},mounted:function(){this.adsenseAddLoad()}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},419:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonmUserHeaderComponent",props:{styleThema:{type:String,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-user-header"},[t("div",{staticClass:"skeleton-m-user-header__outer"},[t("div",{staticClass:"skeleton-m-user-header__inner"},[t("div",{staticClass:"skeleton-m-user-header__image"},[t("div",{class:"skeleton-m-user-header__image-file loading-image"+e.styleThema})]),e._v(" "),t("div",{staticClass:"skeleton-m-user-header__text"},[t("span",{class:"skeleton-m-user-header__nickname loading-image"+e.styleThema})])])])])}),[],!1,null,null,null);t.default=component.exports},420:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoUserUrlsComponent",props:{styleThema:{type:String,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-user-urls"},[t("div",{staticClass:"skeleton-o-user-urls__outer"},[t("div",{staticClass:"skeleton-o-user-urls__inner"},[t("div",{staticClass:"skeleton-o-user-urls__items"},e._l(3,(function(n){return t("div",{key:n,class:"skeleton-o-user-urls__item loading-image"+e.styleThema})})),0)])])])}),[],!1,null,null,null);t.default=component.exports},426:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmUserHeaderComponent",components:{skeletonmUserHeader:n(419).default},props:{user:{type:Array,required:!0},skeleton:{type:Boolean,required:!1}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.user&&!0===e.skeleton?t("skeletonmUserHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}):e._e(),e._v(" "),null!==e.user&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"m-user-header"},[t("div",{staticClass:"m-user-header__outer"},[t("div",{staticClass:"m-user-header__inner"},[t("div",{staticClass:"m-user-header__image"},[t("div",{staticClass:"m-user-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-user-header__text"},[t("span",{staticClass:"m-user-header__nickname"},[e._v(e._s(e.user[0].nickname))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},427:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmNavUserComponent",props:{statusOpen:{type:Boolean,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-user",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-user__outer"},[t("div",{staticClass:"m-nav-user__inner"},[t("ul",{staticClass:"m-nav-user__items"},[t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug,"exact-active-class":"-active"}},[e._v("Základní informace")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -post",class:{"-active":"/ucet/profil/clanky"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/clanky","exact-active-class":"-active"}},[e._v("Články")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -video",class:{"-active":"/ucet/profil/videa"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/videa","exact-active-class":"-active"}},[e._v("Videa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -user",class:{"-active":"/ucet/profil/sleduji"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/sleduji","exact-active-class":"-active"}},[e._v("Sleduji")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports},428:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoUserUrlsComponent",components:{skeletonoUserUrls:n(420).default},props:{urls:{type:Array,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null!==e.urls?t("client-only",[t("div",{staticClass:"o-user-urls"},[t("div",{staticClass:"o-user-urls__outer"},[t("div",{staticClass:"o-user-urls__inner"},[t("div",{staticClass:"o-user-urls__items"},e._l(e.urls,(function(n){return t("div",{key:n.url,staticClass:"o-user-urls__item"},[t("a",{staticClass:"o-user-urls__link",attrs:{href:n.url,title:n.url}},[e._v(e._s(n.url))])])})),0)])])])]):e._e(),e._v(" "),null===e.urls||0===e.urls.length?t("client-only",[e._v("\n        Cestovatel nemá vyplňěné žádné odkazy.\n    ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},750:function(e,t,n){"use strict";n.r(t);var r=n(32),l=n(9),c=(n(37),n(46),n(47),n(38),n(11),n(72),n(397)),o=n(426),d=n(427),v=n(402),m=n(610),_=n(428),y={name:"CestovatelNavstivenaMistaSlugPage",components:{mHeadline:c.default,mUserHeader:o.default,mNavUser:d.default,oAdGoogleSidebar:v.default,oCoverPlaceVisited:m.default,oUserUrls:_.default},data:function(){return{staticUser:this.staticUser,user:"",placesContinentsID:[],placesStatesID:[],placesCitiesID:[],placesRegionsID:[],placesSpotsID:[],mNavUserOpen:!1,skeleton:!0}},head:function(){var title,e;return"https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Navštívená místa uživatelem ".concat(this.staticUser[0].nickname," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:e="Profil cestovatele ".concat(this.staticUser[0].nickname," na cestovatelském portálu Frytol na cestách")},{name:"keywords",content:"".concat(this.staticUser[0].nickname+", navštívená místa, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál")},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:e},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/cestovatel/").concat(this.staticUser[0].slug,"/navstivena-mista")},{hid:"og:type",content:"website"}]}},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.prev=1,t.next=4,n.$get("https://api.frytolnacestach.cz/api/user/".concat(r.slug));case 4:return l=t.sent,t.abrupt("return",{staticUser:l});case 8:return t.prev=8,t.t0=t.catch(1),console.log("API ERROR - CESTOVATEL DETAIL(static): ".concat(r.slug)),console.error(t.t0),t.abrupt("return",{staticUser:null});case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},mounted:function(){var e=this;this.$nextTick(Object(l.a)(regeneratorRuntime.mark((function t(){var n,data,r,l,c,o,d,v,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,data=null;case 3:if(n){t.next=29;break}return t.prev=4,t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/user/".concat(e.$route.params.slug));case 7:return r=t.sent,t.next=10,e.$axios.$get("https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=".concat(r[0].id,"&status=1"));case 10:l=t.sent,c=l.filter((function(e){return"continent"===e.type})).map((function(e){return e.id_place}))||[],o=l.filter((function(e){return"state"===e.type})).map((function(e){return e.id_place}))||[],d=l.filter((function(e){return"city"===e.type})).map((function(e){return e.id_place}))||[],v=l.filter((function(e){return"region"===e.type})).map((function(e){return e.id_place}))||[],m=l.filter((function(e){return"spot"===e.type})).map((function(e){return e.id_place}))||[],data={staticUser:r,user:r,placesContinentsID:c,placesStatesID:o,placesCitiesID:d,placesRegionsID:v,placesSpotsID:m},e.skeleton=!1,n=!0,t.next=27;break;case 21:return t.prev=21,t.t0=t.catch(4),console.log("API ERROR - CESTOVATEL DETAIL: ".concat(e.$route.params.slug)),console.error(t.t0),t.next=27,new Promise((function(e){return setTimeout(e,1e3)}));case 27:t.next=3;break;case 29:Object.assign(e,data);case 30:case"end":return t.stop()}}),t,null,[[4,21]])}))))},methods:{menuUserUpdate:function(e){this.mNavUserOpen=e}}},h=n(2),component=Object(h.a)(y,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-col2"},[t("div",{staticClass:"t-col2__sidebar mb-2 print-section"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[e.user[0]?t("mUserHeader",{attrs:{user:e.staticUser},on:{update:e.menuUserUpdate}}):e._e(),e._v(" "),e.user[0]?e._e():t("mUserHeader",{attrs:{user:null,skeleton:!0}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavUser",{attrs:{statusOpen:e.mNavUserOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-col2__content mb-2"},[t("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Kontinety které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{skeletonProbs:e.skeleton,account:e.account,placesID:e.placesContinentsID,type:"kontinent",typeAccount:"other"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Státy které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{skeletonProbs:e.skeleton,account:e.account,placesID:e.placesStatesID,type:"stat",typeAccount:"other"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Města které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{skeletonProbs:e.skeleton,account:e.account,placesID:e.placesCitiesID,type:"mesto",typeAccount:"other"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Regiony které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{skeletonProbs:e.skeleton,account:e.account,placesID:e.placesRegionsID,type:"region",typeAccount:"other"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Místa které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:Object(r.a)({skeletonProbs:e.skeleton,account:e.account,placesID:e.placesSpotsID,type:"misto"},"account","other")})],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);