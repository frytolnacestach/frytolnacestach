(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{553:function(e,t,n){"use strict";n.r(t);n(241),n(13),n(68),n(29),n(43);var c={name:"OrganismsoCoverPlaceDetailComponent",props:{places:{type:Array,required:!0},images:{type:Array,default:null},type:{type:String,required:!0},importance:{type:String,required:!1}},computed:{filteredPlaces:function(){return"biggest"===this.importance?this.places.filter((function(e){return"biggest"===e.importance})):null===this.importance?this.places.filter((function(e){return"biggest"!==e.importance})):this.places}}},r=n(2),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-place-detail"},[t("div",{staticClass:"o-cover-place-detail__outer"},[t("div",{staticClass:"o-cover-place-detail__inner"},[t("div",{staticClass:"o-cover-place-detail__items"},e._l(e.filteredPlaces,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place-detail__item"},[t("div",{staticClass:"o-cover-place-detail__content"},[t("div",{staticClass:"o-cover-place-detail__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place-detail__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 230px, (max-width: 374px) 248px, (max-width: 399px) 146px, (max-width: 459px) 170px, (max-width: 575px) 216px, (max-width: 767px) 310px, (max-width: 992px) 206px, (max-width: 1219px) 172px, (max-width: 1399px) 200px, 278px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-354.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-380.webp 248w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-226.webp 146w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-264.webp 170w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-314.webp 310w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-314.webp 206w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-264.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-314.webp 200w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-424.webp 278w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-708-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-760-2x.webp 496w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-452-2x.webp 292w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-528-2x.webp 340w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-664-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-628-2x.webp 620w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-628-2x.webp 412w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-528-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-628-2x.webp 400w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"v-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-848-2x.webp 556w\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-place-detail__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 354px, (max-width: 374px) 380px, (max-width: 399px) 226px, (max-width: 459px) 264px, (max-width: 575px) 332px, (max-width: 992px) 314px, (max-width: 1219px) 264px, (max-width: 1399px) 314px, 424px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/v-hero-354.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-380.webp 248w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-226.webp 146w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-264.webp 170w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-332.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-314.webp 310w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-314.webp 206w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-264.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-314.webp 200w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-424.webp 278w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-708-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-760-2x.webp 496w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-452-2x.webp 292w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-528-2x.webp 340w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-664-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-628-2x.webp 620w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-628-2x.webp 412w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-528-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-628-2x.webp 400w,\n                                        https://image.frytolnacestach.cz/storage/v-hero-848-2x.webp 556w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),n.name?t("h3",{staticClass:"o-cover-place-detail__name"},[e._v("\n                            "+e._s(n.name)+"\n                        ")]):e._e(),e._v(" "),n.slug?t("NuxtLink",{staticClass:"o-cover-place-detail__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}}):e._e()],1)])})),0)])])])}),[],!1,null,null,null);t.default=component.exports}}]);