# The Localhost — Handoff completo / Estado actual

**Fecha:** 19 de agosto de 2026  
**HTML maestro actual:** `ultima(40).html`  
**Proyecto:** `thelocalhost.es`

---

## 1. Concepto general de la landing

La landing de The Localhost no se plantea como una página tradicional con muchas secciones visibles desde el principio.

La experiencia actual funciona como un **paseo guiado / descubrimiento progresivo**:

**Hero**  
→ **¿Qué necesitas lograr en tu negocio?**  
→ **Nuestro método claro en 5 pasos**  
→ **Cuéntame qué quieres mejorar.**  
→ **Diagnóstico guiado sin IA**  
→ **Resultado personalizado**  
→ **¿Cómo prefieres hablar?**  
→ **WhatsApp / Email / Reservar una llamada**

La idea central es:

> **Menos contar. Más demostrar. Y hacer hablar al cliente.**

La propia landing debe demostrar lo que vende The Localhost: automatización, lógica, integración, UX, procesos y criterio.

---

# 2. Posicionamiento de The Localhost

The Localhost no se plantea como una “agencia de IA”.

La propuesta es más amplia:

- Automatización.
- Integraciones.
- Web.
- UX/UI.
- SEO.
- Datos.
- IA cuando tiene sentido.
- Procesos sin IA cuando son suficientes.

Frase central de posicionamiento:

> **Automatizamos el trabajo que una empresa no debería estar haciendo a mano.**

---

# 3. Hero

## Mensajes actuales

El hero trabaja con una secuencia inicial de aproximadamente 8 segundos:

1. **Automatizamos el trabajo que no te gusta.**
2. **Elige dónde vas a perder el tiempo.**
3. **Déjame mostrarte si podemos hacer algo mejor.**

La tercera frase queda fija después del primer ciclo.

## Visual de tiempo recuperado

El tiempo recuperado ya no muestra siempre la misma cifra.

Cada vez que aparece esa escena se genera un tiempo aleatorio entre:

- **1 h 05 min**
- **4 h 30 min**

Ejemplos:

- `+1h 42m`
- `+2h 17m`
- `+3h 51m`

Se evita repetir exactamente el mismo valor de forma consecutiva.

## Barra inferior del hero

Desde el primer momento existe una barra fija inferior a ancho completo.

Durante los primeros 8 segundos:

- se llena progresivamente en naranja;
- muestra el porcentaje;
- al llegar al 100 % se convierte en CTA.

Texto final:

> **¿Qué necesitas lograr en tu negocio?**

## Al pulsar el CTA

El comportamiento actual es:

1. La barra desaparece inmediatamente.
2. Desaparece el contenido del hero.
3. Aparece la transición:
   **EMPEZAMOS**
4. El hero se compacta.
5. Se habilita el scroll.
6. Se revela la sección de objetivos.
7. Se hace un único scroll suave.
8. La sección llega perfectamente centrada.

No debe añadirse una segunda corrección de scroll después de la llegada.

---

# 4. Sección “¿Qué necesitas lograr en tu negocio?”

## Título

> **¿Qué necesitas lograr en tu negocio?**

## Texto

> **Elige qué quieres mejorar y te mostramos por dónde empezar.**

## Las seis opciones

1. **Ahorrar tiempo**
2. **Conseguir clientes**
3. **Usar IA**
4. **Mejorar mi web**
5. **Conectar sistemas**
6. **Escalar y medir**

## Comportamiento

En estado cerrado:

- título;
- seis cajas;
- pista inferior;

deben quedar centrados en la zona visible del navegador.

Cuando se abre una caja:

- desaparecen las otras cinco;
- la seleccionada ocupa el tablero;
- aparece “Volver a objetivos ×”;
- la caja abierta se centra;
- aparecen flechas laterales para navegar entre las seis;
- puede cerrarse por volver, clic exterior o al desaparecer aproximadamente el 50 % por arriba;
- el cierre utiliza fade.

### Regla importante

La barra para continuar **NO aparece al abrir la primera caja**.

Aparece cuando el usuario:

1. abre por primera vez una caja;
2. la explora;
3. la cierra.

Entonces se desbloquea:

> **Nuestro método claro en 5 pasos →**

