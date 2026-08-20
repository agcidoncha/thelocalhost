const concepts = {
  method: {
    title:'SKILL', tag:'PROCEDIMIENTO', definition:'Cómo quiero que haga algo.', remember:'SKILL = una receta reutilizable.',
    whyTitle:'Piensa en una receta.', why:'Claude ya puede razonar y usar herramientas. El Skill define el procedimiento: pasos, criterios, comprobaciones y orden.',
    example:'Ejemplo: “Antes de publicar una ficha WooCommerce, revisa SEO → estructura → stock → rendimiento”.',
    question:'¿Ese procedimiento necesita acceder a un sistema externo?',
    combo:['SKILL','USA','MCP'], comboText:'El Skill define cómo trabajar y el MCP abre la conexión que necesita.'
  },
  access: {
    title:'MCP', tag:'CONEXIÓN', definition:'Con qué me conecto.', remember:'MCP = acceso a sistemas o capacidades externas.',
    whyTitle:'Piensa en un enchufe.', why:'Un MCP no enseña el procedimiento. Abre una puerta hacia una herramienta, servicio o fuente externa.',
    example:'Ejemplo: Claude ↔ MCP WooCommerce ↔ tu tienda.',
    question:'¿También quieres que Claude siga una forma concreta de trabajar con esa conexión?',
    combo:['SKILL','USA','MCP'], comboText:'El MCP da acceso; el Skill decide cómo usar ese acceso correctamente.'
  },
  knowledge: {
    title:'DOCUMENTACIÓN', tag:'CONOCIMIENTO', definition:'Qué sabemos del proyecto.', remember:'DOCS = hechos, decisiones y contexto.',
    whyTitle:'Piensa en una biblioteca.', why:'La documentación guarda conocimiento: arquitectura, decisiones, estado, convenciones y referencias.',
    example:'Ejemplo: “La web usa Astro, estas son las decisiones SEO y este es el estado actual”.',
    question:'¿Quieres además definir cómo debe aplicarse esa información al ejecutar una tarea?',
    combo:['SKILL','CONSULTA','DOCS'], comboText:'La documentación aporta conocimiento; el Skill define cómo aplicarlo.'
  },
  rules: {
    title:'INSTRUCCIONES', tag:'REGLAS FIJAS', definition:'Qué debe cumplirse siempre.', remember:'INSTRUCCIONES = reglas permanentes del entorno.',
    whyTitle:'Piensa en las reglas de la casa.', why:'No se activan solo para una tarea concreta. Forman parte del marco general del proyecto o conversación.',
    example:'Ejemplo: “No cambies la arquitectura sin aprobación. Trabaja paso a paso”.',
    question:'¿Hay además una tarea concreta que necesite su propio procedimiento?',
    combo:['INSTRUCCIONES','CONDICIONAN','SKILL'], comboText:'Las instrucciones ponen los límites; el Skill resuelve una tarea dentro de ellos.'
  },
  automation: {
    title:'SCRIPT', tag:'AUTOMATIZACIÓN', definition:'Qué operación técnica quiero ejecutar.', remember:'SCRIPT = código que realiza una operación concreta.',
    whyTitle:'Piensa en un pequeño operario automático.', why:'Un script ejecuta de forma determinista una parte técnica: calcular, transformar, generar o comprobar algo.',
    example:'Ejemplo: calcular precios, transformar archivos o generar un PDF.',
    question:'¿Quieres que Claude sepa cuándo y cómo debe ejecutar ese script?',
    combo:['SKILL','EJECUTA','SCRIPT'], comboText:'El Skill define cuándo usarlo; el script realiza la operación técnica.'
  }
};

const startNode = document.getElementById('startNode');
const resultNode = document.getElementById('resultNode');
const questionNode = document.getElementById('questionNode');
const comboNode = document.getElementById('comboNode');
const whyPanel = document.getElementById('whyPanel');
const wires = document.getElementById('wires');
let current = null;

function show(el, visible){el.classList.toggle('hidden', !visible)}
function wire(a,b){
  const stage=document.getElementById('flowStage').getBoundingClientRect();
  const ar=a.getBoundingClientRect(), br=b.getBoundingClientRect();
  const x1=ar.left+ar.width/2-stage.left, y1=ar.bottom-stage.top;
  const x2=br.left+br.width/2-stage.left, y2=br.top-stage.top;
  const mid=(y1+y2)/2;
  const p=document.createElementNS('http://www.w3.org/2000/svg','path');
  p.setAttribute('d',`M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`);
  p.classList.add('hot'); wires.appendChild(p);
}
function redraw(){
  wires.innerHTML='';
  if(!resultNode.classList.contains('hidden')) wire(startNode,resultNode);
  if(!questionNode.classList.contains('hidden')) wire(resultNode,questionNode);
  if(!comboNode.classList.contains('hidden')) wire(questionNode,comboNode);
}
function selectConcept(key){
  current=concepts[key];
  document.getElementById('resultTag').textContent=current.tag;
  document.getElementById('resultTitle').textContent=current.title;
  document.getElementById('resultDefinition').textContent=current.definition;
  document.getElementById('resultRemember').textContent=current.remember;
  show(resultNode,true); show(questionNode,false); show(comboNode,false);
  whyPanel.classList.remove('open');
  requestAnimationFrame(redraw);
  setTimeout(()=>resultNode.scrollIntoView({behavior:'smooth',block:'center'}),80);
}

