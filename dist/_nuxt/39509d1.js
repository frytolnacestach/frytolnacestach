(window.webpackJsonp=window.webpackJsonp||[]).push([[211,10,14,19,20,124],{403:function(t,e,n){"use strict";n.r(e);var c={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):"span"===t.target?e("span",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print"},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[t.title&&"h1"===t.styleSize?e("h1",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.title&&"h2"===t.styleSize?e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},420:function(t,e,n){"use strict";n.r(e);var c={name:"SkeletonmAccountHeaderComponent",props:{styleThema:{type:String,required:!0}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"skeleton-m-account-header"},[e("div",{staticClass:"skeleton-m-account-header__outer"},[e("div",{staticClass:"skeleton-m-account-header__inner"},[e("div",{staticClass:"skeleton-m-account-header__image"},[e("div",{class:"skeleton-m-account-header__image-file loading-image"+t.styleThema})]),t._v(" "),e("div",{staticClass:"skeleton-m-account-header__text"},[e("span",{class:"skeleton-m-account-header__nickname loading-image"+t.styleThema}),t._v(" "),e("span",{class:"skeleton-m-account-header__email loading-image"+t.styleThema})])])])])}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(9);n(36),n(12);function o(t){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,c,o,l,r,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=localStorage.getItem("accountEmail"),c=localStorage.getItem("accountPasswordHash"),o=localStorage.getItem("accountStatus"),l=localStorage.getItem("accountNickname"),!n||"undefined"==n){t.next=27;break}return t.prev=5,t.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:l})});case 8:(r=t.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("accountEmail",n),localStorage.setItem("accountPasswordHash",c),localStorage.setItem("accountStatus",o),localStorage.setItem("accountNickname",l),document.cookie="FNCaccountEmail="+n+";"+d,document.cookie="FNCaccountPasswordHash="+c+";"+d,document.cookie="FNCaccountStatus="+o+";"+d,document.cookie="FNCaccountNickname="+l+";"+d):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni")),t.next=25;break;case 12:throw t.prev=12,t.t0=t.catch(5),console.log(t.t0),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni"),t.t0;case 25:t.next=37;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.push("/ucet/prihlaseni");case 37:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}},423:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmAccountHeaderComponent",components:{skeletonmAccountHeader:n(420).default},props:{account:{type:Array,required:!0}},data:function(){return{parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var t=this.parentVariable;this.$emit("update",t)}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"t-component-skeleton"},[t.account&&0!==t.account.length?t._e():e("skeletonmAccountHeader",{attrs:{styleThema:" -skeleton-dark-blue"}}),t._v(" "),t.account&&0!==t.account.length?e("client-only",[e("div",{staticClass:"m-account-header"},[e("div",{staticClass:"m-account-header__outer"},[e("div",{staticClass:"m-account-header__inner"},[e("div",{staticClass:"m-account-header__image"},[e("div",{staticClass:"m-account-header__image-file"})]),t._v(" "),e("div",{staticClass:"m-account-header__text"},[e("span",{staticClass:"m-account-header__nickname"},[t._v(t._s(t.account[0].nickname))]),t._v(" "),e("span",{staticClass:"m-account-header__email"},[t._v(t._s(t.account[0].email))])]),t._v(" "),e("div",{staticClass:"m-account-header__nav",class:{"-open":t.parentVariable},on:{click:function(e){return t.updateParentVariable()}}},[e("span",{staticClass:"m-account-header__nav-icon"})])])])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";n.r(e);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},methods:{logout:function(){localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}}},o=n(1),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-account",class:{"-open":t.statusOpen},attrs:{role:"navigation"}},[e("div",{staticClass:"m-nav-account__outer"},[e("div",{staticClass:"m-nav-account__inner"},[e("ul",{staticClass:"m-nav-account__items"},[e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===t.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[t._v("Základní informace")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trophy",class:{"-active":"/ucet/profil/achievementy"===t.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[t._v("Achievementy")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===t.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[t._v("Navštívená místa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===t.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[t._v("Chci navštívit")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===t.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[t._v("Sleduji")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===t.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[t._v("Recenzoval jsem")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -post",class:{"-active":"/ucet/profil/clanky"===t.$route.path},attrs:{to:"/ucet/profil/clanky","exact-active-class":"-active"}},[t._v("Články")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -video",class:{"-active":"/ucet/profil/videa"===t.$route.path},attrs:{to:"/ucet/profil/videa","exact-active-class":"-active"}},[t._v("Videa")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===t.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[t._v("Změna hesla")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===t.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[t._v("Moje data")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item"},[e("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[t._v("Smazaní účtu")])],1),t._v(" "),e("li",{staticClass:"m-nav-account__item -logout"},[e("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:t.logout}},[t._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);e.default=component.exports},768:function(t,e,n){"use strict";n.r(e);var c=n(9),o=(n(36),n(57),n(41),n(12),n(72),n(421)),l=n(423),r=n(404),m=n(424),d=n(649),_={name:"UcetNavstivenaMistaPage",components:{mAccountHeader:l.default,mHeadline:r.default,mNavAccount:m.default,oCoverPlaceVisited:d.default},data:function(){return{account:[],mNavAccountOpen:!1,placesContinentsID:[],placesStatesID:[],placesCitiesID:[],placesRegionsID:[],placesSpotsID:[],skeleton:!0}},head:function(){var title,t,e,n,c,o;return"můj profil, navštívená místa, cestovatelský portál, statistiky",e="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="MÍSTA CO JSEM NAVŠTÍVIL | Cestovatelský portál Frytol na cestách",c=t="Místa co jsem navštívil, které jsou na cetovatelském portálu Frytol na cestách.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{name:"keywords",content:"můj profil, navštívená místa, cestovatelský portál, statistiky"},{hid:"og:type",content:"website"},{hid:"og:url",content:o="".concat("https://frytolnacestach.cz")},{hid:"og:title",content:n},{hid:"og:description",content:c},{property:"og:image",content:e},{name:"twitter:title",content:n},{name:"twitter:description",content:c},{name:"twitter:image",content:e},{name:"twitter:url",content:o}],link:[{rel:"canonical",href:o}]}},mounted:function(){Object(o.a)(this.$router)},methods:{fetchData:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.account||0===t.account.length){e.next=12;break}return e.next=5,t.$axios.$get("https://api.frytolnacestach.cz/api/user-visited-place-id-user?id_user=".concat(t.account[0].id,"&status=1"));case 5:t.placesID=e.sent,t.placesContinentsID=t.placesID.filter((function(t){return"continent"===t.type})).map((function(t){return t.id_place}))||[],t.placesStatesID=t.placesID.filter((function(t){return"state"===t.type})).map((function(t){return t.id_place}))||[],t.placesCitiesID=t.placesID.filter((function(t){return"city"===t.type})).map((function(t){return t.id_place}))||[],t.placesRegionsID=t.placesID.filter((function(t){return"region"===t.type})).map((function(t){return t.id_place}))||[],t.placesSpotsID=t.placesID.filter((function(t){return"spot"===t.type})).map((function(t){return t.id_place}))||[],t.skeleton=!1;case 12:e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log("API ERROR - MOJE ČLÁNKY"),console.error(e.t0),e.next=20,new Promise((function(t){return setTimeout(t,1e3)}));case 20:case"end":return e.stop()}}),e,null,[[0,14]])})))()},menuAccountUpdate:function(t){this.mNavAccountOpen=t}},watch:{account:{handler:"fetchData",immediate:!0},"$store.state.account":{deep:!0,immediate:!0,handler:function(){this.account=this.$store.state.account}}}},v=n(1),component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[e("div",{staticClass:"t-main__content"},[e("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"t-grid -account"},[e("div",{staticClass:"t-grid__section -nav"},[e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mAccountHeader",{attrs:{account:t.account},on:{update:t.menuAccountUpdate}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0"},[e("div",{staticClass:"t-section__inner"},[e("mNavAccount",{attrs:{statusOpen:t.mNavAccountOpen}})],1)])]),t._v(" "),e("div",{staticClass:"t-grid__section -content"},[e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Kontinety které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{skeletonProbs:t.skeleton,account:t.account,placesID:t.placesContinentsID,type:"kontinent",typeAccount:"login",status:1}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Státy které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{skeletonProbs:t.skeleton,account:t.account,placesID:t.placesStatesID,type:"stat",typeAccount:"login",status:1}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Města které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{skeletonProbs:t.skeleton,account:t.account,placesID:t.placesCitiesID,type:"mesto",typeAccount:"login",status:1}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Regiony které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{skeletonProbs:t.skeleton,account:t.account,placesID:t.placesRegionsID,type:"region",typeAccount:"login",status:1}})],1)]),t._v(" "),e("section",{staticClass:"t-section -padding-x -p0 pb-4 print-section"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Místa které jsem navštívil",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),t._v(" "),e("oCoverPlaceVisited",{attrs:{skeletonProbs:t.skeleton,account:t.account,placesID:t.placesSpotsID,type:"misto",typeAccount:"login",status:1}})],1)])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);