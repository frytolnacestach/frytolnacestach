(window.webpackJsonp=window.webpackJsonp||[]).push([[176,8,11,16,17,112],{374:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(376).default},props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1"},[t._v(t._s(t.perex))]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var c={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+" hidden-print",attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonmAccountHeaderComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-m-account-header"},[e("div",{staticClass:"skeleton-m-account-header__outer"},[e("div",{staticClass:"skeleton-m-account-header__inner"},[e("div",{staticClass:"skeleton-m-account-header__image"},[e("div",{class:"skeleton-m-account-header__image-file loading-image"+t.styleThema})]),t._v(" "),e("div",{staticClass:"skeleton-m-account-header__text"},[e("span",{class:"skeleton-m-account-header__nickname loading-image"+t.styleThema}),t._v(" "),e("span",{class:"skeleton-m-account-header__email loading-image"+t.styleThema})])])])])}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(10);n(54),n(13);function o(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,o,l,r,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("email"),c=localStorage.getItem("password_hash"),o=localStorage.getItem("status"),l=localStorage.getItem("nickname"),!n||"undefined"==n){t.next=27;break}return t.prev=5,t.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:l})});case 8:(r=t.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("email",n),localStorage.setItem("password_hash",c),localStorage.setItem("status",o),localStorage.setItem("nickname",l),document.cookie="FNCemail="+n+";"+d,document.cookie="FNCpass="+c+";"+d,document.cookie="FNCstatus="+o+";"+d,document.cookie="FNCnickname="+l+";"+d):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")),t.next=25;break;case 12:throw t.prev=12,t.t0=t.catch(5),console.log(t.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni"),t.t0;case 25:t.next=36;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni");case 36:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}},384:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmAccountHeaderComponent",components:{skeletonmAccountHeader:n(382).default},data:function(){return{nickname:null,email:null,parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var t=this.parentVariable;this.$emit("update",t)}},mounted:function(){var t=localStorage.getItem("nickname"),e=localStorage.getItem("email");this.nickname=t,this.email=e}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[null===t.nickname?e("skeletonmAccountHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}):t._e(),t._v(" "),null!==t.nickname?e("client-only",[e("div",{staticClass:"m-account-header"},[e("div",{staticClass:"m-account-header__outer"},[e("div",{staticClass:"m-account-header__inner"},[e("div",{staticClass:"m-account-header__image"},[e("div",{staticClass:"m-account-header__image-file"})]),t._v(" "),e("div",{staticClass:"m-account-header__text"},[e("span",{staticClass:"m-account-header__nickname"},[t._v(t._s(t.nickname))]),t._v(" "),e("span",{staticClass:"m-account-header__email"},[t._v(t._s(t.email))])]),t._v(" "),e("div",{staticClass:"m-account-header__nav",class:{"-open":t.parentVariable},on:{click:function(e){return t.updateParentVariable()}}},[e("span",{staticClass:"m-account-header__nav-icon"})])])])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},data:function(){return{email:this.email}},methods:{logout:function(){localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}},mounted:function(){var t=localStorage.getItem("email");this.email=t}},o=n(2),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-account",class:{"-open":t.statusOpen},attrs:{role:"navigation"}},[e("div",{staticClass:"m-nav-account__outer"},[e("div",{staticClass:"m-nav-account__inner"},[e("ul",{staticClass:"m-nav-account__items"},[t.email?e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===t.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[t._v("Základní informace")])],1):t._e(),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trophy",class:{"-active":"/ucet/profil/achievementy"===t.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[t._v("Achievementy")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===t.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[t._v("Navštívená místa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===t.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[t._v("Chci navštívit")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===t.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[t._v("Sleduji")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===t.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[t._v("Recenzoval jsem")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -post",class:{"-active":"/ucet/profil/clanky"===t.$route.path},attrs:{to:"/ucet/profil/clanky","exact-active-class":"-active"}},[t._v("Články")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -video",class:{"-active":"/ucet/profil/videa"===t.$route.path},attrs:{to:"/ucet/profil/videa","exact-active-class":"-active"}},[t._v("Videa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===t.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[t._v("Změna hesla")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===t.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[t._v("Moje data")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[t._v("Smazaní účtu")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item -logout"},[e("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:t.logout}},[t._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);e.default=component.exports},708:function(t,e,n){"use strict";n.r(e);var c=n(10),o=(n(54),n(68),n(44),n(43),n(13),n(69),n(383)),l=n(384),r=n(374),m=n(385),d=n(583),v={name:"UcetChciNavstivitPage",components:{mAccountHeader:l.default,mHeadline:r.default,mNavAccount:m.default,oCoverPlaceVisited:d.default},data:function(){return{mNavAccountOpen:!1,email:null,passwordHash:null,account:"",placesContinentsID:[],placesStatesID:[],placesCitiesID:[],placesRegionsID:[],placesSpotsID:[],loadingComponentOCoverPlaceVisited:!0}},head:function(){var title,t;return"můj profil, chci navštívit, cestovatelský portál, statistiky","https://image.frytolnacestach.cz/storage/main/og-default.png",title="MÍSTA CO CHCI NAVŠTÍVIT | Cestovatelský portál Frytol na cestách",t="Místa co chci navštívil, které jsou na cetovatelském portálu Frytol na cestách.","website",{title:title,meta:[{hid:"description",name:"description",content:t},{name:"keywords",content:"můj profil, chci navštívit, cestovatelský portál, statistiky"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:"Místa co chci navštívil, které jsou na cetovatelském portálu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,data,c,l,r,m,d,v,_,h,C;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(o.a)(t.$router),n=!1,data=null,c=localStorage.getItem("email"),l=localStorage.getItem("password_hash"),t.email=c,t.passwordHash=l;case 8:if(n){e.next=34;break}return e.prev=9,e.next=12,t.$axios.$get("https://api.frytolnacestach.cz/api/user-authentication?email=".concat(encodeURIComponent(t.email),"&password_hash=").concat(encodeURIComponent(t.passwordHash)));case 12:return r=e.sent,e.next=15,t.$axios.$get("https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=".concat(r[0].id,"&status=2"));case 15:m=e.sent,d=m.filter((function(t){return"continent"===t.type})).map((function(t){return t.id_place}))||[],v=m.filter((function(t){return"state"===t.type})).map((function(t){return t.id_place}))||[],_=m.filter((function(t){return"city"===t.type})).map((function(t){return t.id_place}))||[],h=m.filter((function(t){return"region"===t.type})).map((function(t){return t.id_place}))||[],C=m.filter((function(t){return"spot"===t.type})).map((function(t){return t.id_place}))||[],data={account:r,placesContinentsID:d,placesStatesID:v,placesCitiesID:_,placesRegionsID:h,placesSpotsID:C},t.loadingComponentOCoverPlaceVisited=!1,n=!0,e.next=32;break;case 26:return e.prev=26,e.t0=e.catch(9),console.log("API ERROR - CHCI NAVSTIVIT"),console.error(e.t0),e.next=32,new Promise((function(t){return setTimeout(t,1e3)}));case 32:e.next=8;break;case 34:Object.assign(t,data);case 35:case"end":return e.stop()}}),e,null,[[9,26]])})))()},methods:{menuAccountUpdate:function(t){this.mNavAccountOpen=t}}},_=n(2),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -account"},[e("div",{staticClass:"t-grid__section -nav"},[e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mAccountHeader",{on:{update:t.menuAccountUpdate}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavAccount",{attrs:{statusOpen:t.mNavAccountOpen}})],1)])]),t._v(" "),e("div",{staticClass:"t-grid__section -content"},[e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Kontinety které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{loadingNecessaryData:t.loadingComponentOCoverPlaceVisited,placesID:t.placesContinentsID,type:"kontinent",account:"login",status:2}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Státy které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{loadingNecessaryData:t.loadingComponentOCoverPlaceVisited,placesID:t.placesStatesID,type:"stat",account:"login",status:2}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Města které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{loadingNecessaryData:t.loadingComponentOCoverPlaceVisited,placesID:t.placesCitiesID,type:"mesto",account:"login",status:2}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Regiony které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{loadingNecessaryData:t.loadingComponentOCoverPlaceVisited,placesID:t.placesRegionsID,type:"region",account:"login",status:2}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Místa které chci navštívit",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{loadingNecessaryData:t.loadingComponentOCoverPlaceVisited,placesID:t.placesSpotsID,type:"misto",account:"login",status:2}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);