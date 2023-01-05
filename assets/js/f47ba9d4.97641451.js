"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[265],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"pdf",title:"PDF",slug:"/pdf",image:"/img/pdf.svg",description:"Crear documentos PDF accesibles",keywords:["pdf accesible","accesibilidad pdf","documentos pdf accesibles"]},i=void 0,l={unversionedId:"pautas/pdf",id:"pautas/pdf",title:"PDF",description:"Crear documentos PDF accesibles",source:"@site/docs/pautas/pdf.md",sourceDirName:"pautas",slug:"/pdf",permalink:"/pdf",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/pdf.md",tags:[],version:"current",frontMatter:{id:"pdf",title:"PDF",slug:"/pdf",image:"/img/pdf.svg",description:"Crear documentos PDF accesibles",keywords:["pdf accesible","accesibilidad pdf","documentos pdf accesibles"]},sidebar:"tutorialSidebar",previous:{title:"Navegaci\xf3n",permalink:"/navegacion"},next:{title:"SVG",permalink:"/svg"}},s={},p=[],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/img/pdf.svg",alt:""}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El formato pdf fue creado en 1993 por Adobe Systems, se convirti\xf3 en un est\xe1ndar abierto el 1 de julio de 2008 y publicado por la Organizaci\xf3n Internacional de Estandarizaci\xf3n (ISO) como ",(0,n.kt)("a",{parentName:"p",href:"https://www.iso.org/standard/75839.html"},"ISO 32000-2"),".")),(0,n.kt)("p",null,"Las pautas para hacer un documento PDF accesible son pr\xe1cticamente iguales a las de un contenido web, estos son los ",(0,n.kt)("strong",{parentName:"p"},"puntos m\xe1s importantes en la accesibilidad de un PDF"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"A\xf1ade un t\xedtulo al documento")," (pesta\xf1a descripci\xf3n). ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF18"},"WCAG-PDF18")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Indica el idioma del documento"),", e indica tambi\xe9n el idioma en los textos en los que sea diferente al idioma principal, esto se puede hacer mediante etiqueta span. ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF16"},"WCAG-PDF16")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF19"},"WCAG-PDF19")),(0,n.kt)("li",{parentName:"ul"},"Al igual que para secciones con idiomas distintos, puedes usar span para ",(0,n.kt)("strong",{parentName:"li"},"a\xf1adir acr\xf3nimos o abreviaturas"),". ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF8"},"WCAG-PDF8")),(0,n.kt)("li",{parentName:"ul"},"Incluir ",(0,n.kt)("strong",{parentName:"li"},"texto alternativo a las im\xe1genes y enlaces"),". ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF1"},"WCAG-PDF1")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF13"},"WCAG-PDF13")),(0,n.kt)("li",{parentName:"ul"},"En caso de im\xe1genes decorativas, utiliza la etiqueta (artifact) para que no las anuncien los lectores. ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF4"},"WCAG-PDF4")),(0,n.kt)("li",{parentName:"ul"},"Al igual que en la web, hay que definir un ",(0,n.kt)("strong",{parentName:"li"},"marcado sem\xe1ntico correcto"),", es decir, definir correctamente los encabezados, tablas, formularios, listas, etc. ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF5"},"WCAG-PDF5")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF6"},"WCAG-PDF6")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF9"},"WCAG-PDF9")),(0,n.kt)("li",{parentName:"ul"},"Los encabezados deben tener ",(0,n.kt)("strong",{parentName:"li"},"informaci\xf3n relevante"),". ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF14"},"WCAG-PDF14")),(0,n.kt)("li",{parentName:"ul"},"Si se utilizan ",(0,n.kt)("strong",{parentName:"li"},"formularios en el PDF"),", asocia cada label con su campo correspondiente, marca los campos obligatorios e informa en caso de alg\xfan error. ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF10"},"WCAG-PDF10")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF12"},"WCAG-PDF12")," - ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF22"},"WCAG-PDF22")),(0,n.kt)("li",{parentName:"ul"},"El bot\xf3n de env\xedo de formulario debe ser un submit. ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF15"},"WCAG-PDF15")),(0,n.kt)("li",{parentName:"ul"},"Revisa que el ",(0,n.kt)("strong",{parentName:"li"},"orden de lectura y tabulaci\xf3n sea coherente"),". ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF3"},"WCAG-PDF3")),(0,n.kt)("li",{parentName:"ul"},"Convierte ",(0,n.kt)("strong",{parentName:"li"},"textos escaneados a texto mediante OCR"),". ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF7"},"WCAG-PDF7")),(0,n.kt)("li",{parentName:"ul"},"El documento debe tener marcadores, si lo hemos ",(0,n.kt)("strong",{parentName:"li"},"estructurado correctamente las cabeceras"),", estos se generar\xe1n autom\xe1ticamente. ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF2"},"WCAG-PDF2"))),(0,n.kt)("admonition",{title:"Nota",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Para una revisi\xf3n completa de la accesibilidad de un PDF, utiliza un lector de pantalla como por ejemplo ",(0,n.kt)("a",{parentName:"p",href:"https://www.nvaccess.org/"},"NVDA"))),(0,n.kt)("p",null,"En la secci\xf3n de ",(0,n.kt)("a",{parentName:"p",href:"recursos#accesibilidad-en-documentos"},"recursos")," puedes encontrar herramientas para analizar la accesibilidad en documentos."))}m.isMDXComponent=!0}}]);