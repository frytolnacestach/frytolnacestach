(window.webpackJsonp=window.webpackJsonp||[]).push([[160,47,68,131],{407:function(e,t,n){"use strict";n.r(t);var o={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},612:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoCoverTitleItemComponent",props:{styleThema:{type:String,required:!0}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-title-item"},[t("div",{staticClass:"skeleton-o-cover-title-item__outer"},[t("div",{staticClass:"skeleton-o-cover-title-item__items"},e._l(15,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-title-item__item"},[t("div",{staticClass:"skeleton-o-cover-title-item__content"},[t("div",{class:"skeleton-o-cover-title-item__image loading-image"+e.styleThema})]),e._v(" "),t("div",{staticClass:"skeleton-o-cover-title-item__name"},[t("div",{class:"skeleton-o-cover-title-item__name-link loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},653:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25),n(58);var o={name:"OrganismsoCoverTitleItemComponent",components:{skeletonoCoverTitleItem:n(612).default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}},head:function(){return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"wall_sockets"===this.type?"Elektrické zásuvky":"",itemListElement:this.items.map((function(e,t){return{"@type":"ListItem",position:t+1,item:{"@id":"https://frytolnacestach.cz"+"/elektricka-zasuvka/".concat(e.slug),name:e.name}}}))}}]}:{script:[]}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.items&&!0===e.skeleton?t("skeletonoCoverTitleItem",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.items&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-cover-title-item"},[t("div",{staticClass:"o-cover-title-item__outer"},[t("div",{staticClass:"o-cover-title-item__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-title-item__item"},[t("div",{staticClass:"o-cover-title-item__content"},[t("div",{staticClass:"o-cover-title-item__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-title-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-title-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-172.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-172.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-344-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-344-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-title-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-title-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-172.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-172.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-274.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-344-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-344-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-548-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-720-2x.webp 720w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/no-image.webp",alt:n.name}})]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-title-item__link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}})],1)]),e._v(" "),t("h2",{staticClass:"o-cover-title-item__name"},[t("NuxtLink",{staticClass:"o-cover-title-item__name-link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}},[e._v(e._s(n.name))])],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},739:function(e,t,n){"use strict";n.r(t);var o=n(18),c=n(9),r=(n(12),n(27),n(28),n(57),n(41),n(58),n(154),n(36),n(653)),l=n(407),m={name:"ElektrickeZasuvkyIndexPage",components:{oCoverTitleItem:r.default,oHero:l.default},data:function(){return{wallSockets:[],images:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e,t,n,o,c;return"Elektrické zásuvky, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Elektrické zásuvky | Cestovatelský portál Frytol na cestách",o=e="Jaké elektrické zásuvky se kde používají? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"Elektrické zásuvky, výrobky, tradiční výroba, informace o výrobcích, plánuj cestu, cestovatelský portál, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:c="".concat("https://frytolnacestach.cz","/elektricka-zasuvka")},{hid:"og:title",content:n},{hid:"og:description",content:o},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:o},{name:"twitter:image",content:t},{name:"twitter:url",content:c}],link:[{rel:"canonical",href:c}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,url:c,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadItems();case 2:e.addScrollListener();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadItems:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,r,l,m,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Promise.all([e.$axios.get("https://api.frytolnacestach.cz/api/wall-sockets?showType=list&page=".concat(e.page,"&items=").concat(e.perPage))]);case 3:if(n=t.sent,c=Object(o.a)(n,1),r=c[0],l=r.data,!((m=l.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){t.next=17;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(m.join(",")));case 11:d=t.sent,f=d.data,e.images=e.images.concat(f),e.wallSockets=e.wallSockets.concat(l),t.next=18;break;case 17:e.wallSockets=e.wallSockets.concat(l);case 18:(0===l.length||l.length<e.perPage)&&(e.noMoreItems=!0),e.isLoading=!1;case 20:case"end":return t.stop()}}),t)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadItems())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadItems())}}},beforeDestroy:function(){this.removeScrollListener()}},d=n(1),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("div",{staticClass:"t-main__content"},[t("section",{staticClass:"t-section print-section"},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:"Elektrické zásuvky",perex:"Plánujete cestu mimo střední Evropu a nevíte, jakou redukci pro svá elektronická zařízení si pořídit? Typy zásuvek a používané normy se dozvíte na cestovatelském portálu Frytol na cestách.",modifierCSS:" -green -w640",classCSS:" mt-2"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverTitleItem",{attrs:{items:e.wallSockets,images:e.images,type:"elektricka-zasuvka"}}),e._v(" "),e.isLoading?t("oCoverTitleItem",{attrs:{items:null,images:null,type:"wall-sockets",skeleton:!0}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)])])])])}),[],!1,null,null,null);t.default=component.exports}}]);