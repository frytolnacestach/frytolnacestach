(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{600:function(t,e,n){"use strict";n.r(e);n(24),n(245),n(11),n(38);var l={name:"MoleculesmNavPlaceComponent",props:{place:{type:Object,required:!0},tabs:{type:Array,required:!0}},data:function(){return{activeTab:"default",activeTabName:"PLACE_NAME"}},methods:{getTabLink:function(t){return{name:"stat-slug-tab",params:{slug:this.$route.params.slug,tab:t.slug}}}},mounted:function(){this.activeTab=this.$route.params.tab||"default"},watch:{updatedTabs:{immediate:!0,handler:function(){var t=this.tabs.find((function(t){return"default"===t.slug})),e=this.tabs.filter((function(t){return t.visible})),n=e.length>0?e[0]:t;this.activeTab=n.slug}},activeTab:function(t){var e=this.tabs.find((function(e){return e.slug===t}));this.activeTabName=e.label}}},c=n(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-nav-place hidden-print"},[e("div",{staticClass:"m-nav-place__outer"},[e("div",{staticClass:"m-nav-place__inner"},[e("ul",{staticClass:"m-nav-place__items"},t._l(t.tabs,(function(n){return e("li",{key:n.slug,staticClass:"m-nav-place__item"},["default"===n.slug?e("nuxt-link",{staticClass:"m-nav-place__link",class:{"-active":t.activeTab===n.slug},attrs:{to:"/svet/stat/".concat(t.place.slug)}},[t._v("\n                        "+t._s(t.place.name?t.place.name:"Stát")+"\n                    ")]):t._e(),t._v(" "),"default"!==n.slug&&!0===n.visible?e("nuxt-link",{staticClass:"m-nav-place__link",class:{"-active":t.activeTab===n.slug},attrs:{to:t.getTabLink(n)}},[t._v("\n                        "+t._s(n.label)+"\n                    ")]):t._e()],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);