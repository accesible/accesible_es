---
id: tabla
title: Tablas
slug: /tabla
image: /img/tabla.svg
description: Tabla accesible para la web con ejemplos sencillos
keywords: [tablas accesibles, tablas complejas, wai-aria en tabla]
---

<img src="/img/tabla.svg" alt="" />

**Resumen para añadir tablas accesibles:**

- **Usaremos la etiqueta `<table>` siempre que mostremos datos tabulares**, es decir en filas y columnas.
- Debemos **añadir un título** que defina brevemente el contenido de la tabla mediante la etiqueta `caption`, o las alternativas como `aria-label` o `aria-labelledby`.
- Describir la tabla mediante `aria-describedby`, la etiqueta `<summary>` está **obsoleta en HTML5**.
- Se debe añadir la etiqueta encabezado `th` con `scope` para indicar si está encabezando una columna `<th scope='col'>` o una fila `<th scope='row'>`.
- `scope='colgroup` se usará para encabezados con varias columnas, mientras que `scope='rowgroup'` se usará para en el caso de varias filas.
- **Evita el scroll horizontal**, es preferible que la tabla crezca verticalmente.
- Utiliza `thead`, `tbody` y `tfoot` para marcar las distintas secciones.
- Utiliza atributos `id` y `header` para **asociar celdas de datos con celdas de encabezado**.

Ejemplo de tabla accesible:

```html 
  <h3>Economía de España</h3>

  <p id="tabla1-desc" aria-hidden="true">
  En cada fila se muestran los datos de las importaciones (en euros y porcentaje de PIB) por año, desde el 1960 hasta el 2020
  </p>
  <table aria-describedby="tabla1-desc">
  <caption>
    España - Importaciones de Mercancías
  </caption>
    <tr>
      <th>Fecha</th>
      <th>Importaciones</th>
      <th>Importaciones % PIB</th>
    </tr>
    <tr>
      <td>2020</td>
      <td>286.801,0 M€</td>
      <td>P25,56%</td>
    </tr>
    [...]
  </table>

```

## Titulando la tabla

### `caption`

Debes usar la etiqueta `caption` para titular brevemente el contenido de la tabla. Será el primer elemento que contenga la etiqueta `table`.

```html
<table>
      <caption>Título de la tabla</caption>
```

### `aria-describedby`

Para informaciónes más detallada, puedes utilizar un `aria-describedby` en la etiqueta `table`.

```html
  <p id="ejemplo1">
  En cada fila se muestran los datos de las importaciones (en euros y porcentaje de PIB) por año, desde el 1960 hasta el 2020
  </p>
  <table aria-describedby="ejemplo1">
  <caption>
    España - Importaciones de Mercancías
  </caption>
      [...]
  </table>
```

### `aria-labelledby`

```html
<h3 id="tableCaption">Título del contenido de la tabla</h3>
<table aria-labelledby="tableCaption">
```


## Scope, rowspan y colspan

El atributo `scope` es exclusivo de la etiqueta `th` y nos servirá para indicar que parte de la tabla estamos encabezando. Este atributo puede tener los valores `col`, `row`, `colgroup`, y `rowgroup`.

```html
<table>
  <caption>Presupuesto mensual</caption>
  <thead>
    <tr>
      <th scope="col">Mes</th>
      <th scope="col">Cantidad ganada</th>
      <th scope="col">Cantidad gastada</th>
      <th scope="col">Cantidad ahorrada</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">enero</th>
      <td>$2500</td>
      <td>$1500</td>
      <td>$500</td>
    </tr>
    <tr>
      <th scope="row">febrero</th>
      <td>$2700</td>
      <td>$1500</td>
      <td>$700</td>
    </tr>
  </tbody>
</table>

```

Para casos en los que la cabecera se comparta con varias filas o columnas, usaremos el atributo `rowspan` para el caso de filas, y `colspan` para el caso de columnas, donde le daremos el valor numérico de la cantidad de columnas o filas que contenga esa cabecera.

También tendremos que añadir `scope` para cada caso, asignando el valor `rowgroup` para el caso de agrupación por filas, y `colgroup` para agrupación por columnas.


<img src="/img/tabla-colgroup.png" alt="Ejemplo de tabla avanzada usando atributos scope, colspan y rowspan" />

<img src="/img/tabla-scope-row.png" alt="Ejemplo de tabla avanzada usando atributo scope" />
