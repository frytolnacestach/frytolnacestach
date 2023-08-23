(window.webpackJsonp=window.webpackJsonp||[]).push([[128,32,41,49],{386:function(e,t,n){"use strict";n.r(t);n(44),n(43),n(13),n(28);var r=n(23),c=n(10),o=(n(30),n(31),n(54),{name:"OrganismsFormFilterPlaceComponent",props:{typePlaceFilterName:{type:String,required:!0},typePlaceFilter:{type:String,required:!0}},data:function(){return{filterPlaces:[],filterSelect:""}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadPlaces();case 2:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,l,d,m,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("continents"!==e.typePlaceFilter){t.next=10;break}return t.next=3,Promise.all([e.$axios.get("https://api.frytolnacestach.cz/api/places-continents?showType=filter")]);case 3:n=t.sent,c=Object(r.a)(n,1),o=c[0],l=o.data,e.filterPlaces=l,t.next=18;break;case 10:if("states"!==e.typePlaceFilter){t.next=18;break}return t.next=13,Promise.all([e.$axios.get("https://api.frytolnacestach.cz/api/places-states?showType=filter")]);case 13:d=t.sent,m=Object(r.a)(d,1),f=m[0],h=f.data,e.filterPlaces=h;case 18:case"end":return t.stop()}}),t)})))()},handleFilterSelectChange:function(){var e=this.filterSelect;this.updateParentVariable(e)},updateParentVariable:function(e){var t=e;this.$emit("update",t)}}}),l=n(2),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-filter-place",attrs:{role:"filter"}},[t("div",{staticClass:"o-form-filter-place__outer"},[t("div",{staticClass:"o-form-filter-place__inner"},[t("div",{staticClass:"o-form-filter-place__form"},[t("div",{staticClass:"m-select"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.filterSelect,expression:"filterSelect"}],staticClass:"m-select__select",attrs:{name:"filterSelect"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filterSelect=t.target.multiple?n:n[0]},e.handleFilterSelectChange]}},[t("option",{attrs:{value:""}},[e._v(e._s(e.typePlaceFilterName))]),e._v(" "),e._l(e.filterPlaces,(function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v(e._s(n.name))])}))],2)])])])])])}),[],!1,null,null,null);t.default=component.exports},387:function(e,t,n){"use strict";n.r(t);n(229),n(13),n(66),n(28);var r={name:"OrganismsoCoverPlaceComponent",props:{places:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}}},c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",[null===e.places&&!0===e.skeleton?t("div",{staticClass:"skeleton-o-cover-place"},[t("div",{staticClass:"skeleton-o-cover-place__outer"},[t("div",{staticClass:"skeleton-o-cover-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-place__item"},[e._m(0,!0)])})),0)])]):e._e(),e._v(" "),null!==e.places&&!0!==e.skeleton?t("div",{staticClass:"o-cover-place"},[t("div",{staticClass:"o-cover-place__outer"},[t("div",{staticClass:"o-cover-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place__item"},[t("div",{staticClass:"o-cover-place__content"},[t("div",{staticClass:"o-cover-place__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                        https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                        https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-cover-place__name"},[e._v("\n                            "+e._s(n.name)+"\n                        ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])]):e._e()])}),[function(){var e=this._self._c;return e("div",{staticClass:"skeleton-o-cover-place__content"},[e("div",{staticClass:"skeleton-o-cover-place__image loading-image -skeleton-green"})])}],!1,null,null,null);t.default=component.exports},388:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoHeroPlaceTypeComponent",props:{styleType:{type:String,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1}}},c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero-place-type"+e.styleType},[t("div",{staticClass:"o-hero-place-type__inner"},[e._m(0),e._v(" "),t("h1",{staticClass:"o-hero-place-type__headline"},[e._v(e._s(e.title))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero-place-type__perex"},[e._v(e._s(e.perex))]):e._e()])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-hero-place-type__image"},[e("div",{staticClass:"o-hero-place-type__image-file"})])}],!1,null,null,null);t.default=component.exports},631:function(e,t,n){"use strict";n.r(t);var r=n(23),c=n(10),o=(n(13),n(30),n(31),n(66),n(43),n(44),n(113),n(54),n(387)),l=n(386),d=n(388),m={name:"SvetMistoIndexPage",components:{oCoverPlace:o.default,oFormFilterPlace:l.default,oHeroPlaceType:d.default},data:function(){return{images:[],placesSpots:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20,filterPlace:""}},head:{title:"Místa | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Zjisti si základní informace o místech za pomocí cestovatelského portálu Frytol na cestách."},{name:"keywords",content:"místa, informace o místech, plánuj cestu, cestovatelský portál, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Regiony | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Zjisti si základní informace o místech za pomocí cestovatelského portálu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/svet/misto")},{hid:"og:type",content:"website"}]},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadPlaces();case 2:e.addScrollListener();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,o,l,d,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Promise.all([e.$axios.get("https://api.frytolnacestach.cz/api/places-spots?showType=list&idState=".concat(e.filterPlace,"&page=").concat(e.page,"&items=").concat(e.perPage))]);case 3:if(n=t.sent,c=Object(r.a)(n,1),o=c[0],l=o.data,!((d=l.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){t.next=17;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(d.join(",")));case 11:m=t.sent,f=m.data,e.images=e.images.concat(f),e.placesSpots=e.placesSpots.concat(l),t.next=18;break;case 17:e.placesSpots=e.placesSpots.concat(l);case 18:(0===l.length||l.length<e.perPage)&&(e.noMoreItems=!0),e.isLoading=!1;case 20:case"end":return t.stop()}}),t)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadPlaces())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadPlaces())}},filterUpdate:function(e){this.filterPlace=e,this.images=[],this.placesSpots=[],this.isLoading=!1,this.noMoreItems=!1,this.page=1,this.perPage=20,this.loadPlaces()}},beforeDestroy:function(){this.removeScrollListener()}},f=n(2),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHeroPlaceType",{attrs:{styleType:" -spot",title:"Místa",perex:"Informace o místech"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oFormFilterPlace",{attrs:{typePlaceFilterName:"Vybrat stát",typePlaceFilter:"states"},on:{update:e.filterUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverPlace",{attrs:{places:e.placesSpots,images:e.images,type:"misto"}}),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])]),e._v(" "),e.isLoading?t("oCoverPlace",{attrs:{places:null,images:null,type:"misto",skeleton:!0}}):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);