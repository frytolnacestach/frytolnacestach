(window.webpackJsonp=window.webpackJsonp||[]).push([[34,12,127],{403:function(e,t,l){"use strict";l.r(t);l(154),l(57),l(58);var n={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},r=l(1),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},426:function(e,t,l){"use strict";l.r(t);var n={name:"SkeletonoArticleListComponent",props:{styleThema:{type:String,required:!0}}},r=l(1),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-article-list"},[t("div",{staticClass:"skeleton-o-article-list-list__outer"},[t("div",{staticClass:"skeleton-o-article-list__items"},e._l(3,(function(l){return t("div",{key:l,staticClass:"skeleton-o-article-list__item"},[t("div",{staticClass:"skeleton-o-article-list__item-inner"},[t("div",{class:"skeleton-o-article-list__image loading-image"+e.styleThema}),e._v(" "),t("div",{staticClass:"skeleton-o-article-list__text"},[t("h3",{class:"skeleton-o-article-list__title loading-image"+e.styleThema}),e._v(" "),t("p",{class:"skeleton-o-article-list__perex loading-image"+e.styleThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},435:function(e,t,l){"use strict";l.r(t);l(254),l(12),l(25),l(255),l(57);var n=l(426),r=l(403),o={name:"OrganismsoArticleListComponent",components:{skeletonoArticleList:n.default,aImage:r.default},props:{posts:{type:Array,required:!0},images:{type:Array,required:!0},styleThema:{type:String,required:!1},styleThemaLoading:{type:String,required:!1},styleAlign:{type:String,required:!1},styleSizeHeadline:{type:String,required:!1},skeleton:{type:Boolean,required:!1},skeletonThema:{type:String,required:!1},skeletonNumber:{type:Number,required:!1}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:320},{mediaQueriesWidth:374,elementWidth:340},{mediaQueriesWidth:399,elementWidth:360},{mediaQueriesWidth:459,elementWidth:420},{mediaQueriesWidth:575,elementWidth:536},{mediaQueriesWidth:767,elementWidth:360},{mediaQueriesWidth:1019,elementWidth:320},{mediaQueriesWidth:1219,elementWidth:384},{mediaQueriesWidth:1399,elementWidth:442},{mediaQueriesWidth:null,elementWidth:620}],imageSizes:[{elementWidth:320,imageWidth:320,orientation:"h-"},{elementWidth:340,imageWidth:340,orientation:"h-"},{elementWidth:360,imageWidth:360,orientation:"h-"},{elementWidth:384,imageWidth:384,orientation:"h-"},{elementWidth:420,imageWidth:420,orientation:"h-"},{elementWidth:536,imageWidth:536,orientation:"h-"},{elementWidth:620,imageWidth:620,orientation:"h-"}]}},head:function(){return this.posts||null!==this.posts?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Články",itemListElement:this.posts.map((function(e,t){return{"@type":"Article",position:t+1,name:e.title,url:"https://frytolnacestach.cz"+"/clanky/".concat(e.slug)}}))}}]}:{script:[]}}},c=l(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.posts&&e.skeleton?t("skeletonoArticleList",{attrs:{styleThema:e.skeletonThema?e.skeletonThema:"",skeletonNumber:e.skeletonNumber}}):e._e(),e._v(" "),null===e.posts||e.skeleton?e._e():t("client-only",[t("div",{class:"o-article-list"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-article-list__outer"},[t("div",{staticClass:"o-article-list__items"},e._l(e.posts,(function(l){return t("div",{key:l.id,staticClass:"o-article-list__item print-section"},[t("div",{staticClass:"o-article-list__item-inner"},[t("div",{class:"o-article-list__image loading-image "+(e.styleThemaLoading?e.styleThemaLoading:"")},[e.images&&e.images.find((function(image){return image.id===l.id_image_cover}))?t("div",{staticClass:"o-article-list__image-lazyload"},[t("aImage",{attrs:{alt:l.title?l.title:"Obrázek článku",author:e.images.find((function(image){return image.id===l.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===l.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===l.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-article-list"}})],1):t("div",{staticClass:"o-article-list__image-lazyload"},[t("aImage",{attrs:{alt:l.title?l.title:"Obrázek článku",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-article-list"}})],1),e._v(" "),l.slug?t("NuxtLink",{staticClass:"o-article-list__image-link",attrs:{to:"/clanky/".concat(l.slug),"aria-label":"Přečti si článek ".concat(l.title)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-article-list__text"},[l.title&&"h2"===e.styleSizeHeadline?t("h2",{staticClass:"o-article-list__title"},[t("NuxtLink",{staticClass:"o-article-list__title-link",attrs:{to:"/clanky/".concat(l.slug)}},[e._v(e._s(l.title))])],1):e._e(),e._v(" "),l.title&&"h2"!==e.styleSizeHeadline?t("h3",{staticClass:"o-article-list__title"},[t("NuxtLink",{staticClass:"o-article-list__title-link",attrs:{to:"/clanky/".concat(l.slug)}},[e._v(e._s(l.title))])],1):e._e(),e._v(" "),l.perex?t("p",{staticClass:"o-article-list__perex"},[t("NuxtLink",{staticClass:"o-article-list__perex-link",attrs:{to:"/clanky/".concat(l.slug)}},[e._v(e._s(l.perex))])],1):e._e()])])])})),0)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);