(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3],{309:function(t,o,e){"use strict";e.r(o);e(29);var n=e(9),l=(e(64),e(16),e(81),{name:"SectionBoxplatform",data:function(){return{platforms:[]}},fetch:function(t){function o(){return t.apply(this,arguments)}return o.toString=function(){return t.toString()},o}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,fetch("https://frytolnacestach-api.vercel.app/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=o.sent;case 3:case"end":return o.stop()}}),o)})))()}))}),r=l,c=e(12),component=Object(c.a)(r,(function(){var t=this,o=t._self._c;return o("section",t._l(t.platforms,(function(e){return o("div",{key:e.id,staticClass:"o-box-platform"},[o("div",{staticClass:"o-box-platform__outer"},[o("div",{staticClass:"o-box-platform__inner"},[o("div",{staticClass:"o-box-platform__intro"},[o("div",{staticClass:"o-box-platform__platform"},[o("div",{staticClass:"o-box-platform__icon"},[o("div",{class:"o-box-platform__icon-file o-box-platform__icon-file--"+e.slug})]),t._v(" "),o("div",{staticClass:"o-box-platform__statistic"},[o("div",{staticClass:"o-box-platform__statistic-items"},t._l(e.facts,(function(e){return o("div",{key:e.name,staticClass:"o-box-platform__statistic-item"},[o("span",{staticClass:"o-box-platform__statistic-name"},[t._v(t._s(e.name)+": ")]),o("span",{staticClass:"o-box-platform__statistic-value"},[t._v(t._s(e.value))])])})),0),t._v(" "),o("span",{staticClass:"o-box-platform__statistic-info"},[t._v(t._s(e.date))])])])]),t._v(" "),o("div",{staticClass:"o-box-platform__text"},[o("h3",{staticClass:"o-box-platform__headline"},[t._v(t._s(e.name))]),t._v(" "),o("p",{staticClass:"o-box-platform__perex"},[t._v("\n                        "+t._s(e.perex)+"\n                    ")]),t._v(" "),o("div",{staticClass:"o-box-platform__button"},[o("a",{class:"a-button-fill a-button-fill--small a-button-fill--social-"+e.slug,attrs:{href:e.url,target:"_blank",title:e.name}},[t._v("zobrazit")])])])])])])})),0)}),[],!1,null,null,null);o.default=component.exports},317:function(t,o,e){"use strict";e.r(o);var n=e(107),l=e(309),r={name:"PageSocial",components:{SectionHero:n.default,SectionBoxplatform:l.default},data:function(){return{headline:"Kde mě najdete"}},head:{title:"Kde mě najdeš | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Sociální síťě kde jsem jako Frytol na cestách"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/og/og-default.png"}]}},c=e(12),component=Object(c.a)(r,(function(){var t=this,o=t._self._c;return o("main",{staticClass:"t-main"},[o("section",{staticClass:"t-section"},[o("SectionHero",{attrs:{headline:t.headline}})],1),t._v(" "),o("section",[o("SectionBoxplatform")],1)])}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{SectionHero:e(107).default,SectionBoxplatform:e(309).default})}}]);