---
id: encabezado
title: Encabezados
---

![img](../static/img/encabezado.svg)

La función de los encabezados es la de organizar los contenidos haciendo una pequeña descripción de la sección que encabeza.

:::tip
Define bien los encabezados, ya que los usuarios de lectores de pantalla suelen navegar a través de ellos, también los buscadores les dan importancia a la hora de indexar contenidos.
:::

- Todas las páginas deben tener un encabezado `<h1>`
- No saltar niveles de jerarquía de encabezados. 
- No emular encabezados mediante estilos-
```html
    /* incorrecto */
    <span class="clase-h1">Encabezado principal</span>

    /* correcto */
    <h1 class="clase-h1">Encabezado principal</h1>
```




### Jerarquía

Los encabezados tienen una jerarquía, donde el `<h1>` es el de más importancia y el `<h6>` el de menor.

```html
<h1>Encabezado nivel 1</h1>
<h2>Encabezado nivel 2</h2>
<h3>Encabezado nivel 3</h3>
<h4>Encabezado nivel 4</h4>
<h5>Encabezado nivel 5</h5>
<h6>Encabezado nivel 6</h6>
```

#### Orden

Dentro de una misma sección no se debe saltar niveles de jerarquía, es decir, el encabezado de nivel inferior a un `h1` debería ser un `h2`

```html
  <!-- incorrecto -->
  <article>
    <h1>Encabezado principal</h1>
    ...
    <h3>Sub-encabezado nivel 3</h3>
    ...
    <h4>Sub-encabezado nivel 4</h2>
    ...
  </article>

  <!-- correcto -->
  <article>
    <h1>Encabezado principal</h1>
    ...
    <h2>Sub-encabezado nivel 2</h2>
    ...
    <h3>Sub-encabezado nivel 3</h3>
    ...
  </article>
```

A partir del `<h2>` si pueden seguir encabezados del mismo nivel, por ejemplo:

```html
<h1>Encabezado principal</h1>
...
<h2>Sub-encabezado nivel 2</h2>
...
<h2>Sub-encabezado nivel 2</h2>
...
<h3>Sub-encabezado nivel 3</h3>
...
<h3>Sub-encabezado nivel 3</h3>
...
<h2>Sub-encabezado nivel 2</h2>
...
```

### Encabezado principal

Todas las páginas deben llevar un encabezado `<h1>` que represente el contenido global, este encabezado debería ser único por página.

#### Múltiples encabezados H1

Podemos tener varios encabezados `<h1>`, por ejemplo dentro de cada `<article>` o `<section>`

```html
  <section>
      <header>Titulo sección artículos</header>
      <article>
          <header>
              <h1> Titulo artículo 1 </h1>
          <header>
      </article>
      <article>
          <header>
              <h1> Titulo artículo 2 </h1>
          </header>
      </article>
  </section>
```
