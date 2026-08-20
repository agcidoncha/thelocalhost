# Sección — ¿Qué necesitas lograr en tu negocio?

**Última actualización:** 16/08/2026  
**HTML maestro:** `thelocalhost-interactiva-v4-takeover-continuar.html`

## Objetivo

Esta sección sustituye una lista tradicional de servicios por una selección de objetivos.

Debe hacer que el usuario piense primero en **qué quiere conseguir**, no en qué tecnología comprar.

---

# Seis cajas

1. **Ahorrar tiempo**
2. **Conseguir clientes**
3. **Usar IA**
4. **Mejorar mi web**
5. **Conectar sistemas**
6. **Escalar y medir**

En estado cerrado:

- se muestran las seis;
- pueden abrirse;
- pueden reordenarse arrastrando desde `···`.

---

# Estado abierto

Al abrir una caja:

- desaparecen las otras cinco;
- la elegida ocupa todo el tablero;
- aparece **Volver a objetivos ×**;
- se reproduce su secuencia visual;
- después de terminar de expandirse, la propia tarjeta se recoloca mediante:

`scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })`

El objetivo es que la caja abierta domine el centro visible de la pantalla.

Durante esa recolocación automática:

- `cardAutoCentering = true`;
- la lógica de autocierre queda desactivada;
- aproximadamente 750 ms después vuelve a habilitarse.

---

# Cierre de una caja

Puede cerrarse por:

- **Volver a objetivos ×**;
- clic fuera de la tarjeta;
- desplazamiento hacia abajo hasta que desaparezca suficiente por arriba.

## Regla geométrica actual

No se cierra por el simple evento `scroll`.

Se calcula:

`hiddenAbove = max(0, -rect.top)`

La caja se cierra cuando:

**la parte desaparecida por arriba es igual o superior al 50% de su propia altura.**

Es decir:

`hiddenAbove >= rect.height / 2`

Esto evita falsos cierres durante el centrado automático.

---

# Fade de salida

Cuando alcanza ese 50%:

1. se añade `.is-fading-out`;
2. la tarjeta hace fade;
3. duración aproximada: **340 ms**;
4. hay una pequeña reducción de escala;
5. después se ejecuta `closeBoard()`;
6. reaparecen las seis cajas.

No debe desaparecer de golpe.

---

# Títulos

Los títulos grandes de las cajas abiertas:

- usan Bebas Neue;
- deben mantenerse en una sola línea cuando sea posible;
- `white-space: nowrap`;
- no deben llevar un `max-width` que los rompa innecesariamente.

Objetivo:

**reducir altura total y scroll.**

---

# Módulos interiores

Diseño aprobado:

- oscuro;
- tecnológico;
- `AUTOMATIZABLE`;
- numeración tenue;
- texto blanco;
- glow sutil;
- línea de acento.

No convertirlos en tarjetas blancas.

---

# Contenido por objetivo

## Ahorrar tiempo

- Citas y recordatorios
- Seguimiento de leads
- Documentos y emails
- Facturas y reportes

## Conseguir clientes

- Landing pages
- CRM y lead scoring
- Seguimiento automático
- Reseñas y fidelización

## Usar IA

- Agentes conectados
- Clasificación de datos
- Documentos y resúmenes
- Asistencia comercial

## Mejorar mi web

- UX/UI
- Desarrollo responsive
- Landing pages
- Rendimiento y SEO

## Conectar sistemas

- CRM y ERP
- Airtable y Sheets
- WooCommerce
- APIs y automatización

## Escalar y medir

- Estrategia SEO
- Dashboards
- KPIs útiles
- Optimización continua

---

# Visuales internas

Cada caja abierta tiene una secuencia vertical de cuatro pasos.

La secuencia se reproduce una vez al abrir.

El estado final debe quedarse estable.

Color verde final:

`#12ff87`

Las etiquetas de las visuales van en la **base inferior**.

Ejemplos:

- CAPTACIÓN
- IA EN ACCIÓN
- WEB QUE TRABAJA
- SISTEMAS CONECTADOS
- MEDIR PARA DECIDIR

---

# Integración con el desbloqueo

Antes de pulsar **Adelante**:

- `#necesitas` existe en layout;
- está invisible;
- no es accesible mediante scroll en desktop.

Después de pulsar:

- aparece tras la secuencia `¡YEAHHHH!`;
- queda navegable;
- `#proceso` y `#experiencia` también quedan visibles.

---

# Regla UX

Una caja abierta debe sentirse como un foco temporal:

**abrir → dominar el centro → leer/interactuar → seguir bajando → desaparecer con fade → volver a las seis opciones.**
