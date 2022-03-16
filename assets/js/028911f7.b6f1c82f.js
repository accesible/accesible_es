"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[103],{3905:function(M,j,t){t.d(j,{Zo:function(){return T},kt:function(){return O}});var N=t(7294);function e(M,j,t){return j in M?Object.defineProperty(M,j,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[j]=t,M}function i(M,j){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);j&&(N=N.filter((function(j){return Object.getOwnPropertyDescriptor(M,j).enumerable}))),t.push.apply(t,N)}return t}function u(M){for(var j=1;j<arguments.length;j++){var t=null!=arguments[j]?arguments[j]:{};j%2?i(Object(t),!0).forEach((function(j){e(M,j,t[j])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(j){Object.defineProperty(M,j,Object.getOwnPropertyDescriptor(t,j))}))}return M}function I(M,j){if(null==M)return{};var t,N,e=function(M,j){if(null==M)return{};var t,N,e={},i=Object.keys(M);for(N=0;N<i.length;N++)t=i[N],j.indexOf(t)>=0||(e[t]=M[t]);return e}(M,j);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(M);for(N=0;N<i.length;N++)t=i[N],j.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(e[t]=M[t])}return e}var g=N.createContext({}),L=function(M){var j=N.useContext(g),t=j;return M&&(t="function"==typeof M?M(j):u(u({},j),M)),t},T=function(M){var j=L(M.components);return N.createElement(g.Provider,{value:j},M.children)},a={inlineCode:"code",wrapper:function(M){var j=M.children;return N.createElement(N.Fragment,{},j)}},D=N.forwardRef((function(M,j){var t=M.components,e=M.mdxType,i=M.originalType,g=M.parentName,T=I(M,["components","mdxType","originalType","parentName"]),D=L(t),O=e,n=D["".concat(g,".").concat(O)]||D[O]||a[O]||i;return t?N.createElement(n,u(u({ref:j},T),{},{components:t})):N.createElement(n,u({ref:j},T))}));function O(M,j){var t=arguments,e=j&&j.mdxType;if("string"==typeof M||e){var i=t.length,u=new Array(i);u[0]=D;var I={};for(var g in j)hasOwnProperty.call(j,g)&&(I[g]=j[g]);I.originalType=M,I.mdxType="string"==typeof M?M:e,u[1]=I;for(var L=2;L<i;L++)u[L]=t[L];return N.createElement.apply(null,u)}return N.createElement.apply(null,t)}D.displayName="MDXCreateElement"},3352:function(M,j,t){t.r(j),t.d(j,{assets:function(){return T},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return I},metadata:function(){return L},toc:function(){return a}});var N=t(7462),e=t(3366),i=(t(7294),t(3905)),u=["components"],I={id:"tabla",title:"Tablas"},g=void 0,L={unversionedId:"tabla",id:"tabla",title:"Tablas",description:"img",source:"@site/docs/tabla.md",sourceDirName:".",slug:"/tabla",permalink:"/tabla",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tabla.md",tags:[],version:"current",frontMatter:{id:"tabla",title:"Tablas"},sidebar:"tutorialSidebar",previous:{title:"SVG",permalink:"/svg"},next:{title:"WAI-ARIA",permalink:"/wai-aria"}},T={},a=[],D={toc:a};function O(M){var j=M.components,I=(0,e.Z)(M,u);return(0,i.kt)("wrapper",(0,N.Z)({},D,I,{components:j,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"img",src:t(9849).Z,width:"977",height:"642"})," "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usaremos las tablas siempre que mostremos datos tabulares"),", es decir en filas y columnas."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Debemos ",(0,i.kt)("strong",{parentName:"li"},"a\xf1adir un t\xedtulo")," que defina brevemente el contenido de la tabla mediante la etiqueta ",(0,i.kt)("inlineCode",{parentName:"li"},"caption"),", y describir la tabla mediante ",(0,i.kt)("inlineCode",{parentName:"li"},"aria-describedby"),", la etiqueta ",(0,i.kt)("inlineCode",{parentName:"li"},"<summary>")," est\xe1 ",(0,i.kt)("strong",{parentName:"li"},"obsoleta en HTML5"),"."),(0,i.kt)("li",{parentName:"ul"},"Se debe utilizar el atributo ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," dentro de un ",(0,i.kt)("inlineCode",{parentName:"li"},"th"),", para indicar si est\xe1 encabezando una columna ",(0,i.kt)("inlineCode",{parentName:"li"},"<th scope='col'>")," o una fila ",(0,i.kt)("inlineCode",{parentName:"li"},"<th scope='row'>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Evita el scroll horizontal"),", es preferible que la tabla crezca verticalmente."),(0,i.kt)("li",{parentName:"ul"},"Utiliza ",(0,i.kt)("inlineCode",{parentName:"li"},"thead"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tbody")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"tfoot")," para marcar las distintas secciones."),(0,i.kt)("li",{parentName:"ul"},"Utiliza atributos ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," y ",(0,i.kt)("inlineCode",{parentName:"li"},"header")," para ",(0,i.kt)("strong",{parentName:"li"},"asociar celdas de datos con celdas de encabezado"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'  <h3>Econom\xeda de Espa\xf1a</h3>\n\n  <p id="ejemplo1" aria-hidden="true">\n  En cada fila se muestran los datos de las importaciones (en euros y porcentaje de PIB) por a\xf1o, desde el 1960 hasta el 2020\n  </p>\n  <table aria-describedby="ejemplo1">\n  <caption>\n    Espa\xf1a - Importaciones de Mercanc\xedas\n  </caption>\n    <tr>\n      <th>Fecha</th>\n      <th>Importaciones</th>\n      <th>Importaciones % PIB</th>\n    </tr>\n    <tr>\n      <td>2020</td>\n      <td>286.801,0 M\u20ac</td>\n      <td>P25,56%</td>\n    </tr>\n    [...]\n  </table>\n\n')))}O.isMDXComponent=!0},9849:function(M,j){j.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJhMTIwYTJjNS1jOTlkLTRlNDEtOGY3Ni0zYWU2YTk3ZWY5NGYiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDk3Ni42MjIgNjQxLjUzMyI+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTMzMS44OTcuMzY1aDY0NC43MjV2NDEyLjkxSDMzMS44OTd6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM1MC4zMzMgNTIuMTU1aDYwNy44NTN2MzM2LjY5M0gzNTAuMzMzeiIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik0zMzEuNjIyIDBoNjQ0LjcyNXYyNy4zOUgzMzEuNjIyeiIvPjxjaXJjbGUgY3g9IjM1MS45NzYiIGN5PSIxNC4wMDMiIHI9IjUuMDc3IiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMzcxLjI0NiIgY3k9IjE0LjAwMyIgcj0iNS4wNzciIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIzOTAuNTE1IiBjeT0iMTQuMDAzIiByPSI1LjA3NyIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik00MTAuNTY5IDEwOS4wNjhoNjF2MjdoLTYxeiIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik01MzIuNTY5IDE2NS4wNjhoNjF2MjdoLTYxeiIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik00MTAuNTY5IDI0OS4wNjhoNjF2MjdoLTYxeiIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik01MzIuNTY5IDMwNS4wNjhoNjF2MjdoLTYxeiIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik04MzYuNTY5IDMzMy4wNjhoNjF2MjdoLTYxeiIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik03NzUuNTY5IDIyMS4wNjhoNjF2MjdoLTYxeiIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik01OTMuNTY5IDIyMS4wNjhoMTIydjI3aC0xMjJ6Ii8+PHBhdGggZmlsbD0iIzZjNjNmZiIgZD0iTTU5My41NjkgODAuMDY4aDEyMnYyN2gtMTIyeiIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik00NjEuMjU4IDE4MC4zMDF2MzM5aDYxMHYtMzM5em02MDggMjguMDg0aC01OC44VjE4Mi4zaDU4Ljh6bS0zNjIuOCAxOTYuNTgzdi0yNi4wODNoMTE5LjZ2MjYuMDgzem0xMTkuNiAydjI2LjA4M2gtMTE5LjZ2LTI2LjA4M3ptMC0xMTIuMzMzdjI2LjA4M2gtMTE5LjZ2LTI2LjA4M3ptLTExOS42LTJWMjY2LjU1aDExOS42djI2LjA4NHptMCA1Ni4xNjZ2LTI2LjA4M2gxMTkuNlYzNDguOHptMTE5LjYgMnYyNi4wODRoLTExOS42VjM1MC44em0tMTIxLjYtMzAuMDgzaC01OC44di0yNi4wODNoNTguOHptMCAyVjM0OC44aC01OC44di0yNi4wODN6bTAgMjguMDgzdjI2LjA4NGgtNTguOFYzNTAuOHptMCAyOC4wODR2MjYuMDgzaC01OC44di0yNi4wODN6bTEyMy42IDBoNTguOHYyNi4wODNoLTU4Ljh6bTAtMlYzNTAuOGg1OC44djI2LjA4NHptMC0yOC4wODR2LTI2LjA4M2g1OC44VjM0OC44em0wLTI4LjA4M3YtMjYuMDgzaDU4Ljh2MjYuMDgzem0wLTI4LjA4M1YyNjYuNTVoNTguOHYyNi4wODR6bTAtMjguMDg0di0yNi4wODNoNTguOHYyNi4wODN6bS0yIDBoLTExOS42di0yNi4wODNoMTE5LjZ6bS0xMjEuNiAwaC01OC44di0yNi4wODNoNTguOHptMCAydjI2LjA4NGgtNTguOFYyNjYuNTV6bS02MC44IDI2LjA4NGgtNTguOFYyNjYuNTVoNTguOHptMCAydjI2LjA4M2gtNTguOHYtMjYuMDgzem0wIDI4LjA4M1YzNDguOGgtNTguOHYtMjYuMDgzem0wIDI4LjA4M3YyNi4wODRoLTU4LjhWMzUwLjh6bTAgMjguMDg0djI2LjA4M2gtNTguOHYtMjYuMDgzem0wIDI4LjA4M3YyNi4wODNoLTU4Ljh2LTI2LjA4M3ptMiAwaDU4Ljh2MjYuMDgzaC01OC44em01OC44IDI4LjA4M3YyNi4wODNoLTU4Ljh2LTI2LjA4M3ptMiAwaDExOS42djI2LjA4M2gtMTE5LjZ6bTEyMS42IDBoNTguOHYyNi4wODNoLTU4Ljh6bTAtMnYtMjYuMDgzaDU4Ljh2MjYuMDgzem02MC44LTI2LjA4M2g1OC44djI2LjA4M2gtNTguOHptMC0ydi0yNi4wODNoNTguOHYyNi4wODN6bTAtMjguMDgzVjM1MC44aDU4Ljh2MjYuMDg0em0wLTI4LjA4NHYtMjYuMDgzaDU4LjhWMzQ4Ljh6bTAtMjguMDgzdi0yNi4wODNoNTguOHYyNi4wODN6bTAtMjguMDgzVjI2Ni41NWg1OC44djI2LjA4NHptMC0yOC4wODR2LTI2LjA4M2g1OC44djI2LjA4M3ptMC0yOC4wODN2LTI2LjA4M2g1OC44djI2LjA4M3ptLTIgMGgtNTguOHYtMjYuMDgzaDU4Ljh6bS02MC44IDBoLTExOS42di0yNi4wODNoMTE5LjZ6bS0xMjEuNiAwaC01OC44di0yNi4wODNoNTguOHptLTYwLjggMGgtNTguOHYtMjYuMDgzaDU4Ljh6bTAgMnYyNi4wODNoLTU4Ljh2LTI2LjA4M3ptLTYwLjggMjYuMDgzaC01OC44di0yNi4wODNoNTguOHptMCAydjI2LjA4NGgtNTguOFYyNjYuNTV6bTAgMjguMDg0djI2LjA4M2gtNTguOHYtMjYuMDgzem0wIDI4LjA4M1YzNDguOGgtNTguOHYtMjYuMDgzem0wIDI4LjA4M3YyNi4wODRoLTU4LjhWMzUwLjh6bTAgMjguMDg0djI2LjA4M2gtNTguOHYtMjYuMDgzem0wIDI4LjA4M3YyNi4wODNoLTU4Ljh2LTI2LjA4M3ptMCAyOC4wODN2MjYuMDgzaC01OC44di0yNi4wODN6bTIgMGg1OC44djI2LjA4M2gtNTguOHptNTguOCAyOC4wODN2MjYuMDg0aC01OC44di0yNi4wODR6bTIgMGg1OC44djI2LjA4NGgtNTguOHptNjAuOCAwaDExOS42djI2LjA4NGgtMTE5LjZ6bTEyMS42IDBoNTguOHYyNi4wODRoLTU4Ljh6bTYwLjggMGg1OC44djI2LjA4NGgtNTguOHptMC0ydi0yNi4wODNoNTguOHYyNi4wODN6bTYwLjgtMjYuMDgzaDU4Ljh2MjYuMDgzaC01OC44em0wLTJ2LTI2LjA4M2g1OC44djI2LjA4M3ptMC0yOC4wODN2LTI2LjA4M2g1OC44djI2LjA4M3ptMC0yOC4wODNWMzUwLjhoNTguOHYyNi4wODR6bTAtMjguMDg0di0yNi4wODNoNTguOFYzNDguOHptMC0yOC4wODN2LTI2LjA4M2g1OC44djI2LjA4M3ptMC0yOC4wODNWMjY2LjU1aDU4Ljh2MjYuMDg0em0wLTI4LjA4NHYtMjYuMDgzaDU4Ljh2MjYuMDgzem0wLTI4LjA4M3YtMjYuMDgzaDU4Ljh2MjYuMDgzem0wLTI4LjA4M1YxODIuM2g1OC44djI2LjA4NHptLTIgMGgtNTguOFYxODIuM2g1OC44em0tNjAuOCAwaC01OC44VjE4Mi4zaDU4Ljh6bS02MC44IDBoLTExOS42VjE4Mi4zaDExOS42em0tMTIxLjYgMGgtNTguOFYxODIuM2g1OC44em0tNjAuOCAwaC01OC44VjE4Mi4zaDU4Ljh6bS02MC44IDBoLTU4LjhWMTgyLjNoNTguOHptMCAydjI2LjA4M2gtNTguOHYtMjYuMDgzem0tNjAuOCAyNi4wODNoLTU4Ljh2LTI2LjA4M2g1OC44em0wIDJ2MjYuMDgzaC01OC44di0yNi4wODN6bTAgMjguMDgzdjI2LjA4NGgtNTguOFYyNjYuNTV6bTAgMjguMDg0djI2LjA4M2gtNTguOHYtMjYuMDgzem0wIDI4LjA4M1YzNDguOGgtNTguOHYtMjYuMDgzem0wIDI4LjA4M3YyNi4wODRoLTU4LjhWMzUwLjh6bTAgMjguMDg0djI2LjA4M2gtNTguOHYtMjYuMDgzem0wIDI4LjA4M3YyNi4wODNoLTU4Ljh2LTI2LjA4M3ptMCAyOC4wODN2MjYuMDgzaC01OC44di0yNi4wODN6bTAgMjguMDgzdjI2LjA4NGgtNTguOHYtMjYuMDg0em0yIDBoNTguOHYyNi4wODRoLTU4Ljh6bTU4LjggMjguMDg0djI2LjA4M2gtNTguOHYtMjYuMDgzem0yIDBoNTguOHYyNi4wODNoLTU4Ljh6bTYwLjggMGg1OC44djI2LjA4M2gtNTguOHptNjAuOCAwaDExOS42djI2LjA4M2gtMTE5LjZ6bTEyMS42IDBoNTguOHYyNi4wODNoLTU4Ljh6bTYwLjggMGg1OC44djI2LjA4M2gtNTguOHptNjAuOCAwaDU4Ljh2MjYuMDgzaC01OC44em0wLTJ2LTI2LjA4NGg1OC44djI2LjA4NHptNjAuOC0yNi4wODRoNTguOHYyNi4wODRoLTU4Ljh6bTAtMnYtMjYuMDgzaDU4Ljh2MjYuMDgzem0wLTI4LjA4M3YtMjYuMDgzaDU4Ljh2MjYuMDgzem0wLTI4LjA4M3YtMjYuMDgzaDU4Ljh2MjYuMDgzem0wLTI4LjA4M1YzNTAuOGg1OC44djI2LjA4NHptMC0yOC4wODR2LTI2LjA4M2g1OC44VjM0OC44em0wLTI4LjA4M3YtMjYuMDgzaDU4Ljh2MjYuMDgzem0wLTI4LjA4M1YyNjYuNTVoNTguOHYyNi4wODR6bTAtMjguMDg0di0yNi4wODNoNTguOHYyNi4wODN6bTAtMjguMDgzdi0yNi4wODNoNTguOHYyNi4wODN6bS00ODguNC01NC4xNjd2MjYuMDg0aC01OC44VjE4Mi4zem0tNTguOCAzMDguOTE3aDU4Ljh2MjYuMDgzaC01OC44em01NDcuMiAyNi4wODN2LTI2LjA4M2g1OC44djI2LjA4M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTEuNjg5IC0xMjkuMjM0KSIvPjxwYXRoIGZpbGw9IiMzZjNkNTYiIGQ9Ik0yNTcuNzM4IDYzNy42NjFIMHYtMi4xMDZoMjU4LjEybC0uMzgyIDIuMTA2eiIvPjxwYXRoIGZpbGw9IiMyZjJlNDEiIGQ9Ik0zMDIuMTIgNDY4Ljk2MUwyOTUuNDMgNjI2Ljk3bC00LjE4IDcxLjA2MnM5LjE5NiAxNS4wNDktNC4xOCAxNi43Mi0zOC40NTctMi41MDctMzUuMTEzLTEwLjg2OCA1Ljg1Mi04LjM2IDUuODUyLTguMzZsMy4zNDQtODAuMjU4LTI1LjA4LTk4LjY1MS0zMS43NyAxMDYuMTc1LTYuNjg4IDc2LjA3OHM5LjE5NyAxMS43MDUgMCAxNC4yMTMtMzMuNDQgMi41MDgtMzIuNjA1LTUuMDE3IDQuMTgtNy41MjQgNC4xOC03LjUyNGwtNC4xOC0yMjAuNzEgMTIuNTQtMTkuMjN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjY4OSAtMTI5LjIzNCkiLz48cGF0aCBmaWxsPSIjMmYyZTQxIiBkPSJNMjgzLjcyNyA3MDkuNzM3bDMuMzQ0IDIwLjlzMTkuMjI4IDQwLjEzLTcuNTI0IDQwLjEzLTE5LjIyOS0xNS44ODUtMTkuMjI5LTE1Ljg4NWwyLjUwOC00NS4xNDV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjY4OSAtMTI5LjIzNCkiLz48cGF0aCBmaWxsPSIjMmYyZTQxIiBkPSJNMTcwLjAyNyA3MDkuNzM3bC0zLjM0NCAyMC45cy0xOS4yMjggNDAuMTMgNy41MjUgNDAuMTMgMTkuMjI4LTE1Ljg4NSAxOS4yMjgtMTUuODg1bC0yLjUwOC00NS4xNDV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjY4OSAtMTI5LjIzNCkiLz48cGF0aCBmaWxsPSIjZmZiOWI5IiBkPSJNMjU1LjMwMiAyMzIuMzY2czguMzYgMzAuMDk3IDEwLjAzMiAzMC4wOTctMTUuODg0IDIzLjQwOS0xNS44ODQgMjMuNDA5bC0yNS45MTcgMTQuMjEyLTkuMTk2LTM4LjQ1N3M4LjM2LTIwLjkgNi42ODgtMzEuNzd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjY4OSAtMTI5LjIzNCkiLz48Y2lyY2xlIGN4PSIxMzAuMjM3IiBjeT0iODMuOTA0IiByPSIzMC45MzMiIGZpbGw9IiNmZmI5YjkiLz48cGF0aCBmaWxsPSIjNTc1YTg5IiBkPSJNMjM3Ljc0NSAyNzcuNTExbDI0LjcxNi0yMS40NjMgMTQuNTc4IDcuMjUgMzEuNzY5IDIwLjA2NXMtOC4zNiAxODAuNTgyLTQuMTggMTg3LjI3YzAgMC05LjE5NyAyMC45LTYzLjUzOCA4LjM2cy02OC41NTUtMTQuMjEyLTY4LjU1NS0xNC4yMTJsMTEuNzA1LTExMC4zNTUtMTQuMjEzLTY5LjM5IDQ3Ljc0LTMzLjM4NCAxNC45NjIgMjUuODZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjY4OSAtMTI5LjIzNCkiLz48cGF0aCBmaWxsPSIjZmZiOWI5IiBkPSJNMTU1LjgxNSAzNDEuMDVsLTcuNTI0IDM1LjExMnY3MS4wNjNzMTAuODY4IDQ1LjE0NSAxOS4yMjggMzMuNDQgOC4xODgtMTUuNDEgOC4xODgtMTUuNDFsLTEwLjY5Ni0xNi4zNTggNS4wMTYtNjYuODgyIDEzLjMyOS0zMS45MDV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjY4OSAtMTI5LjIzNCkiLz48cGF0aCBmaWxsPSIjZmZiOWI5IiBkPSJNMjk1LjcyIDM1OS43MjFsOC44ODEgMzQuOTYtNC4xMTYgNzAuMzItMTIuODI5IDE1LjY1N3MtLjY3NSAzLjgzOCA2LjAyNSAxNy4xMTMgMjMuNjEyLTMyLjM0OCAyMy42MTItMzIuMzQ4bDkuNjU3LTc0LjAyNi0yLjY4OC0zNy41NTF6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExLjY4OSAtMTI5LjIzNCkiLz48cGF0aCBmaWxsPSIjMmYyZTQxIiBkPSJNMjEyLjY2NSAxODIuMjA0czEwLjAzMi0yMS43MzYgMjkuMjYtMTYuNzIgMzAuMDk4IDEyLjU0IDMwLjkzNCAyMC4wNjQtLjQxOCAxOC44MTEtLjQxOCAxOC44MTEtMi4wOS0xNS40NjYtMTUuNDY3LTEyLjEyMi0zNC4yNzcuODM2LTM0LjI3Ny44MzZsLTMuMzQ0IDMwLjA5N3MtMy43NjItNS40MzQtNy45NDItMi4wOS0xMi4xMjMtMzIuMTg3IDEuMjU0LTM4Ljg3NnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTEuNjg5IC0xMjkuMjM0KSIvPjxwYXRoIGZpbGw9IiM1NzVhODkiIGQ9Ik0xODkuMjU2IDI4My4zNjRsLTE5LjIyOSAxLjY3MnMtMjEuNzM2IDU5LjM1Ny0xOS4yMjggNjEuMDMgMzIuNjA1IDExLjcwNCAzNi43ODUgOS4xOTYgMS42NzItNzEuODk4IDEuNjcyLTcxLjg5OHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTEuNjg5IC0xMjkuMjM0KSIvPjxwYXRoIGZpbGw9IiM1NzVhODkiIGQ9Ik0zMDIuMTIgMjg1LjAzNmw2LjY4OC0xLjY3M3MxMi41NCAxNS44ODUgMTYuNzIgMzQuMjc3IDEwLjAzMiAzNi43ODYgNi42ODggMzYuNzg2LTQzLjc5NCAxMC44NzUtNDMuNzk0IDEwLjg3NXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTEuNjg5IC0xMjkuMjM0KSIvPjwvc3ZnPg=="}}]);