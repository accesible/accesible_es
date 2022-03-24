"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[741],{3905:function(M,e,i){i.d(e,{Zo:function(){return o},kt:function(){return T}});var N=i(7294);function t(M,e,i){return e in M?Object.defineProperty(M,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):M[e]=i,M}function I(M,e){var i=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);e&&(N=N.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),i.push.apply(i,N)}return i}function a(M){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?I(Object(i),!0).forEach((function(e){t(M,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(i)):I(Object(i)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(i,e))}))}return M}function u(M,e){if(null==M)return{};var i,N,t=function(M,e){if(null==M)return{};var i,N,t={},I=Object.keys(M);for(N=0;N<I.length;N++)i=I[N],e.indexOf(i)>=0||(t[i]=M[i]);return t}(M,e);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);for(N=0;N<I.length;N++)i=I[N],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(M,i)&&(t[i]=M[i])}return t}var j=N.createContext({}),n=function(M){var e=N.useContext(j),i=e;return M&&(i="function"==typeof M?M(e):a(a({},e),M)),i},o=function(M){var e=n(M.components);return N.createElement(j.Provider,{value:e},M.children)},l={inlineCode:"code",wrapper:function(M){var e=M.children;return N.createElement(N.Fragment,{},e)}},g=N.forwardRef((function(M,e){var i=M.components,t=M.mdxType,I=M.originalType,j=M.parentName,o=u(M,["components","mdxType","originalType","parentName"]),g=n(i),T=t,r=g["".concat(j,".").concat(T)]||g[T]||l[T]||I;return i?N.createElement(r,a(a({ref:e},o),{},{components:i})):N.createElement(r,a({ref:e},o))}));function T(M,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof M||t){var I=i.length,a=new Array(I);a[0]=g;var u={};for(var j in e)hasOwnProperty.call(e,j)&&(u[j]=e[j]);u.originalType=M,u.mdxType="string"==typeof M?M:t,a[1]=u;for(var n=2;n<I;n++)a[n]=i[n];return N.createElement.apply(null,a)}return N.createElement.apply(null,i)}g.displayName="MDXCreateElement"},4259:function(M,e,i){i.r(e),i.d(e,{assets:function(){return o},contentTitle:function(){return j},default:function(){return T},frontMatter:function(){return u},metadata:function(){return n},toc:function(){return l}});var N=i(7462),t=i(3366),I=(i(7294),i(3905)),a=["components"],u={id:"modal",title:"Modales"},j=void 0,n={unversionedId:"modal",id:"modal",title:"Modales",description:"img",source:"@site/docs/modal.md",sourceDirName:".",slug:"/modal",permalink:"/modal",editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/modal.md",tags:[],version:"current",frontMatter:{id:"modal",title:"Modales"},sidebar:"tutorialSidebar",previous:{title:"Im\xe1genes",permalink:"/imagen"},next:{title:"Multimedia",permalink:"/multimedia"}},o={},l=[{value:"Dialog",id:"dialog",level:2}],g={toc:l};function T(M){var e=M.components,u=(0,t.Z)(M,a);return(0,I.kt)("wrapper",(0,N.Z)({},g,u,{components:e,mdxType:"MDXLayout"}),(0,I.kt)("p",null,(0,I.kt)("img",{loading:"lazy",alt:"img",src:i(2840).Z,width:"949",height:"658"})),(0,I.kt)("p",null,"Los modales siempre han sido problem\xe1ticos en accesibilidad, te recomendamos usarlos s\xf3lo en casos donde sean necesarios."),(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},(0,I.kt)("strong",{parentName:"li"},"No abrir modales de forma autom\xe1tica"),", es decir, si el usuario no ha realizado ninguna acci\xf3n."),(0,I.kt)("li",{parentName:"ul"},"Usar la etiqueta nativa ",(0,I.kt)("a",{parentName:"li",href:"#dialog"},(0,I.kt)("inlineCode",{parentName:"a"},"dialog")),", de lo contrario, a\xf1adir el atributo ",(0,I.kt)("inlineCode",{parentName:"li"},'role="dialog"'),"."),(0,I.kt)("li",{parentName:"ul"},"Podemos a\xf1adir ",(0,I.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," y ",(0,I.kt)("inlineCode",{parentName:"li"},"aria-describedby")," para a\xf1adir informaci\xf3n sobre el modal."),(0,I.kt)("li",{parentName:"ul"},"Cuando abrimos un modal, ",(0,I.kt)("strong",{parentName:"li"},"debemos bloquear todo el contenido que est\xe9 detr\xe1s")," y poner el foco sobre el primer campo si lo tuviera, tambi\xe9n debemos a\xf1adir el atributo ",(0,I.kt)("inlineCode",{parentName:"li"},'aria-modal="true"')," (con este atributo no es necesario usar ",(0,I.kt)("inlineCode",{parentName:"li"},"aria-hidden"),")."),(0,I.kt)("li",{parentName:"ul"},"Se debe poder cerrar con la tecla ",(0,I.kt)("inlineCode",{parentName:"li"},"Esc")," o bien pulsando un bot\xf3n de cierre."),(0,I.kt)("li",{parentName:"ul"},"Una vez cerrado, el foco debe volver al ",(0,I.kt)("strong",{parentName:"li"},"punto donde se lanz\xf3 el modal"),".")),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-html"},'<div id="dialog1" role="dialog" aria-labelledby="dialog1_label" aria-modal="true">\n    <h2 id="dialog1_label" class="dialog_label">A\xf1adir nuevo usuario</h2>\n    <div class="dialog_form">\n        ...\n    </div>\n</div>\n')),(0,I.kt)("h2",{id:"dialog"},"Dialog"),(0,I.kt)("p",null,"La etiqueta ",(0,I.kt)("inlineCode",{parentName:"p"},"dialog")," ya es compatible en todos los navegadores actuales (chrome, edge, firefox, y safari)."),(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},"Si usamos la etiqueta ",(0,I.kt)("inlineCode",{parentName:"li"},"<dialog>"),", a\xf1adiremos el atributo ",(0,I.kt)("inlineCode",{parentName:"li"},"open")," cuando est\xe9 visible.")),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-html"},'<dialog id="modal-prueba" open>\n    <h2>Modal de prueba</h2>\n    <p>Esto es un modal abierto</p>\n</dialog>\n')),(0,I.kt)("p",null,"Para interactuar con esta etiqueta tenemos los siguientes m\xe9todos:"),(0,I.kt)("ul",null,(0,I.kt)("li",{parentName:"ul"},".show() - Muestra la etiqueta dialog"),(0,I.kt)("li",{parentName:"ul"},".showModal() - Muestra el dialog como un modal, bloqueando el resto del contenido."),(0,I.kt)("li",{parentName:"ul"},".close() - Oculta la etiqueta dialog")),(0,I.kt)("p",null,"Si queremos personalizar el fondo, tenemos el pseudo-elemento CSS ",(0,I.kt)("inlineCode",{parentName:"p"},"::backdrop")),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-css"},"dialog::backdrop {\n    background-color: rgba(255,0,0,0.8);\n}\n")),(0,I.kt)("p",null,"M\xe1s informaci\xf3n sobre ",(0,I.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html"},"dialog - w3.org"),"."))}T.isMDXComponent=!0},2840:function(M,e){e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJiMDJmMDc5Ni1lNWEyLTRmOTMtOWIwYi0xZTU1MzI3MzhkYjEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDk0OC43NDIgNjU4LjMyNiI+PGVsbGlwc2UgY3g9IjcwMS4xMjUiIGN5PSI2NTMuODQ0IiBmaWxsPSIjZTZlNmU2IiByeD0iNDEuNzA0IiByeT0iNC4zNDQiLz48ZWxsaXBzZSBjeD0iODI0LjQ5OSIgY3k9IjY1My44NDQiIGZpbGw9IiNlNmU2ZTYiIHJ4PSI0MS43MDQiIHJ5PSI0LjM0NCIvPjxlbGxpcHNlIGN4PSI5MjAuMDcxIiBjeT0iNjUzLjg0NCIgZmlsbD0iI2U2ZTZlNiIgcng9IjI4LjY3MSIgcnk9IjIuOTg3Ii8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTEwNTMuOTA1IDc1MS40YTc5LjMgNzkuMyAwIDAxLTMuNzA1IDIxLjkyMWMtLjA1MS4xNjUtLjEwNS4zMjctLjE2LjQ5MmgtMTMuODI0Yy4wMTUtLjE0OC4wMy0uMzEzLjA0NC0uNDkyLjkyMi0xMC41OTcgNi4yMzctNzUuMDkyLS4xMTgtODYuMTIxLjU1Ni44OTQgMTguODM0IDMwLjUzIDE3Ljc2MyA2NC4yeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS42MjkgLTEyMC44MzcpIi8+PHBhdGggZmlsbD0iI2U2ZTZlNiIgZD0iTTEwNTIuODY3IDc3My4zMjFjLS4xMTUuMTY1LS4yMzYuMzMtLjM1OS40OTJoLTEwLjM3bC4yNzUtLjQ5MmMxLjcxMy0zLjA5MiA2Ljc4NC0xMi4zMzcgMTEuNDkyLTIxLjkyMSA1LjA1OC0xMC4zIDkuNy0yMC45OSA5LjMwOC0yNC44NTkuMTIuODczIDMuNjIxIDI3LjQ3NC0xMC4zNDYgNDYuNzh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48cGF0aCBmaWxsPSIjZTZlNmU2IiBkPSJNNzYzLjExMiA1MzYuNzQ3aC02MjkuOWE3LjU5IDcuNTkgMCAwMS03LjU4My03LjU4MlYxMjguNDE5YTcuNTkgNy41OSAwIDAxNy41ODItNy41ODJoNjI5LjkwMWE3LjU5IDcuNTkgMCAwMTcuNTgyIDcuNTgydjQwMC43NDZhNy41OSA3LjU5IDAgMDEtNy41ODIgNy41ODJ6bS02MjkuOS00MTIuOTFhNC41ODcgNC41ODcgMCAwMC00LjU4MyA0LjU4MnY0MDAuNzQ2YTQuNTg3IDQuNTg3IDAgMDA0LjU4MiA0LjU4Mmg2MjkuOTAxYTQuNTg3IDQuNTg3IDAgMDA0LjU4Mi00LjU4MlYxMjguNDE5YTQuNTg3IDQuNTg3IDAgMDAtNC41ODItNC41ODJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48cGF0aCBmaWxsPSIjM2YzZDU2IiBkPSJNNTk5Ljk1NSAxNzkuOTE4SDI2Ni4yMTNhNi4xODkgNi4xODkgMCAwMC02LjE4MyA2LjE4MnYyODUuMzgzYTYuMTg5IDYuMTg5IDAgMDA2LjE4MyA2LjE4M2gzMzMuNzQyYTYuMTg5IDYuMTg5IDAgMDA2LjE4Mi02LjE4M1YxODYuMWE2LjE4OSA2LjE4OSAwIDAwLTYuMTgyLTYuMTgyem0zLjcwNSAyOTEuNTY1YTMuNzE4IDMuNzE4IDAgMDEtMy43MDUgMy43MTdIMjY2LjIxM2EzLjcxIDMuNzEgMCAwMS0zLjcwNS0zLjcxN1YxODYuMWEzLjcxIDMuNzEgMCAwMTMuNzA1LTMuNzE2aDMzMy43NDJhMy43MTggMy43MTggMCAwMTMuNzA1IDMuNzE2eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS42MjkgLTEyMC44MzcpIi8+PHBhdGggZmlsbD0iIzZjNjNmZiIgZD0iTTM0My4yNDkgNDI2LjkyMmMwIC40NC0uMDEyLjg4LS4wMzUgMS4zMDhhMjUuMTc1IDI1LjE3NSAwIDAxLTUwLjI4IDAgMjQuMzE5IDI0LjMxOSAwIDAxLS4wMzUtMS4zMDggMjUuMTc1IDI1LjE3NSAwIDExNTAuMzUgMHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuNjI5IC0xMjAuODM3KSIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik01NzQuMDIxIDQxMC4xMzVIMzc2LjIxYTQuMTk3IDQuMTk3IDAgMDAwIDguMzkzSDU3NC4wMmE0LjE5NyA0LjE5NyAwIDAwMC04LjM5M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuNjI5IC0xMjAuODM3KSIvPjxwYXRoIGZpbGw9IiNlNmU2ZTYiIGQ9Ik00NjEuMzI3IDQzNS4zMTVIMzc2LjIxYTQuMTkxIDQuMTkxIDAgMDAwIDguMzgyaDg1LjExN2E0LjE5MSA0LjE5MSAwIDEwMC04LjM4MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuNjI5IC0xMjAuODM3KSIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik02NzkuMjQ0IDM3OC45OTZoLTMzMy43NGE3LjA1NyA3LjA1NyAwIDAxLTcuMDQ4LTcuMDQ5VjIyNS40ODVhNy4wNTcgNy4wNTcgMCAwMTcuMDQ5LTcuMDVoMzMzLjc0YTcuMDU3IDcuMDU3IDAgMDE3LjA0OCA3LjA1djE0Ni40NjJhNy4wNTcgNy4wNTcgMCAwMS03LjA0OSA3LjA1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS42MjkgLTEyMC44MzcpIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQxMy40NyAyNzAuMzU1YTQuMTk2IDQuMTk2IDAgMDAwIDguMzkyaDE5Ny44MDhhNC4xOTYgNC4xOTYgMCAwMDAtOC4zOTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDEzLjQ3IDI5NC42NjhhNC4xOTYgNC4xOTYgMCAwMDAgOC4zOTFoMTk3LjgwOGE0LjE5NiA0LjE5NiAwIDAwMC04LjM5MXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuNjI5IC0xMjAuODM3KSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00MTMuNDcgMzE4LjY4NWE0LjE5NiA0LjE5NiAwIDAwMCA4LjM5Mmg4NS4xMThhNC4xOTYgNC4xOTYgMCAwMDAtOC4zOTJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48Y2lyY2xlIGN4PSIyNi45MTQiIGN5PSIyMS4zMzYiIHI9IjUuMjEzIiBmaWxsPSIjNmM2M2ZmIi8+PGNpcmNsZSBjeD0iNDUuMTU5IiBjeT0iMjEuMzM2IiByPSI1LjIxMyIgZmlsbD0iIzZjNjNmZiIvPjxjaXJjbGUgY3g9IjYzLjQwNSIgY3k9IjIxLjMzNiIgcj0iNS4yMTMiIGZpbGw9IiM2YzYzZmYiLz48cGF0aCBmaWxsPSIjZmZiOGI4IiBkPSJNODk2Ljg3NiA1NTguNTJsLTQuMjczIDIzLjY5MWExMi4yMzggMTIuMjM4IDAgMDAxMy43MjYgMTQuMjk1IDEyLjIzOCAxMi4yMzggMCAwMDEwLjIzOC0xNC44OTZsLTUuNDIxLTIzLjI5NyAxOS4zODYtNjIuNzY2LTQuNDY3LTY3LjE3Ny0yNy43NzIgOS42MDMgMTIuNTU0IDUxLjM2M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuNjI5IC0xMjAuODM3KSIvPjxjaXJjbGUgY3g9Ijc1OS44NzgiIGN5PSIyMjUuMTYxIiByPSIyMy4yMjEiIGZpbGw9IiNmZmI4YjgiLz48cGF0aCBmaWxsPSIjZmZiOGI4IiBkPSJNODc1Ljc0NCA0MTIuMzkzbDQ1LjM4NS0uNzFjLTkuNzM3LTIzLjU2NC0xNy42MjktNDUuODEzLTE1LjYtNjAuOTg2bC0zMS45MTMgNC45NjRjMy43NzggMjEuNTUyIDUuNjA4IDM3LjA3NiAyLjEyOCA1Ni43MzJ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48cGF0aCBmaWxsPSIjNmM2M2ZmIiBkPSJNODM5LjU3NyA0NjkuODM0bDYwLjk4NyAxMS4zNDdjMjAuNTYtMzcuNjY4IDMxLjkwMy03MS42ODEgMTIuNzY1LTkzLjYwOGwtMzYuMTY3LTIuMTI4Yy0yMy4xMSAyNC43MTItNDIuNjU0IDQ4LjY5NC0yOS4zNzQgNjUuOTU0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS42MjkgLTEyMC44MzcpIi8+PHBhdGggZmlsbD0iIzZjNjNmZiIgZD0iTTg5My44ODYgNDQwLjI1N2MxMy45NTcgNS4zNCAyNi45MS42OTkgMzguOC0xNC41MmwtMTcuNjIyLTMzLjk5OS0yMi40NTQgNC40NXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuNjI5IC0xMjAuODM3KSIvPjxwYXRoIGZpbGw9IiMyZjJlNDEiIGQ9Ik04MzMuOTA0IDc1Mi4wNzdsMjQuMTEtMS4yNCAxNS42MDItMTYzLjI4MyA3OS40MjUgMTYyLjM5NSAyNC44Mi0uNzA5LTQ3LjUxMy0xNDIuNTRjLTEuODc1LTQ3LjU1Ni0zLjgzNS05NC45ODgtMjQuMTEtMTE1LjU5MWwtNy4wOTItMTQuODkyLTU2LjczMi0xMi4wNTYtNy44MDEgMTQuODkyYy0xOC4wODYgNDIuMjMyLTcuNDY3IDE2Mi45MDItLjcxIDI3My4wMjR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48cGF0aCBmaWxsPSIjMmYyZTQxIiBkPSJNODIwLjIyMyA3NzYuNDFsMjguMTQ0IDIuN2ExMS40MDEgMTEuNDAxIDAgMDAxMi40MjUtMTIuNTU1bC0yLjA2OC0xOS40NDJjLTcuNzk4IDIuMDMtMTYuMTIyIDEuNTU1LTI0LjgyLS43MWwtMTAuNjM4IDkuMjItNS4wNDEgMS41NzVhOS44NTMgOS44NTMgMCAwMC02Ljg3NyA4LjU1MSA5Ljg1MyA5Ljg1MyAwIDAwOC44NzUgMTAuNjYyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS42MjkgLTEyMC44MzcpIi8+PHBhdGggZmlsbD0iIzJmMmU0MSIgZD0iTTkzOS4zNjEgNzc2LjQxbDI4LjE0MyAyLjdhMTEuNDAxIDExLjQwMSAwIDAwMTIuNDI2LTEyLjU1NWwtMi4wNjgtMTkuNDQyYy03Ljc5OSAyLjAzLTE2LjEyMiAxLjU1NS0yNC44Mi0uNzFsLTEwLjYzOCA5LjIyLTUuMDQxIDEuNTc1YTkuODUzIDkuODUzIDAgMDAtNi44NzggOC41NTEgOS44NTMgOS44NTMgMCAwMDguODc2IDEwLjY2MnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuNjI5IC0xMjAuODM3KSIvPjxwYXRoIGZpbGw9IiM2YzYzZmYiIGQ9Ik04NTguMDE1IDQyNS4xNThjOS45MzQgMTEuMTY0IDIzLjU3IDEzLjAwNCA0MS4xMyA0Ljk2NHYtMzguMjk0bC0yMS45ODMtNi4zODN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48cGF0aCBmaWxsPSIjZmZiOGI4IiBkPSJNODA2LjI0NyA1MzEuNTNsLTE0LjY5NiAxOS4wNjhhMTIuMjM4IDEyLjIzOCAwIDAwNS42MDcgMTkuMDA3IDEyLjIzOCAxMi4yMzggMCAwMDE1Ljk0NS04LjUxM2w1LjkwOS0yMy4xOCA0Ni4wOTQtNDYuODAzIDI2Ljk0OC02MS42OTYtMjkuMDc1LTQuMjU1LTE5Ljg1NiA1My44OTV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjYyOSAtMTIwLjgzNykiLz48cGF0aCBmaWxsPSIjMmYyZTQxIiBkPSJNODc2LjYyOCAzMTEuNzM1YzEwLjY2NS01LjM2MyAyMy40MTQtNi45NiAzNC43NS0zLjIyczIwLjkzMSAxMy4xMTQgMjMuODMgMjQuNjk0YzIuMTkgOC43NTQuNjA4IDE3LjkzNy0uMTY0IDI2LjkyOHMtLjUyNyAxOC43MDcgNC42NTUgMjYuMDk1YzMuMjQ2IDQuNjMgOC4wOTggNy44NCAxMi44NzggMTAuODYzczkuNzA2IDYuMDU4IDEzLjIzNiAxMC40NzUgNS40MzYgMTAuNTk1IDMuMzA2IDE1LjgzM2MtMi43MiA2LjY4OC0xMC41NTUgOS40MS0xNy41MDMgMTEuMzcyLTkuOTA0IDIuNzk3LTE5Ljk0IDUuNjE1LTMwLjIyOSA1LjgyMXMtMjEuMDMxLTIuNDg4LTI4LjU5MS05LjQ3Yy0xMC4yODQtOS40OTgtMTIuNzUzLTI1LjAzMi0xMC44MDQtMzguODk0czcuNTktMjYuOTA0IDExLjE0Ni00MC40NDRjMS4zNzQtNS4yMzIgMi4xNzEtMTEuNTQzLTEuNjM0LTE1LjM4OC0zLjg2NC0zLjkwNS0xMC40MTktMy4xNC0xNS4yMy01Ljc5M2ExMS42NjQgMTEuNjY0IDAgMDEzLjI4LTIxLjYzNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNS42MjkgLTEyMC44MzcpIi8+PC9zdmc+"}}]);