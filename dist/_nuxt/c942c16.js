(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{682:function(t,e,n){"use strict";n.r(e);var o={name:"OrganismsoDateOfEventComponent",props:{dateStart:{type:String,required:!0},dateEnd:{type:String,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("cs",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"})}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-date-of-event"},[e("div",{staticClass:"o-date-of-event__outer"},[e("div",{staticClass:"o-date-of-event__inner"},[e("div",{staticClass:"o-date-of-event__start"},[e("span",{staticClass:"o-date-of-event__label"},[t._v("Začátek:")]),t._v(t._s(t.formatDate(t.dateStart)))]),t._v(" "),e("div",{staticClass:"o-date-of-event__end"},[e("span",{staticClass:"o-date-of-event__label"},[t._v("Konec:")]),t._v(t._s(t.formatDate(t.dateEnd)))])])])])}),[],!1,null,null,null);e.default=component.exports}}]);