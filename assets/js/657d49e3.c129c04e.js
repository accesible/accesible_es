"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(o,".").concat(g)]||p[g]||d[g]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={id:"svg",title:"SVG",slug:"/svg",image:"/img/svg.svg",description:"Svg accesible para la web con ejemplos sencillos",keywords:["svg accesible","svg enlaces","wai-aria svg"]},i=void 0,s={unversionedId:"pautas/svg",id:"pautas/svg",title:"SVG",description:"Svg accesible para la web con ejemplos sencillos",source:"@site/docs/pautas/svg.md",sourceDirName:"pautas",slug:"/svg",permalink:"/svg",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/svg.md",tags:[],version:"current",frontMatter:{id:"svg",title:"SVG",slug:"/svg",image:"/img/svg.svg",description:"Svg accesible para la web con ejemplos sencillos",keywords:["svg accesible","svg enlaces","wai-aria svg"]},sidebar:"tutorialSidebar",previous:{title:"PDF",permalink:"/pdf"},next:{title:"Tablas",permalink:"/tabla"}},o={},c=[{value:"SVG dentro de enlace",id:"svg-dentro-de-enlace",level:3},{value:"SVG dentro de bot\xf3n",id:"svg-dentro-de-bot\xf3n",level:3}],u={toc:c};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:" ",src:n(9635).Z,width:"823",height:"581"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si usas svg decorativos, a\xf1ade el atributo ",(0,r.kt)("inlineCode",{parentName:"li"},'aria-hidden="true"')),(0,r.kt)("li",{parentName:"ul"},"Si ofreces compatibilidad con internet explorer, a\xf1ade el atributo ",(0,r.kt)("inlineCode",{parentName:"li"},'focusable="false"'),"."),(0,r.kt)("li",{parentName:"ul"},"Para asegurarnos la compatibilidad las etiquetas ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"desc")," si fuera necesario.")),(0,r.kt)("p",null,"Ejemplo de svg accesible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  <svg role="img">\n      <title>T\xedtulo del svg</title>\n      <desc>Una descripci\xf3n de la imagen svg.</desc>\n  ...\n  </svg>\n')),(0,r.kt)("h3",{id:"svg-dentro-de-enlace"},"SVG dentro de enlace"),(0,r.kt)("p",null,"Si el enlace incluye texto descriptivo fuera del svg, \xfanicamente debemos a\xf1adir el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#!">\n  <svg aria-hidden="true">\n    <use xlink:href="#..."></use>\n  </svg>\n  Descargar archivo\n</a>\n\n<a href="#!">\n  <svg aria-hidden="true">\n    <use xlink:href="#..."></use>\n  </svg>\n  <span class="oculto">Descargar archivo</span>\n</a>\n')),(0,r.kt)("p",null,"Si el enlace no tiene texto descriptivo, debemos a\xf1adir los atributos ",(0,r.kt)("inlineCode",{parentName:"p"},'role="img"')," y ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," con la acci\xf3n que se lanzar\xe1 al pulsar el enlace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#!">\n  <svg role="img" aria-label="Descargar archivo" >\n    <use xlink:href="#..." aria-hidden="true"></use>\n  </svg>\n</a>\n')),(0,r.kt)("h3",{id:"svg-dentro-de-bot\xf3n"},"SVG dentro de bot\xf3n"),(0,r.kt)("p",null,"Si el bot\xf3n incluye texto, \xfanicamente a\xf1adiremos el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button>\n  <svg aria-hidden="true">\x3c!--...--\x3e</svg>\n  Buscar\n</button>\n\n<button>\n  <svg aria-hidden="true">\x3c!--...--\x3e</svg>\n  <span class="oculto">Buscar</span>\n</button>\n')),(0,r.kt)("p",null,"Si el bot\xf3n no tiene texto, a\xf1adiremos al bot\xf3n el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," con la acci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button aria-label="Buscar">\n  <svg aria-hidden="true">\x3c!--...--\x3e</svg>\n</button>\n')))}p.isMDXComponent=!0},9635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/svg-94b351825d67685e9fa2fe5afc51700a.svg"}}]);