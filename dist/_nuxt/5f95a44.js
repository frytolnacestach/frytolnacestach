(window.webpackJsonp=window.webpackJsonp||[]).push([[150,8,16,81,94,106,118],{375:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(376).default},props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},r=n(2),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},376:function(e,t,n){"use strict";n.r(t);var c={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1}}},r=n(2),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+" hidden-print",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},553:function(e,t,n){"use strict";n.r(t);var c={name:"SkeletonoTopPlaceComponent",props:{styleThema:{type:String,required:!0}}},r=n(2),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-top-place"},[t("div",{staticClass:"skeleton-o-top-place__outer"},[t("div",{staticClass:"skeleton-o-top-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-top-place__item"},[t("div",{staticClass:"skeleton-o-top-place__content"},[t("div",{class:"skeleton-o-top-place__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},562:function(e,t,n){"use strict";n.r(t);n(241),n(13),n(68),n(29);var c=n(10),r=(n(54),n(44),n(43),n(113),n(88)),o=n.n(r),l={name:"OrganismsoTopPlaceComponent",components:{skeletonoTopPlace:n(553).default},data:function(){return{topPlaces:[],placesContinents:[],placesStates:[],placesCities:[],places:null,images:null}},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,r,l,m,d,_,h,f,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://api.frytolnacestach.cz/api/top-places");case 2:return n=t.sent,e.topPlaces=n.data,c=e.topPlaces.filter((function(e){return"continent"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),r=e.topPlaces.filter((function(e){return"state"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),l=e.topPlaces.filter((function(e){return"city"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),t.next=9,o.a.get("https://api.frytolnacestach.cz/api/places-continents-array?id=".concat(c.join(",")));case 9:return m=t.sent,e.placesContinents=m.data,t.next=13,o.a.get("https://api.frytolnacestach.cz/api/places-states-array?id=".concat(r.join(",")));case 13:return d=t.sent,e.placesStates=d.data,t.next=17,o.a.get("https://api.frytolnacestach.cz/api/places-cities-array?id=".concat(l.join(",")));case 17:return _=t.sent,e.placesCities=_.data,h=e.placesContinents.concat(e.placesStates,e.placesCities),e.places=h,f=h.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=24,o.a.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(f.join(",")));case 24:y=t.sent,e.images=y.data;case 26:case"end":return t.stop()}}),t)})))()}},m=n(2),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.places||null===e.images?t("skeletonoTopPlace",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.places&&null!==e.images?t("client-only",[t("div",{staticClass:"o-top-place"},[t("div",{staticClass:"o-top-place__outer"},[t("div",{staticClass:"o-top-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-top-place__item"},[t("div",{staticClass:"o-top-place__content"},[t("div",{staticClass:"o-top-place__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-top-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-top-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-top-place__name"},[t("span",{staticClass:"o-top-place__name-type"},[e._v("\n                                    "+e._s("city"===n.type_place?"Město":"state"===n.type_place?"Stát":"continent"===n.type_place?"Kontinent":"")+"\n                                ")]),e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-top-place__link",attrs:{to:"/svet/".concat("continent"===n.type_place?"kontinent":"state"===n.type_place?"stat":"city"===n.type_place?"mesto":"","/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},563:function(e,t,n){"use strict";n.r(t);n(29);var c=n(10),r=(n(54),n(13),n(89),{name:"OrganismsoWorldTypeComponent",data:function(){return{count:this.count,items:[{id:1,name:"Kontinenty",url:"/svet/kontinent",length:0,styleThemaItem:" -continent"},{id:2,name:"Státy",url:"/svet/stat",length:0,styleThemaItem:" -state"},{id:3,name:"Regiony",url:"/svet/region",length:0,styleThemaItem:" -region"},{id:4,name:"Města",url:"/svet/mesto",length:0,styleThemaItem:" -city"},{id:5,name:"Místa",url:"/svet/misto",length:0,styleThemaItem:" -spot"}]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,data,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.frytolnacestach.cz/api/places-count");case 2:return n=t.sent,t.next=5,n.json();case 5:data=t.sent,c={places_cities:data.places_cities,places_continents:data.places_continents,places_regions:data.places_regions,places_spots:data.places_spots,places_states:data.places_states},e.items[0].length=c.places_continents,e.items[1].length=c.places_states,e.items[2].length=c.places_regions,e.items[3].length=c.places_cities,e.items[4].length=c.places_spots,e.count=[c];case 13:case"end":return t.stop()}}),t)})))()}))}),o=r,l=n(2),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-world-type"},[t("div",{staticClass:"o-world-type__outer"},[t("div",{staticClass:"o-world-type__inner"},[t("div",{staticClass:"o-world-type__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-world-type__item"},[t("div",{staticClass:"o-world-type__container"},[t("div",{staticClass:"o-world-type__image"},[t("div",{class:"o-world-type__image-file"+n.styleThemaItem},[t("NuxtLink",{staticClass:"o-world-type__image-link",attrs:{to:n.url,alt:n.name}})],1)]),e._v(" "),t("h2",{staticClass:"o-world-type__text"},[t("NuxtLink",{staticClass:"o-world-type__link",attrs:{to:n.url}},[t("span",{staticClass:"o-world-type__link-title"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"o-world-type__link-length"},[e._v("\n                                    ( "),0===n.length?t("div",{staticClass:"o-world-type__link-length-number -loader"}):e._e(),0!==n.length?t("span",{staticClass:"o-world-type__link-length-number -number"},[e._v(e._s(n.length))]):e._e(),e._v(" položek )\n                                ")])])],1)])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},587:function(e,t,n){"use strict";n.r(t);n(68),n(29);var c=n(23),r=n(10),o=(n(54),n(13),n(30),n(31),n(43),n(71),n(72),{name:"OrganismsSearchComponent",methods:{searchPlaces:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,m,d,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents?showType=search&search=".concat(e.searchQuery)),e.$axios.$get("https://api.frytolnacestach.cz/api/places-states?showType=search&search=".concat(e.searchQuery)),e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions?showType=search&search=".concat(e.searchQuery)),e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities?showType=search&search=".concat(e.searchQuery)),e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots?showType=search&search=".concat(e.searchQuery))]);case 3:n=t.sent,r=Object(c.a)(n,5),o=r[0],l=r[1],m=r[2],d=r[3],_=r[4],e.placesContinents=o,e.placesRegions=m,e.placesStates=l,e.placesCities=d,e.placesSpots=_,e.filterPlaces(),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))()},filterPlaces:function(){var e=this;this.filteredPlaces=[],this.searchQuery&&this.searchQuery.length>=3&&(this.filteredPlaces=this.placesContinents.concat(this.placesStates).concat(this.placesCities).concat(this.placesRegions).concat(this.placesSpots).filter((function(t){return t.name.toLowerCase().includes(e.searchQuery.toLowerCase())})))}},data:function(){return{placesContinents:[],placesStates:[],placesRegions:[],placesCities:[],placesSpots:[],placesSearch:"",searchQuery:"",filteredPlaces:[]}},computed:{hasResults:function(){return this.searchQuery.length>=3&&0===this.filteredPlaces.length}},watch:{searchQuery:function(e,t){3==e.length||e.substring(0,3)!==t.substring(0,3)?this.searchPlaces():e.substring(0,3)===t.substring(0,3)?0==this.filteredPlaces.length&&this.searchPlaces():e.length>=3?this.filterPlaces():(this.placesContinents=[],this.placesStates=[],this.placesRegions=[],this.placesCities=[],this.placesSpots=[],this.filteredPlaces=[])}}}),l=n(2),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-search",attrs:{role:"search"}},[t("div",{staticClass:"o-search__input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"a-input-search -green",attrs:{type:"text",placeholder:"Které místo tě zajímá?"},domProps:{value:e.searchQuery},on:{input:[function(t){t.target.composing||(e.searchQuery=t.target.value)},e.filterPlaces]}})]),e._v(" "),e.searchQuery.length<3?t("span",{staticClass:"o-search__condition"},[e._v("Napiš alepoň 3 znaky")]):e._e(),e._v(" "),t("div",{staticClass:"o-search__result"},[t("div",{staticClass:"m-search-result -green"},[e.filteredPlaces.length>0?t("ul",{staticClass:"m-search-result__items"},e._l(e.filteredPlaces,(function(n){return t("li",{key:"".concat(n.type_place,"-").concat(n.id),staticClass:"m-search-result__item"},["continent"===n.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/kontinent/".concat(n.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Kontinent")])]):e._e(),e._v(" "),"state"===n.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/stat/".concat(n.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Stát")])]):e._e(),e._v(" "),"region"===n.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/region/".concat(n.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Region")])]):e._e(),e._v(" "),"city"===n.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/mesto/".concat(n.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Město")])]):e._e(),e._v(" "),"spot"===n.type_place?t("NuxtLink",{staticClass:"m-search-result__link",attrs:{to:"/svet/misto/".concat(n.slug)}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"m-search-result__type"},[e._v("Místo")])]):e._e()],1)})),0):e._e(),e._v(" "),e.searchQuery.length>=3&0===e.filteredPlaces.length?t("span",{staticClass:"m-search-result__no-result"},[e._v("Tak tohle tu bohužel nenajdeš.. :/ "),t("i",[e._v("(zkus to ještě jednou)")])]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},681:function(e,t,n){"use strict";n.r(t);var c=n(375),r=n(587),o=n(562),l=n(563),m={name:"SvetIndexPage",components:{mHeadline:c.default,oSearch:r.default,oTopPlace:o.default,oWorldType:l.default},head:{title:"Svět | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Oběvuj svět a jeho místá na cestovatelské portálu Frytol na cestách. Naplánuj si dovolenou podle svých potřeb a zjisti co tě čeká."},{name:"keywords",content:"Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Svět | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Oběvuj svět a jeho místá s Frytolem na cestách"},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/svet")},{hid:"og:type",content:"website"}]}},d=n(2),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -vh100"},[t("section",{staticClass:"t-section pt-8 pb-4 hidden-print"},[t("div",{staticClass:"t-section__inner"},[t("oSearch")],1)]),e._v(" "),t("section",{staticClass:"t-section py-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Nevíš kam vyrazit?",perex:"Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat.",styleThema:" -world -w640",styleAlign:" -center",styleGap:" mb-2"}}),e._v(" "),t("oWorldType")],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Nejzajímavější místa",perex:"Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování.",styleThema:" -world -w640",styleAlign:" -center",styleGap:" mb-2"}}),e._v(" "),t("oTopPlace")],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);