Una vez desbloqueada, la barra permanece disponible aunque el usuario siga explorando otras cajas.

---

# 5. Contenido visual de las seis cajas

Se revisaron los ejemplos internos para evitar que distintas cajas repitiesen los mismos títulos, textos o estados.

Ahora existen:

- **24 títulos visuales únicos**
- **24 textos explicativos únicos**
- **24 estados únicos**

Cada caja cuenta un flujo diferente y coherente con su objetivo.

---

## 5.1 Ahorrar tiempo

Flujo:

1. **Nueva cita**  
   El cliente reserva  
   Estado: **Entrada**

2. **Agenda sincronizada**  
   El hueco queda actualizado  
   Estado: **Sincronizado**

3. **Confirmación enviada**  
   El cliente recibe los detalles  
   Estado: **Confirmado**

4. **Recordatorio programado**  
   Sale automáticamente a tiempo  
   Estado: **Programado**

---

## 5.2 Conseguir clientes

1. **Visita interesada**  
   Alguien deja sus datos  
   Estado: **Captado**

2. **Lead cualificado**  
   Se prioriza por interés  
   Estado: **Cualificado**

3. **Seguimiento activo**  
   Recibe el mensaje adecuado  
   Estado: **En curso**

4. **Oportunidad ganada**  
   El interés se convierte en cliente  
   Estado: **Cerrado**

---

## 5.3 Usar IA

1. **Petición recibida**  
   Llega una consulta con contexto  
   Estado: **Recibida**

2. **IA interpreta**  
   Detecta intención y necesidad  
   Estado: **Comprende**

3. **Conocimiento consultado**  
   Busca la información relevante  
   Estado: **Contextualiza**

4. **Respuesta preparada**  
   Propone la siguiente acción  
   Estado: **Asiste**

---

## 5.4 Mejorar mi web

1. **Mensaje claro**  
   Se entiende la propuesta al entrar  
   Estado: **Comprensible**

2. **Carga rápida**  
   La página responde sin esperar  
   Estado: **Ágil**

3. **Estructura SEO**  
   Google encuentra y entiende el contenido  
   Estado: **Visible**

4. **CTA efectivo**  
   La visita sabe cómo continuar  
   Estado: **Convierte**

---

## 5.5 Conectar sistemas

1. **Pedido creado**  
   La tienda genera el evento  
   Estado: **Dispara**

2. **Stock ajustado**  
   Inventario recibe el cambio  
   Estado: **Sincroniza**

3. **Factura generada**  
   Administración recibe los datos  
   Estado: **Genera**

4. **Equipo avisado**  
   La información llega donde toca  
   Estado: **Notifica**

---

## 5.6 Escalar y medir

1. **Datos reunidos**  
   Tráfico, ventas y operaciones juntos  
   Estado: **Observa**

2. **KPI comparado**  
   El rendimiento se contrasta  
   Estado: **Compara**

3. **Tendencia detectada**  
   Se identifica qué está cambiando  
   Estado: **Detecta**

4. **Decisión priorizada**  
   Sabemos dónde actuar primero  
   Estado: **Optimiza**

---

# 6. Recentrado de las seis cajas

Después de cerrar la primera caja y aparecer la barra inferior, se detectó que la sección cerrada podía perder su centro visual.

La solución actual:

- calcula el área realmente visible entre navegación superior y barra inferior;
- toma como contenido real desde el título hasta la pista inferior;
- realiza un único recentrado suave;
- evita reposicionamientos agresivos frame a frame.

Este comportamiento está validado y **no debe romperse**.

---

# 7. Nuestro método claro en 5 pasos

## Encabezado

Eyebrow:

> **Así trabajamos**

Título:

> **Nuestro método claro en 5 pasos**

Texto:

> **Un proceso simple, realista y sin humo: entendemos tu negocio, proponemos con criterio y ejecutamos con foco en resultados.**

## Pasos

### 01 — Descubrimiento
Entendemos tu negocio, objetivos y puntos de mejora.

### 02 — Estrategia
Diseñamos la solución adecuada y el plan de implementación.

### 03 — Desarrollo
Implementamos, integramos y probamos todo a fondo.

### 04 — Lanzamiento
Puesta en marcha con acompañamiento y formación.

