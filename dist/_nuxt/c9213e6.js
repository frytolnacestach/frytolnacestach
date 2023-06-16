(window.webpackJsonp=window.webpackJsonp||[]).push([[65,3,6,44,55],{357:function(t,e,n){"use strict";n.r(e);var r={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[e("h2",{staticClass:"m-headline__title"},[t._v(t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:""))]),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1"},[t._v(t._s(t.perex))]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n.r(e);var r={name:"AtomsaButtonFillFullComponent",props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{to:t.url}},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},368:function(t,e,n){"use strict";n.r(e);n(28);var r=n(10),o=(n(54),n(13),n(88),{name:"OrganismsoPlatformComponent",data:function(){return{platforms:this.platforms}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),c=o,l=n(2),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__item-content"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},393:function(t,e,n){"use strict";n.r(e);n(226),n(13),n(66),n(28);var r={name:"OrganismsoCoverItemComponent",props:{items:{type:Array,required:!0},images:{type:Array,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-user-list"},[e("div",{staticClass:"o-user-list__outer"},[e("div",{staticClass:"o-user-list__items"},t._l(t.items,(function(n){return e("div",{key:n.id,staticClass:"o-user-list__item"},[e("div",{staticClass:"o-user-list__content"},[e("div",{staticClass:"o-user-list__image loading-image -blue"},[t.images&&t.images.find((function(image){return image.id===n.id_image_cover}))?e("div",{staticClass:"o-user-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-user-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===n.id_image_cover})).source+t.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.nickname}})]):e("div",{staticClass:"o-user-list__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-user-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.nickname}})])]),t._v(" "),e("h2",{staticClass:"o-user-list__name"},[t._v("\n                        "+t._s(n.nickname)+"\n                    ")]),t._v(" "),e("NuxtLink",{staticClass:"o-user-list__link",attrs:{to:"/cestovatel/".concat(n.slug),"aria-label":"Čti více o cestovateli ".concat(n.nickname)}})],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(54),n(358)),c=n(357),l=n(393),m=n(147),d=n(368),f={name:"CestovateleIndexPage",components:{aButtonFillFull:o.default,mHeadline:c.default,oUserList:l.default,oHero:m.default,oPlatform:d.default},data:function(){return{headline:"Cestovatelé",users:this.users,images:this.images}},head:{title:"Cestovatelé | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Cestovatelé na cestovatelském portáku Frytol na cestách Ať ti neuniknou žádné novinky o cestování."},{name:"keywords",content:"Cestovatelé, uživatelé, travel hacky, rady, létání, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Cestovatelé | Frytol na cestách"},{hid:"og:description",content:"Cestovatelé na cestovatelském portáku Frytol na cestách Ať ti neuniknou žádné novinky o cestování."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/clanky")},{hid:"og:type",content:"website"}]},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://frytolnacestach-api.vercel.app/api/users");case 3:return r=e.sent,e.abrupt("return",{users:r});case 5:case"end":return e.stop()}}),e)})))()}},_=n(2),component=Object(_.a)(f,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 mb-1 mt-2"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline,modifierCSS:" -blue"}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1 px-2"},[e("div",{staticClass:"t-section__inner"},[e("oUserList",{attrs:{items:t.users,images:t.images}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);