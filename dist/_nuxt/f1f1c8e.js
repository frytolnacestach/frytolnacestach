(window.webpackJsonp=window.webpackJsonp||[]).push([[36,12,128],{403:function(e,t,r){"use strict";r.r(t);r(154),r(57),r(58);var l={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},n=r(1),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},601:function(e,t,r){"use strict";r.r(t);var l={name:"SkeletonoArticleListUserComponent",props:{styleThema:{type:String,required:!0}}},n=r(1),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-article-list-user"},[t("div",{staticClass:"skeleton-o-article-list-user-list__outer"},[t("div",{staticClass:"skeleton-o-article-list-user__items"},e._l(3,(function(r){return t("div",{key:r,staticClass:"skeleton-o-article-list-user__item"},[t("div",{staticClass:"skeleton-o-article-list-user__item-inner"},[t("div",{class:"skeleton-o-article-list-user__image loading-image"+e.styleThema}),e._v(" "),t("div",{staticClass:"skeleton-o-article-list-user__text"},[t("h3",{class:"skeleton-o-article-list-user__title loading-image"+e.styleThema}),e._v(" "),t("p",{class:"skeleton-o-article-list-user__perex loading-image"+e.styleThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},620:function(e,t,r){"use strict";r.r(t);r(254),r(12),r(25);var l=r(601),n=r(403),o={name:"OrganismsoArticleListComponent",components:{skeletonoArticleListUser:l.default,aImage:n.default},props:{posts:{type:Array,required:!0},images:{type:Array,required:!0},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},skeleton:{type:Boolean,required:!0}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:320},{mediaQueriesWidth:374,elementWidth:340},{mediaQueriesWidth:399,elementWidth:360},{mediaQueriesWidth:459,elementWidth:420},{mediaQueriesWidth:575,elementWidth:536},{mediaQueriesWidth:767,elementWidth:360},{mediaQueriesWidth:1019,elementWidth:320},{mediaQueriesWidth:1219,elementWidth:384},{mediaQueriesWidth:1399,elementWidth:442},{mediaQueriesWidth:null,elementWidth:620}],imageSizes:[{elementWidth:320,imageWidth:320,orientation:"h-"},{elementWidth:340,imageWidth:340,orientation:"h-"},{elementWidth:360,imageWidth:360,orientation:"h-"},{elementWidth:384,imageWidth:384,orientation:"h-"},{elementWidth:420,imageWidth:420,orientation:"h-"},{elementWidth:536,imageWidth:536,orientation:"h-"},{elementWidth:620,imageWidth:620,orientation:"h-"}]}}},c=r(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[e.posts&&0===e.posts.length&&e.skeleton?t("skeletonoArticleListUser",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),null!==e.posts?t("client-only",[t("div",{class:"o-article-list-user"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-article-list-user-list__outer"},[t("div",{staticClass:"o-article-list-user__items"},e._l(e.posts,(function(r){return t("div",{key:r.id,staticClass:"o-article-list-user__item print-section"},[t("div",{staticClass:"o-article-list-user__item-inner"},[t("div",{staticClass:"o-article-list-user__image loading-image -blue"},[e.images&&e.images.find((function(image){return image.id===r.id_image_cover}))?t("div",{staticClass:"o-article-list-user__image-lazyload"},[t("aImage",{attrs:{alt:r.title?r.title:"Obrázek článku",author:e.images.find((function(image){return image.id===r.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===r.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===r.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-article-list-user"}})],1):t("div",{staticClass:"o-article-list-user__image-lazyload"},[t("aImage",{attrs:{alt:r.title?r.title:"Obrázek článku",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-article-list-user"}})],1),e._v(" "),r.slug?t("NuxtLink",{staticClass:"o-article-list-user__image-link",attrs:{to:"/clanky/".concat(r.slug),"aria-label":"Přečti si článek ".concat(r.title)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-article-list-user__text"},[r.title?t("h3",{staticClass:"o-article-list-user__title"},[t("NuxtLink",{staticClass:"o-article-list-user__title-link",attrs:{to:"/clanky/".concat(r.slug)}},[e._v(e._s(r.title))])],1):e._e(),e._v(" "),r.perex?t("p",{staticClass:"o-article-list-user__perex"},[t("NuxtLink",{staticClass:"o-article-list-user__perex-link",attrs:{to:"/clanky/".concat(r.slug)}},[e._v(e._s(r.perex))])],1):e._e()])])])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);