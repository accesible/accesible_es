---
id: formulario
title: Formularios
slug: /formulario
image: /img/formulario.svg
description: Crear formulario accesible mediante pautas accesibilidad a través de ejemplos
keywords: [formularios accesibles, asociar label, aria-label, fieldset, wai-aria, switch]
---

<img src="/img/formulario.svg" alt="" />

Los formularios son una forma de interacción con el usuario muy importante, por ejemplo para registros, contacto o cualquier tipo de envío de información.

- Todos los campos activos deben ser accesibles mediante la **tabulación** del teclado.
- Añade la información que se relaciona con todo el formulario antes del inicio del formulario.
- Todo los los controles de formulario (input, textarea, select) deben tener **asociado un label**, o en su defecto, el atributo `aria-label` que especifique claramente el propósito del campo.
- **Resalta los campos cuando se haga foco** sobre ellos.
- Los **campos obligatorios** deben quedar claramente marcados (asterisco, texto descriptivo, etc) y tener el atributo `aria-required`. [[Criterio 3.3.2 ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)
- Ofrece espacio suficiente entre campos y **zonas pulsables amplias**. (mínimo 44px por 44px) [[Criterio 2.5.5 - Tamaño objetivo ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- **Ofrece tiempo suficiente para completar** un formulario (caducidad de sesión).
- Usa **autocompletado** cuando sea posible con el atributo `autocomplete`. [[Criterio 1.3.5 - Identificar propósito de entrada ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- Cuando se envíe los datos de un formulario, **informa al usuario de la acción realizada,** para formularios complejos, es útil mostrar una página de **confirmación de la información facilitada** antes de enviarla.
- **Ofrece ayuda e información complementaria** para rellenar campos que puedan ser complejos, utiliza el atributo `aria-describedby`. [[Criterio 3.3.2 ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)
- No uses el [botón reset](#botón-reset).
- Utiliza los elementos [fieldset y legend](#fieldset-y-legend) para describir grupos de controles de formulario. [[Criterio 1.3.1 ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

## Gestión de errores

- Identifica dónde están los errores y describe el problema en un lenguaje que la gente entienda [[Criterio 3.3.1 ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html), estos deben ser **visibles y percetibles** usando colores, iconos y texto. [[Criterio 1.4.1 - Uso del color ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)

- Ofrece sugerencias para corregir un error de entrada. [[Critero 3.3.3 ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html)
- Escriba mensajes de error para ser lo más específico posible, en lugar de usar mensajes genéricos. [[Critero 3.3.1 ↗️]](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- Evita poner enlaces dentro del texto del mensaje de error.


## Label

La etiqueta `<label>` representa el título del elemento de control asociado.

### Asociando el label

Las etiquetas `<label>` deben asociarse de forma implícita o explícita a los distintos controladores de formulario (input, textarea, select).

#### Asociación implícita

La etiqueta `<label>` engloba a su control asociado.

Ejemplo de label con asociación implícita:

```html
<label>Nombre:
  <input type="text" id="nombre" name="nombre" />
</label>
```

#### Asociación explícita

Debemos añadir el atributo `for=''` con el id del control asociado a la etiqueta `<label>`.

Ejemplo de label con asociación explícita:

```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" />
```

:::tip Nota
Recuerda que el `id` debe ser único en cada página, si el formulario es dinámico y no puedes controlar sus identificadores, utiliza la asociación implícita.
:::

#### Asociación con aria-label

Podemos reemplazar la etiqueta `<label>` por un atributo `aria-label`.

Ejemplo de label con con atributo `aria-label`:

```html
<input type="text" aria-label="Nombre" id="nombre" name="nombre" />
```

:::tip Nota
No es aconsejable prescindir de `label` ya que aporta información una información visual.
:::

#### Asociación con aria-labelledby

En ciertos casos, como un buscador, podemos prescindir del label y asociar el botón de búsqueda mediante `aria-labeledby`

Ejemplo de label con con atributo `aria-labelledby`:

```html
<input type="text" name="buscar" aria-labelledby="boton-buscar">
<button id="boton-buscar" type="submit">Buscar</button>
```

#### Diferencias entre aria-label y aria-labelledby

Con `aria-label` estás definiendo un label al elemento.

Con `aria-labelledby` estás definiendo un label mediante una id que enlaza un texto/campo visible fuera del elemento.

## Ayuda / descripción de campos de formulario

Se recomienda proporcionar ayuda/información en los campos que puedan ofrecer dudas o restricciones de formato.

### Placeholder

Con los placeholder mostraremos un texto dentro de los campos `input` o `textarea`, recuerda que **un placeholder no reemplaza a un label**.

```html
<label for="name">Nombre completo: </label>
<input
  type="text"
  name="name"
  id="name"
  placeholder="Escriba su nombre y apellidos"
/>
```

Con css es posible modificar el **estilo del placeholder**, debajo te mostramos un ejemplo:

```css
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
}
```

### Ayuda dentro del label

Otra opción es ofrecer ayuda dentro de nuestro label, te mostramos un ejemplo el formato requerido:

```html
<label for="expire">Fecha de caducidad (MM/AAAA): </label>
<input type="text" name="expire" id="expire" />
```

### Ayuda fuera del label, aria-describedby

Podemos hacer uso del atributo WAI-ARIA `aria-labelledby` o `aria-describedby`, para ofrecer información complementaria del campo.

```html
<!-- aria-labelledby -->
<label id="expLabel" for="expire" tabindex="-1">Fecha de caducidad:</label>
<span>
  <input
    type="text"
    name="expire"
    id="expire"
    aria-labelledby="expLabel expDesc"
  />
  <span id="expDesc" tabindex="-1">MM/AAAA</span>
</span>

<!-- aria-describedby -->
<label id="expLabel" for="expire">Fecha de caducidad:</label>
<span>
  <input
    type="text"
    name="expire"
    id="expire"
    aria-labelledby="expLabel"
    aria-describedby="expDesc"
  />
  <span id="expDesc">Usa el formato MM/AAAA</span>
</span>
```

## Input y textarea

Los elementos input deben llevar su type correspondiente.

Ejemplo de algunos tipos de inputs:

```html
<input type="button" />
<input type="checkbox" />
<input type="color" />
<input type="date" />
<input type="datetime-local" />
<input type="email" />
<input type="file" />
<input type="hidden" />
<input type="image" />
<input type="month" />
<input type="number" />
<input type="password" />
<input type="radio" />
<input type="range" />
<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="tel" />
<input type="text" />
<input type="time" />
<input type="url" />
<input type="week" />
```

### Inputmode

El `inputmode` es un atributo que proporciona una sugerencia a los navegadores para decidir qué teclado por pantalla mostrar cuando un usuario ha seleccionado un campo input/textarea.

```html
  <input type="text" inputmode="" />
  <textarea inputmode="" />

  <!-- Numérico -->
  <input type="text" inputmode="numeric" />

  <!-- Teléfono -->
  <input type="text" inputmode="tel" />

  <!-- Decimal -->
  <input type="text" inputmode="decimal" />

  <!-- Email -->
  <input type="text" inputmode="email" />

  <!-- URL -->
  <input type="text" inputmode="url" />

  <!-- Buscador -->
  <input type="text" inputmode="search" />


```



### Emulando con WAI-ARIA

Tanto los input y los textarea se pueden emular mediante WAI-ARIA, aunque siempre es recomendable usar el elemento nativo.

```html
<!-- campo input simple -->
<div id="txtboxLabel">Código postal:</div>
<div
  role="textbox"
  contenteditable="true"
  aria-placeholder="5-digit zipcode"
  aria-labelledby="txtboxLabel"
></div>

<!-- campo textarea -->
<div id="txtboxMultilineLabel">Comentarios:</div>
<div
  role="textbox"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"
></div>
```

## Fieldset y legend

Usa la etiqueta `<fieldset>` para englobar los distintos apartados, y a su vez la etiqueta `<legend>` para añadir un título.

```html
<fieldset>
  <legend>Información personal</legend>
  <!-- campos de información personal -->
</fieldset>
```

## Checkbox y radio button

- Agrupa los radiobutton o checkbox dentro de un fieldset.
- Añade un legend para proporcionar una descripción para la agrupación, esta debe ser corta y descriptiva.

```html
<fieldset>
  <legend>¿Cuál es tu color preferido?</legend>
  <div class="checkbox column">
    <input id="rojo" type="checkbox" name="color" value="rojo" />
    <label for="rojo">Rojo</label>
    <input id="azul" type="checkbox" name="color" value="azul" />
    <label for="azul">Azul</label>
    <input id="verde" type="checkbox" name="color" value="verde" />
    <label for="verde">Verde</label>
  </div>
</fieldset>
```

- Como alternativa al fieldset, podemos usar WAI-ARIA, añadiendo al div contenedor los atributos `role="group"` y `aria-labelledby`.

```html
<div role="group" aria-labelledby="color_head">
  <h4 id="color_head" class="bold">¿Cuál es tu color favorito</h4>
  <div class="row">
    <input id="rojo" type="checkbox" name="color" value="rojo" />
    <label for="rojo">Rojo</label>
    <input id="azul" type="checkbox" name="color" value="azul" />
    <label for="azul">Azul</label>
    <input id="verde" type="checkbox" name="color" value="verde" />
    <label for="verde">Verde</label>
  </div>
</div>
```

## Switch

### Switch con botones

En el caso de crear un switch con la etiqueta `<button>`, debemos incluir el atributo `role="switch"` y `aria-checked` con el valor `"true, false o mixed"`, dependiendo de su estado.

```html
  <div>
    <button type="button" id="toggle_label" aria-labelledby="toggle_label" aria-checked="false" role="switch">
      <span>Modo oscuro</span>
    </button>
    <label for="toggle_label">Moso oscuro</label>
  </div>
```

### Switch con input

Si usamos un `<input>` del tipo checkbox, debemos añadir una etiqueta `<label>`

```html
<label for="toggle">
  <input type="checkbox" name="toggle" id="toggle"  />
  Modo oscuro
</label>
```

## Select

- Utiliza el atributo `title` para proporcionar ayuda contextual en los controles del formulario.
- Proporciona un orden de tabulación lógico mediante `tabindex` cuando el orden por defecto no es suficiente.
- Añade el atributo `optgroup` para agrupar elementos option dentro de un elemento select.

## Botón reset

Con el tiempo ha ido cayendo en desuso, uno de los motivos es la facilidad con la que puede ser pulsado por error y vaciar todos los campos. 

Imagina estar rellenando un formulario con muchos campos y por error pinchar en el botón reset 💀; por ese motivo, si lo añadimos, debemos añadir un mensaje de confirmación para evitar sustos.

Los que si debemos ofrecer, es la opción a que el usuario pueda restablecer el valor por defecto de campos de opción como radiobutton o checkbox.
