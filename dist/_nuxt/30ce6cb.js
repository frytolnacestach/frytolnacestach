(window.webpackJsonp=window.webpackJsonp||[]).push([[49,43],{374:function(e,t,r){"use strict";var c=r(11),n=r(6),o=r(5),l=r(114),h=r(19),m=r(14),d=r(242),y=r(45),f=r(91),v=r(243),_=r(4),T=r(90).f,N=r(37).f,x=r(18).f,A=r(377),k=r(244).trim,w="Number",P=n.Number,C=P.prototype,I=n.TypeError,F=o("".slice),E=o("".charCodeAt),S=function(e){var t=v(e,"number");return"bigint"==typeof t?t:Q(t)},Q=function(e){var t,r,c,n,o,l,h,code,m=v(e,"number");if(f(m))throw I("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=k(m),43===(t=E(m,0))||45===t){if(88===(r=E(m,2))||120===r)return NaN}else if(48===t){switch(E(m,1)){case 66:case 98:c=2,n=49;break;case 79:case 111:c=8,n=55;break;default:return+m}for(l=(o=F(m,2)).length,h=0;h<l;h++)if((code=E(o,h))<48||code>n)return NaN;return parseInt(o,c)}return+m};if(l(w,!P(" 0o1")||!P("0b1")||P("+0x1"))){for(var z,M=function(e){var t=arguments.length<1?0:P(S(e)),r=this;return y(C,r)&&_((function(){A(r)}))?d(Object(t),r,M):t},O=c?T(P):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;O.length>j;j++)m(P,z=O[j])&&!m(M,z)&&x(M,z,N(P,z));M.prototype=C,C.constructor=M,h(n,w,M,{constructor:!0})}},377:function(e,t,r){var c=r(5);e.exports=c(1..valueOf)},379:function(e,t,r){"use strict";r.r(t);var c={name:"OrganismsoFlashMessagesComponent",props:{text:{type:String,required:!0},styleThema:{type:String,required:!0}}},n=r(2),component=Object(n.a)(c,(function(){var e=this,t=e._self._c;return e.text?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},[t("div",{class:"o-flash-messages__item"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(e.text)}})])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},597:function(e,t,r){"use strict";r.r(t);r(68),r(29);var c=r(10),n=(r(54),r(374),r(241),r(13),r(43),r(71),r(72),{name:"OrganismsFormPlaceVisitedAddComponent",components:{oFlashMessages:r(379).default},props:{type:{type:String,required:!0},visitedPlace:{type:Array,required:!1},status:{type:Number,required:!0}},data:function(){return{errorForm:"",successForm:"",places:[],placesSearch:"",searchQuery:"",filteredPlaces:[],email:this.email,passwordHash:this.passwordHash,placeTypeSlug:null,placeTypeApp:null,placeTypeName:null,placeType:[{type:"kontinent",placeTypeApp:"continent",placeTypeName:"kontinent"},{type:"stat",placeTypeApp:"state",placeTypeName:"stát"},{type:"region",placeTypeApp:"region",placeTypeName:"region"},{type:"mesto",placeTypeApp:"city",placeTypeName:"město"},{type:"misto",placeTypeApp:"spot",placeTypeName:"místo"}]}},mounted:function(){var e=this,t=this.placeType.find((function(t){return t.type===e.type}))||{};this.placeTypeSlug=t.type,this.placeTypeApp=t.placeTypeApp,this.placeTypeName=t.placeTypeName;var r=localStorage.getItem("email"),c=localStorage.getItem("password_hash");this.email=r,this.passwordHash=c},methods:{editVisited:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.placeID=e,r.prev=2,r.next=5,fetch("https://api.frytolnacestach.cz/api/user-visited-place-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.email,password_hash:t.passwordHash,id_place:t.placeID,type:t.placeTypeApp,status:t.status})});case 5:(c=r.sent).ok?201===c.status?(1===t.status?(console.log("Místo bylo přidáno mezi navštívené"),t.successForm="Místo bylo přidáno mezi navštívené"):2===t.status&&(console.log("Místo bylo přidáno mezi chci navštívit"),t.successForm="Místo bylo přidáno mezi chci navštívit"),t.searchQuery="",t.emitAddNewPlaceEvent(t.placeID)):200===c.status&&(console.log("Záznam odebrán"),t.successForm="Záznam odebrán"):404===c.status?(console.log("Vypadá to že nejsi přihlášen ke svému účtu."),t.errorForm="Vypadá to, že nejsi přihlášen ke svému účtu."):(console.log("Chyba při komunikaci s API"),t.errorForm="Chyba při komunikaci s API"),r.next=14;break;case 9:throw r.prev=9,r.t0=r.catch(2),console.log(r.t0),t.errorForm="Chyba připojení k API",r.t0;case 14:r.next=20;break;case 16:r.prev=16,r.t1=r.catch(0),console.log(r.t1),t.errorForm="Nastala chyba";case 20:case"end":return r.stop()}}),r,null,[[0,16],[2,9]])})))()},searchPlaces:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"continent"!==e.placeTypeApp){t.next=7;break}return t.next=4,e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents?showType=search&search=".concat(e.searchQuery));case 4:e.places=t.sent,t.next=29;break;case 7:if("state"!==e.placeTypeApp){t.next=13;break}return t.next=10,e.$axios.$get("https://api.frytolnacestach.cz/api/places-states?showType=search&search=".concat(e.searchQuery));case 10:e.places=t.sent,t.next=29;break;case 13:if("region"!==e.placeTypeApp){t.next=19;break}return t.next=16,e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions?showType=search&search=".concat(e.searchQuery));case 16:e.places=t.sent,t.next=29;break;case 19:if("city"!==e.placeTypeApp){t.next=25;break}return t.next=22,e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities?showType=search&search=".concat(e.searchQuery));case 22:e.places=t.sent,t.next=29;break;case 25:if("spot"!==e.placeTypeApp){t.next=29;break}return t.next=28,e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots?showType=search&search=".concat(e.searchQuery));case 28:e.places=t.sent;case 29:e.filterPlaces(),t.next=35;break;case 32:t.prev=32,t.t0=t.catch(0),console.error(t.t0);case 35:case"end":return t.stop()}}),t,null,[[0,32]])})))()},filterPlaces:function(){var e=this;this.filteredPlaces=[],this.searchQuery&&this.searchQuery.length>=3&&(this.filteredPlaces=this.places.filter((function(t){return t.name.toLowerCase().includes(e.searchQuery.toLowerCase())})))},hasVisited:function(e){return this.visitedPlace.some((function(t){return t.id===e}))},hasStatus:function(e){return this.visitedPlace.some((function(t){return t.status===e}))},emitAddNewPlaceEvent:function(e){this.$emit("add-place",e)}},computed:{hasResults:function(){return this.searchQuery.length>=3&&0===this.filteredPlaces.length}},watch:{searchQuery:function(e,t){3==e.length||e.substring(0,3)!==t.substring(0,3)?this.searchPlaces():e.substring(0,3)===t.substring(0,3)?0==this.filteredPlaces.length&&this.searchPlaces():e.length>=3?this.filterPlaces():(this.places=[],this.filteredPlaces=[])}}}),o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-place-visited-add",attrs:{role:"search"}},[t("oFlashMessages",{attrs:{text:e.errorForm,styleThema:" -error"}}),e._v(" "),t("oFlashMessages",{attrs:{text:e.successForm,styleThema:" -success"}}),e._v(" "),t("div",{staticClass:"o-form-place-visited-add__input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"a-input-search -blue",attrs:{type:"text",placeholder:1===e.status?"Který "+e.placeTypeName+" si navštívil(a)?":2===e.status?"Který "+e.placeTypeName+" chceš navštívit":""},domProps:{value:e.searchQuery},on:{input:[function(t){t.target.composing||(e.searchQuery=t.target.value)},e.filterPlaces]}})]),e._v(" "),e.searchQuery.length<3?t("span",{staticClass:"o-form-place-visited-add__condition"},[e._v("Napiš alepoň 3 znaky")]):e._e(),e._v(" "),t("div",{staticClass:"o-form-place-visited-add__result"},[t("div",{staticClass:"m-search-result -blue"},[e.filteredPlaces.length>0?t("ul",{staticClass:"m-search-result__items"},e._l(e.filteredPlaces,(function(r){return t("li",{key:"".concat(r.type_place,"-").concat(r.id),staticClass:"m-search-result__item"},[t("div",{staticClass:"m-search-result__link",on:{click:function(t){return e.editVisited(r.id)}}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(r.name))]),e._v(" "),e.hasVisited(r.id)?t("span",{staticClass:"m-search-result__visited"},[e._v(e._s(e.placeTypeName)+" "+e._s(1===e.status?"si už navštívil(a)":2===e.status?"už máš mezi chci navštívil(a)":""))]):e._e()])])})),0):e._e(),e._v(" "),e.searchQuery.length>=3&0===e.filteredPlaces.length?t("span",{staticClass:"m-search-result__no-result"},[e._v("Tak tohle tu bohužel nenajdeš.. :/ "),t("i",[e._v("(zkus to ještě jednou)")])]):e._e()])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);