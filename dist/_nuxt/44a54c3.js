(window.webpackJsonp=window.webpackJsonp||[]).push([[59,3,5,25,35],{317:function(t,e,n){"use strict";n.r(e);var r={props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{to:t.url}},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("h2",{staticClass:"m-headline__title"},[t._v(t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:""))]),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1"},[t._v(t._s(t.perex))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);n(210),n(13),n(65),n(27),n(42);var r={props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}},computed:{filteredVideos:function(){var t=this;return this.type?this.videos.filter((function(video){return video.type===t.type})):this.videos}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"o-video-list"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")},[e("div",{staticClass:"o-video-list__outer"},[e("div",{staticClass:"o-video-list__items"},t._l(t.filteredVideos,(function(video){return e("div",{key:video.id,staticClass:"o-video-list__item"},[e("div",{staticClass:"o-video-list__item-inner"},[e("div",{staticClass:"o-video-list__image loading-image"},[t.images&&t.images.find((function(image){return image.id===video.id_image}))?e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===video.id_image})).source+t.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):e("div",{staticClass:"o-video-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-340.webp 340w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-400.webp 400w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-680-2x.webp 680w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-800-2x.webp 800w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),t._v(" "),video.slug?e("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):t._e()],1),t._v(" "),e("div",{staticClass:"o-video-list__text"},[video.title?e("h3",{staticClass:"o-video-list__title"},[e("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[t._v(t._s(video.title))])],1):t._e()])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);n(27);var r=n(10),l=(n(53),n(13),n(84),{name:"oPlatform",data:function(){return{platforms:this.platforms}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(6),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__item-content"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},367:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(53),n(317)),o=n(318),c=n(137),d=n(321),m=n(319),f={name:"PageClanky",components:{aButtonFillFull:l.default,mHeadline:o.default,oHero:c.default,oPlatform:d.default,oVideoList:m.default},data:function(){return{headline:"Videa",videos:this.videos,images:this.images}},head:{title:"Videa | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Videa z webu Frytol na cestách"},{name:"keywords",content:"videa, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Videa | Frytol na cestách"},{hid:"og:description",content:"Videa z webu Frytol na cestách"},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/videa")},{hid:"og:type",content:"website"}]},updated:function(){window.lazySizes&&window.lazySizes.update()},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://frytolnacestach-api.vercel.app/api/videos");case 3:return r=e.sent,e.next=6,n.$get("https://frytolnacestach-api.vercel.app/api/images");case 6:return l=e.sent,e.abrupt("return",{videos:r,images:l});case 8:case"end":return e.stop()}}),e)})))()}},h=n(6),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -bg-person -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 mb-1 mt-2"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline}})],1)]),t._v(" "),t.videos[0]?e("section",{staticClass:"t-section -p0 py-1 px-2"},[e("div",{staticClass:"t-section__inner"},[e("oVideoList",{attrs:{videos:t.videos,images:t.images}})],1)]):t._e(),t._v(" "),e("section",{staticClass:"t-section -p0 py-1 mt-2 px-2"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -left",styleGap:"mb-1"}}),t._v(" "),e("oPlatform"),t._v(" "),e("div",{staticClass:"flex flex-center mb-4"},[e("aButtonFillFull",{attrs:{url:"/social",text:"Více informací o platformách",styleThema:" -green",target:"internal"}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);