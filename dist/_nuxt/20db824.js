(window.webpackJsonp=window.webpackJsonp||[]).push([[192,9,12,17,18,54,117,127],{403:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[t.title&&"h1"===t.styleSize?e("h1",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.title&&"h2"===t.styleSize?e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);var c={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):"span"===t.target?e("span",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print"},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonmAccountHeaderComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-m-account-header"},[e("div",{staticClass:"skeleton-m-account-header__outer"},[e("div",{staticClass:"skeleton-m-account-header__inner"},[e("div",{staticClass:"skeleton-m-account-header__image"},[e("div",{class:"skeleton-m-account-header__image-file loading-image"+t.styleThema})]),t._v(" "),e("div",{staticClass:"skeleton-m-account-header__text"},[e("span",{class:"skeleton-m-account-header__nickname loading-image"+t.styleThema}),t._v(" "),e("span",{class:"skeleton-m-account-header__email loading-image"+t.styleThema})])])])])}),[],!1,null,null,null);e.default=component.exports},410:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(9);n(39),n(12);function o(t){return r.apply(this,arguments)}function r(){return(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,o,r,l,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("accountEmail"),c=localStorage.getItem("accountPasswordHash"),o=localStorage.getItem("accountStatus"),r=localStorage.getItem("accountNickname"),!n||"undefined"==n){t.next=27;break}return t.prev=5,t.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:r})});case 8:(l=t.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("accountEmail",n),localStorage.setItem("accountPasswordHash",c),localStorage.setItem("accountStatus",o),localStorage.setItem("accountNickname",r),document.cookie="FNCaccountEmail="+n+";"+d,document.cookie="FNCaccountPasswordHash="+c+";"+d,document.cookie="FNCaccountStatus="+o+";"+d,document.cookie="FNCaccountNickname="+r+";"+d):401===l.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):404===l.status?(console.log("Uživatel nenalezen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")),t.next=25;break;case 12:throw t.prev=12,t.t0=t.catch(5),console.log(t.t0),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni"),t.t0;case 25:t.next=37;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni");case 37:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}},411:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmAccountHeaderComponent",components:{skeletonmAccountHeader:n(409).default},props:{account:{type:Array,required:!0}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var t=this.parentVariable;this.$emit("update",t)}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.account&&0!==t.account.length?t._e():e("skeletonmAccountHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}),t._v(" "),t.account&&0!==t.account.length?e("client-only",[e("div",{staticClass:"m-account-header"},[e("div",{staticClass:"m-account-header__outer"},[e("div",{staticClass:"m-account-header__inner"},[e("div",{staticClass:"m-account-header__image"},[e("div",{staticClass:"m-account-header__image-file"})]),t._v(" "),e("div",{staticClass:"m-account-header__text"},[e("span",{staticClass:"m-account-header__nickname"},[t._v(t._s(t.account[0].nickname))]),t._v(" "),e("span",{staticClass:"m-account-header__email"},[t._v(t._s(t.account[0].email))])]),t._v(" "),e("div",{staticClass:"m-account-header__nav",class:{"-open":t.parentVariable},on:{click:function(e){return t.updateParentVariable()}}},[e("span",{staticClass:"m-account-header__nav-icon"})])])])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},methods:{logout:function(){localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-account",class:{"-open":t.statusOpen},attrs:{role:"navigation"}},[e("div",{staticClass:"m-nav-account__outer"},[e("div",{staticClass:"m-nav-account__inner"},[e("ul",{staticClass:"m-nav-account__items"},[e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===t.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[t._v("Základní informace")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trophy",class:{"-active":"/ucet/profil/achievementy"===t.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[t._v("Achievementy")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===t.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[t._v("Navštívená místa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===t.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[t._v("Chci navštívit")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===t.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[t._v("Sleduji")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===t.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[t._v("Recenzoval jsem")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -post",class:{"-active":"/ucet/profil/clanky"===t.$route.path},attrs:{to:"/ucet/profil/clanky","exact-active-class":"-active"}},[t._v("Články")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -video",class:{"-active":"/ucet/profil/videa"===t.$route.path},attrs:{to:"/ucet/profil/videa","exact-active-class":"-active"}},[t._v("Videa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===t.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[t._v("Změna hesla")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===t.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[t._v("Moje data")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[t._v("Smazaní účtu")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item -logout"},[e("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:t.logout}},[t._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);e.default=component.exports},592:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonoFollowerListComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-o-follower-list"},[e("div",{staticClass:"skeleton-o-follower-list__outer"},[e("div",{staticClass:"skeleton-o-follower-list__items"},t._l(5,(function(n){return e("div",{key:n,staticClass:"skeleton-o-follower-list__item"},[e("div",{staticClass:"skeleton-o-follower-list__content-outer"},[e("div",{staticClass:"skeleton-o-follower-list__content-inner"},[e("div",{class:"skeleton-o-follower-list__image loading-image"+t.styleThema})])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},613:function(t,e,n){"use strict";n.r(e);n(252),n(12),n(57),n(25);var c=n(9),o=(n(39),n(253),n(40),n(58),n(154),n(74),{name:"OrganismsoFollowerListComponent",components:{skeletonoFollowerList:n(592).default},props:{account:{type:Array,required:!0},type:{type:String,required:!0},idUser:{type:Number,required:!1}},data:function(){return{skeleton:!0,followers:[],users:[]}},methods:{fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"account"!==t.type){e.next=15;break}if(!t.account||0===t.account.length){e.next=13;break}return e.next=6,t.$axios.$get("https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=".concat(t.account[0].id));case 6:if(t.followers=e.sent,!t.followers||0===t.followers.length){e.next=12;break}return n=t.followers.map((function(t){return t.id_follower})).filter((function(t){return null!==t&&""!==t})),e.next=11,t.$axios.$get("https://api.frytolnacestach.cz/api/users-ids?id=".concat(n.join(",")));case 11:t.users=e.sent;case 12:t.skeleton=!1;case 13:e.next=25;break;case 15:return e.next=18,t.$axios.$get("https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=".concat(t.idUser));case 18:if(t.followers=e.sent,!t.followers||0===t.followers.length){e.next=24;break}return c=t.followers.map((function(t){return t.id_follower})).filter((function(t){return null!==t&&""!==t})),e.next=23,t.$axios.$get("https://api.frytolnacestach.cz/api/users-ids?id=".concat(c.join(",")));case 23:t.users=e.sent;case 24:t.skeleton=!1;case 25:e.next=33;break;case 27:return e.prev=27,e.t0=e.catch(0),console.log("API ERROR - SLEDUJI"),console.error(e.t0),e.next=33,new Promise((function(t){return setTimeout(t,1e3)}));case 33:case"end":return e.stop()}}),e,null,[[0,27]])})))()}},watch:{account:{handler:"fetchData",immediate:!0}}}),r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.skeleton?e("skeletonoFollowerList",{attrs:{styleThema:" -skeleton-blue"}}):t._e(),t._v(" "),t.skeleton?t._e():e("client-only",[e("div",{staticClass:"o-follower-list"},[e("div",{staticClass:"o-follower-list__outer"},[e("div",{staticClass:"o-follower-list__inner"},[e("div",{staticClass:"o-follower-list__items"},t._l(t.users,(function(n){return e("div",{key:n.id,staticClass:"o-follower-list__item"},[e("div",{staticClass:"o-follower-list__content-outer"},[e("div",{staticClass:"o-follower-list__content-inner"},[e("div",{staticClass:"o-follower-list__image"},[t.images&&t.images.find((function(image){return image.id===n.id_image_cover}))?e("div",{staticClass:"o-follower-list__image-lazyload loading-image -blue"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-follower-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 160w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 216w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 230w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 224w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 220w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 320w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 432w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 460w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 448w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 440w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w \n\n                                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.nickname}}),t._v(" "),e("NuxtLink",{staticClass:"o-follower-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1):e("div",{staticClass:"o-follower-list__image-lazyload loading-image -blue"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-follower-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 160w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 216w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 230w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 224w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 220w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 320w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 432w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 460w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 448w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 440w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                                    https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w \n                                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.nickname}}),t._v(" "),e("NuxtLink",{staticClass:"o-follower-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1)]),t._v(" "),e("div",{staticClass:"o-follower-list__text"},[e("span",{staticClass:"o-follower-list__nickname"},[e("NuxtLink",{staticClass:"o-follower-list__nickname-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}},[t._v(t._s(n.nickname))])],1)])])])])})),0)])])])]),t._v(" "),0!==t.users.length||t.skeleton?t._e():e("client-only",["account"===t.type?e("p",[t._v("\n            Zatím nikoho nesleduješ\n        ")]):e("p",[t._v("\n            Cestovatel zatím nikoho nesleduje.\n        ")])])],1)}),[],!1,null,null,null);e.default=component.exports},764:function(t,e,n){"use strict";n.r(e);var c=n(410),o=n(411),r=n(403),l=n(412),m=n(613),d={name:"UcetSledujiPage",components:{mAccountHeader:o.default,mHeadline:r.default,mNavAccount:l.default,oFollowerList:m.default},data:function(){return{account:[],mNavAccountOpen:!1}},head:function(){var title,t;return"můj profil, sleduji, cestovatelský portál, statistiky","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="SLEDUJI | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:t="Sleduji na cetovatelském portálu Frytol na cestách."},{name:"keywords",content:"můj profil, sleduji, cestovatelský portál, statistiky"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:t},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]}},mounted:function(){Object(c.a)(this.$router)},methods:{menuAccountUpdate:function(t){this.mNavAccountOpen=t}},watch:{"$store.state.account":{deep:!0,immediate:!0,handler:function(){this.account=this.$store.state.account}}}},_=n(2),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -account"},[e("div",{staticClass:"t-grid__section -nav"},[e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mAccountHeader",{attrs:{account:t.account},on:{update:t.menuAccountUpdate}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavAccount",{attrs:{statusOpen:t.mNavAccountOpen}})],1)])]),t._v(" "),e("div",{staticClass:"t-grid__section -content"},[e("section",{staticClass:"t-section -padding-x -p0 pb-4"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Sleduji",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oFollowerList",{attrs:{account:t.account,type:"account"}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);