### 05 — Optimización
Medimos resultados y optimizamos de forma continua.

El paso 05 mantiene el tratamiento verde.

## Diseño

- Pipeline horizontal en desktop.
- Vertical en móvil.
- Activación progresiva.
- La sección entra centrada cuando se desbloquea.

---

# 8. Transición del método al diagnóstico

Cuando el método termina de animarse aparece una nueva barra inferior:

> **Cuéntame qué quieres mejorar. →**

Al pulsarla se utiliza una solución específica para evitar saltos de layout:

1. El diagnóstico entra en el layout de forma invisible y reserva su altura.
2. El método se compacta.
3. Se compensa inmediatamente el desplazamiento que produciría el cambio de altura.
4. Se revela el diagnóstico.
5. Se realiza un único scroll suave hacia él.

Principio importante:

> **Reservar el siguiente capítulo invisiblemente → compactar el actual → revelar → hacer un único scroll.**

No volver a usar compactación tardía al hacer wheel/touch/key porque generaba un salto visual.

---

# 9. Diagnóstico guiado

## Decisión de arquitectura

Se descartó por ahora el diagnóstico basado en un agente de IA.

El sistema actual es:

> **Diagnóstico guiado sin IA, basado en preguntas + lógica + reglas.**

Esto evita:

- consumo de tokens;
- coste innecesario;
- respuestas impredecibles;
- complejidad antes de validar el recorrido.

La IA puede añadirse más adelante como una capa adicional si realmente aporta valor.

---

# 10. Preguntas del diagnóstico

## Pregunta 1 — ¿Qué quieres mejorar?

Selección múltiple:

- Captar clientes
- Ahorrar tiempo
- Responder más rápido
- Organizar mejor
- Automatizar tareas repetitivas

---

## Pregunta 2 — ¿En qué parte del trabajo lo notas?

Selección múltiple:

- Email
- WhatsApp
- Web/formularios
- Reservas/citas
- Facturación
- CRM/seguimiento
- Redes
- Otro

**Otro** funciona como opción exclusiva.

---

## Pregunta 3 — ¿Qué pasa hoy con ese trabajo?

Selección múltiple:

- Lo gestiono manualmente
- Apunto/copio datos en Excel
- Paso información entre varias herramientas
- Ya tengo una automatización, pero falla

Si se selecciona que ya existe una automatización pero falla, el resultado prioriza revisión / auditoría / reparación sobre crear algo nuevo desde cero.

---

## Pregunta 4 — ¿Cuánto te afecta este proceso?

Selección única.

Se trabaja con niveles internos equivalentes a:

- bajo
- medio
- alto
- crítico

---

# 11. Lógica del diagnóstico

El diagnóstico no concatena frases sin sentido.

La lógica:

1. recoge selecciones;
2. detecta combinaciones;
3. prioriza;
4. resume;
5. propone como máximo **2 oportunidades principales**.

El resultado debe parecer coherente con lo que la persona ha respondido.

---

# 12. Reposicionamiento entre preguntas

Se solucionó un problema especialmente visible en la segunda pregunta, que puede contener muchas opciones.

Al cambiar de pregunta:

- se esperan dos frames;
- se calcula el viewport real disponible;
- se tiene en cuenta la navegación superior;
- se deja margen inferior;
- si el bloque cabe, se centra;
- si no cabe, se prioriza que la parte inferior quede visible.

No se reposiciona la página cada vez que el usuario marca una opción, para evitar jitter.

---

# 13. Modal de resultado

Después de responder la cuarta pregunta se abre un modal grande, casi a pantalla completa.

Puede cerrarse mediante:

- X;
- tecla ESC;
- backdrop.

Si se cierra:

- vuelve a la última pregunta;
- conserva todas las respuestas.

## Estructura

### TU DIAGNÓSTICO

Headline actual:

> **Hay una oportunidad clara de mejora.**

Este headline se redujo para que no aparezca exageradamente grande y pueda mantenerse en una sola línea.

Después aparecen como máximo dos oportunidades.

Cada oportunidad utiliza:

- **Ahora**
- **Qué haríamos**
- **Qué buscamos**

Después:

### Por dónde empezaría

Resumen final.

CTA:

> **Quiero que estudiéis mi caso →**

---

