(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{371:function(e,t,n){"use strict";n.r(t);var c={name:"MoleculesmAccountHeaderComponent",data:function(){return{nickname:null,email:null,parentVariable:!1}},methods:{updateParentVariable:function(){this.parentVariable=!this.parentVariable;var e=this.parentVariable;this.$emit("update",e)}},mounted:function(){var e=localStorage.getItem("nickname"),t=localStorage.getItem("email");this.nickname=e,this.email=t}},l=n(2),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return t("div",[null===e.nickname?t("div",[e._m(0)]):e._e(),e._v(" "),null!==e.nickname?t("client-only",[t("div",{staticClass:"m-account-header"},[t("div",{staticClass:"m-account-header__outer"},[t("div",{staticClass:"m-account-header__inner"},[t("div",{staticClass:"m-account-header__image"},[t("div",{staticClass:"m-account-header__image-file"})]),e._v(" "),t("div",{staticClass:"m-account-header__text"},[t("span",{staticClass:"m-account-header__nickname"},[e._v(e._s(e.nickname))]),e._v(" "),t("span",{staticClass:"m-account-header__email"},[e._v(e._s(e.email))])]),e._v(" "),t("div",{staticClass:"m-account-header__nav",class:{"-open":e.parentVariable},on:{click:function(t){return e.updateParentVariable()}}},[t("span",{staticClass:"m-account-header__nav-icon"})])])])])]):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"skeleton-m-account-header"},[t("div",{staticClass:"skeleton-m-account-header__outer"},[t("div",{staticClass:"skeleton-m-account-header__inner"},[t("div",{staticClass:"skeleton-m-account-header__image"},[t("div",{staticClass:"skeleton-m-account-header__image-file loading-image -skeleton-dark-blue"})]),e._v(" "),t("div",{staticClass:"skeleton-m-account-header__text"},[t("span",{staticClass:"skeleton-m-account-header__nickname loading-image -skeleton-dark-blue"}),e._v(" "),t("span",{staticClass:"skeleton-m-account-header__email loading-image -skeleton-dark-blue"})])])])])}],!1,null,null,null);t.default=component.exports}}]);