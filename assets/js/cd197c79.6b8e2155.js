"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[401],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?n.createElement(k,o(o({ref:a},d),{},{components:t})):n.createElement(k,o({ref:a},d))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3738:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const r={id:"wai-aria",title:"WAI-ARIA",slug:"/wai-aria",image:"/img/wai-aria.svg",description:"Wai-aria en tu sitio web con ejemplos sencillos",keywords:["wai-aria","atributos y roles wai-aria"]},o=void 0,l={unversionedId:"pautas/wai-aria",id:"pautas/wai-aria",title:"WAI-ARIA",description:"Wai-aria en tu sitio web con ejemplos sencillos",source:"@site/docs/pautas/wai-aria.md",sourceDirName:"pautas",slug:"/wai-aria",permalink:"/wai-aria",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/wai-aria.md",tags:[],version:"current",frontMatter:{id:"wai-aria",title:"WAI-ARIA",slug:"/wai-aria",image:"/img/wai-aria.svg",description:"Wai-aria en tu sitio web con ejemplos sencillos",keywords:["wai-aria","atributos y roles wai-aria"]},sidebar:"tutorialSidebar",previous:{title:"Tablas",permalink:"/tabla"}},s={},p=[{value:"Aria-live",id:"aria-live",level:2},{value:"Tabindex",id:"tabindex",level:2},{value:"Orden de tabulaci\xf3n",id:"orden-de-tabulaci\xf3n",level:3},{value:"Selectores css",id:"selectores-css",level:2}],d={toc:p};function c(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:" ",src:t(6371).Z,width:"1088",height:"826"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/standards-guidelines/aria/"},"WAI-ARIA")," es una especificaci\xf3n escrita por la W3C pero no tiene relaci\xf3n con HTML, se basa en una serie atributos y roles adicionales que ",(0,i.kt)("strong",{parentName:"p"},"a\xf1aden una sem\xe1ntica adicional"),". "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"La recomendaci\xf3n actual es WAI-ARIA 1.1, la ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.2/"},"versi\xf3n 1.2 de WAI-ARIA")," est\xe1 aun en fase borrador.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\xdasalo en p\xe1ginas con actualizaciones de contenido din\xe1micas, o para conocer el estado de controles avanzados (widgets), como por ejemplo sliders, carruseles o modales.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nos permite definir el ",(0,i.kt)("strong",{parentName:"p"},"rol")," que tiene un elemento, indicar sus ",(0,i.kt)("strong",{parentName:"p"},"propiedades")," y su ",(0,i.kt)("strong",{parentName:"p"},"estado")," actual.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Podemos cambiar din\xe1micamente las propiedades o el estado")," de un elemento, pero nunca el rol.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reemplaza elementos HTML, ejemplo: ",(0,i.kt)("inlineCode",{parentName:"p"},'<div role="button">')," se comportar\xe1 como un ",(0,i.kt)("inlineCode",{parentName:"p"},"<button>"),", aunque ",(0,i.kt)("strong",{parentName:"p"},"siempre se recomienda usar marcado nativo"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Roles"),": Definen lo que es o hace un elemento a los asistentes.\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"},"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#role_definitions"},"https://www.w3.org/TR/wai-aria-1.1/#role_definitions")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Roles de estructura: Utilizados para describir las distintas estructuras de organizaci\xf3n de una p\xe1gina. (article, toolbar, row, list, etc)"),(0,i.kt)("li",{parentName:"ul"},"Roles abstractos: roles utilizados por el navegador."),(0,i.kt)("li",{parentName:"ul"},"Roles tipo widget: Definen patrones interactivos comunes, como por ejemplo para un slider, switch, tabs, suelen requerir de c\xf3digo js para modificar su valor."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Propiedades"),": Define las propiedades de los elementos para darles un significado o sem\xe1ntica adicional\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def"},"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Estados"),' : Especifica las condiciones actuales del elemento, ejemplo aria-disabled="true"\n',(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def"},"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-busy")," Indica si un elemento y su sub\xe1rbol se est\xe1n actualizando actualmente."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-checked")," Se usa con en checkbox o radio buttons para indicar si est\xe1 seleccionado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-disabled")," Indica que el elemento est\xe1 deshabilitado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-expanded")," Indica si el elemento, u otro elemento del grupo que controla, est\xe1 actualmente expandido o colapsado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-grabbed")," Indica el estado \u201cagarrado\u201d de un elemento en una operaci\xf3n de drag&drop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-hidden")," Indica que el elemento y todos sus descendientes no son visibles ni perceptibles para ning\xfan usuario."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-invalid")," Indica que el valor que se ha rellenado no se ajusta al formato esperado por el campo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-pressed")," Establece o recupera el estado \u201cpresionado\u201d de un bot\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-selected")," Establece o elimina el estado \u201cselected\u201d del elemento."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-current")," Indica cual es el elemento actual dentro de un contenedor o conjunto de elementos relacionados."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby")," Enlaza a un elemento para dar m\xe1s informaci\xf3n, se asocia mediante su ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-required")," Indica si se debe completar de forma obligatoria un elemento del formulario.")))),(0,i.kt)("admonition",{title:"Nota",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Recuerda que un rol de ARIA anula el rol inherente de un elemento HTML."),(0,i.kt)("p",{parentName:"admonition"},"Por ejemplo, en ",(0,i.kt)("inlineCode",{parentName:"p"},'<img role="button">'),", la etiqueta img ser\xe1 interpretada como un bot\xf3n.")),(0,i.kt)("h2",{id:"aria-live"},"Aria-live"),(0,i.kt)("p",null,"A\xf1adiremos el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-live"),'  para indicar que es una "regi\xf3n viva", es decir, que su contenido se modifica y actualiza din\xe1micamente. Por ejemplo un listado de "\xdaltimos mensajes", que se actualiza cada 10 segundos autom\xe1ticamente.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'aria-live="off"')," - los cambios no se anunciar\xe1n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'aria-live="polite"')," - los cambios se anunciar\xe1n al usuario pero sin interrumpirle de su acci\xf3n actual."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'aria-live="assertive"')," - los cambios se anuncian de inmediato, independientemente de lo que el usuario est\xe9 haciendo. ")),(0,i.kt)("p",null,"El valor por defecto de ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-live")," es assertive."),(0,i.kt)("h2",{id:"tabindex"},"Tabindex"),(0,i.kt)("p",null,"En HTML s\xf3lo pueden recibir el foco elementos de formulario (input, textarea, select, ... ), enlaces y botones. Para situaciones donde queramos ",(0,i.kt)("strong",{parentName:"p"},"hacer foco en elementos no seleccionables"),", usaremos el atributo WAI-ARIA ",(0,i.kt)("inlineCode",{parentName:"p"},"tabindex"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'tabindex="0"'),"\nPermite que elementos no focusables (div, li, p, ...) puedan recibir el foco.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'tabindex="-1"'),"\nEvita que el elemento sea focusable."))),(0,i.kt)("h3",{id:"orden-de-tabulaci\xf3n"},"Orden de tabulaci\xf3n"),(0,i.kt)("p",null,"Tambi\xe9n podemos controlar en qu\xe9 orden vamos a posicionar el foco en los elementos, independientemente de la posici\xf3n de estos en la p\xe1gina."),(0,i.kt)("p",null,"Para ello asignaremos distintos valores num\xe9ricos a ",(0,i.kt)("inlineCode",{parentName:"p"},"tabindex"),", donde ",(0,i.kt)("inlineCode",{parentName:"p"},'tabindex="1"')," ser\xe1 el primer elemento seleccionado, ",(0,i.kt)("inlineCode",{parentName:"p"},'tabindex="2"')," el segundo, etc ..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\n\x3c!-- segundo elemento que recibir\xe1 el foco al tabular --\x3e\n<div tabindex="2">...</div>\n\n\x3c!-- tercer elemento que recibir\xe1 el foco al tabular --\x3e\n<div tabindex="3">...</div>\n\n\x3c!-- primer elemento que recibir\xe1 el foco al tabular --\x3e\n<div tabindex="1">...</div>\n')),(0,i.kt)("h2",{id:"selectores-css"},"Selectores css"),(0,i.kt)("p",null,"Podemos seleccionar los atributos WAI-ARIA mediante CSS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'div[role="navigation"] { color: blue; background-color: inherit; }\n')))}c.isMDXComponent=!0},6371:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/wai-aria-632b0f4f5f03e187a5da223031bc00f4.svg"}}]);