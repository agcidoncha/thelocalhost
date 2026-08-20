# Proyecto — Diagnóstico guiado sin IA | The Localhost

**Última actualización:** 18/08/2026  
**HTML actual:** `ultima(7).html`  
**Estado:** módulo funcional previo al formulario

---

# 1. Cambio de planteamiento

Se descarta por ahora el diagnóstico mediante agente/IA.

El módulo final de la landing pasa a ser un **diagnóstico interactivo guiado sin IA**, basado en:

- preguntas cerradas;
- selección múltiple cuando tenga sentido;
- lógica y reglas;
- prioridades;
- generación de un resultado dinámico;
- cero consumo de tokens.

No debe presentarse como un agente de IA.

La idea es que el visitante tenga una experiencia útil e inteligente, pero que el sistema funcione con reglas completamente controladas.

---

# 2. Objetivo

El módulo debe ayudar al visitante a identificar oportunidades reales de mejora en su negocio.

Además debe preparar una futura captación comercial de calidad, porque antes de contactar ya sabremos:

- qué quiere mejorar;
- dónde tiene los problemas;
- cómo trabaja actualmente;
- qué impacto tiene;
- qué diagnóstico ha recibido.

Principio de The Localhost:

**Menos contar. Más demostrar. Y hacer hablar al cliente.**

---

# 3. Flujo actual

El diagnóstico tiene cuatro preguntas:

1. ¿Qué quieres mejorar?
2. ¿Dónde tienes ahora el problema?
3. ¿Cómo lo haces actualmente?
4. ¿Qué impacto tiene ahora?

Después:

5. resultado dinámico;
6. CTA:
   **Quiero que estudiéis mi caso →**

El formulario de nombre + email **todavía no existe**.

Se ha decidido explícitamente que el formulario será lo último que se construya.

---

# 4. Pregunta 1 — ¿Qué quieres mejorar?

Permite **selección múltiple**.

Opciones:

- Captar clientes
- Ahorrar tiempo
- Responder más rápido
- Organizar mejor
- Automatizar tareas repetitivas

Estas respuestas se utilizan para definir el beneficio y ayudar a priorizar las áreas seleccionadas después.

---

# 5. Pregunta 2 — ¿Dónde tienes ahora el problema?

Permite **selección múltiple**.

Opciones:

- Email
- WhatsApp
- Web
- Reservas
- Facturación
- CRM
- Redes
- Otro

## Regla especial

**Otro es exclusivo.**

Si se selecciona `Otro`, no debe mezclarse con Email, WhatsApp, CRM, Reservas, etc.

La razón es evitar resultados incoherentes del tipo:

- soluciones muy concretas para CRM/reservas;
- y a la vez un mensaje genérico diciendo que primero hay que estudiar qué proceso existe.

---

# 6. Pregunta 3 — ¿Cómo lo haces actualmente?

Permite **selección múltiple**.

Opciones:

- Manualmente
- Con Excel
- Con varias herramientas
- Ya tengo una automatización, pero falla

## Regla especial

Si aparece:

**Ya tengo una automatización, pero falla**

esa situación tiene prioridad.

El diagnóstico no debe proponer inmediatamente añadir más automatización.

Debe empezar por:

- revisar el flujo existente;
- localizar el fallo;
- decidir si conviene reparar, simplificar o sustituir alguna parte.

Principio:

**no automatizar encima de una automatización rota sin entender primero qué falla.**

---

# 7. Pregunta 4 — ¿Qué impacto tiene ahora?

Es de **selección única**.

La versión inicial decía:

**¿Cuánto trabajo te genera?**

pero se detectó una fisura porque las respuestas mezclaban tiempo y gravedad.

Se cambió a:

**¿Qué impacto tiene ahora?**

La intención es mantener una escala coherente.

Esta respuesta se utiliza para definir la prioridad final del diagnóstico.

---

# 8. Resultados base por área

La ubicación del problema aporta el núcleo de la solución.

## Email

Posibles oportunidades:

- clasificar entradas;
- registrar información;
- automatizar seguimientos;
- avisar solo cuando sea necesaria intervención humana.

## WhatsApp

Posibles oportunidades:

- ordenar consultas;
- registrar contactos;
- automatizar avisos;
- automatizar seguimientos;
- conectar el canal con otros sistemas.

