"use strict";(self.webpackChunkaccesible=self.webpackChunkaccesible||[]).push([[285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={id:"wcag2.2",title:"WCAG 2.2",slug:"/wcag-2.2",description:"WCAG 2.2 Pautas de Accesibilidad para el Contenido Web",keywords:["wcag","wcag 2.2","wcag espa\xf1ol"]},o=void 0,l={unversionedId:"wcag/wcag2.2",id:"wcag/wcag2.2",title:"WCAG 2.2",description:"WCAG 2.2 Pautas de Accesibilidad para el Contenido Web",source:"@site/docs/wcag/wcag-2.2.md",sourceDirName:"wcag",slug:"/wcag-2.2",permalink:"/wcag-2.2",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/wcag/wcag-2.2.md",tags:[],version:"current",frontMatter:{id:"wcag2.2",title:"WCAG 2.2",slug:"/wcag-2.2",description:"WCAG 2.2 Pautas de Accesibilidad para el Contenido Web",keywords:["wcag","wcag 2.2","wcag espa\xf1ol"]},sidebar:"tutorialSidebar",previous:{title:"WCAG 2.1",permalink:"/wcag-2.1"},next:{title:"WCAG 3.0",permalink:"/wcag-3.0"}},c={},s=[{value:"Novedades WCAG 2.2",id:"novedades-wcag-22",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Desde el 5 de octubre de 2023, la versi\xf3n 2.2 se convirti\xf3n en recomendaci\xf3n."),(0,n.kt)("p",null,"Es compatible con las versiones 2.0 y 2.1, a\xf1ade nueve requerimientos a los ya existentes y se sigue basando en los ",(0,n.kt)("strong",{parentName:"p"},"niveles de conformidad A, AA y AAA"),"."),(0,n.kt)("h2",{id:"novedades-wcag-22"},"Novedades WCAG 2.2"),(0,n.kt)("p",null,"Hay 9 criterios nuevos, aqu\xed resumimos las ",(0,n.kt)("strong",{parentName:"p"},"novedades de WCAG 2.2"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Aspecto del foco (M\xednimo) (Nivel AA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum"},"Criterio 2.4.11 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Conocer siempre d\xf3nde est\xe1 el foco mientras nos movemos por teclado, se define un nivel m\xednimo de visibilidad, basado en el tama\xf1o y en el contraste."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enfoque no obstruido (M\xednimo) (Nivel AA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum"},"Criterio 2.4.12 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"El foco no debe quedar totalmente oculto detr\xe1s de elementos superpuestos, como por ejemplo un modal."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enfoque no obstruido (Mejorado) (Mivel AAA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced"},"Criterio 2.4.13 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"M\xe1s estricto que el criterio anterior, cuando un elemento recibe el foco, debe visualizarse al 100%."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Movimientos de arrastre (Nivel AA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements"},"Criterio 2.5.7 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"En los componentes con funcionalidad de arrastre ",(0,n.kt)("span",{lang:"en"},"(",(0,n.kt)("em",{parentName:"li"},"drag and drop"),")"),", debe ofrecerse alguna alternativa a dicha acci\xf3n de arrastre, por ejemplo clic, doble clic o pulsaci\xf3n larga."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tama\xf1o del area clicable (M\xednimo) (Nivel AA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum"},"Criterio 2.5.8 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Proporcionar un tama\xf1o m\xednimo en los elementos de interacci\xf3n para facilitar su uso y evitar errores, tama\xf1o m\xednimo de 24x24 p\xedxeles."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ayuda consistente (Nivel A)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/consistent-help"},"Criterio 3.2.6 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"La ayuda debe aparecer en el mismo lugar dentro de un sitio, es decir, que exista una consistencia en la ubicaci\xf3n dentro de las distintas p\xe1ginas."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Autenticaci\xf3n accesible (Nivel AA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry"},"Criterio 3.3.7 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Facilitar las tareas de autenticaci\xf3n como inicio de sesi\xf3n, registro o recordar clave, por ejemplo, autocompletando los campos que sean posibles, evita pedir informaci\xf3n por duplicado."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Autenticaci\xf3n accesible (Sin excepci\xf3n) (Nivel AAA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication"},"Criterio 3.3.8 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"M\xe1s estricto que el criterio anterior."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Entrada redundante (Mejorado) (Nivel AAA)")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced"},"Criterio 3.3.9 \u2197\ufe0f"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Evitar la introducci\xf3n de datos redundantes en formularios.")))))}u.isMDXComponent=!0}}]);