(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{333:function(t,e,r){"use strict";r.r(e);r(27);var o={props:{styleThema:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},perexWysiwyg:{type:String,required:!1},perexList:{type:Array,required:!1},perexListItemValueSubfix:{type:Array,required:!1},perexInfo:{type:Array,required:!1},authorName:{type:String,required:!1},authorLink:{type:String,required:!1},authorTarget:{type:String,required:!1}}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-information-block"+(t.styleThema?t.styleThema:"")},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[t.title?e("h2",{staticClass:"o-information-block__title",class:{"-m0":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?e("span",{staticClass:"o-information-block__title-info"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),e("div",{staticClass:"o-information-block__perex"},[t.perexWysiwyg?e("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:t._s(t.perexWysiwyg)}}):t._e(),t._v(" "),t.perexList?e("div",{staticClass:"o-information-block__list"},[e("ul",{staticClass:"o-information-block__list-ul"},t._l(t.perexList,(function(r){return e("li",{key:r.name,staticClass:"o-information-block__list-li"},[e("h3",{staticClass:"o-information-block__list-h3"},[t._v(t._s(r.name))]),t._v(" "),e("span",{staticClass:"o-information-block__list-span"},[t._v(t._s(r.value)+" "+t._s(t.perexListItemValueSubfix))]),t._v(" "),e("i",{staticClass:"o-information-block__list-info"},[t._v("("+t._s(r.date_update)+")")])])})),0)]):t._e(),t._v(" "),t.perexInfo?e("i",{staticClass:"o-information-block__info"},[t._v(t._s(t.perexInfo))]):t._e(),t._v(" "),t.authorName?e("div",{staticClass:"o-information-block__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),t.authorLink?e("a",{staticClass:"m-author__link",attrs:{href:t.authorLink,target:t.authorTarget}},[t._v(t._s(t.authorName))]):e("span",{staticClass:"m-author__span"},[t._v(t._s(t.authorName))])])]):t._e()])])])])}),[],!1,null,null,null);e.default=component.exports}}]);