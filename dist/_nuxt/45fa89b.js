(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{567:function(t,e,n){"use strict";n.r(e);n(29);var l=n(10),o=(n(54),n(13),n(89),{name:"OrganismsoWorldTypeComponent",data:function(){return{count:this.count,items:[{id:1,name:"Kontinenty",url:"/svet/kontinent",length:0,styleThemaItem:" -continent"},{id:2,name:"Státy",url:"/svet/stat",length:0,styleThemaItem:" -state"},{id:3,name:"Regiony",url:"/svet/region",length:0,styleThemaItem:" -region"},{id:4,name:"Města",url:"/svet/mesto",length:0,styleThemaItem:" -city"},{id:5,name:"Místa",url:"/svet/misto",length:0,styleThemaItem:" -spot"}]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/places-count");case 2:return n=e.sent,e.next=5,n.json();case 5:data=e.sent,l={places_cities:data.places_cities,places_continents:data.places_continents,places_regions:data.places_regions,places_spots:data.places_spots,places_states:data.places_states},t.items[0].length=l.places_continents,t.items[1].length=l.places_states,t.items[2].length=l.places_regions,t.items[3].length=l.places_cities,t.items[4].length=l.places_spots,t.count=[l];case 13:case"end":return e.stop()}}),e)})))()}))}),r=o,c=n(2),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-world-type"},[e("div",{staticClass:"o-world-type__outer"},[e("div",{staticClass:"o-world-type__inner"},[e("div",{staticClass:"o-world-type__items"},t._l(t.items,(function(n){return e("div",{key:n.id,staticClass:"o-world-type__item"},[e("div",{staticClass:"o-world-type__container"},[e("div",{staticClass:"o-world-type__image"},[e("div",{class:"o-world-type__image-file"+n.styleThemaItem},[e("NuxtLink",{staticClass:"o-world-type__image-link",attrs:{to:n.url,alt:n.name}})],1)]),t._v(" "),e("h2",{staticClass:"o-world-type__text"},[e("NuxtLink",{staticClass:"o-world-type__link",attrs:{to:n.url}},[e("span",{staticClass:"o-world-type__link-title"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"o-world-type__link-length"},[t._v("\n                                    ( "),0===n.length?e("div",{staticClass:"o-world-type__link-length-number -loader"}):t._e(),0!==n.length?e("span",{staticClass:"o-world-type__link-length-number -number"},[t._v(t._s(n.length))]):t._e(),t._v(" položek )\n                                ")])])],1)])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);