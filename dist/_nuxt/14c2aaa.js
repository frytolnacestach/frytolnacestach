(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{340:function(e,t,c){"use strict";c.r(t);c(27);var r=c(25),n=c(10),l=(c(53),c(13),c(28),c(29),c(42),c(65),c(67),c(68),{name:"OrganismsSearchComponent",methods:{searchPlaces:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var c,n,l,h,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([e.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-continents?search=".concat(e.searchQuery)),e.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-states?search=".concat(e.searchQuery)),e.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-cities?search=".concat(e.searchQuery))]);case 3:c=t.sent,n=Object(r.a)(c,3),l=n[0],h=n[1],o=n[2],e.placesContinents=l,e.placesStates=h,e.placesCities=o,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},filterPlaces:function(){var e=this;this.filteredPlaces=[],this.searchQuery&&this.searchQuery.length>=3&&(this.filteredPlaces=this.placesContinents.concat(this.placesStates).concat(this.placesCities).filter((function(t){return t.name.toLowerCase().includes(e.searchQuery.toLowerCase())})))}},data:function(){return{placesContinents:[],placesStates:[],placesCities:[],placesSearch:"",searchQuery:"",filteredPlaces:[]}},computed:{hasResults:function(){return this.searchQuery.length>=3&&0===this.filteredPlaces.length}},watch:{searchQuery:function(e,t){3==e.length||e.substring(0,3)!==t.substring(0,3)?this.searchPlaces():e.substring(0,3)===t.substring(0,3)?0==filteredPlaces.length&&this.searchPlaces():e.length>=3?filterPlaces():(this.placesContinents=[],this.placesStates=[],this.placesCities=[],this.filteredPlaces=[])}}}),h=c(6),component=Object(h.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-search",attrs:{role:"search"}},[t("div",{staticClass:"o-search__input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"a-input-search",attrs:{type:"text",placeholder:"Které místo tě zajímá?"},domProps:{value:e.searchQuery},on:{input:[function(t){t.target.composing||(e.searchQuery=t.target.value)},e.filterPlaces]}})]),e._v(" "),e.searchQuery.length<3?t("span",{staticClass:"o-search__condition"},[e._v("Napiš alepoň 3 znaky")]):e._e(),e._v(" "),t("div",{staticClass:"o-search__result"},[t("div",{staticClass:"m-search-result"},[e.filteredPlaces.length>0?t("ul",{staticClass:"m-search-result__items"},e._l(e.filteredPlaces,(function(c){return t("li",{key:c.id,staticClass:"m-search-result__item"},["continent"===c.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/kontinent/".concat(c.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(c.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Kontinent")])]):e._e(),e._v(" "),"state"===c.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/stat/".concat(c.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(c.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Stát")])]):e._e(),e._v(" "),"city"===c.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/mesto/".concat(c.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(c.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Město")])]):e._e()],1)})),0):e._e(),e._v(" "),e.searchQuery.length>=3&0===e.filteredPlaces.length?t("span",{staticClass:"m-search-result__no-result"},[e._v("Tak tohle tu bohužel nenajdeš.. :/ "),t("i",[e._v("(zkuz to ještě jednou)")])]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports}}]);