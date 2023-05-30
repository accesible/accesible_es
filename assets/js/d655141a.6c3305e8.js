"use strict";(self.webpackChunkaccesible=self.webpackChunkaccesible||[]).push([[399],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>b});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?t.createElement(b,i(i({ref:a},d),{},{components:n})):t.createElement(b,i({ref:a},d))}));function b(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},785:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=n(7462),r=(n(7294),n(3905));const o={id:"encabezado",title:"Encabezados",slug:"/encabezado",image:"/img/encabezado.svg",description:"Encabezados accesibles para la web con ejemplos sencillos",keywords:["encabezado accesible","orden encabezados","jerarqu\xeda","marcado sem\xe1ntico"]},i=void 0,l={unversionedId:"pautas/encabezado",id:"pautas/encabezado",title:"Encabezados",description:"Encabezados accesibles para la web con ejemplos sencillos",source:"@site/docs/pautas/encabezado.md",sourceDirName:"pautas",slug:"/encabezado",permalink:"/encabezado",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/pautas/encabezado.md",tags:[],version:"current",frontMatter:{id:"encabezado",title:"Encabezados",slug:"/encabezado",image:"/img/encabezado.svg",description:"Encabezados accesibles para la web con ejemplos sencillos",keywords:["encabezado accesible","orden encabezados","jerarqu\xeda","marcado sem\xe1ntico"]},sidebar:"tutorialSidebar",previous:{title:"Contenido",permalink:"/contenido"},next:{title:"Estructura",permalink:"/estructura"}},c={},s=[{value:"Jerarqu\xeda",id:"jerarqu\xeda",level:2},{value:"Encabezado principal",id:"encabezado-principal",level:2},{value:"M\xfaltiples encabezados H1",id:"m\xfaltiples-encabezados-h1",level:3},{value:"\xbfPor qu\xe9 no es una pr\xe1ctica recomendada?",id:"por-qu\xe9-no-es-una-pr\xe1ctica-recomendada",level:4},{value:"Orden encabezados",id:"orden-encabezados",level:2},{value:"Encabezados consecutivos del mismo nivel",id:"encabezados-consecutivos-del-mismo-nivel",level:3}],d={toc:s},p="wrapper";function u(e){let{components:a,...n}=e;return(0,r.kt)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/encabezado.svg",alt:""}),(0,r.kt)("p",null,"La funci\xf3n de los encabezados es la de organizar los contenidos haciendo una peque\xf1a descripci\xf3n de la secci\xf3n que precede."),(0,r.kt)("admonition",{title:"Nota",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Define bien los encabezados, ",(0,r.kt)("strong",{parentName:"p"},"deben ser concisos y \xfanicos"),", los usuarios de lectores de pantalla suelen navegar a trav\xe9s de ellos, tambi\xe9n los buscadores les dan importancia a la hora de indexar contenidos. ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"},"Criterio 2.4.6 \u2197\ufe0f"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Todas las p\xe1ginas deben tener un \xfanico encabezado ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")),(0,r.kt)("li",{parentName:"ul"},"No saltes niveles de ",(0,r.kt)("a",{parentName:"li",href:"#jerarqu%C3%ADa"},"jerarqu\xeda"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No simules encabezados")," mediante estilos."),(0,r.kt)("li",{parentName:"ul"},"Si no podemos usar etiquetas nativas, usaremos el atributo ",(0,r.kt)("inlineCode",{parentName:"li"},"aria-level"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'/* incorrecto */\n<span class="clase-h1">Encabezado principal</span>\n\n/* correcto */\n<span class="clase-h1" aria-level="1">Encabezado principal</span>\n\n/* \xf3ptimo */\n<h1 class="clase-h1">Encabezado principal</h1>\n')),(0,r.kt)("h2",{id:"jerarqu\xeda"},"Jerarqu\xeda"),(0,r.kt)("p",null,"Los encabezados tienen una jerarqu\xeda, donde su relevancia se ordena de la etiqueta ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," (mayor importancia) a la ",(0,r.kt)("inlineCode",{parentName:"p"},"<h6>")," (menor)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Encabezado nivel 1</h1>\n<h2>Encabezado nivel 2</h2>\n<h3>Encabezado nivel 3</h3>\n<h4>Encabezado nivel 4</h4>\n<h5>Encabezado nivel 5</h5>\n<h6>Encabezado nivel 6</h6>\n")),(0,r.kt)("h2",{id:"encabezado-principal"},"Encabezado principal"),(0,r.kt)("p",null,"Todas las p\xe1ginas deben llevar un encabezado ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," que represente el contenido principal de la p\xe1gina y ",(0,r.kt)("strong",{parentName:"p"},"debe ser \xfanico"),"."),(0,r.kt)("h3",{id:"m\xfaltiples-encabezados-h1"},"M\xfaltiples encabezados H1"),(0,r.kt)("p",null,"Tener varios encabezados ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," no es una pr\xe1ctica ",(0,r.kt)("strong",{parentName:"p"},"recomendada.")),(0,r.kt)("h4",{id:"por-qu\xe9-no-es-una-pr\xe1ctica-recomendada"},"\xbfPor qu\xe9 no es una pr\xe1ctica recomendada?"),(0,r.kt)("p",null,"En un inicio, el ",(0,r.kt)("strong",{parentName:"p"},"outline de HTML5")," iba a permitir tener varios encabezados ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," para organizar las distintas secciones como por ejemplo ",(0,r.kt)("inlineCode",{parentName:"p"},"<article>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<section>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<aside"),">, etc."),(0,r.kt)("p",null,"Por desgracia, a d\xeda de hoy ",(0,r.kt)("strong",{parentName:"p"},"ning\xfan navegador adopt\xf3 el outline de HTML5")," tal como se ide\xf3, y los ",(0,r.kt)("inlineCode",{parentName:"p"},"H1")," que tenga una p\xe1gina son considerados por igual, lo que resultar\xeda confuso para el usuario."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"  <section>\n      <header>T\xedtulo secci\xf3n art\xedculos</header>\n      <article>\n        <header>\n          <h1> T\xedtulo art\xedculo 1 </h1>\n        <header>\n      </article>\n      <article>\n        <header>\n          <h1> T\xedtulo art\xedculo 2 </h1>\n        </header>\n      </article>\n  </section>\n")),(0,r.kt)("h2",{id:"orden-encabezados"},"Orden encabezados"),(0,r.kt)("p",null,"Dentro de una misma secci\xf3n no se deben saltar niveles de jerarqu\xeda, es decir, el encabezado de nivel inferior a un ",(0,r.kt)("inlineCode",{parentName:"p"},"h1")," deber\xeda ser un ",(0,r.kt)("inlineCode",{parentName:"p"},"h2"),", y posterior a este, un ",(0,r.kt)("inlineCode",{parentName:"p"},"h3"),", y as\xed consecutivamente hasta el nivel ",(0,r.kt)("inlineCode",{parentName:"p"},"h6"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- incorrecto --\x3e\n<article>\n  <h2>Encabezado nivel 2</h2>\n  ...\n  <h4>Sub-encabezado nivel 4</h4>\n  ...\n</article>\n\n\x3c!-- correcto --\x3e\n<article>\n  <h2>Encabezado nivel 2</h2>\n  ...\n  <h3>Sub-encabezado nivel 3</h3>\n  ...\n</article>\n")),(0,r.kt)("h3",{id:"encabezados-consecutivos-del-mismo-nivel"},"Encabezados consecutivos del mismo nivel"),(0,r.kt)("p",null,"A partir del ",(0,r.kt)("inlineCode",{parentName:"p"},"<h2>")," pueden haber encabezados del mismo nivel consecutivamente, por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Encabezado principal</h1>\n...\n<h2>Sub-encabezado nivel 2</h2>\n...\n<h2>Sub-encabezado nivel 2</h2>\n...\n<h3>Sub-encabezado nivel 3</h3>\n...\n<h3>Sub-encabezado nivel 3</h3>\n...\n<h2>Sub-encabezado nivel 2</h2>\n...\n")))}u.isMDXComponent=!0}}]);