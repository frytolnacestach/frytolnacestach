(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{607:function(t,n,o){"use strict";o.r(n);o(29),o(35),o(46);var l=o(23),e=(o(68),{name:"OrganismsoOrganizationListComponent",props:{items:{type:Array,required:!0},headline:{type:String,required:!0}},methods:{formatDate:function(t){var n=t.split("-"),o=Object(l.a)(n,3),e=o[0],r=o[1],c=o[2];return new Date("".concat(e,"-").concat(r,"-").concat(c)).toLocaleDateString("cs",{day:"numeric",month:"long",year:"numeric"})}}}),r=o(2),component=Object(r.a)(e,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"t-section -px-world mb-2"},[n("div",{staticClass:"t-section__inner"},[n("div",{class:"o-organization-list"},[n("div",{staticClass:"o-organization-list__outer"},[n("div",{staticClass:"o-organization-list__inner"},[n("div",{staticClass:"o-organization-list__list"},[n("ul",{staticClass:"o-organization-list__list-ul"},t._l(t.items,(function(o){return n("li",{key:o.name,staticClass:"o-organization-list__list-li"},[n("div",{staticClass:"o-organization-list__list-content"},[n("div",{staticClass:"o-organization-list__list-text"},[n("h3",{staticClass:"o-organization-list__list-h3"},[t._v(t._s(o.name))]),t._v(" "),o.description?n("p",{staticClass:"o-organization-list__list-p"},[t._v(t._s(o.description))]):t._e(),t._v(" "),o.url?n("a",{staticClass:"o-organization-list__list-a",attrs:{href:o.url,alt:o.name}},[t._v("Odkaz")]):t._e()]),t._v(" "),n("span",{staticClass:"o-organization-list__list-info"},[t._v("Vstup: "+t._s(t.formatDate(o.date_update)))])])])})),0)])])])])])])}),[],!1,null,null,null);n.default=component.exports}}]);