(window.webpackJsonp=window.webpackJsonp||[]).push([[195,9,12,17,18,111,118,137],{403:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[t.title&&"h1"===t.styleSize?e("h1",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.title&&"h2"===t.styleSize?e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);var c={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):"span"===t.target?e("span",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print"},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonmAccountHeaderComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-m-account-header"},[e("div",{staticClass:"skeleton-m-account-header__outer"},[e("div",{staticClass:"skeleton-m-account-header__inner"},[e("div",{staticClass:"skeleton-m-account-header__image"},[e("div",{class:"skeleton-m-account-header__image-file loading-image"+t.styleThema})]),t._v(" "),e("div",{staticClass:"skeleton-m-account-header__text"},[e("span",{class:"skeleton-m-account-header__nickname loading-image"+t.styleThema}),t._v(" "),e("span",{class:"skeleton-m-account-header__email loading-image"+t.styleThema})])])])])}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(9);n(39),n(12);function o(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,o,l,r,d,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("accountEmail"),c=localStorage.getItem("accountPasswordHash"),o=localStorage.getItem("accountStatus"),l=localStorage.getItem("accountNickname"),!n||"undefined"==n){t.next=27;break}return t.prev=5,t.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:l})});case 8:(r=t.sent).ok?(console.log("Přihlášení stále aktivní"),(d=new Date).setMonth(d.getMonth()+1),m="expires="+d,localStorage.setItem("accountEmail",n),localStorage.setItem("accountPasswordHash",c),localStorage.setItem("accountStatus",o),localStorage.setItem("accountNickname",l),document.cookie="FNCaccountEmail="+n+";"+m,document.cookie="FNCaccountPasswordHash="+c+";"+m,document.cookie="FNCaccountStatus="+o+";"+m,document.cookie="FNCaccountNickname="+l+";"+m):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")),t.next=25;break;case 12:throw t.prev=12,t.t0=t.catch(5),console.log(t.t0),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni"),t.t0;case 25:t.next=37;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni");case 37:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}},411:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmAccountHeaderComponent",components:{skeletonmAccountHeader:n(409).default},props:{account:{type:Array,required:!0}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var t=this.parentVariable;this.$emit("update",t)}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.account&&0!==t.account.length?t._e():e("skeletonmAccountHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}),t._v(" "),t.account&&0!==t.account.length?e("client-only",[e("div",{staticClass:"m-account-header"},[e("div",{staticClass:"m-account-header__outer"},[e("div",{staticClass:"m-account-header__inner"},[e("div",{staticClass:"m-account-header__image"},[e("div",{staticClass:"m-account-header__image-file"})]),t._v(" "),e("div",{staticClass:"m-account-header__text"},[e("span",{staticClass:"m-account-header__nickname"},[t._v(t._s(t.account[0].nickname))]),t._v(" "),e("span",{staticClass:"m-account-header__email"},[t._v(t._s(t.account[0].email))])]),t._v(" "),e("div",{staticClass:"m-account-header__nav",class:{"-open":t.parentVariable},on:{click:function(e){return t.updateParentVariable()}}},[e("span",{staticClass:"m-account-header__nav-icon"})])])])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},methods:{logout:function(){localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-account",class:{"-open":t.statusOpen},attrs:{role:"navigation"}},[e("div",{staticClass:"m-nav-account__outer"},[e("div",{staticClass:"m-nav-account__inner"},[e("ul",{staticClass:"m-nav-account__items"},[e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===t.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[t._v("Základní informace")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trophy",class:{"-active":"/ucet/profil/achievementy"===t.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[t._v("Achievementy")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===t.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[t._v("Navštívená místa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===t.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[t._v("Chci navštívit")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===t.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[t._v("Sleduji")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===t.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[t._v("Recenzoval jsem")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -post",class:{"-active":"/ucet/profil/clanky"===t.$route.path},attrs:{to:"/ucet/profil/clanky","exact-active-class":"-active"}},[t._v("Články")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -video",class:{"-active":"/ucet/profil/videa"===t.$route.path},attrs:{to:"/ucet/profil/videa","exact-active-class":"-active"}},[t._v("Videa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===t.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[t._v("Změna hesla")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===t.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[t._v("Moje data")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[t._v("Smazaní účtu")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item -logout"},[e("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:t.logout}},[t._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);e.default=component.exports},593:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonoVideoListUserComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-o-video-list-user"},[e("div",{staticClass:"skeleton-o-video-list-user__outer"},[e("div",{staticClass:"skeleton-o-video-list-user__items"},t._l(3,(function(n){return e("div",{key:n,staticClass:"skeleton-o-video-list-user__item"},[e("div",{staticClass:"skeleton-o-video-list-user__item-inner"},[e("div",{class:"skeleton-o-video-list-user__image loading-image"+t.styleThema}),t._v(" "),e("div",{staticClass:"skeleton-o-video-list-user__text"},[e("h3",{class:"skeleton-o-video-list-user__title loading-image"+t.styleThema})])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},615:function(t,e,n){"use strict";n.r(e);n(252),n(12),n(57),n(25),n(253),n(40);var c={name:"OrganismsoVideoListComponent",components:{skeletonoVideoListUser:n(593).default},props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},skeleton:{type:Boolean,required:!1},skeletonThema:{type:String,required:!1},skeletonNumber:{type:Number,required:!1}},computed:{filteredVideos:function(){var t=this;return this.type?this.videos.filter((function(video){return video.type===t.type})):this.videos}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.filteredVideos&&0===t.filteredVideos.length&&t.skeleton?e("skeletonoVideoListUser",{attrs:{styleThema:t.skeletonThema?t.skeletonThema:"",skeletonNumber:t.skeletonNumber}}):t._e(),t._v(" "),null===t.filteredVideos||null===t.videos||t.skeleton?t._e():e("client-only",[e("div",{staticClass:"o-video-list-user"},[e("div",{staticClass:"o-video-list-user__outer"},[e("div",{staticClass:"o-video-list-user__items"},t._l(t.filteredVideos,(function(video){return e("div",{key:video.id,staticClass:"o-video-list-user__item print-section"},[e("div",{staticClass:"o-video-list-user__item-inner"},[e("div",{staticClass:"o-video-list-user__image loading-image -blue"},[t.images&&t.images.find((function(image){return image.id===video.id_image}))?e("div",{staticClass:"o-video-list-user__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list-user__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+"h-"+t.images.find((function(image){return image.id===video.id_image})).name,"-1240-2x.webp 1240w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):e("div",{staticClass:"o-video-list-user__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list-user__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),t._v(" "),video.slug?e("NuxtLink",{staticClass:"o-video-list-user__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-video-list-user__text"},[video.title?e("h3",{staticClass:"o-video-list-user__title"},[e("NuxtLink",{staticClass:"o-video-list-user__title-link",attrs:{to:"/videa/".concat(video.slug)}},[t._v(t._s(video.title))])],1):t._e()])])])})),0)])])])],1)}),[],!1,null,null,null);e.default=component.exports},767:function(t,e,n){"use strict";n.r(e);var c=n(9),o=(n(39),n(40),n(12),n(58),n(154),n(74),n(410)),l=n(411),r=n(403),d=n(412),m=n(615),h={name:"UcetVideaPage",components:{mAccountHeader:l.default,mHeadline:r.default,mNavAccount:d.default,oVideoListUser:m.default},data:function(){return{account:[],mNavAccountOpen:!1,videos:[],images:[],skeleton:!0}},head:function(){var title,t;return"můj profil, videa, cestovatelský portál, statistiky","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="VIDEA | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:t="Videa na cetovatelském portálu Frytol na cestách."},{name:"keywords",content:"můj profil, videa, cestovatelský portál, statistiky"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:t},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]}},mounted:function(){Object(o.a)(this.$router)},methods:{fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.account||0===t.account.length){e.next=11;break}return e.next=5,t.$axios.$get("https://api.frytolnacestach.cz/api/videos-id-user/".concat(t.account[0].id));case 5:return t.videos=e.sent,t.imagesVideosIDS=t.videos.map((function(video){return video.id_image})).filter((function(t){return null!==t&&""!==t})),e.next=9,t.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(t.imagesVideosIDS.join(",")));case 9:t.images=e.sent,t.skeleton=!1;case 11:e.next=19;break;case 13:return e.prev=13,e.t0=e.catch(0),console.log("API ERROR - MOJE VIDEA"),console.error(e.t0),e.next=19,new Promise((function(t){return setTimeout(t,1e3)}));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},menuAccountUpdate:function(t){this.mNavAccountOpen=t}},watch:{account:{handler:"fetchData",immediate:!0},"$store.state.account":{deep:!0,immediate:!0,handler:function(){this.account=this.$store.state.account}}}},_=n(2),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -account"},[e("div",{staticClass:"t-grid__section -nav"},[e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mAccountHeader",{attrs:{account:t.account},on:{update:t.menuAccountUpdate}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavAccount",{attrs:{statusOpen:t.mNavAccountOpen}})],1)])]),t._v(" "),e("div",{staticClass:"t-grid__section -content"},[e("section",{staticClass:"t-section -padding-x -p0 pb-4"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Videa",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),t.videos&&null!==t.videos?e("oVideoListUser",{attrs:{videos:t.videos,images:t.images,skeletonThema:" -skeleton-blue",skeleton:t.skeleton}}):t._e(),t._v(" "),0!==t.videos.length&&null!==t.videos||t.skeleton?t._e():e("client-only",[e("p",[t._v("\n                                    Zatím si nepřidal žádné video.\n                                ")])])],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);