(window.webpackJsonp=window.webpackJsonp||[]).push([[220,9,17,54,61,67],{403:function(e,t,n){"use strict";n.r(t);var o={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var o={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},406:function(e,t,n){"use strict";n.r(t);n(48),n(37),n(41),n(76),n(77);var o=n(31);n(58),n(12),n(33),n(74);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return l(l({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,n){if(e.date){var o=(new Date).getTime(),r=new Date(e.date).getTime()+e.duration-o;r>0?setTimeout((function(){t.updateMessageVisibility(n,"hidden")}),r):t.updateMessageVisibility(n,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},d=n(1),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(n,o){return"hidden"!==n.visibility?t("div",{key:o,class:"o-flash-messages__item"+(n.status?" -"+n.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(n.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},408:function(e,t,n){"use strict";n.r(t);var o={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},585:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(9);n(36),n(12);function r(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,o,r,l,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("useruserEmail"),o=localStorage.getItem("accountPasswordHash"),r=localStorage.getItem("accountStatus"),l=localStorage.getItem("accountNickname"),!n||"undefined"==n){e.next=24;break}return e.prev=5,e.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:o,status:r,nickname:l})});case 8:(c=e.sent).ok?(console.log("Přihlášení stále aktivní"),(d=new Date).setMonth(d.getMonth()+1),m="expires="+d,localStorage.setItem("accountEmail",n),localStorage.setItem("accountPasswordHash",o),localStorage.setItem("accountStatus",r),localStorage.setItem("accountNickname",l),document.cookie="FNCaccountEmail="+n+";"+m,document.cookie="FNCaccountPasswordHash="+o+";"+m,document.cookie="FNCaccountStatus="+r+";"+m,document.cookie="FNCaccountNickname="+l+";"+m,t.push("/ucet/profil")):401===c.userStatus?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"):404===c.userStatus?(console.log("Uživatel nenalezen"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"):(console.log("Chyba při komunikaci s API"),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"),e.next=24;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("accountEmail","undefined"),localStorage.setItem("accountPasswordHash","undefined"),localStorage.setItem("accountStatus","undefined"),localStorage.setItem("accountNickname","undefined"),document.cookie="FNCaccountEmail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountPasswordHash=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountStatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCaccountNickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},674:function(e,t,n){"use strict";n.r(t);var o=n(9),r=(n(36),n(12),{name:"OrganismsoFormPasswordLostComponent",components:{oFlashMessages:n(406).default},data:function(){return{flashMessage:[],email:""}},methods:{passwordLost:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frytolnacestach.cz/api/user-password-lost",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:e.email})});case 3:(n=t.sent).ok?(e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Email byl odeslán"}),e.email=""):400===n.status?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Uživatel nenalezen"}):e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),l=n(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-password-lost"},[t("div",{staticClass:"o-form-password-lost__outer"},[t("div",{staticClass:"o-form-password-lost__inner"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("form",{staticClass:"o-form-password-lost__form",on:{submit:function(t){return t.preventDefault(),e.passwordLost.apply(null,arguments)}}},[t("div",{staticClass:"o-form-password-lost__items"},[t("div",{staticClass:"o-form-password-lost__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"a-input -blue",attrs:{type:"text",name:"email",placeholder:"E-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("nuxt-link",{attrs:{to:"/ucet/prihlaseni"}},[e._v("Přihlásit se")])],1),e._v(" "),e._m(0)])],1)])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-form-password-lost__buttons mt-1"},[e("div",{staticClass:"o-form-password-lost__button"},[e("div",{staticClass:"m-button -blue"},[e("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[this._v("Poslat email")])])])])}],!1,null,null,null);t.default=component.exports},766:function(e,t,n){"use strict";n.r(t);var o=n(585),r=n(155),l=n(403),c=n(674),d=n(408),m={name:"UcetZepomenuteHesloPage",components:{aButtonFillFull:r.default,mHeadline:l.default,oFormPasswordLost:c.default,oHero:d.default},data:function(){return{headline:"Zapomenuté Heslo"}},head:function(){var title,e,t,n,o,r;return"Cestovatelský portál, zapomenuté heslo, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="ZAPOMENUTÉ HESLO | Cestovatelský portál Frytol na cestách",o=e="Zapomenuté Heslo k účtu na cetovatelském portálu Frytol na cestách.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"Cestovatelský portál, zapomenuté heslo, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:r="".concat("https://frytolnacestach.cz","/ucet/zapomenute-heslo")},{hid:"og:title",content:n},{hid:"og:description",content:o},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:o},{name:"twitter:image",content:t},{name:"twitter:url",content:r}],link:[{rel:"canonical",href:r}]}},mounted:function(){Object(o.a)(this.$router)}},h=n(1),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -p0 pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:e.headline,modifierCSS:" -blue"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("oFormPasswordLost")],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);