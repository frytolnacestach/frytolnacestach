(window.webpackJsonp=window.webpackJsonp||[]).push([[105,24,38],{383:function(e,t,n){"use strict";n.r(t);n(229),n(13),n(66),n(28);var c={name:"OrganismsoCoverPlaceComponent",props:{places:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",[null===e.places&&!0===e.skeleton?t("div",{staticClass:"skeleton-o-cover-place"},[t("div",{staticClass:"skeleton-o-cover-place__outer"},[t("div",{staticClass:"skeleton-o-cover-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-place__item"},[e._m(0,!0)])})),0)])]):e._e(),e._v(" "),null!==e.places&&!0!==e.skeleton?t("div",{staticClass:"o-cover-place"},[t("div",{staticClass:"o-cover-place__outer"},[t("div",{staticClass:"o-cover-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place__item"},[t("div",{staticClass:"o-cover-place__content"},[t("div",{staticClass:"o-cover-place__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-cover-place__name"},[e._v("\n                            "+e._s(n.name)+"\n                        ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])]):e._e()])}),[function(){var e=this._self._c;return e("div",{staticClass:"skeleton-o-cover-place__content"},[e("div",{staticClass:"skeleton-o-cover-place__image loading-image -skeleton-green"})])}],!1,null,null,null);t.default=component.exports},384:function(e,t,n){"use strict";n.r(t);var c={name:"OrganismsoHeroPlaceTypeComponent",props:{styleType:{type:String,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero-place-type"+e.styleType},[t("div",{staticClass:"o-hero-place-type__inner"},[e._m(0),e._v(" "),t("h1",{staticClass:"o-hero-place-type__headline"},[e._v(e._s(e.title))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero-place-type__perex"},[e._v(e._s(e.perex))]):e._e()])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-hero-place-type__image"},[e("div",{staticClass:"o-hero-place-type__image-file"})])}],!1,null,null,null);t.default=component.exports},472:function(e,t,n){"use strict";n.r(t);var c=n(23),o=n(10),r=(n(13),n(30),n(31),n(66),n(43),n(44),n(113),n(54),n(383)),l=n(384),d={name:"SvetKontinentIndexPage",components:{oCoverPlace:r.default,oHeroPlaceType:l.default},data:function(){return{images:[],placesContinents:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:{title:"Kontinenty | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách."},{name:"keywords",content:"kontinenty, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Kontinenty | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/svet/kontinent")},{hid:"og:type",content:"website"}]},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadPlaces();case 2:e.addScrollListener();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,l,d,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Promise.all([e.$axios.get("https://api.frytolnacestach.cz/api/places-continents?showType=list&page=".concat(e.page,"&items=").concat(e.perPage))]);case 3:if(n=t.sent,o=Object(c.a)(n,1),r=o[0],l=r.data,!((d=l.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){t.next=17;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(d.join(",")));case 11:m=t.sent,f=m.data,e.images=e.images.concat(f),e.placesContinents=e.placesContinents.concat(l),t.next=18;break;case 17:e.placesContinents=e.placesContinents.concat(l);case 18:(0===l.length||l.length<e.perPage)&&(e.noMoreItems=!0),e.isLoading=!1;case 20:case"end":return t.stop()}}),t)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadPlaces())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadPlaces())}}},beforeDestroy:function(){this.removeScrollListener()}},m=n(2),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHeroPlaceType",{attrs:{styleType:" -continent",title:"Kontinenty",perex:"Na naší planetě najdete 7 kontinentů. Co takhle je prozkoumat všechny, včetně odlehlých míst jako je Antarktida?"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverPlace",{attrs:{places:e.placesContinents,images:e.images,type:"kontinent"}}),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])]),e._v(" "),e.isLoading?t("oCoverPlace",{attrs:{places:null,images:null,type:"kontinent",skeleton:!0}}):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);