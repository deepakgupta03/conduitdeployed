(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-page"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[s("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),s("h4",[t._v(t._s(t.profile.username))]),s("p",[t._v(t._s(t.profile.bio))]),s("div",[s("router-link",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{to:{name:"settings"}}},[s("i",{staticClass:"ion-gear-a"}),t._v(" Edit Profile Settings\r\n              ")])],1)])])])]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[s("div",{staticClass:"articles-toggle"},[s("ul",{staticClass:"nav nav-pills outline-active"},[s("li",{staticClass:"nav-item"},[t.username?s("a",{staticClass:"nav-link",class:{active:"user"===t.activeFeed},on:{click:function(e){return t.setFeed("user")}}},[t._v("\r\n                  My Articles\r\n                ")]):t._e()]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:"favorite"===t.activeFeed},on:{click:function(e){return t.setFeed("favorite")}}},[t._v("\r\n                  Favorited Articles\r\n                ")])])])]),t._l(t.globalArticles,(function(t){return s("ArticlePreview",{key:t.slug,attrs:{article:t}})}))],2)])])])},a=[],r=(s("6c7b"),s("ab89")),n={components:{ArticlePreview:r["a"]},mounted:function(){this.$store.dispatch("users/fetchProfile",this.$route.params.username)},methods:{setFeed:function(t,e){e||(this.activePage=1),"favorite"===t?(this.activeFeed="favorite",this.$store.dispatch("articles/getGlobalFeed",{page:e,favorited:this.$route.params.username})):"user"===t&&(this.activeFeed="user",this.$store.dispatch("articles/getGlobalFeed",{page:e,author:this.$route.params.username}))},changePage:function(t){this.activePage=t,this.setFeed(this.activeFeed,t)}},created:function(){this.setFeed("favorite"),this.activePage=1},computed:{globalArticles:function(){return this.$store.state.articles.feed||[]},username:function(){return this.$store.getters["users/username"]},pages:function(){return this.$store.state.articles.count?Array(Math.ceil(this.$store.state.articles.count/10)).fill().map((function(t,e){return e+1})):[]},profile:function(){return this.$store.state.users.profile}},data:function(){return{activeFeed:"global"}}},c=n,l=s("2877"),o=Object(l["a"])(c,i,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d217357.4e6fc8ec.js.map