## Web

Posibles oportunidades:

- mejorar captación;
- estructurar formularios;
- enviar datos directamente a sistemas internos;
- activar automáticamente el siguiente paso.

## Reservas

Posibles oportunidades:

- solicitudes de cita;
- confirmaciones;
- recordatorios;
- cancelaciones;
- recuperación de huecos;
- listas de espera.

## Facturación

Posibles oportunidades:

- reducir tareas manuales;
- generación y gestión de documentos;
- avisos;
- registro;
- seguimiento.

## CRM

Posibles oportunidades:

- registrar contactos;
- actualizar estados;
- preparar tareas de seguimiento;
- evitar oportunidades olvidadas.

## Redes

Posibles oportunidades:

- centralizar contactos;
- convertir consultas en oportunidades organizadas;
- preparar seguimiento.

## Otro

Resultado más abierto:

- estudiar el proceso;
- localizar tareas repetitivas;
- identificar herramientas involucradas;
- decidir qué merece automatización o integración.

---

# 9. Modificadores según la forma de trabajo actual

## Manualmente

El diagnóstico puede señalar que existe trabajo repetitivo que podría automatizarse.

## Con Excel

El diagnóstico puede proponer:

- centralizar;
- reducir actualizaciones manuales;
- conectar los datos con otros procesos.

## Con varias herramientas

El foco está en:

- conectar sistemas;
- reducir duplicidades;
- evitar mover información a mano entre herramientas.

## Automatización que falla

Tiene prioridad sobre las anteriores.

Primero:

- diagnosticar;
- localizar el fallo;
- revisar el flujo actual.

Después se decide qué mejorar.

---

# 10. Modificadores según el objetivo

## Captar clientes

El foco debe estar en:

- oportunidades;
- seguimiento;
- evitar contactos olvidados;
- mejorar el recorrido comercial.

No debe prometerse que cualquier automatización generará clientes.

Ejemplo de combinación débil detectada:

**Facturación + Captar clientes**

No se debe afirmar que automatizar la facturación vaya a captar clientes.

En estos casos el resultado debe indicar que primero habría que comprobar la relación real entre el problema seleccionado y el objetivo comercial.

## Ahorrar tiempo

Foco:

- reducir pasos repetitivos;
- reducir trabajo administrativo;
- evitar tareas manuales innecesarias.

## Responder más rápido

Foco:

- reducir el tiempo entre entrada de solicitud y respuesta;
- avisos automáticos;
- clasificación;
- respuesta inicial cuando tenga sentido.

## Organizar mejor

Foco:

- centralizar información;
- trazabilidad;
- conocer el estado de cada caso.

## Automatizar tareas repetitivas

Foco:

- detectar repeticiones;
- eliminar pasos manuales;
- mantener intervención humana solo donde aporta valor.

---

# 11. Problema detectado en la primera versión múltiple

La versión anterior permitía múltiples selecciones, pero el motor hacía esencialmente:

`frase A + frase B + frase C + frase D`

Eso generaba varios problemas:

- diagnósticos demasiado largos;
- repetición de “Podríamos...”;
- recomendaciones que se pisaban;
- contradicciones;
- demasiadas oportunidades a la vez;
- sensación de concatenación en lugar de diagnóstico.

No queremos ese comportamiento.

---

# 12. Lógica actual corregida

La lógica actual sigue esta idea:

`selecciones → detectar combinación → priorizar → resumir → generar máximo 2 oportunidades`

El sistema no debe mostrar una oportunidad por cada selección.

Debe elegir los frentes con más sentido según:

- áreas seleccionadas;
- objetivos del usuario;
- forma actual de trabajo;
- impacto declarado.

## Máximo

El resultado muestra **como máximo 2 oportunidades principales**.

Esto mantiene:

- claridad;
- sensación de criterio;
- diagnóstico corto;
- foco comercial.

---

# 13. Jerarquía de reglas

Reglas importantes de prioridad:

1. Si `Otro` está seleccionado, funciona de forma exclusiva.
2. Si existe `Automatización que falla`, primero se revisa lo existente.
3. Las áreas se cruzan con los objetivos del usuario para priorizar.
4. No se prometen beneficios que no guarden relación clara con el problema.
5. Si hay demasiadas áreas seleccionadas, solo se muestran las dos más relevantes.
6. El impacto declarado modifica la prioridad final.
7. El sistema debe evitar resultados genéricos o acumulaciones de frases.

