(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{417:function(e,t,o){"use strict";o.r(t);var l={name:"OrganismsoMapGoogleComponent",props:{place:{type:Array,required:!0}},data:function(){return{isHydrated:!1,center:{lat:0,lng:0},zoom:this.place[0].zoom[0].google,mapOptions:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!1,styles:[{featureType:"poi.attraction",elementType:"all",stylers:[{visibility:"on"},{color:"#20547e"},{saturation:"0"},{lightness:"13"},{weight:"2.00"}]},{featureType:"poi.attraction",elementType:"labels.icon",stylers:[{weight:"0.01"},{invert_lightness:!0}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"},{color:"#207b7e"},{lightness:"13"},{weight:"2.00"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{invert_lightness:!0}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"}]}]}}},mounted:function(){var e=this;this.fetchPlaceData(),this.$nextTick((function(){e.isHydrated=!0}))},methods:{fetchPlaceData:function(){if(this.place&&this.place.length>0&&this.place[0].coordinates&&this.place[0].coordinates.length>0){var e=this.place[0].coordinates[0].latitude,t=this.place[0].coordinates[0].longitude;isNaN(parseFloat(e))||isNaN(parseFloat(t))?(this.center.lat=e,this.center.lng=t):(this.center.lat=parseFloat(e),this.center.lng=parseFloat(t))}}}},n=o(2),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-map-google"},[t("div",{staticClass:"o-map-google__outer"},[t("div",{staticClass:"o-map-google__inner loading-image -green"},[e.isHydrated?t("gmap-map",{attrs:{center:e.center,zoom:e.zoom,options:e.mapOptions}}):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);