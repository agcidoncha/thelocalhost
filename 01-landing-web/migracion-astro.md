# MIGRACIÓN A ASTRO — THE LOCALHOST

## Estado del documento

Documento maestro para migrar la landing actual de **The Localhost** desde los prototipos HTML actuales a **Astro**, manteniendo intactos diseño, comportamiento, UX, responsive, SEO y lógica del diagnóstico.

Este documento debe considerarse la referencia principal antes de empezar la migración.

---

# 1. OBJETIVO DE LA MIGRACIÓN

Migrar The Localhost a Astro **sin rediseñar la web** y sin reinterpretar comportamientos ya validados.

La migración NO consiste en rehacer la landing.

Consiste en:

1. limpiar residuos del prototipo HTML;
2. separar correctamente responsabilidades;
3. componentizar;
4. mantener una sola URL;
5. mantener experiencias diferentes para mobile/tablet y desktop;
6. conservar exactamente los comportamientos que ya funcionan;
7. mejorar mantenibilidad, SEO, rendimiento y robustez;
8. preparar una base escalable para futuros módulos, traducciones y automatizaciones.

---

# 2. ARCHIVOS ACTUALES DE REFERENCIA

## Desktop actual

Archivo maestro actual:

`ultima(65).html`

Este es el archivo de referencia para la experiencia desktop.

Tamaño aproximado actual: 262 KB.

---

## Mobile / Tablet actual

Archivo maestro actual:

`mobile.html`

Este es el archivo de referencia para mobile y tablet.

Tamaño aproximado actual: 71 KB.

---

## Prueba fusionada

Archivo:

`fusion.html`

IMPORTANTE:

`fusion.html` es únicamente un laboratorio para comprobar la convivencia entre desktop y mobile.

Actualmente usa:

- `iframe`
- `srcdoc`
- HTML codificado en Base64
- selección por ancho de viewport

NO debe migrarse esta arquitectura a Astro.

En Astro deben existir componentes reales dentro de una única página.

---

# 3. REGLA PRINCIPAL

## NO REDISEÑAR DURANTE LA MIGRACIÓN

Astro no es una excusa para cambiar:

- diseño;
- tamaños;
- copy;
- colores;
- transiciones;
- scroll;
- orden de contenido;
- comportamiento responsive;
- diagnóstico;
- modales;
- navegación;
- lógica del usuario.

Primero se replica fielmente.

Cualquier mejora posterior se hará una vez que la versión Astro sea visual y funcionalmente equivalente.

---

# 4. EXPERIENCIA RESPONSIVE DECIDIDA

La web tendrá una sola URL y una sola página pública.

No habrá:

- dominio `m.`;
- URL mobile distinta;
- dos páginas SEO distintas.

La experiencia cambia según viewport.

## Mobile

`0–699 px`

Experiencia mobile directa:

1. Hero
2. CTA
3. Diagnóstico de 4 preguntas
4. Resultado
5. Contacto

No aparecen las seis tarjetas de objetivos ni el método completo.

---

## Tablet

`700–1099 px`

Se utiliza la misma experiencia conceptual de mobile, adaptada a tablet:

- contenido más ancho;
- ancho máximo aproximado actual: 820 px;
- diagnóstico aprovechando dos columnas cuando corresponde;
- modales más anchos;
- contacto adaptado;
- no se fuerza el desktop completo.

---

## Desktop

`>= 1100 px`

Experiencia completa:

1. Hero
2. Seis objetivos
3. Exploración de tarjetas
4. Método en 5 pasos
5. Diagnóstico
6. Resultado
7. Contacto

---

# 5. BREAKPOINT PRINCIPAL

Breakpoint actual decidido:

`1100 px`

Equivalencia lógica:

```text
<= 1099 px → mobile/tablet
>= 1100 px → desktop
```

No volver al antiguo breakpoint de 900 px salvo que exista una razón comprobada.

---

# 6. ARQUITECTURA ASTRO PROPUESTA

Estructura inicial recomendada:

```text
src/
├── components/
│   ├── header/
│   │   ├── HeaderDesktop.astro
│   │   ├── HeaderMobile.astro
│   │   └── HeaderCompactMobile.astro
│   │
│   ├── hero/
│   │   ├── HeroDesktop.astro
│   │   ├── HeroMobile.astro
│   │   └── HeroBrand.astro
│   │
│   ├── objectives/
│   │   ├── ObjectivesSection.astro
│   │   ├── ObjectiveCard.astro
│   │   └── ObjectiveNavigation.astro
│   │
│   ├── method/
│   │   └── MethodSection.astro
│   │
│   ├── diagnosis/
│   │   ├── Diagnosis.astro
│   │   ├── DiagnosisQuestion.astro
│   │   ├── DiagnosisProgress.astro
│   │   ├── DiagnosisResult.astro
│   │   └── ContactPanel.astro
│   │
│   ├── modals/
│   │   ├── AboutModal.astro
│   │   └── LanguageMenu.astro
│   │
│   └── shared/
│       ├── BrandLogo.astro
│       └── StickyProgressBar.astro
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   └── index.astro
│
├── scripts/
│   ├── hero-desktop.js
│   ├── hero-mobile.js
│   ├── header-mobile.js
│   ├── objectives.js
│   ├── method.js
│   ├── diagnosis.js
│   ├── about-modal.js
│   └── language.js
│
└── styles/
    ├── global.css
    ├── tokens.css
    └── utilities.css
```

