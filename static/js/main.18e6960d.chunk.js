(this.webpackJsonpsportclubs=this.webpackJsonpsportclubs||[]).push([[0],{46:function(n,t,e){n.exports=e(76)},51:function(n,t,e){},52:function(n,t,e){},76:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(21),c=e.n(i),o=(e(51),e(52),e(18)),l=e(5),u=e(6),s=e(15),f=e(40),b=e(41),p=e(11),d=e(42),v=e.n(d),m={availableClubs:[],availableCities:[],activeCity:[],availableSports:[],availableSportsExactcity:[],activeActivity:""};var g=function(n){return function(t){t({type:"ACTIVE_ACTIVITY",payload:n})}},x=Object(s.combineReducers)({sportClubs:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case"AVAILABLE_CLUBS":return Object(p.a)(Object(p.a)({},n),{},{availableClubs:r});case"AVAILABLE_CITIES":return Object(p.a)(Object(p.a)({},n),{},{availableCities:Array.from(new Set(n.availableClubs.map((function(n){return n.city.title}))))});case"ACTIVE_CITY":return Object(p.a)(Object(p.a)({},n),{},{activeCity:r});case"ACTIVE_ACTIVITY":return Object(p.a)(Object(p.a)({},n),{},{activeActivity:r});case"AVAILABLE_SPORTS":var a=n.availableClubs.map((function(n){return n.activity.map((function(n){return n.slug}))})),i=Array.from(new Set(a.reduce((function(n,t){return n.concat(t)}),[])));return Object(p.a)(Object(p.a)({},n),{},{availableSports:i});case"AVAILABLE_SPORTS_EXACTCITY":var c=r.map((function(n){return n.activity.map((function(n){return n.slug}))})),o=Array.from(new Set(c.reduce((function(n,t){return n.concat(t)}),[])));return Object(p.a)(Object(p.a)({},n),{},{availableSportsExactcity:o});default:return n}}}),E=Object(s.createStore)(x,Object(b.composeWithDevTools)(Object(s.applyMiddleware)(f.a))),y=e(1),h=e(19),j=e(2);function O(){var n=Object(y.a)(["\n    @media (max-width: ","px) {\n      ","\n    }\n  "]);return O=function(){return n},n}function A(n){return Object(j.a)(O(),C,n)}var C=767,w=Object(r.createContext)({isActive:!1,toggleActive:function(){}}),S=function(n){var t=n.children,e=Object(r.useState)(!1),i=Object(h.a)(e,2),c=i[0],o=i[1];return a.a.createElement(w.Provider,{value:{isActive:c,toggleActive:function(){o(!c)}}},t)},k=e(16),I=e(17),T=e(77);function L(){var n=Object(y.a)(["\nwidth: 20px;\nheight: 2px;\nmargin: 2px;\nbackground: darkgrey;\nborder-radius: 2px;\n"]);return L=function(){return n},n}function z(){var n=Object(y.a)(["\nwidth: 28px;\nheight: 28px;\n// background: darkgrey;\nborder: solid 1px  darkgrey;\nborder-radius: 10%;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ncursor: pointer;\njustify-content: center;\nalign-items: center;\nmargin-right: 10px;\ntransition: all 0.3 ease-in-out;\nspan {\n  transition: all 0.3s ease-in-out;\n}\n\n&.active {\n  span:first-child {\n    transform: rotate(45deg) translate(2px, 2px);\n  }\n  span:last-child {\n    transform: rotate(-45deg) translate(2px,-3px);\n  }\n}\n"]);return z=function(){return n},n}function B(){var n=Object(y.a)(["\ndisplay:flex;\nalign-self: flex-end;\ncursor: pointer;\n& p{\n  margin:0;\n  font-weight: 500;\n  font-size: 20px;\n  color: #ABABAB;\n\n}\n"]);return B=function(){return n},n}var _=function(){var n=Object(r.useContext)(w),t=n.isActive,e=n.toggleActive;return a.a.createElement(V,{onClick:function(){return e()}},a.a.createElement(P,{className:t?"active":""},a.a.createElement(R,null),a.a.createElement(R,null)))},V=j.b.div(B()),P=j.b.div(z()),R=j.b.span(L());function Y(){var n=Object(y.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-top: 5px;\nmargin-left: 20px;\ncursor:pointer;\n>div{ \n  margin-left: 5px; \n}\n"]);return Y=function(){return n},n}function N(){var n=Object(y.a)(["\nfont-size: 12px;\n"]);return N=function(){return n},n}function W(){var n=Object(y.a)(["\n padding-top: 10px;\n  height: 150px;\n  width: 100vw;\n  color: #777; \n  font-size: 14px; \n"]);return W=function(){return n},n}function J(){var n=Object(y.a)(["\nmin-height: 200px;\nbackground-color: #f8f8f8;\noverflow-x: auto;\ntop: ","; \nleft:0;\n position: absolute;\n z-index:2; \n transition-property: top;\n  transition-duration: 1s;\n  transition-timing-function: ease-out;\n  z-index:1;\n"]);return J=function(){return n},n}var M=function(n){var t=n.headerNavy,e=Object(r.useContext)(w).isActive;return a.a.createElement(U,{open:!!e,className:e?"active":""},a.a.createElement(X,null,a.a.createElement(D,null,t),a.a.createElement(F,null,a.a.createElement(k.a,{icon:I.b}),a.a.createElement("div",null," Enter"))))},U=j.b.div(J(),(function(n){return n.open?"53px":"-200px"})),X=j.b.div(W()),D=j.b.div(N()),F=j.b.div(Y());function $(){var n=Object(y.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-top: 5px;\nmargin-left: 20px;\ncursor:pointer;\n>div{ \n  margin-left: 5px; \n}\n"]);return $=function(){return n},n}function q(){var n=Object(y.a)(["\n   display:none;\n   ","\n "]);return q=function(){return n},n}function G(){var n=Object(y.a)(["\n display: flex;\n "]);return G=function(){return n},n}function H(){var n=Object(y.a)(["\ndisplay: flex;\nmargin-left:15px;\n"]);return H=function(){return n},n}function K(){var n=Object(y.a)(["\nmargin-left: 20px;\ndisplay: flex;\ncolor: #777;\ntext-decoration:none;\n:hover{\n  color:black;\n}\n","\n"]);return K=function(){return n},n}function Q(){var n=Object(y.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nflex-grow:1;\nfont-size: 12px;\ncolor: #777;\ndiv:last-child{\n  margin-right:20px;\n}\n","\n"]);return Q=function(){return n},n}function Z(){var n=Object(y.a)(["\nposition: relative;\nz-index:10;\nmin-height: 50px;\ndisplay: flex;\nalign-items: center;\nbackground-color: #f8f8f8;\nborder-color: #e7e7e7;\nborder-top: solid 0.5px grey;\nborder-bottom: solid 0.5px grey;\nmargin-bottom: 20px;\ncolor: lightgrey;\nfont-size: 18px;\n","\n"]);return Z=function(){return n},n}function nn(){var n=Object(y.a)(["\nposition:absolute;\nwidth: 100vw;\n "]);return nn=function(){return n},n}var tn=function(n){var t=["\u041a\u043b\u0443\u0431\u044b","\u0410\u043d\u043e\u043d\u0441\u044b","\u0411\u043b\u043e\u0433"].map((function(n){return a.a.createElement(cn,{to:"#",key:Object(T.a)()},n)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(en,null,a.a.createElement(S,null,a.a.createElement(rn,null,a.a.createElement(on,null,a.a.createElement(k.a,{icon:I.a}),a.a.createElement("div",null,"Instasport")),a.a.createElement(an,null,a.a.createElement(ln,null,t),a.a.createElement(sn,null,a.a.createElement(k.a,{icon:I.b}),a.a.createElement("div",null," Enter"))),a.a.createElement(un,null,a.a.createElement(_,null))),a.a.createElement(M,{headerNavy:t}))))},en=j.b.div(nn()),rn=j.b.div(Z(),A("\n  justify-content: space-between;  \n")),an=j.b.div(Q(),A("\n  display: none;\n")),cn=Object(j.b)(o.b)(K(),A("\n padding: 10px;\n")),on=j.b.div(H()),ln=j.b.div(G()),un=j.b.div(q(),A("\n  display: block;\n  div{\n    margin-right:20px;\n    font-size: 12px;\n    color: #777;\n  }\n")),sn=j.b.div($());function fn(){var n=Object(y.a)(["\nheight: 50px;\nwidth: 85%;\nmargin: 10px auto;\nborder-top: solid 0.5px darkgrey;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n>div{\n  width: fit-content;\n}\n"]);return fn=function(){return n},n}var bn=function(){return a.a.createElement(pn,null,a.a.createElement(k.a,{icon:I.a}),a.a.createElement("div",null,"Instasport \u2013 \u0441\u043f\u043e\u0440\u0442\u0445\u0430\u0431 \u043e\u043d\u043b\u0430\u0439\u043d!"))},pn=j.b.div(fn());function dn(){var n=Object(y.a)(["\nposition: fixed;\ntop: 0;\nleft: 0;\n"]);return dn=function(){return n},n}function vn(){var n=Object(y.a)(["\ndisplay:flex;\nflex-direction: column;\nmin-height: 100%\nwidth: 100vw;\nheight: 100%;\n& .content {\n  flex-grow:1;\n  margin-top: 50px;\n}\n"]);return vn=function(){return n},n}var mn=function(n){return a.a.createElement(gn,null,a.a.createElement(xn,null,a.a.createElement(tn,null)),a.a.createElement("main",{className:"content"},n.children),a.a.createElement(bn,null))},gn=j.b.div(vn()),xn=j.b.div(dn());function En(){var n=Object(y.a)(["\nmargin: 20px auto;\nfont-weight: bold;\n>div{\n  text-align:center;\n}\n\n"]);return En=function(){return n},n}function yn(){var n=Object(y.a)(["\nmargin: 15px;\ntext-decoration:none;\nmargin:0;\nmargin-bottom: 10px;\nwidth: fit-content;\nimg{\n  width: 205px;\n  height: 205px;\n}\n"]);return yn=function(){return n},n}function hn(){var n=Object(y.a)(["\n display: flex;\n flex-direction: column;\n align-items: center;\nwidth: fit-content;\nmargin: 10px;\ndiv:last-child{\n  color: #333;\n  font-size: 14px;\n}\n"]);return hn=function(){return n},n}function jn(){var n=Object(y.a)(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: center;\n"]);return jn=function(){return n},n}var On=function(n){var t=Object(r.useState)([]),e=Object(h.a)(t,2),i=e[0],c=e[1],o=Object(u.b)(),l=Object(u.c)((function(n){return n.sportClubs.availableClubs})),s=Object(u.c)((function(n){return n.sportClubs.activeCity})),f=Object(u.c)((function(n){return n.sportClubs.activeActivity}));Object(r.useEffect)((function(){var n,t=l.filter((function(n){if(n.city.title===s)return n}));o((n=t,function(t){t({type:"AVAILABLE_SPORTS_EXACTCITY",payload:n})}));var e=f?(t.length?t:l).filter((function(n){return n.activity.map((function(n){return n.slug})).filter((function(n){return n===f})).length})):t;e.length||t.length?c(e):c(l)}),[s,f,l]);var b=i.map((function(n){var t=n.link,e=n.logo,r=n.title_short;return a.a.createElement(Cn,{key:Object(T.a)()},a.a.createElement(wn,{key:Object(T.a)(),to:t},a.a.createElement("img",{src:e,alt:"not found"})),a.a.createElement("div",null,r))}));return a.a.createElement(An,null,b.length?b:a.a.createElement(Sn,null,a.a.createElement("div",null,"\u041d\u0435\u0442 \u043a\u043b\u0443\u0431\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c \u0432\u0438\u0434\u043e\u043c \u0441\u043f\u043e\u0440\u0442\u0430 \u0432 \u0412\u0430\u0448\u0435\u043c \u0433\u043e\u0440\u043e\u0434\u0435"),a.a.createElement("div",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0432\u0438\u0434\u043e\u0432 \u0441\u043f\u043e\u0440\u0442\u0430")))},An=j.b.div(jn()),Cn=j.b.div(hn()),wn=Object(j.b)(o.b)(yn()),Sn=j.b.div(En());function kn(){var n=Object(y.a)(["\ndisplay: flex;\nflex-wrap: wrap;\n"]);return kn=function(){return n},n}function In(){var n=Object(y.a)(["\nfont-size: 16px;\nfont-family: 'Source Sans Pro', sans-serif;\npadding: 7px;\nmargin: 3px;\ncursor: pointer;\nbox-sizing: border-box;\nborder-radius: 0.5px;\nborder: ",";\nborder-bottom: none;\n:hover{\n  background-color: lightgrey;\n}\n"]);return In=function(){return n},n}var Tn=function(n){var t=Object(u.b)(),e=Object(u.c)((function(n){return n.sportClubs.availableCities})),r=Object(u.c)((function(n){return n.sportClubs.activeCity})),i=function(n){var e,r=n.target.getAttribute("data-name");t((e=r,function(n){n({type:"ACTIVE_CITY",payload:e})}))},c=e.map((function(n){var t=n===r;return a.a.createElement(Ln,{key:Object(T.a)(),"data-name":n,onClick:i,isActive:t},n)}));return a.a.createElement(zn,null,c)},Ln=j.b.div(In(),(function(n){return n.isActive?"solid 0.3px grey":"solid 0.5px white"})),zn=j.b.div(kn());function Bn(){var n=Object(y.a)(["\nmargin: 20px auto;\nwidth: fit-content;\nbox-sizing: border-box;\nborder-radius: 5px;\nborder: solid 0.3px black;\npadding: 7px;\ncursor: pointer;\ncolor:darkgrey;\n"]);return Bn=function(){return n},n}function _n(){var n=Object(y.a)(["\nborder-top: 1px solid grey;\npadding-top: 15px;\ndisplay: flex;\nflex-wrap: wrap;\n"]);return _n=function(){return n},n}function Vn(){var n=Object(y.a)(["\nfont-size: 14px;\nfont-family: 'Source Sans Pro', sans-serif;\npadding: 7px;\nmargin: 3px;\ncursor: pointer;\nbox-sizing: border-box;\nborder-radius: 5px;\nborder: solid 0.3px grey;\nbackground-color:",";\n:hover{\n  background-color: lightgrey;\n}\n"]);return Vn=function(){return n},n}function Pn(){var n=Object(y.a)(["\n\n"]);return Pn=function(){return n},n}var Rn=function(n){var t=Object(u.b)(),e=Object(u.c)((function(n){return n.sportClubs.availableSports})),r=Object(u.c)((function(n){return n.sportClubs.availableSportsExactcity})),i=Object(u.c)((function(n){return n.sportClubs.activeActivity})),c=function(n){var e=n.target.getAttribute("data-name");t(g(e))},o=(r.length?r:e).map((function(n){var t=n===i;return a.a.createElement(Nn,{key:Object(T.a)(),"data-name":n,onClick:c,isActive:t},n)}));return a.a.createElement(Yn,null,a.a.createElement(Wn,null,o),a.a.createElement(Jn,{onClick:function(){return t(g(""))}},"Reset activities"))},Yn=j.b.div(Pn()),Nn=j.b.div(Vn(),(function(n){return n.isActive?"lightgrey":"none"})),Wn=j.b.div(_n()),Jn=j.b.div(Bn());function Mn(){var n=Object(y.a)(["\nmargin: 10px auto;\npadding: 30px 0;\nborder-left: solid 5px lightgrey;\np{\n  font-family: 'Source Sans Pro', sans-serif;\n  text-align: right;\n  font-weight: 700;\n  color: darkgrey;\n}\np:first-child{\n  font-size: 12px;\n}\np:last-child{\n  font-size: 9px;\n}\n"]);return Mn=function(){return n},n}function Un(){var n=Object(y.a)(["\n  margin: 0 auto;\n  width: 85%;\n"]);return Un=function(){return n},n}var Xn=function(n){var t=Object(r.useState)(""),e=Object(h.a)(t,2),i=(e[0],e[1]),c=Object(u.b)();return Object(r.useLayoutEffect)((function(){c((function(n){v.a.get("https://instasport.co/dashboard/api/v1/clubs/").then((function(t){n({type:"AVAILABLE_CLUBS",payload:t.data}),n({type:"AVAILABLE_CITIES"}),n({type:"AVAILABLE_SPORTS"})})).catch((function(n){console.log(n)}))}))}),[]),a.a.createElement(mn,null,a.a.createElement(Dn,null,a.a.createElement(Fn,null,a.a.createElement("p",null,"\u0414\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0443 \u0442\u0435\u043f\u0435\u0440\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0430\u0440\u0443 \u043a\u0430\u0441\u0430\u043d\u0438\u0439!"),a.a.createElement("p",null,"-Instasport")),a.a.createElement(S,null,a.a.createElement(Tn,{setActiveCity:i}),a.a.createElement(Rn,null),a.a.createElement(On,null))))},Dn=j.b.div(Un()),Fn=j.b.div(Mn());var $n=function(){return a.a.createElement(u.a,{store:E},a.a.createElement(o.a,{basename:"/sportClubs"},a.a.createElement(l.d,null,a.a.createElement(l.b,{exect:!0,path:"/sportClubs",component:Xn}),a.a.createElement(l.a,{to:"/sportClubs"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($n,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.18e6960d.chunk.js.map