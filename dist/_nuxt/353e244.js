(window.webpackJsonp=window.webpackJsonp||[]).push([[115,7,8,9,55],{360:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))]),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},371:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmAccountHeaderComponent",data:function(){return{nickname:null,email:null,parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}},mounted:function(){var e=localStorage.getItem("nickname"),t=localStorage.getItem("email");this.nickname=e,this.email=t}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[null===e.nickname?t("div",[e._m(0)]):e._e(),e._v(" "),null!==e.nickname?t("client-only",[t("div",{staticClass:"m-account-header"},[t("div",{staticClass:"m-account-header__outer"},[t("div",{staticClass:"m-account-header__inner"},[t("div",{staticClass:"m-account-header__image"},[t("div",{staticClass:"m-account-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-account-header__text"},[t("span",{staticClass:"m-account-header__nickname"},[e._v(e._s(e.nickname))]),e._v(" "),t("span",{staticClass:"m-account-header__email"},[e._v(e._s(e.email))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-account-header"},[t("div",{staticClass:"skeleton-m-account-header__outer"},[t("div",{staticClass:"skeleton-m-account-header__inner"},[t("div",{staticClass:"skeleton-m-account-header__image"},[t("div",{staticClass:"skeleton-m-account-header__image-file loading-image -skeleton-dark-blue"})]),e._v(" "),t("div",{staticClass:"skeleton-m-account-header__text"},[t("span",{staticClass:"skeleton-m-account-header__nickname loading-image -skeleton-dark-blue"}),e._v(" "),t("span",{staticClass:"skeleton-m-account-header__email loading-image -skeleton-dark-blue"})])])])])}],!1,null,null,null);t.default=component.exports},372:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmNavAccountComponent",props:{statusOpen:{type:Boolean,required:!0}},data:function(){return{email:this.email}},methods:{logout:function(){localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}},mounted:function(){var e=localStorage.getItem("email");this.email=e}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-account",class:{"-open":e.statusOpen},attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-account__outer"},[t("div",{staticClass:"m-nav-account__inner"},[t("ul",{staticClass:"m-nav-account__items"},[e.email?t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[e._v("Základní informace")])],1):e._e(),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===e.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[e._v("Chci navštívit")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -review",class:{"-active":"/ucet/profil/recenze"===e.$route.path},attrs:{to:"/ucet/profil/recenze","exact-active-class":"-active"}},[e._v("Recenzoval jsem")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===e.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[e._v("Změna hesla")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===e.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[e._v("Moje data")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[e._v("Smazaní účtu")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item -logout"},[t("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:e.logout}},[e._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);t.default=component.exports},373:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(10);n(54),n(13);function o(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,c,o,l,r,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("email"),c=localStorage.getItem("password_hash"),o=localStorage.getItem("status"),l=localStorage.getItem("nickname"),!n||"undefined"==n){e.next=27;break}return e.prev=5,e.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:c,status:o,nickname:l})});case 8:(r=e.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("email",n),localStorage.setItem("password_hash",c),localStorage.setItem("status",o),localStorage.setItem("nickname",l),document.cookie="FNCemail="+n+";"+d,document.cookie="FNCpass="+c+";"+d,document.cookie="FNCstatus="+o+";"+d,document.cookie="FNCnickname="+l+";"+d):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")),e.next=25;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni"),e.t0;case 25:e.next=36;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni");case 36:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},389:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(116);var o=n(149),l=n(91);function r(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||Object(o.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},415:function(e,t,n){"use strict";n.r(t);n(229),n(13),n(28),n(66);var c=n(389),o=n(10),l=(n(54),n(44),n(43),n(113),n(67),{name:"OrganismsoReviewItemListAccountComponent",components:{mHeadline:n(360).default},props:{account:{type:Array,required:!0}},data:function(){return{localStorageEmail:"",localStoragePasswordHash:"",reviews:null,places:[],images:[],placesContinents:this.placesContinents,imagesPlacesContinents:this.imagesPlacesContinents,placesStates:this.placesStates,imagesPlacesStates:this.imagesPlacesStates,placesCities:this.placesCities,imagesPlacesCities:this.imagesPlacesCities,placesRegions:this.placesRegions,imagesPlacesRegions:this.imagesPlacesRegions,placesSpots:this.placesSpots,imagesPlacesSpots:this.imagesPlacesSpots}},methods:{mapType:function(e){return"continent"===e?"svet/kontinent":"state"===e?"svet/stat":"region"===e?"svet/region":"city"===e?"svet/mesto":"spot"===e?"svet/misto":void 0}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,data,o,l,r,m,d,_,v,h,f,k,y,C,x,w,T,S,j,N,I,O,z,M,A;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.localStorageEmail=localStorage.getItem("email"),e.localStoragePasswordHash=localStorage.getItem("password_hash"),n=!1,data=null;case 3:if(n){t.next=112;break}return t.prev=4,t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/user-review?id_user=".concat(e.account[0].id));case 7:if(o=t.sent,l=o.filter((function(e){return"continent"===e.type})).map((function(e){return e.id_place}))||[],r=o.filter((function(e){return"state"===e.type})).map((function(e){return e.id_place}))||[],m=o.filter((function(e){return"city"===e.type})).map((function(e){return e.id_place}))||[],d=o.filter((function(e){return"region"===e.type})).map((function(e){return e.id_place}))||[],_=o.filter((function(e){return"spot"===e.type})).map((function(e){return e.id_place}))||[],!(l.length>0)){t.next=19;break}return t.next=16,e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=".concat(l.join(",")));case 16:t.t0=t.sent,t.next=20;break;case 19:t.t0=[];case 20:if(v=t.t0,!((h=v.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=28;break}return t.next=25,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(h.join(",")));case 25:t.t1=t.sent,t.next=29;break;case 28:t.t1=[];case 29:if(f=t.t1,!(r.length>0)){t.next=36;break}return t.next=33,e.$axios.$get("https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=".concat(r.join(",")));case 33:t.t2=t.sent,t.next=37;break;case 36:t.t2=[];case 37:if(k=t.t2,!((y=k.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=45;break}return t.next=42,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(y.join(",")));case 42:t.t3=t.sent,t.next=46;break;case 45:t.t3=[];case 46:if(C=t.t3,!(m.length>0)){t.next=53;break}return t.next=50,e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=".concat(m.join(",")));case 50:t.t4=t.sent,t.next=54;break;case 53:t.t4=[];case 54:if(x=t.t4,!((w=x.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=62;break}return t.next=59,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(w.join(",")));case 59:t.t5=t.sent,t.next=63;break;case 62:t.t5=[];case 63:if(T=t.t5,!(d.length>0)){t.next=70;break}return t.next=67,e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=".concat(d.join(",")));case 67:t.t6=t.sent,t.next=71;break;case 70:t.t6=[];case 71:if(S=t.t6,!((j=S.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=79;break}return t.next=76,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(j.join(",")));case 76:t.t7=t.sent,t.next=80;break;case 79:t.t7=[];case 80:if(N=t.t7,!(_.length>0)){t.next=87;break}return t.next=84,e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=".concat(_.join(",")));case 84:t.t8=t.sent,t.next=88;break;case 87:t.t8=[];case 88:if(I=t.t8,!((O=I.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=96;break}return t.next=93,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(O.join(",")));case 93:t.t9=t.sent,t.next=97;break;case 96:t.t9=[];case 97:z=t.t9,M=[].concat(Object(c.a)(v),Object(c.a)(k),Object(c.a)(x),Object(c.a)(S),Object(c.a)(I)),A=[].concat(Object(c.a)(f),Object(c.a)(C),Object(c.a)(T),Object(c.a)(N),Object(c.a)(z)),data={reviews:o,places:M,images:A,placesContinents:v,imagesPlacesContinents:f,placesStates:k,imagesPlacesStates:C,placesCities:x,imagesPlacesCities:T,placesRegions:S,imagesPlacesRegions:N,placesSpots:I,imagesPlacesSpots:z},n=!0,t.next=110;break;case 104:return t.prev=104,t.t10=t.catch(4),console.log("API ERROR - MOJE HODNOCENÍ"),console.error(t.t10),t.next=110,new Promise((function(e){return setTimeout(e,1e3)}));case 110:t.next=3;break;case 112:Object.assign(e,data);case 113:case"end":return t.stop()}}),t,null,[[4,104]])})))()}}),r=n(2),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Napsané recenze",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),null===e.reviews?t("div",[t("div",{staticClass:"skeleton-o-review-item-list"},[t("div",{staticClass:"skeleton-o-review-item-list__outer"},[t("div",{staticClass:"skeleton-o-review-item-list__inner"},[t("div",{staticClass:"skeleton-o-review-item-list__items"},e._l(3,(function(n){return t("div",{key:n,staticClass:"skeleton-o-review-item-list__item"},[e._m(0,!0)])})),0)])])])]):e._e(),e._v(" "),null!==e.reviews?t("client-only",[e.reviews&&e.reviews.length>0&&e.places&&e.places.length>0?t("div",{staticClass:"o-review-item-list-account"},[t("div",{staticClass:"o-review-item-list-account__outer"},[t("div",{staticClass:"o-review-item-list-account__inner"},[t("div",{staticClass:"o-review-item-list-account__items"},e._l(e.reviews,(function(n){return t("div",{key:n.id,staticClass:"o-review-item-list-account__item"},[t("div",{staticClass:"o-review-item-list-account__content"},[t("div",{staticClass:"o-review-item-list-account__image loading-image -blue"},[e.images&&e.images.find((function(image){return e.places.find((function(e){return e.slug===image.name&&e.type_place===image.type&&e.type_place===n.type&&e.id===n.id_place}))}))?t("div",{staticClass:"o-review-item-list-account__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-review-item-list-account__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px","data-srcset":"\n                                                    https://image.frytolnacestach.cz/storage".concat(e.images.find((function(image){return e.places.find((function(e){return e.slug===image.name&&e.type_place===image.type&&e.type_place===n.type&&e.id===n.id_place}))})).source+e.images.find((function(image){return e.places.find((function(e){return e.slug===image.name&&e.type_place===image.type&&e.type_place===n.type&&e.id===n.id_place}))})).name,"-345.webp 345w,\n                                                    https://image.frytolnacestach.cz/storage").concat(e.images.find((function(image){return e.places.find((function(e){return e.slug===image.name&&e.type_place===image.type&&e.type_place===n.type&&e.id===n.id_place}))})).source+e.images.find((function(image){return e.places.find((function(e){return e.slug===image.name&&e.type_place===image.type&&e.type_place===n.type&&e.id===n.id_place}))})).name,"-690-2x.webp 690w\n                                                    "),"data-src":"https://image.frytolnacestach.cz/storage".concat(e.images.find((function(image){return e.places.find((function(e){return e.slug===image.name&&e.type_place===image.type&&e.type_place===n.type&&e.id===n.id_place}))})).source+e.images.find((function(image){return e.places.find((function(e){return e.slug===image.name&&e.type_place===image.type&&e.type_place===n.type&&e.id===n.id_place}))})).name,".webp"),alt:e.places.find((function(e){return e.id===n.id_place&&e.type_place===n.type})).name}})]):t("div",{staticClass:"o-review-item-list-account__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-review-item-list-account__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px","data-srcset":"\n                                                    https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w\n                                                    https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w\n                                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.places.find((function(e){return e.id===n.id_place&&e.type_place===n.type})).name}})]),e._v(" "),t("NuxtLink",{staticClass:"o-review-item-list-account__image-link",attrs:{to:"/".concat(e.mapType(n.type),"/").concat(e.places.find((function(e){return e.id===n.id_place&&e.type_place===n.type})).slug),"aria-label":"Přejít na místo ".concat(e.places.find((function(e){return e.id===n.id_place&&e.type_place===n.type})).name)}})],1),e._v(" "),t("div",{staticClass:"o-review-item-list-account__text"},[t("div",{staticClass:"o-review-item-list-account__review"},[t("div",{staticClass:"o-review-item-list-account__stars"},[t("div",{staticClass:"o-review-item-list-account__star",class:{"-active":n.rating>0}}),e._v(" "),t("div",{staticClass:"o-review-item-list-account__star",class:{"-active":n.rating>1}}),e._v(" "),t("div",{staticClass:"o-review-item-list-account__star",class:{"-active":n.rating>2}}),e._v(" "),t("div",{staticClass:"o-review-item-list-account__star",class:{"-active":n.rating>3}}),e._v(" "),t("div",{staticClass:"o-review-item-list-account__star",class:{"-active":n.rating>4}})]),e._v(" "),t("h3",{staticClass:"o-review-item-list-account__name"},[t("NuxtLink",{staticClass:"o-review-item-list-account__name-link",attrs:{to:"/".concat(e.mapType(n.type),"/").concat(e.places.find((function(e){return e.id===n.id_place&&e.type_place===n.type})).slug),"aria-label":"Přejít na profil uživatele ".concat(e.places.find((function(e){return e.id===n.id_place&&e.type_place===n.type})).nickname)}},[e._v(e._s(e.places.find((function(e){return e.id===n.id_place&&e.type_place===n.type})).name))])],1),e._v(" "),t("p",{staticClass:"o-review-item-list-account__perex"},[e._v(e._s(n.text))])])])])])})),0)])])]):e._e()]):e._e(),e._v(" "),e.reviews&&Array.isArray(e.reviews)&&0===e.reviews.length?t("client-only",[t("p",[e._v("\n                Zatím tu nemáš žádnou recenzi. Co takhle projít "),t("nuxt-link",{attrs:{to:"/svet"}},[e._v("svět")]),e._v(" a recenzovat místo co si navštívil?\n            ")],1)]):e._e()],1)])}),[function(){var e=this._self._c;return e("div",{staticClass:"skeleton-o-review-item-list__content"},[e("div",{staticClass:"skeleton-o-review-item-list__image loading-image -skeleton-blue"}),this._v(" "),e("div",{staticClass:"skeleton-o-review-item-list__text loading-image -skeleton-blue"})])}],!1,null,null,null);t.default=component.exports},475:function(e,t,n){"use strict";n.r(t);var c=n(10),o=(n(54),n(66),n(13),n(67),n(373)),l=n(371),r=n(360),m=n(372),d=n(415),_={name:"UcetHodnoceniPage",components:{mAccountHeader:l.default,mHeadline:r.default,mNavAccount:m.default,oReviewItemListAccount:d.default},data:function(){return{mNavAccountOpen:!1,email:null,passwordHash:null,account:""}},head:{title:"MÍSTA CO JSEM HODNOTIL | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Místa co jsem hodnotil, které jsou na webu Frytol na cestách."},{name:"keywords",content:"Cestovatelský portál, úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Místa co jsem hodnotil | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Místa co jsem hodnotil, které jsou na webu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,data,c,l,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(o.a)(e.$router),n=!1,data=null,c=localStorage.getItem("email"),l=localStorage.getItem("password_hash"),e.email=c,e.passwordHash=l;case 8:if(n){t.next=25;break}return t.prev=9,t.next=12,e.$axios.$get("https://api.frytolnacestach.cz/api/user-authentication?email=".concat(encodeURIComponent(e.email),"&password_hash=").concat(encodeURIComponent(e.passwordHash)));case 12:r=t.sent,data={account:r},n=!0,t.next=23;break;case 17:return t.prev=17,t.t0=t.catch(9),console.log("API ERROR - HODNOTIL JSEM"),console.error(t.t0),t.next=23,new Promise((function(e){return setTimeout(e,1e3)}));case 23:t.next=8;break;case 25:Object.assign(e,data);case 26:case"end":return t.stop()}}),t,null,[[9,17]])})))()},methods:{menuAccountUpdate:function(e){this.mNavAccountOpen=e}}},v=n(2),component=Object(v.a)(_,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -account"},[t("div",{staticClass:"t-grid__section -nav"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mAccountHeader",{on:{update:e.menuAccountUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavAccount",{attrs:{statusOpen:e.mNavAccountOpen}})],1)])]),e._v(" "),t("div",{staticClass:"t-grid__section -content"},[t("section",{staticClass:"t-section -padding-x -p0 pb-4"},[t("div",{staticClass:"t-section__inner"},[t("oReviewItemListAccount",{attrs:{account:e.account}})],1)])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);