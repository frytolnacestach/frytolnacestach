(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{650:function(t,e,n){"use strict";n.r(e);n(252),n(12),n(57),n(25);var r=n(9),o=(n(39),n(36),n(40),n(58),n(154),{name:"OrganismsoEventListComponent",props:{styleThema:{type:String,required:!1}},data:function(){return{events:this.events,images:this.images}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("cs",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"})}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/events?limit=5&status=nearby").then((function(t){return t.json()}));case 2:return t.events=e.sent,n=t.events.map((function(t){return t.id_image_cover})).filter((function(t){return null!==t&&""!==t})),e.next=6,fetch("https://api.frytolnacestach.cz/api/images-array?id=".concat(n.join(","))).then((function(t){return t.json()}));case 6:t.images=e.sent;case 7:case"end":return e.stop()}}),e)})))()}))}),c=o,l=n(2),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{class:"o-event-list"+(t.styleThema?t.styleThema:" -gray")},[e("div",{staticClass:"o-event-list__outer"},[e("div",{staticClass:"o-event-list__inner"},[e("div",{staticClass:"o-event-list__items"},t._l(t.events,(function(n){return e("div",{key:n.id,staticClass:"o-event-list__item"},[e("div",{staticClass:"o-event-list__image-container"},[e("div",{class:"o-event-list__image loading-image"+(t.styleThema?t.styleThema:" -gray")},[t.images&&t.images.find((function(image){return image.id===n.id_image_hero}))?e("div",{staticClass:"o-event-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-event-list__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-100.webp 100w,\n                                        https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-200-2x.webp 200w,\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name?n.name:"Úvodní obrázek",preload:!0}})]):e("div",{staticClass:"o-event-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-event-list__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/_default/h-hero-100.webp 100w,\n                                        https://image.frytolnacestach.cz/storage/_default/h-hero-200-2x.webp 200w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name?n.name:"Úvodní obrázek",preload:!0}})]),t._v(" "),e("nuxtLink",{staticClass:"o-event-list__image-link",attrs:{to:"/udalost/"+n.slug}})],1)]),t._v(" "),e("div",{staticClass:"o-event-list__text"},[e("h4",{staticClass:"o-event-list__name"},[e("nuxtLink",{staticClass:"o-event-list__name-link",attrs:{to:"/udalost/"+n.slug}},[t._v(t._s(n.name))])],1),t._v(" "),n.date_start||n.date_end?e("span",{staticClass:"o-event-list__date"},[e("span",{staticClass:"o-event-list__date-start"},[t._v("Začátek události: "+t._s(t.formatDate(n.date_start)))]),t._v(" "),e("span",{staticClass:"o-event-list__date-end"},[t._v("Konec události: "+t._s(t.formatDate(n.date_end)))])]):t._e()])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);