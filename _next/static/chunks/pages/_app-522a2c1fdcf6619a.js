(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(470)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,a=r(n(7294)),i=n(1003),l=n(7795),s=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),_=n(3468);let p=new Set;function h(e,t,n,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(p.has(a))return;p.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function g(e){return"string"==typeof e?e:l.formatUrl(e)}let v=a.default.forwardRef(function(e,t){let n,r;let{href:l,as:p,children:v,prefetch:m,passHref:j,replace:b,shallow:x,scroll:w,locale:y,onClick:k,onMouseEnter:C,onTouchStart:M,legacyBehavior:O=!1}=e,N=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,O&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let S=!1!==m,I=a.default.useContext(c.RouterContext),E=a.default.useContext(u.AppRouterContext),R=null!=I?I:E,B=!I,{href:P,as:W}=a.default.useMemo(()=>{if(!I){let e=g(l);return{href:e,as:p?g(p):e}}let[t,n]=i.resolveHref(I,l,!0);return{href:t,as:p?i.resolveHref(I,p):n||t}},[I,l,p]),H=a.default.useRef(P),T=a.default.useRef(W);O&&(r=a.default.Children.only(n));let L=O?r&&"object"==typeof r&&r.ref:t,[U,A,Y]=f.useIntersection({rootMargin:"200px"}),D=a.default.useCallback(e=>{(T.current!==W||H.current!==P)&&(Y(),T.current=W,H.current=P),U(e),L&&("function"==typeof L?L(e):"object"==typeof L&&(L.current=e))},[W,L,P,Y,U]);a.default.useEffect(()=>{R&&A&&S&&h(R,P,W,{locale:y})},[W,P,A,y,S,null==I?void 0:I.locale,R]);let Z={ref:D,onClick(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,l,s,c,u,f){let{nodeName:d}=e.currentTarget,_="A"===d.toUpperCase();if(_&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?a.default.startTransition(p):p()}(e,R,P,W,b,x,w,y,B,S)},onMouseEnter(e){O||"function"!=typeof C||C(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(S||!B)&&h(R,P,W,{locale:y,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof M||M(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(S||!B)&&h(R,P,W,{locale:y,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||j||"a"===r.type&&!("href"in r.props)){let K=void 0!==y?y:null==I?void 0:I.locale,V=(null==I?void 0:I.isLocaleDomain)&&d.getDomainLocale(W,K,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Z.href=V||_.addBasePath(s.addLocale(W,K,null==I?void 0:I.defaultLocale))}return O?a.default.cloneElement(r,Z):a.default.createElement("a",Object.assign({},N,Z),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!a,[u,f]=r.useState(!1),[d,_]=r.useState(null);r.useEffect(()=>{if(a){if(!c&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let t=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&l.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,c,n,t,u]);let p=r.useCallback(()=>{f(!1)},[]);return[_,u,p]};var r=n(7294),o=n(4686);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(9008),a=n.n(o),i=n(1664),l=n.n(i),s=n(8385),c=n.n(s),u=n(7479),f=n.n(u),d=n(1163);let _=[{text:"Home",href:"/"},{text:"Guides",href:"/guides"},{text:"Blog",href:"/blog"},{text:"About",href:"/about"}],p=()=>{let e=(0,d.useRouter)();return(0,r.jsx)("div",{className:f().backgroundWhite,children:(0,r.jsxs)("nav",{className:"".concat(c().nav," ").concat(f().wrapper),children:[(0,r.jsx)("div",{className:c().brand,children:(0,r.jsx)("a",{children:"Benjamin Yde"})}),(0,r.jsx)("div",{className:c().navItemContainer,children:_.map((t,n)=>(0,r.jsx)(l(),{href:t.href,className:"\n                                ".concat(c().navItem," \n                                ").concat(e.pathname===t.href?c().active:c().underlineItem),children:t.text}))})]})})};var h=n(4075),g=n.n(h);let v=()=>(0,r.jsxs)("div",{className:"".concat(g().footerBackground," ").concat(g().footerTop),children:[(0,r.jsx)("div",{className:"".concat(g().footer," ").concat(f().wrapper),children:(0,r.jsxs)("div",{className:g().inner,children:[(0,r.jsx)("h1",{children:"Get in touch!"}),(0,r.jsxs)("div",{className:g().sectionsSplits,children:[(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Address"}),(0,r.jsx)("span",{children:"Belgium Izegem"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Email"}),(0,r.jsx)("span",{children:"benjamin.yde@gmail.com"}),(0,r.jsx)("h2",{children:"Phone"}),(0,r.jsx)("span",{children:"+32 470 35 11 67"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Socials"}),(0,r.jsx)("a",{href:"https://github.com/BenjaminYde",children:(0,r.jsx)("img",{className:g().icon,src:"images/icons/github_white.png"})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/in/benjamin-yde-2b5092171/",children:(0,r.jsx)("img",{className:g().icon,src:"images/icons/linked-in.png"})})]})]})]})}),(0,r.jsx)("div",{className:g().rightsOuter,children:(0,r.jsxs)("div",{className:g().rights,children:["\xa9 ",new Date().getFullYear()," Benjamin Yde. All Rights Reserved."]})})]});function m(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"/fonts/global_fonts.css"}),(0,r.jsx)("link",{rel:"icon",href:"/images/icons/tab_icon.ico"}),(0,r.jsx)("meta",{name:"viewport",content:"viewport-fit=cover"})]}),(0,r.jsx)(p,{}),(0,r.jsx)(t,{...n}),(0,r.jsx)(v,{})]})}n(8339)},8339:function(){},4075:function(e){e.exports={fullBrowserWidth:"footer_fullBrowserWidth__2l7iN",wrapper:"footer_wrapper__ZA8Tc",backgroundWhite:"footer_backgroundWhite__0wUZY",HeaderOrange:"footer_HeaderOrange__eCiPz",whitespaceSmall:"footer_whitespaceSmall__a3B_a",whitespaceRegular:"footer_whitespaceRegular__H9AjC",whitespaceMedium:"footer_whitespaceMedium__g49S4",footer:"footer_footer__WCChH",footerBackground:"footer_footerBackground__ALs_i",footerTop:"footer_footerTop__o4JR4",inner:"footer_inner__0S69v",sectionsSplits:"footer_sectionsSplits__fDNVt",rightsOuter:"footer_rightsOuter__8iWZm",rights:"footer_rights__38WNY",icon:"footer_icon__0vY0_"}},8385:function(e){e.exports={fullBrowserWidth:"navigation_fullBrowserWidth__iOIMB",wrapper:"navigation_wrapper__9sQQj",backgroundWhite:"navigation_backgroundWhite__s71if",HeaderOrange:"navigation_HeaderOrange__9jn2E",whitespaceSmall:"navigation_whitespaceSmall__pBk83",whitespaceRegular:"navigation_whitespaceRegular__CivHs",whitespaceMedium:"navigation_whitespaceMedium__e1C2U",nav:"navigation_nav__UZtVS",navOuter:"navigation_navOuter__shzNx",navInner:"navigation_navInner__5Xvnk",brand:"navigation_brand__MLaVM",navItemContainer:"navigation_navItemContainer__vhcN4",navItem:"navigation_navItem__0RgI5",active:"navigation_active__IUjJL",underlineItem:"navigation_underlineItem__RFj23"}},7479:function(e){e.exports={fullBrowserWidth:"global_fullBrowserWidth__gpgSQ",wrapper:"global_wrapper__OXESG",backgroundWhite:"global_backgroundWhite___8Vd3",HeaderOrange:"global_HeaderOrange__S_IMH",whitespaceSmall:"global_whitespaceSmall__OBGCF",whitespaceRegular:"global_whitespaceRegular__VmwuU",whitespaceMedium:"global_whitespaceMedium__5mRbK"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);