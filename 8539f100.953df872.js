(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return p}));var t=n(3),i=n(7),o=(n(0),n(88)),a=n(90),s={id:"ridge-regression",title:"Ridge Regression"},c={unversionedId:"ridge-regression",id:"ridge-regression",isDocsHomePage:!1,title:"Ridge Regression",description:"In order to address multicollinearity among many regressors and prevent",source:"@site/docs/ridge-regression.md",slug:"/ridge-regression",permalink:"/Robyn/docs/ridge-regression",editUrl:"https://github.com/facebookexperimental/Robyn/docs/ridge-regression.md",version:"current",sidebar:"someSidebar",previous:{title:"Step-by-step guide",permalink:"/Robyn/docs/step-by-step-guide"},next:{title:"Variable Transformations",permalink:"/Robyn/docs/variable-transformations"}},u=[],l={toc:u};function p(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to address multicollinearity among many regressors and prevent\noverfitting we apply a regularization technique to reduce variance at the cost\nof introducing some bias. This approach tends to improve the predictive\nperformance of MMMs. The most common regularization, and the one we are using in\nthis code is Ridge regression. The mathematical notation for Ridge regression\nis:"),Object(o.b)("img",{alt:"Ridge Regression Formula",src:Object(a.a)("img/Ridge.png")}),Object(o.b)("p",null,"Below the code where we execute this part, remember you will find it under the\n\u2018func.R\u2019 script:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'   #### fit ridge regression with x-validation\n      cvmod <- cv.glmnet(x_train\n                         ,y_train\n                         ,family = "gaussian"\n                         ,alpha = 0 #0 for ridge regression\n                         ,lambda = lambda_seq\n                         ,lower.limits = lower.limits\n                         ,upper.limits = upper.limits\n                         ,type.measure = "mse"\n                         #,nlambda = 100\n                         #,intercept = FALSE\n      )\n')))}p.isMDXComponent=!0},88:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return m}));var t=n(0),i=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var r=i.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=l(e.components);return i.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},f=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=t,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||o;return n?i.a.createElement(m,s(s({ref:r},u),{},{components:n})):i.a.createElement(m,s({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90:function(e,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return a}));var t=n(22),i=n(92);function o(){const{siteConfig:{baseUrl:e="/",url:r}={}}=Object(t.default)();return{withBaseUrl:(n,t)=>function(e,r,n,{forcePrependBaseUrl:t=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(t)return r+n;const a=n.startsWith(r)?n:r+n.replace(/^\//,"");return o?e+a:a}(r,e,n,t)}}function a(e,r={}){const{withBaseUrl:n}=o();return n(e,r)}},92:function(e,r,n){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!t(e)}n.d(r,"b",(function(){return t})),n.d(r,"a",(function(){return i}))}}]);