(window.webpackJsonp=window.webpackJsonp||[]).push([[202,9,13,17,26,33,70,83,117],{403:function(e,t,c){"use strict";c.r(t);var n={name:"MoleculesmHeadlineComponent",components:{aButtonFill:c(404).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},o=c(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[e.title&&"h1"===e.styleSize?t("h1",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.title&&"h2"===e.styleSize?t("h2",{staticClass:"m-headline__title"},[e._v("\n                "+e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:"")+"\n                "),e.url?t("aButtonFill",{attrs:{url:e.url,text:e.urlText,styleThema:" -small -green",target:"internal"}}):e._e()],1):e._e(),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:e._s(e.perex)}}):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,c){"use strict";c.r(t);var n={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},o=c(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{to:e.url}},[e._v(e._s(e.text))]):"span"===e.target?t("span",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print"},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:"")+" hidden-print",attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,c){"use strict";c.r(t);var n={name:"OrganismsoAdGoogleSidebarComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)}},mounted:function(){this.adsenseAddLoad()}},o=c(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{class:"o-ad-google-sidebar"+(e.styleThema?e.styleThema:"")+" mt-2 hidden-print"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},599:function(e,t,c){"use strict";c.r(t);c(57),c(25),c(31),c(22),c(75);var n=c(9),o=(c(39),c(253),c(12),c(36),{name:"OrganismsoPlaceBlockComponent",components:{aButtonFillFull:c(155).default},props:{placeID:{type:Number,required:!0},type:{type:String,required:!0},styleThema:{type:String,required:!1}},data:function(){return{place:[],image:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("kontinent"!==e.type){t.next=6;break}return t.next=3,fetch("https://api.frytolnacestach.cz/api/places-continent-id/".concat(e.placeID)).then((function(e){return e.json()}));case 3:e.place=t.sent,t.next=28;break;case 6:if("stat"!==e.type){t.next=12;break}return t.next=9,fetch("https://api.frytolnacestach.cz/api/places-state-id/".concat(e.placeID)).then((function(e){return e.json()}));case 9:e.place=t.sent,t.next=28;break;case 12:if("region"!==e.type){t.next=18;break}return t.next=15,fetch("https://api.frytolnacestach.cz/api/places-region-id/".concat(e.placeID)).then((function(e){return e.json()}));case 15:e.place=t.sent,t.next=28;break;case 18:if("mesto"!==e.type){t.next=24;break}return t.next=21,fetch("https://api.frytolnacestach.cz/api/places-city-id/".concat(e.placeID)).then((function(e){return e.json()}));case 21:e.place=t.sent,t.next=28;break;case 24:if("misto"!==e.type){t.next=28;break}return t.next=27,fetch("https://api.frytolnacestach.cz/api/places-spot-id/".concat(e.placeID)).then((function(e){return e.json()}));case 27:e.place=t.sent;case 28:if(!e.place){t.next=32;break}return t.next=31,fetch("https://api.frytolnacestach.cz/api/image-id/".concat(e.place[0].id_image_hero)).then((function(e){return e.json()}));case 31:e.image=t.sent;case 32:case"end":return t.stop()}}),t)})))()}))}),r=o,l=c(2),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:"o-place-block"+(e.styleThema?e.styleThema:" -gray")},[t("div",{staticClass:"o-place-block__outer"},[t("div",{staticClass:"o-place-block__inner"},[t("div",{staticClass:"o-place-block__content"},[t("div",{staticClass:"o-place-block__image loading-image -gray"},[e.image?t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 310px, (max-width: 374px) 334px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 304px, (max-width: 1219px) 380px, (max-width: 1399px) 440px, 614px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+"h-"+e.image[0].name,"-312.webp 310w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-334.webp 334w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-360.webp 360w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-420.webp 420w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-536.webp 536w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-728.webp 728w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-312.webp 304w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-380.webp 380w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-440.webp 440w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-614.webp 614w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-624-2x.webp 620w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-668-2x.webp 668w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-720-2x.webp 720w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-840-2x.webp 840w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1072-2x.webp 1072w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1456-2x.webp 1456w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-624-2x.webp 608w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-740-2x.webp 740w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-880-2x.webp 880w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1228-2x.webp 1228w\n                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,".webp"),alt:e.place[0].name}})]):t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 310px, (max-width: 374px) 334px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 991px) 304px, (max-width: 1219px) 380px, (max-width: 1399px) 440px, 614px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-312.webp 310w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-334.webp 334w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-360.webp 360w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-420.webp 420w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-536.webp 536w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-728.webp 728w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-312.webp 304w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-380.webp 380w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-440.webp 440w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-614.webp 614w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-624-2x.webp 620w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-668-2x.webp 668w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-720-2x.webp 720w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-840-2x.webp 840w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-1072-2x.webp 1072w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-1456-2x.webp 1456w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-624-2x.webp 608w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-740-2x.webp 740w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-880-2x.webp 880w,\n                                https://image.frytolnacestach.cz/storage/_default/h-hero-1228-2x.webp 1228w\n                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.place[0].name}})]),e._v(" "),t("div",{staticClass:"o-place-block__filter"},[t("span",{staticClass:"o-place-block__name"},[e._v(e._s(e.place[0].name))])]),e._v(" "),t("NuxtLink",{staticClass:"o-place-block__image-link",attrs:{to:"/svet/".concat(e.type,"/").concat(e.place[0].slug)}})],1),e._v(" "),t("div",{staticClass:"o-place-block__text"},[e.place[0].information_chatgpt?t("div",{staticClass:"o-place-block__wysiwyg",domProps:{innerHTML:e._s(e.place[0].information_chatgpt.replace(/<\/?[^>]+(>|$)/g,"").slice(0,220))}}):e._e(),e._v(" "),t("div",{staticClass:"o-place-block__button"},[t("aButtonFillFull",{attrs:{target:"internal",url:"/svet/".concat(e.type,"/").concat(e.place[0].slug),text:"Číst více",styleThema:e.styleThema?e.styleThema:" -gray"}})],1)])])])])])}),[],!1,null,null,null);t.default=component.exports},620:function(e,t,c){"use strict";c.r(t);var n=c(9),o=(c(39),c(253),c(12),c(74),{name:"OrganismsoAutorSidebarComponent",props:{author:{type:Number,required:!0}},data:function(){return{user:[]}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var c,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=!1,data=null;case 2:if(c){t.next=19;break}return t.prev=3,t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/user-id/".concat(e.author));case 6:n=t.sent,data={user:n},c=!0,t.next=17;break;case 11:return t.prev=11,t.t0=t.catch(3),console.log("API ERROR - O AUTHOR SIDEBAR"),console.error(t.t0),t.next=17,new Promise((function(e){return setTimeout(e,1e3)}));case 17:t.next=2;break;case 19:Object.assign(e,data);case 20:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}),r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-author-sidebar"},[t("div",{staticClass:"o-author-sidebar__outer"},[t("div",{staticClass:"o-author-sidebar__inner"},[t("h4",{staticClass:"o-author-sidebar__headline"},[e._v("Autor")]),e._v(" "),e.user[0]?t("NuxtLink",{staticClass:"o-author-sidebar__name",attrs:{to:"/cestovatel/".concat(e.user[0].slug)}},[e._v(e._s(e.user[0].nickname))]):e._e()],1)])])}),[],!1,null,null,null);t.default=component.exports},621:function(e,t,c){"use strict";c.r(t);c(22),c(75);var n={name:"OrganismsoYoutubeComponent",props:{url:{type:String,required:!0}},methods:{getSlugURL:function(e){return(e=e.replace("https://youtu.be/","").replace("https://youtube.com/shorts/","")).replace(" ","")}}},o=c(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-youtube"},[t("div",{staticClass:"o-youtube__outer"},[t("div",{staticClass:"o-youtube__inner"},[t("div",{staticClass:"o-youtube__video"},[t("iframe",{staticClass:"o-youtube__video-iframe",attrs:{src:"https://www.youtube.com/embed/"+e.getSlugURL(e.url),frameborder:"0",allowfullscreen:""}})])])])])}),[],!1,null,null,null);t.default=component.exports},686:function(e,t,c){"use strict";c.r(t);var n=c(9),o=(c(39),c(253),c(12),c(74),{name:"OrganismsmAutorComponent",props:{author:{type:Number,required:!0}},data:function(){return{user:[]}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var c,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=!1,data=null;case 2:if(c){t.next=19;break}return t.prev=3,t.next=6,e.$axios.$get("https://api.frytolnacestach.cz/api/user-id/".concat(e.author));case 6:n=t.sent,data={user:n},c=!0,t.next=17;break;case 11:return t.prev=11,t.t0=t.catch(3),console.log("API ERROR - M AUTHOR"),console.error(t.t0),t.next=17,new Promise((function(e){return setTimeout(e,1e3)}));case 17:t.next=2;break;case 19:Object.assign(e,data);case 20:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}),r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("i",{staticClass:"m-author"},[e._v("zdroj. "),e.user[0]?t("nuxtLink",{staticClass:"m-author__link",attrs:{to:"/cestovatel/".concat(e.user[0].slug)}},[e._v(e._s(e.user[0].nickname))]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},687:function(e,t,c){"use strict";c.r(t);c(57),c(25);var n={name:"OrganismsoHeroVideoComponent",props:{title:{type:String,required:!0},image:{type:Array,required:!0}}},o=c(2),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-video"},[t("div",{staticClass:"o-hero-video__image loading-image"},[e.image?t("div",{staticClass:"o-hero-video__image-lazyload -gray"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-video__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 349px) 230px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 1019px) 980px, (max-width: 1219px) 1180px, (max-width: 1399px) 1360px, 1880px","data-srcset":"\n                'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                \n                    https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+"h-"+e.image[0].name,"-230.webp 230w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-248.webp 248w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-146.webp 146w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-170.webp 170w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-216.webp 216w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-310.webp 310w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-206.webp 206w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-172.webp 172w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-200.webp 200w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-278.webp 278w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-460-2x.webp 460w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-680-2x.webp 680w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-720-2x.webp 720w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-840-2x.webp 840w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1072-2x.webp 1072w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1456-2x.webp 1456w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-1960-2x.webp 1960w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-2360-2x.webp 2360w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-2720-2x.webp 2720w,\n                    https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+"h-"+e.image[0].name,"-3760-2x.webp 3760w\n                    "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,".webp"),alt:e.title,preload:!0}})]):t("div",{staticClass:"o-hero-video__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-hero-video__image-file lazyload-fil",attrs:{"data-sizes":"(max-width: 349px) 230px, (max-width: 374px) 340px, (max-width: 399px) 360px, (max-width: 459px) 420px, (max-width: 575px) 536px, (max-width: 767px) 728px, (max-width: 1019px) 980px, (max-width: 1219px) 1180px, (max-width: 1399px) 1360px, 1880px","data-srcset":"\n                    https://image.frytolnacestach.cz/storage/h-hero-230.webp 230w,\n                    https://image.frytolnacestach.cz/storage/h-hero-340.webp 340w,\n                    https://image.frytolnacestach.cz/storage/h-hero-360.webp 360w,\n                    https://image.frytolnacestach.cz/storage/h-hero-420.webp 420w,\n                    https://image.frytolnacestach.cz/storage/h-hero-536.webp 536w,\n                    https://image.frytolnacestach.cz/storage/h-hero-728.webp 728w,\n                    https://image.frytolnacestach.cz/storage/h-hero-980.webp 980w,\n                    https://image.frytolnacestach.cz/storage/h-hero-1180.webp 1180w,\n                    https://image.frytolnacestach.cz/storage/h-hero-1360.webp 1360w,\n                    https://image.frytolnacestach.cz/storage/h-hero-1880.webp 1880w,\n                    https://image.frytolnacestach.cz/storage/h-hero-460-2x.webp 460w,\n                    https://image.frytolnacestach.cz/storage/h-hero-680-2x.webp 680w,\n                    https://image.frytolnacestach.cz/storage/h-hero-720-2x.webp 720w,\n                    https://image.frytolnacestach.cz/storage/h-hero-840-2x.webp 840w,\n                    https://image.frytolnacestach.cz/storage/h-hero-1072-2x.webp 1072w,\n                    https://image.frytolnacestach.cz/storage/h-hero-1456-2x.webp 1456w,\n                    https://image.frytolnacestach.cz/storage/h-hero-1960-2x.webp 1960w,\n                    https://image.frytolnacestach.cz/storage/h-hero-2360-2x.webp 2360w,\n                    https://image.frytolnacestach.cz/storage/h-hero-2720-2x.webp 2720w,\n                    https://image.frytolnacestach.cz/storage/h-hero-3760-2x.webp 3760w\n                    ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.title,preload:!0}})]),e._v(" "),t("div",{staticClass:"o-hero-video__outer"},[t("div",{staticClass:"o-hero-video__inner"},[t("h1",{staticClass:"o-hero-video__headline"},[e._v(e._s(e.title))])])])])])}),[],!1,null,null,null);t.default=component.exports},790:function(e,t,c){"use strict";c.r(t);var n=c(9),o=(c(39),c(31),c(154),c(58),c(25),c(57),c(12),c(74),c(686)),r=c(403),l=c(407),h=c(620),m=c(687),d=c(599),f=c(621),w={name:"VideaSlugPage",components:{mAuthor:o.default,mHeadline:r.default,oAdGoogleSidebar:l.default,oAuthorSidebar:h.default,oHeroVideo:m.default,oPlaceBlock:d.default,oYoutube:f.default},data:function(){return{video:this.video}},head:function(){var title,e,t;return title="".concat(this.video[0].title," | Cestovatelský portál Frytol na cestách"),e="".concat(this.video[0].perex?this.video[0].perex.slice(0,this.video[0].perex.lastIndexOf(" ",150)):this.video[0].title?this.video[0].title:"Video"),this.video[0].seo_tags&&this.video[0].seo_tags.length>0&&(t=this.video[0].seo_tags.map((function(e){return e.tag})).join(", ")),"website",{title:title,meta:[{hid:"description",name:"description",content:e},{name:"keywords",content:(this.video[0].title?this.video[0].title:"")+t+", cestovatelské video, cestování, svět, cetovatelský portál"},{property:"og:image",content:"".concat(this.video[0].id_image?"https://image.frytolnacestach.cz/storage"+this.imageVideo[0].source+this.imageVideo[0].name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png")},{hid:"og:title",content:title},{hid:"og:description",content:e},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/videa/").concat(this.video[0].slug)},{hid:"og:type",content:"website"}]}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var c,n,o,data,video,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.$axios,n=e.params,o=!1,data=null;case 3:if(o){t.next=30;break}return t.prev=4,t.next=7,c.$get("https://api.frytolnacestach.cz/api/video/".concat(n.slug));case 7:return video=t.sent,r=null,t.prev=9,t.next=12,c.$get("https://api.frytolnacestach.cz/api/image-id/".concat(video[0].id_image));case 12:r=t.sent,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(9),console.log("API ERROR - IMAGE VIDEO");case 18:data={video:video,imageVideo:r},o=!0,t.next=28;break;case 22:return t.prev=22,t.t1=t.catch(4),console.log("API ERROR - VIDEO DETAIL: ".concat(n.slug)),console.error(t.t1),t.next=28,new Promise((function(e){return setTimeout(e,1e3)}));case 28:t.next=3;break;case 30:return t.abrupt("return",data);case 31:case"end":return t.stop()}}),t,null,[[4,22],[9,15]])})))()}},y=c(2),component=Object(y.a)(w,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -p0"},[t("div",{staticClass:"t-section__inner"},[t("oHeroVideo",{attrs:{image:e.imageVideo,title:e.video[0].title}})],1)]),e._v(" "),t("div",{staticClass:"t-col2"},[t("div",{staticClass:"t-col2__content mb-2"},[e.video[0].perex?t("section",{staticClass:"t-section py-2"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"o-information-block"},[t("div",{staticClass:"o-information-block__outer"},[t("div",{staticClass:"o-information-block__inner"},[t("div",{staticClass:"o-information-block__perex"},[t("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:e._s(e.video[0].perex)}}),e._v(" "),t("div",{staticClass:"o-information-block__author"},[t("mAuthor",{attrs:{author:e.video[0].id_user}})],1)])])])])])]):e._e(),e._v(" "),e.video[0].url?t("section",{staticClass:"t-section py-2 hidden-print"},[t("div",{staticClass:"t-section__inner"},[t("oYoutube",{attrs:{url:e.video[0].url}})],1)]):e._e()]),e._v(" "),t("div",{staticClass:"t-col2__sidebar my-2"},[t("section",{staticClass:"t-section -px-world mb-2 -p0"},[t("div",{staticClass:"t-section__inner"},[t("oAuthorSidebar",{attrs:{author:e.video[0].id_user}})],1)]),e._v(" "),t("section",{staticClass:"t-section -px-world mt-4 mb-2"},[t("div",{staticClass:"t-section__inner"},[t("oAdGoogleSidebar",{attrs:{styleThema:" -gray"}})],1)])])]),e._v(" "),e.video[0].id_continent||e.video[0].id_state||e.video[0].id_region||e.video[0].id_city||e.video[0].id_spot?t("div",{staticClass:"t-layout-full"},[t("section",{staticClass:"t-section -p0 pt-2 pb-1 print-section"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Více informací o místě",styleAlign:" -p-left",styleGap:" mx-2 mb-2"}}),e._v(" "),t("div",{staticClass:"flex mx-1"},[e.video[0].id_continent?t("oPlaceBlock",{attrs:{placeID:e.video[0].id_continent,type:"kontinent"}}):e._e(),e._v(" "),e.video[0].id_state?t("oPlaceBlock",{attrs:{placeID:e.video[0].id_state,type:"stat"}}):e._e(),e._v(" "),e.video[0].id_region?t("oPlaceBlock",{attrs:{placeID:e.video[0].id_region,type:"region"}}):e._e(),e._v(" "),e.video[0].id_city?t("oPlaceBlock",{attrs:{placeID:e.video[0].id_city,type:"mesto"}}):e._e(),e._v(" "),e.video[0].id_spot?t("oPlaceBlock",{attrs:{placeID:e.video[0].id_spot,type:"misto"}}):e._e()],1)],1)])]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);