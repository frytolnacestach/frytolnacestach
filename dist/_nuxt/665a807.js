(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{690:function(t,e,r){"use strict";r.r(e);r(253),r(12),r(57),r(25);var n=r(18),c=r(9),o=(r(36),r(254),r(27),r(28),r(41),r(58),r(154),{name:"OrganismsoSidebarListTravelDictionaryComponent",props:{IDTravelDictionary:{type:Number,required:!0}},data:function(){return{travelDictionaries:[],images:[],isLoading:!1}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,l,d,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,Promise.all([t.$axios.get("https://api.frytolnacestach.cz/api/travel-dictionaries-random?showType=list&actualID=".concat(t.IDTravelDictionary,"&quantity=5"))]);case 3:if(r=e.sent,c=Object(n.a)(r,1),o=c[0],l=o.data,!((d=l.map((function(t){return t.id_image_cover})).filter((function(t){return null!=t&&""!==t}))).length>0)){e.next=17;break}return e.next=11,t.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(d.join(",")));case 11:v=e.sent,m=v.data,t.images=t.images.concat(m),t.travelDictionaries=t.travelDictionaries.concat(l),e.next=18;break;case 17:t.travelDictionaries=t.travelDictionaries.concat(l);case 18:t.isLoading=!1;case 19:case"end":return e.stop()}}),e)})))()}}),l=r(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.travelDictionaries&&t.travelDictionaries.length>0?e("section",{staticClass:"t-section -px-world mt-1 mb-2 print-section"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__outer"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__inner"},[e("h3",{staticClass:"o-sidebar-list-travel-dictionary__header"},[t._v("Další výrazy")]),t._v(" "),e("div",{staticClass:"o-sidebar-list-travel-dictionary__items"},t._l(t.travelDictionaries,(function(r){return e("div",{key:r.id,staticClass:"o-sidebar-list-travel-dictionary__item"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__image-container"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__image loading-image -green"},[t.images&&t.images.find((function(image){return image.id===r.id_image_hero}))?e("div",{staticClass:"o-sidebar-list-travel-dictionary__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-sidebar-list-travel-dictionary__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-100.webp 100w,\n                                                https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-200-2x.webp 200w,\n                                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,".webp"),alt:r.name?r.name:"Úvodní obrázek",preload:!0}})]):e("div",{staticClass:"o-sidebar-list-travel-dictionary__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-sidebar-list-travel-dictionary__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/_default/h-hero-100.webp 100w,\n                                                https://image.frytolnacestach.cz/storage/_default/h-hero-200-2x.webp 200w\n                                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:r.name?r.name:"Úvodní obrázek",preload:!0}})]),t._v(" "),e("nuxtLink",{staticClass:"o-sidebar-list-travel-dictionary__image-link",attrs:{to:"/cestovatelsky-slovnik/"+r.slug}})],1)]),t._v(" "),e("div",{staticClass:"o-sidebar-list-travel-dictionary__text"},[e("h4",{staticClass:"o-sidebar-list-travel-dictionary__name"},[e("nuxtLink",{staticClass:"o-sidebar-list-travel-dictionary__name-link",attrs:{to:"/cestovatelsky-slovnik/"+r.slug}},[t._v(t._s(r.name))])],1)])])})),0)])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);