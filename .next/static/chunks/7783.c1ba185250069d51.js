"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7783],{89791:function(t,e,r){e.Z=function(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=function t(e){var r,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(o&&(o+=" "),o+=n);else for(r in e)e[r]&&(o&&(o+=" "),o+=r)}return o}(t))&&(n&&(n+=" "),n+=e);return n}},80227:function(t,e,r){r.d(e,{Oq:function(){return s},dO:function(){return f},jn:function(){return o},iz:function(){return p},Dz:function(){return n},cv:function(){return a},oc:function(){return l}});var n=function(t){var e=t.top,r=t.right,n=t.bottom,o=t.left;return{top:e,right:r,bottom:n,left:o,width:r-o,height:n-e,x:o,y:e,center:{x:(r+o)/2,y:(n+e)/2}}},o=function(t,e){return{top:t.top-e.top,left:t.left-e.left,bottom:t.bottom+e.bottom,right:t.right+e.right}},u=function(t,e){return{top:t.top+e.top,left:t.left+e.left,bottom:t.bottom-e.bottom,right:t.right-e.right}},i={top:0,right:0,bottom:0,left:0},f=function(t){var e=t.borderBox,r=t.margin,f=void 0===r?i:r,c=t.border,a=void 0===c?i:c,l=t.padding,s=void 0===l?i:l,p=n(o(e,f)),y=n(u(e,a)),d=n(u(y,s));return{marginBox:p,borderBox:n(e),paddingBox:y,contentBox:d,margin:f,border:a,padding:s}},c=function(t){var e=t.slice(0,-2);if("px"!==t.slice(-2))return 0;var r=Number(e);return isNaN(r)&&function(t,e){if(!t)throw Error("Invariant failed")}(!1),r},a=function(t,e){var r=t.borderBox,n=t.border,o=t.margin,u=t.padding;return f({borderBox:{top:r.top+e.y,left:r.left+e.x,bottom:r.bottom+e.y,right:r.right+e.x},border:n,margin:o,padding:u})},l=function(t,e){return void 0===e&&(e={x:window.pageXOffset,y:window.pageYOffset}),a(t,e)},s=function(t,e){return f({borderBox:t,margin:{top:c(e.marginTop),right:c(e.marginRight),bottom:c(e.marginBottom),left:c(e.marginLeft)},padding:{top:c(e.paddingTop),right:c(e.paddingRight),bottom:c(e.paddingBottom),left:c(e.paddingLeft)},border:{top:c(e.borderTopWidth),right:c(e.borderRightWidth),bottom:c(e.borderBottomWidth),left:c(e.borderLeftWidth)}})},p=function(t){return s(t.getBoundingClientRect(),window.getComputedStyle(t))}},86979:function(t,e,r){var n=r(10854),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};function c(t){return n.isMemo(t)?i:f[t.$$typeof]||o}f[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f[n.Memo]=i;var a=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(d){var o=y(r);o&&o!==d&&t(e,o,n)}var i=l(r);s&&(i=i.concat(s(r)));for(var f=c(e),m=c(r),b=0;b<i.length;++b){var g=i[b];if(!u[g]&&!(n&&n[g])&&!(m&&m[g])&&!(f&&f[g])){var h=p(r,g);try{a(e,g,h)}catch(t){}}}}return e}},38083:function(t,e,r){r.d(e,{Z:function(){return u}});var n=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function o(t,e){if(t.length!==e.length)return!1;for(var r,o,u=0;u<t.length;u++)if(!((r=t[u])===(o=e[u])||n(r)&&n(o)))return!1;return!0}function u(t,e){void 0===e&&(e=o);var r=null;function n(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(r&&r.lastThis===this&&e(n,r.lastArgs))return r.lastResult;var u=t.apply(this,n);return r={lastResult:u,lastArgs:n,lastThis:this},u}return n.clear=function(){r=null},n}},51434:function(t,e){e.Z=function(t){var e=[],r=null,n=function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];e=o,r||(r=requestAnimationFrame(function(){r=null,t.apply(void 0,e)}))};return n.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},n}},93611:function(t,e){/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,a=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case l:case s:case u:case f:case i:case y:return t;default:switch(t=t&&t.$$typeof){case a:case p:case b:case m:case c:return t;default:return e}}case o:return e}}}function O(t){return w(t)===s}e.AsyncMode=l,e.ConcurrentMode=s,e.ContextConsumer=a,e.ContextProvider=c,e.Element=n,e.ForwardRef=p,e.Fragment=u,e.Lazy=b,e.Memo=m,e.Portal=o,e.Profiler=f,e.StrictMode=i,e.Suspense=y,e.isAsyncMode=function(t){return O(t)||w(t)===l},e.isConcurrentMode=O,e.isContextConsumer=function(t){return w(t)===a},e.isContextProvider=function(t){return w(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return w(t)===p},e.isFragment=function(t){return w(t)===u},e.isLazy=function(t){return w(t)===b},e.isMemo=function(t){return w(t)===m},e.isPortal=function(t){return w(t)===o},e.isProfiler=function(t){return w(t)===f},e.isStrictMode=function(t){return w(t)===i},e.isSuspense=function(t){return w(t)===y},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===u||t===s||t===f||t===i||t===y||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===b||t.$$typeof===m||t.$$typeof===c||t.$$typeof===a||t.$$typeof===p||t.$$typeof===h||t.$$typeof===v||t.$$typeof===S||t.$$typeof===g)},e.typeOf=w},10854:function(t,e,r){t.exports=r(93611)},12005:function(t,e,r){r.d(e,{zt:function(){return A},$j:function(){return _}});var n=r(3276),o=r(97737),u=r(8431);let i=function(t){t()},f=()=>i;var c=r(86006);let a=Symbol.for(`react-redux-context-${c.version}`),l=globalThis,s=new Proxy({},new Proxy({},{get(t,e){let r;let n=((r=l[a])||(r=(0,c.createContext)(null),l[a]=r),r);return(t,...r)=>Reflect[e](n,...r)}}));var p=r(40431);function y(t,e){if(null==t)return{};var r,n,o={},u=Object.keys(t);for(n=0;n<u.length;n++)r=u[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}var d=r(86979),m=r.n(d),b=r(4360);let g=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function h(t){return function(e){let r=t(e);function n(){return r}return n.dependsOnOwnProps=!1,n}}function v(t){return t.dependsOnOwnProps?!!t.dependsOnOwnProps:1!==t.length}function S(t,e){return function(e,{displayName:r}){let n=function(t,e){return n.dependsOnOwnProps?n.mapToProps(t,e):n.mapToProps(t,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(e,r){n.mapToProps=t,n.dependsOnOwnProps=v(t);let o=n(e,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=v(o),o=n(e,r)),o},n}}function w(t,e){return(r,n)=>{throw Error(`Invalid value of type ${typeof t} for ${e} argument when connecting component ${n.wrappedComponentName}.`)}}function O(t,e,r){return(0,p.Z)({},r,t,e)}let P={notify(){},get:()=>[]};function x(t,e){let r;let n=P;function o(){i.onStateChange&&i.onStateChange()}function u(){r||(r=e?e.addNestedSub(o):t.subscribe(o),n=function(){let t=f(),e=null,r=null;return{clear(){e=null,r=null},notify(){t(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let n=!0,o=r={callback:t,next:null,prev:r};return o.prev?o.prev.next=o:e=o,function(){n&&null!==e&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}let i={addNestedSub:function(t){return u(),n.subscribe(t)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return!!r},trySubscribe:u,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=P)},getListeners:()=>n};return i}let E=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),j=E?c.useLayoutEffect:c.useEffect;function $(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function C(t,e){if($(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;let r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(e,r[n])||!$(t[r[n]],e[r[n]]))return!1;return!0}let N=["reactReduxForwardedRef"],T=()=>{throw Error("uSES not initialized!")},R=[null,null];function M(t,e){return t===e}var _=function(t,e,r,{pure:n,areStatesEqual:o=M,areOwnPropsEqual:u=C,areStatePropsEqual:i=C,areMergedPropsEqual:f=C,forwardRef:a=!1,context:l=s}={}){let d=t?"function"==typeof t?S(t,"mapStateToProps"):w(t,"mapStateToProps"):h(()=>({})),v=e&&"object"==typeof e?h(t=>(function(t,e){let r={};for(let n in t){let o=t[n];"function"==typeof o&&(r[n]=(...t)=>e(o(...t)))}return r})(e,t)):e?"function"==typeof e?S(e,"mapDispatchToProps"):w(e,"mapDispatchToProps"):h(t=>({dispatch:t})),P=r?"function"==typeof r?function(t,{displayName:e,areMergedPropsEqual:n}){let o,u=!1;return function(t,e,i){let f=r(t,e,i);return u?n(f,o)||(o=f):(u=!0,o=f),o}}:w(r,"mergeProps"):()=>O,E=!!t;return t=>{let e=t.displayName||t.name||"Component",r=`Connect(${e})`,n={shouldHandleStateChanges:E,displayName:r,wrappedComponentName:e,WrappedComponent:t,initMapStateToProps:d,initMapDispatchToProps:v,initMergeProps:P,areStatesEqual:o,areStatePropsEqual:i,areOwnPropsEqual:u,areMergedPropsEqual:f};function s(e){var r;let o;let[u,i,f]=(0,c.useMemo)(()=>{let{reactReduxForwardedRef:t}=e,r=y(e,N);return[e.context,t,r]},[e]),a=(0,c.useMemo)(()=>u&&u.Consumer&&(0,b.isContextConsumer)(c.createElement(u.Consumer,null))?u:l,[u,l]),s=(0,c.useContext)(a),d=!!e.store&&!!e.store.getState&&!!e.store.dispatch,m=!!s&&!!s.store,h=d?e.store:s.store,v=m?s.getServerState:h.getState,S=(0,c.useMemo)(()=>(function(t,e){let{initMapStateToProps:r,initMapDispatchToProps:n,initMergeProps:o}=e,u=y(e,g),i=r(t,u),f=n(t,u),c=o(t,u);return function(t,e,r,n,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:i}){let f,c,a,l,s,p=!1;return function(y,d){return p?function(p,y){let d=!u(y,c),m=!o(p,f,y,c);return(f=p,c=y,d&&m)?(a=t(f,c),e.dependsOnOwnProps&&(l=e(n,c)),s=r(a,l,c)):d?(t.dependsOnOwnProps&&(a=t(f,c)),e.dependsOnOwnProps&&(l=e(n,c)),s=r(a,l,c)):m?function(){let e=t(f,c),n=!i(e,a);return a=e,n&&(s=r(a,l,c)),s}():s}(y,d):(s=r(a=t(f=y,c=d),l=e(n,c),c),p=!0,s)}}(i,f,c,t,u)})(h.dispatch,n),[h]),[w,O]=(0,c.useMemo)(()=>{if(!E)return R;let t=x(h,d?void 0:s.subscription),e=t.notifyNestedSubs.bind(t);return[t,e]},[h,d,s]),P=(0,c.useMemo)(()=>d?s:(0,p.Z)({},s,{subscription:w}),[d,s,w]),$=(0,c.useRef)(),C=(0,c.useRef)(f),M=(0,c.useRef)(),_=(0,c.useRef)(!1);(0,c.useRef)(!1);let A=(0,c.useRef)(!1),B=(0,c.useRef)();j(()=>(A.current=!0,()=>{A.current=!1}),[]);let D=(0,c.useMemo)(()=>()=>M.current&&f===C.current?M.current:S(h.getState(),f),[h,f]),k=(0,c.useMemo)(()=>t=>w?function(t,e,r,n,o,u,i,f,c,a,l){if(!t)return()=>{};let s=!1,p=null,y=()=>{let t,r;if(s||!f.current)return;let y=e.getState();try{t=n(y,o.current)}catch(t){r=t,p=t}r||(p=null),t===u.current?i.current||a():(u.current=t,c.current=t,i.current=!0,l())};return r.onStateChange=y,r.trySubscribe(),y(),()=>{if(s=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}(E,h,w,S,C,$,_,A,M,O,t):()=>{},[w]);r=[C,$,_,f,M,O],j(()=>(function(t,e,r,n,o,u){t.current=n,r.current=!1,o.current&&(o.current=null,u())})(...r),void 0);try{o=T(k,D,v?()=>S(v(),f):D)}catch(t){throw B.current&&(t.message+=`
The error may be correlated with this previous error:
${B.current.stack}

