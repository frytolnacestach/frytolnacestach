(window.webpackJsonp=window.webpackJsonp||[]).push([[165,12,43,70,129],{402:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var o={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},408:function(e,t,n){"use strict";n.r(t);var o={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},428:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoCoverItemComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-item"},[t("div",{staticClass:"skeleton-o-cover-item__outer"},[t("div",{staticClass:"skeleton-o-cover-item__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-item__item"},[t("div",{staticClass:"skeleton-o-cover-item__content"},[t("div",{class:"skeleton-o-cover-item__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},433:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(25),n(58),n(57);var o=n(428),r={name:"OrganismsoCoverItemComponent",components:{aImage:n(402).default,skeletonoCoverItem:o.default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}},data:function(){return{imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:160},{mediaQueriesWidth:374,elementWidth:172},{mediaQueriesWidth:399,elementWidth:186},{mediaQueriesWidth:459,elementWidth:216},{mediaQueriesWidth:575,elementWidth:274},{mediaQueriesWidth:767,elementWidth:230},{mediaQueriesWidth:991,elementWidth:224},{mediaQueriesWidth:1219,elementWidth:220},{mediaQueriesWidth:1399,elementWidth:256},{mediaQueriesWidth:null,elementWidth:360}],imageSizes:[{elementWidth:160,imageWidth:166,orientation:"s-"},{elementWidth:172,imageWidth:186,orientation:"s-"},{elementWidth:186,imageWidth:186,orientation:"s-"},{elementWidth:216,imageWidth:224,orientation:"s-"},{elementWidth:274,imageWidth:274,orientation:"s-"},{elementWidth:230,imageWidth:240,orientation:"s-"},{elementWidth:224,imageWidth:224,orientation:"s-"},{elementWidth:220,imageWidth:224,orientation:"s-"},{elementWidth:256,imageWidth:256,orientation:"s-"},{elementWidth:360,imageWidth:360,orientation:"s-"}]}},head:function(){var e=this;return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"jidlo"===this.type?"Jídla":"fauna"===this.type?"Fauna":"flora"===this.type?"Flora":"znacka"===this.type?"Výrobky":"retezec"===this.type?"Řetězce":"cestovatelsky-slovnik"===this.type?"Cestovatelský slovník":"udalost"===this.type?"Události":"",itemListElement:this.items.map((function(t,n){return{"@type":"ListItem",position:n+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/".concat(e.type,"/").concat(t.slug),name:t.name}}}))}}]}:{script:[]}}},c=n(1),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.items&&!0===e.skeleton?t("skeletonoCoverItem",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.items&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-cover-item"},[t("div",{staticClass:"o-cover-item__outer"},[t("div",{staticClass:"o-cover-item__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-item__item"},[t("div",{staticClass:"o-cover-item__content"},[t("div",{staticClass:"o-cover-item__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-item__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",author:e.images.find((function(image){return image.id===n.id_image_cover})).author,lazy:!0,imageSource:e.images.find((function(image){return image.id===n.id_image_cover})).source,imageName:e.images.find((function(image){return image.id===n.id_image_cover})).name,sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-item"}})],1):t("div",{staticClass:"o-cover-item__image-lazyload"},[t("aImage",{attrs:{alt:n.name?n.name:"Úvodní obrázek",lazy:!0,imageSource:"/_default/",imageName:"no-image",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-cover-item"}})],1)]),e._v(" "),t("h2",{staticClass:"o-cover-item__name"},[e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-item__link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},741:function(e,t,n){"use strict";n.r(t);var o=n(18),r=n(9),c=(n(12),n(27),n(28),n(58),n(41),n(57),n(154),n(36),n(433)),l=n(408),m={name:"FloraIndexPage",components:{oCoverItem:c.default,oHero:l.default},data:function(){return{floras:[],images:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e,t,n,o,r;return"Flóra, kde co roste?, Jedovaté rostliny, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Flóra co roste ve světě | Frytol na cestách",o=e="Jaké flóra kde roste? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"Flóra, kde co roste?, Jedovaté rostliny, informace o rostlinách, plánuj cestu, cestovatelský portál, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:r="".concat("https://frytolnacestach.cz","/flora")},{hid:"og:title",content:n},{hid:"og:description",content:o},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:o},{name:"twitter:image",content:t},{name:"twitter:url",content:r}],link:[{rel:"canonical",href:r}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,url:r,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadItems();case 2:e.addScrollListener();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadItems:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,l,m,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Promise.all([e.$axios.get("https://api.frytolnacestach.cz/api/floras?showType=list&page=".concat(e.page,"&items=").concat(e.perPage))]);case 3:if(n=t.sent,r=Object(o.a)(n,1),c=r[0],l=c.data,!((m=l.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){t.next=17;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(m.join(",")));case 11:d=t.sent,h=d.data,e.images=e.images.concat(h),e.floras=e.floras.concat(l),t.next=18;break;case 17:e.floras=e.floras.concat(l);case 18:(0===l.length||l.length<e.perPage)&&(e.noMoreItems=!0),e.isLoading=!1;case 20:case"end":return t.stop()}}),t)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadItems())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadItems())}}},beforeDestroy:function(){this.removeScrollListener()}},d=n(1),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section print-section"},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:"Flóra",perex:"Otevři okno do barevného světa flory a objev, jaké rostliny ozdobují naši planetu. S cestovatelským portále Frytol na cestách získáš zajímavé informace a tipy, jak si vychutnat krásy rostlinného života. Připoj se k nám na nezapomenutelnou cestu do světa rozmanité flóry!",modifierCSS:" -green -w640",classCSS:" mt-2"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverItem",{attrs:{items:e.floras,images:e.images,type:"flora"}}),e._v(" "),e.isLoading?t("oCoverItem",{attrs:{items:null,images:null,type:"flora",skeleton:!0}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)])])])])}),[],!1,null,null,null);t.default=component.exports}}]);