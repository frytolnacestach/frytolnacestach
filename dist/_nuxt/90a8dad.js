(window.webpackJsonp=window.webpackJsonp||[]).push([[37,2,3,9,19,23],{316:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("h2",{staticClass:"m-headline__title"},[t._v(t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:""))])])}),[],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);var r={props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{to:t.url}},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:""),attrs:{href:t.url,target:"_blank"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n.r(e);n(27);var r=n(10),l=(n(53),n(13),n(84),{name:"oPlatform",data:function(){return{platforms:this.platforms}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(6),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",title:t.name}})])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(53),n(13),n(84),{name:"oDonate",props:{showHeadline:{type:Boolean,required:!1}},data:function(){return{base:this.base}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(6),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-donate"},[e("div",{staticClass:"m-headline my-4 text-align-center"},[!0===t.showHeadline?e("h2",{staticClass:"m-headline__title"},[t._v("Jak mě podpořit")]):t._e(),t._v(" "),e("p",{staticClass:"m-headline__perex"},[t._v(t._s(t.base[0].donate))])])])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r={name:"oSupport"},l=n(6),component=Object(l.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"o-support"},[t("div",{staticClass:"o-support__outer"},[t("div",{staticClass:"o-support__inner"},[t("div",{staticClass:"o-support__items"},[t("div",{staticClass:"o-support__item"},[t("div",{staticClass:"o-support__logo"},[t("a",{staticClass:"o-support__logo-file -patreon",attrs:{href:"https://www.patreon.com/frytolnacestach",target:"_blank"}})])])])])])])}],!1,null,null,null);e.default=component.exports},354:function(t,e,n){"use strict";n.r(e);var r=n(318),l=n(316),o=n(329),c=n(137),f=n(320),d=n(330),_={name:"PageDonate",components:{aButtonFill:r.default,mHeadline:l.default,oDonate:o.default,oHero:c.default,oPlatform:f.default,oSupport:d.default},data:function(){return{headline:"Podpořit"}},head:{title:"Podpořit | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Podpořit web Frytol na cestách"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"}]}},m=n(6),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline}})],1)]),t._v(" "),e("section",{staticClass:"t-section pb-4"},[e("div",{staticClass:"t-section__inner"},[e("oDonate"),t._v(" "),e("oSupport")],1)]),t._v(" "),e("section",{staticClass:"t-section t-section--gray pt-4"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -center"}}),t._v(" "),e("oPlatform"),t._v(" "),e("div",{staticClass:"flex flex-center mb-4"},[e("aButtonFill",{attrs:{url:"/social",text:"Více informací",styleThema:" -blue",styleSize:" -big",target:"internal"}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);