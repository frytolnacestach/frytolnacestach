(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{683:function(t,e,n){"use strict";n.r(e);n(253),n(12),n(57),n(25);var l=n(9),r=(n(36),n(58),n(38),n(41),n(154),{name:"OrganismsoEventListSmallComponent",props:{styleThema:{type:String,required:!1}},data:function(){return{events:this.events,images:this.images}},head:function(){return this.events||null!==this.events?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Nejbližší události",itemListElement:this.events.map((function(t,e){return{"@type":"ListItem",position:e+1,item:{"@id":"https://frytolnacestach.cz/udalost/"+t.slug,name:t.name}}}))}}]}:{script:[]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("cs",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"})}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/events?limit=5&status=nearby").then((function(t){return t.json()}));case 2:return t.events=e.sent,n=t.events.map((function(t){return t.id_image_cover})).filter((function(t){return null!==t&&""!==t})),e.next=6,fetch("https://api.frytolnacestach.cz/api/images-array?id=".concat(n.join(","))).then((function(t){return t.json()}));case 6:t.images=e.sent;case 7:case"end":return e.stop()}}),e)})))()}))}),o=r,c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-event-list-small"+(t.styleThema?t.styleThema:" -gray")},[e("div",{staticClass:"o-event-list-small__outer"},[e("div",{staticClass:"o-event-list-small__inner"},[e("div",{staticClass:"o-event-list-small__items"},t._l(t.events,(function(n){return e("div",{key:n.id,staticClass:"o-event-list-small__item"},[e("div",{staticClass:"o-event-list-small__image-container"},[e("div",{class:"o-event-list-small__image loading-image"+(t.styleThema?t.styleThema:" -gray")},[t.images&&t.images.find((function(image){return image.id===n.id_image_hero}))?e("div",{staticClass:"o-event-list-small__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-event-list-small__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-100.webp 100w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-200-2x.webp 200w,\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name?n.name:"Úvodní obrázek",preload:!0}})]):e("div",{staticClass:"o-event-list-small__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-event-list-small__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/_default/h-hero-100.webp 100w,\n                                        https://image.frytolnacestach.cz/storage/_default/h-hero-200-2x.webp 200w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name?n.name:"Úvodní obrázek",preload:!0}})]),t._v(" "),e("nuxtLink",{staticClass:"o-event-list-small__image-link",attrs:{to:"/udalost/"+n.slug,"aria-label":"Přejít na událost ".concat(n.name)}})],1)]),t._v(" "),e("div",{staticClass:"o-event-list-small__text"},[e("h3",{staticClass:"o-event-list-small__name"},[e("nuxtLink",{staticClass:"o-event-list-small__name-link",attrs:{to:"/udalost/"+n.slug}},[t._v(t._s(n.name))])],1),t._v(" "),n.date_start||n.date_end?e("span",{staticClass:"o-event-list-small__date"},[e("span",{staticClass:"o-event-list-small__date-start"},[t._v("Začátek události: "+t._s(t.formatDate(n.date_start)))]),t._v(" "),e("span",{staticClass:"o-event-list-small__date-end"},[t._v("Konec události: "+t._s(t.formatDate(n.date_end)))])]):t._e()])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);