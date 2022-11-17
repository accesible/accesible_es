---
id: accesibilidad
title: Accesibilidad
image: /img/logo.svg
description: La guía fácil de accesibilidad web
keywords: [accesibilidad web, pautas accesibilidad, wai-aria]
---

## Definición

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

### ¿Mi web es accesible?.

Te proponemos unas pruebas básicas para que apliques en tu sitio:

- Aumenta el zoom del navegador un 400% (CTRL +). [Criterio 1.4.10 - Reflujo](https://www.w3.org/WAI/WCAG21/Understanding/reflow#viewing-distance-and-display-resolution)s
- Utiliza sólo el teclado para moverte por las distintas las áreas, formularios, buscadores, etc. (Teclas ←↑↓→ TAB, SHIFT+TAB, ESC y ENTER .)
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

La <abbr title="Web Content Accessibility Guidelines" lang="en">WAI</abbr> o Iniciativa de Accesibilidad Web, fundada en 1997, es el máximo organismo en promover y facilitar el acceso de las personas con discapacidad a la web. Se trata de una actividad desarrollada por el <abbr title="World Wide Web Consortium" lang="en">W3C</abbr>, un consorcio internacional que genera recomendaciones y estándares web.

Este organismo ha diseñado unas directrices para ser estándares técnicos estables y de referencia. Para mayor facilidad, estos estándares se han organizado bajo 4 principios: perceptibles, operables, comprensibles y robustos.

> La última especificación recomendada por W3C es la <abbr title="Web Content Accessibility Guidelines" lang="en">WCAG</abbr> 2.1 (5 de junio de 2018)

## Niveles accesibilidad

Existen 3 niveles para **medir la accesibilidad de un sitio**.

- **Nivel A**: nivel más bajo, 30 criterios
- **Nivel AA**: nivel medio, 50 criterios (+20)
- **Nivel AAA**: nivel más alto, 78 criterios (+28)

Si tu sitio cumple con alguno de los niveles de accesibilidad, puedes añadir los logotipos en el siguiente enlace, [logotipos conformidad WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/conformance-logos/), recuerda que deben ir acompañados de la informacion de declaración de conformidad (nivel de accesibilidad, fecha de última revisión y contacto)

## WCAG 2.1

### Organización

Las **WCAG 2.1** se organizan en principios, que a su vez están formados por pautas:

- Perceptible
  - Pauta 1.1 Proporciona alternativas textuales a contenidos no textuales
  - Pauta 1.2 Proporciona alternativas a medios tempodependientes, es decir, vídeo y audio
  - Pauta 1.3 El contenido debe ser adaptable a diferentes formas de presentación
  - Pauta 1.4 Distinguible: El contenido es fácil de ver y escuchar
  
- Operable
  - Pauta 2.1 Toda la funcionalidad es accesible por teclado
  - Pauta 2.2 Los usuarios tienen tiempo suficiente para leer y usar el contenido
  - Pauta 2.3 El contenido no causa convulsiones
  - Pauta 2.4 Navegable: Los usuarios pueden navegar, encontrar contenido y saber dónde están en todo momento
  - Pauta 2.5 Facilita formas de introducir información [Nueva 2.1]

- Comprensible
  - Pauta 3.1 El contenido es fácil de leer y de comprender
  - Pauta 3.2 El contenido aparece y se maneja de una forma predecible
  - Pauta 3.3 Ayuda en la introducción de datos para evitar y corregir errores
  
- Robusto
  - Pauta 4.1 El contenido es compatible con las herramientas de usuario actuales y futuras

### Novedades

- 1.3.4 Orientación de la pantalla (AA)
- 1.3.5 Identificación del propósito del campo (AA)
- 1.3.6 Identificación del propósito (AAA)
- 1.4.10 Reajuste de elementos (AA)
- 1.4.11 Contraste no textual (AA)
- 1.4.12 Espaciado del texto (AA)
- 1.4.13 Contenido en hover o focus (AA)
- 2.1.4 Atajos de teclado (A)
- 2.2.6 Límites de tiempo (AAA)
- 2.3.3 Animaciones desde interacciones (AAA)
- 2.5.1 Gestos del puntero (A)
- 2.5.2 Cancelación del puntero (A)
- 2.5.3 Etiqueta en el nombre (A)
- 2.5.4 Actuación por movimiento (A)
- 2.5.5 Tamaño del área de interacción (AAA)
- 2.5.6 Mecanismos de entrada concurrentes (AAA)
- 4.1.3 Mensajes de estado (AA)


### Criterios de conformidad

#### Nivel A

- 1.1.1 Contenido no textual: Proporcionar alternativas de texto para el contenido no textual.
- 1.2.1 Sólo audio y sólo video (Pre-grabado): Proporcionar una alternativa a los contenidos de sólo vídeo y sólo audio.
- 1.2.2 Subtítulos (pregrabados): Proporcionar subtítulos para los videos con audio.
- 1.2.3 Descripción de audio o medios alternativos (Pre-grabados): El video con audio tiene una segunda alternativa.
- 1.3.1 Información y relaciones: Estructura lógica.
- 1.3.2 Secuencia significativa: Presentar el contenido en un orden significativo.
- 1.3.3 Características sensoriales: Utilizar más de un sentido para las instrucciones.
- 1.4.1 Uso del color: No utilice presentaciones que se basen únicamente en el color.
- 1.4.2 Control de audio: No reproduce el audio automáticamente.
- 2.1.1 Teclado: Accesible sólo por teclado.
- 2.1.2 Sin trampas de teclado: No atrapar a los usuarios de teclado.
- (Nuevo) 2.1.4 Atajos de teclado mediante caracteres: Proporcionar un mecanismo para configurar los atajos de teclado.
- 2.2.1 Tiempo ajustable: Los límites de tiempo tienen controles de usuario.
- 2.2.2 Pausar, Parar, Ocultar: Proporcionar controles de usuario para mover el contenido.
- 2.3.1 Tres destellos o menos: Ningún contenido parpadea más de tres veces por segundo.
- 2.4.1 Omitir bloques: Proporcionar un enlace "Saltar al contenido".
- 2.4.2 Título de página: Usar títulos de página útiles y claros.
- 2.4.3 Orden de focos: Usar un orden lógico.
- 2.4.4 Propósito del enlace (en el contexto): El propósito de cada enlace está claro en su contexto.
- (Nuevo) 2.5.1 Gestos de puntero: Todas las funciones que utilizan gestos multipunto o basados en trayectoria para su funcionamiento pueden funcionar  con un solo puntero sin un gesto basado en trayectoria, a menos que un gesto multipunto o basado en trayectoria sea esencial.
- (Nuevo) 2.5.2 Cancelación de puntero: Para ayudar a evitar la activación inadvertida de los controles, evite la activación no esencial de los controles de bajada (por ejemplo, bajada de ratón) cuando haga clic, puntee o presione prolongadamente la pantalla.
- (Nuevo) 2.5.3 Etiqueta en el nombre: En el caso de los componentes de la interfaz de usuario con etiquetas que incluyen texto o imágenes de texto, el nombre contiene el texto que se presenta visualmente.
- (Nuevo) 2.5.4 Activación por movimiento: Las funciones que se activan al mover el dispositivo (por ejemplo, al agitar o desplazar un dispositivo móvil) o al mover el usuario (por ejemplo, al saludar a una cámara) pueden desactivarse y se proporciona una funcionalidad equivalente mediante controles estándar como los botones.
- 3.1.1 Idioma de la página: La página tiene un idioma asignado.
- 3.2.1 En foco: Los elementos no cambian cuando reciben el foco.
- 3.2.2 En entrada: Los elementos no cambian cuando reciben la entrada.
- 3.3.1 Identificación de errores: Identificar claramente los errores de entrada.
- 3.3.2 Etiquetas o instrucciones: Etiquetar los elementos y dar instrucciones.
- 4.1.1 Análisis: No hay grandes errores de código.
- 4.1.2 Nombre, rol, valor: Construir todos los elementos para la accesibilidad.

#### Nivel AA

- 1.2.4 Subtítulos (en directo): los videos en vivo tienen subtítulos.
- 1.2.5 Descripción de audio (pregrabado): los usuarios tienen acceso a la descripción de audio para el contenido de video.
- (Nuevo) 1.3.4 Orientación: El contenido no restringe su visualización y funcionamiento a una sola orientación de pantalla, como la vertical u horizontal, a menos que sea esencial una orientación de pantalla específica.
- (Nuevo) 1.3.5 Identificar el propósito de entrada: Los campos de entrada que recopilan ciertos tipos de información del usuario tienen definido un atributo de autocompletado apropiado.
- 1.4.3 Contraste (mínimo): la relación de contraste entre el texto y el fondo es de al menos 4.5: 1.
- 1.4.4 Redimensionar texto: se puede cambiar el tamaño del texto al 200% sin pérdida de contenido o función.
- 1.4.5 Imágenes de texto: no utilizar imágenes de texto.
- (Nuevo) 1.4.10 Reflujo: No se produce pérdida de contenido o funcionalidad y se evita el desplazamiento horizontal cuando el contenido se presenta con un ancho de 320 píxeles.
- (Nuevo) 1.4.11 Contraste sin texto: hay una relación de contraste de al menos 3:1 para diferenciar objetos gráficos (como iconos y componentes de cuadros o gráficos) y componentes de interfaz personalizados por el autor (como botones, controles de formulario e indicadores de foco).
- (Nuevo) 1.4.12 Espaciado de texto: No se produce pérdida de contenido o funcionalidad cuando el usuario adapta la altura / espaciado de la línea de texto a 1.5 veces el tamaño de fuente, el espaciado de párrafo a 2 veces el tamaño de fuente, el espaciado de palabras a 0.16 veces el tamaño de fuente y espaciado entre letras a .12 veces el tamaño de fuente.
- (Nuevo) 1.4.13 Contenido al pasar el mouse o enfocar: cuando se presenta contenido adicional al pasar el mouse o el enfoque del teclado: el contenido recién revelado puede descartarse (generalmente mediante la tecla Esc) sin mover el puntero o el enfoque del teclado, a menos que el contenido presente un error de entrada o no oscurezca ni interfiera con el contenido de otra página; el puntero se puede mover al nuevo contenido sin que el contenido desaparezca; el nuevo contenido debe permanecer visible hasta que el puntero o el foco del teclado se alejen del control de activación, el nuevo contenido se descarte o ya no sea relevante.
- 2.4.5 Múltiples formas: ofrece varias formas de buscar páginas.
- 2.4.6 Encabezados y etiquetas: utilice títulos y etiquetas claros.
- 2.4.7 Enfoque visible: Asegura que el foco del teclado sea visible y claro.
- 3.1.2 Idioma de las partes: avisa a los usuarios cuando cambia el idioma de una página.
- 3.2.3 Navegación consistente: usa los menús de manera consistente.
- 3.2.4 Identificación coherente: utilice iconos y botones de forma coherente.
- 3.3.3 Sugerencias de error: aporta soluciones cuando los usuarios cometen errores.
- 3.3.4 Prevención de errores (legales, financieros, de datos): minimiza el riesgo de errores de entrada de datos confidenciales.
- (Nuevo) 4.1.3 Mensajes de estado: en el contenido implementado mediante lenguajes de marcado, los mensajes de estado se pueden determinar mediante programación a través de roles o propiedades, de modo que se puedan presentar al usuario mediante tecnologías de asistencia sin recibir el foco.

#### Nivel AAA

- 1.2.6 Lenguaje de señas (pregrabado): proporciona traducciones en lenguaje de señas para videos.
- 1.2.7 Descripción de audio ampliada (pregrabada): proporciona una descripción de audio ampliada para vídeos
- 1.2.8 Medios alternativos (pregrabados): proporciona una alternativa de texto a los videos.
- 1.2.9 Sólo audio (en vivo): brinda alternativas para audio en vivo.
- (Nuevo) 1.3.6 Identificar Propósito: En el contenido implementado usando lenguajes de marcado, el propósito de los Componentes de la Interfaz de Usuario, los íconos y las regiones se pueden determinar programáticamente.
- 1.4.6 Contraste (mejorado): la relación de contraste entre el texto y el fondo es de al menos 7:1
- 1.4.7 Audio de fondo bajo o nulo: el audio es claro para que los oyentes lo escuchen.
- 1.4.8 Presentación visual: ofrezca a los usuarios una variedad de opciones de presentación.
- 1.4.9 Imágenes de texto (sin excepción): no utilice imágenes de texto.
- 2.1.3 Teclado (sin excepción): poder acceder solo por teclado.
- 2.2.3 Sin tiempo: sin límites de tiempo.
- 2.2.4 Interrupciones: no interrumpir a los usuarios.
- 2.2.5 Re Autenticación: guarde los datos del usuario al volver a autenticarse.
- (Nuevo) 2.2.6 Tiempos de espera: Se advierte a los usuarios de la duración de la inactividad del usuario que podría causar la pérdida de datos, a menos que los datos se conserven por más de 20 horas cuando el usuario no realiza ninguna acción.
- 2.3.2 Tres parpadeos: ningún contenido parpadea más de tres veces por segundo
- (Nuevo) 2.3.3 Animación a partir de interacciones: La animación de movimiento desencadenada por la interacción se puede desactivar, a menos que la animación sea esencial para la funcionalidad o la información que se transmite.
- 2.4.8 Ubicación: permite que los usuarios sepan dónde se encuentran.
- 2.4.9 Propósito del enlace (solo enlace): el propósito de cada enlace está claro en su texto.
- 2.4.10 Encabezados de sección: dividir el contenido con encabezados
- (Nuevo) 2.5.5 Tamaño del objetivo: los objetivos en los que se puede hacer clic tienen un tamaño de al menos 44 por 44 píxeles, a menos que se proporcione un objetivo alternativo de ese tamaño, el objetivo está en línea (como un enlace dentro de una oración), el objetivo no es autor modificado(como una casilla de verificación predeterminada), o el tamaño pequeño del objetivo es esencial para la funcionalidad.
- (Nuevo) 2.5.6 Mecanismos de entrada concurrentes: El contenido web no restringe el uso de las modalidades de entrada disponibles en una plataforma, excepto donde la restricción es esencial, requerida para garantizar la seguridad del contenido o requerida para respetar la configuración del usuario.
- 3.1.3 Palabras inusuales: explica cualquier palabra extraña.
- 3.1.4 Abreviaturas: explica las abreviaturas.
- 3.1.5 Nivel de lectura: los usuarios con nueve años de estudios pueden leer su contenido.
- 3.1.6 Pronunciación: explica las palabras que son difíciles de pronunciar.
- 3.2.5 Cambio a petición: no cambie elementos en su sitio web hasta que los usuarios lo soliciten.
- 3.3.5 Ayuda: proporciona ayuda e instrucciones detalladas.
- 3.3.6 Prevención de errores (todos): reduce el riesgo de los errores de entrada.
