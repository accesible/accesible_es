"use strict";(self.webpackChunkaccesible_es=self.webpackChunkaccesible_es||[]).push([[938],{3905:(i,M,I)=>{I.d(M,{Zo:()=>T,kt:()=>g});var e=I(7294);function t(i,M,I){return M in i?Object.defineProperty(i,M,{value:I,enumerable:!0,configurable:!0,writable:!0}):i[M]=I,i}function N(i,M){var I=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);M&&(e=e.filter((function(M){return Object.getOwnPropertyDescriptor(i,M).enumerable}))),I.push.apply(I,e)}return I}function u(i){for(var M=1;M<arguments.length;M++){var I=null!=arguments[M]?arguments[M]:{};M%2?N(Object(I),!0).forEach((function(M){t(i,M,I[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(I)):N(Object(I)).forEach((function(M){Object.defineProperty(i,M,Object.getOwnPropertyDescriptor(I,M))}))}return i}function j(i,M){if(null==i)return{};var I,e,t=function(i,M){if(null==i)return{};var I,e,t={},N=Object.keys(i);for(e=0;e<N.length;e++)I=N[e],M.indexOf(I)>=0||(t[I]=i[I]);return t}(i,M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(i);for(e=0;e<N.length;e++)I=N[e],M.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(i,I)&&(t[I]=i[I])}return t}var a=e.createContext({}),c=function(i){var M=e.useContext(a),I=M;return i&&(I="function"==typeof i?i(M):u(u({},M),i)),I},T=function(i){var M=c(i.components);return e.createElement(a.Provider,{value:M},i.children)},o={inlineCode:"code",wrapper:function(i){var M=i.children;return e.createElement(e.Fragment,{},M)}},n=e.forwardRef((function(i,M){var I=i.components,t=i.mdxType,N=i.originalType,a=i.parentName,T=j(i,["components","mdxType","originalType","parentName"]),n=c(I),g=t,r=n["".concat(a,".").concat(g)]||n[g]||o[g]||N;return I?e.createElement(r,u(u({ref:M},T),{},{components:I})):e.createElement(r,u({ref:M},T))}));function g(i,M){var I=arguments,t=M&&M.mdxType;if("string"==typeof i||t){var N=I.length,u=new Array(N);u[0]=n;var j={};for(var a in M)hasOwnProperty.call(M,a)&&(j[a]=M[a]);j.originalType=i,j.mdxType="string"==typeof i?i:t,u[1]=j;for(var c=2;c<N;c++)u[c]=I[c];return e.createElement.apply(null,u)}return e.createElement.apply(null,I)}n.displayName="MDXCreateElement"},4331:(i,M,I)=>{I.r(M),I.d(M,{assets:()=>a,contentTitle:()=>u,default:()=>o,frontMatter:()=>N,metadata:()=>j,toc:()=>c});var e=I(7462),t=(I(7294),I(3905));const N={id:"multimedia",title:"Multimedia",image:"/img/multimedia.svg",description:"Documentaci\xf3n para a\xf1adir contenido multimedia accesible en tu sitio web",keywords:["video y audio accesible","reproductor accesible","wai-aria multimedia"]},u=void 0,j={unversionedId:"multimedia",id:"multimedia",title:"Multimedia",description:"Documentaci\xf3n para a\xf1adir contenido multimedia accesible en tu sitio web",source:"@site/docs/multimedia.md",sourceDirName:".",slug:"/multimedia",permalink:"/multimedia",draft:!1,editUrl:"https://github.com/accesible/accesible_es/tree/main/docs/multimedia.md",tags:[],version:"current",frontMatter:{id:"multimedia",title:"Multimedia",image:"/img/multimedia.svg",description:"Documentaci\xf3n para a\xf1adir contenido multimedia accesible en tu sitio web",keywords:["video y audio accesible","reproductor accesible","wai-aria multimedia"]},sidebar:"tutorialSidebar",previous:{title:"Modales",permalink:"/modal"},next:{title:"SVG",permalink:"/svg"}},a={},c=[{value:"Video / Audio",id:"video--audio",level:2},{value:"V\xeddeo",id:"v\xeddeo",level:3},{value:"Audio",id:"audio",level:3}],T={toc:c};function o(i){let{components:M,...N}=i;return(0,t.kt)("wrapper",(0,e.Z)({},T,N,{components:M,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"img",src:I(5775).Z,width:"1015",height:"597"})," "),(0,t.kt)("h2",{id:"video--audio"},"Video / Audio"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"No reproduzcas autom\xe1ticamente")," contenido multimedia (Puedes a\xf1adir una opci\xf3n de reproducci\xf3n autom\xe1tica, pero debe ser activada por el usuario)"),(0,t.kt)("li",{parentName:"ul"},"Todos los elementos multimedia, deben contar con un t\xedtulo y/o descripci\xf3n."),(0,t.kt)("li",{parentName:"ul"},"En el audio, debe haber suficiente contraste entre la pista principal y el sonido de fondo."),(0,t.kt)("li",{parentName:"ul"},"A\xf1ade una ",(0,t.kt)("strong",{parentName:"li"},"transcripci\xf3n y subt\xedtulos"),", con esto adem\xe1s mejoramos el SEO."),(0,t.kt)("li",{parentName:"ul"},"Los subt\xedtulos ",(0,t.kt)("strong",{parentName:"li"},"deben tener un tama\xf1o, duraci\xf3n y contraste adecuado"),", y durar lo suficiente para su lectura."),(0,t.kt)("li",{parentName:"ul"},"Todo los ",(0,t.kt)("strong",{parentName:"li"},"controles deben ser accesibles mediante teclado.")),(0,t.kt)("li",{parentName:"ul"},"Evita los parpadeos, no m\xe1s de tres flashes en un per\xedodo de 1 segundo."),(0,t.kt)("li",{parentName:"ul"},"A\xf1ade una audiodescripci\xf3n en varios idiomas usando SMIL."),(0,t.kt)("li",{parentName:"ul"},"Ofrece una audiodescripci\xf3n para medios sincronizados emitidos en directo.")),(0,t.kt)("h3",{id:"v\xeddeo"},"V\xeddeo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<video class="video" poster="portada-video.jpg" controls title="Mi portada">\n    <source  src="your-video.m4v" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' />\n    <source  src="your-video.ogg" type=\'application/ogg\' />\n    <source  src="your-video.webm" type=\'video/webm\' />\n    <track src="your-video-transcript.vtt" label="English Captions" kind="subtitles" srclang="en-us" default />\n</video>\n')),(0,t.kt)("h3",{id:"audio"},"Audio"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"No reproduzcas audios autom\xe1ticamente, si necesitas alg\xfan indicativo sonoro autom\xe1tico, este no debe sonar m\xe1s de tres segundos. ",(0,t.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html"},"Criterio 1.4.2 - Control de audio")),(0,t.kt)("li",{parentName:"ul"},"Ofrece un control al usuario en el inicio de la p\xe1gina web para que pueda desactivar los sonidos que suenan autom\xe1ticamente."),(0,t.kt)("li",{parentName:"ul"},"Reproduce los sonidos s\xf3lo a petici\xf3n del usuario."),(0,t.kt)("li",{parentName:"ul"},"Ofrece una opci\xf3n que permita apagar el sonido de todo el sitio web.")))}o.isMDXComponent=!0},5775:(i,M,I)=>{I.d(M,{Z:()=>e});const e="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJhNjNjM2M1MC1kMWU2LTQzZGEtYTk2Ni05MjE2Yzg1NTM5YjEiIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMTQuNTMzIDU5Ny40MzYiPjxwYXRoIGZpbGw9IiM2MDVkODIiIGQ9Ik01MDMuNzM0IDc0Ny4wMzJoLTYuMDE2YTQuOTg0IDQuOTg0IDAgMDEtNC45ODQtNC45ODR2LTE3LjAxNmgxMWw0LjQyMSAxNi4yMTFhNC41ODMgNC41ODMgMCAwMS00LjQyMSA1Ljc4OXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHJlY3Qgd2lkdGg9IjcxMCIgaGVpZ2h0PSIyNzAiIHg9Ijc5LjUiIHk9IjE4Ny41IiBmaWxsPSIjZjJmMmYyIiByeD0iMTMuMjI0Ii8+PHJlY3Qgd2lkdGg9Ijk2MiIgaGVpZ2h0PSI1MjMiIHg9IjIuNSIgeT0iLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmM2Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiByeD0iMTMuNjM4Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2YzZDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0wIDM3LjAzOWg5NjIiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTAgMTAwLjVoOTYyIi8+PGNpcmNsZSBjeD0iMjQuNSIgY3k9IjIyLjUiIHI9IjEwIiBmaWxsPSIjZjg2Yjc1Ii8+PGNpcmNsZSBjeD0iNTUuNSIgY3k9IjIyLjUiIHI9IjEwIiBmaWxsPSIjZmFkMzc1Ii8+PGNpcmNsZSBjeD0iODYuNSIgY3k9IjIyLjUiIHI9IjEwIiBmaWxsPSIjOGJjYzU1Ii8+PGNpcmNsZSBjeD0iMjcuNSIgY3k9IjE4LjUiIHI9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjU4LjUiIGN5PSIxOC41IiByPSIxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2YzZDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48Y2lyY2xlIGN4PSI4OS41IiBjeT0iMTguNSIgcj0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmM2Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGNpcmNsZSBjeD0iMjI1IiBjeT0iNzQiIHI9IjIwIiBmaWxsPSIjZjJmMmYyIi8+PGNpcmNsZSBjeD0iMjMwIiBjeT0iNjkiIHI9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxyZWN0IHdpZHRoPSI5OSIgaGVpZ2h0PSIyNyIgeD0iNTA1IiB5PSI2My41IiBmaWxsPSJncmVlbiIgcng9IjUuNDIzIi8+PHJlY3Qgd2lkdGg9Ijk5IiBoZWlnaHQ9IjI3IiB4PSI2NDYiIHk9IjYzLjUiIGZpbGw9ImdyZWVuIiByeD0iNS40MjMiLz48cmVjdCB3aWR0aD0iOTkiIGhlaWdodD0iMjciIHg9IjUxMiIgeT0iNTUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2YzZDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHJ4PSI0LjIyMiIvPjxyZWN0IHdpZHRoPSI5OSIgaGVpZ2h0PSIyNyIgeD0iNjUzIiB5PSI1NS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcng9IjQuMjIyIi8+PHJlY3Qgd2lkdGg9IjcxMCIgaGVpZ2h0PSIyNzAiIHg9IjExNS41IiB5PSIxNjUuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2YzZDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHJ4PSIxNi4wMDQiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTU0NC42MzYgNTE2LjEyMmE2OC4xOTggNjguMTk4IDAgMTAtNzguNTIyLTExMC4xODVtMzIuNjIgMzEuMDE2di0xMS42MTFsNDAuOTIgMzAuNjktOS40MiA2LjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZmlsbD0iZ3JlZW4iIGQ9Ik01MDIuMzc0IDM5NC44MzJhNjguMiA2OC4yIDAgMTA2OC4yIDY4LjIgNjguMjMyIDY4LjIzMiAwIDAwLTY4LjItNjguMnptLTEzLjY0IDk4Ljg5di02MS4zOGw0MC45MiAzMC42OS00MC45MiAzMC42OXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZmlsbD0iIzQ2NDU1YiIgZD0iTTQ3NS44MzMgNTgxLjczNnMtMTIuMjUgNDIuNjA2LTEyLjc4MiA2MS4yNDYtMi42NjMgNDguNDY0LTEuMDY1IDU1LjkyIDYuMzkgMjIuMzY5IDYuMzkgMjIuMzY5IDEwLjEyLTEyLjI1IDEzLjg0OC01LjMyNmMwIDAtLjUzMy0xNC4zOC0zLjE5Ni0xOC42NCAwIDAgMS4wNjYtMjIuMzY4IDEuMDY2LTMwLjM1N3MxMy4zMTQtNDQuNzM2IDE0LjM4LTQ1LjI2OSA0LjI2IDEwLjExOSAxLjU5NyAzMy41NTItNC43OTMgNjQuNDUzLTQuNzkzIDY4LjcxNCA2LjM5IDEyLjc4MiAxMC42NTEgMTAuMTE5IDYuOTI0LTI1LjU3NSA2LjkyNC0yNS41NzUgMy43MjgtNDcuOTMyIDUuODU4LTUzLjI1OCAxMy4zMTQtNjYuNTcyIDQuNzkzLTcxLjM2NS00My42NzEtMi4xMy00My42NzEtMi4xM3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZmlsbD0iIzYwNWQ4MiIgZD0iTTQ4NC44ODcgNzIwLjIwNmMtLjUzMyAyLjEzLTIuNjYzIDEyLjI0OS0yLjY2MyAxNS40NDRzMi4xMyA5LjA1NC02LjkyNCAxMS4xODRjLTguODIgMi4wNzctNy41My0zLjQzLTguOTM2LTYuNjY4LS4wMzctLjA4NS0uMDc1LS4xNy0uMTE3LS4yNTUtMS41OTgtMy4xOTYgMi4xMy0xOS43MDUgMi42NjItMTkuNzA1LjMxMyAwIDIuODMyLTQuMjI5IDQuODU3LTcuNzE3YTUuNjYzIDUuNjYzIDAgMDE4Ljc5LTEuMzMgOC42OTMgOC42OTMgMCAwMTIuNjQ1IDYuMjc3IDEwLjcgMTAuNyAwIDAxLS4zMTQgMi43N3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZD0iTTQ4NC44ODcgNzIwLjIwNmMtLjUzMyAyLjEzLTIuNjYzIDEyLjI0OS0yLjY2MyAxNS40NDRzMi4xMyA5LjA1NC02LjkyNCAxMS4xODRjLTguODIgMi4wNzctNy41My0zLjQzLTguOTM2LTYuNjY4IDEuNTI4LTMuOTczIDUuMjQtMTIuNTEgNy44NzEtMTkuOTYgMi4zMjItNi41ODMgOC4wMzItNC40MzcgMTAuOTY2LTIuNzdhMTAuNyAxMC43IDAgMDEtLjMxNCAyLjc3eiIgb3BhY2l0eT0iLjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PGNpcmNsZSBjeD0iNDA3LjU5OCIgY3k9IjMzNi45NzEiIHI9IjExLjE4NCIgZmlsbD0iI2ZiYmViZSIvPjxwYXRoIGZpbGw9IiNmYmJlYmUiIGQ9Ik00OTEuMjc4IDQ5MC4xMzNsLTEuNTk4IDE3LjU3NSAxOS4xNzMgMy4xOTVzLTIuMTMtMTUuNDQ0LS41MzMtMTguNjQtMTcuMDQyLTIuMTMtMTcuMDQyLTIuMTN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIuNzM0IC0xNTEuMDMyKSIvPjxwYXRoIGZpbGw9IiM2MDVkODIiIGQ9Ik01MDYuMTkgNTAzLjk4cy0xNS45NzctMS41OTgtMTcuMDQzIDBhOS4xNTEgOS4xNTEgMCAwMC0xLjA2NSA0LjI2cy02LjM5IDIuNjYzLTcuNDU2IDEuNTk4LTIuMTMtNC4yNi01LjMyNi0zLjE5NS05LjU4NiAyMC4yMzgtOS41ODYgMjAuMjM4IDEuNTk4LTUuODU5IDQuMjYgMTYuNTEgMi4xMyAzNi4yMTUgMi42NjQgMzcuODEyLTIuNjYzIDExLjE4NCAxNi41MSAxMS4xODQgMzMuMDE5LTEuMDY1IDMzLjAxOS00Ljc5My0zLjE5NS0xOS43MDUgMC0zMS40MjIgNy45ODktMjcuNjk0IDcuOTg5LTI3LjY5NGwtNi4zOTEtMjAuNzdzLTYuMzkxLTEuNTk4LTcuOTg5IDEuMDY1LTUuODU4IDIuMTMtNS44NTggMi4xMy0uNTMzLTYuMzktMy43MjgtNi45MjN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIuNzM0IC0xNTEuMDMyKSIvPjxwYXRoIGZpbGw9IiM2MDVkODIiIGQ9Ik00NzUuODMzIDUwNy43MDhsLTEzLjMxNC01Ljg1OHMtMjUuMDMxLTE5LjE3My0yMy45NjYtMzYuMjE2YzAgMC04LjUyMS03Ljk4OC05LjA1NC41MzNzMi4xMyAyNy42OTQgOC41MjEgMzQuMDg1IDI4LjIyNyAyNi42MjkgMzEuNDIyIDI3LjE2MSA2LjM5MS0xOS43MDUgNi4zOTEtMTkuNzA1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyLjczNCAtMTUxLjAzMikiLz48cGF0aCBmaWxsPSIjZmJiZWJlIiBkPSJNNDMwLjU2NCA0NjcuMjMycy0xMC4xMTktMjcuNjk0LTEuMDY1LTI2LjYyOSA2LjkyMyAxMi43ODIgNi45MjMgMTIuNzgydjEzLjg0N3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZmlsbD0iIzYwNWQ4MiIgZD0iTTUyMS42MzQgNTA4Ljc3M2wxMy4zMTUtNS44NThzMjUuMDMtMTkuMTczIDIzLjk2Ni0zNi4yMTVjMCAwIDguNTIxLTcuOTg5IDkuMDU0LjUzMnMtMi4xMyAyNy42OTQtOC41MjIgMzQuMDg1LTI4LjIyNiAyNi42MjktMzEuNDIyIDI3LjE2MS02LjM5LTE5LjcwNS02LjM5LTE5LjcwNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZmlsbD0iI2ZiYmViZSIgZD0iTTU2Ni45MDMgNDY4LjI5N3MxMC4xMi0yNy42OTQgMS4wNjYtMjYuNjI4LTYuOTI0IDEyLjc4MS02LjkyNCAxMi43ODF2MTMuODQ3eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyLjczNCAtMTUxLjAzMikiLz48cGF0aCBmaWxsPSIjNDY0NTViIiBkPSJNNTA4Ljg1MyA0NzQuNjg4bDEuNTk3LTEuMDY1cy0xMC4xMTktNS44NTgtMTQuMzgtMi42NjMtNS4zMjUgNS44NTktNi4zOSA2LjkyNC0zLjcyOCA2LjkyMy0yLjEzIDkuMDUzIDEuMDY1IDIuNTY3IDIuMTMgNC40OC0xLjg2IDkuNjAzIDYuMjYgMTEuODgyIDE0LjUxLTcuMzA4IDE1LjU3Ni05LjQzOCA0Ljc5My0xNi41MS0yLjY2My0xOS4xNzN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIuNzM0IC0xNTEuMDMyKSIvPjxwYXRoIGZpbGw9IiM0NjQ1NWIiIGQ9Ik05MTcuODk3IDYyNS4yMjNjMCA1OC45NiAzNi45ODggMTA2LjY3IDgyLjcgMTA2LjY3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIuNzM0IC0xNTEuMDMyKSIvPjxwYXRoIGZpbGw9ImdyZWVuIiBkPSJNMTAwMC41OTYgNzMxLjg5M2MwLTU5LjYyMyA0MS4yNzctMTA3Ljg2OSA5Mi4yODgtMTA3Ljg2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyLjczNCAtMTUxLjAzMikiLz48cGF0aCBmaWxsPSJncmVlbiIgZD0iTTk0Ny44NiA2MzAuNTY4YzAgNTYuMDA2IDIzLjU4NyAxMDEuMzI1IDUyLjczNiAxMDEuMzI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIuNzM0IC0xNTEuMDMyKSIvPjxwYXRoIGZpbGw9IiM0NjQ1NWIiIGQ9Ik0xMDAwLjU5NiA3MzEuODkzYzAtNzYuMTg0IDQ3LjcxLTEzNy44MzIgMTA2LjY3LTEzNy44MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZmlsbD0iI2E4YThhOCIgZD0iTTk4My4xOTggNzMyLjY0NXMxMS43MjgtLjM2MSAxNS4yNjMtMi44NzggMTguMDQtNS41MjIgMTguOTE4LTEuNDg2IDE3LjYyNSAyMC4wNzcgNC4zODQgMjAuMTgzLTMwLjc2Ni0yLjA2Mi0zNC4yOTQtNC4yMTEtNC4yNy0xMS42MDgtNC4yNy0xMS42MDh6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIuNzM0IC0xNTEuMDMyKSIvPjxwYXRoIGQ9Ik0xMDIyIDc0Ny4wNmMtMTMuMjQyLjEwNi0zMC43NjctMi4wNjMtMzQuMjk1LTQuMjEyLTIuNjg2LTEuNjM3LTMuNzU3LTcuNTA5LTQuMTE1LTEwLjIxOGwtLjM5Mi4wMTVzLjc0MyA5LjQ1OSA0LjI3IDExLjYwOCAyMS4wNTQgNC4zMTggMzQuMjk1IDQuMjExYzMuODIyLS4wMyA1LjE0Mi0xLjM5IDUuMDctMy40MDQtLjUzMSAxLjIxNi0xLjk4OSAxLjk3Ni00LjgzNCAyeiIgb3BhY2l0eT0iLjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Mi43MzQgLTE1MS4wMzIpIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2YzZDU2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0yNzUgNTk2aDIzNyIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNmM2Q1NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNODc2Ljg4OCA1OTYuNDc5aDc0Ii8+PC9zdmc+"}}]);