(window.webpackJsonp=window.webpackJsonp||[]).push([[220,10,12,19,21,29,32,52,72,78,82,83,89,93,106],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var r={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,n){"use strict";n.r(t);n(72);var r={name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)},adsenseTitle:function(){var e=document.querySelector(".o-ad-google-sidebar iframe");e?e.setAttribute("title","Reklama"):setTimeout(this.adsenseTitle,100)},checkAdStatus:function(){var e=document.querySelector(".o-ad-google-sidebar .adsbygoogle");e&&"unfilled"===e.dataset.adStatus?this.adsenseAddLoad():setTimeout(this.checkAdStatus,500)}},mounted:function(){this.adsenseAddLoad(),this.adsenseTitle(),this.checkAdStatus()}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},409:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoMapGoogleComponent",props:{place:{type:Array,required:!0}},data:function(){return{isHydrated:!1,center:{lat:0,lng:0},zoom:this.place[0].zoom[0].google,mapOptions:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!1,styles:[{featureType:"poi.attraction",elementType:"all",stylers:[{visibility:"on"},{color:"#20547e"},{saturation:"0"},{lightness:"13"},{weight:"2.00"}]},{featureType:"poi.attraction",elementType:"labels.icon",stylers:[{weight:"0.01"},{invert_lightness:!0}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"},{color:"#207b7e"},{lightness:"13"},{weight:"2.00"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{invert_lightness:!0}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"}]}]}}},mounted:function(){var e=this;this.fetchPlaceData(),this.$nextTick((function(){e.isHydrated=!0}))},methods:{fetchPlaceData:function(){if(this.place&&this.place.length>0&&this.place[0].coordinates&&this.place[0].coordinates.length>0){var e=this.place[0].coordinates[0].latitude,t=this.place[0].coordinates[0].longitude;isNaN(parseFloat(e))||isNaN(parseFloat(t))?(this.center.lat=e,this.center.lng=t):(this.center.lat=parseFloat(e),this.center.lng=parseFloat(t))}}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-map-google"},[t("div",{staticClass:"o-map-google__outer"},[t("div",{staticClass:"o-map-google__inner loading-image -green"},[e.isHydrated?t("gmap-map",{attrs:{center:e.center,zoom:e.zoom,options:e.mapOptions}}):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports},410:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoSwitchHeroComponent",data:function(){return{showHero:!0}},methods:{toggleHero:function(){this.showHero=!this.showHero,this.$emit("update:showHero",this.showHero)}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-end-all"},[e.showHero?t("span",{staticClass:"a-button-pure-icon -map",on:{click:e.toggleHero}},[e._v("Mapa")]):t("span",{staticClass:"a-button-pure-icon -cover",on:{click:e.toggleHero}},[e._v("Obrázek")])])}),[],!1,null,null,null);t.default=component.exports},418:function(e,t,n){"use strict";n.r(t);n(25);var r=n(18),o=n(9),l=(n(36),n(254),n(12),n(72),n(58),{name:"OrganismsoInformationBlockComponent",props:{styleThema:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},perexWysiwyg:{type:String,required:!1},perexList:{type:Array,required:!1},perexListItemValueSubfix:{type:String,required:!1},perexInfo:{type:String,required:!1},authorName:{type:String,required:!1},authorLink:{type:String,required:!1},authorTarget:{type:String,required:!1},authorID:{type:Number,required:!1}},data:function(){return{user:[]}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,data=null,!e.authorID){t.next=21;break}case 3:if(n){t.next=20;break}return t.prev=4,t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/user-id/".concat(e.authorID));case 7:r=t.sent,data={user:r},n=!0,t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(4),console.log("API ERROR - AUTHOR"),console.error(t.t0),t.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:t.next=3;break;case 20:Object.assign(e,data);case 21:case"end":return t.stop()}}),t,null,[[4,12]])})))()},methods:{formatDate:function(e){var t=e.split("-"),n=Object(r.a)(t,2),o=n[0],l=n[1];return new Date("".concat(l,"-").concat(o,"-01")).toLocaleDateString("cs",{month:"long",year:"numeric"})}}}),c=n(1),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"o-information-block"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-information-block__outer"},[t("div",{staticClass:"o-information-block__inner"},[e.title?t("h2",{staticClass:"o-information-block__title",class:{"-m0":e.subtitle}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.subtitle?t("span",{staticClass:"o-information-block__title-info"},[e._v(e._s(e.subtitle))]):e._e(),e._v(" "),t("div",{staticClass:"o-information-block__perex"},[e.perexWysiwyg?t("div",{class:"o-information-block__wysiwyg o-wysiwyg"+(e.styleThema?e.styleThema:""),domProps:{innerHTML:e._s(e.perexWysiwyg)}}):e._e(),e._v(" "),e.perexList?t("div",{staticClass:"o-information-block__list"},[t("ul",{staticClass:"o-information-block__list-ul"},e._l(e.perexList,(function(n){return t("li",{key:n.name,staticClass:"o-information-block__list-li"},[t("h3",{staticClass:"o-information-block__list-h3"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"o-information-block__list-span"},[e._v(e._s(n.value)+" "+e._s(e.perexListItemValueSubfix))]),e._v(" "),t("i",{staticClass:"o-information-block__list-info"},[e._v("("+e._s(e.formatDate(n.date_update))+")")])])})),0)]):e._e(),e._v(" "),e.perexInfo?t("i",{staticClass:"o-information-block__info"},[e._v(e._s(e.perexInfo))]):e._e(),e._v(" "),e.authorName?t("div",{staticClass:"o-information-block__author"},[t("i",{staticClass:"m-author"},[e.authorLink?t("a",{staticClass:"m-author__link",attrs:{href:e.authorLink,target:e.authorTarget}},[e._v(e._s(e.authorName))]):t("span",{staticClass:"m-author__span"},[e._v(e._s(e.authorName))])])]):e._e(),e._v(" "),e.authorID?t("div",{staticClass:"o-information-block__author"},[t("i",{staticClass:"m-author"},[e.user[0]?t("nuxtLink",{staticClass:"m-author__link",attrs:{to:"/cestovatel/".concat(e.user[0].slug)}},[e._v("\n                            "+e._s(!e.user[0].surname||1!==e.user[0].setting_author_name&&2!==e.user[0].setting_author_name?"":e.user[0].surname+" ")+"\n                            "+e._s(!e.user[0].lastname||1!==e.user[0].setting_author_name&&2!==e.user[0].setting_author_name?"":e.user[0].lastname+" ")+"\n                            "+e._s(e.user[0].nickname&&1===e.user[0].setting_author_name?"("+e.user[0].nickname+")":"")+"\n                            "+e._s(e.user[0].nickname&&3===e.user[0].setting_author_name?e.user[0].nickname:"")+"\n                        ")]):e._e()],1)]):e._e()])])])])}),[],!1,null,null,null);t.default=component.exports},426:function(e,t,n){"use strict";n.r(t);n(25);var r={name:"MoleculesmNavBreadcrumbsFoodComponent",props:{links:{type:Array,required:!0},item:{type:Object,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-breadcrumbs-item"},[t("div",{staticClass:"m-nav-breadcrumbs-item__outer"},[t("div",{staticClass:"m-nav-breadcrumbs-item__inner"},[t("ul",{staticClass:"m-nav-breadcrumbs-item__items"},[e._l(e.links,(function(n){return t("li",{key:n.id,staticClass:"m-nav-breadcrumbs-item__item"},["link"===n.status?t("NuxtLink",{staticClass:"m-nav-breadcrumbs-item__link",attrs:{to:n.url}},[e._v(e._s(n.name))]):"span"===n.status?t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(n.name))]):e._e()],1)})),e._v(" "),e.item?t("li",{staticClass:"m-nav-breadcrumbs-item__item"},[t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(e.item.name))])]):e._e()],2)])])])}),[],!1,null,null,null);t.default=component.exports},431:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25);var r={name:"OrganismsoHeroItemComponent",components:{aImage:n(402).default},props:{item:{type:Array,required:!0},images:{type:Array,required:!0},showTitle:{type:Boolean,required:!1,default:!0}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:344},{mediaQueriesWidth:374,elementWidth:354},{mediaQueriesWidth:399,elementWidth:360},{mediaQueriesWidth:459,elementWidth:430},{mediaQueriesWidth:575,elementWidth:556},{mediaQueriesWidth:767,elementWidth:728},{mediaQueriesWidth:991,elementWidth:952},{mediaQueriesWidth:1219,elementWidth:780},{mediaQueriesWidth:1399,elementWidth:900},{mediaQueriesWidth:null,elementWidth:1248}],imageSizes:[{elementWidth:344,imageWidth:344,orientation:"s-"},{elementWidth:354,imageWidth:360,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"},{elementWidth:430,imageWidth:430,orientation:"s-"},{elementWidth:556,imageWidth:556,orientation:"s-"},{elementWidth:728,imageWidth:728,orientation:"h-"},{elementWidth:952,imageWidth:952,orientation:"h-"},{elementWidth:780,imageWidth:780,orientation:"h-"},{elementWidth:900,imageWidth:900,orientation:"h-"},{elementWidth:1248,imageWidth:1248,orientation:"h-"}]}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-item-detail"},[t("div",{staticClass:"o-hero-item-detail__container"},[t("div",{staticClass:"o-hero-item-detail__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===e.item[0].id_image_hero}))?t("div",{staticClass:"o-hero-item-detail__image-lazyload"},[t("aImage",{attrs:{alt:e.item[0].name?e.item[0].name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===e.item[0].id_image_hero})).author,lazy:!1,imageSource:e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source,imageName:e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-hero-item-detail"}})],1):t("div",{staticClass:"o-hero-item-detail__image-lazyload"},[t("aImage",{attrs:{alt:e.item[0].name?e.item[0].name:"Úvodní obrázek",lazy:!1,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-hero-item-detail"}})],1),e._v(" "),e.showTitle?t("div",{staticClass:"o-hero-item-detail__outer"},[t("div",{staticClass:"o-hero-item-detail__inner"},[e.item[0].name?t("h1",{staticClass:"o-hero-item-detail__headline"},[e._v(e._s(e.item[0].name))]):e._e()])]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},442:function(e,t,n){"use strict";n.r(t);n(254),n(72);var r={name:"OrganismsoAffilateBookingComponent",props:{latitude:{type:Number,required:!0},longitude:{type:Number,required:!0},landmarkName:{type:String,required:!0},address:{type:String,required:!0},dateStart:{type:String,required:!1},dateEnd:{type:String,required:!1},zoom:{type:Number,required:!0}},methods:{iframeTitle:function(){var e=document.querySelector(".o-affilate-booking iframe");e?e.setAttribute("title","Booking"):setTimeout(this.iframeTitle,100)}},mounted:function(){var script=document.createElement("script");script.type="text/javascript",script.async=!0,script.src="//cf.bstatic.com/static/affiliate_base/js/flexiproduct.js",document.body.appendChild(script),this.iframeTitle()}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-affilate-booking"},[t("ins",{staticClass:"bookingaff",attrs:{"data-aid":"2328995","data-target_aid":"2328995","data-prod":"map","data-width":"100%","data-height":"590","data-lang":"ualng","data-dest_id":"0","data-dest_type":"landmark","data-latitude":e.latitude,"data-longitude":e.longitude,"data-landmark_name":e.landmarkName,"data-mwhsb":"0","data-address":e.address,"data-zoom":e.zoom}},[t("a",{attrs:{href:"//www.booking.com?aid=2328995"}},[e._v("Booking.com")])])])}),[],!1,null,null,null);t.default=component.exports},606:function(e,t,n){"use strict";n.r(t);n(25),n(58),n(32),n(22),n(73);var r=n(9),o=(n(36),n(254),n(57),n(12),n(38),n(155)),l=n(402),c={name:"OrganismsoPlaceBlockComponent",components:{aButtonFillFull:o.default,aImage:l.default},props:{placeID:{type:Number,required:!0},type:{type:String,required:!0},styleThema:{type:String,required:!1}},data:function(){return{place:[],image:[],imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:310},{mediaQueriesWidth:374,elementWidth:334},{mediaQueriesWidth:399,elementWidth:360},{mediaQueriesWidth:459,elementWidth:420},{mediaQueriesWidth:575,elementWidth:536},{mediaQueriesWidth:767,elementWidth:728},{mediaQueriesWidth:991,elementWidth:304},{mediaQueriesWidth:1219,elementWidth:380},{mediaQueriesWidth:1399,elementWidth:440},{mediaQueriesWidth:null,elementWidth:614}],imageSizes:[{elementWidth:310,imageWidth:312,orientation:"h-"},{elementWidth:334,imageWidth:334,orientation:"h-"},{elementWidth:360,imageWidth:360,orientation:"h-"},{elementWidth:420,imageWidth:420,orientation:"h-"},{elementWidth:536,imageWidth:536,orientation:"h-"},{elementWidth:728,imageWidth:728,orientation:"h-"},{elementWidth:304,imageWidth:312,orientation:"h-"},{elementWidth:380,imageWidth:380,orientation:"h-"},{elementWidth:440,imageWidth:440,orientation:"h-"},{elementWidth:614,imageWidth:614,orientation:"h-"}]}},head:function(){var e=this;return this.place||0!==this.place.length?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"kontinent"===this.type?"Kontinent":"stat"===this.type?"Stát":"mesto"===this.type?"Město":"region"===this.type?"Region":"misto"===this.type?"Místo":"",itemListElement:this.place.map((function(t,n){return{"@type":"ListItem",position:n+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/".concat(e.type,"/").concat(t.slug),name:t.name}}}))}}]}:{script:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("kontinent"!==e.type){t.next=6;break}return t.next=3,fetch("https://api.frytolnacestach.cz/api/places-continent-id/".concat(e.placeID)).then((function(e){return e.json()}));case 3:e.place=t.sent,t.next=28;break;case 6:if("stat"!==e.type){t.next=12;break}return t.next=9,fetch("https://api.frytolnacestach.cz/api/places-state-id/".concat(e.placeID)).then((function(e){return e.json()}));case 9:e.place=t.sent,t.next=28;break;case 12:if("region"!==e.type){t.next=18;break}return t.next=15,fetch("https://api.frytolnacestach.cz/api/places-region-id/".concat(e.placeID)).then((function(e){return e.json()}));case 15:e.place=t.sent,t.next=28;break;case 18:if("mesto"!==e.type){t.next=24;break}return t.next=21,fetch("https://api.frytolnacestach.cz/api/places-city-id/".concat(e.placeID)).then((function(e){return e.json()}));case 21:e.place=t.sent,t.next=28;break;case 24:if("misto"!==e.type){t.next=28;break}return t.next=27,fetch("https://api.frytolnacestach.cz/api/places-spot-id/".concat(e.placeID)).then((function(e){return e.json()}));case 27:e.place=t.sent;case 28:if(!e.place){t.next=32;break}return t.next=31,fetch("https://api.frytolnacestach.cz/api/image-id/".concat(e.place[0].id_image_hero)).then((function(e){return e.json()}));case 31:e.image=t.sent;case 32:case"end":return t.stop()}}),t)})))()}))},d=c,m=n(1),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("div",{class:"o-place-block"+(e.styleThema?e.styleThema:" -gray")},[t("div",{staticClass:"o-place-block__outer"},[t("div",{staticClass:"o-place-block__inner"},[t("div",{staticClass:"o-place-block__content"},[t("div",{staticClass:"o-place-block__image loading-image -gray"},[e.image?t("div",{staticClass:"o-place-block__image-lazyload"},[t("aImage",{attrs:{alt:e.place[0].name?e.place[0].name:"Místo",author:e.image[0].author,lazy:!0,imageSource:e.image[0].source,imageName:e.image[0].name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-place-block"}})],1):t("div",{staticClass:"o-place-block__image-lazyload"},[t("aImage",{attrs:{alt:e.place[0].name?e.place[0].name:"Místo",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-place-block"}})],1),e._v(" "),t("div",{staticClass:"o-place-block__filter"},[t("span",{staticClass:"o-place-block__name"},[e._v(e._s(e.place[0].name))])]),e._v(" "),t("NuxtLink",{staticClass:"o-place-block__image-link",attrs:{to:"/svet/".concat(e.type,"/").concat(e.place[0].slug),"aria-label":"Čti více o místě ".concat(e.place[0].name)}})],1),e._v(" "),t("div",{staticClass:"o-place-block__text"},[e.place[0].information_chatgpt?t("div",{staticClass:"o-place-block__wysiwyg",domProps:{innerHTML:e._s(e.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g,"").slice(0,220))}}):e._e(),e._v(" "),t("div",{staticClass:"o-place-block__button"},[t("aButtonFillFull",{attrs:{target:"internal",url:"/svet/".concat(e.type,"/").concat(e.place[0].slug),text:"Číst více",styleThema:e.styleThema?e.styleThema:" -gray"}})],1)])])])])])}),[],!1,null,null,null);t.default=component.exports},646:function(e,t,n){"use strict";var r=n(3),o=n(647);r({target:"String",proto:!0,forced:n(648)("link")},{link:function(e){return o(this,"a","href",e)}})},647:function(e,t,n){"use strict";var r=n(5),o=n(29),l=n(15),c=/"/g,d=r("".replace);e.exports=function(e,t,n,r){var m=l(o(e)),h="<"+t;return""!==n&&(h+=" "+n+'="'+d(l(r),c,"&quot;")+'"'),h+">"+m+"</"+t+">"}},648:function(e,t,n){"use strict";var r=n(4);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},705:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoDateOfEventComponent",props:{dateStart:{type:String,required:!0},dateEnd:{type:String,required:!0}},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("cs",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"})}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-date-of-event"},[t("div",{staticClass:"o-date-of-event__outer"},[t("div",{staticClass:"o-date-of-event__inner"},[t("div",{staticClass:"o-date-of-event__start"},[t("span",{staticClass:"o-date-of-event__label"},[e._v("Začátek:")]),e._v(e._s(e.formatDate(e.dateStart)))]),e._v(" "),t("div",{staticClass:"o-date-of-event__end"},[t("span",{staticClass:"o-date-of-event__label"},[e._v("Konec:")]),e._v(e._s(e.formatDate(e.dateEnd)))])])])])}),[],!1,null,null,null);t.default=component.exports},706:function(e,t,n){"use strict";n.r(t);n(25),n(646);var r={name:"OrganismsoLinksComponent",props:{items:{type:Array,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-links"},[t("div",{staticClass:"o-links__outer"},[t("div",{staticClass:"o-links__inner"},[t("h3",{staticClass:"o-links__header"},[e._v("Odkazy co se mohou hodit")]),e._v(" "),t("div",{staticClass:"o-links__items"},e._l(e.items,(function(n){return t("div",{key:n.name,staticClass:"o-links__item"},[t("h4",{staticClass:"o-links__name"},[e._v(e._s(n.name))]),e._v(" "),t("a",{staticClass:"o-links__link",attrs:{href:n.link,target:"_blank"}},[e._v(e._s(n.link))])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},707:function(e,t,n){"use strict";n.r(t);n(25);var r={name:"OrganismsoPricesComponent",props:{items:{type:Array,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-prices"},[t("div",{staticClass:"o-prices__outer"},[t("div",{staticClass:"o-prices__inner"},[t("div",{staticClass:"o-prices__items"},e._l(e.items,(function(n){return t("div",{key:n.name,staticClass:"o-prices__item"},[t("div",{staticClass:"o-prices__content"},[t("h4",{staticClass:"o-prices__name"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"o-prices__perex"},[e._v(" "+e._s(n.perex))]),e._v(" "),t("span",{staticClass:"o-prices__value"},[e._v(e._s(n.value))])])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},809:function(e,t,n){"use strict";n.r(t);n(37),n(49),n(25),n(253),n(12);var r=n(9),o=(n(36),n(32),n(22),n(73),n(154),n(57),n(58),n(72),n(426)),l=n(404),c=n(407),d=n(442),m=n(705),h=n(431),_=n(418),v=n(706),f=n(409),y=n(606),C=n(707),k=n(410),S={name:"UdalostSlugPage",components:{mNavBreadcrumbsItem:o.default,mHeadline:l.default,oAdGoogleSidebar:c.default,oAffilateBooking:d.default,oDateOfEvent:m.default,oHeroItemDetail:h.default,oInformationBlock:_.default,oLinks:v.default,oMapGoogle:f.default,oPlaceBlock:y.default,oPrices:C.default,oSwitchHero:k.default},data:function(){return{event:this.event,image:this.image,placeCity:this.placeCity,showHero:!0,mNavBreadcrumbsEventArray:[{id:1,name:"Události",url:"/udalost",status:"link"}]}},head:function(){var title,e,t,n,r,o,l,c=this;title="".concat(this.event[0].name?this.event[0].name:"Region"," | Cestovatelský portál Frytol na cestách"),e="".concat(this.event[0].description?this.event[0].description.replace(/<\/?[^>]+(>|$)/g,"").slice(0,this.event[0].description.lastIndexOf(" ",160)):this.event[0].name);var d="";return this.event[0].seo_tags&&this.event[0].seo_tags.length>0&&(d=", "+this.event[0].seo_tags.map((function(e){return e.tag})).join(", ")),t=(this.event[0].name?this.event[0].name:"")+d+", událost, cestování, svět, cestovatelský portál, jaké státy tu jsou, plánování cesty, dovolená",n="".concat(this.event[0].id_image_hero?"https://image.frytolnacestach.cz/storage/"+this.image.find((function(image){return image.id===c.event[0].id_image_hero})).source+this.image.find((function(image){return image.id===c.event[0].id_image_hero})).name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png"),r=title,o=e,"website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:t},{hid:"og:type",content:"website"},{hid:"og:url",content:l="".concat("https://frytolnacestach.cz","/udalost/").concat(this.event[0].slug)},{hid:"og:title",content:r},{hid:"og:description",content:o},{property:"og:image",content:n},{name:"twitter:title",content:r},{name:"twitter:description",content:o},{name:"twitter:image",content:n},{name:"twitter:url",content:l}],link:[{rel:"canonical",href:l}],script:[{type:"application/ld+json",json:{"@context":"http://schema.org","@type":"Event",name:this.event[0].name?this.event[0].name:"",startDate:this.event[0].date_start?this.event[0].date_start:"",endDate:this.event[0].date_end?this.event[0].date_end:"",location:{"@type":"Place",name:this.placeCity[0]&&this.placeCity[0].name?this.placeCity[0].name:""},description:this.event[0].description?this.event[0].description:"",image:this.image[0]&&this.image[0].id?"https://image.frytolnacestach.cz/storage/events/"+this.image[0].name+".webp":""}}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data,l,image,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$axios,r=e.params,o=!1,data=null;case 3:if(o){t.next=36;break}return t.prev=4,t.next=7,n.$get("https://api.frytolnacestach.cz/api/event/".concat(r.slug));case 7:if(!(l=t.sent)[0].id_image_hero||0===l[0].id_image_hero){t.next=14;break}return t.next=11,n.$get("https://api.frytolnacestach.cz/api/image-id/".concat(l[0].id_image_hero));case 11:t.t0=t.sent,t.next=15;break;case 14:t.t0=[];case 15:if(image=t.t0,!l[0].id_city||0===l[0].id_city){t.next=22;break}return t.next=19,n.$get("https://api.frytolnacestach.cz/api/places-city-id/".concat(l[0].id_city));case 19:t.t1=t.sent,t.next=23;break;case 22:t.t1=[];case 23:c=t.t1,data={event:l,image:image,placeCity:c},o=!0,t.next=34;break;case 28:return t.prev=28,t.t2=t.catch(4),console.log("API ERROR - UDÁLOST DETAIL: ".concat(r.slug)),console.error(t.t2),t.next=34,new Promise((function(e){return setTimeout(e,1e3)}));case 34:t.next=3;break;case 36:return t.abrupt("return",data);case 37:case"end":return t.stop()}}),t,null,[[4,28]])})))()}},x=n(1),component=Object(x.a)(S,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section -px-world mt-2 -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavBreadcrumbsItem",{attrs:{links:e.mNavBreadcrumbsEventArray,item:e.event[0]}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world mt-1 -p0 hidden-print hidden-desktop"},[t("div",{staticClass:"t-section__inner"},[t("oSwitchHero",{attrs:{"show-hero":e.showHero},on:{"update:showHero":function(t){e.showHero=t},"update:show-hero":function(t){e.showHero=t}}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -world-hero"},[t("div",{class:"t-grid__section -hero-place"+(e.showHero?"":" hidden-mobile")},[t("oHeroItemDetail",{attrs:{item:e.event,images:e.image}})],1),e._v(" "),t("div",{class:"t-grid__section -map"+(e.showHero?" hidden-mobile":"")},[t("oMapGoogle",{attrs:{place:e.event}})],1)])])]),e._v(" "),t("section",{staticClass:"t-section -px-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -world-content-with-ad"},[t("div",{staticClass:"t-grid__section -content mb-4"},[e.event[0].description?t("section",{staticClass:"t-section"},[t("div",{staticClass:"t-section__inner"},[t("oInformationBlock",{attrs:{title:"O události "+(e.event[0].name?e.event[0].name:""),perexWysiwyg:e.event[0].description,authorName:"Michal Fryč (frytolnacestach)",authorLink:"https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach",authorTarget:"_blank"}})],1)]):e._e(),e._v(" "),e.event[0].prices&&e.event[0].prices.length>0?t("section",{staticClass:"t-section my-4 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Cena akce",styleThema:" -world",styleAlign:" -p-left",styleGap:" mb-2"}}),e._v(" "),t("oPrices",{attrs:{items:e.event[0].prices}})],1)]):e._e(),e._v(" "),t("section",{staticClass:"t-section print-section"},[t("div",{staticClass:"t-section__inner"},[!0===e.event[0].affiliate.find((function(e){return"booking"===e.name})).value?t("oInformationBlock",{attrs:{title:"Ubytování blízko události "+(e.event[0].name?e.event[0].name:""),perexWysiwyg:"Cena za konkrétní ubytování se může lišit v závislosti na vzdálenosti termínu, délce pobytu a počtu ubytovaných osob. Zde uvedené ceny jsou aktuální na dnešní noc a platí pro dvě osoby. Prostřednictvím služby Booking.com je zajištěno sprostředkování ubytování. Je však třeba poznamenat, že ceny se mohou měnit v závislosti na aktuální poptávce a nabídce. V případě zájmu o rezervaci je tedy vhodné sledovat vývoj cen a včas zajistit své ubytování za nejvýhodnějších podmínek."}}):e._e()],1)]),e._v(" "),e.event[0]&&e.placeCity[0]&&!0===e.event[0].affiliate.find((function(e){return"booking"===e.name})).value?t("section",{staticClass:"t-section -px-world py-2 hidden-print"},[t("div",{staticClass:"t-section__inner"},e._l(e.event[0].coordinates,(function(n){return t("div",[t("oAffilateBooking",{attrs:{landmarkName:"".concat(e.placeCity[0].name?e.placeCity[0].name:""),address:"".concat(e.placeCity[0].name?e.placeCity[0].name:""),latitude:parseFloat(n.latitude),longitude:parseFloat(n.longitude),zoom:e.event[0].zoom[0].booking,dateStart:e.event[0].date_start,dateEnd:e.event[0].date_end}})],1)})),0)]):e._e()]),e._v(" "),t("div",{staticClass:"t-grid__section -ad"},[e.event[0].date_start||e.event[0].date_end?t("section",{staticClass:"t-section -px-world my-2 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oDateOfEvent",{attrs:{dateStart:e.event[0].date_start,dateEnd:e.event[0].date_end}})],1)]):e._e(),e._v(" "),e.event[0].links&&e.event[0].links.length>0?t("section",{staticClass:"t-section -px-world my-2 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oLinks",{attrs:{items:e.event[0].links}})],1)]):e._e(),e._v(" "),t("section",{staticClass:"t-section -px-world mt-4 mb-2"},[t("div",{staticClass:"t-section__inner"},[t("oAdGoogleSidebar",{attrs:{styleThema:" -green"}})],1)])])])])]),e._v(" "),e.event[0].id_continent||e.event[0].id_state||e.event[0].id_region||e.event[0].id_city||e.event[0].id_spot?t("div",{staticClass:"t-layout-full"},[t("section",{staticClass:"t-section -p0 pt-2 pb-1 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Více informací o místě",styleThema:" -green",styleAlign:" -p-left",styleGap:" mx-2 mb-2"}}),e._v(" "),t("div",{staticClass:"flex mx-1"},[e.event[0].id_continent?t("oPlaceBlock",{attrs:{placeID:e.event[0].id_continent,type:"kontinent",styleThema:" -green"}}):e._e(),e._v(" "),e.event[0].id_state?t("oPlaceBlock",{attrs:{placeID:e.event[0].id_state,type:"stat",styleThema:" -green"}}):e._e(),e._v(" "),e.event[0].id_region?t("oPlaceBlock",{attrs:{placeID:e.event[0].id_region,type:"region",styleThema:" -green"}}):e._e(),e._v(" "),e.event[0].id_city?t("oPlaceBlock",{attrs:{placeID:e.event[0].id_city,type:"mesto",styleThema:" -green"}}):e._e(),e._v(" "),e.event[0].id_spot?t("oPlaceBlock",{attrs:{placeID:e.event[0].id_spot,type:"misto",styleThema:" -green"}}):e._e()],1)],1)])]):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);