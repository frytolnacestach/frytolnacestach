(window.webpackJsonp=window.webpackJsonp||[]).push([[46,44,114],{374:function(e,t,o){"use strict";var n=o(11),r=o(6),l=o(5),c=o(114),m=o(19),h=o(14),f=o(242),d=o(45),_=o(91),v=o(243),w=o(4),C=o(90).f,k=o(37).f,y=o(18).f,T=o(377),A=o(244).trim,I="Number",F=r.Number,N=F.prototype,x=r.TypeError,E=l("".slice),S=l("".charCodeAt),O=function(e){var t=v(e,"number");return"bigint"==typeof t?t:j(t)},j=function(e){var t,o,n,r,l,c,m,code,h=v(e,"number");if(_(h))throw x("Cannot convert a Symbol value to a number");if("string"==typeof h&&h.length>2)if(h=A(h),43===(t=S(h,0))||45===t){if(88===(o=S(h,2))||120===o)return NaN}else if(48===t){switch(S(h,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+h}for(c=(l=E(h,2)).length,m=0;m<c;m++)if((code=S(l,m))<48||code>r)return NaN;return parseInt(l,n)}return+h};if(c(I,!F(" 0o1")||!F("0b1")||F("+0x1"))){for(var P,M=function(e){var t=arguments.length<1?0:F(O(e)),o=this;return d(N,o)&&w((function(){T(o)}))?f(Object(t),o,M):t},R=n?C(F):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),H=0;R.length>H;H++)h(F,P=R[H])&&!h(M,P)&&y(M,P,k(F,P));M.prototype=N,N.constructor=M,m(r,I,M,{constructor:!0})}},377:function(e,t,o){var n=o(5);e.exports=n(1..valueOf)},380:function(e,t,o){"use strict";o.r(t);var n={name:"OrganismsoFlashMessagesComponent",props:{text:{type:String,required:!0},styleThema:{type:String,required:!0}}},r=o(2),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return e.text?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},[t("div",{class:"o-flash-messages__item"+(e.styleThema?e.styleThema:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(e.text)}})])])])])]):e._e()}),[],!1,null,null,null);t.default=component.exports},572:function(e,t,o){"use strict";o.r(t);var n={name:"SkeletonoFollowerButtonComponent",props:{styleThema:{type:String,required:!0}}},r=o(2),component=Object(r.a)(n,(function(){var e=this._self._c;return e("div",{staticClass:"skeleton-o-follower-button"},[e("div",{staticClass:"skeleton-o-follower-button__outer"},[e("div",{staticClass:"skeleton-o-follower-button__inner"},[e("div",{staticClass:"skeleton-o-follower-button__items"},[e("div",{staticClass:"skeleton-o-follower-button__item"},[e("span",{class:"skeleton-o-follower-button__button loading-image"+this.styleThema})])])])])])}),[],!1,null,null,null);t.default=component.exports},614:function(e,t,o){"use strict";o.r(t);var n=o(10),r=(o(54),o(374),o(13),o(68),o(572)),l=o(380),c={name:"OrganismsoFollowerButtonComponent",components:{skeletonoFollowerButton:r.default,oFlashMessages:l.default},data:function(){return{errorForm:"",successForm:"",skeleton:!0,status:0,email:this.email,passwordHash:this.passwordHash}},props:{user:{type:Number,required:!0}},methods:{follower:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frytolnacestach.cz/api/user-follower-id-follower?email=".concat(encodeURIComponent(e.email),"&password_hash=").concat(encodeURIComponent(e.passwordHash),"&id_follower=").concat(encodeURIComponent(e.user)),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"GET"});case 3:if(!(o=t.sent).ok){t.next=13;break}return console.log("Záznam načten"),t.next=8,o.json();case 8:data=t.sent,e.status=data.message[0].status,e.skeleton=!1,t.next=14;break;case 13:404===o.status?(console.log("Uživatel neexistuje"),e.skeleton=!1):405===o.status?(console.log("Uživatele nesleduješ"),e.skeleton=!1):console.log("Chyba při komunikaci s API");case 14:t.next=21;break;case 16:throw t.prev=16,t.t0=t.catch(0),console.log(t.t0),e.errorForm="Chyba připojení k API",t.t0;case 21:case"end":return t.stop()}}),t,null,[[0,16]])})))()},editFollower:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t.status=e,o.prev=2,o.next=5,fetch("https://api.frytolnacestach.cz/api/user-follower-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:t.email,password_hash:t.passwordHash,id_follower:t.user,status:t.status})});case 5:(n=o.sent).ok?201===n.status?(console.log("Záznam uložen"),t.successForm="Záznam uložen"):200===n.status&&(console.log("Záznam odebrán"),t.successForm="Záznam odebrán",t.status=0):404===n.status?(console.log("Vypadá to že nejsi přihlášen ke svému účtu."),t.status=0,t.errorForm="Vypadá to, že nejsi přihlášen ke svému účtu."):(console.log("Chyba při komunikaci s API"),t.errorForm="Chyba při komunikaci s API"),o.next=14;break;case 9:throw o.prev=9,o.t0=o.catch(2),console.log(o.t0),t.errorForm="Chyba připojení k API",o.t0;case 14:o.next=20;break;case 16:o.prev=16,o.t1=o.catch(0),console.log(o.t1),t.errorForm="Nastala chyba";case 20:case"end":return o.stop()}}),o,null,[[0,16],[2,9]])})))()}},mounted:function(){var e=localStorage.getItem("email"),t=localStorage.getItem("password_hash");this.email=e,this.passwordHash=t,this.follower()}},m=o(2),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"t-component-skeleton"},[!1===e.skeleton?t("client-only",[t("div",{staticClass:"o-follower-button"},[t("oFlashMessages",{attrs:{text:e.errorForm,styleThema:" -error"}}),e._v(" "),t("oFlashMessages",{attrs:{text:e.successForm,styleThema:" -success"}}),e._v(" "),t("div",{staticClass:"o-follower-button__outer"},[t("div",{staticClass:"o-follower-button__inner"},[t("div",{staticClass:"o-follower-button__items"},[t("div",{staticClass:"o-follower-button__item"},[t("span",{staticClass:"o-follower-button__button",class:{"-active":1===e.status},on:{click:function(t){return e.editFollower(1)}}},[e._v(e._s(1===e.status?"Sleduji":"Sledovat"))])])])])])],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);