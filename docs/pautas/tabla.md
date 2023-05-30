---
id: tabla
title: Tablas
slug: /tabla
image: /img/tabla.svg
description: Tabla accesible para la web con ejemplos sencillos
keywords: [tablas accesibles, tablas complejas, wai-aria en tabla]
---

<img src="/img/tabla.svg" alt="" />

**Usaremos las tablas siempre que mostremos datos tabulares**, es decir en filas y columnas.

- Debemos **añadir un título** que defina brevemente el contenido de la tabla mediante la etiqueta `caption`, y describir la tabla mediante `aria-describedby`, la etiqueta `<summary>` está **obsoleta en HTML5**.
- Se debe utilizar el atributo `scope` dentro de un `th`, para indicar si está encabezando una columna `<th scope='col'>` o una fila `<th scope='row'>`.
- `scope='colgroup` se usará para encabezados con varias columnas, mientras que `scope='rowgroup'` se usará para en el caso de varias filas.
- **Evita el scroll horizontal**, es preferible que la tabla crezca verticalmente.
- Utiliza `thead`, `tbody` y `tfoot` para marcar las distintas secciones.
- Utiliza atributos `id` y `header` para **asociar celdas de datos con celdas de encabezado**.

Ejemplo de tabla accesible:

```html 
  <h3>Economía de España</h3>

  <p id="ejemplo1" aria-hidden="true">
  En cada fila se muestran los datos de las importaciones (en euros y porcentaje de PIB) por año, desde el 1960 hasta el 2020
  </p>
  <table aria-describedby="ejemplo1">
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


## Atributo scope

El atributo `scope` es exclusivo de la etiqueta `th` y nos servirá para indicar que parte de la tabla estamos encabezando. Este atributo puede tener los valores `col`, `row`, `colgroup`, y `rowgroup`.


<img src="/img/tabla-colgroup.png" alt="" />

<img src="/img/tabla-scope-row.png" alt="" />