(window.webpackJsonp=window.webpackJsonp||[]).push([[75,19],{372:function(e,t,n){"use strict";n.r(t);n(226),n(13),n(66),n(28);var o={name:"OrganismsoCoverItemComponent",props:{items:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0}}},c=n(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-item"},[t("div",{staticClass:"o-cover-item__outer"},[t("div",{staticClass:"o-cover-item__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-item__item"},[t("div",{staticClass:"o-cover-item__content"},[t("div",{staticClass:"o-cover-item__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-item__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-item__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-cover-item__name"},[e._v("\n                        "+e._s(n.name)+"\n                    ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-item__link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o jídle ".concat(n.name)}})],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports},431:function(e,t,n){"use strict";n.r(t);var o=n(23),c=n(10),r=(n(54),n(13),n(29),n(30),n(372)),m=n(147),d={name:"FaunaIndexPage",components:{oCoverItem:r.default,oHero:m.default},methods:{},data:function(){return{}},head:{title:"Fauna | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách."},{name:"keywords",content:"Fauna, co žije?, Zvířata ve světě, informace o zvířatech, plánuj cestu, cestovatelský portál, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Fauna | Frytol na cestách"},{hid:"og:description",content:"Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/fauna")},{hid:"og:type",content:"website"}]},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,r,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,Promise.all([n.$get("https://frytolnacestach-api.vercel.app/api/faunas"),n.$get("https://frytolnacestach-api.vercel.app/api/images")]);case 3:return c=t.sent,r=Object(o.a)(c,2),m=r[0],d=r[1],t.abrupt("return",{fauna:m,images:d});case 8:case"end":return t.stop()}}),t)})))()}},l=n(2),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -green -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section py-4"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:"Fauna",perex:"Jaké fauna kde žije? A na jakou si dát pozor? To zjistíte na této stránce cestovatelského portálu Frytol na cestách.",modifierCSS:" -green -w600"}})],1)]),e._v(" "),t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverItem",{attrs:{items:e.fauna,images:e.images,type:"fauna"}})],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);