(window.webpackJsonp=window.webpackJsonp||[]).push([[57,6,13,18],{328:function(e,t,n){"use strict";n.r(t);n(210),n(13),n(65),n(27);var c={name:"OrganismsoCoverPlaceComponent",props:{places:{type:Array,required:!0},images:{type:Array,required:!0},type:{type:String,required:!0}}},r=n(6),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-cover-place"},[t("div",{staticClass:"o-cover-place__outer"},[t("div",{staticClass:"o-cover-place__items"},e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place__item"},[t("div",{staticClass:"o-cover-place__content"},[t("div",{staticClass:"o-cover-place__image loading-image"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-1080-2x.webp 1080w\n                                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-place__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 180px, (max-width: 575px) 280px, (max-width: 1920px) 380px, 540px","data-srcset":"\n                                    https://image.frytolnacestach.cz/storage/_default/hero-180.webp 180w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-280.webp 280w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-380.webp 380w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-540.webp 540w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-360-2x.webp 360w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-560-2x.webp 560w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-760-2x.webp 760w,\n                                    https://image.frytolnacestach.cz/storage/_default/hero-1080-2x.webp 1080w\n                                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-cover-place__name"},[e._v("\n                        "+e._s(n.name)+"\n                    ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}})],1)])})),0)])])}),[],!1,null,null,null);t.default=component.exports},329:function(e,t,n){"use strict";n.r(t);var c={name:"OrganismsoHeroPlaceTypeComponent",props:{styleType:{type:String,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(6),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{class:"o-hero-place-type"+e.styleType},[t("div",{staticClass:"o-hero-place-type__inner"},[e._m(0),e._v(" "),t("h1",{staticClass:"o-hero-place-type__headline"},[e._v(e._s(e.title))]),e._v(" "),e.perex?t("p",{staticClass:"o-hero-place-type__perex"},[e._v(e._s(e.perex))]):e._e()])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-hero-place-type__image"},[e("div",{staticClass:"o-hero-place-type__image-file"})])}],!1,null,null,null);t.default=component.exports},346:function(e,t,n){"use strict";n.r(t);var c=n(23),r=n(10),o=(n(53),n(13),n(28),n(29),{name:"MoleculesmNavAlphabetComponent",props:{alphabet:{type:Array,required:!0}},methods:{getPlaces:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.all([t.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-cities-initial/".concat(e))]);case 3:r=n.sent,o=Object(c.a)(r,1),l=o[0],t.placesCities=l,t.selectedLetter=e,n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},isActive:function(e){return e===this.selectedLetter}}}),l=n(6),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-nav-alphabet"},[t("div",{staticClass:"m-nav-alphabet__outer"},[t("div",{staticClass:"m-nav-alphabet__inner"},[t("ul",{staticClass:"m-nav-alphabet__items"},e._l(e.alphabet,(function(n){return t("li",{key:n,staticClass:"m-nav-alphabet__item",class:{"-active":e.isActive(n)}},[t("a",{staticClass:"m-nav-alphabet__link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.getPlaces(n)}}},[t("span",{staticClass:"m-nav-alphabet__span"},[e._v(e._s(n))])])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},371:function(e,t,n){"use strict";n.r(t);var c=n(23),r=n(10),o=(n(53),n(13),n(28),n(29),n(346)),l=n(328),m=n(329),d={name:"SvetMestoIndexPage",components:{mNavAlphabet:o.default,oCoverPlace:l.default,oHeroPlaceType:m.default},methods:{getPlaces:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Promise.all([t.$axios.$get("https://frytolnacestach-api.vercel.app/api/places-cities-initial/".concat(e))]);case 3:r=n.sent,o=Object(c.a)(r,1),l=o[0],t.placesCities=l,t.selectedLetter=e,n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},isActive:function(e){return e===this.selectedLetter}},data:function(){return{alphabet:["A","B","C","D","E","F","G","H","CH","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],placesCities:[],images:[],selectedLetter:"A"}},head:{title:"Města | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Oběvuj svět a jeho místá s Frytolem na cestách"},{name:"keywords",content:"města, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Města | Frytol na cestách"},{hid:"og:description",content:"Oběvuj svět a jeho místá s Frytolem na cestách"},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/svet/mesto")},{hid:"og:type",content:"website"}]},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,Promise.all([n.$get("https://frytolnacestach-api.vercel.app/api/places-cities-initial/A"),n.$get("https://frytolnacestach-api.vercel.app/api/images")]);case 3:return r=t.sent,o=Object(c.a)(r,2),l=o[0],m=o[1],t.abrupt("return",{placesCities:l,images:m});case 8:case"end":return t.stop()}}),t)})))()}},_=n(6),component=Object(_.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section py-4 -bg-world"},[t("div",{staticClass:"t-section__inner"},[t("oHeroPlaceType",{attrs:{styleType:" -city",title:"Města",perex:"Podle velmi nepřesných zdrojů je na Zemi asi 3 a půl milionu obcí. My jich tu máme přibližně 2500."}})],1)]),e._v(" "),t("section",{staticClass:"t-section -bg-world"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"m-nav-alphabet"},[t("div",{staticClass:"m-nav-alphabet__outer"},[t("div",{staticClass:"m-nav-alphabet__inner"},[t("ul",{staticClass:"m-nav-alphabet__items"},e._l(e.alphabet,(function(n){return t("li",{key:n,staticClass:"m-nav-alphabet__item",class:{"-active":e.isActive(n)}},[t("a",{staticClass:"m-nav-alphabet__link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.getPlaces(n)}}},[t("span",{staticClass:"m-nav-alphabet__span"},[e._v(e._s(n))])])])})),0)])])])])]),e._v(" "),t("section",{staticClass:"t-section -bg-world -p0"},[t("div",{staticClass:"t-section__inner"},[t("oCoverPlace",{attrs:{places:e.placesCities,images:e.images,type:"mesto"}})],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);