# 14. Contacto final

Se decidió no añadir otro formulario después del diagnóstico.

Al pulsar:

> **Quiero que estudiéis mi caso →**

el modal de resultado se transforma suavemente en un panel más compacto.

## Contenido

Kicker:

> **Seguimos**

Título:

> **¿Cómo prefieres hablar?**

Opciones actuales:

- **WhatsApp**
- **Email**
- **Reservar una llamada**

Se eliminaron los iconos de estas tres opciones.  
Actualmente aparecen únicamente los textos.

---

# 15. Email de contacto correcto

El email definitivo utilizado actualmente es:

> **angel@thelocalhost.es**

Se sustituyó el antiguo `hola@thelocalhost.es`.

---

# 16. Mensaje preparado para contacto

El contexto del diagnóstico puede viajar ya estructurado.

Formato actual:

```text
Hola, he hecho el diagnóstico de The Localhost y quiero que estudiéis mi caso.

Quiero mejorar: ...
Dónde ocurre: ...
Ahora ocurre: ...
Impacto: ...

Me gustaría que lo revisáramos con más contexto.
```

Se cambió:

> `Lo noto en:`

por:

> **`Dónde ocurre:`**

porque resulta más claro.

Este mensaje está pensado para que llegue a The Localhost, por lo que se acepta que sea estructurado y directo: interesa poder entender rápidamente el contexto del lead.

---

# 17. WhatsApp

La opción WhatsApp genera el mensaje con el contexto del diagnóstico.

Actualmente se utiliza un enlace `wa.me` sin número comercial específico porque todavía no se ha proporcionado un número definitivo.

**No inventar un número.**

Cuando exista:

```text
https://wa.me/NUMERO?text=...
```

---

# 18. Email

La opción Email abre un correo preparado a:

> **angel@thelocalhost.es**

Asunto:

> **Quiero que estudiéis mi caso**

Cuerpo:

- incluye el diagnóstico;
- mantiene el contexto estructurado.

---

# 19. Reservar una llamada

Se añadió una tercera vía:

> **Reservar una llamada**

El texto se ajustó para que aparezca en **una sola línea**.

Actualmente todavía **NO existe una reserva real de agenda**.

El botón usa provisionalmente email:

Destinatario:

> **angel@thelocalhost.es**

Asunto:

> **Quiero reservar una llamada**

Añade el contexto del diagnóstico y:

> **Prefiero comentarlo en una llamada. ¿Qué disponibilidad tienes?**

Esto es temporal.

---

# 20. Reserva real de llamada — siguiente evolución

En el futuro la opción puede conectarse a:

- Google Calendar
- Calendly
- Cal.com
- solución propia

Flujo deseado:

1. Usuario pulsa “Reservar una llamada”.
2. Ve horarios disponibles.
3. Elige fecha y hora.
4. Introduce nombre + email.
5. Confirma.
6. Se crea la cita.
7. The Localhost recibe la reserva.
8. El cliente recibe confirmación.
9. Se pueden enviar recordatorios automáticos.

La idea es evitar:

> “me interesa → escribo → espero respuesta → coordinamos”

y pasar a:

> **“me interesa → hablamos el jueves a las 10:30”.**

---

# 21. n8n como futura capa de automatización

La arquitectura prevista encaja perfectamente con añadir n8n detrás en el futuro.

Principio:

> **Web = experiencia del usuario**  
> **n8n = automatización por detrás**

Ejemplos:

## WhatsApp

- guardar diagnóstico;
- identificar lead;
- registrar seguimiento;
- aviso por Telegram;
- alimentar CRM.

## Email

- registrar contacto;
- guardar diagnóstico;
- actualizar CRM;
- generar tareas o avisos.

## Reserva de llamada

- crear evento;
- enviar confirmación;
- mandar recordatorio;
- registrar la oportunidad;
- preparar contexto antes de la llamada.

## Diagnóstico

- guardar respuestas;
- almacenarlas en MySQL / Airtable / CRM;
- crear ficha comercial;
- preparar contexto para posteriores automatizaciones.

No se mete n8n por meterlo.

Primero:

> **validar experiencia y conversión**

Después:

> **automatizar lo que realmente genere trabajo repetitivo.**

---

# 22. Base de datos / backend futuro

