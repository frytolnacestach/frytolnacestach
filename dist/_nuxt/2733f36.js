(window.webpackJsonp=window.webpackJsonp||[]).push([[48,9,17],{402:function(e,t,n){"use strict";n.r(t);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},c=n(1),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,n){"use strict";n.r(t);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(402).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},c=n(1),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},682:function(e,t,n){"use strict";n.r(t);n(253),n(12),n(57),n(25);var r=n(9),c=(n(36),n(254),n(58),n(41),n(154),n(72),{name:"OrganismsoCoverTitleItemStateComponent",components:{mHeadline:n(403).default},props:{placeStateID:{type:Number,required:!0},type:{type:String,required:!0},title:{type:String,required:!0},perex:{type:String,required:!1},placeStateName:{type:String,required:!0}},data:function(){return{items:null,images:null}},head:function(){var e=this;return this.items||null!==this.items?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"wall_sockets"===this.type?"Elektrické zásuvky":"",itemListElement:this.items.map((function(t,n){return{"@type":"ListItem",position:n+1,item:{"@id":"https://frytolnacestach.cz"+"/".concat(e.type,"/").concat(t.slug),name:t.name}}}))}}]}:{script:[]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,data,r,c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!1,data=null;case 2:if(n){t.next=85;break}if(t.prev=3,r=[],"jidlo"!==e.type){t.next=16;break}if(!e.placeStateID){t.next=12;break}return t.next=9,e.$axios.$get("https://api.frytolnacestach.cz/api/foods-id-state/".concat(e.placeStateID,"?showType=list"));case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0=[];case 13:r=t.t0,t.next=69;break;case 16:if("fauna"!==e.type){t.next=27;break}if(!e.placeStateID){t.next=23;break}return t.next=20,e.$axios.$get("https://api.frytolnacestach.cz/api/faunas-id-state/".concat(e.placeStateID,"?showType=list"));case 20:t.t1=t.sent,t.next=24;break;case 23:t.t1=[];case 24:r=t.t1,t.next=69;break;case 27:if("flora"!==e.type){t.next=38;break}if(!e.placeStateID){t.next=34;break}return t.next=31,e.$axios.$get("https://api.frytolnacestach.cz/api/floras-id-state/".concat(e.placeStateID,"?showType=list"));case 31:t.t2=t.sent,t.next=35;break;case 34:t.t2=[];case 35:r=t.t2,t.next=69;break;case 38:if("znacka"!==e.type){t.next=49;break}if(!e.placeStateID){t.next=45;break}return t.next=42,e.$axios.$get("https://api.frytolnacestach.cz/api/brands-id-state/".concat(e.placeStateID,"?showType=list"));case 42:t.t3=t.sent,t.next=46;break;case 45:t.t3=[];case 46:r=t.t3,t.next=69;break;case 49:if("elektricka-zasuvka"!==e.type){t.next=60;break}if(!e.placeStateID){t.next=56;break}return t.next=53,e.$axios.$get("https://api.frytolnacestach.cz/api/wall-sockets-id-state/".concat(e.placeStateID,"?showType=list"));case 53:t.t4=t.sent,t.next=57;break;case 56:t.t4=[];case 57:r=t.t4,t.next=69;break;case 60:if("retezec"!==e.type){t.next=69;break}if(!e.placeStateID){t.next=67;break}return t.next=64,e.$axios.$get("https://api.frytolnacestach.cz/api/chains-id-state/".concat(e.placeStateID,"?showType=list"));case 64:t.t5=t.sent,t.next=68;break;case 67:t.t5=[];case 68:r=t.t5;case 69:return c=r.map((function(e){return e.id_image_cover})).filter((function(e){return null!==e&&""!==e})),t.next=72,e.$axios.$get("https://api.frytolnacestach.cz/api/images-array?id=".concat(c.join(",")));case 72:o=t.sent,data={items:r,images:o},n=!0,t.next=83;break;case 77:return t.prev=77,t.t6=t.catch(3),console.log("API ERROR - VYPIS oCoverTitleItemState"),console.error(t.t6),t.next=83,new Promise((function(e){return setTimeout(e,1e3)}));case 83:t.next=2;break;case 85:Object.assign(e,data);case 86:case"end":return t.stop()}}),t,null,[[3,77]])})))()}}),o=n(1),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return null!==e.items&&e.items.length>0?t("section",{staticClass:"t-section my-4 py-1 -p0 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:e.title+" ",titleValue:e.placeStateName,perex:e.perex,styleThema:" -world",styleAlign:" -p-left",styleGap:" mb-2"}}),e._v(" "),t("div",{staticClass:"o-cover-title-item-state"},[t("div",{staticClass:"o-cover-title-item-state__outer"},[t("div",{staticClass:"o-cover-title-item-state__items"},e._l(e.items,(function(n){return t("div",{key:n.id,staticClass:"o-cover-title-item-state__item"},[t("div",{staticClass:"o-cover-title-item-state__content"},[t("div",{staticClass:"o-cover-title-item-state__image loading-image -green"},[e.images&&e.images.find((function(image){return image.id===n.id_image_cover}))?t("div",{staticClass:"o-cover-title-item-state__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-title-item-state__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 180w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 210w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 240w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-240.webp 234w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-186.webp 166w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-210.webp 202w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-306.webp 306w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-232-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 480w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-480-2x.webp 468w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-372-2x.webp 332w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-420-2x.webp 404w,\n                                            https://image.frytolnacestach.cz/storage/").concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+"s-"+e.images.find((function(image){return image.id===n.id_image_cover})).name,"-612-2x.webp 612w\n                                        "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.images.find((function(image){return image.id===n.id_image_cover})).source+e.images.find((function(image){return image.id===n.id_image_cover})).name,".webp"),alt:n.name}})]):t("div",{staticClass:"o-cover-title-item-state__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-cover-title-item-state__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 160px, (max-width: 374px) 172px, (max-width: 399px) 180px, (max-width: 459px) 210px, (max-width: 575px) 274px, (max-width: 767px) 240px, (max-width: 991px) 234px, (max-width: 1219px) 166px, (max-width: 1399px) 202px, 306px","data-srcset":"\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-166.webp 160w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-186.webp 172w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-186.webp 180w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-210.webp 210w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-274.webp 274w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-240.webp 240w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-240.webp 234w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-186.webp 166w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-210.webp 202w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-306.webp 306w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-232-2x.webp 320w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-372-2x.webp 344w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-372-2x.webp 360w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-420-2x.webp 420w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-548-2x.webp 548w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-480-2x.webp 480w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-480-2x.webp 468w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-372-2x.webp 332w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-420-2x.webp 404w,\n                                            https://image.frytolnacestach.cz/storage/_default/s-no-image-612-2x.webp 612w\n                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/no-image.webp",alt:n.name}})]),e._v(" "),t("NuxtLink",{staticClass:"o-cover-title-item-state__link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}})],1)]),e._v(" "),t("h3",{staticClass:"o-cover-title-item-state__name"},[t("NuxtLink",{staticClass:"o-cover-title-item-state__name-link",attrs:{to:"/".concat(e.type,"/").concat(n.slug),"aria-label":"Čti více o ".concat(n.name)}},[e._v(e._s(n.name))])],1)])})),0)])])],1)]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);