(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11,14,15,16,54,63,131],{406:function(e,t,n){"use strict";n.r(t);n(48),n(37),n(41),n(76),n(77);var c=n(31);n(58),n(12),n(33),n(74);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return o(o({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,n){if(e.date){var c=(new Date).getTime(),r=new Date(e.date).getTime()+e.duration-c;r>0?setTimeout((function(){t.updateMessageVisibility(n,"hidden")}),r):t.updateMessageVisibility(n,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},d=n(1),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(n,c){return"hidden"!==n.visibility?t("div",{key:c,class:"o-flash-messages__item"+(n.status?" -"+n.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(n.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},593:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(119);var r=n(156),o=n(95);function l(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||Object(r.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},601:function(e,t,n){"use strict";n.r(t);var c={name:"AtomsaTooltipComponent",props:{text:{type:String,required:!0}}},r=n(1),component=Object(r.a)(c,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"a-tooltip"},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},620:function(e,t,n){"use strict";var c=n(3),r=n(78).findIndex,o=n(118),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),c({target:"Array",proto:!0,forced:d},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},657:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25);var c=n(593),r=n(9),o=(n(36),n(254),n(154),n(41),n(58),n(620),n(255),n(675)),l=n(676),d=n(677),m=n(678),h=n(679),f={name:"OrganismsoCoverPlaceVisitedComponent",components:{skeletonoCoverPlaceVisited:o.default,mButtonPlaceAdd:l.default,mButtonPlaceAddVisited:d.default,mButtonPlaceRemove:m.default,oFormPlaceVisitedAdd:h.default},props:{skeletonProbs:{type:Boolean,required:!0},account:{type:Array,required:!0},placesID:{type:Array,required:!0},type:{type:String,required:!0},typeAccount:{type:String,required:!0},status:{type:Number,required:!0}},data:function(){return{places:[],newPlace:null,images:[],showPlaceForm:!1,newPlaceID:null,removePlaceID:null,skeleton:!0}},watch:{placesID:{immediate:!0,handler:function(e,t){e.length>0&&(e!==t||!this.places)&&!1===this.skeletonProbs&&this.loadData()}},skeletonProbs:function(e,t){e||0!==this.placesID.length||(this.places=[],this.skeleton=!1)}},methods:{loadData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,c,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=[],"kontinent"!==e.type){t.next=13;break}if(!(e.placesID.length>0)){t.next=9;break}return t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=".concat(e.placesID.join(",")));case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=[];case 10:n=t.t0,t.next=55;break;case 13:if("stat"!==e.type){t.next=24;break}if(!(e.placesID.length>0)){t.next=20;break}return t.next=17,e.$axios.$get("https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=".concat(e.placesID.join(",")));case 17:t.t1=t.sent,t.next=21;break;case 20:t.t1=[];case 21:n=t.t1,t.next=55;break;case 24:if("mesto"!==e.type){t.next=35;break}if(!(e.placesID.length>0)){t.next=31;break}return t.next=28,e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=".concat(e.placesID.join(",")));case 28:t.t2=t.sent,t.next=32;break;case 31:t.t2=[];case 32:n=t.t2,t.next=55;break;case 35:if("region"!==e.type){t.next=46;break}if(!(e.placesID.length>0)){t.next=42;break}return t.next=39,e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=".concat(e.placesID.join(",")));case 39:t.t3=t.sent,t.next=43;break;case 42:t.t3=[];case 43:n=t.t3,t.next=55;break;case 46:if("misto"!==e.type){t.next=55;break}if(!(e.placesID.length>0)){t.next=53;break}return t.next=50,e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=".concat(e.placesID.join(",")));case 50:t.t4=t.sent,t.next=54;break;case 53:t.t4=[];case 54:n=t.t4;case 55:if(!((c=n.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=62;break}return t.next=59,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(c.join(",")));case 59:t.t5=t.sent,t.next=63;break;case 62:t.t5=[];case 63:r=t.t5,e.places=n,e.images=r,e.skeleton=!1,t.next=73;break;case 69:t.prev=69,t.t6=t.catch(0),console.log("API ERROR - VYPIS NAVŠTÍVIL JSEM/CHCI NAVŠTÍVIT"),console.error(t.t6);case 73:case"end":return t.stop()}}),t,null,[[0,69]])})))()},loadNewPlace:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=[],"kontinent"!==e.type){t.next=13;break}if(null===e.newPlaceID){t.next=9;break}return t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents-array?showType=list&id=".concat(e.newPlaceID));case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=[];case 10:n=t.t0,t.next=55;break;case 13:if("stat"!==e.type){t.next=24;break}if(null===e.newPlaceID){t.next=20;break}return t.next=17,e.$axios.$get("https://api.frytolnacestach.cz/api/places-states-array?showType=list&id=".concat(e.newPlaceID));case 17:t.t1=t.sent,t.next=21;break;case 20:t.t1=[];case 21:n=t.t1,t.next=55;break;case 24:if("mesto"!==e.type){t.next=35;break}if(null===e.newPlaceID){t.next=31;break}return t.next=28,e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities-array?showType=list&id=".concat(e.newPlaceID));case 28:t.t2=t.sent,t.next=32;break;case 31:t.t2=[];case 32:n=t.t2,t.next=55;break;case 35:if("region"!==e.type){t.next=46;break}if(null===e.newPlaceID){t.next=42;break}return t.next=39,e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions-array?showType=list&id=".concat(e.newPlaceID));case 39:t.t3=t.sent,t.next=43;break;case 42:t.t3=[];case 43:n=t.t3,t.next=55;break;case 46:if("misto"!==e.type){t.next=55;break}if(null===e.newPlaceID){t.next=53;break}return t.next=50,e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots-array?showType=list&id=".concat(e.newPlaceID));case 50:t.t4=t.sent,t.next=54;break;case 53:t.t4=[];case 54:n=t.t4;case 55:if(!((r=n.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e}))).length>0)){t.next=62;break}return t.next=59,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(r.join(",")));case 59:t.t5=t.sent,t.next=63;break;case 62:t.t5=[];case 63:o=t.t5,e.places=[].concat(Object(c.a)(e.places),Object(c.a)(n)),e.images=[].concat(Object(c.a)(e.images),Object(c.a)(o)),t.next=72;break;case 68:t.prev=68,t.t6=t.catch(0),console.log("API ERROR - VYPIS NOVÉHO NAVŠTÍVENÉHO MÍSTA"),console.error(t.t6);case 72:case"end":return t.stop()}}),t,null,[[0,68]])})))()},removePlace:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:-1!==(n=e.places.findIndex((function(t){return t.id===e.removePlaceID})))&&e.places.splice(n,1);case 2:case"end":return t.stop()}}),t)})))()},showAddPlaceForm:function(){this.showPlaceForm=!0},showAddNewPlaceForm:function(e){this.newPlaceID=e,this.loadNewPlace()},showRemoveNewPlaceForm:function(e){this.removePlaceID=e,this.removePlace()}}},v=n(1),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[e.skeleton?t("skeletonoCoverPlaceVisited",{attrs:{styleThema:" -skeleton-blue"}}):e._e(),e._v(" "),null===e.places||0===e.places.length||e.skeleton?e._e():t("client-only",[t("div",{staticClass:"o-cover-place-visited"},[t("div",{staticClass:"o-cover-place-visited__outer"},[t("div",{staticClass:"o-cover-place-visited__items"},[e._l(e.places,(function(n){return t("div",{key:n.id,staticClass:"o-cover-place-visited__item"},[t("div",{staticClass:"o-cover-place-visited__content"},[t("div",{staticClass:"o-cover-place-visited__image loading-image -blue"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-place-visited__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-visited__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 176px, (max-width: 459px) 206px, (max-width: 575px) 264px, (max-width: 767px) 236px, (max-width: 991px) 232px, (max-width: 1219px) 164px, (max-width: 1399px) 200px, 304px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 176w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 206w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 264w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 236w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 232w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 164w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 200w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-306.webp 304w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 352w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 412w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 528w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 472w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 464w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-332-2x.webp 328w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 400w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-612-2x.webp 608w\n                                            "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-place-visited__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-place-visited__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 176px, (max-width: 459px) 206px, (max-width: 575px) 264px, (max-width: 767px) 236px, (max-width: 991px) 232px, (max-width: 1219px) 164px, (max-width: 1399px) 200px, 304px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-186.webp 176w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 206w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-274.webp 264w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 236w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-240.webp 232w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-166.webp 164w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-210.webp 200w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-306.webp 304w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-372-2x.webp 352w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 412w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-548-2x.webp 528w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 472w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-480-2x.webp 464w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-332-2x.webp 328w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-420-2x.webp 400w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-hero-612-2x.webp 608w\n                                            ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:n.name}})])]),e._v(" "),t("h2",{staticClass:"o-cover-place-visited__name"},[e._v("\n                                "+e._s(n.name)+"\n                            ")]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-place-visited__link",attrs:{to:"/svet/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o místě ".concat(n.name)}}),e._v(" "),"login"===e.typeAccount&&2===e.status?t("mButtonPlaceAddVisited",{attrs:{account:e.account,placeID:n.id,placeType:n.type_place},on:{"remove-place":e.showRemoveNewPlaceForm}}):e._e(),e._v(" "),"login"===e.typeAccount?t("mButtonPlaceRemove",{attrs:{account:e.account,placeID:n.id,placeType:n.type_place},on:{"remove-place":e.showRemoveNewPlaceForm}}):e._e()],1)])})),e._v(" "),"login"===e.typeAccount&&e.places&&Array.isArray(e.places)&&0!==e.places.length?t("mButtonPlaceAdd",{attrs:{type:"next"},on:{"add-place-clicked":e.showAddPlaceForm}}):e._e()],2)])])]),e._v(" "),e.places&&Array.isArray(e.places)&&0===e.places.length&&!e.skeleton?t("client-only",["other"===e.typeAccount?t("p",[e._v("\n            Ještě tu žádné místo nemám.\n        ")]):t("p",[e._v("\n            Nemáš tu žádné místo. Co takhle projít "),t("nuxt-link",{attrs:{to:"/svet"}},[e._v("svět")]),e._v(" a přidat sem místa?\n        ")],1)]):e._e(),e._v(" "),"login"===e.typeAccount&&e.places&&Array.isArray(e.places)&&0===e.places.length&&!e.skeleton?t("mButtonPlaceAdd",{attrs:{type:"first"},on:{"add-place-clicked":e.showAddPlaceForm}}):e._e(),e._v(" "),e.showPlaceForm&&"login"===e.typeAccount?t("oFormPlaceVisitedAdd",{attrs:{account:e.account,status:e.status,type:e.type,visitedPlace:e.places},on:{"add-place":e.showAddNewPlaceForm}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},675:function(e,t,n){"use strict";n.r(t);var c={name:"SkeletonoCoverPlaceVisitedComponent",props:{styleThema:{type:String,required:!0}}},r=n(1),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-cover-place-visited"},[t("div",{staticClass:"skeleton-o-cover-place-visited__outer"},[t("div",{staticClass:"o-cover-place-visited__items"},e._l(5,(function(n){return t("div",{key:n,staticClass:"skeleton-o-cover-place-visited__item"},[t("div",{staticClass:"skeleton-o-cover-place-visited__content"},[t("div",{class:"skeleton-o-cover-place-visited__image loading-image"+e.styleThema})])])})),0)])])}),[],!1,null,null,null);t.default=component.exports},676:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmButtonPlaceAddComponent",props:{type:{type:String,required:!0}},methods:{emitAddPlaceEvent:function(){this.$emit("add-place-clicked")}}},r=n(1),component=Object(r.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-button-place-add hidden-print",class:{"-first":"first"===e.type},on:{click:e.emitAddPlaceEvent}},[t("div",{staticClass:"m-button-place-add__content"},[t("div",{staticClass:"m-button-place-add__box"},["first"===e.type?t("span",{staticClass:"m-button-place-add__text"},[e._v("Přidat první místo")]):e._e(),e._v(" "),"next"===e.type?t("span",{staticClass:"m-button-place-add__text"},[e._v("Přidat místo")]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},677:function(e,t,n){"use strict";n.r(t);var c=n(9),r=(n(36),n(254),n(12),{name:"MoleculesmButtonPlaceAddVisitedComponent",components:{aTooltip:n(601).default},props:{account:{type:Array,required:!0},placeID:{type:Number,required:!0},placeType:{type:String,required:!0}},data:function(){return{flashMessage:[]}},methods:{deleteVisited:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.placeID=e,n.prev=2,n.next=5,fetch("https://api.frytolnacestach.cz/api/user-visited-place-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.account[0].email,password_hash:t.account[0].password,id_place:t.placeID,type:t.placeType,status:1})});case 5:(c=n.sent).ok?201===c.status?(t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Místo bylo přidáno mezi navštívené"}),t.searchQuery="",t.emitRemoveNewPlaceEvent(t.placeID)):200===c.status&&t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"}):404===c.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."}):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),n.next=13;break;case 9:throw n.prev=9,n.t0=n.catch(2),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),n.t0;case 13:n.next=18;break;case 15:n.prev=15,n.t1=n.catch(0),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 18:case"end":return n.stop()}}),n,null,[[0,15],[2,9]])})))()},emitRemoveNewPlaceEvent:function(e){this.$emit("remove-place",e)}}}),o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-button-place-add-visited hidden-print",on:{click:function(t){return e.deleteVisited(e.placeID)}}},[t("aTooltip",{attrs:{text:"Už jsem navštívil"}})],1)}),[],!1,null,null,null);t.default=component.exports},678:function(e,t,n){"use strict";n.r(t);var c=n(9),r=(n(36),n(254),n(12),{name:"MoleculesmButtonPlaceRemoveComponent",components:{aTooltip:n(601).default},props:{account:{type:Array,required:!0},placeID:{type:Number,required:!0},placeType:{type:String,required:!0}},data:function(){return{flashMessage:[]}},methods:{deleteVisited:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.placeID=e,n.prev=2,n.next=5,fetch("https://api.frytolnacestach.cz/api/user-visited-place-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.account[0].email,password_hash:t.account[0].password,id_place:t.placeID,type:t.placeType,status:0})});case 5:(c=n.sent).ok?201===c.status?(t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Místo bylo odebráno z navštívených"}),t.searchQuery="",t.emitRemoveNewPlaceEvent(t.placeID)):200===c.status&&t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"}):404===c.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."}):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),n.next=13;break;case 9:throw n.prev=9,n.t0=n.catch(2),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),n.t0;case 13:n.next=18;break;case 15:n.prev=15,n.t1=n.catch(0),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 18:case"end":return n.stop()}}),n,null,[[0,15],[2,9]])})))()},emitRemoveNewPlaceEvent:function(e){this.$emit("remove-place",e)}}}),o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-button-place-remove hidden-print",on:{click:function(t){return e.deleteVisited(e.placeID)}}},[t("aTooltip",{attrs:{text:"Odstranit místo"}})],1)}),[],!1,null,null,null);t.default=component.exports},679:function(e,t,n){"use strict";n.r(t);n(57),n(25);var c=n(9),r=(n(36),n(254),n(253),n(12),n(41),n(59),n(60),{name:"OrganismsoFormPlaceVisitedAddComponent",components:{oFlashMessages:n(406).default},props:{account:{type:Array,required:!0},type:{type:String,required:!0},visitedPlace:{type:Array,required:!1},status:{type:Number,required:!0}},data:function(){return{flashMessage:[],places:[],placesSearch:"",searchQuery:"",filteredPlaces:[],placeTypeSlug:null,placeTypeApp:null,placeTypeName:null,placeType:[{type:"kontinent",placeTypeApp:"continent",placeTypeName:"kontinent"},{type:"stat",placeTypeApp:"state",placeTypeName:"stát"},{type:"region",placeTypeApp:"region",placeTypeName:"region"},{type:"mesto",placeTypeApp:"city",placeTypeName:"město"},{type:"misto",placeTypeApp:"spot",placeTypeName:"místo"}]}},mounted:function(){var e=this,t=this.placeType.find((function(t){return t.type===e.type}))||{};this.placeTypeSlug=t.type,this.placeTypeApp=t.placeTypeApp,this.placeTypeName=t.placeTypeName},methods:{editVisited:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t.placeID=e,!t.visitedPlace.some((function(t){return t.id===e}))){n.next=6;break}t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Místo již máte mezi navštíveními"}),n.next=17;break;case 6:return n.prev=6,n.next=9,fetch("https://api.frytolnacestach.cz/api/user-visited-place-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.account[0].email,password_hash:t.account[0].password,id_place:t.placeID,type:t.placeTypeApp,status:t.status})});case 9:(c=n.sent).ok?201===c.status?(1===t.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Místo bylo přidáno mezi navštívené"}):2===t.status&&t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Místo bylo přidáno mezi chci navštívit"}),t.searchQuery="",t.emitAddNewPlaceEvent(t.placeID)):200===c.status&&t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"}):404===c.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."}):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),n.next=17;break;case 13:throw n.prev=13,n.t0=n.catch(6),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),n.t0;case 17:n.next=22;break;case 19:n.prev=19,n.t1=n.catch(0),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 22:case"end":return n.stop()}}),n,null,[[0,19],[6,13]])})))()},searchPlaces:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"continent"!==e.placeTypeApp){t.next=7;break}return t.next=4,e.$axios.$get("https://api.frytolnacestach.cz/api/places-continents?showType=search&search=".concat(e.searchQuery));case 4:e.places=t.sent,t.next=29;break;case 7:if("state"!==e.placeTypeApp){t.next=13;break}return t.next=10,e.$axios.$get("https://api.frytolnacestach.cz/api/places-states?showType=search&search=".concat(e.searchQuery));case 10:e.places=t.sent,t.next=29;break;case 13:if("region"!==e.placeTypeApp){t.next=19;break}return t.next=16,e.$axios.$get("https://api.frytolnacestach.cz/api/places-regions?showType=search&search=".concat(e.searchQuery));case 16:e.places=t.sent,t.next=29;break;case 19:if("city"!==e.placeTypeApp){t.next=25;break}return t.next=22,e.$axios.$get("https://api.frytolnacestach.cz/api/places-cities?showType=search&search=".concat(e.searchQuery));case 22:e.places=t.sent,t.next=29;break;case 25:if("spot"!==e.placeTypeApp){t.next=29;break}return t.next=28,e.$axios.$get("https://api.frytolnacestach.cz/api/places-spots?showType=search&search=".concat(e.searchQuery));case 28:e.places=t.sent;case 29:e.filterPlaces(),t.next=35;break;case 32:t.prev=32,t.t0=t.catch(0),console.error(t.t0);case 35:case"end":return t.stop()}}),t,null,[[0,32]])})))()},filterPlaces:function(){var e=this;this.filteredPlaces=[],this.searchQuery&&this.searchQuery.length>=3&&(this.filteredPlaces=this.places.filter((function(t){return t.name.toLowerCase().includes(e.searchQuery.toLowerCase())})))},hasVisited:function(e){return this.visitedPlace.some((function(t){return t.id===e}))},hasStatus:function(e){return this.visitedPlace.some((function(t){return t.status===e}))},emitAddNewPlaceEvent:function(e){this.$emit("add-place",e)}},computed:{hasResults:function(){return this.searchQuery.length>=3&&0===this.filteredPlaces.length}},watch:{searchQuery:function(e,t){3==e.length||e.substring(0,3)!==t.substring(0,3)?this.searchPlaces():e.substring(0,3)===t.substring(0,3)?0==this.filteredPlaces.length&&this.searchPlaces():e.length>=3?this.filterPlaces():(this.places=[],this.filteredPlaces=[])}}}),o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-place-visited-add",attrs:{role:"search"}},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("div",{staticClass:"o-form-place-visited-add__input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"a-input-search -blue",attrs:{type:"text",placeholder:1===e.status?"Který "+e.placeTypeName+" si navštívil(a)?":2===e.status?"Který "+e.placeTypeName+" chceš navštívit":""},domProps:{value:e.searchQuery},on:{input:[function(t){t.target.composing||(e.searchQuery=t.target.value)},e.filterPlaces]}})]),e._v(" "),e.searchQuery.length<3?t("span",{staticClass:"o-form-place-visited-add__condition"},[e._v("Napiš alepoň 3 znaky")]):e._e(),e._v(" "),t("div",{staticClass:"o-form-place-visited-add__result"},[t("div",{staticClass:"m-search-result -blue"},[e.filteredPlaces.length>0?t("ul",{staticClass:"m-search-result__items"},e._l(e.filteredPlaces,(function(n){return t("li",{key:"".concat(n.type_place,"-").concat(n.id),staticClass:"m-search-result__item"},[t("div",{staticClass:"m-search-result__link",on:{click:function(t){return e.editVisited(n.id)}}},[t("span",{staticClass:"m-search-result__name"},[e._v(e._s(n.name))]),e._v(" "),e.hasVisited(n.id)?t("span",{staticClass:"m-search-result__visited"},[e._v(e._s(e.placeTypeName)+" "+e._s(1===e.status?"si už navštívil(a)":2===e.status?"už máš mezi chci navštívil(a)":""))]):e._e()])])})),0):e._e(),e._v(" "),e.searchQuery.length>=3&0===e.filteredPlaces.length?t("span",{staticClass:"m-search-result__no-result"},[e._v("Tak tohle tu bohužel nenajdeš.. :/ "),t("i",[e._v("(zkus to ještě jednou)")])]):e._e()])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);