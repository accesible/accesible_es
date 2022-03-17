"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[880],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2038:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"svg",title:"SVG"},c=void 0,s={unversionedId:"svg",id:"svg",title:"SVG",description:'- Si usas svg decorativos, a\xf1ade el atributo aria-hidden="true"',source:"@site/docs/svg.md",sourceDirName:".",slug:"/svg",permalink:"/svg",editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/svg.md",tags:[],version:"current",frontMatter:{id:"svg",title:"SVG"},sidebar:"tutorialSidebar",previous:{title:"Multimedia",permalink:"/multimedia"},next:{title:"Tablas",permalink:"/tabla"}},u={},d=[{value:"SVG dentro de enlace",id:"svg-dentro-de-enlace",level:3},{value:"SVG dentro de bot\xf3n",id:"svg-dentro-de-bot\xf3n",level:3}],p={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:" ",src:n(9635).Z,width:"823",height:"581"})," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si usas svg decorativos, a\xf1ade el atributo ",(0,i.kt)("inlineCode",{parentName:"li"},'aria-hidden="true"')),(0,i.kt)("li",{parentName:"ul"},"Si ofreces compatibilidad con internet explorer, a\xf1ade el atributo ",(0,i.kt)("inlineCode",{parentName:"li"},'focusable="false"'),"."),(0,i.kt)("li",{parentName:"ul"},"Para asegurarnos la compatibilidad las etiquetas ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"desc")," si fuera necesario:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'  <svg role="img">\n      <title>T\xedtulo del svg</title>\n      <desc>Una descripci\xf3n de la imagen svg.</desc>\n  ...\n  </svg>\n')),(0,i.kt)("h3",{id:"svg-dentro-de-enlace"},"SVG dentro de enlace"),(0,i.kt)("p",null,"Si el enlace incluye texto descriptivo, \xfanicamente debemos a\xf1adir el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#!">\n  <svg aria-hidden="true">\n    <use xlink:href="#..."></use>\n  </svg>\n  Descargar archivo\n</a>\n\n<a href="#!">\n  <svg aria-hidden="true">\n    <use xlink:href="#..."></use>\n  </svg>\n  <span class="oculto">Descargar archivo</span>\n</a>\n')),(0,i.kt)("p",null,"Si el enlace no tiene texto descriptivo, debemos a\xf1adir los atributos ",(0,i.kt)("inlineCode",{parentName:"p"},'role="img"')," y ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," con la acci\xf3n."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#!">\n  <svg role="img" aria-label="Descargar archivo" >\n    <use xlink:href="#..." aria-hidden="true"></use>\n  </svg>\n</a>\n')),(0,i.kt)("h3",{id:"svg-dentro-de-bot\xf3n"},"SVG dentro de bot\xf3n"),(0,i.kt)("p",null,"Si el bot\xf3n incluye texto, \xfanicamente a\xf1adiremos el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button>\n  <svg aria-hidden="true">\x3c!--...--\x3e</svg>\n  Buscar\n</button>\n\n<button>\n  <svg aria-hidden="true">\x3c!--...--\x3e</svg>\n  <span class="oculto">Buscar</span>\n</button>\n')),(0,i.kt)("p",null,"Si el bot\xf3n no tiene texto, a\xf1adiremos al bot\xf3n el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," con la acci\xf3n."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button aria-label="Buscar">\n  <svg aria-hidden="true">\x3c!--...--\x3e</svg>\n</button>\n')))}m.isMDXComponent=!0},9635:function(e,t,n){t.Z=n.p+"assets/images/svg-d28c6b5c98031c99c38992c6845cb4c0.svg"}}]);