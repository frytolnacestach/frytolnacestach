(window.webpackJsonp=window.webpackJsonp||[]).push([[144,9,12,13,40],{365:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))]),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},366:function(e,t,n){"use strict";var c=n(11),o=n(5),r=n(6),l=n(114),m=n(19),d=n(14),_=n(231),f=n(45),h=n(89),v=n(230),x=n(4),w=n(90).f,k=n(37).f,C=n(18).f,y=n(367),N=n(368).trim,z="Number",T=o.Number,I=T.prototype,S=o.TypeError,F=r("".slice),j=r("".charCodeAt),M=function(e){var t=v(e,"number");return"bigint"==typeof t?t:A(t)},A=function(e){var t,n,c,o,r,l,m,code,d=v(e,"number");if(h(d))throw S("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=N(d),43===(t=j(d,0))||45===t){if(88===(n=j(d,2))||120===n)return NaN}else if(48===t){switch(j(d,1)){case 66:case 98:c=2,o=49;break;case 79:case 111:c=8,o=55;break;default:return+d}for(l=(r=F(d,2)).length,m=0;m<l;m++)if((code=j(r,m))<48||code>o)return NaN;return parseInt(r,c)}return+d};if(l(z,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var G,J=function(e){var t=arguments.length<1?0:T(M(e)),n=this;return f(I,n)&&x((function(){y(n)}))?_(Object(t),n,J):t},O=c?w(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;O.length>$;$++)d(T,G=O[$])&&!d(J,G)&&C(J,G,k(T,G));J.prototype=I,I.constructor=J,m(o,z,J,{constructor:!0})}},367:function(e,t,n){var c=n(6);e.exports=c(1..valueOf)},368:function(e,t,n){var c=n(6),o=n(29),r=n(15),l=n(369),m=c("".replace),d="["+l+"]",_=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(e){return function(t){var n=r(o(t));return 1&e&&(n=m(n,_,"")),2&e&&(n=m(n,f,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},369:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},374:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmAccountHeaderComponent",data:function(){return{nickname:null,email:null,parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}},mounted:function(){var e=localStorage.getItem("nickname"),t=localStorage.getItem("email");this.nickname=e,this.email=t}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[null===e.nickname?t("div",[e._m(0)]):e._e(),e._v(" "),null!==e.nickname?t("client-only",[t("div",{staticClass:"m-account-header"},[t("div",{staticClass:"m-account-header__outer"},[t("div",{staticClass:"m-account-header__inner"},[t("div",{staticClass:"m-account-header__image"},[t("div",{staticClass:"m-account-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-account-header__text"},[t("span",{staticClass:"m-account-header__nickname"},[e._v(e._s(e.nickname))]),e._v(" "),t("span",{staticClass:"m-account-header__email"},[e._v(e._s(e.email))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-account-header"},[t("div",{staticClass:"skeleton-m-account-header__outer"},[t("div",{staticClass:"skeleton-m-account-header__inner"},[t("div",{staticClass:"skeleton-m-account-header__image"},[t("div",{staticClass:"skeleton-m-account-header__image-file loading-image -skeleton-dark-blue"})]),e._v(" "),t("div",{staticClass:"skeleton-m-account-header__text"},[t("span",{staticClass:"skeleton-m-account-header__nickname loading-image -skeleton-dark-blue"}),e._v(" "),t("span",{staticClass:"skeleton-m-account-header__email loading-image -skeleton-dark-blue"})])])])])}],!1,null,null,null);t.default=component.exports},375:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},data:function(){return{email:this.email}},methods:{logout:function(){localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}},mounted:function(){var e=localStorage.getItem("email");this.email=e}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-account",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-account__outer"},[t("div",{staticClass:"m-nav-account__inner"},[t("ul",{staticClass:"m-nav-account__items"},[e.email?t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[e._v("Základní informace")])],1):e._e(),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -checkmark",class:{"-active":"/ucet/profil/achievementy"===e.$route.path},attrs:{to:"/ucet/profil/achievementy","exact-active-class":"-active"}},[e._v("Achievementy")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===e.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[e._v("Chci navštívit")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -user",class:{"-active":"/ucet/profil/sleduji"===e.$route.path},attrs:{to:"/ucet/profil/sleduji","exact-active-class":"-active"}},[e._v("Sleduji")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===e.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[e._v("Změna hesla")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===e.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[e._v("Moje data")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[e._v("Smazaní účtu")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item -logout"},[t("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:e.logout}},[e._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);t.default=component.exports},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(10);n(54),n(13);function o(e){return r.apply(this,arguments)}function r(){return(r=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,c,o,r,l,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("email"),c=localStorage.getItem("password_hash"),o=localStorage.getItem("status"),r=localStorage.getItem("nickname"),!n||"undefined"==n){e.next=27;break}return e.prev=5,e.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:r})});case 8:(l=e.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("email",n),localStorage.setItem("password_hash",c),localStorage.setItem("status",o),localStorage.setItem("nickname",r),document.cookie="FNCemail="+n+";"+d,document.cookie="FNCpass="+c+";"+d,document.cookie="FNCstatus="+o+";"+d,document.cookie="FNCnickname="+r+";"+d):401===l.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):404===l.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")),e.next=25;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni"),e.t0;case 25:e.next=36;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni");case 36:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},544:function(e,t,n){"use strict";n.r(t);n(229),n(13),n(66),n(28);var c=n(10),o=(n(54),n(366),n(43),n(44),n(113),n(67),{name:"OrganismsoFollowerListComponent",props:{type:{type:String,required:!0},idUser:{type:Number,required:!1}},data:function(){return{email:null,passwordHash:null,loginCheck:!1,account:[],followers:[],users:[]}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,data,r,l,m,d,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=localStorage.getItem("email"),c=localStorage.getItem("password_hash"),e.email=n,e.passwordHash=c,o=!1,data=null;case 3:if(o){t.next=54;break}if(t.prev=4,r=null,l=null,m=null,"account"!==e.type){t.next=33;break}if(null===e.email){t.next=26;break}return t.next=13,e.$axios.$get("https://api.frytolnacestach.cz/api/user-authentication?email=".concat(encodeURIComponent(e.email),"&password_hash=").concat(encodeURIComponent(e.passwordHash)));case 13:if(r=t.sent,e.loginCheck=!0,null===r){t.next=24;break}return t.next=18,e.$axios.$get("https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=".concat(r[0].id));case 18:if(null===(l=t.sent)){t.next=24;break}return d=l.map((function(e){return e.id_follower})).filter((function(e){return null!==e&&""!==e})),t.next=23,e.$axios.$get("https://api.frytolnacestach.cz/api/users-ids?id=".concat(d.join(",")));case 23:m=t.sent;case 24:t.next=27;break;case 26:e.loginCheck=!0;case 27:t.next=30;break;case 29:e.loginCheck=!1;case 30:data={account:r,followers:l,users:m},t.next=43;break;case 33:return t.next=36,e.$axios.$get("https://api.frytolnacestach.cz/api/user-followers-id-user?id_user=".concat(e.idUser));case 36:if(null===(l=t.sent)){t.next=42;break}return _=l.map((function(e){return e.id_follower})).filter((function(e){return null!==e&&""!==e})),t.next=41,e.$axios.$get("https://api.frytolnacestach.cz/api/users-ids?id=".concat(_.join(",")));case 41:m=t.sent;case 42:data={account:r,followers:l,users:m};case 43:o=!0,t.next=52;break;case 46:return t.prev=46,t.t0=t.catch(4),console.log("API ERROR - SLEDUJI"),console.error(t.t0),t.next=52,new Promise((function(e){return setTimeout(e,1e3)}));case 52:t.next=3;break;case 54:Object.assign(e,data);case 55:case"end":return t.stop()}}),t,null,[[4,46]])})))()}}),r=n(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"o-follower-list"},[t("div",{staticClass:"o-follower-list__outer"},[t("div",{staticClass:"o-follower-list__items"},e._l(e.users,(function(n){return t("div",{key:n.id,staticClass:"o-follower-list__item"},[t("div",{staticClass:"o-follower-list__content"},[t("div",{staticClass:"o-follower-list__image loading-image -blue"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-follower-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-follower-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 160w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 224w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 320w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 448w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w \n\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.nickname}})]):t("div",{staticClass:"o-follower-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-follower-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 160w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 224w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 320w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 448w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w \n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.nickname}})])]),e._v(" "),t("h2",{staticClass:"o-follower-list__name"},[e._v("\n                            "+e._s(n.nickname)+"\n                        ")]),e._v(" "),t("NuxtLink",{staticClass:"o-follower-list__link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1)])})),0)])]),e._v(" "),e.users===[]||null===e.users?t("client-only",["account"===e.type?t("p",[e._v("\n            Zatím nikoho nesleduješ\n        ")]):t("p",[e._v("\n            Cestovatel zatím nikoho nesleduje.\n        ")])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},644:function(e,t,n){"use strict";n.r(t);var c=n(376),o=n(374),r=n(365),l=n(375),m=n(544),d={name:"UcetSledujiPage",components:{mAccountHeader:o.default,mHeadline:r.default,mNavAccount:l.default,oFollowerList:m.default},data:function(){return{mNavAccountOpen:!1}},mounted:function(){Object(c.a)(this.$router)},head:{title:"Moje data | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Moje data na webu Frytol na cestách."},{name:"keywords",content:"Cestovatelský portál, úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Moje data | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Moje data na webu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]},methods:{menuAccountUpdate:function(e){this.mNavAccountOpen=e}}},_=n(2),component=Object(_.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -account"},[t("div",{staticClass:"t-grid__section -nav"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mAccountHeader",{on:{update:e.menuAccountUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavAccount",{attrs:{statusOpen:e.mNavAccountOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-grid__section -content"},[t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Sleduji",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oFollowerList",{attrs:{type:"account"}})],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);