// Resposta da API digitada no carregamento
const lines = [
  ['{', 'p'],
  ['  "nome": "Gustavo Xavier",', 'kv'],
  ['  "cidade": "São Paulo, SP",', 'kv'],
  ['  "cargo": "Analista de TI · Avanade",', 'kv'],
  ['  "experiencia": "back-end Java desde 2021",', 'kv'],
  ['  "stack": ["Java", "Spring Boot", "SQL Server", "MongoDB"],', 'kv'],
  ['  "formacao": "ADS · UNIP + pós em Java",', 'kv'],
  ['  "github": "GustavoXavier-hub"', 'kv'],
  ['}', 'p']
];
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
function paint(line, type){
  if(type === 'p') return '<span class="p">'+esc(line)+'</span>';
  return esc(line)
    .replace(/^(\s*)("[^"]+")(:)/, '$1<span class="k">$2</span><span class="p">$3</span>')
    .replace(/(: )(.*)$/, (m,a,b)=> a + b.replace(/("[^"]*")/g,'<span class="s">$1</span>'));
}
const out = document.getElementById('json');
const full = lines.map(([l,t]) => paint(l,t)).join('\n');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce){ out.innerHTML = full; }
else{
  let i = 0;
  const tick = () => {
    out.innerHTML = lines.slice(0,i).map(([l,t]) => paint(l,t)).join('\n') + (i < lines.length ? '\n<span class="caret"></span>' : ' <span class="caret"></span>');
    if(i++ < lines.length) setTimeout(tick, 140);
  };
  tick();
}

// Copiar e-mail
const btn = document.getElementById('copy');
btn.addEventListener('click', async () => {
  try{
    await navigator.clipboard.writeText(document.getElementById('mail').textContent);
    btn.textContent = 'Copiado';
  }catch(e){
    btn.textContent = 'Selecione o texto';
  }
  setTimeout(()=> btn.textContent = 'Copiar', 2000);
});
