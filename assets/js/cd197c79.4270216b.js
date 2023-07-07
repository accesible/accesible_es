"use strict";(self.webpackChunkaccesible=self.webpackChunkaccesible||[]).push([[401],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return t?n.createElement(k,l(l({ref:a},u),{},{components:t})):n.createElement(k,l({ref:a},u))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3738:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const r={id:"wai-aria",title:"WAI-ARIA",slug:"/wai-aria",image:"/img/wai-aria.svg",description:"Qu\xe9 es Wai-aria y ejemplos sencillos de uso",keywords:["wai-aria","atributos y roles wai-aria"]},l=void 0,o={unversionedId:"pautas/wai-aria",id:"pautas/wai-aria",title:"WAI-ARIA",description:"Qu\xe9 es Wai-aria y ejemplos sencillos de uso",source:"@site/docs/pautas/wai-aria.md",sourceDirName:"pautas",slug:"/wai-aria",permalink:"/wai-aria",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/wai-aria.md",tags:[],version:"current",frontMatter:{id:"wai-aria",title:"WAI-ARIA",slug:"/wai-aria",image:"/img/wai-aria.svg",description:"Qu\xe9 es Wai-aria y ejemplos sencillos de uso",keywords:["wai-aria","atributos y roles wai-aria"]},sidebar:"tutorialSidebar",previous:{title:"Tablas",permalink:"/tabla"}},s={},p=[{value:"Roles, propiedades y estados",id:"roles-propiedades-y-estados",level:2},{value:"Roles",id:"roles",level:3},{value:"Roles de estructura",id:"roles-de-estructura",level:4},{value:"Roles Abstractos",id:"roles-abstractos",level:4},{value:"Propiedades",id:"propiedades",level:3},{value:"Estados",id:"estados",level:3},{value:"Aria-live",id:"aria-live",level:2},{value:"Tabindex",id:"tabindex",level:2},{value:"Orden de tabulaci\xf3n",id:"orden-de-tabulaci\xf3n",level:3},{value:"Selectores css para WAI-ARIA",id:"selectores-css-para-wai-aria",level:2}],u={toc:p},d="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(d,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/img/wai-aria.svg",alt:""}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/standards-guidelines/aria/"},"WAI-ARIA \u2197\ufe0f")," es una especificaci\xf3n escrita por la ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org"},"W3C \u2197\ufe0f")," pero no tiene relaci\xf3n con HTML, se basa en una serie atributos y roles adicionales que ",(0,i.kt)("strong",{parentName:"p"},"a\xf1aden una sem\xe1ntica adicional"),". "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"La recomendaci\xf3n actual es la ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.2/"},"versi\xf3n 1.2 de WAI-ARIA \u2197\ufe0f")," lanzada el 6 de junio de 2023, aqu\xed te contamos las novedades.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resulta muy \xfatil usar ",(0,i.kt)("strong",{parentName:"li"},"WAI-ARIA")," en p\xe1ginas con actualizaci\xf3n de contenido din\xe1mico, o para conocer el estado de controles avanzados (widgets), como por ejemplo sliders, carruseles o modales."),(0,i.kt)("li",{parentName:"ul"},"Nos permite definir el ",(0,i.kt)("strong",{parentName:"li"},"rol")," que tiene un elemento, indicar sus ",(0,i.kt)("strong",{parentName:"li"},"propiedades")," y su ",(0,i.kt)("strong",{parentName:"li"},"estado")," actual."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Podemos cambiar din\xe1micamente las propiedades o el estado")," de un elemento, pero nunca el rol."),(0,i.kt)("li",{parentName:"ul"},"Reemplaza elementos HTML, ejemplo: ",(0,i.kt)("inlineCode",{parentName:"li"},'<div role="button">')," se comportar\xe1 como un ",(0,i.kt)("inlineCode",{parentName:"li"},"<button>"),", aunque ",(0,i.kt)("strong",{parentName:"li"},"siempre se recomienda usar marcado nativo"),".")),(0,i.kt)("admonition",{title:"Nota",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"En la W3C recuerdan que ",(0,i.kt)("strong",{parentName:"p"},"es mejor no tener ARIA que usar un ARIA err\xf3neo"),"."),(0,i.kt)("p",{parentName:"admonition"},"Para los usuarios de lectores de pantalla, ARIA controla la representaci\xf3n de su experiencia no visual, pero un ARIA incorrecto provocar\xe1 desorientaci\xf3n.")),(0,i.kt)("h2",{id:"roles-propiedades-y-estados"},"Roles, propiedades y estados"),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"Los roles de wai-aria, definen lo que es o hace un elemento."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Roles de estructura"),": Utilizados para describir las distintas estructuras de organizaci\xf3n de una p\xe1gina. (article, toolbar, row, list, etc)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.2/#document_structure_roles"},"W3C WAI-ARIA Roles estructura \u2197\ufe0f")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"application"),(0,i.kt)("li",{parentName:"ul"},"article"),(0,i.kt)("li",{parentName:"ul"},"blockquote"),(0,i.kt)("li",{parentName:"ul"},"caption"),(0,i.kt)("li",{parentName:"ul"},"cell"),(0,i.kt)("li",{parentName:"ul"},"columnheader"),(0,i.kt)("li",{parentName:"ul"},"definition"),(0,i.kt)("li",{parentName:"ul"},"deletion"),(0,i.kt)("li",{parentName:"ul"},"directory"),(0,i.kt)("li",{parentName:"ul"},"document"),(0,i.kt)("li",{parentName:"ul"},"emphasis"),(0,i.kt)("li",{parentName:"ul"},"feed"),(0,i.kt)("li",{parentName:"ul"},"figure"),(0,i.kt)("li",{parentName:"ul"},"generic"),(0,i.kt)("li",{parentName:"ul"},"group"),(0,i.kt)("li",{parentName:"ul"},"heading"),(0,i.kt)("li",{parentName:"ul"},"img"),(0,i.kt)("li",{parentName:"ul"},"insertion"),(0,i.kt)("li",{parentName:"ul"},"list"),(0,i.kt)("li",{parentName:"ul"},"listitem"),(0,i.kt)("li",{parentName:"ul"},"math"),(0,i.kt)("li",{parentName:"ul"},"meter"),(0,i.kt)("li",{parentName:"ul"},"none"),(0,i.kt)("li",{parentName:"ul"},"note"),(0,i.kt)("li",{parentName:"ul"},"paragraph"),(0,i.kt)("li",{parentName:"ul"},"presentation"),(0,i.kt)("li",{parentName:"ul"},"row"),(0,i.kt)("li",{parentName:"ul"},"rowgroup"),(0,i.kt)("li",{parentName:"ul"},"rowheader"),(0,i.kt)("li",{parentName:"ul"},"separator (when not focusable)"),(0,i.kt)("li",{parentName:"ul"},"strong"),(0,i.kt)("li",{parentName:"ul"},"subscript"),(0,i.kt)("li",{parentName:"ul"},"superscript"),(0,i.kt)("li",{parentName:"ul"},"table"),(0,i.kt)("li",{parentName:"ul"},"term"),(0,i.kt)("li",{parentName:"ul"},"time"),(0,i.kt)("li",{parentName:"ul"},"toolbar"),(0,i.kt)("li",{parentName:"ul"},"tooltip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Roles abstractos"),": roles utilizados por el navegador.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Roles tipo widget"),": Definen patrones interactivos comunes, como por ejemplo para un slider, switch, tabs, suelen requerir de c\xf3digo js para modificar su valor.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"M\xe1s informaci\xf3n sobre los roles WAI-ARIA en:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"},"Mozilla WAI-ARIA Roles \u2197\ufe0f")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-1.1/#role_definitions"},"W3C WAI-ARIA Roles \u2197\ufe0f"))))),(0,i.kt)("h4",{id:"roles-de-estructura"},"Roles de estructura"),(0,i.kt)("h4",{id:"roles-abstractos"},"Roles Abstractos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"command"),(0,i.kt)("li",{parentName:"ul"},"composite"),(0,i.kt)("li",{parentName:"ul"},"input"),(0,i.kt)("li",{parentName:"ul"},"landmark"),(0,i.kt)("li",{parentName:"ul"},"range"),(0,i.kt)("li",{parentName:"ul"},"roletype"),(0,i.kt)("li",{parentName:"ul"},"section"),(0,i.kt)("li",{parentName:"ul"},"sectionhead"),(0,i.kt)("li",{parentName:"ul"},"select"),(0,i.kt)("li",{parentName:"ul"},"structure"),(0,i.kt)("li",{parentName:"ul"},"widget"),(0,i.kt)("li",{parentName:"ul"},"window")),(0,i.kt)("h3",{id:"propiedades"},"Propiedades"),(0,i.kt)("p",null,"Las propiedades WAI-ARIA se encarga de otorgar a los elementos un significado o sem\xe1ntica adicional"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"M\xe1s informaci\xf3n sobre las propiedades en:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def"},"WAI-ARIA Propiedades \u2197\ufe0f"))))),(0,i.kt)("h3",{id:"estados"},"Estados"),(0,i.kt)("p",null,"Los estados WAI-ARIA especifican las condiciones actuales del elemento, aqu\xed te mostramos algunos de los m\xe1s utilizados:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-busy")," Indica si un elemento y su sub\xe1rbol se est\xe1n actualizando actualmente."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-checked")," Se usa con en checkbox o radio buttons para indicar si est\xe1 seleccionado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-disabled")," Indica que el elemento est\xe1 deshabilitado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-expanded")," Indica si el elemento, u otro elemento del grupo que controla, est\xe1 actualmente expandido o colapsado."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-grabbed")," Indica el estado \u201cagarrado\u201d de un elemento en una operaci\xf3n de drag&drop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-hidden")," Indica que el elemento y todos sus descendientes no son visibles ni perceptibles para ning\xfan usuario."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-invalid")," Indica que el valor que se ha rellenado no se ajusta al formato esperado por el campo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-pressed")," Establece o recupera el estado \u201cpresionado\u201d de un bot\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-selected")," Establece o elimina el estado \u201cselected\u201d del elemento."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-current")," Indica cual es el elemento actual dentro de un contenedor o conjunto de elementos relacionados."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby")," Enlaza a un elemento para dar m\xe1s informaci\xf3n, se asocia mediante su ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aria-required")," Indica si se debe completar de forma obligatoria un elemento del formulario."),(0,i.kt)("li",{parentName:"ul"},"M\xe1s informaci\xf3n sobre los estados en:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def"},"WAI-ARIA Estados \u2197\ufe0f"))))),(0,i.kt)("admonition",{title:"Nota",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Recuerda que ",(0,i.kt)("strong",{parentName:"p"},"un rol de ARIA anula el rol inherente de un elemento HTML"),"."),(0,i.kt)("p",{parentName:"admonition"},"Por ejemplo, en ",(0,i.kt)("inlineCode",{parentName:"p"},'<img role="button">'),", la etiqueta img ser\xe1 interpretada como un bot\xf3n y no como una imagen.")),(0,i.kt)("h2",{id:"aria-live"},"Aria-live"),(0,i.kt)("p",null,"A\xf1adiremos el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-live"),'  para indicar que es una "regi\xf3n viva", es decir, que su contenido se modifica y actualiza din\xe1micamente. Por ejemplo un listado de "\xdaltimos mensajes", que se actualiza cada 10 segundos autom\xe1ticamente.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'aria-live="off"')," - los cambios no se anunciar\xe1n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'aria-live="polite"')," - los cambios se anunciar\xe1n al usuario pero sin interrumpirle de su acci\xf3n actual."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'aria-live="assertive"')," - los cambios se anuncian de inmediato, independientemente de lo que el usuario est\xe9 haciendo. ")),(0,i.kt)("p",null,"El valor por defecto de ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-live")," es assertive."),(0,i.kt)("h2",{id:"tabindex"},"Tabindex"),(0,i.kt)("p",null,"En HTML s\xf3lo pueden recibir el foco elementos de formulario (input, textarea, select, ... ), enlaces y botones. Para situaciones donde queramos ",(0,i.kt)("strong",{parentName:"p"},"hacer foco en elementos no seleccionables"),", usaremos el atributo WAI-ARIA ",(0,i.kt)("inlineCode",{parentName:"p"},"tabindex"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'tabindex="0"'),"\nPermite que elementos no focusables (div, li, p, ...) puedan recibir el foco.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'tabindex="-1"'),"\nEvita que el elemento sea focusable."))),(0,i.kt)("h3",{id:"orden-de-tabulaci\xf3n"},"Orden de tabulaci\xf3n"),(0,i.kt)("p",null,"Tambi\xe9n podemos controlar en qu\xe9 orden vamos a posicionar el foco en los elementos, independientemente de la posici\xf3n de estos en la p\xe1gina."),(0,i.kt)("p",null,"Para ello asignaremos distintos valores num\xe9ricos a ",(0,i.kt)("inlineCode",{parentName:"p"},"tabindex"),", donde ",(0,i.kt)("inlineCode",{parentName:"p"},'tabindex="1"')," ser\xe1 el primer elemento seleccionado, ",(0,i.kt)("inlineCode",{parentName:"p"},'tabindex="2"')," el segundo, etc ..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\n\x3c!-- segundo elemento que recibir\xe1 el foco al tabular --\x3e\n<div tabindex="2">...</div>\n\n\x3c!-- tercer elemento que recibir\xe1 el foco al tabular --\x3e\n<div tabindex="3">...</div>\n\n\x3c!-- primer elemento que recibir\xe1 el foco al tabular --\x3e\n<div tabindex="1">...</div>\n')),(0,i.kt)("h2",{id:"selectores-css-para-wai-aria"},"Selectores css para WAI-ARIA"),(0,i.kt)("p",null,"Podemos seleccionar los atributos WAI-ARIA mediante CSS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'div[role="navigation"] { color: blue; background-color: inherit; }\n')))}m.isMDXComponent=!0}}]);