El hosting de The Localhost dispone de MySQL.

Por tanto, no es obligatorio depender de Airtable para la landing o diagnóstico.

Posible arquitectura futura:

```text
Landing
   ↓
Endpoint propio
   ↓
MySQL
   ↓
n8n
   ↓
CRM / Email / Telegram / Calendar / WhatsApp / etc.
```

Airtable puede seguir siendo útil como CRM u herramienta operativa, pero no tiene por qué ser el núcleo técnico del sistema.

---

# 23. Footer y contenido posterior

Actualmente el footer permanece oculto:

```css
.footer {
  display: none !important;
}
```

El paseo termina conceptualmente en:

> **Diagnóstico → contacto**

No revelar nuevas secciones después sin decidir antes si aportan algo real.

---

# 24. Reglas UX importantes aprendidas

Estas reglas deben respetarse en futuras modificaciones:

### 1. Centrado de capítulos
Cuando un capítulo se convierte en protagonista debe entrar perfectamente centrado.

### 2. Evitar correcciones dobles
No hacer un scroll y después otro para “arreglarlo”.

### 3. Compactar antes de avanzar
Si una sección debe reducir su altura, hacerlo **antes** del desplazamiento al siguiente capítulo.

### 4. Reservar espacio
Si el siguiente bloque todavía está oculto, reservar su espacio de forma invisible antes de modificar el actual.

### 5. Sticky bars cuentan
La barra superior y las barras inferiores reducen el viewport útil y deben incluirse en los cálculos.

### 6. Contenido dinámico
Cuando cambia la altura de una pregunta, medir el bloque real antes de recolocar.

### 7. No reposicionar mientras el usuario selecciona
Solo al avanzar / volver entre preguntas.

### 8. No añadir cosas porque sí
La landing debe mantener su carácter guiado y limpio.

---

# 25. Cambios realizados en esta última sesión

Cadena de versiones recientes:

## `ultima(35).html`
Se redujo el tamaño del headline del resultado:

> **Hay una oportunidad clara de mejora.**

para intentar mantenerlo en una sola línea.

---

## `ultima(36).html`
Email de contacto cambiado:

```text
hola@thelocalhost.es
```

a:

```text
angel@thelocalhost.es
```

---

## `ultima(37).html`
Se añadió la tercera vía:

> **Reservar una llamada**

Inicialmente enlazada temporalmente mediante email.

---

## `ultima(38).html`
Se ajustó:

> **Reservar una llamada**

para que aparezca en una sola línea.

---

## `ultima(39).html`
Se revisaron los 24 estados visuales de las seis cajas de objetivos.

Resultado:

- 24 títulos únicos;
- 24 textos únicos;
- 24 estados únicos;
- cada flujo es diferente;
- se eliminaron repeticiones poco coherentes.

---

## `ultima(40).html`
Se eliminaron los iconos del modal:

> **¿Cómo prefieres hablar?**

Ahora muestra únicamente:

- WhatsApp
- Email
- Reservar una llamada

---

# 26. Estado actual

## HTML maestro

> **`ultima(40).html`**

Este es el archivo que debe usarse como base para la siguiente modificación.

No trabajar sobre versiones anteriores salvo que sea necesario hacer una regresión intencionada.

---

# 27. Próximas revisiones recomendadas

Antes de seguir añadiendo funcionalidad:

1. Recorrer toda la landing en desktop como usuario nuevo.
2. Revisar centrados.
3. Revisar transiciones.
4. Detectar cualquier salto de layout.
5. Revisar móvil / responsive.
6. Probar recorrido completo del diagnóstico.
7. Decidir el número definitivo de WhatsApp.
8. Elegir sistema real para reservas.
9. Posteriormente estudiar integración backend / n8n.

---

# 28. Filosofía para continuar

La landing ya tiene suficiente estructura.

No convertirla en una colección interminable de funcionalidades.

Orden recomendado:

> **Primero experiencia**  
> **Después conversión**  
> **Después automatización real**

La arquitectura permite que más adelante n8n, MySQL, CRM, calendario, email y WhatsApp trabajen por detrás sin cambiar el concepto visual de la web.

---

**Fin del handoff.**  
**Archivo maestro asociado: `ultima(40).html`**
