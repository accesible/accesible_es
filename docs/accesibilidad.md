---
id: accesibilidad
title: Accesibilidad
slug: /accesibilidad
image: /img/logo.svg
description: La guía fácil de accesibilidad web
keywords: [accesibilidad web, pautas accesibilidad, wai-aria]
---

## ¿Qué es la accesibilidad?

La accesibilidad es el grado o nivel en el que las personas pueden utilizar un objeto, acceder a un lugar o servicio, con independencia de sus barreras geográficas, idiomáticas o de discapacidad.

> "Cerca del dieciséis por ciento de la población mundial (mil trescientos millones de personas) poseen alguna forma de discapacidad, según la Organización Mundial de la Salud (OMS)" [Fuente OMS ↗️](https://www.who.int/es/news-room/fact-sheets/detail/disability-and-health)

## Tipos de discapacidad

- <span aria-hidden="true">👁️</span> Visual

  - ceguera, baja visión, daltonismo

- <span aria-hidden="true">👂</span> Auditiva

  - sordera, sordera-moderada

- <span aria-hidden="true">🤚</span> Motora

  - Distrofia muscular
  - Distonía muscular
  - Parkinson

- <span aria-hidden="true">🧠</span> Cognitiva

  - Dislexia
  - Falta de memoria
  - Déficit de atención
  - Trastornos emocionales

- <span aria-hidden="true">👄</span> Discapacidad del habla.

## Accesibilidad web

Usaremos la definición de accesibilidad pero aplicada a un recurso en internet.
Su objetivo es que estos recursos sean utilizables para el máximo número de personas, independientemente de sus capacidades.

### ¿Por qué es importante la accesibilidad?

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

- Aumenta el zoom, debería poder **ampliarse un 400% sin aparecer scroll horizontal**, por otro lado, el texto debería poder adaptarse a un tamaño del 200% **sin perder contenido ni funcionalidad**. [Criterio 1.4.10 - Reflujo](https://www.w3.org/WAI/WCAG21/Understanding/reflow#viewing-distance-and-display-resolution)s
- Además deberías:
  - poder moverte usando solo el teclado por todas las áreas, formularios, buscadores, etc. (Teclas ←↑↓→ TAB, SHIFT+TAB, ESC y ENTER)
  - poder navegar usando un lector de pantalla.
  - poder usar la web con los estilos css desactivados.

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

> La última especificación recomendada por W3C es la <abbr title="Web Content Accessibility Guidelines" lang="en">WCAG</abbr> 2.2 (5 de Octubre de 2023.)

## Niveles accesibilidad

Existen 3 niveles para **medir la accesibilidad de un sitio**.

- **Nivel A**: nivel más bajo, 30 criterios
- **Nivel AA**: nivel medio, 50 criterios (+20)
- **Nivel AAA**: nivel más alto, 78 criterios (+28)

Si tu sitio cumple con alguno de los niveles de accesibilidad, puedes añadir los logotipos en el siguiente enlace, [logotipos de conformidad WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/), recuerda que deben ir acompañados de la información de declaración de conformidad (nivel de accesibilidad, fecha de última revisión y contacto)



Diseño inclusivo -  El objetivo principal es crear un enfoque unificado del diseño que permita que varios métodos accedan a la misma funcionalidad.
Accesibilidad web - Las cualidades que hacen que una experiencia web esté disponible para el mayor número posible de usuarios. 
Usabilidad - Las cualidades que hacen que una experiencia web sea intuitiva y fácil de usar. 