(window.webpackJsonp=window.webpackJsonp||[]).push([[163,40,67,129],{408:function(e,t,n){"use strict";n.r(t);var o={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},432:function(e,t,n){"use strict";n.r(t);var o={name:"SkeletonoCoverItemComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-item"},[t("div",{staticClass:"skeleton-o-cover-item__outer"},[t("div",{staticClass:"skeleton-o-cover-item__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-item__item"},[t("div",{staticClass:"skeleton-o-cover-item__content"},[t("div",{class:"skeleton-o-cover-item__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},435:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25);var o={name:"OrganismsoCoverItemComponent",components:{skeletonoCoverItem:n(432).default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0},skeleton:{type:Boolean,required:!1}}},r=n(1),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.items&&!0===e.skeleton?t("skeletonoCoverItem",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.items&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-cover-item"},[t("div",{staticClass:"o-cover-item__outer"},[t("div",{staticClass:"o-cover-item__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-item__item"},[t("div",{staticClass:"o-cover-item__content"},[t("div",{staticClass:"o-cover-item__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-172.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-172.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 216w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 230w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 224w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-224.webp 220w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 256w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-344-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-344-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 432w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 460w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 448w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-448-2x.webp 440w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 512w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-172.webp 160w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-172.webp 172w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 216w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 230w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 224w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-224.webp 220w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 256w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-344-2x.webp 320w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-344-2x.webp 344w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 432w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 460w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 448w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-448-2x.webp 440w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 512w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-cover-item__name"},[e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-item__link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}})],1)])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},741:function(e,t,n){"use strict";n.r(t);var o=n(18),r=n(9),c=(n(12),n(27),n(28),n(57),n(41),n(58),n(154),n(36),n(435)),m=n(408),d={name:"FaunaIndexPage",components:{oCoverItem:c.default,oHero:m.default},data:function(){return{faunas:[],images:[],isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e;return"Fauna, co žije?, Zvířata ve světě, informace o zvířatech, plánuj cestu, cestovatelský portál, cestování, svět","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Fauna co žije ve světě | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:e="Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách."},{name:"keywords",content:"Fauna, co žije?, Zvířata ve světě, informace o zvířatech, plánuj cestu, cestovatelský portál, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:e},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/fauna")},{hid:"og:type",content:"website"}]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadItems();case 2:e.addScrollListener();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadItems:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,m,d,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Promise.all([e.$axios.get("https://api.frytolnacestach.cz/api/faunas?showType=list&page=".concat(e.page,"&items=").concat(e.perPage))]);case 3:if(n=t.sent,r=Object(o.a)(n,1),c=r[0],m=c.data,!((d=m.map((function(e){return e.id_image_cover})).filter((function(e){return null!=e&&""!==e}))).length>0)){t.next=17;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(d.join(",")));case 11:l=t.sent,f=l.data,e.images=e.images.concat(f),e.faunas=e.faunas.concat(m),t.next=18;break;case 17:e.faunas=e.faunas.concat(m);case 18:(0===m.length||m.length<e.perPage)&&(e.noMoreItems=!0),e.isLoading=!1;case 20:case"end":return t.stop()}}),t)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadItems())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadItems())}}},beforeDestroy:function(){this.removeScrollListener()}},l=n(1),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section print-section"},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:"Fauna",perex:"Ponoř se do světa fauny a objev, kdo s námi sdílí tento planetární domov. S cestovatelským portále Frytol na cestách získáš poutavé informace a tipy, na co si dávat pozor. Vydej se s námi na nezapomenutelnou cestu do světa divokého života!",modifierCSS:" -green -w640"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverItem",{attrs:{items:e.faunas,images:e.images,type:"fauna"}}),e._v(" "),e.isLoading?t("oCoverItem",{attrs:{items:null,images:null,type:"fauna",skeleton:!0}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -green",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);