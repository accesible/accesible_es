---
id: wai-aria
title: WAI-ARIA
slug: /wai-aria
image: /img/wai-aria.svg
description: Wai-aria en tu sitio web con ejemplos sencillos
keywords: [wai-aria, atributos y roles wai-aria]
---

<img src="/img/wai-aria.svg" alt="" />

[WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) es una especificación escrita por la W3C pero no tiene relación con HTML, se basa en una serie atributos y roles adicionales que **añaden una semántica adicional**. 

> La recomendación actual es WAI-ARIA 1.1, la [versión 1.2 de WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/) está aun en fase borrador.

- Úsalo en páginas con actualizaciones de contenido dinámicas, o para conocer el estado de controles avanzados (widgets), como por ejemplo sliders, carruseles o modales.
- Nos permite definir el **rol** que tiene un elemento, indicar sus **propiedades** y su **estado** actual.
- **Podemos cambiar dinámicamente las propiedades o el estado** de un elemento, pero nunca el rol.
- Reemplaza elementos HTML, ejemplo: `<div role="button">` se comportará como un `<button>`, aunque **siempre se recomienda usar marcado nativo**.

- **Roles**: Definen lo que es o hace un elemento a los asistentes.
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
    https://www.w3.org/TR/wai-aria-1.1/#role_definitions

    - Roles de estructura: Utilizados para describir las distintas estructuras de organización de una página. (article, toolbar, row, list, etc)
    - Roles abstractos: roles utilizados por el navegador.
    - Roles tipo widget: Definen patrones interactivos comunes, como por ejemplo para un slider, switch, tabs, suelen requerir de código js para modificar su valor.

- **Propiedades**: Define las propiedades de los elementos para darles un significado o semántica adicional
    https://www.w3.org/TR/wai-aria-1.1/#state_prop_def

- **Estados** : Especifica las condiciones actuales del elemento, ejemplo aria-disabled="true"
    https://www.w3.org/TR/wai-aria-1.1/#state_prop_def

    - `aria-busy` Indica si un elemento y su subárbol se están actualizando actualmente.
    - `aria-checked` Se usa con en checkbox o radio buttons para indicar si está seleccionado.
    - `aria-disabled` Indica que el elemento está deshabilitado.
    - `aria-expanded` Indica si el elemento, u otro elemento del grupo que controla, está actualmente expandido o colapsado.
    - `aria-grabbed` Indica el estado “agarrado” de un elemento en una operación de drag&drop.
    - `aria-hidden` Indica que el elemento y todos sus descendientes no son visibles ni perceptibles para ningún usuario.
    - `aria-invalid` Indica que el valor que se ha rellenado no se ajusta al formato esperado por el campo.
    - `aria-pressed` Establece o recupera el estado “presionado” de un botón.
    - `aria-selected` Establece o elimina el estado “selected” del elemento.
    - `aria-current` Indica cual es el elemento actual dentro de un contenedor o conjunto de elementos relacionados.
    - `aria-describedby` Enlaza a un elemento para dar más información, se asocia mediante su `id`.
    - `aria-required` Indica si se debe completar de forma obligatoria un elemento del formulario.

:::tip Nota
Recuerda que un rol de ARIA anula el rol inherente de un elemento HTML.

Por ejemplo, en `<img role="button">`, la etiqueta img será interpretada como un botón.
::: 

## Aria-live

Añadiremos el atributo `aria-live`  para indicar que es una "región viva", es decir, que su contenido se modifica y actualiza dinámicamente. Por ejemplo un listado de "Últimos mensajes", que se actualiza cada 10 segundos automáticamente.

- `aria-live="off"` - los cambios no se anunciarán.
- `aria-live="polite"` - los cambios se anunciarán al usuario pero sin interrumpirle de su acción actual.
- `aria-live="assertive"` - los cambios se anuncian de inmediato, independientemente de lo que el usuario esté haciendo. 

El valor por defecto de `aria-live` es assertive.

## Tabindex

En HTML sólo pueden recibir el foco elementos de formulario (input, textarea, select, ... ), enlaces y botones. Para situaciones donde queramos **hacer foco en elementos no seleccionables**, usaremos el atributo WAI-ARIA `tabindex`.

- **tabindex="0"**
    Permite que elementos no focusables (div, li, p, ...) puedan recibir el foco.

- **tabindex="-1"**
    Evita que el elemento sea focusable.

### Orden de tabulación

También podemos controlar en qué orden vamos a posicionar el foco en los elementos, independientemente de la posición de estos en la página.

Para ello asignaremos distintos valores numéricos a `tabindex`, donde `tabindex="1"` será el primer elemento seleccionado, `tabindex="2"` el segundo, etc ...

```html

<!-- segundo elemento que recibirá el foco al tabular -->
<div tabindex="2">...</div>

<!-- tercer elemento que recibirá el foco al tabular -->
<div tabindex="3">...</div>

<!-- primer elemento que recibirá el foco al tabular -->
<div tabindex="1">...</div>
```

## Selectores css

Podemos seleccionar los atributos WAI-ARIA mediante CSS:

```css
div[role="navigation"] { color: blue; background-color: inherit; }
```
