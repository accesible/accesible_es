---
id: pdf
title: PDF
slug: /archivo-pdf
image: /img/pdf.svg
description: Crear documentos PDF accesibles
keywords: [pdf accesible, accesibilidad pdf, documentos pdf accesibles]
---

<img src="/img/pdf.svg" alt="" />

> El formato pdf fue creado en 1993 por Adobe Systems, se convirtió en un estándar abierto el 1 de julio de 2008 y publicado por la Organización Internacional de Estandarización (ISO) como [ISO 32000-2](https://www.iso.org/standard/75839.html).

Las pautas para hacer un documento PDF accesible son prácticamente iguales a las de un contenido web, estos son los **puntos más importantes en la accesibilidad de un PDF**:

- **Añade un título al documento** (pestaña descripción). [WCAG-PDF18](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF18)
- **Indica el idioma del documento**, e indica también el idioma en los textos en los que sea diferente al idioma principal, esto se puede hacer mediante etiqueta span. [WCAG-PDF16](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF16) - [WCAG-PDF19](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF19)
- Al igual que para secciones con idiomas distintos, puedes usar span para **añadir acrónimos o abreviaturas**. [WCAG-PDF8](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF8)
- Incluir **texto alternativo a las imágenes y enlaces**. [WCAG-PDF1](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF1) - [WCAG-PDF13](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF13)
- En caso de imágenes decorativas, utiliza la etiqueta (artifact) para que no las anuncien los lectores. [WCAG-PDF4](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF4)
- Al igual que en la web, hay que definir un **marcado semántico correcto**, es decir, definir correctamente los encabezados, tablas, formularios, listas, etc. [WCAG-PDF5](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF5) - [WCAG-PDF6](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF6) - [WCAG-PDF9](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF9)
- Los encabezados deben tener **información relevante**. [WCAG-PDF14](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF14)
- Si se utilizan **formularios en el PDF**, asocia cada label con su campo correspondiente, marca los campos obligatorios e informa en caso de algún error. [WCAG-PDF10](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF10) - [WCAG-PDF12](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF12) - [WCAG-PDF22](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF22)
- El botón de envío de formulario debe ser un submit. [WCAG-PDF15](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF15)
- Revisa que el **orden de lectura y tabulación sea coherente**. [WCAG-PDF3](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF3)
- Convierte **textos escaneados a texto mediante OCR**. [WCAG-PDF7](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF7)
- El documento debe tener marcadores, si lo hemos **estructurado correctamente las cabeceras**, estos se generarán automáticamente. [WCAG-PDF2](https://www.w3.org/TR/WCAG20-TECHS/pdf.html#PDF2)

:::tip Nota
Para una revisión completa de la accesibilidad de un PDF, utiliza un lector de pantalla como por ejemplo [NVDA](https://www.nvaccess.org/)
:::

En la sección de [recursos](recursos#accesibilidad-en-documentos) puedes encontrar herramientas para analizar la accesibilidad en documentos.
