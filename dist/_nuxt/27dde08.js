(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{566:function(t,e,l){"use strict";l.r(e);l(25),l(57);var n={name:"MoleculesmNavPlaceComponent",props:{place:{type:Object,required:!0},tabs:{type:Array,required:!0},activeTab:{type:String,required:!1}}},c=l(2),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-nav-place hidden-print"},[e("div",{staticClass:"m-nav-place__outer"},[e("div",{staticClass:"m-nav-place__inner"},[e("ul",{staticClass:"m-nav-place__items"},t._l(t.tabs,(function(l){return e("li",{key:l.slug,staticClass:"m-nav-place__item"},[l.slug&&"default"!==l.slug?t._e():e("nuxt-link",{staticClass:"m-nav-place__link",class:{"-active":t.activeTab===l.slug||!t.activeTab},attrs:{to:"/svet/stat/".concat(t.place.slug)}},[t._v("\n                        "+t._s(t.place.name?t.place.name:"Stát")+"\n                    ")]),t._v(" "),l.slug&&"default"!==l.slug&&!0===l.visible?e("nuxt-link",{staticClass:"m-nav-place__link",class:{"-active":t.activeTab===l.slug},attrs:{to:"/svet/stat/".concat(t.place.slug,"/").concat(l.slug)}},[t._v("\n                        "+t._s(l.label)+"\n                    ")]):t._e()],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);