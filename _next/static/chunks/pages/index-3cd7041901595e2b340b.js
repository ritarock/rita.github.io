(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9138:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("br",{})})}},1655:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(9008),a=t(1664),c=t(5893);function s(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)(r.default,{children:(0,c.jsx)("title",{children:"MyDocs"})}),(0,c.jsx)("div",{className:"bg-gray-600 h-10 leading-10 text-2xl",children:(0,c.jsx)(a.default,{href:"/",children:(0,c.jsx)("a",{className:"no-underline text-gray-100 mx-2",children:"MyDocs"})})})]})})}},5546:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1664),a=t(5893);function c(e){var n=e.tags;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"mx-3",children:"Tags:"}),(0,a.jsx)("div",{className:"mx-5",children:n.map((function(e){return(0,a.jsxs)("span",{children:[(0,a.jsx)(r.default,{href:"tags/".concat(e),children:(0,a.jsx)("a",{children:e})}),(0,a.jsx)("span",{children:" "})]},e)}))})]})}},1183:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1664),a=t(5893);function c(e){var n=e.docData;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"mx-3",children:"Docs:"}),(0,a.jsx)("div",{className:"mx-5",children:n.map((function(e){var n=e.title,t=e.date,c=e.tags;return(0,a.jsxs)("div",{children:["".concat(s(t),": "),(0,a.jsx)(r.default,{href:"/docs/[id]",as:"/docs/".concat(t),children:(0,a.jsx)("a",{className:"text-blue-500",children:n})}),(0,a.jsxs)("span",{children:[" : Tags [",c.join(", "),"]"]})]},t)}))})]})}function s(e){return e.toString().substr(0,4)+"/"+e.toString().substr(4,2)+"/"+e.toString().substr(6,2)}},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var a,c=(a=t(7294))&&a.__esModule?a:{default:a},s=t(1063),o=t(4651),i=t(7426);var u={};function l(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=o.useRouter(),f=c.default.useMemo((function(){var n=s.resolveHref(a,e.href,!0),t=r(n,2),c=t[0],o=t[1];return{href:c,as:e.as?s.resolveHref(a,e.as):o||c}}),[a,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,x=e.shallow,g=e.scroll,j=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var m=(n=c.default.Children.only(h))&&"object"===typeof n&&n.ref,y=i.useIntersection({rootMargin:"200px"}),b=r(y,2),_=b[0],E=b[1],M=c.default.useCallback((function(e){_(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,_]);c.default.useEffect((function(){var e=E&&t&&s.isLocalURL(d),n="undefined"!==typeof j?j:a&&a.locale,r=u[d+"%"+v+(n?"%"+n:"")];e&&!r&&l(a,d,v,{locale:n})}),[v,d,E,j,t,a]);var N={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,c,o,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),n[a?"replace":"push"](t,r,{shallow:c,locale:i,scroll:o}))}(e,a,d,v,p,x,g,j)},onMouseEnter:function(e){s.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(a,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof j?j:a&&a.locale,L=a&&a.isLocaleDomain&&s.getDomainLocale(v,w,a&&a.locales,a&&a.domainLocales);N.href=L||s.addBasePath(s.addLocale(v,w,a&&a.defaultLocale))}return c.default.cloneElement(n,N)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,i=a.useRef(),u=a.useState(!1),l=r(u,2),f=l[0],d=l[1],v=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,c=r.observer,s=r.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!s&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[v,f]};var a=t(7294),c=t(3447),s="undefined"!==typeof IntersectionObserver;var o=new Map},2562:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i},default:function(){return u}});var r=t(1655),a=t(9138),c=t(5546),s=t(1183),o=t(5893),i=!0;function u(e){var n=e.docData;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{}),(0,o.jsx)(c.Z,{tags:Array.from(new Set(n.flatMap((function(e){return e.tags}))))}),(0,o.jsx)("hr",{}),(0,o.jsx)(s.Z,{docData:n}),(0,o.jsx)(a.Z,{})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);