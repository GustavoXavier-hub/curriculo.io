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
