---
id: navegacion
title: Navegación
slug: /navegacion
image: /img/logo.svg
description: Navegación accesible para la web con ejemplos sencillos
keywords: [menu, breadcrum, paginación, acordeón]
---

<img src="/img/navegacion.svg" alt="" />

## Navegación principal


- Debe estar dentro de una etiqueta `<nav>` o en su defecto añadir el atributo `role="navigation"`
- Añade un `aria-label` para describir el tipo de navegación, o bien, usa `aria-labelledby` asociado a un encabezado oculto.
- Añade el atributo `aria-current="page"` para marcar la página actual.

Ejemplo de menú de navegación principal accesible:

```html
<nav class="navbar" aria-labelledby="menuprincipal">
  <h2 class="visuallyhidden" id="menuprincipal">Menú principal</h2>
  <ul class="nav navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Inicio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Historia</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Servicios</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contacto</a>
    </li>
  </ul>
</nav>
```

---

## Breadcrumb

- Debe estar dentro de una etiqueta `<nav>` o en su defecto añadir el atributo `role="navigation"`
- Añade un `aria-label` para describir el tipo de navegación.
- Añade el atributo `aria-current="page"` para marcar la página actual.

Ejemplo de rastro de migas accesible:

```html
<nav aria-label="Ubicación">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Inicio</a></li>
    <li class="breadcrumb-item"><a href="#">Categoría</a></li>
    <li class="breadcrumb-item"><a href="#" aria-current="page">Subcategoría</a></li>
  </ol>
</nav>
```

---

## Paginación

- Debe estar dentro de una etiqueta `<nav>` o en su defecto, añadir el atributo `role="navigation"`
- Añade un `aria-label` para describir el tipo de navegación.
- Añade el atributo `aria-current="page"` para marcar la página actual.
- Agrega el atributo `aria-disabled="true"` cuando el enlace está deshabilitado.

Ejemplo de páginación accesible:

```html
<nav role="navigation" aria-label="Paginación">
    <ul>
        <li><a href="#" aria-label="Página anterior"> << </a></li>
        <li><a href="/page-1" aria-label="Ir a la página 1">1</a></li>
        <li><a href="/page-2" aria-label="Ir a la página 2">2</a></li>
        <li><a href="/page-3" aria-label="Página actual, página 3" aria-current="true">3</a></li>
        <li><a href="#" aria-label="Siguiente página" aria-disabled="true"> >> </a></li>
    </ul>
</nav>
```

---

## Acordeón

- En los encabezados debemos usar botones para permitir la **navegación mediante teclado**:
  - Pulsando `Espacio` o `Entrar` cuando está sobre un encabezado, **expande la sección**.
  - Pulsando `Tab`, mueve el foco al **siguiente elemento** enfocable.
  - Pulsando `Shift`+`Tab`, movemos el foco al **anterior elemento** enfocable.
- Cada botón se relaciona con su contenido mediante el atributo `aria-controls`, en este atributo especificaremos el id del contenido asociado.
- Cada botón tendrá un atributo `aria-expanded` con valor `true` o `false`, dependiendo si el contenido está oculto o visible.

> El indicador de foco es para los usuarios de teclado lo que el cursor es para los usuarios de ratón.

Ejemplo de acordeón accesible:

```html
<div class="accordion">
  <ul aria-label="Acordeón accesible con lista" class="accordion-controls">
    <li>
      <h3>
        <button aria-controls="content-1" aria-expanded="false" id="accordion-control-1">
          Cabecera 1
        </button>
      </h3>
      <div aria-hidden="true" id="content-1">
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </li>
    <li>
      <h3>
        <button aria-controls="content-2" aria-expanded="false" id="accordion-control-2">
          Cabecera 1
        </button>
      </h3>
      <div aria-hidden="true" id="content-2">
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </li>
    <li>
      <h3>
        <button aria-controls="content-3" aria-expanded="false" id="accordion-control-3">
          Cabecera 1
        </button>
      </h3>
      <div aria-hidden="true" id="content-3">
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </li>
  </ul>
</div>
```