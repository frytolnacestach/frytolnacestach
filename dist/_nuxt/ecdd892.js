(window.webpackJsonp=window.webpackJsonp||[]).push([[175,12,46,74,130],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var o={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author,fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},441:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoCoverPlaceComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-place"},[t("div",{staticClass:"skeleton-o-cover-place__outer"},[t("div",{staticClass:"skeleton-o-cover-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-place__item"},[t("div",{staticClass:"skeleton-o-cover-place__content"},[t("div",{class:"skeleton-o-cover-place__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},448:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(58),n(57);var o=n(441),r=n(402),c={name:"OrganismsoCoverPlaceComponent",components:{skeletonoCoverPlace:o.default,aImage:r.default},props:{places:{type:Array,required:!0},placesParent:{type:Array,required:!1},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1},showPrename:{type:Boolean,required:!1}},data:function(){return{items:null,images:null,imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:186},{mediaQueriesWidth:459,elementWidth:216},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:230},{mediaQueriesWidth:991,elementWidth:224},{mediaQueriesWidth:1219,elementWidth:220},{mediaQueriesWidth:1399,elementWidth:256},{mediaQueriesWidth:null,elementWidth:360}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:186,imageWidth:186,orientation:"s-"},{elementWidth:216,imageWidth:224,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:230,imageWidth:240,orientation:"s-"},{elementWidth:224,imageWidth:224,orientation:"s-"},{elementWidth:220,imageWidth:224,orientation:"s-"},{elementWidth:256,imageWidth:256,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"}]}},head:function(){var e=this;return this.places||null!==this.places?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"kontinent"===this.type?"Kontinenty":"stat"===this.type?"Státy":"mesto"===this.type?"Města":"region"===this.type?"Regiony":"misto"===this.type?"Místa":"",itemListElement:this.places.map((function(t,n){return{"@type":"ListItem",position:n+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/".concat(e.type,"/").concat(t.slug),name:t.name}}}))}}]}:{script:[]}},methods:{getPrename:function(e){var t=this.placesParent.find((function(t){return t.id===e}));return t?t.name:""}}},l=n(1),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.places&&!0===e.skeleton?t("skeletonoCoverPlace",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.places&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-cover-place"},[t("div",{staticClass:"o-cover-place__outer"},[t("div",{staticClass:"o-cover-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place__item"},[t("div",{staticClass:"o-cover-place__content"},[t("div",{staticClass:"o-cover-place__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-place"}})],1):t("div",{staticClass:"o-cover-place__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-place"}})],1)]),e._v(" "),t("div",{staticClass:"o-cover-place__text"},[e.showPrename&&"region"===e.type||e.showPrename&&"mesto"===e.type||e.showPrename&&"misto"===e.type?t("span",{staticClass:"o-cover-place__prename -state"},[e._v(e._s(e.getPrename(n.id_state)))]):e._e(),e._v(" "),t("h2",{staticClass:"o-cover-place__name"},[e._v("\n                                    "+e._s(n.name)+"\n                                ")])]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},449:function(e,t,n){"use strict";n.r(t);var o={name:"OrganismsoHeroPlaceTypeComponent",props:{styleType:{type:String,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero-place-type"+e.styleType},[t("div",{staticClass:"o-hero-place-type__inner"},[e._m(0),e._v(" "),t("h1",{staticClass:"o-hero-place-type__headline"},[e._v(e._s(e.title))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero-place-type__perex"},[e._v(e._s(e.perex))]):e._e()])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-hero-place-type__image"},[e("div",{staticClass:"o-hero-place-type__image-file"})])}],!1,null,null,null);t.default=component.exports},752:function(e,t,n){"use strict";n.r(t);var o=n(9),r=(n(58),n(41),n(12),n(57),n(154),n(36),n(448)),c=n(449),l={name:"SvetKontinentIndexPage",components:{oCoverPlace:r.default,oHeroPlaceType:c.default},data:function(){return{images:[],placesContinents:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e,t,n,o,r;return"kontinenty, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Kontinenty | Cestovatelský portál Frytol na cestách",o=e="Zjisti si základní informace o kontinentech. a státech které se na nich nachází za pomocí cestovatelského portálu Frytol na cestách.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"kontinenty, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:r="".concat("https://frytolnacestach.cz","/svet/kontinent")},{hid:"og:title",content:n},{hid:"og:description",content:o},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:o},{name:"twitter:image",content:t},{name:"twitter:url",content:r}],link:[{rel:"canonical",href:r}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,url:r,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadPlaces();case 2:e.addScrollListener();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("https://api.frytolnacestach.cz/api/places-continents?showType=list&page=".concat(e.page,"&items=").concat(e.perPage));case 3:if(n=t.sent,o=n.data,!((r=o.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){t.next=15;break}return t.next=9,e.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(r.join(",")));case 9:c=t.sent,l=c.data,e.images=e.images.concat(l),e.placesContinents=e.placesContinents.concat(o),t.next=16;break;case 15:e.placesContinents=e.placesContinents.concat(o);case 16:(0===o.length||o.length<e.perPage)&&(e.noMoreItems=!0),e.isLoading=!1;case 18:case"end":return t.stop()}}),t)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadPlaces())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadPlaces())}}},beforeDestroy:function(){this.removeScrollListener()}},m=n(1),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHeroPlaceType",{attrs:{styleType:" -continent",title:"Kontinenty",perex:"Zveme tě na neuvěřitelnou cestu kolem světa, abys prozkoumal všech 7 kontinentů naší planety. Objevuj fascinující kultury, přírodní divy a tajemná místa včetně odlehlé Antarktidy. Připrav se na dobrodružství, které tě zavede do různých koutů světa a otevře ti dveře k nezapomenutelným zážitkům."}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverPlace",{attrs:{places:e.placesContinents,images:e.images,type:"kontinent"}}),e._v(" "),e.isLoading?t("oCoverPlace",{attrs:{places:null,images:null,type:"kontinent",skeleton:!0}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);