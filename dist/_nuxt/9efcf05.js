(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{374:function(t,e,r){"use strict";var n=r(11),o=r(6),c=r(5),l=r(114),d=r(19),v=r(14),m=r(242),_=r(45),f=r(91),y=r(243),h=r(4),w=r(90).f,N=r(37).f,z=r(18).f,C=r(377),I=r(244).trim,k="Number",x=o.Number,D=x.prototype,E=o.TypeError,T=c("".slice),L=c("".charCodeAt),A=function(t){var e=y(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,r,n,o,c,l,d,code,v=y(t,"number");if(f(v))throw E("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=I(v),43===(e=L(v,0))||45===e){if(88===(r=L(v,2))||120===r)return NaN}else if(48===e){switch(L(v,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+v}for(l=(c=T(v,2)).length,d=0;d<l;d++)if((code=L(c,d))<48||code>o)return NaN;return parseInt(c,n)}return+v};if(l(k,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var S,F=function(t){var e=arguments.length<1?0:x(A(t)),r=this;return _(D,r)&&h((function(){C(r)}))?m(Object(e),r,F):e},j=n?w(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;j.length>M;M++)v(x,S=j[M])&&!v(F,S)&&z(F,S,N(x,S));F.prototype=D,D.constructor=F,d(o,k,F,{constructor:!0})}},377:function(t,e,r){var n=r(5);t.exports=n(1..valueOf)},613:function(t,e,r){"use strict";r.r(e);r(241),r(13),r(68),r(29);var n=r(23),o=r(10),c=(r(54),r(374),r(30),r(31),r(43),r(44),r(113),{name:"OrganismsoSidebarListTravelDictionaryComponent",props:{IDTravelDictionary:{type:Number,required:!0}},data:function(){return{travelDictionaries:[],images:[],isLoading:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,Promise.all([t.$axios.get("https://api.frytolnacestach.cz/api/travel-dictionaries-random?showType=list&actualID=".concat(t.IDTravelDictionary,"&quantity=5"))]);case 3:if(r=e.sent,o=Object(n.a)(r,1),c=o[0],l=c.data,!((d=l.map((function(t){return t.id_image_cover})).filter((function(t){return null!=t&&""!==t}))).length>0)){e.next=17;break}return e.next=11,t.$axios.get("https://api.frytolnacestach.cz/api/images-array?id=".concat(d.join(",")));case 11:v=e.sent,m=v.data,t.images=t.images.concat(m),t.travelDictionaries=t.travelDictionaries.concat(l),e.next=18;break;case 17:t.travelDictionaries=t.travelDictionaries.concat(l);case 18:t.isLoading=!1;case 19:case"end":return e.stop()}}),e)})))()}}),l=r(2),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.travelDictionaries&&t.travelDictionaries.length>0?e("section",{staticClass:"t-section -px-world mt-1 mb-2 print-section"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__outer"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__inner"},[e("h3",{staticClass:"o-sidebar-list-travel-dictionary__header"},[t._v("Další výrazy")]),t._v(" "),e("div",{staticClass:"o-sidebar-list-travel-dictionary__items"},t._l(t.travelDictionaries,(function(r){return e("div",{key:r.id,staticClass:"o-sidebar-list-travel-dictionary__item"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__image-container"},[e("div",{staticClass:"o-sidebar-list-travel-dictionary__image loading-image -green"},[t.images&&t.images.find((function(image){return image.id===r.id_image_hero}))?e("div",{staticClass:"o-sidebar-list-travel-dictionary__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-sidebar-list-travel-dictionary__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-100.webp 100w,\n                                                https://image.frytolnacestach.cz/storage/").concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,"-200-2x.webp 200w,\n                                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(t.images.find((function(image){return image.id===r.id_image_cover})).source+t.images.find((function(image){return image.id===r.id_image_cover})).name,".webp"),alt:r.name?r.name:"Úvodní obrázek",preload:!0}})]):e("div",{staticClass:"o-sidebar-list-travel-dictionary__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-sidebar-list-travel-dictionary__image-file lazyload-file",attrs:{"data-sizes":"0px","data-srcset":"\n                                                https://image.frytolnacestach.cz/storage/_default/h-hero-100.webp 100w,\n                                                https://image.frytolnacestach.cz/storage/_default/h-hero-200-2x.webp 200w\n                                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:r.name?r.name:"Úvodní obrázek",preload:!0}})]),t._v(" "),e("nuxtLink",{staticClass:"o-sidebar-list-travel-dictionary__image-link",attrs:{to:"/cestovatelsky-slovnik/"+r.slug}})],1)]),t._v(" "),e("div",{staticClass:"o-sidebar-list-travel-dictionary__text"},[e("h4",{staticClass:"o-sidebar-list-travel-dictionary__name"},[e("nuxtLink",{staticClass:"o-sidebar-list-travel-dictionary__name-link",attrs:{to:"/cestovatelsky-slovnik/"+r.slug}},[t._v(t._s(r.name))])],1)])])})),0)])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);