(window.webpackJsonp=window.webpackJsonp||[]).push([[173,10,12,19,70,109,121,139],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var l={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},r=n(1),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,n){"use strict";n.r(t);var l={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},r=n(1),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var l={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},r=n(1),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},408:function(e,t,n){"use strict";n.r(t);var l={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(1),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},598:function(e,t,n){"use strict";n.r(t);var l={name:"SkeletonoTopPlaceComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-top-place"},[t("div",{staticClass:"skeleton-o-top-place__outer"},[t("div",{staticClass:"skeleton-o-top-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-top-place__item"},[t("div",{staticClass:"skeleton-o-top-place__content"},[t("div",{class:"skeleton-o-top-place__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},613:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(58);var l=n(9),r=(n(36),n(57),n(41),n(154),n(94)),o=n.n(r),c=n(598),m=n(402),d={name:"OrganismsoTopPlaceComponent",components:{skeletonoTopPlace:c.default,aImage:m.default},props:{styleThema:{type:String,required:!1},skeletonThema:{type:String,required:!1}},data:function(){return{topPlaces:[],placesContinents:[],placesStates:[],placesCities:[],places:null,images:null,imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:186},{mediaQueriesWidth:459,elementWidth:216},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:230},{mediaQueriesWidth:991,elementWidth:224},{mediaQueriesWidth:1219,elementWidth:220},{mediaQueriesWidth:1399,elementWidth:256},{mediaQueriesWidth:null,elementWidth:360}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:186,imageWidth:186,orientation:"s-"},{elementWidth:216,imageWidth:224,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:230,imageWidth:240,orientation:"s-"},{elementWidth:224,imageWidth:224,orientation:"s-"},{elementWidth:220,imageWidth:224,orientation:"s-"},{elementWidth:256,imageWidth:256,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"}]}},head:function(){return this.places||null!==this.places?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Top místa",itemListElement:this.places.map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/".concat("continent"===e.type_place?"kontinent":"state"===e.type_place?"stat":"city"===e.type_place?"mesto":"","/").concat(e.slug),name:e.name}}}))}}]}:{script:[]}},created:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,r,c,m,d,h,_,y,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://api.frytolnacestach.cz/api/top-places");case 2:return n=t.sent,e.topPlaces=n.data,l=e.topPlaces.filter((function(e){return"continent"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),r=e.topPlaces.filter((function(e){return"state"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),c=e.topPlaces.filter((function(e){return"city"===e.type&&null!==e.id_place&&""!==e.id_place})).map((function(e){return e.id_place})),t.next=9,o.a.get("https://api.frytolnacestach.cz/api/places-continents-array?id=".concat(l.join(",")));case 9:return m=t.sent,e.placesContinents=m.data,t.next=13,o.a.get("https://api.frytolnacestach.cz/api/places-states-array?id=".concat(r.join(",")));case 13:return d=t.sent,e.placesStates=d.data,t.next=17,o.a.get("https://api.frytolnacestach.cz/api/places-cities-array?id=".concat(c.join(",")));case 17:return h=t.sent,e.placesCities=h.data,_=e.placesContinents.concat(e.placesStates,e.placesCities),e.places=_,y=_.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=24,o.a.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(y.join(",")));case 24:v=t.sent,e.images=v.data;case 26:case"end":return t.stop()}}),t)})))()}},h=n(1),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.places||null===e.images?t("skeletonoTopPlace",{attrs:{styleThema:e.skeletonThema?e.skeletonThema:" -skeleton-gray"}}):e._e(),e._v(" "),null!==e.places&&null!==e.images?t("client-only",[t("div",{staticClass:"o-top-place"},[t("div",{staticClass:"o-top-place__outer"},[t("div",{staticClass:"o-top-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-top-place__item"},[t("div",{staticClass:"o-top-place__content"},[t("div",{class:"o-top-place__image loading-image"+(e.styleThema?e.styleThema:" -gray")},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-top-place__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-top-place"}})],1):t("div",{staticClass:"o-top-place__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-top-place"}})],1)]),e._v(" "),t("h3",{staticClass:"o-top-place__name"},[t("span",{staticClass:"o-top-place__name-type"},[e._v("\n                                    "+e._s("city"===n.type_place?"Město":"state"===n.type_place?"Stát":"continent"===n.type_place?"Kontinent":"")+"\n                                ")]),e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-top-place__link",attrs:{to:"/svet/".concat("continent"===n.type_place?"kontinent":"state"===n.type_place?"stat":"city"===n.type_place?"mesto":"","/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},614:function(e,t,n){"use strict";n.r(t);n(25);var l=n(9),r=(n(36),n(57),n(12),n(38),{name:"OrganismsoWorldTypeComponent",props:{styleThema:{type:String,required:!1}},data:function(){return{count:this.count,items:[{id:1,name:"Kontinenty",url:"/svet/kontinent",length:0,styleThemaItem:" -continent"},{id:2,name:"Státy",url:"/svet/stat",length:0,styleThemaItem:" -state"},{id:3,name:"Regiony",url:"/svet/region",length:0,styleThemaItem:" -region"},{id:4,name:"Města",url:"/svet/mesto",length:0,styleThemaItem:" -city"},{id:5,name:"Místa",url:"/svet/misto",length:0,styleThemaItem:" -spot"}]}},head:function(){return{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Kategorie míst",itemListElement:this.items.map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":"https://frytolnacestach.cz"+e.url,name:e.name}}}))}}]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,data,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.frytolnacestach.cz/api/config-places-count");case 2:return n=t.sent,t.next=5,n.json();case 5:data=t.sent,l={places_cities:data.places_cities,places_continents:data.places_continents,places_regions:data.places_regions,places_spots:data.places_spots,places_states:data.places_states},e.items[0].length=l.places_continents,e.items[1].length=l.places_states,e.items[2].length=l.places_regions,e.items[3].length=l.places_cities,e.items[4].length=l.places_spots,e.count=[l];case 13:case"end":return t.stop()}}),t)})))()}))}),o=r,c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-world-type"+(e.styleThema?e.styleThema:" -gray")},[t("div",{staticClass:"o-world-type__outer"},[t("div",{staticClass:"o-world-type__inner"},[t("div",{staticClass:"o-world-type__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-world-type__item"},[t("div",{staticClass:"o-world-type__container"},[t("div",{staticClass:"o-world-type__image"},[t("div",{class:"o-world-type__image-file"+n.styleThemaItem},[t("NuxtLink",{staticClass:"o-world-type__image-link",attrs:{to:n.url,"aria-label":"Zobrazit všechny "+n.name}})],1)]),e._v(" "),t("h2",{staticClass:"o-world-type__text"},[t("NuxtLink",{staticClass:"o-world-type__link",attrs:{to:n.url}},[t("span",{staticClass:"o-world-type__link-title"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"o-world-type__link-length"},[e._v("\n                                    ( "),0===n.length?t("div",{staticClass:"o-world-type__link-length-number -loader"}):e._e(),0!==n.length?t("span",{staticClass:"o-world-type__link-length-number -number"},[e._v(e._s(n.length))]):e._e(),e._v(" položek )\n                                ")])])],1)])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},746:function(e,t,n){"use strict";n.r(t);var l=n(404),r=n(408),o=n(613),c=n(614),m={name:"SvetIndexPage",components:{mHeadline:l.default,oHero:r.default,oTopPlace:o.default,oWorldType:c.default},head:function(){var title,e,t,n,l,r;return"Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Svět | Cestovatelský portál Frytol na cestách",l=e="Oběvuj svět a jeho místá na cestovatelské portálu Frytol na cestách. Naplánuj si dovolenou podle svých potřeb a zjisti co tě čeká.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"Naplánuj si dobolenou, cestuj, chytře, státy, města, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:r="".concat("https://frytolnacestach.cz","/svet")},{hid:"og:title",content:n},{hid:"og:description",content:l},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:l},{name:"twitter:image",content:t},{name:"twitter:url",content:r}],link:[{rel:"canonical",href:r}]}}},d=n(1),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -vh100"},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section pt-8 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:"Kam vycestovat?",modifierCSS:" -green",classCSS:" mt-2"}}),e._v(" "),t("mHeadline",{attrs:{perex:"Nevíš, kam vyrazit na dovolenou nebo za dobrodružstvím? Pokud toužíš pozkoumat svět a nemáš jasnou představu, kam se vydat, můžeš si vybrat některou z kategorií míst a začít prozkoumávat.",styleThema:" -world -w640",styleAlign:" -center",styleGap:" mb-2"}}),e._v(" "),t("oWorldType",{attrs:{styleThema:" -green",skeletonThema:" -skeleton-green"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 pb-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Nejzajímavější místa",perex:"Víte, kam byste se měli vydat na nezapomenutelnou dovolenou? Přinášíme vám seznam nejzajímavějších míst na světě, která musíte vidět. Od malebných vesnic a historických památek až po impozantní přírodní krásy, naše stránky vám pomohou najít nejlepší místa pro vaši další cestování.",styleThema:" -world -w640",styleAlign:" -center",styleGap:" mb-2"}}),e._v(" "),t("oTopPlace",{attrs:{styleThema:" -green",skeletonThema:" -skeleton-green"}})],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);