---

# 14. Pantalla de resultado

La estructura prevista es:

## Etiqueta

`TU DIAGNÓSTICO`

## Titular dinámico

Ejemplo:

**Hay una oportunidad clara de automatización**

## Bloque 1 — Qué vemos

Resume las oportunidades seleccionadas.

## Bloque 2 — Qué cambiaríamos

Explica qué debería modificarse respecto a la forma actual de trabajar.

## Bloque 3 — Qué conseguirías

Relaciona la solución con el objetivo real del usuario.

## Prioridad

Depende del impacto declarado.

Ejemplos conceptuales:

- mejora interesante;
- oportunidad clara;
- prioridad alta;
- conviene estudiarlo cuanto antes.

---

# 15. Resumen de respuestas

El resultado también conserva un resumen de lo que el usuario ha respondido:

- objetivos;
- áreas problemáticas;
- forma actual de trabajo;
- impacto.

Este resumen será importante cuando más adelante se conecte el formulario.

---

# 16. CTA actual

Al final del diagnóstico aparece:

**Quiero que estudiéis mi caso →**

Actualmente el botón todavía **no abre ningún formulario**.

Esto es intencionado.

Primero se está terminando y validando:

- preguntas;
- combinaciones;
- lógica;
- resultados;
- coherencia.

Después se construirá la captación.

---

# 17. Formulario futuro

Se ha decidido que será la última parte.

Cuando se implemente, pedirá únicamente:

- Nombre
- Email

No se volverán a preguntar los datos del diagnóstico.

El sistema deberá conservar y enviar automáticamente:

- nombre;
- email;
- qué quiere mejorar;
- dónde tiene el problema;
- cómo trabaja actualmente;
- impacto;
- resultado mostrado.

CTA previsto:

**Enviar mi caso →**

---

# 18. Arquitectura futura prevista para el envío

Concepto hablado, todavía no implementado:

`Landing → POST → endpoint servidor → almacenamiento → aviso`

Posible solución:

- PHP en el hosting de The Localhost;
- MySQL propio;
- aviso posterior;
- integración opcional con Airtable/n8n.

No considerar esta arquitectura como implementada todavía.

El formulario y su backend quedan pendientes para una fase posterior.

---

# 19. IA

Este módulo no necesita IA.

Ventajas:

- cero consumo de tokens;
- coste predecible;
- respuesta inmediata;
- control absoluto;
- no inventa datos;
- no depende de proveedores externos;
- se puede probar combinación por combinación;
- más sencillo de mantener.

La IA puede evaluarse en el futuro solo si realmente aporta algo que las reglas no puedan resolver.

---

# 20. Estado actual

## Implementado

- diagnóstico interactivo;
- 4 preguntas;
- selección múltiple en preguntas 1, 2 y 3;
- selección única en pregunta 4;
- botón Continuar;
- navegación Anterior;
- posibilidad de cambiar selecciones;
- resultado dinámico;
- lógica por reglas;
- priorización;
- máximo 2 oportunidades;
- exclusividad de `Otro`;
- prioridad para automatizaciones existentes que fallan;
- CTA final.

## No implementado

- formulario;
- nombre;
- email;
- envío;
- PHP;
- MySQL;
- Airtable;
- n8n para este módulo;
- avisos;
- almacenamiento;
- IA.

---

# 21. HTML actual

Versión actual:

`ultima(7).html`

Además, el hero continúa configurado con:

- primera fase: 4 segundos;
- segunda fase: 4 segundos;
- ciclo inicial total: 8 segundos;
- después se activa `Adelante`.

No modificar ese comportamiento al trabajar en el diagnóstico.

---

# 22. Regla de trabajo

No tocar partes de la landing que no estén relacionadas con el cambio solicitado.

Para este módulo:

1. cerrar preguntas;
2. cerrar reglas;
3. comprobar coherencia de combinaciones;
4. cerrar resultado;
5. después diseñar el formulario;
6. después conectar el backend.

No introducir IA ni formulario antes de terminar la lógica del diagnóstico.
