(window.webpackJsonp=window.webpackJsonp||[]).push([[96,55,138],{404:function(e,t,r){"use strict";r.r(t);r(48),r(37),r(41),r(74),r(75);var n=r(31);r(58),r(12),r(33),r(72);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return c(c({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,r){if(e.date){var n=(new Date).getTime(),o=new Date(e.date).getTime()+e.duration-n;o>0?setTimeout((function(){t.updateMessageVisibility(r,"hidden")}),o):t.updateMessageVisibility(r,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},d=r(1),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(r,n){return"hidden"!==r.visibility?t("div",{key:n,class:"o-flash-messages__item"+(r.status?" -"+r.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(r.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},594:function(e,t,r){"use strict";r.r(t);var n={name:"SkeletonoReviewItemListComponent",props:{styleThema:{type:String,required:!0}}},o=r(1),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-o-review-item-list"},[t("div",{staticClass:"skeleton-o-review-item-list__outer"},[t("div",{staticClass:"skeleton-o-review-item-list__inner"},[t("div",{staticClass:"skeleton-o-review-item-list__items"},e._l(3,(function(r){return t("div",{key:r,staticClass:"skeleton-o-review-item-list__item"},[t("div",{staticClass:"skeleton-o-review-item-list__content"},[t("div",{class:"skeleton-o-review-item-list__image loading-image"+e.styleThema}),e._v(" "),t("div",{class:"skeleton-o-review-item-list__text loading-image"+e.styleThema})])])})),0)])])])}),[],!1,null,null,null);t.default=component.exports},619:function(e,t,r){"use strict";var n=r(3),o=r(76).findIndex,c=r(118),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c(l)},684:function(e,t,r){"use strict";r.r(t);var n=r(31),o=(r(253),r(12),r(9)),c=(r(36),r(254),r(619),r(41),r(58),r(154),r(72),r(404)),l=r(594),d={name:"OrganismsoReviewItemListComponent",components:{oFlashMessages:c.default,skeletonoReviewItemList:l.default},props:{account:{type:Array,required:!0},IDplace:{type:Number,required:!0},reviews:{type:Array,required:!0},type:{type:String,required:!0}},data:function(){return{flashMessage:[],showEditForm:!1,showReview:!0,users:this.users,selectRating:null,text:""}},methods:{editReview:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frytolnacestach.cz/api/review-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:e.account[0].email,password_hash:e.account[0].password,id_place:e.IDplace,type:e.type,rating:e.selectRating,text:e.text})});case 3:(r=t.sent).ok?(e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Recenze byla upravena"}),-1!==(n=e.reviews.findIndex((function(t){return t.id_user===e.account[0].id})))&&(e.reviews[n].text=e.text,e.reviews[n].rating=e.selectRating),e.reviewShowReview()):201===r.status?(e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Recenze byla upravena"}),-1!==(o=e.reviews.findIndex((function(t){return t.id_user===e.account[0].id})))&&(e.reviews[o].text=e.text,e.reviews[o].rating=e.selectRating),e.reviewShowReview()):404===r.status?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Uživatel neexistuje nebo nejste přihlášen"}):406===r.status?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Neplatné hodnoty u hodnocení"}):e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"}),t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(0),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},reviewShowEdit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.showReview=!1,e.showEditForm=!0;case 2:case"end":return t.stop()}}),t)})))()},reviewShowReview:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.showEditForm=!1,e.showReview=!0;case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=!1,data=null;case 2:if(r){t.next=20;break}return t.prev=3,n=e.reviews.map((function(e){return e.id_user})).filter((function(e){return null!==e&&""!==e})),t.next=7,e.$axios.$get("https://api.frytolnacestach.cz/api/users-ids?id=".concat(n.join(",")));case 7:o=t.sent,data={users:o},r=!0,t.next=18;break;case 12:return t.prev=12,t.t0=t.catch(3),console.log("API ERROR - UŽIVATELSKÉ RECENZE"),console.error(t.t0),t.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:t.next=2;break;case 20:Object.assign(e,data);case 21:case"end":return t.stop()}}),t,null,[[3,12]])})))()}},m=r(1),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return e.reviews&&e.reviews.length>0?t("section",{staticClass:"t-section my-2 -p0"},[t("div",{staticClass:"t-section__inner"},[t("section",{staticClass:"t-component-skeleton"},[null===e.reviews?t("skeletonoReviewItemList",{attrs:{styleThema:" -skeleton-green"}}):e._e(),e._v(" "),null!==e.reviews?t("client-only",[t("div",{staticClass:"o-review-item-list"},[t("div",{staticClass:"o-review-item-list__outer"},[t("div",{staticClass:"o-review-item-list__inner"},[t("div",{staticClass:"o-review-item-list__items"},e._l(e.reviews,(function(r){return t("div",{key:r.id,staticClass:"o-review-item-list__item print-section"},[t("div",{staticClass:"o-review-item-list__content"},[e.users&&e.users.find((function(e){return e.id===r.id_user}))?t("div",{staticClass:"o-review-item-list__image loading-image -green"},[t("div",{staticClass:"o-review-item-list__image-lazyload"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy"}],staticClass:"o-review-item-list__image-file lazyload-file",attrs:{"data-sizes":"(max-width: 374px) 40px, (max-width: 575px) 50px, 70px","data-srcset":"\n                                                        https://image.frytolnacestach.cz/storage/_default/s-hero-40.webp 40w,\n                                                        https://image.frytolnacestach.cz/storage/_default/s-hero-50.webp 50w,\n                                                        https://image.frytolnacestach.cz/storage/_default/s-hero-70.webp 70w,\n                                                        https://image.frytolnacestach.cz/storage/_default/s-hero-80-2x.webp 80w,\n                                                        https://image.frytolnacestach.cz/storage/_default/s-hero-100-2x.webp 100w,\n                                                        https://image.frytolnacestach.cz/storage/_default/s-hero-140-2x.webp 140w\n                                                        ","data-src":"https://image.frytolnacestach.cz/storage/_default/hero.webp",alt:e.users.find((function(e){return e.id===r.id_user})).nickname}})]),e._v(" "),t("NuxtLink",{staticClass:"o-review-item-list__image-link",attrs:{to:"/cestovatel/".concat(e.users.find((function(e){return e.id===r.id_user})).slug),"aria-label":"Přejít na profil uživatele ".concat(e.users.find((function(e){return e.id===r.id_user})).nickname)}})],1):e._e(),e._v(" "),t("div",{staticClass:"o-review-item-list__text"},[t("div",{staticClass:"o-form-review-item__messages"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}})],1),e._v(" "),e.showReview?t("div",{staticClass:"o-review-item-list__review"},[t("div",{staticClass:"o-review-item-list__stars"},[t("div",{staticClass:"o-review-item-list__star",class:{"-active":r.rating>0}}),e._v(" "),t("div",{staticClass:"o-review-item-list__star",class:{"-active":r.rating>1}}),e._v(" "),t("div",{staticClass:"o-review-item-list__star",class:{"-active":r.rating>2}}),e._v(" "),t("div",{staticClass:"o-review-item-list__star",class:{"-active":r.rating>3}}),e._v(" "),t("div",{staticClass:"o-review-item-list__star",class:{"-active":r.rating>4}})]),e._v(" "),e.account&&0!==e.account.length&&e.account[0].id===r.id_user?t("div",{staticClass:"o-review-item-list__setting",on:{click:function(t){e.selectRating=r.rating,e.text=r.text,e.reviewShowEdit()}}}):e._e(),e._v(" "),e.users&&e.users.find((function(e){return e.id===r.id_user}))?t("h3",{staticClass:"o-review-item-list__name"},[t("NuxtLink",{staticClass:"o-review-item-list__name-link",attrs:{to:"/cestovatel/".concat(e.users.find((function(e){return e.id===r.id_user})).slug),"aria-label":"Přejít na profil uživatele ".concat(e.users.find((function(e){return e.id===r.id_user})).nickname)}},[e._v(e._s(e.users.find((function(e){return e.id===r.id_user})).nickname))])],1):e._e(),e._v(" "),t("p",{staticClass:"o-review-item-list__perex"},[e._v(e._s(r.text))])]):e._e(),e._v(" "),e.showEditForm?t("div",{staticClass:"o-form-review-item -edit"},[t("div",{staticClass:"o-form-review-item__outer"},[t("div",{staticClass:"o-form-review-item__inner"},[t("form",{staticClass:"o-form-review-item__form",on:{submit:function(t){return t.preventDefault(),e.editReview.apply(null,arguments)}}},[t("div",{staticClass:"o-form-review-item__items"},[t("div",{staticClass:"o-form-review-item__item -notmargin"},[t("div",{staticClass:"m-radio-star__stars"},e._l(5,(function(r){return t("div",{staticClass:"m-radio-star__star"},[t("label",{key:r,staticClass:"m-radio-star__label",on:{click:function(t){e.selectRating=r}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectRating,expression:"selectRating"}],staticClass:"m-radio-star__input -blue",attrs:{type:"radio",name:"rating",required:""},domProps:Object(n.a)({value:r,checked:e.selectRating===r},"checked",e._q(e.selectRating,r)),on:{change:function(t){e.selectRating=r}}}),e._v(" "),t("div",{staticClass:"m-radio-star__star-icon",class:{"-active":e.selectRating>r-1}})])])})),0),e._v(" "),e.account[0].id===r.id_user?t("div",{staticClass:"o-form-review-item__close",on:{click:function(t){return e.reviewShowReview()}}}):e._e()]),e._v(" "),e.users&&e.users.find((function(e){return e.id===r.id_user}))?t("h3",{staticClass:"o-review-item-list__name"},[t("NuxtLink",{staticClass:"o-review-item-list__name-link",attrs:{to:"/cestovatel/".concat(e.users.find((function(e){return e.id===r.id_user})).slug),"aria-label":"Přejít na profil uživatele ".concat(e.users.find((function(e){return e.id===r.id_user})).nickname)}},[e._v(e._s(e.users.find((function(e){return e.id===r.id_user})).nickname))])],1):e._e(),e._v(" "),t("div",{staticClass:"o-form-review-item__item -notmargin"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"a-textarea -green2",attrs:{name:"text",placeholder:"Podělte se o pocity z tohoto místa."},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"o-form-review-item__buttons"},[t("div",{staticClass:"o-form-review-item__button mt-1"},[t("div",{staticClass:"m-button -green",class:{"-notactive":null===e.selectRating}},[t("button",{staticClass:"m-button__input",attrs:{disabled:null===e.selectRating,type:"submit"}},[e._v("UPRAVIT")])])])])])])])]):e._e()])])])})),0)])])])]):e._e()],1)])]):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);