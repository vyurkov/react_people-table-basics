(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(5),s=c(2),r=(c(18),c(19),c(20),c(1)),i=c.n(r),j=c(6),l=c.n(j),o=c(0),b=function(e){var t=e.to,c=e.title;return Object(o.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:c})},d=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(b,{to:"/",title:"Home"}),Object(o.jsx)(b,{to:"people",title:"People"})]})})})},h=function(){return Object(o.jsx)("div",{"data-cy":"app",children:Object(o.jsx)("main",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(s.b,{})})]})})})},x=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},u=c(4),O=(c(22),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){var t=e.person,c=t.name,n=t.sex,s=t.slug;return Object(o.jsx)(a.b,{className:l()({"has-text-danger":"f"===n}),to:"/people/".concat(s),children:c})},f=function(e){var t=e.people,c=Object(s.i)().slug,n=Object(r.useCallback)((function(e){if(!e)return"-";var c=null===t||void 0===t?void 0:t.find((function(t){return t.name===e}));return c?Object(o.jsx)(m,{person:c}):e}),[t]);return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":c===e.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(m,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:n(e.motherName)}),Object(o.jsx)("td",{children:n(e.fatherName)})]},e.slug)}))})]})},v=function(){var e=i.a.useState(),t=Object(u.a)(e,2),c=t[0],n=t[1],a=i.a.useState(!1),s=Object(u.a)(a,2),r=s[0],j=s[1],l=i.a.useState(!1),b=Object(u.a)(l,2),d=b[0],h=b[1];return i.a.useEffect((function(){h(!0),p().then((function(e){return n(e)})).catch((function(){return j(!0)})).finally((function(){return h(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsxs)("div",{className:"box table-container",children:[d&&Object(o.jsx)(O,{}),r&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),c&&(0===c.length?Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(o.jsx)(f,{people:c}))]})]})},g=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(s.e,{children:Object(o.jsxs)(s.c,{path:"/",element:Object(o.jsx)(h,{}),children:[Object(o.jsxs)(s.c,{path:"people",children:[Object(o.jsx)(s.c,{index:!0,element:Object(o.jsx)(v,{})}),Object(o.jsx)(s.c,{path:":slug",element:Object(o.jsx)(v,{})})]}),Object(o.jsx)(s.c,{index:!0,element:Object(o.jsx)(x,{})}),Object(o.jsx)(s.c,{path:"home",element:Object(o.jsx)(s.a,{to:"/",replace:!0})}),Object(o.jsx)(s.c,{path:"*",element:Object(o.jsx)(g,{})})]})})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.0c499ccf.chunk.js.map