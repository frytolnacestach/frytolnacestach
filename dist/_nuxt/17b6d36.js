(window.webpackJsonp=window.webpackJsonp||[]).push([[25,3],{317:function(e,t,l){"use strict";l.r(t);var r={props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},c=l(6),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill-full"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{to:e.url}},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill-full"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},334:function(e,t,l){"use strict";l.r(t);l(65),l(27),l(22),l(66),l(35);var r={name:"ComponentoPlacesBlock",components:{aButtonFillFull:l(317).default},props:{place:{type:Array,required:!0},image:{type:Array,required:!1},type:{type:String,required:!0},headline:{type:String,required:!0}}},c=l(6),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-place-teaser"},[t("div",{staticClass:"o-place-teaser__outer"},[t("div",{staticClass:"o-place-teaser__inner"},[t("div",{staticClass:"o-place-teaser__content"},[t("div",{staticClass:"o-place-teaser__image loading-image"},[e.image?t("div",{staticClass:"o-place-teaser__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-teaser__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px, 390px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,"-345.webp 345w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-390.webp 390w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-690-2x.webp 690w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-780-2x.webp 780w\n                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,".webp"),alt:e.place[0].name}})]):t("div",{staticClass:"o-place-teaser__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-teaser__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px, 390px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-390.webp 390w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-780-2x.webp 780w\n                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.place[0].name}})])]),e._v(" "),t("div",{staticClass:"o-place-teaser__text"},[t("h3",{staticClass:"o-place-teaser__name"},[e._v(e._s(e.headline))]),e._v(" "),e.place[0].information_chatgpt?t("div",{staticClass:"o-place-teaser__wysiwyg",domProps:{innerHTML:e._s(e.place[0].information_chatgpt.slice(0,e.place[0].information_chatgpt.lastIndexOf(" ",320)).replace(/<\/?[^>]+(>|$)/g,""))}}):e._e(),e._v(" "),t("div",{staticClass:"o-place-teaser__button"},[t("aButtonFillFull",{attrs:{url:"/svet/".concat(e.type,"/").concat(e.place[0].slug),text:"Číst více",styleThema:" -green",target:"internal"}})],1)])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);