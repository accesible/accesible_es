---
id: tabla
title: Tablas
---

![img](../static/img/tabla.svg) 


Usaremos las tablas siempre que mostremos datos tabulares, es decir en filas y columnas.

- Añadir un título que defina brevemente el contenido de la tabla mediante la etiqueta `caption`, o en su defecto usar `aria-describedby`.
- Se debe utilizar el atributo `scope` dentro de un `th`, para indicar si está encabezando una columna `<th scope='col'>` o una fila `<th scope='row'>`.
- Intentar evitar el scroll horizontal, es preferible que la tabla crezca verticalmente.
- No es obligatorio usar `thead`, `tbody` y `tfoot` para marcar las distintas secciones, pero es útil a nivel de organización o dar estilos.


```html 
    <table>
    <caption>Propiedades nutritivas de los frutos secos</caption>
    ...
```
