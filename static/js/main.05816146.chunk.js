(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,n){e.exports={posts:"MyPosts_posts__HfEV3",PostDescription:"MyPosts_PostDescription__3rGc8"}},102:function(e,t,n){e.exports={item:"Post_item__2HAWx",Hr:"Post_Hr__1lCMw"}},103:function(e,t,n){e.exports={header:"Header_header__LLWQ5",login:"Header_login__2K_em"}},104:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return g}));var a=n(10),r=n.n(a),o=n(21),i=n(24),s=n(4),c=n(17),l={users:[],pageSize:30,totalUsersCount:19,isFetching:!1,followIsProgressing:[],currentPage:1},u=function(e,t){return{type:"USERS_TOGGLE_FOLLOW_PROGRESSING",isProgressing:e,userId:t}},f=function(e){return{type:"SET_CURRENT_PAGE",page:e}},m=function(e){return{type:"FOLLOW_USER_TOGGLE",userId:e}},p=function(e){return{type:"SET_USERS_FETCHING",isFetching:e}},d=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(!0)),n.next=3,c.b.getUsers(e,t);case 3:o=n.sent,a(p(!1)),a({type:"SET_USERS",users:o.items}),a({type:"SET_TOTAL_USERS_COUNT",totalUsersCount:o.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(o.a)(r.a.mark((function n(a){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a(u(!0,e)),!t){n.next=8;break}return n.next=4,c.b.followUser(e);case 4:0===n.sent.resultCode&&a(m(e)),n.next=12;break;case 8:return n.next=10,c.b.unfollowUser(e);case 10:0===n.sent.resultCode&&a(m(e));case 12:a(u(!1,e));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.page});case"FOLLOW_USER_TOGGLE":return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!e.followed}):e}))});case"SET_USERS":return Object(s.a)(Object(s.a)({},e),{},{users:Object(i.a)(t.users)});case"SET_TOTAL_USERS_COUNT":return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET_USERS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"USERS_TOGGLE_FOLLOW_PROGRESSING":return Object(s.a)(Object(s.a)({},e),{},{followIsProgressing:t.isProgressing?[].concat(Object(i.a)(e.followIsProgressing),[t.userId]):e.followIsProgressing.filter((function(e){return e!==t.userId}))});default:return e}}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(24),r=n(4),o={NewsPost:[{Text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u0430\u0431\u0430 \u041d\u044e\u0440\u0430 \u0437\u0430\u0441\u043e\u043b\u0438\u043b\u0430 \u043e\u0433\u0443\u0440\u0446\u044b",id:1,Avtor:"Vasya Totechkin",Img:""},{Text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u0430\u0431\u0430 \u041d\u044e\u0440\u0430 \u0437\u0430\u0441\u043e\u043b\u0438\u043b\u0430 \u043e\u0433\u0443\u0440\u0446\u044b",id:2,Avtor:"Vasya Totechkin",Img:""},{Text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u0430\u0431\u0430 \u041d\u044e\u0440\u0430 \u0437\u0430\u0441\u043e\u043b\u0438\u043b\u0430 \u043e\u0433\u0443\u0440\u0446\u044b",id:3,Avtor:"Vasya Totechkin",Img:""},{Text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u0430\u0431\u0430 \u041d\u044e\u0440\u0430 \u0437\u0430\u0441\u043e\u043b\u0438\u043b\u0430 \u043e\u0433\u0443\u0440\u0446\u044b",id:4,Avtor:"Vasya Totechkin",Img:""},{Text:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0431\u0430\u0431\u0430 \u041d\u044e\u0440\u0430 \u0437\u0430\u0441\u043e\u043b\u0438\u043b\u0430 \u043e\u0433\u0443\u0440\u0446\u044b",id:5,Avtor:"Vasya Totechkin",Img:""}],NewsNewsText:"hey"},i=function(){return{type:"ADD_NEWS"}},s=function(e){return{type:"UPDATE_NEWS",newText:e}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEWS":var n={Text:e.NewsNewsText,Id:5,Img:"",Avtor:"Salam"};return Object(r.a)(Object(r.a)({},e),{},{NewsNewsText:"",NewsPost:[].concat(Object(a.a)(e.NewsPost),[n])});case"UPDATE_NEWS":return Object(r.a)(Object(r.a)({},e),{},{NewsNewsText:t.newText});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(94),r=n(0),o=n.n(r),i=function(e,t,n,r,i){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(a.a,Object.assign({name:e,validate:t,component:n,placeholder:r},i)),s)}},136:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(74),i=n.n(o),s=n(59),c=n.n(s);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:c.a.Preloader,src:i.a}))}},137:function(e,t,n){"use strict";var a=n(25),r=n(40),o=n(13),i=n(95),s=n(0),c=n.n(s),l=Object(a.a)(20),u=Object(r.a)("textarea"),f=Object(r.a)("input"),m=Object(i.a)({form:"messageInput"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},Object(o.a)("ProfileNameInput",[a.b,l],f,"Write your name",{}),Object(o.a)("ProfileAboutMeInput",[a.b,l],u,"About you",null),Object(o.a)("ProfileLookingForAJobInput",null,f,null,{type:"checkbox"},"Looking for a job:"),Object(o.a)("ProfileLookingForAJobDescriptionInput",[a.b,l],u,"Descriptions for looking",null),"Your contacts:",c.a.createElement("hr",null),Object(o.a)("ProfileContactsFacebookInput",[l],f,"Facebook",null),Object(o.a)("ProfileContactsVkInput",[l],f,"Vk",null),Object(o.a)("ProfileContactsGithubInput",[l],f,"Git",null),Object(o.a)("ProfileContactsInstagramInput",[l],f,"Instagram",null),Object(o.a)("ProfileContactsTwitterInput",[l],f,"Twitter",null),Object(o.a)("ProfileContactsWebsiteInput",[l],f,"Website",null),Object(o.a)("ProfileContactsYoutubeInput",[l],f,"Youtube",null),Object(o.a)("ProfileContactsMainInput",[l],f,"Main",null),c.a.createElement("button",null,"add"))}));t.a=m},14:function(e,t,n){e.exports={nav:"Navbar_nav__1qYDw",item:"Navbar_item__3zJ7y",settings:"Navbar_settings__1bVOI",active:"Navbar_active__1FSHH",friendsBar:"Navbar_friendsBar__DCjSi"}},143:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(139),r=a.create({withCredentials:!0,headers:{"API-KEY":"bd00ffb7-cce4-4216-900b-0b45ad38455d"},baseURL:"https://social-network.samuraijs.com/api/1.0"}),o={AuthUser:function(){return r.get("auth/me").then((function(e){return e.data}))},AuthLogin:function(e,t,n){return r.post("auth/login",{email:e,password:t,rememberMe:n})},AuthLogOut:function(){return r.post("auth/logout")}},i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getProfileStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status/",{status:e})},changeProfile:function(e,t,n,a,o,i){return r.put("profile",{userId:e,AboutMe:t,lookingForAJob:n,lookingForAJobDescription:a,fullName:o,contacts:i}).then((function(e){return e.data}))}}},170:function(e,t,n){e.exports=n(297)},175:function(e,t,n){},176:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required!"},r=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(t.length>e)return"Max length is ".concat(e," symbols")}}},26:function(e,t,n){e.exports={Dialogs:"Dialogs_Dialogs__299da",DialogsItem:"Dialogs_DialogsItem__2LzZ5",OnOf:"Dialogs_OnOf__1ykwy",Dialog:"Dialogs_Dialog__3bHRR",Messages:"Dialogs_Messages__336IC",Message:"Dialogs_Message__16Ich",active:"Dialogs_active__2OoQ0",NewMessage:"Dialogs_NewMessage__1dPWM",EnterMessage:"Dialogs_EnterMessage__TvDS4"}},297:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(68),i=n.n(o);n(175),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(31),c=n(32),l=n(34),u=n(33),f=(n(176),n(7)),m=n(24),p=n(4),d={DialogsData:[{Img:"https://i12.fotocdn.net/s124/7d077c09f4b27b65/gallery_xl/2824373953.jpg",Name:"\u0412\u0430\u043d\u0435\u043a",id:1,OnOf:"https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg"},{Img:"http://s3.fotokto.ru/photo/full/281/2819005.jpg",Name:"\u0411\u0440\u0430\u0442\u0438\u043a",id:2,OnOf:"https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg"},{Img:"https://www.photoforum.ru/f/photo/000/774/774816_50.jpg",Name:"\u041f\u0430\u0445\u0430\u043d",id:3,OnOf:"of"},{Img:"https://get.pxhere.com/photo/man-boy-model-blue-clothing-neck-sunglasses-glasses-eyewear-aviator-photo-shoot-sensolatino-vision-care-white-collar-worker-1278226.jpg",Name:"\u0414\u0430\u043d\u0438\u043b",id:4,OnOf:"https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg"},{Img:"https://get.wallhere.com/photo/black-background-sunglasses-glasses-fingers-man-hand-muscle-hairstyle-football-player-tennis-player-facial-hair-wrestler-eyewear-613569.jpg",Name:"\u0421\u0432\u0435\u0442\u0430",id:5,OnOf:"https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg"},{Img:"https://f3.mylove.ru/J1NuDGy2QF.jpg",Name:"\u041a\u0435\u0444\u0438\u0440",id:6,OnOf:"of"},{Img:"https://sun9-68.userapi.com/c638031/v638031076/baa0/mIIa28ICfK8.jpg",Name:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d",id:7,OnOf:"of"},{Img:"https://get.wallhere.com/photo/face-model-glasses-actor-dog-fashion-cool-man-photoshoot-male-photo-shoot-vision-care-interaction-facial-hair-josh-duhamel-581315.jpg",Name:"\u0424\u0435\u0434\u044f",id:8,OnOf:"of"},{Img:"https://ves-rf.ru/sites/default/files/article-img/20140424/putin-v-ochkah1.jpg",Name:"\u041d\u0430\u0433\u0438\u0431\u0430\u0442\u043e\u0440",id:9,OnOf:"of"},{Img:"https://pbs.twimg.com/profile_images/495205584040259586/EQoA3nOm.jpeg",Name:"\u0423\u0433\u043d\u0435\u0442\u0430\u0442\u0435\u043b\u044c ",id:10,OnOf:"https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg"},{Img:"https://get.wallhere.com/photo/white-black-monochrome-portrait-sunglasses-glasses-photography-music-Studio-shades-Rayban-cool-man-beard-male-black-and-white-monochrome-photography-vision-care-facial-hair-eyewear-722192.jpg",Name:"\u041c\u0430\u0442\u044c",id:11,OnOf:"of"}],MessagesData:{MyMessages:[{message:"\u0428\u0430\u043b\u043e\u043c",id:1},{message:"\u0424\u0430\u0440\u0442\u0443 \u043f\u043e \u0436\u0438\u0437\u043d\u0438",id:2}],FriendMessages:[{message:"\u0413\u0434\u0435 \u0434\u0435\u043d\u044c\u0433\u0438",id:45}]}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DIALOGS_MESSAGE":var n={message:t.message,id:3};return Object(p.a)(Object(p.a)({},e),{},{MessagesData:Object(p.a)(Object(p.a)({},e.MessagesData),{},{MyMessages:[].concat(Object(m.a)(e.MessagesData.MyMessages),[n])})});default:return e}},b=n(10),h=n.n(b),E=n(21),O=n(17),v="ADD_PROFILE_POST",P={PostsData:[{message:"Heil Hitler",id:1,likecount:1488},{message:"salam",id:2,likecount:228}],ProfileInfo:null,ProfileStatus:""},_=function(e){return{type:"SET_PROFILE_STATUS",status:e}},I=function(e){return function(){var t=Object(E.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.b.getUserProfile(e);case 2:a=t.sent,n({type:"SET_PROFILE",ProfileInfo:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_PROFILE_POST":return Object(p.a)(Object(p.a)({},e),{},{PostsData:e.PostsData.filter((function(e){return e.id!==t.postId}))});case v:var n={message:t.post,id:5,likecount:148};return Object(p.a)(Object(p.a)({},e),{},{PostsData:[].concat(Object(m.a)(e.PostsData),[n])});case"SET_PROFILE":return Object(p.a)(Object(p.a)({},e),{},{ProfileInfo:t.ProfileInfo});case"SET_PROFILE_STATUS":return Object(p.a)(Object(p.a)({},e),{},{ProfileStatus:t.status});default:return e}},S=n(114),N={FriendsBarData:[{Img:"https://i.pinimg.com/736x/7e/ee/0a/7eee0a15c3bb16b777c64116e8cfaafe.jpg",Name:"Danil",OnOf:"https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg",id:45},{Img:"https://i.pinimg.com/736x/89/57/16/8957167672cdfdb7fba47ef531f7a3eb.jpg",Name:"Sveta",OnOf:"of",id:13},{Img:"https://i.pinimg.com/originals/6c/b6/4c/6cb64c7f040e63059639a6df25969588.jpg",Name:"Kalim",OnOf:"https://banner2.cleanpng.com/20180705/qav/kisspng-computer-icons-online-and-offline-online-shopping-hotspot-5b3e1403a4b394.9852004415307950116746.jpg",id:12}]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return e},y=n(104),k=n(43),C=n(140),A=n(138),D={initialized:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP_INITIALIZED_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},T=Object(f.c)({DialogsPage:g,ProfilePage:j,NewsPage:S.c,NavbarPage:w,UsersPage:y.b,Auth:k.d,form:A.a,App:U}),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,L=Object(f.e)(T,x(Object(f.a)(C.a))),F=L;window.__store__=L;var M,R=n(9),B=n(12),G=n(11),z=n(14),W=n.n(z),H=n(75),J=n.n(H),q=function(e){var t="/friends/"+e.id,n="of"==e.OnOf?"":r.a.createElement("img",{className:J.a.OnOf,src:e.OnOf});return r.a.createElement("div",{className:J.a.FriendBar},r.a.createElement("img",{src:e.Img}),r.a.createElement(B.b,{activeClassName:J.a.active,to:t}," ",e.Name," ",n," "))},V=function(e){var t=e.FriendsBarState.map((function(e){return r.a.createElement(q,{key:e.id,Img:e.Img,Name:e.Name,OnOf:e.OnOf,id:e.id})}));return r.a.createElement("div",null," ",t," ")},Y=Object(G.b)((function(e){return{FriendsBarState:e.NavbarPage.FriendsBarData}}),null)(V),Q=function(e){return r.a.createElement("nav",{className:W.a.nav},r.a.createElement("div",{className:W.a.item},"  ",r.a.createElement(B.b,{activeClassName:W.a.active,exact:!0,to:"/"}," Profile")),r.a.createElement("div",{className:W.a.item}," ",r.a.createElement(B.b,{activeClassName:W.a.active,to:"/dialogs"},"  Messages")," "),r.a.createElement("div",{className:W.a.item}," ",r.a.createElement(B.b,{activeClassName:W.a.active,to:"/news"},"  News")," "),r.a.createElement("div",{className:W.a.item}," ",r.a.createElement(B.b,{activeClassName:W.a.active,to:"/music"},"  Music")," "),r.a.createElement("div",{className:W.a.item}," ",r.a.createElement(B.b,{activeClassName:W.a.active,to:"/friends"}," Friends ")," "),r.a.createElement("div",{className:W.a.item}," ",r.a.createElement(B.b,{activeClassName:W.a.active,to:"/users"}," Find Users ")," "),r.a.createElement("div",{className:W.a.friendsBar}," ",r.a.createElement(Y,null)," "),r.a.createElement("div",{className:W.a.settings}," ",r.a.createElement(B.b,{activeClassName:W.a.active,to:"/settings"},"  Settings ")," "))},Z=n(26),K=n.n(Z),X=r.a.memo((function(e){var t="/dialogs/"+e.id,n="of"==e.OnOf?"":r.a.createElement("img",{className:K.a.OnOf,src:e.OnOf});return r.a.createElement("div",{className:K.a.Dialog},r.a.createElement(B.b,{activeClassName:K.a.active,to:t}," ",r.a.createElement("img",{src:e.Img}),"  ",e.Name," ",n," "))})),$=r.a.memo((function(e){return r.a.createElement("div",{className:K.a.Message},e.message)})),ee=n(25),te=n(40),ne=n(95),ae=n(13),re=Object(ee.a)(20),oe=Object(te.a)("textarea"),ie=Object(ne.a)({form:"messageInput"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},Object(ae.a)("messageInput",[ee.b,re],oe,"Write message",null),r.a.createElement("button",null,"add"))})),se=function(e){var t=e.DialogsState.DialogsData.map((function(e){return r.a.createElement(X,{key:e.id,Img:e.Img,Name:e.Name,id:e.id,OnOf:e.OnOf})})),n=e.DialogsState.MessagesData.MyMessages.map((function(e){return r.a.createElement($,{key:e.id,message:e.message,id:e.id})}));return r.a.createElement("div",{className:K.a.Dialogs},r.a.createElement("div",{className:K.a.DialogsItem},t),r.a.createElement("div",{className:K.a.Messages},r.a.createElement("div",null,n),r.a.createElement("div",{align:"right"}),r.a.createElement("div",{align:"right",className:K.a.NewMessage},r.a.createElement(ie,{onSubmit:function(t){e.AddMessage(t.messageInput)}}))))},ce=n(70),le=Object(f.d)(Object(G.b)((function(e){return{DialogsState:e.DialogsPage}}),{AddMessage:function(e){return{type:"ADD_DIALOGS_MESSAGE",message:e}}}),ce.a)(se),ue=n(143),fe=n.n(ue),me=n(53),pe=n(58),de=n.n(pe),ge=n(136),be=n(71),he=n.n(be),Ee=function(e){var t=Object(a.useState)(!1),n=Object(me.a)(t,2),o=n[0],i=n[1],s=Object(a.useState)(e.ProfileStatus),c=Object(me.a)(s,2),l=c[0],u=c[1];Object(a.useEffect)((function(){u(e.ProfileStatus)}),[e.ProfileStatus]);return e.CurrentUserId===e.userId?r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){i(!0)}},"Status: ",r.a.createElement("span",null,e.ProfileStatus))),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),e.UpdateProfileStatus(l)},value:l}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,"Status: ",r.a.createElement("span",null,e.ProfileStatus))))},Oe=n(137),ve=function(e){return r.a.createElement("div",{className:de.a.DescriptionBlock},r.a.createElement("div",null,"About me: ",e.ProfileInfo.aboutMe),r.a.createElement("div",null,"Full Name: ",e.ProfileInfo.fullName),r.a.createElement("div",null,"Looking For A Job: ",e.ProfileInfo.lookingForAJob?r.a.createElement("span",null,"Yes"):r.a.createElement("span",null,"No")),r.a.createElement("div",null,"LookingForAJob Description: ",e.ProfileInfo.lookingForAJobDescription),r.a.createElement("div",{className:de.a.contacts},r.a.createElement("div",null,e.ProfileInfo.contacts.facebook),r.a.createElement("div",null,e.ProfileInfo.contacts.vk),r.a.createElement("div",null,e.ProfileInfo.contacts.github),r.a.createElement("div",null,e.ProfileInfo.contacts.instagram),r.a.createElement("div",null,e.ProfileInfo.contacts.twitter),r.a.createElement("div",null,e.ProfileInfo.contacts.website),r.a.createElement("div",null,e.ProfileInfo.contacts.youtube),r.a.createElement("div",null,e.ProfileInfo.contacts.mainLink)))},Pe=function(e){var t=Object(a.useState)(!1),n=Object(me.a)(t,2),o=n[0],i=n[1];return e.ProfileInfo?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:de.a.img1,src:e.ProfileInfo.photos.large?e.ProfileInfo.photos.large:he.a})),r.a.createElement("div",null,r.a.createElement(Ee,{UpdateProfileStatus:e.UpdateProfileStatus,ProfileStatus:e.ProfileStatus,CurrentUserId:e.CurrentUserId,userId:e.ProfileInfo.userId})),e.ProfileInfo.userId===e.CurrentUserId&&!o&&r.a.createElement("button",{onClick:function(){i(!0)}},"Change profile"),o?r.a.createElement(Oe.a,{onSubmit:function(t){e.UpdateProfileInfo(e.CurrentUserId,t.ProfileAboutMeInput,t.ProfileLookingForAJobInput,t.ProfileLookingForAJobDescriptionInput,t.ProfileNameInput),i(!1)}}):r.a.createElement(ve,{ProfileInfo:e.ProfileInfo})):r.a.createElement(ge.a,null)},_e=n(101),Ie=n.n(_e),je=n(102),Se=n.n(je),Ne=function(e){var t=e.id;return r.a.createElement("div",{className:Se.a.item},r.a.createElement("img",{src:"https://avatars.mds.yandex.net/get-zen_doc/171120/pub_5b44a8cd3e56d900a85b258e_5b44aa46a2e4e400a92221a3/scale_1200"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like "," ",e.likecount)),r.a.createElement("button",{onClick:function(){e.deleteProfilePost(t)}},"Delete"),r.a.createElement("hr",{className:Se.a.Hr}))},we=Object(ee.a)(20),ye=Object(te.a)("textarea"),ke=Object(ne.a)({form:"postInput"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},Object(ae.a)("postInput",[ee.b,we],ye,"Write new post",null),r.a.createElement("button",null,"Add new post"))})),Ce=r.a.memo((function(e){console.log(e);var t=Object(m.a)(e.PostsState).map((function(t){return r.a.createElement(Ne,{deleteProfilePost:e.deleteProfilePost,key:t.id,message:t.message,likecount:t.likecount,id:t.id})}));return r.a.createElement("div",{className:Ie.a.PostDescription},r.a.createElement("h3",null," My posts"),r.a.createElement("div",null,r.a.createElement(ke,{onSubmit:function(t){e.addNewPost(t.postInput)}})),r.a.createElement("div",{className:Ie.a.posts},t))})),Ae=Object(G.b)((function(e){return{PostsState:e.ProfilePage.PostsData}}),{addNewPost:function(e){return{type:v,post:e}},deleteProfilePost:function(e){return{type:"DELETE_PROFILE_POST",postId:e}}})(Ce),De=function(e){return r.a.createElement("div",{className:fe.a.Profile},r.a.createElement(Pe,{CurrentUserId:e.CurrentUserId,UpdateProfileStatus:e.UpdateProfileStatus,ProfileStatus:e.ProfileStatus,ProfileInfo:e.ProfileInfo,UpdateProfileInfo:e.UpdateProfileInfo}),r.a.createElement(Ae,null))},Ue=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e?(this.props.getProfileStatus(e),this.props.getProfile(e)):(e=this.props.CurrentUserId,this.props.getProfile(e),this.props.getProfileStatus(e))}},{key:"render",value:function(){return r.a.createElement(De,Object.assign({},this.props,{ProfileInfo:this.props.ProfileInfo}))}}]),n}(r.a.Component),Te=Object(f.d)(Object(G.b)((function(e){return{ProfileInfo:e.ProfilePage.ProfileInfo,CurrentUserId:e.Auth.CurrentUserId,ProfileStatus:e.ProfilePage.ProfileStatus}}),{getProfile:I,getProfileStatus:function(e){return function(){var t=Object(E.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.b.getProfileStatus(e);case 2:a=t.sent,n(_(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},UpdateProfileStatus:function(e){return function(){var t=Object(E.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(_(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},UpdateProfileInfo:function(e,t,n,a,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;return function(){var i=Object(E.a)(h.a.mark((function i(s){return h.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,O.b.changeProfile(e,t,n,a,r,o);case 2:0===i.sent.resultCode&&s(I(e));case 4:case"end":return i.stop()}}),i)})));return function(e){return i.apply(this,arguments)}}()}}),R.f,ce.a)(Ue),xe=n(103),Le=n.n(xe),Fe=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.authLogOut()}},"Log Out"),e.login,e.CurrentUserPhoto?e.CurrentUserPhoto:r.a.createElement("img",{src:he.a}))},Me=function(e){return r.a.createElement("header",{className:Le.a.header},r.a.createElement(B.b,{to:"/profile/".concat(e.userId)},r.a.createElement("img",{src:"https://bumper-stickers.ru/69359-thickbox_default/logotip-atlanta-thrashers-atlanta-tresherz.jpg"})),r.a.createElement("div",{className:Le.a.login},e.isAuth?r.a.createElement(Fe,{login:e.login,CurrentUserPhoto:e.CurrentUserPhoto,authLogOut:e.authLogOut}):r.a.createElement(B.b,{to:"/login"},"Login")))},Re=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(Me,this.props)}}]),n}(r.a.Component),Be=Object(G.b)((function(e){return{login:e.Auth.login,userId:e.Auth.CurrentUserId,isAuth:e.Auth.isAuth,CurrentUserPhoto:e.Auth.CurrentUserPhoto}}),{authLogOut:k.a})(Re),Ge=n(74),ze=n.n(Ge),We=n(59),He=n.n(We),Je=function(){return r.a.createElement("div",{className:He.a.AppLoadingBlock},r.a.createElement("img",{className:He.a.AppPreloader,src:ze.a}))},qe=r.a.lazy((function(){return n.e(5).then(n.bind(null,305))})),Ve=r.a.lazy((function(){return n.e(3).then(n.bind(null,308))})),Ye=r.a.lazy((function(){return n.e(8).then(n.bind(null,310))})),Qe=r.a.lazy((function(){return n.e(7).then(n.bind(null,306))})),Ze=r.a.lazy((function(){return n.e(6).then(n.bind(null,307))})),Ke=r.a.lazy((function(){return n.e(4).then(n.bind(null,309))})),Xe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Be,null),r.a.createElement(Q,null),r.a.createElement($e,null)):r.a.createElement(Je,null)}}]),n}(r.a.Component),$e=(M=function(){return r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(R.b,{path:"/dialogs",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(R.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(R.b,{path:"/users",render:function(){return r.a.createElement(Ve,null)}}),r.a.createElement(R.b,{path:"/news",render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(R.b,{path:"/settings",render:function(){return r.a.createElement(Ze,null)}}),r.a.createElement(R.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Te,null)}}),r.a.createElement(R.b,{path:"/music",render:function(){return r.a.createElement(qe,null)}}),r.a.createElement(R.b,{path:"/login",render:function(){return r.a.createElement(Ye,null)}}),r.a.createElement(R.b,{exact:!0,path:"/friends",render:function(){return r.a.createElement(Qe,null)}}))},function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u041c\u0438\u043d\u0443\u0442\u043e\u0447\u043a\u0443...")},r.a.createElement(M,e))}),et=Object(f.d)(Object(G.b)((function(e){return{initialized:e.App.initialized}}),{initializedApp:function(){return function(e){e(Object(k.c)()).then((function(){e({type:"APP_INITIALIZED_SUCCESS"})}))}}}),R.f)(Xe),tt=function(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(B.a,null,r.a.createElement(G.a,{store:F},r.a.createElement(et,null))))};i.a.render(r.a.createElement(tt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(144),r=n(0),o=n.n(r),i=n(93),s=n.n(i),c=function(e){return function(t){var n=t.input,r=t.meta,i=Object(a.a)(t,["input","meta"]),c=r.error&&r.touched;return o.a.createElement("div",{className:s.a.formControl+" "+(c?s.a.error:"")},o.a.createElement("div",null,o.a.createElement(e,Object.assign({},n,i))),c&&o.a.createElement("span",null,r.error))}}},43:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p}));var a=n(10),r=n.n(a),o=n(21),i=n(4),s=n(17),c=n(37),l={CurrentUserId:null,email:null,login:null,isAuth:!1,CurrentUserPhoto:null},u=function(e,t,n,a){return{type:"SET_AUTH_USER_DATA",data:{CurrentUserId:e,email:t,login:n,isAuth:a}}},f=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,o,i,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.AuthUser();case 2:if(0!==(n=e.sent).resultCode){e.next=10;break}return a=n.data,o=a.id,i=a.email,c=a.login,t(u(o,i,c,!0)),e.next=8,s.b.getUserProfile(n.data.id);case 8:l=e.sent,t({type:"SET_CURRENT_USER_PROFILE",CurrentUserPhoto:l.photos.small});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(e,t,n){return function(){var a=Object(o.a)(r.a.mark((function a(o){var i,l;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.AuthLogin(e,t,n);case 2:0===(i=a.sent).data.resultCode?o(f()):(l=i.data.messages.length>0?i.data.messages[0]:"Some error",o(Object(c.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.AuthLogOut();case 2:0===e.sent.data.resultCode&&t(u(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER_DATA":return Object(i.a)(Object(i.a)({},e),t.data);case"SET_CURRENT_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{CurrentUserPhoto:t.CurrentUserPhoto});default:return e}}},58:function(e,t,n){e.exports={img1:"ProfileInfo_img1__3Vj5B",DescriptionBlock:"ProfileInfo_DescriptionBlock__C-bRr",contacts:"ProfileInfo_contacts__3PUYi"}},59:function(e,t,n){e.exports={Preloader:"Preloader_Preloader__3T8h8",AppPreloader:"Preloader_AppPreloader__1lSdQ",AppLoadingBlock:"Preloader_AppLoadingBlock__MF2lR"}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(31),r=n(32),o=n(34),i=n(33),s=n(0),c=n.n(s),l=n(9),u=n(11),f=function(e){return{isAuth:e.Auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(s,t);var n=Object(i.a)(s);function s(){return Object(a.a)(this,s),n.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),s}(c.a.Component);return Object(u.b)(f)(t)}},71:function(e,t,n){e.exports=n.p+"static/media/computer-icons-user-profile-avatar-png-favpng-CXDB2aUAq6zHS7pQSY9GjQ3ZH.79eb8ca5.jpg"},74:function(e,t,n){e.exports=n.p+"static/media/Bean Eater-1s-200px.71c1f798.svg"},75:function(e,t,n){e.exports={FriendBar:"FriendBar_FriendBar__E98Ls",OnOf:"FriendBar_OnOf__3YZDD",active:"FriendBar_active__apofq"}},93:function(e,t,n){e.exports={formControl:"FormControl_formControl__12Q8B",error:"FormControl_error__PW_OO",someoneError:"FormControl_someoneError__2EXic"}}},[[170,1,2]]]);
//# sourceMappingURL=main.05816146.chunk.js.map