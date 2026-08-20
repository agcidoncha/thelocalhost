/*
 * Motor de datos del diagnóstico — fuente única compartida entre desktop y
 * mobile. Extraído verbatim del motor original de desktop.html (el más
 * completo de los dos: pondera afinidad objetivo<->área en vez de una
 * prioridad fija), tal y como pide migracion-astro.md seccion 51.
 */

export const diagnosisLabels = {
          goal:{
            clientes:'Captar clientes',
            tiempo:'Ahorrar tiempo',
            respuesta:'Responder más rápido',
            organizacion:'Organizar mejor',
            repetitivas:'Automatizar tareas repetitivas'
          },
          area:{
            email:'Email',
            whatsapp:'WhatsApp',
            web:'Web / formularios',
            reservas:'Reservas / citas',
            facturacion:'Facturación',
            crm:'CRM / seguimiento',
            redes:'Redes sociales',
            otro:'Otro'
          },
          current:{
            manual:'Gestión manual',
            excel:'Datos en Excel',
            herramientas:'Información entre varias herramientas',
            falla:'Automatización que falla'
          },
          load:{
            poco:'Impacto bajo',
            semana:'Impacto medio',
            dia:'Impacto alto',
            serio:'Impacto crítico'
          }
        };

export const areaResults = {
          email:'Podríamos automatizar la entrada de correos, clasificarlos, registrar la información importante y avisarte solo cuando necesites intervenir.',
          whatsapp:'Podríamos ordenar las consultas que llegan por WhatsApp, registrar cada contacto y automatizar respuestas, avisos o seguimientos.',
          web:'Podríamos hacer que los formularios y contactos de la web entren directamente en un sistema organizado y activen automáticamente el siguiente paso.',
          reservas:'Podríamos automatizar solicitudes de cita, confirmaciones, recordatorios, cancelaciones y recuperación de huecos libres.',
          facturacion:'Podríamos reducir tareas manuales en facturación, generación de documentos, avisos, registro y seguimiento de pagos.',
          crm:'Podríamos registrar automáticamente los contactos, actualizar estados, crear seguimientos y evitar que oportunidades se queden olvidadas.',
          redes:'Podríamos centralizar los contactos que llegan desde redes y convertirlos en oportunidades organizadas con seguimiento.',
          otro:'Parece que hay un proceso que merece estudiarse. Analizaríamos qué partes son repetitivas, qué herramientas intervienen y dónde tiene sentido automatizar.'
        };

export const currentResults = {
          manual:'Ahora mismo hay demasiado trabajo manual en el proceso. Empezaríamos identificando qué pasos pueden ejecutarse automáticamente sin complicar la operativa.',
          excel:'La información podría centralizarse y dejar de depender de actualizaciones manuales, manteniendo solo los controles que realmente necesiten intervención.',
          herramientas:'El principal margen de mejora está en conectar mejor los sistemas que ya utilizas para que los datos pasen de uno a otro sin duplicar trabajo.',
          falla:'Antes de añadir nada nuevo, revisaríamos el flujo actual para localizar dónde está fallando y decidir si conviene repararlo, simplificarlo o rehacer solo la parte problemática.'
        };

export const goalResults = {
          clientes:'El foco estaría en no perder oportunidades y hacer mejor seguimiento desde que entra un contacto hasta que requiere una acción comercial.',
          tiempo:'El objetivo sería reducir pasos repetitivos y tiempo administrativo para que solo tengas que intervenir donde realmente aportas valor.',
          respuesta:'El foco estaría en reducir el tiempo entre que entra una solicitud y la persona recibe una respuesta o el equipo sabe que tiene que intervenir.',
          organizacion:'El objetivo sería tener la información centralizada y saber siempre en qué estado está cada caso, sin buscar datos entre herramientas.',
          repetitivas:'Buscaríamos eliminar los pasos que hoy se repiten una y otra vez y dejar automatizado todo lo que no necesita una decisión humana.'
        };

        /*
          Matriz simple de afinidad objetivo ↔ área.
          No inventa un diagnóstico: solo decide qué dos áreas ya elegidas
          por el visitante conviene mostrar primero cuando ha marcado más de dos.
        */
export const areaGoalScores = {
          clientes:{email:3,whatsapp:4,web:5,reservas:3,facturacion:1,crm:5,redes:4,otro:2},
          tiempo:{email:4,whatsapp:4,web:3,reservas:5,facturacion:5,crm:4,redes:2,otro:2},
          respuesta:{email:5,whatsapp:5,web:4,reservas:4,facturacion:2,crm:3,redes:3,otro:2},
          organizacion:{email:4,whatsapp:3,web:3,reservas:4,facturacion:4,crm:5,redes:2,otro:2},
          repetitivas:{email:4,whatsapp:4,web:3,reservas:5,facturacion:5,crm:4,redes:3,otro:2}
        };

export const priorityResults = {
          poco:{
            label:'Impacto bajo',
            headline:'Hay margen de mejora, aunque el proceso sigue siendo manejable.',
            text:'Por el impacto que indicas, el proceso se puede gestionar hoy, aunque existe margen para simplificarlo si compensa el esfuerzo.'
          },
          semana:{
            label:'Impacto medio',
            headline:'Hay una oportunidad clara de mejora.',
            text:'Si este proceso te quita varias horas cada semana, ya existe margen suficiente para estudiar una mejora con impacto real.'
          },
          dia:{
            label:'Impacto alto',
            headline:'Este proceso tiene una prioridad alta.',
            text:'Si este proceso te quita varias horas al día, lo consideraríamos una prioridad alta porque el margen de mejora puede ser significativo.'
          },
          serio:{
            label:'Impacto crítico',
            headline:'Este proceso merece revisarse cuanto antes.',
            text:'Si ya provoca bloqueos, errores o pérdida de seguimiento, conviene analizar primero la causa y después cambiar solo aquello que realmente resuelva el problema.'
          }
        };

