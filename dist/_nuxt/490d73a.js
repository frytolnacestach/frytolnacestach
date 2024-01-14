(window.webpackJsonp=window.webpackJsonp||[]).push([[180,56,65,103,132],{405:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},423:function(e,t,n){"use strict";n.r(t);n(58),n(40),n(12),n(25);var r=n(9),c=(n(22),n(75),n(252),n(39),{name:"OrganismsFormFilterPlaceComponent",props:{styleThema:{type:String,required:!1},typePlaceFilterName:{type:String,required:!0},typePlaceFilter:{type:String,required:!0}},data:function(){return{filterPlaces:[],filterSelect:""}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"continents"===e.typePlaceFilter?(n=e.$route.query.filterIDcontinent)&&(e.filterSelect=parseInt(n,10)):"states"===e.typePlaceFilter&&(r=e.$route.query.filterIDstate)&&(e.filterSelect=parseInt(r,10)),t.next=3,e.loadPlaces();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("continents"!==e.typePlaceFilter){t.next=8;break}return t.next=3,e.$axios.get("https://api.frytolnacestach.cz/api/places-continents?showType=filter");case 3:n=t.sent,r=n.data,e.filterPlaces=r,t.next=14;break;case 8:if("states"!==e.typePlaceFilter){t.next=14;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/places-states?showType=filter");case 11:n=t.sent,c=n.data,e.filterPlaces=c;case 14:e.updateParentVariable(e.filterSelect);case 15:case"end":return t.stop()}}),t)})))()},handleFilterSelectChange:function(){var e=this.filterSelect;"continents"===this.typePlaceFilter?this.$router.replace({query:{filterIDcontinent:e}}):"states"===this.typePlaceFilter&&this.$router.replace({query:{filterIDstate:e}}),this.updateParentVariable(e)},updateParentVariable:function(e){var t=this.filterPlaces.find((function(t){return t.id===e}));t?this.$emit("update",{id:e,name:t.name}):this.$emit("update",{id:null,name:null})}}}),o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"o-form-filter-place"+(e.styleThema?e.styleThema:""),attrs:{role:"filter"}},[t("div",{staticClass:"o-form-filter-place__outer"},[t("div",{staticClass:"o-form-filter-place__inner"},[t("div",{staticClass:"o-form-filter-place__form"},[t("div",{class:"m-select"+(e.styleThema?e.styleThema:"")},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.filterSelect,expression:"filterSelect"}],staticClass:"m-select__select",attrs:{name:"filterSelect"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filterSelect=t.target.multiple?n:n[0]},e.handleFilterSelectChange]}},[t("option",{attrs:{value:""}},[e._v(e._s(e.typePlaceFilterName))]),e._v(" "),e._l(e.filterPlaces,(function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v(e._s(n.name))])}))],2)])])])])])}),[],!1,null,null,null);t.default=component.exports},609:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoTimePlaceComponent",props:{styleThema:{type:String,required:!0}}},c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-time-place"},[t("div",{staticClass:"skeleton-o-time-place__outer"},[t("div",{staticClass:"skeleton-o-time-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-time-place__item"},[t("div",{staticClass:"skeleton-o-time-place__content"},[t("div",{class:"skeleton-o-time-place__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},635:function(e,t,n){"use strict";n.r(t);n(252),n(12),n(57),n(25);var r={name:"OrganismsoTimePlaceComponent",components:{skeletonoTimePlace:n(609).default},props:{places:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}}},c=n(2),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.places&&!0===e.skeleton?t("skeletonoTimePlace",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.places&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-time-place"},[t("div",{staticClass:"o-time-place__outer"},[t("div",{staticClass:"o-time-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-time-place__item"},[t("div",{staticClass:"o-time-place__content"},[t("div",{staticClass:"o-time-place__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-time-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-time-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-time-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-time-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-time-place__name"},[e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-time-place__link",attrs:{to:"/svetovy-cas/".concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},742:function(e,t,n){"use strict";n.r(t);var r=n(9),c=(n(57),n(40),n(12),n(58),n(154),n(39),n(423)),o=n(405),l=n(635),d={name:"SvetovyCasIndexPage",components:{oFormFilterPlace:c.default,oHero:o.default,oTimePlace:l.default},data:function(){return{headline:"Kolik hodin je ve světě",filterPlace:null,images:[],placesStates:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e;return"Kolik hodin je ve světě, čas, státy, časová pásma, cestování, svět","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Kolik hodin je ve světě | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:e="Kolik hodin je ve světě."},{name:"keywords",content:"Kolik hodin je ve světě, čas, státy, časová pásma, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:e},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/svetovy-cas")},{hid:"og:type",content:"website"}]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$route.query.filterIDcontinent){t.next=4;break}return t.next=4,e.loadPlaces();case 4:e.addScrollListener();case 5:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c,o,l,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.isLoading=!0,null===t.filterPlace){n.next=7;break}return n.next=4,t.$axios.get("https://api.frytolnacestach.cz/api/places-states?showType=list&idContinent=".concat(t.filterPlace,"&page=").concat(t.page,"&items=").concat(t.perPage));case 4:r=n.sent,n.next=10;break;case 7:return n.next=9,t.$axios.get("https://api.frytolnacestach.cz/api/places-states?showType=list&page=".concat(t.page,"&items=").concat(t.perPage));case 9:r=n.sent;case 10:if(c=r.data,!((o=c.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){n.next=21;break}return n.next=15,t.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(o.join(",")));case 15:l=n.sent,d=l.data,t.images=t.images.concat(d),t.placesStates=e?c:t.placesStates.concat(c),n.next=22;break;case 21:t.placesStates=e?c:t.placesStates.concat(c);case 22:(0===c.length||c.length<t.perPage)&&(t.noMoreItems=!0),t.isLoading=!1;case 24:case"end":return n.stop()}}),n)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadPlaces())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadPlaces())}},filterUpdate:function(e){this.filterPlace=e.id,this.images=[],this.placesStates=[],this.isLoading=!1,this.noMoreItems=!1,this.page=1,this.perPage=20,this.loadPlaces(!0)}},beforeDestroy:function(){this.removeScrollListener()}},m=n(2),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section py-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:e.headline,perex:"Připravte se na světové dobrodružství přesně podle svého rytmu! Náš cestovatelský portál vám přináší aktuální čas a časový posun v různých zemích, abyste byli vždycky v synchronizaci s časem.",modifierCSS:" -green -w640"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 hidden-print"},[t("div",{staticClass:"t-section__inner"},[t("oFormFilterPlace",{attrs:{styleThema:" -green",typePlaceFilterName:"Vybrat kontinent",typePlaceFilter:"continents"},on:{update:e.filterUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oTimePlace",{attrs:{places:e.placesStates,images:e.images,type:"stat"}}),e._v(" "),e.isLoading?t("oTimePlace",{attrs:{places:null,images:null,type:"stat",skeleton:!0}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);