(window.webpackJsonp=window.webpackJsonp||[]).push([[213,12,18,124],{422:function(t,e,c){"use strict";c.r(e);var n={name:"SkeletonmAccountHeaderComponent",props:{styleThema:{type:String,required:!0}}},o=c(1),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-m-account-header"},[e("div",{staticClass:"skeleton-m-account-header__outer"},[e("div",{staticClass:"skeleton-m-account-header__inner"},[e("div",{staticClass:"skeleton-m-account-header__image"},[e("div",{class:"skeleton-m-account-header__image-file loading-image"+t.styleThema})]),t._v(" "),e("div",{staticClass:"skeleton-m-account-header__text"},[e("span",{class:"skeleton-m-account-header__nickname loading-image"+t.styleThema}),t._v(" "),e("span",{class:"skeleton-m-account-header__email loading-image"+t.styleThema})])])])])}),[],!1,null,null,null);e.default=component.exports},423:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c(9);c(36),c(12);function o(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var c,n,o,l,r,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=localStorage.getItem("accountEmail"),n=localStorage.getItem("accountPasswordHash"),o=localStorage.getItem("accountStatus"),l=localStorage.getItem("accountNickname"),!c||"undefined"==c){t.next=27;break}return t.prev=5,t.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:c,password:n,status:o,nickname:l})});case 8:(r=t.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("accountEmail",c),localStorage.setItem("accountPasswordHash",n),localStorage.setItem("accountStatus",o),localStorage.setItem("accountNickname",l),document.cookie="FNCaccountEmail="+c+";"+d,document.cookie="FNCaccountPasswordHash="+n+";"+d,document.cookie="FNCaccountStatus="+o+";"+d,document.cookie="FNCaccountNickname="+l+";"+d):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")),t.next=25;break;case 12:throw t.prev=12,t.t0=t.catch(5),console.log(t.t0),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni"),t.t0;case 25:t.next=37;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni");case 37:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}},424:function(t,e,c){"use strict";c.r(e);var n={name:"MoleculesmAccountHeaderComponent",components:{skeletonmAccountHeader:c(422).default},props:{account:{type:Array,required:!0}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var t=this.parentVariable;this.$emit("update",t)}}},o=c(1),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.account&&0!==t.account.length?t._e():e("skeletonmAccountHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}),t._v(" "),t.account&&0!==t.account.length?e("client-only",[e("div",{staticClass:"m-account-header"},[e("div",{staticClass:"m-account-header__outer"},[e("div",{staticClass:"m-account-header__inner"},[e("div",{staticClass:"m-account-header__image"},[e("div",{staticClass:"m-account-header__image-file"})]),t._v(" "),e("div",{staticClass:"m-account-header__text"},[e("span",{staticClass:"m-account-header__nickname"},[t._v(t._s(t.account[0].nickname))]),t._v(" "),e("span",{staticClass:"m-account-header__email"},[t._v(t._s(t.account[0].email))])]),t._v(" "),e("div",{staticClass:"m-account-header__nav",class:{"-open":t.parentVariable},on:{click:function(e){return t.updateParentVariable()}}},[e("span",{staticClass:"m-account-header__nav-icon"})])])])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},425:function(t,e,c){"use strict";c.r(e);var n={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},methods:{logout:function(){localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}}},o=c(1),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-account",class:{"-open":t.statusOpen},attrs:{role:"navigation"}},[e("div",{staticClass:"m-nav-account__outer"},[e("div",{staticClass:"m-nav-account__inner"},[e("ul",{staticClass:"m-nav-account__items"},[e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===t.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[t._v("Základní informace")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trophy",class:{"-active":"/ucet/profil/achievementy"===t.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[t._v("Achievementy")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===t.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[t._v("Navštívená místa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===t.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[t._v("Chci navštívit")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===t.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[t._v("Sleduji")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===t.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[t._v("Recenzoval jsem")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -post",class:{"-active":"/ucet/profil/clanky"===t.$route.path},attrs:{to:"/ucet/profil/clanky","exact-active-class":"-active"}},[t._v("Články")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -video",class:{"-active":"/ucet/profil/videa"===t.$route.path},attrs:{to:"/ucet/profil/videa","exact-active-class":"-active"}},[t._v("Videa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===t.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[t._v("Změna hesla")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===t.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[t._v("Moje data")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[t._v("Smazaní účtu")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item -logout"},[e("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:t.logout}},[t._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);e.default=component.exports},771:function(t,e,c){"use strict";c.r(e);var n=c(9),o=c(31),l=(c(36),c(423)),r=c(424),m=c(403),d=c(425),v=c(730),_={name:"UcetRecenzePage",components:{mAccountHeader:r.default,mHeadline:m.default,mNavAccount:d.default,oReviewItemListAccount:v.default},data:function(){return Object(o.a)({account:[],mNavAccountOpen:!1,email:null,passwordHash:null},"account","")},head:function(){var title,t,e;return"můj profil, recenze, cestovatelský portál, statistiky","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="MÍSTA CO JSEM HODNOTIL | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:t="Místa co jsem hodnotil, které jsou na cetovatelském portálu Frytol na cestách."},{name:"keywords",content:"můj profil, recenze, cestovatelský portál, statistiky"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:t},{hid:"og:url",content:e="".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}],link:[{rel:"canonical",href:e}]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(l.a)(t.$router);case 1:case"end":return e.stop()}}),e)})))()},methods:{menuAccountUpdate:function(t){this.mNavAccountOpen=t}},watch:{"$store.state.account":{deep:!0,immediate:!0,handler:function(){this.account=this.$store.state.account}}}},h=c(1),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -account"},[e("div",{staticClass:"t-grid__section -nav"},[e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mAccountHeader",{attrs:{account:t.account},on:{update:t.menuAccountUpdate}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavAccount",{attrs:{statusOpen:t.mNavAccountOpen}})],1)])]),t._v(" "),e("div",{staticClass:"t-grid__section -content"},[e("section",{staticClass:"t-section -padding-x -p0 pb-4"},[e("div",{staticClass:"t-section__inner"},[e("oReviewItemListAccount",{attrs:{account:t.account}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);