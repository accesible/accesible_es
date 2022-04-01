---
id: multimedia
title: Multimedia
---

![img](/img/multimedia.svg) 


## Video / Audio

- Todos los elementos multimedia, deben contar con un título y/o descripción 
- **Los contenidos multimedia no deben comenzar a reproducirse por defecto**
- En audios, suficiente contraste entre la pista principal y el sonido de fondo.
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

- Si un sonido se reproduce automáticamente, apágalo también automáticamente antes de tres segundos.
- Ofrece un control al usuario en el inicio de la página web para que pueda apagar los sonidos que suenan automáticamente.
- Reproduce los sonidos sólo a petición del usuario.
- Ofrece una opción que permita apagar el sonido de todo el sitio web.