module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s="QfWi")}({HteQ:function(e,t){e.exports=require("preact")},QfWi:function(e,t,o){"use strict";o.r(t);var n=o("HteQ"),r={};function i(e,t){for(var o in t)e[o]=t[o];return e}function c(e,t,o){var n,i=/(?:\?([^#]*))?(#.*)?$/,c=e.match(i),a={};if(c&&c[1])for(var s=c[1].split("&"),u=0;u<s.length;u++){var f=s[u].split("=");a[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}e=l(e.replace(i,"")),t=l(t||"");for(var p=Math.max(e.length,t.length),m=0;m<p;m++)if(t[m]&&":"===t[m].charAt(0)){var h=t[m].replace(/(^:|[+*?]+$)/g,""),b=(t[m].match(/[+*?]+$/)||r)[0]||"",d=~b.indexOf("+"),_=~b.indexOf("*"),y=e[m]||"";if(!y&&!_&&(b.indexOf("?")<0||d)){n=!1;break}if(a[h]=decodeURIComponent(y),d||_){a[h]=e.slice(m).map(decodeURIComponent).join("/");break}}else if(t[m]!==e[m]){n=!1;break}return(!0===o.default||!1!==n)&&a}function a(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function s(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(u).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function u(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var f=null,p=[],m=[],h={};function b(){var e;return""+((e=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:h).pathname||"")+(e.search||"")}function d(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=p.length;t--;)if(p[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),f&&f[t]?f[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),_(e)}function _(e){for(var t=!1,o=0;o<p.length;o++)!0===p[o].routeTo(e)&&(t=!0);for(var n=m.length;n--;)m[n](e);return t}function y(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),o=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!o||o.match(/^_?self$/i)))return d(t)}}function v(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return y(e.currentTarget||e.target||this),j(e)}function j(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function O(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(y(t))return j(e)}}while(t=t.parentNode)}}var g=!1;var P=function(e){function t(t){e.call(this,t),t.history&&(f=t.history),this.state={url:t.url||b()},g||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){_(b())})),addEventListener("click",O)),g=!0)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(n.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){p.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;f&&(this.unlisten=f.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,o){return e.filter(s).sort(a).map((function(e){var r=c(t,e.props.path,e.props);if(r){if(!1!==o){var a={url:t,matches:r};return i(a,r),delete a.ref,delete a.key,Object(n.cloneElement)(e,a)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var o=e.children,r=e.onChange,i=t.url,c=this.getMatchingChildren(Object(n.toChildArray)(o),i,!0),a=c[0]||null,s=this.previousUrl;return i!==s&&(this.previousUrl=i,"function"==typeof r&&r({router:this,url:i,previous:s,active:c,current:a})),a},t}(n.Component);P.subscribers=m,P.getCurrentUrl=b,P.route=d,P.Router=P,P.Route=function(e){return Object(n.createElement)(e.component,e)},P.Link=function(e){return Object(n.createElement)("a",i({onClick:v},e))},P.exec=c;var w=function(){return Object(n.h)("section",{class:"who-am-i"},Object(n.h)("div",{class:"container"},Object(n.h)("h1",{class:"who-am-i__full-name text-center"},"RENATO HIGA HIGUTI"),Object(n.h)("h2",{class:"who-am-i__developer-type text-center"},"DESENVOLVEDOR FULL-STACK"),Object(n.h)("p",{class:"who-am-i__programming-languages text-center"},"JAVASCRIPT | ANGULAR | REACT | PHP | LARAVEL")),Object(n.h)("div",{class:"who-am-i__path-clip-filler"}))},x=o.p+"6d9831e3ba42dd7a8a5b09529e3ff219.png",I=function(){return Object(n.h)("section",{class:"more-about-myself"},Object(n.h)("div",{class:"more-about-myself__container"},Object(n.h)("div",{class:"more-about-myself__text"},Object(n.h)("h1",{class:"more-about-myself__title mb-20 huge-title"},"Olá! Meu nome é Renato! 😁"),Object(n.h)("p",null,"Eu sou um desenvolvedor que adora programação, computadores, escutar músicas de metal, se divertir enquanto aprende alguma técnica nova e adora compartilhar os conhecimentos! 💻️"),Object(n.h)("br",null),Object(n.h)("p",null,"Sou focado no que eu faço e tento sempre dar meu melhor. Mesmo que eu cometo um erro mesmo fazendo meu melhor, eu considero o erro como uma grande oportunidade de aprendizado e amadurecimento para mim. 📈"),Object(n.h)("br",null),Object(n.h)("p",null,"Acredito fortemente que trabalho em equipe é extremamente importante, pois juntos, conseguimos ir muito além do esperado! 🤝")),Object(n.h)("div",{class:"my-photo"},Object(n.h)("div",{class:"my-photo__background"}),Object(n.h)("div",{class:"my-photo__image-container"},Object(n.h)("img",{class:"my-photo__image",src:x})))),Object(n.h)("div",{class:"more-about-myself__path-clip-filler"}))};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=k(e);if(t){var r=k(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return E(this,o)}}function E(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(c,e);var t,o,r,i=C(c);function c(e){var t,o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=i.call(this,e),o=T(t),r=function(){return t.props.active?t.props.activateNextImageAnimation?"personal-projects__image-container active personal-projects__next-image":t.props.activatePreviousImageAnimation?"personal-projects__image-container active personal-projects__previous-image":"personal-projects__image-container active":"personal-projects__image-container d-none"},(n="addClasses")in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,t}return t=c,(o=[{key:"render",value:function(){return Object(n.h)("div",{class:this.addClasses()},Object(n.h)("div",{class:"personal-projects__image-overlay"},Object(n.h)("a",{href:null===this.props.link?"#":this.props.link,class:"personal-projects__link"},Object(n.h)("h1",{class:"text-center huge-title"},this.props.title),Object(n.h)("h2",{class:"text-center mb-50 personal-projects__small-description"},this.props.description))),Object(n.h)("img",{src:"assets/images/personal-projects/"+this.props.imgFolder+"/"+this.props.imgName,class:"personal-projects__image"}))}}])&&A(t.prototype,o),r&&A(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=B(e);if(t){var r=B(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return U(this,o)}}function U(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(c,e);var t,o,r,i=M(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),J(F(e=i.call(this)),"renderItems",(function(){var t=e.state.items.map((function(e){return Object(n.h)(H,{title:e.title,description:e.description,imgName:e.imgName,imgFolder:e.imgFolder,active:e.active,activateNextImageAnimation:e.activateNextImageAnimation,activatePreviousImageAnimation:e.activatePreviousImageAnimation,link:e.link})}));e.setState({itemsHtml:t})})),J(F(e),"hideItem",(function(e){e.active=!1,e.activateNextImageAnimation=!1,e.activatePreviousImageAnimation=!1})),J(F(e),"showItem",(function(e,t){e.active=!0,"nextItem"===t?e.activateNextImageAnimation=!0:"previousItem"===t&&(e.activatePreviousImageAnimation=!0)})),J(F(e),"showNextItem",(function(){var t=e.state.activeItemIndex,o=e.state.itemsHtml.length-1===e.state.activeItemIndex;e.state.activeItemIndex=o?0:e.state.activeItemIndex+1;var n=e.state.items,r=n[e.state.activeItemIndex],i=n[t];e.showItem(r,"nextItem"),e.hideItem(i),e.renderItems()})),J(F(e),"showPreviousItem",(function(){var t=e.state.activeItemIndex;if(0===e.state.activeItemIndex){var o=e.state.itemsHtml.length-1;e.state.activeItemIndex=o}else e.state.activeItemIndex=e.state.activeItemIndex-1;var n=e.state.items,r=n[e.state.activeItemIndex],i=n[t];e.showItem(r,"previousItem"),e.hideItem(i),e.renderItems()})),e.state={activeItemIndex:0,items:[{title:"Fitness Training - TCC",description:"Trabalho de Conclusão de Curso: Sistema de Acadêmia para Alunos e Professores",imgName:"cadastra_exercicio.png",imgFolder:"fitness-training",active:!0,activateNextImageAnimation:!1,activatePreviousImageAnimation:!1,link:"https://github.com/RenatoHiga/fitness-training-tcc"},{title:"Portifólio Pessoal",description:"Portifólio pessoal com design simples para exibir minhas habilidades e projetos",imgName:"personal-portfolio-main.png",imgFolder:"personal-portfolio",active:!1,activateNextImageAnimation:!1,activatePreviousImageAnimation:!1,link:null}],itemsHtml:[]},e.renderItems(),e}return t=c,(o=[{key:"render",value:function(){return Object(n.h)("div",{class:"personal-projects__carousel",id:"carousel"},this.state.itemsHtml,Object(n.h)("div",{class:"personal-projects__button-container personal-projects__button-container--left"},Object(n.h)("button",{class:"personal-projects__button",onclick:this.showPreviousItem},Object(n.h)("img",{src:"../../assets/icons/arrow_back.svg",alt:"Projeto anterior"}))),Object(n.h)("div",{class:"personal-projects__button-container personal-projects__button-container--right"},Object(n.h)("button",{class:"personal-projects__button",onclick:this.showNextItem},Object(n.h)("img",{src:"../../assets/icons/arrow_forward.svg",alt:"Próximo projeto"}))))}}])&&N(t.prototype,o),r&&N(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component);function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=V(e);if(t){var r=V(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return G(this,o)}}function G(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(c,e);var t,o,r,i=W(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this)}return t=c,(o=[{key:"render",value:function(){return Object(n.h)("section",{class:"personal-projects"},Object(n.h)("div",{class:"personal-projects__container"},Object(n.h)("h1",{class:"mb-20 huge-title text-center"},"Projetos Pessoais"),Object(n.h)(q,null)),Object(n.h)("div",{class:"personal-projects__path-clip-filler"}))}}])&&z(t.prototype,o),r&&z(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=oe(e);if(t){var r=oe(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return te(this,o)}}function te(e,t){if(t&&("object"===X(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(c,e);var t,o,r,i=ee(c);function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,e)}return t=c,(o=[{key:"render",value:function(){return Object(n.h)("section",{class:"professional-experience overflow-auto"},Object(n.h)("h1",{class:"huge-title text-center mb-50 mt-75"},"Formação e Experiência profissional"),Object(n.h)("div",{class:"container mb-75"},Object(n.h)("div",{class:"professional-experience__lists-container"},Object(n.h)("div",{class:"professional-experience__companies-list"},Object(n.h)("div",null,Object(n.h)("h2",{class:"professional-experience__location-name"},"TrackCash"),Object(n.h)("h3",{class:"professional-experience__job-role"},"Estagiário de T.I. ",Object(n.h)("br",null),"Período - Junho/2019 até Dezembro/2019"),Object(n.h)("ul",{class:"professional-experience__activities-list"},Object(n.h)("li",null,"Desenvolvimento de funcionalidades novas e correções de bugs no sistema em PHP com Laravel;"),Object(n.h)("li",null,"Verificação de dados entre dados do banco de dados MySQL e API's de E-commerce's através do Postman"))),Object(n.h)("div",{class:"mt-30"},Object(n.h)("h2",{class:"professional-experience__location-name"},"TrackCash"),Object(n.h)("h3",{class:"professional-experience__job-role"},"Desenvolvedor Back-end Júnior ",Object(n.h)("br",null),"Período - Dezembro/2019 até Agosto/2021"),Object(n.h)("ul",{class:"professional-experience__activities-list"},Object(n.h)("li",null,"Desenvolvimento de funcionalidades novas e correções de bugs no sistema em PHP com Laravel;"),Object(n.h)("li",null,"Integração de API’s de E-commerce’s para extração de dados;"),Object(n.h)("li",null,"Montagem de Telas com HTML, CSS, JavaScript, JQuery e renderização dos dados do back-end com o Blade do Laravel;"),Object(n.h)("li",null,"Auxílio para os estagiários."))),Object(n.h)("div",{class:"mt-30"},Object(n.h)("h2",{class:"professional-experience__location-name"},"Grupo 3D"),Object(n.h)("h3",{class:"professional-experience__job-role"},"Desenvolvedor Front-End ",Object(n.h)("br",null),"Período - Outubro/2021 até atualmente."),Object(n.h)("ul",{class:"professional-experience__activities-list"},Object(n.h)("li",null,"Manutenção no Sistema Front-End em JavaScript e Angular do cliente;"),Object(n.h)("li",null,"Ajustes nos Layouts das páginas com CSS e Sass;"),Object(n.h)("li",null,"Integração de API’s back-end disponibilizadas pelo cliente;"),Object(n.h)("li",null,"Manutenção de Layouts de sites Wordpress com Elementor;")))),Object(n.h)("div",{class:"professional-experience__education-list"},Object(n.h)("div",null,Object(n.h)("h2",{class:"professional-experience__location-name"},"Colégio Técnico Opção"),Object(n.h)("h3",{class:"professional-experience__job-role"},"Técnico em Informática ",Object(n.h)("br",null),"Período - Janeiro/2016 até Dezembro/2018"),Object(n.h)("ul",{class:"professional-experience__activities-list"},Object(n.h)("li",null,"Desenvolvimento de softwares com diversas linguagens e, frameworks: PHP com Code Igniter, JavaScript com JQuery, C, C++, C# e Java."),Object(n.h)("li",null,"Manutenção e configuração de computadores"))),Object(n.h)("div",{class:"mt-30"},Object(n.h)("h2",{class:"professional-experience__location-name"},"Universidade Paulista (UNIP)"),Object(n.h)("h3",{class:"professional-experience__job-role"},"Análise e Desenvolvimento de Sistemas ",Object(n.h)("br",null),"Período - Janeiro/2019 até Dezembro/2020"),Object(n.h)("ul",{class:"professional-experience__activities-list"},Object(n.h)("li",null,"Desenvolvimento de softwares com C, C# e Java."),Object(n.h)("li",null,"Análise do ciclo de vida de um software"),Object(n.h)("li",null,"Metodologias ágeis")))))),Object(n.h)("div",{class:"professional-experience__path-clip-filler"}))}}])&&Y(t.prototype,o),r&&Y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component);function re(e){return(re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=ue(e);if(t){var r=ue(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return se(this,o)}}function se(e,t){if(t&&("object"===re(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return le(e)}function le(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var fe,pe,me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ce(e,t)}(c,e);var t,o,r,i=ae(c);function c(e){var t,o,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=i.call(this,e),o=le(t),r=function(e){e.preventDefault(),navigator.clipboard?navigator.clipboard.writeText("Renato.H.H.#3096"):alert("Ops! Não foi possível copiar o nome do Discord automáticamente! Tente digitar manualmente: Renato.H.H.#3096"),navigator.clipboard.writeText("Renato.H.H.#3096")},(n="getDiscordName")in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,t}return t=c,(o=[{key:"render",value:function(){return Object(n.h)("section",{class:"social-media"},Object(n.h)("h1",{class:"huge-title text-center mt-75"},"Contatos / Redes sociais"),Object(n.h)("div",{class:"social-media__list mt-75"},Object(n.h)("a",{href:"https://wa.me/5512991411028",class:"social-media__list-item"},Object(n.h)("div",{class:"social-media__icon-container"},Object(n.h)("img",{src:"assets/icons/whatsapp.svg",class:"social-media__icon"})),Object(n.h)("p",{class:"social-media__name"},Object(n.h)("span",null,"WhatsApp"))),Object(n.h)("a",{href:"mailto: renatoka14@gmail.com",class:"social-media__list-item"},Object(n.h)("div",{class:"social-media__icon-container"},Object(n.h)("img",{src:"assets/icons/gmail.svg",class:"social-media__icon"})),Object(n.h)("p",{class:"social-media__name"},Object(n.h)("span",null,"E-mail"))),Object(n.h)("a",{href:"#",class:"social-media__list-item",onclick:this.getDiscordName},Object(n.h)("div",{class:"social-media__icon-container"},Object(n.h)("img",{src:"assets/icons/discord.svg",class:"social-media__icon"})),Object(n.h)("p",{class:"social-media__name"},Object(n.h)("span",null,"Discord"))),Object(n.h)("a",{href:"https://github.com/RenatoHiga",class:"social-media__list-item"},Object(n.h)("div",{class:"social-media__icon-container"},Object(n.h)("img",{src:"assets/icons/github.svg",class:"social-media__icon"})),Object(n.h)("p",{class:"social-media__name"},Object(n.h)("span",null,"Github")))))}}])&&ie(t.prototype,o),r&&ie(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component),he=[],be=n.options.__b,de=n.options.__r,_e=n.options.diffed,ye=n.options.__c,ve=n.options.unmount;function je(){for(var e;e=he.shift();)if(e.__P)try{e.__H.__h.forEach(ge),e.__H.__h.forEach(Pe),e.__H.__h=[]}catch(t){e.__H.__h=[],n.options.__e(t,e.__v)}}n.options.__b=function(e){fe=null,be&&be(e)},n.options.__r=function(e){de&&de(e),0;var t=(fe=e.__c).__H;t&&(t.__h.forEach(ge),t.__h.forEach(Pe),t.__h=[])},n.options.diffed=function(e){_e&&_e(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==he.push(t)&&pe===n.options.requestAnimationFrame||((pe=n.options.requestAnimationFrame)||function(e){var t,o=function(){clearTimeout(n),Oe&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(o,100);Oe&&(t=requestAnimationFrame(o))})(je)),fe=null},n.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ge),e.__h=e.__h.filter((function(e){return!e.__||Pe(e)}))}catch(o){t.some((function(e){e.__h&&(e.__h=[])})),t=[],n.options.__e(o,e.__v)}})),ye&&ye(e,t)},n.options.unmount=function(e){ve&&ve(e);var t,o=e.__c;o&&o.__H&&(o.__H.__.forEach((function(e){try{ge(e)}catch(e){t=e}})),t&&n.options.__e(t,o.__v))};var Oe="function"==typeof requestAnimationFrame;function ge(e){var t=fe,o=e.__c;"function"==typeof o&&(e.__c=void 0,o()),fe=t}function Pe(e){var t=fe;e.__c=e.__(),fe=t}var we=function(){return Object(n.h)("div",{id:"app"},Object(n.h)(w,null),Object(n.h)(I,null),Object(n.h)($,null),Object(n.h)(ne,null),Object(n.h)(me,null))};t.default=we}});
//# sourceMappingURL=ssr-bundle.js.map