(window.webpackJsonp=window.webpackJsonp||[]).push([[49,3,5,27,38],{317:function(t,e,n){"use strict";n.r(e);var r={props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{to:t.url}},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill-full"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("h2",{staticClass:"m-headline__title"},[t._v(t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:""))]),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1"},[t._v(t._s(t.perex))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,n){"use strict";n.r(e);n(27);var r=n(10),l=(n(53),n(13),n(84),{name:"oPlatform",data:function(){return{platforms:this.platforms}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(6),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__item-content"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(53),n(13),n(84),{name:"oWhoiam",data:function(){return{base:this.base}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(6),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-whoiam"},[e("div",{staticClass:"o-whoiam__outer"},[e("div",{staticClass:"o-whoiam__inner"},[e("div",{staticClass:"o-whoiam__image loading-image"},[e("div",{staticClass:"o-whoiam__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-whoiam__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 340px, (max-width: 439px) 400px, (max-width: 575px) 540px, (max-width: 767px) 400px, (max-width: 991px) 340px, 400px","data-srcset":"\n                            https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 340w,\n                            https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 400w,\n                            https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 540w,\n                            https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 680w,\n                            https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 800w,\n                            https://image.frytolnacestach.cz/storage/main/michal-fryc.webp 1080w\n                            ","data-src":"https://image.frytolnacestach.cz/storage/main/michal-fryc.webp",alt:"Michal Fryč"}})])]),t._v(" "),e("div",{staticClass:"o-whoiam__text"},[e("div",{staticClass:"o-whoiam__perex"},[t._v("\n                    "+t._s(t.base[0].iam)+"\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n.r(e);var r=n(317),l=n(318),o=n(137),c=n(321),m=n(341),f={name:"PageIam",components:{aButtonFillFull:r.default,mHeadline:l.default,oHero:o.default,oPlatform:c.default,oWhoiam:m.default},data:function(){return{headline:"Kdo jsem"}},head:{title:"Kdo jsem | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Kdo je Frytol na cestách?"},{name:"keywords",content:"kdo jsem, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Kdo jsem | Frytol na cestách"},{hid:"og:description",content:"Kdo je Frytol na cestách?"},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/iam")},{hid:"og:type",content:"website"}]}},h=n(6),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -bg-person -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 pt-2 pb-1"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1"},[e("div",{staticClass:"t-section__inner"},[e("oWhoiam")],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1 mt-2 px-2"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -left",styleGap:"mb-1"}}),t._v(" "),e("oPlatform"),t._v(" "),e("div",{staticClass:"flex flex-center mb-4"},[e("aButtonFillFull",{attrs:{url:"/social",text:"Více informací o platformách",styleThema:" -green",target:"internal"}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);