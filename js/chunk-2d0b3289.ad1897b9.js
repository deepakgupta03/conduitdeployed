(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3289"],{"26d3":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"settings-page"},[s("div",{staticClass:"container page"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[s("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.updateSettings()}}},[s("fieldset",[s("fieldset",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.user.image},on:{input:function(t){t.target.composing||e.$set(e.user,"image",t.target.value)}}})]),s("fieldset",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),s("fieldset",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.user.bio},on:{input:function(t){t.target.composing||e.$set(e.user,"bio",t.target.value)}}})]),s("fieldset",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),s("fieldset",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),s("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n              Update Settings\n            ")])])]),s("hr"),s("button",{staticClass:"btn btn-outline-danger",on:{click:e.logout}},[e._v("\n          Or click here to logout.\n        ")])])])])])},r=[],a={name:"Settings",computed:{user:function(){return this.$store.state.users.user}},methods:{updateSettings:function(){var e=this;this.$store.dispatch("users/updateUser",this.user).then((function(){e.$router.push({name:"home"})}))},logout:function(){var e=this;this.$store.dispatch("users/logout").then((function(){e.$router.push({name:"home"})}))}}},n=a,i=s("2877"),u=Object(i["a"])(n,o,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b3289.ad1897b9.js.map