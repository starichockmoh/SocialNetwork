(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(e,n,t){},299:function(e,n,t){e.exports={UserPhoto:"UserElement_UserPhoto__1YiJQ"}},300:function(e,n,t){e.exports={currentPage:"Paginator_currentPage__333nY"}},307:function(e,n,t){"use strict";t.r(n);var r=t(33),a=t(34),o=t(37),l=t(36),u=t(0),c=t.n(u),i=t(11),s=t(104),f=(t(298),t(299)),g=t.n(f),p=t(72),m=t.n(p),h=t(12),d=c.a.memo((function(e){var n=e.user,t=e.followIsProgressing,r=e.FollowOrUnfollow;return c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("div",null,c.a.createElement(h.b,{to:"/profile/"+n.id},c.a.createElement("img",{className:g.a.UserPhoto,src:null===n.photos.large?m.a:n.photos.large}))),c.a.createElement("div",null,n.followed?c.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id,!1)}},"Unfollow"):c.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id,!0)}},"Follow"))),c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("div",null,n.name),c.a.createElement("div",null," ",n.status)),c.a.createElement("span",null,c.a.createElement("div",null,"\u041c\u043e\u0441\u043a\u0432\u0430"),c.a.createElement("div",null,"\u0420\u043e\u0441\u0441\u0438\u044f"))))})),v=t(55),b=t(300),E=t.n(b),P=c.a.memo((function(e){var n=e.onPageChanged,t=e.totalItems,r=e.pageSize,a=Math.ceil(t/r),o=Object(i.c)(),l=Object(i.d)((function(e){return e.UsersPage.currentPage})),f=Object(u.useCallback)((function(e){o(Object(s.d)(e))}),[o]);Object(u.useEffect)((function(){n(l)}),[l,n]);for(var g=Object(u.useState)(1),p=Object(v.a)(g,2),m=p[0],h=p[1],d=Object(u.useState)(10),b=Object(v.a)(d,2),P=b[0],w=b[1],U=[],y=m;y<=P&&(U.push(y),!(y>=a));y++);return c.a.createElement("div",null,1===m?null:c.a.createElement("span",null,c.a.createElement("button",{onClick:m>1&&function(){w(10),h(1),f(1)}},"back"),c.a.createElement("button",{onClick:m>1&&function(){f(m-10),w(P-10),h(m-10)}},"\u2190")),U.map((function(e){return c.a.createElement("button",{onClick:function(){f(e)},className:l===e&&E.a.currentPage},e)})),c.a.createElement("button",{onClick:P<a&&function(){f(m+10),w(P+10),h(m+10)}},"\u2192"),c.a.createElement("button",{onClick:P<a&&function(){h(a-10),w(a),f(a-10)}},"next"))})),w=t(94),U=function(e){return c.a.createElement("div",null,c.a.createElement(P,{onPageChanged:e.onPageChanged,totalItems:e.totalUsersCount,pageSize:e.pageSize}),e.isFetching?c.a.createElement(w.a,null):e.users.map((function(n){return c.a.createElement(d,{key:n.id,user:n,toggleFollow:e.toggleFollow,followIsProgressing:e.followIsProgressing,FollowOrUnfollow:e.FollowOrUnfollow})})))},y=t(7);function O(e,n){return e===n}function C(e,n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}function j(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return n}var k=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var o=0,l=r.pop(),u=j(r),c=e.apply(void 0,[function(){return o++,l.apply(null,arguments)}].concat(t)),i=e((function(){for(var e=[],n=u.length,t=0;t<n;t++)e.push(u[t].apply(null,arguments));return c.apply(null,e)}));return i.resultFunc=l,i.dependencies=u,i.recomputations=function(){return o},i.resetRecomputations=function(){return o=0},i}}((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O,t=null,r=null;return function(){return C(n,t,arguments)||(r=e.apply(null,arguments)),t=arguments,r}}));var F=k((function(e){return e.UsersPage.users}),(function(e){return e.filter((function(e){return!0}))})),S=function(e){return e.UsersPage.pageSize},z=function(e){return e.UsersPage.totalUsersCount},I=function(e){return e.UsersPage.isFetching},_=function(e){return e.UsersPage.followIsProgressing},A=function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var t=e.props.pageSize;e.props.requestUsers(n,t)},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,t=e.pageSize;0===this.props.users.length&&this.props.requestUsers(n,t)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(U,Object.assign({},this.props,{onPageChanged:this.onPageChanged,changeSizeToRight:this.changeSizeToRight,changeSizeToLeft:this.changeSizeToLeft,isFetching:this.props.isFetching})))}}]),t}(c.a.Component);n.default=Object(y.d)(Object(i.b)((function(e){return{users:F(e),pageSize:S(e),totalUsersCount:z(e),isFetching:I(e),followIsProgressing:_(e)}}),{requestUsers:s.c,FollowOrUnfollow:s.a}))(A)}}]);
//# sourceMappingURL=3.f2052b1f.chunk.js.map