(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{396:function(e,t,n){"use strict";n.r(t);n(229),n(13),n(66),n(28);var c=n(10),r=(n(54),n(113),n(43),n(44),{name:"OrganismsoCoverPlaceComponent",props:{loadingNecessaryData:{type:Boolean,required:!0},placesID:{type:Array,required:!0},type:{type:String,required:!0},account:{type:String,required:!0}},data:function(){return{places:null,images:null}},watch:{placesID:{immediate:!0,handler:function(e,t){e.length>0&&(e!==t||!this.places)&&!1===this.loadingNecessaryData&&this.loadData()}},loadingNecessaryData:function(e,t){e||0!==this.placesID.length||(this.places=[])}},methods:{loadData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=[],"kontinent"!==e.type){t.next=13;break}if(!(e.placesID.length>0)){t.next=9;break}return t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=".concat(e.placesID.join(",")));case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=[];case 10:n=t.t0,t.next=55;break;case 13:if("stat"!==e.type){t.next=24;break}if(!(e.placesID.length>0)){t.next=20;break}return t.next=17,e.$axios.$get("https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=".concat(e.placesID.join(",")));case 17:t.t1=t.sent,t.next=21;break;case 20:t.t1=[];case 21:n=t.t1,t.next=55;break;case 24:if("mesto"!==e.type){t.next=35;break}if(!(e.placesID.length>0)){t.next=31;break}return t.next=28,e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=".concat(e.placesID.join(",")));case 28:t.t2=t.sent,t.next=32;break;case 31:t.t2=[];case 32:n=t.t2,t.next=55;break;case 35:if("region"!==e.type){t.next=46;break}if(!(e.placesID.length>0)){t.next=42;break}return t.next=39,e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=".concat(e.placesID.join(",")));case 39:t.t3=t.sent,t.next=43;break;case 42:t.t3=[];case 43:n=t.t3,t.next=55;break;case 46:if("misto"!==e.type){t.next=55;break}if(!(e.placesID.length>0)){t.next=53;break}return t.next=50,e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=".concat(e.placesID.join(",")));case 50:t.t4=t.sent,t.next=54;break;case 53:t.t4=[];case 54:n=t.t4;case 55:if(!((c=n.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=62;break}return t.next=59,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(c.join(",")));case 59:t.t5=t.sent,t.next=63;break;case 62:t.t5=[];case 63:r=t.t5,e.places=n,e.images=r,t.next=72;break;case 68:t.prev=68,t.t6=t.catch(0),console.log("API ERROR - VYPIS NAVŠTÍVIL JSEM/CHCI NAVŠTÍVIT"),console.error(t.t6);case 72:case"end":return t.stop()}}),t,null,[[0,68]])})))()}}}),o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[null===e.places?t("div",[t("div",{staticClass:"skeleton-o-cover-place-visited"},[t("div",{staticClass:"skeleton-o-cover-place-visited__outer"},[t("div",{staticClass:"o-cover-place-visited__items"},e._l(5,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-place-visited__item"},[e._m(0,!0)])})),0)])])]):e._e(),e._v(" "),null!==e.places?t("client-only",[t("div",{staticClass:"o-cover-place-visited"},[t("div",{staticClass:"o-cover-place-visited__outer"},[t("div",{staticClass:"o-cover-place-visited__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place-visited__item"},[t("div",{staticClass:"o-cover-place-visited__content"},[t("div",{staticClass:"o-cover-place-visited__image loading-image -blue"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place-visited__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-visited__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 176px, (max-width: 459px) 206px, (max-width: 575px) 264px, (max-width: 767px) 236px, (max-width: 991px) 232px, (max-width: 1219px) 164px, (max-width: 1399px) 200px, 304px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 176w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 206w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 264w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 236w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 232w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 164w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 200w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-306.webp 304w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 352w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 412w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 528w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 472w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 464w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 328w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 400w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-612-2x.webp 608w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-place-visited__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-visited__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 176px, (max-width: 459px) 206px, (max-width: 575px) 264px, (max-width: 767px) 236px, (max-width: 991px) 232px, (max-width: 1219px) 164px, (max-width: 1399px) 200px, 304px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 176w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 206w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 264w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 236w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 232w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 164w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 200w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-306.webp 304w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 352w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 412w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 528w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 472w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 464w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 328w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 400w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-612-2x.webp 608w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-cover-place-visited__name"},[e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place-visited__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e(),e._v(" "),e.places&&Array.isArray(e.places)&&0===e.places.length?t("client-only",["other"===e.account?t("p",[e._v("\n            Ještě tu žádné místo nemám.\n        ")]):t("p",[e._v("\n            Nemáš tu žádné místo. Co takhle projít "),t("nuxt-link",{attrs:{to:"/svet"}},[e._v("svět")]),e._v(" a přidat sem místa?\n        ")],1)]):e._e()],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"skeleton-o-cover-place-visited__content"},[e("div",{staticClass:"skeleton-o-cover-place-visited__image loading-image -skeleton-blue"})])}],!1,null,null,null);t.default=component.exports}}]);