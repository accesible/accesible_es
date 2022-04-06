"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[261],{3905:function(M,e,t){t.d(e,{Zo:function(){return g},kt:function(){return c}});var i=t(7294);function n(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function N(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(M);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,i)}return t}function u(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?N(Object(t),!0).forEach((function(e){n(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function a(M,e){if(null==M)return{};var t,i,n=function(M,e){if(null==M)return{};var t,i,n={},N=Object.keys(M);for(i=0;i<N.length;i++)t=N[i],e.indexOf(t)>=0||(n[t]=M[t]);return n}(M,e);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);for(i=0;i<N.length;i++)t=N[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(n[t]=M[t])}return n}var I=i.createContext({}),j=function(M){var e=i.useContext(I),t=e;return M&&(t="function"==typeof M?M(e):u(u({},e),M)),t},g=function(M){var e=j(M.components);return i.createElement(I.Provider,{value:e},M.children)},r={inlineCode:"code",wrapper:function(M){var e=M.children;return i.createElement(i.Fragment,{},e)}},T=i.forwardRef((function(M,e){var t=M.components,n=M.mdxType,N=M.originalType,I=M.parentName,g=a(M,["components","mdxType","originalType","parentName"]),T=j(t),c=n,D=T["".concat(I,".").concat(c)]||T[c]||r[c]||N;return t?i.createElement(D,u(u({ref:e},g),{},{components:t})):i.createElement(D,u({ref:e},g))}));function c(M,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof M||n){var N=t.length,u=new Array(N);u[0]=T;var a={};for(var I in e)hasOwnProperty.call(e,I)&&(a[I]=e[I]);a.originalType=M,a.mdxType="string"==typeof M?M:n,u[1]=a;for(var j=2;j<N;j++)u[j]=t[j];return i.createElement.apply(null,u)}return i.createElement.apply(null,t)}T.displayName="MDXCreateElement"},1537:function(M,e,t){t.r(e),t.d(e,{assets:function(){return g},contentTitle:function(){return I},default:function(){return c},frontMatter:function(){return a},metadata:function(){return j},toc:function(){return r}});var i=t(7462),n=t(3366),N=(t(7294),t(3905)),u=["components"],a={id:"imagen",title:"Im\xe1genes"},I=void 0,j={unversionedId:"imagen",id:"imagen",title:"Im\xe1genes",description:"img",source:"@site/docs/imagen.md",sourceDirName:".",slug:"/imagen",permalink:"/imagen",editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/imagen.md",tags:[],version:"current",frontMatter:{id:"imagen",title:"Im\xe1genes"},sidebar:"tutorialSidebar",previous:{title:"Formularios",permalink:"/formulario"},next:{title:"Modales",permalink:"/modal"}},g={},r=[{value:"Imagen en bot\xf3n",id:"imagen-en-bot\xf3n",level:2},{value:"Imagen en link",id:"imagen-en-link",level:2}],T={toc:r};function c(M){var e=M.components,a=(0,n.Z)(M,u);return(0,N.kt)("wrapper",(0,i.Z)({},T,a,{components:e,mdxType:"MDXLayout"}),(0,N.kt)("p",null,(0,N.kt)("img",{loading:"lazy",alt:"img",src:t(3185).Z,width:"733",height:"507"})," "),(0,N.kt)("ul",null,(0,N.kt)("li",{parentName:"ul"},(0,N.kt)("p",{parentName:"li"},(0,N.kt)("strong",{parentName:"p"},"Todas las im\xe1genes deben tener el atributo alt"),", en caso de im\xe1genes decorativas, debe estar vac\xedo."),(0,N.kt)("pre",{parentName:"li"},(0,N.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!-- imagen no decorativa --\x3e\n  <img src="mi-imagen.jpg" alt="Descripci\xf3n">\n\n  \x3c!-- imagen decorativa --\x3e\n  <img src="mi-imagen-decorativa.jpg" alt="">\n'))),(0,N.kt)("li",{parentName:"ul"},(0,N.kt)("p",{parentName:"li"},"El texto alternativo debe incluir una descripci\xf3n concisa (",(0,N.kt)("strong",{parentName:"p"},"125 caracteres m\xe1ximo"),"), intentando transmitir la misma informaci\xf3n que la imagen.")),(0,N.kt)("li",{parentName:"ul"},(0,N.kt)("p",{parentName:"li"},"En caso de descripciones muy largas, se debe usar el atributo ",(0,N.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20-TECHS/H45.html"},"longdesc"),".")),(0,N.kt)("li",{parentName:"ul"},(0,N.kt)("p",{parentName:"li"},"Im\xe1genes funcionales deben llevar en el ",(0,N.kt)("strong",{parentName:"p"},"alt la acci\xf3n que realizan"),".")),(0,N.kt)("li",{parentName:"ul"},(0,N.kt)("p",{parentName:"li"},"Si la imagen tiene informaci\xf3n compleja, como gr\xe1ficos, se debe a\xf1adir breve texto identificativo y, a continuaci\xf3n, la descripci\xf3n detallada de la informaci\xf3n debe ser proporcionada en otros lugares (por ejemplo, en una tabla de datos).")),(0,N.kt)("li",{parentName:"ul"},(0,N.kt)("p",{parentName:"li"},'Si la imagen est\xe1 suficientemente descrita en el texto - por ejemplo, un simple diagrama que ilustra lo que est\xe1 escrito en el texto de la p\xe1gina web puede tener breve texto alternativo como "Diagrama de flujo de trabajo como se ha descrito anteriormente.\u201d, o bien dejar vac\xedo el texto alternativo.'))),(0,N.kt)("h2",{id:"imagen-en-bot\xf3n"},"Imagen en bot\xf3n"),(0,N.kt)("h2",{id:"imagen-en-link"},"Imagen en link"),(0,N.kt)("p",null,"Si el enlace no tiene texto descriptivo, debemos a\xf1adir la etiqueta ",(0,N.kt)("inlineCode",{parentName:"p"},"alt")," y el texto debe transmitir la acci\xf3n."),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Correcto --\x3e\n<a href="#url">\n    <img src="lupa.jpg" alt="Buscar">\n</a>\n')),(0,N.kt)("p",null,"Si el enlace tiene texto descriptivo, debemos dejar vac\xedo el atributo ",(0,N.kt)("inlineCode",{parentName:"p"},"alt")),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Correcto, no a\xf1adimos alt ya que el enlace tiene texto --\x3e\n<a href="#url">\n    <img src="lupa.jpg" alt="">\n    Buscar\n</a>\n\n\x3c!-- Incorrecto, duplicidad de informaci\xf3n, texto y alt --\x3e\n<a href="#url">\n    <img src="lupa.jpg" alt="Buscar">\n    Buscar\n</a>\n')),(0,N.kt)("ul",null,(0,N.kt)("li",{parentName:"ul"},"Si la imagen est\xe1 dentro de un bot\xf3n, debemos a\xf1adir tambi\xe9n el atributo ",(0,N.kt)("inlineCode",{parentName:"li"},"title"),", usar ",(0,N.kt)("inlineCode",{parentName:"li"},"aria-label")," o bien a\xf1adir un texto.")),(0,N.kt)("pre",null,(0,N.kt)("code",{parentName:"pre",className:"language-html"},'\n\x3c!-- Correcto --\x3e\n<button>\n  <img src="impresora.png" alt="Imprimir documento" title="Imprimir documento">\n</button>\n\n<button aria-label="Imprimir documento">\n  <img src="impresora.png" alt>\n</button>\n\n<button>\n  <img src="impresora.png" alt>\n  Imprimir\n</button>\n\n<button>\n  <img src="impresora.png" alt>\n  <span class="ocultar" role="presentation">Imprimir</span>\n</button>\n')))}c.isMDXComponent=!0},3185:function(M,e){e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJmZTgxYjY4Yi1jOWRlLTQ3NmEtOWY1OC1hM2U4YjFkNjViYzciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDczMi44MDIgNTA3LjIwNCI+PHBhdGggZmlsbD0iIzJmMmU0MSIgZD0iTTc5NS44MDUgMzY0Ljk2MnMyNi4wMzgtNiA0MC4zNiA1LTE4LjIyOCAzNi0xOC4yMjggMzZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48cGF0aCBmaWxsPSIjZmZiOGI4IiBkPSJNNzY4Ljg3OCA1MDguNDQ1YTEwLjA1NiAxMC4wNTYgMCAwMC03LjU0LTEzLjQ1bC01LjI2Mi0zNS4zNDYtMTMuODI4IDEyLjM5NSA3LjExNyAzMS42NjRhMTAuMTEgMTAuMTEgMCAwMDE5LjUxMyA0LjczN3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzMuNTk5IC0xOTYuMzk4KSIvPjxwYXRoIGZpbGw9IiNmZmI4YjgiIGQ9Ik01ODkuNzg0IDQ5NS41MzZsLTEyLjIzMy0uODEyLTIuNjktNDcuNTcgMTguMDU0IDEuMTk4LTMuMTMxIDQ3LjE4NHoiLz48cGF0aCBmaWxsPSIjMmYyZTQxIiBkPSJNNTY4LjU0MyA0OTAuOTIzaDIzLjY0NHYxNC44ODdoLTM4LjUzMWExNC44ODcgMTQuODg3IDAgMDExNC44ODctMTQuODg3eiIvPjxwYXRoIGZpbGw9IiNmZmI4YjgiIGQ9Ik01NjguNjQzIDQ3OC42MDFsLTExLjUwMSA0LjI0Ni0yMS44NDktNDIuMzQyIDE2Ljk3NS02LjI2NiAxNi4zNzUgNDQuMzYyeiIvPjxwYXRoIGZpbGw9IiMyZjJlNDEiIGQ9Ik03ODMuNjE5IDY3Ny4wMTRoMjMuNjQ0djE0Ljg4N2gtMzguNTMxYTE0Ljg4NyAxNC44ODcgMCAwMTE0Ljg4Ny0xNC44ODd6IiB0cmFuc2Zvcm09InJvdGF0ZSgtMjAuMjYxIDEyMS41OTQgMTIzOS45NjcpIi8+PHBhdGggZmlsbD0iIzJmMmU0MSIgZD0iTTc2OC44IDQ5Mi4yNDlzLTEyLjM4OSA2LjY3LTguNTc3IDMzLjM1NGwzLjgxMiAxMDEuMDE1IDIxLjA2IDQ2LjA1IDE4LjEwNi00Ljc2Ni0xMS41My0zNy40NzIgMTUuMjQ4LTY1Ljc1NSAyIDExOS40MjggMTcuMTUzIDIuODU5IDI0LjY4My0xOTguNTI1LTMxLjQ0OC0xNC4yOTR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48Y2lyY2xlIGN4PSI1NzkuNDgyIiBjeT0iMTMyLjY2NiIgcj0iMjQuNTYxIiBmaWxsPSIjZmZiOGI4Ii8+PHBhdGggZmlsbD0iI2NjYyIgZD0iTTc2OS43MiA0OTUuMTg2YTEzLjk5IDEzLjk5IDAgMDEtNC45MjktLjU3MWwtLjM1LS4xNS4wNTItLjM3OWMuMDY3LS40ODQgNi42MS00OC41OTcgMi44ODQtNTguODQ0LTMuMi04LjgwMy05Ljc4NC0zOC41MjYtMTEuNzI0LTQ3LjQyNmE0LjgyIDQuODIgMCAwMTIuMzctNS4yNjNsMzUuNTQtMTkuOTE4YTYuNDg1IDYuNDg1IDAgMDE4LjcwNCAyLjI0OWw5LjAzMyAxNC41OTEgMTQuMS0xNC4xYTYuNDkgNi40OSAwIDAxOC4zMjUtLjczbDI5LjcyNSAyMC44MDlhNi44NzIgNi44NzIgMCAwMTIuNDUgOC4yNGMtNS42NzEgMTQuMDI0LTE4LjQ1MSA1MS4zMjQtMTQuNjQ3IDk0LjdsLjA2Mi43MDUtLjY4NS0uMTc4Yy0uMjU3LS4wNjYtMjUuOTE1LTYuNTQ3LTUyLjE1Ljk1LTE1LjI2NSA0LjM2MS0yNC4wMjIgNS4zMTUtMjguNzYgNS4zMTV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48cGF0aCBmaWxsPSIjY2NjIiBkPSJNNzU5LjI1IDM4My4xMDVhNC4zNTUgNC4zNTUgMCAwMC00LjgxNCAzLjE0OWwtMTYuMTMxIDU4LjI1MiAzLjgxMiAzNS4yNiAxOC4xMDYtMi44NTktMS45MDYtMjQuNzc3IDEzLjM0Mi0zMS40NDgtOC44MDctMzQuMzQ4YTQuMzU1IDQuMzU1IDAgMDAtMy42MDMtMy4yMjl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48cGF0aCBmaWxsPSIjMmYyZTQxIiBkPSJNODMyLjA3MyAyOTQuNTg2YTE3LjUwNiAxNy41MDYgMCAwMC0xNi4xNDEtOC41ODggMzQuMzA2IDM0LjMwNiAwIDAwLTkuNzU1IDIuNzNsLTE2LjA1NiA2LjI2NGMtNC4xNTUgMS42Mi04LjcwNSAzLjYwNi0xMC41MDggNy42ODUtMS42NzMgMy43ODYtLjQyNSA4LjE1OC44MzkgMTIuMWw2LjAwNyAxOC43MzVhNTcuMDMxIDU3LjAzMSAwIDAxMy40MDQtMTIuMzc2YzEuNzQ1LTMuOTE4IDQuNTA1LTcuNTMgOC4zMi05LjQ4NyA0LjE3MS0yLjE0IDkuMDg3LTIuMDk1IDEzLjc2OS0xLjg3IDYuNjMuMzIgMTMuODQgMS4xNjMgMTguNTUxIDUuODRhMTkuMjcgMTkuMjcgMCAwMTQuODkgOS41NDkgNTcuNDc5IDU3LjQ3OSAwIDAxMS4wMjUgMTAuODEgODkuNjE0IDg5LjYxNCAwIDAwNi44NDQtMTQuNjcyIDM2LjMgMzYuMyAwIDAwMi41NDItMTEuODc2IDE2LjcwMyAxNi43MDMgMCAwMC0zLjgyOC0xMS4yOTdjLTIuNzEzLTMuMDMxLTcuMTMzLTQuNjY4LTExLjAyLTMuNDY4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48cGF0aCBmaWxsPSIjZmZiOGI4IiBkPSJNODQ1LjczMiA1MjIuNDQ1YTEwLjA1NiAxMC4wNTYgMCAwMTcuNTQtMTMuNDVsNS4yNjItMzUuMzQ2IDEzLjgyOCAxMi4zOTUtNy4xMTcgMzEuNjY0YTEwLjExIDEwLjExIDAgMDEtMTkuNTEzIDQuNzM3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy41OTkgLTE5Ni4zOTgpIi8+PHBhdGggZmlsbD0iI2NjYyIgZD0iTTg2Mi44MTYgMzg1LjUyNmE2LjQxMyA2LjQxMyAwIDAxNS4zNSA2LjAwNmw1LjQ2IDEwOS4yaC0yMC4wMTJsLTYuNjctNTguMTMyIDguNDg5LTUxLjc4NWE2LjQxMyA2LjQxMyAwIDAxNy4zODMtNS4yODl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48cGF0aCBmaWxsPSIjZTZlNmU2IiBkPSJNOTA0LjE1NyA3MDIuMTY1YTI0Ni4zMDIgMjQ2LjMwMiAwIDAxMjAuMzg1LTc3LjczNXE0LjYtMTAuMjc3IDEwLjEyNy0yMC4xMDJjLjk0Ny0xLjY4NS0xLjY0NC0zLjItMi41OS0xLjUxNGEyNDkuNzA3IDI0OS43MDcgMCAwMC0yNy43ODYgNzYuNjU1cS0yLjA4NiAxMS4yNjktMy4xMzYgMjIuNjk2Yy0uMTc4IDEuOTIyIDIuODIzIDEuOTEgMyAweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy41OTkgLTE5Ni4zOTgpIi8+PGNpcmNsZSBjeD0iNzA4LjMzNyIgY3k9IjM5My43NDEiIHI9IjE5IiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTkwNi4xIDcwMi42N2ExNTkuNzg4IDE1OS43ODggMCAwMTEzLjIyNS01MC40M3EyLjk4NS02LjY2OCA2LjU3LTEzLjA0MmEuOTc0Ljk3NCAwIDAwLTEuNjgtLjk4MiAxNjEuOTk3IDE2MS45OTcgMCAwMC0xOC4wMjYgNDkuNzNxLTEuMzU0IDcuMzEtMi4wMzUgMTQuNzI0Yy0uMTE1IDEuMjQ3IDEuODMyIDEuMjM5IDEuOTQ3IDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48Y2lyY2xlIGN4PSI2OTcuMDEiIGN5PSI0MzMuNTk1IiByPSIxMi4zMjYiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBmaWxsPSIjZTZlNmU2IiBkPSJNOTAzLjY0NCA3MDEuNTA2YTE1OS43ODggMTU5Ljc4OCAwIDAxLTIwLjU5LTQ3Ljg5N3EtMS43NDgtNy4wOTMtMi44NDEtMTQuMzI0YS45NzQuOTc0IDAgMDAtMS45My4yNiAxNjEuOTk2IDE2MS45OTYgMCAwMDE2LjM3NCA1MC4yOThxMy40MyA2LjU5NiA3LjQ1MyAxMi44NmMuNjc1IDEuMDU0IDIuMjA2LS4xNSAxLjUzNC0xLjE5NnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzMuNTk5IC0xOTYuMzk4KSIvPjxjaXJjbGUgY3g9IjY0NC42NjkiIGN5PSI0MzIuNzMiIHI9IjEyLjMyNiIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGZpbGw9IiMzZjNkNTYiIGQ9Ik05NjUuMjEgNzAzLjM4N0g2NDQuOTE2YTEuMTkgMS4xOSAwIDAxMC0yLjM4Mkg5NjUuMjFhMS4xOSAxLjE5IDAgMTEwIDIuMzgyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy41OTkgLTE5Ni4zOTgpIi8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTU1NS43NTUgMzkzLjI3MUgyNDQuMzM3YTEwLjc1MSAxMC43NTEgMCAwMS0xMC43MzgtMTAuNzM4VjIwNy4xMzdhMTAuNzUxIDEwLjc1MSAwIDAxMTAuNzM4LTEwLjczOWgzMTEuNDE4YTEwLjc1IDEwLjc1IDAgMDExMC43MzggMTAuNzM5djE3NS4zOTZhMTAuNzUgMTAuNzUgMCAwMS0xMC43MzggMTAuNzM4ek0yNDQuMzM3IDE5OC43ODRhOC4zNjIgOC4zNjIgMCAwMC04LjM1MiA4LjM1M3YxNzUuMzk2YTguMzYyIDguMzYyIDAgMDA4LjM1MiA4LjM1MmgzMTEuNDE4YTguMzYyIDguMzYyIDAgMDA4LjM1Mi04LjM1MlYyMDcuMTM3YTguMzYyIDguMzYyIDAgMDAtOC4zNTItOC4zNTN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48cGF0aCBmaWxsPSIjM2YzZDU2IiBkPSJNNTAxLjQ2NiA0ODAuNTNoLTIwMi44NGExMC43NTEgMTAuNzUxIDAgMDEtMTAuNzM4LTEwLjczOXYtMzYuOTg4YTEwLjc1MSAxMC43NTEgMCAwMTEwLjczOS0xMC43MzloMjAyLjgzOWExMC43NSAxMC43NSAwIDAxMTAuNzM4IDEwLjczOXYzNi45ODhhMTAuNzUgMTAuNzUgMCAwMS0xMC43MzggMTAuNzM5em0tMjAyLjg0LTU2LjA4YTguMzYyIDguMzYyIDAgMDAtOC4zNTIgOC4zNTN2MzYuOTg4YTguMzYyIDguMzYyIDAgMDA4LjM1MyA4LjM1MmgyMDIuODM5YTguMzYyIDguMzYyIDAgMDA4LjM1Mi04LjM1MnYtMzYuOTg4YTguMzYyIDguMzYyIDAgMDAtOC4zNTItOC4zNTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMzLjU5OSAtMTk2LjM5OCkiLz48cGF0aCBmaWxsPSIjY2NjIiBkPSJNMzIxLjQ0OCA0NDMuNTQxYTcuNzU2IDcuNzU2IDAgMTAwIDE1LjUxMkg0NTMuODlhNy43NTYgNy43NTYgMCAwMDAtMTUuNTEyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy41OTkgLTE5Ni4zOTgpIi8+PHBhdGggZmlsbD0iIzZjNjNmZiIgZD0iTTQ3NS42NzMgNDQ2LjMxNWEuNTk3LjU5NyAwIDAwLS41MTcuODk1bDUuMDY0IDguNzdhLjU5Ny41OTcgMCAwMDEuMDMzIDBsNS4wNjQtOC43N2EuNTk3LjU5NyAwIDAwLS41MTYtLjg5NXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzMuNTk5IC0xOTYuMzk4KSIvPjxjaXJjbGUgY3g9IjExMy40MDEiIGN5PSI3OC41OTMiIHI9IjQ0LjUzMSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik01MTguNTk1IDM1My42MjVsLTUyLjI3Mi05MC41MzhhMy43MjIgMy43MjIgMCAwMC02LjQ0NyAwbC0zMS45IDU1LjI1Mi00Ny41NTctODIuMzdhNC43NzMgNC43NzMgMCAwMC04LjI2NyAwbC02Ny4wMTkgMTE2LjA4YTQuNzczIDQuNzczIDAgMDA0LjEzMyA3LjE2aDIwNi4xMDZhMy43MjMgMy43MjMgMCAwMDMuMjIzLTUuNTg0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy41OTkgLTE5Ni4zOTgpIi8+PHBhdGggZmlsbD0iIzNmM2Q1NiIgZD0iTTIyLjY3IDIxLjQ3N2gxOS4wOTF2MTkuMDkxSDIyLjY3eiIvPjwvc3ZnPg=="}}]);