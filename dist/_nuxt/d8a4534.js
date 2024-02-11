(window.webpackJsonp=window.webpackJsonp||[]).push([[59,54],{406:function(e,t,n){"use strict";n.r(t);n(48),n(37),n(41),n(76),n(77);var o=n(31);n(58),n(12),n(33),n(74);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"OrganismsoFlashMessagesComponent",props:{dataMessages:{type:Array,required:!0}},data:function(){return{messages:[]}},methods:{updateMessageVisibility:function(e,t){this.$set(this.messages[e],"visibility",t)}},watch:{dataMessages:{handler:function(e){var t=this;this.messages=e.map((function(e){return c(c({},e),{},{visibility:"visible"})})),this.messages.forEach((function(e,n){if(e.date){var o=(new Date).getTime(),r=new Date(e.date).getTime()+e.duration-o;r>0?setTimeout((function(){t.updateMessageVisibility(n,"hidden")}),r):t.updateMessageVisibility(n,"hidden")}}))},immediate:!0},messages:{handler:function(e){console.log("Změna message:",e)},deep:!0}}},m=n(1),component=Object(m.a)(l,(function(){var e=this,t=e._self._c;return e.messages&&e.messages.length>0?t("div",{staticClass:"o-flash-messages"},[t("div",{staticClass:"o-flash-messages__items"},e._l(e.messages,(function(n,o){return"hidden"!==n.visibility?t("div",{key:o,class:"o-flash-messages__item"+(n.status?" -"+n.status:"")},[t("div",{staticClass:"o-flash-messages__outer"},[t("div",{staticClass:"o-flash-messages__inner"},[t("span",{staticClass:"o-flash-messages__text",domProps:{innerHTML:e._s(n.message)}})])])]):e._e()})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},668:function(e,t,n){"use strict";n.r(t);var o=n(9),r=(n(36),n(12),{name:"OrganismsoFormLoginComponent",components:{oFlashMessages:n(406).default},data:function(){return{flashMessage:[],email:"",password:"",nickname:"",loginStatus:null,account:[]}},methods:{login:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,data,o,r,c,l,m,d,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.frytolnacestach.cz/api/user-login",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:e.email,password:e.password})});case 3:if(!(n=t.sent).ok){t.next=51;break}return t.next=7,n.json();case 7:return data=t.sent,e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"success",message:"Přihlášení úspěšné"}),localStorage.setItem("accountEmail",data.message[0].email),localStorage.setItem("accountPasswordHash",data.message[0].password),localStorage.setItem("accountStatus",data.message[0].status),localStorage.setItem("accountNickname",data.message[0].nickname),(o=new Date).setMonth(o.getMonth()+1),r="expires="+o,document.cookie="FNCaccountEmail="+data.message[0].email+";"+r,document.cookie="FNCaccountPasswordHash="+data.message[0].password+";"+r,document.cookie="FNCaccountStatus="+data.message[0].status+";"+r,document.cookie="FNCaccountNickname="+data.message[0].nickname+";"+r,c=localStorage.getItem("accountEmail"),l=localStorage.getItem("accountPasswordHash"),m=localStorage.getItem("accountStatus"),d=localStorage.getItem("accountNickname"),e.loginStatus=1,e.accountEmail=c,e.accountPasswordHash=l,e.accountStatus=m,e.accountNickname=d,t.prev=29,t.next=32,fetch("https://api.frytolnacestach.cz/api/user-profile/".concat(c));case 32:if(!(h=t.sent).ok){t.next=39;break}return t.next=36,h.json();case 36:e.account=t.sent,t.next=40;break;case 39:e.account=[];case 40:t.next=45;break;case 42:t.prev=42,t.t0=t.catch(29),e.account=[];case 45:return e.$emit("accountData",{loginStatus:1,account:e.account}),e.$store.commit("setAccount",e.account),t.next=49,e.$router.push("/ucet/profil");case 49:t.next=52;break;case 51:401===n.status?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Nesprávné přihlašovací údaje"}):404===n.status?e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Uživatel nenalezen"}):e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba při komunikaci s API"});case 52:t.next=58;break;case 54:throw t.prev=54,t.t1=t.catch(0),e.flashMessage.push({date:(new Date).getTime(),duration:5e3,status:"error",message:"Chyba připojení k API"}),t.t1;case 58:case"end":return t.stop()}}),t,null,[[0,54],[29,42]])})))()}}}),c=n(1),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"o-form-login"},[t("div",{staticClass:"o-form-login__outer"},[t("div",{staticClass:"o-form-login__inner"},[t("oFlashMessages",{attrs:{dataMessages:e.flashMessage}}),e._v(" "),t("form",{staticClass:"o-form-login__form",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t("div",{staticClass:"o-form-login__items"},[t("div",{staticClass:"o-form-login__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"a-input -blue",attrs:{type:"text",name:"email",placeholder:"E-mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"o-form-login__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"a-input -blue",attrs:{type:"password",name:"password",placeholder:"Heslo"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),t("nuxt-link",{attrs:{to:"/ucet/zapomenute-heslo"}},[e._v("Zapomenuté heslo")])],1),e._v(" "),e._m(0)])],1)])])}),[function(){var e=this._self._c;return e("div",{staticClass:"o-form-login__buttons mt-1"},[e("div",{staticClass:"o-form-login__button"},[e("div",{staticClass:"m-button -blue"},[e("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[this._v("Přihlásit se")])])])])}],!1,null,null,null);t.default=component.exports}}]);