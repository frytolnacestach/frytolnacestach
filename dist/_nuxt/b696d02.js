(window.webpackJsonp=window.webpackJsonp||[]).push([[100,12],{402:function(e,t,r){"use strict";r.r(t);r(154),r(57),r(58);var n={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},m=r(1),component=Object(m.a)(n,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.author,fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},693:function(e,t,r){"use strict";r.r(t);r(253),r(12),r(25),r(254);var n={name:"OrganismsoSidebarMapMapyComponent",components:{aImage:r(402).default},props:{idImageMap:{type:Number,required:!0},url:{type:String,required:!0},title:{type:String,required:!0},images:{type:Array,required:!0}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:null,elementWidth:320}],imageSizes:[{elementWidth:320,imageWidth:320,orientation:"h-"}]}}},m=r(1),component=Object(m.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-sidebar-map-mapy"},[t("div",{staticClass:"o-sidebar-map-mapy__outer"},[t("div",{staticClass:"o-sidebar-map-mapy__inner"},[t("div",{staticClass:"o-sidebar-map-mapy__map"},[t("div",{staticClass:"o-sidebar-map-mapy__image loading-image -gray"},[e.images&&e.images.find((function(image){return image.id===e.idImageMap}))?t("div",{staticClass:"o-sidebar-map-mapy__image-lazyload"},[t("aImage",{attrs:{alt:e.title?e.title:"Úvodní obrázek",author:e.images.find((function(image){return image.id===e.idImageMap})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===e.idImageMap})).source,imageName:e.images.find((function(image){return image.id===e.idImageMap})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-sidebar-map-mapy"}})],1):t("div",{staticClass:"o-sidebar-map-mapy__image-lazyload"},[t("aImage",{attrs:{alt:e.title?e.title:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-sidebar-map-mapy"}})],1),e._v(" "),t("a",{staticClass:"o-sidebar-map-mapy__image-link",attrs:{href:e.url,target:"_blank",rel:"noopener"}})])]),e._v(" "),t("a",{staticClass:"o-sidebar-map-mapy__link",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v("zobrazit mapu na mapy.cz")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);