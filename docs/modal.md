---
id: modal
title: Modales
---

![img](/img/modal.svg)


Los modales siempre han sido problemáticos en accesibilidad, te recomendamos usarlos sólo en casos donde sean necesarios.

- **No abrir modales de forma automática**, es decir, si el usuario no ha realizado ninguna acción.
- Usar la etiqueta nativa [`dialog`](#dialog), de lo contrario, añadir el atributo `role="dialog"`.
- Podemos añadir `aria-labelledby` y `aria-describedby` para añadir información sobre el modal.
- Cuando abrimos un modal, **debemos bloquear todo el contenido que esté detrás** y poner el foco sobre el primer campo si lo tuviera, también debemos añadir el atributo `aria-modal="true"` (con este atributo no es necesario usar `aria-hidden`).
- Se debe poder cerrar con la tecla `Esc` o bien pulsando un botón de cierre.
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

- .show() - Muestra la etiqueta dialog
- .showModal() - Muestra el dialog como un modal, bloqueando el resto del contenido.
- .close() - Oculta la etiqueta dialog

Si queremos personalizar el fondo, tenemos el pseudo-elemento CSS `::backdrop`

```css 
dialog::backdrop {
    background-color: rgba(255,0,0,0.8);
}
```



Más información sobre [dialog - w3.org](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html).