La estructura puede ajustarse si durante la migración encontramos una separación más limpia, pero siempre evitando componentes artificiales sin utilidad.

---

# 7. QUÉ DEBE SER COMPARTIDO Y QUÉ NO

No hay que obsesionarse con convertir absolutamente todo en un único componente.

## Compartible

Idealmente:

- logo;
- modal “Detrás de The Localhost”;
- selector de idioma;
- lógica y datos del diagnóstico;
- resultado del diagnóstico;
- panel de contacto;
- variables de diseño;
- algunos controles;
- textos compartidos.

---

## Puede mantenerse separado

Por razones de UX:

- HeroDesktop
- HeroMobile
- HeaderDesktop
- HeaderMobile
- HeaderCompactMobile
- objetivos desktop
- método desktop

Desktop y mobile son experiencias deliberadamente diferentes.

No debemos forzar una abstracción que complique el código.

---

# 8. PROBLEMA REAL SI SE PEGAN LOS DOS HTML JUNTOS

Actualmente existen IDs repetidos entre desktop y mobile.

Confirmados:

```text
businessDiagnosis
diagnosisBack
diagnosisCounter
diagnosisHint
diagnosisNext
diagnosisProgress
```

Total de IDs compartidos entre ambos documentos: 6.

También existen aproximadamente 22 clases CSS compartidas.

Esto no es un problema mientras sean documentos independientes.

SÍ sería un problema si se pegase `mobile.html` y `ultima(65).html` completos dentro del mismo DOM.

## Solución en Astro

No duplicar dos diagnósticos completos.

Debe existir una sola lógica/datos de diagnóstico o componentes claramente aislados.

Evitar búsquedas globales ambiguas del tipo:

```js
document.getElementById(...)
```

cuando pueda haber más de una instancia.

Preferir:

- referencias dentro del componente;
- `querySelector` limitado al contenedor;
- `data-*`;
- IDs realmente únicos cuando sean necesarios.

---

# 9. DIAGNÓSTICO — REGLA FUNCIONAL

El diagnóstico es guiado y determinista.

NO utiliza IA.

No debe introducirse un agente de IA durante la migración.

## Pregunta 1

“¿Qué quieres mejorar?”

Selección múltiple:

- Captar clientes
- Ahorrar tiempo
- Responder más rápido
- Organizar mejor
- Automatizar tareas repetitivas

---

## Pregunta 2

“¿En qué parte del trabajo lo notas?”

Selección múltiple:

- Email
- WhatsApp
- Web/formularios
- Reservas/citas
- Facturación
- CRM/seguimiento
- Redes
- Otro

`Otro` es exclusivo.

---

## Pregunta 3

“¿Qué pasa hoy con ese trabajo?”

Selección múltiple:

- Lo gestiono manualmente
- Apunto/copio datos en Excel
- Paso información entre varias herramientas
- Ya tengo una automatización, pero falla

Si se selecciona una automatización que falla, se prioriza auditoría/reparación.

---

## Pregunta 4

Impacto.

Selección única.

Mobile actual:

- Bajo · molesta, pero se gestiona
- Medio · me quita varias horas a la semana
- Alto · me quita varias horas al día
- Crítico · provoca bloqueos, errores o pérdida de seguimiento

---

# 10. RESULTADO DEL DIAGNÓSTICO

El resultado:

- detecta combinaciones;
- prioriza;
- no concatena textos sin sentido;
- devuelve máximo 2 oportunidades;
- propone por dónde empezar.

Estructura:

```text
TU DIAGNÓSTICO

Hay una oportunidad clara de mejora.

1. Oportunidad
   Ahora
   Qué haríamos
   Qué buscamos

2. Oportunidad
   Ahora
   Qué haríamos
   Qué buscamos

Por dónde empezaría

Resumen

Quiero que estudiéis mi caso →
```

---

# 11. CONTACTO

El resultado conduce a:

**¿Cómo prefieres hablar?**

Opciones:

- WhatsApp
- Email
- Reservar una llamada

## Email

Dirección correcta:

`angel@thelocalhost.es`

No usar `hola@thelocalhost.es`.

---

## WhatsApp

Actualmente no existe número definido.

No inventar número.

---

## Reservar llamada

Actualmente NO existe sistema real de booking.

No inventar Calendly, Cal.com ni URL de Google Calendar.

Mientras no exista integración real, mantener solución provisional o dejar preparado el componente.

---

# 12. MENSAJE PREFIJADO DE CONTACTO

Mantener estructura:

```text
Hola, he hecho el diagnóstico de The Localhost y quiero que estudiéis mi caso.

Quiero mejorar: ...
Dónde ocurre: ...
Ahora ocurre: ...
Impacto: ...

Me gustaría que lo revisáramos con más contexto.
```

Usar:

`Dónde ocurre`

No volver a:

`Lo noto en`.

---

# 13. HERO DESKTOP

Textos actuales:

1. `Automatizamos el trabajo que no te gusta.`
2. `Recupera tiempo para lo que sí importa.`
3. `Déjame mostrarte si podemos hacer algo mejor.`

Destacados en color sólido:

`#FF3D85`

