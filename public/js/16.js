(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{XsHn:function(t,e,r){"use strict";r.r(e);var o={name:"AdminError",layout:"admin-layout",props:{status:{required:!0,type:Number}},computed:{error_description:function(){return this.is_allowed_error?{403:"Sorry, you are forbidden from accessing this page.",404:"Sorry, the page you are looking for could not be found.",500:"Whoops, something went wrong on our servers. We are looking into it.",503:"Sorry, we are doing some maintenance. Please check back soon."}[this.status]:"Whoops, something went wrong on our servers. We are looking into it."},error_title_class:function(){return this.is_allowed_error?{403:"text-theme-warning-contrast",404:"text-theme-info-contrast",500:"text-theme-danger-contrast",503:"text-theme-primary"}[this.status]:"text-theme-danger-contrast"},is_allowed_error:function(){return[403,404,500,503].indexOf(this.status)>=0}}},s=r("KHd+"),n=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col items-center justify-center p-6 h-full"},[r("div",[r("h1",{staticClass:"font-black text-7xl text-center",class:t.error_title_class},[t._v("\n            "+t._s(t.is_allowed_error?t.status:"Error")+"\n        ")]),t._v(" "),r("p",{staticClass:"font-semibold mt-4 max-w-full text-center text-theme-base-subtle-contrast text-lg w-72"},[t._v("\n            "+t._s(t.error_description)+"\n        ")])])])}),[],!1,null,null,null);e.default=n.exports}}]);