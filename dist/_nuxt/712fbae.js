(window.webpackJsonp=window.webpackJsonp||[]).push([[51,10,12,19],{402:function(e,t,r){"use strict";r.r(t);r(154),r(57),r(58);var n={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},l=r(1),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author,fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,r){"use strict";r.r(t);var n={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=r(1),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,r){"use strict";r.r(t);var n={name:"MoleculesmHeadlineComponent",components:{aButtonFill:r(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=r(1),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},700:function(e,t,r){"use strict";r.r(t);r(253),r(12),r(25);var n=r(9),l=(r(36),r(254),r(41),r(57),r(154),r(72),r(402)),o=r(404),c={name:"OrganismsoCoverWallSocketComponent",components:{aImage:l.default,mHeadline:o.default},props:{ids:{type:Number,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1}},data:function(){return{items:null,images:null,imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:180},{mediaQueriesWidth:459,elementWidth:210},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:240},{mediaQueriesWidth:991,elementWidth:234},{mediaQueriesWidth:1219,elementWidth:166},{mediaQueriesWidth:1399,elementWidth:202},{mediaQueriesWidth:null,elementWidth:306}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:180,imageWidth:186,orientation:"s-"},{elementWidth:210,imageWidth:210,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:240,imageWidth:240,orientation:"s-"},{elementWidth:234,imageWidth:240,orientation:"s-"},{elementWidth:166,imageWidth:186,orientation:"s-"},{elementWidth:202,imageWidth:210,orientation:"s-"},{elementWidth:306,imageWidth:306,orientation:"s-"}]}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data,n,l,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=!1,data=null;case 2:if(r){t.next=29;break}if(t.prev=3,n=e.ids.map((function(e){return e.id})).filter((function(e){return null!==e&&""!==e})),!e.ids){t.next=11;break}return t.next=8,e.$axios.$get("https://api.frytolnacestach.cz/api/wall-sockets-id?id=".concat(n.join(","),"&showType=list"));case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=[];case 12:return l=t.t0,o=l.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=16,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(o.join(",")));case 16:c=t.sent,data={items:l,images:c},r=!0,t.next=27;break;case 21:return t.prev=21,t.t1=t.catch(3),console.log("API ERROR - VYPIS oCoverWallSocket"),console.error(t.t1),t.next=27,new Promise((function(e){return setTimeout(e,1e3)}));case 27:t.next=2;break;case 29:Object.assign(e,data);case 30:case"end":return t.stop()}}),t,null,[[3,21]])})))()}},m=r(1),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return null!==e.items&&e.items.length>0?t("section",{staticClass:"t-section my-4 py-1 -p0 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:e.title,perex:e.perex,styleThema:" -world",styleAlign:" -p-left",styleGap:" mb-2"}}),e._v(" "),t("div",{staticClass:"o-cover-title-item-state"},[t("div",{staticClass:"o-cover-title-item-state__outer"},[t("div",{staticClass:"o-cover-title-item-state__items"},e._l(e.items,(function(r){return t("div",{key:r.id,staticClass:"o-cover-title-item-state__item"},[t("div",{staticClass:"o-cover-title-item-state__content"},[t("div",{staticClass:"o-cover-title-item-state__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===r.id_image_cover}))?t("div",{staticClass:"o-cover-title-item-state__image-lazyload"},[t("aImage",{attrs:{alt:r.name?r.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===r.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===r.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===r.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-title-item-state"}})],1):t("div",{staticClass:"o-cover-title-item-state__image-lazyload"},[t("aImage",{attrs:{alt:r.name?r.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-title-item-state"}})],1),e._v(" "),t("NuxtLink",{staticClass:"o-cover-title-item-state__link",attrs:{to:"/elektricka-zasuvka/".concat(r.slug),"aria-label":"Čti více o elektrické zásuvce typu ".concat(r.label)}})],1)]),e._v(" "),t("h3",{staticClass:"o-cover-title-item-state__name"},[t("NuxtLink",{staticClass:"o-cover-title-item-state__name-link",attrs:{to:"/elektricka-zasuvka/".concat(r.slug),"aria-label":"Čti více o elektrické zásuvce typu ".concat(r.label)}},[e._v(e._s(r.name))])],1)])})),0)])])],1)]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);