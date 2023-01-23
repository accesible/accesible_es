"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[556],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return t?n.createElement(k,o(o({ref:a},p),{},{components:t})):n.createElement(k,o({ref:a},p))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=u;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7436:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=t(7462),i=(t(7294),t(3905));const l={id:"contenido",title:"Contenido",slug:"/contenido",image:"/img/contenido.svg",description:"Contenido accesible para la web con ejemplos sencillos",keywords:["contenidos accesibles","listas","abreviaturas y acr\xf3nimos","captcha","scroll infinito"]},o=void 0,r={unversionedId:"pautas/contenido",id:"pautas/contenido",title:"Contenido",description:"Contenido accesible para la web con ejemplos sencillos",source:"@site/docs/pautas/contenido.md",sourceDirName:"pautas",slug:"/contenido",permalink:"/contenido",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/contenido.md",tags:[],version:"current",frontMatter:{id:"contenido",title:"Contenido",slug:"/contenido",image:"/img/contenido.svg",description:"Contenido accesible para la web con ejemplos sencillos",keywords:["contenidos accesibles","listas","abreviaturas y acr\xf3nimos","captcha","scroll infinito"]},sidebar:"tutorialSidebar",previous:{title:"Color",permalink:"/color"},next:{title:"Encabezados",permalink:"/encabezado"}},s={},d=[{value:"Texto",id:"texto",level:2},{value:"Tama\xf1o de fuente",id:"tama\xf1o-de-fuente",level:3},{value:"Espaciado",id:"espaciado",level:3},{value:"Abreviaturas / Acr\xf3nimos",id:"abreviaturas--acr\xf3nimos",level:2},{value:"Listas",id:"listas",level:2},{value:"Tipos de listas",id:"tipos-de-listas",level:3},{value:"Scroll infinito",id:"scroll-infinito",level:2},{value:"Idioma",id:"idioma",level:2},{value:"Zoom",id:"zoom",level:2},{value:"Ocultar contenido",id:"ocultar-contenido",level:2},{value:"Responsive",id:"responsive",level:2},{value:"Media queries con css",id:"media-queries-con-css",level:3},{value:"Media queries con javascript",id:"media-queries-con-javascript",level:3},{value:"Control de tiempo",id:"control-de-tiempo",level:2},{value:"Captcha",id:"captcha",level:2}],p={toc:d};function m(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/img/contenido.svg",alt:""}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Usa ",(0,i.kt)("strong",{parentName:"li"},"rem/em en vez de px")," para definir el ",(0,i.kt)("a",{parentName:"li",href:"#tama%C3%B1o-de-fuente"},"tama\xf1o de fuente"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No bloquees el zoom"),", ",(0,i.kt)("a",{parentName:"li",href:"#zoom"},"ver zoom"),"."),(0,i.kt)("li",{parentName:"ul"},"Usa paginaci\xf3n antes que ",(0,i.kt)("a",{parentName:"li",href:"#scroll-infinito"},"scroll infinito"),"."),(0,i.kt)("li",{parentName:"ul"},"Utiliza roles de ",(0,i.kt)("a",{parentName:"li",href:"wai-aria"},"WAI-ARIA")),(0,i.kt)("li",{parentName:"ul"},"Identifica los ",(0,i.kt)("a",{parentName:"li",href:"encabezado"},"encabezados")," y asigna las etiquetas adecuadas para estructurar la p\xe1gina."),(0,i.kt)("li",{parentName:"ul"},"Usa las etiquetas ",(0,i.kt)("inlineCode",{parentName:"li"},"ol"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ul")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"dl")," para ",(0,i.kt)("a",{parentName:"li",href:"#listas"},"listas")),(0,i.kt)("li",{parentName:"ul"},"Ning\xfan elemento deber\xeda parpadear m\xe1s de 3 veces por segundo.")),(0,i.kt)("h2",{id:"texto"},"Texto"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Para dar \xe9nfasis, utiliza la etiqueta ",(0,i.kt)("inlineCode",{parentName:"li"},"<strong>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Evita el alineado central"),", alinea el texto a la izquierda para idiomas de izquierda a derecha ( LTR ) y a la derecha para idiomas de derecha a izquierda ( RTL )."),(0,i.kt)("li",{parentName:"ul"},"No escribas grandes cantidades de texto en MAY\xdaSCULAS."),(0,i.kt)("li",{parentName:"ul"},"Para texto animado, ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"},"utiliza prefrencias de movimiento")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Utiliza un lenguaje sencillo")," y evita las figuras ret\xf3ricas, los modismos y las met\xe1foras complicadas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recomendamos no usar m\xe1s de 2 tipos de fuente"),", cuantas m\xe1s usemos, m\xe1s tiempo de adaptaci\xf3n necesitar\xe1 el usuario (a parte de empeorar el rendimiento de la web).")),(0,i.kt)("h3",{id:"tama\xf1o-de-fuente"},"Tama\xf1o de fuente"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"No uses medidas fijas como px"),"."),(0,i.kt)("li",{parentName:"ul"},"El tama\xf1o de fuente debe ser de al menos ",(0,i.kt)("strong",{parentName:"li"},"12-14 puntos")," o su equivalente."),(0,i.kt)("li",{parentName:"ul"},"Texto en im\xe1genes debe ser al menos de 14 puntos y tener ",(0,i.kt)("a",{parentName:"li",href:"color#contraste"},"contraste")," suficiente."),(0,i.kt)("li",{parentName:"ul"},"Permite a los usuarios ",(0,i.kt)("strong",{parentName:"li"},"incrementar el tama\xf1o")," de todos los textos ",(0,i.kt)("strong",{parentName:"li"},"hasta el 200%"),". ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"},"Criterio 1.4.4"))),(0,i.kt)("h3",{id:"espaciado"},"Espaciado"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un espacio entre l\xedneas adecuado ",(0,i.kt)("strong",{parentName:"li"},"mejora la legibilidad"),", permite pueda ser modificado por el usuario."),(0,i.kt)("li",{parentName:"ul"},"El contenido debe tener al menos el siguiente formateo:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Espacio entre l\xedneas: al menos 1.5 veces el tama\xf1o de la fuente."),(0,i.kt)("li",{parentName:"ul"},"Espacio entre p\xe1rrafos: al menos 2 veces el tama\xf1o de la fuente."),(0,i.kt)("li",{parentName:"ul"},"Espacio entre letras: al menos 0.12 veces el tama\xf1o de la fuente."),(0,i.kt)("li",{parentName:"ul"},"Espacio entre palabras: al menos 0.16 veces el tama\xf1o de la fuente.")))),(0,i.kt)("h2",{id:"abreviaturas--acr\xf3nimos"},"Abreviaturas / Acr\xf3nimos"),(0,i.kt)("p",null,"Utiliza la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<abbr>")," para marcar las abreviaturas, si fuera necesario, se puede complementar la informaci\xf3n con el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>medicamentos: clorpromazina, quinidina, antibi\xf3ticos, <abbr>etc.</abbr></p>\n")),(0,i.kt)("p",null,"En el caso de acr\xf3nimos, usaremos la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<acronym>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<p>\xa1Usar <acronym>HTML</acronym> es f\xe1cil y divertido!</p>\n")),(0,i.kt)("admonition",{title:"Nota",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"La abreviatura es una versi\xf3n corta de una palabra y puede estar en min\xfasculas."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"etc. = etc\xe9tera"),(0,i.kt)("li",{parentName:"ul"},"tel. = tel\xe9fono")),(0,i.kt)("p",{parentName:"admonition"},"El acr\xf3nimo est\xe1 formado por la primera letra de cada palabra de una oraci\xf3n y suelen est\xe1r en may\xfasculas:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"I.P.N. = Instituto Polit\xe9cnico Nacional."),(0,i.kt)("li",{parentName:"ul"},"OVNI = Objeto volador no identificado\n:::")),(0,i.kt)("h2",{parentName:"admonition",id:"enlaces"},"Enlaces"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},'Describe textualmente el objetivo de los enlaces, evita los "m\xe1s informaci\xf3n", "click aqu\xed".'),(0,i.kt)("li",{parentName:"ul"},"Tienen que distinguirse visualmente del resto de texto."),(0,i.kt)("li",{parentName:"ul"},"Deben destacar cuando reciben el foco de teclado.")),(0,i.kt)("h3",{parentName:"admonition",id:"resaltar-foco-sobre-enlaces"},"Resaltar foco sobre enlaces"),(0,i.kt)("p",{parentName:"admonition"},"Hay dos formas para resaltar los enlaces debemos usar un contorno (outline) con las siguientes propiedades:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Al menos 1px de grosor"),(0,i.kt)("li",{parentName:"ul"},"Se una l\xednea s\xf3lida"),(0,i.kt)("li",{parentName:"ul"},"Rodear el elemento entero")),(0,i.kt)("p",{parentName:"admonition"},"El contraste del elemento focalizado debe ser al menos de ",(0,i.kt)("strong",{parentName:"p"},"3:1")," contra el fondo que lo contenga.")),(0,i.kt)("p",null,'Utiliza enlaces "Saltar al contenido principal" - por ejemplo, a\xf1adiendo un enlace en la parte superior de la p\xe1gina que lleve al usuario al comienzo del contenido principal.\n:::'),(0,i.kt)("h2",{id:"listas"},"Listas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utiliza el marcado correcto para las listas ",(0,i.kt)("inlineCode",{parentName:"li"},"<ul>, <ol>, <dt>"),", as\xed los lectores de pantalla las identificar\xe1n y sabr\xe1n cu\xe1ntos elementos tiene.")),(0,i.kt)("h3",{id:"tipos-de-listas"},"Tipos de listas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lista desordenada, esta lista se representa como una lista con vi\xf1etas de elementos"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ul>\n  <li>Manzanas</li>\n  <li>Peras</li>\n  <li>Limones</li>\n</ul>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lista ordenada, usamos la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<ol>"),", esta lista se representa como una lista numerada de elementos"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ol>\n  <li>Encender el ordenador</li>\n  <li>Abrir el navegador</li>\n  <li>Ir a la web de b\xfasqueda</li>\n  <li>Teclear el t\xe9rmino a buscar</li>\n</ol>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lista de definici\xf3n, usamos la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<dl>"),", esta lista se representa como pares de t\xe9rminos ",(0,i.kt)("inlineCode",{parentName:"p"},"<dt>")," y descripciones ",(0,i.kt)("inlineCode",{parentName:"p"},"<dd>")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<dl>\n  <dt>Caf\xe9</dt>\n  <dd>Bebida caliente negra</dd>\n  <dt>Leche</dt>\n  <dd>Bebida fr\xeda blanca</dd>\n</dl>\n")))),(0,i.kt)("h2",{id:"scroll-infinito"},"Scroll infinito"),(0,i.kt)("p",null,"El scroll infinito es una funcionalidad que de forma autom\xe1tica carga contenido cuando detecta que el usuario se desplaza hacia abajo."),(0,i.kt)("p",null,"Esto puede ser c\xf3modo, por ejemplo en las publicaciones de redes sociales, pero en otras ocasiones puede ser frustrante si no se ofrecen alternativas. Por ejemplo querer acceder directamente a un elemento que est\xe1 en un punto determinado en una lista grande, o intentar llegar al contenido del pie y no poder hasta que no hayamos cargado todos los elementos \ud83d\ude20."),(0,i.kt)("p",null,"La paginaci\xf3n nos permite localizar la informaci\xf3n de una forma m\xe1s f\xe1cil y r\xe1pida, a\xfan as\xed, si nuestro proyecto requiere de scroll infinito, WAI-ARIA nos ofrece una serie de atributos para que el ",(0,i.kt)("strong",{parentName:"p"},"scroll infinito sea accesible"),"."),(0,i.kt)("p",null,"El atributo ",(0,i.kt)("inlineCode",{parentName:"p"},'role="feed"')," permite que los lectores usen el cursor para desplazarse por el listado de elementos din\xe1micos."),(0,i.kt)("p",null,"El atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-busy")," indicar\xe1 si se est\xe1n renderizando elementos dentro de nuestro \xe1rea ",(0,i.kt)("inlineCode",{parentName:"p"},'role="feed"'),", durante la carga de elementos su valor debe ser ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," y al terminar esta carga deber\xe1 ser ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Si conocemos la posici\xf3n de los elementos dentro del listado, usaremos el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-posinset"),", y ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-setsize")," para indicar el n\xfamero total de elementos, si lo desconocemos ser\xe1 seteado a ",(0,i.kt)("inlineCode",{parentName:"p"},"-1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<section role="feed" aria-busy="false">\n  ...\n  <article aria-posinset="427" aria-setsize="-1">...</article>\n  <article aria-posinset="428" aria-setsize="-1">...</article>\n  <article aria-posinset="429" aria-setsize="-1">...</article>\n  ...\n</section>\n')),(0,i.kt)("p",null,"M\xe1s informaci\xf3n ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role"},"Feed role - developer.mozilla.org")),(0,i.kt)("h2",{id:"idioma"},"Idioma"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dentro de la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<html>"),", debemos especificar un idioma para la p\xe1gina mediante el atributo ",(0,i.kt)("strong",{parentName:"p"},"lang"),". ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"},"Criterio 3.1.1 - Idioma de la p\xe1gina")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en"></html>\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A\xf1ade el atributo ",(0,i.kt)("strong",{parentName:"p"},"lang")," en textos donde quieras que los lectores adapten la pronunciaci\xf3n. ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html"},"Criterio 3.1.2 - Idiomas en contenido")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'... y grit\xf3, <span lang="fr">c\'est fini!</span>\n')))),(0,i.kt)("h2",{id:"zoom"},"Zoom"),(0,i.kt)("p",null,"No debemos bloquer el zoom, no uses los atributos ",(0,i.kt)("inlineCode",{parentName:"p"},"user-scalable=no")," ni ",(0,i.kt)("inlineCode",{parentName:"p"},"maximum-scale=1.0")," de la metatag viewport."),(0,i.kt)("p",null,"La forma correcta de uso de viewport ser\xeda la siguiente:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n')),(0,i.kt)("p",null,"El usuario debe poder hacer zoom de 320px a 1280px, o una ampliaci\xf3n del 400%. ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow#viewing-distance-and-display-resolution"},"Criterio 1.4.10 - Reflujo")),(0,i.kt)("admonition",{title:"Nota",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Comprueba que no se superpone u oculta ning\xfan contenido al aumentar el zoom o espaciado de texto.")),(0,i.kt)("h2",{id:"ocultar-contenido"},"Ocultar contenido"),(0,i.kt)("p",null,"Si queremos ocultar contenido de forma accesible, aqu\xed te mostramos un ejemplo de c\xf3digo css:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".oculto-visualmente {\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n")),(0,i.kt)("h2",{id:"responsive"},"Responsive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Usa mediaqueries"),(0,i.kt)("li",{parentName:"ul"},"Ajusta contenidos usando ",(0,i.kt)("inlineCode",{parentName:"li"},"grid")," o ",(0,i.kt)("inlineCode",{parentName:"li"},"flexbox"),"."),(0,i.kt)("li",{parentName:"ul"},"No uses medidas fijas para contenedores."),(0,i.kt)("li",{parentName:"ul"},"Permite que las personas puedan usar la vista horizontal o vertical y seguir leyendo y usando todo. ",(0,i.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/orientation.html"},"Criterio 1.3.4 - Orientaci\xf3n")),(0,i.kt)("li",{parentName:"ul"},"La informaci\xf3n debe ser visible y ",(0,i.kt)("strong",{parentName:"li"},"no requerir scroll en dos dimensiones")," para:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contenido que se desplaza en vertical con una anchura equivalente a 320 p\xedxeles CSS."),(0,i.kt)("li",{parentName:"ul"},"Contenido que se desplaza en horizontal con una altura equivalente a 256 p\xedxeles CSS.")))),(0,i.kt)("admonition",{title:"Nota",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Hay excepciones donde si se permite scroll en dos dimensiones, como en im\xe1genes grandes, mapas o tablas.")),(0,i.kt)("h3",{id:"media-queries-con-css"},"Media queries con css"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'  <link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">\n')),(0,i.kt)("h3",{id:"media-queries-con-javascript"},"Media queries con javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let esMovil = window.matchMedia("only screen and (max-width: 480px)").matches;\n')),(0,i.kt)("h2",{id:"control-de-tiempo"},"Control de tiempo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Permite al usuario anular el tiempo de la caducidad de sesi\xf3n o ajustar este tiempo (debe ser al menos diez veces el tiempo por defecto)."),(0,i.kt)("li",{parentName:"ul"},"Notifica al usuario que la sesi\xf3n va a caducar con un mensaje (permite 20 segundos para interactuar con este aviso).")),(0,i.kt)("p",null,"Excepciones:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"El tiempo de caducidad es superior a 20 horas."),(0,i.kt)("li",{parentName:"ul"},"La caducidad de sesi\xf3n es esencial para el funcionamiento."),(0,i.kt)("li",{parentName:"ul"},"El l\xedmite de tiempo es requerido (ejemplo una subasta).")),(0,i.kt)("p",null,"M\xe1s informaci\xf3n sobre ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"},"tiempo ajustable"),"."),(0,i.kt)("h2",{id:"captcha"},"Captcha"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ofrece al menos dos modalidades de ",(0,i.kt)("abbr",{lang:"en",title:"Completely Automated Public Turing test to tell Computers and Humans Apart"},"CAPTCHA.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proporciona una alternativa"),", como por ejemplo contacto directo con atenci\xf3n al cliente para eludir el CAPTCHA."),(0,i.kt)("li",{parentName:"ul"},"No uses CAPTCHA para usuarios ya identificados.")))}m.isMDXComponent=!0}}]);