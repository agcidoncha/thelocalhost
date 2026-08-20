# Kick-off — The Localhost

**Última actualización:** 16/08/2026  
**Dominio:** thelocalhost.es  
**Hosting:** disponible  
**HTML maestro actual:** `thelocalhost-interactiva-v4-takeover-continuar.html`

---

# 1. Posicionamiento

The Localhost trabaja con:

- automatización;
- integraciones;
- web;
- UX/UI;
- SEO;
- datos;
- IA cuando aporta valor.

No se posiciona como una agencia de IA.

Idea central:

**automatizamos el trabajo que una empresa no debería estar haciendo a mano.**

La tecnología se elige después de entender el problema.

---

# 2. Filosofía de comunicación

Principio:

**Menos contar. Más demostrar. Y hacer hablar al cliente.**

La landing debe demostrar:

- procesos;
- automatización;
- tiempo recuperado;
- objetivos;
- método.

No vender herramientas por nombre.

---

# 3. Objetivo comercial

Prioridad inmediata:

- tener una landing sólida;
- apoyar la prospección;
- generar credibilidad;
- conseguir conversaciones comerciales.

No construir todavía una web corporativa innecesariamente grande.

---

# 4. Prospección inicial

Primer foco:

- salud;
- bienestar;
- clínicas;
- fisioterapia;
- estética;
- gimnasios boutique;
- negocios con citas;
- servicios recurrentes.

Problemas detectables:

- citas manuales;
- WhatsApp manual;
- seguimiento;
- recordatorios;
- cancelaciones;
- listas de espera;
- leads;
- CRM;
- herramientas desconectadas.

---

# 5. Arquitectura actual de la landing

Flujo:

**Hero → Adelante → ¡YEAHHHH! → Objetivos → Método → Cierre**

La página se desbloquea progresivamente.

---

# 6. Hero actual

## Primera fase

Texto:

**Automatizamos el trabajo que no te gusta.**

Visual:

workflow.

Duración:

**5 segundos**

## Segunda fase

Texto:

**Elige dónde vas a perder el tiempo.**

Visual:

tiempo recuperado.

Duración:

**5 segundos**

## Tercera fase

Texto fijo:

**Déjame mostrarte si podemos hacer algo mejor.**

Aparece al completar los primeros **10 segundos**.

Desde ese momento el texto deja de rotar.

---

# 7. CTA del hero

Se construye mediante porcentaje:

`0% → 100%`

Duración:

**10 segundos**

El progreso crece desde la posición original del botón.

Al completar:

**Adelante** + icono de cohete.

Estilo:

- naranja `#ff5f00`;
- Bebas Neue;
- `border-radius: 9px`.

---

# 8. Desbloqueo al pulsar

1. desaparece el contenido del hero;
2. aparece **¡YEAHHHH!**;
3. dura aproximadamente 1 segundo;
4. el hero se compacta mientras sigue oculto;
5. se habilita el scroll;
6. sube `#necesitas`;
7. aparece una sola vez;
8. no hay segunda recolocación;
9. se hacen visibles `#proceso` y `#experiencia`;
10. el footer sigue oculto.

---

# 9. Objetivos

Sección:

**¿Qué necesitas lograr en tu negocio?**

Seis opciones:

- Ahorrar tiempo
- Conseguir clientes
- Usar IA
- Mejorar mi web
- Conectar sistemas
- Escalar y medir

Cuando una se abre:

- ocupa el tablero;
- termina de expandirse;
- se centra con `scrollIntoView(... block:'center')`;
- queda como foco principal.

Si el usuario continúa bajando:

- cuando el 50% de la tarjeta desaparece por arriba;
- hace fade durante aproximadamente 340 ms;
- se cierra;
- vuelven las seis opciones.

---

# 10. Método

Bloque:

**Nuestro método claro en 5 pasos**

1. Descubrimiento
2. Estrategia
3. Desarrollo
4. Lanzamiento
5. Optimización

Diseño:

pipeline tecnológico animado.

---

# 11. Cierre

Claim actual:

**Hablemos de tu proyecto**

# Cuéntame qué quieres mejorar.

El diagnóstico IA futuro está documentado aparte.

---

# 12. Diagnóstico IA futuro

Idea:

- 3 preguntas;
- webhook;
- n8n;
- modelo IA;
- respuesta corta;
- 2 oportunidades;
- recomendación de primer paso;
- CTA comercial.

No es un chatbot abierto.

---

# 13. Stack futuro posible

El HTML actual es prototipo funcional.

Posible migración posterior:

- Astro;
- CSS variables;
- Vanilla JS;
- n8n;
- API IA.

No migrar sin petición explícita.

---

# 14. Estado actual

- Dominio: disponible
- Hosting: disponible
- Prospección inicial: realizada
- Landing desktop: avanzada
- Hero: muy avanzado
- Objetivos: implementados
- Método: implementado
- CTA final: presente
- Diagnóstico IA: pendiente
- Mobile: pendiente de revisión dedicada
- Footer progresivo: todavía oculto

---

# 15. Regla absoluta de trabajo

**No tocar nada que no se haya pedido.**

Proceso:

1. identificar exactamente el cambio;
2. modificar solo ese punto;
3. preservar todo lo validado;
4. evitar pruebas que obliguen a reconstruir lo que ya funciona;
5. documentar decisiones importantes.
