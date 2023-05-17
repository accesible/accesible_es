"use strict";(self.webpackChunkaccesible=self.webpackChunkaccesible||[]).push([[670],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,u=m["".concat(s,".").concat(d)]||m[d]||g[d]||i;return t?n.createElement(u,o(o({ref:a},p),{},{components:t})):n.createElement(u,o({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9491:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={id:"imagen",title:"Im\xe1genes",slug:"/imagen",image:"/img/imagen.svg",description:"Imagen accesible para la web con ejemplos sencillos",keywords:["im\xe1genes accesibles","texto alternativo","wai-aria imagen"]},o=void 0,l={unversionedId:"pautas/imagen",id:"pautas/imagen",title:"Im\xe1genes",description:"Imagen accesible para la web con ejemplos sencillos",source:"@site/docs/pautas/imagen.md",sourceDirName:"pautas",slug:"/imagen",permalink:"/imagen",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/imagen.md",tags:[],version:"current",frontMatter:{id:"imagen",title:"Im\xe1genes",slug:"/imagen",image:"/img/imagen.svg",description:"Imagen accesible para la web con ejemplos sencillos",keywords:["im\xe1genes accesibles","texto alternativo","wai-aria imagen"]},sidebar:"tutorialSidebar",previous:{title:"Formularios",permalink:"/formulario"},next:{title:"Modales",permalink:"/modal"}},s={},c=[{value:"Imagen en link",id:"imagen-en-link",level:2},{value:"Imagen optimizada al dispositivo",id:"imagen-optimizada-al-dispositivo",level:2}],p={toc:c},m="wrapper";function g(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/imagen.svg",alt:""}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Todas las im\xe1genes deben tener el atributo alt"),", en caso de im\xe1genes decorativas, debe estar vac\xedo."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!-- imagen no decorativa --\x3e\n  <img src="mi-imagen.jpg" alt="Descripci\xf3n">\n\n  \x3c!-- imagen decorativa --\x3e\n  <img src="mi-imagen-decorativa.jpg" alt="">\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"El texto alternativo debe incluir una descripci\xf3n concisa (",(0,r.kt)("strong",{parentName:"p"},"125 caracteres m\xe1ximo"),"), intentando transmitir la misma informaci\xf3n que la imagen.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"En caso de ",(0,r.kt)("strong",{parentName:"p"},"descripciones muy largas usa el atributo ",(0,r.kt)("a",{parentName:"strong",href:"https://www.w3.org/TR/WCAG20-TECHS/H45.html"},"longdesc"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Im\xe1genes funcionales deben llevar en el ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")," ",(0,r.kt)("strong",{parentName:"p"},"la acci\xf3n que realizan"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Si la imagen tiene informaci\xf3n compleja, como gr\xe1ficos, se debe a\xf1adir breve texto identificativo y, a continuaci\xf3n, la descripci\xf3n detallada de la informaci\xf3n debe ser proporcionada en otros lugares (por ejemplo, en una tabla de datos).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Si la imagen est\xe1 suficientemente descrita en el texto - por ejemplo, un simple diagrama que ilustra lo que est\xe1 escrito en el texto de la p\xe1gina web puede tener breve texto alternativo como "Diagrama de flujo de trabajo como se ha descrito anteriormente.\u201d, o bien dejar vac\xedo el texto alternativo.'))),(0,r.kt)("admonition",{title:"Nota",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"No es necesario que empieces los textos alternativos con ",(0,r.kt)("strong",{parentName:"p"},'"Imagen de"')," , los propios lectores de pantalla ya lo hacen.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"imagen-en-link"},"Imagen en link"),(0,r.kt)("p",null,"Si el enlace no tiene texto descriptivo, debemos a\xf1adir la etiqueta ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")," y el texto debe transmitir la acci\xf3n."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Correcto --\x3e\n<a href="#url">\n    <img src="lupa.jpg" alt="Buscar">\n</a>\n')),(0,r.kt)("p",null,"Si el enlace tiene texto descriptivo, debemos dejar vac\xedo el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"alt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Correcto, no a\xf1adimos alt ya que el enlace tiene texto --\x3e\n<a href="#url">\n    <img src="lupa.jpg" alt="">\n    Buscar\n</a>\n\n\x3c!-- Incorrecto, duplicidad de informaci\xf3n, texto y alt --\x3e\n<a href="#url">\n    <img src="lupa.jpg" alt="Buscar">\n    Buscar\n</a>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si la imagen est\xe1 dentro de un bot\xf3n, debemos a\xf1adir tambi\xe9n el atributo ",(0,r.kt)("inlineCode",{parentName:"li"},"title"),", usar ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-label")," o bien a\xf1adir un texto.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\n\x3c!-- Correcto --\x3e\n<button>\n  <img src="impresora.png" alt="Imprimir documento" title="Imprimir documento">\n</button>\n\n<button aria-label="Imprimir documento">\n  <img src="impresora.png" alt>\n</button>\n\n<button>\n  <img src="impresora.png" alt>\n  Imprimir\n</button>\n\n<button>\n  <img src="impresora.png" alt>\n  <span class="ocultar" role="presentation">Imprimir</span>\n</button>\n')),(0,r.kt)("h2",{id:"imagen-optimizada-al-dispositivo"},"Imagen optimizada al dispositivo"),(0,r.kt)("p",null,"Podemos ofrecer distintas im\xe1genes dependiendo la densidad o tama\xf1o de pantalla donde se est\xe1 visualizando la p\xe1gina."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\n  \x3c!-- dependiendo la densidad de px --\x3e\n  <img \n    alt="Gato observando la calle a trav\xe9s de una ventana."\n    src="gato-lowres.jpg"\n    srcset="\n      gato-high-1.jpg 1.5x,\n      gato-high-2.jpg 2x,\n      gato-high-3.jpg 3x,\n      gato-high-4.jpg 4x,\n      gato-high-5.jpg 100x\n    "\n  >\n\n  \x3c!-- dependiendo la resoluci\xf3n --\x3e\n  <img \n    alt="Gato observando la calle a trav\xe9s de una ventana."\n    src="gato-lowres.jpg"\n    srcset="\n      gato-s.jpg  300w,\n      gato-m.jpg  600w,\n      gato-l.jpg  1200w,\n      gato-xl.jpg 2000w\n    "\n  >  \n')))}g.isMDXComponent=!0}}]);