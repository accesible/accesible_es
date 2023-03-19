"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[931],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(b,i(i({ref:a},c),{},{components:t})):n.createElement(b,i({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9162:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={id:"tabla",title:"Tablas",slug:"/tabla",image:"/img/tabla.svg",description:"Tabla accesible para la web con ejemplos sencillos",keywords:["tablas accesibles","tablas complejas","wai-aria en tabla"]},i=void 0,o={unversionedId:"pautas/tabla",id:"pautas/tabla",title:"Tablas",description:"Tabla accesible para la web con ejemplos sencillos",source:"@site/docs/pautas/tabla.md",sourceDirName:"pautas",slug:"/tabla",permalink:"/tabla",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/tabla.md",tags:[],version:"current",frontMatter:{id:"tabla",title:"Tablas",slug:"/tabla",image:"/img/tabla.svg",description:"Tabla accesible para la web con ejemplos sencillos",keywords:["tablas accesibles","tablas complejas","wai-aria en tabla"]},sidebar:"tutorialSidebar",previous:{title:"SVG",permalink:"/svg"},next:{title:"WAI-ARIA",permalink:"/wai-aria"}},s={},p=[{value:"Atributo scope",id:"atributo-scope",level:2}],c={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/tabla.svg",alt:""}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usaremos las tablas siempre que mostremos datos tabulares"),", es decir en filas y columnas."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debemos ",(0,r.kt)("strong",{parentName:"li"},"a\xf1adir un t\xedtulo")," que defina brevemente el contenido de la tabla mediante la etiqueta ",(0,r.kt)("inlineCode",{parentName:"li"},"caption"),", y describir la tabla mediante ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-describedby"),", la etiqueta ",(0,r.kt)("inlineCode",{parentName:"li"},"<summary>")," est\xe1 ",(0,r.kt)("strong",{parentName:"li"},"obsoleta en HTML5"),"."),(0,r.kt)("li",{parentName:"ul"},"Se debe utilizar el atributo ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," dentro de un ",(0,r.kt)("inlineCode",{parentName:"li"},"th"),", para indicar si est\xe1 encabezando una columna ",(0,r.kt)("inlineCode",{parentName:"li"},"<th scope='col'>")," o una fila ",(0,r.kt)("inlineCode",{parentName:"li"},"<th scope='row'>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope='colgroup")," se usar\xe1 para encabezados con varias columnas, mientras que ",(0,r.kt)("inlineCode",{parentName:"li"},"scope='rowgroup'")," se usar\xe1 para en el caso de varias filas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Evita el scroll horizontal"),", es preferible que la tabla crezca verticalmente."),(0,r.kt)("li",{parentName:"ul"},"Utiliza ",(0,r.kt)("inlineCode",{parentName:"li"},"thead"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"tbody")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"tfoot")," para marcar las distintas secciones."),(0,r.kt)("li",{parentName:"ul"},"Utiliza atributos ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"header")," para ",(0,r.kt)("strong",{parentName:"li"},"asociar celdas de datos con celdas de encabezado"),".")),(0,r.kt)("p",null,"Ejemplo de tabla accesible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  <h3>Econom\xeda de Espa\xf1a</h3>\n\n  <p id="ejemplo1" aria-hidden="true">\n  En cada fila se muestran los datos de las importaciones (en euros y porcentaje de PIB) por a\xf1o, desde el 1960 hasta el 2020\n  </p>\n  <table aria-describedby="ejemplo1">\n  <caption>\n    Espa\xf1a - Importaciones de Mercanc\xedas\n  </caption>\n    <tr>\n      <th>Fecha</th>\n      <th>Importaciones</th>\n      <th>Importaciones % PIB</th>\n    </tr>\n    <tr>\n      <td>2020</td>\n      <td>286.801,0 M\u20ac</td>\n      <td>P25,56%</td>\n    </tr>\n    [...]\n  </table>\n\n')),(0,r.kt)("h2",{id:"atributo-scope"},"Atributo scope"),(0,r.kt)("p",null,"El atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," es exclusivo de la etiqueta ",(0,r.kt)("inlineCode",{parentName:"p"},"th")," y nos servir\xe1 para indicar que parte de la tabla estamos encabezando. Este atributo puede tener los valores ",(0,r.kt)("inlineCode",{parentName:"p"},"col"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"row"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"colgroup"),", y ",(0,r.kt)("inlineCode",{parentName:"p"},"rowgroup"),"."),(0,r.kt)("img",{src:"/img/tabla-colgroup.png",alt:""}),(0,r.kt)("img",{src:"/img/tabla-scope-row.png",alt:""}))}d.isMDXComponent=!0}}]);