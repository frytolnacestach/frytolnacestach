(window.webpackJsonp=window.webpackJsonp||[]).push([[166,10,12,19,70,92,119],{402:function(t,e,n){"use strict";n.r(e);n(154),n(57),n(58);var r={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(t){var e=this;return"2x"===t?this.sizes.map((function(t){return"https://image.frytolnacestach.cz/storage/".concat(e.imageSource+t.orientation+e.imageName,"-").concat(2*t.imageWidth,"-2x.webp ").concat(2*t.elementWidth,"w")})).join(", "):this.sizes.map((function(t){return"https://image.frytolnacestach.cz/storage/".concat(e.imageSource+t.orientation+e.imageName,"-").concat(t.imageWidth,".webp ").concat(t.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(t,e){return null===t.mediaQueriesWidth?"".concat(t.elementWidth,"px"):"(max-width: ".concat(t.mediaQueriesWidth,"px) ").concat(t.elementWidth,"px")})).join(", ")}}},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.lazy?e("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:t.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":t.generateSizes(),"data-srcset":t.generateSrcSet()+","+t.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+t.imageSource+t.imageName+".webp",alt:t.author}}):t.lazy?t._e():e("img",{class:t.cssClassComponent+"__image-file",attrs:{sizes:t.generateSizes(),srcset:t.generateSrcSet()+","+t.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+t.imageSource+t.imageName+".webp",alt:t.author,fetchpriority:"high"}})}),[],!1,null,null,null);e.default=component.exports},403:function(t,e,n){"use strict";n.r(e);var r={name:"AtomsaButtonFillComponent",props:{url:{type:String,required:!1},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return"internal"===t.target?e("NuxtLink",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{to:t.url}},[t._v(t._s(t.text))]):"span"===t.target?e("span",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print"},[t._v(t._s(t.text))]):e("a",{class:"a-button-fill"+(t.styleThema?t.styleThema:"")+(t.styleSize?t.styleSize:"")+" hidden-print",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.text))])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,n){"use strict";n.r(e);var r={name:"MoleculesmHeadlineComponent",components:{aButtonFill:n(403).default},props:{title:{type:String,required:!1},titleValue:{type:String,required:!1},url:{type:String,required:!1},urlText:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1,default:"h2"},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"m-headline"+(t.styleThema?t.styleThema:"")+(t.styleAlign?t.styleAlign:"")+(t.styleGap?t.styleGap:"")},[e("div",{staticClass:"m-headline__outer"},[e("div",{staticClass:"m-headline__inner"},[t.title&&"h1"===t.styleSize?e("h1",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.title&&"h2"===t.styleSize?e("h2",{staticClass:"m-headline__title"},[t._v("\n                "+t._s(t.title)+" "+t._s(t.titleValue?t.titleValue:"")+"\n                "),t.url?e("aButtonFill",{attrs:{url:t.url,text:t.urlText,styleThema:" -small -green",target:"internal"}}):t._e()],1):t._e(),t._v(" "),t.perex?e("p",{staticClass:"m-headline__perex pt-1",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,n){"use strict";n.r(e);var r={name:"OrganismsoHeroComponent",props:{modifierCSS:{type:String,required:!1,default:" "},classCSS:{type:String,required:!1,default:" "},headline:{type:String,required:!0},perex:{type:String,required:!1}}},l=n(1),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:"o-hero"+t.modifierCSS+t.classCSS},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[t._v(t._s(t.headline))]),t._v(" "),t.perex?e("p",{staticClass:"o-hero__perex",domProps:{innerHTML:t._s(t.perex)}}):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},440:function(t,e,n){"use strict";n.r(e);n(25);var r=n(9),l=(n(36),n(57),n(12),n(38),{name:"OrganismsoPlatformComponent",data:function(){return{platforms:[]}},head:function(){return this.platforms||null!==this.platforms?{script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"ItemList",name:"Sociální Sítě",itemListElement:this.platforms.map((function(t,e){return{"@type":"WebPage",position:e+1,name:t.name,url:t.url,description:t.perex}}))}}]}:{script:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/platforms").then((function(t){return t.json()}));case 2:t.platforms=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-platform"},[e("div",{staticClass:"o-platform__outer"},[e("div",{staticClass:"o-platform__inner"},[e("div",{staticClass:"o-platform__items"},t._l(t.platforms,(function(t){return e("div",{key:t.id,staticClass:"o-platform__item"},[e("div",{staticClass:"o-platform__item-content"},[e("div",{staticClass:"o-platform__icon"},[e("a",{class:"o-platform__icon-file -"+t.slug,attrs:{href:t.url,target:"_blank",rel:"noopener",title:t.name}})])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},655:function(t,e,n){"use strict";n.r(e);var r=n(9),l=(n(36),n(12),n(38),{name:"OrganismsoWhoiamComponent",components:{aImage:n(402).default},data:function(){return{base:[],imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:320},{mediaQueriesWidth:374,elementWidth:344},{mediaQueriesWidth:399,elementWidth:370},{mediaQueriesWidth:459,elementWidth:430},{mediaQueriesWidth:575,elementWidth:546},{mediaQueriesWidth:767,elementWidth:738},{mediaQueriesWidth:991,elementWidth:962},{mediaQueriesWidth:null,elementWidth:320}],imageSizes:[{elementWidth:320,imageWidth:320,orientation:"s-"},{elementWidth:344,imageWidth:344,orientation:"s-"},{elementWidth:370,imageWidth:370,orientation:"s-"},{elementWidth:430,imageWidth:430,orientation:"s-"},{elementWidth:546,imageWidth:546,orientation:"s-"},{elementWidth:738,imageWidth:738,orientation:"s-"},{elementWidth:962,imageWidth:962,orientation:"s-"}]}},head:function(){return this.base||null!==this.base?{script:[{type:"application/ld+json",json:{"@context":"http://schema.org","@type":"Person",name:"Michal Fryč",alternateName:"Frytol na cestách",url:"https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach",image:"https://image.frytolnacestach.cz/storage/main/michal-fryc.webp",description:this.base[0].iam}}]}:{script:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.frytolnacestach.cz/api/base").then((function(t){return t.json()}));case 2:t.base=e.sent;case 3:case"end":return e.stop()}}),e)})))()}))}),o=l,c=n(1),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-whoiam"},[e("div",{staticClass:"o-whoiam__outer"},[e("div",{staticClass:"o-whoiam__inner"},[e("div",{staticClass:"o-whoiam__image loading-image -gray"},[e("div",{staticClass:"o-whoiam__image-lazyload"},[e("aImage",{attrs:{alt:"Michal Fryč",lazy:!0,imageSource:"/main/",imageName:"michal-fryc",sizes:t.imageSizes,srcSet:t.imageSizesMedia,cssClassComponent:"o-whoiam"}})],1)]),t._v(" "),e("div",{staticClass:"o-whoiam__text"},[e("div",{staticClass:"o-whoiam__perex"},[t._v("\n                    "+t._s(t.base[0].iam)+"\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},742:function(t,e,n){"use strict";n.r(e);var r=n(155),l=n(404),o=n(408),c=n(440),m=n(655),d={name:"IamPage",components:{aButtonFillFull:r.default,mHeadline:l.default,oHero:o.default,oPlatform:c.default,oWhoiam:m.default},data:function(){return{headline:"Kdo jsem"}},head:function(){var title,t,e,n,r,l;return"Cestovatelská videa, Internetové platformy, kdo jsem, cestování, svět",e="https://image.frytolnacestach.cz/storage/main/og-default.png",n=title="Kdo jsem | Cestovatelský portál Frytol na cestách",r=t="Kdo je Frytol na cestách? Co dělá a kde ho najdete.","website",{title:title,meta:[{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:t},{name:"keywords",content:"Cestovatelská videa, Internetové platformy, kdo jsem, cestování, svět"},{hid:"og:type",content:"website"},{hid:"og:url",content:l="".concat("https://frytolnacestach.cz","/iam")},{hid:"og:title",content:n},{hid:"og:description",content:r},{property:"og:image",content:e},{name:"twitter:title",content:n},{name:"twitter:description",content:r},{name:"twitter:image",content:e},{name:"twitter:url",content:l}],link:[{rel:"canonical",href:l}],script:[{type:"application/ld+json",json:{"@context":"https://schema.org","@type":"WebPage",name:title,description:t,url:l,datePublished:"2024-01-31",author:{"@type":"Organization",name:"Frytol na cestách",url:"https://www.frytolnacestach.cz/"}}}]}}},h=n(1),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main -gray -pt-menu",attrs:{role:"main"}},[e("div",{staticClass:"t-main__content"},[e("section",{staticClass:"t-section -p0 pt-2 pb-1"},[e("div",{staticClass:"t-section__inner"},[e("oHero",{attrs:{headline:t.headline,modifierCSS:" -gray",classCSS:" mt-2"}})],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1"},[e("div",{staticClass:"t-section__inner"},[e("oWhoiam")],1)]),t._v(" "),e("section",{staticClass:"t-section -p0 py-1 mt-2 px-2"},[e("div",{staticClass:"t-section__inner"},[e("mHeadline",{attrs:{title:"Platformy kde jsem",styleAlign:" -left",styleGap:"mb-1"}}),t._v(" "),e("oPlatform"),t._v(" "),e("div",{staticClass:"flex flex-center mb-4"},[e("aButtonFillFull",{attrs:{target:"internal",url:"/social",text:"Více informací o platformách",styleThema:" -gray"}})],1)],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);