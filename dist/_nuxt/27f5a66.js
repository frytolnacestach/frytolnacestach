(window.webpackJsonp=window.webpackJsonp||[]).push([[61,54],{406:function(e,t,o){"use strict";o.r(t);o(48),o(37),o(41),o(76),o(77);var n=o(31);o(58),o(12),o(33),o(74);function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var c={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return l(l({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,o){if(e.date){var n=(new Date).getTime(),r=new Date(e.date).getTime()+e.duration-n;r>0?setTimeout((function(){t.updateMessageVisibility(o,"hidden")}),r):t.updateMessageVisibility(o,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},m=o(1),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(o,n){return"hidden"!==o.visibility?t("div",{key:n,class:"o-flash-messages__item"+(o.status?" -"+o.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(o.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},673:function(e,t,o){"use strict";o.r(t);var n=o(9),r=(o(36),o(12),{name:"OrganismsoFormPasswordLostComponent",components:{oFlashMessages:o(406).default},data:function(){return{flashMessage:[],email:""}},methods:{passwordLost:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frytolnacestach.cz/api/user-password-lost",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:e.email})});case 3:(o=t.sent).ok?(e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Email byl odeslán"}),e.email=""):400===o.status?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Uživatel nenalezen"}):e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),l=o(1),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-password-lost"},[t("div",{staticClass:"o-form-password-lost__outer"},[t("div",{staticClass:"o-form-password-lost__inner"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("form",{staticClass:"o-form-password-lost__form",on:{submit:function(t){return t.preventDefault(),e.passwordLost.apply(null,arguments)}}},[t("div",{staticClass:"o-form-password-lost__items"},[t("div",{staticClass:"o-form-password-lost__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"a-input -blue",attrs:{type:"text",name:"email",placeholder:"E-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("nuxt-link",{attrs:{to:"/ucet/prihlaseni"}},[e._v("Přihlásit se")])],1),e._v(" "),e._m(0)])],1)])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-form-password-lost__buttons mt-1"},[e("div",{staticClass:"o-form-password-lost__button"},[e("div",{staticClass:"m-button -blue"},[e("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[this._v("Poslat email")])])])])}],!1,null,null,null);t.default=component.exports}}]);