(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{13607:function(n,r,t){"use strict";t.d(r,{Z:function(){return s}});var e=t(85893);function s(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("br",{})})}},49955:function(n,r,t){"use strict";t.d(r,{Z:function(){return c}});var e=t(85893),s=t(9008),a=t(41664);function c(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)(s.default,{children:(0,e.jsx)("title",{children:"MyDocs"})}),(0,e.jsx)("div",{className:"bg-gray-600 h-10 leading-10 text-2xl",children:(0,e.jsx)(a.default,{href:"/",children:(0,e.jsx)("a",{className:"no-underline text-gray-100 mx-2",children:"MyDocs"})})})]})})}},33890:function(n,r,t){"use strict";t.d(r,{Z:function(){return a}});var e=t(85893),s=t(41664);function a(n){var r=n.articleData;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"mx-3",children:"Articles:"}),(0,e.jsx)("div",{className:"mx-5",children:r.map((function(n){var r,t=n.id,a=n.title,c=n.tags;return(0,e.jsxs)("div",{children:["".concat((r=t,String(r).substr(0,4)+"/"+String(r).substr(4,2)+"/"+String(r).substr(6,2)),": "),(0,e.jsx)(s.default,{href:"/articles/[id]",as:"/articles/".concat(t),children:(0,e.jsx)("a",{className:"text-blue-500",children:a})}),(0,e.jsxs)("span",{children:[" : Tags [",c.join(", "),"]"]})]},t)}))})]})}},33979:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return l},default:function(){return d}});var e=t(85893),s=t(49955),a=t(13607),c=t(33890),i=t(41664);function u(n){var r=n.articleData.map((function(n){return n.tags})),t=new Set(r.flat()),s=Array.from(t);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"mx-3",children:"Tags:"}),(0,e.jsxs)("div",{className:"mx-5",children:[s.map((function(n){return(0,e.jsxs)("span",{children:[(0,e.jsx)(i.default,{href:"tags/".concat(n),children:(0,e.jsx)("a",{children:n})}),(0,e.jsx)("span",{children:" "})]},n)})),(0,e.jsx)("hr",{})]})]})}var l=!0;function d(n){var r=n.articleData;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.Z,{}),(0,e.jsx)(u,{articleData:r}),(0,e.jsx)(c.Z,{articleData:r}),(0,e.jsx)(a.Z,{})]})}},45301:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(33979)}])}},function(n){n.O(0,[996,774,888,179],(function(){return r=45301,n(n.s=r);var r}));var r=n.O();_N_E=r}]);