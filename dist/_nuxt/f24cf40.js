(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{451:function(t,e,d){"use strict";d.r(e);d(72);var o={name:"OrganismsoAdGoogleWysiwygComponent",props:{styleThema:{type:String,requred:!1},adStyle:{type:String,requred:!1,default:"display:block"},adClient:{type:String,requred:!1,default:"ca-pub-5217753750259737"},adSlot:{type:String,requred:!1,default:"1014992718"}},methods:{adsenseAddLoad:function(){var t=document.createElement("script");t.type="text/javascript",t.text="(adsbygoogle = window.adsbygoogle || []).push({});",document.getElementsByTagName("body")[0].appendChild(t)},adsenseTitle:function(){var t=document.querySelector(".o-ad-google-wysiwyg iframe");t?t.setAttribute("title","Reklama"):setTimeout(this.adsenseTitle,100)},checkAdStatus:function(){var t=document.querySelector(".o-ad-google-wysiwyg .adsbygoogle");t&&"unfilled"===t.dataset.adStatus?this.adsenseAddLoad():setTimeout(this.checkAdStatus,500)}},mounted:function(){this.adsenseAddLoad(),this.adsenseTitle(),this.checkAdStatus()}},l=d(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:"o-ad-google-wysiwyg"+(t.styleThema?t.styleThema:"")+" mt-2 hidden-print"},[e("div",{staticClass:"o-ad-google-wysiwyg__outer"},[e("div",{staticClass:"o-ad-google-wysiwyg__inner"},[e("div",{staticClass:"o-ad-google-wysiwyg__content"},[e("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":t.adClient,"data-ad-slot":t.adSlot}})])])])])}),[],!1,null,null,null);e.default=component.exports}}]);