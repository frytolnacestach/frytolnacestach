(window.webpackJsonp=window.webpackJsonp||[]).push([[119,12],{403:function(e,t,n){"use strict";n.r(t);n(154),n(57),n(58);var r={name:"AtomsaImageComponent",props:{alt:{type:String,required:!1},author:{type:String,required:!1},lazy:{type:Boolean,required:!1},imageSource:{type:String,required:!0},imageName:{type:String,required:!0},sizes:{type:Array,required:!0},srcSet:{type:Array,required:!0},cssClassComponent:{type:String,required:!0}},methods:{generateSrcSet:function(e){var t=this;return"2x"===e?this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(2*e.imageWidth,"-2x.webp ").concat(2*e.elementWidth,"w")})).join(", "):this.sizes.map((function(e){return"https://image.frytolnacestach.cz/storage/".concat(t.imageSource+e.orientation+t.imageName,"-").concat(e.imageWidth,".webp ").concat(e.elementWidth,"w")})).join(", ")},generateSizes:function(){return this.srcSet.map((function(e,t){return null===e.mediaQueriesWidth?"".concat(e.elementWidth,"px"):"(max-width: ".concat(e.mediaQueriesWidth,"px) ").concat(e.elementWidth,"px")})).join(", ")}}},o=n(1),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],class:e.cssClassComponent+"__image-file lazyload-file",attrs:{"data-sizes":e.generateSizes(),"data-srcset":e.generateSrcSet()+","+e.generateSrcSet("2x"),"data-src":"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek"}}):e.lazy?e._e():t("img",{class:e.cssClassComponent+"__image-file",attrs:{sizes:e.generateSizes(),srcset:e.generateSrcSet()+","+e.generateSrcSet("2x"),src:"https://image.frytolnacestach.cz/storage"+e.imageSource+e.imageName+".webp",alt:e.alt?e.alt:"Výchozí obrázek",fetchpriority:"high"}})}),[],!1,null,null,null);t.default=component.exports},656:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(36),n(12),n(38),{name:"OrganismsoWhoiamComponent",components:{aImage:n(403).default},data:function(){return{base:[],imageSizesMedia:[{mediaQueriesWidth:349,elementWidth:320},{mediaQueriesWidth:374,elementWidth:344},{mediaQueriesWidth:399,elementWidth:370},{mediaQueriesWidth:459,elementWidth:430},{mediaQueriesWidth:575,elementWidth:546},{mediaQueriesWidth:767,elementWidth:738},{mediaQueriesWidth:991,elementWidth:962},{mediaQueriesWidth:null,elementWidth:320}],imageSizes:[{elementWidth:320,imageWidth:320,orientation:"s-"},{elementWidth:344,imageWidth:344,orientation:"s-"},{elementWidth:370,imageWidth:370,orientation:"s-"},{elementWidth:430,imageWidth:430,orientation:"s-"},{elementWidth:546,imageWidth:546,orientation:"s-"},{elementWidth:738,imageWidth:738,orientation:"s-"},{elementWidth:962,imageWidth:962,orientation:"s-"}]}},head:function(){return this.base||null!==this.base?{script:[{type:"application/ld+json",json:{"@context":"http://schema.org","@type":"Person",name:"Michal Fryč",alternateName:"Frytol na cestách",url:"https://www.frytolnacestach.cz/cestovatel/frytol-na-cestach",image:"https://image.frytolnacestach.cz/storage/main/michal-fryc.webp",description:this.base[0].iam}}]}:{script:[]}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.frytolnacestach.cz/api/base").then((function(e){return e.json()}));case 2:e.base=t.sent;case 3:case"end":return t.stop()}}),t)})))()}))}),c=o,m=n(1),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-whoiam"},[t("div",{staticClass:"o-whoiam__outer"},[t("div",{staticClass:"o-whoiam__inner"},[t("div",{staticClass:"o-whoiam__image loading-image -gray"},[t("div",{staticClass:"o-whoiam__image-lazyload"},[t("aImage",{attrs:{alt:"Michal Fryč",lazy:!0,imageSource:"/main/",imageName:"michal-fryc",sizes:e.imageSizes,srcSet:e.imageSizesMedia,cssClassComponent:"o-whoiam"}})],1)]),e._v(" "),t("div",{staticClass:"o-whoiam__text"},[t("div",{staticClass:"o-whoiam__perex"},[e._v("\n                    "+e._s(e.base[0].iam)+"\n                ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);