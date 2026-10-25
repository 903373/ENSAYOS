# Control de Ensayos · Sección de Instrumentos CJH 2027

App web para pasar lista escaneando QR con el móvil. Datos en Google Sheets. Funciona sin cobertura (guarda en el móvil y sube al volver la red).

## Montaje (15 min, una sola vez)

**1. Hoja de cálculo**
1. Crea un Google Sheets nuevo → *Extensiones › Apps Script*.
2. Borra lo que haya, pega `apps-script/Code.gs` y **cambia el `PIN`** de la línea 6. Guarda.
3. Vuelve a la hoja y recarga: aparece el menú **🎺 Cofradía** → *Preparar hojas* (acepta los permisos).
4. En la pestaña **Miembros** pon a la gente (borra los ejemplos). Deja el ID vacío y usa *🎺 Cofradía › Generar IDs*.

**2. Publicar el script**
Apps Script → *Implementar › Nueva implementación › Aplicación web*
- Ejecutar como: **Yo** · Quién tiene acceso: **Cualquier usuario**
- Copia la URL que acaba en `/exec`.

> Si cambias el código después: *Implementar › Gestionar implementaciones › ✏️ › Nueva versión* (así la URL no cambia).

**3. Publicar la app (GitHub Pages)**
Sube todo menos `apps-script/` al repo → *Settings › Pages › Branch: main / root*. Tendrás `https://TU-USUARIO.github.io/ENSAYOS-CJH-2027/`.

**4. En cada móvil**
Abre la URL → pega la URL `/exec`, el PIN y tu nombre → *Añadir a pantalla de inicio*.

**5. QR**
Abre `…/qr.html` en el ordenador → *Cargar desde la hoja* → Imprimir (9 tarjetas por A4, tamaño carta). Plastifica.

## Uso en el ensayo
- El nombre del ensayo se pone solo (`Ensayo dd/mm/aaaa`). Si hay dos móviles validando, que usen **el mismo nombre**.
- Verde = registrado · Naranja = ya estaba · Rojo = QR desconocido.
- Pestaña **Faltan** para ver quién no ha venido. *Marcar a mano* si alguien olvida el QR.

## Qué verás en la hoja
- **Resumen**: asistencias y % de cada uno con colores (se actualiza solo).
- **Asistencia**: registro con fecha, hora y quién validó.
- **Matriz**: tabla persona × ensayo con ✓ (*🎺 Cofradía › Actualizar matriz*).

Dar de baja a alguien: desmarca *Activo* en Miembros (su historial se conserva).
