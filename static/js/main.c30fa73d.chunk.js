(this.webpackJsonpfocusarea=this.webpackJsonpfocusarea||[]).push([[0],{13:function(e,t,a){e.exports=a(28)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=(a(18),a(19),a(20),a(21),a(2)),i=a(5),s=Object(i.a)([function(e){return e.card}],(function(e){return e.cardList})),d=(a(27),"SELECT_CARD"),m=Object(o.b)(null,(function(e){return{cardAction:function(t){return e({type:d,payload:t})}}}))((function(e){var t=e.item,a=e.cardAction;return c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"".concat(t.selected?"bgColor":""," card"),onClick:function(){return a(t)}},c.a.createElement("div",{className:"container"},c.a.createElement("h3",null,c.a.createElement("b",null,t.name)))))})),u=Object(i.b)({cardList:s}),f=Object(o.b)(u,null)((function(e){var t=e.cardList;return c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement(m,{key:e.id,item:e})})))})),E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"focus-page"},c.a.createElement("h1",{style:{fontWeight:"500",fontSize:"28px"}},"What are your main areas of focus?"),c.a.createElement("h2",{style:{fontWeight:"normal",fontSize:"19px"}},"This will help us build a personalized experience for you"),c.a.createElement(f,null)),c.a.createElement("div",{className:"row-dot"},c.a.createElement("div",{className:"column-dot"},"BACK"),c.a.createElement("div",{className:"column-dot"},c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot"}),c.a.createElement("span",{className:"dot active"}))),c.a.createElement("div",{className:"column-dot"},"DONE")))},p=function(){return c.a.createElement("div",null,c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=a(1),h=a(12),b=a.n(h),g=a(3),N={cardList:[{id:1,name:"Blood Glucose",selected:!0},{id:2,name:"Medication",selected:!1},{id:3,name:"Food Tracking",selected:!1},{id:4,name:"Exercise",selected:!1},{id:5,name:"Weight Management",selected:!1},{id:6,name:"Blood Pressure",selected:!1},{id:7,name:"A1C",selected:!1}]},y=Object(v.c)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(g.a)(Object(g.a)({},e),{},{cardList:e.cardList.map((function(e){return e.id===t.payload.id?Object(g.a)(Object(g.a)({},e),{},{selected:!e.selected}):e}))});default:return e}}}),w=[b.a],O=Object(v.d)(y,v.a.apply(void 0,w));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:O},c.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.c30fa73d.chunk.js.map