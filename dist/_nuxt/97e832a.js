(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{426:function(e,t,o){"use strict";o.r(t);o(229),o(13),o(66),o(28);var n={name:"OrganismsoHeroArticleComponent",props:{post:{type:Array,required:!0},images:{type:Array,required:!0}},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}}},r=o(2),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-article"},[t("div",{staticClass:"o-hero-article__image loading-image -gray"},[e.images&&e.images.find((function(image){return image.id===e.post[0].id_image_hero}))?t("div",{staticClass:"o-hero-article__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-article__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                    https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-374.webp 374w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-575.webp 575w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-767.webp 767w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-991.webp 991w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-1139.webp 1139w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-1219.webp 1219w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-1399.webp 1399w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-1920.webp 1920w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-748-2x.webp 748w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-1150-2x.webp 1150w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-1534-2x.webp 1534w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-1982-2x.webp 1982w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-2278-2x.webp 2278w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-2438-2x.webp 2438w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-2798-2x.webp 2798w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,"-3840-2x.webp 3840w,\n                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===e.post[0].id_image_cover})).source+e.images.find((function(image){return image.id===e.post[0].id_image_cover})).name,".webp"),alt:e.post[0].title}})]):t("div",{staticClass:"o-hero-article__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-article__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                    https://image.frytolnacestach.cz/storage/_default/hero-374.webp 374w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-575.webp 575w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-767.webp 767w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-991.webp 991w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1139.webp 1139w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1219.webp 1219w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1399.webp 1399w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1920.webp 1920w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-748-2x.webp 748w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1150-2x.webp 1150w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1534-2x.webp 1534w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1982-2x.webp 1982w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-2278-2x.webp 2278w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-2438-2x.webp 2438w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-2798-2x.webp 2798w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-3840-2x.webp 3840w,\n                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.post[0].title}})]),e._v(" "),t("div",{staticClass:"o-hero-article__outer"},[t("div",{staticClass:"o-hero-article__inner"},[e.post[0].title?t("h1",{staticClass:"o-hero-article__headline"},[e._v(e._s(e.post[0].title))]):e._e(),e._v(" "),e.post[0].perex?t("p",{staticClass:"o-hero-article__perex"},[e._v(e._s(e.post[0].perex))]):e._e(),e._v(" "),e.post[0].date?t("span",{staticClass:"o-hero-article__date"},[e._v(e._s(e.formatDate(e.post[0].date))+" "),e.post[0].dateUpdate?t("span",[e._v("(aktualizace "+e._s(e.formatDate(e.post[0].dateUpdate))+")")]):e._e()]):e._e()])])])])}),[],!1,null,null,null);t.default=component.exports}}]);