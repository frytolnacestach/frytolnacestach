(window.webpackJsonp=window.webpackJsonp||[]).push([[135,8,16,42,54,77,90],{375:function(t,e,n){"use strict";n.r(e);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(376).default},props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1"},[t._v(t._s(t.perex))]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+" hidden-print",attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,n){"use strict";n.r(e);var r={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"o-hero"+t.modifierCSS+t.classCSS},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[t._v(t._s(t.headline))]),t._v(" "),t.perex?e("p",{staticClass:"o-hero__perex"},[t._v(t._s(t.perex))]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,n){"use strict";n.r(e);n(29);var r=n(10),o=(n(54),n(13),n(89),{name:"OrganismsoPlatformComponent",data:function(){return{platforms:this.platforms}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),l=o,c=n(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__item-content"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},582:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(54),n(13),n(89),{name:"OrganismsoDonateComponent",props:{showHeadline:{type:Boolean,required:!1}},data:function(){return{base:this.base}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),l=o,c=n(2),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-donate"},[e("div",{staticClass:"o-donate__outer"},[e("div",{staticClass:"o-donate__inner"},[!0===t.showHeadline?e("h2",{staticClass:"o-donate__title"},[t._v("Jak mě podpořit")]):t._e(),t._v(" "),e("p",{staticClass:"o-donate__perex"},[t._v(t._s(t.base[0].donate))])])])])}),[],!1,null,null,null);e.default=component.exports},583:function(t,e,n){"use strict";n.r(e);var r={name:"OrganismsoSupportComponent"},o=n(2),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"o-support"},[t("div",{staticClass:"o-support__outer"},[t("div",{staticClass:"o-support__inner"},[t("div",{staticClass:"o-support__items"},[t("div",{staticClass:"o-support__item"},[t("div",{staticClass:"o-support__logo -patreon"},[t("a",{staticClass:"o-support__logo-file",attrs:{href:"https://www.patreon.com/frytolnacestach",target:"_blank"}})])])])])])])}],!1,null,null,null);e.default=component.exports},672:function(t,e,n){"use strict";n.r(e);var r=n(148),o=n(375),l=n(582),c=n(378),d=n(396),_=n(583),f={name:"DonatePage",components:{aButtonFillFull:r.default,mHeadline:o.default,oDonate:l.default,oHero:c.default,oPlatform:d.default,oSupport:_.default},data:function(){return{headline:"Podpořit"}},head:{title:"Podpořit | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:"Podpořte cestovatelský portá a video tvorbu od Frytola na cestách."},{name:"keywords",content:"podpořit, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Podpořit | Cestovatelský portál Frytol na cestách"},{hid:"og:description",content:"Podpořte cestovatelský portá a video tvorbu od Frytola na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/donate")},{hid:"og:type",content:"website"}]}},m=n(2),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 mb-1 mt-2"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline,modifierCSS:" -gray"}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 my-1 px-2"},[e("div",{staticClass:"t-section__inner"},[e("oDonate"),t._v(" "),e("oSupport")],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1 mt-2 px-2"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -left",styleGap:"mb-1"}}),t._v(" "),e("oPlatform"),t._v(" "),e("div",{staticClass:"flex flex-center mb-4"},[e("aButtonFillFull",{attrs:{url:"/social",text:"Více informací o platformách",styleThema:" -green",target:"internal"}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);