document.querySelectorAll('[data-choice]').forEach(btn=>btn.addEventListener('click',()=>selectConcept(btn.dataset.choice)));

document.getElementById('whyButton').addEventListener('click',()=>{
  document.getElementById('whyTag').textContent=current.title;
  document.getElementById('whyTitle').textContent=current.whyTitle;
  document.getElementById('whyText').textContent=current.why;
  document.getElementById('whyExample').textContent=current.example;
  whyPanel.classList.add('open'); whyPanel.setAttribute('aria-hidden','false');
});
document.getElementById('closeWhy').addEventListener('click',()=>{whyPanel.classList.remove('open');whyPanel.setAttribute('aria-hidden','true')});

document.getElementById('continueButton').addEventListener('click',()=>{
  document.getElementById('questionText').textContent=current.question;
  show(questionNode,true); show(comboNode,false); requestAnimationFrame(redraw);
  setTimeout(()=>questionNode.scrollIntoView({behavior:'smooth',block:'center'}),80);
});

document.querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{
  if(btn.dataset.answer==='yes'){
    const [a,v,b]=current.combo;
    document.getElementById('comboA').textContent=a;
    document.getElementById('comboVerb').textContent=v;
    document.getElementById('comboB').textContent=b;
    document.getElementById('comboExplanation').textContent=current.comboText;
    show(comboNode,true); requestAnimationFrame(redraw);
    setTimeout(()=>comboNode.scrollIntoView({behavior:'smooth',block:'center'}),80);
  } else restart();
}));

function restart(){
  current=null; show(resultNode,false); show(questionNode,false); show(comboNode,false); whyPanel.classList.remove('open'); wires.innerHTML='';
  startNode.scrollIntoView({behavior:'smooth',block:'center'});
}
document.getElementById('restartButton').addEventListener('click',restart);
window.addEventListener('resize',redraw);

const quiz = [
  {q:'“Quiero que Claude revise siempre SEO antes de publicar una ficha de producto.”',a:'SKILL',why:'Es un procedimiento repetible: define cómo hacer una tarea concreta.'},
  {q:'“Quiero que Claude pueda consultar los productos reales de WooCommerce.”',a:'MCP',why:'Necesitas acceso a un sistema externo. El MCP abre esa conexión.'},
  {q:'“Quiero guardar las decisiones que hemos tomado sobre la arquitectura de la tienda.”',a:'DOCS',why:'Eso es conocimiento del proyecto: hechos, decisiones y contexto.'},
  {q:'“En este proyecto nunca cambies la estructura sin aprobación.”',a:'INSTRUCCIONES',why:'Es una regla fija que debe condicionar todo el trabajo del proyecto.'},
  {q:'“Quiero ejecutar automáticamente un cálculo concreto sobre 500 precios.”',a:'SCRIPT',why:'Es una operación técnica determinista que puede resolver código ejecutable.'}
];
const labels=['SKILL','MCP','DOCS','INSTRUCCIONES','SCRIPT'];
let quizIndex=0;
const quizCase=document.getElementById('quizCase');
const quizOptions=document.getElementById('quizOptions');
const quizFeedback=document.getElementById('quizFeedback');
const quizNext=document.getElementById('quizNext');
const quizStep=document.getElementById('quizStep');
const quizBar=document.getElementById('quizBar');
function renderQuiz(){
  const item=quiz[quizIndex];
  quizCase.textContent=item.q; quizStep.textContent=`${quizIndex+1} / ${quiz.length}`; quizBar.style.width=`${((quizIndex+1)/quiz.length)*100}%`;
  quizFeedback.classList.add('hidden'); quizNext.classList.add('hidden'); quizOptions.innerHTML='';
  labels.forEach(label=>{const b=document.createElement('button');b.textContent=label;b.addEventListener('click',()=>answerQuiz(b,label));quizOptions.appendChild(b)});
}
function answerQuiz(button,label){
  const item=quiz[quizIndex];
  [...quizOptions.children].forEach(b=>{b.disabled=true;if(b.textContent===item.a)b.classList.add('correct')});
  if(label!==item.a)button.classList.add('wrong');
  quizFeedback.innerHTML=`<strong>${label===item.a?'Correcto.':'No exactamente.'}</strong> ${item.why}`;
  quizFeedback.classList.remove('hidden'); quizNext.textContent=quizIndex===quiz.length-1?'REPETIR ↺':'SIGUIENTE →';quizNext.classList.remove('hidden');
}
quizNext.addEventListener('click',()=>{quizIndex=quizIndex===quiz.length-1?0:quizIndex+1;renderQuiz()});
renderQuiz();

document.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.mode-nav button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  document.getElementById(btn.dataset.jump).scrollIntoView({behavior:'smooth',block:'start'});
}));
