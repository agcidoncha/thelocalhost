# Proyecto — Diagnóstico IA para The Localhost

**Última actualización:** 16/08/2026

## Estado

Concepto aprobado para una fase posterior.

**Todavía no implementado.**

La landing actual ya demuestra automatización antes de llegar a este punto. El diagnóstico IA debe continuar esa lógica de:

**menos contar → más demostrar → hacer hablar al cliente**

---

# Objetivo

Crear una experiencia breve que detecte oportunidades reales en el negocio del visitante.

No debe ser:

- chatbot genérico;
- conversación interminable;
- IA por marketing;
- generador de respuestas largas.

---

# Flujo preferido

## Pregunta 1

**¿Qué quieres mejorar principalmente?**

Opciones:

- Ahorrar tiempo
- Conseguir más clientes
- Mejorar mi web
- Conectar herramientas
- Usar IA
- No lo tengo claro

## Pregunta 2

**¿Dónde está ahora mismo el mayor problema?**

Opciones:

- Citas / agenda
- Seguimiento de clientes
- Emails / documentos
- Ventas / CRM
- Web / conversiones
- Datos / reporting
- Otro

## Pregunta 3

**¿Qué ocurre hoy?**

Texto libre breve.

---

# Respuesta

Formato previsto:

## Veo 2 oportunidades claras

### Oportunidad 1

Explicación breve.

### Oportunidad 2

Explicación breve.

## Por dónde empezaría

Una recomendación concreta.

CTA:

**Hablemos de esto →**

---

# Arquitectura

`Landing → webhook n8n → modelo IA → n8n → respuesta en landing`

## Responsabilidades de n8n

- recibir;
- validar;
- limitar longitud;
- construir prompt;
- llamar al modelo;
- validar salida;
- devolver JSON;
- opcionalmente registrar lead.

La clave del proveedor IA nunca debe vivir en el navegador.

---

# Principios del sistema

La IA debe:

- entender antes de recomendar;
- no inventar datos;
- priorizar impacto;
- diferenciar automatización, integración, web, SEO e IA;
- no recomendar IA si una automatización convencional basta;
- devolver pocas oportunidades;
- usar lenguaje comprensible;
- proponer un primer paso.

---

# Coste y abuso

La experiencia será corta.

Medidas previstas:

- límite de caracteres;
- límite de tokens de salida;
- rate limiting;
- protección anti-bot;
- límite por sesión/IP;
- presupuesto global;
- sin navegación web;
- sin historial largo.

Presupuesto inicial mencionado para pruebas:

**20 USD**

Antes de implementar hay que verificar precios actuales del proveedor/modelo elegido.

---

# Pendiente

- proveedor/modelo;
- prompt final;
- UI exacta;
- modal/panel/sección;
- almacenamiento;
- captura de email;
- CRM/Airtable;
- analítica;
- protección anti-bot;
- responsive;
- conexión definitiva con el CTA final.
