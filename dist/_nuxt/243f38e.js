(window.webpackJsonp=window.webpackJsonp||[]).push([[48,47],{401:function(e,t,n){"use strict";n.r(t);n(50),n(35),n(38),n(74),n(75);var r=n(32);n(47),n(11),n(40),n(72);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return c(c({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,n){if(e.date){var r=(new Date).getTime(),o=new Date(e.date).getTime()+e.duration-r;o>0?setTimeout((function(){t.updateMessageVisibility(n,"hidden")}),o):t.updateMessageVisibility(n,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},m=n(2),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(n,r){return"hidden"!==n.visibility?t("div",{key:r,class:"o-flash-messages__item"+(n.status?" -"+n.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(n.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},622:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(11),n(37),{name:"OrganismsoFlashMessagesAccountComponent",components:{oFlashMessages:n(401).default},props:{account:{type:Array,required:!0}},data:function(){return{flashMessage:[{status:"",message:""}]}},methods:{resendActivationEmail:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.mailActivation();case 2:case"end":return t.stop()}}),t)})))()},mailActivation:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frytolnacestach.cz/api/user-activation-email",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:e.account[0].email,code_activation:e.account[0].code_activation})});case 3:(n=t.sent).ok||201===n.status?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Aktivační email byl odeslán"}):e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),c=n(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return e.account&&0!==e.account.length&&2===e.account[0].status?t("div",{staticClass:"flex flex-full"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("div",{staticClass:"o-flash-messages-account"},[t("div",{staticClass:"o-flash-messages-account__items"},[t("div",{class:"o-flash-messages-account__item -error"},[t("div",{staticClass:"o-flash-messages-account__outer"},[t("div",{staticClass:"o-flash-messages-account__inner"},[t("span",{staticClass:"o-flash-messages-account__text"},[e._v("\n                            Účet je potřeba Aktivovat. Do emailu by vám při registraci měl přijít aktivační odkaz."),t("br"),e._v(" "),t("a",{attrs:{href:"#"},on:{click:e.resendActivationEmail}},[e._v("Znovu zaslat aktivační email")])])])])])])])],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);