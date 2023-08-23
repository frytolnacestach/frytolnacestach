(window.webpackJsonp=window.webpackJsonp||[]).push([[139,9,12,13],{365:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))]),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},374:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmAccountHeaderComponent",data:function(){return{nickname:null,email:null,parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}},mounted:function(){var e=localStorage.getItem("nickname"),t=localStorage.getItem("email");this.nickname=e,this.email=t}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[null===e.nickname?t("div",[e._m(0)]):e._e(),e._v(" "),null!==e.nickname?t("client-only",[t("div",{staticClass:"m-account-header"},[t("div",{staticClass:"m-account-header__outer"},[t("div",{staticClass:"m-account-header__inner"},[t("div",{staticClass:"m-account-header__image"},[t("div",{staticClass:"m-account-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-account-header__text"},[t("span",{staticClass:"m-account-header__nickname"},[e._v(e._s(e.nickname))]),e._v(" "),t("span",{staticClass:"m-account-header__email"},[e._v(e._s(e.email))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-account-header"},[t("div",{staticClass:"skeleton-m-account-header__outer"},[t("div",{staticClass:"skeleton-m-account-header__inner"},[t("div",{staticClass:"skeleton-m-account-header__image"},[t("div",{staticClass:"skeleton-m-account-header__image-file loading-image -skeleton-dark-blue"})]),e._v(" "),t("div",{staticClass:"skeleton-m-account-header__text"},[t("span",{staticClass:"skeleton-m-account-header__nickname loading-image -skeleton-dark-blue"}),e._v(" "),t("span",{staticClass:"skeleton-m-account-header__email loading-image -skeleton-dark-blue"})])])])])}],!1,null,null,null);t.default=component.exports},375:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},data:function(){return{email:this.email}},methods:{logout:function(){localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}},mounted:function(){var e=localStorage.getItem("email");this.email=e}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-account",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-account__outer"},[t("div",{staticClass:"m-nav-account__inner"},[t("ul",{staticClass:"m-nav-account__items"},[e.email?t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[e._v("Základní informace")])],1):e._e(),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -checkmark",class:{"-active":"/ucet/profil/achievementy"===e.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[e._v("Achievementy")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===e.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[e._v("Chci navštívit")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===e.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[e._v("Sleduji")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===e.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[e._v("Změna hesla")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===e.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[e._v("Moje data")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[e._v("Smazaní účtu")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item -logout"},[t("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:e.logout}},[e._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);t.default=component.exports},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(10);n(54),n(13);function o(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,c,o,l,r,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("email"),c=localStorage.getItem("password_hash"),o=localStorage.getItem("status"),l=localStorage.getItem("nickname"),!n||"undefined"==n){e.next=27;break}return e.prev=5,e.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:l})});case 8:(r=e.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("email",n),localStorage.setItem("password_hash",c),localStorage.setItem("status",o),localStorage.setItem("nickname",l),document.cookie="FNCemail="+n+";"+d,document.cookie="FNCpass="+c+";"+d,document.cookie="FNCstatus="+o+";"+d,document.cookie="FNCnickname="+l+";"+d):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")),e.next=25;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni"),e.t0;case 25:e.next=36;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni");case 36:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},640:function(e,t,n){"use strict";n.r(t);var c=n(10),o=(n(54),n(66),n(44),n(43),n(13),n(67),n(376)),l=n(374),r=n(365),m=n(375),d=n(554),v={name:"UcetZmenaHeslaPage",components:{mAccountHeader:l.default,mHeadline:r.default,mNavAccount:m.default,oCoverPlaceVisited:d.default},data:function(){return{mNavAccountOpen:!1,email:null,passwordHash:null,account:"",placesContinentsID:[],placesStatesID:[],placesCitiesID:[],placesRegionsID:[],placesSpotsID:[],loadingComponentOCoverPlaceVisited:!0}},head:{title:"MÍSTA CO CHCI NAVŠTÍVIT | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Místa co chci navštívil, které jsou na webu Frytol na cestách."},{name:"keywords",content:"Cestovatelský portál, úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Místa co chci navštívit | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Místa co chci navštívil, které jsou na webu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,data,c,l,r,m,d,v,_,h,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(o.a)(e.$router),n=!1,data=null,c=localStorage.getItem("email"),l=localStorage.getItem("password_hash"),e.email=c,e.passwordHash=l;case 8:if(n){t.next=34;break}return t.prev=9,t.next=12,e.$axios.$get("https://api.frytolnacestach.cz/api/user-authentication?email=".concat(encodeURIComponent(e.email),"&password_hash=").concat(encodeURIComponent(e.passwordHash)));case 12:return r=t.sent,t.next=15,e.$axios.$get("https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=".concat(r[0].id,"&status=2"));case 15:m=t.sent,d=m.filter((function(e){return"continent"===e.type})).map((function(e){return e.id_place}))||[],v=m.filter((function(e){return"state"===e.type})).map((function(e){return e.id_place}))||[],_=m.filter((function(e){return"city"===e.type})).map((function(e){return e.id_place}))||[],h=m.filter((function(e){return"region"===e.type})).map((function(e){return e.id_place}))||[],C=m.filter((function(e){return"spot"===e.type})).map((function(e){return e.id_place}))||[],data={account:r,placesContinentsID:d,placesStatesID:v,placesCitiesID:_,placesRegionsID:h,placesSpotsID:C},e.loadingComponentOCoverPlaceVisited=!1,n=!0,t.next=32;break;case 26:return t.prev=26,t.t0=t.catch(9),console.log("API ERROR - CHCI NAVSTIVIT"),console.error(t.t0),t.next=32,new Promise((function(e){return setTimeout(e,1e3)}));case 32:t.next=8;break;case 34:Object.assign(e,data);case 35:case"end":return t.stop()}}),t,null,[[9,26]])})))()},methods:{menuAccountUpdate:function(e){this.mNavAccountOpen=e}}},_=n(2),component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -account"},[t("div",{staticClass:"t-grid__section -nav"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mAccountHeader",{on:{update:e.menuAccountUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavAccount",{attrs:{statusOpen:e.mNavAccountOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-grid__section -content"},[t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Kontinety které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{loadingNecessaryData:e.loadingComponentOCoverPlaceVisited,placesID:e.placesContinentsID,type:"kontinent"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Státy které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{loadingNecessaryData:e.loadingComponentOCoverPlaceVisited,placesID:e.placesStatesID,type:"stat"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Města které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{loadingNecessaryData:e.loadingComponentOCoverPlaceVisited,placesID:e.placesCitiesID,type:"mesto"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Regiony které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{loadingNecessaryData:e.loadingComponentOCoverPlaceVisited,placesID:e.placesRegionsID,type:"region"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Místa které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oCoverPlaceVisited",{attrs:{loadingNecessaryData:e.loadingComponentOCoverPlaceVisited,placesID:e.placesSpotsID,type:"misto"}})],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);