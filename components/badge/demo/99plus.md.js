webpackJsonp([82],{3:function(n,t,e){"use strict";e(7),e(6);var a=Math.floor(window.devicePixelRatio||1);a>=2&&document.querySelector("html").classList.add("pixel-ratio-"+a)},6:function(n,t){},7:function(n,t){},249:function(n,t){/*!
	 * for-in <https://github.com/jonschlinkert/for-in>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";n.exports=function(n,t,e){for(var a in n)if(t.call(e,n[a],a,n)===!1)break}},250:function(n,t,e){/*!
	 * for-own <https://github.com/jonschlinkert/for-own>
	 *
	 * Copyright (c) 2014-2016, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";var a=e(249),s=Object.prototype.hasOwnProperty;n.exports=function(n,t,e){a(n,function(a,o){if(s.call(n,o))return t.call(e,n[o],o,n)})}},274:function(n,t){"use strict";function e(){if(void 0!==a)return a;var n="Webkit Moz O ms Khtml".split(" "),t=document.createElement("div");if(void 0!==t.style.animationName&&(a=!0),void 0!==a)for(var e=0;e<n.length;e++)if(void 0!==t.style[n[e]+"AnimationName"]){a=!0;break}return a=a||!1}Object.defineProperty(t,"__esModule",{value:!0});var a=void 0;t["default"]=e,n.exports=t["default"]},275:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function u(n){return n?n.toString().split("").reverse().map(function(n){return Number(n)}):[]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),l=s(i),f=e(4),d=e(274),m=a(d),k=e(53),h=a(k),y=e(296),g=a(y),b=function(n){function t(e){p(this,t);var a=r(this,n.call(this,e));return a.state={animateStarted:!0,count:e.count},a}return c(t,n),t.prototype.componentDidMount=function(){(0,m["default"])()||((0,f.findDOMNode)(this).className+=" not-support-css-animation")},t.prototype.getPositionByNum=function(n,t){if(this.state.animateStarted)return 10+n;var e=u(this.state.count)[t],a=u(this.lastCount)[t];return this.state.count>this.lastCount?e>=a?10+n:20+n:e<=a?10+n:n},t.prototype.componentWillReceiveProps=function(n){var t=this;if("count"in n){if(this.state.count===n.count)return;this.lastCount=this.state.count,this.setState({animateStarted:!0},function(){setTimeout(function(){t.setState({animateStarted:!1,count:n.count},function(){t.props.onAnimated()})},5)})}},t.prototype.renderNumberList=function(n){for(var t=[],e=0;e<30;e++){var a=n===e?"current":null;t.push(l.createElement("p",{key:e,className:a},e%10))}return t},t.prototype.renderCurrentNumber=function(n,t){var e=this.getPositionByNum(n,t),a=this.props.height,s=this.state.animateStarted||void 0===u(this.lastCount)[t];return(0,i.createElement)("span",{className:this.props.prefixCls+"-only",style:{transition:s&&"none",WebkitTransform:"translate3d(0, "+-e*a+"px, 0)",transform:"translate3d(0, "+-e*a+"px, 0)",height:a},key:t},this.renderNumberList(e))},t.prototype.renderNumberElement=function(){var n=this,t=this.state;return!t.count||isNaN(t.count)?t.count:u(t.count).map(function(t,e){return n.renderCurrentNumber(t,e)}).reverse()},t.prototype.render=function(){var n=(0,h["default"])({},(0,g["default"])(this.props,["count","onAnimated","component","prefixCls"]),{className:this.props.prefixCls+" "+this.props.className});return(0,i.createElement)(this.props.component,n,this.renderNumberElement())},t}(l.Component);t["default"]=b,b.defaultProps={prefixCls:"am-scroll-number",count:null,component:"sup",onAnimated:function(){},height:24},b.propTypes={count:l.PropTypes.oneOfType([l.PropTypes.string,l.PropTypes.number]),component:l.PropTypes.string,onAnimated:l.PropTypes.func,height:l.PropTypes.number},n.exports=t["default"]},276:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),l=s(i),f=e(88),d=a(f),m=e(275),k=a(m),h=e(2),y=a(h),g=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t,e=this.props,a=e.text,s=e.prefixCls,o=e.overflowCount,r=e.className,c=e.style,u=e.children,i=this.props.dot,f=this.props.size,m=this.props.corner;a=a>o?o+"+":a,i&&(a="");var h=!(a&&"0"!==a||i),g=(0,y["default"])((n={},p(n,s+"-dot",i),p(n,s+"-dot-large",i&&"large"===f),p(n,s+"-text",!i&&!m),p(n,s+"-corner",m),p(n,s+"-corner-large",m&&"large"===f),n)),b=(0,y["default"])((t={},p(t,r,!!r),p(t,s,!0),p(t,s+"-not-a-wrapper",!u),p(t,s+"-corner-wrapper",m),p(t,s+"-corner-wrapper-large",m&&"large"===f),t));return l.createElement("span",{className:b,title:a},u,l.createElement(d["default"],{component:"",showProp:"data-show",transitionName:s+"-zoom",transitionAppear:!0},h?null:l.createElement(k["default"],{"data-show":!h,className:g,count:a,style:c})))},t}(l.Component);t["default"]=g,g.propTypes={prefixCls:i.PropTypes.string,text:i.PropTypes.oneOfType([i.PropTypes.string,i.PropTypes.number]),dot:i.PropTypes.bool,corner:i.PropTypes.bool,overflowCount:i.PropTypes.number,size:i.PropTypes.string},g.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=t["default"]},277:function(n,t,e){"use strict";e(3),e(61),e(288)},288:function(n,t){},291:function(n,t){/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014 Jon Schlinkert, contributors.
	 * Licensed under the MIT License
	 */
"use strict";n.exports=function(n){return null!=n&&"object"==typeof n&&!Array.isArray(n)}},296:function(n,t,e){/*!
	 * object.omit <https://github.com/jonschlinkert/object.omit>
	 *
	 * Copyright (c) 2014-2015 Jon Schlinkert.
	 * Licensed under the MIT License
	 */
"use strict";var a=e(291),s=e(250);n.exports=function(n,t){if(null==n||!a(n))return{};if(null==t)return n;"string"==typeof t&&(t=[].slice.call(arguments,1));var e={};return Object.keys(n).length?(s(n,function(n,a){t.indexOf(a)===-1&&(e[a]=n)}),e):e}},721:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(277),e(276)),o=a(s),p=e(1),r=a(p),c=e(4);a(c);n.exports={content:[["p","\u6570\u5b57\u5927\u4e8e99\uff0c\u4f1a\u663e\u793a ",["code","99+"]]],meta:{order:3,title:"\u5927\u6570\u5b57",filename:"components/badge/demo/99plus.md",id:"components-badge-demo-99plus"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Badge <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>badge-container<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> padding<span class="token punctuation" >:</span> <span class="token string" >\'40px 16px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >99</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Badge</span> <span class="token attr-name" >text</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >108</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Badge</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return r["default"].createElement("div",{className:"badge-container",style:{padding:"40px 16px"}},r["default"].createElement(o["default"],{text:99},r["default"].createElement("span",{className:"head-example"})),r["default"].createElement(o["default"],{text:108},r["default"].createElement("span",{className:"head-example"})))},style:".am-badge {\n  margin-right: 8px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.am-badge</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});