`),t}j(()=>{B.current=void 0,M.current=void 0,$.current=o});let F=(0,c.useMemo)(()=>c.createElement(t,(0,p.Z)({},o,{ref:i})),[i,t,o]),I=(0,c.useMemo)(()=>E?c.createElement(a.Provider,{value:P},F):F,[a,F,P]);return I}let h=c.memo(s);if(h.WrappedComponent=t,h.displayName=s.displayName=r,a){let e=c.forwardRef(function(t,e){return c.createElement(h,(0,p.Z)({},t,{reactReduxForwardedRef:e}))});return e.displayName=r,e.WrappedComponent=t,m()(e,t)}return m()(h,t)}},A=function({store:t,context:e,children:r,serverState:n,stabilityCheck:o="once",noopCheck:u="once"}){let i=(0,c.useMemo)(()=>{let e=x(t);return{store:t,subscription:e,getServerState:n?()=>n:void 0,stabilityCheck:o,noopCheck:u}},[t,n,o,u]),f=(0,c.useMemo)(()=>t.getState(),[t]);return j(()=>{let{subscription:e}=i;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),f!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[i,f]),c.createElement((e||s).Provider,{value:i},r)};o.useSyncExternalStoreWithSelector,T=n.useSyncExternalStore,i=u.unstable_batchedUpdates},84123:function(t,e){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),c=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),d=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isContextConsumer=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case o:case i:case u:case s:case p:return t;default:switch(t=t&&t.$$typeof){case a:case c:case l:case d:case y:case f:return t;default:return e}}case n:return e}}}(t)===c}},4360:function(t,e,r){t.exports=r(84123)},22608:function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach(function(e){!function(t,e,r){var o;o=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"===n(o)?o:String(o))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function i(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}r.d(e,{md:function(){return d},DE:function(){return p},qC:function(){return y},MT:function(){return l}});var f="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function l(t,e,r){if("function"==typeof e&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw Error(i(0));if("function"==typeof e&&void 0===r&&(r=e,e=void 0),void 0!==r){if("function"!=typeof r)throw Error(i(1));return r(l)(t,e)}if("function"!=typeof t)throw Error(i(2));var n,o=t,u=e,c=[],s=c,p=!1;function y(){s===c&&(s=c.slice())}function d(){if(p)throw Error(i(3));return u}function m(t){if("function"!=typeof t)throw Error(i(4));if(p)throw Error(i(5));var e=!0;return y(),s.push(t),function(){if(e){if(p)throw Error(i(6));e=!1,y();var r=s.indexOf(t);s.splice(r,1),c=null}}}function b(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t))throw Error(i(7));if(void 0===t.type)throw Error(i(8));if(p)throw Error(i(9));try{p=!0,u=o(u,t)}finally{p=!1}for(var e=c=s,r=0;r<e.length;r++)(0,e[r])();return t}return b({type:a.INIT}),(n={dispatch:b,subscribe:m,getState:d,replaceReducer:function(t){if("function"!=typeof t)throw Error(i(10));o=t,b({type:a.REPLACE})}})[f]=function(){var t;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw Error(i(11));function e(){t.next&&t.next(d())}return e(),{unsubscribe:m(e)}}})[f]=function(){return this},t},n}function s(t,e){return function(){return e(t.apply(this,arguments))}}function p(t,e){if("function"==typeof t)return s(t,e);if("object"!=typeof t||null===t)throw Error(i(16));var r={};for(var n in t){var o=t[n];"function"==typeof o&&(r[n]=s(o,e))}return r}function y(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}function d(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw Error(i(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},f=e.map(function(t){return t(o)});return n=y.apply(void 0,f)(r.dispatch),u(u({},r),{},{dispatch:n})}}}},50155:function(t,e,r){r.d(e,{I4:function(){return i},Ye:function(){return u}});var n=r(86006);function o(t,e){var r=(0,n.useState)(function(){return{inputs:e,result:t()}})[0],o=(0,n.useRef)(!0),u=(0,n.useRef)(r),i=o.current||e&&u.current.inputs&&function(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}(e,u.current.inputs)?u.current:{inputs:e,result:t()};return(0,n.useEffect)(function(){o.current=!1,u.current=i},[i]),i.result}var u=o,i=function(t,e){return o(function(){return t},e)}},40431:function(t,e,r){r.d(e,{Z:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}}}]);