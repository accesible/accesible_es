"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[595],{3905:function(e,n,i){i.d(n,{Zo:function(){return I},kt:function(){return j}});var M=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);n&&(M=M.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,M)}return i}function u(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,M,t=function(e,n){if(null==e)return{};var i,M,t={},a=Object.keys(e);for(M=0;M<a.length;M++)i=a[M],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(M=0;M<a.length;M++)i=a[M],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var N=M.createContext({}),c=function(e){var n=M.useContext(N),i=n;return e&&(i="function"==typeof e?e(n):u(u({},n),e)),i},I=function(e){var n=c(e.components);return M.createElement(N.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return M.createElement(M.Fragment,{},n)}},l=M.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,N=e.parentName,I=r(e,["components","mdxType","originalType","parentName"]),l=c(i),j=t,g=l["".concat(N,".").concat(j)]||l[j]||o[j]||a;return i?M.createElement(g,u(u({ref:n},I),{},{components:i})):M.createElement(g,u({ref:n},I))}));function j(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,u=new Array(a);u[0]=l;var r={};for(var N in n)hasOwnProperty.call(n,N)&&(r[N]=n[N]);r.originalType=e,r.mdxType="string"==typeof e?e:t,u[1]=r;for(var c=2;c<a;c++)u[c]=i[c];return M.createElement.apply(null,u)}return M.createElement.apply(null,i)}l.displayName="MDXCreateElement"},273:function(e,n,i){i.r(n),i.d(n,{assets:function(){return I},contentTitle:function(){return N},default:function(){return j},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return o}});var M=i(7462),t=i(3366),a=(i(7294),i(3905)),u=["components"],r={id:"estructura",title:"Estructura"},N=void 0,c={unversionedId:"estructura",id:"estructura",title:"Estructura",description:"img",source:"@site/docs/estructura.md",sourceDirName:".",slug:"/estructura",permalink:"/estructura",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/estructura.md",tags:[],version:"current",frontMatter:{id:"estructura",title:"Estructura"},sidebar:"tutorialSidebar",previous:{title:"Encabezados",permalink:"/encabezados"},next:{title:"Formularios",permalink:"/formulario"}},I={},o=[{value:"Header",id:"header",level:2},{value:"Nav",id:"nav",level:2},{value:"Main",id:"main",level:2},{value:"Aside",id:"aside",level:2},{value:"Footer",id:"footer",level:2},{value:"Article",id:"article",level:2},{value:"Section",id:"section",level:2}],l={toc:o};function j(e){var n=e.components,r=(0,t.Z)(e,u);return(0,a.kt)("wrapper",(0,M.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"img",src:i(962).Z,width:"888",height:"652"})),(0,a.kt)("p",null,"Las secciones de nuestro sitio deben ser organizadas mediante un ",(0,a.kt)("strong",{parentName:"p"},"marcado sem\xe1ntico"),". La sem\xe1ntica literalmente significa usar un ",(0,a.kt)("strong",{parentName:"p"},"lenguaje \u201csignificativo\u201d"),", en HTML disponemos de una serie de etiquetas (",(0,a.kt)("span",{lang:"en"},"tags"),") de marcado sem\xe1ntico que nos ayudan a describir el contenido."),(0,a.kt)("p",null,"Estas son algunas de las etiquetas de contenido que podemos usar en nuestro sitio:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"header, nav, main, article, aside, address, footer")),(0,a.kt)("p",null,"Ejemplo de estructura sem\xe1ntica:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'    <header>\n        <img src="logo.png" alt="Mi web" />\n        <nav>\n            \x3c!-- men\xfa principal --\x3e\n        </nav>\n    </header>\n\n\n    <aside>\n        <nav>\n            \x3c!-- men\xfa secundario --\x3e\n        </nav>\n    </aside>\n\n    <main>\n        <h1>T\xedtulo principal</h1>\n        <section>\n            <header>T\xedtulo secci\xf3n presentaci\xf3n</header>\n        </section>\n\n        <section>\n            <header>T\xedtulo secci\xf3n art\xedculos</header>\n            <article>\n                <header>\n                    <h2> T\xedtulo art\xedculo 1 </h2>\n                <header>\n            </article>\n                <header>\n                    <h2> T\xedtulo art\xedculo 2 </h2>\n                </header>\n            <article>\n        </section>\n    </main>\n\n    <footer>\n    </footer>\n\n')),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("p",null,"El header es la primera zona que nos encontramos en cada p\xe1gina, y contiene informaci\xf3n com\xfan, como puede ser el logotipo del sitio web, la funci\xf3n de b\xfasqueda y las opciones de navegaci\xf3n."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<header>\n  <img src="logo.png" alt="Mi web" />\n</header>\n\n\x3c!-- main --\x3e\n\n\x3c!-- footer --\x3e\n')),(0,a.kt)("h2",{id:"nav"},"Nav"),(0,a.kt)("p",null,"Se utiliza para determinar la ",(0,a.kt)("strong",{parentName:"p"},"navegaci\xf3n principal")," de la p\xe1gina."),(0,a.kt)("p",null,"En el caso de tener varios men\xfas de navegaci\xf3n, por ejemplo uno en la cabecera y otro en el pie, deber\xedamos usar el atributo ",(0,a.kt)("strong",{parentName:"p"},"aria-labelledby"),", para que los lectores de pantalla sepan distinguir el tipo de navegaci\xf3n."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<header>\n  \x3c!-- contenido header --\x3e\n\n  <nav aria-labelledby="menu-principal">\n    <h2 id="menu-principal">Menu de navegaci\xf3n principal</h2>\n    \x3c!-- elementos del men\xfa --\x3e\n  </nav>\n</header>\n\n\x3c!-- main --\x3e\n\n<footer>\n  <nav aria-labelledby="menu-secundario">\n    <h2 id="menu-secundario">Men\xfa de navegaci\xf3n secundario</h2>\n    \x3c!-- elementos del men\xfa --\x3e\n  </nav>\n</footer>\n')),(0,a.kt)("h2",{id:"main"},"Main"),(0,a.kt)("p",null,"La etiqueta main indica el contenido principal, esta etiqueta debe ser \xfanica por p\xe1gina."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- header --\x3e\n\n<main>\n  \x3c!-- contenido principal --\x3e\n</main>\n\n\x3c!-- footer --\x3e\n")),(0,a.kt)("h2",{id:"aside"},"Aside"),(0,a.kt)("p",null,"Son secciones que podr\xedan ir en el contenido principal, pero pueden ser separadas y significativas por s\xed mismas; Por ejemplo, una nota al margen explicando o anotando el contenido principal."),(0,a.kt)("h2",{id:"footer"},"Footer"),(0,a.kt)("p",null,"Al igual que el encabezado, es un \xe1rea con la misma informaci\xf3n en todas las p\xe1ginas, se suele colocar la informaci\xf3n legal, privacidad, redes sociales o enlaces de navegaci\xf3n."),(0,a.kt)("h2",{id:"article"},"Article"),(0,a.kt)("p",null,"La etiqueta article define un ",(0,a.kt)("strong",{parentName:"p"},"contenido independiente y aut\xf3nomo"),", es decir fuera del contexto de la web seguir\xeda teniendo significado."),(0,a.kt)("p",null,"Ejemplos de uso"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Noticias"),(0,a.kt)("li",{parentName:"ul"},"Entrada de un blog")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<article role="article">\n  <header>\n    <h2>Mi opini\xf3n sobre el mundo</h2>\n  </header>\n  <section class="content">\n    <p>Aqu\xed voy hablar de lo maravilloso que es el mundo.</p>\n  </section>\n  <section class="comments">\n    <div class="comment" role="article">\n      <p>Increible post</p>\n    </div>\n    <div class="comment" role="article">\n      <p>Me gusta c\xf3mo sintetizas</p>\n    </div>\n  </section>\n</article>\n')),(0,a.kt)("h2",{id:"section"},"Section"),(0,a.kt)("p",null,"Se utiliza para definir una secci\xf3n, es similar a un div, pero con car\xe1cter sem\xe1ntico. Los lectores de pantalla lo identifican como una regi\xf3n."))}j.isMDXComponent=!0},962:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJiZTMyYzg1Yy05Mzg4LTRhMmItYTRlNS0yNzE1NzRhNWI5YjIiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDg4OCA2NTEuOTMyIj48ZWxsaXBzZSBjeD0iOTYuNjc5IiBjeT0iNjMxLjc5MyIgZmlsbD0iI2U2ZTZlNiIgcng9Ijk2LjM0OCIgcnk9IjIwLjAwNyIvPjxlbGxpcHNlIGN4PSI1NS4wNzkiIGN5PSIxNDMuNjUxIiBmaWxsPSIjMmYyZTQxIiByeD0iMzMuMjE2IiByeT0iMzEuMTE0Ii8+PHBhdGggZmlsbD0iI2ZmYjhiOCIgZD0iTTMwNy43ODQgNDYxLjUxNGw4LjQwOSAxMS43NzJzNDAuMzYzIDguNDEgMjUuMjI3IDIxLjAyMy0zNy0xMS43NzMtMzctMTEuNzczTDI5Mi42NDcgNDY3LjR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik0yNjQuMDU2IDMyNy44MXMxMC45MzIgMCAxMy40NTUgMTUuMTM2IDUuMDQ1IDY1LjU5IDUuMDQ1IDY1LjU5IDM1LjMxOCA0Ni4yNSAyOS40MzIgNTIuMTM3LTEyLjYxMyAxNi44MTgtMTYuODE4IDE1LjEzNi00MC4zNjMtNTEuMjk1LTQwLjM2My01MS4yOTV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiNmZmI4YjgiIGQ9Ik0yMzAuNDIgMjg0LjkyM3MuODQxIDMyLjc5NiAxMC45MzIgMzQuNDc4IDYuNzI3IDEyLjYxMyA2LjcyNyAxMi42MTMtMzIuNzk1IDE5LjM0MS01NC42NTkgMGwtNC4yMDQtMTAuMDlzMTUuMTM2LTEwLjkzMyA4LjQwOS0yNi4wNjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiMyZjJlNDEiIGQ9Ik0yODYuNzYgNDg2Ljc0czQ5LjYxNCA5Mi41IDMxLjExNCAxMjEuMDkxLTQ2LjI1IDg3LjQ1NS01MC40NTQgODcuNDU1LTI3Ljc1LTExLjc3My0yNi4wNjgtMTkuMzQxIDI2LjkwOS02My45MSAzMy42MzYtNjguOTU1IDMuMzY0LTE4LjUgMi41MjMtMTkuMzQtMjguNTktNDUuNDEtMjguNTktNDUuNDEuODQgNzAuNjM3LTIuNTI0IDgxLjU2OS44NDEgODkuMTM2LTMuMzYzIDkyLjUtMjMuNTQ2IDkuMjUtMjYuOTEgNC4yMDQtMTMuNDU0LTgxLjU2OC02LjcyNi05OS4yMjdsLTEyLjYxNC0xMjEuMDl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiMyZjJlNDEiIGQ9Ik0yNDEuMzUyIDcxMS4yNjNsMjEuMDIzIDM4LjY4MXMzMC4yNzIgMjEuODY0IDkuMjUgMjUuMjI4LTMzLjYzNy01LjA0Ni0zMy42MzctNS4wNDZsLTE4LjUtMTMuNDU0VjcxNy45OXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZmlsbD0iIzJmMmU0MSIgZD0iTTI2OS45NDMgNjg5LjRsLTEwLjkzMiAyNi4wNjdzLTQuMjA1IDEwLjkzMiAwIDEzLjQ1NSAxNS45NzcgMTcuNjU5IDguNDEgMTkuMzRhMjQuNjM4IDI0LjYzOCAwIDAxLTQuNjIyLjQ2IDQ2LjcyNiA0Ni43MjYgMCAwMS0zMy45Ny0xMy44MjRsLTYuODE4LTYuODE3czIzLjM1Mi01My43NzUgMjMuMDI4LTUzLjM3NiAyNC45MDQgMTQuNjk0IDI0LjkwNCAxNC42OTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxjaXJjbGUgY3g9IjUzLjM5OCIgY3k9IjE1Mi40OCIgcj0iMjguNTkxIiBmaWxsPSIjZmZiOGI4Ii8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTE5MyAzMTYuNDU3bDguODMgOC44M3MyNi45MDggMTAuMDkgMzkuNTIyIDBjMCAwLTQuNjI1LTkuNjctNC42MjUtOC44M3MzNi41OCA2LjMwNyAzOS45NDMgMjEuNDQzLTIuNTIzIDQxLjIwNS0yLjUyMyA0MS4yMDUgMjMuNTQ2IDExMSAxNC4yOTYgMTEzLjUyMi05NS44NjQgMjMuNTQ2LTk1LjAyMyA3LjU2OC02LjcyNy04MS41NjgtNi43MjctODEuNTY4bC0yOS40MzItNTYuMzRzNC4yMDUtMTguNSAxNC4yOTYtMjQuMzg3UzE5MyAzMTYuNDU3IDE5MyAzMTYuNDU3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NiAtMTI0LjAzNCkiLz48cGF0aCBmaWxsPSIjZmZiOGI4IiBkPSJNMjMwLjQyIDQ4MC44NTVsMTAuOTMyIDYuNzI3czQyLjA0NSAyOC41OSAyMC4xODIgMzMuNjM2LTM0LjQ3Ny0yMC4xODItMzQuNDc3LTIwLjE4MmwtOC40MS0xMC4wOXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZD0iTTE2OC4xOTMgMzU3LjI0MWwtNy41NjggNy41NjhzLTUuMDQ1IDcwLjYzNyA1LjA0NSA4NC45MzIgNTYuMzQxIDUyLjk3NyA1OC44NjQgNTAuNDU0IDE4LjUtMTUuMTM2IDE1LjEzNi0xNi44MTgtNDguMDg1LTQ4LjQxLTQ4LjA4NS00OC40MWwzLjUxNy02NS4xMTJ6IiBvcGFjaXR5PSIuMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NiAtMTI0LjAzNCkiLz48cGF0aCBmaWxsPSIjZTZlNmU2IiBkPSJNMTY0LjgzIDM1NC43MTlsLTcuNTY5IDcuNTY4cy01LjA0NSA3MC42MzYgNS4wNDYgODQuOTMxIDU2LjM0IDUyLjk3NyA1OC44NjMgNTAuNDU1IDE4LjUtMTUuMTM3IDE1LjEzNy0xNi44MTgtNDguMDg2LTQ4LjQxMS00OC4wODYtNDguNDExbDMuNTE4LTY1LjExMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZmlsbD0iIzJmMmU0MSIgZD0iTTIyMS4yMjIgMjM1LjkwM3M5LjcxOS0zLjUzNCAyMi45NzIgMy45NzZsLTcuMDY4IDEuNzY3czEwLjYwMi44ODMgMTEuOTI3IDE1LjAyaC00Ljg2czMuMDkzIDEyLjM3IDAgMTUuOTAzbC0xLjk4Ny0zLjc1NS01Ljc0MyAxMS40ODYtMS4zMjUtNS43NDMtMi42NTEuODg0LTEuNzY3LTkuMjc3cy00LjQxOCA2LjYyNi03Ljk1MiA3LjA2OHYtNS43NDNzLTkuNzE5IDExLjA0NC0xMi44MSAxMC42MDJsNC40MTctNi4xODQtNi4xODUgMS4zMjUgMi42NS00LjQxOC0xNS45MDMgNC40MTggMy41MzQtNC40MTgtMTEuMDQ0IDMuNTM0LTUuMyAyLjIxcy03LjUxLTE3LjIzIDMuMDkxLTI5LjE1NyAyNi4wNjQtMTQuNTc4IDM2LjAwNC05LjQ5OHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTIyMS44ODUgNjguOTkxaDY0My44NjJ2NDEyLjM1OEgyMjEuODg1eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNDAuMjk2IDEyMC43MTFoNjA3LjAzOXYzMzYuMjQzSDI0MC4yOTZ6Ii8+PHBhdGggZmlsbD0iIzZjNjNmZiIgZD0iTTIyMS42MSA2OC42MjZoNjQzLjg2MlY5NS45OEgyMjEuNjF6Ii8+PGNpcmNsZSBjeD0iMjQxLjkzNyIgY3k9IjgyLjYxMSIgcj0iNS4wNyIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjI2MS4xODEiIGN5PSI4Mi42MTEiIHI9IjUuMDciIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIyODAuNDI1IiBjeT0iODIuNjExIiByPSI1LjA3IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTI5NS40NTQgMTU1LjU5OWgxNTUuOTgxdjI2Ni40NjdIMjk1LjQ1NHoiLz48cGF0aCBmaWxsPSIjNmM2M2ZmIiBkPSJNNDc4LjM2IDE1NS41OTloMTI5Ljk4NHY3My4zNDhINDc4LjM2eiIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik00NzguMzYgMjQ5LjM3M2gxMjkuOTg0djc4LjkxOUg0NzguMzZ6Ii8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTQ3OC4zNiAzNDguNzE4aDEyOS45ODR2NzMuMzQ4SDQ3OC4zNnoiLz48cGF0aCBmaWxsPSIjZTZlNmU2IiBkPSJNNjM2LjE5OCAxNTUuNTk5aDE1NS45ODF2MTE2LjEyNUg2MzYuMTk4eiIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik02MzYuMTk4IDMwNS45NDFoMTU1Ljk4MXYxMTYuMTI1SDYzNi4xOTh6Ii8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTU0NC42OTEgMTg4Ljc1NWwtMi4wMzYtLjU0MUw1ODcuMDg5IDIxLjA2aDI1Ny43Mzh2Mi4xMDZINTg4LjcwOGwtNDQuMDE3IDE2NS41ODl6Ii8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTEwMjEuODg3IDE2OC4yNkEyMi4xMTMgMjIuMTEzIDAgMTExMDQ0IDE0Ni4xNDdhMjIuMTM4IDIyLjEzOCAwIDAxLTIyLjExMyAyMi4xMTN6bTAtNDIuMTJhMjAuMDA3IDIwLjAwNyAwIDEwMjAuMDA3IDIwLjAwNyAyMC4wMyAyMC4wMyAwIDAwLTIwLjAwNy0yMC4wMDd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxjaXJjbGUgY3g9Ijg2NS44ODciIGN5PSIyMi4xMTMiIHI9IjguNDI0IiBmaWxsPSIjNmM2M2ZmIi8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTY3Mi45NDcgNTMwLjcwNkg0MTUuMjA4VjUyOC42aDI1Ni4xMmw0NC4wMTctMTY1LjU5IDIuMDM2LjU0MS00NC40MzQgMTY3LjE1NXoiLz48cGF0aCBmaWxsPSIjM2YzZDU2IiBkPSJNNTUwLjE0OSA2NzUuOGEyMi4xMTMgMjIuMTEzIDAgMTEyMi4xMTItMjIuMTEzQTIyLjEzOCAyMi4xMzggMCAwMTU1MC4xNSA2NzUuOHptMC00Mi4xMmEyMC4wMDcgMjAuMDA3IDAgMTAyMC4wMDYgMjAuMDA3IDIwLjAzIDIwLjAzIDAgMDAtMjAuMDA2LTIwLjAwN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PGNpcmNsZSBjeD0iMzk0LjE0OSIgY3k9IjUyOS42NTMiIHI9IjguNDI0IiBmaWxsPSIjNmM2M2ZmIi8+PC9zdmc+"}}]);