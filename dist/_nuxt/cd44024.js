(window.webpackJsonp=window.webpackJsonp||[]).push([[22,2],{304:function(t,e,o){"use strict";var n=o(10),r=o(4),c=o(5),l=o(108),d=o(19),_=o(13),f=o(199),m=o(41),h=o(83),v=o(198),C=o(3),y=o(84).f,k=o(34).f,N=o(18).f,S=o(305),w=o(306).trim,x="Number",E=r.Number,I=E.prototype,j=r.TypeError,A=c("".slice),T=c("".charCodeAt),F=function(t){var e=v(t,"number");return"bigint"==typeof e?e:R(e)},R=function(t){var e,o,n,r,c,l,d,code,_=v(t,"number");if(h(_))throw j("Cannot convert a Symbol value to a number");if("string"==typeof _&&_.length>2)if(_=w(_),43===(e=T(_,0))||45===e){if(88===(o=T(_,2))||120===o)return NaN}else if(48===e){switch(T(_,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+_}for(l=(c=A(_,2)).length,d=0;d<l;d++)if((code=T(c,d))<48||code>r)return NaN;return parseInt(c,n)}return+_};if(l(x,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var z,O=function(t){var e=arguments.length<1?0:E(F(t)),o=this;return m(I,o)&&C((function(){S(o)}))?f(Object(e),o,O):e},L=n?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;L.length>P;P++)_(E,z=L[P])&&!_(O,z)&&N(O,z,k(E,z));O.prototype=I,I.constructor=O,d(r,x,O,{constructor:!0})}},305:function(t,e,o){var n=o(5);t.exports=n(1..valueOf)},306:function(t,e,o){var n=o(5),r=o(25),c=o(14),l=o(307),d=n("".replace),_="["+l+"]",f=RegExp("^"+_+_+"*"),m=RegExp(_+_+"*$"),h=function(t){return function(e){var o=c(r(e));return 1&t&&(o=d(o,f,"")),2&t&&(o=d(o,m,"")),o}};t.exports={start:h(1),end:h(2),trim:h(3)}},307:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},308:function(t,e,o){"use strict";o.r(e);o(304);var n={mounted:function(){var script=document.createElement("script");script.type="text/javascript",script.async=!0,script.src="//cf.bstatic.com/static/affiliate_base/js/flexiproduct.js",document.body.appendChild(script)},props:{latitude:{type:Number,required:!0},longitude:{type:Number,required:!0},landmarkName:{type:String,required:!0},address:{type:String,required:!0},zoom:{type:Number,required:!0}}},r=o(12),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("ins",{staticClass:"bookingaff",attrs:{"data-aid":"2328995","data-target_aid":"2328995","data-prod":"map","data-width":"100%","data-height":"590","data-lang":"ualng","data-dest_id":"0","data-dest_type":"landmark","data-latitude":t.latitude,"data-longitude":t.longitude,"data-landmark_name":t.landmarkName,"data-mwhsb":"0","data-address":t.address,"data-zoom":t.zoom}},[e("a",{attrs:{href:"//www.booking.com?aid=2328995"}},[t._v("Booking.com")])])])}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,o){"use strict";o.r(e);o(29),o(85);var n=o(9),r=(o(64),{name:"PageCitySlug",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)},formatDate:function(t){return new Date(t).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}},data:function(){return{place:""}},head:function(){return{title:"".concat(this.place[0].name," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.place[0].perex)},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-".concat(this.place[0].slug,".jpg")}]}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.params,e.prev=1,e.next=4,o.$get("https://frytolnacestach-api.vercel.app/api/places-city/".concat(n.slug));case 4:return r=e.sent,e.next=7,o.$get("https://frytolnacestach-api.vercel.app/api/places-state-id/".concat(r[0].id_state));case 7:return c=e.sent,e.next=10,o.$get("https://frytolnacestach-api.vercel.app/api/places-continent-id/".concat(r[0].id_continent));case 10:return l=e.sent,e.abrupt("return",{place:r,placeState:c,placeContinent:l});case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))()},mounted:function(){this.adsenseAddLoad()}}),c=o(12),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"t-main"},[e("section",{staticClass:"t-section"},[e("div",{staticClass:"o-hero-place",style:{"background-image":"url("+(t.place[0].image_hero?t.place[0].image_hero:"https://image.frytolnacestach.cz/storage/_default/hero.png")+")"}},[e("div",{staticClass:"o-hero-place__outer"},[e("div",{staticClass:"o-hero-place__inner"},[t.place[0].name?e("h1",{staticClass:"o-hero-place__headline"},[t._v(t._s(t.place[0].name))]):t._e()])])]),t._v(" "),e("div",{staticClass:"js_o-hot-info-hero o-hot-info-hero"},[e("div",{staticClass:"o-hot-info-hero__outer"},[e("div",{staticClass:"o-hot-info-hero__inner"},[e("div",{staticClass:"o-hot-info-hero__items"},[e("div",{staticClass:"o-hot-info-hero__item"},[e("h4",{staticClass:"o-hot-info-hero__title"},[t._v("Stát")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.placeState[0].name))])]),t._v(" "),e("div",{staticClass:"o-hot-info-hero__item"},[e("h4",{staticClass:"o-hot-info-hero__title"},[t._v("Rozloha")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.place[0].area)+" km2")])]),t._v(" "),e("div",{staticClass:"o-hot-info-hero__item"},[e("h4",{staticClass:"o-hot-info-hero__title"},[t._v("Nadmořská výška")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.place[0].altitude)+" m n. m.")])]),t._v(" "),e("div",{staticClass:"o-hot-info-hero__item"},[e("h4",{staticClass:"o-hot-info-hero__title"},[t._v("Populace")]),t._v(" "),e("span",{staticClass:"o-hot-info-hero__value"},[t._v(t._s(t.place[0].population))])])])])])])]),t._v(" "),e("div",{staticClass:"t-col2"},[e("div",{staticClass:"t-col2__content my-2"},[t.place[0].information_chatgpt?e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-information-block"},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[e("h2",{staticClass:"o-information-block__title"},[t._v("O městě "+t._s(t.place[0].name))]),t._v(" "),e("div",{staticClass:"o-information-block__perex text-align-center-mobile text-align-left-desktop"},[e("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:t._s(t.place[0].information_chatgpt)}}),t._v(" "),t._m(0)])])])])])]):t._e(),t._v(" "),e("section",{staticClass:"t-section py-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-information-block"},[e("div",{staticClass:"o-information-block__outer"},[e("div",{staticClass:"o-information-block__inner"},[e("h2",{staticClass:"o-information-block__title"},[t._v("Ubytování")]),t._v(" "),t._l(t.placeState[0].coordinates,(function(o){return e("div",{staticClass:"o-information-block__widget"},[e("booking-widget",{attrs:{landmarkName:"".concat(t.place[0].name,", ").concat(t.placeState[0].name),address:"".concat(t.place[0].name,", ").concat(t.placeState[0].name),latitude:"".concat(o.latitude),longitude:"".concat(o.longitude),zoom:"13"}})],1)}))],2)])])])])]),t._v(" "),e("div",{staticClass:"t-col2__sidebar my-2"},[e("section",{staticClass:"t-section my-2"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-ad-google-sidebar"},[e("ins",{staticClass:"adsbygoogle",style:t.adStyle,attrs:{"data-ad-client":t.adClient,"data-ad-slot":t.adSlot,"data-ad-format":t.adFormat,"data-full-width-responsive":t.adResponsive}})])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-information-block__author"},[e("i",{staticClass:"m-author"},[t._v("zdroj. "),e("a",{staticClass:"m-author__link",attrs:{href:"https://chat.openai.com/chat",target:"_blank"}},[t._v("ChatGPT")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BookingWidget:o(308).default})}}]);