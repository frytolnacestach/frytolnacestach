(window.webpackJsonp=window.webpackJsonp||[]).push([[177,12,46,61,74,130],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var r={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author,fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},435:function(e,t,n){"use strict";n.r(t);n(57),n(41),n(12),n(25);var r=n(9),o=(n(22),n(73),n(253),n(36),{name:"OrganismsFormFilterPlaceComponent",props:{styleThema:{type:String,required:!1},typePlaceFilterName:{type:String,required:!0},typePlaceFilter:{type:String,required:!0}},data:function(){return{filterPlaces:[],filterSelect:""}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"continents"===e.typePlaceFilter?(n=e.$route.query.filterIDcontinent)&&(e.filterSelect=parseInt(n,10)):"states"===e.typePlaceFilter&&(r=e.$route.query.filterIDstate)&&(e.filterSelect=parseInt(r,10)),t.next=3,e.loadPlaces();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("continents"!==e.typePlaceFilter){t.next=8;break}return t.next=3,e.$axios.get("https://api.frytolnacestach.cz/api/places-continents?showType=filter");case 3:n=t.sent,r=n.data,e.filterPlaces=r,t.next=14;break;case 8:if("states"!==e.typePlaceFilter){t.next=14;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/places-states?showType=filter");case 11:n=t.sent,o=n.data,e.filterPlaces=o;case 14:e.updateParentVariable(e.filterSelect);case 15:case"end":return t.stop()}}),t)})))()},handleFilterSelectChange:function(){var e=this.filterSelect;"continents"===this.typePlaceFilter?this.$router.replace({query:{filterIDcontinent:e}}):"states"===this.typePlaceFilter&&this.$router.replace({query:{filterIDstate:e}}),this.updateParentVariable(e)},updateParentVariable:function(e){var t=this.filterPlaces.find((function(t){return t.id===e}));t?this.$emit("update",{id:e,name:t.name}):this.$emit("update",{id:null,name:null})}}}),l=n(1),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-form-filter-place"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-form-filter-place__outer"},[t("div",{staticClass:"o-form-filter-place__inner"},[t("div",{staticClass:"o-form-filter-place__form"},[t("div",{class:"m-select"+(e.styleThema?e.styleThema:"")},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.filterSelect,expression:"filterSelect"}],staticClass:"m-select__select",attrs:{name:"filterSelect"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filterSelect=t.target.multiple?n:n[0]},e.handleFilterSelectChange]}},[t("option",{attrs:{value:""}},[e._v(e._s(e.typePlaceFilterName))]),e._v(" "),e._l(e.filterPlaces,(function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v(e._s(n.name))])}))],2)])])])])])}),[],!1,null,null,null);t.default=component.exports},441:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoCoverPlaceComponent",props:{styleThema:{type:String,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-place"},[t("div",{staticClass:"skeleton-o-cover-place__outer"},[t("div",{staticClass:"skeleton-o-cover-place__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-place__item"},[t("div",{staticClass:"skeleton-o-cover-place__content"},[t("div",{class:"skeleton-o-cover-place__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},448:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(58),n(57);var r=n(441),o=n(402),l={name:"OrganismsoCoverPlaceComponent",components:{skeletonoCoverPlace:r.default,aImage:o.default},props:{places:{type:Array,required:!0},placesParent:{type:Array,required:!1},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1},showPrename:{type:Boolean,required:!1}},data:function(){return{items:null,images:null,imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:186},{mediaQueriesWidth:459,elementWidth:216},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:230},{mediaQueriesWidth:991,elementWidth:224},{mediaQueriesWidth:1219,elementWidth:220},{mediaQueriesWidth:1399,elementWidth:256},{mediaQueriesWidth:null,elementWidth:360}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:186,imageWidth:186,orientation:"s-"},{elementWidth:216,imageWidth:224,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:230,imageWidth:240,orientation:"s-"},{elementWidth:224,imageWidth:224,orientation:"s-"},{elementWidth:220,imageWidth:224,orientation:"s-"},{elementWidth:256,imageWidth:256,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"}]}},head:function(){var e=this;return this.places||null!==this.places?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"kontinent"===this.type?"Kontinenty":"stat"===this.type?"Státy":"mesto"===this.type?"Města":"region"===this.type?"Regiony":"misto"===this.type?"Místa":"",itemListElement:this.places.map((function(t,n){return{"@type":"ListItem",position:n+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/".concat(e.type,"/").concat(t.slug),name:t.name}}}))}}]}:{script:[]}},methods:{getPrename:function(e){var t=this.placesParent.find((function(t){return t.id===e}));return t?t.name:""}}},c=n(1),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.places&&!0===e.skeleton?t("skeletonoCoverPlace",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.places&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-cover-place"},[t("div",{staticClass:"o-cover-place__outer"},[t("div",{staticClass:"o-cover-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place__item"},[t("div",{staticClass:"o-cover-place__content"},[t("div",{staticClass:"o-cover-place__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-place"}})],1):t("div",{staticClass:"o-cover-place__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-place"}})],1)]),e._v(" "),t("div",{staticClass:"o-cover-place__text"},[e.showPrename&&"region"===e.type||e.showPrename&&"mesto"===e.type||e.showPrename&&"misto"===e.type?t("span",{staticClass:"o-cover-place__prename -state"},[e._v(e._s(e.getPrename(n.id_state)))]):e._e(),e._v(" "),t("h2",{staticClass:"o-cover-place__name"},[e._v("\n                                    "+e._s(n.name)+"\n                                ")])]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},449:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoHeroPlaceTypeComponent",props:{styleType:{type:String,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero-place-type"+e.styleType},[t("div",{staticClass:"o-hero-place-type__inner"},[e._m(0),e._v(" "),t("h1",{staticClass:"o-hero-place-type__headline"},[e._v(e._s(e.title))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero-place-type__perex"},[e._v(e._s(e.perex))]):e._e()])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-hero-place-type__image"},[e("div",{staticClass:"o-hero-place-type__image-file"})])}],!1,null,null,null);t.default=component.exports},753:function(e,t,n){"use strict";n.r(t);var r=n(18),o=n(455),l=n(9),c=(n(58),n(41),n(12),n(57),n(627),n(27),n(628),n(629),n(630),n(632),n(633),n(634),n(635),n(636),n(637),n(638),n(639),n(640),n(641),n(642),n(643),n(644),n(28),n(154),n(25),n(36),n(448)),m=n(435),d=n(449),h={name:"SvetMestoIndexPage",components:{oCoverPlace:c.default,oFormFilterPlace:m.default,oHeroPlaceType:d.default},data:function(){return{headline:"Města",headlineFilter:"Města",filterPlace:"",filterPlaceName:"",images:[],placesCities:[],placesParent:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e,t,n,r,o;return"města, největší města, nejznámější města, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="".concat(this.headlineFilter," | Cestovatelský portál Frytol na cestách"),r=e="Objevuj největší a nejznámější města světa na cestovatelské portálu Frytolem na cestách. Naplánuj si ideální cestu.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"města, největší města, nejznámější města, informace o městech, plánuj cestu, cestovatelský portál, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:o="".concat("https://frytolnacestach.cz","/svet/mesto")},{hid:"og:title",content:n},{hid:"og:description",content:r},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:r},{name:"twitter:image",content:t},{name:"twitter:url",content:o}],link:[{rel:"canonical",href:o}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,url:o,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}},mounted:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$route.query.filterIDstate){t.next=4;break}return t.next=4,e.loadPlaces();case 4:e.addScrollListener();case 5:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l,c,m,d,h,f,v,y,_,P;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.isLoading=!0,null===t.filterPlace){n.next=7;break}return n.next=4,t.$axios.get("https://api.frytolnacestach.cz/api/places-cities?showType=list&idState=".concat(t.filterPlace,"&page=").concat(t.page,"&items=").concat(t.perPage));case 4:l=n.sent,n.next=10;break;case 7:return n.next=9,t.$axios.get("https://api.frytolnacestach.cz/api/places-cities?showType=list&page=".concat(t.page,"&items=").concat(t.perPage));case 9:l=n.sent;case 10:return c=l.data,m=c.map((function(e){return e.id_state})).filter((function(e){return null!=e&&""!==e})),m=Object(o.a)(new Set(m)),n.next=15,Promise.all([t.$axios.get("https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=".concat(m.join(",")))]);case 15:if(d=n.sent,h=Object(r.a)(d,1),f=h[0],v=f.data,t.placesParent=t.placesParent.concat(v),!((y=c.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){n.next=30;break}return n.next=24,t.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(y.join(",")));case 24:_=n.sent,P=_.data,t.images=t.images.concat(P),t.placesCities=e?c:t.placesCities.concat(c),n.next=31;break;case 30:t.placesCities=e?c:t.placesCities.concat(c);case 31:(0===c.length||c.length<t.perPage)&&(t.noMoreItems=!0),t.isLoading=!1;case 33:case"end":return n.stop()}}),n)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadPlaces())},updateHeadline:function(){this.filterPlaceName?this.headlineFilter=this.headline+" státu "+this.filterPlaceName:this.headlineFilter=this.headline},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadPlaces())}},filterUpdate:function(e){this.filterPlace=e.id,this.filterPlaceName=e.name,this.images=[],this.placesCities=[],this.placesParent=[],this.isLoading=!1,this.noMoreItems=!1,this.page=1,this.perPage=20,this.loadPlaces(!0),this.updateHeadline()}},beforeDestroy:function(){this.removeScrollListener()}},f=n(1),component=Object(f.a)(h,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHeroPlaceType",{attrs:{styleType:" -city",title:e.headlineFilter,perex:"Města, jsou místem, kde se setkávají historie, kultura a moderní doba. Na naší planetě, je podle velmi nepřesných zdrojů více než tři a půl milionu obcí, na našem cestovatelském portálu jich najdeš přibližně 2500 měst, z nichž každé má svůj unikátní příběh a kouzlo."}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 hidden-print"},[t("div",{staticClass:"t-section__inner"},[t("oFormFilterPlace",{attrs:{styleThema:" -green",typePlaceFilterName:"Vybrat stát",typePlaceFilter:"states"},on:{update:e.filterUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -bg-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverPlace",{attrs:{places:e.placesCities,placesParent:e.placesParent,showPrename:!0,images:e.images,type:"mesto"}}),e._v(" "),e.isLoading?t("oCoverPlace",{attrs:{places:null,images:null,type:"mesto",skeleton:!0}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);