(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{584:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25),n(58);var c={name:"OrganismsoCoverStatesComponent",props:{items:{type:Array,required:!0},images:{type:Array,required:!0}},head:function(){return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Státy výskytu",itemListElement:this.items.map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/stat/".concat(e.slug),name:e.name}}}))}}]}:{script:[]}}},r=n(1),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-states"},[t("div",{staticClass:"o-cover-states__outer"},[t("div",{staticClass:"o-cover-states__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-states__item"},[t("div",{staticClass:"o-cover-states__content"},[t("div",{staticClass:"o-cover-states__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-states__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-states__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 210w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 240w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 234w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 166w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 202w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-306.webp 306w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-232-2x.webp 320w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 420w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 480w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 468w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 332w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 404w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-612-2x.webp 612w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-states__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-states__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 210w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 240w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 234w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 166w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 202w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-306.webp 306w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-232-2x.webp 320w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 420w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 480w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 468w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 332w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 404w,\n                                    https://image.frytolnacestach.cz/storage/_default/s-hero-612-2x.webp 612w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h3",{staticClass:"o-cover-states__name"},[e._v("\n                        "+e._s(n.name)+"\n                    ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-states__link",attrs:{to:"/svet/stat/".concat(n.slug),"aria-label":"Čti více o jídle ".concat(n.name)}})],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);