(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{331:function(e,t,c){"use strict";c.r(t);c(210),c(13),c(65),c(27),c(42);var n={props:{places:{type:Array,required:!0},images:{type:Object,default:null},type:{type:String,required:!0},biggest:{type:String,required:!1}},computed:{filteredPlaces:function(){return"big"===this.biggest?this.places.filter((function(e){return"yes"===e.biggest})):"nobig"===this.biggest?this.places.filter((function(e){return"yes"!==e.biggest})):this.places}}},r=c(6),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-place-detail"},[t("div",{staticClass:"o-cover-place-detail__outer"},[t("div",{staticClass:"o-cover-place-detail__inner"},[t("div",{staticClass:"o-cover-place-detail__items"},e._l(e.filteredPlaces,(function(c){return t("div",{key:c.id,staticClass:"o-cover-place-detail__item"},[t("div",{staticClass:"o-cover-place-detail__content"},[t("div",{staticClass:"o-cover-place-detail__image loading-image"},[e.images&&e.images.find((function(image){return image.id===c.id_image_cover}))?t("div",{staticClass:"o-cover-place-detail__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 250px, (max-width: 575px) 220px, (max-width: 1920px) 280px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-220.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-250.webp 250w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-280.webp 280w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-440-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-500-2x.webp 500w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-560-2x.webp 560w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,"-720-2x.webp 720w\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name,".webp"),alt:c.name}})]):t("div",{staticClass:"o-cover-place-detail__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-detail__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 250px, (max-width: 575px) 220px, (max-width: 1920px) 280px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/_default/hero-220.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-250.webp 250w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-440-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-500-2x.webp 500w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,\n                                        https://image.frytolnacestach.cz/storage/_default/hero-720-2x.webp 720w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:c.name}})])]),e._v(" "),c.name?t("h3",{staticClass:"o-cover-place-detail__name"},[e._v("\n                            "+e._s(c.name)+"\n                        ")]):e._e(),e._v(" "),c.slug?t("NuxtLink",{staticClass:"o-cover-place-detail__link",attrs:{to:"/svet/".concat(e.type,"/").concat(c.slug),"aria-label":"Čti více o místě ".concat(c.name)}}):e._e()],1)])})),0)])])])}),[],!1,null,null,null);t.default=component.exports}}]);