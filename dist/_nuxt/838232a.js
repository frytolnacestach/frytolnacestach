(window.webpackJsonp=window.webpackJsonp||[]).push([[39,85],{429:function(t,e,n){"use strict";n.r(e);var l={name:"OrganismsoNoneContentComponent",props:{text:{type:Array,required:!0},styleThema:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{class:"o-none-content"+(t.styleThema?t.styleThema:"")},[e("div",{staticClass:"o-none-content__outer"},[e("div",{class:"o-none-content__inner"+(t.styleGap?t.styleGap:"")},[e("span",[t._v(t._s(t.text))])])])])}),[],!1,null,null,null);e.default=component.exports},605:function(t,e,n){"use strict";n.r(e);n(12),n(25);var l=n(18),o=(n(57),n(58),{name:"OrganismsoBlockListComponent",components:{oNoneContent:n(429).default},props:{items:{type:Array,required:!1},perexListItemValueSubfix:{type:String,required:!1}},head:function(){return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",itemListElement:this.items.map((function(t,e){return{"@type":"ListItem",position:e+1,item:{name:t.name,perex:t.value}}}))}}]}:{script:[]}},methods:{formatDate:function(t){var e=t.split("-"),n=Object(l.a)(e,2),o=n[0],r=n[1];return new Date("".concat(r,"-").concat(o,"-01")).toLocaleDateString("cs",{month:"long",year:"numeric"})}}}),r=n(1),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-block-list"},[e("div",{staticClass:"o-block-list__outer"},[e("div",{staticClass:"o-block-list__inner"},[e("div",{staticClass:"o-block-list__list"},[t.items.some((function(t){return t.value}))?e("ul",{staticClass:"o-block-list__list-ul"},t._l(t.items,(function(n){return n.value?e("li",{key:n.name,staticClass:"o-block-list__list-li print-section"},[e("div",{staticClass:"o-block-list__list-content"},[e("div",{staticClass:"o-block-list__list-text"},[e("h3",{staticClass:"o-block-list__list-h3"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"o-block-list__list-span"},[t._v(t._s(n.value)+" "+t._s(t.perexListItemValueSubfix))])]),t._v(" "),e("i",{staticClass:"o-block-list__list-info"},[t._v("("+t._s(t.formatDate(n.date_update))+")")])])]):t._e()})),0):e("oNoneContent",{attrs:{text:"Bohužel tu není žadný obsah",styleThema:" -green",styleGap:" px-1"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);