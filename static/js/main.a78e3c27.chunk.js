(this["webpackJsonpreact-coffee"]=this["webpackJsonpreact-coffee"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(6),s=n.n(r),a=(n(11),[{brewType:"test1",icon:"",brewTime:68,color:"red",settings:[1,1],recipe:{10:"instruction 1",20:"instruction 2"}},{brewType:"test2",icon:"",brewTime:90,color:"blue",settings:[1,1],recipe:{10:"instruction 1",20:"instruction 2"}}]),o=(n(12),n(3)),j=n(2),l=(n(5),n(0)),b=function(e){var t=e.time,n=Object(c.useState)({background:"linear-gradient(90deg, ".concat(e.color," 50%, grey 50%)")}),i=Object(j.a)(n,2),r=i[0],s=i[1],a=Object(c.useState)(t%60),b=Object(j.a)(a,2),d=b[0],u=b[1],O=Object(c.useState)(Math.floor(t/60)),m=Object(j.a)(O,2),f=m[0],h=m[1],v=Object(c.useState)(!1),x=Object(j.a)(v,2),p=x[0],g=x[1];return Object(c.useEffect)((function(){var e=null;return p?e=setInterval((function(){d>0&&u(d-1),0===d&&(0===f?clearInterval(e):(h(f-1),u(59)))}),1e3):clearInterval(e),function(){return clearInterval(e)}}),[p,d,f]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"timerContainer",children:[Object(l.jsx)("div",{children:"Timer"}),Object(l.jsxs)("div",{children:["0",f,":",d<10?"0"+d:d]})]}),Object(l.jsxs)("div",{className:"timerContainer",children:[Object(l.jsx)("div",{children:"Recipe"}),Object(l.jsx)("div",{className:"minimap",style:r})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){g(!0),s(Object(o.a)(Object(o.a)({},r),{},{animation:"minimap-fill ".concat(e.time,"s linear forwards")}))},children:"Start"}),Object(l.jsx)("button",{onClick:function(){h(Math.floor(t/60)),u(t%60),g(!1),s(Object(o.a)(Object(o.a)({},r),{},{animation:"none"}))},children:"Reset"})]})})]})},d=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:e.name}),Object(l.jsx)("p",{children:"Grams test"})]}),Object(l.jsx)("div",{}),Object(l.jsx)(b,{time:e.time,color:e.color})]}),Object(l.jsx)("div",{})]})};var u=function(){var e=a.map((function(e){return Object(l.jsx)(d,{time:e.brewTime,color:e.color,name:e.brewType})}));return Object(l.jsx)(l.Fragment,{children:e})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),O()},5:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.a78e3c27.chunk.js.map