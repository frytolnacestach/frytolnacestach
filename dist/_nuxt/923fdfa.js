(window.webpackJsonp=window.webpackJsonp||[]).push([[62,53],{405:function(e,t,r){"use strict";r.r(t);r(49),r(36),r(40),r(76),r(77);var n=r(32);r(58),r(12),r(41),r(75);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return l(l({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,r){if(e.date){var n=(new Date).getTime(),c=new Date(e.date).getTime()+e.duration-n;c>0?setTimeout((function(){t.updateMessageVisibility(r,"hidden")}),c):t.updateMessageVisibility(r,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},h=r(2),component=Object(h.a)(o,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(r,n){return"hidden"!==r.visibility?t("div",{key:n,class:"o-flash-messages__item"+(r.status?" -"+r.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(r.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},660:function(e,t,r){"use strict";r.r(t);r(57),r(25);var n=r(9),c=(r(39),r(253),r(252),r(12),r(40),r(59),r(60),{name:"OrganismsoFormPlaceVisitedAddComponent",components:{oFlashMessages:r(405).default},props:{account:{type:Array,required:!0},type:{type:String,required:!0},visitedPlace:{type:Array,required:!1},status:{type:Number,required:!0}},data:function(){return{flashMessage:[],places:[],placesSearch:"",searchQuery:"",filteredPlaces:[],placeTypeSlug:null,placeTypeApp:null,placeTypeName:null,placeType:[{type:"kontinent",placeTypeApp:"continent",placeTypeName:"kontinent"},{type:"stat",placeTypeApp:"state",placeTypeName:"stát"},{type:"region",placeTypeApp:"region",placeTypeName:"region"},{type:"mesto",placeTypeApp:"city",placeTypeName:"město"},{type:"misto",placeTypeApp:"spot",placeTypeName:"místo"}]}},mounted:function(){var e=this,t=this.placeType.find((function(t){return t.type===e.type}))||{};this.placeTypeSlug=t.type,this.placeTypeApp=t.placeTypeApp,this.placeTypeName=t.placeTypeName},methods:{editVisited:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t.placeID=e,!t.visitedPlace.some((function(t){return t.id===e}))){r.next=6;break}t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Místo již máte mezi navštíveními"}),r.next=17;break;case 6:return r.prev=6,r.next=9,fetch("https://api.frytolnacestach.cz/api/user-visited-place-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.account[0].email,password_hash:t.account[0].password,id_place:t.placeID,type:t.placeTypeApp,status:t.status})});case 9:(n=r.sent).ok?201===n.status?(1===t.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Místo bylo přidáno mezi navštívené"}):2===t.status&&t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Místo bylo přidáno mezi chci navštívit"}),t.searchQuery="",t.emitAddNewPlaceEvent(t.placeID)):200===n.status&&t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"}):404===n.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."}):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),r.next=17;break;case 13:throw r.prev=13,r.t0=r.catch(6),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),r.t0;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(0),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 22:case"end":return r.stop()}}),r,null,[[0,19],[6,13]])})))()},searchPlaces:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"continent"!==e.placeTypeApp){t.next=7;break}return t.next=4,e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents?showType=search&search=".concat(e.searchQuery));case 4:e.places=t.sent,t.next=29;break;case 7:if("state"!==e.placeTypeApp){t.next=13;break}return t.next=10,e.$axios.$get("https://api.frytolnacestach.cz/api/places-states?showType=search&search=".concat(e.searchQuery));case 10:e.places=t.sent,t.next=29;break;case 13:if("region"!==e.placeTypeApp){t.next=19;break}return t.next=16,e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions?showType=search&search=".concat(e.searchQuery));case 16:e.places=t.sent,t.next=29;break;case 19:if("city"!==e.placeTypeApp){t.next=25;break}return t.next=22,e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities?showType=search&search=".concat(e.searchQuery));case 22:e.places=t.sent,t.next=29;break;case 25:if("spot"!==e.placeTypeApp){t.next=29;break}return t.next=28,e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots?showType=search&search=".concat(e.searchQuery));case 28:e.places=t.sent;case 29:e.filterPlaces(),t.next=35;break;case 32:t.prev=32,t.t0=t.catch(0),console.error(t.t0);case 35:case"end":return t.stop()}}),t,null,[[0,32]])})))()},filterPlaces:function(){var e=this;this.filteredPlaces=[],this.searchQuery&&this.searchQuery.length>=3&&(this.filteredPlaces=this.places.filter((function(t){return t.name.toLowerCase().includes(e.searchQuery.toLowerCase())})))},hasVisited:function(e){return this.visitedPlace.some((function(t){return t.id===e}))},hasStatus:function(e){return this.visitedPlace.some((function(t){return t.status===e}))},emitAddNewPlaceEvent:function(e){this.$emit("add-place",e)}},computed:{hasResults:function(){return this.searchQuery.length>=3&&0===this.filteredPlaces.length}},watch:{searchQuery:function(e,t){3==e.length||e.substring(0,3)!==t.substring(0,3)?this.searchPlaces():e.substring(0,3)===t.substring(0,3)?0==this.filteredPlaces.length&&this.searchPlaces():e.length>=3?this.filterPlaces():(this.places=[],this.filteredPlaces=[])}}}),l=r(2),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-place-visited-add",attrs:{role:"search"}},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("div",{staticClass:"o-form-place-visited-add__input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"a-input-search -blue",attrs:{type:"text",placeholder:1===e.status?"Který "+e.placeTypeName+" si navštívil(a)?":2===e.status?"Který "+e.placeTypeName+" chceš navštívit":""},domProps:{value:e.searchQuery},on:{input:[function(t){t.target.composing||(e.searchQuery=t.target.value)},e.filterPlaces]}})]),e._v(" "),e.searchQuery.length<3?t("span",{staticClass:"o-form-place-visited-add__condition"},[e._v("Napiš alepoň 3 znaky")]):e._e(),e._v(" "),t("div",{staticClass:"o-form-place-visited-add__result"},[t("div",{staticClass:"m-search-result -blue"},[e.filteredPlaces.length>0?t("ul",{staticClass:"m-search-result__items"},e._l(e.filteredPlaces,(function(r){return t("li",{key:"".concat(r.type_place,"-").concat(r.id),staticClass:"m-search-result__item"},[t("div",{staticClass:"m-search-result__link",on:{click:function(t){return e.editVisited(r.id)}}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(r.name))]),e._v(" "),e.hasVisited(r.id)?t("span",{staticClass:"m-search-result__visited"},[e._v(e._s(e.placeTypeName)+" "+e._s(1===e.status?"si už navštívil(a)":2===e.status?"už máš mezi chci navštívil(a)":""))]):e._e()])])})),0):e._e(),e._v(" "),e.searchQuery.length>=3&0===e.filteredPlaces.length?t("span",{staticClass:"m-search-result__no-result"},[e._v("Tak tohle tu bohužel nenajdeš.. :/ "),t("i",[e._v("(zkus to ještě jednou)")])]):e._e()])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);