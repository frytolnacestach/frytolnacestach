(window.webpackJsonp=window.webpackJsonp||[]).push([[150,64,115],{405:function(t,e,n){"use strict";n.r(e);var o={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-hero"+t.modifierCSS+t.classCSS},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[t._v(t._s(t.headline))]),t._v(" "),t.perex?e("p",{staticClass:"o-hero__perex",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},581:function(t,e,n){"use strict";n.r(e);var o={name:"OrganismsoWysiwygComponent",props:{text:{type:String,required:!0}}},r=n(2),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"o-wysiwyg",domProps:{innerHTML:t._s(t.text)}})}),[],!1,null,null,null);e.default=component.exports},729:function(t,e,n){"use strict";n.r(e);var o=n(9),r=(n(39),n(12),n(36),n(405)),c=n(581),l={name:"ConditionsUserPage",components:{oHero:r.default,oWysiwyg:c.default},data:function(){return{headline:"Obchodní podmínky a zásady ochrany osobních údajů (pro uživatelský účet)",base:this.base}},head:function(){var title,t;return"podmínky, pravdila, eu, cestování, svět","https://image.frytolnacestach.cz/storage/main/og-default.png","website",{title:title="Obchodní podmínky a zásady ochrany osobních údajů pro uživatelské účty | Cestovatelský portál Frytol na cestách",meta:[{hid:"description",name:"description",content:t="Obchodní podmínky a zásady ochrany osobních údajů pro web Frytol na cestách"},{name:"keywords",content:"podmínky, pravdila, eu, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:title},{hid:"og:description",content:t},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/conditions-user")},{hid:"og:type",content:"website"}]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))},d=l,h=n(2),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 mb-1 mt-2"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline,modifierCSS:" -gray"}})],1)]),t._v(" "),e("section",{staticClass:"t-section -wysiwyg py-4"},[e("div",{staticClass:"t-section__inner"},[e("oWysiwyg",{attrs:{text:t.base[0].conditions_user}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);