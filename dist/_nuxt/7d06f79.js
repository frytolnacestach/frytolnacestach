(window.webpackJsonp=window.webpackJsonp||[]).push([[149,22,23,27,115,126,142],{406:function(e,t,n){"use strict";n.r(t);var r=n(9),l=(n(36),n(72),n(12),{name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)},adsenseTitle:function(){var e=document.querySelector(".o-ad-google-sidebar iframe");e?e.setAttribute("title","Reklama"):setTimeout(this.adsenseTitle,100)}},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,1000)}));case 2:return e.abrupt("return",{});case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){this.adsenseAddLoad(),this.adsenseTitle()}}),c=n(1),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},439:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonmUserHeaderComponent",props:{styleThema:{type:String,required:!0}}},l=n(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-user-header"},[t("div",{staticClass:"skeleton-m-user-header__outer"},[t("div",{staticClass:"skeleton-m-user-header__inner"},[t("div",{staticClass:"skeleton-m-user-header__image"},[t("div",{class:"skeleton-m-user-header__image-file loading-image"+e.styleThema})]),e._v(" "),t("div",{staticClass:"skeleton-m-user-header__text"},[t("span",{class:"skeleton-m-user-header__nickname loading-image"+e.styleThema})])])])])}),[],!1,null,null,null);t.default=component.exports},440:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoUserUrlsComponent",props:{styleThema:{type:String,required:!0}}},l=n(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-user-urls"},[t("div",{staticClass:"skeleton-o-user-urls__outer"},[t("div",{staticClass:"skeleton-o-user-urls__inner"},[t("div",{staticClass:"skeleton-o-user-urls__items"},e._l(3,(function(n){return t("div",{key:n,class:"skeleton-o-user-urls__item loading-image"+e.styleThema})})),0)])])])}),[],!1,null,null,null);t.default=component.exports},580:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmUserHeaderComponent",components:{skeletonmUserHeader:n(439).default},props:{user:{type:Array,required:!0},skeleton:{type:Boolean,required:!1}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}}},l=n(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.user&&!0===e.skeleton?t("skeletonmUserHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}):e._e(),e._v(" "),null!==e.user&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"m-user-header"},[t("div",{staticClass:"m-user-header__outer"},[t("div",{staticClass:"m-user-header__inner"},[t("div",{staticClass:"m-user-header__image"},[t("div",{staticClass:"m-user-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-user-header__text"},[t("span",{staticClass:"m-user-header__nickname"},[e._v(e._s(e.user[0].nickname))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},581:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmNavUserComponent",props:{statusOpen:{type:Boolean,required:!0}}},l=n(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-user",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-user__outer"},[t("div",{staticClass:"m-nav-user__inner"},[t("ul",{staticClass:"m-nav-user__items"},[t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug,"exact-active-class":"-active"}},[e._v("Základní informace")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -post",class:{"-active":"/ucet/profil/clanky"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/clanky","exact-active-class":"-active"}},[e._v("Články")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -video",class:{"-active":"/ucet/profil/videa"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/videa","exact-active-class":"-active"}},[e._v("Videa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -user",class:{"-active":"/ucet/profil/sleduji"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/sleduji","exact-active-class":"-active"}},[e._v("Sleduji")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports},582:function(e,t,n){"use strict";n.r(t);n(22),n(255),n(73);var r={name:"OrganismsoUserUrlsComponent",components:{skeletonoUserUrls:n(440).default},props:{urls:{type:Array,required:!0}}},l=n(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null!==e.urls?t("client-only",[t("div",{staticClass:"o-user-urls"},[t("div",{staticClass:"o-user-urls__outer"},[t("div",{staticClass:"o-user-urls__inner"},[t("div",{staticClass:"o-user-urls__items"},e._l(e.urls,(function(n){return t("div",{key:n.url,staticClass:"o-user-urls__item"},[t("div",{staticClass:"o-user-urls__content"},[t("a",{class:"o-user-urls__link -"+(n.url.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)\//)?n.url.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)\//)[1].replace(/\.\w+$/,""):""),attrs:{href:n.url,title:n.url}},[t("span",{staticClass:"o-user-urls__link-text"},[e._v(e._s(n.url.match(/\/([^\/]+)\/?$/)?n.url.match(/\/([^\/]+)\/?$/)[1]:n.url.replace(/^(https?:\/\/)?(?:www\.)?/,"").replace(/\/$/,"")))])])])])})),0)])])])]):e._e(),e._v(" "),null===e.urls||0===e.urls.length?t("client-only",[e._v("\n        Cestovatel nemá vyplňěné žádné odkazy.\n    ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},801:function(e,t,n){"use strict";n.r(t);var r=n(9),l=(n(36),n(57),n(12),n(72),n(402)),c=n(580),o=n(581),d=n(406),m=n(732),v=n(582),_={name:"CestovatelRecenzeSlugPage",components:{mHeadline:l.default,mUserHeader:c.default,mNavUser:o.default,oAdGoogleSidebar:d.default,oReviewItemListUser:m.default,oUserUrls:v.default},data:function(){return{staticUser:this.staticUser,user:"",mNavUserOpen:!1}},head:function(){var title,e,t,n,r,l;return t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Recenze od ".concat(this.staticUser[0].nickname," | Frytol na cestách"),r=e="Profil cestovatele ".concat(this.staticUser[0].nickname," na cestovatelském portálu Frytol na cestách"),"website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"".concat(this.staticUser[0].nickname+", recenze, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál")},{hid:"og:type",content:"website"},{hid:"og:url",content:l="".concat("https://frytolnacestach.cz","/cestovatel/").concat(this.staticUser[0].slug,"/recenze")},{hid:"og:title",content:n},{hid:"og:description",content:r},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:r},{name:"twitter:image",content:t},{name:"twitter:url",content:l}],link:[{rel:"canonical",href:l}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.prev=1,t.next=4,n.$get("https://api.frytolnacestach.cz/api/user/".concat(r.slug));case 4:return l=t.sent,t.abrupt("return",{staticUser:l});case 8:return t.prev=8,t.t0=t.catch(1),console.log("API ERROR - CESTOVATEL DETAIL(static): ".concat(r.slug)),console.error(t.t0),t.abrupt("return",{staticUser:null});case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},mounted:function(){var e=this;this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,data=null;case 3:if(n){t.next=20;break}return t.prev=4,t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/user/".concat(e.$route.params.slug));case 7:r=t.sent,data={staticUser:r,user:r},n=!0,t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(4),console.log("API ERROR - CESTOVATEL DETAIL: ".concat(e.$route.params.slug)),console.error(t.t0),t.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:t.next=3;break;case 20:Object.assign(e,data);case 21:case"end":return t.stop()}}),t,null,[[4,12]])}))))},methods:{menuUserUpdate:function(e){this.mNavUserOpen=e}}},h=n(1),component=Object(h.a)(_,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-col2"},[t("div",{staticClass:"t-col2__sidebar mb-2 print-section"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[e.user[0]?t("mUserHeader",{attrs:{user:e.staticUser},on:{update:e.menuUserUpdate}}):e._e(),e._v(" "),e.user[0]?e._e():t("mUserHeader",{attrs:{user:null,skeleton:!0}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavUser",{attrs:{statusOpen:e.mNavUserOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-col2__content mb-2"},[t("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oReviewItemListUser",{attrs:{user:e.user}})],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);