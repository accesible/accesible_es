---
id: manifiesto
title: 📜 Manifiesto
slug: /manifiesto
image: /img/logo.svg
description: La guía fácil de accesibilidad web
keywords: [accesibilidad web, pautas accesibilidad, wai-aria]
---

Lista de verificación básica de accesibilidad web para diseñadores
Esta lista de verificación es el punto de partida para un diseño accesible, no el punto final. Estos son los destacados de algunos de los conceptos más importantes. Esfuérzate por pensar más allá del mínimo, para crear diseños que a las personas con discapacidades realmente les gusten, y que les resulten útiles y se adapten bien a sus necesidades.

También puede descargar la versión en PDF de la lista de verificación. opens in a new window

# Título de la página
- ¿El título de la página (el título del navegador para la página; no el encabezado del contenido principal o `<h1>`) describe el tema o propósito de la página?
# Encabezados
- ¿Todo el texto que se ve y actúa como un encabezado está marcado como un encabezado?
- ¿Se eligen los niveles de encabezado para que transmitan su orden jerárquico correcto en el contenido, no por su estilo visual?

# Navegación
- ¿Se proporciona un método para omitir la navegación repetitiva e ir al contenido principal? Dos de las técnicas principales incluyen proporcionar puntos de referencia HTML/ARIA (por ejemplo, encabezado, navegación, principal, pie de página) y "enlaces para omitir la navegación".
- ¿La lectura y el orden de enfoque del contenido, según lo determinado por el orden del código, serán lógicos e intuitivos?

# Enlaces

- ¿El texto del enlace describe claramente el propósito o el destino del enlace?

# Color/Contraste

-¿Se transmite la información por otros medios que no sean solo el color solamente? Por ejemplo, usar color y texto para indicar que un campo de formulario tiene un error, o usar colores con texto para etiquetar categorías de gráficos.
- ¿Todo el texto tiene un contraste de color mínimo con respecto a su fondo de al menos 4,5 a 1 (3 a 1 para texto grande)?
- ¿El texto del enlace es distinguible del texto que no es un enlace por algo más que el color?
- ¿Los elementos accionables tienen un foco claro y visible cuando los usuarios que no usan el mouse presionan la tecla Tab o las teclas de flecha?
- ¿Todos los elementos no textuales (componentes de la interfaz de usuario y objetos gráficos) que son importantes para acceder y comprender el contenido tienen un contraste de color suficiente de al menos 3 a 1?

# Ampliación y diseño responsive

- ¿Puede un usuario con baja visión ampliar o acercar el contenido del navegador en cualquier dispositivo, incluidos los de escritorio y móviles?
- ¿El diseño está optimizado para todos los estados de zoom? Simplifique el diseño tanto como sea posible, eliminando el desplazamiento horizontal.
- ¿Puede un usuario utilizar el sitio web con su dispositivo en su orientación preferida (apaisado/retrato)?

# Imágenes

- ¿Para las imágenes informativas, el texto alternativo proporciona la misma información que la imagen?
- ¿Para las imágenes accionables, el texto alternativo, como un enlace de imagen, un botón o un área de mapa de imagen, identifica claramente el destino del enlace o el propósito del botón?
- ¿Las imágenes complejas o infografías se explican completamente en el contenido de la página y se proporciona una breve descripción de texto alternativo?
- ¿Las imágenes decorativas se identifican como que no requieren texto alternativo?
- ¿Se utiliza texto sin formato en lugar de texto incrustado en las imágenes? (existen excepciones como el texto en los logotipos y las imágenes de texto decorativas)

# Tablas
- Si la página contiene una tabla de datos, ¿la tabla tiene una leyenda (nombre/título) y las columnas o filas están identificadas correctamente en el marcado?
-¿Se simplifican las tablas complejas para minimizar o eliminar la necesidad de encabezados de columna o fila compuestos?

# Formularios

- ¿Todos los campos del formulario tienen una etiqueta que siempre está visible?
- ¿Son todas las etiquetas de formulario adecuadamente descriptivas e instructivas? ¿Toda la información que el usuario necesita para rellenar el formulario está disponible en la página?
- ¿Están todas las etiquetas de formulario e instrucciones inmediatamente adyacentes a su elemento de formulario para que los usuarios (incluidos los usuarios de ampliación de pantalla) puedan conectar fácilmente el elemento de formulario con su etiqueta y/o instrucciones?
- ¿Están todos los controles muy cerca del contenido que están controlando? Por ejemplo, ¿están los botones Editar y Eliminar junto al contenido que modifican?
- ¿Los mensajes de error proporcionan suficiente información para que los usuarios corrijan su error?
- ¿Los formularios están escritos para que se puedan usar con Autocompletar?

# Contenido dinámico

- ¿Se informa a los usuarios del contenido que se inserta dinámicamente en una página o el nuevo contenido aparece inmediatamente después del elemento que lo provocó, en el orden lógico de lectura / orden de tabulación de la página?
- ¿Todas las interacciones solo con el teclado y la pantalla táctil siguen los patrones esperados para que los usuarios sepan cómo interactuar con todos los widgets de la página?
Diseñe la retroalimentación de éxito y fracaso en todas las interacciones. Cuando los usuarios activan la funcionalidad programada (botones, envíos de formularios, etc.), deben saber si la acción fue exitosa o no, a través de un mensaje de éxito/error, la activación obvia de una función (por ejemplo, un video comienza a reproducirse después de que el usuario activa el botón de "reproducción"), etc. La retroalimentación debe estar disponible para los usuarios videntes, los usuarios de lectores de pantalla y todas las demás categorías de usuarios.
Widgets personalizados
- ¿El diseño utiliza widgets HTML estándar (enlaces, botones, elementos de formulario, controles, etc.) siempre que sea posible? Los widgets nativos tienen capacidades de accesibilidad integradas. Los widgets personalizados no lo hacen.
Si tiene widgets personalizados, ¿se han creado con soporte total para teclado y son compatibles con las prácticas de autoría de WAI-ARIA?
Dispositivos táctiles
- ¿El tamaño del área táctil de los enlaces principales y botones es suficientemente grande y están suficientemente separados entre sí para activarse fácilmente con un dedo?
- ¿Existe alguna forma alternativa de activar acciones o gestos de deslizamiento personalizados? Tenga en cuenta que cuando se activa un lector de pantalla en un dispositivo táctil, anula todas las acciones y gestos de deslizamiento personalizados.