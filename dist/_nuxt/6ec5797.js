(window.webpackJsonp=window.webpackJsonp||[]).push([[47,24,35],{338:function(t,e,n){"use strict";n.r(e);n(27);var r=n(25),c=n(10),l=(n(53),n(13),n(28),n(29),n(42),n(65),n(67),n(68),{name:"OrganismsSearchComponent",methods:{searchPlaces:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,l,o,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-continents?search=".concat(t.searchQuery)),t.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-states?search=".concat(t.searchQuery)),t.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-cities?search=".concat(t.searchQuery))]);case 3:n=e.sent,c=Object(r.a)(n,3),l=c[0],o=c[1],h=c[2],t.placesContinents=l,t.placesStates=o,t.placesCities=h,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},filterPlaces:function(){var t=this;this.filteredPlaces=[],this.searchQuery&&this.searchQuery.length>=3&&(this.filteredPlaces=this.placesContinents.concat(this.placesStates).concat(this.placesCities).filter((function(e){return e.name.toLowerCase().includes(t.searchQuery.toLowerCase())})))}},data:function(){return{placesContinents:[],placesStates:[],placesCities:[],placesSearch:"",searchQuery:"",filteredPlaces:[]}},computed:{hasResults:function(){return this.searchQuery.length>=3&&0===this.filteredPlaces.length}},watch:{searchQuery:function(t,e){3==t.length||t.substring(0,3)!==e.substring(0,3)?this.searchPlaces():t.substring(0,3)===e.substring(0,3)?0==filteredPlaces.length&&this.searchPlaces():t.length>=3?filterPlaces():(this.placesContinents=[],this.placesStates=[],this.placesCities=[],this.filteredPlaces=[])}}}),o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-search",attrs:{role:"search"}},[e("div",{staticClass:"o-search__input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"a-input-search",attrs:{type:"text",placeholder:"Které místo tě zajímá?"},domProps:{value:t.searchQuery},on:{input:[function(e){e.target.composing||(t.searchQuery=e.target.value)},t.filterPlaces]}})]),t._v(" "),t.searchQuery.length<3?e("span",{staticClass:"o-search__condition"},[t._v("Napiš alepoň 3 znaky")]):t._e(),t._v(" "),e("div",{staticClass:"o-search__result"},[e("div",{staticClass:"m-search-result"},[t.filteredPlaces.length>0?e("ul",{staticClass:"m-search-result__items"},t._l(t.filteredPlaces,(function(n){return e("li",{key:n.id,staticClass:"m-search-result__item"},["continent"===n.type_place?e("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/kontinent/".concat(n.slug)}},[e("span",{staticClass:"m-search-result__name"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"m-search-result__type"},[t._v("Kontinent")])]):t._e(),t._v(" "),"state"===n.type_place?e("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/stat/".concat(n.slug)}},[e("span",{staticClass:"m-search-result__name"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"m-search-result__type"},[t._v("Stát")])]):t._e(),t._v(" "),"city"===n.type_place?e("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/mesto/".concat(n.slug)}},[e("span",{staticClass:"m-search-result__name"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"m-search-result__type"},[t._v("Město")])]):t._e()],1)})),0):t._e(),t._v(" "),t.searchQuery.length>=3&0===t.filteredPlaces.length?e("span",{staticClass:"m-search-result__no-result"},[t._v("Tak tohle tu bohužel nenajdeš.. :/ "),e("i",[t._v("(zkuz to ještě jednou)")])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,n){"use strict";n.r(e);n(27);var r={name:"OrganismsoWorldTypeComponent",props:{items:{type:Array,required:!0}}},c=n(6),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-world-type"},[e("div",{staticClass:"o-world-type__outer"},[e("div",{staticClass:"o-world-type__inner"},[e("div",{staticClass:"o-world-type__items"},t._l(t.items,(function(n){return e("div",{key:n.id,staticClass:"o-world-type__item"},[e("div",{staticClass:"o-world-type__container"},[e("div",{staticClass:"o-world-type__image"},[e("div",{class:"o-world-type__image-file"+n.styleThemaItem},[e("NuxtLink",{staticClass:"o-world-type__image-link",attrs:{to:n.url}})],1)]),t._v(" "),e("h2",{staticClass:"o-world-type__text"},[e("NuxtLink",{staticClass:"o-world-type__link",attrs:{to:n.url}},[t._v(t._s(n.name)),e("span",{staticClass:"o-world-type__link-length"},[t._v(" ("+t._s(n.length)+" položek) ")])])],1)])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,n){"use strict";n.r(e);var r=n(338),c=n(339),l={name:"PageSvet",components:{oSearch:r.default,oWorldType:c.default},data:function(){return{oWorldType:[{id:1,name:"Kontinenty",url:"/svet/kontinent",length:7,styleThemaItem:" -continent"},{id:2,name:"Státy",url:"/svet/stat",length:249,styleThemaItem:" -state"},{id:3,name:"Města",url:"/svet/mesto",length:2491,styleThemaItem:" -city"}]}},head:{title:"Svět | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Oběvuj svět a jeho místá s Frytolem na cestách"},{name:"keywords",content:"Hledej místo, státy, města, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"}]}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -bg-world -vh100"},[e("section",{staticClass:"t-section pt-8 pb-4 -bg-world"},[e("div",{staticClass:"t-section__inner mt-4"},[e("oSearch")],1)]),t._v(" "),e("section",{staticClass:"t-section py-4 -bg-world"},[e("div",{staticClass:"t-section__inner"},[e("oWorldType",{attrs:{items:t.oWorldType}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);