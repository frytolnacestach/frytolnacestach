(window.webpackJsonp=window.webpackJsonp||[]).push([[224,9,17,58,67,82,91,115,142],{403:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},408:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},421:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoVideoListComponent",props:{skeletonThema:{type:String,required:!0},styleThema:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"skeleton-o-video-list"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"skeleton-o-video-list__outer"},[t("div",{staticClass:"skeleton-o-video-list__items"},e._l(3,(function(n){return t("div",{key:n,staticClass:"skeleton-o-video-list__item"},[t("div",{staticClass:"skeleton-o-video-list__item-inner"},[t("div",{class:"skeleton-o-video-list__image loading-image"+e.skeletonThema}),e._v(" "),t("div",{staticClass:"skeleton-o-video-list__text"},[t("h3",{class:"skeleton-o-video-list__title loading-image"+e.skeletonThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},426:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoNoneContentComponent",props:{text:{type:Array,required:!0},styleThema:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-none-content"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-none-content__outer"},[t("div",{class:"o-none-content__inner"+(e.styleGap?e.styleGap:"")},[t("span",[e._v(e._s(e.text))])])])])}),[],!1,null,null,null);t.default=component.exports},429:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25),n(254),n(58),n(41);var r={name:"OrganismsoVideoListComponent",components:{skeletonoVideoList:n(421).default},props:{videos:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!1},styleThema:{type:String,required:!1},styleThemaLoading:{type:String,required:!1},styleAlign:{type:String,required:!1},skeleton:{type:Boolean,required:!1},skeletonThema:{type:String,required:!1},skeletonNumber:{type:Number,required:!1}},data:function(){return{videosFiltered:[]}},head:function(){var e=this;return this.videos||null!==this.videos?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Videa",itemListElement:this.videos.map((function(video,t){return{"@type":"VideoObject",position:t+1,name:video.title,thumbnailUrl:e.images&&e.images.find((function(image){return image.id===video.id_image}))?"https://image.frytolnacestach.cz/storage"+(e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name)+".webp":"",url:"https://frytolnacestach.cz"+"/videa/".concat(video.slug),description:video.perex,uploadDate:video.created_at}}))}}]}:{script:[]}},watch:{videos:{handler:function(e){this.filteredVideos()},immediate:!0,deep:!0}},mounted:function(){this.filteredVideos()},methods:{filteredVideos:function(){var e=this;this.type?this.videosFiltered=this.videos.filter((function(video){return video.type===e.type})):this.videosFiltered=this.videos}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.videos&&e.skeleton?t("skeletonoVideoList",{attrs:{styleThema:e.styleThema?e.styleThema:"",skeletonThema:e.skeletonThema?e.skeletonThema:"",skeletonNumber:e.skeletonNumber}}):e._e(),e._v(" "),null===e.videosFiltered||e.skeleton?e._e():t("client-only",[t("div",{class:"o-video-list"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")},[t("div",{staticClass:"o-video-list__outer"},[t("div",{staticClass:"o-video-list__items"},e._l(e.videosFiltered,(function(video){return t("div",{key:video.id,staticClass:"o-video-list__item print-section"},[t("div",{staticClass:"o-video-list__item-inner"},[t("div",{class:"o-video-list__image loading-image "+(e.styleThemaLoading?e.styleThemaLoading:"")},[e.images&&e.images.find((function(image){return image.id===video.id_image}))?t("div",{staticClass:"o-video-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===video.id_image})).source+"h-"+e.images.find((function(image){return image.id===video.id_image})).name,"-1240-2x.webp 1240w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===video.id_image})).source+e.images.find((function(image){return image.id===video.id_image})).name,".webp"),alt:video.title?video.title:"Obrázek videa"}})]):t("div",{staticClass:"o-video-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-video-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 360px, (max-width: 1019px) 320px, (max-width: 1219px) 384px, (max-width: 1399px) 442px, 620px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-320.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-340.webp 340w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-384.webp 384w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-620.webp 620w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-640-2x.webp 640w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-680-2x.webp 680w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-768-2x.webp 768w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                            https://image.frytolnacestach.cz/storage/_default/h-hero-1240-2x.webp 1240w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:video.title?video.title:"Obrázek videa"}})]),e._v(" "),video.slug?t("NuxtLink",{staticClass:"o-video-list__image-link",attrs:{to:"/videa/".concat(video.slug),"aria-label":"Koukni se na video ".concat(video.title)}}):e._e()],1),e._v(" "),t("div",{staticClass:"o-video-list__text"},[video.title?t("h3",{staticClass:"o-video-list__title"},[t("NuxtLink",{staticClass:"o-video-list__title-link",attrs:{to:"/videa/".concat(video.slug)}},[e._v(e._s(video.title))])],1):e._e()])])])})),0)])])])],1)}),[],!1,null,null,null);t.default=component.exports},436:function(e,t,n){"use strict";n.r(t);n(58),n(41),n(12),n(25);var r=n(9),o=(n(22),n(75),n(253),n(36),{name:"OrganismsFormFilterPlaceComponent",props:{styleThema:{type:String,required:!1},typePlaceFilterName:{type:String,required:!0},typePlaceFilter:{type:String,required:!0}},data:function(){return{filterPlaces:[],filterSelect:""}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"continents"===e.typePlaceFilter?(n=e.$route.query.filterIDcontinent)&&(e.filterSelect=parseInt(n,10)):"states"===e.typePlaceFilter&&(r=e.$route.query.filterIDstate)&&(e.filterSelect=parseInt(r,10)),t.next=3,e.loadPlaces();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("continents"!==e.typePlaceFilter){t.next=8;break}return t.next=3,e.$axios.get("https://api.frytolnacestach.cz/api/places-continents?showType=filter");case 3:n=t.sent,r=n.data,e.filterPlaces=r,t.next=14;break;case 8:if("states"!==e.typePlaceFilter){t.next=14;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/places-states?showType=filter");case 11:n=t.sent,o=n.data,e.filterPlaces=o;case 14:e.updateParentVariable(e.filterSelect);case 15:case"end":return t.stop()}}),t)})))()},handleFilterSelectChange:function(){var e=this.filterSelect;"continents"===this.typePlaceFilter?this.$router.replace({query:{filterIDcontinent:e}}):"states"===this.typePlaceFilter&&this.$router.replace({query:{filterIDstate:e}}),this.updateParentVariable(e)},updateParentVariable:function(e){var t=this.filterPlaces.find((function(t){return t.id===e}));t?this.$emit("update",{id:e,name:t.name}):this.$emit("update",{id:null,name:null})}}}),l=n(1),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-form-filter-place"+(e.styleThema?e.styleThema:""),attrs:{role:"filter"}},[t("div",{staticClass:"o-form-filter-place__outer"},[t("div",{staticClass:"o-form-filter-place__inner"},[t("div",{staticClass:"o-form-filter-place__form"},[t("div",{class:"m-select"+(e.styleThema?e.styleThema:"")},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.filterSelect,expression:"filterSelect"}],staticClass:"m-select__select",attrs:{name:"filterSelect"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filterSelect=t.target.multiple?n:n[0]},e.handleFilterSelectChange]}},[t("option",{attrs:{value:""}},[e._v(e._s(e.typePlaceFilterName))]),e._v(" "),e._l(e.filterPlaces,(function(n){return t("option",{key:n.id,domProps:{value:n.id}},[e._v(e._s(n.name))])}))],2)])])])])])}),[],!1,null,null,null);t.default=component.exports},579:function(e,t,n){"use strict";n.r(t);n(25);var r=n(9),o=(n(36),n(58),n(12),n(38),{name:"OrganismsoPlatformComponent",data:function(){return{platforms:[]}},head:function(){return this.platforms||null!==this.platforms?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Sociální Sítě",itemListElement:this.platforms.map((function(e,t){return{"@type":"WebPage",position:t+1,name:e.name,url:e.url,description:e.perex}}))}}]}:{script:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(e){return e.json()}));case 2:e.platforms=t.sent;case 3:case"end":return t.stop()}}),t)})))()}))}),l=o,c=n(1),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-platform"},[t("div",{staticClass:"o-platform__outer"},[t("div",{staticClass:"o-platform__inner"},[t("div",{staticClass:"o-platform__items"},e._l(e.platforms,(function(e){return t("div",{key:e.id,staticClass:"o-platform__item"},[t("div",{staticClass:"o-platform__item-content"},[t("div",{staticClass:"o-platform__icon"},[t("a",{class:"o-platform__icon-file -"+e.slug,attrs:{href:e.url,target:"_blank",rel:"noopener",title:e.name}})])])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},752:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(36),n(22),n(75),n(57),n(41),n(12),n(58),n(154),n(25),n(155)),l=n(403),c=n(408),d=n(436),m=n(426),h=n(579),f=n(429),_={name:"VideaIndexPage",components:{aButtonFillFull:o.default,mHeadline:l.default,oFormFilterPlace:d.default,oHero:c.default,oNoneContent:m.default,oPlatform:h.default,oVideoList:f.default},data:function(){return{headline:"Videa",headlineFilter:"Videa",filterPlaceName:"",filterPlace:"",videos:[],images:[],isLoading:!0,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e,t,n,r,o;return"cestovatelská videa, youtube, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="".concat(this.headlineFilter," | Cestovatelský portál Frytol na cestách"),r=e="Sleduj cestovatelská ".concat("Videa"!==this.headlineFilter?this.headlineFilter.replace("Videa","videa")+" na cestovatelském portálu Frytol na cestách.":"videa z různích míst naší krásné planety na cestovatelském portálu Frytol na cestách."),"website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"cestovatelská videa, youtube, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:o="".concat("https://frytolnacestach.cz","/videa")},{hid:"og:title",content:n},{hid:"og:description",content:r},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:r},{name:"twitter:image",content:t},{name:"twitter:url",content:o}],link:[{rel:"canonical",href:o}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,url:o,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}},updated:function(){window.lazySizes&&window.lazySizes.update()},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$route.query.filterIDstate){t.next=4;break}return t.next=4,e.loadVideos();case 4:e.addScrollListener();case 5:case"end":return t.stop()}}),t)})))()},methods:{loadVideos:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.isLoading=!0,null===t.filterPlace){n.next=7;break}return n.next=4,t.$axios.get("https://api.frytolnacestach.cz/api/videos?showType=list&idState=".concat(t.filterPlace,"&page=").concat(t.page,"&items=").concat(t.perPage));case 4:r=n.sent,n.next=10;break;case 7:return n.next=9,t.$axios.get("https://api.frytolnacestach.cz/api/videos?showType=list&page=".concat(t.page,"&items=").concat(t.perPage));case 9:r=n.sent;case 10:if(o=r.data,!((l=o.map((function(e){return e.id_image})).filter((function(e){return null!=e&&""!==e}))).length>0)){n.next=21;break}return n.next=15,t.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(l.join(",")));case 15:c=n.sent,d=c.data,t.images=t.images.concat(d),t.videos=e?o:t.videos.concat(o),n.next=22;break;case 21:t.videos=e?o:t.videos.concat(o);case 22:(0===o.length||o.length<t.perPage)&&(t.noMoreItems=!0),t.isLoading=!1;case 24:case"end":return n.stop()}}),n)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadVideos())},updateHeadline:function(){this.filterPlaceName?this.headlineFilter=this.headline+" ze státu "+this.filterPlaceName:this.headlineFilter=this.headline},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadVideos())}},filterUpdate:function(e){this.filterPlace=e.id,this.filterPlaceName=e.name,this.videos=[],this.images=[],this.isLoading=!1,this.noMoreItems=!1,this.page=1,this.perPage=20,this.loadVideos(!0),this.updateHeadline()}},beforeDestroy:function(){this.removeScrollListener()}},y=n(1),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -p0 mt-2 mb-4"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:e.headlineFilter,perex:"Vítej na našem cestovatelském portálu! Podívej se na naše videa plná dobrodružství a inspirace k cestování. Objevuj spolu s námi nejzajímavější místa na světě prostřednictvím autentických příběhů a praktických tipů. Připrav se na vlastní nezapomenutelné dobrodružství díky našim videím plným vzrušujících zážitků. Užívej si každý moment na cestách a objevuj krásy světa s námi!",modifierCSS:" -gray -w640"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 hidden-print"},[t("div",{staticClass:"t-section__inner"},[t("oFormFilterPlace",{attrs:{styleThema:" -gray",typePlaceFilterName:"Vybrat stát",typePlaceFilter:"states"},on:{update:e.filterUpdate}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 py-1 px-2 print-section"},[t("div",{staticClass:"t-section__inner"},[t("oVideoList",{attrs:{videos:e.videos,images:e.images,styleThemaLoading:" -gray"}}),e._v(" "),e.isLoading?t("oVideoList",{attrs:{videos:null,images:null,skeletonThema:" -skeleton-gray",skeletonNumber:"9",skeleton:!0}}):e._e(),e._v(" "),e.videos&&0===e.videos.length&&!e.isLoading?t("oNoneContent",{attrs:{text:"Bohužel zde nejsou žádné videa",styleThema:" -green",styleGap:" px-1"}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -gray",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)]),e._v(" "),t("section",{staticClass:"t-section -p0 py-1 mt-2 px-2 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -left",styleGap:"mb-1"}}),e._v(" "),t("oPlatform"),e._v(" "),t("div",{staticClass:"flex flex-center mb-4"},[t("aButtonFillFull",{attrs:{target:"internal",url:"/social",text:"Více informací o platformách",styleThema:" -gray"}})],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);