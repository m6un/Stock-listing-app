(this.webpackJsonpstox=this.webpackJsonpstox||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},58:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(29),i=c.n(a),l=(c(37),c(38),c(18)),r=c(2),j=c(9),o=c(12),d=c.n(o),b=c(30),h=c.n(b).a.create({baseURL:"https://prototype.sbulltech.com/api/v2"}),u=(c(58),c(1));var m=function(){var e=Object(s.useState)(),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(void 0),i=Object(j.a)(a,2),l=i[0],o=i[1],b=Object(r.h)();return Object(s.useEffect)((function(){h.get("quotes/".concat(b.symbol)).then((function(e){n(Object.values(e.data.payload)[0])}))}),[c]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h3",{style:{marginBottom:"15px"},children:b.symbol}),Object(u.jsx)("button",{className:"sortButton",onClick:function(e){h.get("quotes/".concat(b.symbol)).then((function(e){var t=Object.values(e.data.payload)[0].sort((function(e,t){return new d.a(e.time)-new d.a(t.time)}));o(t)}))},children:"asc"}),Object(u.jsx)("button",{className:"sortButton",onClick:function(e){h.get("quotes/".concat(b.symbol)).then((function(e){var t=Object.values(e.data.payload)[0].sort((function(e,t){return new d.a(t.time)-new d.a(e.time)}));o(t)}))},children:"desc"})]}),Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("div",{className:"tableHeader",children:[Object(u.jsx)("h3",{children:"Time"}),Object(u.jsx)("h3",{children:"Price"}),Object(u.jsx)("h3",{children:"Valid till"})]}),Object(u.jsx)("div",{className:"child",children:l?l&&l.map((function(e,t){return Object(u.jsxs)("div",{className:"eachRow",children:[Object(u.jsx)("div",{className:"text",children:e.time},t),Object(u.jsx)("div",{className:"text",children:e.price}),Object(u.jsx)("div",{className:"text",children:e.valid_till})]})})):c&&c.map((function(e,t){return Object(u.jsxs)("div",{className:"eachRow",children:[Object(u.jsx)("div",{className:"text",children:e.time},t),Object(u.jsx)("div",{className:"text",children:e.price}),Object(u.jsx)("div",{className:"text",children:e.valid_till})]})}))})]})]})},O=(c(68),c(32));c(69);var x=function(e){var t=e.stocks,c=Object(r.g)();return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsxs)("div",{className:"tableHeader",children:[Object(u.jsx)("h3",{children:"Symbol"}),Object(u.jsx)("h3",{children:"Name"}),Object(u.jsx)("h3",{children:"Sector"}),Object(u.jsx)("h3",{children:"Valid till"})]}),Object(u.jsx)("div",{className:"child",children:t&&t.map((function(e,t){return Object(u.jsxs)("div",{className:"eachRow",children:[Object(u.jsx)("div",{className:"text1",onClick:function(){!function(e){var t=e.Symbol;t&&c.push(Object(r.e)("/stocks/:symbol",{symbol:t}))}(e)},children:e.Symbol},t),Object(u.jsx)("div",{className:"text",children:e.Name}),Object(u.jsx)("div",{className:"text",children:e.Sector}),Object(u.jsx)("div",{className:"text",children:e.Validtill})]})}))})]})},v=c(70);var f=function(){var e=Object(s.useState)(),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(c),i=Object(j.a)(a,2),l=i[0],r=i[1];return Object(s.useEffect)((function(){h.get("instruments").then((function(e){v().fromString(e.data).then((function(e){return n(e)}))}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"box",children:Object(u.jsx)("input",{type:"search",onChange:function(e){return function(e){if(e){var t=new O.a(c,{keys:["Name","Symbol"]}).search(e),s=[];t.length?(t.forEach((function(e){s.push(e.item)})),r(s)):r([])}else r(c)}(e.target.value)},placeholder:"Search"})}),Object(u.jsx)(x,{stocks:l||c})]})};var p=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/Stock-listing-app/",component:f}),Object(u.jsx)(r.a,{path:"/stocks/:symbol",component:m})]})})})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.8ed9d220.chunk.js.map