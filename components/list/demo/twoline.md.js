webpackJsonp([68],{3:function(n,a,t){"use strict";t(7),t(6);var s=Math.floor(window.devicePixelRatio||1);s>=2&&document.querySelector("html").classList.add("pixel-ratio-"+s)},6:function(n,a){},7:function(n,a){},22:function(n,a){"use strict";function t(n,a){var t={},s={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?t[e]=n[e]:s[e]=n[e]}),[t,s]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=t,n.exports=a["default"]},27:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0});var r=t(1),i=e(r),k=t(46),f=s(k),d=t(44),m=s(d),g=t(45),v=s(g),b=t(47),y=s(b),h=t(2),w=s(h),O=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.children,e=a.className,p=a.style,c=(0,w["default"])((n={},o(n,t,!0),o(n,e,e),n));return i.createElement("div",{className:c,style:p},s)},a}(i.Component);O.defaultProps={prefixCls:"am-list"},O.Header=f["default"],O.Body=m["default"],O.Footer=v["default"],O.Item=y["default"],a["default"]=O,n.exports=a["default"]},37:function(n,a,t){"use strict";t(3),t(55)},44:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.children,e=a.className,p=a.style,c=(0,f["default"])((n={},o(n,t+"-body",!0),o(n,e,e),n));return i.createElement("div",{className:c,style:p},s)},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},45:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.children,e=a.className,p=a.style,c=a.onClick,l=(0,f["default"])((n={},o(n,t+"-footer",!0),o(n,e,e),n));return i.createElement("div",{className:l,style:p,onClick:c},s)},a}(i.Component);a["default"]=d,d.propTypes={prefixCls:r.PropTypes.string},d.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},46:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.children,e=a.className,p=a.style,c=a.onClick,l=(0,f["default"])((n={},o(n,t+"-header",!0),o(n,e,e),n));return i.createElement("div",{className:l,style:p,onClick:c},s)},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},47:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=t(1),i=e(r),k=t(2),f=s(k),d=function(n){function a(t){c(this,a);var s=l(this,n.call(this,t));return s.onClick=function(n){s.props.onClick&&s.props.onClick(n)},s.onTouchStart=function(){s.props.onClick&&s.setState({hover:!0})},s.onTouchEnd=function(){s.props.onClick&&s.setState({hover:!1})},s.state={hover:!1},s}return u(a,n),a.prototype.render=function(){var n,a,t=this.props,s=t.prefixCls,e=t.thumb,p=t.arrow,c=t.error,l=t.children,u=t.extra,r=t.className,k=t.align,d=t.style,m=this.state.hover,g=void 0,v=void 0,b=(0,f["default"])((n={},o(n,s+"-item",!0),o(n,s+"-item-error",c),o(n,s+"-item-top","top"===k),o(n,s+"-item-middle","middle"===k),o(n,s+"-item-bottom","bottom"===k),o(n,s+"-item-hover",m),o(n,r,r),n)),y=(0,f["default"])((a={},o(a,s+"-arrow-horizontal","horizontal"===p),o(a,s+"-arrow-vertical","down"===p||"up"===p),o(a,s+"-arrow-vertical-up","up"===p),a));return e&&(g="string"==typeof e?i.createElement("div",{className:s+"-thumb"},i.createElement("img",{src:e})):i.createElement("div",{className:s+"-thumb"},e)),v=""!==p?"empty"===p?i.createElement("div",{className:s+"-arrow"}):i.createElement("div",{className:s+"-arrow"},i.createElement("span",{className:y})):null,i.createElement("div",{className:b,onClick:this.onClick,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,style:d},g,i.createElement("div",{className:s+"-line"},""!==l?i.createElement("div",{className:s+"-content"},l):null,""!==u?i.createElement("div",{className:s+"-extra"},u):null,v))},a}(i.Component);a["default"]=d,d.defaultProps={prefixCls:"am-list",thumb:"",arrow:"",children:"",extra:"",error:!1,align:"middle"},n.exports=a["default"]},54:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function p(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}function r(n){return"string"==typeof n}function i(n){return r(n.type)&&j(n.props.children)?m.cloneElement(n,{},n.props.children.split("").join(" ")):r(n)?(j(n)&&(n=n.split("").join(" ")),m.createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var k=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},f=function(){function n(n,a){var t=[],s=!0,e=!1,p=void 0;try{for(var o,c=n[Symbol.iterator]();!(s=(o=c.next()).done)&&(t.push(o.value),!a||t.length!==a);s=!0);}catch(l){e=!0,p=l}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw p}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return n(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=t(1),m=e(d),g=t(2),v=s(g),b=t(43),y=s(b),h=t(22),w=s(h),O=/^[\u4e00-\u9fa5]{2}$/,j=O.test.bind(O),E=function(n){function a(){c(this,a);for(var t=arguments.length,s=Array(t),e=0;e<t;e++)s[e]=arguments[e];var p=l(this,n.call.apply(n,[this].concat(s)));return p.onClick=function(){p.props.onClick(p)},p}return u(a,n),a.prototype.render=function(){var n,a=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),t=f(a,2),s=t[0],e=s.children,p=s.className,c=s.prefixCls,l=s.type,u=s.size,r=s.ghost,d=s.inline,g=s.disabled,b=s.htmlType,h=s.icon,O=s.loading,j=t[1],E=(0,v["default"])((n={},o(n,p,p),o(n,c,!0),o(n,c+"-primary","primary"===l),o(n,c+"-ghost",r),o(n,c+"-warning","warning"===l),o(n,c+"-small","small"===u&&d),o(n,c+"-loading",O),o(n,c+"-inline",d),o(n,c+"-disabled",g),n)),C=O?"loading":h,P=m.Children.map(e,i);return m.createElement("button",k({},j,{type:b||"button",className:E,disabled:g,onClick:this.onClick}),C?m.createElement(y["default"],{type:C}):null,P)},a}(m.Component);a["default"]=E,E.propTypes={prefixCls:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),icon:d.PropTypes.bool},E.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=a["default"]},55:function(n,a){},56:function(n,a,t){"use strict";t(3),t(61),t(59)},59:function(n,a){},782:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(56),t(54)),p=s(e),o=(t(37),t(27)),c=s(o),l=t(1),u=s(l),r=t(4);s(r);n.exports={content:[["p","\u53cc\u884c\u5217\u8868"]],meta:{order:2,title:"\u5bf9\u9f50",filename:"components/list/demo/twoline.md",id:"components-list-demo-twoline"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span> <span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Header</span><span class="token punctuation" >></span></span>\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Header</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Body</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span>\u5185\u5bb9\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span>\u5185\u5bb9\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          align<span class="token operator" >=</span><span class="token string" >"top"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\u9876\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >align</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>top<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u9876\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra={&lt;div</span><span class="token punctuation" >></span></span>\u5185\u5bb9\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n          arrow<span class="token operator" >=</span><span class="token string" >"horizontal"</span>\n          align<span class="token operator" >=</span><span class="token string" >"bottom"</span>\n          onClick<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\u5e95\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >extra</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >arrow</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >align</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottom<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u5e95\u90e8\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8f85\u52a9\u6587\u5b57\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >extra</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>Button\n            size<span class="token operator" >=</span><span class="token string" >"small"</span>\n            inline\n            onClick<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token number" >111</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span>\u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u533a\u57df\u7ecf\u7406<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Body</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],null,u["default"].createElement(c["default"].Header,null,"\u5bf9\u9f50"),u["default"].createElement(c["default"].Body,null,u["default"].createElement(c["default"].Item,{extra:u["default"].createElement("div",null,"\u5185\u5bb9\u5185\u5bb9",u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"),u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9")),arrow:"horizontal",onClick:function(){}},"\u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50"),u["default"].createElement(c["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal",onClick:function(){}},u["default"].createElement("div",null,"\u5782\u76f4\u5c45\u4e2d\u5bf9\u9f50",u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"),u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"))),u["default"].createElement(c["default"].Item,{extra:u["default"].createElement("div",null,"\u5185\u5bb9\u5185\u5bb9",u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"),u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9")),arrow:"horizontal",align:"top",onClick:function(){}},"\u9876\u90e8\u5bf9\u9f50"),u["default"].createElement(c["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal",align:"top",onClick:function(){}},u["default"].createElement("div",null,"\u9876\u90e8\u5bf9\u9f50",u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"))),u["default"].createElement(c["default"].Item,{extra:u["default"].createElement("div",null,"\u5185\u5bb9\u5185\u5bb9",u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9")),arrow:"horizontal",align:"bottom",onClick:function(){}},"\u5e95\u90e8\u5bf9\u9f50"),u["default"].createElement(c["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal",align:"bottom",onClick:function(){}},u["default"].createElement("div",null,"\u5e95\u90e8\u5bf9\u9f50",u["default"].createElement("div",{className:"am-list-brief"},"\u8f85\u52a9\u6587\u5b57\u5185\u5bb9"))),u["default"].createElement(c["default"].Item,{onClick:function(){},extra:u["default"].createElement(p["default"],{size:"small",inline:!0,onClick:function(){return alert(111)}},"\u6309\u94ae")},u["default"].createElement("div",null,u["default"].createElement("div",{className:"am-list-title"},"\u533a\u57df\u7ecf\u7406"),u["default"].createElement("div",{className:"am-list-brief"},"\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u3001\u6298\u6263\u7ba1\u7406\u3001\u67e5\u770b\u6570\u636e\u7b49\u64cd\u4f5c"))))))}}}});