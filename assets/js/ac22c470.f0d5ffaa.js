"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[595],{3905:(e,i,n)=>{n.d(i,{Zo:()=>I,kt:()=>j});var a=n(7294);function t(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function M(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?M(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function u(e,i){if(null==e)return{};var n,a,t=function(e,i){if(null==e)return{};var n,a,t={},M=Object.keys(e);for(a=0;a<M.length;a++)n=M[a],i.indexOf(n)>=0||(t[n]=e[n]);return t}(e,i);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);for(a=0;a<M.length;a++)n=M[a],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),N=function(e){var i=a.useContext(c),n=i;return e&&(n="function"==typeof e?e(i):r(r({},i),e)),n},I=function(e){var i=N(e.components);return a.createElement(c.Provider,{value:i},e.children)},o={inlineCode:"code",wrapper:function(e){var i=e.children;return a.createElement(a.Fragment,{},i)}},l=a.forwardRef((function(e,i){var n=e.components,t=e.mdxType,M=e.originalType,c=e.parentName,I=u(e,["components","mdxType","originalType","parentName"]),l=N(n),j=t,s=l["".concat(c,".").concat(j)]||l[j]||o[j]||M;return n?a.createElement(s,r(r({ref:i},I),{},{components:n})):a.createElement(s,r({ref:i},I))}));function j(e,i){var n=arguments,t=i&&i.mdxType;if("string"==typeof e||t){var M=n.length,r=new Array(M);r[0]=l;var u={};for(var c in i)hasOwnProperty.call(i,c)&&(u[c]=i[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,r[1]=u;for(var N=2;N<M;N++)r[N]=n[N];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},273:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>M,metadata:()=>u,toc:()=>N});var a=n(7462),t=(n(7294),n(3905));const M={id:"estructura",title:"Estructura",image:"/img/estructura.svg",description:"Documentaci\xf3n para organizar y marcar de forma sem\xe1ntica nuestro sitio web",keywords:["marcado sem\xe1ntico","estructura accesible","wai-aria"]},r=void 0,u={unversionedId:"estructura",id:"estructura",title:"Estructura",description:"Documentaci\xf3n para organizar y marcar de forma sem\xe1ntica nuestro sitio web",source:"@site/docs/estructura.md",sourceDirName:".",slug:"/estructura",permalink:"/estructura",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/estructura.md",tags:[],version:"current",frontMatter:{id:"estructura",title:"Estructura",image:"/img/estructura.svg",description:"Documentaci\xf3n para organizar y marcar de forma sem\xe1ntica nuestro sitio web",keywords:["marcado sem\xe1ntico","estructura accesible","wai-aria"]},sidebar:"tutorialSidebar",previous:{title:"Encabezados",permalink:"/encabezado"},next:{title:"Formularios",permalink:"/formulario"}},c={},N=[{value:"Header",id:"header",level:2},{value:"Nav",id:"nav",level:2},{value:"Main",id:"main",level:2},{value:"Aside",id:"aside",level:2},{value:"Footer",id:"footer",level:2},{value:"Article",id:"article",level:2},{value:"Section",id:"section",level:2}],I={toc:N};function o(e){let{components:i,...M}=e;return(0,t.kt)("wrapper",(0,a.Z)({},I,M,{components:i,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"img",src:n(962).Z,width:"888",height:"652"})),(0,t.kt)("p",null,"Las secciones de nuestro sitio pueden ser organizadas mediante un ",(0,t.kt)("strong",{parentName:"p"},"marcado sem\xe1ntico"),". La sem\xe1ntica literalmente significa usar un ",(0,t.kt)("strong",{parentName:"p"},"lenguaje \u201csignificativo\u201d"),", a partir de HTML5 disponemos de una serie de etiquetas de marcado sem\xe1ntico que nos ayudan a describir y jerarquizar el contenido."),(0,t.kt)("p",null,"Estas son algunas de las etiquetas de contenido que podemos usar en nuestro sitio:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"header, nav, main, article, aside, address, footer")),(0,t.kt)("p",null,"Ejemplo de estructura sem\xe1ntica:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'    <header>\n        <img src="logo.png" alt="Mi web" />\n        <nav>\n            \x3c!-- men\xfa principal --\x3e\n        </nav>\n    </header>\n\n\n    <aside>\n        <nav>\n            \x3c!-- men\xfa secundario --\x3e\n        </nav>\n    </aside>\n\n    <main>\n        <h1>T\xedtulo principal</h1>\n        <section>\n            <header>T\xedtulo secci\xf3n presentaci\xf3n</header>\n        </section>\n\n        <section>\n            <header>T\xedtulo secci\xf3n art\xedculos</header>\n            <article>\n                <header>\n                    <h2> T\xedtulo art\xedculo 1 </h2>\n                <header>\n            </article>\n                <header>\n                    <h2> T\xedtulo art\xedculo 2 </h2>\n                </header>\n            <article>\n        </section>\n    </main>\n\n    <footer>\n    </footer>\n\n')),(0,t.kt)("h2",{id:"header"},"Header"),(0,t.kt)("p",null,"El header es la primera zona que nos encontramos en cada p\xe1gina, y contiene informaci\xf3n com\xfan, como puede ser el logotipo del sitio web, la funci\xf3n de b\xfasqueda y las opciones de navegaci\xf3n."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<header>\n  <img src="logo.png" alt="Mi web" />\n</header>\n\n\x3c!-- main --\x3e\n\n\x3c!-- footer --\x3e\n')),(0,t.kt)("h2",{id:"nav"},"Nav"),(0,t.kt)("p",null,"Se utiliza para determinar la ",(0,t.kt)("strong",{parentName:"p"},"navegaci\xf3n principal")," de la p\xe1gina."),(0,t.kt)("p",null,"En el caso de tener varios men\xfas de navegaci\xf3n, por ejemplo uno en la cabecera y otro en el pie, deber\xedamos usar el atributo ",(0,t.kt)("strong",{parentName:"p"},"aria-labelledby"),", para que los lectores de pantalla sepan distinguir el tipo de navegaci\xf3n."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<header>\n  \x3c!-- contenido header --\x3e\n\n  <nav aria-labelledby="menu-principal">\n    <h2 id="menu-principal">Menu de navegaci\xf3n principal</h2>\n    \x3c!-- elementos del men\xfa --\x3e\n  </nav>\n</header>\n\n\x3c!-- main --\x3e\n\n<footer>\n  <nav aria-labelledby="menu-secundario">\n    <h2 id="menu-secundario">Men\xfa de navegaci\xf3n secundario</h2>\n    \x3c!-- elementos del men\xfa --\x3e\n  </nav>\n</footer>\n')),(0,t.kt)("h2",{id:"main"},"Main"),(0,t.kt)("p",null,"La etiqueta main indica el contenido principal, esta etiqueta debe ser \xfanica por p\xe1gina."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- header --\x3e\n\n<main>\n  \x3c!-- contenido principal --\x3e\n</main>\n\n\x3c!-- footer --\x3e\n")),(0,t.kt)("h2",{id:"aside"},"Aside"),(0,t.kt)("p",null,"Son secciones que podr\xedan ir en el contenido principal, pero pueden ser separadas y significativas por s\xed mismas; Por ejemplo, una nota al margen explicando o anotando el contenido principal."),(0,t.kt)("h2",{id:"footer"},"Footer"),(0,t.kt)("p",null,"Al igual que el encabezado, es un \xe1rea con la misma informaci\xf3n en todas las p\xe1ginas, se suele colocar la informaci\xf3n legal, privacidad, redes sociales o enlaces de navegaci\xf3n."),(0,t.kt)("h2",{id:"article"},"Article"),(0,t.kt)("p",null,"La etiqueta article define un ",(0,t.kt)("strong",{parentName:"p"},"contenido independiente y aut\xf3nomo"),", es decir fuera del contexto de la web seguir\xeda teniendo significado."),(0,t.kt)("p",null,"Ejemplos de uso"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Noticias"),(0,t.kt)("li",{parentName:"ul"},"Entrada de un blog")),(0,t.kt)("h2",{id:"section"},"Section"),(0,t.kt)("p",null,"Esta etiqueta se usa para definir una secci\xf3n, es similar a un div, pero con car\xe1cter sem\xe1ntico. Los lectores de pantalla lo identifican como una regi\xf3n."),(0,t.kt)("p",null,"Se utiliza para crear grupos, cap\xedtulos o secciones de un contenido."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<article role="article">\n  <header>\n    <h2>Mi opini\xf3n sobre el mundo</h2>\n  </header>\n  <section class="content">\n    <p>Aqu\xed voy hablar de lo maravilloso que es el mundo.</p>\n  </section>\n  <section class="comments">\n    <div class="comment" role="article">\n      <p>Increible post</p>\n    </div>\n    <div class="comment" role="article">\n      <p>Me gusta c\xf3mo sintetizas</p>\n    </div>\n  </section>\n</article>\n')))}o.isMDXComponent=!0},962:(e,i,n)=>{n.d(i,{Z:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJiZTMyYzg1Yy05Mzg4LTRhMmItYTRlNS0yNzE1NzRhNWI5YjIiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDg4OCA2NTEuOTMyIj48ZWxsaXBzZSBjeD0iOTYuNjc5IiBjeT0iNjMxLjc5MyIgZmlsbD0iI2U2ZTZlNiIgcng9Ijk2LjM0OCIgcnk9IjIwLjAwNyIvPjxlbGxpcHNlIGN4PSI1NS4wNzkiIGN5PSIxNDMuNjUxIiBmaWxsPSIjMmYyZTQxIiByeD0iMzMuMjE2IiByeT0iMzEuMTE0Ii8+PHBhdGggZmlsbD0iI2ZmYjhiOCIgZD0iTTMwNy43ODQgNDYxLjUxNGw4LjQwOSAxMS43NzJzNDAuMzYzIDguNDEgMjUuMjI3IDIxLjAyMy0zNy0xMS43NzMtMzctMTEuNzczTDI5Mi42NDcgNDY3LjR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik0yNjQuMDU2IDMyNy44MXMxMC45MzIgMCAxMy40NTUgMTUuMTM2IDUuMDQ1IDY1LjU5IDUuMDQ1IDY1LjU5IDM1LjMxOCA0Ni4yNSAyOS40MzIgNTIuMTM3LTEyLjYxMyAxNi44MTgtMTYuODE4IDE1LjEzNi00MC4zNjMtNTEuMjk1LTQwLjM2My01MS4yOTV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiNmZmI4YjgiIGQ9Ik0yMzAuNDIgMjg0LjkyM3MuODQxIDMyLjc5NiAxMC45MzIgMzQuNDc4IDYuNzI3IDEyLjYxMyA2LjcyNyAxMi42MTMtMzIuNzk1IDE5LjM0MS01NC42NTkgMGwtNC4yMDQtMTAuMDlzMTUuMTM2LTEwLjkzMyA4LjQwOS0yNi4wNjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiMyZjJlNDEiIGQ9Ik0yODYuNzYgNDg2Ljc0czQ5LjYxNCA5Mi41IDMxLjExNCAxMjEuMDkxLTQ2LjI1IDg3LjQ1NS01MC40NTQgODcuNDU1LTI3Ljc1LTExLjc3My0yNi4wNjgtMTkuMzQxIDI2LjkwOS02My45MSAzMy42MzYtNjguOTU1IDMuMzY0LTE4LjUgMi41MjMtMTkuMzQtMjguNTktNDUuNDEtMjguNTktNDUuNDEuODQgNzAuNjM3LTIuNTI0IDgxLjU2OS44NDEgODkuMTM2LTMuMzYzIDkyLjUtMjMuNTQ2IDkuMjUtMjYuOTEgNC4yMDQtMTMuNDU0LTgxLjU2OC02LjcyNi05OS4yMjdsLTEyLjYxNC0xMjEuMDl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxwYXRoIGZpbGw9IiMyZjJlNDEiIGQ9Ik0yNDEuMzUyIDcxMS4yNjNsMjEuMDIzIDM4LjY4MXMzMC4yNzIgMjEuODY0IDkuMjUgMjUuMjI4LTMzLjYzNy01LjA0Ni0zMy42MzctNS4wNDZsLTE4LjUtMTMuNDU0VjcxNy45OXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZmlsbD0iIzJmMmU0MSIgZD0iTTI2OS45NDMgNjg5LjRsLTEwLjkzMiAyNi4wNjdzLTQuMjA1IDEwLjkzMiAwIDEzLjQ1NSAxNS45NzcgMTcuNjU5IDguNDEgMTkuMzRhMjQuNjM4IDI0LjYzOCAwIDAxLTQuNjIyLjQ2IDQ2LjcyNiA0Ni43MjYgMCAwMS0zMy45Ny0xMy44MjRsLTYuODE4LTYuODE3czIzLjM1Mi01My43NzUgMjMuMDI4LTUzLjM3NiAyNC45MDQgMTQuNjk0IDI0LjkwNCAxNC42OTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxjaXJjbGUgY3g9IjUzLjM5OCIgY3k9IjE1Mi40OCIgcj0iMjguNTkxIiBmaWxsPSIjZmZiOGI4Ii8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTE5MyAzMTYuNDU3bDguODMgOC44M3MyNi45MDggMTAuMDkgMzkuNTIyIDBjMCAwLTQuNjI1LTkuNjctNC42MjUtOC44M3MzNi41OCA2LjMwNyAzOS45NDMgMjEuNDQzLTIuNTIzIDQxLjIwNS0yLjUyMyA0MS4yMDUgMjMuNTQ2IDExMSAxNC4yOTYgMTEzLjUyMi05NS44NjQgMjMuNTQ2LTk1LjAyMyA3LjU2OC02LjcyNy04MS41NjgtNi43MjctODEuNTY4bC0yOS40MzItNTYuMzRzNC4yMDUtMTguNSAxNC4yOTYtMjQuMzg3UzE5MyAzMTYuNDU3IDE5MyAzMTYuNDU3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NiAtMTI0LjAzNCkiLz48cGF0aCBmaWxsPSIjZmZiOGI4IiBkPSJNMjMwLjQyIDQ4MC44NTVsMTAuOTMyIDYuNzI3czQyLjA0NSAyOC41OSAyMC4xODIgMzMuNjM2LTM0LjQ3Ny0yMC4xODItMzQuNDc3LTIwLjE4MmwtOC40MS0xMC4wOXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZD0iTTE2OC4xOTMgMzU3LjI0MWwtNy41NjggNy41NjhzLTUuMDQ1IDcwLjYzNyA1LjA0NSA4NC45MzIgNTYuMzQxIDUyLjk3NyA1OC44NjQgNTAuNDU0IDE4LjUtMTUuMTM2IDE1LjEzNi0xNi44MTgtNDguMDg1LTQ4LjQxLTQ4LjA4NS00OC40MWwzLjUxNy02NS4xMTJ6IiBvcGFjaXR5PSIuMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1NiAtMTI0LjAzNCkiLz48cGF0aCBmaWxsPSIjZTZlNmU2IiBkPSJNMTY0LjgzIDM1NC43MTlsLTcuNTY5IDcuNTY4cy01LjA0NSA3MC42MzYgNS4wNDYgODQuOTMxIDU2LjM0IDUyLjk3NyA1OC44NjMgNTAuNDU1IDE4LjUtMTUuMTM3IDE1LjEzNy0xNi44MTgtNDguMDg2LTQ4LjQxMS00OC4wODYtNDguNDExbDMuNTE4LTY1LjExMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZmlsbD0iIzJmMmU0MSIgZD0iTTIyMS4yMjIgMjM1LjkwM3M5LjcxOS0zLjUzNCAyMi45NzIgMy45NzZsLTcuMDY4IDEuNzY3czEwLjYwMi44ODMgMTEuOTI3IDE1LjAyaC00Ljg2czMuMDkzIDEyLjM3IDAgMTUuOTAzbC0xLjk4Ny0zLjc1NS01Ljc0MyAxMS40ODYtMS4zMjUtNS43NDMtMi42NTEuODg0LTEuNzY3LTkuMjc3cy00LjQxOCA2LjYyNi03Ljk1MiA3LjA2OHYtNS43NDNzLTkuNzE5IDExLjA0NC0xMi44MSAxMC42MDJsNC40MTctNi4xODQtNi4xODUgMS4zMjUgMi42NS00LjQxOC0xNS45MDMgNC40MTggMy41MzQtNC40MTgtMTEuMDQ0IDMuNTM0LTUuMyAyLjIxcy03LjUxLTE3LjIzIDMuMDkxLTI5LjE1NyAyNi4wNjQtMTQuNTc4IDM2LjAwNC05LjQ5OHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTYgLTEyNC4wMzQpIi8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTIyMS44ODUgNjguOTkxaDY0My44NjJ2NDEyLjM1OEgyMjEuODg1eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNDAuMjk2IDEyMC43MTFoNjA3LjAzOXYzMzYuMjQzSDI0MC4yOTZ6Ii8+PHBhdGggZmlsbD0iZ3JlZW4iIGQ9Ik0yMjEuNjEgNjguNjI2aDY0My44NjJWOTUuOThIMjIxLjYxeiIvPjxjaXJjbGUgY3g9IjI0MS45MzciIGN5PSI4Mi42MTEiIHI9IjUuMDciIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIyNjEuMTgxIiBjeT0iODIuNjExIiByPSI1LjA3IiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMjgwLjQyNSIgY3k9IjgyLjYxMSIgcj0iNS4wNyIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik0yOTUuNDU0IDE1NS41OTloMTU1Ljk4MXYyNjYuNDY3SDI5NS40NTR6Ii8+PHBhdGggZmlsbD0iZ3JlZW4iIGQ9Ik00NzguMzYgMTU1LjU5OWgxMjkuOTg0djczLjM0OEg0NzguMzZ6Ii8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTQ3OC4zNiAyNDkuMzczaDEyOS45ODR2NzguOTE5SDQ3OC4zNnoiLz48cGF0aCBmaWxsPSIjZTZlNmU2IiBkPSJNNDc4LjM2IDM0OC43MThoMTI5Ljk4NHY3My4zNDhINDc4LjM2eiIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik02MzYuMTk4IDE1NS41OTloMTU1Ljk4MXYxMTYuMTI1SDYzNi4xOTh6Ii8+PHBhdGggZmlsbD0iZ3JlZW4iIGQ9Ik02MzYuMTk4IDMwNS45NDFoMTU1Ljk4MXYxMTYuMTI1SDYzNi4xOTh6Ii8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTU0NC42OTEgMTg4Ljc1NWwtMi4wMzYtLjU0MUw1ODcuMDg5IDIxLjA2aDI1Ny43Mzh2Mi4xMDZINTg4LjcwOGwtNDQuMDE3IDE2NS41ODl6Ii8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTEwMjEuODg3IDE2OC4yNkEyMi4xMTMgMjIuMTEzIDAgMTExMDQ0IDE0Ni4xNDdhMjIuMTM4IDIyLjEzOCAwIDAxLTIyLjExMyAyMi4xMTN6bTAtNDIuMTJhMjAuMDA3IDIwLjAwNyAwIDEwMjAuMDA3IDIwLjAwNyAyMC4wMyAyMC4wMyAwIDAwLTIwLjAwNy0yMC4wMDd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxjaXJjbGUgY3g9Ijg2NS44ODciIGN5PSIyMi4xMTMiIHI9IjguNDI0IiBmaWxsPSJncmVlbiIvPjxwYXRoIGZpbGw9IiMzZjNkNTYiIGQ9Ik02NzIuOTQ3IDUzMC43MDZINDE1LjIwOFY1MjguNmgyNTYuMTJsNDQuMDE3LTE2NS41OSAyLjAzNi41NDEtNDQuNDM0IDE2Ny4xNTV6Ii8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTU1MC4xNDkgNjc1LjhhMjIuMTEzIDIyLjExMyAwIDExMjIuMTEyLTIyLjExM0EyMi4xMzggMjIuMTM4IDAgMDE1NTAuMTUgNjc1Ljh6bTAtNDIuMTJhMjAuMDA3IDIwLjAwNyAwIDEwMjAuMDA2IDIwLjAwNyAyMC4wMyAyMC4wMyAwIDAwLTIwLjAwNi0yMC4wMDd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU2IC0xMjQuMDM0KSIvPjxjaXJjbGUgY3g9IjM5NC4xNDkiIGN5PSI1MjkuNjUzIiByPSI4LjQyNCIgZmlsbD0iZ3JlZW4iLz48L3N2Zz4="}}]);