No usar degradado en los textos destacados.

---

# 14. HERO MOBILE

La historia es la misma que desktop.

La secuencia puede ser más rápida.

Esto es deliberado y no debe considerarse inconsistencia.

Mobile busca:

- menos espera;
- más velocidad;
- acceso rápido al diagnóstico.

No igualar tiempos con desktop solo por simetría técnica.

---

# 15. COLORES DEL HERO

Color principal de texto destacado:

`#FF3D85`

Gradiente de identidad utilizado en:

- icono del logo;
- barras de progreso;
- determinados elementos gráficos.

Gradiente:

```css
linear-gradient(
  90deg,
  #F45A60 0%,
  #FF447C 52%,
  #FF3292 100%
)
```

No convertir automáticamente todo el naranja de la web a rosa.

La decisión de limpieza de naranja se aplica especialmente al hero.

Las demás secciones pueden conservar su identidad actual.

---

# 16. HEADER MOBILE

## Estado inicial

En el hero se muestra cabecera completa:

- idioma;
- logo;
- subtítulo;
- perfil.

---

## Al bajar

Cuando la cabecera original deja de ser visible aparece:

cabecera compacta sticky:

```text
[ idioma ]   The Localhost   [ perfil ]
```

Sin subtítulo.

---

## Al volver arriba

Regla obligatoria:

- si vuelve a entrar la cabecera original;
- la cabecera compacta desaparece.

Nunca deben solaparse ambas.

La implementación actual utiliza observación real de la cabecera original.

Esta filosofía debe conservarse en Astro.

Preferir `IntersectionObserver` frente a una cifra fija de scroll.

---

# 17. HEADER DESKTOP

Mantiene altura de referencia aproximada:

`76px`

Distribución:

```text
[ idioma ]       [ logo centrado ]       [ perfil ]
```

El mantenimiento de esta altura ha sido importante para cálculos de centrado existentes.

No cambiar sin comprobar todas las transiciones de scroll.

---

# 18. LOGO

Logo construido con HTML + SVG.

No sustituir por imagen raster.

Icono con gradiente coral → rosa → magenta.

Texto:

`The Localhost`

Subtítulo:

`Automatización de procesos`

Fuente:

Inter.

---

# 19. LIMPIEZA DEL LOGO PENDIENTE

Existen funciones actuales:

```js
alignBrandTexts()
alignDesktopBrandTexts()
```

Estas funciones calculan mediante JavaScript el `letter-spacing` del subtítulo para intentar igualar su ancho con el título.

Esta decisión ya no es necesaria.

La referencia visual correcta es:

- título y subtítulo empiezan en el mismo eje;
- el subtítulo puede terminar antes;
- no debe forzarse artificialmente a tener el mismo ancho.

## Antes de Astro

Eliminar esas funciones.

Resolver alineación únicamente con CSS.

---

# 20. MODAL “DETRÁS DE THE LOCALHOST”

Contenido actual:

## Kicker

`Detrás de The Localhost`

## Nombre

`Ángel G. Cidoncha`

Debe mantenerse en una sola línea mientras el viewport lo permita razonablemente.

Hay separación visual deliberada entre kicker y nombre.

---

## Texto

```text
Llevo más de 20 años trabajando entre frontend, diseño digital y tecnología.
Esa experiencia es la base desde la que hoy abordo la automatización:
entender primero el problema y después elegir la herramienta adecuada.
```

---

## Bloques

```text
Frontend Design & Layout · UX/UI · SEO · Project Management · CMS
```

```text
Formador de la Comunidad de Madrid durante más de 10 años.
```

Se eliminó el bloque redundante:

`Project Manager, coordinando proyectos, equipos y ejecución de principio a fin.`

No reintroducirlo.

---

## Marcas

Texto:

`He participado en proyectos para marcas como`

Marcas actuales:

- El Corte Inglés
- Sanitas
- Endesa
- Mercedes-Benz
- BMW
- Repsol
- Packlink
- Kinepolis
- Autopia

Se presentan como chips discretos.

No existe CTA a LinkedIn.

No reintroducirlo salvo nueva decisión explícita.

---

# 21. MODAL ABOUT — MEJORA NECESARIA

Antes de Astro conviene asegurar:

```css
max-height
overflow-y:auto
```

para evitar que el modal desborde en móviles de poca altura.

Debe probarse especialmente en:

- 320 × 568
- 375 × 667
- 390 × 844
- landscape mobile

No cambiar diseño salvo lo necesario para garantizar acceso a todo el contenido.

---

# 22. SELECTOR DE IDIOMA

Actualmente:

- Español — ES activo
- English — EN visible pero deshabilitado

No existe traducción inglesa completa aún.

NO fingir traducción con JavaScript.

---

# 23. INTERNACIONALIZACIÓN FUTURA

La arquitectura final debe estar preparada para idiomas reales.

Cuando se implemente:

preferir URLs reales:

```text
/es/
/en/
```

y posteriormente otros idiomas si procede.

Evitar traducción dinámica falsa de una única URL si el objetivo incluye SEO internacional.

No implementar ahora contenido inexistente.

---

# 24. H1 Y SEMÁNTICA

Problema actual confirmado:

`mobile.html` contiene 3 `<h1>` para las tres frases animadas.

En Astro debe existir una jerarquía semántica limpia.

