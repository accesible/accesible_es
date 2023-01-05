"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[281],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>f});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),i=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},u=function(e){var o=i(e.components);return r.createElement(s.Provider,{value:o},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,c(c({ref:o},u),{},{components:t})):r.createElement(f,c({ref:o},u))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=d;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6605:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(7462),n=(t(7294),t(3905));const a={id:"foco",title:"Foco",slug:"/foco",image:"/img/logo.svg",description:"Foco accesible para la web con ejemplos",keywords:["enfocar elementos","foco","resaltar","tabulaci\xf3n"]},c=void 0,l={unversionedId:"pautas/foco",id:"pautas/foco",title:"Foco",description:"Foco accesible para la web con ejemplos",source:"@site/docs/pautas/foco.md",sourceDirName:"pautas",slug:"/foco",permalink:"/foco",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/foco.md",tags:[],version:"current",frontMatter:{id:"foco",title:"Foco",slug:"/foco",image:"/img/logo.svg",description:"Foco accesible para la web con ejemplos",keywords:["enfocar elementos","foco","resaltar","tabulaci\xf3n"]},sidebar:"tutorialSidebar",previous:{title:"Estructura",permalink:"/estructura"},next:{title:"Formularios",permalink:"/formulario"}},s={},i=[{value:"Contraste del foco",id:"contraste-del-foco",level:3},{value:"Requisitos WCAG 2.2",id:"requisitos-wcag-22",level:3}],u={toc:i};function p(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/img/foco.svg",alt:""}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El indicador de foco es para los usuarios de teclado lo que el cursor es para los usuarios de rat\xf3n.")),(0,n.kt)("p",null,"Todo elemento operable mediante teclado ",(0,n.kt)("strong",{parentName:"p"},"debe ser resaltado al recibir el foco"),". ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG22/#focus-visible"},"Criterio 2.4.7")),(0,n.kt)("p",null,"Los navegadores proporcionan sus propios indicadores de enfoque para elementos interactivos nativos (botones, enlaces, campos de formulario)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Estos indicadores no siempre cumplen con el criterio"),", as\xed que usaremos ",(0,n.kt)("inlineCode",{parentName:"p"},"otline: none")," para usar unos propios y asegurarnos que cumplimos con unos m\xednimos."),(0,n.kt)("p",null,"Ejemplo de c\xf3digo css para personalizar el foco:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},":focus {\n    outline: none;\n}\n\n/* Ejemplo, al hacer foco con el teclado mostrar\xe1 una l\xednea punteada negra. */\nbutton:focus-visible {\n  outline: 4px dashed black;\n}\n  \n/* Ejemplo, si hacemos foco con el puntero muestra un sombreado. */\nbutton:focus:not(:focus-visible) {\n  outline: none;\n  box-shadow: 1px 1px 5px rgba(1, 1, 0, .7);\n}\n\n")),(0,n.kt)("h3",{id:"contraste-del-foco"},"Contraste del foco"),(0,n.kt)("p",null,"Deben tener una relaci\xf3n de contraste de color de al menos 3:1 frente a los colores adyacentes."),(0,n.kt)("h3",{id:"requisitos-wcag-22"},"Requisitos WCAG 2.2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SC 2.4.11 Apariencia de foco (Nivel AA),"),(0,n.kt)("li",{parentName:"ul"},"SC 2.4.12 Foco no oscurecido (m\xednimo) (nivel AA), y"),(0,n.kt)("li",{parentName:"ul"},"SC 2.4.13 Foco no oscurecido (mejorado) (nivel AAA)")))}p.isMDXComponent=!0}}]);