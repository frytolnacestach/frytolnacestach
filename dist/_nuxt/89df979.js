(window.webpackJsonp=window.webpackJsonp||[]).push([[97,124],{553:function(e,t,n){"use strict";n.r(t);var c={name:"SkeletonoTopPlaceComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-top-place"},[t("div",{staticClass:"skeleton-o-top-place__outer"},[t("div",{staticClass:"skeleton-o-top-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-top-place__item"},[t("div",{staticClass:"skeleton-o-top-place__content"},[t("div",{class:"skeleton-o-top-place__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},566:function(e,t,n){"use strict";n.r(t);n(241),n(13),n(68),n(29);var c=n(10),o=(n(54),n(44),n(43),n(113),n(88)),r=n.n(o),l={name:"OrganismsoTopPlaceComponent",components:{skeletonoTopPlace:n(553).default},data:function(){return{topPlaces:[],placesContinents:[],placesStates:[],placesCities:[],places:null,images:null}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,l,d,m,f,_,h,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("https://api.frytolnacestach.cz/api/top-places");case 2:return n=t.sent,e.topPlaces=n.data,c=e.topPlaces.filter((function(e){return"continent"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),o=e.topPlaces.filter((function(e){return"state"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),l=e.topPlaces.filter((function(e){return"city"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),t.next=9,r.a.get("https://api.frytolnacestach.cz/api/places-continents-array?id=".concat(c.join(",")));case 9:return d=t.sent,e.placesContinents=d.data,t.next=13,r.a.get("https://api.frytolnacestach.cz/api/places-states-array?id=".concat(o.join(",")));case 13:return m=t.sent,e.placesStates=m.data,t.next=17,r.a.get("https://api.frytolnacestach.cz/api/places-cities-array?id=".concat(l.join(",")));case 17:return f=t.sent,e.placesCities=f.data,_=e.placesContinents.concat(e.placesStates,e.placesCities),e.places=_,h=_.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=24,r.a.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(h.join(",")));case 24:w=t.sent,e.images=w.data;case 26:case"end":return t.stop()}}),t)})))()}},d=n(2),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.places||null===e.images?t("skeletonoTopPlace",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.places&&null!==e.images?t("client-only",[t("div",{staticClass:"o-top-place"},[t("div",{staticClass:"o-top-place__outer"},[t("div",{staticClass:"o-top-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-top-place__item"},[t("div",{staticClass:"o-top-place__content"},[t("div",{staticClass:"o-top-place__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-top-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-top-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-top-place__name"},[t("span",{staticClass:"o-top-place__name-type"},[e._v("\n                                    "+e._s("city"===n.type_place?"Město":"state"===n.type_place?"Stát":"continent"===n.type_place?"Kontinent":"")+"\n                                ")]),e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-top-place__link",attrs:{to:"/svet/".concat("continent"===n.type_place?"kontinent":"state"===n.type_place?"stat":"city"===n.type_place?"mesto":"","/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);