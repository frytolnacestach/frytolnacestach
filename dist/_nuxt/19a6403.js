(window.webpackJsonp=window.webpackJsonp||[]).push([[160,10,12,19,21,29,31,48,51,72,78],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var r={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,n){"use strict";n.r(t);n(72);var r={name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)},adsenseTitle:function(){var e=document.querySelector(".o-ad-google-sidebar iframe");e?e.setAttribute("title","Reklama"):setTimeout(this.adsenseTitle,100)},checkAdStatus:function(){var e=document.querySelector(".o-ad-google-sidebar .adsbygoogle");e&&"unfilled"===e.dataset.adStatus?this.adsenseAddLoad():setTimeout(this.checkAdStatus,500)}},mounted:function(){this.adsenseAddLoad(),this.adsenseTitle(),this.checkAdStatus()}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},418:function(e,t,n){"use strict";n.r(t);n(25);var r=n(18),o=n(9),l=(n(36),n(254),n(12),n(72),n(58),{name:"OrganismsoInformationBlockComponent",props:{styleThema:{type:String,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1},perexWysiwyg:{type:String,required:!1},perexList:{type:Array,required:!1},perexListItemValueSubfix:{type:String,required:!1},perexInfo:{type:String,required:!1},authorName:{type:String,required:!1},authorLink:{type:String,required:!1},authorTarget:{type:String,required:!1},authorID:{type:Number,required:!1}},data:function(){return{user:[]}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,data,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!1,data=null,!e.authorID){t.next=21;break}case 3:if(n){t.next=20;break}return t.prev=4,t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/user-id/".concat(e.authorID));case 7:r=t.sent,data={user:r},n=!0,t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(4),console.log("API ERROR - AUTHOR"),console.error(t.t0),t.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:t.next=3;break;case 20:Object.assign(e,data);case 21:case"end":return t.stop()}}),t,null,[[4,12]])})))()},methods:{formatDate:function(e){var t=e.split("-"),n=Object(r.a)(t,2),o=n[0],l=n[1];return new Date("".concat(l,"-").concat(o,"-01")).toLocaleDateString("cs",{month:"long",year:"numeric"})}}}),c=n(1),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"o-information-block"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-information-block__outer"},[t("div",{staticClass:"o-information-block__inner"},[e.title?t("h2",{staticClass:"o-information-block__title",class:{"-m0":e.subtitle}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.subtitle?t("span",{staticClass:"o-information-block__title-info"},[e._v(e._s(e.subtitle))]):e._e(),e._v(" "),t("div",{staticClass:"o-information-block__perex"},[e.perexWysiwyg?t("div",{class:"o-information-block__wysiwyg o-wysiwyg"+(e.styleThema?e.styleThema:""),domProps:{innerHTML:e._s(e.perexWysiwyg)}}):e._e(),e._v(" "),e.perexList?t("div",{staticClass:"o-information-block__list"},[t("ul",{staticClass:"o-information-block__list-ul"},e._l(e.perexList,(function(n){return t("li",{key:n.name,staticClass:"o-information-block__list-li"},[t("h3",{staticClass:"o-information-block__list-h3"},[e._v(e._s(n.name))]),e._v(" "),t("span",{staticClass:"o-information-block__list-span"},[e._v(e._s(n.value)+" "+e._s(e.perexListItemValueSubfix))]),e._v(" "),t("i",{staticClass:"o-information-block__list-info"},[e._v("("+e._s(e.formatDate(n.date_update))+")")])])})),0)]):e._e(),e._v(" "),e.perexInfo?t("i",{staticClass:"o-information-block__info"},[e._v(e._s(e.perexInfo))]):e._e(),e._v(" "),e.authorName?t("div",{staticClass:"o-information-block__author"},[t("i",{staticClass:"m-author"},[e.authorLink?t("a",{staticClass:"m-author__link",attrs:{href:e.authorLink,target:e.authorTarget}},[e._v(e._s(e.authorName))]):t("span",{staticClass:"m-author__span"},[e._v(e._s(e.authorName))])])]):e._e(),e._v(" "),e.authorID?t("div",{staticClass:"o-information-block__author"},[t("i",{staticClass:"m-author"},[e.user[0]?t("nuxtLink",{staticClass:"m-author__link",attrs:{to:"/cestovatel/".concat(e.user[0].slug)}},[e._v("\n                            "+e._s(!e.user[0].surname||1!==e.user[0].setting_author_name&&2!==e.user[0].setting_author_name?"":e.user[0].surname+" ")+"\n                            "+e._s(!e.user[0].lastname||1!==e.user[0].setting_author_name&&2!==e.user[0].setting_author_name?"":e.user[0].lastname+" ")+"\n                            "+e._s(e.user[0].nickname&&1===e.user[0].setting_author_name?"("+e.user[0].nickname+")":"")+"\n                            "+e._s(e.user[0].nickname&&3===e.user[0].setting_author_name?e.user[0].nickname:"")+"\n                        ")]):e._e()],1)]):e._e()])])])])}),[],!1,null,null,null);t.default=component.exports},426:function(e,t,n){"use strict";n.r(t);n(25);var r={name:"MoleculesmNavBreadcrumbsFoodComponent",props:{links:{type:Array,required:!0},item:{type:Object,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("nav",{staticClass:"m-nav-breadcrumbs-item"},[t("div",{staticClass:"m-nav-breadcrumbs-item__outer"},[t("div",{staticClass:"m-nav-breadcrumbs-item__inner"},[t("ul",{staticClass:"m-nav-breadcrumbs-item__items"},[e._l(e.links,(function(n){return t("li",{key:n.id,staticClass:"m-nav-breadcrumbs-item__item"},["link"===n.status?t("NuxtLink",{staticClass:"m-nav-breadcrumbs-item__link",attrs:{to:n.url}},[e._v(e._s(n.name))]):"span"===n.status?t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(n.name))]):e._e()],1)})),e._v(" "),e.item?t("li",{staticClass:"m-nav-breadcrumbs-item__item"},[t("span",{staticClass:"m-nav-breadcrumbs-item__span"},[e._v(e._s(e.item.name))])]):e._e()],2)])])])}),[],!1,null,null,null);t.default=component.exports},431:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25);var r={name:"OrganismsoHeroItemComponent",components:{aImage:n(402).default},props:{item:{type:Array,required:!0},images:{type:Array,required:!0},showTitle:{type:Boolean,required:!1,default:!0}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:344},{mediaQueriesWidth:374,elementWidth:354},{mediaQueriesWidth:399,elementWidth:360},{mediaQueriesWidth:459,elementWidth:430},{mediaQueriesWidth:575,elementWidth:556},{mediaQueriesWidth:767,elementWidth:728},{mediaQueriesWidth:991,elementWidth:952},{mediaQueriesWidth:1219,elementWidth:780},{mediaQueriesWidth:1399,elementWidth:900},{mediaQueriesWidth:null,elementWidth:1248}],imageSizes:[{elementWidth:344,imageWidth:344,orientation:"s-"},{elementWidth:354,imageWidth:360,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"},{elementWidth:430,imageWidth:430,orientation:"s-"},{elementWidth:556,imageWidth:556,orientation:"s-"},{elementWidth:728,imageWidth:728,orientation:"h-"},{elementWidth:952,imageWidth:952,orientation:"h-"},{elementWidth:780,imageWidth:780,orientation:"h-"},{elementWidth:900,imageWidth:900,orientation:"h-"},{elementWidth:1248,imageWidth:1248,orientation:"h-"}]}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-item-detail"},[t("div",{staticClass:"o-hero-item-detail__container"},[t("div",{staticClass:"o-hero-item-detail__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===e.item[0].id_image_hero}))?t("div",{staticClass:"o-hero-item-detail__image-lazyload"},[t("aImage",{attrs:{alt:e.item[0].name?e.item[0].name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===e.item[0].id_image_hero})).author,lazy:!1,imageSource:e.images.find((function(image){return image.id===e.item[0].id_image_hero})).source,imageName:e.images.find((function(image){return image.id===e.item[0].id_image_hero})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-hero-item-detail"}})],1):t("div",{staticClass:"o-hero-item-detail__image-lazyload"},[t("aImage",{attrs:{alt:e.item[0].name?e.item[0].name:"Úvodní obrázek",lazy:!1,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-hero-item-detail"}})],1),e._v(" "),e.showTitle?t("div",{staticClass:"o-hero-item-detail__outer"},[t("div",{staticClass:"o-hero-item-detail__inner"},[e.item[0].name?t("h1",{staticClass:"o-hero-item-detail__headline"},[e._v(e._s(e.item[0].name))]):e._e()])]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},446:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(57);var r={name:"OrganismsoCoverStatesComponent",components:{aImage:n(402).default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:180},{mediaQueriesWidth:459,elementWidth:210},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:240},{mediaQueriesWidth:991,elementWidth:234},{mediaQueriesWidth:1219,elementWidth:166},{mediaQueriesWidth:1399,elementWidth:202},{mediaQueriesWidth:null,elementWidth:306}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:180,imageWidth:186,orientation:"s-"},{elementWidth:210,imageWidth:210,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:240,imageWidth:240,orientation:"s-"},{elementWidth:234,imageWidth:240,orientation:"s-"},{elementWidth:166,imageWidth:186,orientation:"s-"},{elementWidth:202,imageWidth:210,orientation:"s-"},{elementWidth:306,imageWidth:306,orientation:"s-"}]}},head:function(){return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Státy výskytu",itemListElement:this.items.map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/stat/".concat(e.slug),name:e.name}}}))}}]}:{script:[]}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-states"},[t("div",{staticClass:"o-cover-states__outer"},[t("div",{staticClass:"o-cover-states__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-states__item"},[t("div",{staticClass:"o-cover-states__content"},[t("div",{staticClass:"o-cover-states__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-states__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-states"}})],1):t("div",{staticClass:"o-cover-states__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-states"}})],1)]),e._v(" "),t("h3",{staticClass:"o-cover-states__name"},[e._v("\n                        "+e._s(n.name)+"\n                    ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-states__link",attrs:{to:"/svet/stat/".concat(n.slug),"aria-label":"Čti více o jídle ".concat(n.name)}})],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports},699:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoAffilateAlzaComponent"},o=n(1),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"o-affilate-alza"},[e("div",{staticClass:"o-affilate-alza__outer"},[e("div",{staticClass:"o-affilate-alza__inner"},[e("object",{attrs:{data:"https://affil.alza.cz/bnr/70482",width:"100%",height:"100%"}})])])])}],!1,null,null,null);t.default=component.exports},700:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25);var r=n(9),o=(n(36),n(254),n(41),n(57),n(154),n(72),n(402)),l=n(404),c={name:"OrganismsoCoverWallSocketComponent",components:{aImage:o.default,mHeadline:l.default},props:{ids:{type:Number,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1}},data:function(){return{items:null,images:null,imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:180},{mediaQueriesWidth:459,elementWidth:210},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:240},{mediaQueriesWidth:991,elementWidth:234},{mediaQueriesWidth:1219,elementWidth:166},{mediaQueriesWidth:1399,elementWidth:202},{mediaQueriesWidth:null,elementWidth:306}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:180,imageWidth:186,orientation:"s-"},{elementWidth:210,imageWidth:210,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:240,imageWidth:240,orientation:"s-"},{elementWidth:234,imageWidth:240,orientation:"s-"},{elementWidth:166,imageWidth:186,orientation:"s-"},{elementWidth:202,imageWidth:210,orientation:"s-"},{elementWidth:306,imageWidth:306,orientation:"s-"}]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r,o,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,data=null;case 2:if(n){t.next=29;break}if(t.prev=3,r=e.ids.map((function(e){return e.id})).filter((function(e){return null!==e&&""!==e})),!e.ids){t.next=11;break}return t.next=8,e.$axios.$get("https://api.frytolnacestach.cz/api/wall-sockets-id?id=".concat(r.join(","),"&showType=list"));case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=[];case 12:return o=t.t0,l=o.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=16,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(l.join(",")));case 16:c=t.sent,data={items:o,images:c},n=!0,t.next=27;break;case 21:return t.prev=21,t.t1=t.catch(3),console.log("API ERROR - VYPIS oCoverWallSocket"),console.error(t.t1),t.next=27,new Promise((function(e){return setTimeout(e,1e3)}));case 27:t.next=2;break;case 29:Object.assign(e,data);case 30:case"end":return t.stop()}}),t,null,[[3,21]])})))()}},m=n(1),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return null!==e.items&&e.items.length>0?t("section",{staticClass:"t-section my-4 py-1 -p0 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:e.title,perex:e.perex,styleThema:" -world",styleAlign:" -p-left",styleGap:" mb-2"}}),e._v(" "),t("div",{staticClass:"o-cover-title-item-state"},[t("div",{staticClass:"o-cover-title-item-state__outer"},[t("div",{staticClass:"o-cover-title-item-state__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-title-item-state__item"},[t("div",{staticClass:"o-cover-title-item-state__content"},[t("div",{staticClass:"o-cover-title-item-state__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-title-item-state__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-title-item-state"}})],1):t("div",{staticClass:"o-cover-title-item-state__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-title-item-state"}})],1),e._v(" "),t("NuxtLink",{staticClass:"o-cover-title-item-state__link",attrs:{to:"/elektricka-zasuvka/".concat(n.slug),"aria-label":"Čti více o elektrické zásuvce typu ".concat(n.label)}})],1)]),e._v(" "),t("h3",{staticClass:"o-cover-title-item-state__name"},[t("NuxtLink",{staticClass:"o-cover-title-item-state__name-link",attrs:{to:"/elektricka-zasuvka/".concat(n.slug),"aria-label":"Čti více o elektrické zásuvce typu ".concat(n.label)}},[e._v(e._s(n.name))])],1)])})),0)])])],1)]):e._e()}),[],!1,null,null,null);t.default=component.exports},803:function(e,t,n){"use strict";n.r(t);n(37),n(49),n(25);var r=n(9),o=(n(36),n(32),n(22),n(73),n(154),n(57),n(253),n(12),n(58),n(41),n(72),n(404)),l=n(426),c=n(407),m=n(699),d=n(446),h=n(700),_=n(431),v=n(418),f={name:"ElektrickeZasuvkySlugPage",components:{mHeadline:o.default,mNavBreadcrumbsItem:l.default,oAdGoogleSidebar:c.default,oAffilateAlza:m.default,oCoverStates:d.default,oCoverWallSocket:h.default,oHeroItemDetail:_.default,oInformationBlock:v.default},data:function(){return{wallSockets:this.wallSockets,imageWallSockets:this.imageWallSockets,placesStates:this.placesStates,imagesStates:this.imagesStates,mNavBreadcrumbsWallSocketsArray:[{id:1,name:"Elektricka zásuvka",url:"/elektricka-zasuvka",status:"link"}]}},head:function(){var title,e,t,n,r,o,l,c=this;title="".concat(this.wallSockets[0].name?this.wallSockets[0].name:"Elektrikcá zásuvka"," | Cestovatelský portál Frytol na cestách"),e="".concat(this.wallSockets[0].description?this.wallSockets[0].description.replace(/<\/?[^>]+(>|$)/g,"").slice(0,this.wallSockets[0].description.lastIndexOf(" ",160)):this.wallSockets[0].name);var m="";return this.wallSockets[0].seo_tags&&this.wallSockets[0].seo_tags.length>0&&(m=", "+this.wallSockets[0].seo_tags.map((function(e){return e.tag})).join(", ")),t=(this.wallSockets[0].name?this.wallSockets[0].name:"")+m+", Elektrická zásuvka, kompatibilita, redukce, zásuvky, plánuj cestu, cestovatelský portál, cestování, svět",n="".concat(this.wallSockets[0].id_image_hero?"https://image.frytolnacestach.cz/storage/"+this.imageWallSockets.find((function(image){return image.id===c.wallSockets[0].id_image_hero})).source+this.imageWallSockets.find((function(image){return image.id===c.wallSockets[0].id_image_hero})).name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png"),r=title,o=e,"website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:t},{hid:"og:type",content:"website"},{hid:"og:url",content:l="".concat("https://frytolnacestach.cz","/elektricka-zasuvka/").concat(this.wallSockets[0].slug)},{hid:"og:title",content:r},{hid:"og:description",content:o},{property:"og:image",content:n},{name:"twitter:title",content:r},{name:"twitter:description",content:o},{name:"twitter:image",content:n},{name:"twitter:url",content:l}],link:[{rel:"canonical",href:l}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"Product",name:this.wallSockets[0].name?this.wallSockets[0].name:"",description:this.wallSockets[0].description?this.wallSockets[0].description.replace(/<\/?[^>]+(>|$)/g,""):"",image:this.imageWallSockets[0]&&this.imageWallSockets[0].id?"https://image.frytolnacestach.cz/storage/brands/"+this.imageWallSockets[0].name+".webp":""}}]}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data,l,c,m,d,h,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$axios,r=e.params,o=!1,data=null;case 3:if(o){t.next=43;break}return t.prev=4,t.next=7,n.$get("https://api.frytolnacestach.cz/api/wall-socket/".concat(r.slug));case 7:return l=t.sent,t.next=10,n.$get("https://api.frytolnacestach.cz/api/image-id/".concat(l[0].id_image_hero));case 10:if(c=t.sent,m=void 0,m=l[0].ids_states&&Array.isArray(l[0].ids_states)&&0!==l[0].ids_states.length?l[0].ids_states.map((function(e){return e.id})):null,d=void 0,!m){t.next=20;break}return t.next=17,n.$get("https://api.frytolnacestach.cz/api/places-states-array?id=".concat(m.join(",")));case 17:d=t.sent,t.next=21;break;case 20:d=null;case 21:if(h=void 0,d&&(h=d.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))),_=void 0,!h){t.next=30;break}return t.next=27,n.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(h.join(",")));case 27:_=t.sent,t.next=31;break;case 30:_=null;case 31:data={wallSockets:l,placesStates:d,imageWallSockets:c,imagesStates:_},o=!0,t.next=41;break;case 35:return t.prev=35,t.t0=t.catch(4),console.log("API ERROR - ELEKTRICKÁ ZÁSUVKA DETAIL: ".concat(r.slug)),console.error(t.t0),t.next=41,new Promise((function(e){return setTimeout(e,1e3)}));case 41:t.next=3;break;case 43:return t.abrupt("return",data);case 44:case"end":return t.stop()}}),t,null,[[4,35]])})))()}},y=n(1),component=Object(y.a)(f,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section -px-world mt-2 -p0"},[t("div",{staticClass:"t-section__inner"},[t("mNavBreadcrumbsItem",{attrs:{links:e.mNavBreadcrumbsWallSocketsArray,item:e.wallSockets[0]}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"t-grid -world-content-with-ad"},[t("div",{staticClass:"t-grid__section -hero"},[t("oHeroItemDetail",{attrs:{item:e.wallSockets,images:e.imageWallSockets,showTitle:!1}})],1),e._v(" "),t("div",{staticClass:"t-grid__section -content"},[e.wallSockets[0].description?t("section",{staticClass:"t-section pt-1 mt-2 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:e.wallSockets[0].name?e.wallSockets[0].name:"",styleThema:" -world",styleAlign:" -p-left",styleSize:"h1"}}),e._v(" "),t("oInformationBlock",{attrs:{perexWysiwyg:e.wallSockets[0].description,authorName:"ChatGPT",authorLink:"https://chat.openai.com/chat",authorTarget:"_blank"}})],1)]):e._e(),e._v(" "),e.wallSockets[0].ids_compatibility&&e.wallSockets[0].ids_compatibility.length>0?t("section",{staticClass:"t-section -p0 -px-world my-2"},[t("div",{staticClass:"t-section__inner"},[t("oCoverWallSocket",{attrs:{title:"Kompatibilní elektrické zásuvky",perex:"Elektrická zásuvka typu "+e.wallSockets[0].label+" je kompatibilní s temito typy zásuvek.",ids:e.wallSockets[0].ids_compatibility}})],1)]):e._e(),e._v(" "),t("section",{staticClass:"t-section pt-1 mt-2 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Tady můžete koupit redukci pro elektrickou zásuvku",styleThema:" -world",styleAlign:" -p-left",styleGap:" mb-2"}}),e._v(" "),t("oAffilateAlza")],1)]),e._v(" "),e.placesStates?t("div",{staticClass:"t-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Elektrická zásuvka typu "+e.wallSockets[0].label+" se používá v techto státech",styleThema:" -world",styleAlign:" -p-left",styleGap:" mb-2 mt-4"}}),e._v(" "),t("oCoverStates",{attrs:{items:e.placesStates,images:e.imagesStates}})],1)]):e._e()]),e._v(" "),t("div",{staticClass:"t-grid__section -ad"},[t("section",{staticClass:"t-section -px-world mt-4 mb-2"},[t("div",{staticClass:"t-section__inner"},[t("oAdGoogleSidebar",{attrs:{styleThema:" -green"}})],1)])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);