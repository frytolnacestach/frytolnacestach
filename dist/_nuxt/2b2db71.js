(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{343:function(t,e,n){"use strict";n.r(e);n(210),n(13),n(65),n(27);var c=n(10),r=(n(53),n(84),n(43),n(42),n(107),{name:"oTopPlace",data:function(){return{topPlaces:this.topPlaces,places:this.places,placesContinents:this.placesContinents,placesStates:this.placesStates,placesCities:this.placesCities,images:this.images}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/top-places").then((function(t){return t.json()}));case 2:return t.topPlaces=e.sent,n=t.topPlaces.filter((function(t){return"continent"===t.type&&null!==t.id_place&&""!==t.id_place})).map((function(t){return t.id_place})),c=t.topPlaces.filter((function(t){return"state"===t.type&&null!==t.id_place&&""!==t.id_place})).map((function(t){return t.id_place})),r=t.topPlaces.filter((function(t){return"city"===t.type&&null!==t.id_place&&""!==t.id_place})).map((function(t){return t.id_place})),e.next=8,fetch("https://frytolnacestach-api.vercel.app/api/places-continents-array?id=".concat(n.join(","))).then((function(t){return t.json()}));case 8:return t.placesContinents=e.sent,e.next=11,fetch("https://frytolnacestach-api.vercel.app/api/places-states-array?id=".concat(c.join(","))).then((function(t){return t.json()}));case 11:return t.placesStates=e.sent,e.next=14,fetch("https://frytolnacestach-api.vercel.app/api/places-cities-array?id=".concat(r.join(","))).then((function(t){return t.json()}));case 14:return t.placesCities=e.sent,t.places=(t.placesContinents?t.placesContinents:[]).concat(t.placesStates?t.placesStates:[],t.placesCities?t.placesCities:[]),o=t.places.map((function(t){return t.id_image_cover})).filter((function(t){return null!==t&&""!==t})),e.next=19,fetch("https://frytolnacestach-api.vercel.app/api/images-array?id=".concat(o.join(","))).then((function(t){return t.json()}));case 19:t.images=e.sent;case 20:case"end":return e.stop()}}),e)})))()}))}),o=r,l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-top-place"},[e("div",{staticClass:"o-top-place__outer"},[e("div",{staticClass:"o-top-place__items"},t._l(t.places,(function(n){return e("div",{key:n.id,staticClass:"o-top-place__item"},[e("div",{staticClass:"o-top-place__content"},[e("div",{staticClass:"o-top-place__image loading-image"},[t.images&&t.images.find((function(image){return image.id===n.id_image_cover}))?e("div",{staticClass:"o-top-place__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):e("div",{staticClass:"o-top-place__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),t._v(" "),e("h2",{staticClass:"o-top-place__name"},[e("span",{staticClass:"o-top-place__name-type"},[t._v("\n                            "+t._s("city"===n.type_place?"Město":"state"===n.type_place?"Stát":"continent"===n.type_place?"Kontinent":"")+"\n                        ")]),t._v("\n                        "+t._s(n.name)+"\n                    ")]),t._v(" "),e("NuxtLink",{staticClass:"o-top-place__link",attrs:{to:"/svet/".concat("continent"===n.type_place?"kontinent":"state"===n.type_place?"stat":"city"===n.type_place?"mesto":"","/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);