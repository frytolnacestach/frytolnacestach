(window.webpackJsonp=window.webpackJsonp||[]).push([[40,6],{335:function(t,o,n){"use strict";n.r(o);n(27);var e=n(10),r=(n(53),n(13),n(84),{name:"SectionBoxplatform",data:function(){return{platforms:[]}},fetch:function(t){function o(){return t.apply(this,arguments)}return o.toString=function(){return t.toString()},o}((function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=o.sent;case 3:case"end":return o.stop()}}),o)})))()}))}),l=r,c=n(6),component=Object(c.a)(l,(function(){var t=this,o=t._self._c;return o("section",t._l(t.platforms,(function(n){return o("div",{key:n.id,staticClass:"o-box-platform"},[o("div",{staticClass:"o-box-platform__outer"},[o("div",{staticClass:"o-box-platform__inner"},[o("div",{staticClass:"o-box-platform__intro"},[o("div",{staticClass:"o-box-platform__platform"},[o("div",{staticClass:"o-box-platform__icon"},[o("div",{class:"o-box-platform__icon-file -"+n.slug})]),t._v(" "),o("div",{staticClass:"o-box-platform__statistic"},[o("div",{staticClass:"o-box-platform__statistic-items"},t._l(n.facts,(function(n){return o("div",{key:n.name,staticClass:"o-box-platform__statistic-item"},[o("span",{staticClass:"o-box-platform__statistic-name"},[t._v(t._s(n.name)+": ")]),o("span",{staticClass:"o-box-platform__statistic-value"},[t._v(t._s(n.value))])])})),0),t._v(" "),o("span",{staticClass:"o-box-platform__statistic-info"},[t._v(t._s(n.date))])])])]),t._v(" "),o("div",{staticClass:"o-box-platform__text"},[o("h3",{staticClass:"o-box-platform__headline"},[t._v(t._s(n.name))]),t._v(" "),o("p",{staticClass:"o-box-platform__perex"},[t._v("\n                        "+t._s(n.perex)+"\n                    ")]),t._v(" "),o("div",{staticClass:"o-box-platform__button"},[o("a",{class:"a-button-fill -small -social-"+n.slug,attrs:{href:n.url,target:"_blank",title:n.name}},[t._v("zobrazit")])])])])])])})),0)}),[],!1,null,null,null);o.default=component.exports},356:function(t,o,n){"use strict";n.r(o);var e=n(335),r={name:"PageSocial",components:{oHero:n(137).default,oBoxPlatform:e.default},data:function(){return{headline:"Kde mě najdete"}},head:{title:"Kde mě najdeš | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Sociální síťě kde jsem jako Frytol na cestách"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"}]}},l=n(6),component=Object(l.a)(r,(function(){var t=this,o=t._self._c;return o("main",{staticClass:"t-main -pt-menu",attrs:{role:"main"}},[o("section",{staticClass:"t-section -p0"},[o("div",{staticClass:"t-section__inner"},[o("oHero",{attrs:{headline:t.headline}})],1)]),t._v(" "),o("section",{staticClass:"t-section -p0"},[o("div",{staticClass:"t-section__inner"},[o("oBoxPlatform")],1)])])}),[],!1,null,null,null);o.default=component.exports}}]);