(window.webpackJsonp=window.webpackJsonp||[]).push([[47,7,12],{321:function(e,t,c){"use strict";c.r(t);c(210),c(13),c(27),c(65);var r={props:{places:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0}}},n=c(6),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-place"},[t("div",{staticClass:"o-cover-place__outer"},[t("div",{staticClass:"o-cover-place__items"},e._l(e.places,(function(c){return t("div",{key:c.id,staticClass:"o-cover-place__item"},[t("div",{staticClass:"o-cover-place__content"},[t("div",{staticClass:"o-cover-place__image loading-image"},[e.images&&e.images.find((function(image){return image.id===c.id_image_cover}))?t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp",srcset:{374:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp",575:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp",767:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp",991:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp",1400:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp",1920:"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp","374@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp 2x","991@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp 2x","1400@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp 2x","1920@2x":"https://image.frytolnacestach.cz/storage/"+e.images.find((function(image){return image.id===c.id_image_cover})).source+e.images.find((function(image){return image.id===c.id_image_cover})).name+".webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1400px) 1400px, 1920px"},expression:"{\n                                    src: 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',\n                                    srcset: {\n                                        '374': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',\n                                        '575': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',\n                                        '767': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',\n                                        '991': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',\n                                        '1400': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',\n                                        '1920': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp',\n                                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',\n                                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',\n                                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',\n                                        '991@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',\n                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x',\n                                        '1920@2x': 'https://image.frytolnacestach.cz/storage/' + images.find(image => image.id === place.id_image_cover).source + images.find(image => image.id === place.id_image_cover).name + '.webp 2x'\n                                    },\n                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1400px) 1400px, 1920px'\n                                }"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{alt:c.name}})]):t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/_default/hero.webp",srcset:{374:"https://image.frytolnacestach.cz/storage/_default/hero.webp",575:"https://image.frytolnacestach.cz/storage/_default/hero.webp",767:"https://image.frytolnacestach.cz/storage/_default/hero.webp",991:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1400:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1920:"https://image.frytolnacestach.cz/storage/_default/hero.webp","374@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","991@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1400@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1920@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1400px) 1400px, 1920px"},expression:"{\n                                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                    srcset: {\n                                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '1920': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                                        '1920@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'\n                                    },\n                                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1400px) 1400px, 1920px'\n                                }"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{alt:c.name}})])]),e._v(" "),t("h3",{staticClass:"o-cover-place__name"},[e._v("\n                        "+e._s(c.name)+"\n                    ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place__link",attrs:{to:"/svet/".concat(e.type,"/").concat(c.slug)}})],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports},322:function(e,t,c){"use strict";c.r(t);var r={props:{styleType:{type:String,required:!0},title:{type:String,required:!0}}},n=c(6),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero-place-type"+e.styleType},[t("div",{staticClass:"o-hero-place-type__inner"},[e._m(0),e._v(" "),t("h1",{staticClass:"o-hero-place-type__headline"},[e._v(e._s(e.title))])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-hero-place-type__image"},[e("div",{staticClass:"o-hero-place-type__image-file"})])}],!1,null,null,null);t.default=component.exports},361:function(e,t,c){"use strict";c.r(t);var r=c(24),n=c(10),o=(c(53),c(13),c(28),c(29),c(321)),m=c(322),d={name:"PageStaty",components:{oCoverPlace:o.default,oHeroPlaceType:m.default},methods:{},data:function(){return{images:this.images,placesStates:this.placesStates}},head:{title:"Státy | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Oběvuj svět a jeho místá s Frytolem na cestách"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"}]},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var c,n,o,m,d,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.$axios,t.next=3,Promise.all([c.$get("https://frytolnacestach-api.vercel.app/api/places-continents"),c.$get("https://frytolnacestach-api.vercel.app/api/places-states"),c.$get("https://frytolnacestach-api.vercel.app/api/places-cities"),c.$get("https://frytolnacestach-api.vercel.app/api/images")]);case 3:return n=t.sent,o=Object(r.a)(n,4),m=o[0],d=o[1],l=o[2],f=o[3],t.abrupt("return",{placesContinents:m,placesStates:d,placesCities:l,images:f});case 10:case"end":return t.stop()}}),t)})))()}},l=c(6),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -pt-menu"},[t("section",{staticClass:"t-section py-4 -bg-brand3"},[t("div",{staticClass:"t-section__inner"},[t("oHeroPlaceType",{attrs:{styleType:" -state",title:"Státy"}})],1)]),e._v(" "),t("section",{staticClass:"t-section"},[t("div",{staticClass:"t-section__inner"},[t("oCoverPlace",{attrs:{places:e.placesStates,images:e.images,type:"stat"}})],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);