(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7267],{84262:function(e,t,n){"use strict";n.d(t,{SE:function(){return X},YM:function(){return Q}});let r=(()=>{let e=0,t=()=>`0000${(1679616*Math.random()<<0).toString(36)}`.slice(-4);return()=>`u${t()}${e+=1}`})();function i(e){let t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function o(e,t){let n=e.ownerDocument.defaultView||window,r=n.getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function l(e,t={}){let n=t.width||function(e){let t=o(e,"border-left-width"),n=o(e,"border-right-width");return e.clientWidth+t+n}(e),r=t.height||function(e){let t=o(e,"border-top-width"),n=o(e,"border-bottom-width");return e.clientHeight+t+n}(e);return{width:n,height:r}}function a(e){return new Promise((t,n)=>{let r=new Image;r.decode=()=>t(r),r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function u(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function c(e,t,n){let r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),o=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${t} ${n}`),o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("externalResourcesRequired","true"),i.appendChild(o),o.appendChild(e),u(i)}let s=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return null!==n&&(n.constructor.name===t.name||s(n,t))};function d(e,t,n){let o=window.getComputedStyle(e,n),l=o.getPropertyValue("content");if(""===l||"none"===l)return;let a=r();try{t.className=`${t.className} ${a}`}catch(e){return}let u=document.createElement("style");u.appendChild(function(e,t,n){let r=`.${e}:${t}`,o=n.cssText?function(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):i(n).map(e=>{let t=n.getPropertyValue(e),r=n.getPropertyPriority(e);return`${e}: ${t}${r?" !important":""};`}).join(" ");return document.createTextNode(`${r}{${o}}`)}(a,n,o)),t.appendChild(u)}let f="application/font-woff",h="image/jpeg",p={woff:f,woff2:f,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:h,jpeg:h,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function g(e){let t=(function(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""})(e).toLowerCase();return p[t]||""}function m(e){return -1!==e.search(/^(data:)/)}function y(e,t){return`data:${t};base64,${e}`}async function w(e,t,n){let r=await fetch(e,t);if(404===r.status)throw Error(`Resource "${r.url}" not found`);let i=await r.blob();return new Promise((e,t)=>{let o=new FileReader;o.onerror=t,o.onloadend=()=>{try{e(n({res:r,result:o.result}))}catch(e){t(e)}},o.readAsDataURL(i)})}let b={};async function v(e,t,n){var r,i,o;let l,a;let u=(r=e,i=t,o=n.includeQueryParams,a=r.replace(/\?.*/,""),o&&(a=r),/ttf|otf|eot|woff2?/i.test(a)&&(a=a.replace(/.*\//,"")),i?`[${i}]${a}`:a);if(null!=b[u])return b[u];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());try{let r=await w(e,n.fetchRequestInit,({res:e,result:n})=>(t||(t=e.headers.get("Content-Type")||""),n.split(/,/)[1]));l=y(r,t)}catch(r){l=n.imagePlaceholder||"";let t=`Failed to fetch resource: ${e}`;r&&(t="string"==typeof r?r:r.message),t&&console.warn(t)}return b[u]=l,l}async function S(e){let t=e.toDataURL();return"data:,"===t?e.cloneNode(!1):a(t)}async function E(e,t){if(e.currentSrc){let t=document.createElement("canvas"),n=t.getContext("2d");t.width=e.clientWidth,t.height=e.clientHeight,null==n||n.drawImage(e,0,0,t.width,t.height);let r=t.toDataURL();return a(r)}let n=e.poster,r=g(n),i=await v(n,r,t);return a(i)}async function x(e){var t;try{if(null===(t=null==e?void 0:e.contentDocument)||void 0===t?void 0:t.body)return await j(e.contentDocument.body,{},!0)}catch(e){}return e.cloneNode(!1)}async function P(e,t){return s(e,HTMLCanvasElement)?S(e):s(e,HTMLVideoElement)?E(e,t):s(e,HTMLIFrameElement)?x(e):e.cloneNode(!1)}let C=e=>null!=e.tagName&&"SLOT"===e.tagName.toUpperCase();async function _(e,t,n){var r,o;let l=[];return 0===(l=C(e)&&e.assignedNodes?i(e.assignedNodes()):s(e,HTMLIFrameElement)&&(null===(r=e.contentDocument)||void 0===r?void 0:r.body)?i(e.contentDocument.body.childNodes):i((null!==(o=e.shadowRoot)&&void 0!==o?o:e).childNodes)).length||s(e,HTMLVideoElement)||await l.reduce((e,r)=>e.then(()=>j(r,n)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}async function R(e,t){let n=e.querySelectorAll?e.querySelectorAll("use"):[];if(0===n.length)return e;let r={};for(let i=0;i<n.length;i++){let o=n[i],l=o.getAttribute("xlink:href");if(l){let n=e.querySelector(l),i=document.querySelector(l);n||!i||r[l]||(r[l]=await j(i,t,!0))}}let i=Object.values(r);if(i.length){let t="http://www.w3.org/1999/xhtml",n=document.createElementNS(t,"svg");n.setAttribute("xmlns",t),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";let r=document.createElementNS(t,"defs");n.appendChild(r);for(let e=0;e<i.length;e++)r.appendChild(i[e]);e.appendChild(n)}return e}async function j(e,t,n){return n||!t.filter||t.filter(e)?Promise.resolve(e).then(e=>P(e,t)).then(n=>_(e,n,t)).then(t=>{var n,r;return n=e,s(r=t,Element)&&(!function(e,t){let n=t.style;if(!n)return;let r=window.getComputedStyle(e);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):i(r).forEach(i=>{let o=r.getPropertyValue(i);if("font-size"===i&&o.endsWith("px")){let e=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o=`${e}px`}s(e,HTMLIFrameElement)&&"display"===i&&"inline"===o&&(o="block"),"d"===i&&t.getAttribute("d")&&(o=`path(${t.getAttribute("d")})`),n.setProperty(i,o,r.getPropertyPriority(i))})}(n,r),d(n,r,":before"),d(n,r,":after"),s(n,HTMLTextAreaElement)&&(r.innerHTML=n.value),s(n,HTMLInputElement)&&r.setAttribute("value",n.value),function(e,t){if(s(e,HTMLSelectElement)){let n=Array.from(t.children).find(t=>e.value===t.getAttribute("value"));n&&n.setAttribute("selected","")}}(n,r)),r}).then(e=>R(e,t)):null}let O=/url\((['"]?)([^'"]+?)\1\)/g,A=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,M=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function I(e,t,n,r,i){try{let o;let l=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}(t,n):t,a=g(t);if(i){let e=await i(l);o=y(e,a)}else o=await v(l,a,r);return e.replace(function(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${o}$3`)}catch(e){}return e}function $(e){return -1!==e.search(O)}async function k(e,t,n){if(!$(e))return e;let r=function(e,{preferredFontFormat:t}){return t?e.replace(M,e=>{for(;;){let[n,,r]=A.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}}):e}(e,n),i=function(e){let t=[];return e.replace(O,(e,n,r)=>(t.push(r),e)),t.filter(e=>!m(e))}(r);return i.reduce((e,r)=>e.then(e=>I(e,r,t,n)),Promise.resolve(r))}async function T(e,t,n){var r;let i=null===(r=t.style)||void 0===r?void 0:r.getPropertyValue(e);if(i){let r=await k(i,null,n);return t.style.setProperty(e,r,t.style.getPropertyPriority(e)),!0}return!1}async function z(e,t){await T("background",e,t)||await T("background-image",e,t),await T("mask",e,t)||await T("mask-image",e,t)}async function L(e,t){let n=s(e,HTMLImageElement);if(!(n&&!m(e.src))&&!(s(e,SVGImageElement)&&!m(e.href.baseVal)))return;let r=n?e.src:e.href.baseVal,i=await v(r,g(r),t);await new Promise((t,r)=>{e.onload=t,e.onerror=r,e.decode&&(e.decode=t),"lazy"===e.loading&&(e.loading="eager"),n?(e.srcset="",e.src=i):e.href.baseVal=i})}async function N(e,t){let n=i(e.childNodes),r=n.map(e=>D(e,t));await Promise.all(r).then(()=>e)}async function D(e,t){s(e,Element)&&(await z(e,t),await L(e,t),await N(e,t))}let U={};async function F(e){let t=U[e];if(null!=t)return t;let n=await fetch(e),r=await n.text();return t={url:e,cssText:r},U[e]=t,t}async function V(e,t){let n=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=n.match(/url\([^)]+\)/g)||[],o=i.map(async i=>{let o=i.replace(r,"$1");return o.startsWith("https://")||(o=new URL(o,e.url).href),w(o,t.fetchRequestInit,({result:e})=>(n=n.replace(i,`url(${e})`),[i,e]))});return Promise.all(o).then(()=>n)}function H(e){if(null==e)return[];let t=[],n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let e=r.exec(n);if(null===e)break;t.push(e[0])}n=n.replace(r,"");let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o=RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=i.exec(n);if(null===e){if(null===(e=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;t.push(e[0])}return t}async function W(e,t){let n=[],r=[];return e.forEach(n=>{if("cssRules"in n)try{i(n.cssRules||[]).forEach((e,i)=>{if(e.type===CSSRule.IMPORT_RULE){let o=i+1,l=e.href,a=F(l).then(e=>V(e,t)).then(e=>H(e).forEach(e=>{try{n.insertRule(e,e.startsWith("@import")?o+=1:n.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})).catch(e=>{console.error("Error loading remote css",e.toString())});r.push(a)}})}catch(o){let i=e.find(e=>null==e.href)||document.styleSheets[0];null!=n.href&&r.push(F(n.href).then(e=>V(e,t)).then(e=>H(e).forEach(e=>{i.insertRule(e,n.cssRules.length)})).catch(e=>{console.error("Error loading remote stylesheet",e)})),console.error("Error inlining remote css file",o)}}),Promise.all(r).then(()=>(e.forEach(e=>{if("cssRules"in e)try{i(e.cssRules||[]).forEach(e=>{n.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),n))}async function q(e,t){if(null==e.ownerDocument)throw Error("Provided element is not within a Document");let n=i(e.ownerDocument.styleSheets),r=await W(n,t);return r.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>$(e.style.getPropertyValue("src")))}async function B(e,t){let n=await q(e,t),r=await Promise.all(n.map(e=>{let n=e.parentStyleSheet?e.parentStyleSheet.href:null;return k(e.cssText,n,t)}));return r.join("\n")}async function G(e,t){let n=null!=t.fontEmbedCSS?t.fontEmbedCSS:t.skipFonts?null:await B(e,t);if(n){let t=document.createElement("style"),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function Y(e,t={}){let{width:n,height:r}=l(e,t),i=await j(e,t,!0);await G(i,t),await D(i,t),function(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;null!=r&&Object.keys(r).forEach(e=>{n[e]=r[e]})}(i,t);let o=await c(i,n,r);return o}async function J(e,t={}){let{width:n,height:r}=l(e,t),i=await Y(e,t),o=await a(i),u=document.createElement("canvas"),c=u.getContext("2d"),s=t.pixelRatio||function(){let e,t;try{t=process}catch(e){}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&Number.isNaN(e=parseInt(n,10))&&(e=1),e||window.devicePixelRatio||1}(),d=t.canvasWidth||n,f=t.canvasHeight||r;return u.width=d*s,u.height=f*s,!t.skipAutoScale&&(u.width>16384||u.height>16384)&&(u.width>16384&&u.height>16384?u.width>u.height?(u.height*=16384/u.width,u.width=16384):(u.width*=16384/u.height,u.height=16384):u.width>16384?(u.height*=16384/u.width,u.width=16384):(u.width*=16384/u.height,u.height=16384)),u.style.width=`${d}`,u.style.height=`${f}`,t.backgroundColor&&(c.fillStyle=t.backgroundColor,c.fillRect(0,0,u.width,u.height)),c.drawImage(o,0,0,u.width,u.height),u}async function Q(e,t={}){let n=await J(e,t);return n.toDataURL()}async function X(e,t={}){let n=await J(e,t),r=await function(e,t={}){return new Promise(e.toBlob?n=>{e.toBlob(n,t.type?t.type:"image/png",t.quality?t.quality:1)}:n=>{let r=window.atob(e.toDataURL(t.type?t.type:void 0,t.quality?t.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i);for(let e=0;e<i;e+=1)o[e]=r.charCodeAt(e);n(new Blob([o],{type:t.type?t.type:"image/png"}))})}(n);return r}},73029:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let r=n(26927),i=n(25909),o=i._(n(86006)),l=r._(n(86174)),a=n(80529),u=n(17302),c=n(23442);n(46731);let s=r._(n(47235)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,n,r,i,o){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function h(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:a,decoding:u,className:c,style:s,fetchPriority:d,placeholder:p,loading:g,unoptimized:m,fill:y,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:S,onLoad:E,onError:x,...P}=e;return o.default.createElement("img",{...P,...h(d),loading:g,width:a,height:l,decoding:u,"data-nimg":y?"fill":"1",className:c,style:s,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&f(e,p,w,b,v,m))},[n,p,w,b,v,x,m,t]),onLoad:e=>{let t=e.currentTarget;f(t,p,w,b,v,m)},onError:e=>{S(!0),"blur"===p&&v(!0),x&&x(e)}})}),g=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(c.ImageConfigContext),r=(0,o.useMemo)(()=>{let e=d||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:f}=e,g=(0,o.useRef)(i);(0,o.useEffect)(()=>{g.current=i},[i]);let m=(0,o.useRef)(f);(0,o.useEffect)(()=>{m.current=f},[f]);let[y,w]=(0,o.useState)(!1),[b,v]=(0,o.useState)(!1),{props:S,meta:E}=(0,a.getImgProps)(e,{defaultLoader:s.default,imgConf:r,blurComplete:y,showAltText:b});return o.default.createElement(o.default.Fragment,null,o.default.createElement(p,{...S,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:v,ref:t}),E.priority?o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+S.src+S.srcSet+S.sizes,rel:"preload",as:"image",href:S.srcSet?void 0:S.src,imageSrcSet:S.srcSet,imageSizes:S.sizes,crossOrigin:S.crossOrigin,referrerPolicy:S.referrerPolicy,...h(S.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},14620:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(26927),i=r._(n(86006)),o=i.default.createContext({})},40353:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},80529:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(46731);let r=n(16542),i=n(17302);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,u,c,{src:s,sizes:d,unoptimized:f=!1,priority:h=!1,loading:p,className:g,quality:m,width:y,height:w,fill:b=!1,style:v,onLoad:S,onLoadingComplete:E,placeholder:x="empty",blurDataURL:P,fetchPriority:C,layout:_,objectFit:R,objectPosition:j,lazyBoundary:O,lazyRoot:A,...M}=e,{imgConf:I,showAltText:$,blurComplete:k,defaultLoader:T}=t,z=I||i.imageConfigDefault;if("allSizes"in z)a=z;else{let e=[...z.deviceSizes,...z.imageSizes].sort((e,t)=>e-t),t=z.deviceSizes.sort((e,t)=>e-t);a={...z,allSizes:e,deviceSizes:t}}let L=M.loader||T;delete M.loader,delete M.srcSet;let N="__next_img_default"in L;if(N){if("custom"===a.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(_){"fill"===_&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!d&&(d=t)}let D="",U=l(y),F=l(w);if("object"==typeof(n=s)&&(o(n)||void 0!==n.src)){let e=o(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,c=e.blurHeight,P=P||e.blurDataURL,D=e.src,!b){if(U||F){if(U&&!F){let t=U/e.width;F=Math.round(e.height*t)}else if(!U&&F){let t=F/e.height;U=Math.round(e.width*t)}}else U=e.width,F=e.height}}let V=!h&&("lazy"===p||void 0===p);(!(s="string"==typeof s?s:D)||s.startsWith("data:")||s.startsWith("blob:"))&&(f=!0,V=!1),a.unoptimized&&(f=!0),N&&s.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),h&&(C="high");let H=l(m),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:j}:{},$?{}:{color:"transparent"},v),q="blur"===x&&P&&!k?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:U,heightInt:F,blurWidth:u,blurHeight:c,blurDataURL:P,objectFit:W.objectFit})+'")'}:{},B=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,l),s=u.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:u.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:n,quality:o,width:u[s]})}}({config:a,src:s,unoptimized:f,width:U,quality:H,sizes:d,loader:L}),G={...M,loading:V?"lazy":p,fetchPriority:C,width:U,height:F,decoding:"async",className:g,style:{...W,...q},sizes:B.sizes,srcSet:B.srcSet,src:B.src},Y={unoptimized:f,priority:h,placeholder:x,fill:b};return{props:G,meta:Y}}},86174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return s},default:function(){return p}});let r=n(26927),i=n(25909),o=i._(n(86006)),l=r._(n(20255)),a=n(14620),u=n(27268),c=n(40353);function s(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(46731);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(s(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let p=function(e){let{children:t}=e,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16542:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=r||t,u=i||n,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&u?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+u+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&i?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},23442:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let r=n(26927),i=r._(n(86006)),o=n(17302),l=i.default.createContext(o.imageConfigDefault)},17302:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},45445:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},unstable_getImgProps:function(){return u}});let r=n(26927),i=n(80529),o=n(46731),l=n(73029),a=r._(n(47235)),u=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=l.Image},47235:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},20255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(25909),i=r._(n(86006)),o=i.useLayoutEffect,l=i.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},46731:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},76394:function(e,t,n){e.exports=n(45445)},19357:function(e,t,n){"use strict";n.d(t,{y1:function(){return i},zl:function(){return o}});var r=n(86006);function i(e,t,n){var i=this,o=(0,r.useRef)(null),l=(0,r.useRef)(0),a=(0,r.useRef)(null),u=(0,r.useRef)([]),c=(0,r.useRef)(),s=(0,r.useRef)(),d=(0,r.useRef)(e),f=(0,r.useRef)(!0);(0,r.useEffect)(function(){d.current=e},[e]);var h=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var p=!!(n=n||{}).leading,g=!("trailing"in n)||!!n.trailing,m="maxWait"in n,y=m?Math.max(+n.maxWait||0,t):null;return(0,r.useEffect)(function(){return f.current=!0,function(){f.current=!1}},[]),(0,r.useMemo)(function(){var e=function(e){var t=u.current,n=c.current;return u.current=c.current=null,l.current=e,s.current=d.current.apply(n,t)},n=function(e,t){h&&cancelAnimationFrame(a.current),a.current=h?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!f.current)return!1;var n=e-o.current;return!o.current||n>=t||n<0||m&&e-l.current>=y},w=function(t){return a.current=null,g&&u.current?e(t):(u.current=c.current=null,s.current)},b=function e(){var i=Date.now();if(r(i))return w(i);if(f.current){var a=t-(i-o.current);n(e,m?Math.min(a,y-(i-l.current)):a)}},v=function(){var d=Date.now(),h=r(d);if(u.current=[].slice.call(arguments),c.current=i,o.current=d,h){if(!a.current&&f.current)return l.current=o.current,n(b,t),p?e(o.current):s.current;if(m)return n(b,t),e(o.current)}return a.current||n(b,t),s.current};return v.cancel=function(){a.current&&(h?cancelAnimationFrame(a.current):clearTimeout(a.current)),l.current=0,u.current=o.current=c.current=a.current=null},v.isPending=function(){return!!a.current},v.flush=function(){return a.current?w(Date.now()):s.current},v},[p,m,t,y,g,h])}function o(e,t,n){var r=void 0===n?{}:n,o=r.leading,l=r.trailing;return i(e,t,{maxWait:t,leading:void 0===o||o,trailing:void 0===l||l})}}}]);