(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{319:function(t,e,n){"use strict";n.r(e);n(210),n(13),n(65),n(27),n(42);var r={props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}},computed:{filteredVideos:function(){var t=this;return this.type?this.videos.filter((function(video){return video.type===t.type})):this.videos}}},o=n(6),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"o-video-list"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")},[e("div",{staticClass:"o-video-list__outer"},[e("div",{staticClass:"o-video-list__items"},t._l(t.filteredVideos,(function(video){return e("div",{key:video.id,staticClass:"o-video-list__item"},[e("div",{staticClass:"o-video-list__item-inner"},[e("div",{staticClass:"o-video-list__image loading-image"},[t.images&&t.images.find((function(image){return image.id===video.id_image}))?e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),t._v(" "),video.slug?e("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-video-list__text"},[video.title?e("h3",{staticClass:"o-video-list__title"},[e("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[t._v(t._s(video.title))])],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);