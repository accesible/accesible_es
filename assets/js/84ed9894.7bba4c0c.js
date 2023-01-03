"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={id:"wcag2.2",title:"WCAG 2.2",slug:"/wcag-2.2",description:"WCAG 2.2 Pautas de Accesibilidad para el Contenido Web",keywords:["wcag","wcag 2.2","resumen wcag"]},o=void 0,l={unversionedId:"wcag/wcag2.2",id:"wcag/wcag2.2",title:"WCAG 2.2",description:"WCAG 2.2 Pautas de Accesibilidad para el Contenido Web",source:"@site/docs/wcag/wcag-2.2.md",sourceDirName:"wcag",slug:"/wcag-2.2",permalink:"/wcag-2.2",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/wcag/wcag-2.2.md",tags:[],version:"current",frontMatter:{id:"wcag2.2",title:"WCAG 2.2",slug:"/wcag-2.2",description:"WCAG 2.2 Pautas de Accesibilidad para el Contenido Web",keywords:["wcag","wcag 2.2","resumen wcag"]},sidebar:"tutorialSidebar",previous:{title:"WCAG 2.1",permalink:"/wcag-2.1"},next:{title:"Pautas de accesibilidad",permalink:"/pautas"}},c={},s=[{value:"Novedades WCAG 2.2",id:"novedades-wcag-22",level:2}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Esta versi\xf3n ser\xe1 compatible con las versiones 2.0 y 2.1, y se seguir\xe1 basando en los niveles de conformidad A, AA y AAA."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La versi\xf3n final de las WCAG 2.2 deber\xeda ser publicada a principios de 2023")),(0,r.kt)("h2",{id:"novedades-wcag-22"},"Novedades WCAG 2.2"),(0,r.kt)("p",null,"Este es el listado resumido de las ",(0,r.kt)("strong",{parentName:"p"},"novedades de WCAG 2.2"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2.4.11 Aspecto de enfoque (AA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Siempre saber d\xf3nde est\xe1 el foco del teclado mientras nos movemos por una p\xe1gina web o una aplicaci\xf3n."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2.4.12 Enfoque no obstruido (M\xednimo) (Nivel AA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"El foco no debe queda oculto detr\xe1s de elementos superpuestos, como por ejemplo un modal."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2.4.13 Enfoque no obstruido (Mejorado) (Mivel AAA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cuando un elemento recibe el foco, no debe ocultarse ning\xfan contenido del mismo."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2.5.7 Movimientos de arrastre (Nivel AA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"En los componentes con funcionalidad de arrastre ",(0,r.kt)("span",{lang:"en"},"(",(0,r.kt)("em",{parentName:"li"},"drag and drop"),")"),", debe ofrecerse alguna alternativa a dicha acci\xf3n de arrastre."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2.5.8 Tama\xf1o del objetivo (M\xednimo) (Nivel AA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Proporcionar una distancia m\xednima entre los elementos de interacci\xf3n para facilitar su uso y evitar errores."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.2.6 Ayuda consistente (Nivel A)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"La ayuda debe aparecer en el mismo lugar dentro de un sitio, es decir, que exista una consistencia en la ubicaci\xf3n dentro de las distintas p\xe1ginas."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.3.7 Autenticaci\xf3n accesible (Nivel AA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Facilitar las tareas de autenticaci\xf3n como inicio de sesi\xf3n, registro o recordar clave."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.3.8 Autenticaci\xf3n accesible (Sin excepci\xf3n) (Nivel AAA)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"M\xe1s estricto que el criterio anterior."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3.3.9 Entrada redundante (Nivel A)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Evitar la introducci\xf3n de datos redundantes en formularios.")))))}p.isMDXComponent=!0}}]);