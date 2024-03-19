(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{589:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25);var r=n(9),c=(n(36),n(254),n(58),n(38),n(41),n(154),{name:"OrganismsoSidebarEventComponent",props:{place:{type:Number,required:!0},type:{type:String,required:!0}},data:function(){return{events:[],images:[]}},head:function(){return this.events||null!==this.events?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Události v lokalitě",itemListElement:this.events.map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":"https://frytolnacestach.cz/udalost/"+e.slug,name:e.name}}}))}}]}:{script:[]}},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("cs",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"})}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("state"!==e.type){t.next=6;break}return t.next=3,fetch("https://api.frytolnacestach.cz/api/events-id-state/".concat(e.place)).then((function(e){return e.json()}));case 3:e.events=t.sent,t.next=22;break;case 6:if("region"!==e.type){t.next=12;break}return t.next=9,fetch("https://api.frytolnacestach.cz/api/events-id-region/".concat(e.place)).then((function(e){return e.json()}));case 9:e.events=t.sent,t.next=22;break;case 12:if("city"!==e.type){t.next=18;break}return t.next=15,fetch("https://api.frytolnacestach.cz/api/events-id-city/".concat(e.place)).then((function(e){return e.json()}));case 15:e.events=t.sent,t.next=22;break;case 18:if("spot"!==e.type){t.next=22;break}return t.next=21,fetch("https://api.frytolnacestach.cz/api/events-id-spot/".concat(e.place)).then((function(e){return e.json()}));case 21:e.events=t.sent;case 22:return n=e.events.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=25,fetch("https://api.frytolnacestach.cz/api/images-array?id=".concat(n.join(","))).then((function(e){return e.json()}));case 25:e.images=t.sent;case 26:case"end":return t.stop()}}),t)})))()}))}),o=c,d=n(1),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;return e.events&&e.events.length>0?t("section",{staticClass:"t-section -px-world my-2"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"o-sidebar-event"},[t("div",{staticClass:"o-sidebar-event__outer"},[t("div",{staticClass:"o-sidebar-event__inner"},[t("h3",{staticClass:"o-sidebar-event__header"},[e._v("Události v lokalitě")]),e._v(" "),t("div",{staticClass:"o-sidebar-event__items"},e._l(e.events,(function(n){return t("div",{key:n.id,staticClass:"o-sidebar-event__item"},[t("div",{staticClass:"o-sidebar-event__image-container"},[t("div",{staticClass:"o-sidebar-event__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_hero}))?t("div",{staticClass:"o-sidebar-event__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-sidebar-event__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-100.webp 100w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-200-2x.webp 200w,\n                                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name?n.name:"Úvodní obrázek",preload:!0}})]):t("div",{staticClass:"o-sidebar-event__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-sidebar-event__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/_default/h-hero-100.webp 100w,\n                                                https://image.frytolnacestach.cz/storage/_default/h-hero-200-2x.webp 200w\n                                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name?n.name:"Úvodní obrázek",preload:!0}})]),e._v(" "),t("nuxtLink",{staticClass:"o-sidebar-event__image-link",attrs:{to:"/udalost/"+n.slug,"aria-label":"Přejít na událost ".concat(n.name)}})],1)]),e._v(" "),t("div",{staticClass:"o-sidebar-event__text"},[t("h4",{staticClass:"o-sidebar-event__name"},[t("nuxtLink",{staticClass:"o-sidebar-event__name-link",attrs:{to:"/udalost/"+n.slug}},[e._v(e._s(n.name))])],1),e._v(" "),n.date_start||n.date_end?t("span",{staticClass:"o-sidebar-event__dates"},[t("span",{staticClass:"o-sidebar-event__date"},[t("span",{staticClass:"o-sidebar-event__date-text"},[e._v("Začátek události ")]),e._v(" "),t("span",{staticClass:"o-sidebar-event__date-value"},[e._v(e._s(e.formatDate(n.date_start)))])]),e._v(" "),t("span",{staticClass:"o-sidebar-event__date"},[t("span",{staticClass:"o-sidebar-event__date-text"},[e._v("Konec události ")]),e._v(" "),t("span",{staticClass:"o-sidebar-event__date-value"},[e._v(e._s(e.formatDate(n.date_end)))])])]):e._e()])])})),0)])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);