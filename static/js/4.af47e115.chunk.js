(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{379:function(e,n,t){"use strict";var a=t(0),r=t.n(a),l=t(380),o=t.n(l),c=t(79),u=t.n(c),s=t(13),i=r.a.memo((function(e){var n=e.user,t=e.followIsProgressing,a=e.FollowOrUnfollow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(s.b,{to:"/profile/"+n.id},r.a.createElement("img",{className:o.a.UserPhoto,src:null===n.photos.large?u.a:n.photos.large}))),r.a.createElement("div",null,n.followed?r.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){a(n.id,!1)}},"Unfollow"):r.a.createElement("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){a(n.id,!0)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,n.name),r.a.createElement("div",null," ",n.status)),r.a.createElement("span",null,r.a.createElement("div",null,"\u041c\u043e\u0441\u043a\u0432\u0430"),r.a.createElement("div",null,"\u0420\u043e\u0441\u0441\u0438\u044f"))))}));n.a=i},380:function(e,n,t){e.exports={UserPhoto:"UserElement_UserPhoto__1YiJQ"}},381:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(62),r=t(382),l=t.n(r),o=t(0),c=t.n(o),u=t(21),s=c.a.memo((function(e){for(var n=e.onPageChanged,t=e.totalItems,r=e.pageSize,s=e.currentPage,i=e.currentPageAc,g=Math.ceil(t/r),m=Object(u.c)(),d=Object(o.useCallback)((function(e){m(i(e))}),[m,i]),f=Object(o.useState)(1),p=Object(a.a)(f,2),b=p[0],E=p[1],P=Object(o.useState)(10),h=Object(a.a)(P,2),v=h[0],C=h[1],w=[],O=b;O<=v&&(w.push(O),!(O>=g));O++);return c.a.createElement("div",null,1===b?null:c.a.createElement("span",null,c.a.createElement("button",{onClick:b>1&&function(){C(10),E(1),d(1)}},"back"),c.a.createElement("button",{onClick:b>1&&function(){d(b-10),C(v-10),E(b-10)}},"\u2190")),w.map((function(e){return c.a.createElement("button",{onClick:function(){d(e),n(e)},className:s===e&&l.a.currentPage},e)})),c.a.createElement("button",{onClick:v<g&&function(){d(b+10),C(v+10),E(b+10)}},"\u2192"),c.a.createElement("button",{onClick:v<g&&function(){E(g-10),C(g),d(g-10)}},"next"))}))},382:function(e,n,t){e.exports={currentPage:"Paginator_currentPage__333nY"}},395:function(e,n,t){"use strict";t.r(n);var a=t(51),r=t(52),l=t(54),o=t(53),c=t(0),u=t.n(c),s=t(115),i=t(15),g=t(21),m=t(103),d=t(160),f=t(381),p=t(113),b=t(379),E=function(e){return u.a.createElement("div",null,u.a.createElement(f.a,{onPageChanged:e.onPageChanged,totalItems:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentFriendPage,currentPageAc:e.setCurrentFriendPageAC}),e.isFetching?u.a.createElement(p.a,null):e.friends.map((function(n){return u.a.createElement(b.a,{key:n.id,user:n,toggleFollow:e.toggleFollow,followIsProgressing:e.followIsProgressing,FollowOrUnfollow:e.FollowOrUnfollow})})))},P=function(e){Object(l.a)(t,e);var n=Object(o.a)(t);function t(){var e;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=n.call.apply(n,[this].concat(l))).onPageChanged=function(n){var t=e.props.pageSize;e.props.requestUsers(n,t,!0)},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.pageSize,t=e.currentFriendPage;0===this.props.friends.length&&this.props.requestUsers(t,n,!0)}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(E,Object.assign({},this.props,{onPageChanged:this.onPageChanged}))))}}]),t}(u.a.Component);n.default=Object(i.d)(Object(g.b)((function(e){return{friends:e.UsersPage.friends,pageSize:Object(d.d)(e),totalUsersCount:e.UsersPage.totalFriendsCount,isFetching:Object(d.c)(e),followIsProgressing:Object(d.b)(e),currentFriendPage:e.UsersPage.currentFriendPage}}),{requestUsers:m.c,FollowOrUnfollow:m.a,setCurrentFriendPageAC:m.d}),s.a)(P)}}]);
//# sourceMappingURL=4.af47e115.chunk.js.map