## Solución recomendada

Un único `<h1>` real.

Los diferentes estados visuales del hero pueden ser:

- `<span>`;
- `<div>`;
- elementos con `aria-hidden` según corresponda;
- texto actualizado dentro del mismo H1.

No cambiar visualmente la animación.

---

# 25. HEAD Y SEO

Actualmente desktop y mobile tienen títulos distintos.

Desktop:

`The Localhost — Automatización, web, SEO e IA con criterio`

Mobile:

`The Localhost — Diagnóstico móvil`

En Astro habrá una sola página y un único `<head>`.

Debe definirse:

- `<title>`;
- meta description;
- canonical;
- Open Graph;
- Twitter cards si se usan;
- favicon;
- theme-color;
- idioma;
- structured data solo si está justificado.

No duplicar metadata por responsive.

---

# 26. COPY Y POSICIONAMIENTO

The Localhost NO debe presentarse como una “agencia de IA”.

Posicionamiento:

- automatización;
- integración;
- frontend;
- UX/UI;
- SEO;
- datos;
- IA solo cuando aporta valor.

Idea central:

`Automatizamos el trabajo que una empresa no debería estar haciendo a mano.`

Filosofía:

`Menos contar. Más demostrar. Y hacer hablar al cliente.`

---

# 27. OBJETIVOS DESKTOP

Sección:

`¿Qué necesitas lograr en tu negocio?`

Subtexto:

`Elige qué quieres mejorar y te mostramos por dónde empezar.`

Seis tarjetas:

1. Ahorrar tiempo
2. Conseguir clientes
3. Usar IA
4. Mejorar mi web
5. Conectar sistemas
6. Escalar y medir

---

# 28. REGLAS CRÍTICAS DE LAS TARJETAS

Cuando una tarjeta se abre:

- las otras cinco desaparecen;
- la seleccionada ocupa el tablero;
- aparece Volver a objetivos;
- se centra correctamente;
- aparecen flechas de navegación;
- puede cerrarse;
- no debe saltar el layout.

Autocierre:

cuando aproximadamente el 50% de la tarjeta abierta desaparece por arriba.

Existe protección de autocentrado para evitar cierres accidentales durante scroll programático.

No simplificar esta lógica sin probarla.

---

# 29. FLECHAS DE TARJETAS

Responsive actual:

## Desktop ancho

Flechas laterales.

## Aproximadamente <= 1300 px

Flechas pequeñas cerca del título de la tarjeta abierta.

Se calculan dinámicamente respecto al título.

No sustituir por posiciones rígidas sin comprobar todas las anchuras.

---

# 30. CENTRADO DE SECCIONES

Esto es una prioridad UX.

El usuario ha validado expresamente el centrado de:

- objetivos;
- tarjeta abierta;
- método;
- diagnóstico.

Regla:

No introducir dobles correcciones de scroll.

Secuencia ideal:

1. reservar layout;
2. compactar bloque anterior;
3. revelar siguiente bloque;
4. realizar un único scroll suave;
5. llegar centrado.

No hacer scroll repetitivo frame a frame.

---

# 31. MÉTODO DESKTOP

Título:

`Nuestro método claro en 5 pasos`

Pasos:

1. Descubrimiento
2. Estrategia
3. Desarrollo
4. Lanzamiento
5. Optimización

Mantener estructura y comportamiento.

---

# 32. STICKY BARS / PROGRESS

Las barras de progresión usan la identidad del logo.

Gradiente:

```css
linear-gradient(90deg,#F45A60 0%,#FF447C 52%,#FF3292 100%)
```

No cambiar a naranja.

Hay diferentes barras en el recorrido:

- carga del hero;
- acceso a método;
- acceso a diagnóstico;
- progreso del diagnóstico.

Deben conservar sus respectivas alturas y comportamientos.

---

# 33. CSS EN ASTRO

Astro aplica estilos scoped por defecto a los componentes.

No copiar indiscriminadamente el CSS actual.

Separar:

## Global

En `global.css`:

```text
:root
html
body
reset
tipografía general
variables
fondos globales
clases globales estrictamente necesarias
```

---

## Scoped por componente

Cada componente debe contener solo sus estilos.

Ejemplo:

```text
HeroDesktop.astro
→ CSS del hero desktop

Diagnosis.astro
→ CSS del diagnóstico

AboutModal.astro
→ CSS del modal
```

---

# 34. VARIABLES DE DISEÑO

Centralizar tokens.

Ejemplo:

```css
:root {
  --brand-pink: #FF3D85;
  --brand-coral: #F45A60;
  --brand-magenta: #FF3292;

  --bg: ...;
  --surface: ...;
  --text: ...;
  --muted: ...;
  --line: ...;

  --header-height-desktop: 76px;
}
```

No duplicar valores sin necesidad.

---

# 35. JAVASCRIPT

Los HTML actuales contienen grandes bloques de JavaScript inline.

En Astro deben dividirse por responsabilidad.

No crear un único `main.js` enorme.

---

# 36. CONTROLADORES JS PROPUESTOS

## hero-desktop.js

Responsable de:

- secuencia de frases;
- visuales;
- progreso;
- CTA;
- transición EMPEZAMOS;
- desbloqueo del scroll.

---

## hero-mobile.js

Responsable de:

