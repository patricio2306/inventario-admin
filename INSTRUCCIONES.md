# Inventario — Administración Interna
## Cómo subir a internet (5 minutos, gratis)

---

### Paso 1 — Crear cuenta en Netlify
1. Ve a **https://netlify.com**
2. Haz clic en **Sign up** → entra con Google o con tu correo
3. Confirma el correo si te lo pide

---

### Paso 2 — Subir la carpeta
1. Una vez dentro de Netlify, verás un panel con un recuadro que dice:
   **"Drag and drop your site output folder here"**
2. Abre el Explorador de archivos de tu PC
3. Busca la carpeta **`inventario`** (esta carpeta)
4. **Arrastra la carpeta completa** y suéltala en ese recuadro de Netlify

¡Listo! Netlify te dará una URL automática tipo:
`https://nombre-random-123.netlify.app`

---

### Paso 3 — Activar la base de datos (Netlify Blobs)
Esto permite que todos vean el mismo inventario en tiempo real.

1. En Netlify, entra a tu sitio
2. Ve a **Site configuration → Environment variables**
3. No necesitas agregar nada — Netlify Blobs viene activado automáticamente

---

### Paso 4 (opcional) — Cambiar la URL
Si quieres una URL más linda:
1. Ve a **Domain management → Options → Edit site name**
2. Escribe algo como `inventario-adminterna`
3. Tu URL queda: `https://inventario-adminterna.netlify.app`

---

### Compartir con el equipo
Solo envíales la URL. No necesitan instalar nada ni crear cuenta.
Todos pueden ver y editar el inventario al mismo tiempo.

---

### ¿Problemas?
Si la función de guardar no funciona al primer uso, recarga la página.
Los datos se guardan automáticamente cada vez que haces un cambio.
