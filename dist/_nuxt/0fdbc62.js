(window.webpackJsonp=window.webpackJsonp||[]).push([[170,9,17,66,105,117,135],{402:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},612:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoTopPlaceComponent",props:{styleThema:{type:String,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-top-place"},[t("div",{staticClass:"skeleton-o-top-place__outer"},[t("div",{staticClass:"skeleton-o-top-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-top-place__item"},[t("div",{staticClass:"skeleton-o-top-place__content"},[t("div",{class:"skeleton-o-top-place__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},622:function(e,t,n){"use strict";n.r(t);n(252),n(12),n(57),n(25);var r=n(9),o=(n(39),n(58),n(40),n(154),n(94)),c=n.n(o),l={name:"OrganismsoTopPlaceComponent",components:{skeletonoTopPlace:n(612).default},props:{styleThema:{type:String,required:!1},skeletonThema:{type:String,required:!1}},data:function(){return{topPlaces:[],placesContinents:[],placesStates:[],placesCities:[],places:null,images:null}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,m,_,h,f,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("https://api.frytolnacestach.cz/api/top-places");case 2:return n=t.sent,e.topPlaces=n.data,r=e.topPlaces.filter((function(e){return"continent"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),o=e.topPlaces.filter((function(e){return"state"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),l=e.topPlaces.filter((function(e){return"city"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),t.next=9,c.a.get("https://api.frytolnacestach.cz/api/places-continents-array?id=".concat(r.join(",")));case 9:return d=t.sent,e.placesContinents=d.data,t.next=13,c.a.get("https://api.frytolnacestach.cz/api/places-states-array?id=".concat(o.join(",")));case 13:return m=t.sent,e.placesStates=m.data,t.next=17,c.a.get("https://api.frytolnacestach.cz/api/places-cities-array?id=".concat(l.join(",")));case 17:return _=t.sent,e.placesCities=_.data,h=e.placesContinents.concat(e.placesStates,e.placesCities),e.places=h,f=h.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=24,c.a.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(f.join(",")));case 24:y=t.sent,e.images=y.data;case 26:case"end":return t.stop()}}),t)})))()}},d=n(2),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.places||null===e.images?t("skeletonoTopPlace",{attrs:{styleThema:e.skeletonThema?e.skeletonThema:" -skeleton-gray"}}):e._e(),e._v(" "),null!==e.places&&null!==e.images?t("client-only",[t("div",{staticClass:"o-top-place"},[t("div",{staticClass:"o-top-place__outer"},[t("div",{staticClass:"o-top-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-top-place__item"},[t("div",{staticClass:"o-top-place__content"},[t("div",{class:"o-top-place__image loading-image"+(e.styleThema?e.styleThema:" -gray")},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-top-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-top-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-top-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-top-place__name"},[t("span",{staticClass:"o-top-place__name-type"},[e._v("\n                                    "+e._s("city"===n.type_place?"Město":"state"===n.type_place?"Stát":"continent"===n.type_place?"Kontinent":"")+"\n                                ")]),e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-top-place__link",attrs:{to:"/svet/".concat("continent"===n.type_place?"kontinent":"state"===n.type_place?"stat":"city"===n.type_place?"mesto":"","/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},623:function(e,t,n){"use strict";n.r(t);n(25);var r=n(9),o=(n(39),n(12),n(35),{name:"OrganismsoWorldTypeComponent",props:{styleThema:{type:String,required:!1}},data:function(){return{count:this.count,items:[{id:1,name:"Kontinenty",url:"/svet/kontinent",length:0,styleThemaItem:" -continent"},{id:2,name:"Státy",url:"/svet/stat",length:0,styleThemaItem:" -state"},{id:3,name:"Regiony",url:"/svet/region",length:0,styleThemaItem:" -region"},{id:4,name:"Města",url:"/svet/mesto",length:0,styleThemaItem:" -city"},{id:5,name:"Místa",url:"/svet/misto",length:0,styleThemaItem:" -spot"}]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.frytolnacestach.cz/api/places-count");case 2:return n=t.sent,t.next=5,n.json();case 5:data=t.sent,r={places_cities:data.places_cities,places_continents:data.places_continents,places_regions:data.places_regions,places_spots:data.places_spots,places_states:data.places_states},e.items[0].length=r.places_continents,e.items[1].length=r.places_states,e.items[2].length=r.places_regions,e.items[3].length=r.places_cities,e.items[4].length=r.places_spots,e.count=[r];case 13:case"end":return t.stop()}}),t)})))()}))}),c=o,l=n(2),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"o-world-type"+(e.styleThema?e.styleThema:" -gray")},[t("div",{staticClass:"o-world-type__outer"},[t("div",{staticClass:"o-world-type__inner"},[t("div",{staticClass:"o-world-type__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-world-type__item"},[t("div",{staticClass:"o-world-type__container"},[t("div",{staticClass:"o-world-type__image"},[t("div",{class:"o-world-type__image-file"+n.styleThemaItem},[t("NuxtLink",{staticClass:"o-world-type__image-link",attrs:{to:n.url,"aria-label":"Zobrazit všechny "+n.name}})],1)]),e._v(" "),t("h2",{staticClass:"o-world-type__text"},[t("NuxtLink",{staticClass:"o-world-type__link",attrs:{to:n.url}},[t("span",{staticClass:"o-world-type__link-title"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"o-world-type__link-length"},[e._v("\n                                    ( "),0===n.length?t("div",{staticClass:"o-world-type__link-length-number -loader"}):e._e(),0!==n.length?t("span",{staticClass:"o-world-type__link-length-number -number"},[e._v(e._s(n.length))]):e._e(),e._v(" položek )\n                                ")])])],1)])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},743:function(e,t,n){"use strict";n.r(t);var r=n(402),o=n(407),c=n(622),l=n(623),d={name:"SvetIndexPage",components:{mHeadline:r.default,oHero:o.default,oTopPlace:c.default,oWorldType:l.default},head:function(){var title,e;return"Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Svět | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:e="Oběvuj svět a jeho místá na cestovatelské portálu Frytol na cestách. Naplánuj si dovolenou podle svých potřeb a zjisti co tě čeká."},{name:"keywords",content:"Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:e},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/svet")},{hid:"og:type",content:"website"}]}}},m=n(2),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -vh100"},[t("section",{staticClass:"t-section pt-8 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:"Kam vycestovat?",modifierCSS:" -green"}}),e._v(" "),t("mHeadline",{attrs:{perex:"Nevíš, kam vyrazit na dovolenou nebo za dobrodružstvím? Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat.",styleThema:" -world -w640",styleAlign:" -center",styleGap:" mb-2"}}),e._v(" "),t("oWorldType",{attrs:{styleThema:" -green",skeletonThema:" -skeleton-green"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Nejzajímavější místa",perex:"Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování.",styleThema:" -world -w640",styleAlign:" -center",styleGap:" mb-2"}}),e._v(" "),t("oTopPlace",{attrs:{styleThema:" -green",skeletonThema:" -skeleton-green"}})],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);