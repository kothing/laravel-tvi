(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{PJGJ:function(t,s,e){"use strict";e.r(s);var n={name:"AdminProfileIndex",layout:"admin-layout",props:{auth:Object,profile:Object}},a=e("KHd+"),l=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"max-w-5xl mx-auto"},[t.userCan("profile.edit")?e("div",{staticClass:"flex flex-row items-center mb-6"},[e("h1",{staticClass:"mr-auto text-lg"},[t._v("\n            My Profile\n        ")]),t._v(" "),e("inertia-link",{staticClass:"\n                button button-default-responsive button-primary-subtle\n                flex flex-row items-center\n            ",attrs:{href:t.$route("admin.profile.edit")}},[e("icon-edit",{staticClass:"\n                    w-5\n                    md:mr-2\n                "}),t._v(" "),e("span",{staticClass:"hidden md:inline"},[t._v("\n                Edit Profile\n            ")])],1)],1):t._e(),t._v(" "),e("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[e("div",{staticClass:"block px-6 w-full"},[e("p",[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    First Name\n                ")]),t._v("\n                "+t._s(t.profile.first_name)+"\n            ")]),t._v(" "),e("p",{staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Last Name\n                ")]),t._v("\n                "+t._s(t.profile.last_name)+"\n            ")]),t._v(" "),e("p",{staticClass:"mt-2"},[e("span",{staticClass:"block font-semibold text-theme-base-subtle-contrast text-xs"},[t._v("\n                    Email\n                ")]),t._v("\n                "+t._s(t.profile.email)+"\n            ")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);