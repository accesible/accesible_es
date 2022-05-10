---
id: multimedia
title: Multimedia
image: /img/multimedia.svg
description: Documentación para añadir contenido multimedia accesible en tu sitio web
keywords: [video y audio accesible, reproductor accesible, wai-aria multimedia]
---

![img](/img/multimedia.svg) 


## Video / Audio

- **No reproduzcas automáticamente** contenido multimedia (Puedes añadir una opción de reproducción automática, pero debe ser activada por el usuario)
- Todos los elementos multimedia, deben contar con un título y/o descripción.
- En el audio, debe haber suficiente contraste entre la pista principal y el sonido de fondo.
- Añade una **transcripción y subtítulos**, con esto además mejoramos el SEO.
- Los subtítulos **deben tener un tamaño, duración y contraste adecuado**, y durar lo suficiente para su lectura.
- Todo los **controles deben ser accesibles mediante teclado.**
- Evita los parpadeos, no más de tres flashes en un período de 1 segundo.
- Añade una audiodescripción en varios idiomas usando SMIL.
- Ofrece una audiodescripción para medios sincronizados emitidos en directo.
  
### Vídeo 

```html
<video class="video" poster="portada-video.jpg" controls title="Mi portada">
    <source  src="your-video.m4v" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
    <source  src="your-video.ogg" type='application/ogg' />
    <source  src="your-video.webm" type='video/webm' />
    <track src="your-video-transcript.vtt" label="English Captions" kind="subtitles" srclang="en-us" default />
</video>
```

### Audio

- No reproduzcas audios automáticamente, si necesitas algún indicativo sonoro automático, este no debe sonar más de tres segundos.
- Ofrece un control al usuario en el inicio de la página web para que pueda desactivar los sonidos que suenan automáticamente.
- Reproduce los sonidos sólo a petición del usuario.
- Ofrece una opción que permita apagar el sonido de todo el sitio web.