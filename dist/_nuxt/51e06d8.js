(window.webpackJsonp=window.webpackJsonp||[]).push([[142,9,17,22,23,33,110,121,124,137],{402:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},593:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonmUserHeaderComponent",props:{styleThema:{type:String,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-user-header"},[t("div",{staticClass:"skeleton-m-user-header__outer"},[t("div",{staticClass:"skeleton-m-user-header__inner"},[t("div",{staticClass:"skeleton-m-user-header__image"},[t("div",{class:"skeleton-m-user-header__image-file loading-image"+e.styleThema})]),e._v(" "),t("div",{staticClass:"skeleton-m-user-header__text"},[t("span",{class:"skeleton-m-user-header__nickname loading-image"+e.styleThema})])])])])}),[],!1,null,null,null);t.default=component.exports},594:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoUserUrlsComponent",props:{styleThema:{type:String,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-user-urls"},[t("div",{staticClass:"skeleton-o-user-urls__outer"},[t("div",{staticClass:"skeleton-o-user-urls__inner"},[t("div",{staticClass:"skeleton-o-user-urls__items"},e._l(3,(function(n){return t("div",{key:n,class:"skeleton-o-user-urls__item loading-image"+e.styleThema})})),0)])])])}),[],!1,null,null,null);t.default=component.exports},598:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmUserHeaderComponent",components:{skeletonmUserHeader:n(593).default},props:{user:{type:Array,required:!0},skeleton:{type:Boolean,required:!1}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.user&&!0===e.skeleton?t("skeletonmUserHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}):e._e(),e._v(" "),null!==e.user&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"m-user-header"},[t("div",{staticClass:"m-user-header__outer"},[t("div",{staticClass:"m-user-header__inner"},[t("div",{staticClass:"m-user-header__image"},[t("div",{staticClass:"m-user-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-user-header__text"},[t("span",{staticClass:"m-user-header__nickname"},[e._v(e._s(e.user[0].nickname))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},599:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmNavUserComponent",props:{statusOpen:{type:Boolean,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-user",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-user__outer"},[t("div",{staticClass:"m-nav-user__inner"},[t("ul",{staticClass:"m-nav-user__items"},[t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug,"exact-active-class":"-active"}},[e._v("Základní informace")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -post",class:{"-active":"/ucet/profil/clanky"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/clanky","exact-active-class":"-active"}},[e._v("Články")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -video",class:{"-active":"/ucet/profil/videa"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/videa","exact-active-class":"-active"}},[e._v("Videa")])],1),e._v(" "),t("li",{staticClass:"m-nav-user__item"},[t("NuxtLink",{staticClass:"js_m-nav-user__link m-nav-user__link -user",class:{"-active":"/ucet/profil/sleduji"===e.$route.path},attrs:{to:"/cestovatel/"+e.$route.params.slug+"/sleduji","exact-active-class":"-active"}},[e._v("Sleduji")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports},600:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoUserUrlsComponent",components:{skeletonoUserUrls:n(594).default},props:{urls:{type:Array,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null!==e.urls?t("client-only",[t("div",{staticClass:"o-user-urls"},[t("div",{staticClass:"o-user-urls__outer"},[t("div",{staticClass:"o-user-urls__inner"},[t("div",{staticClass:"o-user-urls__items"},e._l(e.urls,(function(n){return t("div",{key:n.url,staticClass:"o-user-urls__item"},[t("a",{staticClass:"o-user-urls__link",attrs:{href:n.url,title:n.url}},[e._v(e._s(n.url))])])})),0)])])])]):e._e(),e._v(" "),null===e.urls||0===e.urls.length?t("client-only",[e._v("\n        Cestovatel nemá vyplňěné žádné odkazy.\n    ")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},614:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoArticleListUserComponent",props:{styleThema:{type:String,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-article-list-user"},[t("div",{staticClass:"skeleton-o-article-list-user-list__outer"},[t("div",{staticClass:"skeleton-o-article-list-user__items"},e._l(3,(function(n){return t("div",{key:n,staticClass:"skeleton-o-article-list-user__item"},[t("div",{staticClass:"skeleton-o-article-list-user__item-inner"},[t("div",{class:"skeleton-o-article-list-user__image loading-image"+e.styleThema}),e._v(" "),t("div",{staticClass:"skeleton-o-article-list-user__text"},[t("h3",{class:"skeleton-o-article-list-user__title loading-image"+e.styleThema}),e._v(" "),t("p",{class:"skeleton-o-article-list-user__perex loading-image"+e.styleThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},628:function(e,t,n){"use strict";n.r(t);n(252),n(12),n(57),n(25);var r={name:"OrganismsoArticleListComponent",components:{skeletonoArticleListUser:n(614).default},props:{posts:{type:Array,required:!0},images:{type:Array,required:!0},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},skeleton:{type:Boolean,required:!0}}},l=n(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[e.posts&&0===e.posts.length&&e.skeleton?t("skeletonoArticleListUser",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),null!==e.posts?t("client-only",[t("div",{class:"o-article-list-user"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-article-list-user-list__outer"},[t("div",{staticClass:"o-article-list-user__items"},e._l(e.posts,(function(n){return t("div",{key:n.id,staticClass:"o-article-list-user__item print-section"},[t("div",{staticClass:"o-article-list-user__item-inner"},[t("div",{staticClass:"o-article-list-user__image loading-image -blue"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-article-list-user__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list-user__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"h-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-1240-2x.webp 1240w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.title?n.title:"Obrázek článku"}})]):t("div",{staticClass:"o-article-list-user__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list-user__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.title?n.title:"Obrázek článku"}})]),e._v(" "),n.slug?t("NuxtLink",{staticClass:"o-article-list-user__image-link",attrs:{to:"/clanky/".concat(n.slug),"aria-label":"Přečti si článek ".concat(n.title)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-article-list-user__text"},[n.title?t("h3",{staticClass:"o-article-list-user__title"},[t("NuxtLink",{staticClass:"o-article-list-user__title-link",attrs:{to:"/clanky/".concat(n.slug)}},[e._v(e._s(n.title))])],1):e._e(),e._v(" "),n.perex?t("p",{staticClass:"o-article-list-user__perex"},[t("NuxtLink",{staticClass:"o-article-list-user__perex-link",attrs:{to:"/clanky/".concat(n.slug)}},[e._v(e._s(n.perex))])],1):e._e()])])])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},788:function(e,t,n){"use strict";n.r(t);var r=n(9),l=(n(39),n(57),n(40),n(12),n(58),n(154),n(75),n(402)),c=n(598),o=n(599),m=n(600),d=n(628),_={name:"CestovateleVideaSlugPage",components:{mHeadline:l.default,mUserHeader:c.default,mNavUser:o.default,oUserUrls:m.default,oArticleListUser:d.default},data:function(){return{staticUser:this.staticUser,user:"",posts:[],images:[],mNavUserOpen:!1,skeleton:!0}},head:function(){var title,e;return"https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Články od ".concat(this.staticUser[0].nickname," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:e="Profil cestovatele ".concat(this.staticUser[0].nickname," na cestovatelském portálu Frytol na cestách")},{name:"keywords",content:"".concat(this.staticUser[0].nickname+", články, cestovatel, uživatel, cestování, svět, rady, cestovatelský portál")},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:e},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/cestovatel/").concat(this.staticUser[0].slug,"/clanky")},{hid:"og:type",content:"website"}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.prev=1,t.next=4,n.$get("https://api.frytolnacestach.cz/api/user/".concat(r.slug));case 4:return l=t.sent,t.abrupt("return",{staticUser:l});case 8:return t.prev=8,t.t0=t.catch(1),console.log("API ERROR - CESTOVATEL DETAIL(static): ".concat(r.slug)),console.error(t.t0),t.abrupt("return",{staticUser:null});case 13:case"end":return t.stop()}}),t,null,[[1,8]])})))()},mounted:function(){var e=this;this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r,l,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,data=null;case 3:if(n){t.next=28;break}return t.prev=4,t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/user/".concat(e.$route.params.slug));case 7:return r=t.sent,t.next=10,e.$axios.$get("https://api.frytolnacestach.cz/api/posts-id-user/".concat(r[0].id));case 10:return l=t.sent,c=l.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=14,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(c.join(",")));case 14:o=t.sent,data={staticUser:r,user:r,posts:l,images:o},e.skeleton=!1,n=!0,t.next=26;break;case 20:return t.prev=20,t.t0=t.catch(4),console.log("API ERROR - CESTOVATEL ČLÁNKY DETAIL: ".concat(e.$route.params.slug)),console.error(t.t0),t.next=26,new Promise((function(e){return setTimeout(e,1e3)}));case 26:t.next=3;break;case 28:Object.assign(e,data);case 29:case"end":return t.stop()}}),t,null,[[4,20]])}))))},methods:{menuUserUpdate:function(e){this.mNavUserOpen=e}}},h=n(2),component=Object(h.a)(_,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-col2"},[t("div",{staticClass:"t-col2__sidebar mb-2 print-section"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[e.user[0]?t("mUserHeader",{attrs:{user:e.staticUser},on:{update:e.menuUserUpdate}}):e._e(),e._v(" "),e.user[0]?e._e():t("mUserHeader",{attrs:{user:null,skeleton:!0}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavUser",{attrs:{statusOpen:e.mNavUserOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-col2__content mb-2"},[t("section",{staticClass:"t-section -padding-x -p0 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Články",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),e.posts&&null!==e.posts?t("oArticleListUser",{attrs:{posts:e.posts,images:e.images,skeleton:e.skeleton}}):e._e(),e._v(" "),0!==e.posts.length&&null!==e.posts||e.skeleton?e._e():t("client-only",[t("p",[e._v("\n                                    Cestovatel zatím nepřidal žádný článek.\n                                ")])])],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);