"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5610:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={id:"color",title:"Color",image:"/img/color.svg",description:"Color accesible para la web con ejemplos sencillos",keywords:["colores accesibles","contraste accesibilidad","gr\xe1ficas accesibles"]},i=void 0,l={unversionedId:"color",id:"color",title:"Color",description:"Color accesible para la web con ejemplos sencillos",source:"@site/docs/color.md",sourceDirName:".",slug:"/color",permalink:"/color",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/color.md",tags:[],version:"current",frontMatter:{id:"color",title:"Color",image:"/img/color.svg",description:"Color accesible para la web con ejemplos sencillos",keywords:["colores accesibles","contraste accesibilidad","gr\xe1ficas accesibles"]},sidebar:"tutorialSidebar",previous:{title:"Pautas de accesibilidad",permalink:"/pautas"},next:{title:"Contenido",permalink:"/contenido"}},s={},c=[{value:"Contraste",id:"contraste",level:2},{value:"Color en gr\xe1ficas",id:"color-en-gr\xe1ficas",level:2},{value:"Validaci\xf3n de campos",id:"validaci\xf3n-de-campos",level:2},{value:"Utilidades",id:"utilidades",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(6846).Z,width:"885",height:"629"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consigue el suficiente ",(0,o.kt)("a",{parentName:"li",href:"#contraste"},"contraste")," entre el contenido y su fondo."),(0,o.kt)("li",{parentName:"ul"},"Evita colores muy brillantes o demasiado claros."),(0,o.kt)("li",{parentName:"ul"},"No debemos basarnos s\xf3lo en el color para transmitir informaci\xf3n.")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Los colores opuestos o complementarios son aquellos colores que se encuentran en una posici\xf3n oponible dentro del c\xedrculo crom\xe1tico.")),(0,o.kt)("h2",{id:"contraste"},"Contraste"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nivel A")," - min ratio 3:1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nivel AA")," - min ratio 4.5:1 texto normal / min ratio 3:1 texto grande"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nivel AAA")," - min ratio 7:1 texto normal / min ratio 4.5:1 texto grande")),(0,o.kt)("admonition",{title:"Nota",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Se considera texto grande a partir de 24px o 18px si es negrita")),(0,o.kt)("p",null,"En la secci\xf3n de recursos tienes ",(0,o.kt)("a",{parentName:"p",href:"https://accesible.es/recursos#evaluaci%C3%B3n-de-contraste"},"herramientas para medir el contraste"),". \ud83c\udf08"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Estas normas de contraste tambi\xe9n incluyen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Placeholders."),(0,o.kt)("li",{parentName:"ul"},"Estados focus / hover."),(0,o.kt)("li",{parentName:"ul"},"Degradados, en este caso testamos el \xe1rea de contraste m\xe1s bajo.")),(0,o.kt)("p",null,"Quedan exentos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Campos deshabilitados."),(0,o.kt)("li",{parentName:"ul"},"Logotipos."),(0,o.kt)("li",{parentName:"ul"},"Banderas."),(0,o.kt)("li",{parentName:"ul"},"Elementos ocultos."),(0,o.kt)("li",{parentName:"ul"},"Im\xe1genes puramente decorativas o fotograf\xedas.")),(0,o.kt)("admonition",{title:"Nota",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"No se recomienda usar negro puro ",(0,o.kt)("inlineCode",{parentName:"p"},"#000000")," sobre blanco puro ",(0,o.kt)("inlineCode",{parentName:"p"},"#FFFFFF")," y viceversa, debido a que aumenta la ",(0,o.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Astenop%C3%ADa"},(0,o.kt)("strong",{parentName:"a"},"fatiga visual")))),(0,o.kt)("h2",{id:"color-en-gr\xe1ficas"},"Color en gr\xe1ficas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contrasta los colores entre los objetos de las gr\xe1ficas."),(0,o.kt)("li",{parentName:"ul"},"Incluye ",(0,o.kt)("strong",{parentName:"li"},"l\xedneas con suficiente contraste")," entre colores adyacentes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incluye etiquetas y valores")," con el gr\xe1fico.")),(0,o.kt)("p",null,"Las personas con alg\xfan impedimento para distinguir colores, como por ejemplo un usuario dalt\xf3nico, tendr\xe1 dificultades para interpretar una gr\xe1fica que diferencia sus datos s\xf3lo por el color."),(0,o.kt)("img",{src:"/img/daltonismo-grafica.svg",class:"full"}),(0,o.kt)("p",null,"Como soluci\xf3n, podemos a\xf1adir sobre estos colores, etiquetas de texto o texturas que diferencian mejor los datos."),(0,o.kt)("img",{src:"/img/accesible-grafica.svg",class:"full"}),(0,o.kt)("p",null,"Si usamos mapas o gr\xe1ficos circulares, mejoraremos el contraste a\xf1adiendo un contorno o l\xedneas divisorias:"),(0,o.kt)("img",{src:"/img/contraste-color-grafica.svg",class:"full"}),(0,o.kt)("h2",{id:"validaci\xf3n-de-campos"},"Validaci\xf3n de campos"),(0,o.kt)("p",null,"Al igual que las gr\xe1ficas, no debemos usar solo el color para comunicar errores o transmitir informaci\xf3n en formularios."),(0,o.kt)("p",null,"Por ejemplo, si para resaltar campos err\xf3neos usamos un borde rojo, un usuario con ",(0,o.kt)("a",{parentName:"p",href:"https://es.wikipedia.org/wiki/Protanopia"},"protanopia")," (carencia de sensibilidad al color rojo), no podr\xeda identificarlos correctamente."),(0,o.kt)("p",null,"Mejoramos la accesibilidad del formulario a\xf1adiendo iconos y mensajes informativos en los campos err\xf3neos."),(0,o.kt)("h2",{id:"utilidades"},"Utilidades"),(0,o.kt)("p",null,"Hay m\xfaltiples aplicaciones, herramientas online o extensiones de navegador que permiten analizar el contraste o nos ofrecen paletas adecuadas para nuestro sitio."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webaim.org/resources/contrastchecker/"},"https://webaim.org/resources/contrastchecker/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://contrast-checker.glitch.me/"},"https://contrast-checker.glitch.me/")),(0,o.kt)("p",null,"En la secci\xf3n de ",(0,o.kt)("a",{parentName:"p",href:"recursos"},"recursos")," tambi\xe9n puedes encontrar aplicaciones \xfatiles."))}u.isMDXComponent=!0},6846:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/color-2678a85a865f3e7eeb1807f6b120e7cb.svg"}}]);