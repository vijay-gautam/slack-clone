(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{64:function(e,a,t){e.exports=t.p+"static/media/chat-logo-design_93835-108.60ba0f92.jpg"},68:function(e,a,t){e.exports=t(97)},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(25),r=t.n(l),o=(t(73),t(10)),s=(t(74),t(75),t(111)),i=t(47),m=t.n(i),u=t(48),d=t.n(u),h=t(49),E=t.n(h),p=Object(n.createContext)(),v=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(p.Provider,{value:Object(n.useReducer)(a,t)},l)},f=function(){return Object(n.useContext)(p)};var g=function(){var e=f(),a=Object(o.a)(e,1)[0].user;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(s.a,{className:"header__avatar",alt:null===a||void 0===a?void 0:a.displayName,src:null===a||void 0===a?void 0:a.photoURL}),c.a.createElement(m.a,null)),c.a.createElement("div",{className:"header__search"},c.a.createElement(d.a,null),c.a.createElement("input",{placeholder:"search user"})),c.a.createElement("div",{className:"header__right"},c.a.createElement(E.a,null)))},b=(t(80),t(81),t(4)),_=t(30),N=t.n(_),I=N.a.initializeApp({apiKey:"AIzaSyBcUSrwahR6FsKe6zxPt59P03XtIYGUEcg",authDomain:"chatty-g.firebaseapp.com",databaseURL:"https://chatty-g.firebaseio.com",projectId:"chatty-g",storageBucket:"chatty-g.appspot.com",messagingSenderId:"639171087831",appId:"1:639171087831:web:1a995219ed7461a5f44f92",measurementId:"G-4RBQPFN9CF"}),O=I.firestore(),j=I.auth(),S=new N.a.auth.GoogleAuthProvider,y=O;var w=function(e){var a=e.Icon,t=e.title,n=e.id,l=e.addChannelOption,r=Object(b.f)();return c.a.createElement("div",{className:"sidebaroption",onClick:l?function(){var e=prompt("Please enter the channel name");e&&y.collection("rooms").add({name:e})}:function(){n?r.push("/room/".concat(n)):r.push(t)}},a&&c.a.createElement(a,{className:"sidebaroption__icon"}),a?c.a.createElement("h3",null,t):c.a.createElement("h3",{className:"sidebaroption__channel"},c.a.createElement("span",{className:"sidebaroption__hash"},"#"),t))},C=t(50),k=t.n(C),B=t(51),P=t.n(B),R=t(52),U=t.n(R),D=t(53),G=t.n(D),A=t(54),F=t.n(A),T=t(55),x=t.n(T),L=t(56),W=t.n(L),z=t(57),M=t.n(z),J=t(58),K=t.n(J),H=t(59),Q=t.n(H),V=t(60),X=t.n(V),Y=t(61),$=t.n(Y);var q=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1],r=f(),s=Object(o.a)(r,1)[0].user;return Object(n.useEffect)((function(){y.collection("rooms").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h2",null,"Drivool"),c.a.createElement("h3",null,c.a.createElement(k.a,null),null===s||void 0===s?void 0:s.displayName)),c.a.createElement(P.a,null)),c.a.createElement(w,{Icon:U.a,title:"Threads"}),c.a.createElement(w,{Icon:G.a,title:"Mentions & Reaction"}),c.a.createElement(w,{Icon:F.a,title:"Saved Items"}),c.a.createElement(w,{Icon:x.a,title:"Channel Browser"}),c.a.createElement(w,{Icon:W.a,title:"People & User groups"}),c.a.createElement(w,{Icon:M.a,title:"Apps"}),c.a.createElement(w,{Icon:K.a,title:"File Browser"}),c.a.createElement(w,{Icon:Q.a,title:"Show less"}),c.a.createElement("hr",null),c.a.createElement(w,{Icon:X.a,title:"Channels"}),c.a.createElement("hr",null),c.a.createElement(w,{Icon:$.a,addChannelOption:!0,title:"Add Channels"}),t.map((function(e){return c.a.createElement(w,{title:e.name,id:e.id})})))},Z=(t(93),t(62)),ee=t.n(Z),ae=t(63),te=t.n(ae);t(94);var ne=function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:l,alt:""}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n," ",c.a.createElement("span",{className:"message__timestamp"},new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString())),c.a.createElement("p",null,a)))};t(95);var ce=function(e){e.channelName;var a=e.channelId,t=Object(n.useState)(""),l=Object(o.a)(t,2),r=l[0],s=l[1],i=f(),m=Object(o.a)(i,1)[0].user;return c.a.createElement("div",{className:"chatinput"},c.a.createElement("form",null,c.a.createElement("input",{value:r,onChange:function(e){return s(e.target.value)},placeholder:"Type a message"}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),a&&y.collection("rooms").doc(a).collection("messages").add({message:r,timestamp:N.a.firestore.FieldValue.serverTimestamp(),user:m.displayName,userImage:m.photoURL}),s("")}},"SEND")))};var le=function(){var e=Object(b.g)().roomId,a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){e&&y.collection("rooms").doc(e).onSnapshot((function(e){return r(e.data())})),y.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return u(e.docs.map((function(e){return e.data()})))}))}),[e]),console.log(l),console.log("MESSAGES >>> ",m),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerleft"},c.a.createElement("h4",{className:"chat__channelname"},c.a.createElement("strong",null,"#",null===l||void 0===l?void 0:l.name),c.a.createElement(ee.a,null))),c.a.createElement("div",{className:"chat__headerright"},c.a.createElement("p",null,c.a.createElement(te.a,null)," Details"))),c.a.createElement("div",{className:"chat__messages"},m.map((function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement(ne,{message:a,timestamp:t,user:n,userImage:l})}))),c.a.createElement(ce,{channelName:null===l||void 0===l?void 0:l.name,channelId:e}))},re=t(33),oe=(t(96),t(110)),se=t(64),ie=t.n(se),me=t(38),ue="SET_USER",de=function(e,a){switch(console.log(a),a.type){case ue:return Object(me.a)(Object(me.a)({},e),{},{user:a.user});default:return e}};var he=function(){var e=f(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:ie.a,alt:"Chat Logo"}),c.a.createElement("h1",null,"Sign in to Connect"),c.a.createElement(oe.a,{onClick:function(){j.signInWithPopup(S).then((function(e){console.log(e),t({type:ue,user:e.user})})).catch((function(e){alert(e.message)}))}}," SIGN IN WITH GOOGLE")))};var Ee=function(){var e=f(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},c.a.createElement(re.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(q,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/room/:roomId"},c.a.createElement(le,null)),c.a.createElement(b.a,{path:"/"},c.a.createElement("h1",null,"Welcome"))))):c.a.createElement(he,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,{initialState:{user:null},reducer:de},c.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.17db45b2.chunk.js.map