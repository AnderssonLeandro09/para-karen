Esta carpeta está reservada para una copia local de GSAP + ScrollTrigger,
tal como pide la arquitectura del proyecto.

Por defecto, index.html carga GSAP desde cdnjs (rápido, cacheado por CDN,
cero mantenimiento):

  https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
  https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js

Si prefieres servir GSAP localmente (por ejemplo, para no depender de un
CDN externo en Cloudflare Pages):

1. Descarga los dos archivos de arriba y colócalos en esta carpeta como:
   libraries/gsap/gsap.min.js
   libraries/gsap/ScrollTrigger.min.js

2. En index.html, reemplaza las dos etiquetas <script src="https://cdnjs..."> por:
   <script src="libraries/gsap/gsap.min.js"></script>
   <script src="libraries/gsap/ScrollTrigger.min.js"></script>

El sitio funciona igual de bien con cualquiera de las dos opciones.
