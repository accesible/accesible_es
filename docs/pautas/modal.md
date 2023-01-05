---
id: modal
title: Modales
slug: /modal
image: /img/modal.svg
description: Modal accesible para la web mediante ejemplos sencillos
keywords: [modales accesibles, dialog, aria-modal]
---

<img src="/img/modal.svg" alt="" />

Los modales siempre han generado problemas de accesibilidad, y su uso se ha generalizado para molestos mensajes de suscripciones, publicidad, etc.

> Usa modales solo en casos donde realmente mejore la usabilidad y no por estética.

- **Evitar abrir modales de forma automática**,
- Usar la etiqueta nativa [`dialog`](#dialog), de lo contrario, añadir el atributo `role="dialog"`.
- Podemos añadir `aria-labelledby` y `aria-describedby` para añadir información sobre el modal.
- Cuando abrimos un modal, **debemos bloquear todo el contenido que esté detrás** y poner el foco sobre el primer campo si lo tuviera, también debemos añadir el atributo `aria-modal="true"` (con este atributo no es necesario usar `aria-hidden`).
- Se debe poder cerrar con la tecla `Esc` o bien pulsando un botón de cerrar.
- Una vez cerrado, el foco debe volver al **punto donde se lanzó el modal**.

```html
<div id="dialog1" role="dialog" aria-labelledby="dialog1_label" aria-modal="true">
    <h2 id="dialog1_label" class="dialog_label">Añadir nuevo usuario</h2>
    <div class="dialog_form">
        ...
    </div>
</div>
```

## Dialog

La etiqueta `dialog` ya es compatible en todos los navegadores actuales (chrome, edge, firefox, y safari).

- Si usamos la etiqueta `<dialog>`, añadiremos el atributo `open` cuando esté visible.

```html
<dialog id="modal-prueba" open>
    <h2>Modal de prueba</h2>
    <p>Esto es un modal abierto</p>
</dialog>
```

Para interactuar con esta etiqueta tenemos los siguientes métodos:

- `.show()` - Muestra la etiqueta dialog
- `.showModal()` - Muestra el dialog como un modal, bloqueando el resto del contenido.
- `.close()` - Oculta la etiqueta dialog

Si queremos personalizar el fondo, tenemos el pseudo-elemento CSS `::backdrop`

```css 
dialog::backdrop {
    background-color: rgba(255,0,0,0.8);
}
```

Más información sobre [dialog - w3.org](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html).



