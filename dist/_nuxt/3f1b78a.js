(window.webpackJsonp=window.webpackJsonp||[]).push([[177,8,16,44,52,54],{375:function(e,t,r){"use strict";r.r(t);var n={name:"MoleculesmHeadlineComponent",components:{aButtonFill:r(376).default},props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},376:function(e,t,r){"use strict";r.r(t);var n={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1}}},o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+" hidden-print",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},378:function(e,t,r){"use strict";r.r(t);var n={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,r){"use strict";r.r(t);var n={name:"OrganismsoFlashMessagesComponent",props:{text:{type:String,required:!0},styleThema:{type:String,required:!0}}},o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return e.text?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},[t("div",{class:"o-flash-messages__item"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(e.text)}})])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(10);r(54),r(13);function o(e){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,o,l,c,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("email"),n=localStorage.getItem("password_hash"),o=localStorage.getItem("status"),l=localStorage.getItem("nickname"),!r||"undefined"==r){e.next=24;break}return e.prev=5,e.next=8,fetch("https://api.frytolnacestach.cz/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:r,password:n,status:o,nickname:l})});case 8:(c=e.sent).ok?(console.log("Přihlášení stále aktivní"),(m=new Date).setMonth(m.getMonth()+1),d="expires="+m,localStorage.setItem("email",r),localStorage.setItem("password_hash",n),localStorage.setItem("status",o),localStorage.setItem("nickname",l),document.cookie="FNCemail="+r+";"+d,document.cookie="FNCpass="+n+";"+d,document.cookie="FNCstatus="+o+";"+d,document.cookie="FNCnickname="+l+";"+d,t.push("/ucet/profil")):401===c.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"):404===c.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"),e.next=24;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},593:function(e,t,r){"use strict";r.r(t);r(68),r(27);var n=r(10),o=(r(13),r(54),{name:"OrganismsoFormRegistrationComponent",components:{oFlashMessages:r(380).default},data:function(){return{errorForm:"",successForm:"",email:"",password:"",nickname:"",termsAccepted:!1,agreementMail:!1}},methods:{register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.termsAccepted){t.next=3;break}return alert("Musíte souhlasit s obchodními podmínkami pro uživatelský účet."),t.abrupt("return");case 3:return t.prev=3,t.next=6,e.createForm();case 6:console.log("Data byla odeslaná"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),console.log(t.t0),e.errorForm="Nastala chyba při odeslání vaších udajů.";case 13:case"end":return t.stop()}}),t,null,[[3,9]])})))()},createForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frytolnacestach.cz/api/user-registration",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:e.email,password:e.password,nickname:e.nickname,agreement_mail:e.agreementMail})});case 3:if(!(r=t.sent).ok){t.next=11;break}return console.log("Registrace úspěšná"),e.successForm="Registrace úspěšná",t.next=9,e.$router.push("/ucet/registrace-dokoncena");case 9:t.next=19;break;case 11:if(201!==r.status){t.next=18;break}return console.log("Účet vytvořen, registrační e-mail odeslán."),e.succes="Účet vytvořen, registrační e-mail odeslán.",t.next=16,e.$router.push("/ucet/registrace-dokoncena");case 16:t.next=19;break;case 18:400===r.status?(console.log("Uživatel s touto e-mailovou adresou již existuje."),e.errorForm="Uživatel s touto e-mailovou adresou již existuje."):401===r.status?(console.log("Uživatel s touto přezdívkou již existuje."),e.errorForm="Uživatel s touto přezdívkou již existuje."):(console.log("Chyba při komunikaci s API"),e.errorForm="Chyba při komunikaci s API");case 19:t.next=26;break;case 21:throw t.prev=21,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 26:case"end":return t.stop()}}),t,null,[[0,21]])})))()}}}),l=r(2),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-registration"},[t("div",{staticClass:"o-form-registration__outer"},[t("div",{staticClass:"o-form-registration__inner"},[t("div",{staticClass:"o-form-registration__messages"},[t("oFlashMessages",{attrs:{text:e.errorForm,styleThema:" -error"}}),e._v(" "),t("oFlashMessages",{attrs:{text:e.successForm,styleThema:" -success"}})],1),e._v(" "),t("form",{staticClass:"o-form-registration__form",on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[t("div",{staticClass:"o-form-registration__items"},[t("div",{staticClass:"o-form-registration__item"},[t("label",{staticClass:"m-label",attrs:{for:"email"}},[e._v("Email:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"a-input -blue",attrs:{type:"email",id:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"o-form-registration__item"},[t("label",{staticClass:"m-label",attrs:{for:"password"}},[e._v("Heslo:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"a-input -blue",attrs:{type:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"o-form-registration__item"},[t("label",{staticClass:"m-label",attrs:{for:"nickname"}},[e._v("Přezdívka:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname,expression:"nickname"}],staticClass:"a-input -blue",attrs:{type:"text",id:"nickname",required:""},domProps:{value:e.nickname},on:{input:function(t){t.target.composing||(e.nickname=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"o-form-registration__item"},[t("div",{staticClass:"m-input-checkbox -blue"},[t("label",{staticClass:"m-input-checkbox__label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.termsAccepted,expression:"termsAccepted"}],staticClass:"m-input-checkbox__input",attrs:{type:"checkbox",id:"terms",required:""},domProps:{checked:Array.isArray(e.termsAccepted)?e._i(e.termsAccepted,null)>-1:e.termsAccepted},on:{change:function(t){var r=e.termsAccepted,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.termsAccepted=r.concat([null])):l>-1&&(e.termsAccepted=r.slice(0,l).concat(r.slice(l+1)))}else e.termsAccepted=o}}}),e._v(" "),t("span",{staticClass:"m-input-checkbox__checkbox"}),e._v(" "),t("span",{staticClass:"m-input-checkbox__text",attrs:{for:"terms"}},[e._v("Souhlasím s "),t("NuxtLink",{attrs:{to:"/conditions-user",target:"_blank"}},[e._v("Obchodními podmínkami")]),e._v(" (pro uživatelský účet)")],1)])])]),e._v(" "),t("div",{staticClass:"o-form-registration__item"},[t("div",{staticClass:"m-input-checkbox -blue"},[t("label",{staticClass:"m-input-checkbox__label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.agreementMail,expression:"agreementMail"}],staticClass:"m-input-checkbox__input",attrs:{type:"checkbox",id:"agreement_mail"},domProps:{checked:Array.isArray(e.agreementMail)?e._i(e.agreementMail,null)>-1:e.agreementMail},on:{change:function(t){var r=e.agreementMail,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.agreementMail=r.concat([null])):l>-1&&(e.agreementMail=r.slice(0,l).concat(r.slice(l+1)))}else e.agreementMail=o}}}),e._v(" "),t("span",{staticClass:"m-input-checkbox__checkbox"}),e._v(" "),t("span",{staticClass:"m-input-checkbox__text",attrs:{for:"agreement_mail"}},[e._v("Souhlasím se zasíláním marketingových emailů")])])])])]),e._v(" "),e._m(0)])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-form-registration__buttons mt-1"},[e("div",{staticClass:"o-form-registration__button"},[e("div",{staticClass:"m-button -blue"},[e("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[this._v("Registrovat se")])])])])}],!1,null,null,null);t.default=component.exports},694:function(e,t,r){"use strict";r.r(t);var n=r(412),o=r(148),l=r(375),c=r(378),m=r(593),d={name:"UcetRegistracePage",components:{aButtonFillFull:o.default,mHeadline:l.default,oHero:c.default,oFormRegistration:m.default},data:function(){return{headline:"Registrace"}},mounted:function(){Object(n.a)(this.$router)},head:{title:"REGISTRACE | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Registrace na webu Frytol na cestách."},{name:"keywords",content:"Cestovatelský portál, úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Registrace | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Registrace na webu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]}},h=r(2),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -p0 pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:e.headline,modifierCSS:" -blue"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("oFormRegistration")],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);