- secuencia más rápida;
- progreso;
- CTA;
- desbloqueo;
- acceso al diagnóstico.

---

## header-mobile.js

Responsable de:

- observación del header original;
- aparición del header compacto;
- desaparición cuando vuelve el original.

---

## objectives.js

Responsable de:

- abrir/cerrar tarjeta;
- navegación;
- centrado;
- autocierre;
- flechas;
- desbloqueo del método.

---

## method.js

Responsable de:

- entrada;
- compactado;
- paso al diagnóstico.

---

## diagnosis.js

Responsable de:

- estado;
- selección;
- navegación;
- progreso;
- lógica de resultado;
- volver;
- contacto.

---

# 37. EVENTOS Y ASTRO

Evitar listeners globales duplicados.

Si la página se renderiza una sola vez sin navegación cliente, la inicialización será sencilla.

Si en el futuro se usa navegación cliente de Astro/View Transitions:

- revisar ciclo de vida;
- inicializar al cargar página;
- limpiar listeners cuando corresponda;
- evitar registrar eventos dos veces.

No activar View Transitions durante la primera migración si no son necesarias.

Primero equivalencia funcional.

---

# 38. SCROLL LOCK

Riesgo actual:

mobile comienza con:

`body.mobile-locked`

y desktop utiliza clases de progresión para controlar qué puede verse y cuándo.

Si JavaScript falla, el usuario no debe quedarse atrapado.

## En Astro

Aplicar enfoque progresivo:

1. HTML base accesible;
2. JS inicia;
3. JS añade clase de experiencia;
4. solo entonces se activa el scroll lock.

Ejemplo conceptual:

```js
document.documentElement.classList.add('js-ready');
```

CSS:

```css
.js-ready .mobile-experience.is-intro-active {
  overflow: hidden;
}
```

Nunca bloquear permanentemente el contenido si JS no carga.

---

# 39. MODALES

Todos los modales deben:

- abrirse desde botón;
- cerrar con X;
- cerrar con Escape;
- cerrar mediante backdrop cuando corresponda;
- bloquear correctamente scroll de fondo;
- devolver el foco al trigger;
- mantener foco razonablemente dentro del modal;
- tener `role="dialog"`;
- tener `aria-modal="true"`;
- usar `aria-labelledby`.

No basta con que visualmente funcionen.

---

# 40. ACCESIBILIDAD

Revisión obligatoria en Astro:

- navegación solo teclado;
- Escape;
- focus visible;
- botones reales en lugar de divs clicables;
- labels;
- `aria-expanded`;
- `aria-current`;
- estados disabled;
- contraste;
- encabezados;
- modal focus;
- reduced motion.

---

# 41. PREFERS-REDUCED-MOTION

Añadir soporte:

```css
@media (prefers-reduced-motion: reduce) {
  ...
}
```

No eliminar necesariamente todos los efectos.

Reducir:

- scroll suave;
- movimientos grandes;
- transiciones largas;
- loops innecesarios.

---

# 42. FUENTES

Inter se utiliza actualmente.

En Astro valorar:

1. fuente local optimizada;
2. preload solo de pesos realmente usados;
3. evitar múltiples peticiones innecesarias;
4. `font-display: swap`.

No compartir archivos de fuente fuera del proyecto.

---

# 43. RENDIMIENTO

Objetivo:

mantener la landing muy ligera.

Evitar:

- frameworks JS adicionales sin necesidad;
- React/Vue/Svelte solo para resolver algo que Vanilla JS hace bien;
- hydration global;
- librerías de animación pesadas;
- imágenes innecesarias;
- icon fonts.

Astro + HTML + CSS + JS Vanilla encaja perfectamente con este proyecto.

---

# 44. ISLANDS

No usar componentes hidratados de framework por defecto.

La landing no necesita React para funcionar.

Si algún componente interactivo lo necesitase en el futuro se estudia de forma independiente.

Diagnóstico, hero, modales y scroll pueden resolverse con JavaScript nativo.

---

# 45. LIMPIEZA PREVIA DEL DESKTOP

`ultima(65).html` arrastra código histórico.

Confirmado:

- footer antiguo todavía presente;
- footer oculto;
- estilos duplicados/históricos;
- clases de versiones anteriores;
- enlace a `#servicios` dentro del footer antiguo aunque esa sección ya no existe;
- bloques CSS que ya no forman parte de la experiencia final.

Antes de migrar:

1. identificar HTML sin uso;
2. eliminarlo;
3. identificar CSS sin correspondencia;
4. eliminarlo;
5. validar JS;
6. comparar visualmente.

No hacer limpieza masiva automática sin revisar.

---

# 46. FOOTER ANTIGUO

Desktop contiene todavía:

```html
<footer class="footer">
```

aunque está oculto.

Debe eliminarse antes de Astro si definitivamente no forma parte de la landing.

No migrar código simplemente porque estaba en el archivo.

---

# 47. CSS MUERTO

La auditoría ha detectado muchas clases históricas potencialmente no utilizadas.

Ejemplos mencionados durante la revisión:

- `services-grid`
- `service-card`
- `stats-grid`
- `experience-grid`
- estructuras antiguas de footer

No borrarlas a ciegas.

Proceso:

1. listar;
2. buscar uso HTML;
3. buscar uso JS;
4. eliminar una familia;
5. comparar;
6. continuar.

