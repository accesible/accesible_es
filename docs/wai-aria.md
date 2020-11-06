---
id: wai-aria
title: WAI-ARIA
---

![img](../static/img/wai-aria.svg)

WAI-ARIA es una especificación escrita por la W3C pero no tiene relación con HTML, se basa en una serie atributos adicionales que **añaden una semantica adicional**.

> La recomedación actual es WAI-ARIA 1.1

- Usalo en páginas con actualizaciones de contenido dinámicas, o para conocer el estado de controles avazandos (widgets), como por ejemplo sliders, carruseles o modales.
- Nos permite definir el **rol** que tiene un elemento, indicar sus **propiedades** y su **estado** actual.
- **Podemos cambiar dinámicamente las propiedades o el estado** de un elemento, pero nunca el rol.
- Reemplaza elementos HTML, ejemplo: `<div role="button">` se comportará como un `<button>`, aunque **siempre se recomienda usar marcado nativo**.



Hay tres características principales definidas en la especificación:

- Roles
    Definen lo que es o hace un elemento.
    https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
    https://www.w3.org/TR/wai-aria-1.1/#role_definitions

- Propiedades
    Define las propiedades de los elementos para darles un significado o semántica adicional
    https://www.w3.org/TR/wai-aria-1.1/#state_prop_def

- Estados
    Especifica las condiciones actuales del elemento, ejemplo aria-disabled="true"
    https://www.w3.org/TR/wai-aria-1.1/#state_prop_def

## Tabindex

En HTML sólo pueden recibir el foco elementos de formulario (input, textarea, select, ... ), enlaces y botones. Para situaciones donde queramos **hacer foco en elementos no seleccionables**, usaremos el atributo WAI-ARIA `tabindex`.

- **tabindex="0"**
    Permite que elementos no focusables (div, li, p, ...) puedan recibir el foco.

- **tabindex="-1"**
    Evita que el elemento sea focusable.

### Orden de tabulación

También podemos controlar en que orden vamos a posicionar el foco en los elementos, independientemente de la posición de estos en la página.

Para ello asignaremos distintos valores númericos a `tabindex`, donde `tabindex="1"` será el primer elemento seleccionado, `tabindex="2"` el segundo, etc ...

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
