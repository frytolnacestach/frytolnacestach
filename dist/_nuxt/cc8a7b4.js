(window.webpackJsonp=window.webpackJsonp||[]).push([[47,42],{327:function(t,e,n){"use strict";n.r(e);var o={name:"OrganismsoWysiwygComponent",props:{text:{type:Array,required:!0}}},r=n(6),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"o-wysiwyg",domProps:{innerHTML:t._s(t.text)}})}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(53),n(13),n(84),n(137)),c=n(327),l={name:"PageConditions",components:{oHero:r.default,oWysiwyg:c.default},data:function(){return{headline:"Zásady Cookies",base:this.base}},head:{title:"Zásady Cookies | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Zásady Cookies pro web Frytol na cestách"},{name:"keywords",content:"cookies, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Zásady Cookies | Frytol na cestách"},{hid:"og:description",content:"Zásady Cookies pro web Frytol na cestách"},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/cookies")},{hid:"og:type",content:"website"}]},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frytolnacestach-api.vercel.app/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))},d=l,h=n(6),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -bg-person -pt-menu",attrs:{role:"main"}},[e("section",{staticClass:"t-section -p0 mb-1 mt-2"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline}})],1)]),t._v(" "),e("section",{staticClass:"t-section t-section--wysiwyg py-4"},[e("div",{staticClass:"t-section__inner"},[e("oWysiwyg",{attrs:{text:t.base[0].cookies}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);