---

# 48. NO MINIFICAR DURANTE LA MIGRACIÓN

Primero:

- legibilidad;
- componentes;
- equivalencia;
- debugging.

La minificación llegará automáticamente en build.

No trabajar con código minificado durante la migración.

---

# 49. DATOS VS HTML

Los contenidos repetidos deben moverse a datos.

Ejemplo objetivos:

```js
const objectives = [
  {
    id: 'ahorrar-tiempo',
    title: 'Ahorrar tiempo',
    ...
  }
]
```

Esto evita mantener seis bloques manuales enormes.

Lo mismo para:

- pasos del método;
- preguntas;
- opciones;
- oportunidades;
- marcas.

---

# 50. MARCAS

Las marcas del AboutModal podrían guardarse como array:

```js
[
  'El Corte Inglés',
  'Sanitas',
  'Endesa',
  'Mercedes-Benz',
  'BMW',
  'Repsol',
  'Packlink',
  'Kinepolis',
  'Autopia'
]
```

Renderizadas con Astro.

---

# 51. CONTENIDO DEL DIAGNÓSTICO COMO DATOS

Las preguntas deben residir en un archivo o módulo de datos.

Ejemplo:

```text
src/data/diagnosis.js
```

Ventajas:

- mobile y desktop usan exactamente el mismo contenido;
- evita divergencias;
- más fácil traducir;
- más fácil mantener;
- más fácil probar.

---

# 52. ESTADO DEL DIAGNÓSTICO

No usar estado global disperso por variables independientes si puede evitarse.

Propuesta conceptual:

```js
state = {
  currentQuestion: 0,
  answers: {
    goals: [],
    areas: [],
    currentProcess: [],
    impact: null
  },
  resultOpen: false,
  contactOpen: false
}
```

Mantenerlo simple.

No introducir Redux, stores ni frameworks.

---

# 53. LÓGICA DEL RESULTADO

Separar la lógica del DOM.

Ideal:

```text
diagnosis-engine.js
```

Función pura conceptual:

```js
buildDiagnosisResult(answers)
```

Entrada:

respuestas.

Salida:

objeto de resultado.

Esto permite probar la lógica sin abrir navegador.

---

# 54. N8N Y BACKEND

La landing puede conectarse posteriormente a n8n.

Arquitectura conceptual:

```text
Web Astro
   ↓
endpoint seguro
   ↓
n8n
   ↓
Email / CRM / Telegram / calendario / etc.
```

No meter credenciales de n8n en frontend.

No llamar directamente desde navegador a servicios con secretos.

---

# 55. FORMULARIOS FUTUROS

Si se añaden nombre/email al CTA final:

validar:

- nombre;
- email;
- consentimiento si aplica;
- errores;
- loading;
- éxito;
- fallo.

No enviar silenciosamente sin feedback.

---

# 56. DATOS PERSONALES Y RGPD

Cuando se capture información:

definir:

- qué datos se guardan;
- finalidad;
- dónde se almacenan;
- cuánto tiempo;
- política de privacidad;
- consentimiento cuando sea necesario.

No implementar almacenamiento “porque tenemos MySQL” sin definir antes el flujo.

---

# 57. MYSQL

El hosting de The Localhost dispone de MySQL.

Eso no obliga a usar MySQL para la primera versión.

El diagnóstico actual puede funcionar completamente en frontend.

Usar base de datos únicamente cuando exista una necesidad real:

- leads;
- histórico;
- usuarios;
- resultados;
- analítica propia;
- automatizaciones.

---

# 58. ASTRO Y HOSTING

Objetivo:

generar una web compatible con hosting estándar siempre que las funciones dinámicas no requieran servidor Astro.

Primera versión recomendable:

`output: static`

si todas las funciones públicas se pueden resolver de forma estática + endpoints externos.

No añadir SSR sin necesidad.

---

# 59. BUILD

Flujo esperado:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Salida:

```text
dist/
```

Después desplegar `dist/` al hosting.

---

# 60. ARCHIVOS ESTÁTICOS

Usar:

```text
public/
```

para recursos que deban copiarse sin procesar.

Usar `src/assets/` cuando interese que Astro procese el recurso.

Mantener rutas limpias.

---

# 61. ICONOS

El logo actual es SVG inline.

Mantenerlo como SVG.

Los iconos de UI también deberían ser:

- SVG inline;
- componentes Astro pequeños;
- o biblioteca de iconos seleccionados individualmente.

No cargar bibliotecas completas por 5 iconos.

---

# 62. SEO

Antes de publicar:

- title;
- description;
- canonical;
- robots;
- sitemap;
- Open Graph;
- favicon;
- `lang`;
- headings;
- enlaces;
- schema solo si corresponde;
- Lighthouse;
- Search Console.

---

# 63. CANONICAL

Una sola URL canónica para desktop/mobile.

Responsive no genera canonical separado.

---

# 64. JAVASCRIPT SIN ERRORES

En cada fase:

extraer/validar scripts.

Actualmente se ha comprobado:

- desktop actual: referencias `getElementById()` sin IDs inexistentes detectados;
- mobile actual: referencias `getElementById()` sin IDs inexistentes detectados.

Mantener esta disciplina.

---

# 65. VALIDACIÓN VISUAL

