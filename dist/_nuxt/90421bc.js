(window.webpackJsonp=window.webpackJsonp||[]).push([[49,3,13,18,32],{316:function(e,t,c){"use strict";c.r(t);var o={props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},r=c(6),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))])])}),[],!1,null,null,null);t.default=component.exports},333:function(e,t,c){"use strict";c.r(t);c(65),c(27),c(35);var o={props:{place:{type:Array,required:!0},image:{type:Array,required:!0},type:{type:String,required:!0}}},r=c(6),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-place-block"},[t("div",{staticClass:"o-place-block__outer"},[t("div",{staticClass:"o-place-block__inner"},[t("div",{staticClass:"o-place-block__content"},[t("div",{staticClass:"o-place-block__image loading-image"},[e.image?t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px, 390px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,"-345.webp 345w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-390.webp 390w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-690-2x.webp 690w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-780-2x.webp 780w\n                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,".webp"),alt:e.place[0].name}})]):t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px, 390px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-390.webp 390w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-780-2x.webp 780w\n                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.place[0].name}})]),e._v(" "),t("div",{staticClass:"o-place-block__filter"},[t("span",{staticClass:"o-place-block__name"},[e._v(e._s(e.place[0].name))])])]),e._v(" "),t("div",{staticClass:"o-place-block__text"},[e.place[0].information_chatgpt?t("div",{staticClass:"o-place-block__wysiwyg",domProps:{innerHTML:e._s(e.place[0].information_chatgpt.slice(0,220))}}):e._e(),e._v(" "),t("NuxtLink",{staticClass:"o-place-block__more",attrs:{to:"/svet/".concat(e.type,"/").concat(e.place[0].slug)}},[e._v("Číst více")])],1)])])])])}),[],!1,null,null,null);t.default=component.exports},334:function(e,t,c){"use strict";c.r(t);c(22),c(66);var o={props:{url:{type:String,required:!0}},methods:{getSlugURL:function(e){return(e=e.replace("https://youtu.be/","").replace("https://youtube.com/shorts/","")).replace(" ","")}}},r=c(6),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-youtube"},[t("div",{staticClass:"o-youtube__outer"},[t("div",{staticClass:"o-youtube__inner"},[t("div",{staticClass:"o-youtube__video"},[t("iframe",{staticClass:"o-youtube__video-iframe",attrs:{src:"https://www.youtube.com/embed/"+e.getSlugURL(e.url),frameborder:"0",allowfullscreen:""}})])])])])}),[],!1,null,null,null);t.default=component.exports},349:function(e,t,c){"use strict";c.r(t);c(27);var o={props:{title:{type:Array,required:!0},image:{type:Array,required:!0}}},r=c(6),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-article"},[t("div",{staticClass:"o-hero-article__image loading-image"},[e.image?t("div",{staticClass:"o-hero-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",srcset:{374:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",575:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",767:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",991:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1139:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1219:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1399:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1400:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp","374@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","911@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1139@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1219@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1399@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1400@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px"},expression:"{\n                    src: 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                    srcset: {\n                        '374': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '575': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '767': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '991': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1139': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1219': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1399': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1400': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '911@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1139@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1219@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1399@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1400@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x'\n                    },\n                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'\n                }"}],staticClass:"o-hero-place__image-file lazyload-file",attrs:{alt:e.title}})]):t("div",{staticClass:"o-hero-article__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/_default/hero.webp",srcset:{374:"https://image.frytolnacestach.cz/storage/_default/hero.webp",575:"https://image.frytolnacestach.cz/storage/_default/hero.webp",767:"https://image.frytolnacestach.cz/storage/_default/hero.webp",991:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1139:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1219:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1399:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1400:"https://image.frytolnacestach.cz/storage/_default/hero.webp","374@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","991@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1139@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1219@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1399@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1400@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px"},expression:"{\n                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                    srcset: {\n                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1139': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1219': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1139@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1219@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'\n                    },\n                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'\n                }"}],staticClass:"o-hero-article__image-file lazyload-file",attrs:{alt:e.title}})]),e._v(" "),t("div",{staticClass:"o-hero-article__outer"},[t("div",{staticClass:"o-hero-article__inner"},[t("h1",{staticClass:"o-hero-article__headline"},[e._v(e._s(e.title))])])])])])}),[],!1,null,null,null);t.default=component.exports},367:function(e,t,c){"use strict";c.r(t);var o=c(10),r=(c(53),c(27),c(316)),n=c(349),l=c(333),m=c(334),h={name:"PageBlogSlug",components:{mHeadline:r.default,oHeroVideo:n.default,oPlaceBlock:l.default,oYoutube:m.default},props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)}},data:function(){return{video:this.video,image:this.image,placeContinent:this.placeContinent,placeState:this.placeState,placeCity:this.placeCity,imageContinent:this.imageContinent,imageState:this.imageState,imageCity:this.imageCity}},head:function(){return{title:"".concat(this.video[0].title," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.video[0].title)},{property:"og:image",content:"".concat(this.video[0].id_image?"https://image.frytolnacestach.cz/storage"+this.image[0].source+this.image[0].name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png")}]}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var c,o,video,image,r,n,l,m,h,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.$axios,o=e.params,t.prev=1,t.next=4,c.$get("https://frytolnacestach-api.vercel.app/api/video/".concat(o.slug));case 4:return video=t.sent,t.next=7,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(video[0].id_image));case 7:return image=t.sent,t.next=10,c.$get("https://frytolnacestach-api.vercel.app/api/places-city-id/".concat(video[0].id_city));case 10:return r=t.sent,t.next=13,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(r[0].id_image_hero));case 13:return n=t.sent,t.next=16,c.$get("https://frytolnacestach-api.vercel.app/api/places-state-id/".concat(video[0].id_state));case 16:return l=t.sent,t.next=19,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(l[0].id_image_hero));case 19:return m=t.sent,t.next=22,c.$get("https://frytolnacestach-api.vercel.app/api/places-continent-id/".concat(video[0].id_continent));case 22:return h=t.sent,t.next=25,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(h[0].id_image_hero));case 25:return d=t.sent,t.abrupt("return",{video:video,image:image,placeCity:r,placeState:l,placeContinent:h,imageCity:n,imageState:m,imageContinent:d});case 29:t.prev=29,t.t0=t.catch(1),console.error(t.t0);case 32:case"end":return t.stop()}}),t,null,[[1,29]])})))()},mounted:function(){this.adsenseAddLoad()}},d=c(6),component=Object(d.a)(h,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -pt-menu"},[t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oHeroVideo",{attrs:{image:e.image,title:e.video[0].title}})],1)]),e._v(" "),t("div",{staticClass:"t-col2"},[t("div",{staticClass:"t-col2__content my-2"},[e.video[0].perex?t("section",{staticClass:"t-section py-2"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"o-information-block"},[t("div",{staticClass:"o-information-block__outer"},[t("div",{staticClass:"o-information-block__inner"},[t("div",{staticClass:"o-information-block__perex"},[t("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:e._s(e.video[0].perex)}}),e._v(" "),e._m(0)])])])])])]):e._e(),e._v(" "),e.video[0].url?t("section",{staticClass:"t-section py-2"},[t("div",{staticClass:"t-section__inner"},[t("oYoutube",{attrs:{url:e.video[0].url}})],1)]):e._e()]),e._v(" "),t("div",{staticClass:"t-col2__sidebar my-2"},[t("section",{staticClass:"t-section my-2"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"o-ad-google-sidebar"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])]),e._v(" "),e.video[0].id_continent||e.video[0].id_state||e.video[0].id_city?t("div",{staticClass:"t-layout-full"},[t("section",{staticClass:"t-section -bg-gray pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Více informací o místě",styleAlign:" -p-left",styleGap:" mb-2"}}),e._v(" "),t("div",{staticClass:"flex px-1"},[t("oPlaceBlock",{attrs:{place:e.placeContinent,image:e.imageContinent,type:"kontinent"}}),e._v(" "),t("oPlaceBlock",{attrs:{place:e.placeState,image:e.imageState,type:"stat"}}),e._v(" "),t("oPlaceBlock",{attrs:{place:e.placeCity,image:e.imageCity,type:"mesto"}})],1)],1)])]):e._e()])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-information-block__author"},[t("i",{staticClass:"m-author"},[e._v("zdroj. "),t("a",{staticClass:"m-author__link",attrs:{href:"#"}},[e._v("Michal Fryč")])])])}],!1,null,null,null);t.default=component.exports}}]);