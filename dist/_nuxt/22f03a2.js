(window.webpackJsonp=window.webpackJsonp||[]).push([[65,55,134],{405:function(e,t,n){"use strict";n.r(t);n(48),n(37),n(41),n(74),n(75);var o=n(31);n(58),n(12),n(33),n(72);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return l(l({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,n){if(e.date){var o=(new Date).getTime(),r=new Date(e.date).getTime()+e.duration-o;r>0?setTimeout((function(){t.updateMessageVisibility(n,"hidden")}),r):t.updateMessageVisibility(n,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},c=n(1),component=Object(c.a)(m,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(n,o){return"hidden"!==n.visibility?t("div",{key:o,class:"o-flash-messages__item"+(n.status?" -"+n.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(n.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},616:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoFormProfileComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-form-profile"},[t("div",{staticClass:"skeleton-o-form-profile__outer"},[t("div",{staticClass:"skeleton-o-form-profile__inner"},[t("div",{staticClass:"skeleton-o-form-profile__form"},[t("div",{staticClass:"skeleton-o-form-profile__items"},[t("div",{staticClass:"skeleton-o-form-profile__item"},[t("div",{class:"skeleton-a-input loading-image"+e.styleThema})]),e._v(" "),t("div",{staticClass:"skeleton-o-form-profile__item"},[t("div",{class:"skeleton-a-input loading-image"+e.styleThema})])]),e._v(" "),t("div",{staticClass:"skeleton-o-form-profile__buttons mt-1"},[t("div",{staticClass:"skeleton-o-form-profile__button"},[t("div",{staticClass:"skeleton-m-button -blue"},[t("div",{class:"skeleton-m-button__input loading-image"+e.styleThema})])])])])])])])}),[],!1,null,null,null);t.default=component.exports},662:function(e,t,n){"use strict";n.r(t);n(57),n(32);var o=n(9),r=(n(36),n(12),n(256),n(616)),l=n(405),m={name:"OrganismsoFormProfileComponent",components:{skeletonoFormProfile:r.default,oFlashMessages:l.default},props:{account:{type:Array,required:!0}},data:function(){return{flashMessage:[],skeleton:!0,profile:null,email:"",password:"",nickname:"",surname:"",lastname:"",agreementMail:"",settingAuthorName:null,urls:[{url:""}],seo_tags:[{tag:""}]}},methods:{changeName:function(){this.surname&&this.lastname||1!==this.settingAuthorName&&2!==this.settingAuthorName||(this.settingAuthorName=3)},fetchProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.account||0===e.account.length){t.next=28;break}return t.prev=1,t.next=4,fetch("https://api.frytolnacestach.cz/api/user-profile/".concat(e.account[0].email));case 4:if(!(n=t.sent).ok){t.next=19;break}return t.next=8,n.json();case 8:e.profile=t.sent,e.nickname=e.profile[0].nickname,e.surname=e.profile[0].surname,e.lastname=e.profile[0].lastname,e.urls=e.profile[0].urls,e.seo_tags=e.profile[0].seo_tags,e.agreementMail=e.profile[0].agreement_mail,e.settingAuthorName=e.profile[0].setting_author_name,e.skeleton=!1,t.next=20;break;case 19:e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"});case 20:t.next=26;break;case 22:throw t.prev=22,t.t0=t.catch(1),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 26:t.next=29;break;case 28:e.skeleton=!1;case 29:case"end":return t.stop()}}),t,null,[[1,22]])})))()},editProfile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.account||0===e.account.length){t.next=14;break}return t.prev=1,t.next=4,fetch("https://api.frytolnacestach.cz/api/user-profile-edit/".concat(e.account[0].email),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({surname:e.surname,lastname:e.lastname,agreement_mail:e.agreementMail,urls:e.urls,seo_tags:e.seo_tags,setting_author_name:e.settingAuthorName})});case 4:t.sent.ok?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Změny byly uložené"}):e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(1),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 12:t.next=15;break;case 14:e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to že nejsi přihlášen"});case 15:case"end":return t.stop()}}),t,null,[[1,8]])})))()},addUrlInput:function(){this.urls&&this.urls.length<32?this.urls.push({url:""}):this.urls||(this.urls=[{url:""}])},addTagInput:function(){this.seo_tags&&this.seo_tags.length<5?this.seo_tags.push({tag:""}):this.seo_tags||(this.seo_tags=[{tag:""}])},removeUrlInput:function(e){this.urls.splice(e,1)},removeTagInput:function(e){this.seo_tags.splice(e,1)}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchProfile();case 2:case"end":return t.stop()}}),t)})))()},watch:{account:{handler:"fetchProfile",immediate:!0},surname:function(e,t){this.changeName()},lastname:function(e,t){this.changeName()}}},c=n(1),component=Object(c.a)(m,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[e.skeleton?t("skeletonoFormProfile",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),e.skeleton?e._e():t("client-only",[t("div",{staticClass:"o-form-profile"},[t("div",{staticClass:"o-form-profile__outer"},[t("div",{staticClass:"o-form-profile__inner"},[t("div",{staticClass:"o-form-profile__messages"},[e.flashMessage?t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}):e._e()],1),e._v(" "),t("form",{staticClass:"o-form-profile__form",on:{submit:function(t){return t.preventDefault(),e.editProfile.apply(null,arguments)}}},[t("div",{staticClass:"o-form-profile__items"},[t("div",{staticClass:"o-form-profile__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],staticClass:"a-input -blue",attrs:{type:"text",name:"surname",placeholder:"Jméno"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"o-form-profile__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],staticClass:"a-input -blue",attrs:{type:"text",name:"lastname",placeholder:"Příjmení"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"m-input-checkbox -blue"},[t("label",{staticClass:"m-input-checkbox__label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.agreementMail,expression:"agreementMail"}],staticClass:"m-input-checkbox__input",attrs:{type:"checkbox",id:"agreement_mail"},domProps:{checked:Array.isArray(e.agreementMail)?e._i(e.agreementMail,null)>-1:e.agreementMail},on:{change:function(t){var n=e.agreementMail,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&(e.agreementMail=n.concat([null])):l>-1&&(e.agreementMail=n.slice(0,l).concat(n.slice(l+1)))}else e.agreementMail=r}}}),e._v(" "),t("span",{staticClass:"m-input-checkbox__checkbox"}),e._v(" "),t("span",{staticClass:"m-input-checkbox__text",attrs:{for:"agreement_mail"}},[e._v("Souhlasím se zasíláním marketingových emailů")])])]),e._v(" "),t("div",{staticClass:"o-form-profile__group"},[t("label",{staticClass:"o-form-profile__label -strong"},[e._v("Podoba jména u obsahu:")]),e._v(" "),t("div",{staticClass:"o-form-profile__item -flex"},[t("div",{staticClass:"m-input-radio -blue"},[t("label",{staticClass:"m-input-radio__label",class:{"-disabled":!e.surname||!e.lastname}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.settingAuthorName,expression:"settingAuthorName"}],staticClass:"m-input-radio__input",attrs:{type:"radio",id:"agreement_mail",value:"1",disabled:!e.surname||!e.lastname},domProps:{checked:e._q(e.settingAuthorName,"1")},on:{change:function(t){e.settingAuthorName="1"}}}),e._v(" "),t("span",{staticClass:"m-input-radio__radio"}),e._v(" "),t("span",{staticClass:"m-input-radio__text",attrs:{for:"agreement_mail"}},[e._v("\n                                                "+e._s(e.surname?e.surname:"Jméno")+" "+e._s(e.lastname?e.lastname:"Přijmení")+" ("+e._s(e.nickname)+")"+e._s(e.surname&&e.lastname?"":" - Nejdříve je nutné vyplniť jméno i příjmené")+"\n                                            ")])]),e._v(" "),t("label",{staticClass:"m-input-radio__label",class:{"-disabled":!e.surname||!e.lastname}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.settingAuthorName,expression:"settingAuthorName"}],staticClass:"m-input-radio__input",attrs:{type:"radio",id:"agreement_mail",value:"2",disabled:!e.surname||!e.lastname},domProps:{checked:e._q(e.settingAuthorName,"2")},on:{change:function(t){e.settingAuthorName="2"}}}),e._v(" "),t("span",{staticClass:"m-input-radio__radio"}),e._v(" "),t("span",{staticClass:"m-input-radio__text -disable",attrs:{for:"agreement_mail"}},[e._v("\n                                                "+e._s(e.surname?e.surname:"Jméno")+" "+e._s(e.lastname?e.lastname:"Přijmení")+e._s(e.surname&&e.lastname?"":" - Nejdříve je nutné vyplniť jméno i příjmené")+"\n                                            ")])]),e._v(" "),t("label",{staticClass:"m-input-radio__label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.settingAuthorName,expression:"settingAuthorName"}],staticClass:"m-input-radio__input",attrs:{type:"radio",id:"agreement_mail",value:"3"},domProps:{checked:e._q(e.settingAuthorName,"3")},on:{change:function(t){e.settingAuthorName="3"}}}),e._v(" "),t("span",{staticClass:"m-input-radio__radio"}),e._v(" "),t("span",{staticClass:"m-input-radio__text",attrs:{for:"agreement_mail"}},[e._v(e._s(e.nickname))])])])])]),e._v(" "),t("div",{staticClass:"o-form-profile__group"},[t("label",{staticClass:"o-form-profile__label -strong"},[e._v("Odkazy:")]),e._v(" "),e._l(e.urls,(function(n,o){return e.urls?t("div",{key:o,staticClass:"o-form-profile__item -flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.urls[o].url,expression:"urls[index].url"}],staticClass:"a-input -blue",attrs:{type:"text"},domProps:{value:e.urls[o].url},on:{input:function(t){t.target.composing||e.$set(e.urls[o],"url",t.target.value)}}}),e._v(" "),t("div",{staticClass:"m-button-remove -blue"},[t("button",{staticClass:"m-button-remove__input",attrs:{type:"button"},on:{click:function(t){return e.removeUrlInput(o)}}},[e._v("\n                                            Odstranit\n                                        ")])])]):e._e()}))],2),e._v(" "),t("div",{staticClass:"o-form-profile__buttons mt-1"},[t("div",{staticClass:"o-form-profile__button"},[e.urls?t("div",{staticClass:"m-button-add -blue"},[e.urls.length<32?t("button",{staticClass:"m-button-add__input",attrs:{type:"button"},on:{click:e.addUrlInput}},[e._v("Přidat odkaz")]):e._e()]):t("div",{staticClass:"m-button-add -blue"},[t("button",{staticClass:"m-button-add__input",attrs:{type:"button"},on:{click:e.addUrlInput}},[e._v("Přidat první odkaz")])])])]),e._v(" "),t("div",{staticClass:"o-form-profile__group"},[t("label",{staticClass:"o-form-profile__label -strong"},[e._v("Seo Tagy:")]),e._v(" "),e._l(e.seo_tags,(function(n,o){return e.seo_tags?t("div",{key:o,staticClass:"o-form-profile__item -flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.seo_tags[o].tag,expression:"seo_tags[index].tag"}],staticClass:"a-input -blue",attrs:{type:"text"},domProps:{value:e.seo_tags[o].tag},on:{input:function(t){t.target.composing||e.$set(e.seo_tags[o],"tag",t.target.value)}}}),e._v(" "),t("div",{staticClass:"m-button-remove -blue"},[t("button",{staticClass:"m-button-remove__input",attrs:{type:"button"},on:{click:function(t){return e.removeTagInput(o)}}},[e._v("\n                                            Odstranit\n                                        ")])])]):e._e()}))],2),e._v(" "),t("div",{staticClass:"o-form-profile__buttons mt-1"},[t("div",{staticClass:"o-form-profile__button"},[e.seo_tags?t("div",{staticClass:"m-button-add -blue"},[e.seo_tags.length<5?t("button",{staticClass:"m-button-add__input",attrs:{type:"button"},on:{click:e.addTagInput}},[e._v("Přidat tag")]):e._e()]):t("div",{staticClass:"m-button-add -blue"},[t("button",{staticClass:"m-button-add__input",attrs:{type:"button"},on:{click:e.addTagInput}},[e._v("Přidat první tag")])])])])]),e._v(" "),t("div",{staticClass:"o-form-profile__buttons mt-1"},[t("div",{staticClass:"o-form-profile__button"},[t("div",{staticClass:"m-button -blue"},[t("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[e._v("Upravit údaje")])])])])])])])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);