Cada componente migrado debe compararse contra el HTML original.

No esperar al final.

Orden:

```text
original
vs
Astro
```

Comparar:

- posición;
- tamaño;
- tipografía;
- color;
- opacidad;
- estados;
- animación;
- responsive.

---

# 66. VIEWPORTS DE PRUEBA

Mínimo:

## Mobile

- 320 × 568
- 360 × 640
- 375 × 667
- 390 × 844
- 393 × 852
- 430 × 932

## Tablet

- 768 × 1024
- 820 × 1180
- 1024 × 1366

## Desktop

- 1100 × 800
- 1280 × 800
- 1366 × 768
- 1440 × 900
- 1920 × 1080

Además probar landscape.

---

# 67. PRUEBA DEL BREAKPOINT

Comprobar especialmente:

```text
1098
1099
1100
1101
```

No debe existir:

- parpadeo;
- contenido cortado;
- salto extraño;
- mezcla entre layouts.

---

# 68. TEST DE HEADER MOBILE

Casos obligatorios:

1. cargar página;
2. terminar hero;
3. bajar;
4. aparece compact header;
5. seguir bajando;
6. abrir perfil;
7. cerrar;
8. volver arriba;
9. compact header desaparece;
10. header original reaparece;
11. no hay solapamiento.

---

# 69. TEST DEL HERO MOBILE

Comprobar:

- scroll bloqueado antes del final;
- progreso;
- secuencia;
- CTA;
- scroll manual después del desbloqueo;
- vuelta hacia arriba;
- estado del header;
- no se repite inicialización.

---

# 70. TEST DEL HERO DESKTOP

Comprobar:

- secuencia;
- visuales;
- contador aleatorio;
- barra;
- CTA;
- EMPEZAMOS;
- desbloqueo;
- scroll único;
- centrado exacto de objetivos.

---

# 71. TEST DE OBJETIVOS

Para cada una de las 6:

1. abrir;
2. centrar;
3. navegación anterior;
4. navegación siguiente;
5. cerrar;
6. sticky de método;
7. scroll hacia arriba;
8. autocierre;
9. viewport 1280;
10. viewport 1100.

---

# 72. TEST DEL MÉTODO

Comprobar:

- entrada centrada;
- barra de continuación;
- compactado;
- compensación de layout;
- diagnóstico visible;
- un solo scroll.

---

# 73. TEST DEL DIAGNÓSTICO

Probar todas las preguntas:

- selección múltiple;
- selección única;
- atrás;
- siguiente;
- opciones exclusivas;
- automatización que falla;
- bajo;
- medio;
- alto;
- crítico.

Probar varias combinaciones.

---

# 74. TEST DEL RESULTADO

Comprobar:

- máximo 2 oportunidades;
- textos coherentes;
- CTA;
- cerrar;
- volver;
- conservar respuestas;
- reabrir resultado.

---

# 75. TEST DE MODALES

Para cada modal:

- ratón;
- touch;
- teclado;
- Escape;
- backdrop;
- X;
- foco;
- scroll;
- móvil pequeño.

---

# 76. LIGHTHOUSE

Antes de sustituir la versión actual:

medir:

- Performance
- Accessibility
- Best Practices
- SEO

Guardar los resultados como referencia.

No publicar Astro si existe una regresión importante sin explicación.

---

# 77. CORE WEB VITALS

Especialmente:

- LCP
- CLS
- INP

Evitar que la componentización introduzca:

- JS adicional;
- layouts tardíos;
- fuentes tardías;
- animaciones bloqueantes.

---

# 78. ORDEN CORRECTO DE MIGRACIÓN

## Fase 0 — Congelar referencia

Guardar:

- desktop actual;
- mobile actual;
- fusion actual;
- capturas de referencia.

No modificar esos masters durante la migración.

---

## Fase 1 — Limpieza

Desktop:

- footer antiguo;
- HTML muerto;
- CSS muerto;
- funciones del logo obsoletas.

Mobile:

- función de alineación del logo;
- revisar modal height;
- semántica de H1.

---

## Fase 2 — Crear Astro mínimo

Crear proyecto.

Sin diseño todavía.

Añadir:

- BaseLayout
- global.css
- tokens
- index.

---

## Fase 3 — Logo y Header

Migrar:

- BrandLogo;
- HeaderDesktop;
- HeaderMobile;
- HeaderCompactMobile;
- LanguageMenu;
- AboutModal.

Validar.

---

## Fase 4 — Hero

Migrar hero desktop.

Validar.

Migrar hero mobile.

Validar.

---

## Fase 5 — Responsive real

Implementar breakpoint.

Comprobar:

- mobile;
- tablet;
- desktop.

Sin iframe.

---

## Fase 6 — Objetivos

Migrar sección desktop.

Una tarjeta primero.

Después generalizar las seis mediante datos.

---

## Fase 7 — Método

Migrar.

Comprobar centrado y compactado.

---

## Fase 8 — Diagnóstico

Crear datos compartidos.

Crear motor de lógica.

Crear UI.

Mobile y desktop deben usar la misma fuente de verdad.

---

## Fase 9 — Resultado + contacto

Migrar modales.

Validar accesibilidad.

---

## Fase 10 — SEO

Unificar `<head>`.

Canonical.

Meta.

OG.

---

