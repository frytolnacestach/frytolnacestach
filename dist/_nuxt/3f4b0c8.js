(window.webpackJsonp=window.webpackJsonp||[]).push([[118,54,144],{406:function(e,t,n){"use strict";n.r(t);n(48),n(37),n(41),n(76),n(77);var o=n(31);n(58),n(12),n(33),n(74);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return c(c({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,n){if(e.date){var o=(new Date).getTime(),r=new Date(e.date).getTime()+e.duration-o;r>0?setTimeout((function(){t.updateMessageVisibility(n,"hidden")}),r):t.updateMessageVisibility(n,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},d=n(1),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(n,o){return"hidden"!==n.visibility?t("div",{key:o,class:"o-flash-messages__item"+(n.status?" -"+n.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(n.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},412:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoVisitedButtonComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-visited-button"},[t("div",{staticClass:"skeleton-o-visited-button__outer"},[t("div",{staticClass:"skeleton-o-visited-button__inner"},[t("div",{staticClass:"skeleton-o-visited-button__items"},e._l(2,(function(n){return t("div",{key:n,staticClass:"skeleton-o-visited-button__item"},[t("span",{class:"skeleton-o-visited-button__button loading-image"+e.styleThema})])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},416:function(e,t,n){"use strict";n.r(t);var o=n(9),r=(n(36),n(254),n(12),n(57),n(412)),c=n(406),l={name:"OrganismsoVisitedButtonComponent",components:{skeletonoVisitedButton:r.default,oFlashMessages:c.default},data:function(){return{flashMessage:[],skeleton:!0,status:0}},props:{account:{type:Array,required:!0},place:{type:Number,required:!0},placeType:{type:String,required:!0}},methods:{visited:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.account||0===e.account.length){t.next=22;break}return t.prev=1,t.next=4,fetch("https://api.frytolnacestach.cz/api/user-visited-place?email=".concat(encodeURIComponent(e.account[0].email),"&password_hash=").concat(encodeURIComponent(e.account[0].password),"&id_place=").concat(encodeURIComponent(e.place),"&type=").concat(e.placeType),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"GET"});case 4:if(!(n=t.sent).ok){t.next=13;break}return t.next=8,n.json();case 8:data=t.sent,e.status=data.message[0].status,e.skeleton=!1,t.next=14;break;case 13:404===n.status||n.status,e.skeleton=!1;case 14:t.next=20;break;case 16:throw t.prev=16,t.t0=t.catch(1),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 20:t.next=23;break;case 22:e.skeleton=!1;case 23:case"end":return t.stop()}}),t,null,[[1,16]])})))()},editVisited:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.account||0===t.account.length){n.next=21;break}return n.prev=1,t.status=e,n.prev=3,n.next=6,fetch("https://api.frytolnacestach.cz/api/user-visited-place-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.account[0].email,password_hash:t.account[0].password,id_place:t.place,type:t.placeType,status:t.status})});case 6:(o=n.sent).ok?201===o.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam uložen"}):200===o.status&&(t.status=0,t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"})):404===o.status?(t.status=0,t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."})):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),n.next=14;break;case 10:throw n.prev=10,n.t0=n.catch(3),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),n.t0;case 14:n.next=19;break;case 16:n.prev=16,n.t1=n.catch(1),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 19:n.next=23;break;case 21:t.status=0,t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."});case 23:case"end":return n.stop()}}),n,null,[[1,16],[3,10]])})))()}},mounted:function(){this.visited()},watch:{account:{handler:"visited",immediate:!0}}},d=n(1),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton hidden-print"},[!0===e.skeleton?t("skeletonoVisitedButton",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),!1===e.skeleton?t("client-only",[t("div",{staticClass:"o-visited-button"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("div",{staticClass:"o-visited-button__outer"},[t("div",{staticClass:"o-visited-button__inner"},[t("div",{staticClass:"o-visited-button__items"},[t("div",{staticClass:"o-visited-button__item"},[t("span",{staticClass:"o-visited-button__button -future",class:{"-active":2===e.status},on:{click:function(t){return e.editVisited(2)}}},[e._v("Chci navštívit")])]),e._v(" "),t("div",{staticClass:"o-visited-button__item"},[t("span",{staticClass:"o-visited-button__button -visited",class:{"-active":1===e.status},on:{click:function(t){return e.editVisited(1)}}},[e._v("Navštívil(a) jsem")])])])])])],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);