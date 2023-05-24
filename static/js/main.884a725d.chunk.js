(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),r=c(5),s=(c(20),c(21),c(22),c(2)),a=c(6),j=c.n(a),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},b=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"/people",text:"People"})]})})})},o=c(8),d=c(11),h=c(4),x=c(1),O=(c(24),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=Object(x.memo)((function(e){var t=e.person,c=e.selectedPerson,n=t.name,s=t.sex,a=t.born,l=t.died,b=t.motherName,o=t.fatherName,d=t.mother,h=t.father,x=t.slug;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":x===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(r.b,{to:x,className:j()({"has-text-danger":"f"===s}),children:n})}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:l}),d?Object(i.jsx)("td",{children:Object(i.jsx)(r.b,{className:"has-text-danger",to:d.slug,children:b})}):Object(i.jsx)("td",{children:b||"-"}),h?Object(i.jsx)("td",{children:Object(i.jsx)(r.b,{to:h.slug,children:o})}):Object(i.jsx)("td",{children:o||"-"})]})})),m=function(e){var t=e.people,c=e.selectedSlug;return e.error?Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):t.length?Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(p,{person:e,selectedPerson:c},e.name)}))})]}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},f=function(){var e=Object(s.h)().slug,t=void 0===e?"":e,c=Object(x.useState)([]),n=Object(h.a)(c,2),r=n[0],a=n[1],j=Object(x.useState)(!0),l=Object(h.a)(j,2),b=l[0],p=l[1],f=Object(x.useState)(!1),v=Object(h.a)(f,2),g=v[0],N=v[1];return Object(x.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u();case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),N(!0);case 10:return e.prev=10,p(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:b?Object(i.jsx)(O,{}):Object(i.jsx)(m,{people:r,selectedSlug:t,error:g})})})]})},v=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},g=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},N=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(b,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(v,{})}),Object(i.jsx)(s.b,{path:"/home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.b,{path:"/people",children:[Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.b,{path:":slug",element:Object(i.jsx)(f,{})})]}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)(g,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(r.a,{children:Object(i.jsx)(N,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.884a725d.chunk.js.map