## Fase 11 — Rendimiento

Build.

Lighthouse.

Reducir residuos.

---

## Fase 12 — QA

Matriz completa de dispositivos.

---

## Fase 13 — Deploy de prueba

Subir a entorno de staging o subcarpeta.

Nunca reemplazar producción directamente.

---

## Fase 14 — Producción

Solo cuando:

- visual igual;
- comportamientos iguales;
- Lighthouse correcto;
- enlaces correctos;
- formularios correctos;
- responsive probado.

---

# 79. GIT

Antes de empezar:

crear repo o rama específica.

Ejemplo conceptual:

```text
main
astro-migration
```

Commits pequeños.

Ejemplos:

```text
chore: create astro project structure
feat: migrate shared brand and header
feat: migrate mobile hero
feat: migrate desktop objectives
feat: migrate diagnosis engine
fix: preserve mobile compact header behavior
```

No hacer una migración completa en un solo commit.

---

# 80. REGLA DE ROLLBACK

Si algo deja de funcionar:

NO sustituir el comportamiento por otro más simple.

Comparar con el HTML maestro.

Entender por qué falla.

Corregir.

El prototipo actual es la referencia.

---

# 81. COSAS QUE NO DEBEMOS HACER

No:

- migrar `fusion.html` literalmente;
- usar iframe;
- usar Base64;
- duplicar mobile y desktop completos en el DOM;
- meter React sin necesidad;
- rediseñar durante la migración;
- cambiar breakpoint sin probar;
- eliminar lógica porque “en Astro es más sencillo”;
- inventar URLs;
- inventar teléfono;
- inventar booking;
- inventar traducción;
- meter IA en el diagnóstico;
- mover todo el CSS a global;
- dejar un único script gigantesco;
- bloquear la web si JS falla;
- eliminar código sin comprobar visualmente.

---

# 82. COSAS QUE SÍ DEBEMOS CONSEGUIR

Una única web Astro:

```text
thelocalhost.es
```

con:

- mismo diseño;
- mismo comportamiento;
- responsive inteligente;
- código limpio;
- componentes claros;
- diagnóstico compartido;
- SEO correcto;
- accesibilidad mejorada;
- JS reducido;
- sin duplicación innecesaria;
- preparada para crecer.

---

# 83. CRITERIO DE FINALIZACIÓN

La migración se considerará terminada cuando:

- [ ] mobile reproduce la experiencia actual;
- [ ] tablet reproduce la experiencia actual adaptada;
- [ ] desktop reproduce la experiencia actual;
- [ ] breakpoint 1100 funciona;
- [ ] header mobile compacto funciona al bajar/subir;
- [ ] hero desktop funciona;
- [ ] hero mobile funciona;
- [ ] objetivos funcionan;
- [ ] flechas funcionan;
- [ ] método funciona;
- [ ] diagnóstico funciona;
- [ ] resultado funciona;
- [ ] contacto funciona;
- [ ] modal About funciona;
- [ ] selector de idioma funciona;
- [ ] no hay IDs conflictivos;
- [ ] no hay JS duplicado;
- [ ] no hay footer viejo;
- [ ] no hay CSS muerto importante;
- [ ] un único H1 semántico;
- [ ] SEO unificado;
- [ ] navegación teclado correcta;
- [ ] modales accesibles;
- [ ] no hay overflow accidental;
- [ ] no hay saltos de layout;
- [ ] no hay errores en consola;
- [ ] build Astro sin errores;
- [ ] Lighthouse revisado;
- [ ] staging revisado;
- [ ] producción validada.

---

# 84. FILOSOFÍA DE IMPLEMENTACIÓN

La prioridad no es tener “código Astro bonito”.

La prioridad es:

1. no romper;
2. conservar UX;
3. simplificar solo cuando exista equivalencia;
4. documentar decisiones;
5. mantener una fuente de verdad;
6. comprobar cada paso.

---

# 85. FORMA DE TRABAJO

Trabajar siempre paso a paso.

Antes de tocar:

1. observar;
2. entender;
3. identificar dependencias;
4. valorar riesgo;
5. cambiar solo una cosa;
6. comprobar;
7. documentar.

No avanzar hasta validar el paso anterior.

---

# 86. REFERENCIA DE ESTADO AL CREAR ESTE DOCUMENTO

Fecha:

20 de agosto de 2026.

Archivos maestros en este momento:

```text
Desktop: ultima(65).html
Mobile/Tablet: mobile.html
Laboratorio fusionado: fusion.html
```

El archivo `fusion.html` sirve para pruebas visuales y responsive.

NO es la arquitectura final.

---

# 87. SIGUIENTE PASO RECOMENDADO

Antes de crear el proyecto Astro:

## PASO 1

Crear copias congeladas de:

```text
ultima(65).html
mobile.html
fusion.html
```

## PASO 2

Limpiar cuidadosamente desktop y mobile.

## PASO 3

Crear un handoff específico para Claude Code con:

- arquitectura Astro;
- nombres definitivos de componentes;
- orden exacto de implementación;
- restricciones;
- archivos maestros de referencia;
- checklist visual.

Solo entonces empezar la implementación.

---

# FIN DEL DOCUMENTO

Este archivo debe acompañar toda la migración a Astro y actualizarse cada vez que se tome una decisión estructural importante.
