"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[120],{3905:function(e,a,t){t.d(a,{Zo:function(){return N},kt:function(){return d}});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},N=function(e){var a=c(e.components);return i.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},M=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,N=o(e,["components","mdxType","originalType","parentName"]),M=c(t),d=n,p=M["".concat(s,".").concat(d)]||M[d]||u[d]||l;return t?i.createElement(p,r(r({ref:a},N),{},{components:t})):i.createElement(p,r({ref:a},N))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,r=new Array(l);r[0]=M;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}M.displayName="MDXCreateElement"},6783:function(e,a,t){t.r(a),t.d(a,{assets:function(){return N},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=t(7462),n=t(3366),l=(t(7294),t(3905)),r=["components"],o={id:"contenido",title:"Contenido"},s=void 0,c={unversionedId:"contenido",id:"contenido",title:"Contenido",description:"img",source:"@site/docs/contenido.md",sourceDirName:".",slug:"/contenido",permalink:"/contenido",editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/contenido.md",tags:[],version:"current",frontMatter:{id:"contenido",title:"Contenido"},sidebar:"tutorialSidebar",previous:{title:"Color",permalink:"/color"},next:{title:"Encabezados",permalink:"/encabezado"}},N={},u=[{value:"Texto",id:"texto",level:2},{value:"Tama\xf1o de fuente",id:"tama\xf1o-de-fuente",level:3},{value:"Espaciado",id:"espaciado",level:3},{value:"Abreviaturas / Acr\xf3nimos",id:"abreviaturas--acr\xf3nimos",level:2},{value:"Enlaces",id:"enlaces",level:2},{value:"Listas",id:"listas",level:2},{value:"Tipos de listas",id:"tipos-de-listas",level:3},{value:"Scroll infinito",id:"scroll-infinito",level:2},{value:"Metatags",id:"metatags",level:2},{value:"Responsive",id:"responsive",level:2},{value:"Control de tiempo",id:"control-de-tiempo",level:2},{value:"Captcha",id:"captcha",level:2}],M={toc:u};function d(e){var a=e.components,o=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},M,o,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"img",src:t(124).Z,width:"879",height:"701"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Usa ",(0,l.kt)("strong",{parentName:"li"},"rem/em en vez de px")," para definir el ",(0,l.kt)("a",{parentName:"li",href:"#tama%C3%B1o-de-fuente"},"tama\xf1o de fuente"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"No bloquees el zoom"),", ",(0,l.kt)("a",{parentName:"li",href:"#metatags"},"ver metatags"),"."),(0,l.kt)("li",{parentName:"ul"},"Usa paginaci\xf3n antes que ",(0,l.kt)("a",{parentName:"li",href:"#scroll-infinito"},"scroll infinito"),"."),(0,l.kt)("li",{parentName:"ul"},"Utiliza roles de ",(0,l.kt)("a",{parentName:"li",href:"wai-aria"},"WAI-ARIA")," para identificar las zonas y regiones de la p\xe1gina (cabecera, men\xfa,\nzona principal, pie, etc.) y dales un nombre con el atributo aria-labelledby."),(0,l.kt)("li",{parentName:"ul"},"Identifica los ",(0,l.kt)("a",{parentName:"li",href:"encabezado"},"encabezados")," con las etiquetas ",(0,l.kt)("inlineCode",{parentName:"li"},"h1"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"h2"),", etc."),(0,l.kt)("li",{parentName:"ul"},"Usa las etiquetas ",(0,l.kt)("inlineCode",{parentName:"li"},"ol"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ul")," y ",(0,l.kt)("inlineCode",{parentName:"li"},"dl")," para ",(0,l.kt)("a",{parentName:"li",href:"#listas"},"listas")),(0,l.kt)("li",{parentName:"ul"},"Ning\xfan elemento puede destellear m\xe1s de 3 veces por segundo.")),(0,l.kt)("h2",{id:"texto"},"Texto"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Para dar \xe9nfasis, utiliza la etiqueta ",(0,l.kt)("inlineCode",{parentName:"li"},"<strong>"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Evita el alineado central"),", alinea el texto a la izquierda para idiomas de izquierda a derecha ( LTR ) y a la derecha para idiomas de derecha a izquierda ( RTL )."),(0,l.kt)("li",{parentName:"ul"},"No escribas grandes cantidades de texto en MAY\xdaSCULAS."),(0,l.kt)("li",{parentName:"ul"},"Para texto animado, ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"},"utiliza prefrencias de movimiento")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Utiliza un lenguaje sencillo")," y evita las figuras ret\xf3ricas, los modismos y las met\xe1foras complicadas."),(0,l.kt)("li",{parentName:"ul"},"A\xf1ade el atributo ",(0,l.kt)("strong",{parentName:"li"},"lang")," en textos donde quieras que los lectores adapten la pronunciaci\xf3n. ",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},'    ... y grit\xf3, <span lang="fr">c\'est fini!</span>\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"No se deber\xeda usar m\xe1s de 2 tipos de fuente"),", cuantas m\xe1s fuentes, m\xe1s tiempo de adaptaci\xf3n necesitar\xe1 el usuario.")),(0,l.kt)("h3",{id:"tama\xf1o-de-fuente"},"Tama\xf1o de fuente"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"No uses medidas fijas como px"),"."),(0,l.kt)("li",{parentName:"ul"},"El tama\xf1o de fuente debe ser de al menos ",(0,l.kt)("strong",{parentName:"li"},"12-14 puntos")," o su equivalente."),(0,l.kt)("li",{parentName:"ul"},"Texto en im\xe1genes debe ser al menos de 14 puntos y tener ",(0,l.kt)("a",{parentName:"li",href:"color#contraste"},"contraste")," suficiente."),(0,l.kt)("li",{parentName:"ul"},"Permite a los usuarios ",(0,l.kt)("strong",{parentName:"li"},"incrementar el tama\xf1o")," de todos los textos ",(0,l.kt)("strong",{parentName:"li"},"hasta el 200%"),".")),(0,l.kt)("h3",{id:"espaciado"},"Espaciado"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Un espacio entre l\xedneas adecuado ",(0,l.kt)("strong",{parentName:"li"},"mejora la legibilidad"),", permite pueda ser modificado por el usuario."),(0,l.kt)("li",{parentName:"ul"},"El contenido debe tener al menos el siguiente formateo:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Espacio entre l\xedneas: al menos 1.5 veces el tama\xf1o de la fuente."),(0,l.kt)("li",{parentName:"ul"},"Espacio entre p\xe1rrafos: al menos 2 veces el tama\xf1o de la fuente."),(0,l.kt)("li",{parentName:"ul"},"Espacio entre letras: al menos 0.12 veces el tama\xf1o de la fuente."),(0,l.kt)("li",{parentName:"ul"},"Espacio entre palabras: al menos 0.16 veces el tama\xf1o de la fuente.")))),(0,l.kt)("h2",{id:"abreviaturas--acr\xf3nimos"},"Abreviaturas / Acr\xf3nimos"),(0,l.kt)("p",null,"Utiliza la etiqueta ",(0,l.kt)("inlineCode",{parentName:"p"},"<abbr>")," para marcar las abreviaturas, si fuera necesario, se puede complementar la informaci\xf3n con el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>medicamentos: clorpromazina, quinidina, antibi\xf3ticos, <abbr>etc.</abbr></p>\n")),(0,l.kt)("p",null,"En el caso de acr\xf3nimos, usaremos la etiqueta ",(0,l.kt)("inlineCode",{parentName:"p"},"<acronym>"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<p>\xa1Usar <acronym>HTML</acronym> es f\xe1cil y divertido!</p>\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"La abreviatura es una versi\xf3n corta de una palabra y puede estar en min\xfasculas."),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"etc. = etc\xe9tera"),(0,l.kt)("li",{parentName:"ul"},"tel. = tel\xe9fono")),(0,l.kt)("p",{parentName:"div"},"El acr\xf3nimo est\xe1 formado por la primera letra de cada palabra de una oraci\xf3n y suelen est\xe1r en may\xfasculas:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"I.P.N. = Instituto Polit\xe9cnico Nacional."),(0,l.kt)("li",{parentName:"ul"},"OVNI = Objeto volador no identificado")))),(0,l.kt)("h2",{id:"enlaces"},"Enlaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Describe textualmente el objetivo de los enlaces, evita los "m\xe1s informaci\xf3n", "click aqu\xed".'),(0,l.kt)("li",{parentName:"ul"},"Tienen que distinguirse visualmente del resto de texto."),(0,l.kt)("li",{parentName:"ul"},"Deben destacar cuando reciben el foco de teclado.")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'Utiliza enlaces "Saltar al contenido principal" - por ejemplo, a\xf1adiendo un enlace en la parte superior de la p\xe1gina que lleve al usuario al comienzo del contenido principal.'))),(0,l.kt)("h2",{id:"listas"},"Listas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Utiliza el marcado correcto para las listas ",(0,l.kt)("inlineCode",{parentName:"li"},"<ul>, <ol>, <dt>"),", as\xed los lectores de pantalla las identificar\xe1n y sabr\xe1n cu\xe1ntos elementos tiene. ")),(0,l.kt)("h3",{id:"tipos-de-listas"},"Tipos de listas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lista desordenada, esta lista se representa como una lista con vi\xf1etas de elementos.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},"    <ul>\n        <li>Manzanas</li>\n        <li>Peras</li>\n        <li>Limones</li>\n    </ul>\n"))),(0,l.kt)("li",{parentName:"ul"},"Lista ordenada (",(0,l.kt)("inlineCode",{parentName:"li"},"<ol>"),"): esta lista se representa como una lista numerada de elementos (cada uno etiquetado con ",(0,l.kt)("inlineCode",{parentName:"li"},"<li>"),")."),(0,l.kt)("li",{parentName:"ul"},"Lista de definiciones (",(0,l.kt)("inlineCode",{parentName:"li"},"<dl>"),"): esta lista se representa como pares de t\xe9rminos (",(0,l.kt)("inlineCode",{parentName:"li"},"<dt>"),") y descripciones (",(0,l.kt)("inlineCode",{parentName:"li"},"<dd>"),").")),(0,l.kt)("h2",{id:"scroll-infinito"},"Scroll infinito"),(0,l.kt)("p",null,"El scroll infinito es una funcionalidad que de forma autom\xe1tica carga contenido cuando detecta que el usuario se desplaza hacia abajo."),(0,l.kt)("p",null,"Esto puede ser c\xf3modo, por ejemplo en las publicaciones de redes sociales, pero en otras ocasiones puede ser frustrante si no se ofrecen alternativas. Por ejemplo querer acceder directamente a un elemento que est\xe1 en un punto determinado en una lista, o intentar llegar al contenido del pie y no poder hasta que no hayamos cargado todo el listado \ud83d\ude20."),(0,l.kt)("p",null,"A\xfan as\xed, si nuestro proyecto requiere de esta funcionalidad, WAI-ARIA nos ofrece una serie de atributos para que el ",(0,l.kt)("strong",{parentName:"p"},"scroll infinito sea accesible"),"."),(0,l.kt)("p",null,"El atributo ",(0,l.kt)("inlineCode",{parentName:"p"},'role="feed"')," permite que los lectores usen el cursor para desplazarse por el listado de elementos din\xe1micos."),(0,l.kt)("p",null,"El atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-busy")," indicar\xe1 si se est\xe1n renderizando elementos dentro de nuestro \xe1rea ",(0,l.kt)("inlineCode",{parentName:"p"},'role="feed"'),", durante la carga de elementos su valor debe ser ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," y al terminar esta carga deber\xe1 ser ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("p",null,"Si conocemos la posici\xf3n de los elementos dentro del listado, usaremos el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-posinset"),", y ",(0,l.kt)("inlineCode",{parentName:"p"},"aria-setsize")," para indicar el n\xfamero total de elementos, si lo desconocemos ser\xe1 seteado a ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'    <section role="feed" aria-busy="false">\n    ...\n        <article aria-posinset="427" aria-setsize="-1">...</article>\n        <article aria-posinset="428" aria-setsize="-1">...</article>\n        <article aria-posinset="429" aria-setsize="-1">...</article>\n    ...\n    </section>\n')),(0,l.kt)("p",null,"M\xe1s informaci\xf3n ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role"},"Feed role - developer.mozilla.org")),(0,l.kt)("h2",{id:"metatags"},"Metatags"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lang"),", debemos especificar un idioma para la p\xe1gina."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},'    <html lang="en">\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"viewport")," - nunca bloquear el zoom, no uses:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"user-scalable=no"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"maximum-scale=1.0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"la forma correcta de uso de viewport ser\xeda la siguiente:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-html"},'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n')))))),(0,l.kt)("h2",{id:"responsive"},"Responsive"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Usa mediaqueries"),(0,l.kt)("li",{parentName:"ul"},"Ajusta contenidos usando ",(0,l.kt)("inlineCode",{parentName:"li"},"grid")," o ",(0,l.kt)("inlineCode",{parentName:"li"},"flexbox"),"."),(0,l.kt)("li",{parentName:"ul"},"No uses medidas fijas para contenedores."),(0,l.kt)("li",{parentName:"ul"},"No bloquees la capacidad de hacer zoom."),(0,l.kt)("li",{parentName:"ul"},"La informaci\xf3n debe ser visible y ",(0,l.kt)("strong",{parentName:"li"},"no requerir scroll en dos dimensiones")," para:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Contenido que se desplaza en vertical con una anchura equivalente a 320 p\xedxeles CSS."),(0,l.kt)("li",{parentName:"ul"},"Contenido que se desplaza en horizontal con una altura equivalente a 256 p\xedxeles CSS.")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Hay excepciones donde si se permite scroll en dos dimensiones, como las im\xe1genes grandes, mapas, tablas, etc."))),(0,l.kt)("h2",{id:"control-de-tiempo"},"Control de tiempo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Permite al usuario anular el tiempo de la caducidad de sesi\xf3n o ajustar este tiempo (debe ser al menos diez veces el tiempo por defecto)."),(0,l.kt)("li",{parentName:"ul"},"Notifica al usuario que la sesi\xf3n va a caducar con un mensaje (permite 20 segundos para interactuar con este aviso).")),(0,l.kt)("p",null,"Excepciones:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"El tiempo de caducidad es superior a 20 horas."),(0,l.kt)("li",{parentName:"ul"},"La caducidad de sesi\xf3n es esencial para el funcionamiento."),(0,l.kt)("li",{parentName:"ul"},"El l\xedmite de tiempo es requerido (ejemplo una subasta).")),(0,l.kt)("p",null,"M\xe1s informaci\xf3n sobre ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"},"tiempo ajustable"),"."),(0,l.kt)("h2",{id:"captcha"},"Captcha"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ofrece al menos dos modalidades de ",(0,l.kt)("abbr",{lang:"en",title:"Completely Automated Public Turing test to tell Computers and Humans Apart"},"CAPTCHA.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proporciona una alternativa"),", como por ejemplo contacto directo con atenci\xf3n al cliente para eludir el CAPTCHA."),(0,l.kt)("li",{parentName:"ul"},"No uses CAPTCHA para usuarios ya identificados.")))}d.isMDXComponent=!0},124:function(e,a){a.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iODc4LjUiIGhlaWdodD0iNzAxLjI2IiB4bWxuczp2PSJodHRwczovL3ZlY3RhLmlvL25hbm8iPjxzdHlsZT48IVtDREFUQVsuQntmaWxsOm5vbmV9LkN7c3Ryb2tlOiMzZjNkNTZ9LkR7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LkV7ZmlsbDojZjJmMmYyfS5Ge2ZpbGw6I2EwNjE2YX0uR3tmaWxsOiM2YzYzZmZ9Lkh7ZmlsbDojNTdiODk0fS5Je2ZpbGw6IzNmM2Q1Nn1dXT48L3N0eWxlPjxwYXRoIGQ9Ik00MyA5Ny41aDE4NnYxNTFINDN6IiBjbGFzcz0iRyIvPjxwYXRoIGQ9Ik00MyAyOTQuNWg1MTV2MTZINDN6IiBjbGFzcz0iRSIvPjxwYXRoIGQ9Ik0zMCA4OC41aDE4NnYxNTFIMzB6IiBjbGFzcz0iQiBDIEQiLz48cGF0aCBkPSJNMzAzIDEzOWgxODB2MTZIMzAzem0wIDQzaDI1NXYxNkgzMDN6IiBjbGFzcz0iRSIvPjxwYXRoIGQ9Ik0yOTAgMTMwaDE4MHYxNkgyOTB6bTAgNDNoMjU1djE2SDI5MHpNMzAgMjg1LjVoNTE1djE2SDMweiIgY2xhc3M9IkIgQyBEIi8+PHBhdGggZD0iTTQzIDM0NC41aDUxNXYxNkg0M3oiIGNsYXNzPSJFIi8+PHBhdGggZD0iTTMwIDMzNS41aDUxNXYxNkgzMHoiIGNsYXNzPSJCIEMgRCIvPjxwYXRoIGQ9Ik00MyAzOTQuNWg1MTV2MTZINDN6IiBjbGFzcz0iRSIvPjxwYXRoIGQ9Ik0zMCAzODUuNWg1MTV2MTZIMzB6IiBjbGFzcz0iQiBDIEQiLz48cGF0aCBkPSJNNDMgNDQ0LjVoNTE1djE2SDQzeiIgY2xhc3M9IkUiLz48cGF0aCBkPSJNMzAgNDM1LjVoNTE1djE2SDMweiIgY2xhc3M9IkIgQyBEIi8+PHBhdGggZD0iTTQzIDQ5NC41aDUxNXYxNkg0M3oiIGNsYXNzPSJFIi8+PHBhdGggZD0iTTMwIDQ4NS41aDUxNXYxNkgzMHoiIGNsYXNzPSJCIEMgRCIvPjxwYXRoIGQ9Ik00MyA1NDQuNWg1MTV2MTZINDN6IiBjbGFzcz0iRSIvPjxnIGNsYXNzPSJCIEMgRCI+PHBhdGggZD0iTTMwIDUzNS41aDUxNXYxNkgzMHoiLz48cGF0aCBkPSJNLjUuNWg1ODd2NjQ4SC41eiIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNCIiBjbGFzcz0iSCIvPjxnIGNsYXNzPSJCIEMgRCI+PHBhdGggZD0iTTgzNi40MTYgNzAwLjQyNGMtMS43NTItOC45MjIgNS44NC0xNi44MyAxMy4zNC0yMS45NzNzMTYuMjYyLTEwLjE5MyAxOC44Mi0xOC45MTdjMy42NzctMTIuNTQtNy4yNzYtMjQuMDIzLTE1LjgwMi0zMy45MjZhMTIyLjcxIDEyMi43MSAwIDAgMS0xNi4xODItMjQuMDVjLTEuOTI0LTMuMzktMy4yMzQtNy4wOS0zLjg3LTEwLjkzNS0uNjcyLTUuNTU4IDEuMTEzLTExLjA5IDIuOTEyLTE2LjM5cTguOTktMjYuNDkyIDE5LjIyMy01Mi41NCIvPjx1c2UgeGxpbms6aHJlZj0iI0IiIHg9IjAuODM5IiB5PSItMi43MDIiLz48L2c+PHVzZSB4bGluazpocmVmPSIjQyIgY2xhc3M9IkgiLz48dXNlIHhsaW5rOmhyZWY9IiNDIiB4PSIxLjExOSIgeT0iLTMuNjAxIiBjbGFzcz0iQiBDIEQiLz48cGF0aCBkPSJNODQ5LjE5NiA2MjUuOGM5Ljc0IDMuNTMzIDIwLjU4LS44MDQgMjUuMTk2LTEwLjA4czEuNTM1LTIwLjU0LTcuMTU4LTI2LjE3N2wtMi4zOSA4LjA1LTEuNjk1LTEwLjA5Yy0uMDE3LS4wMDgtLjAzNC0uMDE0LS4wNTItLjAyYTIwLjM4IDIwLjM4IDAgMCAwLTI3LjAyOSAyMi43MiAyMC4zOCAyMC4zOCAwIDAgMCAxMy4xMjggMTUuNTk5eiIgY2xhc3M9IkgiLz48cGF0aCBkPSJNODUwLjE2NiA2MjIuMTYzYzkuNzQgMy41MzMgMjAuNTgtLjgwNCAyNS4xOTYtMTAuMDhzMS41MzUtMjAuNTQtNy4xNTgtMjYuMTc3bC0yLjM5IDguMDUtMS42OTUtMTAuMDljLS4wMTctLjAwOC0uMDM0LS4wMTQtLjA1Mi0uMDJhMjAuMzggMjAuMzggMCAwIDAtMjcuMDI2IDIyLjcyIDIwLjM4IDIwLjM4IDAgMCAwIDEzLjEyNSAxNS41OTl6IiBjbGFzcz0iQiBDIEQiLz48dXNlIHhsaW5rOmhyZWY9IiNEIiBjbGFzcz0iSCIvPjx1c2UgeGxpbms6aHJlZj0iI0QiIHg9IjAuODQiIHk9Ii0yLjcwMSIgY2xhc3M9IkIgQyBEIi8+PHBhdGggZD0iTTU4OCAyMzVzMTIuNSAyNi41IDEwLjUgMzQuNUEyMS45IDIxLjkgMCAwIDAgNjAwIDI4NGwyMy0xIDIxLjUtMjAuNVM2MTIgMjQwIDYxNCAyMjlzLTI2IDYtMjYgNnoiIGNsYXNzPSJGIi8+PHBhdGggZD0iTTY0NiAyNzdsMTAgNjJzMCA1Ni0zIDU3LTE2IDAtMTYgMHYtNjNsNC01NXoiIGNsYXNzPSJHIi8+PHBhdGggZD0iTTY0NiAyNzdsMTAgNjJzMCA1Ni0zIDU3LTE2IDAtMTYgMHYtNjNsNC01NXoiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTcwNiA2NDFsOCAzMSAxMi05IDExLTI1LTE0LTE3LTE3IDIweiIgY2xhc3M9IkYiLz48ZyBjbGFzcz0iSSI+PHBhdGggZD0iTTczNyA2MzRzLTEzIDEwLTEzIDIwYzAgMC03IDExLTE1IDEwdjIxcy0yNSAxMy02IDE2IDMzLTIxIDMzLTIxIDE4LTI5IDE1LTMzLTE0LTEzLTE0LTEzeiIvPjx1c2UgeGxpbms6aHJlZj0iI0UiLz48L2c+PHVzZSB4bGluazpocmVmPSIjRSIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNjIxIDY2NGwtMTAgMTEgNCA5IDEyIDQgMjEtOC0zLTEyLTI0LTR6IiBjbGFzcz0iRiIvPjxwYXRoIGQ9Ik02NTEgNjc1cy0yNCAxMi0zMCA3Yy0zLjUwNC0yLjgwMi01LjY3NC02Ljk0My01Ljk4My0xMS40MiAwIDAtMTIuMDE3IDEuNDItMjAuMDE3IDYuNDJzLTE0IDExLTI0IDExLTYgMTIgMTMgMTMgNjctMSA2Ny02em0tNjgtMjcxcy0xMyA1OCAxMCAxMjRjMCAwIDExIDM3IDE2IDQ4czEwIDg5IDggOTJjMCAwIDE2IDEzIDMwIDQgMCAwLTEtNDYgMS01MHM0LTM5LTgtNjgtMi05OS0yLTk5IDI0LTM2IDYtNTd6IiBjbGFzcz0iSSIvPjxjaXJjbGUgY3g9IjU5OCIgY3k9IjIxNCIgcj0iMjgiIGNsYXNzPSJGIi8+PHBhdGggZD0iTTY1MCAzOTdzLTggMTItMTQgNmMtNC4yMy00LjIzLTMxLjMgNC45Ni00Ni45MyAxMC43NUw1NzggNDE4cy0uNDMtMTMuODYtMS43LTMxLjRjLTEuNDYtMjAuMTQtNC4wMi00NS4xNi04LjMtNTkuNi04LTI3IDEyLTM4IDEyLTM4czE3LTIwIDE2LTIzIDQ1LTE4IDQ1LTE4YzUgMSA5IDQ2IDkgNDZsLTE0IDU4Yy01IDIyIDE0IDQ1IDE0IDQ1eiIgY2xhc3M9IkciLz48cGF0aCBkPSJNNTY0IDM5OHMtMjIgMjItMzMgMjgtMTcgMjYtOCAzMCAyOS0yMiAyOS0yMmwyOS0yNHoiIGNsYXNzPSJGIi8+PHBhdGggZD0iTTU2OC4xNTcgMTk3LjI3OGMtMi41NTguMjI4LTQuMDIgMy40NS0zLjE5NCA1Ljg4czMuMTk4IDQuMDIyIDUuNjIyIDQuODczIDUuMDE0IDEuMTQgNy40NCAxLjk4M2MyLjQxMy44ODIgNC42NTIgMi4xODIgNi42MTQgMy44NCA2LjkxMiA1LjY2IDExLjAwNSAxNC4yODYgMTIuMzA4IDIzLjEyNXMuMDA0IDE3Ljg5Ni0yLjQ1MiAyNi40ODZjLTEuMzAyIDQuNTUtMy40MjcgOS41MzctNy44NzUgMTEuMTU0IDQuODYyLTEuMiA5LjYxMy0yLjgxMiAxNC4yMDItNC44MTYgMy4zNjMtMS41ODQgNi41Mi0zLjU5IDkuOTItNS4wOTRhNjIuMTkgNjIuMTkgMCAwIDEgMTUuNzA1LTQuMTE4YzMuNzg2LS41OSA3Ljc4Ny0xLjA0IDExLjM0Mi4zOWEyMi44IDIyLjggMCAwIDEgNS45NDUgNC4wMDlsMTEuNDM1IDkuNjA4cS4zLTYuMjY2LjM5NC0xMi41NGMuMDU2LTMuNjM1LjA0LTcuMzc1LTEuMjk4LTEwLjc1NS0xLjMyMi0zLjMzNy0zLjgzNC02LjA1Ny01LjUxNC05LjIyOC00LjE1OC03Ljg0Ny0yLjgwMy0xNy4zLTIuNzI2LTI2LjE4LjA4LTkuMTk1LTEuNC0xOC41NjUtNS42NTctMjYuNzE1cy0xMS41MjUtMTQuOTc1LTIwLjQtMTcuNDE1Yy0xMS45NS0zLjI5LTI0LjU0NSAxLjYwNi0zNS41MyA3LjM0Ny0yLjU4NSAxLjIzLTQuOTk0IDIuNzk4LTcuMTY0IDQuNjY0YTM0LjgyIDM0LjgyIDAgMCAwLTUuODI0IDcuOTQxbC01LjQzOCA5LjExMiIgY2xhc3M9IkkiLz48cGF0aCBkPSJNNjM5IDMwNGwtMjEgNzdjLTEuNDQgMy42LTE4LjM4IDIyLjctMjguOTMgMzIuNzVMNTc4IDQxOHMtLjQzLTEzLjg2LTEuNy0zMS40YzguMTQtOS4wMyAxNi43LTE3LjYgMTYuNy0xNy42czktNTUgOC03NiAyMC0yNiAyMC0yNmMyNCAzIDE4IDM3IDE4IDM3eiIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNNjE4IDI2M3MtMjEgNS0yMCAyNi04IDc2LTggNzYtMzQgMzQtMzEgMzggMTUuODUzIDExLjg2NCAxOC45MjcgMTIuOTMyUzYxMyAzODIgNjE1IDM3N3MyMS03NyAyMS03NyA2LTM0LTE4LTM3eiIgY2xhc3M9IkciLz48cGF0aCBkPSJNNTA5LjUgNzAwLjVoMzY5IiBjbGFzcz0iQiBDIEQiLz48ZGVmcyA+PHBhdGggaWQ9IkIiIGQ9Ik04MTEuODU4IDU3OC43NWM4LjEzNSAyLjk1NyAxNy4yNS40NTQgMjIuNzM1LTYuMjQ0czYuMTM4LTE2LjEzIDEuNjMzLTIzLjUyLTEzLjE4OC0xMS4xMy0yMS42NTQtOS4zMjZsLjUgMTAuNDktNC45NjMtOC45OWMtNC44NyAyLjI5LTguNjM1IDYuNDE4LTEwLjQ2MyAxMS40OC0uNjUgMS43NzMtMS4wNDQgMy42My0xLjE3MiA1LjUxM2EyMC4zOCAyMC4zOCAwIDAgMCAxMy4zNzQgMjAuNTk2eiIvPjxwYXRoIGlkPSJDIiBkPSJNODMzLjkyNSA1MTguMDY4YTIwLjM2IDIwLjM2IDAgMCAxIDE0LjY3LTEyLjkyNWwxLjY3OCA5Ljk3MyAzLjExLTEwLjQ3NWEyMC4zOCAyMC4zOCAwIDAgMSAxMS4yNzEgMzcuMTUyIDIwLjM4IDIwLjM4IDAgMCAxLTMwLjczMS0yMy43MjZ6Ii8+PHBhdGggaWQ9IkQiIGQ9Ik04MjcuOTc3IDY1OS42NThjMS42NjcgOS40ODcgOS43NSAxNi41MSAxOS4zNzggMTYuODM0czE4LjE2NS02LjE0IDIwLjQ2Ny0xNS40OTItMi4yNjItMTkuMDQtMTAuOTQtMjMuMjItMTkuMDk4LTEuNzEtMjQuOTc3IDUuOTE4bDkuMDggMTMuNjY4LTEyLjQwOC03LjI1NWEyMC4xOSAyMC4xOSAwIDAgMC0uNjAxIDkuNTQ3eiIvPjxwYXRoIGlkPSJFIiBkPSJNNjQ1LjkyNiAzOTEuMjczUzY2NSA0MTIgNjU2IDQ0NGMwIDAtMTAgNzIgMjIgOTlzNTMgODYgNTMgODZsLTI0IDIycy0yNi01OS01My04Mi0zMC00OS0zMC00OXYtOTFsLTUtMzh6Ii8+PC9kZWZzPjwvc3ZnPg=="}}]);