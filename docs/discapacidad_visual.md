---
id: visual
title: Discapacidad visual
slug: /discapacidad-visual
image: /img/logo.svg
description: La guía fácil de accesibilidad web
keywords: [accesibilidad web, pautas accesibilidad, wai-aria]
---

## Adapta tu página para personas con discapacidad visual


Casi toda la información necesaria para nuestra vida cotidiana implica el órgano de la visión, los ojos.


- **Presenta todo el contenido en texto o mediante un texto equivalente** (por ejemplo, texto alternativo para imágenes u otros objetos que no sean texto).
- No transmitas la información únicamente mediante atributos visuales (por ejemplo, color, ubicación espacial, grosor del texto, resaltado del fondo, etc.). 
- Toda la funcionalidad debe estar disponible **usando únicamente el teclado** (Recuerda que hay diferencias sutiles en el comportamiento del teclado cuando el lector de pantalla está activado).
- El contenido debe utilizar marcado con **buena estructura y semántica** (encabezados, puntos de referencia, tablas, listas, etc.). Los usuarios de lectores de pantalla suelen acceder a listas de encabezados, puntos de referencia y otros elementos semánticos que les ayudan a comprender el contenido de la página. También pueden navegar por estos elementos (por ejemplo, saltar directamente al punto de referencia del contenido principal o a un encabezado específico).
- Todos los controles personalizados (por ejemplo, botones de expandir/contraer, control de volumen del reproductor multimedia, cuadros de diálogo, etc.) deben tener el nombre/etiqueta, la función (ya sea con HTML o con ARIA) y el valor correctos , y deben cambiar el valor cuando sea apropiado (por ejemplo, aria-expanded="false" cambia a aria-expanded="true" después de activar el botón). A diferencia de los elementos HTML nativos, **los controles personalizados no tienen partes semánticas de forma nativa.**
- Los usuarios deben recibir una **respuesta inmediata después de todas las acciones**, a través de su lector de pantalla. ¡El silencio después de activar una función siempre es malo!	Ejemplos de retroalimentación: región expandida/contraida, valor cambiado en un control (por ejemplo, en un control deslizante, envío de formulario exitoso/fallido, notificación de que se ha cargado una nueva "página" en aplicaciones de página única, etc.).
- Los videos requieren descripciones de audio (narración adicional del contenido visual) si la pista de audio original del video (diálogos, sonidos, narración) no explica todo lo que una persona ciega necesitaría saber para comprender el video. Las partes visuales transmiten información importante, será necesario describirlas en voz alta para que los usuarios ciegos puedan comprenderlas.






La accesibilidad es el grado o nivel en el que las personas pueden utilizar un objeto, acceder a un lugar o servicio, con independencia de sus barreras geográficas, idiomáticas o de discapacidad.

> "La Organización Mundial de la Salud (OMS) recoge en sus informes un total de **1000 millones de personas con discapacidad.** El acceso de estas personas a la tecnología debe tenerse en cuenta en la construcción de una sociedad igualitaria." wikipedia

## Tipos de discapacidad

- 👁️ Visual

  - ceguera, baja visión, daltonismo

- 👂 Auditiva

  - sordera, sordera-moderada

- 🤚 Motora

  - Distrofia muscular
  - Distonía muscular
  - Parkinson

- 🧠 Cognitiva

  - Dislexia
  - Falta de memoria
  - Déficit de atención
  - Trastornos emocionales

- 👄 Discapacidad del habla.

## Accesibilidad web

Usaremos la definición de accesibilidad pero aplicada a un recurso en internet.
Su objetivo es que estos recursos sean utilizables para el máximo número de personas, independientemente de sus capacidades.

### ¿Por qué es importante?

- Busca la **igualdad de oportunidades** para todos.
- Incrementa la cuota de mercado y audiencia de la web debido a que:
  - **Mejora el SEO**. Los motores de búsqueda identifica mejor los contenidos, y en consecuencia, tendremos mejor posicionamiento
  - Los contenidos son más fáciles de **adaptar a distintos dispositivos**
- **Mejora la usabilidad**
- Refuerza positivamente la imagen de sitio (actitud socialmente responsable y diferenciación con la competencia)
- En caso de instituciones del estado, **cumplimiento de la legislación** [(enlace a BOE sobre la ley 51/2003)](https://www.boe.es/eli/es/l/2003/12/02/51/con).

> Los rastreadores de los buscadores, como por ejemplo Google, acceden al contenido de una forma similar a como lo hace un usuario con un lector de pantalla.

### ¿Cómo saber si mi web es accesible?

Te proponemos unas pruebas básicas para que apliques en tu sitio:

- Aumenta el zoom del navegador un 400% (CTRL +). [Criterio 1.4.10 - Reflujo](https://www.w3.org/WAI/WCAG21/Understanding/reflow#viewing-distance-and-display-resolution)s
- Utiliza solo el teclado para moverte por las distintas las áreas, formularios, buscadores, etc. (Teclas ←↑↓→ TAB, SHIFT+TAB, ESC y ENTER)
- Navega usando un lector de pantalla.
- Navega con los estilos css desactivados.

Si has tenido alguna dificultad para leer o navegar por tu web aplicando alguno de esos puntos, deberías revisar la accesibilidad.

Para una revisión más avanzada, te recomendamos usar alguna de estas [herramientas online](./recursos#herramientas-evaluación-accesibilidad-web).

### ¿Es complicado hacer una web accesible?

La respuesta depende de varios factores:

- **Tipo de web**, no es igual hacer accesible una web con pocas secciones que una herramienta de gestión de usuarios, por poner un ejemplo.

- También influye si **hemos tenido en cuenta la accesibilidad durante la fase de desarrollo** de nuestro sitio, o vamos a aplicarlo con posterioridad.

- Otro factor es el nivel de **accesibilidad que queremos alcanzar** (Nivel A, AA, AAA).

### ¿Quién gestiona esto?

La <abbr title="Web Content Accessibility Guidelines" lang="en">WAI</abbr> o Iniciativa de Accesibilidad Web, fundada en 1997, es el máximo organismo en promover y facilitar el acceso de las personas con discapacidad a la web. Se trata de una actividad desarrollada por el <abbr title="World Wide Web Consortium" lang="en">W3C</abbr>, un consorcio internacional que genera recomendaciones y estándares webs.

Este organismo ha diseñado unas directrices para ser estándares técnicos estables y de referencia. Para mayor facilidad, estos estándares se han organizado bajo 4 principios: perceptibles, operables, comprensibles y robustos.

> La última especificación recomendada por W3C es la <abbr title="Web Content Accessibility Guidelines" lang="en">WCAG</abbr> 2.1 (5 de junio de 2018)

## Niveles accesibilidad

Existen 3 niveles para **medir la accesibilidad de un sitio**.

- **Nivel A**: nivel más bajo, 30 criterios
- **Nivel AA**: nivel medio, 50 criterios (+20)
- **Nivel AAA**: nivel más alto, 78 criterios (+28)

Si tu sitio cumple con alguno de los niveles de accesibilidad, puedes añadir los logotipos en el siguiente enlace, [logotipos de conformidad WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/), recuerda que deben ir acompañados de la información de declaración de conformidad (nivel de accesibilidad, fecha de última revisión y contacto)
