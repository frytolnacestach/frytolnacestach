(window.webpackJsonp=window.webpackJsonp||[]).push([[152,9,17,68,92,114,141],{401:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(402).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},402:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},406:function(e,t,n){"use strict";n.r(t);var r={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero"+e.modifierCSS+e.classCSS},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[e._v(e._s(e.headline))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero__perex",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},577:function(e,t,n){"use strict";n.r(t);n(25);var r=n(9),o=(n(36),n(58),n(12),n(38),{name:"OrganismsoPlatformComponent",data:function(){return{platforms:[]}},head:function(){return this.platforms||null!==this.platforms?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Sociální Sítě",itemListElement:this.platforms.map((function(e,t){return{"@type":"WebPage",position:t+1,name:e.name,url:e.url,description:e.perex}}))}}]}:{script:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(e){return e.json()}));case 2:e.platforms=t.sent;case 3:case"end":return t.stop()}}),t)})))()}))}),c=o,l=n(1),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-platform"},[t("div",{staticClass:"o-platform__outer"},[t("div",{staticClass:"o-platform__inner"},[t("div",{staticClass:"o-platform__items"},e._l(e.platforms,(function(e){return t("div",{key:e.id,staticClass:"o-platform__item"},[t("div",{staticClass:"o-platform__item-content"},[t("div",{staticClass:"o-platform__icon"},[t("a",{class:"o-platform__icon-file -"+e.slug,attrs:{href:e.url,target:"_blank",rel:"noopener",title:e.name}})])])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},620:function(e,t,n){"use strict";n.r(t);var r={name:"SkeletonoUserListComponent",props:{styleThema:{type:String,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-user-list"},[t("div",{staticClass:"skeleton-o-user-list__outer"},[t("div",{staticClass:"skeleton-o-user-list__items"},e._l(20,(function(n){return t("div",{key:n,staticClass:"skeleton-o-user-list__item"},[t("div",{staticClass:"skeleton-o-user-list__content-outer"},[t("div",{staticClass:"skeleton-o-user-list__content-inner"},[t("div",{class:"skeleton-o-user-list__image loading-image"+e.styleThema})])])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},658:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25),n(58);var r={name:"OrganismsoUserListComponent",components:{skeletonoUserList:n(620).default},props:{items:{type:Array,required:!0},images:{type:Array,required:!0},skeleton:{type:Boolean,required:!1}},head:function(){return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Cestovatelé",author:this.items.map((function(e){return{"@type":"Person",name:e.nickname,url:"https://frytolnacestach.cz"+"/cestovatel/".concat(e.slug)}}))}}]}:{script:[]}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[null===e.items&&!0===e.skeleton?t("skeletonoUserList",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),null!==e.items&&0!==e.items.length&&!0!==e.skeleton?t("client-only",[t("div",{staticClass:"o-user-list"},[t("div",{staticClass:"o-user-list__outer"},[t("div",{staticClass:"o-user-list__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-user-list__item"},[t("div",{staticClass:"o-user-list__content-outer"},[t("div",{staticClass:"o-user-list__content-inner"},[t("div",{staticClass:"o-user-list__image"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-user-list__image-lazyload loading-image -blue"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-user-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 160w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 186w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 216w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 230w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 224w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-230.webp 220w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-256.webp 256w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360.webp 360w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 320w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 372w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 432w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 460w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 448w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-460-2x.webp 440w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-512-2x.webp 512w,\n                                                https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-720-2x.webp 720w \n\n                                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.nickname}}),e._v(" "),t("NuxtLink",{staticClass:"o-user-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1):t("div",{staticClass:"o-user-list__image-lazyload loading-image -blue"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-user-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 186px, (max-width: 459px) 216px, (max-width: 575px) 274px, (max-width: 767px) 230px, (max-width: 991px) 224px, (max-width: 1219px) 220px, (max-width: 1399px) 256px, 360px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 160w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 186w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 216w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 274w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 230w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 224w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-230.webp 220w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-256.webp 256w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-360.webp 360w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 320w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 372w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 432w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 548w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 460w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 448w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-460-2x.webp 440w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-512-2x.webp 512w,\n                                                https://image.frytolnacestach.cz/storage/_default/s-hero-720-2x.webp 720w \n                                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.nickname}}),e._v(" "),t("NuxtLink",{staticClass:"o-user-list__image-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1)]),e._v(" "),t("div",{staticClass:"o-user-list__text"},[t("span",{staticClass:"o-user-list__nickname"},[t("NuxtLink",{staticClass:"o-user-list__nickname-link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}},[e._v(e._s(n.nickname))])],1)])])])])})),0)])])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},733:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(57),n(36),n(155)),c=n(401),l=n(658),m=n(406),d=n(577),f={name:"CestovateleIndexPage",components:{aButtonFillFull:o.default,mHeadline:c.default,oUserList:l.default,oHero:m.default,oPlatform:d.default},data:function(){return{account:[],headline:"Cestovatelé",users:[],images:[],staticUser:this.staticUser,mNavUserOpen:!1,isLoading:!1,noMoreItems:!1,page:1,perPage:20}},head:function(){var title,e,t,n,r,o;return"Cestovatelé, uživatelé, travel hacky, rady, létání, cestování, svět",t="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Cestovatelé | Frytol na cestách",r=e="Cestovatelé na cestovatelském portálu Frytol na cestách","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:e},{name:"keywords",content:"Cestovatelé, uživatelé, travel hacky, rady, létání, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:o="".concat("https://frytolnacestach.cz","/cestovatel")},{hid:"og:title",content:n},{hid:"og:description",content:r},{property:"og:image",content:t},{name:"twitter:title",content:n},{name:"twitter:description",content:r},{name:"twitter:image",content:t},{name:"twitter:url",content:o}],link:[{rel:"canonical",href:o}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:e,url:o,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadUsers();case 2:e.addScrollListener();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadUsers:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("https://api.frytolnacestach.cz/api/users?showType=list&page=".concat(e.page,"&items=").concat(e.perPage));case 3:n=t.sent,r=n.data,e.users=e.users.concat(r),(0===r.length||r.length<e.perPage)&&(e.noMoreItems=!0),e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},addScrollListener:function(){window.addEventListener("scroll",this.handleScroll)},removeScrollListener:function(){window.removeEventListener("scroll",this.handleScroll)},loadMoreItems:function(){this.isLoading||this.noMoreItems||(this.page++,this.loadUsers())},handleScroll:function(){if(!this.isLoading&&!this.noMoreItems){var e=window.innerHeight,t=document.documentElement.scrollHeight;(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)+e>=t-document.querySelector(".t-footer").offsetHeight&&(this.page++,this.loadUsers())}}},beforeDestroy:function(){this.removeScrollListener()},watch:{"$store.state.account":{deep:!0,immediate:!0,handler:function(){this.account=this.$store.state.account}}}},h=n(1),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section print-section"},[t("section",{staticClass:"t-section -p0 mb-1 mt-2"},[t("div",{staticClass:"t-section__inner"},[e.account&&0===e.account.length?t("oHero",{attrs:{headline:e.headline,perex:"K cestovatelům na našem cestovatelském portálu se může připojit každý. Takže pokud zatím nemáš účet, stačí se <a href='https://www.frytolnacestach.cz/ucet/registrace'>registrovat</a>, a pokud již účet máš, jednoduše se <a href='https://www.frytolnacestach.cz/ucet/prihlaseni'>přihlásit</a>.",modifierCSS:" -blue -w640",classCSS:" mt-2"}}):e._e(),e._v(" "),e.account&&0!==e.account.length?t("oHero",{attrs:{headline:e.headline,perex:"Podívej se na další cestovatele, na místa, která navštívili, a jejich úspěchy.",modifierCSS:" -blue -w640",classCSS:" mt-2"}}):e._e()],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oUserList",{attrs:{items:e.users,images:e.images}}),e._v(" "),e.isLoading?t("oUserList",{attrs:{items:null,images:null,skeleton:!0}}):e._e(),e._v(" "),e.isLoading||e.noMoreItems?e._e():t("div",{staticClass:"flex flex-center my-4"},[t("span",{staticClass:"a-button-fill -big -blue",on:{click:e.loadMoreItems}},[e._v("Načíst další položky")])])],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);