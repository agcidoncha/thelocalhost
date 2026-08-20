# Hero — The Localhost

**Última actualización:** 16/08/2026  
**HTML maestro:** `thelocalhost-interactiva-v4-takeover-continuar.html`

## Concepto

El hero funciona como una demostración progresiva:

**automatización → tiempo recuperado → invitación a continuar**

No debe sentirse como un hero genérico de agencia.

---

## Estado inicial

En desktop, antes de pulsar el CTA:

- el hero domina la pantalla;
- está centrado verticalmente;
- `min-height: calc(100svh - 76px)`;
- `display: grid`;
- `align-items: center`;
- `padding: 2.2rem 0`;
- el scroll está bloqueado;
- las secciones posteriores no son accesibles todavía.

Cuando se pulsa el CTA, el hero se compacta mientras permanece oculto:

- clase: `.hero-compact`;
- `min-height: auto`;
- `padding: 1.2rem 0`.

Esto ocurre **antes** de calcular el scroll hacia el siguiente módulo, para evitar una segunda recolocación al llegar arriba.

---

## Tipografía

Títulos del hero:

- **Bebas Neue**
- `font-weight: 400`
- `line-height: .92`
- `letter-spacing: 1px`

La altura del H1 se adapta al texto activo para no dejar huecos innecesarios.

---

# Secuencia de textos

## 1

**Automatizamos el trabajo que no te gusta.**

Duración inicial: **5 segundos**.

Visual asociada: workflow principal.

## 2

**Elige dónde vas a perder el tiempo.**

Duración inicial: **5 segundos**.

Visual asociada: tiempo recuperado.

## 3

**Déjame mostrarte si podemos hacer algo mejor.**

Aparece al terminar la primera vuelta completa del hero, aproximadamente a los **10 segundos**.

Desde ese momento:

- el tercer texto queda fijo;
- los textos dejan de rotar;
- permanece hasta recargar la página;
- las visuales de la derecha pueden continuar alternando.

---

# Visual 1 — Workflow

Workflow visible en la primera parte:

1. **Formulario** — Nuevo lead
2. **Validar datos** — Regla automática
3. **CRM** — Crear / actualizar
4. **WhatsApp** — Confirmación

Condición:

**válido**

Terminal:

- `$ thelocalhost run automations`
- `> Conectando herramientas...`
- `> Sincronizando datos...`
- `> Enviando recordatorios...`
- `> Proceso completado ✓`

Duración de la primera vuelta:

**5 segundos**

El antiguo workflow de citas permanece en el HTML como escena, pero **no forma parte del ciclo principal actual**.

---

# Visual 2 — Tiempo recuperado

Concepto:

**automatizamos trabajo → recuperas tiempo → tú decides dónde gastarlo**

Centro:

**+2h 17m**

**tiempo recuperado**

Opciones:

- Voy al cine
- Voy a cenar
- Entreno
- Quedo con amigos
- Descanso
- No hago nada

Texto inferior:

**Tú decides dónde gastarlo.**

Debe permanecer en la base inferior de la visual.

Duración de la primera vuelta:

**5 segundos**

---

# CTA progresivo

El CTA se construye en su posición natural dentro del hero.

No es sticky.

Durante los primeros **10 segundos**:

- empieza pequeño;
- muestra el porcentaje;
- progresa de `0%` a `100%`;
- crece horizontalmente;
- queda sincronizado con los dos bloques de 5 segundos.

Tipografía del porcentaje:

- Bebas Neue;
- grande;
- blanca.

Al llegar al 100%:

- deja de mostrar el porcentaje;
- aparece el texto **Adelante**;
- aparece un icono de cohete;
- queda activo.

Estilo final:

- fondo `#ff5f00`;
- ancho aproximado `230px`;
- altura aproximada `60px`;
- `border-radius: 9px`;
- texto Bebas Neue;
- animación flotante suave.

---

# Secuencia al pulsar “Adelante”

1. Se bloquea un segundo clic.
2. Desaparece visualmente el contenido del hero.
3. Aparece enorme:
   **¡YEAHHHH!**
4. Dura aproximadamente **1 segundo**.
5. El hero sigue oculto.
6. Se añade `.hero-compact`.
7. Se habilita el scroll.
8. `#necesitas` se prepara todavía invisible.
9. Se calcula el destino con el hero ya compactado.
10. La página sube durante aproximadamente `1050 ms`.
11. Al llegar, `#necesitas` aparece gradualmente.
12. No se realiza una segunda compensación/recolocación.
13. Se añade `hero-first-unlocked`.
14. El hero vuelve a estar disponible fuera de pantalla.
15. También se hacen visibles `#proceso` y `#experiencia`.

El footer continúa oculto.

---

# Regla importante

No volver a introducir una segunda corrección de scroll al terminar la llegada de `#necesitas`.

Ese comportamiento producía el efecto visual de:

**“llega arriba → vuelve a recolocarse → parece que lo hace dos veces”**

La versión actual evita ese segundo golpe.

---

# Decisiones descartadas

- foto genérica;
- nodos abstractos sin significado;
- CTA sticky en bottom;
- barra de progreso fuera de la posición del botón;
- dos workflows visibles antes del bloque de tiempo recuperado;
- segundo workflow de citas dentro del ciclo actual;
- tercera frase rotando indefinidamente;
- segunda recolocación del scroll tras llegar al siguiente módulo.

---

# Principio de trabajo

No tocar el hero completo para resolver un detalle.

Cada modificación debe afectar únicamente:

- texto;
- timing;
- visual concreta;
- CTA;
- desbloqueo;

según lo solicitado.
