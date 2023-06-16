(window.webpackJsonp=window.webpackJsonp||[]).push([[99,5,6,7,25,26,28],{357:function(e,t,n){"use strict";n.r(t);var o={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},c=n(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))]),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},359:function(e,t,n){"use strict";n.r(t);var o={name:"OrganismsoFlashMessagesComponent",props:{text:{type:String,required:!0},styleThema:{type:String,required:!0}}},c=n(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return e.text?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},[t("div",{class:"o-flash-messages__item"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(e.text)}})])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},369:function(e,t,n){"use strict";n.r(t);var o={name:"MoleculesmAccountHeaderComponent",data:function(){return{nickname:null,email:null}},methods:{},mounted:function(){var e=localStorage.getItem("nickname"),t=localStorage.getItem("email");this.nickname=e,this.email=t}},c=n(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[null===e.nickname?t("div",[e._m(0)]):e._e(),e._v(" "),null!==e.nickname?t("client-only",[t("div",{staticClass:"m-account-header"},[t("div",{staticClass:"m-account-header__outer"},[t("div",{staticClass:"m-account-header__inner"},[t("div",{staticClass:"m-account-header__image"},[t("div",{staticClass:"m-account-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-account-header__text"},[t("span",{staticClass:"m-account-header__nickname"},[e._v(e._s(e.nickname))]),e._v(" "),t("span",{staticClass:"m-account-header__email"},[e._v(e._s(e.email))])])])])])]):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-account-header"},[t("div",{staticClass:"skeleton-m-account-header__outer"},[t("div",{staticClass:"skeleton-m-account-header__inner"},[t("div",{staticClass:"skeleton-m-account-header__image"},[t("div",{staticClass:"skeleton-m-account-header__image-file loading-image -skeleton-dark-blue"})]),e._v(" "),t("div",{staticClass:"skeleton-m-account-header__text"},[t("span",{staticClass:"skeleton-m-account-header__nickname loading-image -skeleton-dark-blue"}),e._v(" "),t("span",{staticClass:"skeleton-m-account-header__email loading-image -skeleton-dark-blue"})])])])])}],!1,null,null,null);t.default=component.exports},370:function(e,t,n){"use strict";n.r(t);var o={name:"MoleculesmNavAccountComponent",data:function(){return{email:this.email}},methods:{logout:function(){localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",this.$router.push("/ucet/prihlaseni")}},mounted:function(){var e=localStorage.getItem("email");this.email=e}},c=n(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-account",attrs:{role:"navigation"}},[t("div",{staticClass:"m-nav-account__outer"},[t("div",{staticClass:"m-nav-account__inner"},[t("ul",{staticClass:"m-nav-account__items"},[e.email?t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -setting",class:{"-active":"/ucet/profil"===e.$route.path},attrs:{to:"/ucet/profil","exact-active-class":"-active"}},[e._v("Základní informace")])],1):e._e(),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -flag",class:{"-active":"/ucet/profil/navstivena-mista"===e.$route.path},attrs:{to:"/ucet/profil/navstivena-mista","exact-active-class":"-active"}},[e._v("Navštívená místa")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -calendar",class:{"-active":"/ucet/profil/chci-navstivit"===e.$route.path},attrs:{to:"/ucet/profil/chci-navstivit","exact-active-class":"-active"}},[e._v("Chci navštívit")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -key",class:{"-active":"/ucet/profil/zmena-hesla"===e.$route.path},attrs:{to:"/ucet/profil/zmena-hesla","exact-active-class":"-active"}},[e._v("Změna hesla")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -data",class:{"-active":"/ucet/profil/moje-data"===e.$route.path},attrs:{to:"/ucet/profil/moje-data","exact-active-class":"-active"}},[e._v("Moje data")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item"},[t("NuxtLink",{staticClass:"js_m-nav-account__link m-nav-account__link -trash",attrs:{to:"/ucet/profil/smazani-uctu"}},[e._v("Smazaní účtu")])],1),e._v(" "),t("li",{staticClass:"m-nav-account__item -logout"},[t("a",{staticClass:"js_m-nav-account__link m-nav-account__link -exit",on:{click:e.logout}},[e._v("Odhlásit se")])])])])])])}),[],!1,null,null,null);t.default=component.exports},371:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(10);n(54),n(13);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,o,c,l,r,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("email"),o=localStorage.getItem("password_hash"),c=localStorage.getItem("status"),l=localStorage.getItem("nickname"),!n||"undefined"==n){e.next=27;break}return e.prev=5,e.next=8,fetch("https://frytolnacestach-api.vercel.app/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:o,status:c,nickname:l})});case 8:(r=e.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("email",n),localStorage.setItem("password_hash",o),localStorage.setItem("status",c),localStorage.setItem("nickname",l),document.cookie="FNCemail="+n+";"+d,document.cookie="FNCpass="+o+";"+d,document.cookie="FNCstatus="+c+";"+d,document.cookie="FNCnickname="+l+";"+d):401===r.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):404===r.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni")),e.next=25;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni"),e.t0;case 25:e.next=36;break;case 27:console.log("Uživatel odhlášen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t.push("/ucet/prihlaseni");case 36:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},402:function(e,t,n){"use strict";n.r(t);var o=n(10),c=(n(13),n(54),{name:"OrganismsoFlashMessagesAccountComponent",components:{oFlashMessages:n(359).default},data:function(){return{profile:null,errorForm:"",successForm:"",needActivation:!1,email:this.email,code_activation:""}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"2"===localStorage.getItem("status")&&(e.needActivation=!0),n=localStorage.getItem("email"),e.email=n,t.next=3,e.fetchProfile();case 3:e.profile&&e.profile[0]&&(e.code_activation=e.profile[0].code_activation);case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://frytolnacestach-api.vercel.app/api/user-profile/".concat(e.email));case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.json();case 7:e.profile=t.sent,t.next=12;break;case 10:console.log("Chyba při komunikaci s API"),e.errorForm="Chyba při komunikaci s API";case 12:t.next=19;break;case 14:throw t.prev=14,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))()},resendActivationEmail:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.mailActivation();case 2:case"end":return t.stop()}}),t)})))()},mailActivation:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://frytolnacestach-api.vercel.app/api/user-activation-email",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:e.email,code_activation:e.code_activation})});case 3:(n=t.sent).ok||201===n.status?(console.log("Aktivační email byl odeslán"),e.successForm="Aktivační email byl odeslán"):(console.log("Chyba při komunikaci s API"),e.errorForm="Chyba při komunikaci s API"),t.next=12;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),l=n(2),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-full"},[t("oFlashMessages",{attrs:{text:e.errorForm,styleThema:" -error"}}),e._v(" "),t("oFlashMessages",{attrs:{text:e.successForm,styleThema:" -success"}}),e._v(" "),e.needActivation?t("div",{staticClass:"o-flash-messages-account"},[t("div",{staticClass:"o-flash-messages-account__items"},[t("div",{class:"o-flash-messages-account__item -error"},[t("div",{staticClass:"o-flash-messages-account__outer"},[t("div",{staticClass:"o-flash-messages-account__inner"},[t("span",{staticClass:"o-flash-messages-account__text"},[e._v("\n                            Účet je potřeba Aktivovat. Do emailu by vám při registraci měl přijít aktivační odkaz."),t("br"),e._v(" "),t("a",{attrs:{href:"#"},on:{click:e.resendActivationEmail}},[e._v("Znovu zaslat aktivační email")])])])])])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,n){"use strict";n.r(t);var o=n(10),c=(n(54),n(13),{name:"OrganismsoFormProfileComponent",components:{oFlashMessages:n(359).default},data:function(){return{profile:null,localStorageEmail:"",errorForm:"",successForm:"",email:"",password:"",nickname:"",surname:"",lastname:""}},methods:{fetchProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://frytolnacestach-api.vercel.app/api/user-profile/".concat(e.localStorageEmail));case 3:if(!(n=t.sent).ok){t.next=10;break}return t.next=7,n.json();case 7:e.profile=t.sent,t.next=12;break;case 10:console.log("Chyba při komunikaci s API"),e.errorForm="Chyba při komunikaci s API";case 12:t.next=19;break;case 14:throw t.prev=14,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))()},editProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://frytolnacestach-api.vercel.app/api/user-profile-edit/".concat(e.localStorageEmail),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({surname:e.surname,lastname:e.lastname})});case 3:t.sent.ok?(console.log("Změny byly uložené"),e.successForm="Změny byly uložené"):(console.log("Chyba při komunikaci s API"),e.errorForm="Chyba při komunikaci s API"),t.next=12;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.localStorageEmail=localStorage.getItem("email"),t.next=3,e.fetchProfile();case 3:e.profile&&(e.surname=e.profile[0].surname,e.lastname=e.profile[0].lastname);case 4:case"end":return t.stop()}}),t)})))()}}),l=n(2),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[null===e.profile?t("div",[e._m(0)]):e._e(),e._v(" "),null!==e.profile?t("client-only",[t("div",{staticClass:"o-form-profile"},[t("div",{staticClass:"o-form-profile__outer"},[t("div",{staticClass:"o-form-profile__inner"},[t("div",{staticClass:"o-form-profile__messages"},[t("oFlashMessages",{attrs:{text:e.errorForm,styleThema:" -error"}}),e._v(" "),t("oFlashMessages",{attrs:{text:e.successForm,styleThema:" -success"}})],1),e._v(" "),t("form",{staticClass:"o-form-profile__form",on:{submit:function(t){return t.preventDefault(),e.editProfile.apply(null,arguments)}}},[t("div",{staticClass:"o-form-profile__items"},[t("div",{staticClass:"o-form-profile__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],staticClass:"a-input -blue",attrs:{type:"text",name:"surname",placeholder:"Jméno"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"o-form-profile__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],staticClass:"a-input -blue",attrs:{type:"text",name:"lastname",placeholder:"Příjmení"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"o-form-profile__buttons mt-1"},[t("div",{staticClass:"o-form-profile__button"},[t("div",{staticClass:"m-button -blue"},[t("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[e._v("Upravit údaje")])])])])])])])])]):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-form-profile"},[t("div",{staticClass:"skeleton-o-form-profile__outer"},[t("div",{staticClass:"skeleton-o-form-profile__inner"},[t("div",{staticClass:"skeleton-o-form-profile__form"},[t("div",{staticClass:"skeleton-o-form-profile__items"},[t("div",{staticClass:"skeleton-o-form-profile__item"},[t("div",{staticClass:"skeleton-a-input loading-image -skeleton-blue"})]),e._v(" "),t("div",{staticClass:"skeleton-o-form-profile__item"},[t("div",{staticClass:"skeleton-a-input loading-image -skeleton-blue"})])]),e._v(" "),t("div",{staticClass:"skeleton-o-form-profile__buttons mt-1"},[t("div",{staticClass:"skeleton-o-form-profile__button"},[t("div",{staticClass:"skeleton-m-button -blue"},[t("div",{staticClass:"skeleton-m-button__input loading-image -skeleton-blue"})])])])])])])])}],!1,null,null,null);t.default=component.exports},447:function(e,t,n){"use strict";n.r(t);var o=n(371),c=n(369),l=n(357),r=n(370),m=n(402),d=n(403),v={name:"UcetProfilPage",components:{mAccountHeader:c.default,mHeadline:l.default,mNavAccount:r.default,oFlashMessagesAccount:m.default,oFormProfile:d.default},mounted:function(){Object(o.a)(this.$router)},head:{title:"PROFIL | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Profil účtu na webu Frytol na cestách."},{name:"keywords",content:"Cestovatelský portál, úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Profil účtu"},{hid:"og:description",content:"Profil účtu na webu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]}},_=n(2),component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("oFlashMessagesAccount"),e._v(" "),t("section",{staticClass:"t-section -padding-x -padding-y -p0 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -account"},[t("div",{staticClass:"t-grid__section -nav"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mAccountHeader")],1)]),e._v(" "),t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavAccount")],1)])]),e._v(" "),t("div",{staticClass:"t-grid__section -content"},[t("section",{staticClass:"t-section -padding-x -p0"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Základní informace",styleThema:" -account -blue",styleAlign:"",styleGap:""}}),e._v(" "),t("oFormProfile")],1)])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);