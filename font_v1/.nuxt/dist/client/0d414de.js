(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{328:function(t,e,r){"use strict";r.r(e);var c=r(7),l=(r(34),r(43),{middleware:"auth",components:{},head:{},data:function(){return{product:[],cart:[],loading:!1,products:[],errors:{}}},mounted:function(){},methods:{setChatBox:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/auth/me").then((function(e){var r=e.data.id,c=e.data.name,l=e.data.email;return t.$router.push({path:"/chatbox/messages",query:{slug:c,username:l,seller_id:r,name:l}})}));case 2:case"end":return e.stop()}}),e)})))()},logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("jwtToken"),e.next=3,t.$auth.logout();case 3:case"end":return e.stop()}}),e)})))()}}}),o=r(33),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user_sidebar"},[e("div",{staticClass:"user_page_list"},[e("ul",[e("li",{class:{active:"/user/user-dashborad"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/user/user-dashborad","exact-active-class":"active"}},[t._v("Dashboard")])],1),t._v(" "),e("li",{on:{click:function(e){return t.setChatBox()}}},[e("Nuxt-link",{attrs:{to:"#"}},[e("a",{attrs:{href:"#"}},[t._v("ChatBox")])])],1),t._v(" "),e("li",{class:{active:"/user/user-profile"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/user/user-profile","exact-active-class":"active"}},[t._v("My account ")])],1),t._v(" "),e("li",{class:{active:"/user/user-orders"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/user/user-orders","exact-active-class":"active"}},[t._v("My Orders ")])],1),t._v(" "),e("li",{class:{active:"/user/user-whichlist"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/user/user-whichlist","exact-active-class":"active"}},[t._v("Wishlist ")])],1),t._v(" "),e("li",{class:{active:"/user/user-affiliate"===t.$route.path}},[e("Nuxt-link",{attrs:{to:"/user/user-affiliate","exact-active-class":"active"}},[t._v("Affiliate Program ")])],1),t._v(" "),e("li",{class:{active:"/user/user-bloglist"===t.$route.path}},[e("nuxt-link",{attrs:{to:"/user/user-bloglist","exact-active-class":"active"}},[t._v("My Blog post")])],1),t._v(" "),e("li",{class:{active:"/user/mySalary"===t.$route.path}},[e("nuxt-link",{attrs:{to:"/user/mySalary","exact-active-class":"active"}},[t._v("My Salary")])],1),t._v(" "),e("li",{class:{active:"/user/myPackages"===t.$route.path}},[e("nuxt-link",{attrs:{to:"/user/myPackages","exact-active-class":"active"}},[t._v("My Packages")])],1),t._v(" "),e("li",{class:{active:"/user/user-withdrawal"===t.$route.path}},[e("nuxt-link",{attrs:{to:"/user/user-withdrawal","exact-active-class":"active"}},[t._v("Withdrawal")])],1),t._v(" "),e("li",{class:{active:"/user/user-security"===t.$route.path}},[e("nuxt-link",{attrs:{to:"/user/user-security","exact-active-class":"active"}},[t._v("Security ")])],1),t._v(" "),e("li",{class:{active:"/user/my-reviews"===t.$route.path}},[e("nuxt-link",{attrs:{to:"/user/my-reviews","exact-active-class":"active"}},[t._v("My Reviews")])],1),t._v(" "),e("li",{},[e("a",{attrs:{type:"button"},on:{click:t.logout}},[t._v("Logout ")])])]),t._v(" "),e("div",{staticClass:"post_mdal_ mdal_"},[e("div",{staticClass:"mdal_content"},[t._m(0),t._v(" "),e("div",{staticClass:"mdal_body"},[e("nuxt-link",{attrs:{to:"/user/user-blogPost"}},[e("i",{staticClass:"fa-solid fa-blog"}),t._v("Blog Post")])],1)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mdal_head"},[t("div",{staticClass:"w-50"}),this._v(" "),t("button",{staticClass:"bt_close"},[t("i",{staticClass:"fa-solid fa-x"})])])}],!1,null,"7a311a32",null);e.default=component.exports}}]);