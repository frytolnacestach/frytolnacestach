(window.webpackJsonp=window.webpackJsonp||[]).push([[43,12,129],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var o={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author,fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},428:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoCoverItemComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-item"},[t("div",{staticClass:"skeleton-o-cover-item__outer"},[t("div",{staticClass:"skeleton-o-cover-item__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-item__item"},[t("div",{staticClass:"skeleton-o-cover-item__content"},[t("div",{class:"skeleton-o-cover-item__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},433:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(58),n(57);var o=n(428),r={name:"OrganismsoCoverItemComponent",components:{aImage:n(402).default,skeletonoCoverItem:o.default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:186},{mediaQueriesWidth:459,elementWidth:216},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:230},{mediaQueriesWidth:991,elementWidth:224},{mediaQueriesWidth:1219,elementWidth:220},{mediaQueriesWidth:1399,elementWidth:256},{mediaQueriesWidth:null,elementWidth:360}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:186,imageWidth:186,orientation:"s-"},{elementWidth:216,imageWidth:224,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:230,imageWidth:240,orientation:"s-"},{elementWidth:224,imageWidth:224,orientation:"s-"},{elementWidth:220,imageWidth:224,orientation:"s-"},{elementWidth:256,imageWidth:256,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"}]}},head:function(){var e=this;return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"jidlo"===this.type?"Jídla":"fauna"===this.type?"Fauna":"flora"===this.type?"Flora":"znacka"===this.type?"Výrobky":"retezec"===this.type?"Řetězce":"cestovatelsky-slovnik"===this.type?"Cestovatelský slovník":"udalost"===this.type?"Události":"",itemListElement:this.items.map((function(t,n){return{"@type":"ListItem",position:n+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/".concat(e.type,"/").concat(t.slug),name:t.name}}}))}}]}:{script:[]}}},m=n(1),component=Object(m.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.items&&!0===e.skeleton?t("skeletonoCoverItem",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.items&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-cover-item"},[t("div",{staticClass:"o-cover-item__outer"},[t("div",{staticClass:"o-cover-item__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-item__item"},[t("div",{staticClass:"o-cover-item__content"},[t("div",{staticClass:"o-cover-item__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-item__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-item"}})],1):t("div",{staticClass:"o-cover-item__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-item"}})],1)]),e._v(" "),t("h2",{staticClass:"o-cover-item__name"},[e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-item__link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);