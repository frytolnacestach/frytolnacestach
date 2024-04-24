(window.webpackJsonp=window.webpackJsonp||[]).push([[116,12,142],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var l={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},o=n(1),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},422:function(e,t,n){"use strict";n.r(t);var l={name:"SkeletonoVideoListComponent",props:{skeletonThema:{type:String,required:!0},styleThema:{type:String,required:!1}}},o=n(1),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"skeleton-o-video-list"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"skeleton-o-video-list__outer"},[t("div",{staticClass:"skeleton-o-video-list__items"},e._l(3,(function(n){return t("div",{key:n,staticClass:"skeleton-o-video-list__item"},[t("div",{staticClass:"skeleton-o-video-list__item-inner"},[t("div",{class:"skeleton-o-video-list__image loading-image"+e.skeletonThema}),e._v(" "),t("div",{staticClass:"skeleton-o-video-list__text"},[t("h3",{class:"skeleton-o-video-list__title loading-image"+e.skeletonThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},674:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(254),n(57),n(41);var l=n(422),o=n(402),r={name:"OrganismsoVideoListSmallComponent",components:{skeletonoVideoList:l.default,aImage:o.default},props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleThemaLoading:{type:String,required:!1},styleAlign:{type:String,required:!1},skeleton:{type:Boolean,required:!1},skeletonThema:{type:String,required:!1},skeletonNumber:{type:Number,required:!1}},data:function(){return{videosFiltered:[],imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:320},{mediaQueriesWidth:374,elementWidth:340},{mediaQueriesWidth:399,elementWidth:360},{mediaQueriesWidth:459,elementWidth:420},{mediaQueriesWidth:575,elementWidth:536},{mediaQueriesWidth:767,elementWidth:360},{mediaQueriesWidth:1019,elementWidth:320},{mediaQueriesWidth:1219,elementWidth:384},{mediaQueriesWidth:1399,elementWidth:442},{mediaQueriesWidth:null,elementWidth:620}],imageSizes:[{elementWidth:320,imageWidth:320,orientation:"h-"},{elementWidth:340,imageWidth:340,orientation:"h-"},{elementWidth:360,imageWidth:360,orientation:"h-"},{elementWidth:384,imageWidth:384,orientation:"h-"},{elementWidth:420,imageWidth:420,orientation:"h-"},{elementWidth:536,imageWidth:536,orientation:"h-"},{elementWidth:620,imageWidth:620,orientation:"h-"}]}},head:function(){return this.videos||null!==this.videos?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Nejnovější videa",itemListElement:this.videos.map((function(video,e){return{"@type":"ListItem",position:e+1,item:{"@id":"https://frytolnacestach.cz"+"/videa/".concat(video.slug),name:video.title}}}))}}]}:{script:[]}},watch:{videos:{handler:function(e){this.filteredVideos()},immediate:!0,deep:!0}},mounted:function(){this.filteredVideos()},methods:{filteredVideos:function(){var e=this;this.type?this.videosFiltered=this.videos.filter((function(video){return video.type===e.type})):this.videosFiltered=this.videos}}},d=n(1),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.videos&&e.skeleton?t("skeletonoVideoList",{attrs:{styleThema:e.styleThema?e.styleThema:"",skeletonThema:e.skeletonThema?e.skeletonThema:"",skeletonNumber:e.skeletonNumber}}):e._e(),e._v(" "),null===e.videosFiltered||e.skeleton?e._e():t("client-only",[t("div",{class:"o-video-list-small"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-video-list-small__outer"},[t("div",{staticClass:"o-video-list-small__items"},e._l(e.videosFiltered,(function(video){return t("div",{key:video.id,staticClass:"o-video-list-small__item print-section"},[t("div",{class:"o-video-list-small__image loading-image "+(e.styleThemaLoading?e.styleThemaLoading:"")},[e.images&&e.images.find((function(image){return image.id===video.id_image}))?t("div",{staticClass:"o-video-list-small__image-lazyload"},[t("aImage",{attrs:{alt:video.title?video.title:"Obrázek videa",author:e.images.find((function(image){return image.id===video.id_image})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===video.id_image})).source,imageName:e.images.find((function(image){return image.id===video.id_image})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-video-list-small"}})],1):t("div",{staticClass:"o-video-list-small__image-lazyload"},[t("aImage",{attrs:{alt:video.title?video.title:"Obrázek videa",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-video-list-small"}})],1),e._v(" "),video.slug?t("NuxtLink",{staticClass:"o-video-list-small__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-video-list-small__text"},[video.title?t("h3",{staticClass:"o-video-list-small__title"},[t("NuxtLink",{staticClass:"o-video-list-small__title-link",attrs:{to:"/videa/".concat(video.slug)}},[e._v(e._s(video.title))])],1):e._e()])])})),0)])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);