(self.webpackChunkproyecto_fetchdolar_v2_frontend=self.webpackChunkproyecto_fetchdolar_v2_frontend||[]).push([[225],{76450:(t,n,e)=>{"use strict";e.d(n,{Z:()=>r});var o=e(35466);const r=function({children:t,in:n,mountOnEnter:e,unmountOnExit:r}){const i=(0,o.useRef)(n);return(0,o.useEffect)((()=>{n&&(i.current=!0)}),[n]),n?t:r||!i.current&&e?null:t}},28245:(t,n,e)=>{"use strict";e.d(n,{W:()=>p,Z:()=>f});var o=e(35466),r=e(59586),i=e(92988),s=e(76450),a=e(33823);const u=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],c=["activeKey","getControlledId","getControllerId"],l=["as"];function d(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}function p(t){let{active:n,eventKey:e,mountOnEnter:s,transition:a,unmountOnExit:l,role:p="tabpanel",onEnter:E,onEntering:f,onEntered:m,onExit:x,onExiting:h,onExited:v}=t,b=d(t,u);const y=(0,o.useContext)(r.Z);if(!y)return[Object.assign({},b,{role:p}),{eventKey:e,isActive:n,mountOnEnter:s,transition:a,unmountOnExit:l,onEnter:E,onEntering:f,onEntered:m,onExit:x,onExiting:h,onExited:v}];const{activeKey:O,getControlledId:g,getControllerId:C}=y,w=d(y,c),T=(0,i.h)(e);return[Object.assign({},b,{role:p,id:g(e),"aria-labelledby":C(e)}),{eventKey:e,isActive:null==n&&null!=T?(0,i.h)(O)===T:n,transition:a||w.transition,mountOnEnter:null!=s?s:w.mountOnEnter,unmountOnExit:null!=l?l:w.unmountOnExit,onEnter:E,onEntering:f,onEntered:m,onExit:x,onExiting:h,onExited:v}]}const E=o.forwardRef(((t,n)=>{let{as:e="div"}=t,o=d(t,l);const[u,{isActive:c,onEnter:E,onEntering:f,onEntered:m,onExit:x,onExiting:h,onExited:v,mountOnEnter:b,unmountOnExit:y,transition:O=s.Z}]=p(o);return(0,a.jsx)(r.Z.Provider,{value:null,children:(0,a.jsx)(i.Z.Provider,{value:null,children:(0,a.jsx)(O,{in:c,onEnter:E,onEntering:f,onEntered:m,onExit:x,onExiting:h,onExited:v,mountOnEnter:b,unmountOnExit:y,children:(0,a.jsx)(e,Object.assign({},u,{ref:n,hidden:!c,"aria-hidden":!c}))})})})}));E.displayName="TabPanel";const f=E},2102:(t,n,e)=>{"use strict";e.d(n,{Z:()=>E});var o=e(35466),r=e(29344);const i={prefix:String(Math.round(1e10*Math.random())),current:0},s=o.createContext(i);let a=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);var u=e(59586),c=e(92988),l=e(28245),d=e(33823);const p=t=>{const{id:n,generateChildId:e,onSelect:l,activeKey:p,defaultActiveKey:E,transition:f,mountOnEnter:m,unmountOnExit:x,children:h}=t,[v,b]=(0,r.$c)(p,E,l),y=function(t){let n=(0,o.useContext)(s);return n!==i||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,o.useMemo)((()=>t||`react-aria${n.prefix}-${++n.current}`),[t])}(n),O=(0,o.useMemo)((()=>e||((t,n)=>y?`${y}-${n}-${t}`:null)),[y,e]),g=(0,o.useMemo)((()=>({onSelect:b,activeKey:v,transition:f,mountOnEnter:m||!1,unmountOnExit:x||!1,getControlledId:t=>O(t,"tabpane"),getControllerId:t=>O(t,"tab")})),[b,v,f,m,x,O]);return(0,d.jsx)(u.Z.Provider,{value:g,children:(0,d.jsx)(c.Z.Provider,{value:b||null,children:h})})};p.Panel=l.Z;const E=p},23433:(t,n,e)=>{"use strict";var o=e(6642);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,n,e,r,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:r};return e.PropTypes=e,e}},3074:(t,n,e)=>{t.exports=e(23433)()},6642:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24929:(t,n,e)=>{"use strict";e.d(n,{Z:()=>K});var o=e(92703),r=e.n(o),i=e(35466),s=e(97958);function a(t,n){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},a(t,n)}var u=e(46116);const c=i.createContext(null);var l="undefined"!=typeof window&&"function"==typeof window.requestAnimationFrame?window.requestAnimationFrame:function(t){return setTimeout(t,1)},d="unmounted",p="exited",E="entering",f="entered",m="exiting",x=function(t){var n,e;function o(n,e){var o;o=t.call(this,n,e)||this;var r,i=e&&!e.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?i?(r=p,o.appearStatus=E):r=f:r=n.unmountOnExit||n.mountOnEnter?d:p,o.state={status:r},o.nextCallback=null,o}e=t,(n=o).prototype=Object.create(e.prototype),n.prototype.constructor=n,a(n,e),o.getDerivedStateFromProps=function(t,n){return t.in&&n.status===d?{status:p}:null};var r=o.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==E&&e!==f&&(n=E):e!==E&&e!==f||(n=m)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var t,n,e,o=this.props.timeout;return t=n=e=o,null!=o&&"number"!=typeof o&&(t=o.exit,n=o.enter,e=void 0!==o.appear?o.appear:n),{exit:t,enter:n,appear:e}},r.updateStatus=function(t,n){var e,o=this;void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===E?this.props.unmountOnExit||this.props.mountOnEnter?(e=function(){return o.performEnter(t)},l((function(){return l(e)}))):this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:d})},r.performEnter=function(t){var n=this,e=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[u.findDOMNode(this),o],i=r[0],s=r[1],a=this.getTimeouts(),c=o?a.appear:a.enter;t||e?(this.props.onEnter(i,s),this.safeSetState({status:E},(function(){n.props.onEntering(i,s),n.onTransitionEnd(c,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(i,s)}))}))}))):this.safeSetState({status:f},(function(){n.props.onEntered(i)}))},r.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),o=this.props.nodeRef?void 0:u.findDOMNode(this);n?(this.props.onExit(o),this.safeSetState({status:m},(function(){t.props.onExiting(o),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(o)}))},r.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},r.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(o){e&&(e=!1,n.nextCallback=null,t(o))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},r.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(e&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],i=r[0],s=r[1];this.props.addEndListener(i,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},r.render=function(){var t=this.state.status;if(t===d)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,s.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(c.Provider,{value:null},"function"==typeof e?e(t,o):i.cloneElement(i.Children.only(e),o))},o}(i.Component);function h(){}x.contextType=c,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},x.UNMOUNTED=d,x.EXITED=p,x.ENTERING=E,x.ENTERED=f,x.EXITING=m;const v=x;var b=/([A-Z])/g,y=/^ms-/;function O(t){return function(t){return t.replace(b,"-$1").toLowerCase()}(t).replace(y,"-ms-")}var g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const C=function(t,n){var e="",o="";if("string"==typeof n)return t.style.getPropertyValue(O(n))||function(t,n){return function(t){var n=function(t){return t&&t.ownerDocument||document}(t);return n&&n.defaultView||window}(t).getComputedStyle(t,void 0)}(t).getPropertyValue(O(n));Object.keys(n).forEach((function(r){var i=n[r];i||0===i?function(t){return!(!t||!g.test(t))}(r)?o+=r+"("+i+") ":e+=O(r)+": "+i+";":t.style.removeProperty(O(r))})),o&&(e+="transform: "+o+";"),t.style.cssText+=";"+e},w=!("undefined"==typeof window||!window.document||!window.document.createElement);var T=!1,Z=!1;try{var k={get passive(){return T=!0},get once(){return Z=T=!0}};w&&(window.addEventListener("test",k,k),window.removeEventListener("test",k,!0))}catch(t){}const S=function(t,n,e,o){return function(t,n,e,o){if(o&&"boolean"!=typeof o&&!Z){var r=o.once,i=o.capture,s=e;!Z&&r&&(s=e.__once||function t(o){this.removeEventListener(n,t,i),e.call(this,o)},e.__once=s),t.addEventListener(n,s,T?o:i)}t.addEventListener(n,e,o)}(t,n,e,o),function(){!function(t,n,e,o){var r=o&&"boolean"!=typeof o?o.capture:o;t.removeEventListener(n,e,r),e.__once&&t.removeEventListener(n,e.__once,r)}(t,n,e,o)}};function j(t,n,e,o){var r,i;null==e&&(i=-1===(r=C(t,"transitionDuration")||"").indexOf("ms")?1e3:1,e=parseFloat(r)*i||0);var s=function(t,n,e){void 0===e&&(e=5);var o=!1,r=setTimeout((function(){o||function(t,n,e,o){if(void 0===e&&(e=!1),void 0===o&&(o=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent("transitionend",e,o),t.dispatchEvent(r)}}(t,0,!0)}),n+e),i=S(t,"transitionend",(function(){o=!0}),{once:!0});return function(){clearTimeout(r),i()}}(t,e,o),a=S(t,"transitionend",n);return function(){s(),a()}}function N(t,n){const e=C(t,n)||"",o=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*o}function P(t,n){const e=N(t,"transitionDuration"),o=N(t,"transitionDelay"),r=j(t,(e=>{e.target===t&&(r(),n(e))}),e+o)}var _=e(68712),R=e(33823);const L=i.forwardRef((({onEnter:t,onEntering:n,onEntered:e,onExit:o,onExiting:r,onExited:s,addEndListener:a,children:c,childRef:l,...d},p)=>{const E=(0,i.useRef)(null),f=(0,_.Z)(E,l),m=t=>{var n;f((n=t)&&"setState"in n?u.findDOMNode(n):null!=n?n:null)},x=t=>n=>{t&&E.current&&t(E.current,n)},h=(0,i.useCallback)(x(t),[t]),b=(0,i.useCallback)(x(n),[n]),y=(0,i.useCallback)(x(e),[e]),O=(0,i.useCallback)(x(o),[o]),g=(0,i.useCallback)(x(r),[r]),C=(0,i.useCallback)(x(s),[s]),w=(0,i.useCallback)(x(a),[a]);return(0,R.jsx)(v,{ref:p,...d,onEnter:h,onEntered:y,onEntering:b,onExit:O,onExited:C,onExiting:g,addEndListener:w,nodeRef:E,children:"function"==typeof c?(t,n)=>c(t,{...n,ref:m}):i.cloneElement(c,{ref:m})})})),D={[E]:"show",[f]:"show"},I=i.forwardRef((({className:t,children:n,transitionClasses:e={},...o},s)=>{const a=(0,i.useCallback)(((t,n)=>{!function(t){t.offsetHeight}(t),null==o.onEnter||o.onEnter(t,n)}),[o]);return(0,R.jsx)(L,{ref:s,addEndListener:P,...o,onEnter:a,childRef:n.ref,children:(o,s)=>i.cloneElement(n,{...s,className:r()("fade",t,n.props.className,D[o],e[o])})})}));I.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},I.displayName="Fade";const K=I},60696:(t,n,e)=>{"use strict";e.d(n,{Z:()=>f});var o=e(3074),r=e.n(o),i=(e(35466),e(2102)),s=e(94502),a=e(33823);const u=({transition:t,...n})=>(0,a.jsx)(i.Z,{...n,transition:(0,s.Z)(t)});u.displayName="TabContainer";const c=u;var l=e(59695),d=e(48347);const p={eventKey:r().oneOfType([r().string,r().number]),title:r().node.isRequired,disabled:r().bool,tabClassName:r().string,tabAttrs:r().object},E=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};E.propTypes=p;const f=Object.assign(E,{Container:c,Content:l.Z,Pane:d.Z})},59695:(t,n,e)=>{"use strict";e.d(n,{Z:()=>o});const o=(0,e(99149).Z)("tab-content")},48347:(t,n,e)=>{"use strict";e.d(n,{Z:()=>f});var o=e(92703),r=e.n(o),i=e(35466),s=e(92988),a=e(59586),u=e(28245),c=e(30119),l=e(24929),d=e(94502),p=e(33823);const E=i.forwardRef((({bsPrefix:t,transition:n,...e},o)=>{const[{className:i,as:E="div",...f},{isActive:m,onEnter:x,onEntering:h,onEntered:v,onExit:b,onExiting:y,onExited:O,mountOnEnter:g,unmountOnExit:C,transition:w=l.Z}]=(0,u.W)({...e,transition:(0,d.Z)(n)}),T=(0,c.vE)(t,"tab-pane");return(0,p.jsx)(a.Z.Provider,{value:null,children:(0,p.jsx)(s.Z.Provider,{value:null,children:(0,p.jsx)(w,{in:m,onEnter:x,onEntering:h,onEntered:v,onExit:b,onExiting:y,onExited:O,mountOnEnter:g,unmountOnExit:C,children:(0,p.jsx)(E,{...f,ref:o,className:r()(i,T,m&&"active")})})})})}));E.displayName="TabPane";const f=E},56719:(t,n,e)=>{"use strict";e.d(n,{Z:()=>h});var o=e(35466),r=e(29344),i=e(2102),s=e(53685),a=e(30783),u=e(85507),c=e(59695),l=e(48347);function d(t,n){let e=0;return o.Children.map(t,(t=>o.isValidElement(t)?n(t,e++):t))}var p=e(94502),E=e(33823);function f(t){let n;return function(t,e){o.Children.forEach(t,(t=>{o.isValidElement(t)&&(t=>{null==n&&(n=t.props.eventKey)})(t)}))}(t),n}function m(t){const{title:n,eventKey:e,disabled:o,tabClassName:r,tabAttrs:i,id:s}=t.props;return null==n?null:(0,E.jsx)(u.Z,{as:"li",role:"presentation",children:(0,E.jsx)(a.Z,{as:"button",type:"button",eventKey:e,disabled:o,id:s,className:r,...i,children:n})})}const x=t=>{const{id:n,onSelect:e,transition:o,mountOnEnter:a,unmountOnExit:u,children:x,activeKey:h=f(x),...v}=(0,r.Ch)(t,{activeKey:"onSelect"});return(0,E.jsxs)(i.Z,{id:n,activeKey:h,onSelect:e,transition:(0,p.Z)(o),mountOnEnter:a,unmountOnExit:u,children:[(0,E.jsx)(s.Z,{...v,role:"tablist",as:"ul",children:d(x,m)}),(0,E.jsx)(c.Z,{children:d(x,(t=>{const n={...t.props};return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,E.jsx)(l.Z,{...n})}))})]})};x.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},x.displayName="Tabs";const h=x},94502:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var o=e(76450),r=e(24929);function i(t){return"boolean"==typeof t?t?r.Z:o.Z:t}}}]);