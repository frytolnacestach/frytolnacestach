(window.webpackJsonp=window.webpackJsonp||[]).push([[15,11],{610:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaTooltipComponent",props:{text:{type:String,required:!0}}},o=n(2),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"a-tooltip"},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},658:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(39),n(253),n(12),{name:"MoleculesmButtonPlaceAddVisitedComponent",components:{aTooltip:n(610).default},props:{account:{type:Array,required:!0},placeID:{type:Number,required:!0},placeType:{type:String,required:!0}},data:function(){return{flashMessage:[]}},methods:{deleteVisited:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.placeID=e,n.prev=2,n.next=5,fetch("https://api.frytolnacestach.cz/api/user-visited-place-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.account[0].email,password_hash:t.account[0].password,id_place:t.placeID,type:t.placeType,status:1})});case 5:(r=n.sent).ok?201===r.status?(t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Místo bylo přidáno mezi navštívené"}),t.searchQuery="",t.emitRemoveNewPlaceEvent(t.placeID)):200===r.status&&t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Záznam odebrán"}):404===r.status?t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Vypadá to, že nejsi přihlášen ke svému účtu."}):t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),n.next=13;break;case 9:throw n.prev=9,n.t0=n.catch(2),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),n.t0;case 13:n.next=18;break;case 15:n.prev=15,n.t1=n.catch(0),t.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nastala chyba"});case 18:case"end":return n.stop()}}),n,null,[[0,15],[2,9]])})))()},emitRemoveNewPlaceEvent:function(e){this.$emit("remove-place",e)}}}),c=n(2),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"m-button-place-add-visited hidden-print",on:{click:function(t){return e.deleteVisited(e.placeID)}}},[t("aTooltip",{attrs:{text:"Už jsem navštívil"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);