(window.webpackJsonp=window.webpackJsonp||[]).push([[163,9,17,67,90,116],{402:function(t,e,n){"use strict";n.r(e);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[t.title&&"h1"===t.styleSize?e("h1",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.title&&"h2"===t.styleSize?e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):"span"===t.target?e("span",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print"},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},407:function(t,e,n){"use strict";n.r(e);var r={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"o-hero"+t.modifierCSS+t.classCSS},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[t._v(t._s(t.headline))]),t._v(" "),t.perex?e("p",{staticClass:"o-hero__perex",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},576:function(t,e,n){"use strict";n.r(e);n(25);var r=n(9),l=(n(39),n(12),n(36),{name:"OrganismsoPlatformComponent",data:function(){return{platforms:this.platforms}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__item-content"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",rel:"noopener",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},644:function(t,e,n){"use strict";n.r(e);var r=n(9),l=(n(39),n(12),n(36),{name:"OrganismsoWhoiamComponent",data:function(){return{base:this.base}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(2),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-whoiam"},[e("div",{staticClass:"o-whoiam__outer"},[e("div",{staticClass:"o-whoiam__inner"},[e("div",{staticClass:"o-whoiam__image loading-image -gray"},[e("div",{staticClass:"o-whoiam__image-lazyload"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-whoiam__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 320px, (max-width: 374px) 344px, (max-width: 399px) 370px, (max-width: 459px) 430px, (max-width: 575px) 546px, (max-width: 767px) 738px, (max-width: 991px) 962px, 320px","data-srcset":"\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-320.webp 320w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-344.webp 344w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-370.webp 370w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-430.webp 430w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-556.webp 546w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-738.webp 738w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-962.webp 962w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-640-2x.webp 640w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-688-2x.webp 688w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-740-2x.webp 740w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-860-2x.webp 860w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-1112-2x.webp 1092w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-1476-2x.webp 1476w,\n                            https://image.frytolnacestach.cz/storage/main/s-michal-fryc-1924-2x.webp 1924w\n                            ","data-src":"https://image.frytolnacestach.cz/storage/main/michal-fryc.webp",alt:"Michal Fryč"}})])]),t._v(" "),e("div",{staticClass:"o-whoiam__text"},[e("div",{staticClass:"o-whoiam__perex"},[t._v("\n                    "+t._s(t.base[0].iam)+"\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},739:function(t,e,n){"use strict";n.r(e);var r=n(155),l=n(402),o=n(407),c=n(576),m=n(644),h={name:"IamPage",components:{aButtonFillFull:r.default,mHeadline:l.default,oHero:o.default,oPlatform:c.default,oWhoiam:m.default},data:function(){return{headline:"Kdo jsem"}},head:function(){var title,t;return"Cestovatelská videa, Internetové platformy, kdo jsem, cestování, svět","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Kdo jsem | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:t="Kdo je Frytol na cestách? Co dělá a kde ho najdete."},{name:"keywords",content:"Cestovatelská videa, Internetové platformy, kdo jsem, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:t},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/iam")},{hid:"og:type",content:"website"}]}}},f=n(2),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 pt-2 pb-1"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline,modifierCSS:" -gray"}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1"},[e("div",{staticClass:"t-section__inner"},[e("oWhoiam")],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1 mt-2 px-2"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -left",styleGap:"mb-1"}}),t._v(" "),e("oPlatform"),t._v(" "),e("div",{staticClass:"flex flex-center mb-4"},[e("aButtonFillFull",{attrs:{target:"internal",url:"/social",text:"Více informací o platformách",styleThema:" -gray"}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);