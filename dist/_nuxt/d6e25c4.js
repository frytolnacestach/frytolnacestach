(window.webpackJsonp=window.webpackJsonp||[]).push([[53,51,126],{406:function(e,t,o){"use strict";o.r(t);o(49),o(35),o(40),o(76),o(77);var n=o(32);o(58),o(12),o(41),o(74);function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var c={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return l(l({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,o){if(e.date){var n=(new Date).getTime(),r=new Date(e.date).getTime()+e.duration-n;r>0?setTimeout((function(){t.updateMessageVisibility(o,"hidden")}),r):t.updateMessageVisibility(o,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},d=o(2),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(o,n){return"hidden"!==o.visibility?t("div",{key:n,class:"o-flash-messages__item"+(o.status?" -"+o.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(o.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},619:function(e,t,o){"use strict";o.r(t);var n={name:"SkeletonoFollowerButtonComponent",props:{styleThema:{type:String,required:!0}}},r=o(2),component=Object(r.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"skeleton-o-follower-button"},[e("div",{staticClass:"skeleton-o-follower-button__outer"},[e("div",{staticClass:"skeleton-o-follower-button__inner"},[e("div",{staticClass:"skeleton-o-follower-button__items"},[e("div",{staticClass:"skeleton-o-follower-button__item"},[e("span",{class:"skeleton-o-follower-button__button loading-image"+this.styleThema})])])])])])}),[],!1,null,null,null);t.default=component.exports},667:function(e,t,o){"use strict";o.r(t);var n=o(9),r=(o(39),o(253),o(12),o(57),o(619)),l=o(406),c={name:"OrganismsoFollowerButtonComponent",components:{skeletonoFollowerButton:r.default,oFlashMessages:l.default},data:function(){return{flashMessage:[],skeleton:!0,status:0}},props:{account:{type:Array,required:!0},user:{type:Number,required:!0}},methods:{follower:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.account||0===e.account.length){t.next=22;break}return t.prev=1,t.next=4,fetch("https://api.frytolnacestach.cz/api/user-follower-id-follower?email=".concat(encodeURIComponent(e.account[0].email),"&password_hash=").concat(encodeURIComponent(e.account[0].password),"&id_follower=").concat(encodeURIComponent(e.user)),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"GET"});case 4:if(!(o=t.sent).ok){t.next=13;break}return t.next=8,o.json();case 8:data=t.sent,e.status=data.message[0].status,e.skeleton=!1,t.next=14;break;case 13:404===o.status||o.status,e.skeleton=!1;case 14:t.next=20;break;case 16:throw t.prev=16,t.t0=t.catch(1),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 20:t.next=23;break;case 22:e.skeleton=!1;case 23:case"end":return t.stop()}}),t,null,[[1,16]])})))()},editFollower:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!t.account||0===t.account.length){o.next=21;break}return o.prev=1,t.status=e,o.prev=3,o.next=6,fetch("https://api.frytolnacestach.cz/api/user-follower-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.email,password_hash:t.passwordHash,id_follower:t.user,status:t.status})});case 6:(n=o.sent).ok?201===n.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam uložen"}):200===n.status&&(t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"}),t.status=0):404===n.status?(t.status=0,t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."})):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),o.next=14;break;case 10:throw o.prev=10,o.t0=o.catch(3),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),o.t0;case 14:o.next=19;break;case 16:o.prev=16,o.t1=o.catch(1),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 19:o.next=23;break;case 21:t.status=0,t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."});case 23:case"end":return o.stop()}}),o,null,[[1,16],[3,10]])})))()}},mounted:function(){this.follower()}},d=o(2),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[!0===e.skeleton?t("skeletonoFollowerButton",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),!1===e.skeleton?t("client-only",[t("div",{staticClass:"o-follower-button"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("div",{staticClass:"o-follower-button__outer"},[t("div",{staticClass:"o-follower-button__inner"},[t("div",{staticClass:"o-follower-button__items"},[t("div",{staticClass:"o-follower-button__item"},[t("span",{staticClass:"o-follower-button__button",class:{"-active":1===e.status},on:{click:function(t){return e.editFollower(1)}}},[e._v(e._s(1===e.status?"Sleduji":"Sledovat"))])])])])])],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);