(window.webpackJsonp=window.webpackJsonp||[]).push([[105,3,6],{357:function(e,t,n){"use strict";n.r(t);var o={name:"MoleculesmHeadlineComponent",props:{title:{type:String,required:!0},titleValue:{type:String,required:!1},perex:{type:String,required:!1},styleThema:{type:String,required:!1},styleAlign:{type:String,required:!1},styleGap:{type:String,required:!1}}},l=n(2),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{class:"m-headline"+(e.styleThema?e.styleThema:"")+(e.styleAlign?e.styleAlign:"")+(e.styleGap?e.styleGap:"")},[t("div",{staticClass:"m-headline__outer"},[t("div",{staticClass:"m-headline__inner"},[t("h2",{staticClass:"m-headline__title"},[e._v(e._s(e.title)+" "+e._s(e.titleValue?e.titleValue:""))]),e._v(" "),e.perex?t("p",{staticClass:"m-headline__perex pt-1"},[e._v(e._s(e.perex))]):e._e()])])])}),[],!1,null,null,null);t.default=component.exports},358:function(e,t,n){"use strict";n.r(t);var o={name:"AtomsaButtonFillFullComponent",props:{url:{type:String,required:!0},text:{type:String,required:!0},target:{type:String,required:!0},styleThema:{type:String,required:!1},styleSize:{type:String,required:!1}}},l=n(2),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return"internal"===e.target?t("NuxtLink",{class:"a-button-fill-full"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{to:e.url}},[e._v(e._s(e.text))]):t("a",{class:"a-button-fill-full"+(e.styleThema?e.styleThema:"")+(e.styleSize?e.styleSize:""),attrs:{href:e.url,target:"_blank"}},[e._v(e._s(e.text))])}),[],!1,null,null,null);t.default=component.exports},382:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(10);n(54),n(13);function l(e){return r.apply(this,arguments)}function r(){return(r=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,o,l,r,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("email"),o=localStorage.getItem("password_hash"),l=localStorage.getItem("status"),r=localStorage.getItem("nickname"),!n||"undefined"==n){e.next=24;break}return e.prev=5,e.next=8,fetch("https://frytolnacestach-api.vercel.app/api/user-login-check",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Headers":"X-Requested-With, Content-Type, Accept","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH"},method:"POST",body:JSON.stringify({email:n,password:o,status:l,nickname:r})});case 8:(c=e.sent).ok?(console.log("Přihlášení stále aktivní"),(d=new Date).setMonth(d.getMonth()+1),m="expires="+d,localStorage.setItem("email",n),localStorage.setItem("password_hash",o),localStorage.setItem("status",l),localStorage.setItem("nickname",r),document.cookie="FNCemail="+n+";"+m,document.cookie="FNCpass="+o+";"+m,document.cookie="FNCstatus="+l+";"+m,document.cookie="FNCnickname="+r+";"+m,t.push("/ucet/profil")):401===c.status?(console.log("Nesprávné přihlašovací údaje"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"):404===c.status?(console.log("Uživatel nenalezen"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"):(console.log("Chyba při komunikaci s API"),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"),e.next=24;break;case 12:throw e.prev=12,e.t0=e.catch(5),console.log(e.t0),localStorage.setItem("email","undefined"),localStorage.setItem("password_hash","undefined"),localStorage.setItem("status","undefined"),localStorage.setItem("nickname","undefined"),document.cookie="FNCemail=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCpass=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCstatus=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="FNCnickname=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}},449:function(e,t,n){"use strict";n.r(t);var o=n(382),l=n(358),r=n(357),c=n(147),d={name:"UcetRegistraceDokoncenaPage",components:{aButtonFillFull:l.default,mHeadline:r.default,oHero:c.default},data:function(){return{headline:"Vaše registrace byla dokončena"}},mounted:function(){Object(o.a)(this.$router)},head:{title:"REGISTRACE DOKONČENA | Frytol na cestách",meta:[{hid:"description",name:"description",content:"Registrace na webu Frytol na cestách."},{name:"keywords",content:"Cestovatelský portál, úvod, cestování, svět"},{property:"og:image",content:"https://image.frytolnacestach.cz/storage/main/og-default.png"},{hid:"og:title",content:"Vaše registrace byla dokonřena"},{hid:"og:description",content:"Registrace na webu Frytol na cestách."},{hid:"og:url",content:"".concat("https://frytolnacestach.cz")},{hid:"og:type",content:"website"}]}},m=n(2),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t("main",{staticClass:"t-main -blue -pt-menu",attrs:{role:"main"}},[t("section",{staticClass:"t-section -p0 pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("oHero",{attrs:{headline:e.headline,modifierCSS:" -blue"}})],1)]),e._v(" "),t("section",{staticClass:"t-section pt-2 pb-1"},[t("div",{staticClass:"t-section__inner"},[t("p",[e._v("\n                    Veše registrace byla úspěšná. Teď se "),t("nuxtLink",{attrs:{to:"/ucet/prihlaseni"}},[e._v("přihlašte")]),e._v(" a následně aktivujte účet.\n                ")],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);