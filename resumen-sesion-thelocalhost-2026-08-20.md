# Resumen de sesión — The Localhost (20/08/2026)

Para pegar en el Project de Claude, como continuación del contexto ya existente (kick-off, handoff, migracion-astro.md).

---

## 1. Decisión: migrar a Astro

Se confirma que migrar el prototipo HTML actual (desktop.html 262KB, mobile.html 71KB) a Astro es factible y recomendable, siguiendo el plan ya documentado en `migracion-astro.md`.

**Estimación de tiempo** (haciéndolo Claude, con revisión de Ángel):
- 3 días si todo va fluido.
- 5 días si aparecen desajustes en la fase de verificación visual/comportamiento.
- La parte más delicada NO es escribir el código: es sustituir el truco de `fusion.html` (iframe + base64 + srcdoc) por componentes reales que cambien según el viewport — todo lo demás es reorganizar código ya validado.

**Plan de despliegue seguro:**
El HTML actual sigue publicado en `thelocalhost.es` sin tocarse. La versión Astro se desarrolla en paralelo (local/entorno de pruebas). Solo se sustituye cuando esté 100% verificada — cero tiempo de caída ni versión a medias online.

---

## 2. Filosofía del producto (reafirmada, no tocar)

La landing es intencionadamente **un juego, no un texto de ventas**:
- Enseña un poco → pregunta si quieres ver más → si dices que sí, sigue; si no, se acaba ahí.
- Nada de "rollo" ni de leer párrafos largos — la gente hoy escanea, no lee.
- El diagnóstico funciona como test de opción múltiple (no formulario de texto libre) porque así sí lo completa la gente.
- Esta filosofía es la propuesta de valor real: 20+ años de criterio de diseño de Ángel ejecutados rápido con ayuda de Claude.

**Regla dura para la migración:** replicar fielmente el comportamiento actual antes de plantear ninguna mejora. No rediseñar durante la migración.

---

## 3. Idea nueva a valorar: bypass del cuestionario

Actualmente el diagnóstico solo aparece tras completar 3 pasos del recorrido (hero → adelante → objetivos → método).

Propuesta: añadir un acceso directo discreto (botón/enlace tipo "ir directo al test") para visitantes que ya llegan decididos — por ejemplo, leads a los que Ángel les manda el link directamente en prospección (WhatsApp/email), que no necesitan el "calentamiento" del recorrido completo.

- El recorrido completo se mantiene igual para quien llega por Google/redes sin contexto previo.
- El bypass sería una segunda entrada, no un reemplazo del flujo actual.
- Pendiente de decidir: dónde colocarlo, cómo de discreto debe ser, y si se activa automáticamente en los links que Ángel comparte directamente con prospectos.

**Estado:** idea a validar, no implementada. Decidir si se prueba primero en el HTML actual o se incluye directamente en la versión Astro.

---

## 4. Cómo validar decisiones de diseño (sin tráfico todavía)

Al no tener volumen de tráfico para A/B testing real, se acuerda validar así:
1. Test con 5-8 personas no técnicas del público objetivo real (dueños de clínicas, gimnasios, fisios) — observarlas usar la web en silencio, sin explicarles nada, y ver dónde dudan o abandonan.
2. Herramientas gratuitas de grabación de sesiones (Hotjar / Microsoft Clarity) para ver comportamiento real con pocas visitas.
3. Medir en prospección real: tasa de gente que completa el diagnóstico vs la que abandona, con leads reales del foco actual (salud, bienestar, citas, servicios recurrentes).

Pendiente: montar un sistema mínimo de medición (contador simple o Clarity) antes o en paralelo a la migración.

---

## 5. Siguiente paso propuesto

Empezar la migración a Astro por la fase 1 (estructura base del proyecto: layout, componentes, tokens de estilo), siguiendo la arquitectura ya definida en `migracion-astro.md`.
