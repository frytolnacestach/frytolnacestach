(window.webpackJsonp=window.webpackJsonp||[]).push([[213,10,12,14,19,20,60,124,134],{402:function(t,e,n){"use strict";n.r(e);n(154),n(57),n(58);var c={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(t){var e=this;return"2x"===t?this.sizes.map((function(t){return"https://image.frytolnacestach.cz/storage/".concat(e.imageSource+t.orientation+e.imageName,"-").concat(2*t.imageWidth,"-2x.webp ").concat(2*t.elementWidth,"w")})).join(", "):this.sizes.map((function(t){return"https://image.frytolnacestach.cz/storage/".concat(e.imageSource+t.orientation+e.imageName,"-").concat(t.imageWidth,".webp ").concat(t.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(t,e){return null===t.mediaQueriesWidth?"".concat(t.elementWidth,"px"):"(max-width: ".concat(t.mediaQueriesWidth,"px) ").concat(t.elementWidth,"px")})).join(", ")}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return t.lazy?e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:t.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":t.generateSizes(),"data-srcset":t.generateSrcSet()+","+t.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+t.imageSource+t.imageName+".webp",alt:t.author}}):t.lazy?t._e():e("img",{class:t.cssClassComponent+"__image-file",attrs:{sizes:t.generateSizes(),srcset:t.generateSrcSet()+","+t.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+t.imageSource+t.imageName+".webp",alt:t.author,fetchpriority:"high"}})}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var c={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):"span"===t.target?e("span",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print"},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[t.title&&"h1"===t.styleSize?e("h1",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.title&&"h2"===t.styleSize?e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonmAccountHeaderComponent",props:{styleThema:{type:String,required:!0}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-m-account-header"},[e("div",{staticClass:"skeleton-m-account-header__outer"},[e("div",{staticClass:"skeleton-m-account-header__inner"},[e("div",{staticClass:"skeleton-m-account-header__image"},[e("div",{class:"skeleton-m-account-header__image-file loading-image"+t.styleThema})]),t._v(" "),e("div",{staticClass:"skeleton-m-account-header__text"},[e("span",{class:"skeleton-m-account-header__nickname loading-image"+t.styleThema}),t._v(" "),e("span",{class:"skeleton-m-account-header__email loading-image"+t.styleThema})])])])])}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(9);n(36),n(12);function o(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,o,l,r,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("accountEmail"),c=localStorage.getItem("accountPasswordHash"),o=localStorage.getItem("accountStatus"),l=localStorage.getItem("accountNickname"),!n||"undefined"==n){t.next=27;break}return t.prev=5,t.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:l})});case 8:(r=t.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("accountEmail",n),localStorage.setItem("accountPasswordHash",c),localStorage.setItem("accountStatus",o),localStorage.setItem("accountNickname",l),document.cookie="FNCaccountEmail="+n+";"+d,document.cookie="FNCaccountPasswordHash="+c+";"+d,document.cookie="FNCaccountStatus="+o+";"+d,document.cookie="FNCaccountNickname="+l+";"+d):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")),t.next=25;break;case 12:throw t.prev=12,t.t0=t.catch(5),console.log(t.t0),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni"),t.t0;case 25:t.next=37;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni");case 37:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}},423:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmAccountHeaderComponent",components:{skeletonmAccountHeader:n(420).default},props:{account:{type:Array,required:!0}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var t=this.parentVariable;this.$emit("update",t)}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.account&&0!==t.account.length?t._e():e("skeletonmAccountHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}),t._v(" "),t.account&&0!==t.account.length?e("client-only",[e("div",{staticClass:"m-account-header"},[e("div",{staticClass:"m-account-header__outer"},[e("div",{staticClass:"m-account-header__inner"},[e("div",{staticClass:"m-account-header__image"},[e("div",{staticClass:"m-account-header__image-file"})]),t._v(" "),e("div",{staticClass:"m-account-header__text"},[e("span",{staticClass:"m-account-header__nickname"},[t._v(t._s(t.account[0].nickname))]),t._v(" "),e("span",{staticClass:"m-account-header__email"},[t._v(t._s(t.account[0].email))])]),t._v(" "),e("div",{staticClass:"m-account-header__nav",class:{"-open":t.parentVariable},on:{click:function(e){return t.updateParentVariable()}}},[e("span",{staticClass:"m-account-header__nav-icon"})])])])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},methods:{logout:function(){localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-account",class:{"-open":t.statusOpen},attrs:{role:"navigation"}},[e("div",{staticClass:"m-nav-account__outer"},[e("div",{staticClass:"m-nav-account__inner"},[e("ul",{staticClass:"m-nav-account__items"},[e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===t.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[t._v("Základní informace")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trophy",class:{"-active":"/ucet/profil/achievementy"===t.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[t._v("Achievementy")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===t.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[t._v("Navštívená místa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===t.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[t._v("Chci navštívit")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===t.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[t._v("Sleduji")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===t.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[t._v("Recenzoval jsem")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -post",class:{"-active":"/ucet/profil/clanky"===t.$route.path},attrs:{to:"/ucet/profil/clanky","exact-active-class":"-active"}},[t._v("Články")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -video",class:{"-active":"/ucet/profil/videa"===t.$route.path},attrs:{to:"/ucet/profil/videa","exact-active-class":"-active"}},[t._v("Videa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===t.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[t._v("Změna hesla")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===t.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[t._v("Moje data")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[t._v("Smazaní účtu")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item -logout"},[e("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:t.logout}},[t._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);e.default=component.exports},602:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonoFollowerListComponent",props:{styleThema:{type:String,required:!0}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-o-follower-list"},[e("div",{staticClass:"skeleton-o-follower-list__outer"},[e("div",{staticClass:"skeleton-o-follower-list__items"},t._l(5,(function(n){return e("div",{key:n,staticClass:"skeleton-o-follower-list__item"},[e("div",{staticClass:"skeleton-o-follower-list__content-outer"},[e("div",{staticClass:"skeleton-o-follower-list__content-inner"},[e("div",{class:"skeleton-o-follower-list__image loading-image"+t.styleThema})])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},620:function(t,e,n){"use strict";n.r(e);n(253),n(12),n(25);var c=n(9),o=(n(36),n(254),n(41),n(57),n(154),n(72),n(602)),l=n(402),r={name:"OrganismsoFollowerListComponent",components:{skeletonoFollowerList:o.default,aImage:l.default},props:{account:{type:Array,required:!0},type:{type:String,required:!0},idUser:{type:Number,required:!1}},data:function(){return{skeleton:!0,followers:[],users:[],imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:186},{mediaQueriesWidth:459,elementWidth:216},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:230},{mediaQueriesWidth:991,elementWidth:224},{mediaQueriesWidth:1219,elementWidth:220},{mediaQueriesWidth:1399,elementWidth:256},{mediaQueriesWidth:null,elementWidth:360}],imageSizes:[{elementWidth:160,imageWidth:186,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:186,imageWidth:186,orientation:"s-"},{elementWidth:216,imageWidth:230,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:230,imageWidth:230,orientation:"s-"},{elementWidth:224,imageWidth:230,orientation:"s-"},{elementWidth:220,imageWidth:230,orientation:"s-"},{elementWidth:256,imageWidth:256,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"}]}},methods:{fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"account"!==t.type){e.next=15;break}if(!t.account||0===t.account.length){e.next=13;break}return e.next=6,t.$axios.$get("https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=".concat(t.account[0].id));case 6:if(t.followers=e.sent,!t.followers||0===t.followers.length){e.next=12;break}return n=t.followers.map((function(t){return t.id_follower})).filter((function(t){return null!==t&&""!==t})),e.next=11,t.$axios.$get("https://api.frytolnacestach.cz/api/users-ids?id=".concat(n.join(",")));case 11:t.users=e.sent;case 12:t.skeleton=!1;case 13:e.next=25;break;case 15:return e.next=18,t.$axios.$get("https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=".concat(t.idUser));case 18:if(t.followers=e.sent,!t.followers||0===t.followers.length){e.next=24;break}return c=t.followers.map((function(t){return t.id_follower})).filter((function(t){return null!==t&&""!==t})),e.next=23,t.$axios.$get("https://api.frytolnacestach.cz/api/users-ids?id=".concat(c.join(",")));case 23:t.users=e.sent;case 24:t.skeleton=!1;case 25:e.next=33;break;case 27:return e.prev=27,e.t0=e.catch(0),console.log("API ERROR - SLEDUJI"),console.error(e.t0),e.next=33,new Promise((function(t){return setTimeout(t,1e3)}));case 33:case"end":return e.stop()}}),e,null,[[0,27]])})))()}},watch:{account:{handler:"fetchData",immediate:!0}}},m=n(1),component=Object(m.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.skeleton?e("skeletonoFollowerList",{attrs:{styleThema:" -skeleton-blue"}}):t._e(),t._v(" "),t.skeleton?t._e():e("client-only",[e("div",{staticClass:"o-follower-list"},[e("div",{staticClass:"o-follower-list__outer"},[e("div",{staticClass:"o-follower-list__inner"},[e("div",{staticClass:"o-follower-list__items"},t._l(t.users,(function(n){return e("div",{key:n.id,staticClass:"o-follower-list__item"},[e("div",{staticClass:"o-follower-list__content-outer"},[e("div",{staticClass:"o-follower-list__content-inner"},[e("div",{staticClass:"o-follower-list__image"},[t.images&&t.images.find((function(image){return image.id===n.id_image_cover}))?e("div",{staticClass:"o-follower-list__image-lazyload loading-image -blue"},[e("aImage",{attrs:{alt:n.nickname?n.nickname:"Cestovatel",author:t.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:t.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:t.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:t.imageSizes,srcSet:t.imageSizesMedia,cssClassComponent:"o-follower-list"}}),t._v(" "),e("NuxtLink",{staticClass:"o-follower-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1):e("div",{staticClass:"o-follower-list__image-lazyload loading-image -blue"},[e("aImage",{attrs:{alt:n.nickname?n.nickname:"Cestovatel",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:t.imageSizes,srcSet:t.imageSizesMedia,cssClassComponent:"o-follower-list"}}),t._v(" "),e("NuxtLink",{staticClass:"o-follower-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1)]),t._v(" "),e("div",{staticClass:"o-follower-list__text"},[e("span",{staticClass:"o-follower-list__nickname"},[e("NuxtLink",{staticClass:"o-follower-list__nickname-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}},[t._v(t._s(n.nickname))])],1)])])])])})),0)])])])]),t._v(" "),0!==t.users.length||t.skeleton?t._e():e("client-only",["account"===t.type?e("p",[t._v("\n            Zatím nikoho nesleduješ\n        ")]):e("p",[t._v("\n            Cestovatel zatím nikoho nesleduje.\n        ")])])],1)}),[],!1,null,null,null);e.default=component.exports},770:function(t,e,n){"use strict";n.r(e);var c=n(421),o=n(423),l=n(404),r=n(424),m=n(620),d={name:"UcetSledujiPage",components:{mAccountHeader:o.default,mHeadline:l.default,mNavAccount:r.default,oFollowerList:m.default},data:function(){return{account:[],mNavAccountOpen:!1}},head:function(){var title,t,e,n,c,o;return"můj profil, sleduji, cestovatelský portál, statistiky",e="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="SLEDUJI | Cestovatelský portál Frytol na cestách",c=t="Sleduji na cetovatelském portálu Frytol na cestách.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{name:"keywords",content:"můj profil, sleduji, cestovatelský portál, statistiky"},{hid:"og:type",content:"website"},{hid:"og:url",content:o="".concat("https://frytolnacestach.cz")},{hid:"og:title",content:n},{hid:"og:description",content:c},{property:"og:image",content:e},{name:"twitter:title",content:n},{name:"twitter:description",content:c},{name:"twitter:image",content:e},{name:"twitter:url",content:o}],link:[{rel:"canonical",href:o}]}},mounted:function(){Object(c.a)(this.$router)},methods:{menuAccountUpdate:function(t){this.mNavAccountOpen=t}},watch:{"$store.state.account":{deep:!0,immediate:!0,handler:function(){this.account=this.$store.state.account}}}},_=n(1),component=Object(_.a)(d,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[e("div",{staticClass:"t-main__content"},[e("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -account"},[e("div",{staticClass:"t-grid__section -nav"},[e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mAccountHeader",{attrs:{account:t.account},on:{update:t.menuAccountUpdate}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavAccount",{attrs:{statusOpen:t.mNavAccountOpen}})],1)])]),t._v(" "),e("div",{staticClass:"t-grid__section -content"},[e("section",{staticClass:"t-section -padding-x -p0 pb-4"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Sleduji",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oFollowerList",{attrs:{account:t.account,type:"account"}})],1)])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);