(window.webpackJsonp=window.webpackJsonp||[]).push([[199,10,12,19,21,23,29,33,73,77,83,90,106,107],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var r={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author,fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,n){"use strict";n.r(t);n(72);var r={name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)},adsenseTitle:function(){var e=document.querySelector(".o-ad-google-sidebar iframe");e?e.setAttribute("title","Reklama"):setTimeout(this.adsenseTitle,100)},checkAdStatus:function(){var e=document.querySelector(".o-ad-google-sidebar .adsbygoogle");e&&"unfilled"===e.dataset.adStatus?this.adsenseAddLoad():setTimeout(this.checkAdStatus,500)}},mounted:function(){this.adsenseAddLoad(),this.adsenseTitle(),this.checkAdStatus()}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},409:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoMapGoogleComponent",props:{place:{type:Array,required:!0}},data:function(){return{isHydrated:!1,center:{lat:0,lng:0},zoom:this.place[0].zoom[0].google,mapOptions:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!1,styles:[{featureType:"poi.attraction",elementType:"all",stylers:[{visibility:"on"},{color:"#20547e"},{saturation:"0"},{lightness:"13"},{weight:"2.00"}]},{featureType:"poi.attraction",elementType:"labels.icon",stylers:[{weight:"0.01"},{invert_lightness:!0}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"},{color:"#207b7e"},{lightness:"13"},{weight:"2.00"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{invert_lightness:!0}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"}]}]}}},mounted:function(){var e=this;this.fetchPlaceData(),this.$nextTick((function(){e.isHydrated=!0}))},methods:{fetchPlaceData:function(){if(this.place&&this.place.length>0&&this.place[0].coordinates&&this.place[0].coordinates.length>0){var e=this.place[0].coordinates[0].latitude,t=this.place[0].coordinates[0].longitude;isNaN(parseFloat(e))||isNaN(parseFloat(t))?(this.center.lat=e,this.center.lng=t):(this.center.lat=parseFloat(e),this.center.lng=parseFloat(t))}}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-map-google"},[t("div",{staticClass:"o-map-google__outer"},[t("div",{staticClass:"o-map-google__inner loading-image -green"},[e.isHydrated?t("gmap-map",{attrs:{center:e.center,zoom:e.zoom,options:e.mapOptions}}):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports},410:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoSwitchHeroComponent",data:function(){return{showHero:!0}},methods:{toggleHero:function(){this.showHero=!this.showHero,this.$emit("update:showHero",this.showHero)}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-end-all"},[e.showHero?t("span",{staticClass:"a-button-pure-icon -map",on:{click:e.toggleHero}},[e._v("Mapa")]):t("span",{staticClass:"a-button-pure-icon -cover",on:{click:e.toggleHero}},[e._v("Obrázek")])])}),[],!1,null,null,null);t.default=component.exports},411:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(254);var r={name:"OrganismsoHeroPlaceComponent",components:{aImage:n(402).default},props:{title:{type:String,required:!0},preTitle:{type:String,required:!1},idImageHero:{type:Number,required:!1},images:{type:Array,required:!0}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:344},{mediaQueriesWidth:374,elementWidth:354},{mediaQueriesWidth:399,elementWidth:360},{mediaQueriesWidth:459,elementWidth:430},{mediaQueriesWidth:575,elementWidth:556},{mediaQueriesWidth:767,elementWidth:728},{mediaQueriesWidth:991,elementWidth:952},{mediaQueriesWidth:1219,elementWidth:780},{mediaQueriesWidth:1399,elementWidth:900},{mediaQueriesWidth:null,elementWidth:1248}],imageSizes:[{elementWidth:344,imageWidth:344,orientation:"s-"},{elementWidth:354,imageWidth:360,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"},{elementWidth:430,imageWidth:430,orientation:"s-"},{elementWidth:556,imageWidth:556,orientation:"s-"},{elementWidth:728,imageWidth:728,orientation:"h-"},{elementWidth:952,imageWidth:952,orientation:"h-"},{elementWidth:780,imageWidth:780,orientation:"h-"},{elementWidth:900,imageWidth:900,orientation:"h-"},{elementWidth:1248,imageWidth:1248,orientation:"h-"}]}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-place"},[t("div",{staticClass:"o-hero-place__container"},[t("div",{staticClass:"o-hero-place__image loading-image -green"},[e.images&&e.idImageHero&&e.images.find((function(image){return image.id===e.idImageHero}))?t("div",{staticClass:"o-hero-place__image-lazyload"},[t("aImage",{attrs:{alt:e.title?e.title:"Úvodní obrázek",author:e.images.find((function(image){return image.id===e.idImageHero})).author,lazy:!1,imageSource:e.images.find((function(image){return image.id===e.idImageHero})).source,imageName:e.images.find((function(image){return image.id===e.idImageHero})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-hero-place"}})],1):t("div",{staticClass:"o-hero-place__image-lazyload"},[t("aImage",{attrs:{alt:e.title?e.title:"Úvodní obrázek",lazy:!1,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-hero-place"}})],1),e._v(" "),t("div",{staticClass:"o-hero-place__outer"},[t("div",{staticClass:"o-hero-place__inner"},[e.title?t("h1",{staticClass:"o-hero-place__headline"},[e._v(e._s(e.preTitle?e.preTitle+" "+e.title:e.title))]):e._e()])])])])])}),[],!1,null,null,null);t.default=component.exports},414:function(e,t,n){"use strict";n.r(t);n(25);var r={name:"OrganismsoHotInfoHeroComponent",props:{data:{type:Array,required:!0},styleCol:{type:String,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"js_o-hot-info-hero o-hot-info-hero",class:e.styleCol?e.styleCol:""},[t("div",{staticClass:"o-hot-info-hero__outer"},[t("div",{staticClass:"o-hot-info-hero__inner"},[t("div",{staticClass:"o-hot-info-hero__items"},e._l(e.data,(function(n){return"_ODKAZ_"!==n.url?t("div",{key:n.id,staticClass:"o-hot-info-hero__item",class:n.url?"-link":""},[t("div",{staticClass:"o-hot-info-hero__container"},[t("div",{staticClass:"o-hot-info-hero__content"},[n.url?t("NuxtLink",{staticClass:"o-hot-info-hero__link",attrs:{to:n.url}},[t("div",{staticClass:"o-hot-info-hero__text"},[t("span",{staticClass:"o-hot-info-hero__title"},[e._v(e._s(n.title))]),e._v(" "),"number"===n.type?t("span",{staticClass:"o-hot-info-hero__value"},[e._v("\n                                        "+e._s(0!==n.name&&null!==n.name?n.name.toLocaleString("cs-CZ"):null===n.name?0:n.name)+"\n                                        "),t("span",{staticClass:"o-hot-info-hero__value-subfix"},[e._v(e._s(n.subfix))])]):e._e(),e._v(" "),"string"===n.type?t("span",{staticClass:"o-hot-info-hero__value"},[e._v("\n                                        "+e._s(n.name)+"\n                                        "),t("span",{staticClass:"o-hot-info-hero__value-subfix"},[e._v(e._s(n.subfix))])]):e._e()])]):e._e(),e._v(" "),n.url?e._e():t("div",{staticClass:"o-hot-info-hero__text"},[t("span",{staticClass:"o-hot-info-hero__title"},[e._v(e._s(n.title))]),e._v(" "),"number"===n.type?t("span",{staticClass:"o-hot-info-hero__value"},[e._v("\n                                    "+e._s(0!==n.name&&null!==n.name?n.name.toLocaleString("cs-CZ"):null===n.name?0:n.name)+"\n                                    "),t("span",{staticClass:"o-hot-info-hero__value-subfix"},[e._v(e._s(n.subfix))])]):e._e(),e._v(" "),"string"===n.type?t("span",{staticClass:"o-hot-info-hero__value"},[e._v("\n                                    "+e._s(n.name)+"\n                                    "),t("span",{staticClass:"o-hot-info-hero__value-subfix"},[e._v(e._s(n.subfix))])]):e._e()])],1)])]):e._e()})),0)])])])}),[],!1,null,null,null);t.default=component.exports},416:function(e,t,n){"use strict";n.r(t);n(25);var r={name:"OrganismsoAlertComponent",props:{alerts:{type:Array,required:!0}},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-alerts"},[t("div",{staticClass:"o-alerts__outer"},[t("div",{staticClass:"o-alerts__inner"},[t("div",{staticClass:"o-alerts__items"},e._l(e.alerts,(function(n){return t("div",{key:n.date_create,class:"o-alerts__item -"+n.type},[t("span",{staticClass:"o-alerts__name"},[e._v(e._s(n.name))]),e._v(" "),t("p",{staticClass:"o-alerts__text"},[e._v(e._s(n.text))]),e._v(" "),t("div",{staticClass:"o-alerts__dates"},[n.date_start?t("span",{staticClass:"o-alerts__date -start"},[e._v("Platí od: "+e._s(e.formatDate(n.date_start))),t("br")]):e._e(),e._v(" "),n.date_end?t("span",{staticClass:"o-alerts__date -end"},[e._v("Platí do: "+e._s(e.formatDate(n.date_end))),t("br")]):e._e(),e._v(" "),n.date_create?t("span",{staticClass:"o-alerts__date -create"},[e._v("Přidáno: "+e._s(e.formatDate(n.date_create))),t("br")]):e._e(),e._v(" "),n.date_update&&n.date_update!==n.date_create?t("span",{staticClass:"o-alerts__date -update"},[e._v("Upraveno: "+e._s(e.formatDate(n.date_update)))]):e._e()])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},417:function(e,t,n){"use strict";n.r(t);n(25),n(58);var r={name:"MoleculesmNavPlaceComponent",props:{place:{type:Object,required:!0},tabs:{type:Array,required:!0},activeTab:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-nav-place hidden-print"},[t("div",{staticClass:"m-nav-place__outer"},[t("div",{staticClass:"m-nav-place__inner"},[t("ul",{staticClass:"m-nav-place__items"},e._l(e.tabs,(function(n){return t("li",{key:n.slug,staticClass:"m-nav-place__item"},[n.slug&&"default"!==n.slug?e._e():t("nuxt-link",{staticClass:"m-nav-place__link",class:{"-active":e.activeTab===n.slug||!e.activeTab},attrs:{to:"/svet/stat/".concat(e.place.slug)}},[e._v("\n                        "+e._s(e.place.name?e.place.name:"Stát")+"\n                    ")]),e._v(" "),n.slug&&"default"!==n.slug&&!0===n.visible?t("nuxt-link",{staticClass:"m-nav-place__link",class:{"-active":e.activeTab===n.slug},attrs:{to:"/svet/stat/".concat(e.place.slug,"/").concat(n.slug)}},[e._v("\n                        "+e._s(n.label)+"\n                    ")]):e._e()],1)})),0)])])])}),[],!1,null,null,null);t.default=component.exports},426:function(e,t,n){"use strict";n.r(t);n(25);var r={name:"MoleculesmNavBreadcrumbsFoodComponent",props:{links:{type:Array,required:!0},item:{type:Object,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-breadcrumbs-item"},[t("div",{staticClass:"m-nav-breadcrumbs-item__outer"},[t("div",{staticClass:"m-nav-breadcrumbs-item__inner"},[t("ul",{staticClass:"m-nav-breadcrumbs-item__items"},[e._l(e.links,(function(n){return t("li",{key:n.id,staticClass:"m-nav-breadcrumbs-item__item"},["link"===n.status?t("NuxtLink",{staticClass:"m-nav-breadcrumbs-item__link",attrs:{to:n.url}},[e._v(e._s(n.name))]):"span"===n.status?t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(n.name))]):e._e()],1)})),e._v(" "),e.item?t("li",{staticClass:"m-nav-breadcrumbs-item__item"},[t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(e.item.name))])]):e._e()],2)])])])}),[],!1,null,null,null);t.default=component.exports},452:function(e,t,n){"use strict";n.r(t);n(25),n(32),n(22),n(73),n(58);var r=n(155),o=n(402),l={name:"OrganismsoPlaceTeaserComponent",components:{aButtonFillFull:r.default,aImage:o.default},props:{place:{type:Array,required:!0},image:{type:Array,required:!1},type:{type:String,required:!0},headline:{type:String,required:!0}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:330},{mediaQueriesWidth:374,elementWidth:354},{mediaQueriesWidth:399,elementWidth:354},{mediaQueriesWidth:459,elementWidth:420},{mediaQueriesWidth:575,elementWidth:536},{mediaQueriesWidth:767,elementWidth:728},{mediaQueriesWidth:991,elementWidth:286},{mediaQueriesWidth:1219,elementWidth:258},{mediaQueriesWidth:1399,elementWidth:312},{mediaQueriesWidth:null,elementWidth:468}],imageSizes:[{elementWidth:330,imageWidth:334,orientation:"h-"},{elementWidth:354,imageWidth:360,orientation:"h-"},{elementWidth:360,imageWidth:360,orientation:"h-"},{elementWidth:420,imageWidth:420,orientation:"h-"},{elementWidth:536,imageWidth:536,orientation:"h-"},{elementWidth:728,imageWidth:728,orientation:"h-"},{elementWidth:286,imageWidth:286,orientation:"h-"},{elementWidth:258,imageWidth:268,orientation:"h-"},{elementWidth:312,imageWidth:312,orientation:"h-"},{elementWidth:468,imageWidth:468,orientation:"h-"}]}}},c=n(1),component=Object(c.a)(l,(function(){var e,t,n=this,r=n._self._c;return r("div",{staticClass:"o-place-teaser"},[r("div",{staticClass:"o-place-teaser__outer"},[r("div",{staticClass:"o-place-teaser__inner"},[r("div",{staticClass:"o-place-teaser__content"},[r("div",{staticClass:"o-place-teaser__image loading-image -green"},[n.image&&n.image.length>0?r("div",{staticClass:"o-place-teaser__image-lazyload"},[r("aImage",{attrs:{alt:n.place[0].name?n.place[0].name:"Místo",author:n.image[0].author,lazy:!0,imageSource:n.image[0].source,imageName:n.image[0].name,sizes:n.imageSizes,srcSet:n.imageSizesMedia,cssClassComponent:"o-place-teaser"}})],1):r("div",{staticClass:"o-place-teaser__image-lazyload"},[r("aImage",{attrs:{alt:n.place[0].name?n.place[0].name:"Místo",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:n.imageSizes,srcSet:n.imageSizesMedia,cssClassComponent:"o-place-teaser"}})],1)]),n._v(" "),r("div",{staticClass:"o-place-teaser__text"},[r("h3",{staticClass:"o-place-teaser__name"},[n._v(n._s(n.headline))]),n._v(" "),n.place[0].information_chatgpt&&!(null!==(e=n.place[0].information_author)&&void 0!==e&&e.length)>0?r("div",{staticClass:"o-place-teaser__wysiwyg",domProps:{innerHTML:n._s(n.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g,"").slice(0,n.place[0].information_chatgpt.lastIndexOf(" ",200)))}}):n._e(),n._v(" "),(null===(t=n.place[0].information_author)||void 0===t?void 0:t.length)>0?r("div",{staticClass:"o-place-teaser__wysiwyg",domProps:{innerHTML:n._s(n.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g,"").slice(0,n.place[0].information_author[0].text.lastIndexOf(" ",200)))}}):n._e(),n._v(" "),r("div",{staticClass:"o-place-teaser__button hidden-print"},[r("aButtonFillFull",{attrs:{target:"internal",url:"/svet/".concat(n.type,"/").concat(n.place[0].slug),text:"Číst více",styleThema:" -green",styleFont:" -bold"}})],1)])])])])])}),[],!1,null,null,null);t.default=component.exports},610:function(e,t,n){var map={"./af":456,"./af.js":456,"./ar":457,"./ar-dz":458,"./ar-dz.js":458,"./ar-kw":459,"./ar-kw.js":459,"./ar-ly":460,"./ar-ly.js":460,"./ar-ma":461,"./ar-ma.js":461,"./ar-ps":462,"./ar-ps.js":462,"./ar-sa":463,"./ar-sa.js":463,"./ar-tn":464,"./ar-tn.js":464,"./ar.js":457,"./az":465,"./az.js":465,"./be":466,"./be.js":466,"./bg":467,"./bg.js":467,"./bm":468,"./bm.js":468,"./bn":469,"./bn-bd":470,"./bn-bd.js":470,"./bn.js":469,"./bo":471,"./bo.js":471,"./br":472,"./br.js":472,"./bs":473,"./bs.js":473,"./ca":474,"./ca.js":474,"./cs":439,"./cs.js":439,"./cv":475,"./cv.js":475,"./cy":476,"./cy.js":476,"./da":477,"./da.js":477,"./de":478,"./de-at":479,"./de-at.js":479,"./de-ch":480,"./de-ch.js":480,"./de.js":478,"./dv":481,"./dv.js":481,"./el":482,"./el.js":482,"./en-au":483,"./en-au.js":483,"./en-ca":484,"./en-ca.js":484,"./en-gb":485,"./en-gb.js":485,"./en-ie":486,"./en-ie.js":486,"./en-il":487,"./en-il.js":487,"./en-in":488,"./en-in.js":488,"./en-nz":489,"./en-nz.js":489,"./en-sg":490,"./en-sg.js":490,"./eo":491,"./eo.js":491,"./es":492,"./es-do":493,"./es-do.js":493,"./es-mx":494,"./es-mx.js":494,"./es-us":495,"./es-us.js":495,"./es.js":492,"./et":496,"./et.js":496,"./eu":497,"./eu.js":497,"./fa":498,"./fa.js":498,"./fi":499,"./fi.js":499,"./fil":500,"./fil.js":500,"./fo":501,"./fo.js":501,"./fr":502,"./fr-ca":503,"./fr-ca.js":503,"./fr-ch":504,"./fr-ch.js":504,"./fr.js":502,"./fy":505,"./fy.js":505,"./ga":506,"./ga.js":506,"./gd":507,"./gd.js":507,"./gl":508,"./gl.js":508,"./gom-deva":509,"./gom-deva.js":509,"./gom-latn":510,"./gom-latn.js":510,"./gu":511,"./gu.js":511,"./he":512,"./he.js":512,"./hi":513,"./hi.js":513,"./hr":514,"./hr.js":514,"./hu":515,"./hu.js":515,"./hy-am":516,"./hy-am.js":516,"./id":517,"./id.js":517,"./is":518,"./is.js":518,"./it":519,"./it-ch":520,"./it-ch.js":520,"./it.js":519,"./ja":521,"./ja.js":521,"./jv":522,"./jv.js":522,"./ka":523,"./ka.js":523,"./kk":524,"./kk.js":524,"./km":525,"./km.js":525,"./kn":526,"./kn.js":526,"./ko":527,"./ko.js":527,"./ku":528,"./ku-kmr":529,"./ku-kmr.js":529,"./ku.js":528,"./ky":530,"./ky.js":530,"./lb":531,"./lb.js":531,"./lo":532,"./lo.js":532,"./lt":533,"./lt.js":533,"./lv":534,"./lv.js":534,"./me":535,"./me.js":535,"./mi":536,"./mi.js":536,"./mk":537,"./mk.js":537,"./ml":538,"./ml.js":538,"./mn":539,"./mn.js":539,"./mr":540,"./mr.js":540,"./ms":541,"./ms-my":542,"./ms-my.js":542,"./ms.js":541,"./mt":543,"./mt.js":543,"./my":544,"./my.js":544,"./nb":545,"./nb.js":545,"./ne":546,"./ne.js":546,"./nl":547,"./nl-be":548,"./nl-be.js":548,"./nl.js":547,"./nn":549,"./nn.js":549,"./oc-lnc":550,"./oc-lnc.js":550,"./pa-in":551,"./pa-in.js":551,"./pl":552,"./pl.js":552,"./pt":553,"./pt-br":554,"./pt-br.js":554,"./pt.js":553,"./ro":555,"./ro.js":555,"./ru":556,"./ru.js":556,"./sd":557,"./sd.js":557,"./se":558,"./se.js":558,"./si":559,"./si.js":559,"./sk":560,"./sk.js":560,"./sl":561,"./sl.js":561,"./sq":562,"./sq.js":562,"./sr":563,"./sr-cyrl":564,"./sr-cyrl.js":564,"./sr.js":563,"./ss":565,"./ss.js":565,"./sv":566,"./sv.js":566,"./sw":567,"./sw.js":567,"./ta":568,"./ta.js":568,"./te":569,"./te.js":569,"./tet":570,"./tet.js":570,"./tg":571,"./tg.js":571,"./th":572,"./th.js":572,"./tk":573,"./tk.js":573,"./tl-ph":574,"./tl-ph.js":574,"./tlh":575,"./tlh.js":575,"./tr":576,"./tr.js":576,"./tzl":577,"./tzl.js":577,"./tzm":578,"./tzm-latn":579,"./tzm-latn.js":579,"./tzm.js":578,"./ug-cn":580,"./ug-cn.js":580,"./uk":581,"./uk.js":581,"./ur":582,"./ur.js":582,"./uz":583,"./uz-latn":584,"./uz-latn.js":584,"./uz.js":583,"./vi":585,"./vi.js":585,"./x-pseudo":586,"./x-pseudo.js":586,"./yo":587,"./yo.js":587,"./zh-cn":588,"./zh-cn.js":588,"./zh-hk":589,"./zh-hk.js":589,"./zh-mo":590,"./zh-mo.js":590,"./zh-tw":591,"./zh-tw.js":591};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=610},704:function(e,t,n){"use strict";n.r(t);var r=n(609),o=n.n(r);n(439);o.a.locale("cs");var l={name:"OrganismsoTimeComponent",props:{mpz:{type:String,required:!0}},data:function(){return{local:null,localTime:null,localDate:null,czech:null,czechTime:null,czechDate:null}},computed:{timeDifferenceMessage:function(){var e=o()(this.local,"HH:mm DD.MMMM YYYY"),t=o()(this.czech,"HH:mm DD.MMMM YYYY");if(!e.isValid()||!t.isValid())return"Chyba při analýze času.";var n=e.diff(t,"hours");return n>0?"Místní čas je o ".concat(n," hodin dopředu oproti Česku."):n<0?"Místní čas je o ".concat(Math.abs(n)," hodin dozadu oproti Česku."):0===n?"Místní čas je stejný jako čas v Česku.":void 0}},watch:{mpz:{immediate:!0,handler:function(e){this.getLocalTimeFromState(e)}}},methods:{getLocalTimeFromState:function(e){var t={AD:"Europe/Andorra",AE:"Asia/Dubai",AF:"Asia/Kabul",AG:"America/Antigua",AI:"America/Anguilla",AL:"Europe/Tirane",AM:"Asia/Yerevan",AO:"Africa/Luanda",AQ:"Antarctica/Casey",AR:"America/Argentina/Buenos_Aires",AS:"Pacific/Pago_Pago",AT:"Europe/Vienna",AU:"Australia/Sydney",AW:"America/Aruba",AX:"Europe/Mariehamn",AZ:"Asia/Baku",BA:"Europe/Sarajevo",BB:"America/Barbados",BD:"Asia/Dhaka",BE:"Europe/Brussels",BF:"Africa/Ouagadougou",BG:"Europe/Sofia",BH:"Asia/Bahrain",BI:"Africa/Bujumbura",BJ:"Africa/Porto-Novo",BL:"America/St_Barthelemy",BM:"Atlantic/Bermuda",BN:"Asia/Brunei",BO:"America/La_Paz",BQ:"America/Kralendijk",BR:"America/Sao_Paulo",BS:"America/Nassau",BT:"Asia/Thimphu",BV:"Europe/Oslo",BW:"Africa/Gaborone",BY:"Europe/Minsk",BZ:"America/Belize",CA:"America/Toronto",CC:"Indian/Cocos",CD:"Africa/Kinshasa",CF:"Africa/Bangui",CG:"Africa/Brazzaville",CH:"Europe/Zurich",CI:"Africa/Abidjan",CK:"Pacific/Rarotonga",CL:"America/Santiago",CM:"Africa/Douala",CN:"Asia/Shanghai",CO:"America/Bogota",CR:"America/Costa_Rica",CU:"America/Havana",CV:"Atlantic/Cape_Verde",CW:"America/Curacao",CX:"Indian/Christmas",CY:"Asia/Nicosia",CZ:"Europe/Prague",DE:"Europe/Berlin",DJ:"Africa/Djibouti",DK:"Europe/Copenhagen",DM:"America/Dominica",DO:"America/Santo_Domingo",DZ:"Africa/Algiers",EC:"America/Guayaquil",EE:"Europe/Tallinn",EG:"Africa/Cairo",EH:"Africa/El_Aaiun",ER:"Africa/Asmara",ES:"Europe/Madrid",ET:"Africa/Addis_Ababa",FI:"Europe/Helsinki",FJ:"Pacific/Fiji",FK:"Atlantic/Stanley",FM:"Pacific/Chuuk",FO:"Atlantic/Faroe",FR:"Europe/Paris",GA:"Africa/Libreville",GB:"Europe/London",GD:"America/Grenada",GE:"Asia/Tbilisi",GF:"America/Cayenne",GG:"Europe/Guernsey",GH:"Africa/Accra",GI:"Europe/Gibraltar",GL:"America/Godthab",GM:"Africa/Banjul",GN:"Africa/Conakry",GP:"America/Guadeloupe",GQ:"Africa/Malabo",GR:"Europe/Athens",GS:"Atlantic/South_Georgia",GT:"America/Guatemala",GU:"Pacific/Guam",GW:"Africa/Bissau",GY:"America/Guyana",HK:"Asia/Hong_Kong",HM:"Indian/Kerguelen",HN:"America/Tegucigalpa",HR:"Europe/Zagreb",HT:"America/Port-au-Prince",HU:"Europe/Budapest",ID:"Asia/Jakarta",IE:"Europe/Dublin",IL:"Asia/Jerusalem",IM:"Europe/Isle_of_Man",IN:"Asia/Kolkata",IO:"Indian/Chagos",IQ:"Asia/Baghdad",IR:"Asia/Tehran",IS:"Atlantic/Reykjavik",IT:"Europe/Rome",JE:"Europe/Jersey",JM:"America/Jamaica",JO:"Asia/Amman",JP:"Asia/Tokyo",KE:"Africa/Nairobi",KG:"Asia/Bishkek",KH:"Asia/Phnom_Penh",KI:"Pacific/Kiritimati",KM:"Indian/Comoro",KN:"America/St_Kitts",KP:"Asia/Pyongyang",KR:"Asia/Seoul",KW:"Asia/Kuwait",KY:"America/Cayman",KZ:"Asia/Almaty",LA:"Asia/Vientiane",LB:"Asia/Beirut",LC:"America/St_Lucia",LI:"Europe/Vaduz",LK:"Asia/Colombo",LR:"Africa/Monrovia",LS:"Africa/Maseru",LT:"Europe/Vilnius",LU:"Europe/Luxembourg",LV:"Europe/Riga",LY:"Africa/Tripoli",MA:"Africa/Casablanca",MC:"Europe/Monaco",MD:"Europe/Chisinau",ME:"Europe/Podgorica",MF:"America/Marigot",MG:"Indian/Antananarivo",MH:"Pacific/Majuro",MK:"Europe/Skopje",ML:"Africa/Bamako",MM:"Asia/Yangon",MN:"Asia/Ulaanbaatar",MO:"Asia/Macau",MP:"Pacific/Saipan",MQ:"America/Martinique",MR:"Africa/Nouakchott",MS:"America/Montserrat",MT:"Europe/Malta",MU:"Indian/Mauritius",MV:"Indian/Maldives",MW:"Africa/Blantyre",MX:"America/Mexico_City",MY:"Asia/Kuala_Lumpur",MZ:"Africa/Maputo",NA:"Africa/Windhoek",NC:"Pacific/Noumea",NE:"Africa/Niamey",NF:"Pacific/Norfolk",NG:"Africa/Lagos",NI:"America/Managua",NL:"Europe/Amsterdam",NO:"Europe/Oslo",NP:"Asia/Kathmandu",NR:"Pacific/Nauru",NU:"Pacific/Niue",NZ:"Pacific/Auckland",OM:"Asia/Muscat",PA:"America/Panama",PE:"America/Lima",PF:"Pacific/Tahiti",PG:"Pacific/Port_Moresby",PH:"Asia/Manila",PK:"Asia/Karachi",PL:"Europe/Warsaw",PM:"America/Miquelon",PN:"Pacific/Pitcairn",PR:"America/Puerto_Rico",PS:"Asia/Gaza",PT:"Europe/Lisbon",PW:"Pacific/Palau",PY:"America/Asuncion",QA:"Asia/Qatar",RE:"Indian/Reunion",RO:"Europe/Bucharest",RS:"Europe/Belgrade",RU:"Europe/Moscow",RW:"Africa/Kigali",SA:"Asia/Riyadh",SB:"Pacific/Guadalcanal",SC:"Indian/Mahe",SD:"Africa/Khartoum",SE:"Europe/Stockholm",SG:"Asia/Singapore",SH:"Atlantic/St_Helena",SI:"Europe/Ljubljana",SJ:"Arctic/Longyearbyen",SK:"Europe/Bratislava",SL:"Africa/Freetown",SM:"Europe/San_Marino",SN:"Africa/Dakar",SO:"Africa/Mogadishu",SR:"America/Paramaribo",SS:"Africa/Juba",ST:"Africa/Sao_Tome",SV:"America/El_Salvador",SX:"America/Lower_Princes",SY:"Asia/Damascus",SZ:"Africa/Mbabane",TC:"America/Grand_Turk",TD:"Africa/Ndjamena",TF:"Indian/Kerguelen",TG:"Africa/Lome",TH:"Asia/Bangkok",TJ:"Asia/Dushanbe",TK:"Pacific/Fakaofo",TL:"Asia/Dili",TM:"Asia/Ashgabat",TN:"Africa/Tunis",TO:"Pacific/Tongatapu",TR:"Europe/Istanbul",TT:"America/Port_of_Spain",TV:"Pacific/Funafuti",TW:"Asia/Taipei",TZ:"Africa/Dar_es_Salaam",UA:"Europe/Kiev",UG:"Africa/Kampala",UM:"Pacific/Wake",US:"America/New_York",UY:"America/Montevideo",UZ:"Asia/Samarkand",VA:"Europe/Vatican",VC:"America/St_Vincent",VE:"America/Caracas",VG:"America/Tortola",VI:"America/St_Thomas",VN:"Asia/Ho_Chi_Minh",VU:"Pacific/Efate",WF:"Pacific/Wallis",WS:"Pacific/Apia",XK:"Europe/Belgrade",YE:"Asia/Aden",YT:"Indian/Mayotte",ZA:"Africa/Johannesburg",ZM:"Africa/Lusaka",ZW:"Africa/Harare"}[e];if(!t)return this.localTime="Není k dispozici časová zóna pro tento stát.",void(this.localDate="Není k dispozici časová zóna pro tento stát.");this.local=o()().tz(t).format("HH:mm DD.MMMM YYYY"),this.localTime=o()().tz(t).format("HH:mm"),this.localDate=o()().tz(t).format("DD.MMMM YYYY"),this.czech=o()().tz("Europe/Prague").format("HH:mm DD.MMMM YYYY"),this.czechTime=o()().tz("Europe/Prague").format("HH:mm"),this.czechDate=o()().tz("Europe/Prague").format("DD.MMMM YYYY")}}},c=n(1),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-time"},[t("div",{staticClass:"o-time__outer"},[t("div",{staticClass:"o-time__inner"},[t("span",{staticClass:"o-time__headline"},[e._v("Místní čas")]),e._v(" "),t("span",{staticClass:"o-time__time"},[e._v(e._s(e.localTime))]),e._v(" "),t("span",{staticClass:"o-time__date"},[e._v(e._s(e.localDate))]),e._v(" "),null!==e.local&&null!==e.czech&&"CZ"!==e.mpz?t("span",{staticClass:"o-time__difference"},[e._v(e._s(e.timeDifferenceMessage))]):e._e(),e._v(" "),"CZ"!==e.mpz?t("span",{staticClass:"o-time__home"},[e._v("(V Česku je "+e._s(e.czechTime)+" "+e._s(e.czechDate)+")")]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},808:function(e,t,n){"use strict";n.r(t);n(25);var r=n(9),o=(n(36),n(32),n(22),n(73),n(154),n(57),n(253),n(12),n(58),n(72),n(426)),l=n(417),c=n(404),m=n(407),d=(n(416),n(411)),h=n(414),_=n(409),f=n(452),v=n(410),y=n(704),A={name:"SvetStatSlugPage",components:{mNavBreadcrumbsItem:o.default,mNavPlace:l.default,mHeadline:c.default,oAdGoogleSidebar:m.default,oHeroPlace:d.default,oHotInfoHero:h.default,oMapGoogle:_.default,oPlaceTeaser:f.default,oSwitchHero:v.default,oTime:y.default},data:function(){return{place:this.place,placeContinent:this.placeContinent,imagePlace:this.imagePlace,showHero:!0,mNavBreadcrumbsWorldTimwArray:[{id:1,name:"Světový čas",url:"/svetovy-cas",status:"link"}],oHotInfoHeroArray:[{id:1,title:"Kontinent",name:"_NÁZEV KONTINENTU_",url:"_ODKAZ_",type:"string"},{id:2,title:"Rozloha",name:"_ROZLOHA_",type:"number",subfix:" km²"},{id:3,title:"Populace",name:"_POPULACE_",type:"number"}]}},head:function(){var e,title,t,n,r,o,l,c,m=this,d=this.place&&this.place.length>0?this.place[0].name:"Stát";title="Jaký je čas ve státě ".concat(d," | Cestovatelský portál Frytol na cestách"),t="".concat(this.place[0].information_chatgpt?this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g,"").slice(0,this.place[0].information_chatgpt.lastIndexOf(" ",160)):this.place[0].name?this.place[0].name:"Stát");var h="";return this.place[0].seo_tags&&this.place[0].seo_tags.length>0&&(h=", "+this.place[0].seo_tags.map((function(e){return e.tag})).join(", ")),n=(this.place[0].name?this.place[0].name:"")+h+", stát, čas, informace, časové pásma, cestování, svět, cestovatelský portál, která města tu jsou, plánování cesty, dovolená, pravidla cesty, o státu",r="".concat(this.place[0].id_image_hero?"https://image.frytolnacestach.cz/storage/"+this.imagePlace.find((function(image){return image.id===m.place[0].id_image_hero})).source+this.imagePlace.find((function(image){return image.id===m.place[0].id_image_hero})).name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png"),o=title,l=t,"website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{name:"keywords",content:n},{hid:"og:type",content:"website"},{hid:"og:url",content:c="".concat("https://frytolnacestach.cz","/svetovy-cas/").concat(this.place[0].slug)},{hid:"og:title",content:o},{hid:"og:description",content:l},{property:"og:image",content:r},{name:"twitter:title",content:o},{name:"twitter:description",content:l},{name:"twitter:image",content:r},{name:"twitter:url",content:c}],link:[{rel:"canonical",href:c}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Place",name:this.place[0].name?this.place[0].name:"",description:(null===(e=this.place[0].information_author)||void 0===e?void 0:e.length)>0?this.place[0].information_author[0].text.replace(/<\/?[^>]+(>|$)/g,""):this.place[0].information_chatgpt?this.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g,""):"",image:this.imagePlace[0]&&this.imagePlace[0].id?"https://image.frytolnacestach.cz/storage/world/states/"+this.imagePlace[0].name+".webp":"",area:{"@type":"QuantitativeValue",value:this.place[0].area?this.place[0].area:"",comment:"Rozloha v km²"},population:{"@type":"QuantitativeValue",value:this.place[0].population?this.place[0].population:""}}}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data,l,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$axios,r=e.params,o=!1,data=null;case 3:if(o){t.next=31;break}return t.prev=4,t.next=7,n.$get("https://api.frytolnacestach.cz/api/places-state/".concat(r.slug));case 7:if(!(l=t.sent)[0].id_image_hero||0===l[0].id_image_hero){t.next=14;break}return t.next=11,n.$get("https://api.frytolnacestach.cz/api/image-id/".concat(l[0].id_image_hero));case 11:t.t0=t.sent,t.next=15;break;case 14:t.t0=[];case 15:return c=t.t0,t.next=18,n.$get("https://api.frytolnacestach.cz/api/places-continent-id/".concat(l[0].id_continent));case 18:m=t.sent,data={place:l,imagePlace:c,placeContinent:m},o=!0,t.next=29;break;case 23:return t.prev=23,t.t1=t.catch(4),console.log("API ERROR - SVĚTOVÝ ČAS DETAIL: ".concat(r.slug)),console.error(t.t1),t.next=29,new Promise((function(e){return setTimeout(e,1e3)}));case 29:t.next=3;break;case 31:return t.abrupt("return",data);case 32:case"end":return t.stop()}}),t,null,[[4,23]])})))()},mounted:function(){var e=this;this.activeTab=this.$route.params.tab||"default",this.oHotInfoHeroArray=this.oHotInfoHeroArray.map((function(t){return 1===t.id&&(t.name=e.placeContinent[0].name,t.url="/svet/kontinent/".concat(e.placeContinent[0].slug)),t})),this.oHotInfoHeroArray=this.oHotInfoHeroArray.map((function(t){return 2===t.id&&(t.name=e.place[0].area),t})),this.oHotInfoHeroArray=this.oHotInfoHeroArray.map((function(t){return 3===t.id&&(t.name=e.place[0].population),t}))}},C=n(1),component=Object(C.a)(A,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section -px-world mt-2 -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavBreadcrumbsItem",{attrs:{links:e.mNavBreadcrumbsWorldTimwArray,item:e.place[0]}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world mt-1 -p0 hidden-print hidden-desktop"},[t("div",{staticClass:"t-section__inner"},[t("oSwitchHero",{attrs:{"show-hero":e.showHero},on:{"update:showHero":function(t){e.showHero=t},"update:show-hero":function(t){e.showHero=t}}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -world-hero"},[t("div",{class:"t-grid__section -hero-place"+(e.showHero?"":" hidden-mobile")},[e.place[0]?t("oHeroPlace",{attrs:{title:e.place[0].name,idImageHero:e.place[0].id_image_hero,images:e.imagePlace}}):e._e()],1),e._v(" "),t("div",{class:"t-grid__section -map"+(e.showHero?" hidden-mobile":"")},[t("oMapGoogle",{attrs:{place:e.place}})],1)])])]),e._v(" "),e.place[0].alerts?t("section",{staticClass:"t-section -px-world-big -p0"},[t("div",{staticClass:"t-section__inner"},[t("oAlerts",{attrs:{alerts:e.place[0].alerts}})],1)]):e._e(),e._v(" "),e.place[0]?t("div",{staticClass:"t-main -tab"},[t("section",{staticClass:"t-section -px-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -world-content-with-ad"},[t("div",{staticClass:"t-grid__section -content"},[t("section",{staticClass:"t-section -px-world mt-4"},[t("div",{staticClass:"t-section__inner"},[t("oTime",{attrs:{mpz:this.place[0].mpz}})],1)]),e._v(" "),t("section",{staticClass:"t-section my-2 -p0"},[t("div",{staticClass:"t-section__inner"},[t("oPlaceTeaser",{attrs:{headline:"Více informací o státě "+e.place[0].name,place:e.place,image:e.imagePlace,type:"stat"}})],1)])]),e._v(" "),t("div",{staticClass:"t-grid__section -ad"},[t("section",{staticClass:"t-section -px-world mt-4 mb-2"},[t("div",{staticClass:"t-section__inner"},[t("oAdGoogleSidebar",{attrs:{styleThema:" -green"}})],1)])])])])])]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);