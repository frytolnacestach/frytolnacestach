(window.webpackJsonp=window.webpackJsonp||[]).push([[48,3,5,9,18,25,35],{317:function(t,e,r){"use strict";r.r(e);var n={props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{to:t.url}},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("h2",{staticClass:"m-headline__title"},[t._v(t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:""))]),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1"},[t._v(t._s(t.perex))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,r){"use strict";r.r(e);r(210),r(13),r(65),r(27),r(42);var n={props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}},computed:{filteredVideos:function(){var t=this;return this.type?this.videos.filter((function(video){return video.type===t.type})):this.videos}}},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:"o-video-list"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")},[e("div",{staticClass:"o-video-list__outer"},[e("div",{staticClass:"o-video-list__items"},t._l(t.filteredVideos,(function(video){return e("div",{key:video.id,staticClass:"o-video-list__item"},[e("div",{staticClass:"o-video-list__item-inner"},[e("div",{staticClass:"o-video-list__image loading-image"},[t.images&&t.images.find((function(image){return image.id===video.id_image}))?e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),t._v(" "),video.slug?e("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-video-list__text"},[video.title?e("h3",{staticClass:"o-video-list__title"},[e("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[t._v(t._s(video.title))])],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,r){"use strict";r.r(e);r(210),r(13),r(65),r(27);var n={props:{posts:{type:Array,required:!0},images:{type:Array,required:!0},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}}},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:"o-article-list"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")},[e("div",{staticClass:"o-article-list-list__outer"},[e("div",{staticClass:"o-article-list__items"},t._l(t.posts,(function(r){return e("div",{key:r.id,staticClass:"o-article-list__item"},[e("div",{staticClass:"o-article-list__item-inner"},[e("div",{staticClass:"o-article-list__image loading-image"},[t.images&&t.images.find((function(image){return image.id===r.id_image_cover}))?e("div",{staticClass:"o-article-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-767.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,".webp"),alt:r.title?r.title:"Obrázek článku"}})]):e("div",{staticClass:"o-article-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-article-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 992px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-767.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:r.title?r.title:"Obrázek článku"}})]),t._v(" "),r.slug?e("NuxtLink",{staticClass:"o-article-list__image-link",attrs:{to:"/clanky/".concat(r.slug),"aria-label":"Přečti si článek ".concat(r.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-article-list__text"},[r.title?e("h3",{staticClass:"o-article-list__title"},[e("NuxtLink",{staticClass:"o-article-list__title-link",attrs:{to:"/clanky/".concat(r.slug)}},[t._v(t._s(r.title))])],1):t._e(),t._v(" "),r.perex?e("p",{staticClass:"o-article-list__perex"},[e("NuxtLink",{staticClass:"o-article-list__perex-link",attrs:{to:"/clanky/".concat(r.slug)}},[t._v(t._s(r.perex))])],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);r(27);var n=r(10),l=(r(53),r(13),r(84),{name:"oPlatform",data:function(){return{platforms:this.platforms}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),c=l,o=r(6),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__item-content"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,r){"use strict";r.r(e);var n={name:"oHeroBig",props:{headline:{type:String,required:!0}}},l=r(6),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-hero-big"},[e("div",{staticClass:"o-hero-big__image loading-image"},[e("div",{staticClass:"o-hero-big__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-big__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1920px","data-srcset":"\n                    https://image.frytolnacestach.cz/storage/_default/hero-374.webp 374w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-575.webp 575w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-767.webp 767w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-991.webp 991w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1139.webp 1139w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1219.webp 1219w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1399.webp 1399w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1920.webp 1920w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-748-2x.webp 748w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1150-2x.webp 1150w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1534-2x.webp 1534w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-1982-2x.webp 1982w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-2278-2x.webp 2278w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-2438-2x.webp 2438w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-2798-2x.webp 2798w,\n                    https://image.frytolnacestach.cz/storage/_default/hero-3840-2x.webp 3840w,\n                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:t.headline}})]),t._v(" "),e("div",{staticClass:"o-hero-big__outer"},[e("div",{staticClass:"o-hero-big__inner"},[e("h1",{staticClass:"o-hero-big__headline"},[t._v(t._s(t.headline))]),t._v(" "),e("p",{staticClass:"o-hero-big__perex"},[t._v("Cestování a natáčení")]),t._v(" "),e("div",{staticClass:"o-hero-big__buttons mt-2"},[e("a",{staticClass:"a-button-fill -big",attrs:{href:"https://youtube.com/@frytolnacestach",target:"_blank"}},[t._v("Youtube")]),t._v(" "),e("NuxtLink",{staticClass:"a-button-fill -big -blue",attrs:{to:"/iam"}},[t._v("Kdo jsem")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,r){"use strict";r.r(e);var n=r(10),l=(r(53),r(317)),c=r(318),o=r(320),d=r(358),m=r(321),f=r(319),h={name:"IndexPage",components:{aButtonFillFull:l.default,mHeadline:c.default,oArticleList:o.default,oHerobig:d.default,oPlatform:m.default,oVideoList:f.default},data:function(){return{image:this.image,video:this.video,headline:"Frytol na cestách"}},head:{title:"Frytol na cestách",meta:[{hid:"description",name:"description",content:"Úvodní stránka webu Frytol na cestách"},{name:"keywords",content:"úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Frytol na cestách"},{hid:"og:description",content:"Úvodní stránka webu Frytol na cestách"},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,video,image,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("https://frytolnacestach-api.vercel.app/api/post-last");case 3:return n=e.sent,e.next=6,r.$get("https://frytolnacestach-api.vercel.app/api/video-last/");case 6:return video=e.sent,e.next=9,r.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(video[0].id_image));case 9:return image=e.sent,e.next=12,r.$get("https://frytolnacestach-api.vercel.app/api/images/");case 12:return l=e.sent,e.abrupt("return",{posts:n,video:video,image:image,images:l});case 14:case"end":return e.stop()}}),e)})))()}},_=r(6),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -bg-person",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0"},[e("div",{staticClass:"t-section__inner"},[e("oHerobig",{attrs:{headline:t.headline}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 px-1"},[e("div",{staticClass:"t-section__inner -col"},[e("div",{staticClass:"t-section__col px-1 mb-4"},[e("mHeadline",{attrs:{title:"Nejnovější článek",styleAlign:" -left"}}),t._v(" "),e("oArticleList",{attrs:{posts:t.posts,images:t.images,styleThema:" -latest"}}),t._v(" "),e("div",{staticClass:"flex flex-full flex-ai-end flex-center mt-2"},[e("aButtonFillFull",{attrs:{url:"/clanky",text:"Všechny články",styleThema:" -green",target:"internal"}})],1)],1),t._v(" "),e("div",{staticClass:"t-section__col px-1 mb-4"},[e("mHeadline",{attrs:{title:"Nejnovější video",styleAlign:" -left"}}),t._v(" "),e("oVideoList",{attrs:{videos:t.video,images:t.image,styleThema:" -latest"}}),t._v(" "),e("div",{staticClass:"flex flex-full flex-ai-end flex-center mt-2"},[e("aButtonFillFull",{attrs:{url:"/videa",text:"Všechna videa",styleThema:"  -green",target:"internal"}})],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);