(window.webpackJsonp=window.webpackJsonp||[]).push([[28,25],{359:function(e,t,r){"use strict";r.r(t);var o={name:"OrganismsoFlashMessagesComponent",props:{text:{type:String,required:!0},styleThema:{type:String,required:!0}}},n=r(2),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return e.text?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},[t("div",{class:"o-flash-messages__item"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(e.text)}})])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,r){"use strict";r.r(t);var o=r(10),n=(r(54),r(13),{name:"OrganismsoFormProfileComponent",components:{oFlashMessages:r(359).default},data:function(){return{profile:null,localStorageEmail:"",errorForm:"",successForm:"",email:"",password:"",nickname:"",surname:"",lastname:""}},methods:{fetchProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://frytolnacestach-api.vercel.app/api/user-profile/".concat(e.localStorageEmail));case 3:if(!(r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:e.profile=t.sent,t.next=12;break;case 10:console.log("Chyba při komunikaci s API"),e.errorForm="Chyba při komunikaci s API";case 12:t.next=19;break;case 14:throw t.prev=14,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))()},editProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://frytolnacestach-api.vercel.app/api/user-profile-edit/".concat(e.localStorageEmail),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({surname:e.surname,lastname:e.lastname})});case 3:t.sent.ok?(console.log("Změny byly uložené"),e.successForm="Změny byly uložené"):(console.log("Chyba při komunikaci s API"),e.errorForm="Chyba při komunikaci s API"),t.next=12;break;case 7:throw t.prev=7,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.localStorageEmail=localStorage.getItem("email"),t.next=3,e.fetchProfile();case 3:e.profile&&(e.surname=e.profile[0].surname,e.lastname=e.profile[0].lastname);case 4:case"end":return t.stop()}}),t)})))()}}),l=r(2),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-profile"},[t("div",{staticClass:"o-form-profile__outer"},[t("div",{staticClass:"o-form-profile__inner"},[t("div",{staticClass:"o-form-profile__messages"},[t("oFlashMessages",{attrs:{text:e.errorForm,styleThema:" -error"}}),e._v(" "),t("oFlashMessages",{attrs:{text:e.successForm,styleThema:" -success"}})],1),e._v(" "),t("form",{staticClass:"o-form-profile__form",on:{submit:function(t){return t.preventDefault(),e.editProfile.apply(null,arguments)}}},[t("div",{staticClass:"o-form-profile__items"},[t("div",{staticClass:"o-form-profile__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],staticClass:"a-input -blue",attrs:{type:"text",name:"surname",placeholder:"Jméno"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"o-form-profile__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],staticClass:"a-input -blue",attrs:{type:"text",name:"lastname",placeholder:"Příjmení"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}})])]),e._v(" "),e._m(0)])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-form-profile__buttons mt-1"},[e("div",{staticClass:"o-form-profile__button"},[e("div",{staticClass:"m-button -blue"},[e("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[this._v("Upravit údaje")])])])])}],!1,null,null,null);t.default=component.exports}}]);