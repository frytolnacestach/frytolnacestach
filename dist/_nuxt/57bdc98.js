(window.webpackJsonp=window.webpackJsonp||[]).push([[105,3,6,12,34,42,63],{357:function(e,t,c){"use strict";c.r(t);var o={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))]),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},358:function(e,t,c){"use strict";c.r(t);var o={name:"AtomsaButtonFillFullComponent",props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill-full"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{to:e.url}},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill-full"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},360:function(e,t,c){"use strict";c.r(t);var o={name:"OrganismsoAdGoogleSidebarComponent",props:{adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"5043852899"},adFormat:{type:String,requred:!1,default:"auto"},adResponsive:{type:String,requred:!1,default:"true"}},methods:{adsenseAddLoad:function(){var e=document.createElement("script");e.type="text/javascript",e.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(e)}},mounted:function(){this.adsenseAddLoad()}},r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-ad-google-sidebar mt-2"},[t("div",{staticClass:"o-ad-google-sidebar__outer"},[t("div",{staticClass:"o-ad-google-sidebar__inner"},[t("div",{staticClass:"o-ad-google-sidebar__content"},[t("ins",{staticClass:"adsbygoogle",style:e.adStyle,attrs:{"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":e.adFormat,"data-full-width-responsive":e.adResponsive}})])])])])}),[],!1,null,null,null);t.default=component.exports},389:function(e,t,c){"use strict";c.r(t);c(66),c(28),c(27);var o={name:"OrganismsoPlaceBlockComponent",components:{aButtonFillFull:c(358).default},props:{place:{type:Array,default:null,required:!0},image:{type:Array,default:null,required:!0},type:{type:String,required:!0}}},r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-place-block"},[t("div",{staticClass:"o-place-block__outer"},[t("div",{staticClass:"o-place-block__inner"},[t("div",{staticClass:"o-place-block__content"},[t("div",{staticClass:"o-place-block__image loading-image -gray"},[e.image?t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px, 390px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,"-345.webp 345w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-390.webp 390w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-690-2x.webp 690w,\n                                https://image.frytolnacestach.cz/storage/").concat(e.image[0].source+e.image[0].name,"-780-2x.webp 780w\n                                "),"data-src":"https://image.frytolnacestach.cz/storage/".concat(e.image[0].source+e.image[0].name,".webp"),alt:e.place[0].name}})]):t("div",{staticClass:"o-place-block__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-place-block__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 345px, 390px","data-srcset":"\n                                https://image.frytolnacestach.cz/storage/_default/hero-345.webp 345w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-390.webp 390w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-690-2x.webp 690w,\n                                https://image.frytolnacestach.cz/storage/_default/hero-780-2x.webp 780w\n                                ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.place[0].name}})]),e._v(" "),t("div",{staticClass:"o-place-block__filter"},[t("span",{staticClass:"o-place-block__name"},[e._v(e._s(e.place[0].name))])])]),e._v(" "),t("div",{staticClass:"o-place-block__text"},[e.place[0].information_chatgpt?t("div",{staticClass:"o-place-block__wysiwyg",domProps:{innerHTML:e._s(e.place[0].information_chatgpt.slice(0,220))}}):e._e(),e._v(" "),t("aButtonFillFull",{attrs:{url:"/svet/".concat(e.type,"/").concat(e.place[0].slug),text:"Číst více",styleThema:" -green",target:"internal"}})],1)])])])])}),[],!1,null,null,null);t.default=component.exports},390:function(e,t,c){"use strict";c.r(t);c(22),c(67);var o={name:"OrganismsoYoutubeComponent",props:{url:{type:String,required:!0}},methods:{getSlugURL:function(e){return(e=e.replace("https://youtu.be/","").replace("https://youtube.com/shorts/","")).replace(" ","")}}},r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-youtube"},[t("div",{staticClass:"o-youtube__outer"},[t("div",{staticClass:"o-youtube__inner"},[t("div",{staticClass:"o-youtube__video"},[t("iframe",{staticClass:"o-youtube__video-iframe",attrs:{src:"https://www.youtube.com/embed/"+e.getSlugURL(e.url),frameborder:"0",allowfullscreen:""}})])])])])}),[],!1,null,null,null);t.default=component.exports},421:function(e,t,c){"use strict";c.r(t);c(28);var o={name:"OrganismsoHeroVideoComponent",props:{title:{type:String,required:!0},image:{type:Array,required:!0}}},r=c(2),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-hero-video"},[t("div",{staticClass:"o-hero-video__image loading-image"},[e.image?t("div",{staticClass:"o-hero-video__image-lazyload -gray"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",srcset:{374:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",575:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",767:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",991:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1139:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1219:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1399:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp",1400:"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp","374@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","911@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1139@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1219@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1399@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x","1400@2x":"https://image.frytolnacestach.cz/storage/"+e.image[0].source+e.image[0].name+".webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px"},expression:"{\n                    src: 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                    srcset: {\n                        '374': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '575': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '767': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '991': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1139': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1219': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1399': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '1400': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp',\n                        '374@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '575@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '767@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '911@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1139@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1219@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1399@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x',\n                        '1400@2x': 'https://image.frytolnacestach.cz/storage/' + image[0].source + image[0].name + '.webp 2x'\n                    },\n                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'\n                }"}],staticClass:"o-hero-video__image-file lazyload-file",attrs:{alt:e.title}})]):t("div",{staticClass:"o-hero-video__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:"https://image.frytolnacestach.cz/storage/_default/hero.webp",srcset:{374:"https://image.frytolnacestach.cz/storage/_default/hero.webp",575:"https://image.frytolnacestach.cz/storage/_default/hero.webp",767:"https://image.frytolnacestach.cz/storage/_default/hero.webp",991:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1139:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1219:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1399:"https://image.frytolnacestach.cz/storage/_default/hero.webp",1400:"https://image.frytolnacestach.cz/storage/_default/hero.webp","374@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","575@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","767@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","991@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1139@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1219@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1399@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x","1400@2x":"https://image.frytolnacestach.cz/storage/_default/hero.webp 2x"},sizes:"(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px"},expression:"{\n                    src: 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                    srcset: {\n                        '374': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '575': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '767': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '991': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1139': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1219': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1399': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '1400': 'https://image.frytolnacestach.cz/storage/_default/hero.webp',\n                        '374@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '575@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '767@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '991@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1139@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1219@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1399@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x',\n                        '1400@2x': 'https://image.frytolnacestach.cz/storage/_default/hero.webp 2x'\n                    },\n                    sizes: '(max-width: 374px) 374px, (max-width: 575px) 575px, (max-width: 767px) 767px, (max-width: 991px) 991px, (max-width: 1139px) 1139px, (max-width: 1219px) 1219px, (max-width: 1399px) 1399px, 1400px'\n                }"}],staticClass:"o-hero-video__image-file lazyload-file",attrs:{alt:e.title}})]),e._v(" "),t("div",{staticClass:"o-hero-video__outer"},[t("div",{staticClass:"o-hero-video__inner"},[t("h1",{staticClass:"o-hero-video__headline"},[e._v(e._s(e.title))])])])])])}),[],!1,null,null,null);t.default=component.exports},465:function(e,t,c){"use strict";c.r(t);var o=c(10),r=(c(54),c(27),c(28),c(66),c(13),c(68),c(357)),n=c(360),l=c(421),m=c(389),h=c(390),d={name:"VideaSlugPage",components:{mHeadline:r.default,oAdGoogleSidebar:n.default,oHeroVideo:l.default,oPlaceBlock:m.default,oYoutube:h.default},data:function(){return{video:this.video,placeContinent:[],placeState:[],placeRegion:[],placeCity:[],placeSpot:[],imageContinent:[],imageState:[],imageRegion:[],imageCity:[],imageSpot:[]}},head:function(){return{title:"".concat(this.video[0].title," | Frytol na cestách"),meta:[{hid:"description",name:"description",content:"".concat(this.video[0].perex?this.video[0].perex.slice(0,this.video[0].perex.lastIndexOf(" ",150)):this.video[0].title?this.video[0].title:"Video")},{name:"keywords",content:"".concat(this.video[0].title?this.video[0].title+",":""," cestovatelské video, cestování, svět, cetovatelský portál")},{property:"og:image",content:"".concat(this.video[0].id_image?"https://image.frytolnacestach.cz/storage"+this.imageVideo[0].source+this.imageVideo[0].name+".jpg":"https://image.frytolnacestach.cz/storage/main/og-default.png")},{hid:"og:title",content:"".concat(this.video[0].title," | Frytol na cestách")},{hid:"og:description",content:"".concat(this.video[0].perex?this.video[0].perex.slice(0,this.video[0].perex.lastIndexOf(" ",150)):this.video[0].title?this.video[0].title:"Video")},{hid:"og:url",content:"".concat("https://frytolnacestach.cz","/videa/").concat(this.video[0].slug)},{hid:"og:type",content:"website"}]}},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var c,o,r,data,video,n,l,m,h,d,x,f,_,y,v,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=e.$axios,o=e.params,r=!1,data=null;case 3:if(r){t.next=135;break}return t.prev=4,t.next=7,c.$get("https://frytolnacestach-api.vercel.app/api/video/".concat(o.slug));case 7:return video=t.sent,n=null,t.prev=9,t.next=12,c.$get("https://frytolnacestach-api.vercel.app/api/places-continent-id/".concat(video[0].id_continent));case 12:n=t.sent,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(9),console.log("API ERROR - PLACE CONTINENT: ".concat(video[0].id_continent));case 18:return l=null,t.prev=19,t.next=22,c.$get("https://frytolnacestach-api.vercel.app/api/places-state-id/".concat(video[0].id_state));case 22:l=t.sent,t.next=28;break;case 25:t.prev=25,t.t1=t.catch(19),console.log("API ERROR - PLACE STATE: ".concat(video[0].id_state));case 28:return m=null,t.prev=29,t.next=32,c.$get("https://frytolnacestach-api.vercel.app/api/places-region-id/".concat(video[0].id_region));case 32:m=t.sent,t.next=38;break;case 35:t.prev=35,t.t2=t.catch(29),console.log("API ERROR - PLACE REGION: ".concat(video[0].id_region));case 38:return h=null,t.prev=39,t.next=42,c.$get("https://frytolnacestach-api.vercel.app/api/places-city-id/".concat(video[0].id_city));case 42:h=t.sent,t.next=48;break;case 45:t.prev=45,t.t3=t.catch(39),console.log("API ERROR - PLACE CITY: ".concat(video[0].id_city));case 48:return d=null,t.prev=49,t.next=52,c.$get("https://frytolnacestach-api.vercel.app/api/places-spot-id/".concat(video[0].id_spot));case 52:d=t.sent,t.next=58;break;case 55:t.prev=55,t.t4=t.catch(49),console.log("API ERROR - PLACE SPOT: ".concat(video[0].id_spot));case 58:return x=null,t.prev=59,t.next=62,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(video[0].id_image));case 62:x=t.sent,t.next=68;break;case 65:t.prev=65,t.t5=t.catch(59),console.log("API ERROR - IMAGE VIDEO");case 68:if(f=null,!n){t.next=79;break}return t.prev=70,t.next=73,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(n[0].id_image_hero));case 73:f=t.sent,t.next=79;break;case 76:t.prev=76,t.t6=t.catch(70),console.log("API ERROR - IMAGE PLACE CONTINENT");case 79:if(_=null,!l){t.next=90;break}return t.prev=81,t.next=84,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(l[0].id_image_hero));case 84:_=t.sent,t.next=90;break;case 87:t.prev=87,t.t7=t.catch(81),console.log("API ERROR - IMAGE PLACE STATE");case 90:if(y=null,!m){t.next=101;break}return t.prev=92,t.next=95,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(m[0].id_image_hero));case 95:y=t.sent,t.next=101;break;case 98:t.prev=98,t.t8=t.catch(92),console.log("API ERROR - IMAGE PLACE CONTINENT");case 101:if(v=null,!h){t.next=112;break}return t.prev=103,t.next=106,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(h[0].id_image_hero));case 106:v=t.sent,t.next=112;break;case 109:t.prev=109,t.t9=t.catch(103),console.log("API ERROR - IMAGE PLACE CITY");case 112:if(w=null,!d){t.next=123;break}return t.prev=114,t.next=117,c.$get("https://frytolnacestach-api.vercel.app/api/image-id/".concat(d[0].id_image_hero));case 117:w=t.sent,t.next=123;break;case 120:t.prev=120,t.t10=t.catch(114),console.log("API ERROR - IMAGE PLACE SPOT");case 123:data={video:video,placeContinent:n,placeState:l,placeRegion:m,placeCity:h,placeSpot:d,imageVideo:x,imageContinent:f,imageState:_,imageRegion:y,imageCity:v,imageSpot:w},r=!0,t.next=133;break;case 127:return t.prev=127,t.t11=t.catch(4),console.log("API ERROR - VIDEO DETAIL: ".concat(o.slug)),console.error(t.t11),t.next=133,new Promise((function(e){return setTimeout(e,1e3)}));case 133:t.next=3;break;case 135:return t.abrupt("return",data);case 136:case"end":return t.stop()}}),t,null,[[4,127],[9,15],[19,25],[29,35],[39,45],[49,55],[59,65],[70,76],[81,87],[92,98],[103,109],[114,120]])})))()}},x=c(2),component=Object(x.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -p0 mb-1 mt-2"},[t("div",{staticClass:"t-section__inner"},[t("oHeroVideo",{attrs:{image:e.imageVideo,title:e.video[0].title}})],1)]),e._v(" "),t("div",{staticClass:"t-col2"},[t("div",{staticClass:"t-col2__content my-2"},[e.video[0].perex?t("section",{staticClass:"t-section py-2"},[t("div",{staticClass:"t-section__inner"},[t("div",{staticClass:"o-information-block"},[t("div",{staticClass:"o-information-block__outer"},[t("div",{staticClass:"o-information-block__inner"},[t("div",{staticClass:"o-information-block__perex"},[t("div",{staticClass:"o-information-block_wysiwyg",domProps:{innerHTML:e._s(e.video[0].perex)}}),e._v(" "),e._m(0)])])])])])]):e._e(),e._v(" "),e.video[0].url?t("section",{staticClass:"t-section py-2"},[t("div",{staticClass:"t-section__inner"},[t("oYoutube",{attrs:{url:e.video[0].url}})],1)]):e._e()]),e._v(" "),t("div",{staticClass:"t-col2__sidebar my-2"},[t("section",{staticClass:"t-section -px-world my-2"},[t("div",{staticClass:"t-section__inner"},[t("oAdGoogleSidebar")],1)])])]),e._v(" "),e.video[0].id_continent||e.video[0].id_state||e.video[0].id_city?t("div",{staticClass:"t-layout-full"},[t("section",{staticClass:"t-section -p0 pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("mHeadline",{attrs:{title:"Více informací o místě",styleAlign:" -p-left",styleGap:" mx-2 mb-2"}}),e._v(" "),t("div",{staticClass:"flex mx-1"},[e.placeContinent?t("oPlaceBlock",{attrs:{place:e.placeContinent,image:e.imageContinent,type:"kontinent"}}):e._e(),e._v(" "),e.placeState?t("oPlaceBlock",{attrs:{place:e.placeState,image:e.imageState,type:"stat"}}):e._e(),e._v(" "),e.placeRegion?t("oPlaceBlock",{attrs:{place:e.placeRegion,image:e.imageRegion,type:"region"}}):e._e(),e._v(" "),e.placeCity?t("oPlaceBlock",{attrs:{place:e.placeCity,image:e.imageCity,type:"mesto"}}):e._e(),e._v(" "),e.placeSpot?t("oPlaceBlock",{attrs:{place:e.placeSpot,image:e.imageRegion,type:"misto"}}):e._e()],1)],1)])]):e._e()])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-information-block__author"},[t("i",{staticClass:"m-author"},[e._v("zdroj. "),t("a",{staticClass:"m-author__link",attrs:{href:"#"}},[e._v("Michal Fryč")])])])}],!1,null,null,null);t.default=component.exports}}]);