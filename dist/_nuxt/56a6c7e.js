(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{618:function(e,t,c){"use strict";c.r(t);c(57),c(25),c(32),c(22),c(75);var n=c(9),o=(c(36),c(254),c(58),c(12),c(38),{name:"OrganismsoPlaceBlockComponent",components:{aButtonFillFull:c(155).default},props:{placeID:{type:Number,required:!0},type:{type:String,required:!0},styleThema:{type:String,required:!1}},data:function(){return{place:[],image:[]}},head:function(){var e=this;return this.place||0!==this.place.length?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"kontinent"===this.type?"Kontinent":"stat"===this.type?"Stát":"mesto"===this.type?"Město":"region"===this.type?"Region":"misto"===this.type?"Místo":"",itemListElement:this.place.map((function(t,c){return{"@type":"ListItem",position:c+1,item:{"@id":"https://frytolnacestach.cz"+"/svet/".concat(e.type,"/").concat(t.slug),name:t.name}}}))}}]}:{script:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("kontinent"!==e.type){t.next=6;break}return t.next=3,fetch("https://api.frytolnacestach.cz/api/places-continent-id/".concat(e.placeID)).then((function(e){return e.json()}));case 3:e.place=t.sent,t.next=28;break;case 6:if("stat"!==e.type){t.next=12;break}return t.next=9,fetch("https://api.frytolnacestach.cz/api/places-state-id/".concat(e.placeID)).then((function(e){return e.json()}));case 9:e.place=t.sent,t.next=28;break;case 12:if("region"!==e.type){t.next=18;break}return t.next=15,fetch("https://api.frytolnacestach.cz/api/places-region-id/".concat(e.placeID)).then((function(e){return e.json()}));case 15:e.place=t.sent,t.next=28;break;case 18:if("mesto"!==e.type){t.next=24;break}return t.next=21,fetch("https://api.frytolnacestach.cz/api/places-city-id/".concat(e.placeID)).then((function(e){return e.json()}));case 21:e.place=t.sent,t.next=28;break;case 24:if("misto"!==e.type){t.next=28;break}return t.next=27,fetch("https://api.frytolnacestach.cz/api/places-spot-id/".concat(e.placeID)).then((function(e){return e.json()}));case 27:e.place=t.sent;case 28:if(!e.place){t.next=32;break}return t.next=31,fetch("https://api.frytolnacestach.cz/api/image-id/".concat(e.place[0].id_image_hero)).then((function(e){return e.json()}));case 31:e.image=t.sent;case 32:case"end":return t.stop()}}),t)})))()}))}),r=o,h=c(1),component=Object(h.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-place-block"+(e.styleThema?e.styleThema:" -gray")},[t("div",{staticClass:"o-place-block__outer"},[t("div",{staticClass:"o-place-block__inner"},[t("div",{staticClass:"o-place-block__content"},[t("div",{staticClass:"o-place-block__image loading-image -gray"},[e.image?t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 310px, (max-width: 374px) 334px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 304px, (max-width: 1219px) 380px, (max-width: 1399px) 440px, 614px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+"h-"+e.image[0].name,"-312.webp 310w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-334.webp 334w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-360.webp 360w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-420.webp 420w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-536.webp 536w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-728.webp 728w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-312.webp 304w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-380.webp 380w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-440.webp 440w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-614.webp 614w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-624-2x.webp 620w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-668-2x.webp 668w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-720-2x.webp 720w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-840-2x.webp 840w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1072-2x.webp 1072w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1456-2x.webp 1456w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-624-2x.webp 608w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-740-2x.webp 740w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-880-2x.webp 880w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1228-2x.webp 1228w\n                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,".webp"),alt:e.place[0].name}})]):t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 310px, (max-width: 374px) 334px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 304px, (max-width: 1219px) 380px, (max-width: 1399px) 440px, 614px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-312.webp 310w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-334.webp 334w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-728.webp 728w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-312.webp 304w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-380.webp 380w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-440.webp 440w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-614.webp 614w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-624-2x.webp 620w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-668-2x.webp 668w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-1456-2x.webp 1456w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-624-2x.webp 608w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-740-2x.webp 740w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-880-2x.webp 880w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-1228-2x.webp 1228w\n                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.place[0].name}})]),e._v(" "),t("div",{staticClass:"o-place-block__filter"},[t("span",{staticClass:"o-place-block__name"},[e._v(e._s(e.place[0].name))])]),e._v(" "),t("NuxtLink",{staticClass:"o-place-block__image-link",attrs:{to:"/svet/".concat(e.type,"/").concat(e.place[0].slug)}})],1),e._v(" "),t("div",{staticClass:"o-place-block__text"},[e.place[0].information_chatgpt?t("div",{staticClass:"o-place-block__wysiwyg",domProps:{innerHTML:e._s(e.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g,"").slice(0,220))}}):e._e(),e._v(" "),t("div",{staticClass:"o-place-block__button"},[t("aButtonFillFull",{attrs:{target:"internal",url:"/svet/".concat(e.type,"/").concat(e.place[0].slug),text:"Číst více",styleThema:e.styleThema?e.styleThema:" -gray"}})],1)])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);