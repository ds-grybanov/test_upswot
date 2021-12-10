(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-086e6266"],{"1ae4":function(t,s,a){t.exports=a.p+"img/logo.0ce6e5f4.svg"},"4b3f":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"login-page"},[t._m(0),t._m(1),a("div",{staticClass:"benefits"},[a("div",{staticClass:"container"},[t._m(2),a("form",{staticClass:"form"},[a("div",{staticClass:"form__inner"},[a("div",{staticClass:"form__input"},[a("label",{staticClass:"input__label",attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.login,expression:"userData.login"}],staticClass:"input",class:{"input-error":t.errorLogin},attrs:{id:"name",type:"text"},domProps:{value:t.userData.login},on:{input:function(s){s.target.composing||t.$set(t.userData,"login",s.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errorLogin,expression:"errorLogin"}],staticClass:"input__error"},[t._v("Enter correct name")])]),a("div",{staticClass:"form__input"},[a("label",{staticClass:"input__label",attrs:{for:"name"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.pass,expression:"userData.pass"}],staticClass:"input",class:{"input-error":t.errorPass},attrs:{id:"Password",type:"password"},domProps:{value:t.userData.pass},on:{input:function(s){s.target.composing||t.$set(t.userData,"pass",s.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errorPass,expression:"errorPass"}],staticClass:"input__error"},[t._v("Enter correct password")])]),a("button",{staticClass:"form__btn-login",attrs:{type:"button"},on:{click:t.login}},[t._v("LOGIN")]),a("button",{staticClass:"form__btn-forgot",attrs:{type:"button"}},[t._v("Forgot Password")])]),a("a",{staticClass:"form__btn-reg",attrs:{href:"#"}},[t._v("Register now")])])])]),t._m(3)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"header__top"}),e("div",{staticClass:"header__bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header__logo"},[e("img",{staticClass:"header__logo-img",attrs:{src:a("1ae4"),alt:"logo"}}),e("a",{staticClass:"header__logo-link",attrs:{href:"#"}})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header__section"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"header-section__title"},[a("span",[t._v("Welcome to")]),a("span",[t._v("Business Analytics Online")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"benefits__content"},[a("p",{staticClass:"content__title"},[a("strong",[t._v("Business Analytics")]),t._v(" — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's ")]),a("ul",{staticClass:"content__list"},[a("li",{staticClass:"content__list-item"},[t._v(" Interactive Reporting "),a("p",{staticClass:"list__item-text"},[t._v(" In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM),"),a("br"),t._v(" E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities. ")])]),a("li",{staticClass:"content__list-item"},[t._v(" Automated data updates "),a("p",{staticClass:"list__item-text"},[t._v(" The application automatically updates and structures the data in just 60 seconds, saving you time and money. ")])]),a("li",{staticClass:"content__list-item"},[t._v(" Data Security "),a("p",{staticClass:"list__item-text"},[t._v(" The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality. ")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__top"},[e("div",{staticClass:"footer__logo"},[e("img",{staticClass:"footer__logo-img",attrs:{src:a("1ae4"),alt:"logo"}}),e("a",{staticClass:"footer__logo-link",attrs:{href:"#"}})]),e("ul",{staticClass:"footer__list"},[e("li",{staticClass:"footer__list-item"},[e("a",{staticClass:"list__item-link",attrs:{href:"#"}},[t._v("Terms & Conditions")])]),e("li",{staticClass:"footer__list-item"},[e("a",{staticClass:"list__item-link",attrs:{href:"#"}},[t._v("Privacy")])]),e("li",{staticClass:"footer__list-item"},[e("a",{staticClass:"list__item-link",attrs:{href:"#"}},[t._v("Notice at Collection")])]),e("li",{staticClass:"footer__list-item"},[e("a",{staticClass:"list__item-link",attrs:{href:"#"}},[t._v("CA Privacy Hub")])]),e("li",{staticClass:"footer__list-item"},[e("a",{staticClass:"list__item-link",attrs:{href:"#"}},[t._v("Contact Us")])]),e("li",{staticClass:"footer__list-item"},[e("a",{staticClass:"list__item-link",attrs:{href:"#"}},[t._v("Sitemap")])])])]),e("div",{staticClass:"footer__bottom"},[e("p",{staticClass:"footer__bottom-copyright"},[t._v(" Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender. ")])])])])}],r={data:function(){return{userData:{login:void 0,pass:void 0},errorLogin:!1,errorPass:!1}},methods:{login:function(){this.validate()&&(localStorage.setItem("admin",!0),this.$router.push("/todo"))},validate:function(){return"Admin"!=this.userData.login?this.errorLogin=!0:this.errorLogin=!1,"12345"!=this.userData.pass?this.errorPass=!0:this.errorPass=!1,!(this.errorLogin||this.errorPass)}}},o=r,n=(a("7eca"),a("2877")),l=Object(n["a"])(o,e,i,!1,null,"501ad391",null);s["default"]=l.exports},"7eca":function(t,s,a){"use strict";a("aa93")},aa93:function(t,s,a){}}]);
//# sourceMappingURL=chunk-086e6266.f4ec5c65.js.map