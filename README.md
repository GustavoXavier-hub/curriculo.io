# curriculo.io

Site de currículo de Gustavo Xavier, desenvolvedor back-end Java.

O visual imita uma API: as seções aparecem como endpoints (`/sobre`, `/experiencia`, `/projetos`, `/stack`, `/formacao`, `/contato`) e o topo exibe uma "resposta" `200 OK` em JSON. Não há backend; é tudo estático.

## Estrutura

| Arquivo      | Conteúdo                                                         |
|--------------|------------------------------------------------------------------|
| `index.html` | Conteúdo do currículo                                            |
| `style.css`  | Estilos (tema escuro, layout responsivo, `prefers-reduced-motion`) |
| `script.js`  | Animação do JSON no topo e botão de copiar e-mail                |

## Rodando localmente

Basta abrir o `index.html` no navegador. Não há build nem dependências; as fontes vêm do Google Fonts.

## Atualizando

Ao mudar cargo, stack ou formação no `index.html`, atualize também o array `lines` no `script.js`, que monta o JSON exibido no topo.
