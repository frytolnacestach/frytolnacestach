(window.webpackJsonp=window.webpackJsonp||[]).push([[24,9],{402:function(t,e,n){"use strict";n.r(e);var l={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},r=n(1),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):"span"===t.target?e("span",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print"},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},418:function(t,e,n){"use strict";n.r(e);var l={name:"OrganismsoAccountBanneComponent",components:{aButtonFill:n(402).default},props:{styleThema:{type:String,required:!0},account:{type:Array,required:!0}}},r=n(1),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return t.account&&0===t.account.length?e("div",{class:"o-account-banner"+t.styleThema},[e("div",{staticClass:"o-account-banner__outer"},[e("div",{staticClass:"o-account-banner__inner"},[e("h3",{staticClass:"o-account-banner__headline"},[t._v("Ty tu ještě nemáš účet?")]),t._v(" "),e("p",{staticClass:"o-account-banner__description"},[t._v("\n                Založ si účet a otevři dveře k nezapomenutelným dobrodružstvím. Získej výhody jako označování svých cest, sbírání cestovatelských úspěchů a psaní recenzí. Staň se součástí naší cestovatelské komunity.\n            ")]),t._v(" "),e("div",{staticClass:"o-account-banner__buttons"},[e("aButtonFill",{attrs:{target:"internal",url:"/ucet/registrace",text:"Registace",styleThema:" -green",styleSize:" -small"}}),t._v(" "),e("aButtonFill",{attrs:{target:"internal",url:"/ucet/prihlaseni",text:"Přihlášení",styleThema:" -blue",styleSize:" -small"}})],1)])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);