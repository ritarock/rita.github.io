(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{1655:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(9008),a=t(1664),c=t(5893);function s(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)(r.default,{children:(0,c.jsx)("title",{children:"MyDocs"})}),(0,c.jsx)("div",{className:"bg-gray-600 h-10 leading-10 text-2xl",children:(0,c.jsx)(a.default,{href:"/",children:(0,c.jsx)("a",{className:"no-underline text-gray-100 mx-2",children:"MyDocs"})})})]})})}},8402:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(1664),a=t(5893);function c(e){var n=e.articleData;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"mx-3",children:"Articles:"}),(0,a.jsx)("div",{className:"mx-5",children:n.map((function(e){var n,t=e.id,c=e.title,s=e.tags;return(0,a.jsxs)("div",{children:["".concat((n=t,String(n).substr(0,4)+"/"+String(n).substr(4,2)+"/"+String(n).substr(6,2)),": "),(0,a.jsx)(r.default,{href:"/articles/[id]",as:"/articles/".concat(t),children:(0,a.jsx)("a",{className:"text-blue-500",children:c})}),(0,a.jsxs)("span",{children:[" : Tags [",s.join(", "),"]"]})]},t)}))})]})}},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var a,c=(a=t(7294))&&a.__esModule?a:{default:a},s=t(1063),i=t(4651),o=t(7426);var u={};function l(e,n,t,r){if(e&&s.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=i.useRouter(),f=c.default.useMemo((function(){var n=s.resolveHref(a,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?s.resolveHref(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,x=e.shallow,g=e.scroll,m=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var j=(n=c.default.Children.only(p))&&"object"===typeof n&&n.ref,y=o.useIntersection({rootMargin:"200px"}),b=r(y,2),_=b[0],E=b[1],N=c.default.useCallback((function(e){_(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,_]);c.default.useEffect((function(){var e=E&&t&&s.isLocalURL(d),n="undefined"!==typeof m?m:a&&a.locale,r=u[d+"%"+v+(n?"%"+n:"")];e&&!r&&l(a,d,v,{locale:n})}),[v,d,E,m,t,a]);var M={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,c,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:c,locale:o,scroll:i}))}(e,a,d,v,h,x,g,m)},onMouseEnter:function(e){s.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l(a,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof m?m:a&&a.locale,w=a&&a.isLocaleDomain&&s.getDomainLocale(v,L,a&&a.locales,a&&a.domainLocales);M.href=w||s.addBasePath(s.addLocale(v,L,a&&a.defaultLocale))}return c.default.cloneElement(n,M)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=a.useRef(),u=a.useState(!1),l=r(u,2),f=l[0],d=l[1],v=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,c=r.observer,s=r.elements;return s.set(e,n),c.observe(e),function(){s.delete(e),c.unobserve(e),0===s.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!s&&!f){var e=c.requestIdleCallback((function(){return d(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[f]),[v,f]};var a=t(7294),c=t(3447),s="undefined"!==typeof IntersectionObserver;var i=new Map},7205:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i},default:function(){return o}});var r=t(1655),a=t(8402),c=(t(7294),t(1163)),s=t(5893),i=!0;function o(e){var n=e.articleData,t=(0,c.useRouter)(),i=n.filter((function(e){return e.tags.includes(String(t.query.tag))}));return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("p",{className:"mx-3",children:"Tags:"}),(0,s.jsx)("p",{className:"mx-5",children:t.query.tag}),(0,s.jsx)("hr",{}),(0,s.jsx)(a.Z,{articleData:i})]})})}},4414:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return t(7205)}])},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)}},function(e){e.O(0,[774,888,179],(function(){return n=4414,e(e.s=n);var n}));var n=e.O();_N_E=n}]);