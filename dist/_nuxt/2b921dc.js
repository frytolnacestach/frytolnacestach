(window.webpackJsonp=window.webpackJsonp||[]).push([[138,9,12,13,19],{365:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))]),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},366:function(e,t,n){"use strict";var c=n(11),o=n(5),l=n(6),r=n(114),d=n(19),m=n(14),v=n(231),_=n(45),h=n(89),f=n(230),k=n(4),C=n(90).f,y=n(37).f,x=n(18).f,T=n(367),N=n(368).trim,S="Number",I=o.Number,w=I.prototype,M=o.TypeError,A=l("".slice),j=l("".charCodeAt),F=function(e){var t=f(e,"number");return"bigint"==typeof t?t:G(t)},G=function(e){var t,n,c,o,l,r,d,code,m=f(e,"number");if(h(m))throw M("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=N(m),43===(t=j(m,0))||45===t){if(88===(n=j(m,2))||120===n)return NaN}else if(48===t){switch(j(m,1)){case 66:case 98:c=2,o=49;break;case 79:case 111:c=8,o=55;break;default:return+m}for(r=(l=A(m,2)).length,d=0;d<r;d++)if((code=j(l,d))<48||code>o)return NaN;return parseInt(l,c)}return+m};if(r(S,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var O,J=function(e){var t=arguments.length<1?0:I(F(e)),n=this;return _(w,n)&&k((function(){T(n)}))?v(Object(t),n,J):t},z=c?C(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;z.length>L;L++)m(I,O=z[L])&&!m(J,O)&&x(J,O,y(I,O));J.prototype=w,w.constructor=J,d(o,S,J,{constructor:!0})}},367:function(e,t,n){var c=n(6);e.exports=c(1..valueOf)},368:function(e,t,n){var c=n(6),o=n(29),l=n(15),r=n(369),d=c("".replace),m="["+r+"]",v=RegExp("^"+m+m+"*"),_=RegExp(m+m+"*$"),h=function(e){return function(t){var n=l(o(t));return 1&e&&(n=d(n,v,"")),2&e&&(n=d(n,_,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},369:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},374:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmAccountHeaderComponent",data:function(){return{nickname:null,email:null,parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}},mounted:function(){var e=localStorage.getItem("nickname"),t=localStorage.getItem("email");this.nickname=e,this.email=t}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[null===e.nickname?t("div",[e._m(0)]):e._e(),e._v(" "),null!==e.nickname?t("client-only",[t("div",{staticClass:"m-account-header"},[t("div",{staticClass:"m-account-header__outer"},[t("div",{staticClass:"m-account-header__inner"},[t("div",{staticClass:"m-account-header__image"},[t("div",{staticClass:"m-account-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-account-header__text"},[t("span",{staticClass:"m-account-header__nickname"},[e._v(e._s(e.nickname))]),e._v(" "),t("span",{staticClass:"m-account-header__email"},[e._v(e._s(e.email))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-account-header"},[t("div",{staticClass:"skeleton-m-account-header__outer"},[t("div",{staticClass:"skeleton-m-account-header__inner"},[t("div",{staticClass:"skeleton-m-account-header__image"},[t("div",{staticClass:"skeleton-m-account-header__image-file loading-image -skeleton-dark-blue"})]),e._v(" "),t("div",{staticClass:"skeleton-m-account-header__text"},[t("span",{staticClass:"skeleton-m-account-header__nickname loading-image -skeleton-dark-blue"}),e._v(" "),t("span",{staticClass:"skeleton-m-account-header__email loading-image -skeleton-dark-blue"})])])])])}],!1,null,null,null);t.default=component.exports},375:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},data:function(){return{email:this.email}},methods:{logout:function(){localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}},mounted:function(){var e=localStorage.getItem("email");this.email=e}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-account",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-account__outer"},[t("div",{staticClass:"m-nav-account__inner"},[t("ul",{staticClass:"m-nav-account__items"},[e.email?t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[e._v("Základní informace")])],1):e._e(),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -checkmark",class:{"-active":"/ucet/profil/achievementy"===e.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[e._v("Achievementy")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===e.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[e._v("Chci navštívit")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===e.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[e._v("Sleduji")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===e.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[e._v("Změna hesla")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===e.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[e._v("Moje data")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[e._v("Smazaní účtu")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item -logout"},[t("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:e.logout}},[e._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);t.default=component.exports},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(10);n(54),n(13);function o(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,c,o,l,r,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("email"),c=localStorage.getItem("password_hash"),o=localStorage.getItem("status"),l=localStorage.getItem("nickname"),!n||"undefined"==n){e.next=27;break}return e.prev=5,e.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:l})});case 8:(r=e.sent).ok?(console.log("Přihlášení stále aktivní"),(d=new Date).setMonth(d.getMonth()+1),m="expires="+d,localStorage.setItem("email",n),localStorage.setItem("password_hash",c),localStorage.setItem("status",o),localStorage.setItem("nickname",l),document.cookie="FNCemail="+n+";"+m,document.cookie="FNCpass="+c+";"+m,document.cookie="FNCstatus="+o+";"+m,document.cookie="FNCnickname="+l+";"+m):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")),e.next=25;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni"),e.t0;case 25:e.next=36;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni");case 36:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},543:function(e,t,n){"use strict";n.r(t);var c=n(32),o=(n(28),n(35),n(46),n(10)),l=(n(54),n(366),n(66),n(13),n(67),{name:"OrganismsoAchievementsListComponent",props:{type:{type:String,required:!0},idUser:{type:Number,required:!1}},data:function(){return{email:null,passwordHash:null,loginCheck:!1,account:[],achievements:[],users:[],achievementsList:[]}},methods:{calculateWidth:function(e,t){return t>=e?100:t/e*100},createAchievementsList:function(e){return[{type:"-type-world-continent",value:"-value-bronze",actual:e[0].continent,need:2,name:"Bronzový Kontinentální Cestovatel",description:""},{type:"-type-world-continent",value:"-value-silver",actual:e[0].continent,need:4,name:"Stříbrný Kontinentální Objevitel",description:""},{type:"-type-world-continent",value:"-value-gold",actual:e[0].continent,need:6,name:"Zlatý Kontinentální Dobrodruh",description:""},{type:"-type-world-continent",value:"-value-diamond",actual:e[0].continent,need:7,name:"Diamantový Kontinentální Mistr",description:""},{type:"-type-world-state",value:"-value-bronze",actual:e[0].state,need:10,name:"Bronzový Státní Cestovatel",description:""},{type:"-type-world-state",value:"-value-silver",actual:e[0].state,need:25,name:"Stříbrný Státní Objevitel",description:""},{type:"-type-world-state",value:"-value-gold",actual:e[0].state,need:125,name:"Zlatý Státní Dobrodruh",description:""},{type:"-type-world-state",value:"-value-diamond",actual:e[0].state,need:249,name:"Diamantový Státní Mistr",description:""},{type:"-type-world-region",value:"-value-bronze",actual:e[0].region,need:20,name:"Bronzový Regionální Cestovatel",description:""},{type:"-type-world-region",value:"-value-silver",actual:e[0].region,need:50,name:"Stříbrný Regionální Objevitel",description:""},{type:"-type-world-region",value:"-value-gold",actual:e[0].region,need:250,name:"Zlatý Regionální Dobrodruh",description:""},{type:"-type-world-region",value:"-value-diamond",actual:e[0].region,need:500,name:"Diamantový Regionální Mistr",description:""},{type:"-type-world-city",value:"-value-bronze",actual:e[0].city,need:50,name:"Bronzový Městský Cestovatel",description:""},{type:"-type-world-city",value:"-value-silver",actual:e[0].city,need:100,name:"Stříbrný Městský Objevitel",description:""},{type:"-type-world-city",value:"-value-gold",actual:e[0].city,need:500,name:"Zlatý Městský Dobrodruhh",description:""},{type:"-type-world-city",value:"-value-diamond",actual:e[0].city,need:1e3,name:"Diamantový Městský Mistr",description:""},{type:"-type-world-spot",value:"-value-bronze",actual:e[0].spot,need:100,name:"Bronzový Místní Cestovatel",description:""},{type:"-type-world-spot",value:"-value-silver",actual:e[0].spot,need:300,name:"Stříbrný Místní Objevitel",description:""},{type:"-type-world-spot",value:"-value-gold",actual:e[0].spot,need:1e3,name:"Zlatý Místní Dobrodruh",description:""},{type:"-type-world-spot",value:"-value-diamond",actual:e[0].spot,need:2500,name:"Diamantový Místní Mistr",description:""}]}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,c,o,data,l,r,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=localStorage.getItem("email"),c=localStorage.getItem("password_hash"),e.email=n,e.passwordHash=c,o=!1,data=null;case 3:if(o){t.next=46;break}if(t.prev=4,l=null,r=null,d=null,"account"!==e.type){t.next=29;break}if(null===e.email){t.next=22;break}return t.next=13,e.$axios.$get("https://api.frytolnacestach.cz/api/user-authentication?email=".concat(encodeURIComponent(e.email),"&password_hash=").concat(encodeURIComponent(e.passwordHash)));case 13:if(l=t.sent,e.loginCheck=!0,null===l){t.next=20;break}return t.next=18,e.$axios.$get("https://api.frytolnacestach.cz/api/user-achievements?id_user=".concat(l[0].id));case 18:r=t.sent,e.achievementsList=e.createAchievementsList(r);case 20:t.next=23;break;case 22:e.loginCheck=!0;case 23:t.next=26;break;case 25:e.loginCheck=!1;case 26:data={account:l,achievements:r,users:d},t.next=35;break;case 29:return t.next=32,e.$axios.$get("https://api.frytolnacestach.cz/api/user-achievements?id_user=".concat(e.idUser));case 32:r=t.sent,e.achievementsList=e.createAchievementsList(r);case 34:data={account:l,achievements:r,users:d};case 35:o=!0,t.next=44;break;case 38:return t.prev=38,t.t0=t.catch(4),console.log("API ERROR - SLEDUJI"),console.error(t.t0),t.next=44,new Promise((function(e){return setTimeout(e,1e3)}));case 44:t.next=3;break;case 46:Object.assign(e,data);case 47:case"end":return t.stop()}}),t,null,[[4,38]])})))()}}),r=n(2),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return e.achievements[0]?t("div",{staticClass:"o-achievements"},[t("div",{staticClass:"o-achievements__outer"},[t("div",{staticClass:"o-achievements__inner"},[t("div",{staticClass:"o-achievements__items"},e._l(e.achievementsList,(function(n){return t("div",{key:n.id,staticClass:"o-achievements__item",class:[n.type,Object(c.a)({},n.value,n.actual>=n.need)]},[t("div",{staticClass:"o-achievements__content"},[t("div",{staticClass:"o-achievements__medal"}),e._v(" "),t("div",{staticClass:"o-achievements__text"},[t("h2",{staticClass:"o-achievements__name"},[e._v(e._s(n.name))]),e._v(" "),n.description?t("p",{staticClass:"o-achievements__description"},[e._v(e._s(n.description))]):e._e()]),e._v(" "),t("div",{staticClass:"o-achievements__progress"},[t("span",{staticClass:"o-achievements__progress-number"},[t("span",{staticClass:"o-achievements__progress-number-actual"},[e._v(e._s(n.actual>n.need?n.need:n.actual))]),e._v("/"),t("span",{staticClass:"o-achievements__progress-number-need"},[e._v(e._s(n.need))])]),e._v(" "),t("div",{staticClass:"o-achievements__progress-line"},[t("div",{staticClass:"o-achievements__progress-line-full",style:{width:e.calculateWidth(n.need,n.actual)+"%"}})])])])])})),0)])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},639:function(e,t,n){"use strict";n.r(t);var c=n(376),o=n(374),l=n(365),r=n(375),d=n(543),m={name:"UcetAchievementyPage",components:{mAccountHeader:o.default,mHeadline:l.default,mNavAccount:r.default,oAchievements:d.default},data:function(){return{mNavAccountOpen:!1}},mounted:function(){Object(c.a)(this.$router)},head:{title:"Moje data | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Moje data na webu Frytol na cestách."},{name:"keywords",content:"Cestovatelský portál, úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Moje data | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Moje data na webu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]},methods:{menuAccountUpdate:function(e){this.mNavAccountOpen=e}}},v=n(2),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -account"},[t("div",{staticClass:"t-grid__section -nav"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mAccountHeader",{on:{update:e.menuAccountUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavAccount",{attrs:{statusOpen:e.mNavAccountOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-grid__section -content"},[t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Achievementy",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oAchievements",{attrs:{type:"account"}})],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);