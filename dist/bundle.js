function Oo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var os={exports:{}},Mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=Symbol.for("react.transitional.element"),x0=Symbol.for("react.fragment");function cs(t,e,a){var l=null;if(a!==void 0&&(l=""+a),e.key!==void 0&&(l=""+e.key),"key"in e){a={};for(var n in e)n!=="key"&&(a[n]=e[n])}else a=e;return e=a.ref,{$$typeof:w0,type:t,key:l,ref:e!==void 0?e:null,props:a}}Mi.Fragment=x0;Mi.jsx=cs;Mi.jsxs=cs;os.exports=Mi;var v=os.exports,rs={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.transitional.element"),S0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),z0=Symbol.for("react.strict_mode"),T0=Symbol.for("react.profiler"),A0=Symbol.for("react.consumer"),_0=Symbol.for("react.context"),M0=Symbol.for("react.forward_ref"),O0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),ss=Symbol.for("react.lazy"),Nc=Symbol.iterator;function R0(t){return t===null||typeof t!="object"?null:(t=Nc&&t[Nc]||t["@@iterator"],typeof t=="function"?t:null)}var fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ds=Object.assign,hs={};function ol(t,e,a){this.props=t,this.context=e,this.refs=hs,this.updater=a||fs}ol.prototype.isReactComponent={};ol.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ol.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gs(){}gs.prototype=ol.prototype;function Ro(t,e,a){this.props=t,this.context=e,this.refs=hs,this.updater=a||fs}var jo=Ro.prototype=new gs;jo.constructor=Ro;ds(jo,ol.prototype);jo.isPureReactComponent=!0;var Cc=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},ps=Object.prototype.hasOwnProperty;function Uo(t,e,a,l,n,i){return a=i.ref,{$$typeof:Do,type:t,key:e,ref:a!==void 0?a:null,props:i}}function j0(t,e){return Uo(t.type,e,void 0,void 0,void 0,t.props)}function No(t){return typeof t=="object"&&t!==null&&t.$$typeof===Do}function U0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Hc=/\/+/g;function Ki(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U0(""+t.key):e.toString(36)}function kc(){}function N0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(kc,kc):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Aa(t,e,a,l,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case Do:case S0:u=!0;break;case ss:return u=t._init,Aa(u(t._payload),e,a,l,n)}}if(u)return n=n(t),u=l===""?"."+Ki(t,0):l,Cc(n)?(a="",u!=null&&(a=u.replace(Hc,"$&/")+"/"),Aa(n,e,a,"",function(f){return f})):n!=null&&(No(n)&&(n=j0(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(Hc,"$&/")+"/")+u)),e.push(n)),1;u=0;var o=l===""?".":l+":";if(Cc(t))for(var c=0;c<t.length;c++)l=t[c],i=o+Ki(l,c),u+=Aa(l,e,a,i,n);else if(c=R0(t),typeof c=="function")for(t=c.call(t),c=0;!(l=t.next()).done;)l=l.value,i=o+Ki(l,c++),u+=Aa(l,e,a,i,n);else if(i==="object"){if(typeof t.then=="function")return Aa(N0(t),e,a,l,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function Sn(t,e,a){if(t==null)return t;var l=[],n=0;return Aa(t,l,"","",function(i){return e.call(a,i,n++)}),l}function C0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function H0(){}U.Children={map:Sn,forEach:function(t,e,a){Sn(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Sn(t,function(){e++}),e},toArray:function(t){return Sn(t,function(e){return e})||[]},only:function(t){if(!No(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=ol;U.Fragment=E0;U.Profiler=T0;U.PureComponent=Ro;U.StrictMode=z0;U.Suspense=O0;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return F.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var l=ds({},t.props),n=t.key,i=void 0;if(e!=null)for(u in e.ref!==void 0&&(i=void 0),e.key!==void 0&&(n=""+e.key),e)!ps.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(l[u]=e[u]);var u=arguments.length-2;if(u===1)l.children=a;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];l.children=o}return Uo(t.type,n,void 0,void 0,i,l)};U.createContext=function(t){return t={$$typeof:_0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:A0,_context:t},t};U.createElement=function(t,e,a){var l,n={},i=null;if(e!=null)for(l in e.key!==void 0&&(i=""+e.key),e)ps.call(e,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=e[l]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];n.children=o}if(t&&t.defaultProps)for(l in u=t.defaultProps,u)n[l]===void 0&&(n[l]=u[l]);return Uo(t,i,void 0,void 0,null,n)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:M0,render:t}};U.isValidElement=No;U.lazy=function(t){return{$$typeof:ss,_payload:{_status:-1,_result:t},_init:C0}};U.memo=function(t,e){return{$$typeof:D0,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=F.T,a={};F.T=a;try{var l=t(),n=F.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(H0,Yc)}catch(i){Yc(i)}finally{F.T=e}};U.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()};U.use=function(t){return F.H.use(t)};U.useActionState=function(t,e,a){return F.H.useActionState(t,e,a)};U.useCallback=function(t,e){return F.H.useCallback(t,e)};U.useContext=function(t){return F.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,e){return F.H.useDeferredValue(t,e)};U.useEffect=function(t,e,a){var l=F.H;if(typeof a=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return l.useEffect(t,e)};U.useId=function(){return F.H.useId()};U.useImperativeHandle=function(t,e,a){return F.H.useImperativeHandle(t,e,a)};U.useInsertionEffect=function(t,e){return F.H.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return F.H.useLayoutEffect(t,e)};U.useMemo=function(t,e){return F.H.useMemo(t,e)};U.useOptimistic=function(t,e){return F.H.useOptimistic(t,e)};U.useReducer=function(t,e,a){return F.H.useReducer(t,e,a)};U.useRef=function(t){return F.H.useRef(t)};U.useState=function(t){return F.H.useState(t)};U.useSyncExternalStore=function(t,e,a){return F.H.useSyncExternalStore(t,e,a)};U.useTransition=function(){return F.H.useTransition()};U.version="19.1.0";rs.exports=U;var R=rs.exports;const k0=Oo(R);var ms={exports:{}},Oi={},ys={exports:{}},bs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,N){var j=A.length;A.push(N);t:for(;0<j;){var tt=j-1>>>1,ut=A[tt];if(0<n(ut,N))A[tt]=N,A[j]=ut,j=tt;else break t}}function a(A){return A.length===0?null:A[0]}function l(A){if(A.length===0)return null;var N=A[0],j=A.pop();if(j!==N){A[0]=j;t:for(var tt=0,ut=A.length,xa=ut>>>1;tt<xa;){var Sa=2*(tt+1)-1,pl=A[Sa],fe=Sa+1,Ea=A[fe];if(0>n(pl,j))fe<ut&&0>n(Ea,pl)?(A[tt]=Ea,A[fe]=j,tt=fe):(A[tt]=pl,A[Sa]=j,tt=Sa);else if(fe<ut&&0>n(Ea,j))A[tt]=Ea,A[fe]=j,tt=fe;else break t}}return N}function n(A,N){var j=A.sortIndex-N.sortIndex;return j!==0?j:A.id-N.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var u=Date,o=u.now();t.unstable_now=function(){return u.now()-o}}var c=[],f=[],y=1,m=null,s=3,p=!1,E=!1,z=!1,M=!1,d=typeof setTimeout=="function"?setTimeout:null,r=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function g(A){for(var N=a(f);N!==null;){if(N.callback===null)l(f);else if(N.startTime<=A)l(f),N.sortIndex=N.expirationTime,e(c,N);else break;N=a(f)}}function b(A){if(z=!1,g(A),!E)if(a(c)!==null)E=!0,S||(S=!0,zt());else{var N=a(f);N!==null&&gl(b,N.startTime-A)}}var S=!1,x=-1,T=5,Y=-1;function O(){return M?!0:!(t.unstable_now()-Y<T)}function P(){if(M=!1,S){var A=t.unstable_now();Y=A;var N=!0;try{t:{E=!1,z&&(z=!1,r(x),x=-1),p=!0;var j=s;try{e:{for(g(A),m=a(c);m!==null&&!(m.expirationTime>A&&O());){var tt=m.callback;if(typeof tt=="function"){m.callback=null,s=m.priorityLevel;var ut=tt(m.expirationTime<=A);if(A=t.unstable_now(),typeof ut=="function"){m.callback=ut,g(A),N=!0;break e}m===a(c)&&l(c),g(A)}else l(c);m=a(c)}if(m!==null)N=!0;else{var xa=a(f);xa!==null&&gl(b,xa.startTime-A),N=!1}}break t}finally{m=null,s=j,p=!1}N=void 0}}finally{N?zt():S=!1}}}var zt;if(typeof h=="function")zt=function(){h(P)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,wa=it.port2;it.port1.onmessage=P,zt=function(){wa.postMessage(null)}}else zt=function(){d(P,0)};function gl(A,N){x=d(function(){A(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return s},t.unstable_next=function(A){switch(s){case 1:case 2:case 3:var N=3;break;default:N=s}var j=s;s=N;try{return A()}finally{s=j}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(A,N){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=s;s=A;try{return N()}finally{s=j}},t.unstable_scheduleCallback=function(A,N,j){var tt=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?tt+j:tt):j=tt,A){case 1:var ut=-1;break;case 2:ut=250;break;case 5:ut=1073741823;break;case 4:ut=1e4;break;default:ut=5e3}return ut=j+ut,A={id:y++,callback:N,priorityLevel:A,startTime:j,expirationTime:ut,sortIndex:-1},j>tt?(A.sortIndex=j,e(f,A),a(c)===null&&A===a(f)&&(z?(r(x),x=-1):z=!0,gl(b,j-tt))):(A.sortIndex=ut,e(c,A),E||p||(E=!0,S||(S=!0,zt()))),A},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(A){var N=s;return function(){var j=s;s=N;try{return A.apply(this,arguments)}finally{s=j}}}})(bs);ys.exports=bs;var Y0=ys.exports,vs={exports:{}},Ot={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=R;function ws(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Me(){}var Mt={d:{f:Me,r:function(){throw Error(ws(522))},D:Me,C:Me,L:Me,m:Me,X:Me,S:Me,M:Me},p:0,findDOMNode:null},q0=Symbol.for("react.portal");function X0(t,e,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q0,key:l==null?null:""+l,children:t,containerInfo:e,implementation:a}}var Ol=B0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Di(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mt;Ot.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(ws(299));return X0(t,e,null,a)};Ot.flushSync=function(t){var e=Ol.T,a=Mt.p;try{if(Ol.T=null,Mt.p=2,t)return t()}finally{Ol.T=e,Mt.p=a,Mt.d.f()}};Ot.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Mt.d.C(t,e))};Ot.prefetchDNS=function(t){typeof t=="string"&&Mt.d.D(t)};Ot.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,l=Di(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Mt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:i}):a==="script"&&Mt.d.X(t,{crossOrigin:l,integrity:n,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ot.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Di(e.as,e.crossOrigin);Mt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Mt.d.M(t)};Ot.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,l=Di(a,e.crossOrigin);Mt.d.L(t,a,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ot.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Di(e.as,e.crossOrigin);Mt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Mt.d.m(t)};Ot.requestFormReset=function(t){Mt.d.r(t)};Ot.unstable_batchedUpdates=function(t,e){return t(e)};Ot.useFormState=function(t,e,a){return Ol.H.useFormState(t,e,a)};Ot.useFormStatus=function(){return Ol.H.useHostTransitionStatus()};Ot.version="19.1.0";function xs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xs)}catch(t){console.error(t)}}xs(),vs.exports=Ot;var Ss=vs.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=Y0,Es=R,G0=Ss;function w(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function un(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Ts(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bc(t){if(un(t)!==t)throw Error(w(188))}function Q0(t){var e=t.alternate;if(!e){if(e=un(t),e===null)throw Error(w(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return Bc(n),t;if(i===l)return Bc(n),e;i=i.sibling}throw Error(w(188))}if(a.return!==l.return)a=n,l=i;else{for(var u=!1,o=n.child;o;){if(o===a){u=!0,a=n,l=i;break}if(o===l){u=!0,l=n,a=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===a){u=!0,a=i,l=n;break}if(o===l){u=!0,l=i,a=n;break}o=o.sibling}if(!u)throw Error(w(189))}}if(a.alternate!==l)throw Error(w(190))}if(a.tag!==3)throw Error(w(188));return a.stateNode.current===a?t:e}function As(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=As(t),e!==null)return e;t=t.sibling}return null}var $=Object.assign,Z0=Symbol.for("react.element"),En=Symbol.for("react.transitional.element"),Tl=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),_s=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),Ms=Symbol.for("react.consumer"),me=Symbol.for("react.context"),Co=Symbol.for("react.forward_ref"),ju=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),Ho=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Nu=Symbol.for("react.activity"),V0=Symbol.for("react.memo_cache_sentinel"),qc=Symbol.iterator;function yl(t){return t===null||typeof t!="object"?null:(t=qc&&t[qc]||t["@@iterator"],typeof t=="function"?t:null)}var K0=Symbol.for("react.client.reference");function Cu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Da:return"Fragment";case Ru:return"Profiler";case _s:return"StrictMode";case ju:return"Suspense";case Uu:return"SuspenseList";case Nu:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Tl:return"Portal";case me:return(t.displayName||"Context")+".Provider";case Ms:return(t._context.displayName||"Context")+".Consumer";case Co:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ho:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case Re:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}var Al=Array.isArray,_=Es.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=G0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ia={pending:!1,data:null,method:null,action:null},Hu=[],Ra=-1;function re(t){return{current:t}}function yt(t){0>Ra||(t.current=Hu[Ra],Hu[Ra]=null,Ra--)}function I(t,e){Ra++,Hu[Ra]=t.current,t.current=e}var ue=re(null),Ll=re(null),Xe=re(null),Fn=re(null);function In(t,e){switch(I(Xe,e),I(Ll,t),I(ue,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Lr(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Lr(e),t=Vd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(ue),I(ue,t)}function Wa(){yt(ue),yt(Ll),yt(Xe)}function ku(t){t.memoizedState!==null&&I(Fn,t);var e=ue.current,a=Vd(e,t.type);e!==a&&(I(Ll,t),I(ue,a))}function Pn(t){Ll.current===t&&(yt(ue),yt(Ll)),Fn.current===t&&(yt(Fn),en._currentValue=ia)}var Yu=Object.prototype.hasOwnProperty,ko=ht.unstable_scheduleCallback,Ji=ht.unstable_cancelCallback,J0=ht.unstable_shouldYield,$0=ht.unstable_requestPaint,oe=ht.unstable_now,W0=ht.unstable_getCurrentPriorityLevel,Os=ht.unstable_ImmediatePriority,Ds=ht.unstable_UserBlockingPriority,ti=ht.unstable_NormalPriority,F0=ht.unstable_LowPriority,Rs=ht.unstable_IdlePriority,I0=ht.log,P0=ht.unstable_setDisableYieldValue,on=null,Bt=null;function ke(t){if(typeof I0=="function"&&P0(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(on,t)}catch{}}var qt=Math.clz32?Math.clz32:ah,th=Math.log,eh=Math.LN2;function ah(t){return t>>>=0,t===0?32:31-(th(t)/eh|0)|0}var zn=256,Tn=4194304;function aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ri(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?n=aa(l):(u&=o,u!==0?n=aa(u):a||(a=o&~t,a!==0&&(n=aa(a))))):(o=l&~i,o!==0?n=aa(o):u!==0?n=aa(u):a||(a=l&~t,a!==0&&(n=aa(a)))),n===0?0:e!==0&&e!==n&&!(e&i)&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function cn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function lh(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function js(){var t=zn;return zn<<=1,!(zn&4194048)&&(zn=256),t}function Us(){var t=Tn;return Tn<<=1,!(Tn&62914560)&&(Tn=4194304),t}function $i(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function rn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nh(t,e,a,l,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,c=t.expirationTimes,f=t.hiddenUpdates;for(a=u&~a;0<a;){var y=31-qt(a),m=1<<y;o[y]=0,c[y]=-1;var s=f[y];if(s!==null)for(f[y]=null,y=0;y<s.length;y++){var p=s[y];p!==null&&(p.lane&=-536870913)}a&=~m}l!==0&&Ns(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~e))}function Ns(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-qt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Cs(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-qt(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function Yo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bo(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Hs(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:a0(t.type))}function ih(t,e){var a=X.p;try{return X.p=t,e()}finally{X.p=a}}var Ie=Math.random().toString(36).slice(2),St="__reactFiber$"+Ie,Ut="__reactProps$"+Ie,cl="__reactContainer$"+Ie,Bu="__reactEvents$"+Ie,uh="__reactListeners$"+Ie,oh="__reactHandles$"+Ie,Xc="__reactResources$"+Ie,sn="__reactMarker$"+Ie;function qo(t){delete t[St],delete t[Ut],delete t[Bu],delete t[uh],delete t[oh]}function ja(t){var e=t[St];if(e)return e;for(var a=t.parentNode;a;){if(e=a[cl]||a[St]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Jr(t);t!==null;){if(a=t[St])return a;t=Jr(t)}return e}t=a,a=t.parentNode}return null}function rl(t){if(t=t[St]||t[cl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function _l(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(w(33))}function Ga(t){var e=t[Xc];return e||(e=t[Xc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function pt(t){t[sn]=!0}var ks=new Set,Ys={};function ma(t,e){Fa(t,e),Fa(t+"Capture",e)}function Fa(t,e){for(Ys[t]=e,t=0;t<e.length;t++)ks.add(e[t])}var ch=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gc={},Qc={};function rh(t){return Yu.call(Qc,t)?!0:Yu.call(Gc,t)?!1:ch.test(t)?Qc[t]=!0:(Gc[t]=!0,!1)}function kn(t,e,a){if(rh(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function An(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function de(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}var Wi,Zc;function _a(t){if(Wi===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Wi=e&&e[1]||"",Zc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wi+t+Zc}var Fi=!1;function Ii(t,e){if(!t||Fi)return"";Fi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(p){var s=p}Reflect.construct(t,[],m)}else{try{m.call()}catch(p){s=p}t.call(m.prototype)}}else{try{throw Error()}catch(p){s=p}(m=t())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(p){if(p&&s&&typeof p.stack=="string")return[p.stack,s.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],o=i[1];if(u&&o){var c=u.split(`
`),f=o.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<f.length&&!f[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===f.length)for(l=c.length-1,n=f.length-1;1<=l&&0<=n&&c[l]!==f[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==f[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==f[n]){var y=`
`+c[l].replace(" at new "," at ");return t.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",t.displayName)),y}while(1<=l&&0<=n);break}}}finally{Fi=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_a(a):""}function sh(t){switch(t.tag){case 26:case 27:case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return Ii(t.type,!1);case 11:return Ii(t.type.render,!1);case 1:return Ii(t.type,!0);case 31:return _a("Activity");default:return""}}function Lc(t){try{var e="";do e+=sh(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fh(t){var e=Bs(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(u){l=""+u,i.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ei(t){t._valueTracker||(t._valueTracker=fh(t))}function qs(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Bs(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function ai(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var dh=/[\n"\\]/g;function Jt(t){return t.replace(dh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qu(t,e,a,l,n,i,u,o){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Lt(e)):t.value!==""+Lt(e)&&(t.value=""+Lt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Xu(t,u,Lt(e)):a!=null?Xu(t,u,Lt(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Lt(o):t.removeAttribute("name")}function Xs(t,e,a,l,n,i,u,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;a=a!=null?""+Lt(a):"",e=e!=null?""+Lt(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=o?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function Xu(t,e,a){e==="number"&&ai(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qa(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Lt(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Gs(t,e,a){if(e!=null&&(e=""+Lt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Lt(a):""}function Qs(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(w(92));if(Al(l)){if(1<l.length)throw Error(w(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Lt(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Ia(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var hh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vc(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||hh.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Zs(t,e,a){if(e!=null&&typeof e!="object")throw Error(w(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&Vc(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&Vc(t,i,e[i])}function Xo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ph=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yn(t){return ph.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Gu=null;function Go(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ua=null,Za=null;function Kc(t){var e=rl(t);if(e&&(t=e.stateNode)){var a=t[Ut]||null;t:switch(t=e.stateNode,e.type){case"input":if(qu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Jt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Ut]||null;if(!n)throw Error(w(90));qu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&qs(l)}break t;case"textarea":Gs(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Qa(t,!!a.multiple,e,!1)}}}var Pi=!1;function Ls(t,e,a){if(Pi)return t(e,a);Pi=!0;try{var l=t(e);return l}finally{if(Pi=!1,(Ua!==null||Za!==null)&&(Xi(),Ua&&(e=Ua,t=Za,Za=Ua=null,Kc(e),t)))for(e=0;e<t.length;e++)Kc(t[e])}}function Vl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Ut]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(w(231,e,typeof a));return a}var Ee=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=!1;if(Ee)try{var bl={};Object.defineProperty(bl,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",bl,bl),window.removeEventListener("test",bl,bl)}catch{Qu=!1}var Ye=null,Qo=null,Bn=null;function Vs(){if(Bn)return Bn;var t,e=Qo,a=e.length,l,n="value"in Ye?Ye.value:Ye.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===n[i-l];l++);return Bn=n.slice(t,1<l?1-l:void 0)}function qn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _n(){return!0}function Jc(){return!1}function Nt(t){function e(a,l,n,i,u){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_n:Jc,this.isPropagationStopped=Jc,this}return $(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),e}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=Nt(ya),fn=$({},ya,{view:0,detail:0}),mh=Nt(fn),tu,eu,vl,Ui=$({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vl&&(vl&&t.type==="mousemove"?(tu=t.screenX-vl.screenX,eu=t.screenY-vl.screenY):eu=tu=0,vl=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),$c=Nt(Ui),yh=$({},Ui,{dataTransfer:0}),bh=Nt(yh),vh=$({},fn,{relatedTarget:0}),au=Nt(vh),wh=$({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),xh=Nt(wh),Sh=$({},ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eh=Nt(Sh),zh=$({},ya,{data:0}),Wc=Nt(zh),Th={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_h={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_h[t])?!!e[t]:!1}function Zo(){return Mh}var Oh=$({},fn,{key:function(t){if(t.key){var e=Th[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ah[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zo,charCode:function(t){return t.type==="keypress"?qn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dh=Nt(Oh),Rh=$({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=Nt(Rh),jh=$({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zo}),Uh=Nt(jh),Nh=$({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=Nt(Nh),Hh=$({},Ui,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kh=Nt(Hh),Yh=$({},ya,{newState:0,oldState:0}),Bh=Nt(Yh),qh=[9,13,27,32],Lo=Ee&&"CompositionEvent"in window,Dl=null;Ee&&"documentMode"in document&&(Dl=document.documentMode);var Xh=Ee&&"TextEvent"in window&&!Dl,Ks=Ee&&(!Lo||Dl&&8<Dl&&11>=Dl),Ic=" ",Pc=!1;function Js(t,e){switch(t){case"keyup":return qh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Na=!1;function Gh(t,e){switch(t){case"compositionend":return $s(e);case"keypress":return e.which!==32?null:(Pc=!0,Ic);case"textInput":return t=e.data,t===Ic&&Pc?null:t;default:return null}}function Qh(t,e){if(Na)return t==="compositionend"||!Lo&&Js(t,e)?(t=Vs(),Bn=Qo=Ye=null,Na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ks&&e.locale!=="ko"?null:e.data;default:return null}}var Zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zh[t.type]:e==="textarea"}function Ws(t,e,a,l){Ua?Za?Za.push(l):Za=[l]:Ua=l,e=wi(e,"onChange"),0<e.length&&(a=new ji("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Rl=null,Kl=null;function Lh(t){Qd(t,0)}function Ni(t){var e=_l(t);if(qs(e))return t}function er(t,e){if(t==="change")return e}var Fs=!1;if(Ee){var lu;if(Ee){var nu="oninput"in document;if(!nu){var ar=document.createElement("div");ar.setAttribute("oninput","return;"),nu=typeof ar.oninput=="function"}lu=nu}else lu=!1;Fs=lu&&(!document.documentMode||9<document.documentMode)}function lr(){Rl&&(Rl.detachEvent("onpropertychange",Is),Kl=Rl=null)}function Is(t){if(t.propertyName==="value"&&Ni(Kl)){var e=[];Ws(e,Kl,t,Go(t)),Ls(Lh,e)}}function Vh(t,e,a){t==="focusin"?(lr(),Rl=e,Kl=a,Rl.attachEvent("onpropertychange",Is)):t==="focusout"&&lr()}function Kh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ni(Kl)}function Jh(t,e){if(t==="click")return Ni(e)}function $h(t,e){if(t==="input"||t==="change")return Ni(e)}function Wh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:Wh;function Jl(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Yu.call(e,n)||!Qt(t[n],e[n]))return!1}return!0}function nr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ir(t,e){var a=nr(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=nr(a)}}function Ps(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ps(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ai(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=ai(t.document)}return e}function Vo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Fh=Ee&&"documentMode"in document&&11>=document.documentMode,Ca=null,Zu=null,jl=null,Lu=!1;function ur(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Ca==null||Ca!==ai(l)||(l=Ca,"selectionStart"in l&&Vo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jl&&Jl(jl,l)||(jl=l,l=wi(Zu,"onSelect"),0<l.length&&(e=new ji("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Ca)))}function ea(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ha={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionrun:ea("Transition","TransitionRun"),transitionstart:ea("Transition","TransitionStart"),transitioncancel:ea("Transition","TransitionCancel"),transitionend:ea("Transition","TransitionEnd")},iu={},ef={};Ee&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function ba(t){if(iu[t])return iu[t];if(!Ha[t])return t;var e=Ha[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in ef)return iu[t]=e[a];return t}var af=ba("animationend"),lf=ba("animationiteration"),nf=ba("animationstart"),Ih=ba("transitionrun"),Ph=ba("transitionstart"),tg=ba("transitioncancel"),uf=ba("transitionend"),of=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function ae(t,e){of.set(t,e),ma(e,[t])}var or=new WeakMap;function $t(t,e){if(typeof t=="object"&&t!==null){var a=or.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Lc(e)},or.set(t,e),e)}return{value:t,source:e,stack:Lc(e)}}var Zt=[],ka=0,Ko=0;function Ci(){for(var t=ka,e=Ko=ka=0;e<t;){var a=Zt[e];Zt[e++]=null;var l=Zt[e];Zt[e++]=null;var n=Zt[e];Zt[e++]=null;var i=Zt[e];if(Zt[e++]=null,l!==null&&n!==null){var u=l.pending;u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n}i!==0&&cf(a,n,i)}}function Hi(t,e,a,l){Zt[ka++]=t,Zt[ka++]=e,Zt[ka++]=a,Zt[ka++]=l,Ko|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Jo(t,e,a,l){return Hi(t,e,a,l),li(t)}function sl(t,e){return Hi(t,null,null,e),li(t)}function cf(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-qt(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function li(t){if(50<Gl)throw Gl=0,go=null,Error(w(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ya={};function eg(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,a,l){return new eg(t,e,a,l)}function $o(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xe(t,e){var a=t.alternate;return a===null?(a=Yt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xn(t,e,a,l,n,i){var u=0;if(l=t,typeof t=="function")$o(t)&&(u=1);else if(typeof t=="string")u=lp(t,a,ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Nu:return t=Yt(31,a,e,n),t.elementType=Nu,t.lanes=i,t;case Da:return ua(a.children,n,i,e);case _s:u=8,n|=24;break;case Ru:return t=Yt(12,a,e,n|2),t.elementType=Ru,t.lanes=i,t;case ju:return t=Yt(13,a,e,n),t.elementType=ju,t.lanes=i,t;case Uu:return t=Yt(19,a,e,n),t.elementType=Uu,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:case me:u=10;break t;case Ms:u=9;break t;case Co:u=11;break t;case Ho:u=14;break t;case Re:u=16,l=null;break t}u=29,a=Error(w(130,t===null?"null":typeof t,"")),l=null}return e=Yt(u,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function ua(t,e,a,l){return t=Yt(7,t,l,e),t.lanes=a,t}function uu(t,e,a){return t=Yt(6,t,null,e),t.lanes=a,t}function ou(t,e,a){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ba=[],qa=0,ni=null,ii=0,Vt=[],Kt=0,oa=null,ye=1,be="";function la(t,e){Ba[qa++]=ii,Ba[qa++]=ni,ni=t,ii=e}function sf(t,e,a){Vt[Kt++]=ye,Vt[Kt++]=be,Vt[Kt++]=oa,oa=t;var l=ye;t=be;var n=32-qt(l)-1;l&=~(1<<n),a+=1;var i=32-qt(e)+n;if(30<i){var u=n-n%5;i=(l&(1<<u)-1).toString(32),l>>=u,n-=u,ye=1<<32-qt(e)+n|a<<n|l,be=i+t}else ye=1<<i|a<<n|l,be=t}function Wo(t){t.return!==null&&(la(t,1),sf(t,1,0))}function Fo(t){for(;t===ni;)ni=Ba[--qa],Ba[qa]=null,ii=Ba[--qa],Ba[qa]=null;for(;t===oa;)oa=Vt[--Kt],Vt[Kt]=null,be=Vt[--Kt],Vt[Kt]=null,ye=Vt[--Kt],Vt[Kt]=null}var _t=null,lt=null,q=!1,ca=null,ne=!1,Ku=Error(w(519));function da(t){var e=Error(w(418,""));throw $l($t(e,t)),Ku}function cr(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[St]=t,e[Ut]=l,a){case"dialog":H("cancel",e),H("close",e);break;case"iframe":case"object":case"embed":H("load",e);break;case"video":case"audio":for(a=0;a<Il.length;a++)H(Il[a],e);break;case"source":H("error",e);break;case"img":case"image":case"link":H("error",e),H("load",e);break;case"details":H("toggle",e);break;case"input":H("invalid",e),Xs(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ei(e);break;case"select":H("invalid",e);break;case"textarea":H("invalid",e),Qs(e,l.value,l.defaultValue,l.children),ei(e)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Ld(e.textContent,a)?(l.popover!=null&&(H("beforetoggle",e),H("toggle",e)),l.onScroll!=null&&H("scroll",e),l.onScrollEnd!=null&&H("scrollend",e),l.onClick!=null&&(e.onclick=Zi),e=!0):e=!1,e||da(t)}function rr(t){for(_t=t.return;_t;)switch(_t.tag){case 5:case 13:ne=!1;return;case 27:case 3:ne=!0;return;default:_t=_t.return}}function wl(t){if(t!==_t)return!1;if(!q)return rr(t),q=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||wo(t.type,t.memoizedProps)),a=!a),a&&lt&&da(t),rr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){lt=ee(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}lt=null}}else e===27?(e=lt,Pe(t.type)?(t=Eo,Eo=null,lt=t):lt=e):lt=_t?ee(t.stateNode.nextSibling):null;return!0}function dn(){lt=_t=null,q=!1}function sr(){var t=ca;return t!==null&&(jt===null?jt=t:jt.push.apply(jt,t),ca=null),t}function $l(t){ca===null?ca=[t]:ca.push(t)}var Ju=re(null),va=null,ve=null;function Ue(t,e,a){I(Ju,e._currentValue),e._currentValue=a}function Se(t){t._currentValue=Ju.current,yt(Ju)}function $u(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Wu(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var o=i;i=n;for(var c=0;c<e.length;c++)if(o.context===e[c]){i.lanes|=a,o=i.alternate,o!==null&&(o.lanes|=a),$u(i.return,a,t),l||(u=null);break t}i=o.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(w(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),$u(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function hn(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if(n.flags&524288)i=!0;else if(n.flags&262144)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(w(387));if(u=u.memoizedProps,u!==null){var o=n.type;Qt(n.pendingProps.value,u.value)||(t!==null?t.push(o):t=[o])}}else if(n===Fn.current){if(u=n.alternate,u===null)throw Error(w(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(en):t=[en])}n=n.return}t!==null&&Wu(e,t,a,l),e.flags|=262144}function ui(t){for(t=t.firstContext;t!==null;){if(!Qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ha(t){va=t,ve=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Et(t){return ff(va,t)}function Mn(t,e){return va===null&&ha(t),ff(t,e)}function ff(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ve===null){if(t===null)throw Error(w(308));ve=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ve=ve.next=e;return a}var ag=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},lg=ht.unstable_scheduleCallback,ng=ht.unstable_NormalPriority,ft={$$typeof:me,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Io(){return{controller:new ag,data:new Map,refCount:0}}function gn(t){t.refCount--,t.refCount===0&&lg(ng,function(){t.controller.abort()})}var Ul=null,Fu=0,Pa=0,La=null;function ig(t,e){if(Ul===null){var a=Ul=[];Fu=0,Pa=xc(),La={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Fu++,e.then(fr,fr),e}function fr(){if(--Fu===0&&Ul!==null){La!==null&&(La.status="fulfilled");var t=Ul;Ul=null,Pa=0,La=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function ug(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var dr=_.S;_.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ig(t,e),dr!==null&&dr(t,e)};var ra=re(null);function Po(){var t=ra.current;return t!==null?t:J.pooledCache}function Gn(t,e){e===null?I(ra,ra.current):I(ra,e.pool)}function df(){var t=Po();return t===null?null:{parent:ft._currentValue,pool:t}}var pn=Error(w(460)),hf=Error(w(474)),ki=Error(w(542)),Iu={then:function(){}};function hr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function On(){}function gf(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(On,On),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pr(t),t;default:if(typeof e.status=="string")e.then(On,On);else{if(t=J,t!==null&&100<t.shellSuspendCounter)throw Error(w(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pr(t),t}throw Nl=e,pn}}var Nl=null;function gr(){if(Nl===null)throw Error(w(459));var t=Nl;return Nl=null,t}function pr(t){if(t===pn||t===ki)throw Error(w(483))}var je=!1;function tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ge(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Qe(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,Q&2){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=li(t),cf(t,null,a),e}return Hi(t,l,e,a),li(t)}function Cl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Cs(t,a)}}function cu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var to=!1;function Hl(){if(to){var t=La;if(t!==null)throw t}}function kl(t,e,a,l){to=!1;var n=t.updateQueue;je=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var c=o,f=c.next;c.next=null,u===null?i=f:u.next=f,u=c;var y=t.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==u&&(o===null?y.firstBaseUpdate=f:o.next=f,y.lastBaseUpdate=c))}if(i!==null){var m=n.baseState;u=0,y=f=c=null,o=i;do{var s=o.lane&-536870913,p=s!==o.lane;if(p?(B&s)===s:(l&s)===s){s!==0&&s===Pa&&(to=!0),y!==null&&(y=y.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var E=t,z=o;s=e;var M=a;switch(z.tag){case 1:if(E=z.payload,typeof E=="function"){m=E.call(M,m,s);break t}m=E;break t;case 3:E.flags=E.flags&-65537|128;case 0:if(E=z.payload,s=typeof E=="function"?E.call(M,m,s):E,s==null)break t;m=$({},m,s);break t;case 2:je=!0}}s=o.callback,s!==null&&(t.flags|=64,p&&(t.flags|=8192),p=n.callbacks,p===null?n.callbacks=[s]:p.push(s))}else p={lane:s,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(f=y=p,c=m):y=y.next=p,u|=s;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;p=o,o=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);y===null&&(c=m),n.baseState=c,n.firstBaseUpdate=f,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),Fe|=u,t.lanes=u,t.memoizedState=m}}function pf(t,e){if(typeof t!="function")throw Error(w(191,t));t.call(e)}function mf(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pf(a[t],e)}var tl=re(null),oi=re(0);function mr(t,e){t=Ae,I(oi,t),I(tl,e),Ae=t|e.baseLanes}function eo(){I(oi,Ae),I(tl,tl.current)}function ec(){Ae=oi.current,yt(tl),yt(oi)}var $e=0,C=null,L=null,rt=null,ci=!1,Va=!1,ga=!1,ri=0,Wl=0,Ka=null,og=0;function ot(){throw Error(w(321))}function ac(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Qt(t[a],e[a]))return!1;return!0}function lc(t,e,a,l,n,i){return $e=i,C=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_.H=t===null||t.memoizedState===null?Kf:Jf,ga=!1,i=a(l,n),ga=!1,Va&&(i=bf(e,a,l,n)),yf(t),i}function yf(t){_.H=si;var e=L!==null&&L.next!==null;if($e=0,rt=L=C=null,ci=!1,Wl=0,Ka=null,e)throw Error(w(300));t===null||mt||(t=t.dependencies,t!==null&&ui(t)&&(mt=!0))}function bf(t,e,a,l){C=t;var n=0;do{if(Va&&(Ka=null),Wl=0,Va=!1,25<=n)throw Error(w(301));if(n+=1,rt=L=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=gg,i=e(a,l)}while(Va);return i}function cg(){var t=_.H,e=t.useState()[0];return e=typeof e.then=="function"?mn(e):e,t=t.useState()[0],(L!==null?L.memoizedState:null)!==t&&(C.flags|=1024),e}function nc(){var t=ri!==0;return ri=0,t}function ic(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function uc(t){if(ci){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ci=!1}$e=0,rt=L=C=null,Va=!1,Wl=ri=0,Ka=null}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?C.memoizedState=rt=t:rt=rt.next=t,rt}function st(){if(L===null){var t=C.alternate;t=t!==null?t.memoizedState:null}else t=L.next;var e=rt===null?C.memoizedState:rt.next;if(e!==null)rt=e,L=t;else{if(t===null)throw C.alternate===null?Error(w(467)):Error(w(310));L=t,t={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},rt===null?C.memoizedState=rt=t:rt=rt.next=t}return rt}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mn(t){var e=Wl;return Wl+=1,Ka===null&&(Ka=[]),t=gf(Ka,t,e),e=C,(rt===null?e.memoizedState:rt.next)===null&&(e=e.alternate,_.H=e===null||e.memoizedState===null?Kf:Jf),t}function Yi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return mn(t);if(t.$$typeof===me)return Et(t)}throw Error(w(438,String(t)))}function cc(t){var e=null,a=C.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=C.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=oc(),C.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=V0;return e.index++,a}function ze(t,e){return typeof e=="function"?e(t):e}function Qn(t){var e=st();return rc(e,L,t)}function rc(t,e,a){var l=t.queue;if(l===null)throw Error(w(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var o=u=null,c=null,f=e,y=!1;do{var m=f.lane&-536870913;if(m!==f.lane?(B&m)===m:($e&m)===m){var s=f.revertLane;if(s===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),m===Pa&&(y=!0);else if(($e&s)===s){f=f.next,s===Pa&&(y=!0);continue}else m={lane:0,revertLane:f.revertLane,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},c===null?(o=c=m,u=i):c=c.next=m,C.lanes|=s,Fe|=s;m=f.action,ga&&a(i,m),i=f.hasEagerState?f.eagerState:a(i,m)}else s={lane:m,revertLane:f.revertLane,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},c===null?(o=c=s,u=i):c=c.next=s,C.lanes|=m,Fe|=m;f=f.next}while(f!==null&&f!==e);if(c===null?u=i:c.next=o,!Qt(i,t.memoizedState)&&(mt=!0,y&&(a=La,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=c,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ru(t){var e=st(),a=e.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);Qt(i,e.memoizedState)||(mt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function vf(t,e,a){var l=C,n=st(),i=q;if(i){if(a===void 0)throw Error(w(407));a=a()}else a=e();var u=!Qt((L||n).memoizedState,a);u&&(n.memoizedState=a,mt=!0),n=n.queue;var o=Sf.bind(null,l,n,t);if(yn(2048,8,o,[t]),n.getSnapshot!==e||u||rt!==null&&rt.memoizedState.tag&1){if(l.flags|=2048,el(9,Bi(),xf.bind(null,l,n,a,e),null),J===null)throw Error(w(349));i||$e&124||wf(l,e,a)}return a}function wf(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=C.updateQueue,e===null?(e=oc(),C.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function xf(t,e,a,l){e.value=a,e.getSnapshot=l,Ef(e)&&zf(t)}function Sf(t,e,a){return a(function(){Ef(e)&&zf(t)})}function Ef(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Qt(t,a)}catch{return!0}}function zf(t){var e=sl(t,2);e!==null&&Gt(e,t,2)}function ao(t){var e=Dt();if(typeof t=="function"){var a=t;if(t=a(),ga){ke(!0);try{a()}finally{ke(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:t},e}function Tf(t,e,a,l){return t.baseState=a,rc(t,L,typeof l=="function"?l:ze)}function rg(t,e,a,l,n){if(qi(t))throw Error(w(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};_.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Af(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Af(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=_.T,u={};_.T=u;try{var o=a(n,l),c=_.S;c!==null&&c(u,o),yr(t,e,o)}catch(f){lo(t,e,f)}finally{_.T=i}}else try{i=a(n,l),yr(t,e,i)}catch(f){lo(t,e,f)}}function yr(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){br(t,e,l)},function(l){return lo(t,e,l)}):br(t,e,a)}function br(t,e,a){e.status="fulfilled",e.value=a,_f(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Af(t,a)))}function lo(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,_f(e),e=e.next;while(e!==l)}t.action=null}function _f(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Mf(t,e){return e}function vr(t,e){if(q){var a=J.formState;if(a!==null){t:{var l=C;if(q){if(lt){e:{for(var n=lt,i=ne;n.nodeType!==8;){if(!i){n=null;break e}if(n=ee(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){lt=ee(n.nextSibling),l=n.data==="F!";break t}}da(l)}l=!1}l&&(e=a[0])}}return a=Dt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mf,lastRenderedState:e},a.queue=l,a=Zf.bind(null,C,l),l.dispatch=a,l=ao(!1),i=hc.bind(null,C,!1,l.queue),l=Dt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=rg.bind(null,C,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function wr(t){var e=st();return Of(e,L,t)}function Of(t,e,a){if(e=rc(t,e,Mf)[0],t=Qn(ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=mn(e)}catch(u){throw u===pn?ki:u}else l=e;e=st();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(C.flags|=2048,el(9,Bi(),sg.bind(null,n,a),null)),[l,i,t]}function sg(t,e){t.action=e}function xr(t){var e=st(),a=L;if(a!==null)return Of(e,a,t);st(),e=e.memoizedState,a=st();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function el(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=C.updateQueue,e===null&&(e=oc(),C.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Bi(){return{destroy:void 0,resource:void 0}}function Df(){return st().memoizedState}function Zn(t,e,a,l){var n=Dt();l=l===void 0?null:l,C.flags|=t,n.memoizedState=el(1|e,Bi(),a,l)}function yn(t,e,a,l){var n=st();l=l===void 0?null:l;var i=n.memoizedState.inst;L!==null&&l!==null&&ac(l,L.memoizedState.deps)?n.memoizedState=el(e,i,a,l):(C.flags|=t,n.memoizedState=el(1|e,i,a,l))}function Sr(t,e){Zn(8390656,8,t,e)}function Rf(t,e){yn(2048,8,t,e)}function jf(t,e){return yn(4,2,t,e)}function Uf(t,e){return yn(4,4,t,e)}function Nf(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cf(t,e,a){a=a!=null?a.concat([t]):null,yn(4,4,Nf.bind(null,e,t),a)}function sc(){}function Hf(t,e){var a=st();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&ac(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function kf(t,e){var a=st();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&ac(e,l[1]))return l[0];if(l=t(),ga){ke(!0);try{t()}finally{ke(!1)}}return a.memoizedState=[l,e],l}function fc(t,e,a){return a===void 0||$e&1073741824?t.memoizedState=e:(t.memoizedState=a,t=_d(),C.lanes|=t,Fe|=t,a)}function Yf(t,e,a,l){return Qt(a,e)?a:tl.current!==null?(t=fc(t,a,l),Qt(t,e)||(mt=!0),t):$e&42?(t=_d(),C.lanes|=t,Fe|=t,e):(mt=!0,t.memoizedState=a)}function Bf(t,e,a,l,n){var i=X.p;X.p=i!==0&&8>i?i:8;var u=_.T,o={};_.T=o,hc(t,!1,e,a);try{var c=n(),f=_.S;if(f!==null&&f(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var y=ug(c,l);Yl(t,e,y,Xt(t))}else Yl(t,e,l,Xt(t))}catch(m){Yl(t,e,{then:function(){},status:"rejected",reason:m},Xt())}finally{X.p=i,_.T=u}}function fg(){}function no(t,e,a,l){if(t.tag!==5)throw Error(w(476));var n=qf(t).queue;Bf(t,n,e,ia,a===null?fg:function(){return Xf(t),a(l)})}function qf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ia,baseState:ia,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:ia},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ze,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Xf(t){var e=qf(t).next.queue;Yl(t,e,{},Xt())}function dc(){return Et(en)}function Gf(){return st().memoizedState}function Qf(){return st().memoizedState}function dg(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Xt();t=Ge(a);var l=Qe(e,t,a);l!==null&&(Gt(l,e,a),Cl(l,e,a)),e={cache:Io()},t.payload=e;return}e=e.return}}function hg(t,e,a){var l=Xt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},qi(t)?Lf(e,a):(a=Jo(t,e,a,l),a!==null&&(Gt(a,t,l),Vf(a,e,l)))}function Zf(t,e,a){var l=Xt();Yl(t,e,a,l)}function Yl(t,e,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(qi(t))Lf(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var u=e.lastRenderedState,o=i(u,a);if(n.hasEagerState=!0,n.eagerState=o,Qt(o,u))return Hi(t,e,n,0),J===null&&Ci(),!1}catch{}finally{}if(a=Jo(t,e,n,l),a!==null)return Gt(a,t,l),Vf(a,e,l),!0}return!1}function hc(t,e,a,l){if(l={lane:2,revertLane:xc(),action:l,hasEagerState:!1,eagerState:null,next:null},qi(t)){if(e)throw Error(w(479))}else e=Jo(t,a,l,2),e!==null&&Gt(e,t,2)}function qi(t){var e=t.alternate;return t===C||e!==null&&e===C}function Lf(t,e){Va=ci=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Vf(t,e,a){if(a&4194048){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Cs(t,a)}}var si={readContext:Et,use:Yi,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot},Kf={readContext:Et,use:Yi,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:Sr,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Zn(4194308,4,Nf.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Zn(4194308,4,t,e)},useInsertionEffect:function(t,e){Zn(4,2,t,e)},useMemo:function(t,e){var a=Dt();e=e===void 0?null:e;var l=t();if(ga){ke(!0);try{t()}finally{ke(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Dt();if(a!==void 0){var n=a(e);if(ga){ke(!0);try{a(e)}finally{ke(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=hg.bind(null,C,t),[l.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:function(t){t=ao(t);var e=t.queue,a=Zf.bind(null,C,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:sc,useDeferredValue:function(t,e){var a=Dt();return fc(a,t,e)},useTransition:function(){var t=ao(!1);return t=Bf.bind(null,C,t.queue,!0,!1),Dt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=C,n=Dt();if(q){if(a===void 0)throw Error(w(407));a=a()}else{if(a=e(),J===null)throw Error(w(349));B&124||wf(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,Sr(Sf.bind(null,l,i,t),[t]),l.flags|=2048,el(9,Bi(),xf.bind(null,l,i,a,e),null),a},useId:function(){var t=Dt(),e=J.identifierPrefix;if(q){var a=be,l=ye;a=(l&~(1<<32-qt(l)-1)).toString(32)+a,e="«"+e+"R"+a,a=ri++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=og++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:dc,useFormState:vr,useActionState:vr,useOptimistic:function(t){var e=Dt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=hc.bind(null,C,!0,a),a.dispatch=e,[t,e]},useMemoCache:cc,useCacheRefresh:function(){return Dt().memoizedState=dg.bind(null,C)}},Jf={readContext:Et,use:Yi,useCallback:Hf,useContext:Et,useEffect:Rf,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:Uf,useMemo:kf,useReducer:Qn,useRef:Df,useState:function(){return Qn(ze)},useDebugValue:sc,useDeferredValue:function(t,e){var a=st();return Yf(a,L.memoizedState,t,e)},useTransition:function(){var t=Qn(ze)[0],e=st().memoizedState;return[typeof t=="boolean"?t:mn(t),e]},useSyncExternalStore:vf,useId:Gf,useHostTransitionStatus:dc,useFormState:wr,useActionState:wr,useOptimistic:function(t,e){var a=st();return Tf(a,L,t,e)},useMemoCache:cc,useCacheRefresh:Qf},gg={readContext:Et,use:Yi,useCallback:Hf,useContext:Et,useEffect:Rf,useImperativeHandle:Cf,useInsertionEffect:jf,useLayoutEffect:Uf,useMemo:kf,useReducer:ru,useRef:Df,useState:function(){return ru(ze)},useDebugValue:sc,useDeferredValue:function(t,e){var a=st();return L===null?fc(a,t,e):Yf(a,L.memoizedState,t,e)},useTransition:function(){var t=ru(ze)[0],e=st().memoizedState;return[typeof t=="boolean"?t:mn(t),e]},useSyncExternalStore:vf,useId:Gf,useHostTransitionStatus:dc,useFormState:xr,useActionState:xr,useOptimistic:function(t,e){var a=st();return L!==null?Tf(a,L,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:cc,useCacheRefresh:Qf},Ja=null,Fl=0;function Dn(t){var e=Fl;return Fl+=1,Ja===null&&(Ja=[]),gf(Ja,t,e)}function xl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Rn(t,e){throw e.$$typeof===Z0?Error(w(525)):(t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Er(t){var e=t._init;return e(t._payload)}function $f(t){function e(d,r){if(t){var h=d.deletions;h===null?(d.deletions=[r],d.flags|=16):h.push(r)}}function a(d,r){if(!t)return null;for(;r!==null;)e(d,r),r=r.sibling;return null}function l(d){for(var r=new Map;d!==null;)d.key!==null?r.set(d.key,d):r.set(d.index,d),d=d.sibling;return r}function n(d,r){return d=xe(d,r),d.index=0,d.sibling=null,d}function i(d,r,h){return d.index=h,t?(h=d.alternate,h!==null?(h=h.index,h<r?(d.flags|=67108866,r):h):(d.flags|=67108866,r)):(d.flags|=1048576,r)}function u(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function o(d,r,h,g){return r===null||r.tag!==6?(r=uu(h,d.mode,g),r.return=d,r):(r=n(r,h),r.return=d,r)}function c(d,r,h,g){var b=h.type;return b===Da?y(d,r,h.props.children,g,h.key):r!==null&&(r.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Re&&Er(b)===r.type)?(r=n(r,h.props),xl(r,h),r.return=d,r):(r=Xn(h.type,h.key,h.props,null,d.mode,g),xl(r,h),r.return=d,r)}function f(d,r,h,g){return r===null||r.tag!==4||r.stateNode.containerInfo!==h.containerInfo||r.stateNode.implementation!==h.implementation?(r=ou(h,d.mode,g),r.return=d,r):(r=n(r,h.children||[]),r.return=d,r)}function y(d,r,h,g,b){return r===null||r.tag!==7?(r=ua(h,d.mode,g,b),r.return=d,r):(r=n(r,h),r.return=d,r)}function m(d,r,h){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=uu(""+r,d.mode,h),r.return=d,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case En:return h=Xn(r.type,r.key,r.props,null,d.mode,h),xl(h,r),h.return=d,h;case Tl:return r=ou(r,d.mode,h),r.return=d,r;case Re:var g=r._init;return r=g(r._payload),m(d,r,h)}if(Al(r)||yl(r))return r=ua(r,d.mode,h,null),r.return=d,r;if(typeof r.then=="function")return m(d,Dn(r),h);if(r.$$typeof===me)return m(d,Mn(d,r),h);Rn(d,r)}return null}function s(d,r,h,g){var b=r!==null?r.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return b!==null?null:o(d,r,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case En:return h.key===b?c(d,r,h,g):null;case Tl:return h.key===b?f(d,r,h,g):null;case Re:return b=h._init,h=b(h._payload),s(d,r,h,g)}if(Al(h)||yl(h))return b!==null?null:y(d,r,h,g,null);if(typeof h.then=="function")return s(d,r,Dn(h),g);if(h.$$typeof===me)return s(d,r,Mn(d,h),g);Rn(d,h)}return null}function p(d,r,h,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return d=d.get(h)||null,o(r,d,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case En:return d=d.get(g.key===null?h:g.key)||null,c(r,d,g,b);case Tl:return d=d.get(g.key===null?h:g.key)||null,f(r,d,g,b);case Re:var S=g._init;return g=S(g._payload),p(d,r,h,g,b)}if(Al(g)||yl(g))return d=d.get(h)||null,y(r,d,g,b,null);if(typeof g.then=="function")return p(d,r,h,Dn(g),b);if(g.$$typeof===me)return p(d,r,h,Mn(r,g),b);Rn(r,g)}return null}function E(d,r,h,g){for(var b=null,S=null,x=r,T=r=0,Y=null;x!==null&&T<h.length;T++){x.index>T?(Y=x,x=null):Y=x.sibling;var O=s(d,x,h[T],g);if(O===null){x===null&&(x=Y);break}t&&x&&O.alternate===null&&e(d,x),r=i(O,r,T),S===null?b=O:S.sibling=O,S=O,x=Y}if(T===h.length)return a(d,x),q&&la(d,T),b;if(x===null){for(;T<h.length;T++)x=m(d,h[T],g),x!==null&&(r=i(x,r,T),S===null?b=x:S.sibling=x,S=x);return q&&la(d,T),b}for(x=l(x);T<h.length;T++)Y=p(x,d,T,h[T],g),Y!==null&&(t&&Y.alternate!==null&&x.delete(Y.key===null?T:Y.key),r=i(Y,r,T),S===null?b=Y:S.sibling=Y,S=Y);return t&&x.forEach(function(P){return e(d,P)}),q&&la(d,T),b}function z(d,r,h,g){if(h==null)throw Error(w(151));for(var b=null,S=null,x=r,T=r=0,Y=null,O=h.next();x!==null&&!O.done;T++,O=h.next()){x.index>T?(Y=x,x=null):Y=x.sibling;var P=s(d,x,O.value,g);if(P===null){x===null&&(x=Y);break}t&&x&&P.alternate===null&&e(d,x),r=i(P,r,T),S===null?b=P:S.sibling=P,S=P,x=Y}if(O.done)return a(d,x),q&&la(d,T),b;if(x===null){for(;!O.done;T++,O=h.next())O=m(d,O.value,g),O!==null&&(r=i(O,r,T),S===null?b=O:S.sibling=O,S=O);return q&&la(d,T),b}for(x=l(x);!O.done;T++,O=h.next())O=p(x,d,T,O.value,g),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?T:O.key),r=i(O,r,T),S===null?b=O:S.sibling=O,S=O);return t&&x.forEach(function(zt){return e(d,zt)}),q&&la(d,T),b}function M(d,r,h,g){if(typeof h=="object"&&h!==null&&h.type===Da&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case En:t:{for(var b=h.key;r!==null;){if(r.key===b){if(b=h.type,b===Da){if(r.tag===7){a(d,r.sibling),g=n(r,h.props.children),g.return=d,d=g;break t}}else if(r.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Re&&Er(b)===r.type){a(d,r.sibling),g=n(r,h.props),xl(g,h),g.return=d,d=g;break t}a(d,r);break}else e(d,r);r=r.sibling}h.type===Da?(g=ua(h.props.children,d.mode,g,h.key),g.return=d,d=g):(g=Xn(h.type,h.key,h.props,null,d.mode,g),xl(g,h),g.return=d,d=g)}return u(d);case Tl:t:{for(b=h.key;r!==null;){if(r.key===b)if(r.tag===4&&r.stateNode.containerInfo===h.containerInfo&&r.stateNode.implementation===h.implementation){a(d,r.sibling),g=n(r,h.children||[]),g.return=d,d=g;break t}else{a(d,r);break}else e(d,r);r=r.sibling}g=ou(h,d.mode,g),g.return=d,d=g}return u(d);case Re:return b=h._init,h=b(h._payload),M(d,r,h,g)}if(Al(h))return E(d,r,h,g);if(yl(h)){if(b=yl(h),typeof b!="function")throw Error(w(150));return h=b.call(h),z(d,r,h,g)}if(typeof h.then=="function")return M(d,r,Dn(h),g);if(h.$$typeof===me)return M(d,r,Mn(d,h),g);Rn(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,r!==null&&r.tag===6?(a(d,r.sibling),g=n(r,h),g.return=d,d=g):(a(d,r),g=uu(h,d.mode,g),g.return=d,d=g),u(d)):a(d,r)}return function(d,r,h,g){try{Fl=0;var b=M(d,r,h,g);return Ja=null,b}catch(x){if(x===pn||x===ki)throw x;var S=Yt(29,x,null,d.mode);return S.lanes=g,S.return=d,S}finally{}}}var al=$f(!0),Wf=$f(!1),Ft=re(null),ce=null;function Ne(t){var e=t.alternate;I(dt,dt.current&1),I(Ft,t),ce===null&&(e===null||tl.current!==null||e.memoizedState!==null)&&(ce=t)}function Ff(t){if(t.tag===22){if(I(dt,dt.current),I(Ft,t),ce===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(ce=t)}}else Ce()}function Ce(){I(dt,dt.current),I(Ft,Ft.current)}function we(t){yt(Ft),ce===t&&(ce=null),yt(dt)}var dt=re(0);function fi(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||So(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function su(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:$({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var io={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Xt(),n=Ge(l);n.payload=e,a!=null&&(n.callback=a),e=Qe(t,n,l),e!==null&&(Gt(e,t,l),Cl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Xt(),n=Ge(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Qe(t,n,l),e!==null&&(Gt(e,t,l),Cl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Xt(),l=Ge(a);l.tag=2,e!=null&&(l.callback=e),e=Qe(t,l,a),e!==null&&(Gt(e,t,a),Cl(e,t,a))}};function zr(t,e,a,l,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):e.prototype&&e.prototype.isPureReactComponent?!Jl(a,l)||!Jl(n,i):!0}function Tr(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&io.enqueueReplaceState(e,e.state,null)}function pa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=$({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}var di=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function If(t){di(t)}function Pf(t){console.error(t)}function td(t){di(t)}function hi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Ar(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uo(t,e,a){return a=Ge(a),a.tag=3,a.payload={element:null},a.callback=function(){hi(t,e)},a}function ed(t){return t=Ge(t),t.tag=3,t}function ad(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Ar(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Ar(e,a,l),typeof n!="function"&&(Ze===null?Ze=new Set([this]):Ze.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function pg(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&hn(e,a,n,!0),a=Ft.current,a!==null){switch(a.tag){case 13:return ce===null?po():a.alternate===null&&nt===0&&(nt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Iu?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),xu(t,l,n)),!1;case 22:return a.flags|=65536,l===Iu?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),xu(t,l,n)),!1}throw Error(w(435,a.tag))}return xu(t,l,n),po(),!1}if(q)return e=Ft.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Ku&&(t=Error(w(422),{cause:l}),$l($t(t,a)))):(l!==Ku&&(e=Error(w(423),{cause:l}),$l($t(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=$t(l,a),n=uo(t.stateNode,l,n),cu(t,n),nt!==4&&(nt=2)),!1;var i=Error(w(520),{cause:l});if(i=$t(i,a),Xl===null?Xl=[i]:Xl.push(i),nt!==4&&(nt=2),e===null)return!0;l=$t(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=uo(a.stateNode,l,t),cu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ze===null||!Ze.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=ed(n),ad(n,t,a,l),cu(a,n),!1}a=a.return}while(a!==null);return!1}var ld=Error(w(461)),mt=!1;function bt(t,e,a,l){e.child=t===null?Wf(e,null,a,l):al(e,t.child,a,l)}function _r(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return ha(e),l=lc(t,e,a,u,i,n),o=nc(),t!==null&&!mt?(ic(t,e,n),Te(t,e,n)):(q&&o&&Wo(e),e.flags|=1,bt(t,e,l,n),e.child)}function Mr(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!$o(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,nd(t,e,i,l,n)):(t=Xn(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!gc(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Jl,a(u,l)&&t.ref===e.ref)return Te(t,e,n)}return e.flags|=1,t=xe(i,l),t.ref=e.ref,t.return=e,e.child=t}function nd(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(Jl(i,l)&&t.ref===e.ref)if(mt=!1,e.pendingProps=l=i,gc(t,n))t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Te(t,e,n)}return oo(t,e,a,l,n)}function id(t,e,a){var l=e.pendingProps,n=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if(e.flags&128){if(l=i!==null?i.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;e.childLanes=i&~l}else e.childLanes=0,e.child=null;return Or(t,e,l,a)}if(a&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gn(e,i!==null?i.cachePool:null),i!==null?mr(e,i):eo(),Ff(e);else return e.lanes=e.childLanes=536870912,Or(t,e,i!==null?i.baseLanes|a:a,a)}else i!==null?(Gn(e,i.cachePool),mr(e,i),Ce(),e.memoizedState=null):(t!==null&&Gn(e,null),eo(),Ce());return bt(t,e,n,a),e.child}function Or(t,e,a,l){var n=Po();return n=n===null?null:{parent:ft._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&Gn(e,null),eo(),Ff(e),t!==null&&hn(t,e,l,!0),null}function Ln(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(w(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function oo(t,e,a,l,n){return ha(e),a=lc(t,e,a,l,void 0,n),l=nc(),t!==null&&!mt?(ic(t,e,n),Te(t,e,n)):(q&&l&&Wo(e),e.flags|=1,bt(t,e,a,n),e.child)}function Dr(t,e,a,l,n,i){return ha(e),e.updateQueue=null,a=bf(e,l,a,n),yf(t),l=nc(),t!==null&&!mt?(ic(t,e,i),Te(t,e,i)):(q&&l&&Wo(e),e.flags|=1,bt(t,e,a,i),e.child)}function Rr(t,e,a,l,n){if(ha(e),e.stateNode===null){var i=Ya,u=a.contextType;typeof u=="object"&&u!==null&&(i=Et(u)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=io,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},tc(e),u=a.contextType,i.context=typeof u=="object"&&u!==null?Et(u):Ya,i.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(su(e,a,u,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&io.enqueueReplaceState(i,i.state,null),kl(e,l,i,n),Hl(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var o=e.memoizedProps,c=pa(a,o);i.props=c;var f=i.context,y=a.contextType;u=Ya,typeof y=="object"&&y!==null&&(u=Et(y));var m=a.getDerivedStateFromProps;y=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||f!==u)&&Tr(e,i,l,u),je=!1;var s=e.memoizedState;i.state=s,kl(e,l,i,n),Hl(),f=e.memoizedState,o||s!==f||je?(typeof m=="function"&&(su(e,a,m,l),f=e.memoizedState),(c=je||zr(e,a,c,l,s,f,u))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=f),i.props=l,i.state=f,i.context=u,l=c):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,Pu(t,e),u=e.memoizedProps,y=pa(a,u),i.props=y,m=e.pendingProps,s=i.context,f=a.contextType,c=Ya,typeof f=="object"&&f!==null&&(c=Et(f)),o=a.getDerivedStateFromProps,(f=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==m||s!==c)&&Tr(e,i,l,c),je=!1,s=e.memoizedState,i.state=s,kl(e,l,i,n),Hl();var p=e.memoizedState;u!==m||s!==p||je||t!==null&&t.dependencies!==null&&ui(t.dependencies)?(typeof o=="function"&&(su(e,a,o,l),p=e.memoizedState),(y=je||zr(e,a,y,l,s,p,c)||t!==null&&t.dependencies!==null&&ui(t.dependencies))?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,p,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,p,c)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&s===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&s===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=p),i.props=l,i.state=p,i.context=c,l=y):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&s===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&s===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Ln(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=al(e,t.child,null,n),e.child=al(e,null,a,n)):bt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=Te(t,e,n),t}function jr(t,e,a,l){return dn(),e.flags|=256,bt(t,e,a,l),e.child}var fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function du(t){return{baseLanes:t,cachePool:df()}}function hu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Wt),t}function ud(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(dt.current&2)!==0),u&&(n=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(q){if(n?Ne(e):Ce(),q){var o=lt,c;if(c=o){t:{for(c=o,o=ne;c.nodeType!==8;){if(!o){o=null;break t}if(c=ee(c.nextSibling),c===null){o=null;break t}}o=c}o!==null?(e.memoizedState={dehydrated:o,treeContext:oa!==null?{id:ye,overflow:be}:null,retryLane:536870912,hydrationErrors:null},c=Yt(18,null,null,0),c.stateNode=o,c.return=e,e.child=c,_t=e,lt=null,c=!0):c=!1}c||da(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return So(o)?e.lanes=32:e.lanes=536870912,null;we(e)}return o=l.children,l=l.fallback,n?(Ce(),n=e.mode,o=gi({mode:"hidden",children:o},n),l=ua(l,n,a,null),o.return=e,l.return=e,o.sibling=l,e.child=o,n=e.child,n.memoizedState=du(a),n.childLanes=hu(t,u,a),e.memoizedState=fu,l):(Ne(e),co(e,o))}if(c=t.memoizedState,c!==null&&(o=c.dehydrated,o!==null)){if(i)e.flags&256?(Ne(e),e.flags&=-257,e=gu(t,e,a)):e.memoizedState!==null?(Ce(),e.child=t.child,e.flags|=128,e=null):(Ce(),n=l.fallback,o=e.mode,l=gi({mode:"visible",children:l.children},o),n=ua(n,o,a,null),n.flags|=2,l.return=e,n.return=e,l.sibling=n,e.child=l,al(e,t.child,null,a),l=e.child,l.memoizedState=du(a),l.childLanes=hu(t,u,a),e.memoizedState=fu,e=n);else if(Ne(e),So(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var f=u.dgst;u=f,l=Error(w(419)),l.stack="",l.digest=u,$l({value:l,source:null,stack:null}),e=gu(t,e,a)}else if(mt||hn(t,e,a,!1),u=(a&t.childLanes)!==0,mt||u){if(u=J,u!==null&&(l=a&-a,l=l&42?1:Yo(l),l=l&(u.suspendedLanes|a)?0:l,l!==0&&l!==c.retryLane))throw c.retryLane=l,sl(t,l),Gt(u,t,l),ld;o.data==="$?"||po(),e=gu(t,e,a)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,lt=ee(o.nextSibling),_t=e,q=!0,ca=null,ne=!1,t!==null&&(Vt[Kt++]=ye,Vt[Kt++]=be,Vt[Kt++]=oa,ye=t.id,be=t.overflow,oa=e),e=co(e,l.children),e.flags|=4096);return e}return n?(Ce(),n=l.fallback,o=e.mode,c=t.child,f=c.sibling,l=xe(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,f!==null?n=xe(f,n):(n=ua(n,o,a,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,l=n,n=e.child,o=t.child.memoizedState,o===null?o=du(a):(c=o.cachePool,c!==null?(f=ft._currentValue,c=c.parent!==f?{parent:f,pool:f}:c):c=df(),o={baseLanes:o.baseLanes|a,cachePool:c}),n.memoizedState=o,n.childLanes=hu(t,u,a),e.memoizedState=fu,l):(Ne(e),a=t.child,t=a.sibling,a=xe(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function co(t,e){return e=gi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function gi(t,e){return t=Yt(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function gu(t,e,a){return al(e,t.child,null,a),t=co(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ur(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),$u(t.return,e,a)}function pu(t,e,a,l,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function od(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;if(bt(t,e,l.children,a),l=dt.current,l&2)l=l&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ur(t,a,e);else if(t.tag===19)Ur(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(I(dt,l),n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&fi(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),pu(e,!1,n,a,i);break;case"backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&fi(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}pu(e,!0,a,null,i);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Te(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Fe|=e.lanes,!(a&e.childLanes))if(t!==null){if(hn(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,a=xe(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=xe(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function gc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&ui(t)))}function mg(t,e,a){switch(e.tag){case 3:In(e,e.stateNode.containerInfo),Ue(e,ft,t.memoizedState.cache),dn();break;case 27:case 5:ku(e);break;case 4:In(e,e.stateNode.containerInfo);break;case 10:Ue(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Ne(e),e.flags|=128,null):a&e.child.childLanes?ud(t,e,a):(Ne(e),t=Te(t,e,a),t!==null?t.sibling:null);Ne(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(hn(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return od(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),I(dt,dt.current),l)break;return null;case 22:case 23:return e.lanes=0,id(t,e,a);case 24:Ue(e,ft,t.memoizedState.cache)}return Te(t,e,a)}function cd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)mt=!0;else{if(!gc(t,a)&&!(e.flags&128))return mt=!1,mg(t,e,a);mt=!!(t.flags&131072)}else mt=!1,q&&e.flags&1048576&&sf(e,ii,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,n=l._init;if(l=n(l._payload),e.type=l,typeof l=="function")$o(l)?(t=pa(l,t),e.tag=1,e=Rr(null,e,l,t,a)):(e.tag=0,e=oo(null,e,l,t,a));else{if(l!=null){if(n=l.$$typeof,n===Co){e.tag=11,e=_r(null,e,l,t,a);break t}else if(n===Ho){e.tag=14,e=Mr(null,e,l,t,a);break t}}throw e=Cu(l)||l,Error(w(306,e,""))}}return e;case 0:return oo(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=pa(l,e.pendingProps),Rr(t,e,l,n,a);case 3:t:{if(In(e,e.stateNode.containerInfo),t===null)throw Error(w(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,Pu(t,e),kl(e,l,null,a);var u=e.memoizedState;if(l=u.cache,Ue(e,ft,l),l!==i.cache&&Wu(e,[ft],a,!0),Hl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=jr(t,e,l,a);break t}else if(l!==n){n=$t(Error(w(424)),e),$l(n),e=jr(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(lt=ee(t.firstChild),_t=e,q=!0,ca=null,ne=!0,a=Wf(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(dn(),l===n){e=Te(t,e,a);break t}bt(t,e,l,a)}e=e.child}return e;case 26:return Ln(t,e),t===null?(a=Wr(e.type,null,e.pendingProps,null))?e.memoizedState=a:q||(a=e.type,t=e.pendingProps,l=xi(Xe.current).createElement(a),l[St]=e,l[Ut]=t,wt(l,a,t),pt(l),e.stateNode=l):e.memoizedState=Wr(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ku(e),t===null&&q&&(l=e.stateNode=Jd(e.type,e.pendingProps,Xe.current),_t=e,ne=!0,n=lt,Pe(e.type)?(Eo=n,lt=ee(l.firstChild)):lt=n),bt(t,e,e.pendingProps.children,a),Ln(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&q&&((n=l=lt)&&(l=Zg(l,e.type,e.pendingProps,ne),l!==null?(e.stateNode=l,_t=e,lt=ee(l.firstChild),ne=!1,n=!0):n=!1),n||da(e)),ku(e),n=e.type,i=e.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,wo(n,i)?l=null:u!==null&&wo(n,u)&&(e.flags|=32),e.memoizedState!==null&&(n=lc(t,e,cg,null,null,a),en._currentValue=n),Ln(t,e),bt(t,e,l,a),e.child;case 6:return t===null&&q&&((t=a=lt)&&(a=Lg(a,e.pendingProps,ne),a!==null?(e.stateNode=a,_t=e,lt=null,t=!0):t=!1),t||da(e)),null;case 13:return ud(t,e,a);case 4:return In(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=al(e,null,l,a):bt(t,e,l,a),e.child;case 11:return _r(t,e,e.type,e.pendingProps,a);case 7:return bt(t,e,e.pendingProps,a),e.child;case 8:return bt(t,e,e.pendingProps.children,a),e.child;case 12:return bt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Ue(e,e.type,l.value),bt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,ha(e),n=Et(n),l=l(n),e.flags|=1,bt(t,e,l,a),e.child;case 14:return Mr(t,e,e.type,e.pendingProps,a);case 15:return nd(t,e,e.type,e.pendingProps,a);case 19:return od(t,e,a);case 31:return l=e.pendingProps,a=e.mode,l={mode:l.mode,children:l.children},t===null?(a=gi(l,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=xe(t.child,l),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return id(t,e,a);case 24:return ha(e),l=Et(ft),t===null?(n=Po(),n===null&&(n=J,i=Io(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},tc(e),Ue(e,ft,n)):(t.lanes&a&&(Pu(t,e),kl(e,null,null,a),Hl()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ue(e,ft,l)):(l=i.cache,Ue(e,ft,l),l!==n.cache&&Wu(e,[ft],a,!0))),bt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(w(156,e.tag))}function he(t){t.flags|=4}function Nr(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Fd(e)){if(e=Ft.current,e!==null&&((B&4194048)===B?ce!==null:(B&62914560)!==B&&!(B&536870912)||e!==ce))throw Nl=Iu,hf;t.flags|=8192}}function jn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Us():536870912,t.lanes|=e,ll|=e)}function Sl(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function yg(t,e,a){var l=e.pendingProps;switch(Fo(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return et(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Se(ft),Wa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(wl(e)?he(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sr())),et(e),null;case 26:return a=e.memoizedState,t===null?(he(e),a!==null?(et(e),Nr(e,a)):(et(e),e.flags&=-16777217)):a?a!==t.memoizedState?(he(e),et(e),Nr(e,a)):(et(e),e.flags&=-16777217):(t.memoizedProps!==l&&he(e),et(e),e.flags&=-16777217),null;case 27:Pn(e),a=Xe.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&he(e);else{if(!l){if(e.stateNode===null)throw Error(w(166));return et(e),null}t=ue.current,wl(e)?cr(e):(t=Jd(n,l,a),e.stateNode=t,he(e))}return et(e),null;case 5:if(Pn(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&he(e);else{if(!l){if(e.stateNode===null)throw Error(w(166));return et(e),null}if(t=ue.current,wl(e))cr(e);else{switch(n=xi(Xe.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}t[St]=e,t[Ut]=l;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(wt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&he(e)}}return et(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&he(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(w(166));if(t=Xe.current,wl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=_t,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[St]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ld(t.nodeValue,a)),t||da(e)}else t=xi(t).createTextNode(l),t[St]=e,e.stateNode=t}return et(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=wl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(w(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(w(317));n[St]=e}else dn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),n=!1}else n=sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(we(e),e):(we(e),null)}if(we(e),e.flags&128)return e.lanes=a,e;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),jn(e,e.updateQueue),et(e),null;case 4:return Wa(),t===null&&Sc(e.stateNode.containerInfo),et(e),null;case 10:return Se(e.type),et(e),null;case 19:if(yt(dt),n=e.memoizedState,n===null)return et(e),null;if(l=(e.flags&128)!==0,i=n.rendering,i===null)if(l)Sl(n,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(i=fi(t),i!==null){for(e.flags|=128,Sl(n,!1),t=i.updateQueue,e.updateQueue=t,jn(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)rf(a,t),a=a.sibling;return I(dt,dt.current&1|2),e.child}t=t.sibling}n.tail!==null&&oe()>mi&&(e.flags|=128,l=!0,Sl(n,!1),e.lanes=4194304)}else{if(!l)if(t=fi(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,jn(e,t),Sl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!q)return et(e),null}else 2*oe()-n.renderingStartTime>mi&&a!==536870912&&(e.flags|=128,l=!0,Sl(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=oe(),e.sibling=null,t=dt.current,I(dt,l?t&1|2:t&1),e):(et(e),null);case 22:case 23:return we(e),ec(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?a&536870912&&!(e.flags&128)&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),a=e.updateQueue,a!==null&&jn(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&yt(ra),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Se(ft),et(e),null;case 25:return null;case 30:return null}throw Error(w(156,e.tag))}function bg(t,e){switch(Fo(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Se(ft),Wa(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Pn(e),null;case 13:if(we(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));dn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(dt),null;case 4:return Wa(),null;case 10:return Se(e.type),null;case 22:case 23:return we(e),ec(),t!==null&&yt(ra),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Se(ft),null;case 25:return null;default:return null}}function rd(t,e){switch(Fo(e),e.tag){case 3:Se(ft),Wa();break;case 26:case 27:case 5:Pn(e);break;case 4:Wa();break;case 13:we(e);break;case 19:yt(dt);break;case 10:Se(e.type);break;case 22:case 23:we(e),ec(),t!==null&&yt(ra);break;case 24:Se(ft)}}function bn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,u=a.inst;l=i(),u.destroy=l}a=a.next}while(a!==n)}}catch(o){V(e,e.return,o)}}function We(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,n=e;var c=a,f=o;try{f()}catch(y){V(n,c,y)}}}l=l.next}while(l!==i)}}catch(y){V(e,e.return,y)}}function sd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{mf(e,a)}catch(l){V(t,t.return,l)}}}function fd(t,e,a){a.props=pa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){V(t,e,l)}}function Bl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){V(t,e,n)}}function ie(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){V(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){V(t,e,n)}else a.current=null}function dd(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){V(t,t.return,n)}}function mu(t,e,a){try{var l=t.stateNode;Bg(l,t.type,a,e),l[Ut]=e}catch(n){V(t,t.return,n)}}function hd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pe(t.type)||t.tag===4}function yu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||hd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pe(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ro(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Zi));else if(l!==4&&(l===27&&Pe(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(ro(t,e,a),t=t.sibling;t!==null;)ro(t,e,a),t=t.sibling}function pi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Pe(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(pi(t,e,a),t=t.sibling;t!==null;)pi(t,e,a),t=t.sibling}function gd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);wt(e,l,a),e[St]=t,e[Ut]=a}catch(i){V(t,t.return,i)}}var pe=!1,ct=!1,bu=!1,Cr=typeof WeakSet=="function"?WeakSet:Set,gt=null;function vg(t,e){if(t=t.containerInfo,bo=Ti,t=tf(t),Vo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,o=-1,c=-1,f=0,y=0,m=t,s=null;e:for(;;){for(var p;m!==a||n!==0&&m.nodeType!==3||(o=u+n),m!==i||l!==0&&m.nodeType!==3||(c=u+l),m.nodeType===3&&(u+=m.nodeValue.length),(p=m.firstChild)!==null;)s=m,m=p;for(;;){if(m===t)break e;if(s===a&&++f===n&&(o=u),s===i&&++y===l&&(c=u),(p=m.nextSibling)!==null)break;m=s,s=m.parentNode}m=p}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(vo={focusedElem:t,selectionRange:a},Ti=!1,gt=e;gt!==null;)if(e=gt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,gt=t;else for(;gt!==null;){switch(e=gt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var E=pa(a.type,n,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(E,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(z){V(a,a.return,z)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)xo(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(w(163))}if(t=e.sibling,t!==null){t.return=e.return,gt=t;break}gt=e.return}}function pd(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Oe(t,a),l&4&&bn(5,a);break;case 1:if(Oe(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){V(a,a.return,u)}else{var n=pa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){V(a,a.return,u)}}l&64&&sd(a),l&512&&Bl(a,a.return);break;case 3:if(Oe(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{mf(t,e)}catch(u){V(a,a.return,u)}}break;case 27:e===null&&l&4&&gd(a);case 26:case 5:Oe(t,a),e===null&&l&4&&dd(a),l&512&&Bl(a,a.return);break;case 12:Oe(t,a);break;case 13:Oe(t,a),l&4&&bd(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Mg.bind(null,a),Vg(t,a))));break;case 22:if(l=a.memoizedState!==null||pe,!l){e=e!==null&&e.memoizedState!==null||ct,n=pe;var i=ct;pe=l,(ct=e)&&!i?De(t,a,(a.subtreeFlags&8772)!==0):Oe(t,a),pe=n,ct=i}break;case 30:break;default:Oe(t,a)}}function md(t){var e=t.alternate;e!==null&&(t.alternate=null,md(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&qo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var W=null,Rt=!1;function ge(t,e,a){for(a=a.child;a!==null;)yd(t,e,a),a=a.sibling}function yd(t,e,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(on,a)}catch{}switch(a.tag){case 26:ct||ie(a,e),ge(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ct||ie(a,e);var l=W,n=Rt;Pe(a.type)&&(W=a.stateNode,Rt=!1),ge(t,e,a),Ql(a.stateNode),W=l,Rt=n;break;case 5:ct||ie(a,e);case 6:if(l=W,n=Rt,W=null,ge(t,e,a),W=l,Rt=n,W!==null)if(Rt)try{(W.nodeType===9?W.body:W.nodeName==="HTML"?W.ownerDocument.body:W).removeChild(a.stateNode)}catch(i){V(a,e,i)}else try{W.removeChild(a.stateNode)}catch(i){V(a,e,i)}break;case 18:W!==null&&(Rt?(t=W,Kr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),nn(t)):Kr(W,a.stateNode));break;case 4:l=W,n=Rt,W=a.stateNode.containerInfo,Rt=!0,ge(t,e,a),W=l,Rt=n;break;case 0:case 11:case 14:case 15:ct||We(2,a,e),ct||We(4,a,e),ge(t,e,a);break;case 1:ct||(ie(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&fd(a,e,l)),ge(t,e,a);break;case 21:ge(t,e,a);break;case 22:ct=(l=ct)||a.memoizedState!==null,ge(t,e,a),ct=l;break;default:ge(t,e,a)}}function bd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{nn(t)}catch(a){V(e,e.return,a)}}function wg(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Cr),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Cr),e;default:throw Error(w(435,t.tag))}}function vu(t,e){var a=wg(t);e.forEach(function(l){var n=Og.bind(null,t,l);a.has(l)||(a.add(l),l.then(n,n))})}function Ct(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,u=e,o=u;t:for(;o!==null;){switch(o.tag){case 27:if(Pe(o.type)){W=o.stateNode,Rt=!1;break t}break;case 5:W=o.stateNode,Rt=!1;break t;case 3:case 4:W=o.stateNode.containerInfo,Rt=!0;break t}o=o.return}if(W===null)throw Error(w(160));yd(i,u,n),W=null,Rt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)vd(e,t),e=e.sibling}var te=null;function vd(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ct(e,t),Ht(t),l&4&&(We(3,t,t.return),bn(3,t),We(5,t,t.return));break;case 1:Ct(e,t),Ht(t),l&512&&(ct||a===null||ie(a,a.return)),l&64&&pe&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=te;if(Ct(e,t),Ht(t),l&512&&(ct||a===null||ie(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[sn]||i[St]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),wt(i,l,a),i[St]=t,pt(i),l=i;break t;case"link":var u=Ir("link","href",n).get(l+(a.href||""));if(u){for(var o=0;o<u.length;o++)if(i=u[o],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(o,1);break e}}i=n.createElement(l),wt(i,l,a),n.head.appendChild(i);break;case"meta":if(u=Ir("meta","content",n).get(l+(a.content||""))){for(o=0;o<u.length;o++)if(i=u[o],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(o,1);break e}}i=n.createElement(l),wt(i,l,a),n.head.appendChild(i);break;default:throw Error(w(468,l))}i[St]=t,pt(i),l=i}t.stateNode=l}else Pr(n,t.type,t.stateNode);else t.stateNode=Fr(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?Pr(n,t.type,t.stateNode):Fr(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&mu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ct(e,t),Ht(t),l&512&&(ct||a===null||ie(a,a.return)),a!==null&&l&4&&mu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ct(e,t),Ht(t),l&512&&(ct||a===null||ie(a,a.return)),t.flags&32){n=t.stateNode;try{Ia(n,"")}catch(p){V(t,t.return,p)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,mu(t,n,a!==null?a.memoizedProps:n)),l&1024&&(bu=!0);break;case 6:if(Ct(e,t),Ht(t),l&4){if(t.stateNode===null)throw Error(w(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(p){V(t,t.return,p)}}break;case 3:if(Jn=null,n=te,te=Si(e.containerInfo),Ct(e,t),te=n,Ht(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{nn(e.containerInfo)}catch(p){V(t,t.return,p)}bu&&(bu=!1,wd(t));break;case 4:l=te,te=Si(t.stateNode.containerInfo),Ct(e,t),Ht(t),te=l;break;case 12:Ct(e,t),Ht(t);break;case 13:Ct(e,t),Ht(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vc=oe()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vu(t,l)));break;case 22:n=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,f=pe,y=ct;if(pe=f||n,ct=y||c,Ct(e,t),ct=y,pe=f,Ht(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||c||pe||ct||na(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(i=c.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=c.stateNode;var m=c.memoizedProps.style,s=m!=null&&m.hasOwnProperty("display")?m.display:null;o.style.display=s==null||typeof s=="boolean"?"":(""+s).trim()}}catch(p){V(c,c.return,p)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(p){V(c,c.return,p)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,vu(t,a))));break;case 19:Ct(e,t),Ht(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,vu(t,l)));break;case 30:break;case 21:break;default:Ct(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(hd(l)){a=l;break}l=l.return}if(a==null)throw Error(w(160));switch(a.tag){case 27:var n=a.stateNode,i=yu(t);pi(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Ia(u,""),a.flags&=-33);var o=yu(t);pi(t,o,u);break;case 3:case 4:var c=a.stateNode.containerInfo,f=yu(t);ro(t,f,c);break;default:throw Error(w(161))}}catch(y){V(t,t.return,y)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;wd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Oe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)pd(t,e.alternate,e),e=e.sibling}function na(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:We(4,e,e.return),na(e);break;case 1:ie(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&fd(e,e.return,a),na(e);break;case 27:Ql(e.stateNode);case 26:case 5:ie(e,e.return),na(e);break;case 22:e.memoizedState===null&&na(e);break;case 30:na(e);break;default:na(e)}t=t.sibling}}function De(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,u=i.flags;switch(i.tag){case 0:case 11:case 15:De(n,i,a),bn(4,i);break;case 1:if(De(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(f){V(l,l.return,f)}if(l=i,n=l.updateQueue,n!==null){var o=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)pf(c[n],o)}catch(f){V(l,l.return,f)}}a&&u&64&&sd(i),Bl(i,i.return);break;case 27:gd(i);case 26:case 5:De(n,i,a),a&&l===null&&u&4&&dd(i),Bl(i,i.return);break;case 12:De(n,i,a);break;case 13:De(n,i,a),a&&u&4&&bd(n,i);break;case 22:i.memoizedState===null&&De(n,i,a),Bl(i,i.return);break;case 30:break;default:De(n,i,a)}e=e.sibling}}function pc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&gn(a))}function mc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&gn(t))}function le(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xd(t,e,a,l),e=e.sibling}function xd(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:le(t,e,a,l),n&2048&&bn(9,e);break;case 1:le(t,e,a,l);break;case 3:le(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&gn(t)));break;case 12:if(n&2048){le(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,u=i.id,o=i.onPostCommit;typeof o=="function"&&o(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){V(e,e.return,c)}}else le(t,e,a,l);break;case 13:le(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,u=e.alternate,e.memoizedState!==null?i._visibility&2?le(t,e,a,l):ql(t,e):i._visibility&2?le(t,e,a,l):(i._visibility|=2,Ma(t,e,a,l,(e.subtreeFlags&10256)!==0)),n&2048&&pc(u,e);break;case 24:le(t,e,a,l),n&2048&&mc(e.alternate,e);break;default:le(t,e,a,l)}}function Ma(t,e,a,l,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,u=e,o=a,c=l,f=u.flags;switch(u.tag){case 0:case 11:case 15:Ma(i,u,o,c,n),bn(8,u);break;case 23:break;case 22:var y=u.stateNode;u.memoizedState!==null?y._visibility&2?Ma(i,u,o,c,n):ql(i,u):(y._visibility|=2,Ma(i,u,o,c,n)),n&&f&2048&&pc(u.alternate,u);break;case 24:Ma(i,u,o,c,n),n&&f&2048&&mc(u.alternate,u);break;default:Ma(i,u,o,c,n)}e=e.sibling}}function ql(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:ql(a,l),n&2048&&pc(l.alternate,l);break;case 24:ql(a,l),n&2048&&mc(l.alternate,l);break;default:ql(a,l)}e=e.sibling}}var Ml=8192;function za(t){if(t.subtreeFlags&Ml)for(t=t.child;t!==null;)Sd(t),t=t.sibling}function Sd(t){switch(t.tag){case 26:za(t),t.flags&Ml&&t.memoizedState!==null&&ip(te,t.memoizedState,t.memoizedProps);break;case 5:za(t);break;case 3:case 4:var e=te;te=Si(t.stateNode.containerInfo),za(t),te=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ml,Ml=16777216,za(t),Ml=e):za(t));break;default:za(t)}}function Ed(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function El(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];gt=l,Td(l,t)}Ed(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zd(t),t=t.sibling}function zd(t){switch(t.tag){case 0:case 11:case 15:El(t),t.flags&2048&&We(9,t,t.return);break;case 3:El(t);break;case 12:El(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Vn(t)):El(t);break;default:El(t)}}function Vn(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];gt=l,Td(l,t)}Ed(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:We(8,e,e.return),Vn(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Vn(e));break;default:Vn(e)}t=t.sibling}}function Td(t,e){for(;gt!==null;){var a=gt;switch(a.tag){case 0:case 11:case 15:We(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,gt=l;else t:for(a=t;gt!==null;){l=gt;var n=l.sibling,i=l.return;if(md(l),l===a){gt=null;break t}if(n!==null){n.return=i,gt=n;break t}gt=i}}}var xg={getCacheForType:function(t){var e=Et(ft),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Sg=typeof WeakMap=="function"?WeakMap:Map,Q=0,J=null,k=null,B=0,G=0,kt=null,Be=!1,fl=!1,yc=!1,Ae=0,nt=0,Fe=0,sa=0,bc=0,Wt=0,ll=0,Xl=null,jt=null,so=!1,vc=0,mi=1/0,yi=null,Ze=null,vt=0,Le=null,nl=null,$a=0,fo=0,ho=null,Ad=null,Gl=0,go=null;function Xt(){if(Q&2&&B!==0)return B&-B;if(_.T!==null){var t=Pa;return t!==0?t:xc()}return Hs()}function _d(){Wt===0&&(Wt=!(B&536870912)||q?js():536870912);var t=Ft.current;return t!==null&&(t.flags|=32),Wt}function Gt(t,e,a){(t===J&&(G===2||G===9)||t.cancelPendingCommit!==null)&&(il(t,0),qe(t,B,Wt,!1)),rn(t,a),(!(Q&2)||t!==J)&&(t===J&&(!(Q&2)&&(sa|=a),nt===4&&qe(t,B,Wt,!1)),se(t))}function Md(t,e,a){if(Q&6)throw Error(w(327));var l=!a&&(e&124)===0&&(e&t.expiredLanes)===0||cn(t,e),n=l?Tg(t,e):wu(t,e,!0),i=l;do{if(n===0){fl&&!l&&qe(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!Eg(a)){n=wu(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var o=t;n=Xl;var c=o.current.memoizedState.isDehydrated;if(c&&(il(o,u).flags|=256),u=wu(o,u,!1),u!==2){if(yc&&!c){o.errorRecoveryDisabledLanes|=i,sa|=i,n=4;break t}i=jt,jt=n,i!==null&&(jt===null?jt=i:jt.push.apply(jt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){il(t,0),qe(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(w(345));case 4:if((e&4194048)!==e)break;case 6:qe(l,e,Wt,!Be);break t;case 2:jt=null;break;case 3:case 5:break;default:throw Error(w(329))}if((e&62914560)===e&&(n=vc+300-oe(),10<n)){if(qe(l,e,Wt,!Be),Ri(l,0,!0)!==0)break t;l.timeoutHandle=Kd(Hr.bind(null,l,a,jt,yi,so,e,Wt,sa,ll,Be,i,2,-0,0),n);break t}Hr(l,a,jt,yi,so,e,Wt,sa,ll,Be,i,0,-0,0)}}break}while(!0);se(t)}function Hr(t,e,a,l,n,i,u,o,c,f,y,m,s,p){if(t.timeoutHandle=-1,m=e.subtreeFlags,(m&8192||(m&16785408)===16785408)&&(tn={stylesheets:null,count:0,unsuspend:np},Sd(e),m=up(),m!==null)){t.cancelPendingCommit=m(Yr.bind(null,t,e,i,a,l,n,u,o,c,y,1,s,p)),qe(t,i,u,!f);return}Yr(t,e,i,a,l,n,u,o,c)}function Eg(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!Qt(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qe(t,e,a,l){e&=~bc,e&=~sa,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-qt(n),u=1<<i;l[i]=-1,n&=~u}a!==0&&Ns(t,a,e)}function Xi(){return Q&6?!0:(vn(0),!1)}function wc(){if(k!==null){if(G===0)var t=k.return;else t=k,ve=va=null,uc(t),Ja=null,Fl=0,t=k;for(;t!==null;)rd(t.alternate,t),t=t.return;k=null}}function il(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Xg(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),wc(),J=t,k=a=xe(t.current,null),B=e,G=0,kt=null,Be=!1,fl=cn(t,e),yc=!1,ll=Wt=bc=sa=Fe=nt=0,jt=Xl=null,so=!1,e&8&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-qt(l),i=1<<n;e|=t[n],l&=~i}return Ae=e,Ci(),a}function Od(t,e){C=null,_.H=si,e===pn||e===ki?(e=gr(),G=3):e===hf?(e=gr(),G=4):G=e===ld?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,kt=e,k===null&&(nt=1,hi(t,$t(e,t.current)))}function Dd(){var t=_.H;return _.H=si,t===null?si:t}function Rd(){var t=_.A;return _.A=xg,t}function po(){nt=4,Be||(B&4194048)!==B&&Ft.current!==null||(fl=!0),!(Fe&134217727)&&!(sa&134217727)||J===null||qe(J,B,Wt,!1)}function wu(t,e,a){var l=Q;Q|=2;var n=Dd(),i=Rd();(J!==t||B!==e)&&(yi=null,il(t,e)),e=!1;var u=nt;t:do try{if(G!==0&&k!==null){var o=k,c=kt;switch(G){case 8:wc(),u=6;break t;case 3:case 2:case 9:case 6:Ft.current===null&&(e=!0);var f=G;if(G=0,kt=null,Xa(t,o,c,f),a&&fl){u=0;break t}break;default:f=G,G=0,kt=null,Xa(t,o,c,f)}}zg(),u=nt;break}catch(y){Od(t,y)}while(!0);return e&&t.shellSuspendCounter++,ve=va=null,Q=l,_.H=n,_.A=i,k===null&&(J=null,B=0,Ci()),u}function zg(){for(;k!==null;)jd(k)}function Tg(t,e){var a=Q;Q|=2;var l=Dd(),n=Rd();J!==t||B!==e?(yi=null,mi=oe()+500,il(t,e)):fl=cn(t,e);t:do try{if(G!==0&&k!==null){e=k;var i=kt;e:switch(G){case 1:G=0,kt=null,Xa(t,e,i,1);break;case 2:case 9:if(hr(i)){G=0,kt=null,kr(e);break}e=function(){G!==2&&G!==9||J!==t||(G=7),se(t)},i.then(e,e);break t;case 3:G=7;break t;case 4:G=5;break t;case 7:hr(i)?(G=0,kt=null,kr(e)):(G=0,kt=null,Xa(t,e,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var o=k;if(!u||Fd(u)){G=0,kt=null;var c=o.sibling;if(c!==null)k=c;else{var f=o.return;f!==null?(k=f,Gi(f)):k=null}break e}}G=0,kt=null,Xa(t,e,i,5);break;case 6:G=0,kt=null,Xa(t,e,i,6);break;case 8:wc(),nt=6;break t;default:throw Error(w(462))}}Ag();break}catch(y){Od(t,y)}while(!0);return ve=va=null,_.H=l,_.A=n,Q=a,k!==null?0:(J=null,B=0,Ci(),nt)}function Ag(){for(;k!==null&&!J0();)jd(k)}function jd(t){var e=cd(t.alternate,t,Ae);t.memoizedProps=t.pendingProps,e===null?Gi(t):k=e}function kr(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Dr(a,e,e.pendingProps,e.type,void 0,B);break;case 11:e=Dr(a,e,e.pendingProps,e.type.render,e.ref,B);break;case 5:uc(e);default:rd(a,e),e=k=rf(e,Ae),e=cd(a,e,Ae)}t.memoizedProps=t.pendingProps,e===null?Gi(t):k=e}function Xa(t,e,a,l){ve=va=null,uc(e),Ja=null,Fl=0;var n=e.return;try{if(pg(t,n,e,a,B)){nt=1,hi(t,$t(a,t.current)),k=null;return}}catch(i){if(n!==null)throw k=n,i;nt=1,hi(t,$t(a,t.current)),k=null;return}e.flags&32768?(q||l===1?t=!0:fl||B&536870912?t=!1:(Be=t=!0,(l===2||l===9||l===3||l===6)&&(l=Ft.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ud(e,t)):Gi(e)}function Gi(t){var e=t;do{if(e.flags&32768){Ud(e,Be);return}t=e.return;var a=yg(e.alternate,e,Ae);if(a!==null){k=a;return}if(e=e.sibling,e!==null){k=e;return}k=e=t}while(e!==null);nt===0&&(nt=5)}function Ud(t,e){do{var a=bg(t.alternate,t);if(a!==null){a.flags&=32767,k=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){k=t;return}k=t=a}while(t!==null);nt=6,k=null}function Yr(t,e,a,l,n,i,u,o,c){t.cancelPendingCommit=null;do Qi();while(vt!==0);if(Q&6)throw Error(w(327));if(e!==null){if(e===t.current)throw Error(w(177));if(i=e.lanes|e.childLanes,i|=Ko,nh(t,a,i,u,o,c),t===J&&(k=J=null,B=0),nl=e,Le=t,$a=a,fo=i,ho=n,Ad=l,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Dg(ti,function(){return Yd(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,e.subtreeFlags&13878||l){l=_.T,_.T=null,n=X.p,X.p=2,u=Q,Q|=4;try{vg(t,e,a)}finally{Q=u,X.p=n,_.T=l}}vt=1,Nd(),Cd(),Hd()}}function Nd(){if(vt===1){vt=0;var t=Le,e=nl,a=(e.flags&13878)!==0;if(e.subtreeFlags&13878||a){a=_.T,_.T=null;var l=X.p;X.p=2;var n=Q;Q|=4;try{vd(e,t);var i=vo,u=tf(t.containerInfo),o=i.focusedElem,c=i.selectionRange;if(u!==o&&o&&o.ownerDocument&&Ps(o.ownerDocument.documentElement,o)){if(c!==null&&Vo(o)){var f=c.start,y=c.end;if(y===void 0&&(y=f),"selectionStart"in o)o.selectionStart=f,o.selectionEnd=Math.min(y,o.value.length);else{var m=o.ownerDocument||document,s=m&&m.defaultView||window;if(s.getSelection){var p=s.getSelection(),E=o.textContent.length,z=Math.min(c.start,E),M=c.end===void 0?z:Math.min(c.end,E);!p.extend&&z>M&&(u=M,M=z,z=u);var d=ir(o,z),r=ir(o,M);if(d&&r&&(p.rangeCount!==1||p.anchorNode!==d.node||p.anchorOffset!==d.offset||p.focusNode!==r.node||p.focusOffset!==r.offset)){var h=m.createRange();h.setStart(d.node,d.offset),p.removeAllRanges(),z>M?(p.addRange(h),p.extend(r.node,r.offset)):(h.setEnd(r.node,r.offset),p.addRange(h))}}}}for(m=[],p=o;p=p.parentNode;)p.nodeType===1&&m.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<m.length;o++){var g=m[o];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Ti=!!bo,vo=bo=null}finally{Q=n,X.p=l,_.T=a}}t.current=e,vt=2}}function Cd(){if(vt===2){vt=0;var t=Le,e=nl,a=(e.flags&8772)!==0;if(e.subtreeFlags&8772||a){a=_.T,_.T=null;var l=X.p;X.p=2;var n=Q;Q|=4;try{pd(t,e.alternate,e)}finally{Q=n,X.p=l,_.T=a}}vt=3}}function Hd(){if(vt===4||vt===3){vt=0,$0();var t=Le,e=nl,a=$a,l=Ad;e.subtreeFlags&10256||e.flags&10256?vt=5:(vt=0,nl=Le=null,kd(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Ze=null),Bo(a),e=e.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(on,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=_.T,n=X.p,X.p=2,_.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var o=l[u];i(o.value,{componentStack:o.stack})}}finally{_.T=e,X.p=n}}$a&3&&Qi(),se(t),n=t.pendingLanes,a&4194090&&n&42?t===go?Gl++:(Gl=0,go=t):Gl=0,vn(0)}}function kd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,gn(e)))}function Qi(t){return Nd(),Cd(),Hd(),Yd()}function Yd(){if(vt!==5)return!1;var t=Le,e=fo;fo=0;var a=Bo($a),l=_.T,n=X.p;try{X.p=32>a?32:a,_.T=null,a=ho,ho=null;var i=Le,u=$a;if(vt=0,nl=Le=null,$a=0,Q&6)throw Error(w(331));var o=Q;if(Q|=4,zd(i.current),xd(i,i.current,u,a),Q=o,vn(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(on,i)}catch{}return!0}finally{X.p=n,_.T=l,kd(t,e)}}function Br(t,e,a){e=$t(a,e),e=uo(t.stateNode,e,2),t=Qe(t,e,2),t!==null&&(rn(t,2),se(t))}function V(t,e,a){if(t.tag===3)Br(t,t,a);else for(;e!==null;){if(e.tag===3){Br(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ze===null||!Ze.has(l))){t=$t(a,t),a=ed(2),l=Qe(e,a,2),l!==null&&(ad(a,l,e,t),rn(l,2),se(l));break}}e=e.return}}function xu(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Sg;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(yc=!0,n.add(a),t=_g.bind(null,t,e,a),e.then(t,t))}function _g(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,J===t&&(B&a)===a&&(nt===4||nt===3&&(B&62914560)===B&&300>oe()-vc?!(Q&2)&&il(t,0):bc|=a,ll===B&&(ll=0)),se(t)}function Bd(t,e){e===0&&(e=Us()),t=sl(t,e),t!==null&&(rn(t,e),se(t))}function Mg(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Bd(t,a)}function Og(t,e){var a=0;switch(t.tag){case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(w(314))}l!==null&&l.delete(e),Bd(t,a)}function Dg(t,e){return ko(t,e)}var bi=null,Oa=null,mo=!1,vi=!1,Su=!1,fa=0;function se(t){t!==Oa&&t.next===null&&(Oa===null?bi=Oa=t:Oa=Oa.next=t),vi=!0,mo||(mo=!0,jg())}function vn(t,e){if(!Su&&vi){Su=!0;do for(var a=!1,l=bi;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var u=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-qt(42|t)+1)-1,i&=n&~(u&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,qr(l,i))}else i=B,i=Ri(l,l===J?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||cn(l,i)||(a=!0,qr(l,i));l=l.next}while(a);Su=!1}}function Rg(){qd()}function qd(){vi=mo=!1;var t=0;fa!==0&&(qg()&&(t=fa),fa=0);for(var e=oe(),a=null,l=bi;l!==null;){var n=l.next,i=Xd(l,e);i===0?(l.next=null,a===null?bi=n:a.next=n,n===null&&(Oa=a)):(a=l,(t!==0||i&3)&&(vi=!0)),l=n}vn(t)}function Xd(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-qt(i),o=1<<u,c=n[u];c===-1?(!(o&a)||o&l)&&(n[u]=lh(o,e)):c<=e&&(t.expiredLanes|=o),i&=~o}if(e=J,a=B,a=Ri(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(G===2||G===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ji(l),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||cn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Ji(l),Bo(a)){case 2:case 8:a=Ds;break;case 32:a=ti;break;case 268435456:a=Rs;break;default:a=ti}return l=Gd.bind(null,t),a=ko(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Ji(l),t.callbackPriority=2,t.callbackNode=null,2}function Gd(t,e){if(vt!==0&&vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qi()&&t.callbackNode!==a)return null;var l=B;return l=Ri(t,t===J?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Md(t,l,e),Xd(t,oe()),t.callbackNode!=null&&t.callbackNode===a?Gd.bind(null,t):null)}function qr(t,e){if(Qi())return null;Md(t,e,!0)}function jg(){Gg(function(){Q&6?ko(Os,Rg):qd()})}function xc(){return fa===0&&(fa=js()),fa}function Xr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Yn(""+t)}function Gr(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Ug(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=Xr((n[Ut]||null).action),u=l.submitter;u&&(e=(e=u[Ut]||null)?Xr(e.formAction):u.getAttribute("formAction"),e!==null&&(i=e,u=null));var o=new ji("action","action",null,l,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(fa!==0){var c=u?Gr(n,u):new FormData(n);no(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(o.preventDefault(),c=u?Gr(n,u):new FormData(n),no(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Eu=0;Eu<Vu.length;Eu++){var zu=Vu[Eu],Ng=zu.toLowerCase(),Cg=zu[0].toUpperCase()+zu.slice(1);ae(Ng,"on"+Cg)}ae(af,"onAnimationEnd");ae(lf,"onAnimationIteration");ae(nf,"onAnimationStart");ae("dblclick","onDoubleClick");ae("focusin","onFocus");ae("focusout","onBlur");ae(Ih,"onTransitionRun");ae(Ph,"onTransitionStart");ae(tg,"onTransitionCancel");ae(uf,"onTransitionEnd");Fa("onMouseEnter",["mouseout","mouseover"]);Fa("onMouseLeave",["mouseout","mouseover"]);Fa("onPointerEnter",["pointerout","pointerover"]);Fa("onPointerLeave",["pointerout","pointerover"]);ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function Qd(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var u=l.length-1;0<=u;u--){var o=l[u],c=o.instance,f=o.currentTarget;if(o=o.listener,c!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=f;try{i(n)}catch(y){di(y)}n.currentTarget=null,i=c}else for(u=0;u<l.length;u++){if(o=l[u],c=o.instance,f=o.currentTarget,o=o.listener,c!==i&&n.isPropagationStopped())break t;i=o,n.currentTarget=f;try{i(n)}catch(y){di(y)}n.currentTarget=null,i=c}}}}function H(t,e){var a=e[Bu];a===void 0&&(a=e[Bu]=new Set);var l=t+"__bubble";a.has(l)||(Zd(e,t,2,!1),a.add(l))}function Tu(t,e,a){var l=0;e&&(l|=4),Zd(a,t,l,e)}var Un="_reactListening"+Math.random().toString(36).slice(2);function Sc(t){if(!t[Un]){t[Un]=!0,ks.forEach(function(a){a!=="selectionchange"&&(Hg.has(a)||Tu(a,!1,t),Tu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Un]||(e[Un]=!0,Tu("selectionchange",!1,e))}}function Zd(t,e,a,l){switch(a0(e)){case 2:var n=rp;break;case 8:n=sp;break;default:n=Ac}a=n.bind(null,e,a,t),n=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Au(t,e,a,l,n){var i=l;if(!(e&1)&&!(e&2)&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===n)break;if(u===4)for(u=l.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;o!==null;){if(u=ja(o),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){l=i=u;continue t}o=o.parentNode}}l=l.return}Ls(function(){var f=i,y=Go(a),m=[];t:{var s=of.get(t);if(s!==void 0){var p=ji,E=t;switch(t){case"keypress":if(qn(a)===0)break t;case"keydown":case"keyup":p=Dh;break;case"focusin":E="focus",p=au;break;case"focusout":E="blur",p=au;break;case"beforeblur":case"afterblur":p=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Uh;break;case af:case lf:case nf:p=xh;break;case uf:p=Ch;break;case"scroll":case"scrollend":p=mh;break;case"wheel":p=kh;break;case"copy":case"cut":case"paste":p=Eh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fc;break;case"toggle":case"beforetoggle":p=Bh}var z=(e&4)!==0,M=!z&&(t==="scroll"||t==="scrollend"),d=z?s!==null?s+"Capture":null:s;z=[];for(var r=f,h;r!==null;){var g=r;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||d===null||(g=Vl(r,d),g!=null&&z.push(Pl(r,g,h))),M)break;r=r.return}0<z.length&&(s=new p(s,E,null,a,y),m.push({event:s,listeners:z}))}}if(!(e&7)){t:{if(s=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",s&&a!==Gu&&(E=a.relatedTarget||a.fromElement)&&(ja(E)||E[cl]))break t;if((p||s)&&(s=y.window===y?y:(s=y.ownerDocument)?s.defaultView||s.parentWindow:window,p?(E=a.relatedTarget||a.toElement,p=f,E=E?ja(E):null,E!==null&&(M=un(E),z=E.tag,E!==M||z!==5&&z!==27&&z!==6)&&(E=null)):(p=null,E=f),p!==E)){if(z=$c,g="onMouseLeave",d="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(z=Fc,g="onPointerLeave",d="onPointerEnter",r="pointer"),M=p==null?s:_l(p),h=E==null?s:_l(E),s=new z(g,r+"leave",p,a,y),s.target=M,s.relatedTarget=h,g=null,ja(y)===f&&(z=new z(d,r+"enter",E,a,y),z.target=h,z.relatedTarget=M,g=z),M=g,p&&E)e:{for(z=p,d=E,r=0,h=z;h;h=Ta(h))r++;for(h=0,g=d;g;g=Ta(g))h++;for(;0<r-h;)z=Ta(z),r--;for(;0<h-r;)d=Ta(d),h--;for(;r--;){if(z===d||d!==null&&z===d.alternate)break e;z=Ta(z),d=Ta(d)}z=null}else z=null;p!==null&&Qr(m,s,p,z,!1),E!==null&&M!==null&&Qr(m,M,E,z,!0)}}t:{if(s=f?_l(f):window,p=s.nodeName&&s.nodeName.toLowerCase(),p==="select"||p==="input"&&s.type==="file")var b=er;else if(tr(s))if(Fs)b=$h;else{b=Kh;var S=Vh}else p=s.nodeName,!p||p.toLowerCase()!=="input"||s.type!=="checkbox"&&s.type!=="radio"?f&&Xo(f.elementType)&&(b=er):b=Jh;if(b&&(b=b(t,f))){Ws(m,b,a,y);break t}S&&S(t,s,f),t==="focusout"&&f&&s.type==="number"&&f.memoizedProps.value!=null&&Xu(s,"number",s.value)}switch(S=f?_l(f):window,t){case"focusin":(tr(S)||S.contentEditable==="true")&&(Ca=S,Zu=f,jl=null);break;case"focusout":jl=Zu=Ca=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,ur(m,a,y);break;case"selectionchange":if(Fh)break;case"keydown":case"keyup":ur(m,a,y)}var x;if(Lo)t:{switch(t){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Na?Js(t,a)&&(T="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(Ks&&a.locale!=="ko"&&(Na||T!=="onCompositionStart"?T==="onCompositionEnd"&&Na&&(x=Vs()):(Ye=y,Qo="value"in Ye?Ye.value:Ye.textContent,Na=!0)),S=wi(f,T),0<S.length&&(T=new Wc(T,t,null,a,y),m.push({event:T,listeners:S}),x?T.data=x:(x=$s(a),x!==null&&(T.data=x)))),(x=Xh?Gh(t,a):Qh(t,a))&&(T=wi(f,"onBeforeInput"),0<T.length&&(S=new Wc("onBeforeInput","beforeinput",null,a,y),m.push({event:S,listeners:T}),S.data=x)),Ug(m,t,f,a,y)}Qd(m,e)})}function Pl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function wi(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Vl(t,a),n!=null&&l.unshift(Pl(t,n,i)),n=Vl(t,e),n!=null&&l.push(Pl(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Ta(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qr(t,e,a,l,n){for(var i=e._reactName,u=[];a!==null&&a!==l;){var o=a,c=o.alternate,f=o.stateNode;if(o=o.tag,c!==null&&c===l)break;o!==5&&o!==26&&o!==27||f===null||(c=f,n?(f=Vl(a,i),f!=null&&u.unshift(Pl(a,f,c))):n||(f=Vl(a,i),f!=null&&u.push(Pl(a,f,c)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var kg=/\r\n?/g,Yg=/\u0000|\uFFFD/g;function Zr(t){return(typeof t=="string"?t:""+t).replace(kg,`
`).replace(Yg,"")}function Ld(t,e){return e=Zr(e),Zr(t)===e}function Zi(){}function Z(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Ia(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Ia(t,""+l);break;case"className":An(t,"class",l);break;case"tabIndex":An(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":An(t,a,l);break;case"style":Zs(t,l,i);break;case"data":if(e!=="object"){An(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Yn(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&Z(t,e,"name",n.name,n,null),Z(t,e,"formEncType",n.formEncType,n,null),Z(t,e,"formMethod",n.formMethod,n,null),Z(t,e,"formTarget",n.formTarget,n,null)):(Z(t,e,"encType",n.encType,n,null),Z(t,e,"method",n.method,n,null),Z(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Yn(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Zi);break;case"onScroll":l!=null&&H("scroll",t);break;case"onScrollEnd":l!=null&&H("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(w(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Yn(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":H("beforetoggle",t),H("toggle",t),kn(t,"popover",l);break;case"xlinkActuate":de(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":de(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":de(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":de(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":de(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":de(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":de(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":de(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":de(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":kn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gh.get(a)||a,kn(t,a,l))}}function yo(t,e,a,l,n,i){switch(a){case"style":Zs(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(w(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Ia(t,l):(typeof l=="number"||typeof l=="bigint")&&Ia(t,""+l);break;case"onScroll":l!=null&&H("scroll",t);break;case"onScrollEnd":l!=null&&H("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ys.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Ut]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):kn(t,a,l)}}}function wt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":H("error",t),H("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:Z(t,e,i,u,a,null)}}n&&Z(t,e,"srcSet",a.srcSet,a,null),l&&Z(t,e,"src",a.src,a,null);return;case"input":H("invalid",t);var o=i=u=n=null,c=null,f=null;for(l in a)if(a.hasOwnProperty(l)){var y=a[l];if(y!=null)switch(l){case"name":n=y;break;case"type":u=y;break;case"checked":c=y;break;case"defaultChecked":f=y;break;case"value":i=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(w(137,e));break;default:Z(t,e,l,y,a,null)}}Xs(t,i,o,c,f,u,n,!1),ei(t);return;case"select":H("invalid",t),l=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":i=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:Z(t,e,n,o,a,null)}e=i,a=u,t.multiple=!!l,e!=null?Qa(t,!!l,e,!1):a!=null&&Qa(t,!!l,a,!0);return;case"textarea":H("invalid",t),i=n=l=null;for(u in a)if(a.hasOwnProperty(u)&&(o=a[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":n=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(w(91));break;default:Z(t,e,u,o,a,null)}Qs(t,l,n,i),ei(t);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Z(t,e,c,l,a,null)}return;case"dialog":H("beforetoggle",t),H("toggle",t),H("cancel",t),H("close",t);break;case"iframe":case"object":H("load",t);break;case"video":case"audio":for(l=0;l<Il.length;l++)H(Il[l],t);break;case"image":H("error",t),H("load",t);break;case"details":H("toggle",t);break;case"embed":case"source":case"link":H("error",t),H("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in a)if(a.hasOwnProperty(f)&&(l=a[f],l!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,e));default:Z(t,e,f,l,a,null)}return;default:if(Xo(e)){for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!==void 0&&yo(t,e,y,l,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null&&Z(t,e,o,l,a,null))}function Bg(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,o=null,c=null,f=null,y=null;for(p in a){var m=a[p];if(a.hasOwnProperty(p)&&m!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":c=m;default:l.hasOwnProperty(p)||Z(t,e,p,null,l,m)}}for(var s in l){var p=l[s];if(m=a[s],l.hasOwnProperty(s)&&(p!=null||m!=null))switch(s){case"type":i=p;break;case"name":n=p;break;case"checked":f=p;break;case"defaultChecked":y=p;break;case"value":u=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(w(137,e));break;default:p!==m&&Z(t,e,s,p,l,m)}}qu(t,u,o,c,f,y,i,n);return;case"select":p=u=o=s=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":p=c;default:l.hasOwnProperty(i)||Z(t,e,i,null,l,c)}for(n in l)if(i=l[n],c=a[n],l.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":s=i;break;case"defaultValue":o=i;break;case"multiple":u=i;default:i!==c&&Z(t,e,n,i,l,c)}e=o,a=u,l=p,s!=null?Qa(t,!!a,s,!1):!!l!=!!a&&(e!=null?Qa(t,!!a,e,!0):Qa(t,!!a,a?[]:"",!1));return;case"textarea":p=s=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Z(t,e,o,null,l,n)}for(u in l)if(n=l[u],i=a[u],l.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":s=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(w(91));break;default:n!==i&&Z(t,e,u,n,l,i)}Gs(t,s,p);return;case"option":for(var E in a)if(s=a[E],a.hasOwnProperty(E)&&s!=null&&!l.hasOwnProperty(E))switch(E){case"selected":t.selected=!1;break;default:Z(t,e,E,null,l,s)}for(c in l)if(s=l[c],p=a[c],l.hasOwnProperty(c)&&s!==p&&(s!=null||p!=null))switch(c){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Z(t,e,c,s,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in a)s=a[z],a.hasOwnProperty(z)&&s!=null&&!l.hasOwnProperty(z)&&Z(t,e,z,null,l,s);for(f in l)if(s=l[f],p=a[f],l.hasOwnProperty(f)&&s!==p&&(s!=null||p!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(s!=null)throw Error(w(137,e));break;default:Z(t,e,f,s,l,p)}return;default:if(Xo(e)){for(var M in a)s=a[M],a.hasOwnProperty(M)&&s!==void 0&&!l.hasOwnProperty(M)&&yo(t,e,M,void 0,l,s);for(y in l)s=l[y],p=a[y],!l.hasOwnProperty(y)||s===p||s===void 0&&p===void 0||yo(t,e,y,s,l,p);return}}for(var d in a)s=a[d],a.hasOwnProperty(d)&&s!=null&&!l.hasOwnProperty(d)&&Z(t,e,d,null,l,s);for(m in l)s=l[m],p=a[m],!l.hasOwnProperty(m)||s===p||s==null&&p==null||Z(t,e,m,s,l,p)}var bo=null,vo=null;function xi(t){return t.nodeType===9?t:t.ownerDocument}function Lr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function wo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _u=null;function qg(){var t=window.event;return t&&t.type==="popstate"?t===_u?!1:(_u=t,!0):(_u=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Xg=typeof clearTimeout=="function"?clearTimeout:void 0,Vr=typeof Promise=="function"?Promise:void 0,Gg=typeof queueMicrotask=="function"?queueMicrotask:typeof Vr<"u"?function(t){return Vr.resolve(null).then(t).catch(Qg)}:Kd;function Qg(t){setTimeout(function(){throw t})}function Pe(t){return t==="head"}function Kr(t,e){var a=e,l=0,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var u=t.ownerDocument;if(a&1&&Ql(u.documentElement),a&2&&Ql(u.body),a&4)for(a=u.head,Ql(a),u=a.firstChild;u;){var o=u.nextSibling,c=u.nodeName;u[sn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=o}}if(n===0){t.removeChild(i),nn(e);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);nn(e)}function xo(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xo(a),qo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Zg(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[sn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=ee(t.nextSibling),t===null)break}return null}function Lg(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ee(t.nextSibling),t===null))return null;return t}function So(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Vg(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ee(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Eo=null;function Jr(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Jd(t,e,a){switch(e=xi(a),t){case"html":if(t=e.documentElement,!t)throw Error(w(452));return t;case"head":if(t=e.head,!t)throw Error(w(453));return t;case"body":if(t=e.body,!t)throw Error(w(454));return t;default:throw Error(w(451))}}function Ql(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);qo(t)}var It=new Map,$r=new Set;function Si(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _e=X.d;X.d={f:Kg,r:Jg,D:$g,C:Wg,L:Fg,m:Ig,X:tp,S:Pg,M:ep};function Kg(){var t=_e.f(),e=Xi();return t||e}function Jg(t){var e=rl(t);e!==null&&e.tag===5&&e.type==="form"?Xf(e):_e.r(t)}var dl=typeof document>"u"?null:document;function $d(t,e,a){var l=dl;if(l&&typeof e=="string"&&e){var n=Jt(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),$r.has(n)||($r.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),wt(e,"link",t),pt(e),l.head.appendChild(e)))}}function $g(t){_e.D(t),$d("dns-prefetch",t,null)}function Wg(t,e){_e.C(t,e),$d("preconnect",t,e)}function Fg(t,e,a){_e.L(t,e,a);var l=dl;if(l&&t&&e){var n='link[rel="preload"][as="'+Jt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Jt(a.imageSizes)+'"]')):n+='[href="'+Jt(t)+'"]';var i=n;switch(e){case"style":i=ul(t);break;case"script":i=hl(t)}It.has(i)||(t=$({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),It.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(wn(i))||e==="script"&&l.querySelector(xn(i))||(e=l.createElement("link"),wt(e,"link",t),pt(e),l.head.appendChild(e)))}}function Ig(t,e){_e.m(t,e);var a=dl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Jt(l)+'"][href="'+Jt(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=hl(t)}if(!It.has(i)&&(t=$({rel:"modulepreload",href:t},e),It.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xn(i)))return}l=a.createElement("link"),wt(l,"link",t),pt(l),a.head.appendChild(l)}}}function Pg(t,e,a){_e.S(t,e,a);var l=dl;if(l&&t){var n=Ga(l).hoistableStyles,i=ul(t);e=e||"default";var u=n.get(i);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(wn(i)))o.loading=5;else{t=$({rel:"stylesheet",href:t,"data-precedence":e},a),(a=It.get(i))&&Ec(t,a);var c=u=l.createElement("link");pt(c),wt(c,"link",t),c._p=new Promise(function(f,y){c.onload=f,c.onerror=y}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Kn(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:o},n.set(i,u)}}}function tp(t,e){_e.X(t,e);var a=dl;if(a&&t){var l=Ga(a).hoistableScripts,n=hl(t),i=l.get(n);i||(i=a.querySelector(xn(n)),i||(t=$({src:t,async:!0},e),(e=It.get(n))&&zc(t,e),i=a.createElement("script"),pt(i),wt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function ep(t,e){_e.M(t,e);var a=dl;if(a&&t){var l=Ga(a).hoistableScripts,n=hl(t),i=l.get(n);i||(i=a.querySelector(xn(n)),i||(t=$({src:t,async:!0,type:"module"},e),(e=It.get(n))&&zc(t,e),i=a.createElement("script"),pt(i),wt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Wr(t,e,a,l){var n=(n=Xe.current)?Si(n):null;if(!n)throw Error(w(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ul(a.href),a=Ga(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ul(a.href);var i=Ga(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(wn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),It.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},It.set(t,a),i||ap(n,t,a,u.state))),e&&l===null)throw Error(w(528,""));return u}if(e&&l!==null)throw Error(w(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=hl(a),a=Ga(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,t))}}function ul(t){return'href="'+Jt(t)+'"'}function wn(t){return'link[rel="stylesheet"]['+t+"]"}function Wd(t){return $({},t,{"data-precedence":t.precedence,precedence:null})}function ap(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),wt(e,"link",a),pt(e),t.head.appendChild(e))}function hl(t){return'[src="'+Jt(t)+'"]'}function xn(t){return"script[async]"+t}function Fr(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Jt(a.href)+'"]');if(l)return e.instance=l,pt(l),l;var n=$({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pt(l),wt(l,"style",n),Kn(l,a.precedence,t),e.instance=l;case"stylesheet":n=ul(a.href);var i=t.querySelector(wn(n));if(i)return e.state.loading|=4,e.instance=i,pt(i),i;l=Wd(a),(n=It.get(n))&&Ec(l,n),i=(t.ownerDocument||t).createElement("link"),pt(i);var u=i;return u._p=new Promise(function(o,c){u.onload=o,u.onerror=c}),wt(i,"link",l),e.state.loading|=4,Kn(i,a.precedence,t),e.instance=i;case"script":return i=hl(a.src),(n=t.querySelector(xn(i)))?(e.instance=n,pt(n),n):(l=a,(n=It.get(i))&&(l=$({},a),zc(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),pt(n),wt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(w(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(l=e.instance,e.state.loading|=4,Kn(l,a.precedence,t));return e.instance}function Kn(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===e)i=o;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Ec(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function zc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Jn=null;function Ir(t,e,a){if(Jn===null){var l=new Map,n=Jn=new Map;n.set(a,l)}else n=Jn,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[sn]||i[St]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(e)||"";u=t+u;var o=l.get(u);o?o.push(i):l.set(u,[i])}}return l}function Pr(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function lp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Fd(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var tn=null;function np(){}function ip(t,e,a){if(tn===null)throw Error(w(475));var l=tn;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var n=ul(a.href),i=t.querySelector(wn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Ei.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,pt(i);return}i=t.ownerDocument||t,a=Wd(a),(n=It.get(n))&&Ec(a,n),i=i.createElement("link"),pt(i);var u=i;u._p=new Promise(function(o,c){u.onload=o,u.onerror=c}),wt(i,"link",a),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(l.count++,e=Ei.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function up(){if(tn===null)throw Error(w(475));var t=tn;return t.stylesheets&&t.count===0&&zo(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&zo(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ei(){if(this.count--,this.count===0){if(this.stylesheets)zo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zi=null;function zo(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zi=new Map,e.forEach(op,t),zi=null,Ei.call(t))}function op(t,e){if(!(e.state.loading&4)){var a=zi.get(t);if(a)var l=a.get(null);else{a=new Map,zi.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}n=e.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||l,i===l&&a.set(null,n),a.set(u,n),this.count++,l=Ei.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var en={$$typeof:me,Provider:null,Consumer:null,_currentValue:ia,_currentValue2:ia,_threadCount:0};function cp(t,e,a,l,n,i,u,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Id(t,e,a,l,n,i,u,o,c,f,y,m){return t=new cp(t,e,a,u,o,c,f,m),e=1,i===!0&&(e|=24),i=Yt(3,null,null,e),t.current=i,i.stateNode=t,e=Io(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},tc(i),t}function Pd(t){return t?(t=Ya,t):Ya}function t0(t,e,a,l,n,i){n=Pd(n),l.context===null?l.context=n:l.pendingContext=n,l=Ge(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=Qe(t,l,e),a!==null&&(Gt(a,t,e),Cl(a,t,e))}function ts(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Tc(t,e){ts(t,e),(t=t.alternate)&&ts(t,e)}function e0(t){if(t.tag===13){var e=sl(t,67108864);e!==null&&Gt(e,t,67108864),Tc(t,67108864)}}var Ti=!0;function rp(t,e,a,l){var n=_.T;_.T=null;var i=X.p;try{X.p=2,Ac(t,e,a,l)}finally{X.p=i,_.T=n}}function sp(t,e,a,l){var n=_.T;_.T=null;var i=X.p;try{X.p=8,Ac(t,e,a,l)}finally{X.p=i,_.T=n}}function Ac(t,e,a,l){if(Ti){var n=To(l);if(n===null)Au(t,e,l,Ai,a),es(t,l);else if(dp(n,t,e,a,l))l.stopPropagation();else if(es(t,l),e&4&&-1<fp.indexOf(t)){for(;n!==null;){var i=rl(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=aa(i.pendingLanes);if(u!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var c=1<<31-qt(u);o.entanglements[1]|=c,u&=~c}se(i),!(Q&6)&&(mi=oe()+500,vn(0))}}break;case 13:o=sl(i,2),o!==null&&Gt(o,i,2),Xi(),Tc(i,2)}if(i=To(l),i===null&&Au(t,e,l,Ai,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Au(t,e,l,null,a)}}function To(t){return t=Go(t),_c(t)}var Ai=null;function _c(t){if(Ai=null,t=ja(t),t!==null){var e=un(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Ts(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ai=t,null}function a0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W0()){case Os:return 2;case Ds:return 8;case ti:case F0:return 32;case Rs:return 268435456;default:return 32}default:return 32}}var Ao=!1,Ve=null,Ke=null,Je=null,an=new Map,ln=new Map,He=[],fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function es(t,e){switch(t){case"focusin":case"focusout":Ve=null;break;case"dragenter":case"dragleave":Ke=null;break;case"mouseover":case"mouseout":Je=null;break;case"pointerover":case"pointerout":an.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(e.pointerId)}}function zl(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=rl(e),e!==null&&e0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function dp(t,e,a,l,n){switch(e){case"focusin":return Ve=zl(Ve,t,e,a,l,n),!0;case"dragenter":return Ke=zl(Ke,t,e,a,l,n),!0;case"mouseover":return Je=zl(Je,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return an.set(i,zl(an.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,ln.set(i,zl(ln.get(i)||null,t,e,a,l,n)),!0}return!1}function l0(t){var e=ja(t.target);if(e!==null){var a=un(e);if(a!==null){if(e=a.tag,e===13){if(e=Ts(a),e!==null){t.blockedOn=e,ih(t.priority,function(){if(a.tag===13){var l=Xt();l=Yo(l);var n=sl(a,l);n!==null&&Gt(n,a,l),Tc(a,l)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $n(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=To(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Gu=l,a.target.dispatchEvent(l),Gu=null}else return e=rl(a),e!==null&&e0(e),t.blockedOn=a,!1;e.shift()}return!0}function as(t,e,a){$n(t)&&a.delete(e)}function hp(){Ao=!1,Ve!==null&&$n(Ve)&&(Ve=null),Ke!==null&&$n(Ke)&&(Ke=null),Je!==null&&$n(Je)&&(Je=null),an.forEach(as),ln.forEach(as)}function Nn(t,e){t.blockedOn===e&&(t.blockedOn=null,Ao||(Ao=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,hp)))}var Cn=null;function ls(t){Cn!==t&&(Cn=t,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,function(){Cn===t&&(Cn=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(_c(l||a)===null)continue;break}var i=rl(a);i!==null&&(t.splice(e,3),e-=3,no(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function nn(t){function e(c){return Nn(c,t)}Ve!==null&&Nn(Ve,t),Ke!==null&&Nn(Ke,t),Je!==null&&Nn(Je,t),an.forEach(e),ln.forEach(e);for(var a=0;a<He.length;a++){var l=He[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<He.length&&(a=He[0],a.blockedOn===null);)l0(a),a.blockedOn===null&&He.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],u=n[Ut]||null;if(typeof i=="function")u||ls(a);else if(u){var o=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Ut]||null)o=u.formAction;else if(_c(n)!==null)continue}else o=u.action;typeof o=="function"?a[l+1]=o:(a.splice(l,3),l-=3),ls(a)}}}function Mc(t){this._internalRoot=t}Li.prototype.render=Mc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));var a=e.current,l=Xt();t0(a,l,t,e,null,null)};Li.prototype.unmount=Mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t0(t.current,2,null,t,null,null),Xi(),e[cl]=null}};function Li(t){this._internalRoot=t}Li.prototype.unstable_scheduleHydration=function(t){if(t){var e=Hs();t={blockedOn:null,target:t,priority:e};for(var a=0;a<He.length&&e!==0&&e<He[a].priority;a++);He.splice(a,0,t),a===0&&l0(t)}};var ns=Es.version;if(ns!=="19.1.0")throw Error(w(527,ns,"19.1.0"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Q0(e),t=t!==null?As(t):null,t=t===null?null:t.stateNode,t};var gp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hn.isDisabled&&Hn.supportsFiber)try{on=Hn.inject(gp),Bt=Hn}catch{}}Oi.createRoot=function(t,e){if(!zs(t))throw Error(w(299));var a=!1,l="",n=If,i=Pf,u=td,o=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=Id(t,1,!1,null,null,a,l,n,i,u,o,null),t[cl]=e.current,Sc(t),new Mc(e)};Oi.hydrateRoot=function(t,e,a){if(!zs(t))throw Error(w(299));var l=!1,n="",i=If,u=Pf,o=td,c=null,f=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(c=a.unstable_transitionCallbacks),a.formState!==void 0&&(f=a.formState)),e=Id(t,1,!0,e,a??null,l,n,i,u,o,c,f),e.context=Pd(null),a=e.current,l=Xt(),l=Yo(l),n=Ge(l),n.callback=null,Qe(a,n,l),a=l,e.current.lanes=a,rn(e,a),se(e),t[cl]=e.current,Sc(t),new Li(e)};Oi.version="19.1.0";function n0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0)}catch(t){console.error(t)}}n0(),ms.exports=Oi;var pp=ms.exports;const mp=Oo(pp);var i0={},u0={},o0={exports:{}},yp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bp=yp,vp=bp;function c0(){}function r0(){}r0.resetWarningCache=c0;var wp=function(){function t(l,n,i,u,o,c){if(c!==vp){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r0,resetWarningCache:c0};return a.PropTypes=a,a};o0.exports=wp();var xp=o0.exports;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(R),a=n(Ss),l=n(xp);function n(g){return g&&g.__esModule?g:{default:g}}function i(g){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(S){return typeof S}:i=function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},i(g)}function u(g,b){if(!(g instanceof b))throw new TypeError("Cannot call a class as a function")}function o(g,b){for(var S=0;S<b.length;S++){var x=b[S];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(g,x.key,x)}}function c(g,b,S){return b&&o(g.prototype,b),g}function f(g){return function(){var b=p(g),S;if(s()){var x=p(this).constructor;S=Reflect.construct(b,arguments,x)}else S=b.apply(this,arguments);return y(this,S)}}function y(g,b){return b&&(i(b)==="object"||typeof b=="function")?b:m(g)}function m(g){if(g===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g}function s(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function p(g){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(S){return S.__proto__||Object.getPrototypeOf(S)},p(g)}function E(g,b){if(typeof b!="function"&&b!==null)throw new TypeError("Super expression must either be null or a function");g.prototype=Object.create(b&&b.prototype,{constructor:{value:g,writable:!0,configurable:!0}}),b&&z(g,b)}function z(g,b){return z=Object.setPrototypeOf||function(x,T){return x.__proto__=T,x},z(g,b)}function M(g,b,S){return b in g?Object.defineProperty(g,b,{value:S,enumerable:!0,configurable:!0,writable:!0}):g[b]=S,g}var d=typeof window<"u"&&window.ShadowRoot&&window.ShadowRoot.prototype.hasOwnProperty("adoptedStyleSheets")&&window.CSSStyleSheet&&window.CSSStyleSheet.prototype.hasOwnProperty("replace"),r=typeof window<"u"&&window.Element&&window.Element.prototype.hasOwnProperty("attachShadow"),h=function(g){E(S,g);var b=f(S);function S(x){var T;return u(this,S),T=b.call(this,x),M(m(T),"state",{initialized:!1}),T.placeholder=e.default.createRef(),T}return c(S,[{key:"componentDidMount",value:function(){var T=this.props,Y=T.delegatesFocus,O=T.mode,P=T.stylesheets;this.shadowRoot=this.placeholder.current.parentNode.attachShadow({delegatesFocus:Y,mode:O}),P&&(this.shadowRoot.adoptedStyleSheets=P),this.setState({initialized:!0})}},{key:"render",value:function(){return this.state.initialized?a.default.createPortal(this.props.children,this.shadowRoot):this.props.declarative?e.default.createElement("template",{ref:this.placeholder,shadowroot:this.props.mode},this.props.children):e.default.createElement("span",{ref:this.placeholder})}}]),S}(e.default.PureComponent);t.default=h,M(h,"constructableStylesheetsSupported",d),M(h,"constructibleStylesheetsSupported",d),M(h,"defaultProps",{declarative:!1,delegatesFocus:!1,mode:"open"}),M(h,"displayName","ReactShadowRoot"),M(h,"propTypes",{declarative:l.default.bool,delegatesFocus:l.default.bool,mode:l.default.oneOf(["open","closed"]),stylesheets:l.default.arrayOf(typeof window<"u"?l.default.instanceOf(window.CSSStyleSheet):l.default.any)}),M(h,"shadowRootSupported",r)})(u0);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a(u0);function a(n){return n&&n.__esModule?n:{default:n}}var l=e.default;t.default=l})(i0);const Sp=Oo(i0),Mu=`/* Директивы Tailwind CSS v3 */
*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}
::before,
::after {
  --tw-content: '';
}
/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/
html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}
/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}
/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}
/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}
/*
Remove the default font size and weight for headings.
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
a {
  color: inherit;
  text-decoration: inherit;
}
/*
Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}
/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}
/*
Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}
/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}
/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}
/*
Remove the inheritance of text transform in Edge and Firefox.
*/
button,
select {
  text-transform: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
/*
Use the modern Firefox focus style for all focusable elements.
*/
:-moz-focusring {
  outline: auto;
}
/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
:-moz-ui-invalid {
  box-shadow: none;
}
/*
Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}
/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/*
Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/*
Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}
/*
Removes the default spacing and border for appropriate elements.
*/
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}
/*
Prevent resizing textareas horizontally by default.
*/
textarea {
  resize: vertical;
}
/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
/*
Set the default cursor for buttons.
*/
button,
[role="button"] {
  cursor: pointer;
}
/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}
/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}
/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
img,
video {
  max-width: 100%;
  height: auto;
}
/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .\\!container {
    max-width: 640px !important;
  }
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .\\!container {
    max-width: 768px !important;
  }
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .\\!container {
    max-width: 1024px !important;
  }
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .\\!container {
    max-width: 1280px !important;
  }
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .\\!container {
    max-width: 1536px !important;
  }
  .container {
    max-width: 1536px;
  }
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.collapse {
  visibility: collapse;
}
.static {
  position: static;
}
.\\!fixed {
  position: fixed !important;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-1 {
  bottom: 0.25rem;
}
.bottom-20 {
  bottom: 5rem;
}
.bottom-6 {
  bottom: 1.5rem;
}
.bottom-7 {
  bottom: 1.75rem;
}
.left-0 {
  left: 0px;
}
.left-1 {
  left: 0.25rem;
}
.left-\\[2px\\] {
  left: 2px;
}
.right-0 {
  right: 0px;
}
.right-20 {
  right: 5rem;
}
.right-6 {
  right: 1.5rem;
}
.right-7 {
  right: 1.75rem;
}
.top-0 {
  top: 0px;
}
.top-7 {
  top: 1.75rem;
}
.top-\\[2px\\] {
  top: 2px;
}
.isolate {
  isolation: isolate;
}
.isolation-auto {
  isolation: auto;
}
.z-\\[10000\\] {
  z-index: 10000;
}
.z-\\[10001\\] {
  z-index: 10001;
}
.z-\\[10002\\] {
  z-index: 10002;
}
.z-\\[2147483647\\] {
  z-index: 2147483647;
}
.z-auto {
  z-index: auto;
}
.order-first {
  order: -9999;
}
.order-last {
  order: 9999;
}
.order-none {
  order: 0;
}
.col-auto {
  grid-column: auto;
}
.col-span-full {
  grid-column: 1 / -1;
}
.col-start-auto {
  grid-column-start: auto;
}
.col-end-auto {
  grid-column-end: auto;
}
.row-auto {
  grid-row: auto;
}
.row-span-full {
  grid-row: 1 / -1;
}
.row-start-auto {
  grid-row-start: auto;
}
.row-end-auto {
  grid-row-end: auto;
}
.float-start {
  float: inline-start;
}
.float-end {
  float: inline-end;
}
.float-right {
  float: right;
}
.float-left {
  float: left;
}
.float-none {
  float: none;
}
.clear-start {
  clear: inline-start;
}
.clear-end {
  clear: inline-end;
}
.clear-left {
  clear: left;
}
.clear-right {
  clear: right;
}
.clear-both {
  clear: both;
}
.clear-none {
  clear: none;
}
.m-0 {
  margin: 0px;
}
.m-auto {
  margin: auto;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.mb-auto {
  margin-bottom: auto;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-2\\.5 {
  margin-left: 0.625rem;
}
.ml-auto {
  margin-left: auto;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mr-2\\.5 {
  margin-right: 0.625rem;
}
.mr-auto {
  margin-right: auto;
}
.mt-0 {
  margin-top: 0px;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-1\\.5 {
  margin-top: 0.375rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-2\\.5 {
  margin-top: 0.625rem;
}
.mt-auto {
  margin-top: auto;
}
.box-border {
  box-sizing: border-box;
}
.box-content {
  box-sizing: content-box;
}
.line-clamp-none {
  overflow: visible;
  display: block;
  -webkit-box-orient: horizontal;
  -webkit-line-clamp: none;
}
.\\!block {
  display: block !important;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.inline-table {
  display: inline-table;
}
.table-caption {
  display: table-caption;
}
.table-cell {
  display: table-cell;
}
.table-column {
  display: table-column;
}
.table-column-group {
  display: table-column-group;
}
.table-footer-group {
  display: table-footer-group;
}
.table-header-group {
  display: table-header-group;
}
.table-row-group {
  display: table-row-group;
}
.table-row {
  display: table-row;
}
.flow-root {
  display: flow-root;
}
.grid {
  display: grid;
}
.inline-grid {
  display: inline-grid;
}
.contents {
  display: contents;
}
.list-item {
  display: list-item;
}
.hidden {
  display: none;
}
.aspect-auto {
  aspect-ratio: auto;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-0 {
  height: 0px;
}
.h-10 {
  height: 2.5rem;
}
.h-14 {
  height: 3.5rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 1.5rem;
}
.h-\\[18px\\] {
  height: 18px;
}
.h-\\[20px\\] {
  height: 20px;
}
.h-\\[30px\\] {
  height: 30px;
}
.h-\\[42px\\] {
  height: 42px;
}
.h-\\[60px\\] {
  height: 60px;
}
.h-\\[calc\\(100\\%-60px\\)\\] {
  height: calc(100% - 60px);
}
.h-auto {
  height: auto;
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-max {
  height: -moz-max-content;
  height: max-content;
}
.h-min {
  height: -moz-min-content;
  height: min-content;
}
.h-screen {
  height: 100vh;
}
.max-h-full {
  max-height: 100%;
}
.max-h-none {
  max-height: none;
}
.max-h-screen {
  max-height: 100vh;
}
.min-h-screen {
  min-height: 100vh;
}
.w-0 {
  width: 0px;
}
.w-1 {
  width: 0.25rem;
}
.w-10 {
  width: 2.5rem;
}
.w-14 {
  width: 3.5rem;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-96 {
  width: 24rem;
}
.w-\\[18px\\] {
  width: 18px;
}
.w-\\[30px\\] {
  width: 30px;
}
.w-\\[40px\\] {
  width: 40px;
}
.w-\\[42px\\] {
  width: 42px;
}
.w-auto {
  width: auto;
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-max {
  width: -moz-max-content;
  width: max-content;
}
.w-min {
  width: -moz-min-content;
  width: min-content;
}
.w-screen {
  width: 100vw;
}
.max-w-\\[85\\%\\] {
  max-width: 85%;
}
.max-w-\\[95\\%\\] {
  max-width: 95%;
}
.max-w-full {
  max-width: 100%;
}
.max-w-lg {
  max-width: 32rem;
}
.max-w-md {
  max-width: 28rem;
}
.max-w-none {
  max-width: none;
}
.flex-auto {
  flex: 1 1 auto;
}
.flex-initial {
  flex: 0 1 auto;
}
.flex-none {
  flex: none;
}
.flex-shrink {
  flex-shrink: 1;
}
.shrink {
  flex-shrink: 1;
}
.flex-grow {
  flex-grow: 1;
}
.grow {
  flex-grow: 1;
}
.basis-auto {
  flex-basis: auto;
}
.basis-full {
  flex-basis: 100%;
}
.table-auto {
  table-layout: auto;
}
.table-fixed {
  table-layout: fixed;
}
.caption-top {
  caption-side: top;
}
.caption-bottom {
  caption-side: bottom;
}
.border-collapse {
  border-collapse: collapse;
}
.border-separate {
  border-collapse: separate;
}
.origin-bottom {
  transform-origin: bottom;
}
.origin-bottom-left {
  transform-origin: bottom left;
}
.origin-bottom-right {
  transform-origin: bottom right;
}
.origin-center {
  transform-origin: center;
}
.origin-left {
  transform-origin: left;
}
.origin-right {
  transform-origin: right;
}
.origin-top {
  transform-origin: top;
}
.origin-top-left {
  transform-origin: top left;
}
.origin-top-right {
  transform-origin: top right;
}
.-translate-y-0 {
  --tw-translate-y: -0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-5 {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform-cpu {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform-gpu {
  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform-none {
  transform: none;
}
@keyframes fadeInMessage {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-\\[fadeInMessage_0\\.3s_ease-out\\] {
  animation: fadeInMessage 0.3s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
.animate-none {
  animation: none;
}
@keyframes pulse {
  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.cursor-pointer {
  cursor: pointer;
}
.touch-pinch-zoom {
  --tw-pinch-zoom: pinch-zoom;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}
.select-all {
  -webkit-user-select: all;
     -moz-user-select: all;
          user-select: all;
}
.resize-none {
  resize: none;
}
.resize-y {
  resize: vertical;
}
.resize-x {
  resize: horizontal;
}
.resize {
  resize: both;
}
.snap-none {
  scroll-snap-type: none;
}
.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}
.snap-proximity {
  --tw-scroll-snap-strictness: proximity;
}
.snap-start {
  scroll-snap-align: start;
}
.snap-end {
  scroll-snap-align: end;
}
.snap-center {
  scroll-snap-align: center;
}
.snap-align-none {
  scroll-snap-align: none;
}
.snap-normal {
  scroll-snap-stop: normal;
}
.snap-always {
  scroll-snap-stop: always;
}
.list-inside {
  list-style-position: inside;
}
.list-outside {
  list-style-position: outside;
}
.list-decimal {
  list-style-type: decimal;
}
.list-disc {
  list-style-type: disc;
}
.list-none {
  list-style-type: none;
}
.list-image-none {
  list-style-image: none;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.appearance-auto {
  -webkit-appearance: auto;
     -moz-appearance: auto;
          appearance: auto;
}
.columns-auto {
  -moz-columns: auto;
       columns: auto;
}
.auto-cols-auto {
  grid-auto-columns: auto;
}
.auto-cols-fr {
  grid-auto-columns: minmax(0, 1fr);
}
.auto-cols-max {
  grid-auto-columns: max-content;
}
.auto-cols-min {
  grid-auto-columns: min-content;
}
.grid-flow-row {
  grid-auto-flow: row;
}
.grid-flow-col {
  grid-auto-flow: column;
}
.grid-flow-dense {
  grid-auto-flow: dense;
}
.grid-flow-row-dense {
  grid-auto-flow: row dense;
}
.grid-flow-col-dense {
  grid-auto-flow: column dense;
}
.auto-rows-auto {
  grid-auto-rows: auto;
}
.auto-rows-fr {
  grid-auto-rows: minmax(0, 1fr);
}
.auto-rows-max {
  grid-auto-rows: max-content;
}
.auto-rows-min {
  grid-auto-rows: min-content;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid-cols-none {
  grid-template-columns: none;
}
.grid-cols-subgrid {
  grid-template-columns: subgrid;
}
.grid-rows-none {
  grid-template-rows: none;
}
.grid-rows-subgrid {
  grid-template-rows: subgrid;
}
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.place-content-center {
  place-content: center;
}
.place-content-start {
  place-content: start;
}
.place-content-end {
  place-content: end;
}
.place-content-between {
  place-content: space-between;
}
.place-content-around {
  place-content: space-around;
}
.place-content-evenly {
  place-content: space-evenly;
}
.place-content-baseline {
  place-content: baseline;
}
.place-content-stretch {
  place-content: stretch;
}
.place-items-start {
  place-items: start;
}
.place-items-end {
  place-items: end;
}
.place-items-center {
  place-items: center;
}
.place-items-baseline {
  place-items: baseline;
}
.place-items-stretch {
  place-items: stretch;
}
.content-normal {
  align-content: normal;
}
.content-center {
  align-content: center;
}
.content-start {
  align-content: flex-start;
}
.content-end {
  align-content: flex-end;
}
.content-between {
  align-content: space-between;
}
.content-around {
  align-content: space-around;
}
.content-evenly {
  align-content: space-evenly;
}
.content-baseline {
  align-content: baseline;
}
.content-stretch {
  align-content: stretch;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-baseline {
  align-items: baseline;
}
.items-stretch {
  align-items: stretch;
}
.justify-normal {
  justify-content: normal;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-evenly {
  justify-content: space-evenly;
}
.justify-stretch {
  justify-content: stretch;
}
.justify-items-start {
  justify-items: start;
}
.justify-items-end {
  justify-items: end;
}
.justify-items-center {
  justify-items: center;
}
.justify-items-stretch {
  justify-items: stretch;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-2\\.5 {
  gap: 0.625rem;
}
.gap-3 {
  gap: 0.75rem;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 1;
}
.space-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 1;
}
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-y-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 1;
}
.divide-x-reverse > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 1;
}
.place-self-auto {
  place-self: auto;
}
.place-self-start {
  place-self: start;
}
.place-self-end {
  place-self: end;
}
.place-self-center {
  place-self: center;
}
.place-self-stretch {
  place-self: stretch;
}
.self-auto {
  align-self: auto;
}
.self-start {
  align-self: flex-start;
}
.self-end {
  align-self: flex-end;
}
.self-center {
  align-self: center;
}
.self-stretch {
  align-self: stretch;
}
.self-baseline {
  align-self: baseline;
}
.justify-self-auto {
  justify-self: auto;
}
.justify-self-start {
  justify-self: start;
}
.justify-self-end {
  justify-self: end;
}
.justify-self-center {
  justify-self: center;
}
.justify-self-stretch {
  justify-self: stretch;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.scroll-auto {
  scroll-behavior: auto;
}
.scroll-smooth {
  scroll-behavior: smooth;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.overflow-ellipsis {
  text-overflow: ellipsis;
}
.text-ellipsis {
  text-overflow: ellipsis;
}
.text-clip {
  text-overflow: clip;
}
.hyphens-none {
  -webkit-hyphens: none;
          hyphens: none;
}
.hyphens-manual {
  -webkit-hyphens: manual;
          hyphens: manual;
}
.hyphens-auto {
  -webkit-hyphens: auto;
          hyphens: auto;
}
.whitespace-normal {
  white-space: normal;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre {
  white-space: pre;
}
.whitespace-pre-line {
  white-space: pre-line;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.whitespace-break-spaces {
  white-space: break-spaces;
}
.text-wrap {
  text-wrap: wrap;
}
.text-nowrap {
  text-wrap: nowrap;
}
.text-balance {
  text-wrap: balance;
}
.text-pretty {
  text-wrap: pretty;
}
.break-normal {
  overflow-wrap: normal;
  word-break: normal;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.break-keep {
  word-break: keep-all;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-3xl {
  border-radius: 1.5rem;
}
.rounded-\\[12px_12px_0_12px\\] {
  border-radius: 12px 12px 0 12px;
}
.rounded-\\[24px\\] {
  border-radius: 24px;
}
.rounded-\\[32px\\] {
  border-radius: 32px;
}
.rounded-\\[50px\\] {
  border-radius: 50px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-none {
  border-radius: 0px;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.border {
  border-width: 1px;
}
.border-0 {
  border-width: 0px;
}
.border-2 {
  border-width: 2px;
}
.border-4 {
  border-width: 4px;
}
.border-8 {
  border-width: 8px;
}
.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}
.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-e {
  border-inline-end-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-r {
  border-right-width: 1px;
}
.border-s {
  border-inline-start-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-solid {
  border-style: solid;
}
.border-dashed {
  border-style: dashed;
}
.border-dotted {
  border-style: dotted;
}
.border-double {
  border-style: double;
}
.border-hidden {
  border-style: hidden;
}
.border-none {
  border-style: none;
}
.border-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.05\\)\\] {
  border-color: rgba(0,0,0,0.05);
}
.border-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.1\\)\\] {
  border-color: rgba(0,0,0,0.1);
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}
.border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity, 1));
}
.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity, 1));
}
.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1));
}
.border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity, 1));
}
.border-t-gray-800 {
  --tw-border-opacity: 1;
  border-top-color: rgb(31 41 55 / var(--tw-border-opacity, 1));
}
.bg-\\[hsla\\(0\\2c 0\\%\\2c 91\\%\\2c 0\\.5\\)\\] {
  background-color: hsla(0,0%,91%,0.5);
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));
}
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}
.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity, 1));
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}
.bg-none {
  background-image: none;
}
.decoration-slice {
  -webkit-box-decoration-break: slice;
          box-decoration-break: slice;
}
.decoration-clone {
  -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
}
.box-decoration-slice {
  -webkit-box-decoration-break: slice;
          box-decoration-break: slice;
}
.box-decoration-clone {
  -webkit-box-decoration-break: clone;
          box-decoration-break: clone;
}
.bg-auto {
  background-size: auto;
}
.bg-contain {
  background-size: contain;
}
.bg-cover {
  background-size: cover;
}
.bg-fixed {
  background-attachment: fixed;
}
.bg-local {
  background-attachment: local;
}
.bg-scroll {
  background-attachment: scroll;
}
.bg-clip-border {
  background-clip: border-box;
}
.bg-clip-padding {
  background-clip: padding-box;
}
.bg-clip-content {
  background-clip: content-box;
}
.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}
.bg-bottom {
  background-position: bottom;
}
.bg-center {
  background-position: center;
}
.bg-left {
  background-position: left;
}
.bg-left-bottom {
  background-position: left bottom;
}
.bg-left-top {
  background-position: left top;
}
.bg-right {
  background-position: right;
}
.bg-right-bottom {
  background-position: right bottom;
}
.bg-right-top {
  background-position: right top;
}
.bg-top {
  background-position: top;
}
.bg-repeat {
  background-repeat: repeat;
}
.bg-no-repeat {
  background-repeat: no-repeat;
}
.bg-repeat-x {
  background-repeat: repeat-x;
}
.bg-repeat-y {
  background-repeat: repeat-y;
}
.bg-repeat-round {
  background-repeat: round;
}
.bg-repeat-space {
  background-repeat: space;
}
.bg-origin-border {
  background-origin: border-box;
}
.bg-origin-padding {
  background-origin: padding-box;
}
.bg-origin-content {
  background-origin: content-box;
}
.fill-none {
  fill: none;
}
.stroke-current {
  stroke: currentColor;
}
.stroke-none {
  stroke: none;
}
.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.object-fill {
  -o-object-fit: fill;
     object-fit: fill;
}
.object-none {
  -o-object-fit: none;
     object-fit: none;
}
.object-scale-down {
  -o-object-fit: scale-down;
     object-fit: scale-down;
}
.object-bottom {
  -o-object-position: bottom;
     object-position: bottom;
}
.object-center {
  -o-object-position: center;
     object-position: center;
}
.object-left {
  -o-object-position: left;
     object-position: left;
}
.object-left-bottom {
  -o-object-position: left bottom;
     object-position: left bottom;
}
.object-left-top {
  -o-object-position: left top;
     object-position: left top;
}
.object-right {
  -o-object-position: right;
     object-position: right;
}
.object-right-bottom {
  -o-object-position: right bottom;
     object-position: right bottom;
}
.object-right-top {
  -o-object-position: right top;
     object-position: right top;
}
.object-top {
  -o-object-position: top;
     object-position: top;
}
.p-0 {
  padding: 0px;
}
.p-10 {
  padding: 2.5rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-2\\.5 {
  padding: 0.625rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-5 {
  padding: 1.25rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-7 {
  padding: 1.75rem;
}
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pt-1 {
  padding-top: 0.25rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.text-justify {
  text-align: justify;
}
.text-start {
  text-align: start;
}
.text-end {
  text-align: end;
}
.align-baseline {
  vertical-align: baseline;
}
.align-top {
  vertical-align: top;
}
.align-middle {
  vertical-align: middle;
}
.align-bottom {
  vertical-align: bottom;
}
.align-text-top {
  vertical-align: text-top;
}
.align-text-bottom {
  vertical-align: text-bottom;
}
.align-sub {
  vertical-align: sub;
}
.align-super {
  vertical-align: super;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.normal-case {
  text-transform: none;
}
.italic {
  font-style: italic;
}
.not-italic {
  font-style: normal;
}
.normal-nums {
  font-variant-numeric: normal;
}
.ordinal {
  --tw-ordinal: ordinal;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.slashed-zero {
  --tw-slashed-zero: slashed-zero;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.lining-nums {
  --tw-numeric-figure: lining-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.oldstyle-nums {
  --tw-numeric-figure: oldstyle-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.proportional-nums {
  --tw-numeric-spacing: proportional-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.diagonal-fractions {
  --tw-numeric-fraction: diagonal-fractions;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.stacked-fractions {
  --tw-numeric-fraction: stacked-fractions;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
}
.leading-6 {
  line-height: 1.5rem;
}
.leading-none {
  line-height: 1;
}
.leading-relaxed {
  line-height: 1.625;
}
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity, 1));
}
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.underline {
  text-decoration-line: underline;
}
.overline {
  text-decoration-line: overline;
}
.line-through {
  text-decoration-line: line-through;
}
.no-underline {
  text-decoration-line: none;
}
.decoration-solid {
  text-decoration-style: solid;
}
.decoration-double {
  text-decoration-style: double;
}
.decoration-dotted {
  text-decoration-style: dotted;
}
.decoration-dashed {
  text-decoration-style: dashed;
}
.decoration-wavy {
  text-decoration-style: wavy;
}
.decoration-auto {
  text-decoration-thickness: auto;
}
.decoration-from-font {
  text-decoration-thickness: from-font;
}
.underline-offset-auto {
  text-underline-offset: auto;
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
.accent-auto {
  accent-color: auto;
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-80 {
  opacity: 0.8;
}
.mix-blend-plus-darker {
  mix-blend-mode: plus-darker;
}
.mix-blend-plus-lighter {
  mix-blend-mode: plus-lighter;
}
.shadow-\\[0_4px_20px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.08\\)\\2c 0_0_0_1px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.03\\)\\] {
  --tw-shadow: 0 4px 20px rgba(0,0,0,0.08),0 0 0 1px rgba(0,0,0,0.03);
  --tw-shadow-colored: 0 4px 20px var(--tw-shadow-color), 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.outline-dashed {
  outline-style: dashed;
}
.outline-dotted {
  outline-style: dotted;
}
.outline-double {
  outline-style: double;
}
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-inset {
  --tw-ring-inset: inset;
}
.blur-none {
  --tw-blur:  ;
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.brightness-0 {
  --tw-brightness: brightness(0);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow-none {
  --tw-drop-shadow: drop-shadow(0 0 #0000);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.sepia {
  --tw-sepia: sepia(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-none {
  --tw-backdrop-blur:  ;
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-grayscale {
  --tw-backdrop-grayscale: grayscale(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-invert {
  --tw-backdrop-invert: invert(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-sepia {
  --tw-backdrop-sepia: sepia(100%);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-linear {
  transition-timing-function: linear;
}
.will-change-auto {
  will-change: auto;
}
.will-change-contents {
  will-change: contents;
}
.will-change-scroll {
  will-change: scroll-position;
}
.will-change-transform {
  will-change: transform;
}
.contain-none {
  contain: none;
}
.contain-content {
  contain: content;
}
.contain-strict {
  contain: strict;
}
.contain-size {
  --tw-contain-size: size;
  contain: var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style);
}
.contain-inline-size {
  --tw-contain-size: inline-size;
  contain: var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style);
}
.contain-layout {
  --tw-contain-layout: layout;
  contain: var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style);
}
.contain-paint {
  --tw-contain-paint: paint;
  contain: var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style);
}
.contain-style {
  --tw-contain-style: style;
  contain: var(--tw-contain-size) var(--tw-contain-layout) var(--tw-contain-paint) var(--tw-contain-style);
}
.content-none {
  --tw-content: none;
  content: var(--tw-content);
}
.forced-color-adjust-auto {
  forced-color-adjust: auto;
}
.forced-color-adjust-none {
  forced-color-adjust: none;
}
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Добавляем остальные стили здесь */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeInMessage {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Индикатор загрузки (точки) */
.typing-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #aaa;
  margin: 0 3px;
  opacity: 0.6;
  animation: dotPulse 1.5s infinite ease-in-out;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.5s;
}

.dot:nth-child(3) {
  animation-delay: 1s;
}

@keyframes dotPulse {
  0%,
  100% {
    transform: scale(0.7);
    opacity: 0.6;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Пользовательский скроллбар */
.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari и Chrome */
}

/* Стили для форматирования сообщений */
.cognify-markdown-content code {
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.9em;
}

/* Анимации */
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
.checked\\:border-gray-900:checked {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity, 1));
}
.checked\\:bg-gray-900:checked {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));
}
.checked\\:bg-\\[url\\(\\'data\\:image\\/svg\\+xml\\2c \\%3Csvg\\%20xmlns\\%3D\\%27http\\%3A\\%2F\\%2Fwww\\.w3\\.org\\%2F2000\\%2Fsvg\\%27\\%20viewBox\\%3D\\%270\\%200\\%2024\\%2024\\%27\\%20fill\\%3D\\%27white\\%27\\%20width\\%3D\\%2718px\\%27\\%20height\\%3D\\%2718px\\%27\\%3E\\%3Cpath\\%20d\\%3D\\%27M0\\%200h24v24H0z\\%27\\%20fill\\%3D\\%27none\\%27\\%2F\\%3E\\%3Cpath\\%20d\\%3D\\%27M9\\%2016\\.17L4\\.83\\%2012l-1\\.42\\%201\\.41L9\\%2019\\%2021\\%207l-1\\.41-1\\.41z\\%27\\%20stroke\\%3D\\%27white\\%27\\%20stroke-width\\%3D\\%271\\%27\\%2F\\%3E\\%3C\\%2Fsvg\\%3E\\'\\)\\]:checked {
  background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2024%2024%27%20fill%3D%27white%27%20width%3D%2718px%27%20height%3D%2718px%27%3E%3Cpath%20d%3D%27M0%200h24v24H0z%27%20fill%3D%27none%27%2F%3E%3Cpath%20d%3D%27M9%2016.17L4.83%2012l-1.42%201.41L9%2019%2021%207l-1.41-1.41z%27%20stroke%3D%27white%27%20stroke-width%3D%271%27%2F%3E%3C%2Fsvg%3E');
}
.checked\\:bg-\\[length\\:18px_18px\\]:checked {
  background-size: 18px 18px;
}
.checked\\:bg-center:checked {
  background-position: center;
}
.hover\\:-translate-y-0\\.5:hover {
  --tw-translate-y: -0.125rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:bg-\\[\\#00b8dd\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(0 184 221 / var(--tw-bg-opacity, 1));
}
.hover\\:bg-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.04\\)\\]:hover {
  background-color: rgba(0,0,0,0.04);
}
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}
.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}
.hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
}
.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
}
.hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(185 28 28 / var(--tw-bg-opacity, 1));
}
.hover\\:underline:hover {
  text-decoration-line: underline;
}
.hover\\:opacity-100:hover {
  opacity: 1;
}
.hover\\:shadow-xl:hover {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.focus\\:border-2:focus {
  border-width: 2px;
}
.focus\\:border-gray-800:focus {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));
}
.focus\\:shadow-none:focus {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.active\\:translate-y-0:active {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.active\\:scale-95:active {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.disabled\\:bg-gray-50:disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}
.disabled\\:text-gray-500:disabled {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
`;async function Ep(){try{const t=chrome.runtime.getURL("tailwind.css");console.log("URL файла стилей:",t),console.log("Начинаем загрузку стилей...");const e=await fetch(t);if(console.log("Статус ответа:",e.status,e.statusText),!e.ok)return console.warn(`Не удалось загрузить внешние стили: ${e.statusText}, используем встроенные`),Mu;const a=await e.text();return console.log("Стили загружены из файла, размер:",a.length,"байт"),a}catch(t){return console.error("Ошибка при загрузке стилей Tailwind:",t),console.log("Используем предкомпилированные стили, размер:",Mu.length,"байт"),Mu}}const _i=({text:t,icon:e,bgColor:a="#202123",onClick:l,className:n="",variant:i="primary"})=>{const u=R.useRef(null);R.useEffect(()=>{u.current&&(i==="primary"?u.current.style.background="#202123":u.current.style.background="#f1f3f4")},[i]);const o=E=>{E.stopPropagation(),E.preventDefault();const z=E.currentTarget;z.style.transform="scale(0.95)",setTimeout(()=>{z.style.transform="scale(1)"},150),l&&l(E)},c=E=>{i==="primary"?E.currentTarget.style.background="#353740":E.currentTarget.style.background="#e8eaed"},f=E=>{u.current&&(i==="primary"?E.currentTarget.style.background="#202123":E.currentTarget.style.background="#f1f3f4")},y=E=>{E.stopPropagation(),E.preventDefault()},p=`m-0 py-2 px-3 font-medium font-sans border-none rounded-[50px] cursor-pointer transition-all duration-200 text-sm outline-none flex items-center justify-center h-[42px] shadow-none whitespace-nowrap w-auto ${{primary:"bg-gray-900 text-white",secondary:"bg-gray-100 text-gray-800"}[i]} ${n}`;return v.jsxs("button",{ref:u,className:p,onClick:o,onMouseOver:c,onMouseOut:f,onMouseDown:y,onMouseUp:y,children:[e&&v.jsx("span",{className:`mr-2.5 flex items-center ${i==="primary"?"text-white":"text-gray-800"}`,children:e}),v.jsx("span",{className:i==="primary"?"text-white":"text-gray-800",children:t})]})},is=({label:t,isChecked:e,onChange:a,disabled:l=!1})=>{const n=o=>{o.stopPropagation(),o.preventDefault(),l||a(o.target.checked)},i=o=>{o.stopPropagation(),o.preventDefault(),l||a(!e)},u=o=>{o.stopPropagation(),o.preventDefault()};return v.jsxs("div",{className:"flex items-center gap-3 py-2 px-3 bg-transparent rounded-[24px] w-full",onClick:u,onMouseDown:u,onMouseUp:u,children:[v.jsxs("label",{className:`relative inline-flex items-center w-[40px] h-[20px] ${l?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,onClick:u,onMouseDown:u,onMouseUp:u,children:[v.jsx("input",{type:"checkbox",className:"sr-only",checked:e,onChange:n,onClick:u,disabled:l}),v.jsx("span",{className:`absolute inset-0 transition-colors duration-200 ease-in-out rounded-full ${l?"bg-gray-200":e?"bg-gray-900":"bg-gray-100 border border-gray-300"}`,onClick:i,onMouseDown:u,onMouseUp:u,children:v.jsx("span",{className:`absolute top-[2px] left-[2px] w-4 h-4 transition-transform duration-200 ease-in-out rounded-full ${e?"bg-white translate-x-5":"bg-white"}`,onClick:u,onMouseDown:u,onMouseUp:u})})]}),v.jsx("span",{className:`text-sm transition-colors duration-200 ${l?"text-gray-400 cursor-not-allowed":e?"font-medium text-gray-900 cursor-pointer":"text-gray-600 cursor-pointer"}`,onClick:i,onMouseDown:u,onMouseUp:u,children:t})]})};function Oc(){console.log("[Cognify] Попытка получить ресурсы из контейнера");const t=document.getElementById("cognify-extension-root");if(!t)return console.error("[Cognify] Контейнер с id cognify-extension-root не найден"),null;console.log("[Cognify] Контейнер найден, извлечение data-атрибутов"),console.log("[Cognify] Все data-атрибуты контейнера:",t.dataset);const e={iconUrl:t.dataset.resourcesIcon||"",explainIconUrl:t.dataset.resourcesExplainIcon||"",translateIconUrl:t.dataset.resourcesTranslateIcon||"",sendIconUrl:t.dataset.resourcesSendIcon||"",chatIconUrl:t.dataset.resourcesChatIcon||""};return Object.values(e).every(l=>l.length>0)?(console.log("[Cognify] Все ресурсы успешно получены:",e),e):(console.error("[Cognify] Не все ресурсы найдены в data-атрибутах:",e),console.error("[Cognify] Проверка отдельных атрибутов:"),console.error("- iconUrl:",t.dataset.resourcesIcon),console.error("- explainIconUrl:",t.dataset.resourcesExplainIcon),console.error("- translateIconUrl:",t.dataset.resourcesTranslateIcon),console.error("- sendIconUrl:",t.dataset.resourcesSendIcon),console.error("- chatIconUrl:",t.dataset.resourcesChatIcon),console.log("[Cognify] Возвращаем ресурсы с пустыми значениями для отладки"),e)}const Dc=typeof chrome<"u"&&chrome.storage!==void 0&&chrome.storage.local!==void 0,Zl={},s0="chat_history",f0="settings";async function Rc(t,e){if(console.log(`[Storage] Saving ${t} to storage`),Dc)return new Promise(a=>{chrome.storage.local.set({[t]:e},()=>{a()})});console.warn("[Storage] chrome.storage not available, using local storage"),Zl[t]=e;try{localStorage.setItem(`cognify_${t}`,JSON.stringify(e))}catch(a){console.error("[Storage] Error using localStorage:",a)}return Promise.resolve()}async function jc(t){if(console.log(`[Storage] Reading ${t} from storage`),Dc)return new Promise(e=>{chrome.storage.local.get([t],a=>{e(a[t])})});if(console.warn("[Storage] chrome.storage not available, using local storage"),t in Zl)return Promise.resolve(Zl[t]);try{const e=localStorage.getItem(`cognify_${t}`);if(e){const a=JSON.parse(e);return Zl[t]=a,Promise.resolve(a)}}catch(e){console.error("[Storage] Error using localStorage:",e)}return Promise.resolve(void 0)}async function zp(t){if(console.log(`[Storage] Removing ${t} from storage`),Dc)return new Promise(e=>{chrome.storage.local.remove(t,()=>{e()})});console.warn("[Storage] chrome.storage not available, using local storage"),delete Zl[t];try{localStorage.removeItem(`cognify_${t}`)}catch(e){console.error("[Storage] Error using localStorage:",e)}return Promise.resolve()}async function d0(){return await jc(s0)||[]}async function Wn(t){await Rc(s0,t)}async function Tp(t){const a=(await d0()).filter(l=>l.id!==t);await Wn(a)}async function us(){return await jc(f0)||{useApi:!1,useWideContext:!1}}async function Ou(t){await Rc(f0,t)}const Uc="openai_api_key";async function h0(){return jc(Uc)}async function Ap(t){return Rc(Uc,t)}async function _p(){return zp(Uc)}async function _o(){return!!await h0()}async function Du(t){const e=await h0();if(!e)throw new Error("API key not found");try{const a=t.map(i=>i.context?{role:i.role,content:`${i.content}

Context:
${i.context}`}:{role:i.role,content:i.content}),l=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:"gpt-4o",messages:a,temperature:.7,max_tokens:1e3})});if(!l.ok)throw l.status===401?(await _p(),new Error("API key is invalid")):new Error(`Request failed with status: ${l.status}`);return(await l.json()).choices[0].message.content}catch(a){throw console.error("Error sending chat request:",a),a}}const Mp=({iconPath:t})=>v.jsx("img",{src:t,alt:"Explain",className:"w-[18px] h-[18px] filter brightness-0 invert"}),Op=({iconPath:t})=>v.jsx("img",{src:t,alt:"Translate",className:"w-[18px] h-[18px] filter brightness-0 invert"}),Dp=({selectedText:t,position:e,onExplain:a,onTranslate:l,onClose:n,onRequestApiKey:i})=>{const[u,o]=R.useState(!1),[c,f]=R.useState(!1),[y,m]=R.useState(null),s=R.useRef(null),[p,E]=R.useState({top:0,left:0});R.useEffect(()=>{(async()=>{const b=await us();o(b.useApi),f(b.useWideContext)})()},[]),R.useEffect(()=>{const g=Oc();g?(m(g),console.log("[Cognify React] ButtonsPanel: ресурсы получены",g)):console.error("[Cognify React] ButtonsPanel: не удалось получить ресурсы"),(async()=>{if(await _o()){const T=await us();o(T.useApi),f(T.useWideContext)}})();const S=x=>{(Y=>{for(;Y;){if(Y.id==="cognify-extension-root")return!0;Y=Y.parentElement}return!1})(x.target)||(console.log("[Cognify React] ButtonsPanel: клик вне корневого элемента расширения, закрываем панель"),n())};return document.addEventListener("mousedown",S),()=>{document.removeEventListener("mousedown",S)}},[n]),R.useEffect(()=>{console.log("[Cognify React] ButtonsPanel: отрисовка с позицией",e),E({top:e.y,left:e.x}),setTimeout(()=>{if(s.current){const g=s.current.getBoundingClientRect();console.log("[Cognify React] ButtonsPanel: реальная позиция",g);const b=window.getComputedStyle(s.current);console.log("[Cognify React] ButtonsPanel: вычисленные стили",{display:b.display,position:b.position,visibility:b.visibility,zIndex:b.zIndex,opacity:b.opacity})}},100)},[e]);const z=()=>{console.log("[Cognify React] ButtonsPanel: нажата кнопка Explain"),a(t,u,c)},M=()=>{console.log("[Cognify React] ButtonsPanel: нажата кнопка Translate"),l(t,u,c)},d=async g=>{const b=document.activeElement;if(g&&!await _o()&&i){i();return}g?await Ou({useApi:!0,useWideContext:c}):(f(!1),await Ou({useApi:!1,useWideContext:!1})),o(g),b&&b instanceof HTMLElement&&b.focus()},r=async g=>{u&&(f(g),await Ou({useApi:u,useWideContext:g}))},h=g=>{g.stopPropagation(),g.preventDefault()};return y?(console.log("[Cognify React] ButtonsPanel: финальная отрисовка с позицией",p),v.jsxs("div",{ref:s,className:"fixed bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] p-5 z-[10001] w-auto flex flex-col gap-2",style:{position:"fixed",transform:`translate(${p.left}px, ${p.top}px)`,transformOrigin:"top left",pointerEvents:"auto",willChange:"transform"},onClick:h,onMouseDown:h,onMouseUp:h,children:[v.jsx(_i,{text:"Explain",icon:v.jsx(Mp,{iconPath:y.explainIconUrl}),bgColor:"linear-gradient(135deg, #10a37f 0%, #0A8A6B 100%)",onClick:z}),v.jsx(_i,{text:"Translate",icon:v.jsx(Op,{iconPath:y.translateIconUrl}),bgColor:"linear-gradient(135deg, #444BEA 0%, #3339cc 100%)",onClick:M}),v.jsxs("div",{className:"mt-1.5 pt-1",children:[v.jsx(is,{label:"Full Page Context",isChecked:c,onChange:r,disabled:!u}),v.jsx(is,{label:"API Mode",isChecked:u,onChange:d})]})]})):(console.log("[Cognify React] ButtonsPanel: ресурсы не загружены, не отображаем панель"),null)},Rp=({onClick:t,icon:e})=>v.jsx("div",{className:"fixed bottom-7 right-7 w-14 h-14 rounded-full bg-gray-900 shadow-lg cursor-pointer z-[10000] flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl active:scale-95",onClick:t,style:{pointerEvents:"auto"},children:v.jsx("img",{src:e,alt:"Chat",className:"w-6 h-6 filter brightness-0 invert"})}),jp=({message:t,onContextClick:e})=>{const a=n=>{let i=n;return i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"),i=i.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),i=i.replace(/\*(.*?)\*/g,"<em>$1</em>"),i=i.replace(/`([^`]+)`/g,"<code>$1</code>"),i=i.replace(/\n/g,"<br>"),i},l=n=>{if(t.role==="assistant"&&n.startsWith("Error:"))return v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"text-red-600 text-left",children:n}),v.jsx("button",{className:"mt-2.5 py-1.5 px-3 bg-gray-800 text-white font-medium border-none rounded-md cursor-pointer text-sm transition-all duration-200 ease-in-out block hover:bg-gray-700",children:"Retry"})]});const i=a(n);return t.context&&t.role==="user"?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"message-content cognify-markdown-content",dangerouslySetInnerHTML:{__html:i}}),v.jsx("span",{className:"inline-flex items-center bg-black text-white rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#00b8dd] hover:-translate-y-0.5 active:translate-y-0",onClick:()=>e&&t.context?e(t.context):null,children:"Context"})]}):v.jsx("div",{className:"cognify-markdown-content",dangerouslySetInnerHTML:{__html:i}})};return v.jsx("div",{className:`p-3 my-2 rounded-xl max-w-[85%] text-sm leading-6 break-words animate-[fadeInMessage_0.3s_ease-out] 
      ${t.role==="user"?"bg-[hsla(0,0%,91%,0.5)] text-gray-900 self-end ml-auto text-left shadow-sm rounded-[12px_12px_0_12px]":"bg-transparent text-gray-900 self-start text-left mr-auto max-w-[95%] w-auto shadow-none border-0 pl-3 rounded-none"}`,children:l(t.content)})},g0=({title:t,onClose:e,onCloseWindow:a,children:l})=>v.jsxs("div",{className:"absolute inset-0 bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] z-[10002] overflow-hidden flex flex-col animate-fadeIn",children:[v.jsxs("div",{className:"flex justify-between items-center p-5 px-6 border-b border-[rgba(0,0,0,0.1)] h-[60px] box-border",children:[v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsx("h3",{className:"m-0 text-base font-semibold text-gray-900",children:t}),v.jsx("button",{className:"ml-2.5 bg-transparent border-none text-gray-900 cursor-pointer text-lg leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]",onClick:e,title:"Back to chat",children:v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M19 12H5M5 12L12 19M5 12L12 5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),v.jsx("button",{className:"bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]",onClick:a||e,title:"Close window",children:"×"})]}),v.jsx("div",{className:"flex-grow overflow-auto",children:l})]}),Up=({context:t,onClose:e,onCloseWindow:a})=>t?v.jsx(g0,{title:"Контекст сообщения",onClose:e,onCloseWindow:a,children:v.jsx("div",{className:"px-4 mt-0 overflow-y-auto flex-grow border-none scrollbar-hide",children:v.jsx("pre",{className:"whitespace-pre-wrap font-mono text-sm m-0 leading-6 text-left text-gray-600 py-2.5 px-0 rounded-none overflow-y-auto overflow-x-hidden break-words max-w-full scrollbar-hide",children:t})})}):null,Np=({chats:t,onChatSelect:e,onChatDelete:a,onClose:l,onCloseWindow:n,onNewChat:i})=>{const[u,o]=R.useState(null),c=m=>{const s=new Date(m);return s.toLocaleDateString()+" "+s.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})},f=(m,s)=>{m.stopPropagation(),u===s?(a(s),o(null)):o(s)},y=()=>{l(),i&&i()};return v.jsx(g0,{title:"История чатов",onClose:l,onCloseWindow:n,children:v.jsxs("div",{className:"flex flex-col h-full",children:[v.jsx("div",{className:"overflow-y-auto py-2.5 flex-grow scrollbar-hide",children:t.length===0?v.jsx("div",{className:"text-gray-600 text-center p-7 text-sm",children:"У вас пока нет сохраненных чатов"}):t.map(m=>v.jsxs("div",{className:"flex justify-between items-center p-3 px-5 border-b border-[rgba(0,0,0,0.05)] cursor-pointer transition-colors duration-200 hover:bg-gray-50",onClick:()=>e(m.id),children:[v.jsxs("div",{className:"flex-grow overflow-hidden",children:[v.jsx("div",{className:"text-[14px] text-gray-900 mb-1 whitespace-nowrap overflow-hidden text-ellipsis",children:m.title}),v.jsx("div",{className:"text-xs text-gray-600",children:c(m.createdAt)})]}),v.jsx("button",{className:`bg-transparent border border-gray-300 py-1.5 px-2.5 rounded-md text-xs cursor-pointer transition-all duration-200 hover:bg-gray-100 ${u===m.id?"bg-red-600 text-white border-red-600 hover:bg-red-700":"text-gray-600"}`,onClick:s=>f(s,m.id),children:u===m.id?"Подтвердить":"Удалить"})]},m.id))}),v.jsx("div",{className:"p-4 border-t border-[rgba(0,0,0,0.05)] bg-white sticky bottom-0 left-0 right-0",children:v.jsxs("button",{className:"w-full py-3 bg-gray-900 text-white font-medium rounded-xl cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-95",onClick:y,children:[v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"stroke-current",children:v.jsx("path",{d:"M12 4V20M4 12H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),v.jsx("span",{children:"Новый чат"})]})})]})})},Cp=({title:t,messages:e,onSendMessage:a,onClose:l,onShowHistory:n,isLoading:i=!1,error:u=null,showHistory:o=!1,chats:c=[],onChatSelect:f,onChatDelete:y,onCloseHistory:m,onNewChat:s=()=>{}})=>{const[p,E]=R.useState(""),[z,M]=R.useState(null),d=R.useRef(null),r=R.useRef(null),[h,g]=R.useState(null),[b,S]=R.useState(!1),[x,T]=R.useState(null);R.useEffect(()=>{const it=Oc();it?(M(it),console.log("[Cognify React] ChatWindow: ресурсы получены")):console.error("[Cognify React] ChatWindow: не удалось получить ресурсы")},[]),R.useEffect(()=>{if(d.current&&!o&&!b){const it=d.current;it.scrollTop=it.scrollHeight}},[e,o,b]),R.useEffect(()=>{r.current&&!o&&!b&&r.current.focus()},[o,b]);const Y=it=>{it.preventDefault(),p.trim()&&!i&&(a(p),E(""))},O=it=>{T(it),S(!0)},P=()=>{S(!1),T(null)},zt=()=>{s(),E(""),r.current&&r.current.focus()};return z?v.jsxs("div",{className:"chat-window bg-white shadow-xl rounded-[32px] overflow-hidden flex flex-col",style:{position:"fixed",bottom:"20px",right:"20px",width:"350px",height:"calc(100vh - 40px)",maxHeight:"calc(100vh - 40px)",zIndex:2147483647,pointerEvents:"auto"},children:[o&&v.jsx(Np,{chats:c,onChatSelect:f||(()=>{}),onChatDelete:y||(()=>{}),onClose:m||(()=>{}),onCloseWindow:l,onNewChat:zt}),b&&x&&v.jsx(Up,{context:x,onClose:P,onCloseWindow:l}),!o&&!b&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"flex justify-between items-center p-5 px-6 bg-white text-gray-900 font-semibold text-base border-b border-[rgba(0,0,0,0.1)] h-[60px] box-border",children:[v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsx("img",{src:z.iconUrl,alt:t,className:"w-5 h-5 filter brightness-0"}),v.jsx("span",{children:t}),v.jsx("button",{className:"ml-2.5 bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]",onClick:zt,title:"Новый чат",children:v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M12 4V20M4 12H20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),v.jsx("button",{className:"bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]",onClick:n,title:"История чатов",children:v.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),v.jsx("button",{className:"bg-transparent border-none text-gray-900 cursor-pointer text-2xl leading-none opacity-80 transition-opacity duration-200 h-[30px] w-[30px] flex items-center justify-center rounded-md hover:opacity-100 hover:bg-[rgba(0,0,0,0.04)]",onClick:l,children:"×"})]}),v.jsxs("div",{className:"flex flex-col h-[calc(100%-60px)] max-h-full flex-grow",children:[v.jsxs("div",{ref:d,className:"flex-grow overflow-y-auto py-2.5 px-5 flex flex-col scrollbar-hide",children:[e.length===0?v.jsx("div",{className:"text-gray-500 text-center my-auto text-sm",children:"Задайте ваш вопрос или используйте функцию перевода/объяснения при выделении текста"}):e.map((it,wa)=>v.jsx(jp,{message:it,onContextClick:O},wa)),i&&v.jsxs("div",{className:"typing-indicator self-start bg-gray-100 p-3 my-2 rounded-xl",children:[v.jsx("span",{className:"dot"}),v.jsx("span",{className:"dot"}),v.jsx("span",{className:"dot"})]}),u&&v.jsx("div",{className:"bg-red-100 text-red-700 p-3 my-2 rounded-xl text-sm",children:u})]}),v.jsxs("form",{className:"flex p-4 border-t border-[rgba(0,0,0,0.1)] bg-white box-border items-center",onSubmit:Y,children:[v.jsx("input",{type:"text",className:"flex-grow border border-gray-200 rounded-3xl px-4 py-2.5 text-sm outline-none font-sans transition-all duration-200 ease-in-out h-[42px] box-border text-left focus:border-gray-800 focus:border-2 focus:shadow-none disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",placeholder:i?"Waiting for response...":"Type your question...",value:p,onChange:it=>E(it.target.value),ref:r,disabled:i}),v.jsx("button",{type:"submit",className:`ml-2 p-0 bg-gray-800 text-white font-medium border-none rounded-full cursor-pointer font-sans text-sm transition-all duration-200 ease-in-out h-[42px] w-[42px] flex items-center justify-center hover:bg-gray-700 active:scale-95 ${i?"bg-gray-200 cursor-not-allowed hover:bg-gray-200":""}`,disabled:i||!p.trim(),children:v.jsx("img",{src:z.sendIconUrl,alt:"Send",width:"20",height:"20",className:"filter brightness-0 invert"})})]})]})]})]}):v.jsx("div",{className:"chat-window",style:{padding:"20px",textAlign:"center"},children:"Loading chat interface..."})},Hp=({onSubmit:t,onCancel:e,isVisible:a})=>{const[l,n]=R.useState(""),[i,u]=R.useState(!1);if(!a)return null;const o=c=>{if(c.preventDefault(),!l.trim()||!l.startsWith("sk-")){u(!0);return}t(l.trim())};return v.jsx("div",{className:"fixed bottom-6 right-6 z-[2147483647]",style:{pointerEvents:"auto"},children:v.jsxs("div",{className:"bg-white rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] p-6 w-96",children:[v.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Введите API ключ OpenAI"}),v.jsxs("p",{className:"mb-4 text-gray-600 text-sm",children:["Для работы с API OpenAI необходим API ключ. Вы можете получить его на сайте"," ",v.jsx("a",{href:"https://platform.openai.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"platform.openai.com"})]}),v.jsxs("form",{onSubmit:o,children:[v.jsxs("div",{className:"mb-4",children:[v.jsx("input",{type:"password",value:l,onChange:c=>{n(c.target.value),u(!1)},placeholder:"sk-...",className:`w-full p-2.5 border rounded-xl ${i?"border-red-500":"border-gray-300"} text-sm outline-none font-sans transition-all duration-200`}),i&&v.jsx("p",{className:"text-red-500 text-xs mt-1",children:'Введите корректный API ключ, начинающийся с "sk-"'})]}),v.jsxs("div",{className:"flex justify-center space-x-2",children:[v.jsx(_i,{text:"Сохранить",onClick:c=>o(c),variant:"primary"}),v.jsx(_i,{text:"Отмена",onClick:e,variant:"secondary"})]})]})]})})},Mo={WORDS_BEFORE:50,WORDS_AFTER:50,MAX_PAGE_TEXT_LENGTH:1e5};function kp(t,e=Mo.WORDS_BEFORE,a=Mo.WORDS_AFTER){try{if(!t||t.rangeCount===0)return null;const l=t.getRangeAt(0),n=l.toString().trim();if(!n)return null;let i=l.commonAncestorContainer;i.nodeType===Node.TEXT_NODE&&i.parentElement&&(i=i.parentElement);const u=i.textContent||"",o=u.indexOf(n);if(o===-1)return n;const c=u.substring(0,o),f=u.substring(o+n.length),y=c.split(/\s+/).filter(Boolean),m=y.length>e?y.slice(-e).join(" "):c,s=f.split(/\s+/).filter(Boolean),p=s.length>a?s.slice(0,a).join(" "):f;return`${m} ${n} ${p}`.trim()}catch(l){return console.error("Ошибка при получении ограниченного контекста:",l),null}}const Yp=(t=Mo.MAX_PAGE_TEXT_LENGTH)=>{try{const e=document.body.innerText||"";return e.length<=t?e:e.substring(0,t)+"... (текст страницы обрезан)"}catch(e){return console.error("Ошибка при получении текста страницы:",e),"Не удалось получить текст страницы."}},Bp=()=>{const[t,e]=R.useState(!0),[a,l]=R.useState(!1),[n,i]=R.useState(!1),[u,o]=R.useState(!1),[c,f]=R.useState(!1),[y,m]=R.useState(""),[s,p]=R.useState(""),[E,z]=R.useState({x:0,y:0}),[M,d]=R.useState(null),[r,h]=R.useState([]),[g,b]=R.useState(!1),[S,x]=R.useState(null),[T,Y]=R.useState(!1),[O,P]=R.useState([]),zt=Oc(),it=()=>{const D=window.getSelection();if(D&&D.toString().trim().length>0){let K=!1;if(D.rangeCount>0){let xt=D.getRangeAt(0).commonAncestorContainer;for(;xt&&xt!==document.body;){if(xt.nodeType===Node.ELEMENT_NODE){const Tt=xt;if(Tt.id==="cognify-extension-root"||Tt.closest("#cognify-extension-root")){K=!0;break}}xt=xt.parentNode}}if(K)return;const at=D.toString().trim();if(p(at),D.rangeCount>0){const xt=D.getRangeAt(0).getBoundingClientRect();requestAnimationFrame(()=>{z({x:xt.left,y:xt.bottom+10}),a||l(!0)})}}else l(!1)},wa=()=>{if(a){const D=window.getSelection();if(D&&D.rangeCount>0){const at=D.getRangeAt(0).getBoundingClientRect();requestAnimationFrame(()=>{z({x:at.left,y:at.bottom+10})})}}};R.useEffect(()=>(Ep().then(D=>{m(D),console.log("Стили Tailwind успешно загружены")}).catch(D=>{console.error("Ошибка при загрузке стилей Tailwind:",D)}),_o().then(D=>{f(D)}),setTimeout(()=>{e(!1)},500),document.addEventListener("mouseup",it),document.addEventListener("selectionchange",it),window.addEventListener("scroll",wa),()=>{document.removeEventListener("mouseup",it),document.removeEventListener("selectionchange",it),window.removeEventListener("scroll",wa)}),[a,M]),R.useEffect(()=>{(async()=>{const K=await d0();P(K)})()},[]);const gl=()=>{c?i(!0):o(!0)},A=()=>{i(!1)},N=()=>{document.body.classList.add("modal-open"),o(!0)},j=()=>{document.body.classList.remove("modal-open"),o(!1)},tt=async D=>{try{await Ap(D),f(!0),document.body.classList.remove("modal-open"),o(!1),i(!0)}catch(K){console.error("Ошибка при сохранении API ключа:",K),x("Не удалось сохранить API ключ")}},ut=(D,K)=>D?K?Yp():kp(D):null,xa=async(D,K,at)=>{if(console.log("Объяснение: ",D,K,at),!K){const At=encodeURIComponent(`Объясни: "${D}"`);window.open(`https://chat.openai.com/chat?q=${At}`,"_blank");return}if(!c){o(!0);return}const ta=window.getSelection(),xt=ut(ta,at),Tt={id:Date.now().toString(),title:`Объяснение: ${D.slice(0,50)}${D.length>50?"...":""}`,createdAt:Date.now(),messages:[]},Pt={role:"user",content:`Объясни: "${D}"`,context:xt};Tt.messages.push(Pt),i(!0),h([Pt]),x(null),b(!0);try{const ml={role:"assistant",content:await Du([Pt])};Tt.messages.push(ml),await Wn([...O,Tt]),P(Vi=>[...Vi,Tt]),h([Pt,ml])}catch(At){console.error("Ошибка при получении ответа:",At),At.message==="API key not found"||At.message==="API key is invalid"?(o(!0),x("Необходим валидный API ключ")):x(`Ошибка: ${At.message}`)}finally{b(!1)}},Sa=async(D,K,at)=>{if(console.log("Перевод: ",D,K,at),!K){const At=encodeURIComponent(`Переведи: "${D}"`);window.open(`https://chat.openai.com/chat?q=${At}`,"_blank");return}if(!c){o(!0);return}const ta=window.getSelection(),xt=ut(ta,at),Tt={id:Date.now().toString(),title:`Перевод: ${D.slice(0,50)}${D.length>50?"...":""}`,createdAt:Date.now(),messages:[]},Pt={role:"user",content:`Переведи: "${D}"`,context:xt};Tt.messages.push(Pt),i(!0),h([Pt]),x(null),b(!0);try{const ml={role:"assistant",content:await Du([Pt])};Tt.messages.push(ml),await Wn([...O,Tt]),P(Vi=>[...Vi,Tt]),h([Pt,ml])}catch(At){console.error("Ошибка при получении ответа:",At),At.message==="API key not found"||At.message==="API key is invalid"?(o(!0),x("Необходим валидный API ключ")):x(`Ошибка: ${At.message}`)}finally{b(!1)}},pl=()=>{Y(!0)},fe=()=>{Y(!1)},Ea=async D=>{const K=O.find(at=>at.id===D);K&&(h(K.messages),Y(!1))},m0=async D=>{try{await Tp(D),P(K=>K.filter(at=>at.id!==D))}catch(K){console.error("Ошибка при удалении чата:",K),x("Не удалось удалить чат")}},y0=async D=>{if(!D.trim()||g)return;const K={role:"user",content:D};h(at=>[...at,K]),b(!0),x(null);try{const ta={role:"assistant",content:await Du([...r,K])},xt=[...r,K,ta];h(xt);const Tt={id:Date.now().toString(),title:D.slice(0,50)+(D.length>50?"...":""),createdAt:Date.now(),messages:xt};await Wn([...O,Tt]),P(Pt=>[...Pt,Tt])}catch(at){console.error("Ошибка при отправке сообщения:",at),at.message==="API key not found"||at.message==="API key is invalid"?(o(!0),x("Необходим валидный API ключ")):x(`Ошибка: ${at.message}`)}finally{b(!1)}},b0=()=>{l(!1)},v0=()=>{h([]),x(null)};return v.jsx("div",{className:"extension-app",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:2147483646,pointerEvents:"none"},children:v.jsxs(Sp,{stylesheetAttributes:{pointerEvents:"none"},children:[v.jsxs("style",{children:[y,`@keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes fadeInMessage {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
          }`]}),v.jsxs("div",{style:{fontFamily:"system-ui, -apple-system, sans-serif"},children:[t&&v.jsx("div",{style:{position:"fixed",bottom:"20px",right:"20px",padding:"10px 20px",background:"rgba(0, 0, 0, 0.7)",color:"white",borderRadius:"8px",zIndex:2147483647,animation:"fadeIn 0.3s ease-in-out",pointerEvents:"auto"},children:"Загрузка..."}),a&&s&&zt&&v.jsx(Dp,{selectedText:s,position:E,onExplain:xa,onTranslate:Sa,onClose:b0,onRequestApiKey:N}),zt&&v.jsx(Rp,{onClick:gl,icon:zt.iconUrl}),n&&v.jsx(Cp,{title:"Cognify Chat",messages:r,onSendMessage:y0,onClose:A,onShowHistory:pl,isLoading:g,error:S,showHistory:T,chats:O,onChatSelect:Ea,onChatDelete:m0,onCloseHistory:fe,onNewChat:v0}),v.jsx(Hp,{isVisible:u,onSubmit:tt,onCancel:j})]})]})})},qp=()=>{R.useEffect(()=>{console.log("[Cognify App] App компонент смонтирован"),window.cognifyDebug={appLoaded:!0,timestamp:new Date().toISOString()}},[]);const t=window.location.href.includes("chrome-extension://");return console.log("[Cognify App] isStandalone:",t),v.jsx("div",{className:"flex flex-col items-center justify-start h-screen p-10 text-center bg-transparent",children:t?v.jsxs(v.Fragment,{children:[v.jsx("h1",{className:"text-2xl mb-4 text-gray-900",children:"Cognify Extension"}),v.jsx("p",{className:"text-base mb-8 text-gray-600",children:"Расширение для объяснения и перевода текста"}),v.jsxs("div",{className:"w-full max-w-lg bg-white rounded-xl p-5 text-left shadow-md",children:[v.jsx("h2",{className:"mt-0 mb-5 text-xl text-gray-900",children:"Настройки"}),v.jsxs("div",{className:"flex flex-col gap-2.5",children:[v.jsx("label",{htmlFor:"api-key",className:"text-gray-800 font-medium",children:"API ключ OpenAI:"}),v.jsx("input",{type:"password",id:"api-key",placeholder:"Введите ваш API ключ",className:"p-2.5 border border-gray-300 rounded-md text-sm"}),v.jsx("button",{className:"mt-2.5 p-2.5 bg-gray-900 text-white border-none rounded-md font-medium cursor-pointer transition-colors duration-200 hover:bg-gray-700",children:"Сохранить"})]})]})]}):v.jsx(Bp,{})})},p0=()=>{const t=document.getElementById("cognify-extension-root");t?mp.createRoot(t).render(v.jsx(k0.StrictMode,{children:v.jsx(qp,{})})):setTimeout(p0,100)};p0();
//# sourceMappingURL=bundle.js.map
