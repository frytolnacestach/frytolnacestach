(window.webpackJsonp=window.webpackJsonp||[]).push([[49,2,3,19,27],{316:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(6),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))])])}),[],!1,null,null,null);t.default=component.exports},317:function(e,t,n){"use strict";n.r(t);n(210),n(13),n(27),n(42);var r={props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1}},computed:{filteredVideos:function(){var e=this;return this.type?this.videos.filter((function(video){return video.type===e.type})):this.videos}}},o=n(6),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-video-list"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-video-list__outer"},[t("div",{staticClass:"o-video-list__items"},e._l(e.filteredVideos,(function(video){return t("div",{key:video.id,staticClass:"o-video-list__item"},[t("div",{staticClass:"o-video-list__item-inner"},[t("div",{staticClass:"o-video-list__image loading-image"},[e.images&&e.images.find((function(image){return image.id===video.id_image}))?t("div",{staticClass:"o-video-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp",srcset:{374:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp",439:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp",575:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp",767:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp",991:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp",992:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp","374@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp 2x","439@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp 2x","991@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp 2x","992@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name+".webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px"},expression:"{\n                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',\n                                    srcset: {\n                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',\n                                        '439': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',\n                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',\n                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',\n                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',\n                                        '992': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp',\n                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',\n                                        '439@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',\n                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',\n                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',\n                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x',\n                                        '992@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === video.id_image).source + images.find(image => image.id === video.id_image).name + '.webp 2x'\n                                    },\n                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'\n                                }"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{alt:video.title?video.title:"Obrázek videa"}})]):t("div",{staticClass:"o-video-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/_default/hero.webp",srcset:{374:"https://image.frytolnacestach.cz/storage/_default/hero.webp",439:"https://image.frytolnacestach.cz/storage/_default/hero.webp",575:"https://image.frytolnacestach.cz/storage/_default/hero.webp",767:"https://image.frytolnacestach.cz/storage/_default/hero.webp",991:"https://image.frytolnacestach.cz/storage/_default/hero.webp",992:"https://image.frytolnacestach.cz/storage/_default/hero.webp","374@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","439@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","991@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","992@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px"},expression:"{\n                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                    srcset: {\n                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '439': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '992': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '439@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '992@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'\n                                    },\n                                    sizes: '(max-width: 374px) 374px, (max-width: 439px) 439px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, 992px'\n                                }"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{alt:video.title?video.title:"Obrázek videa"}})]),e._v(" "),video.slug?t("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-video-list__text"},[video.title?t("h3",{staticClass:"o-video-list__title"},[t("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[e._v(e._s(video.title))])],1):e._e()])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},318:function(e,t,n){"use strict";n.r(t);var r={props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(6),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{to:e.url}},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},320:function(e,t,n){"use strict";n.r(t);n(27);var r=n(10),o=(n(53),n(13),n(84),{name:"oPlatform",data:function(){return{platforms:this.platforms}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(e){return e.json()}));case 2:e.platforms=t.sent;case 3:case"end":return t.stop()}}),t)})))()}))}),c=o,d=n(6),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-platform"},[t("div",{staticClass:"o-platform__outer"},[t("div",{staticClass:"o-platform__inner"},[t("div",{staticClass:"o-platform__items"},e._l(e.platforms,(function(e){return t("div",{key:e.id,staticClass:"o-platform__item"},[t("div",{staticClass:"o-platform__icon"},[t("a",{class:"o-platform__icon-file -"+e.slug,attrs:{href:e.url,target:"_blank",title:e.name}})])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},358:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(53),n(318)),c=n(316),d=n(137),m=n(320),l=n(317),f={name:"PageClanky",components:{aButtonFill:o.default,mHeadline:c.default,oHero:d.default,oPlatform:m.default,oVideoList:l.default},data:function(){return{headline:"Videa",videos:this.videos,images:this.images}},head:{title:"Videa | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Videa z webu Frytol na cestách"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"}]},updated:function(){window.lazySizes&&window.lazySizes.update()},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://frytolnacestach-api.vercel.app/api/videos");case 3:return r=t.sent,t.next=6,n.$get("https://frytolnacestach-api.vercel.app/api/images");case 6:return o=t.sent,t.abrupt("return",{videos:r,images:o});case 8:case"end":return t.stop()}}),t)})))()}},h=n(6),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -pt-menu"},[t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:e.headline}})],1)]),e._v(" "),e.videos[0]?t("section",{staticClass:"t-section pt-4 py-2"},[t("div",{staticClass:"t-section__inner"},[t("oVideoList",{attrs:{videos:e.videos,images:e.images}})],1)]):e._e(),e._v(" "),t("section",{staticClass:"t-section t-section--gray pt-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -center"}}),e._v(" "),t("oPlatform"),e._v(" "),t("div",{staticClass:"flex flex-center mb-4"},[t("aButtonFill",{attrs:{url:"/social",text:"Více informací",styleThema:" -blue",styleSize:" -big",target:"internal"}})],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);