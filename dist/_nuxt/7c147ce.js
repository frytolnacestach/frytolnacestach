(window.webpackJsonp=window.webpackJsonp||[]).push([[68,62],{380:function(t,n,e){"use strict";e.r(n);var o={name:"OrganismsoWysiwygComponent",props:{text:{type:Array,required:!0}}},c=e(2),component=Object(c.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"o-wysiwyg",domProps:{innerHTML:t._s(t.text)}})}),[],!1,null,null,null);n.default=component.exports},426:function(t,n,e){"use strict";e.r(n);var o=e(10),c=(e(54),e(13),e(88),e(147)),r=e(380),d={name:"ConditionsPage",components:{oHero:c.default,oWysiwyg:r.default},data:function(){return{headline:"Obchodní podmínky a zásady ochrany osobních údajů",base:this.base}},head:{title:"Obchodní podmínky a zásady ochrany osobních údajů | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Obchodní podmínky a zásady ochrany osobních údajů pro web Frytol na cestách."},{name:"keywords",content:"podmínky, pravdila, eu, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Obchodní podmínky a zásady ochrany osobních údajů | Frytol na cestách"},{hid:"og:description",content:"Obchodní podmínky a zásady ochrany osobních údajů pro web Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/conditions")},{hid:"og:type",content:"website"}]},fetch:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://frytolnacestach-api.vercel.app/api/base").then((function(t){return t.json()}));case 2:t.base=n.sent;case 3:case"end":return n.stop()}}),n)})))()}))},h=d,l=e(2),component=Object(l.a)(h,(function(){var t=this,n=t._self._c;return n("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[n("section",{staticClass:"t-section -p0 mb-1 mt-2"},[n("div",{staticClass:"t-section__inner"},[n("oHero",{attrs:{headline:t.headline,modifierCSS:" -gray"}})],1)]),t._v(" "),n("section",{staticClass:"t-section t-section--wysiwyg py-4"},[n("div",{staticClass:"t-section__inner"},[n("oWysiwyg",{attrs:{text:t.base[0].conditions}})],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);