(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{330:function(t,e,n){"use strict";n.r(e);n(27);var r={name:"MoleculesmNavBreadcrumbsComponent",props:{links:{type:Array,required:!0},place:{type:Object,required:!0},tab:{type:String,required:!1},tabName:{type:String,required:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"m-nav-breadcrumbs"},[e("div",{staticClass:"m-nav-breadcrumbs__outer"},[e("div",{staticClass:"m-nav-breadcrumbs__inner"},[e("ul",{staticClass:"m-nav-breadcrumbs__items"},[t._l(t.links,(function(n){return e("li",{key:n.id,staticClass:"m-nav-breadcrumbs__item"},["link"===n.status?e("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:n.url}},[t._v(t._s(n.name))]):"span"===n.status?e("span",{staticClass:"m-nav-breadcrumbs__span"},[t._v(t._s(n.name))]):t._e()],1)})),t._v(" "),t.place?e("li",{staticClass:"m-nav-breadcrumbs__item"},[void 0!==t.tab&&"default"!==t.tab?e("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:t.links[1].url+"/"+t.place.slug}},[t._v(t._s(t.place.name))]):e("span",{staticClass:"m-nav-breadcrumbs__span"},[t._v(t._s(t.place.name))])],1):t._e(),t._v(" "),void 0!==t.tab&&"default"!==t.tab?e("li",{staticClass:"m-nav-breadcrumbs__item"},[e("span",{staticClass:"m-nav-breadcrumbs__span"},[t._v(t._s(t.tabName))])]):t._e()],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);