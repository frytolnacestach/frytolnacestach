(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{592:function(e,t,r){"use strict";r.r(t);r(58),r(40),r(12),r(25);var n=r(9),l=(r(22),r(74),r(252),r(39),{name:"OrganismsFormFilterPlaceComponent",props:{styleThema:{type:String,required:!1},typePlaceFilterName:{type:String,required:!0},typePlaceFilter:{type:String,required:!0}},data:function(){return{filterPlaces:[],filterSelect:""}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"continents"===e.typePlaceFilter?(r=e.$route.query.filterIDcontinent)&&(e.filterSelect=parseInt(r,10)):"states"===e.typePlaceFilter&&(n=e.$route.query.filterIDstate)&&(e.filterSelect=parseInt(n,10)),t.next=3,e.loadPlaces();case 3:case"end":return t.stop()}}),t)})))()},methods:{loadPlaces:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("continents"!==e.typePlaceFilter){t.next=8;break}return t.next=3,e.$axios.get("https://api.frytolnacestach.cz/api/places-continents?showType=filter");case 3:r=t.sent,n=r.data,e.filterPlaces=n,t.next=14;break;case 8:if("states"!==e.typePlaceFilter){t.next=14;break}return t.next=11,e.$axios.get("https://api.frytolnacestach.cz/api/places-states?showType=filter");case 11:r=t.sent,l=r.data,e.filterPlaces=l;case 14:e.updateParentVariable(e.filterSelect);case 15:case"end":return t.stop()}}),t)})))()},handleFilterSelectChange:function(){var e=this.filterSelect;"continents"===this.typePlaceFilter?this.$router.replace({query:{filterIDcontinent:e}}):"states"===this.typePlaceFilter&&this.$router.replace({query:{filterIDstate:e}}),this.updateParentVariable(e)},updateParentVariable:function(e){var t=this.filterPlaces.find((function(t){return t.id===e}));t?this.$emit("update",{id:e,name:t.name}):this.$emit("update",{id:null,name:null})}}}),c=r(2),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{class:"o-form-filter-place"+(e.styleThema?e.styleThema:""),attrs:{role:"filter"}},[t("div",{staticClass:"o-form-filter-place__outer"},[t("div",{staticClass:"o-form-filter-place__inner"},[t("div",{staticClass:"o-form-filter-place__form"},[t("div",{class:"m-select"+(e.styleThema?e.styleThema:"")},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.filterSelect,expression:"filterSelect"}],staticClass:"m-select__select",attrs:{name:"filterSelect"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.filterSelect=t.target.multiple?r:r[0]},e.handleFilterSelectChange]}},[t("option",{attrs:{value:""}},[e._v(e._s(e.typePlaceFilterName))]),e._v(" "),e._l(e.filterPlaces,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v(e._s(r.name))])}))],2)])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);