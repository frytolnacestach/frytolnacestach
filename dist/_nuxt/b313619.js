(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{555:function(t,e,_){"use strict";_.r(e);_(29);var r={name:"OrganismsoAlertComponent",props:{alerts:{type:Array,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("cs",{year:"numeric",month:"long",day:"numeric"})}}},n=_(2),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-alerts"},[e("div",{staticClass:"o-alerts__outer"},[e("div",{staticClass:"o-alerts__inner"},[e("div",{staticClass:"o-alerts__items"},t._l(t.alerts,(function(_){return e("div",{key:_.date_create,class:"o-alerts__item -"+_.type},[e("span",{staticClass:"o-alerts__name"},[t._v(t._s(_.name))]),t._v(" "),e("p",{staticClass:"o-alerts__text"},[t._v(t._s(_.text))]),t._v(" "),e("div",{staticClass:"o-alerts__dates"},[_.date_start?e("span",{staticClass:"o-alerts__date -start"},[t._v("Platí od: "+t._s(t.formatDate(_.date_start))),e("br")]):t._e(),t._v(" "),_.date_end?e("span",{staticClass:"o-alerts__date -end"},[t._v("Platí do: "+t._s(t.formatDate(_.date_end))),e("br")]):t._e(),t._v(" "),_.date_create?e("span",{staticClass:"o-alerts__date -create"},[t._v("Přidáno: "+t._s(t.formatDate(_.date_create))),e("br")]):t._e(),t._v(" "),_.date_update&&_.date_update!==_.date_create?e("span",{staticClass:"o-alerts__date -update"},[t._v("Upraveno: "+t._s(t.formatDate(_.date_update)))]):t._e()])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);